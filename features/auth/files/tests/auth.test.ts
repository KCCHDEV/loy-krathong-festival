// ระบบสมาชิก: สมัคร / เข้าสู่ระบบ / session / guard / JWT / กันเดารหัสผ่าน
import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'
import { verifyJwt } from '../core/jwt'
import { AuthError, createAccount, findByEmail, lockedFor, resetFails, safeNext, setRole } from '../src/lib/auth'

const { app } = await createApp()
const request = (path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))
const json = (path: string, body: unknown, headers: Record<string, string> = {}) =>
  request(path, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) })
const form = (path: string, fields: Record<string, string>, headers: Record<string, string> = {}) =>
  request(path, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', ...headers }, body: new URLSearchParams(fields) })
const cookieOf = (res: Response) => res.headers.getSetCookie().map((c) => c.split(';')[0]!).filter((c) => !c.endsWith('=')).join('; ')

let n = 0
const email = () => `user${Date.now()}-${++n}@example.com`
const PASSWORD = 'correct-horse-battery'

describe('บัญชี', () => {
  it('สร้างบัญชีได้ · อีเมลไม่สนตัวพิมพ์ · ซ้ำไม่ได้ · รหัสผ่านถูก hash', async () => {
    const e = email()
    const a = await createAccount({ email: e.toUpperCase(), name: ' Ann ', password: PASSWORD })
    expect(a).toMatchObject({ email: e.toLowerCase(), name: 'Ann' })
    expect(JSON.stringify(a)).not.toContain('password')
    await expect(createAccount({ email: e, name: 'Dup', password: PASSWORD })).rejects.toMatchObject({ code: 'email-taken' })
    const row = findByEmail(e)!
    expect(row.id).toBe(a.id)
  })

  it('ตรวจอีเมล/ชื่อ/รหัสผ่านก่อนสร้าง', async () => {
    const bad = (input: Parameters<typeof createAccount>[0]) => createAccount(input).catch((err: AuthError) => err.code)
    expect(await bad({ email: 'nope', name: 'A', password: PASSWORD })).toBe('invalid-email')
    expect(await bad({ email: email(), name: '   ', password: PASSWORD })).toBe('invalid-name')
    expect(await bad({ email: email(), name: 'A', password: 'short' })).toBe('weak-password')
  })

  it('safeNext ปฏิเสธ redirect ไปเว็บอื่น', () => {
    expect(safeNext('/admin/cms')).toBe('/admin/cms')
    for (const evil of ['//evil.example', 'https://evil.example', '/\\evil.example', 'javascript:alert(1)', '/ok\r\nSet-Cookie: x=1']) expect(safeNext(evil)).toBe('/account')
    expect(safeNext(undefined, '/home')).toBe('/home')
  })
})

describe('API', () => {
  it('สมัคร → ได้ cookie → /me เห็นผู้ใช้ → logout → /me ว่าง', async () => {
    const e = email()
    const reg = await json('/api/auth/register', { email: e, name: 'Bo', password: PASSWORD })
    expect(reg.status).toBe(201)
    const cookie = cookieOf(reg)
    expect(cookie).toContain('sid=')
    expect((await (await request('/api/auth/me', { headers: { cookie } })).json()).user.email).toBe(e.toLowerCase())
    await json('/api/auth/logout', {}, { cookie })
    expect((await (await request('/api/auth/me', { headers: { cookie } })).json()).user).toBeNull()
  })

  it('สมัครซ้ำ = 409 · ข้อมูลผิด = 422', async () => {
    const e = email()
    await json('/api/auth/register', { email: e, name: 'Cy', password: PASSWORD })
    expect((await json('/api/auth/register', { email: e, name: 'Cy', password: PASSWORD })).status).toBe(409)
    expect((await json('/api/auth/register', { email: 'bad', name: 'Cy', password: PASSWORD })).status).toBe(422)
    expect((await json('/api/auth/register', { email: email(), name: 'Cy', password: 'short' })).status).toBe(422)
  })

  it('login ถูก = ได้ session · ผิด = 401 ข้อความเดียวกันไม่ว่าอีเมลมีหรือไม่', async () => {
    const e = email()
    await createAccount({ email: e, name: 'Di', password: PASSWORD })
    const ok = await json('/api/auth/login', { email: e, password: PASSWORD })
    expect(ok.status).toBe(200)
    expect(cookieOf(ok)).toContain('sid=')
    const wrong = await json('/api/auth/login', { email: e, password: 'wrong-password' })
    const missing = await json('/api/auth/login', { email: email(), password: 'wrong-password' })
    expect(wrong.status).toBe(401)
    expect(await wrong.json()).toEqual(await missing.json())
  })

  it('ลองผิด 5 ครั้งถูกล็อก (429) แม้รหัสที่ถูกก็ยังเข้าไม่ได้ช่วงนั้น', async () => {
    const e = email()
    await createAccount({ email: e, name: 'Ed', password: PASSWORD })
    for (let i = 0; i < 5; i++) expect((await json('/api/auth/login', { email: e, password: 'wrong-wrong' })).status).toBe(401)
    expect((await json('/api/auth/login', { email: e, password: PASSWORD })).status).toBe(429)
    expect(lockedFor(`${e}|unknown`)).toBeGreaterThan(0)
    resetFails()
    expect((await json('/api/auth/login', { email: e, password: PASSWORD })).status).toBe(200)
  })

  it('JWT: ขอ token แล้วใช้ Bearer เรียก /me ได้ · token ปลอม/หมดอายุไม่ผ่าน', async () => {
    const e = email()
    await createAccount({ email: e, name: 'Fa', password: PASSWORD })
    const res = await json('/api/auth/token', { email: e, password: PASSWORD })
    const { token, expiresIn } = await res.json()
    expect(expiresIn).toBe(3600)
    expect(verifyJwt(token, process.env.AUTH_JWT_SECRET ?? process.env.COOKIE_SECRET ?? 'dev-cookie-secret')).toMatchObject({ role: expect.any(String) })
    expect((await (await request('/api/auth/me', { headers: { authorization: `Bearer ${token}` } })).json()).user.email).toBe(e.toLowerCase())
    expect((await (await request('/api/auth/me', { headers: { authorization: `Bearer ${token}x` } })).json()).user).toBeNull()
    expect((await json('/api/auth/token', { email: e, password: 'nope-nope' })).status).toBe(401)
  })
})

describe('หน้าเว็บ', () => {
  it('/login และ /register แสดงฟอร์ม · ?error= แสดงข้อความ', async () => {
    const login = await (await request('/login?error=invalid')).text()
    expect(login).toContain('<form method="post" action="/login"')
    expect(login).toContain('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
    expect(await (await request('/register')).text()).toContain('ยืนยันรหัสผ่าน')
  })

  it('สมัครผ่านฟอร์ม → redirect /account พร้อม cookie → เห็นหน้าบัญชี', async () => {
    const e = email()
    const res = await form('/register', { name: 'Gi', email: e, password: PASSWORD, confirm: PASSWORD })
    expect(res.status).toBe(303)
    expect(res.headers.get('location')).toBe('/account')
    const page = await request('/account', { headers: { cookie: cookieOf(res) } })
    expect(page.status).toBe(200)
    expect(await page.text()).toContain(e.toLowerCase())
  })

  it('รหัสผ่านไม่ตรงกัน/ซ้ำ ถูกส่งกลับพร้อมข้อความ', async () => {
    const e = email()
    expect((await form('/register', { name: 'Hu', email: e, password: PASSWORD, confirm: 'different-one' })).headers.get('location')).toContain('error=mismatch')
    await createAccount({ email: e, name: 'Hu', password: PASSWORD })
    expect((await form('/register', { name: 'Hu', email: e, password: PASSWORD, confirm: PASSWORD })).headers.get('location')).toContain('error=email-taken')
  })

  it('/account ต้อง login: ไม่ login → /login?next= · login แล้วกลับมาที่เดิม', async () => {
    const guarded = await request('/account')
    expect(guarded.status).toBe(302)
    expect(guarded.headers.get('location')).toBe('/login?next=%2Faccount')

    const e = email()
    await createAccount({ email: e, name: 'Ivy', password: PASSWORD })
    const ok = await form('/login', { email: e, password: PASSWORD, next: '/account' })
    expect(ok.headers.get('location')).toBe('/account')
    expect(cookieOf(ok)).toContain('sid=')
  })

  it('login ที่ next ชี้ไปเว็บอื่น ถูกเปลี่ยนเป็น /account', async () => {
    const e = email()
    await createAccount({ email: e, name: 'Jo', password: PASSWORD })
    const res = await form('/login', { email: e, password: PASSWORD, next: 'https://evil.example/steal' })
    expect(res.headers.get('location')).toBe('/account')
  })

  it('login ผิด → กลับ /login?error=invalid', async () => {
    const res = await form('/login', { email: email(), password: 'whatever-pass' })
    expect(res.headers.get('location')).toContain('/login?error=invalid')
  })

  it('เปลี่ยนรหัสผ่าน: รหัสเดิมผิดถูกปฏิเสธ · สำเร็จแล้วรหัสใหม่ใช้ได้ รหัสเก่าใช้ไม่ได้', async () => {
    const e = email()
    await createAccount({ email: e, name: 'Kim', password: PASSWORD })
    const cookie = cookieOf(await form('/login', { email: e, password: PASSWORD }))
    const bad = await form('/account/password', { current: 'not-it-at-all', next: 'new-password-123' }, { cookie })
    expect(bad.headers.get('location')).toContain('error=wrong-password')
    const good = await form('/account/password', { current: PASSWORD, next: 'new-password-123' }, { cookie })
    expect(good.headers.get('location')).toBe('/account?saved=1')
    expect((await json('/api/auth/login', { email: e, password: 'new-password-123' })).status).toBe(200)
    expect((await json('/api/auth/login', { email: e, password: PASSWORD })).status).toBe(401)
  })

  it('logout ต้องเป็น POST และล้าง session', async () => {
    const e = email()
    await createAccount({ email: e, name: 'Lee', password: PASSWORD })
    const cookie = cookieOf(await form('/login', { email: e, password: PASSWORD }))
    expect((await request('/logout', { headers: { cookie } })).status).toBe(404) // GET ไม่มี route
    const out = await form('/logout', {}, { cookie })
    expect(out.headers.get('location')).toBe('/login')
    expect((await request('/account', { headers: { cookie } })).status).toBe(302)
  })

  it('บัญชีที่ถูกระงับเข้าสู่ระบบไม่ได้และ session เดิมใช้ไม่ได้', async () => {
    const e = email()
    const a = await createAccount({ email: e, name: 'Moe', password: PASSWORD })
    const cookie = cookieOf(await form('/login', { email: e, password: PASSWORD }))
    const { setDisabled } = await import('../src/lib/auth')
    setDisabled(a.id, true)
    expect((await request('/account', { headers: { cookie } })).status).toBe(302)
    expect((await json('/api/auth/login', { email: e, password: PASSWORD })).status).toBe(401)
    setDisabled(a.id, false)
  })

  it('บทบาท: setRole เปลี่ยนสิทธิ์ได้', async () => {
    const a = await createAccount({ email: email(), name: 'Nat', password: PASSWORD }, { role: 'user' })
    setRole(a.id, 'editor')
    expect(findByEmail(a.email)!.role).toBe('editor')
    expect(() => setRole(a.id, 'root' as never)).toThrow()
  })
})
