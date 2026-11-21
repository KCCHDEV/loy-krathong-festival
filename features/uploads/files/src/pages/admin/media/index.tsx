// /admin/media — คลังไฟล์: อัปโหลด / ดู / คัดลอก markdown / ลบ
import { defineRoute, redirect, status, t, type RouteContext } from '@core/route'
import { Card, Button, PageHeader } from '@components'
import { UploadError, deleteUpload, isImage, listUploads, maxBytes, saveUpload, uploadMessages, urlOf } from '../../../lib/uploads'
import type { Account } from '../../../lib/auth'

export const metadata = { title: 'คลังไฟล์', path: '/admin' }

const kb = (n: number) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`)

export default function Media({ query }: RouteContext) {
  const items = listUploads(200)
  return (
    <>
      <PageHeader title="คลังไฟล์" lead={`${items.length} ไฟล์ · อัปโหลดได้ไม่เกิน ${kb(maxBytes())}`} />
      {query.error ? <div class="alert alert-error" role="alert" safe>{uploadMessages[query.error] ?? 'อัปโหลดไม่สำเร็จ'}</div> : ''}
      {query.uploaded ? <div class="alert alert-ok" role="status">อัปโหลดแล้ว</div> : ''}
      <Card title="อัปโหลดไฟล์">
        <form method="post" action="/admin/media" enctype="multipart/form-data" class="form">
          <input type="file" name="file" required accept="image/png,image/jpeg,image/gif,image/webp,application/pdf,text/plain" />
          <Button type="submit">อัปโหลด</Button>
        </form>
      </Card>
      <div class="media-grid">
        {items.map((u) => (
          <figure class="card media-item">
            {isImage(u) ? <img src={urlOf(u)} alt={u.name} loading="lazy" width="200" height="140" /> : <div class="media-file muted" safe>{u.mime.split('/')[1]?.split(';')[0]?.toUpperCase()}</div>}
            <figcaption>
              <a href={urlOf(u)} target="_blank" rel="noopener" safe>
                {u.name}
              </a>
              <div class="muted small" safe>{kb(u.size)}</div>
              <code class="small break" safe>{isImage(u) ? `![${u.name}](${urlOf(u)})` : `[${u.name}](${urlOf(u)})`}</code>
              <form method="post" action={`/admin/media/_/delete?id=${u.id}`} onsubmit="return confirm('ลบไฟล์นี้?')">
                <button class="btn btn-ghost btn-sm" type="submit">
                  ลบ
                </button>
              </form>
            </figcaption>
          </figure>
        ))}
        {items.length ? '' : <p class="muted">ยังไม่มีไฟล์</p>}
      </div>
    </>
  )
}

export const POST = defineRoute({
  body: t.Object({ file: t.File({ error: 'เลือกไฟล์ก่อน' }) }),
  handler: async ({ body, user }) => {
    try {
      await saveUpload(body.file, (user as Account).id)
      return redirect('/admin/media?uploaded=1')
    } catch (err) {
      if (err instanceof UploadError) return redirect(`/admin/media?error=${err.code}`)
      throw err
    }
  },
})

export const actions = {
  delete: defineRoute({
    query: t.Object({ id: t.String({ pattern: '^[0-9a-f]{32}$' }) }),
    handler: ({ query }) => (deleteUpload(query.id) ? redirect('/admin/media') : status(404, 'Not Found')),
  }),
}
