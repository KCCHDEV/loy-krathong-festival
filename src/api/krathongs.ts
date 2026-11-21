// GET /api/krathongs — กระทงล่าสุด · POST /api/krathongs — ลอยกระทงใหม่
import { defineRoute } from '@core/route'
import { t } from '@core/schema'
import { COLORS, add, latest } from '../lib/krathong'

export const GET = () => latest()

// shortcut: ยังไม่จำกัดอัตราการลอยต่อ IP, เพิ่ม rate limit ก่อนเปิดใช้จริงในวงกว้าง
export const POST = defineRoute({
  body: t.Object({
    name: t.String({ minLength: 1, maxLength: 20 }),
    wish: t.String({ minLength: 1, maxLength: 40 }),
    color: t.Union(COLORS.map((c) => t.Literal(c)) as any),
  }),
  handler: ({ body }) => add(body.name.trim(), body.wish.trim(), body.color),
})
