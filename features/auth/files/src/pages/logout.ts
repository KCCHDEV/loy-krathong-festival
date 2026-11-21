// POST /logout — ออกจากระบบ (ต้องเป็น POST เพื่อไม่ให้เว็บอื่นหลอกให้ออกด้วยลิงก์/รูป)
import { redirect, type RouteContext } from '@core/route'
import { logout } from '../lib/auth'

export const POST = (ctx: RouteContext) => {
  logout(ctx as any)
  return redirect('/login')
}
