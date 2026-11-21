// POST /api/auth/logout — ล้าง session
import { logout } from '../../lib/auth'
import type { RouteContext } from '@core/route'

export const POST = (ctx: RouteContext) => {
  logout(ctx as any)
  return { ok: true }
}
