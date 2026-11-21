// /register — สมัครสมาชิก (คนแรกของระบบได้เป็น admin) · สมัครแล้ว login ให้เลย
import { defineRoute, redirect, t, type RouteContext } from '@core/route'
import { Card, Button } from '@components'
import { AuthError, authMessages, createAccount, currentUser, login } from '../lib/auth'

export const metadata = { title: 'สมัครสมาชิก', path: '/account' }

export default function RegisterPage(ctx: RouteContext) {
  if (currentUser(ctx as any)) return ctx.redirect('/account')
  const error = ctx.query.error ? (authMessages[ctx.query.error] ?? 'เกิดข้อผิดพลาด') : ''
  return (
    <div class="auth-box">
      <Card title="สมัครสมาชิก">
        {error ? <div class="alert alert-error" role="alert" safe>{error}</div> : ''}
        <form method="post" action="/register" class="stack">
          <label>
            ชื่อที่แสดง
            <input name="name" required maxlength="60" autocomplete="name" value={ctx.query.name ?? ''} />
          </label>
          <label>
            อีเมล
            <input name="email" type="email" required autocomplete="username" value={ctx.query.email ?? ''} />
          </label>
          <label>
            รหัสผ่าน (อย่างน้อย 8 ตัวอักษร)
            <input name="password" type="password" required minlength="8" autocomplete="new-password" />
          </label>
          <label>
            ยืนยันรหัสผ่าน
            <input name="confirm" type="password" required minlength="8" autocomplete="new-password" />
          </label>
          <Button type="submit">สมัครสมาชิก</Button>
        </form>
        <p class="muted small">มีบัญชีแล้ว? <a href="/login">เข้าสู่ระบบ</a></p>
      </Card>
    </div>
  )
}

export const POST = defineRoute({
  body: t.Object({ name: t.String({ maxLength: 100 }), email: t.String({ maxLength: 200 }), password: t.String({ maxLength: 200 }), confirm: t.String({ maxLength: 200 }) }),
  handler: async (ctx) => {
    const { body } = ctx
    const back = (error: string) => redirect(`/register?error=${error}&name=${encodeURIComponent(body.name)}&email=${encodeURIComponent(body.email)}`)
    if (body.password !== body.confirm) return back('mismatch')
    try {
      const account = await createAccount({ email: body.email, name: body.name, password: body.password })
      login(ctx as any, account)
      return redirect('/account')
    } catch (err) {
      if (err instanceof AuthError) return back(err.code)
      throw err
    }
  },
})
