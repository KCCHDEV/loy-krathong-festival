// /login — เข้าสู่ระบบ · POST ตรวจรหัสผ่านแล้วกลับไปที่เดิม (?next=) หรือ /account
import { defineRoute, redirect, t, type RouteContext } from '@core/route'
import { Card, Button } from '@components'
import { AuthError, authMessages, authenticate, currentUser, login, safeNext } from '../lib/auth'

export const metadata = { title: 'เข้าสู่ระบบ', path: '/account' }

export default function LoginPage(ctx: RouteContext) {
  if (currentUser(ctx as any)) return ctx.redirect(safeNext(ctx.query.next))
  const error = ctx.query.error ? (authMessages[ctx.query.error] ?? 'เกิดข้อผิดพลาด') : ''
  return (
    <div class="auth-box">
      <Card title="เข้าสู่ระบบ">
        {error ? <div class="alert alert-error" role="alert" safe>{error}</div> : ''}
        <form method="post" action="/login" class="stack">
          <input type="hidden" name="next" value={safeNext(ctx.query.next, '')} />
          <label>
            อีเมล
            <input name="email" type="email" required autocomplete="username" autofocus />
          </label>
          <label>
            รหัสผ่าน
            <input name="password" type="password" required autocomplete="current-password" />
          </label>
          <Button type="submit">เข้าสู่ระบบ</Button>
        </form>
        <p class="muted small">ยังไม่มีบัญชี? <a href="/register">สมัครสมาชิก</a></p>
      </Card>
    </div>
  )
}

export const POST = defineRoute({
  body: t.Object({ email: t.String({ maxLength: 200 }), password: t.String({ maxLength: 200 }), next: t.Optional(t.String()) }),
  handler: async (ctx) => {
    const { body } = ctx
    const back = (error: string) => redirect(`/login?error=${error}${body.next ? `&next=${encodeURIComponent(safeNext(body.next, ''))}` : ''}`)
    try {
      const account = await authenticate(body.email, body.password, ctx.ip)
      if (!account) return back('invalid')
      login(ctx as any, account)
      return redirect(safeNext(body.next))
    } catch (err) {
      if (err instanceof AuthError) return back(err.code)
      throw err
    }
  },
})
