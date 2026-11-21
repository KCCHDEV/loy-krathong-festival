/**
 * Load balancer / reverse proxy (เขียนเอง) — กระจายคำขอไปหลาย instance ของแอพ
 *
 *   const lb = new LoadBalancer({ upstreams: ['http://127.0.0.1:3001', { url: 'http://127.0.0.1:3002', weight: 2 }] })
 *   await lb.start()                    // ตรวจสุขภาพรอบแรก + เริ่มตรวจเป็นระยะ
 *   lb.listen({ port: 3000 })
 *
 * หรือรันทั้งชุด (supervisor + worker หลาย process + LB):  bun run lb
 *
 * ทำอะไรให้บ้าง
 *  - อัลกอริทึม: round-robin ถ่วงน้ำหนัก (smooth, แบบเดียวกับ nginx) · least-connections · ip-hash (เหนียวต่อ client) · random
 *  - health check แบบ active (GET /readyz ทุก 2 วิ) + passive (เจอ connection ล้มเหลว → พักตัวนั้นชั่วคราว)
 *    instance ที่กำลังปิด (readyz = 503) จึงหลุดจากวงจรเองก่อนที่จะหยุดจริง
 *  - retry ไป instance อื่นเมื่อ connect ไม่ได้/ตอบ 502-504 (เฉพาะ GET/HEAD/OPTIONS ที่ไม่มี body เท่านั้น — ไม่เสี่ยงทำซ้ำ POST)
 *  - ส่งต่อ header: X-Forwarded-For/Proto/Host, X-Request-Id · ตัด hop-by-hop header
 *  - สตรีมจริง: SSE / response ใหญ่ไม่ถูกเก็บไว้ในหน่วยความจำ · client หลุด = ตัดการเชื่อมต่อฝั่ง upstream ด้วย
 *  - WebSocket: เปิดการเชื่อมต่อไป upstream แล้วส่งข้อความสองทาง
 *  - GET /__lb/status สถานะของแต่ละ upstream (ตั้ง statusKey เพื่อบังคับ x-api-key)
 *
 * หมายเหตุ: LB เพิ่มหนึ่ง hop ต่อ request (ช้าลงต่อ request) แต่ใช้ได้ทุก core บนทุก OS รวม Windows ที่ reusePort ใช้ไม่ได้
 * แอพหลังบ้านต้องเปิด TRUST_PROXY=1 เพื่ออ่าน IP จริงจาก X-Forwarded-For
 */
import type { Server, ServerWebSocket } from 'bun'
import { newRequestId } from './server'

export type Strategy = 'round-robin' | 'least-connections' | 'ip-hash' | 'random'
export type UpstreamSpec = string | { url: string; weight?: number }

export type LoadBalancerOptions = {
  upstreams: UpstreamSpec[]
  strategy?: Strategy
  /** path ที่ใช้ตรวจสุขภาพ (ค่าเริ่มต้น /readyz) */
  healthPath?: string
  healthIntervalMs?: number
  healthTimeoutMs?: number
  /** ล้มติดกันกี่ครั้งถึงตัดออกจากวงจร / สำเร็จติดกันกี่ครั้งถึงเอากลับ */
  unhealthyThreshold?: number
  healthyThreshold?: number
  /** รอ header ตอบกลับจาก upstream ได้นานสุด (ms) */
  timeoutMs?: number
  /** จำนวนครั้งที่ลอง upstream อื่นเพิ่ม (เฉพาะคำขอที่ปลอดภัยต่อการทำซ้ำ) */
  retries?: number
  /** พัก upstream ที่เจอ connection ล้มเหลวนานเท่าไร (ms) */
  cooldownMs?: number
  trustProxy?: boolean
  statusPath?: string
  statusKey?: string
  /** ใส่ header X-Upstream บอกว่าตอบจากตัวไหน (debug) */
  exposeUpstream?: boolean
}

export type UpstreamState = {
  url: string
  weight: number
  healthy: boolean
  active: number
  total: number
  failures: number
  lastError?: string
  lastCheckAt?: number
  downSince?: number
}

type Node = UpstreamState & { origin: URL; current: number; okStreak: number; failStreak: number; cooldownUntil: number }

const HOP = new Set(['connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'host', 'content-length-ignored'])
const SAFE = new Set(['GET', 'HEAD', 'OPTIONS'])

/** hash เร็วๆ ที่กระจายดี (FNV-1a 32 บิต) */
export function fnv1a(text: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

type WsData = { target: string; headers: Record<string, string>; up?: WebSocket; queue: (string | Buffer)[]; node: Node }

export class LoadBalancer {
  readonly nodes: Node[]
  private strategy: Strategy
  private opts: Required<Omit<LoadBalancerOptions, 'upstreams' | 'statusKey'>> & { statusKey?: string }
  private timer?: ReturnType<typeof setInterval>
  server?: Server<WsData>
  draining = false
  stats = { requests: 0, retries: 0, noUpstream: 0, badGateway: 0 }

  constructor(options: LoadBalancerOptions) {
    if (!options.upstreams.length) throw new Error('LoadBalancer: ต้องมี upstream อย่างน้อย 1 ตัว')
    this.strategy = options.strategy ?? 'round-robin'
    this.opts = {
      strategy: this.strategy,
      healthPath: options.healthPath ?? '/readyz',
      healthIntervalMs: options.healthIntervalMs ?? 2000,
      healthTimeoutMs: options.healthTimeoutMs ?? 1000,
      unhealthyThreshold: options.unhealthyThreshold ?? 2,
      healthyThreshold: options.healthyThreshold ?? 1,
      timeoutMs: options.timeoutMs ?? 30_000,
      retries: options.retries ?? 1,
      cooldownMs: options.cooldownMs ?? 5000,
      trustProxy: options.trustProxy ?? false,
      statusPath: options.statusPath ?? '/__lb/status',
      statusKey: options.statusKey,
      exposeUpstream: options.exposeUpstream ?? false,
    }
    this.nodes = options.upstreams.map((u) => {
      const spec = typeof u === 'string' ? { url: u } : u
      return { url: spec.url, origin: new URL(spec.url), weight: spec.weight ?? 1, healthy: true, active: 0, total: 0, failures: 0, current: 0, okStreak: 0, failStreak: 0, cooldownUntil: 0 }
    })
  }

  // ───── สุขภาพ ─────

  private markFailure(n: Node, error: string) {
    n.failures++
    n.lastError = error
    n.cooldownUntil = Date.now() + this.opts.cooldownMs
    n.okStreak = 0
    if (++n.failStreak >= this.opts.unhealthyThreshold && n.healthy) {
      n.healthy = false
      n.downSince = Date.now()
    }
  }

  private markSuccess(n: Node) {
    n.failStreak = 0
    if (++n.okStreak >= this.opts.healthyThreshold && !n.healthy) {
      n.healthy = true
      n.downSince = undefined
    }
  }

  async checkOne(n: Node): Promise<boolean> {
    n.lastCheckAt = Date.now()
    try {
      const res = await fetch(new URL(this.opts.healthPath, n.origin), { signal: AbortSignal.timeout(this.opts.healthTimeoutMs), redirect: 'manual', headers: { 'user-agent': 'kitsune-lb-health' } })
      void res.body?.cancel()
      if (res.status >= 200 && res.status < 300) {
        this.markSuccess(n)
        n.cooldownUntil = 0
        return true
      }
      this.markFailure(n, `health ${res.status}`)
    } catch (err) {
      this.markFailure(n, err instanceof Error ? err.message : String(err))
    }
    return false
  }

  /** ตรวจทุก upstream ทันที (ใช้ตอนเริ่มและในเทส) */
  async checkAll(): Promise<void> {
    await Promise.all(this.nodes.map((n) => this.checkOne(n)))
  }

  async start(): Promise<this> {
    await this.checkAll()
    this.timer = setInterval(() => void this.checkAll(), this.opts.healthIntervalMs)
    this.timer.unref?.()
    return this
  }

  stop() {
    clearInterval(this.timer)
  }

  // ───── เลือก upstream ─────

  private eligible(exclude?: Set<Node>): Node[] {
    const now = Date.now()
    const list = this.nodes.filter((n) => n.healthy && n.cooldownUntil <= now && !exclude?.has(n))
    // ทุกตัวอยู่ในช่วงพัก/ล้ม → ยังต้องลองสักตัวดีกว่าตอบ 503 ทันที (ตัวที่ไม่ได้ถูกตัดทิ้งเพราะ health)
    return list.length ? list : this.nodes.filter((n) => n.healthy && !exclude?.has(n))
  }

  pick(ip: string, exclude?: Set<Node>): Node | null {
    const list = this.eligible(exclude)
    if (!list.length) return null
    if (list.length === 1) return list[0]!

    switch (this.strategy) {
      case 'ip-hash':
        return list[fnv1a(ip) % list.length]!
      case 'random': {
        let r = Math.random() * list.reduce((s, n) => s + n.weight, 0)
        for (const n of list) if ((r -= n.weight) < 0) return n
        return list[0]!
      }
      case 'least-connections': {
        let best = list[0]!
        for (const n of list) if (n.active / n.weight < best.active / best.weight) best = n
        return best
      }
      default: {
        // smooth weighted round-robin
        let total = 0
        let best: Node | null = null
        for (const n of list) {
          n.current += n.weight
          total += n.weight
          if (!best || n.current > best.current) best = n
        }
        best!.current -= total
        return best
      }
    }
  }

  // ───── ส่งต่อ ─────

  private clientIp(req: Request, server?: Server<any>): string {
    if (this.opts.trustProxy) {
      const xff = req.headers.get('x-forwarded-for')
      if (xff) return xff.split(',')[0]!.trim()
    }
    return server?.requestIP(req)?.address ?? 'unknown'
  }

  private forwardHeaders(req: Request, ip: string): Headers {
    const h = new Headers()
    for (const [k, v] of req.headers) if (!HOP.has(k)) h.set(k, v)
    const prior = this.opts.trustProxy ? req.headers.get('x-forwarded-for') : null
    h.set('x-forwarded-for', prior ? `${prior}, ${ip}` : ip)
    h.set('x-forwarded-proto', new URL(req.url).protocol.replace(':', ''))
    h.set('x-forwarded-host', req.headers.get('host') ?? new URL(req.url).host)
    if (!h.has('x-request-id')) h.set('x-request-id', newRequestId())
    return h
  }

  async proxy(req: Request, server?: Server<any>): Promise<Response> {
    this.stats.requests++
    const url = new URL(req.url)
    const ip = this.clientIp(req, server)
    const headers = this.forwardHeaders(req, ip)
    const hasBody = req.body !== null && !SAFE.has(req.method)
    const canRetry = SAFE.has(req.method) && !hasBody
    const tried = new Set<Node>()

    for (let attempt = 0; ; attempt++) {
      const node = this.pick(ip, tried)
      if (!node) {
        this.stats.noUpstream++
        return Response.json({ error: 'ไม่มี instance ที่พร้อมรับงาน' }, { status: 503, headers: { 'retry-after': '1' } })
      }
      tried.add(node)
      node.active++
      node.total++
      const ac = new AbortController()
      const timer = setTimeout(() => ac.abort(new Error('upstream timeout')), this.opts.timeoutMs)
      let release = true

      try {
        const target = new URL(url.pathname + url.search, node.origin)
        const res = await fetch(target, {
          method: req.method,
          headers,
          body: hasBody ? req.body : undefined,
          redirect: 'manual',
          signal: AbortSignal.any([req.signal, ac.signal]),
          decompress: false, // ส่ง byte บีบอัดต่อไปทั้งก้อน ไม่แกะแล้วบีบใหม่
          duplex: 'half',
        } as RequestInit)
        clearTimeout(timer)

        if (canRetry && attempt < this.opts.retries && (res.status === 502 || res.status === 503 || res.status === 504)) {
          void res.body?.cancel()
          this.markFailure(node, `upstream ${res.status}`)
          this.stats.retries++
          continue
        }
        this.markSuccess(node)

        const out = new Headers()
        for (const [k, v] of res.headers) if (!HOP.has(k)) out.append(k, v)
        if (this.opts.exposeUpstream) out.set('x-upstream', node.url)

        // response ที่ไม่รู้ขนาด (SSE/chunked) ถือว่า connection ยัง active จนกว่าจะจบ — นับให้ least-connections ถูก
        if (res.body && !res.headers.has('content-length')) {
          release = false
          const reader = res.body.getReader()
          const body = new ReadableStream<Uint8Array>({
            async pull(controller) {
              try {
                const { done, value } = await reader.read()
                if (done) {
                  controller.close()
                  node.active--
                } else controller.enqueue(value)
              } catch (err) {
                node.active--
                controller.error(err)
              }
            },
            cancel(reason) {
              node.active--
              return reader.cancel(reason)
            },
          })
          return new Response(body, { status: res.status, statusText: res.statusText, headers: out })
        }
        return new Response(res.body, { status: res.status, statusText: res.statusText, headers: out })
      } catch (err) {
        clearTimeout(timer)
        if (req.signal.aborted) return new Response(null, { status: 499 }) // client ไปแล้ว
        this.markFailure(node, err instanceof Error ? err.message : String(err))
        if (canRetry && attempt < this.opts.retries) {
          this.stats.retries++
          continue
        }
        this.stats.badGateway++
        return Response.json({ error: 'ติดต่อ instance หลังบ้านไม่ได้' }, { status: 502 })
      } finally {
        if (release) node.active--
      }
    }
  }

  status() {
    return {
      strategy: this.strategy,
      draining: this.draining,
      stats: this.stats,
      upstreams: this.nodes.map(({ url, weight, healthy, active, total, failures, lastError, lastCheckAt, downSince }): UpstreamState => ({ url, weight, healthy, active, total, failures, lastError, lastCheckAt, downSince })),
    }
  }

  // ───── เซิร์ฟเวอร์ ─────

  fetch(req: Request, server: Server<WsData>): Response | Promise<Response> | undefined {
    const path = new URL(req.url).pathname
    if (path === this.opts.statusPath) {
      if (this.opts.statusKey && req.headers.get('x-api-key') !== this.opts.statusKey) return Response.json({ error: 'unauthorized' }, { status: 401 })
      return Response.json(this.status())
    }
    if (this.draining) return Response.json({ error: 'กำลังปิดระบบ' }, { status: 503, headers: { connection: 'close' } })

    if (req.headers.get('upgrade')?.toLowerCase() === 'websocket') {
      const ip = this.clientIp(req, server)
      const node = this.pick(ip)
      if (!node) return Response.json({ error: 'ไม่มี instance ที่พร้อมรับงาน' }, { status: 503 })
      const u = new URL(req.url)
      const target = new URL(u.pathname + u.search, node.origin)
      target.protocol = target.protocol === 'https:' ? 'wss:' : 'ws:'
      const headers: Record<string, string> = {}
      for (const name of ['cookie', 'authorization', 'origin', 'user-agent', 'sec-websocket-protocol']) {
        const v = req.headers.get(name)
        if (v) headers[name] = v
      }
      headers['x-forwarded-for'] = ip
      headers['x-forwarded-host'] = req.headers.get('host') ?? u.host
      if (server.upgrade(req, { data: { target: target.toString(), headers, queue: [], node } })) return undefined
      return new Response('upgrade ล้มเหลว', { status: 400 })
    }
    return this.proxy(req, server)
  }

  listen({ port = 3000, hostname }: { port?: number; hostname?: string } = {}): Server<WsData> {
    this.server = Bun.serve<WsData>({
      port,
      hostname,
      idleTimeout: 60,
      fetch: (req, server) => this.fetch(req, server),
      websocket: {
        open: (ws: ServerWebSocket<WsData>) => {
          const d = ws.data
          d.node.active++
          const up = new WebSocket(d.target, { headers: d.headers } as any)
          d.up = up
          up.binaryType = 'nodebuffer' as BinaryType
          up.onopen = () => d.queue.splice(0).forEach((m) => up.send(m))
          up.onmessage = (e) => ws.send(e.data as any)
          up.onclose = () => ws.close()
          up.onerror = () => ws.close()
        },
        message: (ws: ServerWebSocket<WsData>, msg) => {
          const up = ws.data.up
          if (up && up.readyState === WebSocket.OPEN) up.send(msg)
          else ws.data.queue.push(msg)
        },
        close: (ws: ServerWebSocket<WsData>) => {
          ws.data.node.active--
          ws.data.up?.close()
        },
      },
    })
    return this.server
  }

  /** ปิดแบบสุภาพ: ตอบ 503 กับคำขอใหม่ รอที่ค้างอยู่ แล้วปิด */
  async shutdown(timeoutMs = 10_000) {
    this.draining = true
    this.stop()
    void this.server?.stop(false)
    const end = Date.now() + timeoutMs
    while (this.nodes.some((n) => n.active > 0) && Date.now() < end) await Bun.sleep(20)
    await this.server?.stop(true)
  }
}
