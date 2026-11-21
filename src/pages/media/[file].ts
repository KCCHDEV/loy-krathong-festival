// GET /media/:file — เสิร์ฟรูป/วิดีโอที่แนบกับกระทง (รองรับ Range ให้วิดีโอเล่นบน Safari/เลื่อนได้)
//   ชนิดมาจากนามสกุลที่ตรวจตอนอัปโหลด · nosniff · sandbox CSP · ชื่อไฟล์สุ่มเดาไม่ได้ จึง cache ได้ยาว
import { status, type RouteContext } from '@core/route'
import { MIME_BY_EXT, pathOfMedia } from '../../lib/media'

export const layout = false

export const GET = ({ params, request }: RouteContext) => {
  const name = params.file as string
  const path = pathOfMedia(name)
  const file = path ? Bun.file(path) : null
  if (!file || !file.size) return status(404, 'Not Found')

  const headers: Record<string, string> = {
    'content-type': MIME_BY_EXT[name.split('.').pop()!]!,
    'cache-control': 'public, max-age=31536000, immutable',
    'x-content-type-options': 'nosniff',
    'content-security-policy': "default-src 'none'; sandbox",
    'accept-ranges': 'bytes',
  }
  const m = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('range') ?? '')
  if (m && (m[1] || m[2])) {
    const size = file.size
    let start = m[1] ? Number(m[1]) : size - Number(m[2])
    let end = m[1] && m[2] ? Number(m[2]) : size - 1
    start = Math.max(0, start); end = Math.min(end, size - 1)
    if (start > end) return new Response(null, { status: 416, headers: { 'content-range': `bytes */${size}` } })
    return new Response(file.slice(start, end + 1), { status: 206, headers: { ...headers, 'content-range': `bytes ${start}-${end}/${size}`, 'content-length': String(end - start + 1) } })
  }
  return new Response(file, { headers })
}
