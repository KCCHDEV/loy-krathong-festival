/**
 * Session ฝั่งเซิร์ฟเวอร์ — ข้อมูลอยู่ใน SQLite, cookie เก็บแค่ id ที่เซ็นลายเซ็น (ชื่อ sid)
 *
 *   ctx.session.set('user', { name: 'Ann' })     // สร้าง session + ตั้ง cookie ตอนเรียกครั้งแรก
 *   ctx.session.get<{ name: string }>('user')
 *   ctx.session.delete('user') · ctx.session.destroy()   // destroy = ลบทั้ง session + cookie
 *   ctx.session.regenerate()                              // เปลี่ยน id หลัง login (กัน session fixation)
 *
 * ถ้าไม่เคย set จะไม่สร้างแถวหรือ cookie เลย (หน้า public ไม่เสียอะไร)
 * ไฟล์ฐานข้อมูล: SESSION_DB → DB_FILE → data.sqlite · อายุ: SESSION_TTL วินาที (ค่าเริ่มต้น 7 วัน, ต่ออายุทุกครั้งที่ set)
 */
import { Database } from 'bun:sqlite'
import type { App } from './server'
import type { CookieOptions } from './cookie'

const TTL = Number(process.env.SESSION_TTL ?? 60 * 60 * 24 * 7)
const db = new Database(process.env.SESSION_DB ?? process.env.DB_FILE ?? 'data.sqlite', { create: true })
db.exec(`
  PRAGMA busy_timeout = 5000; -- ต้องมาก่อน journal_mode: หลาย process เปิดไฟล์พร้อมกันตอนเริ่ม จะรอคิวแทนที่จะ error 'database is locked'
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS sessions (
    id      TEXT PRIMARY KEY,
    data    TEXT NOT NULL,
    expires INTEGER NOT NULL
  );
`)
const q = {
  load: db.query<{ data: string }, [string, number]>('SELECT data FROM sessions WHERE id = ? AND expires > ?'),
  save: db.query('INSERT OR REPLACE INTO sessions (id, data, expires) VALUES (?, ?, ?)'),
  drop: db.query('DELETE FROM sessions WHERE id = ?'),
  sweep: db.query('DELETE FROM sessions WHERE expires <= ?'),
}
setInterval(() => q.sweep.run(Date.now()), 10 * 60_000).unref?.()

type CookieLike = { value?: string; set(opts: CookieOptions): unknown; remove(): unknown }

export class Session {
  private id?: string
  private data?: Record<string, unknown>
  private idRead = false

  /** getCookie: อ่าน cookie ตอนใช้งานจริงเท่านั้น (route ที่ไม่แตะ session ไม่เสียต้นทุนตรวจลายเซ็น) */
  constructor(private getCookie: () => CookieLike) {}

  private get cookie() {
    return this.getCookie()
  }

  private load(): Record<string, unknown> {
    if (this.data) return this.data
    if (!this.idRead) {
      this.idRead = true
      const v = this.cookie.value
      if (typeof v === 'string' && v) this.id = v
    }
    const row = this.id ? q.load.get(this.id, Date.now()) : undefined
    if (!row) this.id = undefined // id ใน cookie หมดอายุ/ไม่มีอยู่จริง
    return (this.data = row ? JSON.parse(row.data) : {})
  }

  private save() {
    this.id ??= crypto.randomUUID()
    q.save.run(this.id, JSON.stringify(this.data), Date.now() + TTL * 1000)
    this.cookie.set({ value: this.id, httpOnly: true, sameSite: 'lax', path: '/', maxAge: TTL })
  }

  get<T = unknown>(key: string): T | undefined {
    return this.load()[key] as T | undefined
  }

  has(key: string) {
    return key in this.load()
  }

  set(key: string, value: unknown) {
    this.load()[key] = value
    this.save()
  }

  delete(key: string) {
    if (key in this.load()) {
      delete this.data![key]
      this.save()
    }
  }

  /** ลบทั้ง session และ cookie (logout) */
  destroy() {
    this.load()
    if (this.id) q.drop.run(this.id)
    this.id = undefined
    this.data = {}
    this.cookie.remove()
  }

  /** ออก id ใหม่ คงข้อมูลเดิมไว้ — เรียกหลัง login */
  regenerate() {
    const data = { ...this.load() }
    if (this.id) q.drop.run(this.id)
    this.id = undefined
    this.data = data
    this.save()
  }
}

/** ใส่ ctx.session ให้ทุก route */
export const sessionPlugin = (app: App) => app.lazy('session', (ctx) => new Session(() => ctx.cookie.sid as unknown as CookieLike))
