// POST /admin/cms/preview — แปลง markdown เป็น HTML ให้พรีวิวสดในหน้าแก้ไข (htmx-style fragment)
import { defineRoute, t } from '@core/route'
import { renderMarkdown } from '../../../lib/markdown'

export const POST = defineRoute({
  body: t.Object({ body: t.String({ maxLength: 500_000 }) }),
  handler: ({ body }) => renderMarkdown(body.body) || '<p class="muted">(ว่าง)</p>',
})
