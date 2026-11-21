/**
 * Global middleware แบบ Next.js — ไฟล์ src/middleware.ts (ไม่มีไฟล์ = ข้าม)
 *
 *   import { defineMiddleware, redirect } from '@core/route'
 *   export const config = { matcher: ['/admin/:path*', '/api/:path*'] }   // ไม่ใส่ = ทุก path
 *   export default defineMiddleware(({ request, path, set }) => {
 *     set.headers['x-request-id'] = crypto.randomUUID()                  // ไม่ return = ผ่านต่อ
 *     if (path.startsWith('/old')) return redirect('/new')               // return Response = ตัดจบ
 *   })
 *
 * ทำงานตั้งแต่ onRequest (ก่อน routing/validation) จึงยังไม่มี cookie/params — ถ้าต้องใช้ session ให้ใช้ _guard.ts
 * matcher: ':name' = 1 segment · ':name*' = 0+ segment · ':name+' = 1+ segment · '*' = อะไรก็ได้
 */
import type { App } from './server'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

export type MiddlewareContext = { request: Request; path: string; set: { headers: Record<string, any>; status?: number | string } }
export type MiddlewareFn = (ctx: MiddlewareContext) => unknown

/** แปลง matcher แบบ Next.js เป็น RegExp */
export function matcherToRegex(pattern: string): RegExp {
  let src = ''
  for (const seg of pattern.split('/').filter(Boolean)) {
    const m = /^:\w+([*+?])?$/.exec(seg)
    if (seg === '*') src += '(?:/.*)?'
    else if (!m) src += '/' + seg.replace(/[.+^${}()|[\]\\?*]/g, '\\$&')
    else if (m[1] === '*') src += '(?:/[^/]+)*'
    else if (m[1] === '+') src += '(?:/[^/]+)+'
    else if (m[1] === '?') src += '(?:/[^/]+)?'
    else src += '/[^/]+'
  }
  return new RegExp('^' + src + '/?$')
}

export const defineMiddleware = (fn: MiddlewareFn) => fn

export async function loadMiddleware(file = 'src/middleware.ts') {
  const path = resolve(file)
  if (!existsSync(path)) return (_app: App) => {}

  const mod = await import(path)
  const fn = mod.default as MiddlewareFn | undefined
  if (typeof fn !== 'function') throw new Error(`${file}: ต้อง export default เป็นฟังก์ชัน`)

  const matchers = ([] as string[]).concat(mod.config?.matcher ?? []).map(matcherToRegex)

  return (app: App) =>
    app.onRequest((ctx) => {
      if (matchers.length && !matchers.some((re) => re.test(ctx.path))) return
      return fn({ request: ctx.request, set: ctx.set as any, path: ctx.path })
    })
}
