// GET /api/cms/posts/:slug — บทความหนึ่งชิ้น (markdown ต้นฉบับ + HTML ที่แปลงแล้ว)
import { defineRoute, status, t } from '@core/route'
import { getBySlug } from '../../../lib/cms'
import { renderMarkdown } from '../../../lib/markdown'

export const GET = defineRoute({
  params: t.Object({ slug: t.String({ maxLength: 200 }) }),
  detail: { summary: 'บทความตาม slug' },
  handler: ({ params }) => {
    const post = getBySlug('post', params.slug)
    return post ? { ...post, html: renderMarkdown(post.body) } : status(404, { error: 'ไม่พบบทความ' })
  },
})
