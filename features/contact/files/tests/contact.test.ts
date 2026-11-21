// ฟอร์มติดต่อ: ตรวจข้อมูล, กันสแปม (honeypot / เวลา / จำกัดต่อ IP), หลังบ้าน, งานแจ้งเตือน
import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'
import { jobs } from '../core/jobs'
import { createAccount } from '../src/lib/auth'
import { countMessages, formToken, getMessage, listMessages, resetLimiter, submitMessage, tokenAgeMs, type Submission } from '../src/lib/contact'

const { app } = await createApp()
const request = (path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))
const form = (path: string, fields: Record<string, string>, headers: Record<string, string> = {}) =>
  request(path, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', ...headers }, body: new URLSearchParams(fields) })
const cookieOf = (res: Response) => res.headers.getSetCookie().map((c) => c.split(';')[0]!).filter((c) => !c.endsWith('=')).join('; ')

let n = 0
const stamp = () => `${Date.now()}-${++n}`
/** token ที่ "เก่าพอ" (เหมือนคนใช้เวลากรอกฟอร์ม 5 วินาที) */
const oldToken = () => formToken(Date.now() - 5000)
const valid = (over: Partial<Submission> = {}): Submission => ({ name: 'สมชาย', email: 'somchai@example.com', subject: `หัวข้อ ${stamp()}`, message: 'ข้อความทดสอบยาวพอสมควร', token: oldToken(), ...over })

async function admin() {
  const email = `contactadm-${stamp()}@example.com`
  await createAccount({ email, name: 'Admin', password: 'password-1234' }, { role: 'admin' })
  return cookieOf(await form('/login', { email, password: 'password-1234' }))
}

describe('token ฟอร์ม', () => {
  it('ลายเซ็นถูก = ได้อายุ · ปลอม/แก้เวลา/รูปแบบผิด = null', () => {
    const now = 1_000_000
    expect(tokenAgeMs(formToken(now - 3000), now)).toBe(3000)
    const [ts, sig] = formToken(now - 3000).split('.')
    expect(tokenAgeMs(`${Number(ts) - 100000}.${sig}`, now)).toBeNull() // แก้เวลาให้เก่า
    expect(tokenAgeMs('abc', now)).toBeNull()
    expect(tokenAgeMs('123.', now)).toBeNull()
    expect(tokenAgeMs('x.y', now)).toBeNull()
  })
})

describe('submitMessage', () => {
  it('ข้อมูลถูกต้อง → เก็บและสร้างงานแจ้งเตือน', () => {
    resetLimiter()
    const before = countMessages()
    const pendingBefore = jobs.stats().pending
    const input = valid()
    expect(submitMessage(input, '10.0.0.1')).toEqual({ ok: true, stored: true })
    expect(countMessages()).toBe(before + 1)
    expect(listMessages(50).some((m) => m.subject === input.subject)).toBe(true)
    expect(jobs.stats().pending).toBe(pendingBefore + 1)
  })

  it('ตรวจทีละช่อง: ชื่อ/อีเมล/หัวข้อ/ข้อความ', () => {
    resetLimiter()
    const field = (over: Partial<Submission>) => {
      const r = submitMessage(valid(over), '10.0.0.2')
      return r.ok ? 'ok' : r.field
    }
    expect(field({ name: '  ' })).toBe('name')
    expect(field({ email: 'not-an-email' })).toBe('email')
    expect(field({ subject: '' })).toBe('subject')
    expect(field({ message: 'สั้น' })).toBe('message')
    expect(field({ message: 'x'.repeat(5001) })).toBe('message')
  })

  it('บอท: honeypot / เร็วเกิน / ไม่มี token / ปลอม token → ตอบสำเร็จแต่ไม่เก็บ', () => {
    resetLimiter()
    const before = countMessages()
    for (const bot of [valid({ website: 'http://spam.example' }), valid({ token: formToken(Date.now()) }), valid({ token: '' }), valid({ token: '1.forged' }), valid({ token: formToken(Date.now() - 2 * 3_600_000) })]) {
      expect(submitMessage(bot, '10.0.0.3')).toEqual({ ok: true, stored: false })
    }
    expect(countMessages()).toBe(before)
  })

  it('จำกัด 5 ข้อความ/10 นาทีต่อ IP · IP อื่นไม่เกี่ยว', () => {
    resetLimiter()
    const results = Array.from({ length: 6 }, () => submitMessage(valid(), '10.0.0.4'))
    expect(results.slice(0, 5).every((r) => r.ok && r.stored)).toBe(true)
    expect(results[5]).toEqual({ ok: false, error: 'rate-limited' })
    expect(submitMessage(valid(), '10.0.0.5')).toEqual({ ok: true, stored: true })
  })
})

describe('หน้าเว็บ', () => {
  it('/contact มีฟอร์ม + honeypot + token ที่ลงชื่อ', async () => {
    const html = await (await request('/contact')).text()
    expect(html).toContain('<form method="post" action="/contact"')
    expect(html).toContain('name="website"')
    const token = /name="token" value="([^"]+)"/.exec(html)![1]!
    expect(tokenAgeMs(token)).not.toBeNull()
  })

  it('ส่งสำเร็จ → /contact?sent=1 · ผิด → กลับพร้อมข้อความและข้อมูลเดิม', async () => {
    resetLimiter()
    const subject = `ผ่านฟอร์ม ${stamp()}`
    const ok = await form('/contact', { name: 'A', email: 'a@example.com', subject, message: 'ข้อความจากฟอร์มจริง', token: oldToken() })
    expect(ok.headers.get('location')).toBe('/contact?sent=1')
    expect(listMessages(50).some((m) => m.subject === subject)).toBe(true)

    const bad = await form('/contact', { name: 'A', email: 'nope', subject: 'x', message: 'ข้อความ', token: oldToken() })
    const location = bad.headers.get('location')!
    expect(location).toContain('error=email')
    const page = await (await request(location)).text()
    expect(page).toContain('รูปแบบอีเมลไม่ถูกต้อง')
    expect(page).toContain('value="A"')
  })

  it('XSS: ข้อความ/ชื่อที่มี HTML ถูก escape ทั้งในหน้าฟอร์มและหลังบ้าน', async () => {
    resetLimiter()
    const evil = `<script>alert('x')</script>`
    await form('/contact', { name: evil, email: 'x@example.com', subject: `<img src=x onerror=alert(1)>${stamp()}`, message: `${evil} ข้อความ`, token: oldToken() })
    const cookie = await admin()
    const html = await (await request('/admin/messages', { headers: { cookie } })).text()
    expect(html).not.toContain('<script>alert')
    expect(html).not.toContain('<img src=x onerror')
    expect(html).toContain('&lt;script&gt;')
    const echoed = await (await request(`/contact?error=email&message=${encodeURIComponent(evil)}`)).text()
    expect(echoed).not.toContain('<script>alert')
  })
})

describe('หลังบ้าน', () => {
  it('เฉพาะ admin · อ่านแล้ว/ลบได้', async () => {
    resetLimiter()
    expect((await request('/admin/messages')).status).toBe(302)
    const email = `contactusr-${stamp()}@example.com`
    await createAccount({ email, name: 'U', password: 'password-1234' }, { role: 'editor' })
    const editor = cookieOf(await form('/login', { email, password: 'password-1234' }))
    expect((await request('/admin/messages', { headers: { cookie: editor } })).status).toBe(403)
    expect((await form('/admin/messages/_/delete?id=1', {}, { cookie: editor })).status).toBe(403)

    submitMessage(valid({ subject: `สำหรับหลังบ้าน ${stamp()}` }), '10.0.0.9')
    const cookie = await admin()
    const m = listMessages(1)[0]!
    expect(m.is_read).toBe(0)
    expect(await (await request('/admin/messages', { headers: { cookie } })).text()).toContain('ใหม่')
    await form(`/admin/messages/_/read?id=${m.id}`, {}, { cookie })
    expect(getMessage(m.id)!.is_read).toBe(1)
    expect((await form(`/admin/messages/_/delete?id=${m.id}`, {}, { cookie })).headers.get('location')).toBe('/admin/messages')
    expect(getMessage(m.id)).toBeNull()
    expect((await form(`/admin/messages/_/delete?id=${m.id}`, {}, { cookie })).status).toBe(404)
  })

  it('งานแจ้งเตือนทำงานได้ (ไม่พัง) เมื่อ tick', async () => {
    resetLimiter()
    submitMessage(valid(), '10.0.0.10')
    const started = await jobs.tick()
    expect(started).toBeGreaterThan(0)
  })
})
