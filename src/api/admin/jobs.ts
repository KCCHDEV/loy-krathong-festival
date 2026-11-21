// /api/admin/jobs — ดูคิวงาน และใส่งานเข้าคิว (ต้องมี x-api-key ตาม _guard.ts)
import { defineRoute, t } from '@core/route'
import { jobs } from '@core/jobs'

// GET /api/admin/jobs?status=failed&limit=20
export const GET = defineRoute({
  query: t.Object({
    status: t.Optional(t.Union([t.Literal('pending'), t.Literal('running'), t.Literal('done'), t.Literal('failed')])),
    limit: t.Optional(t.Numeric({ minimum: 1, maximum: 200 })),
  }),
  handler: ({ query }) => ({ stats: jobs.stats(), jobs: jobs.list({ status: query.status, limit: query.limit ?? 50 }) }),
})

// POST /api/admin/jobs  { "name": "echo", "payload": {...}, "delayMs": 5000, "uniqueKey": "..." }
export const POST = defineRoute({
  body: t.Object({ name: t.String({ minLength: 1, maxLength: 64 }), payload: t.Optional(t.Any()), delayMs: t.Optional(t.Integer({ minimum: 0 })), uniqueKey: t.Optional(t.String()) }),
  handler: ({ body, set }) => {
    const id = jobs.enqueue(body.name, body.payload ?? {}, { delayMs: body.delayMs, uniqueKey: body.uniqueKey })
    if (id === null) {
      set.status = 409
      return { error: 'มีงานที่ uniqueKey นี้อยู่แล้ว' }
    }
    set.status = 202
    return { id }
  },
})
