// POST /api/auth/login { email, password } → ตั้ง session cookie แล้วคืนข้อมูลผู้ใช้ (ใช้กับ SPA ที่อยู่โดเมนเดียวกัน)
import { defineRoute, status, t } from '@core/route'
import { AuthError, authenticate, login } from '../../lib/auth'

export const POST = defineRoute({
  body: t.Object({ email: t.String({ maxLength: 200 }), password: t.String({ maxLength: 200 }) }),
  detail: { summary: 'เข้าสู่ระบบ (session cookie)' },
  handler: async (ctx) => {
    try {
      const account = await authenticate(ctx.body.email, ctx.body.password, ctx.ip)
      if (!account) return status(401, { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' })
      login(ctx as any, account)
      return { user: account }
    } catch (err) {
      if (err instanceof AuthError && err.code === 'locked') return status(429, { error: 'ลองผิดหลายครั้งเกินไป รอสักครู่แล้วลองใหม่' })
      throw err
    }
  },
})
