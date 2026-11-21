/**
 * งานเบื้องหลัง (job queue) + งานตามเวลา (cron) ด้วย SQLite — ไม่ต้องมี Redis
 *
 *   jobs.define('send-email', async ({ to }) => { await mail(to) }, { maxAttempts: 5 })
 *   jobs.enqueue('send-email', { to: 'a@b.c' })                    // ทำเมื่อว่าง
 *   jobs.enqueue('send-email', { to }, { delayMs: 60_000 })        // ทำในอีก 1 นาที
 *   jobs.enqueue('report', {}, { uniqueKey: 'report:2026-11-04' }) // ซ้ำไม่ได้ (idempotent)
 *   jobs.cron('0 3 * * *', 'nightly-cleanup', () => cleanup())     // ตี 3 ทุกวัน
 *   jobs.start()                                                   // เริ่มดึงงาน (index.tsx เรียกให้)
 *
 * ทนความล้มเหลว: งานที่ throw จะลองใหม่ตาม backoff (2^n วินาที) จนครบ maxAttempts แล้วเป็น failed (ดูผลที่ stats()/list())
 * งานที่ค้างเพราะ process ตายกลางทางถูกดึงกลับมาทำใหม่หลัง visibilityMs
 * หลาย process แชร์ฐานข้อมูลเดียวกันได้: การรับงานเป็น atomic (UPDATE ... WHERE status='pending') และ cron ใช้ uniqueKey
 * จึงทำงานรอบเวลาเดียวกันแค่ครั้งเดียวไม่ว่ามีกี่ worker
 */
import { Database } from 'bun:sqlite'

export type JobHandler<P = any> = (payload: P, job: JobInfo) => unknown | Promise<unknown>
export type JobInfo = { id: number; name: string; attempt: number }
export type DefineOptions = { maxAttempts?: number; concurrency?: number; backoffMs?: (attempt: number) => number }
export type EnqueueOptions = { delayMs?: number; maxAttempts?: number; uniqueKey?: string }
export type JobStatus = 'pending' | 'running' | 'done' | 'failed'
export type JobRow = { id: number; name: string; payload: string; status: JobStatus; run_at: number; attempts: number; max_attempts: number; last_error: string | null; created_at: number; finished_at: number | null }

// ───────────── cron ─────────────

// แปลงฟิลด์ cron (เครื่องหมาย *, ขั้น step เช่น 5 นาทีละครั้ง, รายการ 1,15, ช่วง 10-20, ช่วงมีขั้น 10-30/5) เป็นชุดค่าที่ตรง
function parseField(src: string, min: number, max: number): Set<number> {
  const out = new Set<number>()
  for (const part of src.split(',')) {
    const [range, stepText] = part.split('/')
    const step = stepText ? Number(stepText) : 1
    if (!Number.isInteger(step) || step < 1) throw new Error(`cron: step ไม่ถูกต้อง "${part}"`)
    let lo = min
    let hi = max
    if (range !== '*') {
      const [a, b] = range!.split('-')
      lo = Number(a)
      hi = b !== undefined ? Number(b) : stepText ? max : lo
    }
    if (!Number.isInteger(lo) || !Number.isInteger(hi) || lo < min || hi > max || lo > hi) throw new Error(`cron: ค่าอยู่นอกช่วง ${min}-${max} "${part}"`)
    for (let v = lo; v <= hi; v += step) out.add(v)
  }
  return out
}

export type CronSpec = { minute: Set<number>; hour: Set<number>; dom: Set<number>; month: Set<number>; dow: Set<number>; domStar: boolean; dowStar: boolean }

/** cron 5 ฟิลด์: นาที ชั่วโมง วันที่ เดือน วันในสัปดาห์ (0–6, 0=อาทิตย์; 7 = อาทิตย์ด้วย) */
export function parseCron(expr: string): CronSpec {
  const f = expr.trim().split(/\s+/)
  if (f.length !== 5) throw new Error(`cron ต้องมี 5 ฟิลด์ ได้ "${expr}"`)
  const dow = parseField(f[4]!.replace(/\b7\b/g, '0'), 0, 6)
  return { minute: parseField(f[0]!, 0, 59), hour: parseField(f[1]!, 0, 23), dom: parseField(f[2]!, 1, 31), month: parseField(f[3]!, 1, 12), dow, domStar: f[2] === '*', dowStar: f[4] === '*' }
}

/** เวลา (ตาม timezone ของเครื่อง) ตรงกับ spec ไหม — วันที่กับวันในสัปดาห์ถ้าระบุทั้งคู่ ตรงอย่างใดอย่างหนึ่งก็พอ (เหมือน cron ทั่วไป) */
export function cronMatches(spec: CronSpec, d: Date): boolean {
  if (!spec.minute.has(d.getMinutes()) || !spec.hour.has(d.getHours()) || !spec.month.has(d.getMonth() + 1)) return false
  const domOk = spec.dom.has(d.getDate())
  const dowOk = spec.dow.has(d.getDay())
  return spec.domStar || spec.dowStar ? domOk && dowOk : domOk || dowOk
}

/** เวลาถัดไปที่ตรงกับ spec (ค้นทีละนาที ไม่เกิน 366 วัน) */
export function nextCron(spec: CronSpec, from: Date): Date | null {
  const d = new Date(from.getTime())
  d.setSeconds(0, 0)
  for (let i = 0; i < 366 * 24 * 60; i++) {
    d.setMinutes(d.getMinutes() + 1)
    if (cronMatches(spec, d)) return d
  }
  return null
}

// ───────────── queue ─────────────

export class JobQueue {
  readonly db: Database
  private handlers = new Map<string, { fn: JobHandler; opts: Required<DefineOptions> }>()
  private crons: { spec: CronSpec; name: string; expr: string }[] = []
  private running = new Map<string, number>()
  private timer?: ReturnType<typeof setTimeout>
  private cronTimer?: ReturnType<typeof setInterval>
  private stopped = true
  private lastCronMinute = 0

  constructor(
    file = process.env.JOBS_DB ?? process.env.DB_FILE ?? 'data.sqlite',
    private opts: { pollMs?: number; visibilityMs?: number } = {},
  ) {
    this.db = new Database(file, { create: true })
    this.db.exec(`
      PRAGMA busy_timeout = 5000; -- ต้องมาก่อน journal_mode: หลาย process เปิดไฟล์พร้อมกันตอนเริ่ม จะรอคิวแทนที่จะ error 'database is locked'
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS jobs (
        id           INTEGER PRIMARY KEY AUTOINCREMENT,
        name         TEXT NOT NULL,
        payload      TEXT NOT NULL,
        status       TEXT NOT NULL DEFAULT 'pending',
        run_at       INTEGER NOT NULL,
        attempts     INTEGER NOT NULL DEFAULT 0,
        max_attempts INTEGER NOT NULL DEFAULT 3,
        last_error   TEXT,
        unique_key   TEXT UNIQUE,
        locked_at    INTEGER,
        created_at   INTEGER NOT NULL,
        finished_at  INTEGER
      );
      CREATE INDEX IF NOT EXISTS jobs_ready ON jobs(status, run_at);
    `)
  }

  define<P = any>(name: string, fn: JobHandler<P>, opts: DefineOptions = {}): this {
    this.handlers.set(name, { fn, opts: { maxAttempts: opts.maxAttempts ?? 3, concurrency: opts.concurrency ?? 1, backoffMs: opts.backoffMs ?? ((attempt) => 2 ** attempt * 1000) } })
    return this
  }

  /** ใส่งานเข้าคิว · คืน id (หรือ null ถ้า uniqueKey ซ้ำ = มีงานนี้อยู่แล้ว) */
  enqueue(name: string, payload: unknown = {}, o: EnqueueOptions = {}): number | null {
    const now = Date.now()
    const max = o.maxAttempts ?? this.handlers.get(name)?.opts.maxAttempts ?? 3
    const r = this.db
      .query('INSERT OR IGNORE INTO jobs (name, payload, run_at, max_attempts, unique_key, created_at) VALUES (?, ?, ?, ?, ?, ?)')
      .run(name, JSON.stringify(payload), now + (o.delayMs ?? 0), max, o.uniqueKey ?? null, now)
    return r.changes ? Number(r.lastInsertRowid) : null
  }

  /** ตั้งงานตามเวลา — ทุกครั้งที่ตรง cron จะ enqueue งานชื่อ name (ซ้ำรอบเดียวกันไม่ได้ ข้าม process ก็ไม่ซ้ำ) */
  cron(expr: string, name: string, fn?: JobHandler, opts?: DefineOptions): this {
    this.crons.push({ spec: parseCron(expr), name, expr })
    if (fn) this.define(name, fn, opts)
    return this
  }

  /** รับงานที่ถึงเวลา 1 งาน (atomic) */
  private claim(names: string[], exclude: number[]): JobRow | null {
    if (!names.length) return null
    const now = Date.now()
    const marks = names.map(() => '?').join(',')
    const skip = exclude.length ? ` AND id NOT IN (${exclude.join(',')})` : ''
    const row = this.db.query<JobRow, any[]>(`SELECT * FROM jobs WHERE status = 'pending' AND run_at <= ? AND name IN (${marks})${skip} ORDER BY run_at, id LIMIT 1`).get(now, ...names)
    if (!row) return null
    const won = this.db.query(`UPDATE jobs SET status = 'running', attempts = attempts + 1, locked_at = ? WHERE id = ? AND status = 'pending'`).run(now, row.id)
    return won.changes ? { ...row, attempts: row.attempts + 1 } : null
  }

  private async execute(job: JobRow) {
    const h = this.handlers.get(job.name)!
    this.running.set(job.name, (this.running.get(job.name) ?? 0) + 1)
    try {
      await h.fn(JSON.parse(job.payload), { id: job.id, name: job.name, attempt: job.attempts })
      this.db.query(`UPDATE jobs SET status = 'done', finished_at = ?, last_error = NULL WHERE id = ?`).run(Date.now(), job.id)
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      if (job.attempts >= job.max_attempts) {
        this.db.query(`UPDATE jobs SET status = 'failed', finished_at = ?, last_error = ? WHERE id = ?`).run(Date.now(), message, job.id)
      } else {
        this.db.query(`UPDATE jobs SET status = 'pending', run_at = ?, last_error = ?, locked_at = NULL WHERE id = ?`).run(Date.now() + h.opts.backoffMs(job.attempts), message, job.id)
      }
    } finally {
      this.running.set(job.name, (this.running.get(job.name) ?? 1) - 1)
    }
  }

  /** ดึงและรันงานที่ถึงเวลาจนกว่าจะหมดหรือเต็ม concurrency · คืนจำนวนที่เริ่มทำ (ใช้ในเทสได้ ไม่ต้อง start()) */
  async tick(): Promise<number> {
    // งานที่ค้างเป็น running นานเกิน visibility (process ตายกลางทาง) → กลับไปรอใหม่
    const stuck = Date.now() - (this.opts.visibilityMs ?? 60_000)
    this.db.query(`UPDATE jobs SET status = 'pending', locked_at = NULL WHERE status = 'running' AND locked_at < ?`).run(stuck)

    let started = 0
    const inflight: Promise<void>[] = []
    const attempted: number[] = [] // งานที่เริ่มทำแล้วใน tick นี้ — ไม่ดึงซ้ำทันทีแม้ backoff เป็น 0
    for (;;) {
      const free = [...this.handlers].filter(([name, h]) => (this.running.get(name) ?? 0) < h.opts.concurrency).map(([name]) => name)
      const job = this.claim(free, attempted)
      if (!job) break
      attempted.push(job.id)
      started++
      inflight.push(this.execute(job))
    }
    await Promise.all(inflight)
    return started
  }

  /** เริ่มดึงงานเป็นระยะ + ตรวจ cron ทุกนาที */
  start(): this {
    if (!this.stopped) return this
    this.stopped = false
    const loop = async () => {
      if (this.stopped) return
      try {
        await this.tick()
      } catch (err) {
        console.error('jobs tick ล้มเหลว:', err)
      }
      this.timer = setTimeout(loop, this.opts.pollMs ?? 500)
      this.timer.unref?.()
    }
    void loop()
    this.cronTimer = setInterval(() => this.checkCron(), 5000)
    this.cronTimer.unref?.()
    return this
  }

  /** ถึงนาทีใหม่แล้วหรือยัง → enqueue งาน cron ที่ตรง (uniqueKey = ชื่อ@นาที กันซ้ำข้าม process) */
  checkCron(now = new Date()): number {
    const minute = Math.floor(now.getTime() / 60_000)
    if (minute === this.lastCronMinute) return 0
    this.lastCronMinute = minute
    let n = 0
    for (const c of this.crons) if (cronMatches(c.spec, now)) n += this.enqueue(c.name, {}, { uniqueKey: `cron:${c.name}@${minute}` }) ? 1 : 0
    return n
  }

  /** หยุดดึงงานใหม่ และรอที่กำลังทำอยู่ให้เสร็จ */
  async stop(timeoutMs = 5000): Promise<void> {
    this.stopped = true
    clearTimeout(this.timer)
    clearInterval(this.cronTimer)
    const end = Date.now() + timeoutMs
    while ([...this.running.values()].some((n) => n > 0) && Date.now() < end) await Bun.sleep(10)
  }

  stats(): Record<JobStatus, number> & { total: number } {
    const rows = this.db.query<{ status: JobStatus; n: number }, []>('SELECT status, COUNT(*) AS n FROM jobs GROUP BY status').all()
    const out = { pending: 0, running: 0, done: 0, failed: 0, total: 0 }
    for (const r of rows) {
      out[r.status] = r.n
      out.total += r.n
    }
    return out
  }

  list(opts: { status?: JobStatus; limit?: number } = {}): JobRow[] {
    const limit = opts.limit ?? 50
    return opts.status
      ? this.db.query<JobRow, [string, number]>('SELECT * FROM jobs WHERE status = ? ORDER BY id DESC LIMIT ?').all(opts.status, limit)
      : this.db.query<JobRow, [number]>('SELECT * FROM jobs ORDER BY id DESC LIMIT ?').all(limit)
  }

  /** ลบงานที่เสร็จ/พังเกิน olderThanMs (ค่าเริ่มต้น 7 วัน) */
  prune(olderThanMs = 7 * 24 * 3600_000): number {
    return this.db.query(`DELETE FROM jobs WHERE status IN ('done','failed') AND finished_at < ?`).run(Date.now() - olderThanMs).changes
  }

  get cronList() {
    return this.crons.map((c) => ({ name: c.name, expr: c.expr, next: nextCron(c.spec, new Date())?.toISOString() ?? null }))
  }

  close() {
    this.db.close()
  }
}

/** คิวหลักของแอพ (ใช้ฐานข้อมูลเดียวกับ session: JOBS_DB → DB_FILE → data.sqlite) */
export const jobs = new JobQueue()
