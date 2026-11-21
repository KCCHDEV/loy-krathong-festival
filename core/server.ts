/**
 * HTTP framework ของเราเอง บน Bun.serve (แทน Elysia)
 *
 *   const app = new App({ cookie: { secret, signed: ['session'] } })
 *   app.onRequest(fn).derive(fn).onError(fn).route('GET', '/users/:id', handler, { params: t.Object({...}) })
 *   await app.handle(new Request('http://x/users/1'))   // ใช้ในเทส — ไม่ต้องเปิดพอร์ต
 *   app.listen({ port: 3000 })
 *
 * ลำดับต่อหนึ่ง request: onRequest → หา route → derive → อ่าน body → ตรวจ schema → beforeHandle (guard) → handler
 *   → onAfterHandle → แปลงผลเป็น Response (+ Set-Cookie, set.headers) → onResponse
 * error ที่ไหนก็ตามไปที่ onError (ค่าเริ่มต้นตอบข้อความสั้นๆ)
 */
import type { Server, ServerWebSocket } from 'bun'
import { CookieJar } from './cookie'
import { KitError, NotFoundError, ParseError, StatusResponse, ValidationError, status as makeStatus } from './errors'
import { validate, type Schema } from './schema'
import type { LoadedSocket } from './ws'

// ───────────── Context ─────────────

export type SetState = { status: number; headers: Record<string, string | number | string[]> }

const EMPTY_PARAMS: Record<string, string> = Object.freeze(Object.create(null))

export class Context {
  readonly path: string
  readonly set: SetState = { status: 200, headers: {} }
  /** เวลาเริ่มรับ request (ns) — ใช้ทำ Server-Timing และ log */
  readonly t0 = Bun.nanoseconds()
  params: Record<string, string> = EMPTY_PARAMS
  body: any = undefined;
  /** ค่าที่ derive/guard เพิ่มเข้ามา */
  [key: string]: any

  private _query?: Record<string, any>
  private _headers?: Record<string, string>
  private _jar?: CookieJar
  private _ip?: string

  constructor(
    readonly request: Request,
    readonly app: App,
    /** Bun server (มีเมื่อรันจริง ไม่มีตอนเรียก app.handle() ในเทส) — ใช้หา IP ของ client */
    readonly server?: Server<any>,
  ) {
    this.path = pathOf(request.url)
  }

  /**
   * IP ของ client — ถ้าเปิด trustProxy (TRUST_PROXY=1, อยู่หลัง load balancer/nginx) ใช้ X-Forwarded-For ตัวแรก
   * ไม่งั้นใช้ IP ของ socket (ห้ามเปิด trustProxy ถ้าไม่ได้อยู่หลัง proxy จริง เพราะ client ปลอม header ได้)
   */
  get ip(): string {
    if (this._ip !== undefined) return this._ip
    let ip: string | undefined
    if (this.app.trustProxy) {
      const xff = this.request.headers.get('x-forwarded-for')
      if (xff) ip = xff.split(',')[0]!.trim()
    }
    ip ??= this.server?.requestIP(this.request)?.address
    return (this._ip = ip ?? 'unknown')
  }

  /** id ของ request นี้ (ใช้ X-Request-Id ที่ส่งมา ถ้าไม่มีสร้างใหม่) — ใช้ใน log / ส่งต่อไป service อื่น */
  get id(): string {
    const incoming = this.request.headers.get('x-request-id')
    const value = incoming && incoming.length <= 128 ? incoming : newRequestId()
    Object.defineProperty(this, 'id', { value, configurable: true, enumerable: true })
    return value
  }

  get query(): Record<string, any> {
    return (this._query ??= parseQuery(this.request.url))
  }
  set query(v) {
    this._query = v
  }

  get headers(): Record<string, string> {
    return (this._headers ??= Object.fromEntries(this.request.headers))
  }
  set headers(v) {
    this._headers = v
  }

  /** ตัวจัดการ cookie ของ request นี้ (อ่านครั้งแรกแล้วตรวจลายเซ็นให้ — ไม่ตรง throw InvalidCookieSignature) */
  get jar(): CookieJar {
    if (!this._jar) {
      this._jar = new CookieJar(this.request.headers.get('cookie'), this.app.cookieSecret, this.app.signedCookies)
      this._jar.verifyAll()
    }
    return this._jar
  }

  get cookie() {
    return this.jar.proxy()
  }

  get cookieHeaders(): string[] {
    return this._jar?.headers ?? []
  }

  status(code: number, body?: unknown) {
    return makeStatus(code, body)
  }

  redirect(location: string, code = 302) {
    return new Response(null, { status: code, headers: { location } })
  }
}

const bootId = Date.now().toString(36)
let requestCounter = 0
/** id สั้นๆ ที่ไม่ซ้ำ (เวลาเริ่ม process + ตัวนับ) — เร็วกว่า randomUUID มาก */
export const newRequestId = () => `${bootId}-${(++requestCounter).toString(36)}`

function pathOf(url: string): string {
  const start = url.indexOf('/', url.indexOf('://') + 3)
  if (start < 0) return '/'
  let end = url.indexOf('?', start)
  const hash = url.indexOf('#', start)
  if (hash >= 0 && (end < 0 || hash < end)) end = hash
  const last = end < 0 ? url.length : end
  // ตัด / ท้าย path (ยกเว้น root)
  return last - start > 1 && url.charCodeAt(last - 1) === 47 ? url.slice(start, last - 1) : url.slice(start, last)
}

function parseQuery(url: string): Record<string, any> {
  const q = url.indexOf('?')
  const out: Record<string, any> = Object.create(null)
  if (q < 0) return out
  const hash = url.indexOf('#', q)
  for (const [k, v] of new URLSearchParams(url.slice(q + 1, hash < 0 ? undefined : hash))) {
    if (k in out) out[k] = Array.isArray(out[k]) ? [...out[k], v] : [out[k], v]
    else out[k] = v
  }
  return out
}

// ───────────── Router (radix ตามส่วนของ path) ─────────────

export type Handler = (ctx: any) => unknown
export type RouteHook = {
  body?: Schema
  query?: Schema
  params?: Schema
  headers?: Schema
  detail?: Record<string, unknown>
  beforeHandle?: Handler | Handler[]
}

export type RouteEntry = { method: string; path: string; handler: Handler; hook: RouteHook; before: Handler[]; ws?: LoadedSocket }

class Node {
  statics = new Map<string, Node>()
  param?: Node
  paramName = ''
  entries = new Map<string, RouteEntry>()
  /** route แบบ wildcard (*) ที่ลงท้ายที่ node นี้ */
  wild = new Map<string, RouteEntry>()
}

function insert(root: Node, entry: RouteEntry) {
  let node = root
  for (const seg of entry.path.split('/').filter(Boolean)) {
    if (seg === '*') {
      node.wild.set(entry.method, entry)
      return
    }
    if (seg.startsWith(':')) {
      node = node.param ??= new Node()
      node.paramName = seg.slice(1)
    } else {
      let next = node.statics.get(seg)
      if (!next) node.statics.set(seg, (next = new Node()))
      node = next
    }
  }
  node.entries.set(entry.method, entry)
}

const decode = (s: string) => {
  try {
    return decodeURIComponent(s)
  } catch {
    return s
  }
}

function find(node: Node, segs: string[], i: number, method: string, params: Record<string, string>): RouteEntry | undefined {
  if (i === segs.length) {
    const hit = node.entries.get(method)
    if (hit) return hit
  } else {
    const seg = segs[i]!
    const s = node.statics.get(seg)
    if (s) {
      const r = find(s, segs, i + 1, method, params)
      if (r) return r
    }
    if (node.param) {
      const r = find(node.param, segs, i + 1, method, params)
      if (r) {
        params[node.param.paramName] = decode(seg)
        return r
      }
    }
  }
  const w = node.wild.get(method)
  if (w) {
    params['*'] = segs.slice(i).map(decode).join('/')
    return w
  }
  return undefined
}

// ───────────── SSE ─────────────

export type SseEvent = { event?: string; data?: unknown; id?: string | number; retry?: number }
const SSE = Symbol('sse')
type Sse = SseEvent & { [SSE]: true }

/** yield sse({ event: 'tick', data: '...' }) ใน async generator handler → Server-Sent Events */
export const sse = (e: SseEvent): Sse => ({ ...e, [SSE]: true })
const isSse = (v: unknown): v is Sse => typeof v === 'object' && v !== null && SSE in v

function formatSse(e: Sse): string {
  let out = ''
  if (e.id != null) out += `id: ${e.id}\n`
  if (e.event) out += `event: ${e.event}\n`
  if (e.retry != null) out += `retry: ${e.retry}\n`
  const data = e.data == null ? '' : typeof e.data === 'string' ? e.data : JSON.stringify(e.data)
  for (const line of data.split('\n')) out += `data: ${line}\n`
  return out + '\n'
}

// ───────────── App ─────────────

export type ErrorInfo = { code: string; error: unknown; path: string; set: SetState; ctx: Context }
type RequestHook = (ctx: Context) => unknown
type ResponseHook = (ctx: Context, response: Response) => unknown

export type AppOptions = {
  cookie?: { secret?: string; signed?: string[] }
  /** ใส่ header Server-Timing: app;dur=… ให้ทุกคำตอบ */
  serverTiming?: boolean
  /** ใส่ X-Content-Type-Options + X-Frame-Options ให้คำตอบที่เป็น HTML (กัน clickjacking/sniffing) */
  htmlSecurityHeaders?: boolean
  /** บีบอัด gzip คำตอบข้อความที่ใหญ่กว่า 1 KB ให้เองเมื่อ client รองรับ (หน้าที่ cache บีบไว้ล่วงหน้าแล้วไม่ซ้ำ) */
  compress?: boolean
  /** เชื่อ X-Forwarded-For (เปิดเมื่ออยู่หลัง load balancer / reverse proxy) */
  trustProxy?: boolean
}

const encoder = new TextEncoder()
const WS_ACCEPT = (req: Request) => req.headers.get('upgrade')?.toLowerCase() === 'websocket'
/** Response ที่ประกอบ header ครบแล้ว (เช่น หน้าที่ cache / ไฟล์ static) — ไม่ต้องเติม header ซ้ำ ลดการเรียก native ต่อ request */
export const complete = new WeakSet<Response>()
/**
 * gzip ระดับ 1 (ลดขนาดได้ ~3.5 เท่า ใช้ ~0.1ms ต่อหน้า) + จำผลของเนื้อหาที่ซ้ำกัน
 * หน้าเดียวกันที่ผู้ใช้แต่ละคนได้ HTML เหมือนกันทุกตัวอักษรจึงบีบแค่ครั้งเดียว (เทียบ string ~ไม่กี่ µs แทน ~100µs)
 */
const gzMemo = new Map<string, Uint8Array<ArrayBuffer>>()
function gzipCached(body: string): Uint8Array<ArrayBuffer> {
  const hit = gzMemo.get(body)
  if (hit) return hit
  const out = Bun.gzipSync(body, { level: 1 }) as Uint8Array<ArrayBuffer>
  if (body.length <= 256 * 1024) {
    if (gzMemo.size >= 128) gzMemo.delete(gzMemo.keys().next().value!)
    gzMemo.set(body, out)
  }
  return out
}
const isP = (v: unknown): v is Promise<any> => v instanceof Promise
const HTML = 'text/html; charset=utf-8'
const TEXT = 'text/plain; charset=utf-8'
const JSON_TYPE = 'application/json'

export class App {
  server?: Server<{ def: LoadedSocket }>
  readonly cookieSecret: string
  readonly signedCookies: Set<string>
  /** ทุก route ที่ลงทะเบียน (ใช้ทำเอกสาร OpenAPI) */
  readonly entries: RouteEntry[] = []

  private root = new Node()
  /** route ที่ไม่มี :param / * — หาด้วย Map ตรงๆ เร็วกว่าเดิน tree */
  private exact = new Map<string, Map<string, RouteEntry>>()
  private reqHooks: RequestHook[] = []
  private derivers: ((ctx: Context) => unknown)[] = []
  private afterHooks: RequestHook[] = []
  private resHooks: ResponseHook[] = []
  private errorHook?: (info: ErrorInfo) => unknown
  private serverTiming: boolean
  private htmlSecurity: boolean
  private compress: boolean
  readonly trustProxy: boolean
  /** true ระหว่างปิดระบบ (shutdown) — /readyz ตอบ 503 เพื่อให้ load balancer เลิกส่งงานมา */
  draining = false
  /** จำนวน request ที่กำลังประมวลผลอยู่ */
  inflight = 0
  private shutdownHooks: (() => unknown)[] = []
  /** path ของ WebSocket (ไม่มี :param) — เช็กก่อนอ่าน header Upgrade เพื่อไม่ให้ทุก request เสียต้นทุนนั้น */
  private wsPaths = new Set<string>()
  private wsDynamic = false

  constructor(opts: AppOptions = {}) {
    this.cookieSecret = opts.cookie?.secret ?? 'dev-cookie-secret'
    this.signedCookies = new Set(opts.cookie?.signed ?? [])
    this.serverTiming = opts.serverTiming ?? false
    this.htmlSecurity = opts.htmlSecurityHeaders ?? false
    this.compress = opts.compress ?? false
    this.trustProxy = opts.trustProxy ?? false
  }

  /** ปลั๊กอินคือฟังก์ชันที่รับ app มาเพิ่ม hook/route */
  use(plugin: (app: App) => unknown): this {
    plugin(this)
    return this
  }

  /** ทำงานก่อนหา route — return Response = ตัดจบ (ใช้กับ security, middleware) */
  onRequest(fn: RequestHook): this {
    this.reqHooks.push(fn)
    return this
  }

  /** ต่อ context ทุก request: คืน object แล้วถูกรวมเข้า ctx (ทำงานทุก request — ถ้าค่านั้นมีต้นทุน ใช้ lazy() แทน) */
  derive(fn: (ctx: Context) => Record<string, unknown>): this {
    this.derivers.push(fn)
    return this
  }

  /** เพิ่ม ctx.<name> แบบสร้างเมื่อถูกอ่านครั้งแรกเท่านั้น (request ที่ไม่แตะก็ไม่เสียอะไร) */
  lazy(name: string, factory: (ctx: Context) => unknown): this {
    Object.defineProperty(Context.prototype, name, {
      configurable: true,
      get(this: Context) {
        const value = factory(this)
        Object.defineProperty(this, name, { value, writable: true, configurable: true, enumerable: true })
        return value
      },
      set(this: Context, value: unknown) {
        Object.defineProperty(this, name, { value, writable: true, configurable: true, enumerable: true })
      },
    })
    return this
  }

  /** ทำงานหลัง handler (ต้องเป็นฟังก์ชัน sync) */
  onAfterHandle(fn: RequestHook): this {
    this.afterHooks.push(fn)
    return this
  }

  onResponse(fn: ResponseHook): this {
    this.resHooks.push(fn)
    return this
  }

  onError(fn: (info: ErrorInfo) => unknown): this {
    this.errorHook = fn
    return this
  }

  private register(entry: RouteEntry) {
    insert(this.root, entry)
    this.entries.push(entry)
    if (!entry.path.includes(':') && !entry.path.includes('*')) {
      const key = entry.path.length > 1 && entry.path.endsWith('/') ? entry.path.slice(0, -1) : entry.path
      let byMethod = this.exact.get(key)
      if (!byMethod) this.exact.set(key, (byMethod = new Map()))
      byMethod.set(entry.method, entry)
    }
  }

  route(method: string, path: string, handler: Handler, hook: RouteHook = {}): this {
    const before = hook.beforeHandle ? [hook.beforeHandle].flat() : []
    this.register({ method: method.toUpperCase(), path, handler, hook, before })
    return this
  }

  get(path: string, handler: Handler, hook?: RouteHook) {
    return this.route('GET', path, handler, hook)
  }
  post(path: string, handler: Handler, hook?: RouteHook) {
    return this.route('POST', path, handler, hook)
  }

  ws(path: string, def: LoadedSocket): this {
    if (path.includes(':') || path.includes('*')) this.wsDynamic = true
    else this.wsPaths.add(path)
    this.register({ method: 'WS', path, handler: () => undefined, hook: {}, before: [], ws: def })
    return this
  }

  /** เดิมใช้คอมไพล์ handler — ของเราไม่ต้องทำอะไร (คงชื่อไว้ให้โค้ดเดิมเรียกได้) */
  compile(): this {
    return this
  }

  private match(method: string, path: string, ctx?: Context): RouteEntry | undefined {
    const byMethod = this.exact.get(path)
    if (byMethod) {
      const hit = byMethod.get(method) ?? (method === 'HEAD' ? byMethod.get('GET') : undefined)
      if (hit) return hit
    }
    const params: Record<string, string> = Object.create(null)
    const segs = path === '/' ? [] : path.slice(1).split('/')
    const entry = find(this.root, segs, 0, method, params) ?? (method === 'HEAD' ? find(this.root, segs, 0, 'GET', params) : undefined)
    if (entry && ctx) ctx.params = params
    return entry
  }

  // ───── ประมวลผล request ─────
  // ทุกขั้นคืนค่าตรงๆ (sync) เมื่อไม่มีอะไรเป็น Promise — handler/guard ที่เป็น sync จึงไม่เสียต้นทุน await เลย
  // เจอ Promise เมื่อไหร่ก็ต่อ .then จากจุดนั้น

  handle(request: Request, server?: Server<any>): Response | Promise<Response> {
    this.inflight++
    const ctx = new Context(request, this, server)
    let out: Response | Promise<Response>
    try {
      out = this.runReq(ctx, 0)
    } catch (err) {
      out = this.fail(err, ctx)
    }
    if (isP(out)) return out.catch((err) => this.fail(err, ctx)).then((res) => this.done(ctx, res))
    return this.done(ctx, out)
  }

  private done(ctx: Context, res: Response): Response {
    this.inflight--
    if (ctx.request.method === 'HEAD') res = new Response(null, { status: res.status, headers: res.headers })
    for (const hook of this.resHooks) {
      try {
        const r = hook(ctx, res)
        if (isP(r)) r.catch(() => {})
      } catch {}
    }
    return res
  }

  private runReq(ctx: Context, i: number): Response | Promise<Response> {
    const hooks = this.reqHooks
    for (; i < hooks.length; i++) {
      const r = hooks[i]!(ctx)
      if (r === undefined) continue
      if (isP(r)) {
        const next = i + 1
        return r.then((v) => (v !== undefined ? this.toResponse(v, ctx) : this.runReq(ctx, next)))
      }
      return this.toResponse(r, ctx)
    }
    const entry = this.match(ctx.request.method, ctx.path, ctx)
    if (!entry) throw new NotFoundError()
    ctx.route = entry.path // pattern ของ route (/users/:id) — ใช้ label ใน metrics
    return this.runDerive(ctx, entry, 0)
  }

  private runDerive(ctx: Context, entry: RouteEntry, i: number): Response | Promise<Response> {
    const d = this.derivers
    for (; i < d.length; i++) {
      const r: any = d[i]!(ctx)
      if (isP(r)) {
        const next = i + 1
        return r.then((v) => {
          if (v) Object.assign(ctx, v)
          return this.runDerive(ctx, entry, next)
        })
      }
      if (r) Object.assign(ctx, r)
    }
    const method = ctx.request.method
    if (method !== 'GET' && method !== 'HEAD' && ctx.request.body) {
      return readBody(ctx.request).then((body) => {
        ctx.body = body
        return this.validate(ctx, entry)
      })
    }
    return this.validate(ctx, entry)
  }

  private validate(ctx: Context, entry: RouteEntry): Response | Promise<Response> {
    const { hook } = entry
    if (hook.params) ctx.params = check('params', hook.params, ctx.params)
    if (hook.query) ctx.query = check('query', hook.query, ctx.query)
    if (hook.headers) ctx.headers = check('headers', hook.headers, ctx.headers)
    if (hook.body) ctx.body = check('body', hook.body, ctx.body)
    return this.runBefore(ctx, entry, 0)
  }

  private runBefore(ctx: Context, entry: RouteEntry, i: number): Response | Promise<Response> {
    const before = entry.before
    for (; i < before.length; i++) {
      const r = before[i]!(ctx)
      if (r === undefined) continue
      if (isP(r)) {
        const next = i + 1
        return r.then((v) => (v !== undefined ? this.toResponse(v, ctx) : this.runBefore(ctx, entry, next)))
      }
      return this.toResponse(r, ctx)
    }
    const result = entry.handler(ctx)
    return isP(result) ? result.then((v) => this.respond(ctx, v)) : this.respond(ctx, result)
  }

  private respond(ctx: Context, value: unknown): Response {
    for (const hook of this.afterHooks) hook(ctx)
    return this.toResponse(value, ctx)
  }

  private fail(err: unknown, ctx: Context): Response | Promise<Response> {
    const kit = err instanceof KitError ? err : null
    const code = kit?.code ?? 'INTERNAL'
    ctx.set.status = kit?.status ?? 500
    const fallback = kit ? kit.message : 'Internal Server Error'
    const broken = (inner: unknown) => {
      console.error(inner)
      ctx.set.status = 500
      return this.toResponse('Internal Server Error', ctx)
    }
    let value: unknown
    try {
      value = this.errorHook?.({ code, error: err, path: ctx.path, set: ctx.set, ctx })
    } catch (inner) {
      return broken(inner)
    }
    if (isP(value)) return value.then((v) => this.toResponse(v ?? fallback, ctx), broken)
    return this.toResponse(value ?? fallback, ctx)
  }

  // ───── แปลงผลของ handler เป็น Response ─────

  toResponse(value: unknown, ctx: Context): Response {
    let code = ctx.set.status
    if (value instanceof StatusResponse) {
      code = value.code
      value = value.body
    }

    if (value instanceof Response) return this.passthrough(value, ctx)

    let body: BodyInit | null
    let type: string | undefined
    if (typeof value === 'string') {
      body = value.startsWith('<html') ? '<!doctype html>' + value : value
      type = value.charCodeAt(0) === 60 /* < */ ? HTML : TEXT
    } else if (value == null) body = null
    else if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') {
      body = String(value)
      type = TEXT
    } else if (value instanceof Blob || value instanceof ReadableStream || value instanceof ArrayBuffer || ArrayBuffer.isView(value)) body = value as BodyInit
    else if (typeof (value as any)[Symbol.asyncIterator] === 'function') return this.streamResponse(value as AsyncIterable<unknown>, ctx, code)
    else {
      body = JSON.stringify(value)
      type = JSON_TYPE
    }
    if (this.compress && typeof body === 'string' && body.length >= 1024) {
      const accept = ctx.request.headers.get('accept-encoding')
      if (accept !== null && accept.includes('gzip')) {
        body = gzipCached(body)
        ctx.set.headers['content-encoding'] = 'gzip'
        ctx.set.headers['vary'] = 'Accept-Encoding'
      }
    }
    return this.build(body, code, type, ctx)
  }

  /** สร้าง Response ใหม่ โดยรวม header ทั้งหมดไว้ในการเรียกเดียว (เร็วกว่า headers.set ทีละตัวมาก) */
  private build(body: BodyInit | null, status: number, type: string | undefined, ctx: Context): Response {
    const extra = ctx.set.headers
    const cookies = ctx.cookieHeaders
    const headers: Record<string, string> = type ? { 'content-type': type } : {}
    let multi: string[][] | null = null

    for (const k in extra) {
      const v = extra[k]!
      const key = k.toLowerCase()
      if (Array.isArray(v)) (multi ??= []).push([key, ...v])
      else headers[key] = typeof v === 'string' ? v : String(v)
    }
    if (this.htmlSecurity && type === HTML) {
      headers['x-content-type-options'] = 'nosniff'
      headers['x-frame-options'] = 'SAMEORIGIN'
    }
    if (this.serverTiming) headers['server-timing'] = `app;dur=${((Bun.nanoseconds() - ctx.t0) / 1e6).toFixed(3)}`

    if (cookies.length === 0 && !multi) return new Response(body, { status, headers })

    const h = new Headers(headers)
    if (multi) for (const [k, ...vs] of multi) for (const v of vs) h.append(k!, v)
    for (const c of cookies) h.append('set-cookie', c)
    return new Response(body, { status, headers: h })
  }

  /** async generator → ส่งทีละ chunk เป็น text/event-stream (yield sse(...) จัดรูปแบบให้) ปิด connection = เรียก finally ของ generator */
  private streamResponse(source: AsyncIterable<unknown>, ctx: Context, code: number): Response {
    const it = source[Symbol.asyncIterator]()
    const stream = new ReadableStream<Uint8Array>({
      async pull(controller) {
        const r = await it.next()
        if (r.done) return controller.close()
        const v = r.value
        controller.enqueue(encoder.encode(isSse(v) ? formatSse(v) : typeof v === 'string' ? v : JSON.stringify(v) + '\n'))
      },
      async cancel() {
        await it.return?.()
      },
    })
    ctx.set.headers['cache-control'] ??= 'no-cache'
    ctx.set.headers['connection'] ??= 'keep-alive'
    return this.build(stream, code, 'text/event-stream; charset=utf-8', ctx)
  }

  /** Response ที่ handler สร้างมาเอง: เติม set.headers / Set-Cookie / Server-Timing โดยไม่ทับ header ที่มีอยู่แล้ว */
  private passthrough(res: Response, ctx: Context): Response {
    if (complete.has(res)) {
      let extra = ctx.cookieHeaders.length > 0
      if (!extra) for (const _ in ctx.set.headers) { extra = true; break }
      if (!extra) return res
    }
    // คำขอจาก kit.js (fetch) จะตาม 3xx เอง จนอ่าน HX-Redirect ไม่ได้ → ตอบ 200 + HX-Redirect แทน
    if (res.status >= 300 && res.status < 400 && res.headers.has('hx-redirect') && ctx.request.headers.has('hx-request')) {
      const headers = new Headers(res.headers)
      headers.delete('location')
      res = new Response(null, { status: 200, headers })
    }
    const extra = ctx.set.headers
    const cookies = ctx.cookieHeaders

    const apply = (r: Response) => {
      for (const k in extra) {
        if (r.headers.has(k)) continue
        const v = extra[k]!
        if (Array.isArray(v)) for (const x of v) r.headers.append(k, x)
        else r.headers.set(k, String(v))
      }
      if (this.htmlSecurity && r.headers.get('content-type')?.startsWith('text/html') && !r.headers.has('x-frame-options')) {
        r.headers.set('x-content-type-options', 'nosniff')
        r.headers.set('x-frame-options', 'SAMEORIGIN')
      }
      if (this.serverTiming && !r.headers.has('server-timing')) r.headers.set('server-timing', `app;dur=${((Bun.nanoseconds() - ctx.t0) / 1e6).toFixed(3)}`)
      for (const c of cookies) r.headers.append('set-cookie', c)
      return r
    }
    try {
      return apply(res)
    } catch {
      // Response.redirect() / fetch() คืน headers ที่แก้ไม่ได้ → สำเนาแล้วค่อยใส่
      return apply(new Response(res.body, res))
    }
  }

  // ───── เปิดเซิร์ฟเวอร์ ─────

  /** ใช้โดย Bun.serve — คืน undefined เมื่ออัปเกรดเป็น WebSocket สำเร็จ */
  fetch(request: Request, server: Server<{ def: LoadedSocket }>): Response | Promise<Response> | undefined {
    if ((this.wsDynamic || this.wsPaths.size) && (this.wsDynamic || this.wsPaths.has(pathOf(request.url))) && WS_ACCEPT(request)) {
      const entry = this.match('WS', pathOf(request.url))
      if (entry?.ws && server.upgrade(request, { data: { def: entry.ws } })) return undefined
    }
    return this.handle(request, server as Server<any>)
  }

  /** ทำงานตอนปิดระบบ (ปิด DB, หยุด job ฯลฯ) — เรียกจาก shutdown() */
  onShutdown(fn: () => unknown): this {
    this.shutdownHooks.push(fn)
    return this
  }

  /**
   * ปิดแบบสุภาพ: /readyz เปลี่ยนเป็น 503, หยุดรับ connection ใหม่, รอ request ที่ค้างอยู่ให้เสร็จ (สูงสุด timeoutMs)
   * แล้วค่อยปิด connection ที่เหลือ (เช่น SSE/WebSocket) และเรียก onShutdown hooks
   */
  async shutdown(timeoutMs = 10_000): Promise<void> {
    if (this.draining) return
    this.draining = true
    void this.server?.stop(false) // หยุดรับใหม่ ของเก่าทำต่อ
    const deadline = Date.now() + timeoutMs
    while (this.inflight > 0 && Date.now() < deadline) await Bun.sleep(10)
    await this.server?.stop(true)
    for (const hook of this.shutdownHooks) {
      try {
        await hook()
      } catch (err) {
        console.error('shutdown hook ล้มเหลว:', err)
      }
    }
  }

  listen({
    port = 3000,
    reusePort = false,
    hostname,
    maxBodySize,
  }: { port?: number; reusePort?: boolean; hostname?: string; maxBodySize?: number } = {}): this {
    this.server = Bun.serve<{ def: LoadedSocket }>({
      port,
      reusePort,
      hostname,
      maxRequestBodySize: maxBodySize,
      idleTimeout: 30,
      fetch: (req, server) => this.fetch(req, server),
      websocket: {
        open: (ws: ServerWebSocket<{ def: LoadedSocket }>) => void ws.data.def.open?.(ws),
        message: (ws: ServerWebSocket<{ def: LoadedSocket }>, raw) => {
          const { def } = ws.data
          if (!def.body) return void def.message?.(ws, raw)
          let value: unknown = raw
          if (typeof raw === 'string') {
            try {
              value = JSON.parse(raw)
            } catch {
              return
            }
          }
          const r = validate(def.body, value)
          if (r.ok) def.message?.(ws, r.value)
        },
        close: (ws: ServerWebSocket<{ def: LoadedSocket }>, code, reason) => void ws.data.def.close?.(ws, code, reason),
      },
    })
    return this
  }
}

// ───────────── body + validation ─────────────

async function readBody(request: Request): Promise<unknown> {
  if (!request.body) return undefined
  const type = request.headers.get('content-type') ?? ''
  try {
    if (type.includes('json')) {
      try {
        return await request.json() // เร็วกว่า text() + JSON.parse (parse ในโค้ดเนทีฟ)
      } catch (err) {
        if (request.headers.get('content-length') === '0') return undefined
        throw err
      }
    }
    if (type.includes('x-www-form-urlencoded') || type.includes('multipart/form-data')) {
      const out: Record<string, any> = Object.create(null)
      const form = type.includes('multipart') ? await request.formData() : new URLSearchParams(await request.text())
      for (const [k, v] of form as Iterable<[string, any]>) {
        if (k in out) out[k] = Array.isArray(out[k]) ? [...out[k], v] : [out[k], v]
        else out[k] = v
      }
      return out
    }
    if (type.startsWith('text/')) return await request.text()
  } catch {
    throw new ParseError()
  }
  return undefined
}

function check(where: string, schema: Schema, value: unknown) {
  const r = validate(schema, value)
  if (!r.ok) throw new ValidationError(where, r.issues)
  return r.value
}
