/**
 * จุดเริ่มต้นของแอพ —  bun index.tsx  (หรือ  bun dev  สำหรับ auto-reload)
 *
 *  src/api/**        → JSON API   (prefix /api)
 *  src/pages/**      → หน้าเว็บ JSX + htmx
 *  src/components/** → components (โหลดอัตโนมัติ → import { X } from '@components')
 *  public/**         → ไฟล์ static (/public/...)
 *
 * การตั้งค่าแอพ (plugin, error handler, route) อยู่ที่ core/app.ts
 * หน้าตา console (banner, ตาราง route, request log) อยู่ที่ core/logger.ts
 */
import { createApp } from './core/app'
import { printBanner, printRoutes, printLogHeader, c, logEvent } from './core/logger'
import { existsSync } from 'node:fs'
import { jobs } from './core/jobs'
import { checkProductionSecrets } from './core/config'

const PORT = Number(process.env.PORT ?? 3000)
const isDev = process.env.NODE_ENV !== 'production'
// โหมด cluster (scripts/cluster.ts): หลาย process ใช้พอร์ตเดียวกัน · แสดง banner แค่ worker แรก
const workerId = Number(process.env.WORKER_ID ?? 0)

// production ที่ยังใช้ secret เริ่มต้น = ใครก็ปลอม session / เรียก API admin ได้ (STRICT_SECRETS=1 = ไม่ยอมเริ่ม)
const secretProblems = checkProductionSecrets()

const { app, routes } = await createApp()

// dev: ดูไฟล์เพิ่ม/ลบ แล้วรีโหลดให้เอง
if (isDev) await (await import('./core/dev')).setupDev()

app.listen({
  port: PORT,
  reusePort: process.env.REUSE_PORT === '1',
  hostname: process.env.HOST,
  maxBodySize: Number(process.env.MAX_BODY_MB ?? 16) * 1024 * 1024, // ไม่ให้ใครส่ง body ใหญ่ๆ มากินหน่วยความจำ
})

// งานเบื้องหลัง + cron (src/jobs.ts) — ปิดด้วย JOBS=0 · หลาย process แชร์คิวเดียวกันได้
if (process.env.JOBS !== '0') {
  jobs.start()
  app.onShutdown(() => jobs.stop())
}

// ปิดแบบสุภาพ: Ctrl+C / SIGTERM (docker, systemd) / IPC จาก supervisor (bun run lb) → ตอบ /readyz 503 → รอ request ค้าง → ปิด
let closing = false
async function gracefulExit() {
  if (closing) return
  closing = true
  logEvent(c.yellow('⏻'), 'กำลังปิดระบบ — รอคำขอที่ค้างอยู่…')
  await app.shutdown(Number(process.env.SHUTDOWN_TIMEOUT_MS ?? 10_000))
  process.exit(0)
}
for (const signal of ['SIGINT', 'SIGTERM'] as const) process.on(signal, () => void gracefulExit())
process.on('message', (m) => m === 'shutdown' && void gracefulExit())
if (!isDev) void (await import('./core/static')).warmStatic()

if (workerId === 0) {
  const workers = Number(process.env.WORKERS ?? 1)
  const mode = (isDev ? 'dev' : 'production') + (workers > 1 ? ` × ${workers} workers` : '')
  printBanner({ name: '🦊 Kitsune', mode, port: app.server?.port, routes })
  printRoutes(routes)
  printLogHeader()
  // ดาวน์โหลดมาใหม่แล้วยังไม่ได้เลือกฟีเจอร์: ชวนรัน setup (โชว์เฉพาะตอน dev และเมื่อมีโฟลเดอร์ features/)
  if (isDev && !existsSync('.kitsune.json') && existsSync('features/presets.json')) {
    logEvent(c.cyan('→'), `ยังไม่ได้เลือกฟีเจอร์ — รัน ${c.bold('bun run setup')} เพื่อเลือกระบบสมาชิก / CMS / ฟอร์มติดต่อ ฯลฯ หรือเอาตัวอย่างออก`)
  }
  for (const problem of secretProblems) logEvent(c.red('!'), `${c.red('ไม่ปลอดภัย')} ${problem}`)
}

export type App = typeof app
