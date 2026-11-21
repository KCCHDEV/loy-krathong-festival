// /admin/cms/new — เขียนบทความ/หน้าใหม่
import { defineRoute, redirect, revalidateTag, t, type RouteContext } from '@core/route'
import { PageHeader } from '@components'
import EntryForm from '../../../components/cms/EntryForm'
import { CmsError, createEntry } from '../../../lib/cms'
import type { Account } from '../../../lib/auth'

export const metadata = { title: 'เขียนใหม่', path: '/admin' }

export default function NewEntry({ query }: RouteContext) {
  return (
    <>
      <PageHeader title="เขียนใหม่" back={{ href: '/admin/cms', label: 'รายการทั้งหมด' }} />
      <EntryForm action="/admin/cms/new" error={query.error ? 'ชื่อเรื่องต้องมี 1–200 ตัวอักษร' : undefined} entry={{ kind: query.kind === 'page' ? 'page' : 'post' }} />
    </>
  )
}

export const POST = defineRoute({
  body: t.Object({
    title: t.String({ maxLength: 300 }),
    slug: t.Optional(t.String({ maxLength: 200 })),
    kind: t.Optional(t.Union([t.Literal('post'), t.Literal('page')])),
    status: t.Optional(t.Union([t.Literal('draft'), t.Literal('published')])),
    tags: t.Optional(t.String({ maxLength: 500 })),
    body: t.Optional(t.String({ maxLength: 500_000 })),
  }),
  handler: ({ body, user }) => {
    try {
      const entry = createEntry({ ...body, kind: body.kind ?? 'post', authorId: (user as Account).id })
      revalidateTag('cms')
      return redirect(`/admin/cms/${entry.id}?saved=1`)
    } catch (err) {
      if (err instanceof CmsError) return redirect('/admin/cms/new?error=1')
      throw err
    }
  },
})
