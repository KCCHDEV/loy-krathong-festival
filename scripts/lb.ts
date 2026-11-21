/**
 * รันแอพหลาย process + load balancer หน้าบ้าน (ใช้ได้ทุก OS รวม Windows)
 *
 *   bun run lb                                      worker = จำนวน core (สูงสุด 8) บนพอร์ต PORT+1.. · LB ที่ PORT (ค่าเริ่มต้น 3000)
 *   WORKERS=4 STRATEGY=least-connections bun run lb
 *   bun run lb -- --upstreams http://10.0.0.1:3000,http://10.0.0.2:3000     LB อย่างเดียว กระจายไปเครื่องอื่น
 *
 * supervisor: worker ตายเองจะถูกสตาร์ทใหม่ (หน่วงเพิ่มเรื่อยๆ 1→15 วินาที ถ้าตายซ้ำเร็วๆ) ·
 * Ctrl+C / SIGTERM: LB ตอบ 503 กับคำขอใหม่ → รอที่ค้างอยู่ → สั่ง worker ปิดแบบสุภาพ (IPC) → ถ้าไม่ปิดใน 10 วินาทีค่อยบังคับ
 *
 * env: PORT, WORKERS, STRATEGY (round-robin|least-connections|ip-hash|random), LB_STATUS_KEY (บังคับ x-api-key ที่ /__lb/status)
 *      ส่วน worker ได้ TRUST_PROXY=1 + CACHE_STORE=sqlite ให้เอง (แชร์ response cache ข้าม process)
 */
import { cpus } from 'node:os'
import { LoadBalancer, type Strategy } from '../core/lb'

const PORT = Number(process.env.PORT ?? 3000)
const argv = Bun.argv.slice(2)
const flag = (name: string) => {
  const i = argv.indexOf(`--${name}`)
  return i >= 0 ? argv[i + 1] : undefined
}

const remote = flag('upstreams')?.split(',').map((s) => s.trim()).filter(Boolean)
const count = remote ? 0 : Math.max(1, Number(process.env.WORKERS ?? Math.min(cpus().length, 8)))
const upstreams = remote ?? Array.from({ length: count }, (_, i) => `http://127.0.0.1:${PORT + 1 + i}`)

type Worker = { index: number; proc?: ReturnType<typeof Bun.spawn>; startedAt: number; backoff: number; restarts: number }
const workers: Worker[] = []
let stopping = false

function spawn(w: Worker) {
  w.startedAt = Date.now()
  w.proc = Bun.spawn(['bun', 'index.tsx'], {
    env: {
      ...process.env,
      NODE_ENV: process.env.NODE_ENV ?? 'production',
      PORT: String(PORT + 1 + w.index),
      WORKER_ID: String(w.index),
      WORKERS: String(count),
      TRUST_PROXY: '1',
      CACHE_STORE: process.env.CACHE_STORE ?? 'sqlite',
      LOG: process.env.LOG ?? (w.index === 0 ? '1' : '0'), // log จาก worker แรกตัวเดียวพอ ไม่ให้ปนกัน
    },
    ipc: () => {},
    stdout: 'inherit',
    stderr: 'inherit',
  })
  void w.proc.exited.then((code) => {
    if (stopping) return
    // อยู่ได้นานพอ = ปกติ รีเซ็ตการหน่วง · ตายเร็วซ้ำๆ = หน่วงนานขึ้นเรื่อยๆ (ไม่รัวสตาร์ทจน CPU เต็ม)
    if (Date.now() - w.startedAt > 30_000) w.backoff = 1000
    console.log(`\n  ⚠  worker ${w.index} หยุด (code ${code}) — สตาร์ทใหม่ใน ${w.backoff / 1000}s (ครั้งที่ ${++w.restarts})\n`)
    setTimeout(() => !stopping && spawn(w), w.backoff)
    w.backoff = Math.min(w.backoff * 2, 15_000)
  })
}

for (let i = 0; i < count; i++) {
  const w: Worker = { index: i, startedAt: 0, backoff: 1000, restarts: 0 }
  workers.push(w)
  spawn(w)
}

const lb = new LoadBalancer({
  upstreams,
  strategy: (process.env.STRATEGY as Strategy | undefined) ?? 'round-robin',
  statusKey: process.env.LB_STATUS_KEY,
  healthIntervalMs: 1000,
})

// รอให้ worker อย่างน้อยหนึ่งตัวพร้อมก่อนเปิดรับ (สูงสุด 15 วินาที)
const deadline = Date.now() + 15_000
await lb.checkAll()
while (!lb.nodes.some((n) => n.healthy) && Date.now() < deadline) {
  await Bun.sleep(150)
  await lb.checkAll()
}
await lb.start()
lb.listen({ port: PORT })

const mode = remote ? `LB อย่างเดียว → ${upstreams.length} upstream` : `${count} worker`
console.log(`\n  🦊 Kitsune load balancer · http://localhost:${PORT} · ${mode} · ${process.env.STRATEGY ?? 'round-robin'}`)
console.log(`     สถานะ: http://localhost:${PORT}/__lb/status\n`)

async function shutdown() {
  if (stopping) return
  stopping = true
  console.log('\n  กำลังปิดระบบ (รอคำขอที่ค้างอยู่)…')
  await lb.shutdown(10_000)
  for (const w of workers) {
    try {
      w.proc?.send('shutdown')
    } catch {
      w.proc?.kill()
    }
  }
  const end = Date.now() + 10_000
  while (workers.some((w) => w.proc && w.proc.exitCode === null) && Date.now() < end) await Bun.sleep(50)
  for (const w of workers) if (w.proc && w.proc.exitCode === null) w.proc.kill()
  process.exit(0)
}
for (const signal of ['SIGINT', 'SIGTERM'] as const) process.on(signal, () => void shutdown())
