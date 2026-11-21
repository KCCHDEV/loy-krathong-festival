// DELETE /api/uploads/:id — ลบไฟล์ (เจ้าของหรือ admin เท่านั้น)
import { defineRoute, status, t } from '@core/route'
import { deleteUpload, getUpload } from '../../lib/uploads'
import type { Account } from '../../lib/auth'

export const DELETE = defineRoute({
  params: t.Object({ id: t.String({ pattern: '^[0-9a-f]{32}$' }) }),
  handler: ({ params, user }) => {
    const upload = getUpload(params.id)
    if (!upload) return status(404, { error: 'ไม่พบไฟล์' })
    const me = user as Account
    if (upload.owner_id !== me.id && me.role !== 'admin') return status(403, { error: 'ลบได้เฉพาะไฟล์ของตัวเอง' })
    deleteUpload(params.id)
    return { ok: true }
  },
})
