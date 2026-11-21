// GET /api/krathongs — กระทงล่าสุด · POST /api/krathongs (multipart/form-data) — ลอยกระทงใหม่ แนบรูป/วิดีโอได้ (ฟิลด์ media)
import { defineRoute, status } from '@core/route'
import { t } from '@core/schema'
import { COLORS, DECOS, MODELS, add, latest } from '../lib/krathong'
import { MediaError, mediaMessages, removeMedia, saveMedia } from '../lib/media'

const oneOf = (values: readonly string[]) => t.Union(values.map((v) => t.Literal(v)) as any)

export const GET = () => latest()

// กันรัวลอย/อัปโหลดรัว: ต่อ IP ไม่เกิน 6 อันต่อนาที (นับใน memory ของ process นี้)
// shortcut: หลาย worker ต่างคนต่างนับ และ IP ตัวเดียวกันหลัง NAT ใช้โควต้าร่วมกัน, ใช้ core/ratelimit.ts + proxy จริงเมื่อขึ้น production
const hits = new Map<string, number[]>()
const tooMany = (ip: string) => {
  const now = Date.now(), recent = (hits.get(ip) ?? []).filter((x) => now - x < 60_000)
  recent.push(now); hits.set(ip, recent)
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1]! > 60_000) hits.delete(k)
  return recent.length > 6
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
    if (tooMany(ip as string)) return status(429, { error: 'ลอยบ่อยเกินไป รอสักครู่แล้วลองใหม่' })
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
