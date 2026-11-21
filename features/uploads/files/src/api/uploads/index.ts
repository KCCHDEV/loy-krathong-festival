// GET /api/uploads — ไฟล์ของฉัน (admin เห็นทั้งหมด) · POST /api/uploads (multipart: file) → { id, url, ... }
import { defineRoute, status, t } from '@core/route'
import { UploadError, listByOwner, listUploads, saveUpload, uploadMessages, urlOf } from '../../lib/uploads'
import type { Account } from '../../lib/auth'

const view = (u: ReturnType<typeof listUploads>[number]) => ({ id: u.id, name: u.name, mime: u.mime, size: u.size, url: urlOf(u), createdAt: u.created_at })

export const GET = ({ user }: { user: Account }) => ({ items: (user.role === 'admin' ? listUploads(200) : listByOwner(user.id)).map(view) })

export const POST = defineRoute({
  body: t.Object({ file: t.File({ error: 'ต้องส่งไฟล์ในฟิลด์ file' }) }),
  detail: { summary: 'อัปโหลดไฟล์ (multipart/form-data)' },
  handler: async ({ body, user, set }) => {
    try {
      const upload = await saveUpload(body.file, (user as Account).id)
      set.status = 201
      return view(upload)
    } catch (err) {
      if (err instanceof UploadError) return status(err.code === 'too-large' ? 413 : 415, { error: uploadMessages[err.code], code: err.code })
      throw err
    }
  },
})
