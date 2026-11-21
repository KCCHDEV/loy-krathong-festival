// POST /api/auth/token { email, password } → JWT (HS256) สำหรับแอพมือถือ / service อื่น ส่งกลับมาเป็น  Authorization: Bearer <token>
import { defineRoute, status, t } from '@core/route'
import { signJwt } from '@core/jwt'
import { AuthError, authenticate } from '../../lib/auth'
import { jwtSecret } from '../../lib/guards'

const EXPIRES_IN = 3600

export const POST = defineRoute({
  body: t.Object({ email: t.String({ maxLength: 200 }), password: t.String({ maxLength: 200 }) }),
  detail: { summary: 'ขอ JWT (หมดอายุใน 1 ชั่วโมง)' },
  handler: async ({ body, ip }) => {
    try {
      const account = await authenticate(body.email, body.password, ip)
      if (!account) return status(401, { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' })
      return { token: signJwt({ sub: String(account.id), role: account.role, name: account.name }, jwtSecret(), { expiresIn: EXPIRES_IN }), tokenType: 'Bearer', expiresIn: EXPIRES_IN }
    } catch (err) {
      if (err instanceof AuthError && err.code === 'locked') return status(429, { error: 'ลองผิดหลายครั้งเกินไป รอสักครู่แล้วลองใหม่' })
      throw err
    }
  },
})
