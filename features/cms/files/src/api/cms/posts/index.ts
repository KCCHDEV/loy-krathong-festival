// GET /api/cms/posts?tag=&limit=&offset= — บทความที่เผยแพร่ (JSON สำหรับแอพ/หน้าอื่น)
import { defineRoute, t } from '@core/route'
import { countEntries, listEntries } from '../../../lib/cms'

export const GET = defineRoute({
  query: t.Object({ tag: t.Optional(t.String({ maxLength: 40 })), limit: t.Optional(t.Numeric({ minimum: 1, maximum: 50 })), offset: t.Optional(t.Numeric({ minimum: 0 })) }),
  detail: { summary: 'รายการบทความที่เผยแพร่' },
  handler: ({ query }) => {
    const opts = { kind: 'post', status: 'published', tag: query.tag } as const
    const items = listEntries({ ...opts, limit: query.limit ?? 20, offset: query.offset ?? 0 }).map(({ body: _body, ...rest }) => rest)
    return { total: countEntries(opts), items }
  },
})
