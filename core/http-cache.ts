/**
 * Response ที่บีบอัดไว้ล่วงหน้า (brotli + gzip) พร้อม ETag — บีบครั้งเดียว ส่งได้ไม่จำกัดครั้ง
 * และตัวห่อ handler ให้ cache ทั้ง response:  export const cache = 60  ในไฟล์ route
 */
import { brotliCompressSync, constants } from 'node:zlib'
import { cache } from './cache'
import { complete } from './server'
import { openStoreFromEnv, type CachedPage, type SqliteStore } from './cache-store'

type Bytes = Uint8Array<ArrayBuffer>

export type Packed = {
  raw: Bytes
  gz: Bytes | null
  br: Bytes | null
  etag: string
  type: string
  /** byte ทั้งหมดที่ใช้ใน cache */
  size: number
}

const encoder = new TextEncoder()
const COMPRESSIBLE = /^(text\/|application\/(json|javascript|xml)|image\/svg)/

/** แปลงเนื้อหาเป็น Packed — brQuality: 5 เร็ว (หน้าเว็บ), 11 เล็กสุด (ไฟล์ static บีบครั้งเดียว) */
export function pack(body: string | Uint8Array, type: string, brQuality = 5): Packed {
  const raw = (typeof body === 'string' ? encoder.encode(body) : body) as Bytes
  const worth = raw.byteLength >= 1024 && COMPRESSIBLE.test(type) // ไฟล์เล็กบีบแล้วไม่คุ้ม
  const gz = worth ? (Bun.gzipSync(raw, { level: 6 }) as Bytes) : null
  const br = worth
    ? (new Uint8Array(
        brotliCompressSync(raw, {
          params: { [constants.BROTLI_PARAM_QUALITY]: brQuality, [constants.BROTLI_PARAM_SIZE_HINT]: raw.byteLength },
        }),
      ) as Bytes)
    : null
  return {
    raw,
    gz,
    br,
    etag: `"${Bun.hash(raw).toString(36)}"`,
    type,
    size: raw.byteLength + (gz?.byteLength ?? 0) + (br?.byteLength ?? 0) + 128,
  }
}

/**
 * ส่ง Packed ตาม Accept-Encoding ของ browser · ETag ตรง = 304 (ไม่ส่ง body เลย)
 * header ทั้งหมดรวมเป็น object เดียวแล้วสร้าง Response ครั้งเดียว (เร็วกว่า new Headers + set ทีละตัวมาก)
 * HTML ได้ header ความปลอดภัยให้ในนี้เลย · ค่า undefined ใน headers = ข้าม
 */
export function respond(p: Packed, request: Request, headers: Record<string, string | undefined> = {}): Response {
  const h: Record<string, string> = { 'content-type': p.type, etag: p.etag, vary: 'Accept-Encoding' }
  if (p.type.startsWith('text/html')) {
    h['x-content-type-options'] = 'nosniff'
    h['x-frame-options'] = 'SAMEORIGIN'
  }
  for (const k in headers) {
    const v = headers[k]
    if (v !== undefined) h[k] = v
  }

  let res: Response
  if (request.headers.get('if-none-match') === p.etag) res = new Response(null, { status: 304, headers: h })
  else {
    const accept = request.headers.get('accept-encoding') ?? ''
    if (p.br && accept.includes('br')) {
      h['content-encoding'] = 'br'
      res = new Response(p.br, { headers: h })
    } else if (p.gz && accept.includes('gzip')) {
      h['content-encoding'] = 'gzip'
      res = new Response(p.gz, { headers: h })
    } else res = new Response(p.raw, { headers: h })
  }
  complete.add(res)
  return res
}

type Ctx = { request: Request; set: { status?: number | string }; t0?: number }
type AnyHandler = (ctx: any) => unknown

export type CacheOptions = {
  /** วินาทีหลังหมด ttl ที่ยังส่งของเก่าได้ (X-Cache: STALE) ระหว่างสร้างใหม่ใน background */
  swr?: number
  /** tag สำหรับ revalidateTag() — รับ array หรือฟังก์ชันที่คืน array จาก ctx */
  tags?: string[] | ((ctx: any) => string[])
}

/** ชั้นที่ 2 (ถ้าเปิด CACHE_STORE=sqlite) */
export const store: SqliteStore | null = openStoreFromEnv()
/** เมื่อมี store, ชั้นหน่วยความจำอยู่ได้แค่ช่วงสั้นๆ เพื่อให้ revalidate ข้าม process มีผลเร็ว */
const L1_SECONDS = Number(process.env.CACHE_L1_SECONDS ?? 5)

const KEY = 'res:'
/** tag → key ที่ถืออยู่ในหน่วยความจำของ process นี้ */
const tagIndex = new Map<string, Set<string>>()

const pathOf = (url: string) => new URL(url).pathname

function putL1(key: string, e: CachedPage, totalSeconds: number) {
  const ttl = store ? Math.min(totalSeconds, L1_SECONDS) : totalSeconds
  cache.set(key, e, { ttl, size: e.p.size })
  for (const tag of e.tags) {
    let keys = tagIndex.get(tag)
    if (!keys) tagIndex.set(tag, (keys = new Set()))
    keys.add(key)
  }
}

/** ลบ cache ของหน้านั้นทันที (ทุกค่า query) — path ลงท้าย /* = ทั้งโฟลเดอร์ · คืนจำนวนที่ลบ */
export function revalidatePath(path: string): number {
  const prefix = path.endsWith('/*') ? path.slice(0, -1) : null // เช่น '/docs/'
  const base = prefix ? prefix.slice(0, -1) || '/' : path
  const hit = cache.keys(KEY + '*').filter((k) => {
    const p = pathOf(k.slice(KEY.length))
    return prefix ? p === base || p.startsWith(prefix) : p === path
  })
  return cache.del(...hit) + (store?.delByPath(path) ?? 0)
}

/** ลบ cache ของทุกหน้าที่ติด tag นี้ (export const cacheTags = ['posts']) */
export function revalidateTag(tag: string): number {
  const keys = [...(tagIndex.get(tag) ?? [])]
  tagIndex.delete(tag)
  return cache.del(...keys) + (store?.delByTag(tag) ?? 0)
}

/**
 * cache ทั้ง response ของ GET ไว้ ttl วินาที (key = URL เต็มรวม query)
 * เก็บเฉพาะสถานะ 200 ที่เป็น HTML string หรือ JSON — อย่าใช้กับหน้าที่ขึ้นกับผู้ใช้/cookie
 * swr: หมด ttl แล้วยังส่งของเก่า (STALE) ได้อีก swr วินาที พร้อมสร้างใหม่เบื้องหลัง
 */
export function withResponseCache(handler: AnyHandler, ttl: number, opts: CacheOptions = {}): AnyHandler {
  // หน้าที่ติด tag ต้องล้างได้ทันทีด้วย revalidateTag → ให้ browser ถาม server ทุกครั้ง (ETag → 304 ถูกมาก) ไม่เก็บเองตาม ttl
  const browserMaxAge = opts.tags ? 0 : Math.min(ttl, 60)
  const swr = opts.swr ?? 0
  const refreshing = new Set<string>()

  const cacheControl = `public, max-age=${browserMaxAge}` + (browserMaxAge === 0 ? ', must-revalidate' : '') + (swr ? `, stale-while-revalidate=${swr}` : '')
  const headers = (state: string, ctx: Ctx) => ({
    'cache-control': cacheControl,
    'x-cache': state,
    'server-timing': ctx.t0 === undefined ? undefined : `app;dur=${((Bun.nanoseconds() - ctx.t0) / 1e6).toFixed(3)}`,
  })

  /** รัน handler จริงแล้วเก็บผล (ถ้าเก็บได้) */
  async function build(ctx: Ctx, key: string) {
    const result = await handler(ctx)
    const status = ctx.set.status ?? 200
    if (status !== 200 && status !== 'OK') return { result }
    if (result instanceof Response || result == null) return { result }

    let p: Packed
    if (typeof result === 'string') {
      const html = result.startsWith('<html') ? '<!doctype html>' + result : result
      p = pack(html, html.startsWith('<') ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8')
    } else if (typeof result === 'object') {
      p = pack(JSON.stringify(result), 'application/json')
    } else return { result }

    const tags = typeof opts.tags === 'function' ? opts.tags(ctx) : (opts.tags ?? [])
    const entry: CachedPage = { p, path: pathOf(ctx.request.url), tags, freshUntil: Date.now() + ttl * 1000 }
    putL1(key, entry, ttl + swr)
    store?.set(key, entry, Date.now() + (ttl + swr) * 1000)
    return { result, entry }
  }

  // cache hit ต้องคืน Response ตรงๆ (ไม่ใช่ Promise) เพื่อให้ pipeline เป็น sync ทั้งเส้น
  return (ctx: Ctx) => {
    const key = KEY + ctx.request.url
    let hit = cache.get<CachedPage>(key)
    if (!hit && store) {
      hit = store.get(key)
      if (hit) putL1(key, hit, Math.max(1, Math.ceil((hit.freshUntil + swr * 1000 - Date.now()) / 1000)))
    }

    if (hit) {
      if (Date.now() < hit.freshUntil) return respond(hit.p, ctx.request, headers('HIT', ctx))
      // เก่าแล้วแต่ยังอยู่ในช่วง swr → ส่งของเก่าก่อน แล้วสร้างใหม่เบื้องหลัง (ครั้งละหนึ่งงานต่อ key)
      if (!refreshing.has(key)) {
        refreshing.add(key)
        void build(ctx, key)
          .catch(() => cache.del(key))
          .finally(() => refreshing.delete(key))
      }
      return respond(hit.p, ctx.request, headers('STALE', ctx))
    }

    return build(ctx, key).then(({ result, entry }) => (entry ? respond(entry.p, ctx.request, headers('MISS', ctx)) : result))
  }
}
