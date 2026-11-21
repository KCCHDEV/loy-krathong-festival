/**
 * เก็บรูป/วิดีโอที่ผู้เยี่ยมชมแนบกับกระทง (แบบเดียวกับ features/uploads ของ Kitsune แต่รับวิดีโอด้วย)
 *  - ชนิดไฟล์ดูจาก magic bytes จริง ไม่เชื่อนามสกุล/Content-Type ที่ client ส่ง · ไม่รับ SVG/HTML (ช่อง XSS)
 *  - เก็บเป็น <id สุ่ม 128 บิต>.<นามสกุลจากชนิดที่ตรวจแล้ว> ชื่อจากผู้ใช้ไม่ถูกใช้เป็น path (กัน path traversal)
 *  - จำกัดขนาด: รูป MEDIA_IMAGE_MB (3) · วิดีโอ MEDIA_VIDEO_MB (10)
 * shortcut: ไม่ตัด EXIF/metadata ฝั่ง server (หน้าเว็บบีบรูปผ่าน canvas ซึ่งลบ EXIF ให้แล้ว แต่ยิง API ตรงจะไม่ผ่านขั้นนั้น) · ไม่เช็กความยาววิดีโอ
 */
import { mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

export type MediaKind = 'image' | 'video'
type Sig = { kind: MediaKind; mime: string; ext: string; test: (b: Uint8Array) => boolean }

const at = (b: Uint8Array, off: number, sig: number[]) => b.length >= off + sig.length && sig.every((v, i) => b[off + i] === v)
const SIGS: Sig[] = [
  { kind: 'image', mime: 'image/png', ext: 'png', test: (b) => at(b, 0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]) },
  { kind: 'image', mime: 'image/jpeg', ext: 'jpg', test: (b) => at(b, 0, [0xff, 0xd8, 0xff]) },
  { kind: 'image', mime: 'image/gif', ext: 'gif', test: (b) => at(b, 0, [0x47, 0x49, 0x46, 0x38]) && (b[4] === 0x37 || b[4] === 0x39) && b[5] === 0x61 },
  { kind: 'image', mime: 'image/webp', ext: 'webp', test: (b) => at(b, 0, [0x52, 0x49, 0x46, 0x46]) && at(b, 8, [0x57, 0x45, 0x42, 0x50]) },
  { kind: 'video', mime: 'video/mp4', ext: 'mp4', test: (b) => at(b, 4, [0x66, 0x74, 0x79, 0x70]) }, // "ftyp"
  { kind: 'video', mime: 'video/webm', ext: 'webm', test: (b) => at(b, 0, [0x1a, 0x45, 0xdf, 0xa3]) }, // EBML
]

export const MIME_BY_EXT = Object.fromEntries(SIGS.map((s) => [s.ext, s.mime])) as Record<string, string>
export const FILE_PATTERN = /^[0-9a-f]{32}\.(png|jpg|gif|webp|mp4|webm)$/

export const mediaDir = () => process.env.MEDIA_DIR ?? 'uploads'
const mb = (env: string | undefined, def: number) => Math.floor(Number(env ?? def) * 1024 * 1024)
const limit = (kind: MediaKind) => (kind === 'image' ? mb(process.env.MEDIA_IMAGE_MB, 3) : mb(process.env.MEDIA_VIDEO_MB, 10))

export class MediaError extends Error {
  constructor(readonly code: 'empty' | 'too-large' | 'unsupported-type') {
    super(code)
  }
}
export const mediaMessages = {
  empty: 'ไฟล์ว่างเปล่า',
  'too-large': 'ไฟล์ใหญ่เกินกำหนด (รูปไม่เกิน 3 MB · วิดีโอไม่เกิน 10 MB)',
  'unsupported-type': 'รับเฉพาะรูป PNG/JPEG/GIF/WebP และวิดีโอ MP4/WebM',
}

/** ตรวจแล้วบันทึกไฟล์ คืนชื่อไฟล์ที่เก็บ (เช่น "ab12….mp4") */
export async function saveMedia(file: File): Promise<{ file: string; kind: MediaKind }> {
  if (file.size === 0) throw new MediaError('empty')
  const bytes = new Uint8Array(await file.arrayBuffer())
  const sig = SIGS.find((s) => s.test(bytes))
  if (!sig) throw new MediaError('unsupported-type')
  if (bytes.length > limit(sig.kind)) throw new MediaError('too-large')
  const name = `${Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('hex')}.${sig.ext}`
  mkdirSync(mediaDir(), { recursive: true })
  await Bun.write(join(mediaDir(), name), bytes)
  return { file: name, kind: sig.kind }
}

export const pathOfMedia = (file: string) => (FILE_PATTERN.test(file) ? join(mediaDir(), file) : null)
export const removeMedia = (file: string | null) => {
  const p = file && pathOfMedia(file)
  if (p) rmSync(p, { force: true })
}
