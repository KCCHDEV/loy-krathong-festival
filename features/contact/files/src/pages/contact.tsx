// /contact — ฟอร์มติดต่อ (สาธารณะ ไม่ต้อง login)
import { defineRoute, redirect, t, type RouteContext } from '@core/route'
import { Card, Button, PageHeader } from '@components'
import { LIMITS, formToken, submitMessage } from '../lib/contact'

export const metadata = { title: 'ติดต่อเรา', path: '/contact' }

const errors: Record<string, string> = {
  name: 'กรุณากรอกชื่อ',
  email: 'รูปแบบอีเมลไม่ถูกต้อง',
  subject: 'กรุณากรอกหัวข้อ',
  message: 'ข้อความต้องยาว 5–5,000 ตัวอักษร',
  'rate-limited': 'ส่งข้อความถี่เกินไป กรุณารอสักครู่แล้วลองใหม่',
}

export default function Contact({ query }: RouteContext) {
  return (
    <>
      <PageHeader title="ติดต่อเรา" lead="ส่งข้อความถึงเรา เราจะตอบกลับทางอีเมล" />
      <Card>
        {query.sent ? <div class="alert alert-ok" role="status">ส่งข้อความแล้ว ขอบคุณที่ติดต่อ</div> : ''}
        {query.error ? <div class="alert alert-error" role="alert" safe>{errors[query.error] ?? 'ส่งไม่สำเร็จ'}</div> : ''}
        <form method="post" action="/contact" class="stack">
          <label>
            ชื่อ
            <input name="name" required maxlength={String(LIMITS.name)} autocomplete="name" value={query.name ?? ''} />
          </label>
          <label>
            อีเมล
            <input name="email" type="email" required maxlength={String(LIMITS.email)} autocomplete="email" value={query.email ?? ''} />
          </label>
          <label>
            หัวข้อ
            <input name="subject" required maxlength={String(LIMITS.subject)} value={query.subject ?? ''} />
          </label>
          <label>
            ข้อความ
            <textarea name="message" required rows="7" minlength="5" maxlength={String(LIMITS.message)} safe>
              {'\n' + (query.message ?? '')}
            </textarea>
          </label>
          {/* honeypot: ซ่อนด้วย CSS คนจริงไม่เห็นจึงไม่กรอก */}
          <div style="position:absolute;left:-9999px" aria-hidden="true">
            <label>
              อย่ากรอกช่องนี้
              <input name="website" tabindex="-1" autocomplete="off" />
            </label>
          </div>
          <input type="hidden" name="token" value={formToken()} />
          <Button type="submit">ส่งข้อความ</Button>
        </form>
      </Card>
    </>
  )
}

export const POST = defineRoute({
  body: t.Object({
    name: t.String({ maxLength: 1000 }),
    email: t.String({ maxLength: 1000 }),
    subject: t.String({ maxLength: 1000 }),
    message: t.String({ maxLength: 20_000 }),
    website: t.Optional(t.String({ maxLength: 1000 })),
    token: t.String({ maxLength: 200 }),
  }),
  handler: ({ body, ip }) => {
    const result = submitMessage(body, ip)
    if (result.ok) return redirect('/contact?sent=1')
    const keep = new URLSearchParams({ name: body.name.slice(0, 100), email: body.email.slice(0, 200), subject: body.subject.slice(0, 200), message: body.message.slice(0, 2000) })
    return redirect(`/contact?error=${result.field ?? result.error}&${keep}`)
  },
})
