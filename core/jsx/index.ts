/**
 * JSX runtime ของเราเอง (แทน Kita HTML) — JSX คืนค่าเป็น string ตรงๆ (หรือ Promise<string> ถ้ามี component แบบ async)
 *
 *   <p>{html}</p>          ← ใส่ HTML ดิบ (เชื่อถือได้เท่านั้น) · string ต่อกันตรงๆ ไม่ escape
 *   <p safe>{user.name}</p> ← safe = escape เนื้อหาข้างใน (ข้อมูลจาก user ต้องใส่เสมอ)
 *   attribute ถูก escape ให้เสมอ · true → <input disabled> · false/null/undefined → ไม่ใส่
 *
 * ตรวจว่าไม่ลืม safe ได้ด้วย  bun run xss  (scripts/xss-scan.ts: expression ที่เป็น string ธรรมดาใน JSX ต้องอยู่ใน safe หรือผ่าน escapeHtml)
 */

/** string ที่รู้ว่าปลอดภัย (ผลของ JSX / escapeHtml) — ใช้ให้ xss-scan แยกออกจาก string ธรรมดา */
export type SafeHtml = string & { readonly __safeHtml?: never }
export type Element = SafeHtml | Promise<SafeHtml>
export type Children = Element | string | number | boolean | null | undefined | Children[]
export type PropsWithChildren<T = {}> = T & { children?: Children }

const ESCAPE: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
const NEEDS_ESCAPE = /[&<>"']/
const ESCAPE_ALL = /[&<>"']/g

/** escape string (ทางลัด: ส่วนใหญ่ไม่มีอักขระพิเศษ จึงคืนค่าเดิมทันที) */
const esc = (s: string): string => (NEEDS_ESCAPE.test(s) ? s.replace(ESCAPE_ALL, (c) => ESCAPE[c]!) : s)

export function escapeHtml(value: unknown): SafeHtml {
  return esc(typeof value === 'string' ? value : value == null ? '' : String(value)) as SafeHtml
}

export const Html = { escapeHtml }

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
const EMPTY: Record<string, any> = {}

/** แปลง children ทุกชนิดเป็น string — คืน string ตรงๆ ถ้าทุกตัว sync (ทางที่พบบ่อยที่สุด), Promise เมื่อมี component แบบ async */
function render(c: unknown, safe: boolean): string | Promise<string> {
  if (typeof c === 'string') return safe && c !== '' ? esc(c) : c
  if (c == null || typeof c === 'boolean') return ''
  if (typeof c === 'number') return '' + c
  if (Array.isArray(c)) {
    let out = ''
    for (let i = 0; i < c.length; i++) {
      const r = render(c[i], safe)
      if (typeof r !== 'string') return renderRest(out, r, c, i + 1, safe)
      out += r
    }
    return out
  }
  if (c instanceof Promise) return c.then((x) => render(x, safe))
  const str = String(c)
  return safe ? esc(str) : str
}

/** เจอ Promise ตัวแรกในอาร์เรย์แล้ว: ที่เหลือทำพร้อมกัน (parallel) แล้วต่อด้วยลำดับเดิม */
async function renderRest(prefix: string, first: Promise<string>, arr: unknown[], from: number, safe: boolean): Promise<string> {
  const rest: (string | Promise<string>)[] = [first]
  for (let i = from; i < arr.length; i++) rest.push(render(arr[i], safe))
  return prefix + (await Promise.all(rest)).join('')
}

export function jsx(tag: any, props: Record<string, any> | null): any {
  if (props === null) props = EMPTY
  if (typeof tag === 'function') return tag(props)
  if (tag === Fragment) return render(props.children, false)

  let open = '<' + tag
  let safe = false
  for (const key in props) {
    if (key === 'children') continue
    const v = props[key]
    if (key === 'safe') {
      safe = v === true || v === ''
      continue
    }
    if (v == null || v === false) continue
    open += v === true ? ' ' + key : ' ' + key + '="' + (typeof v === 'string' ? esc(v) : esc(String(v))) + '"'
  }
  if (VOID.has(tag)) return open + '/>'

  const inner = render(props.children, safe)
  const close = '</' + tag + '>'
  return typeof inner === 'string' ? open + '>' + inner + close : inner.then((x) => open + '>' + x + close)
}

export const jsxs = jsx
export const jsxDEV = jsx
export const Fragment = Symbol.for('kitsune.fragment')
export const createElement = (tag: any, props: any, ...children: any[]) => jsx(tag, { ...props, children: children.length > 1 ? children : children[0] })

/**
 * จำผลของ component ที่ผลลัพธ์ขึ้นกับ props เพียงไม่กี่ค่า (เช่น Nav ตาม path, Footer, Logo) — ใช้ใน production เท่านั้น
 * dev/test เรียกใหม่ทุกครั้ง เพื่อให้แก้โค้ดแล้วเห็นผลทันที · component ต้องคืน string (sync) และไม่พึ่งข้อมูลเฉพาะผู้ใช้
 *   export default memo(function Footer() { ... })                 // ไม่มี props
 *   export default memo(function Nav({ path }) { ... }, (p) => p.path)
 */
const isProd = process.env.NODE_ENV === 'production'

export function memo<P, R>(fn: (props: P) => R, key: (props: P) => string = () => ''): (props: P) => R {
  if (!isProd) return fn
  const cache = new Map<string, R>()
  return (props: P) => {
    const k = key(props)
    let hit = cache.get(k)
    if (hit === undefined) {
      hit = fn(props)
      if (cache.size >= 500) cache.clear() // กัน key พุ่ง (เช่น title ที่สร้างจากข้อมูลผู้ใช้)
      cache.set(k, hit)
    }
    return hit
  }
}

export * from './suspense'
