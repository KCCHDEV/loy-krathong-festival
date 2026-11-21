/**
 * จำกัดจำนวนคำขอต่อช่วงเวลา (rate limit) — กัน brute force / scraping / ผู้ใช้คนเดียวกินทรัพยากรทั้งระบบ
 *
 *   app.use(rateLimit({ windowMs: 60_000, max: 120 }))                       // ต่อ IP ทุก path
 *   app.use(rateLimit({ rules: [
 *     { path: '/api/auth', max: 10, windowMs: 60_000 },                      // เข้มกว่าสำหรับ login
 *     { path: '/api/',     max: 300, windowMs: 60_000 },
 *   ], skip: ['/public/', '/api/bench/'] }))
 *
 * อัลกอริทึม: sliding window แบบประมาณ (ผสมหน้าต่างปัจจุบันกับหน้าต่างก่อนหน้า ถ่วงน้ำหนักตามเวลา)
 * — แม่นกว่า fixed window (ไม่ยอมให้ยิงสองเท่าตรงรอยต่อ) และเก็บแค่ 2 ตัวเลขต่อ key
 * เก็บใน memory ของแต่ละ process (หลาย worker = แต่ละตัวนับเอง → limit จริง ≈ max × จำนวน worker
 * ถ้าต้องการแม่นข้าม worker ให้จำกัดที่ load balancer: ดู core/lb.ts)
 */
import type { App, Context } from './server'

export type RateRule = {
  /** ใช้กับ path ที่ขึ้นต้นด้วยค่านี้ (ไม่ใส่ = ทุก path) */
  path?: string
  max: number
  windowMs: number
}

export type RateLimitOptions = Partial<RateRule> & {
  rules?: RateRule[]
  /** path ที่ข้ามไม่นับ (ขึ้นต้นด้วย) */
  skip?: string[]
  /** key ที่ใช้นับ — ค่าเริ่มต้น IP (ctx.ip) */
  key?: (ctx: Context) => string
  /** ใส่ header RateLimit-* ในคำตอบปกติด้วย (ค่าเริ่มต้น: ใส่เฉพาะตอนโดนจำกัด เพื่อไม่เพิ่ม header ทุก request) */
  headers?: boolean
}

type Bucket = { windowStart: number; count: number; prev: number }

export class Limiter {
  private buckets = new Map<string, Bucket>()
  constructor(
    readonly max: number,
    readonly windowMs: number,
  ) {}

  /** นับ 1 ครั้ง · คืน { allowed, remaining, retryAfterMs } */
  hit(key: string, now = Date.now()): { allowed: boolean; remaining: number; retryAfterMs: number } {
    let b = this.buckets.get(key)
    if (!b) this.buckets.set(key, (b = { windowStart: now, count: 0, prev: 0 }))

    const elapsed = now - b.windowStart
    if (elapsed >= this.windowMs) {
      // ขยับหน้าต่าง: ถ้าผ่านไปเกิน 2 หน้าต่างแล้ว หน้าต่างก่อนหน้าเป็น 0
      b.prev = elapsed >= this.windowMs * 2 ? 0 : b.count
      b.count = 0
      b.windowStart += Math.floor(elapsed / this.windowMs) * this.windowMs
    }

    const weight = 1 - (now - b.windowStart) / this.windowMs
    const used = b.prev * weight + b.count
    if (used + 1 > this.max) {
      // รอจนกว่าส่วนของหน้าต่างก่อนหน้าจะลดลงพอ (ประมาณ) อย่างน้อย 1 วินาที
      const need = used + 1 - this.max
      const retryAfterMs = b.prev > 0 ? Math.min(this.windowMs, Math.max(1000, (need / b.prev) * this.windowMs)) : Math.max(1000, this.windowMs - (now - b.windowStart))
      return { allowed: false, remaining: 0, retryAfterMs }
    }
    b.count++
    return { allowed: true, remaining: Math.max(0, Math.floor(this.max - used - 1)), retryAfterMs: 0 }
  }

  /** ลบ key ที่ไม่ได้ใช้เกิน 2 หน้าต่าง */
  sweep(now = Date.now()): number {
    let n = 0
    for (const [k, b] of this.buckets) {
      if (now - b.windowStart >= this.windowMs * 2) {
        this.buckets.delete(k)
        n++
      }
    }
    return n
  }

  get size() {
    return this.buckets.size
  }
}

/** แปลง "120/60" → { max: 120, windowMs: 60000 } (ใช้กับ env RATE_LIMIT) */
export function parseRate(spec: string): { max: number; windowMs: number } | null {
  const m = /^\s*(\d+)\s*\/\s*(\d+)\s*(ms|s|m)?\s*$/.exec(spec)
  if (!m) return null
  const unit = m[3] === 'ms' ? 1 : m[3] === 'm' ? 60_000 : 1000
  return { max: Number(m[1]), windowMs: Number(m[2]) * unit }
}

export const rateLimit = (opts: RateLimitOptions) => (app: App) => {
  const rules: RateRule[] = opts.rules ?? (opts.max && opts.windowMs ? [{ path: opts.path, max: opts.max, windowMs: opts.windowMs }] : [])
  if (!rules.length) throw new Error('rateLimit: ต้องระบุ max + windowMs หรือ rules')
  const limiters = rules.map((r) => ({ rule: r, limiter: new Limiter(r.max, r.windowMs) }))
  const skip = opts.skip ?? []
  const keyOf = opts.key ?? ((ctx: Context) => ctx.ip)

  const timer = setInterval(() => limiters.forEach((l) => l.limiter.sweep()), 30_000)
  timer.unref?.()
  app.onShutdown(() => clearInterval(timer))

  app.onRequest((ctx) => {
    const path = ctx.path
    for (const prefix of skip) if (path.startsWith(prefix)) return
    // rule แรกที่ path ตรงเป็นตัวตัดสิน (ใส่ rule ที่เฉพาะเจาะจงกว่าไว้ก่อน)
    for (let i = 0; i < limiters.length; i++) {
      const { rule, limiter } = limiters[i]!
      if (rule.path && !path.startsWith(rule.path)) continue
      const r = limiter.hit(`${i}:${keyOf(ctx)}`)
      if (!r.allowed) {
        const retry = Math.ceil(r.retryAfterMs / 1000)
        return Response.json(
          { error: 'ส่งคำขอถี่เกินไป', retryAfterSeconds: retry },
          { status: 429, headers: { 'retry-after': String(retry), 'ratelimit-limit': String(rule.max), 'ratelimit-remaining': '0', 'ratelimit-reset': String(retry) } },
        )
      }
      if (opts.headers) {
        ctx.set.headers['ratelimit-limit'] = String(rule.max)
        ctx.set.headers['ratelimit-remaining'] = String(r.remaining)
      }
      return
    }
  })
}
