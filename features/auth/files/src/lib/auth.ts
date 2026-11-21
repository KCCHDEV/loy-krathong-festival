/**
 * ระบบสมาชิก: บัญชี + รหัสผ่าน (argon2id ของ Bun) + session
 *
 *   const acct = await createAccount({ email, name, password })      // คนแรกในระบบได้บทบาท admin
 *   const acct = await authenticate(email, password, ip)              // null = ไม่ถูกต้อง · throw AuthError('locked') = ลองผิดบ่อยเกิน
 *   login(ctx, acct) / logout(ctx) / currentUser(ctx)
 *
 * ความปลอดภัยที่ทำไว้: hash ช้าโดยตั้งใจ · ไม่บอกว่าอีเมลมีอยู่ในระบบหรือไม่ (เวลาตอบใกล้เคียงกัน) ·
 * ลองผิด 5 ครั้งใน 1 นาทีต่อ (อีเมล+IP) = ล็อกชั่วคราว · เปลี่ยน session id หลัง login (กัน session fixation) · ปฏิเสธ redirect ไปเว็บอื่น
 */
import { db } from './db'
import type { Context } from '@core/server'
import type { Session } from '@core/session'

export const ROLES = ['admin', 'editor', 'user'] as const
export type Role = (typeof ROLES)[number]

export type Account = { id: number; email: string; name: string; role: Role; created_at: number; last_login_at: number | null; disabled: 0 | 1 }
type Row = Account & { password_hash: string }

export class AuthError extends Error {
  constructor(readonly code: 'invalid-email' | 'weak-password' | 'invalid-name' | 'email-taken' | 'locked' | 'wrong-password' | 'not-found') {
    super(code)
  }
}

db.exec(`
  CREATE TABLE IF NOT EXISTS accounts (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    email         TEXT NOT NULL UNIQUE COLLATE NOCASE,
    name          TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    role          TEXT NOT NULL DEFAULT 'user',
    disabled      INTEGER NOT NULL DEFAULT 0,
    created_at    INTEGER NOT NULL,
    last_login_at INTEGER
  );
`)

const q = {
  byEmail: db.query<Row, [string]>('SELECT * FROM accounts WHERE email = ?'),
  byId: db.query<Row, [number]>('SELECT * FROM accounts WHERE id = ?'),
  count: db.query<{ n: number }, []>('SELECT COUNT(*) AS n FROM accounts'),
  insert: db.query<Row, [string, string, string, string, number]>('INSERT INTO accounts (email, name, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?) RETURNING *'),
  touch: db.query('UPDATE accounts SET last_login_at = ? WHERE id = ?'),
  setHash: db.query('UPDATE accounts SET password_hash = ? WHERE id = ?'),
  setRole: db.query('UPDATE accounts SET role = ? WHERE id = ?'),
  setDisabled: db.query('UPDATE accounts SET disabled = ? WHERE id = ?'),
  list: db.query<Account, [number, number]>('SELECT id, email, name, role, disabled, created_at, last_login_at FROM accounts ORDER BY id DESC LIMIT ? OFFSET ?'),
}

const strip = ({ password_hash: _hash, ...account }: Row): Account => account

// OWASP แนะนำ argon2id อย่างน้อย m=19MiB, t=2 — ช้าพอให้เดารหัสผ่านยาก แต่ login ยังไม่หน่วงจนรู้สึก (~30–60 ms)
const HASH = { algorithm: 'argon2id', memoryCost: 19456, timeCost: 2 } as const
export const hashPassword = (password: string) => Bun.password.hash(password, HASH)
export const verifyPassword = (password: string, hash: string) => Bun.password.verify(password, hash)

/** hash หลอก ไว้ verify เมื่อไม่พบอีเมล ให้เวลาตอบใกล้เคียงกับกรณีพบ (กันเดาว่าอีเมลไหนมีบัญชี) */
let dummyHash: Promise<string> | undefined

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateNewAccount(input: { email: string; name: string; password: string }) {
  if (!EMAIL.test(input.email) || input.email.length > 200) throw new AuthError('invalid-email')
  const name = input.name.trim()
  if (name.length < 1 || name.length > 60) throw new AuthError('invalid-name')
  if (input.password.length < 8 || input.password.length > 200) throw new AuthError('weak-password')
  return { email: input.email.trim().toLowerCase(), name }
}

/** สร้างบัญชี · คนแรกในระบบ (ไม่มีใครเลย) ได้เป็น admin เว้นแต่ระบุ role เอง */
export async function createAccount(input: { email: string; name: string; password: string }, opts: { role?: Role } = {}): Promise<Account> {
  const { email, name } = validateNewAccount(input)
  const hash = await hashPassword(input.password)
  const role = opts.role ?? (q.count.get()!.n === 0 ? 'admin' : 'user')
  try {
    return strip(q.insert.get(email, name, hash, role, Date.now())!)
  } catch (err) {
    if (String((err as Error).message).includes('UNIQUE')) throw new AuthError('email-taken')
    throw err
  }
}

// ───── กันเดารหัสผ่าน ─────

const MAX_FAILS = 5
const LOCK_MS = 60_000
const fails = new Map<string, { count: number; until: number }>()

export function lockedFor(key: string, now = Date.now()): number {
  const f = fails.get(key)
  return f && f.count >= MAX_FAILS && f.until > now ? f.until - now : 0
}

function recordFail(key: string, now = Date.now()) {
  const f = fails.get(key)
  if (!f || f.until <= now) fails.set(key, { count: 1, until: now + LOCK_MS })
  else f.count++
  if (fails.size > 10_000) for (const [k, v] of fails) if (v.until <= now) fails.delete(k)
}

export const resetFails = (key?: string) => (key ? fails.delete(key) : fails.clear())

/** ตรวจอีเมล+รหัสผ่าน · คืนบัญชี หรือ null เมื่อไม่ถูกต้อง · throw AuthError('locked') เมื่อลองผิดเกินกำหนด */
export async function authenticate(email: string, password: string, ip = 'unknown'): Promise<Account | null> {
  const key = `${email.trim().toLowerCase()}|${ip}`
  if (lockedFor(key)) throw new AuthError('locked')

  const row = q.byEmail.get(email.trim())
  if (!row || row.disabled) {
    await verifyPassword(password, await (dummyHash ??= hashPassword('dummy-password-for-timing')))
    recordFail(key)
    return null
  }
  if (!(await verifyPassword(password, row.password_hash))) {
    recordFail(key)
    return null
  }
  fails.delete(key)
  q.touch.run(Date.now(), row.id)
  return strip({ ...row, last_login_at: Date.now() })
}

export const findAccount = (id: number): Account | null => {
  const row = q.byId.get(id)
  return row ? strip(row) : null
}
export const findByEmail = (email: string): Account | null => {
  const row = q.byEmail.get(email.trim())
  return row ? strip(row) : null
}
export const listAccounts = (limit = 50, offset = 0): Account[] => q.list.all(limit, offset)
export const countAccounts = () => q.count.get()!.n

export async function changePassword(id: number, current: string, next: string): Promise<void> {
  const row = q.byId.get(id)
  if (!row) throw new AuthError('not-found')
  if (!(await verifyPassword(current, row.password_hash))) throw new AuthError('wrong-password')
  if (next.length < 8 || next.length > 200) throw new AuthError('weak-password')
  q.setHash.run(await hashPassword(next), id)
}

export function setRole(id: number, role: Role) {
  if (!ROLES.includes(role)) throw new Error(`role ไม่ถูกต้อง: ${role}`)
  q.setRole.run(role, id)
}
export const setDisabled = (id: number, disabled: boolean) => void q.setDisabled.run(disabled ? 1 : 0, id)

// ───── session ─────

/** บัญชีที่ login อยู่ (อ่านครั้งเดียวต่อ request) · null = ยังไม่ login / ถูกระงับ */
export function currentUser(ctx: Context): Account | null {
  if ('_authUser' in ctx) return ctx._authUser as Account | null
  const session: Session = ctx.session
  const uid = session.get<number>('uid')
  const user = uid ? findAccount(uid) : null
  return (ctx._authUser = user && !user.disabled ? user : null)
}

export function login(ctx: Context, account: Account) {
  ctx.session.set('uid', account.id)
  ctx.session.regenerate() // id ใหม่หลัง login กัน session fixation
  ctx._authUser = account
}

export function logout(ctx: Context) {
  ctx.session.destroy()
  ctx._authUser = null
}

/** next ต้องเป็น path ในเว็บเรา (ขึ้นต้น / ตัวเดียว) — กัน open redirect ไปเว็บอื่น */
export function safeNext(next: string | undefined | null, fallback = '/account'): string {
  if (!next || !next.startsWith('/') || next.startsWith('//') || next.startsWith('/\\') || /[\r\n]/.test(next)) return fallback
  return next
}

/** ข้อความ error ที่แสดงผู้ใช้ */
export const authMessages: Record<string, string> = {
  'invalid-email': 'รูปแบบอีเมลไม่ถูกต้อง',
  'invalid-name': 'ชื่อต้องยาว 1–60 ตัวอักษร',
  'weak-password': 'รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร',
  'email-taken': 'อีเมลนี้มีบัญชีอยู่แล้ว',
  'wrong-password': 'รหัสผ่านปัจจุบันไม่ถูกต้อง',
  mismatch: 'รหัสผ่านทั้งสองช่องไม่ตรงกัน',
  invalid: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
  locked: 'ลองผิดหลายครั้งเกินไป รอ 1 นาทีแล้วลองใหม่',
}
