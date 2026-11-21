import { readFileSync, statSync } from 'node:fs'
import { relative } from 'node:path'
import type { SafeHtml } from '@core/jsx'
import { highlight } from '../lib/highlight'

const isProd = process.env.NODE_ENV === 'production'
const safeIcon = '&lt;/&gt;' // escape ไว้แล้ว

type Loaded = { mtime: number; html: SafeHtml; lines: number; name: string }
const cache = new Map<string, Loaded>()

/** อ่าน + highlight ไฟล์ครั้งเดียว (dev: อ่านใหม่เมื่อไฟล์เปลี่ยน) */
function load(file: string): Loaded {
  const hit = cache.get(file)
  if (hit && isProd) return hit
  const mtime = statSync(file).mtimeMs
  if (hit && hit.mtime === mtime) return hit
  const html = highlight(readFileSync(file, 'utf8'))
  const loaded = { mtime, html, lines: html.split('\n').length, name: relative(process.cwd(), file).replaceAll('\\', '/') }
  cache.set(file, loaded)
  return loaded
}

/**
 * แสดงซอร์สโค้ดจริงของไฟล์ (พร้อม highlight) — ส่ง import.meta.path มาได้เลย
 *   <Source file={import.meta.path} />
 */
export default function Source({ file, open }: { file: string; open?: boolean }) {
  const { html, lines, name } = load(file)

  return (
    <details class="source" open={open}>
      <summary>
        <span class="source-icon" aria-hidden="true">
          {safeIcon}
        </span>
        <span class="source-name">
          <span class="muted">ดูโค้ด</span> <code safe>{name}</code>
        </span>
        <span class="source-meta" safe>{`${lines} บรรทัด`}</span>
      </summary>
      <pre>
        <code>{html}</code>
      </pre>
    </details>
  )
}
