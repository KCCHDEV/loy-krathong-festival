// Global middleware (ดู core/middleware.ts) — ทำงานก่อน routing กับทุก path ที่ match
import { defineMiddleware } from '@core/route'

let counter = 0
const boot = Date.now().toString(36)

export const config = { matcher: ['/api/hello', '/api/me', '/api/users', '/api/users/:path*', '/api/admin/:path*'] }

export default defineMiddleware(({ set }) => {
  set.headers['x-request-id'] = `${boot}-${(++counter).toString(36)}`
})
