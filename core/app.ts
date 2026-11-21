/**
 * สร้างแอพ พร้อม plugin, error handler และ route จากไฟล์ทั้งหมด
 * แยกออกจาก index.tsx เพื่อให้ test (bun test) เรียกใช้ app.handle() ได้โดยไม่ต้องเปิดพอร์ต
 */
import { App } from './server'
import { escapeHtml } from './jsx'
import { generateComponents } from './components'
import { loadRoutes } from './router'
import { staticFiles } from './static'
import { c, logEvent, requestLogger } from './logger'
import { sessionPlugin } from './session'
import { loadMiddleware } from './middleware'
import { generateRouteTypes } from './typed-routes'
import { errorOverlay, isDevMode } from './dev-overlay'
import { hmr } from './hmr'
import { security } from './security'
import { openapiDocs } from './openapi'
import { health } from './health'
import { rateLimit, parseRate } from './ratelimit'
import { cors } from './cors'
import { metrics } from './metrics'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

export const COOKIE_SECRET = process.env.COOKIE_SECRET ?? 'dev-cookie-secret'

/** log ทุก request (ปิดตอนเทส หรือ LOG=0) */
const logRequests = process.env.NODE_ENV !== 'test' && process.env.LOG !== '0'

export async function createApp() {
  // สร้าง src/components/index.ts ก่อน เพราะ pages จะ import จาก '@components'
  await generateComponents('src/components')

  const app = new App({
    // cookie ชื่อ session/sid จะถูกเซ็นลายเซ็น (กันแก้ค่าเองจากฝั่ง browser) — ดู src/pages/examples/auth
    cookie: { secret: COOKIE_SECRET, signed: ['session', 'sid'] },
    htmlSecurityHeaders: true,
    trustProxy: process.env.TRUST_PROXY === '1', // อยู่หลัง load balancer / nginx: เชื่อ X-Forwarded-For (ห้ามเปิดถ้าไม่ได้อยู่หลัง proxy)
    compress: process.env.COMPRESS ? process.env.COMPRESS !== '0' : process.env.NODE_ENV === 'production', // บีบอัดหน้าที่ไม่ได้ cache (ปิดด้วย COMPRESS=0)
    serverTiming: process.env.SERVER_TIMING !== '0', // ปิดได้ด้วย SERVER_TIMING=0 (ลดอีก 1 header ต่อ request) // header Server-Timing: เวลาที่เซิร์ฟเวอร์ใช้จริง (หน้า /benchmark ใช้แยกเวลา network ออก)
  })

  if (logRequests) app.use(requestLogger({ secret: COOKIE_SECRET }))

  // จำกัดคำขอต่อ IP: RATE_LIMIT="120/60" = 120 ครั้งต่อ 60 วินาที (ไม่ตั้ง = ปิด) · ข้ามไฟล์ static, health, endpoint วัดความเร็ว
  const rate = process.env.RATE_LIMIT ? parseRate(process.env.RATE_LIMIT) : null
  if (rate) app.use(rateLimit({ ...rate, skip: ['/public/', '/healthz', '/readyz', '/metrics', '/api/bench/', '/__dev/'] }))
  // CORS: CORS_ORIGINS="https://a.com,https://b.com" หรือ "*" (เฉพาะ /api/)
  if (process.env.CORS_ORIGINS) {
    const list = process.env.CORS_ORIGINS.split(',').map((x) => x.trim()).filter(Boolean)
    app.use(cors({ origin: list.includes('*') ? '*' : list, paths: ['/api/'], credentials: !list.includes('*') && process.env.CORS_CREDENTIALS === '1', maxAge: 600 }))
  }
  if (process.env.METRICS === '1') app.use(metrics()) // GET /metrics (Prometheus)

  app.use(security) // header ความปลอดภัย + กัน CSRF (core/security.ts)
  app.use(await loadMiddleware()) // src/middleware.ts (ถ้ามี)
  app.use(sessionPlugin) // ctx.session
  if (isDevMode()) app.use(hmr) // dev: SSE สำหรับ hot reload (core/hmr.ts)
  // /public/* เสิร์ฟจากหน่วยความจำ บีบอัดไว้แล้ว (core/static.ts)
  app.use(staticFiles)
  // /healthz (ยังมีชีวิต) + /readyz (พร้อมรับงาน: DB ตอบ · ตอน shutdown เป็น 503) สำหรับ load balancer / docker / k8s
  app.use(health({ checks: { db: async () => (await import('../src/lib/db')).db.query('SELECT 1').get() } }))

  // จัดการ error รวม: /api ตอบ JSON, หน้าเว็บตอบ HTML
  app.onError(async ({ code, error, path, set }) => {
    const isApi = path.startsWith('/api')
    const err = error as any

    if (code === 'NOT_FOUND') {
      set.status = 404
      if (isApi) return Response.json({ error: 'Not Found' }, { status: 404 })
      const { default: NotFound } = await import('../src/pages/_404')
      return '<!doctype html>' + (await NotFound())
    }

    if (code === 'VALIDATION') {
      set.status = 422
      // ข้อความจาก t.String({ error: '...' }) ถ้ามี ไม่งั้นใช้ข้อความมาตรฐาน (schema.ts ใส่ให้แล้ว)
      const issues = (err.all as { path: string; message: string }[]).map((e) => ({ field: e.path.replace(/^\//, ''), message: e.message }))
      if (isApi) return { error: 'ข้อมูลไม่ถูกต้อง', issues }
      // หน้าเว็บ: ส่งชิ้น HTML ให้ kit.js แปะ (แปะสถานะ 422 ให้)
      return (
        '<div class="alert alert-error"><strong>ข้อมูลไม่ถูกต้อง</strong><ul>' +
        issues.map((i) => `<li>${i.field ? `<code>${escapeHtml(i.field)}</code> ` : ''}${escapeHtml(i.message)}</li>`).join('') +
        '</ul></div>'
      )
    }

    // cookie ถูกแก้ไข (ลายเซ็นไม่ตรง) → ลบทิ้ง แล้วให้เข้า path เดิมใหม่แบบไม่มี cookie
    if (code === 'INVALID_COOKIE_SIGNATURE') {
      set.headers['set-cookie'] = `${err.key}=; Max-Age=0; Path=/`
      if (isApi) return Response.json({ error: 'cookie ไม่ถูกต้อง' }, { status: 401 })
      set.status = 302
      set.headers.location = path
      return ''
    }

    if (code === 'PARSE') {
      set.status = 400
      return isApi ? { error: 'อ่านข้อมูลที่ส่งมาไม่ได้' } : 'อ่านข้อมูลที่ส่งมาไม่ได้'
    }

    logEvent(c.red('✖'), `${c.red('500')} ${c.white(path)} ${c.gray('— error ในเซิร์ฟเวอร์:')}`)
    console.error(error)
    set.status = 500
    if (isDevMode()) {
      if (isApi) return Response.json({ error: String(err?.message ?? error), stack: err?.stack }, { status: 500 })
      return errorOverlay(error, path)
    }
    return isApi ? { error: 'Internal Server Error' } : 'เกิดข้อผิดพลาดในเซิร์ฟเวอร์'
  })

  // โหลด route จากไฟล์อัตโนมัติ
  const routes = [
    ...(await loadRoutes(app, { dir: 'src/api', prefix: '/api', kind: 'api' })),
    ...(await loadRoutes(app, { dir: 'src/pages', kind: 'page' })),
  ]

  // src/jobs.ts (ถ้ามี): ลงทะเบียนงานเบื้องหลัง + cron — index.tsx เป็นคนสั่ง start
  if (existsSync(resolve('src/jobs.ts'))) await import(resolve('src/jobs.ts'))

  // เอกสาร API อัตโนมัติจาก schema ของแต่ละ route → /openapi (เฉพาะ /api/*)
  app.use(openapiDocs({ title: 'Kitsune API', version: '1.0.0' }))

  // สร้าง core/routes.gen.ts ให้ href() (ข้ามใน production — ไฟล์ต้องมีมาตั้งแต่ตอน commit)
  if (process.env.NODE_ENV !== 'production') await generateRouteTypes(routes)

  return { app, routes }
}
