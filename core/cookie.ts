/**
 * Cookie ของเราเอง: อ่าน/ตั้ง/ลบ + เซ็นลายเซ็น HMAC-SHA256 (กันแก้ค่าจากฝั่ง browser)
 *
 *   ctx.cookie.session.value                         // ค่า (ถ้าเป็น cookie ที่เซ็น = ผ่านการตรวจลายเซ็นแล้ว)
 *   ctx.cookie.session.set({ value, httpOnly: true, maxAge: 3600 })
 *   ctx.cookie.session.remove()
 *
 * cookie ที่เซ็นเก็บเป็น  <ค่า>.<ลายเซ็น>  — ลายเซ็นไม่ตรงจะ throw InvalidCookieSignature ตอนอ่าน (app.ts จัดการให้)
 */
import { timingSafeEqual } from 'node:crypto'
import { InvalidCookieSignature } from './errors'

export type CookieOptions = {
  value?: string
  domain?: string
  path?: string
  maxAge?: number
  expires?: Date
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'lax' | 'strict' | 'none' | boolean
}

const sign = (value: string, secret: string) => new Bun.CryptoHasher('sha256', secret).update(value).digest('base64url')

/** ตรวจลายเซ็น แล้วคืนค่าเดิม — ไม่ตรงคืน false */
export function unsign(signed: string, secret: string): string | false {
  const dot = signed.lastIndexOf('.')
  if (dot < 1) return false
  const value = signed.slice(0, dot)
  const a = Buffer.from(signed.slice(dot + 1))
  const b = Buffer.from(sign(value, secret))
  return a.length === b.length && timingSafeEqual(a, b) ? value : false
}

function parseCookieHeader(header: string | null): Record<string, string> {
  const out: Record<string, string> = Object.create(null)
  if (!header) return out
  for (const part of header.split(';')) {
    const eq = part.indexOf('=')
    if (eq < 1) continue
    const name = part.slice(0, eq).trim()
    if (name in out) continue
    let value = part.slice(eq + 1).trim()
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
    try {
      out[name] = decodeURIComponent(value)
    } catch {
      out[name] = value
    }
  }
  return out
}

export function serializeCookie(name: string, value: string, o: CookieOptions = {}): string {
  let s = `${name}=${encodeURIComponent(value)}`
  if (o.maxAge != null) s += `; Max-Age=${Math.floor(o.maxAge)}`
  if (o.domain) s += `; Domain=${o.domain}`
  s += `; Path=${o.path ?? '/'}`
  if (o.expires) s += `; Expires=${o.expires.toUTCString()}`
  if (o.httpOnly) s += '; HttpOnly'
  if (o.secure) s += '; Secure'
  if (o.sameSite) s += `; SameSite=${o.sameSite === true ? 'Strict' : o.sameSite[0]!.toUpperCase() + o.sameSite.slice(1)}`
  return s
}

export class Cookie {
  constructor(
    private jar: CookieJar,
    readonly name: string,
  ) {}

  get value(): string | undefined {
    return this.jar.read(this.name)
  }

  set value(v: string | undefined) {
    if (v === undefined) this.remove()
    else this.set({ value: v })
  }

  set(o: CookieOptions) {
    this.jar.write(this.name, o)
    return this
  }

  remove() {
    this.jar.erase(this.name)
  }
}

export class CookieJar {
  private raw: Record<string, string>
  private changed = new Map<string, string>() // name → ค่าบรรทัด Set-Cookie
  private overrides = new Map<string, string | undefined>() // ค่าที่ตั้งใน request นี้ (อ่านต่อได้)
  private cookies = new Map<string, Cookie>()

  constructor(
    header: string | null,
    private secret: string,
    private signed: Set<string>,
  ) {
    this.raw = parseCookieHeader(header)
  }

  /** ตรวจลายเซ็นของ cookie ที่เซ็นทั้งหมดที่ browser ส่งมา — ไม่ตรงอันไหน throw ทันที */
  verifyAll() {
    for (const name of this.signed) {
      const v = this.raw[name]
      if (v !== undefined && unsign(v, this.secret) === false) throw new InvalidCookieSignature(name)
    }
  }

  read(name: string): string | undefined {
    if (this.overrides.has(name)) return this.overrides.get(name)
    const v = this.raw[name]
    if (v === undefined) return undefined
    if (!this.signed.has(name)) return v
    const plain = unsign(v, this.secret)
    if (plain === false) throw new InvalidCookieSignature(name)
    return plain
  }

  write(name: string, o: CookieOptions) {
    const value = o.value ?? this.read(name) ?? ''
    this.overrides.set(name, value)
    this.changed.set(name, serializeCookie(name, this.signed.has(name) ? `${value}.${sign(value, this.secret)}` : value, o))
  }

  erase(name: string) {
    this.overrides.set(name, undefined)
    this.changed.set(name, serializeCookie(name, '', { maxAge: 0 }))
  }

  /** บรรทัด Set-Cookie ที่ต้องส่งกลับ (ว่าง = ไม่ได้แตะ cookie เลย) */
  get headers(): string[] {
    return [...this.changed.values()]
  }

  get touched() {
    return this.changed.size > 0
  }

  /** ctx.cookie.<ชื่อ> — ได้ object เสมอแม้ยังไม่มี cookie นั้น */
  proxy(): Record<string, Cookie> {
    return new Proxy({} as Record<string, Cookie>, {
      get: (_, name) => {
        if (typeof name !== 'string') return undefined
        let c = this.cookies.get(name)
        if (!c) this.cookies.set(name, (c = new Cookie(this, name)))
        return c
      },
    })
  }
}
