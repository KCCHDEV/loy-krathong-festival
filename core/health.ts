/**
 * Health check สำหรับ load balancer / Kubernetes / docker
 *
 *   GET /healthz   liveness  — process ยังตอบได้ (200 เสมอจนกว่าจะตาย)
 *   GET /readyz    readiness — พร้อมรับงานไหม: ตรวจ dependency ที่ลงทะเบียนไว้ · ตอน shutdown ตอบ 503
 *
 *   app.use(health({ checks: { db: () => db.query('select 1').get() } }))
 */
import type { App } from './server'

export type HealthCheck = () => unknown | Promise<unknown>
export type HealthOptions = {
  /** ชื่อ → ฟังก์ชันตรวจ (throw หรือคืน false = ไม่พร้อม) */
  checks?: Record<string, HealthCheck>
  /** ระยะเวลาสูงสุดต่อการตรวจหนึ่งตัว (ms) */
  timeoutMs?: number
}

async function runCheck(fn: HealthCheck, timeoutMs: number): Promise<{ ok: boolean; ms: number; error?: string }> {
  const t0 = performance.now()
  try {
    const result = await Promise.race([
      Promise.resolve().then(fn),
      Bun.sleep(timeoutMs).then(() => {
        throw new Error(`timeout ${timeoutMs}ms`)
      }),
    ])
    return { ok: result !== false, ms: +(performance.now() - t0).toFixed(2) }
  } catch (err) {
    return { ok: false, ms: +(performance.now() - t0).toFixed(2), error: err instanceof Error ? err.message : String(err) }
  }
}

export const health =
  ({ checks = {}, timeoutMs = 1000 }: HealthOptions = {}) =>
  (app: App) => {
    const started = Date.now()

    app.get('/healthz', () => ({ status: 'ok', uptime: Math.round((Date.now() - started) / 1000), pid: process.pid }))

    app.get('/readyz', async ({ set }) => {
      if (app.draining) {
        set.status = 503
        return { status: 'draining', inflight: app.inflight }
      }
      const entries = await Promise.all(Object.entries(checks).map(async ([name, fn]) => [name, await runCheck(fn, timeoutMs)] as const))
      const ok = entries.every(([, r]) => r.ok)
      if (!ok) set.status = 503
      return { status: ok ? 'ready' : 'unavailable', checks: Object.fromEntries(entries) }
    })
  }
