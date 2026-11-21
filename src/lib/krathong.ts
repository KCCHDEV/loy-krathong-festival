// ตาราง krathongs — กระทงที่ทุกคนลอยร่วมกันในแม่น้ำเดียว
import { db } from './db'

db.exec(`CREATE TABLE IF NOT EXISTS krathongs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  wish TEXT NOT NULL,
  color TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
)`)

export const COLORS = ['#ff6b9d', '#ffd23f', '#6bcb77', '#4d96ff', '#c77dff'] as const

export type Krathong = { id: number; name: string; wish: string; color: string }

export const latest = (n = 60) =>
  db.query('SELECT id, name, wish, color FROM krathongs ORDER BY id DESC LIMIT ?').all(n) as Krathong[]

export const add = (name: string, wish: string, color: string) =>
  db.query('INSERT INTO krathongs (name, wish, color) VALUES (?, ?, ?) RETURNING id, name, wish, color').get(name, wish, color) as Krathong
