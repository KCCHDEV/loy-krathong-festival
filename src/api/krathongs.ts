// GET /api/krathongs — กระทงล่าสุด · POST /api/krathongs (multipart/form-data) — ลอยกระทงใหม่ แนบรูป/วิดีโอได้ (ฟิลด์ media)
import { defineRoute, status, type RouteContext } from '@core/route'
import { t } from '@core/schema'
import { COLORS, DECOS, MODELS, add, latest, random } from '../lib/krathong'
import { MediaError, mediaMessages, removeMedia, saveMedia } from '../lib/media'

const oneOf = (values: readonly string[]) => t.Union(values.map((v) => t.Literal(v)) as any)

// ?random=N (1–30) สุ่มจากกระทงทั้งหมด · ไม่ใส่ = 60 อันล่าสุด
export const GET = ({ query }: RouteContext) => {
  const n = Math.min(30, Math.floor(Number(query.random)))
  return n >= 1 ? random(n) : latest()
}

// กันรัวลอย/อัปโหลดรัว ต่อ IP: ไม่เกิน 6 อัน/นาที และ 40 อัน/ชั่วโมง (นับใน memory ของ process นี้ · ตั้งได้ด้วย env)
// ส่วนคำขอทั่วไปทุก path จำกัดที่ createApp (RATE_LIMIT, ค่าเริ่มต้น 300 ครั้ง/นาที/IP)
// shortcut: หลาย worker ต่างคนต่างนับ และ IP เดียวกันหลัง NAT ใช้โควต้าร่วมกัน, ตั้ง TRUST_PROXY=1 เมื่ออยู่หลัง proxy จริง ไม่งั้น IP ผู้ใช้ทุกคนจะเป็น IP ของ proxy
const PER_MIN = Number(process.env.KRATHONG_PER_MIN ?? 6), PER_HOUR = Number(process.env.KRATHONG_PER_HOUR ?? 40)
const hits = new Map<string, number[]>()
function limited(ip: string): string | null {
  const now = Date.now(), recent = (hits.get(ip) ?? []).filter((x) => now - x < 3_600_000)
  recent.push(now); hits.set(ip, recent)
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1]! > 3_600_000) hits.delete(k)
  if (recent.length > PER_HOUR) return 'วันนี้ลอยเยอะแล้ว กลับมาใหม่ในอีกสักชั่วโมงนะ'
  if (recent.filter((x) => now - x < 60_000).length > PER_MIN) return 'ลอยบ่อยเกินไป รอสักครู่แล้วลองใหม่'
  return null
}

export const POST = defineRoute({
  body: t.Object({
    name: t.String({ minLength: 1, maxLength: 20 }),
    wish: t.String({ minLength: 1, maxLength: 40 }),
    color: oneOf(COLORS),
    model: oneOf(Object.keys(MODELS)),
    deco: oneOf(Object.keys(DECOS)),
    media: t.Optional(t.File()),
  }),
  handler: async ({ body, ip }) => {
    const wait = limited(ip as string)
    if (wait) return status(429, { error: wait })
    let media
    try {
      if (body.media && body.media.size > 0) media = await saveMedia(body.media)
    } catch (err) {
      if (err instanceof MediaError) return status(err.code === 'too-large' ? 413 : 415, { error: mediaMessages[err.code] })
      throw err
    }
    try {
      return add(body.name.trim(), body.wish.trim(), body.color, body.model as string, body.deco as string, media)
    } catch (err) {
      removeMedia(media?.file ?? null) // บันทึกฐานข้อมูลไม่สำเร็จ ไม่ทิ้งไฟล์กำพร้า
      throw err
    }
  },
})
