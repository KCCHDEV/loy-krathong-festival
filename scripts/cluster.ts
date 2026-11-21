/**
 * รันหลาย process พร้อมกันบนพอร์ตเดียว (reusePort) — ใช้ CPU ได้ทุก core
 *
 *   bun run start:cluster              จำนวน worker = จำนวน core
 *   WORKERS=4 bun run start:cluster
 *
 * ใช้ได้บน Linux (kernel แจกงานให้ทุก process เอง) · macOS/Windows ไม่รองรับ reusePort จะรันแบบ process เดียว
 * หลาย worker: response cache ใช้ SQLite ร่วมกัน (CACHE_STORE=sqlite ตั้งให้เอง) เพื่อให้ revalidateTag/Path มีผลทุก worker · cache แบบ cache.set() ในโค้ดยังแยกต่อ worker
 */
import { cpus } from 'node:os'

const supported = process.platform === 'linux'
const count = supported ? Number(process.env.WORKERS ?? cpus().length) : 1

if (!supported) {
  console.log(`\n  ⚠  ${process.platform} ไม่รองรับ reusePort — รันแบบ process เดียว (cluster ใช้ได้บน Linux)\n`)
}

const workers = Array.from({ length: count }, (_, i) =>
  Bun.spawn(['bun', 'index.tsx'], {
    env: { ...process.env, NODE_ENV: 'production', CACHE_STORE: process.env.CACHE_STORE ?? (count > 1 ? 'sqlite' : ''), REUSE_PORT: count > 1 ? '1' : '', WORKER_ID: String(i), WORKERS: String(count) },
    stdout: 'inherit',
    stderr: 'inherit',
  }),
)

// ปิด worker ทั้งหมดเมื่อกด Ctrl+C
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    for (const w of workers) w.kill()
    process.exit(0)
  })
}

await Promise.all(workers.map((w) => w.exited))
