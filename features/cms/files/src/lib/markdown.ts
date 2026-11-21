/**
 * markdown → HTML ที่ปลอดภัย (เขียนเอง ไม่พึ่งไลบรารี)
 *
 * หลักการ: escape ข้อความทั้งหมดก่อน แล้วค่อยแปลง markdown ที่รู้จักเป็น tag ของเราเอง → HTML ดิบจากผู้เขียนไม่มีทางหลุดเข้าไป
 * ลิงก์/รูปรับเฉพาะ http(s), mailto, path ในเว็บ (/…, ./…, #…) — javascript:, data:, // ถูกตัดเหลือแค่ข้อความ
 *
 * รองรับ: หัวข้อ # – ###### (มี id ให้ลิงก์ตรง), ย่อหน้า, **หนา**, *เอียง*, ~~ขีดฆ่า~~, `โค้ด`, ```บล็อกโค้ด```,
 *         > อ้างอิง, รายการ - * + และ 1. , เส้นคั่น ---, [ลิงก์](url), ![รูป](url)
 */
import { escapeHtml, type SafeHtml } from '@core/jsx'

const SAFE_URL = /^(?:https?:\/\/[^\s]+|mailto:[^\s]+|\/(?!\/)[^\s]*|#[^\s]*|\.{1,2}\/[^\s]*)$/i
const EXTERNAL = /^https?:\/\//i

/** ตัวอักษร/ตัวเลขทุกภาษา (รวมไทย) เป็น id ของหัวข้อ */
export function slugify(text: string): string {
  return (
    text
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\p{M}]+/gu, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80) || 'section'
  )
}

/** แปลงข้อความ inline — รับข้อความที่ escape แล้วเท่านั้น */
function inline(escaped: string): string {
  const stash: string[] = []
  const hold = (html: string) => `\u0000${stash.push(html) - 1}\u0000`

  let s = escaped.replace(/`([^`\n]+)`/g, (_, code) => hold(`<code>${code}</code>`))

  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_m, alt, url, title) =>
    SAFE_URL.test(url) ? hold(`<img src="${url}" alt="${alt}"${title ? ` title="${title}"` : ''} loading="lazy">`) : alt,
  )
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_m, text, url, title) => {
    if (!SAFE_URL.test(url)) return text
    const rel = EXTERNAL.test(url) ? ' target="_blank" rel="noopener noreferrer nofollow ugc"' : ''
    return hold(`<a href="${url}"${title ? ` title="${title}"` : ''}${rel}>${text}</a>`)
  })

  s = s.replace(/\*\*([^*\n]+)\*\*|__([^_\n]+)__/g, (_m, a, b) => `<strong>${a ?? b}</strong>`)
  s = s.replace(/(^|[^*\w])\*([^*\s][^*\n]*?)\*(?!\*)/g, (_m, pre, text) => `${pre}<em>${text}</em>`)
  s = s.replace(/(^|[^_\w])_([^_\s][^_\n]*?)_(?!\w)/g, (_m, pre, text) => `${pre}<em>${text}</em>`)
  s = s.replace(/~~([^~\n]+)~~/g, '<del>$1</del>')

  return s.replace(/\u0000(\d+)\u0000/g, (_m, i) => stash[Number(i)]!)
}

const BLOCK_START = /^(?:#{1,6}\s|```|>\s?|\s*[-*+]\s+|\s*\d+[.)]\s+|(?:-{3,}|\*{3,}|_{3,})\s*$)/

export function renderMarkdown(source: string): SafeHtml {
  const lines = source.replace(/\r\n?/g, '\n').replace(/\u0000/g, '').split('\n')
  const ids = new Map<string, number>()
  const out: string[] = []

  const render = (ls: string[]): void => {
    let i = 0
    while (i < ls.length) {
      const line = ls[i]!
      if (!line.trim()) {
        i++
        continue
      }

      const fence = /^```\s*([\w+#.-]*)\s*$/.exec(line)
      if (fence) {
        const code: string[] = []
        i++
        while (i < ls.length && !/^```\s*$/.test(ls[i]!)) code.push(ls[i++]!)
        i++ // ปิดบล็อก
        const lang = fence[1] ? ` class="lang-${escapeHtml(fence[1])}"` : ''
        out.push(`<pre><code${lang}>${escapeHtml(code.join('\n'))}</code></pre>`)
        continue
      }

      const heading = /^(#{1,6})\s+(.*?)(?:\s+#+)?\s*$/.exec(line)
      if (heading) {
        const level = heading[1]!.length
        const base = slugify(heading[2]!)
        const n = ids.get(base) ?? 0
        ids.set(base, n + 1)
        out.push(`<h${level} id="${escapeHtml(n ? `${base}-${n}` : base)}">${inline(escapeHtml(heading[2]!))}</h${level}>`)
        i++
        continue
      }

      if (/^(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
        out.push('<hr>')
        i++
        continue
      }

      if (/^>\s?/.test(line)) {
        const quote: string[] = []
        while (i < ls.length && /^>\s?/.test(ls[i]!)) quote.push(ls[i++]!.replace(/^>\s?/, ''))
        out.push('<blockquote>')
        render(quote)
        out.push('</blockquote>')
        continue
      }

      const ul = /^\s*[-*+]\s+/
      const ol = /^\s*\d+[.)]\s+/
      if (ul.test(line) || ol.test(line)) {
        const ordered = ol.test(line)
        const marker = ordered ? ol : ul
        out.push(ordered ? '<ol>' : '<ul>')
        while (i < ls.length && marker.test(ls[i]!)) {
          let item = ls[i]!.replace(marker, '')
          i++
          // บรรทัดที่เยื้องต่อจากข้อนี้ถือเป็นเนื้อหาของข้อเดียวกัน
          while (i < ls.length && /^\s{2,}\S/.test(ls[i]!) && !marker.test(ls[i]!)) item += ' ' + ls[i++]!.trim()
          out.push(`<li>${inline(escapeHtml(item))}</li>`)
        }
        out.push(ordered ? '</ol>' : '</ul>')
        continue
      }

      const para: string[] = []
      while (i < ls.length && ls[i]!.trim() && !(para.length && BLOCK_START.test(ls[i]!))) para.push(ls[i++]!.trim())
      out.push(`<p>${inline(escapeHtml(para.join(' ')))}</p>`)
    }
  }

  render(lines)
  return out.join('\n') as SafeHtml
}

/** ข้อความล้วนจาก markdown (ใช้ทำ excerpt / description) */
export function plainText(source: string, max = 160): string {
  const text = source
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[>\-*+]\s+|^\d+[.)]\s+/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > max ? text.slice(0, max - 1).trimEnd() + '…' : text
}
