// GET /uploads/:id — เสิร์ฟไฟล์ที่อัปโหลด · ?download=1 บังคับดาวน์โหลด
//   ชนิดมาจากที่ตรวจตอนอัปโหลด (ไม่ใช่จาก URL) · nosniff · sandbox CSP กัน PDF/ไฟล์รันสคริปต์ · id สุ่มเดาไม่ได้ จึง cache ได้ยาว
import { status, type RouteContext } from '@core/route'
import { getUpload, isImage, pathOf } from '../../lib/uploads'

export const layout = false

export const GET = ({ params, query, request }: RouteContext) => {
  const u = getUpload(params.id as string)
  if (!u) return status(404, 'Not Found')

  const etag = `"${u.sha256.slice(0, 32)}"`
  const headers: Record<string, string> = {
    'content-type': u.mime,
    etag,
    'cache-control': 'public, max-age=31536000, immutable',
    'x-content-type-options': 'nosniff',
    'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; sandbox",
    'content-disposition': `${query.download === '1' || !(isImage(u) || u.mime === 'application/pdf') ? 'attachment' : 'inline'}; filename*=UTF-8''${encodeURIComponent(u.name)}`,
  }
  if (request.headers.get('if-none-match') === etag) return new Response(null, { status: 304, headers })
  return new Response(Bun.file(pathOf(u)), { headers })
}
