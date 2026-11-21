/**
 * เก็บไฟล์ที่ผู้ใช้อัปโหลดอย่างปลอดภัย
 *
 *  - ชนิดไฟล์ดูจาก "magic bytes" ในเนื้อไฟล์จริง ไม่เชื่อนามสกุลหรือ Content-Type ที่ client ส่งมา (แค่เปลี่ยนชื่อ .exe เป็น .png ก็ไม่ผ่าน)
 *  - ไม่รับ SVG/HTML (เป็นช่องทาง XSS) — รับ png, jpeg, gif, webp, pdf, ข้อความธรรมดา
 *  - เก็บเป็น <id สุ่ม 128 บิต>.<นามสกุลจากชนิดที่ตรวจแล้ว> ในโฟลเดอร์ UPLOAD_DIR: ชื่อไฟล์จากผู้ใช้ไม่ถูกใช้เป็น path เลย (กัน path traversal)
 *  - จำกัดขนาดด้วย UPLOAD_MAX_MB (ค่าเริ่มต้น 5)
 */
import { mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { db } from './db'

export type Upload = { id: string; name: string; mime: string; size: number; owner_id: number | null; created_at: number; sha256: string }

export class UploadError extends Error {
  constructor(readonly code: 'too-large' | 'empty' | 'unsupported-type') {
    super(code)
  }
}

db.exec(`
  CREATE TABLE IF NOT EXISTS uploads (
    id         TEXT PRIMARY KEY,
    name       TEXT NOT NULL,
    mime       TEXT NOT NULL,
    size       INTEGER NOT NULL,
    owner_id   INTEGER,
    sha256     TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS uploads_owner ON uploads (owner_id, created_at DESC);
`)

/** ชนิดที่รับ: เช็ก byte แรกๆ ของไฟล์ */
const SIGNATURES: { mime: string; ext: string; test: (b: Uint8Array) => boolean }[] = [
  { mime: 'image/png', ext: 'png', test: (b) => startsWith(b, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]) },
  { mime: 'image/jpeg', ext: 'jpg', test: (b) => startsWith(b, [0xff, 0xd8, 0xff]) },
  { mime: 'image/gif', ext: 'gif', test: (b) => startsWith(b, [0x47, 0x49, 0x46, 0x38]) && (b[4] === 0x37 || b[4] === 0x39) && b[5] === 0x61 },
  { mime: 'image/webp', ext: 'webp', test: (b) => startsWith(b, [0x52, 0x49, 0x46, 0x46]) && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50 },
  { mime: 'application/pdf', ext: 'pdf', test: (b) => startsWith(b, [0x25, 0x50, 0x44, 0x46, 0x2d]) },
  { mime: 'text/plain; charset=utf-8', ext: 'txt', test: isPlainText },
]

function startsWith(b: Uint8Array, sig: number[]) {
  return b.length >= sig.length && sig.every((v, i) => b[i] === v)
}

/** ข้อความล้วน: UTF-8 ถูกต้อง ไม่มี NUL/control แปลกๆ (กันไฟล์ binary หลอกเป็น txt) — ตรวจ 8 KB แรก */
function isPlainText(b: Uint8Array): boolean {
  const n = Math.min(b.length, 8192)
  for (let i = 0; i < n; i++) {
    const c = b[i]!
    if (c === 0 || c < 9 || (c > 13 && c < 32)) return false
  }
  // ถ้าตัดตรงขอบ 8 KB อาจฉีกตัวอักษรหลายไบต์ครึ่งตัว → ถอยท้ายได้สูงสุด 3 ไบต์
  const maxCut = b.length > n ? 3 : 0
  for (let cut = 0; cut <= maxCut; cut++) {
    try {
      new TextDecoder('utf-8', { fatal: true }).decode(b.subarray(0, n - cut))
      return true
    } catch {}
  }
  return false
}

export const detectType = (bytes: Uint8Array) => SIGNATURES.find((s) => s.test(bytes)) ?? null

export const uploadDir = () => process.env.UPLOAD_DIR ?? 'uploads'
export const maxBytes = () => Math.floor(Number(process.env.UPLOAD_MAX_MB ?? 5) * 1024 * 1024)

/** ชื่อที่แสดง: ตัด path/อักขระควบคุม/ที่อันตรายต่อ header, ยาวไม่เกิน 120 */
export function cleanName(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? ''
  const cleaned = base.replace(/[\u0000-\u001f\u007f"<>|?*:]/g, '').replace(/^\.+/, '').trim().slice(0, 120)
  return cleaned || 'file'
}

const idPattern = /^[0-9a-f]{32}$/
export const isValidId = (id: string) => idPattern.test(id)
const randomId = () => Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('hex')

const extOf = (mime: string) => SIGNATURES.find((s) => s.mime === mime)!.ext
export const pathOf = (u: Pick<Upload, 'id' | 'mime'>) => join(uploadDir(), `${u.id}.${extOf(u.mime)}`)

const q = {
  insert: db.query<Upload, [string, string, string, number, number | null, string, number]>('INSERT INTO uploads (id, name, mime, size, owner_id, sha256, created_at) VALUES (?,?,?,?,?,?,?) RETURNING *'),
  byId: db.query<Upload, [string]>('SELECT * FROM uploads WHERE id = ?'),
  del: db.query('DELETE FROM uploads WHERE id = ?'),
  all: db.query<Upload, [number, number]>('SELECT * FROM uploads ORDER BY created_at DESC LIMIT ? OFFSET ?'),
  byOwner: db.query<Upload, [number, number]>('SELECT * FROM uploads WHERE owner_id = ? ORDER BY created_at DESC LIMIT ?'),
  count: db.query<{ n: number }, []>('SELECT COUNT(*) AS n FROM uploads'),
}

export async function saveUpload(file: File, ownerId: number | null): Promise<Upload> {
  if (file.size === 0) throw new UploadError('empty')
  if (file.size > maxBytes()) throw new UploadError('too-large')
  const bytes = new Uint8Array(await file.arrayBuffer())
  const type = detectType(bytes)
  if (!type) throw new UploadError('unsupported-type')

  const id = randomId()
  const upload = { id, mime: type.mime }
  mkdirSync(uploadDir(), { recursive: true })
  await Bun.write(pathOf(upload), bytes)
  const sha = new Bun.CryptoHasher('sha256').update(bytes).digest('hex')
  try {
    return q.insert.get(id, cleanName(file.name), type.mime, bytes.byteLength, ownerId, sha, Date.now())!
  } catch (err) {
    rmSync(pathOf(upload), { force: true })
    throw err
  }
}

export const getUpload = (id: string): Upload | null => (isValidId(id) ? (q.byId.get(id) ?? null) : null)
export const listUploads = (limit = 60, offset = 0): Upload[] => q.all.all(limit, offset)
export const listByOwner = (ownerId: number, limit = 100): Upload[] => q.byOwner.all(ownerId, limit)
export const countUploads = () => q.count.get()!.n

export function deleteUpload(id: string): boolean {
  const u = getUpload(id)
  if (!u) return false
  rmSync(pathOf(u), { force: true })
  return q.del.run(id).changes > 0
}

export const isImage = (u: Pick<Upload, 'mime'>) => u.mime.startsWith('image/')
export const urlOf = (u: Pick<Upload, 'id'>) => `/uploads/${u.id}`

export const uploadMessages: Record<string, string> = {
  'too-large': 'ไฟล์ใหญ่เกินกำหนด',
  empty: 'ไฟล์ว่างเปล่า',
  'unsupported-type': 'ชนิดไฟล์ไม่รองรับ (รับ png, jpeg, gif, webp, pdf, txt)',
}
