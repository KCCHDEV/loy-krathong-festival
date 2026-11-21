// ตาราง krathongs — กระทงที่ทุกคนลอยร่วมกันในแม่น้ำเดียว
import { db } from './db'

db.exec(`CREATE TABLE IF NOT EXISTS krathongs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  wish TEXT NOT NULL,
  color TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
)`)

// ย้ายตารางเก่า: เพิ่มคอลัมน์รูปทรง/ของตกแต่งถ้ายังไม่มี (กระทงเดิมเป็นดอกบัวไม่มีของตกแต่ง)
const cols = (db.query('PRAGMA table_info(krathongs)').all() as { name: string }[]).map((c) => c.name)
if (!cols.includes('model')) db.exec("ALTER TABLE krathongs ADD COLUMN model TEXT NOT NULL DEFAULT 'lotus'")
if (!cols.includes('deco')) db.exec("ALTER TABLE krathongs ADD COLUMN deco TEXT NOT NULL DEFAULT 'none'")

export const COLORS = ['#ff6b9d', '#ffd23f', '#6bcb77', '#4d96ff', '#c77dff'] as const
export const MODELS = { lotus: '🪷 ดอกบัว', banana: '🍃 ใบตอง', heart: '💗 หัวใจ', star: '⭐ ดาว', boat: '⛵ เรือ' } as const
export const DECOS = { none: 'เรียบ', flower: '🌼 ดอกไม้', incense: '🕯️ ธูป', both: '✨ ครบ' } as const

export type Krathong = { id: number; name: string; wish: string; color: string; model: string; deco: string }

const FIELDS = 'id, name, wish, color, model, deco'
export const latest = (n = 60) =>
  db.query(`SELECT ${FIELDS} FROM krathongs ORDER BY id DESC LIMIT ?`).all(n) as Krathong[]

export const add = (name: string, wish: string, color: string, model: string, deco: string) =>
  db.query(`INSERT INTO krathongs (name, wish, color, model, deco) VALUES (?, ?, ?, ?, ?) RETURNING ${FIELDS}`).get(name, wish, color, model, deco) as Krathong
