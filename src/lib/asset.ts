/**
 * ต่อท้าย ?v=<เวลาแก้ไขไฟล์> ให้ไฟล์ static — แก้ CSS/JS แล้ว browser โหลดใหม่ทันที
 * และเพราะ URL เปลี่ยนทุกครั้งที่ไฟล์เปลี่ยน server จึงสั่ง browser cache ได้ 1 ปีเต็ม (ดู core/static.ts)
 *   <link rel="stylesheet" href={asset('/public/style.css')} />
 *   <script src={asset('/public/kit.js')} defer></script>
 */
import { statSync } from 'node:fs'
import { join } from 'node:path'

const cache = new Map<string, string>()
const isProd = process.env.NODE_ENV === 'production'

const fileOf = (url: string) => join(process.cwd(), url.replace(/^\//, ''))

/** dev: เช็ก mtime ซ้ำได้ไม่เกินวินาทีละครั้งต่อไฟล์ (statSync ทุกครั้งที่ render หน้าเสียเวลาเปล่า) */
const recent = new Map<string, { v: string; at: number }>()

export function asset(url: string): string {
  const hit = cache.get(url)
  if (hit) return hit
  const r = recent.get(url)
  if (r && Date.now() - r.at < 1000) return r.v
  let versioned = url
  try {
    versioned = `${url}?v=${statSync(fileOf(url)).mtimeMs.toFixed(0)}`
  } catch {}
  if (isProd) cache.set(url, versioned) // production: ไฟล์ไม่เปลี่ยน คำนวณครั้งเดียวพอ
  else recent.set(url, { v: versioned, at: Date.now() })
  return versioned
}
