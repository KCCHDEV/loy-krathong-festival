/**
 * เครื่องมือเรียก service ภายนอกให้ทนความล้มเหลว — retry, timeout, circuit breaker, bulkhead
 *
 *   const res = await resilientFetch('https://api.example.com/x', {}, { retries: 2, timeoutMs: 2000, breaker })
 *
 *   const breaker = new CircuitBreaker({ failureThreshold: 5, resetMs: 10_000 })
 *   await breaker.run(() => callPayment())          // เปิดวงจรเมื่อล้มติดกัน 5 ครั้ง แล้วปฏิเสธทันทีโดยไม่ยิงจริง
 */

export class TimeoutError extends Error {
  constructor(readonly ms: number) {
    super(`หมดเวลา ${ms}ms`)
  }
}
export class CircuitOpenError extends Error {
  constructor(readonly retryInMs: number) {
    super(`วงจรเปิดอยู่ (ลองใหม่ได้ใน ${Math.ceil(retryInMs / 1000)}s)`)
  }
}
export class BulkheadFullError extends Error {
  constructor() {
    super('คิวเต็ม')
  }
}

/** ให้ fn ทำงานไม่เกิน ms — fn รับ AbortSignal ไปใช้ยกเลิกงานจริงได้ */
export async function withTimeout<T>(fn: (signal: AbortSignal) => Promise<T>, ms: number): Promise<T> {
  const ac = new AbortController()
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      reject(new TimeoutError(ms)) // reject ก่อน abort — ไม่งั้น error จากการ abort ของ fn ชนะ race แล้วชนิด error ผิด
      ac.abort()
    }, ms)
  })
  try {
    return await Promise.race([fn(ac.signal), timeout])
  } finally {
    clearTimeout(timer)
  }
}

export type RetryOptions = {
  retries?: number
  /** หน่วงก่อนลองใหม่ครั้งแรก (ms) แล้วคูณ factor ทุกครั้ง */
  baseMs?: number
  factor?: number
  maxMs?: number
  /** สุ่มเพิ่ม 0–jitter เท่าของเวลาหน่วง (กัน client หลายตัวลองพร้อมกัน) */
  jitter?: number
  shouldRetry?: (error: unknown, attempt: number) => boolean
  sleep?: (ms: number) => Promise<unknown>
}

export async function retry<T>(fn: (attempt: number) => Promise<T>, opts: RetryOptions = {}): Promise<T> {
  const { retries = 2, baseMs = 100, factor = 2, maxMs = 5000, jitter = 0.2, shouldRetry = () => true, sleep = Bun.sleep } = opts
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn(attempt)
    } catch (err) {
      if (attempt >= retries || !shouldRetry(err, attempt) || err instanceof CircuitOpenError) throw err
      const delay = Math.min(maxMs, baseMs * factor ** attempt)
      await sleep(delay * (1 + Math.random() * jitter))
    }
  }
}

export type BreakerState = 'closed' | 'open' | 'half-open'

export class CircuitBreaker {
  private failures = 0
  private successes = 0
  private openedAt = 0
  private probing = false
  state: BreakerState = 'closed'

  constructor(
    private opts: {
      /** ล้มติดกันกี่ครั้งถึงเปิดวงจร */
      failureThreshold?: number
      /** เปิดนานเท่าไรก่อนลองครึ่งเปิด (ms) */
      resetMs?: number
      /** สำเร็จติดกันกี่ครั้งใน half-open ถึงปิดวงจร */
      successThreshold?: number
      /** error ชนิดไหนนับเป็นความล้มเหลว (ค่าเริ่มต้น: ทุกอย่าง) */
      isFailure?: (error: unknown) => boolean
      now?: () => number
    } = {},
  ) {}

  private get now() {
    return this.opts.now?.() ?? Date.now()
  }

  async run<T>(fn: () => Promise<T>): Promise<T> {
    const { failureThreshold = 5, resetMs = 10_000, successThreshold = 1, isFailure = () => true } = this.opts

    if (this.state === 'open') {
      const waited = this.now - this.openedAt
      if (waited < resetMs) throw new CircuitOpenError(resetMs - waited)
      this.state = 'half-open'
      this.successes = 0
    }
    // half-open: ปล่อยทีละ 1 คำขอไปลอง ที่เหลือโดนปฏิเสธจนกว่าจะรู้ผล
    if (this.state === 'half-open') {
      if (this.probing) throw new CircuitOpenError(0)
      this.probing = true
    }

    try {
      const result = await fn()
      if (this.state === 'half-open') {
        if (++this.successes >= successThreshold) this.close()
      } else this.failures = 0
      return result
    } catch (err) {
      if (isFailure(err)) {
        if (this.state === 'half-open' || ++this.failures >= failureThreshold) this.open()
      }
      throw err
    } finally {
      this.probing = false
    }
  }

  private open() {
    this.state = 'open'
    this.openedAt = this.now
    this.failures = 0
  }
  private close() {
    this.state = 'closed'
    this.failures = 0
    this.successes = 0
  }
}

/** จำกัดจำนวนงานที่ทำพร้อมกัน (+ คิวรอ) — กันระบบข้างนอกโดนถล่ม */
export class Bulkhead {
  private active = 0
  private waiting: (() => void)[] = []
  constructor(
    private concurrency: number,
    private maxQueue = Infinity,
  ) {}

  async run<T>(fn: () => Promise<T>): Promise<T> {
    if (this.active >= this.concurrency) {
      if (this.waiting.length >= this.maxQueue) throw new BulkheadFullError()
      await new Promise<void>((resolve) => this.waiting.push(resolve))
    }
    this.active++
    try {
      return await fn()
    } finally {
      this.active--
      this.waiting.shift()?.()
    }
  }

  get stats() {
    return { active: this.active, queued: this.waiting.length }
  }
}

export type ResilientFetchOptions = RetryOptions & { timeoutMs?: number; breaker?: CircuitBreaker; bulkhead?: Bulkhead; retryStatuses?: number[] }

/** fetch + timeout + retry (เฉพาะ GET/HEAD หรือ network error · สถานะ 502/503/504 ลองใหม่) + breaker */
export async function resilientFetch(url: string | URL, init: RequestInit = {}, opts: ResilientFetchOptions = {}): Promise<Response> {
  const { timeoutMs = 5000, breaker, bulkhead, retryStatuses = [502, 503, 504] } = opts
  const idempotent = ['GET', 'HEAD', 'OPTIONS'].includes((init.method ?? 'GET').toUpperCase())

  const once = async () => {
    const res = await withTimeout((signal) => fetch(url, { ...init, signal }), timeoutMs)
    if (retryStatuses.includes(res.status)) throw Object.assign(new Error(`HTTP ${res.status}`), { response: res })
    return res
  }
  const guarded = () => (breaker ? breaker.run(once) : once())
  const limited = () => (bulkhead ? bulkhead.run(guarded) : guarded())

  try {
    return await retry(limited, { ...opts, retries: idempotent ? (opts.retries ?? 2) : 0 })
  } catch (err) {
    // ลองหมดแล้วแต่ได้ response จริง (เช่น 503) → คืนให้ผู้เรียกตัดสินเอง
    const response = (err as { response?: Response }).response
    if (response) return response
    throw err
  }
}
