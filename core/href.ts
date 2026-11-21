/**
 * ลิงก์ที่ตรวจชนิดตอน tsc — พิมพ์ path ผิดหรือลืม param = error ก่อนรัน
 *
 *   import { href } from '@core/href'
 *   href('/docs/:slug', { slug: 'layouts' })        // '/docs/layouts'
 *   href('/examples/routing/:id', { id: 7 }, { tab: 'a' })   // '/examples/routing/7?tab=a'
 *   href('/about')
 *   href('/docs/:slug')                              // ✖ ขาด params
 *   href('/nope')                                    // ✖ ไม่มี route นี้
 *
 * รายการ path มาจาก core/routes.gen.ts ซึ่งสร้างใหม่ทุกครั้งที่เซิร์ฟเวอร์ (หรือ bun run check) เริ่ม
 */
import type { RoutePath } from './routes.gen'

type ParamNames<P extends string> = P extends `${string}:${infer K}/${infer R}`
  ? K | ParamNames<`/${R}`>
  : P extends `${string}:${infer K}`
    ? K
    : P extends `${string}/*`
      ? '*'
      : never

export type Query = Record<string, string | number | boolean | null | undefined | (string | number)[]>

type Args<P extends string> = [ParamNames<P>] extends [never]
  ? [params?: undefined, query?: Query]
  : [params: Record<ParamNames<P>, string | number>, query?: Query]

export function href<P extends RoutePath>(path: P, ...[params, query]: Args<P>): string {
  const values = (params ?? {}) as Record<string, string | number>
  let url = path
    .split('/')
    .map((seg) => {
      if (seg === '*') return String(values['*'] ?? '').split('/').map(encodeURIComponent).join('/')
      if (seg.startsWith(':')) return encodeURIComponent(String(values[seg.slice(1)]))
      return seg
    })
    .join('/')

  if (query) {
    const qs = new URLSearchParams()
    for (const [k, v] of Object.entries(query)) {
      if (v == null) continue
      for (const item of Array.isArray(v) ? v : [v]) qs.append(k, String(item))
    }
    const text = qs.toString()
    if (text) url += '?' + text
  }
  return url
}
