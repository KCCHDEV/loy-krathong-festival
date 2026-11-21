/**
 * JWT (HS256) เขียนเอง — สำหรับ API ที่ client ถือ token (mobile, SPA, service-to-service)
 *
 *   const token = signJwt({ sub: 'u1', role: 'admin' }, SECRET, { expiresIn: 3600 })
 *   const claims = verifyJwt(token, SECRET)         // throw JwtError ถ้าผิด/หมดอายุ
 *
 *   // กัน route ทั้งโฟลเดอร์: src/api/private/_guard.ts
 *   export default jwtGuard(SECRET)                  // ctx.user = claims · ไม่มี/ผิด token = 401
 *
 * รองรับเฉพาะ HS256 และปฏิเสธ alg อื่น (รวม "none") ตั้งใจ เพื่อกันช่องโหว่คลาสสิกของ JWT
 */
import { timingSafeEqual } from 'node:crypto'
import { status } from './errors'
import type { Guard } from './route'

export class JwtError extends Error {
  constructor(
    readonly reason: 'malformed' | 'alg' | 'signature' | 'expired' | 'not-yet' | 'issuer' | 'audience',
    message?: string,
  ) {
    super(message ?? reason)
  }
}

export type Claims = { sub?: string; iss?: string; aud?: string; exp?: number; nbf?: number; iat?: number; [key: string]: unknown }

const b64url = (data: string | Uint8Array) => Buffer.from(data).toString('base64url')
const sign = (input: string, secret: string) => new Bun.CryptoHasher('sha256', secret).update(input).digest('base64url')

export function signJwt(claims: Claims, secret: string, opts: { expiresIn?: number; notBefore?: number } = {}): string {
  const now = Math.floor(Date.now() / 1000)
  const body: Claims = { iat: now, ...claims }
  if (opts.expiresIn) body.exp = now + opts.expiresIn
  if (opts.notBefore) body.nbf = now + opts.notBefore
  const input = `${b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))}.${b64url(JSON.stringify(body))}`
  return `${input}.${sign(input, secret)}`
}

export function verifyJwt(token: string, secret: string, opts: { issuer?: string; audience?: string; leewaySeconds?: number; now?: number } = {}): Claims {
  const parts = token.split('.')
  if (parts.length !== 3) throw new JwtError('malformed')
  const [h, p, sig] = parts as [string, string, string]

  let header: { alg?: string }
  let claims: Claims
  try {
    header = JSON.parse(Buffer.from(h, 'base64url').toString())
    claims = JSON.parse(Buffer.from(p, 'base64url').toString())
  } catch {
    throw new JwtError('malformed')
  }
  if (header.alg !== 'HS256') throw new JwtError('alg', `ไม่รองรับ alg ${String(header.alg)}`)

  const expected = Buffer.from(sign(`${h}.${p}`, secret))
  const given = Buffer.from(sig)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) throw new JwtError('signature')

  const now = opts.now ?? Math.floor(Date.now() / 1000)
  const leeway = opts.leewaySeconds ?? 0
  if (claims.exp !== undefined && now > claims.exp + leeway) throw new JwtError('expired')
  if (claims.nbf !== undefined && now + leeway < claims.nbf) throw new JwtError('not-yet')
  if (opts.issuer && claims.iss !== opts.issuer) throw new JwtError('issuer')
  if (opts.audience && claims.aud !== opts.audience) throw new JwtError('audience')
  return claims
}

/** ดึง token จาก Authorization: Bearer … */
export const bearerToken = (request: Request): string | null => {
  const h = request.headers.get('authorization')
  return h && h.length > 7 && h.slice(0, 7).toLowerCase() === 'bearer ' ? h.slice(7).trim() : null
}

/** _guard.ts สำเร็จรูป: ตรวจ Bearer token แล้วใส่ claims ที่ ctx.user */
export const jwtGuard = (secret: string, opts: Parameters<typeof verifyJwt>[2] = {}): Guard => ({
  derive: ({ request }) => {
    const token = bearerToken(request)
    if (!token) return { user: null, jwtError: 'missing' }
    try {
      return { user: verifyJwt(token, secret, opts), jwtError: null }
    } catch (err) {
      return { user: null, jwtError: err instanceof JwtError ? err.reason : 'invalid' }
    }
  },
  beforeHandle: ({ user, jwtError }) => {
    if (!user) return status(401, { error: 'ต้องมี Bearer token ที่ถูกต้อง', reason: jwtError })
  },
})
