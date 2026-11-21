// DELETE /api/admin/krathongs/:id — ลบกระทง (และรูป/วิดีโอที่แนบ) ที่ไม่เหมาะสม · ต้องมี x-api-key (ดู ../_guard.ts)
import { status, type RouteContext } from '@core/route'
import { remove } from '../../../lib/krathong'

export const DELETE = ({ params }: RouteContext) => {
  const ok = remove(Number(params.id))
  return ok ? { ok: true } : status(404, { error: 'ไม่พบกระทง' })
}
