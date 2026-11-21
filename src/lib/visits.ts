/**
 * สถิติผู้เข้าชมแบบไม่เก็บข้อมูลส่วนตัว
 *  - ไม่เก็บ IP/User-Agent ดิบ: เก็บเฉพาะ hash = SHA-256(COOKIE_SECRET | วัน | IP | UA) 16 ตัวแรก ซึ่งเปลี่ยนทุกวัน จึงตามคนข้ามวันไม่ได้
 *  - "วันนี้ N คน" = จำนวน hash ไม่ซ้ำของวันนี้ (วันตามเวลาไทย) · "เข้าชมรวม" = จำนวนครั้งที่เปิดหน้าเว็บ · "ออนไลน์" = hash ที่ส่งสัญญาณใน 30 วินาทีล่าสุด
 * shortcut: ออนไลน์/กันนับซ้ำเก็บใน memory ของ process (หลาย worker ต่างคนต่างนับ), ผู้ใช้ที่ IP+UA เหมือนกัน (หลัง NAT) นับเป็นคนเดียว
 */
import { createHash } from 'node:crypto'
import { db } from './db'

db.exec(`
  CREATE TABLE IF NOT EXISTS visitors (day TEXT NOT NULL, h TEXT NOT NULL, PRIMARY KEY (day, h)) WITHOUT ROWID;
  CREATE TABLE IF NOT EXISTS counters (k TEXT PRIMARY KEY, v INTEGER NOT NULL);
`)

const SECRET = process.env.COOKIE_SECRET ?? 'dev-secret'
const today = () => new Date(Date.now() + 7 * 3600_000).toISOString().slice(0, 10) // Asia/Bangkok (UTC+7)
const who = (ip: string, ua: string) => createHash('sha256').update(`${SECRET}|${today()}|${ip}|${ua}`).digest('hex').slice(0, 16)

const lastSeen = new Map<string, number>()
const lastView = new Map<string, number>()
function prune(m: Map<string, number>, maxAge: number) {
  if (m.size < 5000) return
  const now = Date.now()
  for (const [k, t] of m) if (now - t > maxAge) m.delete(k)
}

const addView = db.query("INSERT INTO counters (k, v) VALUES ('views', 1) ON CONFLICT (k) DO UPDATE SET v = v + 1")
const addVisitor = db.query('INSERT OR IGNORE INTO visitors (day, h) VALUES (?, ?)')

/** สัญญาณว่ายังเปิดหน้าอยู่ (ใช้นับ "ออนไลน์") */
export function touch(ip: string, ua: string) {
  lastSeen.set(who(ip, ua), Date.now()); prune(lastSeen, 30_000)
}

/** เปิดหน้าเว็บหนึ่งครั้ง — กันรีเฟรชรัวนับซ้ำภายใน 10 วินาที */
export function visit(ip: string, ua: string) {
  const h = who(ip, ua), now = Date.now()
  lastSeen.set(h, now)
  if (now - (lastView.get(h) ?? 0) < 10_000) return
  lastView.set(h, now); prune(lastView, 10_000)
  addView.run(); addVisitor.run(today(), h)
}

export function stats() {
  const now = Date.now()
  const views = (db.query("SELECT v FROM counters WHERE k = 'views'").get() as { v: number } | null)?.v ?? 0
  const visitorsToday = (db.query('SELECT COUNT(*) AS n FROM visitors WHERE day = ?').get(today()) as { n: number }).n
  let online = 0
  for (const t of lastSeen.values()) if (now - t < 30_000) online++
  return { views, visitorsToday, online }
}
