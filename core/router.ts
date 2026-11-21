/**
 * File-based router — สแกนโฟลเดอร์แล้วสร้าง route ให้อัตโนมัติ
 *
 *   src/api/hello.ts            ->  /api/hello
 *   src/api/users/index.ts      ->  /api/users
 *   src/api/users/[id].ts       ->  /api/users/:id
 *   src/pages/index.tsx         ->  /
 *   src/pages/docs/[...slug].tsx ->  /docs/*
 *   src/pages/(marketing)/about.tsx -> /about   (โฟลเดอร์ในวงเล็บ = จัดกลุ่ม ไม่ขึ้นใน URL)
 *
 * ไฟล์/โฟลเดอร์ที่ขึ้นต้นด้วย _ จะไม่ถูกทำเป็น route (เช่น _guard.ts, _layout.tsx, _404.tsx, _lib/)
 *
 * ในไฟล์ route:
 *   export const GET = ...  / POST / PUT / PATCH / DELETE ...
 *   (เฉพาะ pages) export default = GET
 *   export const WS = defineSocket({ open, message, close })  → WebSocket ที่ path ของไฟล์
 *   export const cache = 60   → cache response ของ GET ไว้ 60 วินาที (บีบอัด + ETag ให้ด้วย)
 *     export const swr = 30        ส่งของเก่าต่อได้อีก 30 วินาทีระหว่างสร้างใหม่เบื้องหลัง
 *     export const cacheTags = ['posts']   ให้ revalidateTag('posts') ล้างหน้านี้
 *   export const actions = { create: defineRoute({...}) }  → POST <path>/_/create (server action สำหรับ htmx)
 *
 * เฉพาะ pages (GET):
 *   export const loader / metadata / generateMetadata   → ดู composePage
 *   export const stream = true                           → ส่ง HTML ทีละส่วนด้วย <Suspense>
 *   _layout.tsx _error.tsx _not-found.tsx _loading.tsx   → ซ้อนกันตามโฟลเดอร์ ตัวใกล้ไฟล์ที่สุดชนะ (layout ซ้อนทุกชั้น)
 */
import { NotFoundError } from './errors'
import type { App } from './server'
import { join, resolve } from 'node:path'
import { existsSync } from 'node:fs'
import { renderToStream } from './jsx'
import {
  METHODS,
  actionUrl,
  type Guard,
  type Handler,
  type LayoutFn,
  type Loader,
  type Metadata,
  type MetadataInput,
  type RouteDef,
} from './route'
import { c, logEvent } from './logger'
import { withResponseCache } from './http-cache'

type Options = {
  /** โฟลเดอร์ที่จะสแกน */
  dir: string
  /** prefix ของ URL เช่น '/api' */
  prefix?: string
  /** pages = ให้ export default เป็น GET */
  kind: 'api' | 'page'
}

export type LoadedRoute = {
  method: string
  path: string
  file: string
  kind: Options['kind']
  /** วินาทีที่ cache response ไว้ (ถ้ามี) */
  cache?: number
  /** มี _guard.ts คุมอยู่ (ผลขึ้นกับผู้ใช้ได้ → ไม่ควร cache) */
  guarded: boolean
  /** ชื่อ server action (path ลงท้าย /_/<ชื่อ>) */
  action?: string
}

/** route ทั้งหมดที่โหลดแล้ว (อ่านได้จากที่อื่น เช่น หน้า trailer) */
export const registry: LoadedRoute[] = []

/** ปัญหาที่ตรวจเจอตอนโหลด route (ไม่ crash แต่ `bun run check` จะล้มเมื่อมีรายการ) */
export const problems: string[] = []

const glob = new Bun.Glob('**/*.{ts,tsx}')

/** แปลง path ของไฟล์เป็น URL */
export function fileToPath(file: string, prefix = ''): string {
  const segments = file
    .replace(/\.(ts|tsx)$/, '')
    .split('/')
    .filter((s) => s !== 'index' && !/^\(.+\)$/.test(s)) // ตัด index และ (group)
    .map((s) => {
      if (/^\[\.\.\..+\]$/.test(s)) return '*' // [...slug]
      if (/^\[.+\]$/.test(s)) return ':' + s.slice(1, -1) // [id]
      return s
    })

  const path = [prefix.replace(/\/$/, ''), ...segments].filter(Boolean).join('/')
  return '/' + path.replace(/^\//, '')
}

/** route คงที่มาก่อน dynamic, wildcard ไว้ท้ายสุด */
function score(path: string) {
  return path
    .split('/')
    .map((s) => (s === '*' ? '2' : s.startsWith(':') ? '1' : '0'))
    .join('')
}

const isPrivate = (file: string) => file.split('/').some((s) => s.startsWith('_'))

/** URL ของ server action: หน้า /todos + action "add" → /todos/_/add */
export const actionPath = actionUrl

function warn(file: string, message: string) {
  problems.push(`${file}: ${message}`)
  logEvent(c.yellow('!'), `${file} ${c.gray(message)}`)
}

/** รวม _guard.ts ทุกตัวจากโฟลเดอร์แม่ลงมาถึงโฟลเดอร์ของไฟล์ */
async function guardsFor(root: string, file: string, cache: Map<string, Guard | null>) {
  const parts = file.split('/').slice(0, -1)
  const result: Guard[] = []

  for (let i = 0; i <= parts.length; i++) {
    const dir = join(root, ...parts.slice(0, i))
    if (!cache.has(dir)) {
      const candidates = ['_guard.ts', '_guard.tsx'].map((f) => join(dir, f))
      const found = candidates.find((f) => existsSync(f))
      cache.set(dir, found ? ((await import(found)).default as Guard) : null)
    }
    const g = cache.get(dir)
    if (g) result.push(g)
  }
  return result
}

// ───────────── layout / error / not-found / loading ─────────────

type LayoutMod = { default: LayoutFn; metadata?: MetadataInput }
type BoundaryProps = { ctx: any; error?: unknown }
type BoundaryMod = { default: (props: BoundaryProps) => string | Promise<string> }

type DirConventions = { layout?: LayoutMod; error?: BoundaryMod; notFound?: BoundaryMod; loading?: BoundaryMod }
export type Conventions = { layouts: LayoutMod[]; error?: BoundaryMod; notFound?: BoundaryMod; loading?: BoundaryMod }

const CONVENTION_FILES = [
  ['layout', '_layout'],
  ['error', '_error'],
  ['notFound', '_not-found'],
  ['loading', '_loading'],
] as const

/** อ่าน _layout/_error/_not-found/_loading ของแต่ละโฟลเดอร์ (นอก→ใน) · layout สะสมทุกชั้น ที่เหลือใช้ตัวใกล้สุด */
async function conventionsFor(root: string, file: string, cache: Map<string, DirConventions>): Promise<Conventions> {
  const parts = file.split('/').slice(0, -1)
  const out: Conventions = { layouts: [] }

  for (let i = 0; i <= parts.length; i++) {
    const dir = join(root, ...parts.slice(0, i))
    let found = cache.get(dir)
    if (!found) {
      found = {}
      for (const [key, base] of CONVENTION_FILES) {
        const path = [`${base}.tsx`, `${base}.ts`].map((f) => join(dir, f)).find((f) => existsSync(f))
        if (path) (found as any)[key] = await import(path)
      }
      cache.set(dir, found)
    }
    if (found.layout) out.layouts.push(found.layout)
    if (found.error) out.error = found.error
    if (found.notFound) out.notFound = found.notFound
    if (found.loading) out.loading = found.loading
  }
  return out
}

const resolveMeta = async (m: MetadataInput | undefined, ctx: any): Promise<Metadata> =>
  typeof m === 'function' ? m(ctx) : (m ?? {})

const isDocument = (s: string) => s.startsWith('<html') || s.startsWith('<!doctype')
const CHILDREN_MARK = '<!--kitsune:children-->'
const encoder = new TextEncoder()

/** รวม prefix + stream + suffix เป็น body เดียว */
function sandwich(head: string, body: AsyncIterable<string | Uint8Array>, tail: string) {
  return new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        controller.enqueue(encoder.encode(head))
        for await (const chunk of body) controller.enqueue(typeof chunk === 'string' ? encoder.encode(chunk) : chunk)
        controller.enqueue(encoder.encode(tail))
        controller.close()
      } catch (err) {
        controller.error(err)
      }
    },
  })
}

/** รหัสของ error ที่ framework จัดการเอง (validation, parse, cookie…) — ไม่ใช่ความผิดของ handler จึงไม่เข้า _error */
const FRAMEWORK_CODES = new Set(['VALIDATION', 'PARSE', 'INVALID_COOKIE_SIGNATURE', 'INVALID_FILE_TYPE'])

/**
 * ต่อ loader → metadata → handler → layouts เข้าด้วยกันเป็น handler เดียว (แบบ Next.js)
 * ใช้กับ GET ของ pages ที่มี loader / metadata / stream / _layout / _error / _not-found เท่านั้น ที่เหลือทำงานเหมือนเดิม
 *
 *  - layout ซ้อนจากในออกนอก ถ้าผลลัพธ์เป็นเอกสารเต็ม (<html>) แล้วจะไม่ถูกครอบซ้ำ (หน้าเก่าที่เรียก <Layout> เองใช้ต่อได้)
 *  - throw notFound() ที่ไหนก็ได้ใน loader/handler → _not-found.tsx ใกล้สุด (404) · error อื่น → _error.tsx (500)
 *  - export const stream = true → handler รับ ctx.rid + ctx.loading (จาก _loading.tsx) ไปใช้กับ <Suspense>
 */
function composePage(handler: Handler, mod: any, conv: Conventions, file: string): Handler {
  const { loader, metadata, generateMetadata } = mod as {
    loader?: Loader
    metadata?: MetadataInput
    generateMetadata?: MetadataInput
  }
  const stream = mod.stream === true
  const plain = !loader && !metadata && !generateMetadata && !stream && !conv.layouts.length && !conv.error && !conv.notFound
  if (plain) return handler

  const wrap = async (inner: string, meta: Metadata, ctx: any) => {
    if (mod.layout === false) return inner
    let out = inner
    for (const l of conv.layouts.toReversed()) {
      if (isDocument(out)) break
      out = await l.default({ children: out, metadata: meta, ctx })
    }
    return out
  }

  const boundary = async (b: BoundaryMod, status: number, error: unknown, ctx: any) => {
    ctx.set.status = status
    return wrap(await b.default({ ctx, error }), ctx.metadata ?? {}, ctx)
  }

  return async (ctx: any) => {
    try {
      if (loader) {
        const data = await loader(ctx)
        if (data instanceof Response) return data
        ctx.data = data
      }

      const meta: Metadata = {}
      for (const l of conv.layouts) Object.assign(meta, await resolveMeta(l.metadata, ctx))
      Object.assign(meta, await resolveMeta(generateMetadata ?? metadata, ctx))
      ctx.metadata = meta

      if (stream) {
        const full = await wrap(CHILDREN_MARK, meta, ctx)
        const [head = '', tail = ''] = full.split(CHILDREN_MARK)
        ctx.loading = conv.loading ? await conv.loading.default({ ctx }) : ''
        const body = renderToStream((rid) => {
          ctx.rid = rid
          return handler(ctx) as any
        })
        return new Response(sandwich(head.startsWith('<html') ? '<!doctype html>' + head : head, body as unknown as AsyncIterable<Uint8Array>, tail), {
          headers: { 'content-type': 'text/html; charset=utf-8' },
        })
      }

      const page = await handler(ctx)
      if (page instanceof Response || typeof page !== 'string') return page
      return wrap(page, meta, ctx)
    } catch (err) {
      const code = (err as { code?: string } | null)?.code
      if (err instanceof NotFoundError || code === 'NOT_FOUND') {
        if (conv.notFound) return boundary(conv.notFound, 404, err, ctx)
        throw err
      }
      if (!(err instanceof Error) || (code && FRAMEWORK_CODES.has(code)) || !conv.error) throw err
      logEvent(c.red('✖'), `${c.red('500')} ${c.white(ctx.path)} ${c.gray(`— ${err.message} (${file})`)}`)
      return boundary(conv.error, 500, err, ctx)
    }
  }
}

// ───────────── โหลด route ─────────────

function toDef(exported: unknown): RouteDef | null {
  if (typeof exported === 'function') return { handler: exported as any }
  if (exported && typeof exported === 'object' && 'handler' in exported) return exported as RouteDef
  return null
}

type Entry = { method: string; exported: unknown; path: string; action?: string }

export async function loadRoutes(app: App, opts: Options) {
  const root = resolve(opts.dir)
  const loaded: LoadedRoute[] = []
  if (!existsSync(root)) return loaded

  const files = [...glob.scanSync({ cwd: root })]
    .map((f) => f.replaceAll('\\', '/'))
    .filter((f) => !isPrivate(f) && !f.endsWith('.d.ts') && !/\.(test|spec)\.tsx?$/.test(f))
    .map((file) => ({ file, path: fileToPath(file, opts.prefix) }))
    .sort((a, b) => score(a.path).localeCompare(score(b.path)) || a.path.localeCompare(b.path))

  const guardCache = new Map<string, Guard | null>()
  const convCache = new Map<string, DirConventions>()
  const seen = new Set<string>()

  for (const { file, path } of files) {
    const where = `${opts.dir}/${file}`
    const mod = await import(join(root, file))
    const guards = await guardsFor(root, file, guardCache)
    const conv = opts.kind === 'page' ? await conventionsFor(root, file, convCache) : { layouts: [] }

    const entries: Entry[] = METHODS.filter((m) => m in mod).map((m) => ({ method: m, exported: mod[m], path }))
    if (opts.kind === 'page' && mod.default && !('GET' in mod)) entries.push({ method: 'GET', exported: mod.default, path })

    // server actions: POST <path>/_/<ชื่อ> (ตรวจ body ด้วย schema ของ action เองได้เหมือน defineRoute)
    if (mod.actions && typeof mod.actions === 'object') {
      for (const [name, def] of Object.entries(mod.actions)) {
        entries.push({ method: 'POST', exported: def, path: actionPath(path, name), action: name })
      }
    }

    // WebSocket: ws://host/<path ของไฟล์> (แนะนำแยกไฟล์ต่างหาก ไม่ปน GET)
    if (mod.WS && typeof mod.WS === 'object') {
      app.ws(path, mod.WS)
      loaded.push({ method: 'WS', path, file: where, kind: opts.kind, guarded: guards.length > 0 })
    }

    if (mod.loader !== undefined && typeof mod.loader !== 'function') warn(where, 'export loader ต้องเป็นฟังก์ชัน')

    if (entries.length === 0) {
      if (mod.WS) continue
      warn(where, 'ไม่มี export GET/POST/... (หรือ default สำหรับ page)')
      continue
    }

    for (const { method, exported, path: routePath, action } of entries) {
      const def = toDef(exported)
      if (!def) {
        warn(where, `export ${action ? `actions.${action}` : method} ต้องเป็นฟังก์ชันหรือ defineRoute({...})`)
        continue
      }

      const id = `${method} ${routePath}`
      if (seen.has(id)) warn(where, `route ซ้ำ: ${id}`)
      seen.add(id)

      const { handler: rawHandler, beforeHandle, ...hook } = def
      // export const cache = <วินาที> → cache เฉพาะ GET (POST/DELETE เปลี่ยนข้อมูล ห้าม cache)
      const ttl = method === 'GET' && typeof mod.cache === 'number' && mod.cache > 0 ? mod.cache : undefined
      const page = method === 'GET' && opts.kind === 'page' ? composePage(rawHandler, mod, conv, where) : rawHandler
      const handler = ttl
        ? withResponseCache(page, ttl, {
            swr: typeof mod.swr === 'number' ? mod.swr : undefined,
            tags: mod.cacheTags,
          })
        : page

      // guard ของโฟลเดอร์ทำงานก่อน beforeHandle ของ route เอง
      const chain = [
        ...guards.map((g) => async (ctx: any) => {
          if (g.derive) Object.assign(ctx, await g.derive(ctx))
          if (g.beforeHandle) return g.beforeHandle(ctx)
        }),
        ...(beforeHandle ? [beforeHandle].flat() : []),
      ]

      app.route(method, routePath, handler as any, {
        ...hook,
        ...(chain.length ? { beforeHandle: chain } : {}),
      } as any)

      loaded.push({ method, path: routePath, file: where, kind: opts.kind, cache: ttl, guarded: guards.length > 0, action })
    }
  }

  registry.push(...loaded)
  return loaded
}
