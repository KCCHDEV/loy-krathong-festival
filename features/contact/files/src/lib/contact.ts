/**
 * ฟอร์มติดต่อ: เก็บข้อความ + กันสแปม + แจ้งเตือนเป็นงานเบื้องหลัง
 *
 * กันสแปมหลายชั้น (ไม่ต้องใช้ CAPTCHA):
 *  1) honeypot — ช่อง "website" ซ่อนด้วย CSS คนไม่เห็นจึงว่าง บอทที่กรอกทุกช่องจะติด
 *  2) หน่วงเวลา — ฟอร์มฝังเวลาที่ลงชื่อ (HMAC) ส่งเร็วกว่า 2 วินาที = บอท · เกิน 1 ชั่วโมง = เก่าเกิน
 *  3) จำกัดต่อ IP — 5 ข้อความ/10 นาที
 *  ติดข้อ 1–2 = ตอบเหมือนสำเร็จแต่ไม่เก็บ (บอทไม่รู้ว่าถูกจับ)
 */
import { db } from './db'
import { jobs } from '@core/jobs'
import { Limiter } from '@core/ratelimit'

export type Message = { id: number; name: string; email: string; subject: string; message: string; ip: string; created_at: number; is_read: 0 | 1 }

db.exec(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    email      TEXT NOT NULL,
    subject    TEXT NOT NULL,
    message    TEXT NOT NULL,
    ip         TEXT NOT NULL,
    is_read    INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS contact_unread ON contact_messages (is_read, created_at DESC);
`)

const q = {
  insert: db.query<Message, [string, string, string, string, string, number]>('INSERT INTO contact_messages (name, email, subject, message, ip, created_at) VALUES (?,?,?,?,?,?) RETURNING *'),
  list: db.query<Message, [number, number]>('SELECT * FROM contact_messages ORDER BY is_read ASC, created_at DESC LIMIT ? OFFSET ?'),
  byId: db.query<Message, [number]>('SELECT * FROM contact_messages WHERE id = ?'),
  read: db.query('UPDATE contact_messages SET is_read = 1 WHERE id = ?'),
  del: db.query('DELETE FROM contact_messages WHERE id = ?'),
  unread: db.query<{ n: number }, []>('SELECT COUNT(*) AS n FROM contact_messages WHERE is_read = 0'),
  total: db.query<{ n: number }, []>('SELECT COUNT(*) AS n FROM contact_messages'),
}

// ───── ตรวจและบันทึก ─────

export const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 }
const MIN_FILL_MS = 2000
const MAX_FILL_MS = 3_600_000
const limiter = new Limiter(5, 10 * 60_000)
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const secret = () => process.env.COOKIE_SECRET ?? 'dev-cookie-secret'
const sign = (ts: string) => new Bun.CryptoHasher('sha256', secret()).update(`contact:${ts}`).digest('base64url').slice(0, 22)

/** ค่าที่ฝังในฟอร์ม: <เวลา>.<ลายเซ็น> (ปลอมเวลาให้เก่าไม่ได้ เพราะไม่มี secret) */
export const formToken = (now = Date.now()) => `${now}.${sign(String(now))}`

export function tokenAgeMs(token: string, now = Date.now()): number | null {
  const [ts, sig] = token.split('.')
  if (!ts || !sig || !/^\d+$/.test(ts) || sign(ts) !== sig) return null
  return now - Number(ts)
}

export type Submission = { name: string; email: string; subject: string; message: string; website?: string; token: string }
export type Outcome = { ok: true; stored: boolean } | { ok: false; error: 'invalid' | 'rate-limited'; field?: keyof typeof LIMITS }

export function submitMessage(input: Submission, ip: string, now = Date.now()): Outcome {
  const name = input.name.trim()
  const email = input.email.trim()
  const subject = input.subject.trim()
  const message = input.message.trim()

  if (!name || name.length > LIMITS.name) return { ok: false, error: 'invalid', field: 'name' }
  if (!EMAIL.test(email) || email.length > LIMITS.email) return { ok: false, error: 'invalid', field: 'email' }
  if (!subject || subject.length > LIMITS.subject) return { ok: false, error: 'invalid', field: 'subject' }
  if (message.length < 5 || message.length > LIMITS.message) return { ok: false, error: 'invalid', field: 'message' }

  // บอท: ตอบสำเร็จแต่ทิ้ง
  const age = tokenAgeMs(input.token, now)
  if (input.website || age === null || age < MIN_FILL_MS || age > MAX_FILL_MS) return { ok: true, stored: false }

  if (!limiter.hit(ip, now).allowed) return { ok: false, error: 'rate-limited' }

  const row = q.insert.get(name, email, subject, message, ip, now)!
  jobs.enqueue('contact:notify', { id: row.id })
  return { ok: true, stored: true }
}

/** แจ้งเตือนเมื่อมีข้อความใหม่ — ตอนนี้แค่ log · ใส่โค้ดส่งอีเมล/Slack/LINE ตรงนี้ (ล้มเหลว = ลองใหม่อัตโนมัติ) */
jobs.define<{ id: number }>('contact:notify', ({ id }) => {
  const m = q.byId.get(id)
  if (m) console.log(`[contact] ข้อความใหม่ #${m.id} จาก ${m.name} <${m.email}>: ${m.subject}`)
}, { maxAttempts: 5 })

// ───── หลังบ้าน ─────
export const listMessages = (limit = 100, offset = 0) => q.list.all(limit, offset)
export const getMessage = (id: number) => q.byId.get(id) ?? null
export const markRead = (id: number) => void q.read.run(id)
export const deleteMessage = (id: number) => q.del.run(id).changes > 0
export const countUnread = () => q.unread.get()!.n
export const countMessages = () => q.total.get()!.n
export const resetLimiter = () => limiter.sweep(Date.now() + 365 * 24 * 3600_000)
