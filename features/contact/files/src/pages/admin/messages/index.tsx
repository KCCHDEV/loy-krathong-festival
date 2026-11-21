// /admin/messages — ข้อความจากฟอร์มติดต่อ (ยังไม่อ่านขึ้นก่อน)
import { defineRoute, redirect, status, t } from '@core/route'
import { Card, PageHeader } from '@components'
import { countUnread, deleteMessage, listMessages, markRead } from '../../../lib/contact'

export const metadata = { title: 'ข้อความ', path: '/admin' }

export default function Messages() {
  const items = listMessages(200)
  return (
    <>
      <PageHeader title="ข้อความจากฟอร์มติดต่อ" lead={`${countUnread()} ยังไม่ได้อ่าน`} back={{ href: '/admin', label: 'หลังบ้าน' }} />
      {items.length ? (
        <div class="stack">
          {items.map((m) => (
            <Card>
              <h2>
                <span safe>{m.subject}</span> {m.is_read ? '' : <span class="badge badge-ok">ใหม่</span>}
              </h2>
              <p class="muted small" safe>
                {`${m.name} <${m.email}> · ${new Date(m.created_at).toLocaleString('th-TH')} · ${m.ip}`}
              </p>
              <p style="white-space:pre-wrap" safe>{m.message}</p>
              <p>
                <a class="btn btn-outline btn-sm" href={`mailto:${encodeURIComponent(m.email).replace(/%40/g, '@')}?subject=${encodeURIComponent('Re: ' + m.subject)}`}>
                  ตอบอีเมล
                </a>{' '}
                {m.is_read ? (
                  ''
                ) : (
                  <form method="post" action={`/admin/messages/_/read?id=${m.id}`} style="display:inline">
                    <button class="btn btn-outline btn-sm" type="submit">
                      ทำเครื่องหมายว่าอ่านแล้ว
                    </button>
                  </form>
                )}{' '}
                <form method="post" action={`/admin/messages/_/delete?id=${m.id}`} style="display:inline" onsubmit="return confirm('ลบข้อความนี้?')">
                  <button class="btn btn-ghost btn-sm" type="submit">
                    ลบ
                  </button>
                </form>
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <p class="muted">ยังไม่มีข้อความ</p>
      )}
    </>
  )
}

const idQuery = t.Object({ id: t.Numeric() })

export const actions = {
  read: defineRoute({
    query: idQuery,
    handler: ({ query }) => (markRead(query.id), redirect('/admin/messages')),
  }),
  delete: defineRoute({
    query: idQuery,
    handler: ({ query }) => (deleteMessage(query.id) ? redirect('/admin/messages') : status(404, 'Not Found')),
  }),
}
