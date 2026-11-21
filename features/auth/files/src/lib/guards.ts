/**
 * Guard สำเร็จรูปสำหรับ _guard.ts — ป้องกันทั้งโฟลเดอร์
 *
 *   // src/pages/dashboard/_guard.ts
 *   import { requireLogin } from '../../lib/guards'
 *   export default requireLogin                         // ยังไม่ login → ไปหน้า /login แล้วกลับมาที่เดิมหลัง login
 *
 *   // src/pages/admin/_guard.ts
 *   export default requireRole('admin', 'editor')        // ไม่มีสิทธิ์ → 403
 *
 *   // src/api/private/_guard.ts            (API: ตอบ 401/403 เป็น JSON แทนการ redirect)
 *   export default requireApi()                          // ยอมรับทั้ง session cookie และ Authorization: Bearer <JWT>
 */
import { defineGuard, status, type Guard } from '@core/route'
import { bearerToken, verifyJwt } from '@core/jwt'
import { currentUser, findAccount, type Account, type Role } from './auth'

export const jwtSecret = () => process.env.AUTH_JWT_SECRET ?? process.env.COOKIE_SECRET ?? 'dev-cookie-secret'

const loginUrl = (path: string, search: string) => `/login?next=${encodeURIComponent(path + search)}`

/** ต้อง login (หน้าเว็บ) */
export const requireLogin: Guard = defineGuard({
  derive: (ctx) => ({ user: currentUser(ctx as any) }),
  beforeHandle: ({ user, redirect, path, request }) => {
    if (!user) return redirect(loginUrl(path, new URL(request.url).search))
  },
})

/** ต้อง login และมีบทบาทที่กำหนด (หน้าเว็บ) */
export const requireRole = (...roles: Role[]): Guard =>
  defineGuard({
    derive: (ctx) => ({ user: currentUser(ctx as any) }),
    beforeHandle: ({ user, redirect, path, request }) => {
      if (!user) return redirect(loginUrl(path, new URL(request.url).search))
      if (!roles.includes(user.role)) return status(403, `<h1>403</h1><p>ต้องมีสิทธิ์: ${roles.join(' หรือ ')}</p>`)
    },
  })

/** ผู้ใช้จาก session cookie หรือ Authorization: Bearer <JWT> (ใช้กับ API) */
export function userFromRequest(ctx: { request: Request } & Record<string, any>): Account | null {
  const fromSession = currentUser(ctx as any)
  if (fromSession) return fromSession
  const token = bearerToken(ctx.request)
  if (!token) return null
  try {
    const claims = verifyJwt(token, jwtSecret())
    const found = claims.sub ? findAccount(Number(claims.sub)) : null
    return found && !found.disabled ? found : null
  } catch {
    return null
  }
}

/** สำหรับ API: session cookie หรือ Bearer JWT · ตอบ JSON 401/403 */
export const requireApi = (...roles: Role[]): Guard =>
  defineGuard({
    derive: (ctx) => ({ user: userFromRequest(ctx) }),
    beforeHandle: ({ user }) => {
      if (!user) return status(401, { error: 'ต้องเข้าสู่ระบบ' })
      if (roles.length && !roles.includes(user.role)) return status(403, { error: 'ไม่มีสิทธิ์', required: roles })
    },
  })
