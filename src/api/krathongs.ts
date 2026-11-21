// GET /api/krathongs — กระทงล่าสุด · POST /api/krathongs — ลอยกระทงใหม่
import { defineRoute } from '@core/route'
import { t } from '@core/schema'
import { COLORS, DECOS, MODELS, add, latest } from '../lib/krathong'

const oneOf = (values: readonly string[]) => t.Union(values.map((v) => t.Literal(v)) as any)

export const GET = () => latest()

// shortcut: ยังไม่จำกัดอัตราการลอยต่อ IP, เพิ่ม rate limit ก่อนเปิดใช้จริงในวงกว้าง
export const POST = defineRoute({
  body: t.Object({
    name: t.String({ minLength: 1, maxLength: 20 }),
    wish: t.String({ minLength: 1, maxLength: 40 }),
    color: oneOf(COLORS),
    model: oneOf(Object.keys(MODELS)),
    deco: oneOf(Object.keys(DECOS)),
  }),
  handler: ({ body }) => add(body.name.trim(), body.wish.trim(), body.color, body.model as string, body.deco as string),
})
