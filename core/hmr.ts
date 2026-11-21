/**
 * Hot reload ฝั่ง browser (เฉพาะ dev) — แก้ CSS แล้วสไตล์เปลี่ยนทันทีโดยไม่โหลดหน้าใหม่
 * แก้ JS/รูปใน public/ หรือ server รีสตาร์ท → browser รีโหลดหน้าให้เอง
 *
 * เซิร์ฟเวอร์: SSE ที่ /__dev/hmr (hmr plugin) + core/dev.ts คอยดู public/ แล้วเรียก broadcast()
 * browser: HMR_SCRIPT (Layout ใส่ให้เมื่อ isDevMode)
 */
import type { App } from './server'

type Event = 'css' | 'reload'

const clients = new Set<ReadableStreamDefaultController<Uint8Array>>()
const encoder = new TextEncoder()

export function broadcast(event: Event) {
  const chunk = encoder.encode(`data: ${event}\n\n`)
  for (const c of clients) {
    try {
      c.enqueue(chunk)
    } catch {
      clients.delete(c)
    }
  }
}

export const hmr = (app: App) =>
  app.get('/__dev/hmr', ({ request }) => {
    let ctl!: ReadableStreamDefaultController<Uint8Array>
    const body = new ReadableStream<Uint8Array>({
      start(c) {
        ctl = c
        clients.add(c)
        c.enqueue(encoder.encode(': connected\n\n'))
      },
      cancel() {
        clients.delete(ctl)
      },
    })
    request.signal.addEventListener('abort', () => clients.delete(ctl))
    return new Response(body, {
      headers: { 'content-type': 'text/event-stream', 'cache-control': 'no-cache, no-transform', connection: 'keep-alive' },
    })
  })

/** ส่งหัวข้อมูลเป็นระยะ กัน proxy ตัดการเชื่อมต่อ (unref = ไม่ทำให้ process ค้าง) */
setInterval(() => {
  const ping = encoder.encode(': ping\n\n')
  for (const c of clients) {
    try {
      c.enqueue(ping)
    } catch {
      clients.delete(c)
    }
  }
}, 15_000).unref?.()

export const HMR_SCRIPT = `
(function () {
  var lost = false
  var es = new EventSource('/__dev/hmr')
  es.onmessage = function (e) {
    if (e.data === 'css') {
      document.querySelectorAll('link[rel=stylesheet][href*="/public/"]').forEach(function (l) {
        var u = new URL(l.href); u.searchParams.set('v', Date.now())
        var n = l.cloneNode(); n.href = u.toString()
        n.onload = function () { l.remove() }
        l.after(n)
      })
    } else if (e.data === 'reload') location.reload()
  }
  es.onerror = function () { lost = true }              // server รีสตาร์ท: EventSource ต่อใหม่เองแล้วเราค่อยรีโหลด
  es.onopen = function () { if (lost) location.reload() }
})()
`
