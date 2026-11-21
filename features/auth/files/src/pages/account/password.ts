// POST /account/password — เปลี่ยนรหัสผ่าน (ต้องรู้รหัสเดิม) แล้ว session อื่นยังอยู่ แต่ id ของ session นี้ถูกเปลี่ยนใหม่
import { defineRoute, redirect, t } from '@core/route'
import { AuthError, changePassword, type Account } from '../../lib/auth'

export const POST = defineRoute({
  body: t.Object({ current: t.String({ maxLength: 200 }), next: t.String({ maxLength: 200 }) }),
  handler: async ({ body, user, session }) => {
    try {
      await changePassword((user as Account).id, body.current, body.next)
      session.regenerate()
      return redirect('/account?saved=1')
    } catch (err) {
      if (err instanceof AuthError) return redirect(`/account?error=${err.code}`)
      throw err
    }
  },
})
