// GET /blog/feed.xml — RSS 2.0 ของบทความล่าสุด 20 ชิ้น (ตั้ง SITE_URL เป็นโดเมนจริงใน production)
import { escapeHtml } from '@core/jsx'
import type { RouteContext } from '@core/route'
import { listEntries } from '../../lib/cms'

export const layout = false

export const GET = ({ request }: RouteContext) => {
  const origin = (process.env.SITE_URL ?? new URL(request.url).origin).replace(/\/$/, '')
  const posts = listEntries({ kind: 'post', status: 'published', limit: 20 })
  const items = posts
    .map((p) => {
      const url = `${origin}/blog/${encodeURIComponent(p.slug)}`
      return `<item><title>${escapeHtml(p.title)}</title><link>${escapeHtml(url)}</link><guid isPermaLink="true">${escapeHtml(url)}</guid><pubDate>${new Date(p.published_at ?? p.created_at).toUTCString()}</pubDate><description>${escapeHtml(p.excerpt)}</description></item>`
    })
    .join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>บล็อก</title><link>${escapeHtml(origin)}/blog</link><description>บทความล่าสุด</description><language>th</language>${items}</channel></rss>`
  return new Response(xml, { headers: { 'content-type': 'application/rss+xml; charset=utf-8', 'cache-control': 'public, max-age=300' } })
}
