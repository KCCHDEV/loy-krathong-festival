/**
 * หน้า error สำหรับตอนพัฒนา (ไม่ใช้ใน production/test): แสดงข้อความ + stack trace ที่คลิกเปิดไฟล์ได้ง่าย
 * production ยังตอบข้อความทั่วไป ไม่เปิดเผยรายละเอียด
 */
import { escapeHtml } from './jsx'

export const isDevMode = () => process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'

const esc = (s: unknown) => escapeHtml(String(s))

export function errorOverlay(error: unknown, path: string) {
  const err = error instanceof Error ? error : new Error(String(error))
  // เน้นบรรทัดที่อยู่ในโปรเจกต์ (ไม่ใช่ node_modules) ให้เห็นก่อน
  const lines = (err.stack ?? '').split('\n').slice(1)
  const frames = lines
    .map((l) => {
      const mine = !l.includes('node_modules') && !l.includes('node:') && !l.includes('native')
      return `<li class="${mine ? 'mine' : ''}">${esc(l.trim())}</li>`
    })
    .join('')

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(err.name)} · Kitsune dev</title>
<style>
body{margin:0;background:#17121c;color:#f5eefb;font:14px/1.6 ui-monospace,Menlo,Consolas,monospace}
main{max-width:960px;margin:0 auto;padding:32px 20px}
.tag{display:inline-block;background:#e5484d;color:#fff;border-radius:4px;padding:2px 8px;font-size:12px}
h1{font-size:22px;margin:12px 0 4px;word-break:break-word}
.path{color:#a99bb8;margin:0 0 20px}
ol{list-style:none;margin:0;padding:0;background:#211a28;border-radius:8px;overflow:hidden}
li{padding:6px 14px;color:#8d7f9c;border-bottom:1px solid #2b2233;word-break:break-all}
li.mine{color:#ffd9a8;background:#2d2118}
p.hint{color:#8d7f9c;margin-top:20px}
</style></head><body><main>
<span class="tag">500 · dev</span>
<h1>${esc(err.name)}: ${esc(err.message)}</h1>
<p class="path">${esc(path)}</p>
<ol>${frames}</ol>
<p class="hint">หน้านี้แสดงเฉพาะตอนพัฒนา — production จะตอบข้อความทั่วไป</p>
</main></body></html>`
}
