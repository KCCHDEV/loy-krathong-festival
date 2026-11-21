/**
 * CORS — ให้เว็บอื่นเรียก API ของเราจาก browser ได้เท่าที่อนุญาต
 *
 *   app.use(cors({ origin: ['https://app.example.com'], credentials: true }))
 *   app.use(cors({ origin: /\.example\.com$/, paths: ['/api/'] }))
 *   app.use(cors({ origin: '*' }))                 // ทุกเว็บ (ห้ามใช้คู่กับ credentials)
 *
 * preflight (OPTIONS) ตอบ 204 ทันทีโดยไม่เข้า route · คำขอปกติใส่ header ให้ผ่าน ctx.set.headers
 * มี Origin แต่ไม่อยู่ในรายการ = ไม่ใส่ header (browser จะบล็อกเอง) ไม่ใช่ 403 เพราะ server-to-server ไม่มี CORS
 */
import type { App } from './server'

export type CorsOptions = {
  origin: '*' | string | string[] | RegExp | ((origin: string) => boolean)
  methods?: string[]
  headers?: string[]
  expose?: string[]
  credentials?: boolean
  /** วินาทีที่ browser จำผล preflight */
  maxAge?: number
  /** ใช้กับ path ที่ขึ้นต้นด้วยค่าเหล่านี้เท่านั้น (ไม่ใส่ = ทั้งหมด) */
  paths?: string[]
}

export function originAllowed(origin: string, rule: CorsOptions['origin']): boolean {
  if (rule === '*') return true
  if (typeof rule === 'string') return origin === rule
  if (Array.isArray(rule)) return rule.includes(origin)
  if (rule instanceof RegExp) return rule.test(origin)
  return rule(origin)
}

export const cors = (opts: CorsOptions) => (app: App) => {
  if (opts.credentials && opts.origin === '*') throw new Error("cors: credentials ใช้กับ origin '*' ไม่ได้ (browser ปฏิเสธ) ระบุรายชื่อเว็บแทน")
  const methods = (opts.methods ?? ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE']).join(', ')
  const expose = opts.expose?.join(', ')
  const echoOrigin = opts.origin !== '*'

  app.onRequest((ctx) => {
    const origin = ctx.request.headers.get('origin')
    if (!origin) return
    if (opts.paths && !opts.paths.some((p) => ctx.path.startsWith(p))) return
    if (!originAllowed(origin, opts.origin)) return

    const h: Record<string, string> = { 'access-control-allow-origin': echoOrigin ? origin : '*' }
    if (echoOrigin) h['vary'] = 'Origin'
    if (opts.credentials) h['access-control-allow-credentials'] = 'true'
    if (expose) h['access-control-expose-headers'] = expose

    // preflight: ตอบเลย ไม่ต้องเข้า route
    if (ctx.request.method === 'OPTIONS' && ctx.request.headers.has('access-control-request-method')) {
      h['access-control-allow-methods'] = methods
      h['access-control-allow-headers'] = opts.headers?.join(', ') ?? ctx.request.headers.get('access-control-request-headers') ?? '*'
      if (opts.maxAge) h['access-control-max-age'] = String(opts.maxAge)
      return new Response(null, { status: 204, headers: h })
    }

    Object.assign(ctx.set.headers, h)
  })
}
