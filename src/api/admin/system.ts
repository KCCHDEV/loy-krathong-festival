// GET /api/admin/system — ภาพรวมระบบ (ต้องมี x-api-key ตาม _guard.ts)
import { registry } from '@core/router'
import { cache } from '@core/cache'
import { jobs } from '@core/jobs'
import type { RouteContext } from '@core/route'

export const GET = ({ app }: RouteContext) => {
  const mem = process.memoryUsage()
  return {
    pid: process.pid,
    uptimeSeconds: Math.round(process.uptime()),
    draining: app.draining,
    inflight: app.inflight,
    memoryMB: { rss: Math.round(mem.rss / 1048576), heapUsed: Math.round(mem.heapUsed / 1048576) },
    routes: new Set(registry.map((r) => `${r.method} ${r.path}`)).size,
    cache: cache.stats(),
    jobs: { ...jobs.stats(), cron: jobs.cronList },
    env: { node: process.env.NODE_ENV ?? 'development', worker: process.env.WORKER_ID ?? '0', trustProxy: app.trustProxy },
  }
}
