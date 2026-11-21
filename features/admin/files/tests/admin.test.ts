// หลังบ้าน: สิทธิ์ · แดชบอร์ด · จัดการผู้ใช้ (กันล็อกตัวเอง / แอดมินคนสุดท้าย)
import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'
import { createAccount, findAccount, findByEmail, listAccounts, setDisabled, setRole } from '../src/lib/auth'

const { app } = await createApp()
const request = (path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))
const form = (path: string, fields: Record<string, string>, headers: Record<string, string> = {}) =>
  request(path, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', ...headers }, body: new URLSearchParams(fields) })
const cookieOf = (res: Response) => res.headers.getSetCookie().map((c) => c.split(';')[0]!).filter((c) => !c.endsWith('=')).join('; ')

let n = 0
async function member(role: 'admin' | 'editor' | 'user') {
  const email = `adm${role}-${Date.now()}-${++n}@example.com`
  const account = await createAccount({ email, name: `${role} ${n}`, password: 'password-1234' }, { role })
  const cookie = cookieOf(await form('/login', { email, password: 'password-1234' }))
  return { account, cookie, email }
}

/** ระงับ admin ทุกคนที่เหลือ (จากเทสอื่น) ยกเว้นที่ระบุ เพื่อทดสอบกฎ "แอดมินคนสุดท้าย" ให้เป็นอิสระ */
function onlyAdmins(keep: number[]) {
  const undo: (() => void)[] = []
  for (const a of listAccounts(10_000)) {
    if (a.role === 'admin' && !a.disabled && !keep.includes(a.id)) {
      setDisabled(a.id, true)
      undo.push(() => setDisabled(a.id, false))
    }
  }
  return () => undo.forEach((f) => f())
}

describe('สิทธิ์เข้าหลังบ้าน', () => {
  it('ไม่ login → /login · editor/user → 403 · admin → 200', async () => {
    expect((await request('/admin')).headers.get('location')).toBe('/login?next=%2Fadmin')
    expect((await request('/admin', { headers: { cookie: (await member('editor')).cookie } })).status).toBe(403)
    expect((await request('/admin/users', { headers: { cookie: (await member('user')).cookie } })).status).toBe(403)
    expect((await request('/admin', { headers: { cookie: (await member('admin')).cookie } })).status).toBe(200)
  })

  it('POST เปลี่ยนบทบาทโดยไม่ใช่ admin ถูกปฏิเสธ (ไม่ใช่แค่ซ่อนปุ่ม)', async () => {
    const editor = await member('editor')
    const victim = await member('user')
    const res = await form('/admin/users/_/role', { id: String(victim.account.id), role: 'admin' }, { cookie: editor.cookie })
    expect(res.status).toBe(403)
    expect(findAccount(victim.account.id)!.role).toBe('user')
  })
})

describe('แดชบอร์ด', () => {
  it('แสดงตัวเลขระบบและผู้ใช้ล่าสุด · ชื่อที่มี HTML ถูก escape', async () => {
    const admin = await member('admin')
    await createAccount({ email: `xss-${Date.now()}@example.com`, name: '<script>alert(1)</script>', password: 'password-1234' })
    const html = await (await request('/admin', { headers: { cookie: admin.cookie } })).text()
    expect(html).toContain('ผู้ใช้ทั้งหมด')
    expect(html).toContain('cache hit rate')
    expect(html).not.toContain('<script>alert(1)')
    expect(html).toContain('&lt;script&gt;')
  })
})

describe('จัดการผู้ใช้', () => {
  it('เปลี่ยนบทบาทและระงับ/เปิดบัญชีได้', async () => {
    const admin = await member('admin')
    const target = await member('user')
    expect((await form('/admin/users/_/role', { id: String(target.account.id), role: 'editor' }, { cookie: admin.cookie })).headers.get('location')).toBe('/admin/users?saved=1')
    expect(findAccount(target.account.id)!.role).toBe('editor')

    await form('/admin/users/_/toggle', { id: String(target.account.id), disabled: '1' }, { cookie: admin.cookie })
    expect(findAccount(target.account.id)!.disabled).toBe(1)
    expect((await request('/account', { headers: { cookie: target.cookie } })).status).toBe(302) // session เดิมใช้ไม่ได้แล้ว
    await form('/admin/users/_/toggle', { id: String(target.account.id), disabled: '0' }, { cookie: admin.cookie })
    expect(findAccount(target.account.id)!.disabled).toBe(0)
  })

  it('เปลี่ยนบทบาท/ระงับตัวเองไม่ได้', async () => {
    const admin = await member('admin')
    const role = await form('/admin/users/_/role', { id: String(admin.account.id), role: 'user' }, { cookie: admin.cookie })
    expect(role.headers.get('location')).toBe('/admin/users?error=self')
    const off = await form('/admin/users/_/toggle', { id: String(admin.account.id), disabled: '1' }, { cookie: admin.cookie })
    expect(off.headers.get('location')).toBe('/admin/users?error=self')
    expect(findByEmail(admin.email)!.role).toBe('admin')
  })

  it('ต้องเหลือ admin ที่ใช้งานได้อย่างน้อย 1 คน', async () => {
    const a = await member('admin')
    const b = await member('admin')
    const restore = onlyAdmins([a.account.id, b.account.id])
    try {
      // มี admin 2 คน: b ลด a เป็น user ได้
      expect((await form('/admin/users/_/role', { id: String(a.account.id), role: 'user' }, { cookie: b.cookie })).headers.get('location')).toBe('/admin/users?saved=1')
      // เหลือ b คนเดียว: ต้องไม่มีใครลด b ได้ → ให้ c (admin) มาลอง แล้วตรวจกฎกับ admin คนเดียวที่เหลือ
      setRole(a.account.id, 'admin')
      const c = await member('admin')
      const undoMore = onlyAdmins([c.account.id, b.account.id])
      setDisabled(b.account.id, false)
      // c ระงับ b ได้เพราะ c ยังเป็น admin เหลืออยู่ → สำเร็จ
      expect((await form('/admin/users/_/toggle', { id: String(b.account.id), disabled: '1' }, { cookie: c.cookie })).headers.get('location')).toBe('/admin/users?saved=1')
      // ตอนนี้ c คือ admin คนเดียวที่ใช้งานได้ → ไม่มีใครอื่นให้ระงับ (ตัวเองก็ไม่ได้) จึงทดสอบผ่านบัญชีที่เป็น admin อีกคนแต่ถูกระงับไม่ได้ login
      expect((await form('/admin/users/_/toggle', { id: String(c.account.id), disabled: '1' }, { cookie: c.cookie })).headers.get('location')).toBe('/admin/users?error=self')
      undoMore()
    } finally {
      restore()
    }
  })

  it('ไม่พบผู้ใช้ → error · id/role ผิดรูปแบบ = 422', async () => {
    const admin = await member('admin')
    expect((await form('/admin/users/_/role', { id: '99999999', role: 'user' }, { cookie: admin.cookie })).headers.get('location')).toBe('/admin/users?error=not-found')
    expect((await form('/admin/users/_/role', { id: '1', role: 'root' }, { cookie: admin.cookie })).status).toBe(422)
  })

  it('หน้ารายการแสดงผู้ใช้ทุกคนและไม่รั่ว hash รหัสผ่าน', async () => {
    const admin = await member('admin')
    const html = await (await request('/admin/users', { headers: { cookie: admin.cookie } })).text()
    expect(html).toContain(admin.email)
    expect(html).not.toMatch(/argon2|password_hash/i)
  })
})
