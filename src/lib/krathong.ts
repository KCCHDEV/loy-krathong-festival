// ตาราง krathongs — กระทงที่ทุกคนลอยร่วมกันในแม่น้ำเดียว
import { db } from './db'
import { removeMedia, type MediaKind } from './media'

db.exec(`CREATE TABLE IF NOT EXISTS krathongs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  wish TEXT NOT NULL,
  color TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
)`)

// ย้ายตารางเก่า: เพิ่มคอลัมน์ที่ยังไม่มี (กระทงเดิมเป็นดอกบัว ไม่มีของตกแต่ง ไม่มีไฟล์แนบ)
const cols = (db.query('PRAGMA table_info(krathongs)').all() as { name: string }[]).map((c) => c.name)
if (!cols.includes('model')) db.exec("ALTER TABLE krathongs ADD COLUMN model TEXT NOT NULL DEFAULT 'lotus'")
if (!cols.includes('deco')) db.exec("ALTER TABLE krathongs ADD COLUMN deco TEXT NOT NULL DEFAULT 'none'")
if (!cols.includes('media')) db.exec('ALTER TABLE krathongs ADD COLUMN media TEXT')
if (!cols.includes('media_kind')) db.exec('ALTER TABLE krathongs ADD COLUMN media_kind TEXT')

export const COLORS = ['#ff6b9d', '#ffd23f', '#6bcb77', '#4d96ff', '#c77dff'] as const
export const MODELS = { lotus: '🪷 ดอกบัว', banana: '🍃 ใบตอง', heart: '💗 หัวใจ', star: '⭐ ดาว', boat: '⛵ เรือ' } as const
export const DECOS = { none: 'เรียบ', flower: '🌼 ดอกไม้', incense: '🕯️ ธูป', both: '✨ ครบ' } as const

type Row = { id: number; name: string; wish: string; color: string; model: string; deco: string; media: string | null; media_kind: MediaKind | null }
export type Krathong = Omit<Row, 'media' | 'media_kind'> & { media: string | null; mediaKind: MediaKind | null }

const view = (r: Row): Krathong => ({ id: r.id, name: r.name, wish: r.wish, color: r.color, model: r.model, deco: r.deco, media: r.media ? `/media/${r.media}` : null, mediaKind: r.media_kind })

const FIELDS = 'id, name, wish, color, model, deco, media, media_kind'
export const latest = (n = 60) =>
  (db.query(`SELECT ${FIELDS} FROM krathongs ORDER BY id DESC LIMIT ?`).all(n) as Row[]).map(view)

export const add = (name: string, wish: string, color: string, model: string, deco: string, media?: { file: string; kind: MediaKind }) =>
  view(db.query(`INSERT INTO krathongs (name, wish, color, model, deco, media, media_kind) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING ${FIELDS}`)
    .get(name, wish, color, model, deco, media?.file ?? null, media?.kind ?? null) as Row)

export const count = () => (db.query('SELECT COUNT(*) AS n FROM krathongs').get() as { n: number }).n

/** ลบกระทงพร้อมไฟล์แนบ · คืน false ถ้าไม่มี id นี้ */
export function remove(id: number): boolean {
  const row = db.query('SELECT media FROM krathongs WHERE id = ?').get(id) as { media: string | null } | null
  if (!row) return false
  db.query('DELETE FROM krathongs WHERE id = ?').run(id)
  removeMedia(row.media)
  return true
}
