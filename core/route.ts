/**
 * Helper สำหรับเขียนไฟล์ route ให้มี type ครบ
 *
 *   export const POST = defineRoute({
 *     body: t.Object({ name: t.String() }),
 *     handler: ({ body }) => body.name,   // body มี type อัตโนมัติ
 *   })
 *
 * หรือถ้าไม่ต้องการ validate ก็ export ฟังก์ชันตรงๆ ได้เลย
 *   export const GET = () => 'hello'
 */
import type { Static, Schema } from './schema'
import type { Session } from './session'
import type { Cookie } from './cookie'
import type { App, SetState } from './server'
import type { StatusResponse } from './errors'
import type { PropsWithChildren } from './jsx'
import { NotFoundError } from './errors'

export { t, type Static } from './schema'
export { Suspense } from './jsx'
export { sse } from './server'
export { status } from './errors'
export { defineSocket, type Socket } from './ws'
export { revalidatePath, revalidateTag } from './http-cache'
export { defineMiddleware } from './middleware'

/** redirect ที่ใช้ได้ทั้ง browser ปกติ (303) และ htmx (HX-Redirect) — ใช้ใน action / POST */
export const redirect = (location: string, status: 301 | 302 | 303 | 307 | 308 = 303) =>
  new Response(null, { status, headers: { location, 'hx-redirect': location } })

/** URL ของ server action (export const actions = { add }) ที่ใช้กับ hx-post — actionUrl('/todos', 'add') → /todos/_/add */
export const actionUrl = (path: string, name: string) => (path === '/' ? '' : path.replace(/\/\*$/, '')) + '/_/' + name

/** ใช้ใน loader: ไม่พบข้อมูล → ตอบ 404 ผ่านหน้า _404 / JSON ตามปกติ */
export const notFound = (): never => {
  throw new NotFoundError()
}

export type Schemas = {
  body?: Schema
  query?: Schema
  params?: Schema
  headers?: Schema
}

type Infer<S, K extends keyof Schemas, Fallback> = S extends { [P in K]: infer X }
  ? X extends Schema
    ? Static<X>
    : Fallback
  : Fallback

export type RouteContext<S extends Schemas = {}> = {
  request: Request
  path: string
  app: App
  set: SetState
  body: Infer<S, 'body', unknown>
  query: Infer<S, 'query', Record<string, string | undefined>>
  params: Infer<S, 'params', Record<string, string>>
  headers: Infer<S, 'headers', Record<string, string | undefined>>
  /** cookie.ชื่อ.value / .set({...}) / .remove() — ชื่อที่ตั้งใน createApp({ signed }) ถูกเซ็นลายเซ็นให้ */
  cookie: Record<string, Cookie>
  /** session ฝั่งเซิร์ฟเวอร์ (core/session.ts) — ยังไม่ set = ไม่สร้างแถว/cookie */
  session: Session
  /** return status(404, {...}) เพื่อตอบสถานะพร้อมเนื้อหา */
  status(code: number, body?: unknown): StatusResponse
  redirect(location: string, code?: number): Response
  /** ค่าที่ _guard.ts ส่งต่อมา (ผ่าน derive) */
  [key: string]: any
}

export type Handler<S extends Schemas = {}> = (ctx: RouteContext<S>) => unknown

export type RouteDef<S extends Schemas = {}> = S & {
  handler: Handler<S>
  /** ข้อมูลสำหรับ OpenAPI/เอกสาร (ถ้าใช้) */
  detail?: Record<string, unknown>
  beforeHandle?: Handler | Handler[]
}

type Opt<K extends string, T> = [T] extends [never] ? {} : { [P in K]: T }

export function defineRoute<
  B extends Schema = never,
  Q extends Schema = never,
  P extends Schema = never,
  H extends Schema = never,
>(def: {
  body?: B
  query?: Q
  params?: P
  headers?: H
  handler: Handler<NoInfer<Opt<'body', B> & Opt<'query', Q> & Opt<'params', P> & Opt<'headers', H>>>
  /** ข้อมูลสำหรับ OpenAPI/เอกสาร (ถ้าใช้) */
  detail?: Record<string, unknown>
  beforeHandle?: Handler | Handler[]
}): RouteDef {
  return def as RouteDef
}

/** _guard.ts: ใช้กับทุก route ในโฟลเดอร์เดียวกันและโฟลเดอร์ลูก */
export type Guard = {
  /** return ค่าใดๆ = ตัดจบ request (เช่น 401) ; ไม่ return = ผ่าน */
  beforeHandle?: Handler
  /** เพิ่มค่าเข้า context เช่น user ที่ login อยู่ */
  derive?: (ctx: RouteContext) => Record<string, unknown> | Promise<Record<string, unknown>>
}

export function defineGuard(g: Guard): Guard {
  return g
}

/** SEO/head: รวมจาก _layout ทุกชั้น (นอก→ใน) แล้วทับด้วยของหน้า — ใช้ title เป็น string ธรรมดา ไม่ต้อง escape */
export type Metadata = { title?: string; description?: string; [key: string]: unknown }

/** export const metadata = {...} หรือ export const generateMetadata = (ctx) => {...} (ctx.data = ผลจาก loader) */
export type MetadataInput = Metadata | ((ctx: RouteContext) => Metadata | Promise<Metadata>)

/** export const loader — ดึงข้อมูลก่อน render, ผลอยู่ที่ ctx.data (ส่ง Response กลับ = ตัดจบ เช่น redirect) */
export type Loader<T = unknown> = (ctx: RouteContext) => T | Promise<T>

/** props ของหน้าที่มี loader: PageProps<typeof loader> */
export type PageProps<L extends Loader = Loader> = RouteContext & { data: Awaited<ReturnType<L>> }

/** _layout.tsx: default export ครอบ children (หน้าหรือ layout ชั้นในกว่า) */
export type LayoutProps = { children: PropsWithChildren['children']; metadata: Metadata; ctx: RouteContext }
export type LayoutFn = (props: LayoutProps) => string | Promise<string>

/** _error.tsx / _not-found.tsx / _loading.tsx: default export คืน HTML ที่จะถูกครอบด้วย layout */
export type BoundaryProps = { ctx: RouteContext; error?: unknown }
export const defineBoundary = (fn: (props: BoundaryProps) => string | Promise<string>) => fn

export const defineLoader = <T>(fn: Loader<T>) => fn
export const defineLayout = (fn: LayoutFn) => fn

export const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'] as const
export type Method = (typeof METHODS)[number]
