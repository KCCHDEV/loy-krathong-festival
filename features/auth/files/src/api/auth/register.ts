// POST /api/auth/register { email, name, password } → 201 + login ให้เลย
import { defineRoute, status, t } from '@core/route'
import { AuthError, authMessages, createAccount, login } from '../../lib/auth'

export const POST = defineRoute({
  body: t.Object({ email: t.String({ maxLength: 200 }), name: t.String({ maxLength: 100 }), password: t.String({ maxLength: 200 }) }),
  detail: { summary: 'สมัครสมาชิก' },
  handler: async (ctx) => {
    try {
      const account = await createAccount(ctx.body)
      login(ctx as any, account)
      ctx.set.status = 201
      return { user: account }
    } catch (err) {
      if (err instanceof AuthError) return status(err.code === 'email-taken' ? 409 : 422, { error: authMessages[err.code] ?? err.code, code: err.code })
      throw err
    }
  },
})
