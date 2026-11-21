/**
 * ความปลอดภัยพื้นฐานของทุก request
 *  - header มาตรฐาน: nosniff, referrer-policy, X-Frame-Options (กัน clickjacking)
 *  - กัน CSRF: คำขอที่เปลี่ยนข้อมูล (POST/PUT/PATCH/DELETE) ที่ browser ส่งมาจากเว็บอื่นถูกปฏิเสธ 403
 *    ดูจาก Origin / Sec-Fetch-Site — ไม่มี header นี้ (curl, เทส, server-to-server) ผ่านตามปกติ
 *    เว็บอื่นที่อนุญาต: ALLOWED_ORIGINS=https://a.com,https://b.com
 */
import type { App, Context } from './server'

const UNSAFE = new Set(['POST', 'PUT', 'PATCH', 'DELETE'])
const allowed = new Set(
  (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
)

/** คำขอนี้มาจากหน้าเว็บของเราเอง (หรือไม่ได้มาจาก browser) หรือไม่ */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin')
  if (origin) {
    if (allowed.has(origin)) return true
    const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? new URL(request.url).host
    try {
      return new URL(origin).host === host
    } catch {
      return false // Origin: null หรือรูปแบบเพี้ยน
    }
  }
  const site = request.headers.get('sec-fetch-site')
  return !site || site === 'same-origin' || site === 'none'
}

export const security = (app: App) =>
  app.onRequest(({ request }: Context) => {
    if (UNSAFE.has(request.method) && !isSameOrigin(request)) {
      return Response.json({ error: 'Cross-origin request blocked' }, { status: 403 })
    }
  })
