/**
 * เสิร์ฟไฟล์ static จากหน่วยความจำ
 *
 *   /public/*        → ไฟล์ในโฟลเดอร์ public/ (kit.js, style.css, ...)
 *
 * อ่านไฟล์ + บีบอัด brotli/gzip ครั้งเดียวแล้วเก็บใน cache · URL ที่มี ?v= ให้ browser cache 1 ปี (immutable)
 * dev: เช็กเวลาแก้ไขไฟล์ทุกครั้ง แก้แล้วเห็นผลทันที · production: ไม่เช็ก (ไฟล์ไม่เปลี่ยน)
 */
import type { App } from './server'
import { statSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'
import { cache } from './cache'
import { pack, respond, type Packed } from './http-cache'

const isProd = process.env.NODE_ENV === 'production'
const PUBLIC_DIR = resolve('public')

const minifier = new Bun.Transpiler({ loader: 'js', minifyWhitespace: true })

type StaticEntry = { packed: Packed; mtime: number }

/** production + อยู่ใน cache แล้ว = คืนค่าตรงๆ (sync) · ที่เหลือเป็น Promise */
function load(file: string, key: string): Packed | null | Promise<Packed | null> {
  const cached = cache.get<StaticEntry>(key)
  if (cached && isProd) return cached.packed
  return loadSlow(file, key, cached)
}

async function loadSlow(file: string, key: string, cached: StaticEntry | undefined): Promise<Packed | null> {

  let mtime: number
  try {
    const st = statSync(file)
    if (!st.isFile()) return null
    mtime = st.mtimeMs
  } catch {
    return null
  }
  if (cached && cached.mtime === mtime) return cached.packed

  const f = Bun.file(file)
  let body: Uint8Array = new Uint8Array(await f.arrayBuffer())
  // ไฟล์ .js ที่ยังไม่ได้ย่อ → ตัดช่องว่างออกก่อนบีบอัด
  if (file.endsWith('.js') && !file.endsWith('.min.js')) {
    try {
      body = new TextEncoder().encode(minifier.transformSync(new TextDecoder().decode(body)))
    } catch {}
  }
  // production: brotli ระดับสูงสุด (บีบครั้งเดียวตอน warm) · dev: ระดับต่ำ เพื่อให้แก้ไฟล์แล้วโหลดใหม่ทันที
  const packed = pack(body, f.type, isProd ? 11 : 4)
  cache.set(key, { packed, mtime }, { size: packed.size })
  return packed
}

/**
 * production: บีบอัด + เก็บไฟล์ใน /public ล่วงหน้าตอนเริ่มเซิร์ฟเวอร์ (ทีละไฟล์ ไม่บล็อก request)
 * ไม่งั้นคนแรกที่เปิดหน้าต้องรอ brotli ระดับ 11 ของ CSS/JS นานเป็นวินาที
 */
export async function warmStatic() {
  const glob = new Bun.Glob('**/*')
  for (const rel of glob.scanSync({ cwd: PUBLIC_DIR })) {
    const file = join(PUBLIC_DIR, rel)
    await load(file, `static:${file}`)
    await Bun.sleep(0) // ปล่อยให้ request อื่นแทรกได้
  }
}

function cacheControl(request: Request) {
  // ฟอนต์ไม่เปลี่ยนเนื้อหาในชื่อไฟล์เดิม (ชื่อมีน้ำหนัก/ชุดอักษรอยู่แล้ว) → cache ยาวได้เลย
  if (request.url.includes('/public/fonts/')) return 'public, max-age=31536000, immutable'
  // มี ?v= (asset() ใส่ให้) = เนื้อหาไม่เปลี่ยนแน่นอน → cache ยาว · ไม่มี = ถาม server ทุกครั้งด้วย ETag
  return request.url.includes('?v=') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate'
}

export const staticFiles = (app: App) =>
  app.get('/public/*', ({ params, request, set }) => {
    const rel = params['*'] ?? ''
    const file = resolve(PUBLIC_DIR, rel)
    // กัน path traversal เช่น /public/../.env
    if (!file.startsWith(PUBLIC_DIR + sep)) return ((set.status = 404), 'Not Found')

    const finish = (packed: Packed | null) => {
      if (!packed) return ((set.status = 404), 'Not Found')
      return respond(packed, request, { 'cache-control': cacheControl(request) })
    }
    const packed = load(file, `static:${file}`)
    return packed instanceof Promise ? packed.then(finish) : finish(packed)
  })
