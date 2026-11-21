/**
 * Schema + validation ของเราเอง (แทน TypeBox) — ประกาศครั้งเดียวได้ทั้ง type และการตรวจข้อมูล
 *
 *   import { t, type Static } from '@core/schema'
 *   const User = t.Object({ name: t.String({ minLength: 1 }), age: t.Optional(t.Numeric({ minimum: 0 })) })
 *   type User = Static<typeof User>
 *
 *   const r = validate(User, input)       // { ok: true, value } | { ok: false, issues: [{ path: '/name', message }] }
 *
 * - Object ตัด key ที่ไม่ได้ประกาศทิ้ง (เว้นแต่ { additionalProperties: true })
 * - Numeric / Boolean แปลงจากข้อความให้ (query string, form) ส่วน Number ต้องเป็นตัวเลขจริง
 * - { error: '...' } ที่ตัวไหน = ข้อความที่จะแสดงเมื่อตัวนั้นไม่ผ่าน
 */

export type Issue = { path: string; message: string; schema: Schema }

type Opts = Record<string, any>

export class Schema<T = any> {
  /** แค่เอาไว้ให้ TypeScript อนุมาน type — ไม่มีค่าจริงตอนรัน */
  declare readonly static: T

  constructor(
    readonly kind: string,
    readonly opts: Opts = {},
    readonly inner?: any,
  ) {}

  get error(): string | undefined {
    return typeof this.opts.error === 'string' ? this.opts.error : undefined
  }
}

export type Static<S extends Schema> = S['static']

class OptionalSchema<S extends Schema> extends Schema<Static<S> | undefined> {
  constructor(readonly schema: S) {
    super('optional', {}, schema)
  }
}

type Simplify<T> = { [K in keyof T]: T[K] } & {}
type OptionalKeys<P> = { [K in keyof P]: P[K] extends OptionalSchema<any> ? K : never }[keyof P]
type ObjectOf<P extends Record<string, Schema>> = Simplify<
  { [K in Exclude<keyof P, OptionalKeys<P>>]: Static<P[K]> } & { [K in OptionalKeys<P>]?: Static<P[K] & Schema> }
>

type StringOpts = { minLength?: number; maxLength?: number; pattern?: string; format?: 'email' | 'uuid' | 'uri' | 'date-time'; error?: string }
type NumOpts = { minimum?: number; maximum?: number; error?: string }
type Literalish = string | number | boolean

export const t = {
  String: (o: StringOpts = {}) => new Schema<string>('string', o),
  Number: (o: NumOpts = {}) => new Schema<number>('number', o),
  Integer: (o: NumOpts = {}) => new Schema<number>('integer', o),
  /** รับตัวเลขหรือข้อความที่เป็นตัวเลข ("42") แล้วแปลงเป็น number — เหมาะกับ query/params/form */
  Numeric: (o: NumOpts = {}) => new Schema<number>('numeric', o),
  Boolean: (o: { error?: string } = {}) => new Schema<boolean>('boolean', o),
  Literal: <const L extends Literalish>(value: L, o: { error?: string } = {}) => new Schema<L>('literal', { ...o, value }),
  Union: <const S extends Schema[]>(options: S, o: { error?: string } = {}) => new Schema<Static<S[number]>>('union', o, options),
  Array: <S extends Schema>(item: S, o: { minItems?: number; maxItems?: number; error?: string } = {}) =>
    new Schema<Static<S>[]>('array', o, item),
  Object: <P extends Record<string, Schema>, const O extends { additionalProperties?: boolean; error?: string } = {}>(props: P, o?: O) =>
    new Schema<ObjectOf<P> & (O extends { additionalProperties: true } ? Record<string, unknown> : {})>('object', o ?? {}, props),
  Optional: <S extends Schema>(schema: S) => new OptionalSchema(schema),
  /** ไฟล์จาก multipart — maxSize เป็น byte หรือข้อความ '5m' / '500k' */
  File: (o: { maxSize?: number | string; type?: string | string[]; error?: string } = {}) => new Schema<File>('file', o),
  Any: () => new Schema<any>('any'),
  Null: () => new Schema<null>('null'),
}

// ───────────── ตรวจข้อมูล ─────────────

const FORMATS: Record<string, RegExp> = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  uri: /^[a-z][a-z0-9+.-]*:\/\/\S+$/i,
  'date-time': /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/,
}

/** '5m' → 5 * 1024 * 1024 · '500k' · 1234 */
export function parseSize(v: number | string): number {
  if (typeof v === 'number') return v
  const m = /^(\d+(?:\.\d+)?)\s*([kmg]?)b?$/i.exec(v.trim())
  if (!m) throw new Error(`ขนาดไม่ถูกต้อง: ${v}`)
  return Math.floor(Number(m[1]) * ({ '': 1, k: 1024, m: 1024 ** 2, g: 1024 ** 3 } as Record<string, number>)[m[2]!.toLowerCase()]!)
}

const FAIL = Symbol('fail')

function fail(s: Schema, path: string, message: string, issues: Issue[]): typeof FAIL {
  issues.push({ path, message: s.error ?? message, schema: s })
  return FAIL
}

function run(s: Schema, v: unknown, path: string, issues: Issue[]): unknown {
  const o = s.opts
  switch (s.kind) {
    case 'optional':
      return v === undefined ? undefined : run(s.inner, v, path, issues)

    case 'any':
      return v

    case 'null':
      return v === null ? v : fail(s, path, 'Expected null', issues)

    case 'string': {
      if (typeof v !== 'string') return fail(s, path, 'Expected string', issues)
      if (o.minLength != null && v.length < o.minLength) return fail(s, path, `Expected string length >= ${o.minLength}`, issues)
      if (o.maxLength != null && v.length > o.maxLength) return fail(s, path, `Expected string length <= ${o.maxLength}`, issues)
      if (o.pattern && !new RegExp(o.pattern).test(v)) return fail(s, path, `Expected string to match ${o.pattern}`, issues)
      if (o.format && FORMATS[o.format] && !FORMATS[o.format]!.test(v)) return fail(s, path, `Expected string to be a valid ${o.format}`, issues)
      return v
    }

    case 'number':
    case 'integer':
    case 'numeric': {
      let n: unknown = v
      if (s.kind === 'numeric' && typeof v === 'string' && v.trim() !== '') n = Number(v)
      if (typeof n !== 'number' || !Number.isFinite(n)) return fail(s, path, 'Expected number', issues)
      if (s.kind === 'integer' && !Number.isInteger(n)) return fail(s, path, 'Expected integer', issues)
      if (o.minimum != null && n < o.minimum) return fail(s, path, `Expected number >= ${o.minimum}`, issues)
      if (o.maximum != null && n > o.maximum) return fail(s, path, `Expected number <= ${o.maximum}`, issues)
      return n
    }

    case 'boolean':
      if (typeof v === 'boolean') return v
      if (v === 'true') return true
      if (v === 'false') return false
      return fail(s, path, 'Expected boolean', issues)

    case 'literal':
      return v === o.value ? v : fail(s, path, `Expected ${JSON.stringify(o.value)}`, issues)

    case 'union': {
      for (const option of s.inner as Schema[]) {
        const tmp: Issue[] = []
        const out = run(option, v, path, tmp)
        if (out !== FAIL) return out
      }
      return fail(s, path, 'Expected one of the allowed values', issues)
    }

    case 'array': {
      if (!Array.isArray(v)) return fail(s, path, 'Expected array', issues)
      if (o.minItems != null && v.length < o.minItems) return fail(s, path, `Expected at least ${o.minItems} items`, issues)
      if (o.maxItems != null && v.length > o.maxItems) return fail(s, path, `Expected at most ${o.maxItems} items`, issues)
      const out: unknown[] = []
      for (let i = 0; i < v.length; i++) out.push(run(s.inner, v[i], `${path}/${i}`, issues))
      return out
    }

    case 'file': {
      if (typeof Blob === 'undefined' || !(v instanceof Blob)) return fail(s, path, 'Expected file', issues)
      if (o.maxSize != null && v.size > parseSize(o.maxSize)) return fail(s, path, `File too large (max ${o.maxSize})`, issues)
      if (o.type) {
        const types = ([] as string[]).concat(o.type)
        if (!types.some((x) => (x.endsWith('/*') ? v.type.startsWith(x.slice(0, -1)) : v.type === x))) return fail(s, path, `File type must be ${types.join(', ')}`, issues)
      }
      return v
    }

    case 'object': {
      if (typeof v !== 'object' || v === null || Array.isArray(v)) return fail(s, path, 'Expected object', issues)
      const props = s.inner as Record<string, Schema>
      const src = v as Record<string, unknown>
      const out: Record<string, unknown> = o.additionalProperties ? { ...src } : {}
      for (const key in props) {
        const r = run(props[key]!, src[key], `${path}/${key}`, issues)
        if (r !== undefined && r !== FAIL) out[key] = r
      }
      return out
    }
  }
  return v
}

export type ValidationResult<T> = { ok: true; value: T } | { ok: false; issues: Issue[] }

export function validate<S extends Schema>(schema: S, value: unknown): ValidationResult<Static<S>> {
  const issues: Issue[] = []
  const out = run(schema, value, '', issues)
  return issues.length ? { ok: false, issues } : { ok: true, value: out as Static<S> }
}

// ───────────── JSON Schema (ใช้กับ OpenAPI) ─────────────

export function toJsonSchema(s: Schema): Record<string, unknown> {
  const o = s.opts
  switch (s.kind) {
    case 'optional':
      return toJsonSchema(s.inner)
    case 'string':
      return { type: 'string', ...pick(o, ['minLength', 'maxLength', 'pattern', 'format']) }
    case 'number':
      return { type: 'number', ...pick(o, ['minimum', 'maximum']) }
    case 'numeric':
      return { type: 'number', ...pick(o, ['minimum', 'maximum']) }
    case 'integer':
      return { type: 'integer', ...pick(o, ['minimum', 'maximum']) }
    case 'boolean':
      return { type: 'boolean' }
    case 'null':
      return { type: 'null' }
    case 'literal':
      return { const: o.value }
    case 'union':
      return { anyOf: (s.inner as Schema[]).map(toJsonSchema) }
    case 'array':
      return { type: 'array', items: toJsonSchema(s.inner), ...pick(o, ['minItems', 'maxItems']) }
    case 'file':
      return { type: 'string', format: 'binary' }
    case 'object': {
      const props = s.inner as Record<string, Schema>
      const required = Object.keys(props).filter((k) => props[k]!.kind !== 'optional')
      return {
        type: 'object',
        properties: Object.fromEntries(Object.entries(props).map(([k, v]) => [k, toJsonSchema(v)])),
        ...(required.length ? { required } : {}),
      }
    }
    default:
      return {}
  }
}

const pick = (o: Opts, keys: string[]) => Object.fromEntries(keys.filter((k) => o[k] != null).map((k) => [k, o[k]]))
