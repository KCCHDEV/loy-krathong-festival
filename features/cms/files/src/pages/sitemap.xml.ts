// GET /sitemap.xml — รายการ URL ให้เครื่องมือค้นหา (บทความและหน้าที่เผยแพร่แล้ว)
import { escapeHtml } from '@core/jsx'
import type { RouteContext } from '@core/route'
import { listEntries } from '../lib/cms'

export const layout = false

export const GET = ({ request }: RouteContext) => {
  const origin = (process.env.SITE_URL ?? new URL(request.url).origin).replace(/\/$/, '')
  const entries = listEntries({ status: 'published', limit: 5000 })
  const urls = [
    `<url><loc>${escapeHtml(origin)}/</loc></url>`,
    `<url><loc>${escapeHtml(origin)}/blog</loc></url>`,
    ...entries.map((e) => `<url><loc>${escapeHtml(`${origin}${e.kind === 'post' ? '/blog/' : '/p/'}${encodeURIComponent(e.slug)}`)}</loc><lastmod>${new Date(e.updated_at).toISOString()}</lastmod></url>`),
  ].join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=300' },
  })
}
