/**
 * Metrics แบบ Prometheus (เขียนเอง) — Counter / Gauge / Histogram + รูปแบบ text exposition ที่ Grafana/Prometheus อ่านได้เลย
 *
 *   app.use(metrics())                    // เปิด GET /metrics + นับทุก request (METRICS=1 ใน createApp)
 *
 *   import { registry } from '@core/metrics'
 *   const orders = registry.counter('orders_total', 'จำนวนออเดอร์', ['status'])
 *   orders.inc({ status: 'paid' })
 *
 * ต้นทุนต่อ request ~0.2µs (บวกตัวนับ + หา bucket ของ histogram) จึงเปิดเป็น opt-in ไม่กระทบ benchmark
 * label ของ route ใช้ pattern (/users/:id) ไม่ใช่ URL จริง — กัน cardinality ระเบิด
 */
import type { App } from './server'

type Labels = Record<string, string | number>

const esc = (v: string) => v.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"')
const keyOf = (names: string[], labels: Labels = {}) => names.map((n) => String(labels[n] ?? '')).join('\u0001')
const fmtLabels = (names: string[], key: string, extra = '') => {
  const vals = key.split('\u0001')
  const parts = names.map((n, i) => `${n}="${esc(vals[i] ?? '')}"`)
  if (extra) parts.push(extra)
  return parts.length ? `{${parts.join(',')}}` : ''
}

abstract class Metric {
  constructor(
    readonly name: string,
    readonly help: string,
    readonly labelNames: string[],
  ) {}
  abstract render(): string[]
  protected header(type: string) {
    return [`# HELP ${this.name} ${this.help}`, `# TYPE ${this.name} ${type}`]
  }
}

export class Counter extends Metric {
  private values = new Map<string, number>()
  inc(labels?: Labels, by = 1) {
    const k = keyOf(this.labelNames, labels)
    this.values.set(k, (this.values.get(k) ?? 0) + by)
  }
  get(labels?: Labels) {
    return this.values.get(keyOf(this.labelNames, labels)) ?? 0
  }
  render() {
    return [...this.header('counter'), ...[...this.values].map(([k, v]) => `${this.name}${fmtLabels(this.labelNames, k)} ${v}`)]
  }
}

export class Gauge extends Metric {
  private values = new Map<string, number>()
  /** ฟังก์ชันที่อ่านค่าตอนถูก scrape (ไม่ต้องอัปเดตเอง) */
  collect?: () => number | Map<string, number>
  set(value: number, labels?: Labels) {
    this.values.set(keyOf(this.labelNames, labels), value)
  }
  inc(labels?: Labels, by = 1) {
    const k = keyOf(this.labelNames, labels)
    this.values.set(k, (this.values.get(k) ?? 0) + by)
  }
  render() {
    const out = this.header('gauge')
    if (this.collect) {
      const v = this.collect()
      if (typeof v === 'number') out.push(`${this.name} ${v}`)
      else for (const [k, n] of v) out.push(`${this.name}${fmtLabels(this.labelNames, k)} ${n}`)
    }
    for (const [k, v] of this.values) out.push(`${this.name}${fmtLabels(this.labelNames, k)} ${v}`)
    return out
  }
}

export const DEFAULT_BUCKETS = [0.0005, 0.001, 0.0025, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5]

export class Histogram extends Metric {
  private series = new Map<string, { counts: number[]; sum: number; count: number }>()
  constructor(
    name: string,
    help: string,
    labelNames: string[],
    readonly buckets = DEFAULT_BUCKETS,
  ) {
    super(name, help, labelNames)
  }
  observe(value: number, labels?: Labels) {
    const k = keyOf(this.labelNames, labels)
    let s = this.series.get(k)
    if (!s) this.series.set(k, (s = { counts: new Array(this.buckets.length).fill(0), sum: 0, count: 0 }))
    s.sum += value
    s.count++
    for (let i = 0; i < this.buckets.length; i++) {
      if (value <= this.buckets[i]!) {
        s.counts[i]!++
        break
      }
    }
  }
  /** ค่าประมาณ percentile (0–1) จาก bucket — ใช้ในหน้า admin */
  quantile(q: number, labels?: Labels): number | null {
    const s = this.series.get(keyOf(this.labelNames, labels))
    if (!s || !s.count) return null
    const target = q * s.count
    let acc = 0
    for (let i = 0; i < this.buckets.length; i++) {
      acc += s.counts[i]!
      if (acc >= target) return this.buckets[i]!
    }
    return Infinity
  }
  render() {
    const out = this.header('histogram')
    for (const [k, s] of this.series) {
      let acc = 0
      this.buckets.forEach((le, i) => {
        acc += s.counts[i]!
        out.push(`${this.name}_bucket${fmtLabels(this.labelNames, k, `le="${le}"`)} ${acc}`)
      })
      out.push(`${this.name}_bucket${fmtLabels(this.labelNames, k, 'le="+Inf"')} ${s.count}`)
      out.push(`${this.name}_sum${fmtLabels(this.labelNames, k)} ${s.sum}`)
      out.push(`${this.name}_count${fmtLabels(this.labelNames, k)} ${s.count}`)
    }
    return out
  }
}

export class Registry {
  private metrics = new Map<string, Metric>()
  private add<T extends Metric>(m: T): T {
    if (this.metrics.has(m.name)) return this.metrics.get(m.name) as T
    this.metrics.set(m.name, m)
    return m
  }
  counter(name: string, help: string, labels: string[] = []) {
    return this.add(new Counter(name, help, labels))
  }
  gauge(name: string, help: string, labels: string[] = []) {
    return this.add(new Gauge(name, help, labels))
  }
  histogram(name: string, help: string, labels: string[] = [], buckets?: number[]) {
    return this.add(new Histogram(name, help, labels, buckets))
  }
  render(): string {
    return [...this.metrics.values()].flatMap((m) => m.render()).join('\n') + '\n'
  }
  clear() {
    this.metrics.clear()
  }
}

/** registry กลางของแอพ */
export const registry = new Registry()

export type MetricsOptions = { path?: string; registry?: Registry; extra?: () => Record<string, number> }

export const metrics =
  ({ path = '/metrics', registry: reg = registry }: MetricsOptions = {}) =>
  (app: App) => {
    const requests = reg.counter('http_requests_total', 'จำนวน request ทั้งหมด', ['method', 'route', 'status'])
    const duration = reg.histogram('http_request_duration_seconds', 'เวลาที่ใช้ตอบ request (วินาที)', ['method', 'route'])
    reg.gauge('http_requests_in_flight', 'request ที่กำลังประมวลผล').collect = () => app.inflight
    reg.gauge('process_resident_memory_bytes', 'RAM ที่ process ใช้จริง').collect = () => process.memoryUsage().rss
    reg.gauge('process_uptime_seconds', 'เวลาที่ process ทำงานมา').collect = () => Math.round(process.uptime())
    reg.gauge('app_draining', '1 = กำลังปิดระบบ').collect = () => (app.draining ? 1 : 0)

    app.onResponse((ctx, res) => {
      if (ctx.path === path) return
      const route = ctx.route ?? 'unmatched'
      const method = ctx.request.method
      requests.inc({ method, route, status: res.status })
      duration.observe((Bun.nanoseconds() - ctx.t0) / 1e9, { method, route })
    })

    app.get(path, ({ set }) => {
      set.headers['content-type'] = 'text/plain; version=0.0.4; charset=utf-8'
      return reg.render()
    })
  }
