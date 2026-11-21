/**
 * Streaming SSR ด้วย <Suspense> — ส่ง HTML ส่วนที่พร้อมก่อน ส่วนที่ช้าตามมาทีหลังโดยไม่ต้องเขียน JS เอง
 *
 *   const stream = renderToStream((rid) => <Page rid={rid} />)
 *   <Suspense rid={rid} fallback={<p>กำลังโหลด…</p>}><SlowComponent /></Suspense>
 *
 * ตอนแรกใส่ fallback ไว้ในที่ แล้วพอ children เสร็จจะส่ง <template> + สคริปต์เล็กๆ มาสลับที่ให้
 */
import type { Children } from './index'

type State = { pending: number; counter: number; scriptSent: boolean; push: (html: string) => void; done: () => void }
const states = new Map<number, State>()
let ridCounter = 0

const encoder = new TextEncoder()

const SWAP_SCRIPT = `<script>function $ks(i){var d=document,b=d.getElementById('B:'+i),t=d.getElementById('N:'+i),s=d.getElementById('S:'+i);if(b&&t){b.replaceWith(t.content)}t&&t.remove();s&&s.remove()}</script>`

export type SuspenseProps = {
  rid: number
  fallback: Children
  children?: Children
  catch?: Children | ((error: unknown) => Children)
}

export function Suspense(props: SuspenseProps): any {
  const state = states.get(props.rid)
  const kids: any = props.children
  // ไม่ได้อยู่ใน renderToStream หรือ children เสร็จแล้ว (string) → ใช้ตรงๆ ไม่ต้องรอ
  if (!state || typeof kids?.then !== 'function') return kids ?? ''

  const id = `${props.rid}:${++state.counter}`
  state.pending++
  const finish = (html: string) => {
    state.push(`${state.scriptSent ? '' : SWAP_SCRIPT}<template id="N:${id}">${html}</template><script id="S:${id}">$ks('${id}')</script>`)
    state.scriptSent = true
    if (--state.pending === 0) state.done()
  }

  ;(kids as Promise<string>).then(finish, (err) => {
    const c = props.catch
    finish(String(typeof c === 'function' ? c(err) : (c ?? '')))
  })

  return `<div id="B:${id}">${props.fallback ?? ''}</div>`
}

/** รัน factory แล้วสตรีมผล — stream ปิดเองเมื่อทุก Suspense เสร็จ */
export function renderToStream(factory: (rid: number) => any): ReadableStream<Uint8Array> {
  const rid = ++ridCounter
  let controller!: ReadableStreamDefaultController<Uint8Array>
  let closed = false
  let initialDone = false

  const close = () => {
    if (closed) return
    closed = true
    states.delete(rid)
    try {
      controller.close()
    } catch {}
  }

  const state: State = {
    pending: 0,
    counter: 0,
    scriptSent: false,
    push: (html) => {
      if (!closed) controller.enqueue(encoder.encode(html))
    },
    done: () => {
      if (initialDone) close()
    },
  }
  states.set(rid, state)

  return new ReadableStream<Uint8Array>({
    async start(c) {
      controller = c
      try {
        const html = await factory(rid)
        controller.enqueue(encoder.encode(String(html ?? '')))
        initialDone = true
        if (state.pending === 0) close()
      } catch (err) {
        closed = true
        states.delete(rid)
        controller.error(err)
      }
    },
    cancel() {
      closed = true
      states.delete(rid)
    },
  })
}
