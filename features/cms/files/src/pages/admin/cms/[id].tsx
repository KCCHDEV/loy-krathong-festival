// /admin/cms/:id — แก้ไข · POST บันทึก · actions: ลบ / ย้อนกลับไปฉบับเก่า (POST /admin/cms/:id/_/delete, /_/restore?rev=)
import { defineLoader, defineRoute, notFound, redirect, revalidateTag, t, type PageProps, type RouteContext } from '@core/route'
import { Card, Button, PageHeader } from '@components'
import EntryForm from '../../../components/cms/EntryForm'
import { CmsError, deleteEntry, getById, restoreRevision, revisions, updateEntry } from '../../../lib/cms'
import type { Account } from '../../../lib/auth'

export const loader = defineLoader(({ params }) => getById(Number(params.id)) ?? notFound())
export const generateMetadata = ({ data }: PageProps<typeof loader>) => ({ title: `แก้ไข: ${data.title}`, path: '/admin' })

export default function EditEntry(ctx: RouteContext) {
  const { data, query } = ctx as PageProps<typeof loader> & RouteContext
  const revs = revisions(data.id)
  const publicUrl = data.kind === 'post' ? `/blog/${data.slug}` : `/p/${data.slug}`
  return (
    <>
      <PageHeader title={data.title} back={{ href: '/admin/cms', label: 'รายการทั้งหมด' }}>
        {data.status === 'published' ? (
          <p>
            <a href={publicUrl}>ดูหน้าจริง →</a>
          </p>
        ) : (
          <p class="muted">ร่าง — ยังไม่ปรากฏบนเว็บ</p>
        )}
      </PageHeader>
      {query.saved ? <div class="alert alert-ok" role="status">บันทึกแล้ว</div> : ''}
      <EntryForm action={`/admin/cms/${data.id}`} entry={data} error={query.error ? 'ชื่อเรื่องต้องมี 1–200 ตัวอักษร' : undefined} />

      <div class="grid">
        <Card title="ประวัติการแก้ไข">
          {revs.length ? (
            <ul class="stack">
              {revs.map((r) => (
                <li>
                  <span class="muted small" safe>{new Date(r.created_at).toLocaleString('th-TH')}</span> <span safe>{r.title}</span>
                  <form method="post" action={`/admin/cms/${data.id}/_/restore?rev=${r.id}`} style="display:inline" onsubmit="return confirm('ย้อนกลับไปฉบับนี้? (ฉบับปัจจุบันจะถูกเก็บในประวัติ)')">
                    <button class="btn btn-ghost btn-sm" type="submit">
                      ย้อนกลับ
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          ) : (
            <p class="muted">ยังไม่มีประวัติ — จะเก็บอัตโนมัติเมื่อแก้ชื่อหรือเนื้อหา (เก็บล่าสุด 20 ฉบับ)</p>
          )}
        </Card>
        <Card title="ลบ">
          <p class="muted">ลบแล้วกู้คืนไม่ได้ (รวมประวัติ)</p>
          <form method="post" action={`/admin/cms/${data.id}/_/delete`} onsubmit="return confirm('ลบรายการนี้ถาวร?')">
            <Button type="submit" variant="danger">
              ลบ
            </Button>
          </form>
        </Card>
      </div>
    </>
  )
}

export const POST = defineRoute({
  body: t.Object({
    title: t.String({ maxLength: 300 }),
    slug: t.Optional(t.String({ maxLength: 200 })),
    status: t.Optional(t.Union([t.Literal('draft'), t.Literal('published')])),
    tags: t.Optional(t.String({ maxLength: 500 })),
    body: t.Optional(t.String({ maxLength: 500_000 })),
  }),
  handler: ({ params, body, user }) => {
    const id = Number(params.id)
    try {
      updateEntry(id, body, (user as Account).id)
      revalidateTag('cms')
      return redirect(`/admin/cms/${id}?saved=1`)
    } catch (err) {
      if (err instanceof CmsError) return err.code === 'not-found' ? redirect('/admin/cms') : redirect(`/admin/cms/${id}?error=1`)
      throw err
    }
  },
})

export const actions = {
  delete: defineRoute({
    handler: ({ params }) => {
      deleteEntry(Number(params.id))
      revalidateTag('cms')
      return redirect('/admin/cms')
    },
  }),
  restore: defineRoute({
    query: t.Object({ rev: t.Numeric() }),
    handler: ({ params, query, user }) => {
      const id = Number(params.id)
      try {
        restoreRevision(id, query.rev, (user as Account).id)
        revalidateTag('cms')
        return redirect(`/admin/cms/${id}?saved=1`)
      } catch (err) {
        if (err instanceof CmsError) return redirect(`/admin/cms/${id}?error=1`)
        throw err
      }
    },
  }),
}
