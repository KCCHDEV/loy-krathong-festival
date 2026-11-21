// GET /api/auth/me — ผู้ใช้ปัจจุบัน (session cookie หรือ Bearer JWT) · ไม่ได้ login = { user: null }
import type { RouteContext } from '@core/route'
import { userFromRequest } from '../../lib/guards'

export const GET = (ctx: RouteContext) => ({ user: userFromRequest(ctx) })
