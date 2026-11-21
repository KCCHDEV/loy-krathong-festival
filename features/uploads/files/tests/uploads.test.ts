// อัปโหลด: ตรวจชนิดจากเนื้อไฟล์, ขนาด, ชื่อ, การเสิร์ฟ, สิทธิ์, path traversal
import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const dir = mkdtempSync(join(tmpdir(), 'kitsune-uploads-'))
process.env.UPLOAD_DIR = dir
process.env.UPLOAD_MAX_MB = '1'

const { createApp } = await import('../core/app')
const { createAccount } = await import('../src/lib/auth')
const { UploadError, cleanName, deleteUpload, detectType, getUpload, isValidId, saveUpload } = await import('../src/lib/uploads')

const { app } = await createApp()
const request = (path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))
const form = (path: string, fields: Record<string, string>, headers: Record<string, string> = {}) =>
  request(path, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', ...headers }, body: new URLSearchParams(fields) })
const cookieOf = (res: Response) => res.headers.getSetCookie().map((c) => c.split(';')[0]!).filter((c) => !c.endsWith('=')).join('; ')

// ไฟล์จริงขนาดเล็กที่สุดของแต่ละชนิด
const PNG = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0x0d, 0x49, 0x48, 0x44, 0x52])
const JPEG = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 0x10, 0x4a, 0x46, 0x49, 0x46])
const GIF = new TextEncoder().encode('GIF89a\x01\x00\x01\x00')
const WEBP = new Uint8Array([0x52, 0x49, 0x46, 0x46, 4, 0, 0, 0, 0x57, 0x45, 0x42, 0x50])
const PDF = new TextEncoder().encode('%PDF-1.4\n%%EOF')
const file = (bytes: BlobPart, name: string, type = '') => new File([bytes], name, { type })

let n = 0
async function member(role: 'admin' | 'editor' | 'user') {
  const email = `up${role}-${Date.now()}-${++n}@example.com`
  const account = await createAccount({ email, name: role, password: 'password-1234' }, { role })
  return { account, cookie: cookieOf(await form('/login', { email, password: 'password-1234' })) }
}
const multipart = (path: string, f: File, headers: Record<string, string> = {}) => {
  const fd = new FormData()
  fd.append('file', f)
  return request(path, { method: 'POST', body: fd, headers })
}

beforeAll(() => void 0)
afterAll(() => rmSync(dir, { recursive: true, force: true }))

describe('ตรวจชนิดจากเนื้อไฟล์', () => {
  it('รู้จักทุกชนิดที่รับ', () => {
    expect(detectType(PNG)?.mime).toBe('image/png')
    expect(detectType(JPEG)?.mime).toBe('image/jpeg')
    expect(detectType(GIF)?.mime).toBe('image/gif')
    expect(detectType(WEBP)?.mime).toBe('image/webp')
    expect(detectType(PDF)?.mime).toBe('application/pdf')
    expect(detectType(new TextEncoder().encode('สวัสดี hello\n'))?.mime).toContain('text/plain')
  })

  it('ปฏิเสธ svg/html/exe/ไฟล์ binary ที่แค่เปลี่ยนนามสกุล', () => {
    const enc = (s: string) => new TextEncoder().encode(s)
    expect(detectType(enc('<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>'))?.mime).toContain('text/plain') // ถือเป็นข้อความล้วน → เสิร์ฟแบบ attachment ไม่ใช่ svg
    expect(detectType(new Uint8Array([0x4d, 0x5a, 0x90, 0x00, 0x03, 0, 0, 0]))).toBeNull() // exe (MZ) + NUL
    expect(detectType(new Uint8Array([0x7f, 0x45, 0x4c, 0x46, 2, 1, 1, 0]))).toBeNull() // ELF
    expect(detectType(new Uint8Array([0x50, 0x4b, 0x03, 0x04, 0, 0, 0, 0]))).toBeNull() // zip ไม่รับ
    expect(detectType(new Uint8Array([0xc3, 0x28, 0x41]))).toBeNull() // UTF-8 ไม่ถูกต้อง
  })
})

describe('บันทึกไฟล์', () => {
  it('เก็บด้วย id สุ่ม + นามสกุลจากชนิดจริง · ไม่ใช้ชื่อจากผู้ใช้เป็น path', async () => {
    const u = await saveUpload(file(PNG, '../../etc/passwd.exe', 'application/x-msdownload'), null)
    expect(isValidId(u.id)).toBe(true)
    expect(u.mime).toBe('image/png')
    expect(u.name).toBe('passwd.exe')
    expect(readdirSync(dir)).toContain(`${u.id}.png`)
    expect(existsSync(join(dir, '..', 'etc'))).toBe(false)
    expect(deleteUpload(u.id)).toBe(true)
    expect(readdirSync(dir)).not.toContain(`${u.id}.png`)
  })

  it('ปฏิเสธไฟล์ว่าง ใหญ่เกิน และชนิดไม่รองรับ', async () => {
    const code = (f: File) => saveUpload(f, null).catch((e: InstanceType<typeof UploadError>) => e.code)
    expect(await code(file(new Uint8Array(0), 'a.png'))).toBe('empty')
    expect(await code(file(new Uint8Array(1024 * 1024 + 1).fill(0x41), 'big.txt'))).toBe('too-large')
    expect(await code(file(new Uint8Array([0x7f, 0x45, 0x4c, 0x46, 2, 1, 1, 0]), 'a.png', 'image/png'))).toBe('unsupported-type')
  })

  it('cleanName ตัด path / อักขระอันตราย / จุดนำหน้า / ความยาว', () => {
    expect(cleanName('C:\\Users\\me\\photo.png')).toBe('photo.png')
    expect(cleanName('a/b/c.txt')).toBe('c.txt')
    expect(cleanName('..hidden')).toBe('hidden')
    expect(cleanName('bad"name\r\n<x>.png')).toBe('badnamex.png')
    expect(cleanName('   ')).toBe('file')
    expect(cleanName('x'.repeat(500))).toHaveLength(120)
  })

  it('isValidId กัน path traversal', () => {
    for (const bad of ['../x', '..%2fx', 'a'.repeat(32).toUpperCase(), 'g'.repeat(32), '', 'a'.repeat(31)]) expect(isValidId(bad)).toBe(false)
    expect(getUpload('../../../etc/passwd')).toBeNull()
  })
})

describe('เสิร์ฟไฟล์', () => {
  it('header ถูกต้อง: ชนิดจริง, nosniff, CSP sandbox, cache ยาว, ETag → 304', async () => {
    const u = await saveUpload(file(PNG, 'รูป ภาพ.png'), null)
    const res = await request(`/uploads/${u.id}`)
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toBe('image/png')
    expect(res.headers.get('x-content-type-options')).toBe('nosniff')
    expect(res.headers.get('content-security-policy')).toContain('sandbox')
    expect(res.headers.get('cache-control')).toContain('immutable')
    expect(res.headers.get('content-disposition')).toBe(`inline; filename*=UTF-8''${encodeURIComponent('รูป ภาพ.png')}`)
    expect(new Uint8Array(await res.arrayBuffer())).toEqual(PNG)
    const etag = res.headers.get('etag')!
    expect((await request(`/uploads/${u.id}`, { headers: { 'if-none-match': etag } })).status).toBe(304)
    expect((await request(`/uploads/${u.id}?download=1`)).headers.get('content-disposition')).toStartWith('attachment')
  })

  it('ข้อความล้วน (รวมไฟล์ที่ดูเหมือน svg/html) เสิร์ฟเป็น attachment text/plain ไม่รันในเบราว์เซอร์', async () => {
    const u = await saveUpload(file('<html><script>alert(1)</script></html>', 'evil.html', 'text/html'), null)
    const res = await request(`/uploads/${u.id}`)
    expect(res.headers.get('content-type')).toContain('text/plain')
    expect(res.headers.get('content-disposition')).toStartWith('attachment')
  })

  it('id ผิดรูปแบบ/ไม่มี = 404', async () => {
    expect((await request(`/uploads/${'0'.repeat(32)}`)).status).toBe(404)
    expect((await request('/uploads/..%2f..%2fetc%2fpasswd')).status).toBe(404)
    expect((await request('/uploads/abc')).status).toBe(404)
  })
})

describe('หลังบ้านและ API', () => {
  it('/admin/media: ต้อง editor/admin · อัปโหลดและลบผ่านฟอร์ม', async () => {
    expect((await request('/admin/media')).status).toBe(302)
    expect((await request('/admin/media', { headers: { cookie: (await member('user')).cookie } })).status).toBe(403)

    const { cookie } = await member('editor')
    expect((await request('/admin/media', { headers: { cookie } })).status).toBe(200)
    const up = await multipart('/admin/media', file(JPEG, 'a.jpg'), { cookie })
    expect(up.headers.get('location')).toBe('/admin/media?uploaded=1')
    const html = await (await request('/admin/media', { headers: { cookie } })).text()
    const id = /\/uploads\/([0-9a-f]{32})/.exec(html)![1]!
    expect(getUpload(id)?.mime).toBe('image/jpeg')

    expect((await form(`/admin/media/_/delete?id=${id}`, {}, { cookie })).headers.get('location')).toBe('/admin/media')
    expect(getUpload(id)).toBeNull()
  })

  it('อัปโหลดไฟล์ผิดชนิดผ่านฟอร์ม → แสดงข้อความ ไม่เก็บ', async () => {
    const { cookie } = await member('admin')
    const bad = await multipart('/admin/media', file(new Uint8Array([0x7f, 0x45, 0x4c, 0x46, 2, 1, 1, 0]), 'x.png', 'image/png'), { cookie })
    expect(bad.headers.get('location')).toBe('/admin/media?error=unsupported-type')
    expect(await (await request('/admin/media?error=unsupported-type', { headers: { cookie } })).text()).toContain('ชนิดไฟล์ไม่รองรับ')
  })

  it('POST /api/uploads: ต้อง login · 201 พร้อม url · 415/413 เมื่อผิด', async () => {
    expect((await multipart('/api/uploads', file(PNG, 'a.png'))).status).toBe(401)
    const { cookie } = await member('user')
    const ok = await multipart('/api/uploads', file(PNG, 'a.png'), { cookie })
    expect(ok.status).toBe(201)
    const body = await ok.json()
    expect(body.url).toBe(`/uploads/${body.id}`)
    expect((await multipart('/api/uploads', file(new Uint8Array([1, 2, 3, 0]), 'x.bin'), { cookie })).status).toBe(415)
    expect((await multipart('/api/uploads', file(new Uint8Array(2 * 1024 * 1024).fill(0x41), 'big.txt'), { cookie })).status).toBe(413)
  })

  it('ลบผ่าน API: เจ้าของหรือ admin เท่านั้น · GET แสดงเฉพาะของตัวเอง (admin เห็นหมด)', async () => {
    const owner = await member('user')
    const other = await member('user')
    const admin = await member('admin')
    const made = await (await multipart('/api/uploads', file(PNG, 'mine.png'), { cookie: owner.cookie })).json()

    expect((await request(`/api/uploads/${made.id}`, { method: 'DELETE', headers: { cookie: other.cookie } })).status).toBe(403)
    const mine = await (await request('/api/uploads', { headers: { cookie: owner.cookie } })).json()
    expect(mine.items.some((i: any) => i.id === made.id)).toBe(true)
    expect((await (await request('/api/uploads', { headers: { cookie: other.cookie } })).json()).items.some((i: any) => i.id === made.id)).toBe(false)
    expect((await (await request('/api/uploads', { headers: { cookie: admin.cookie } })).json()).items.some((i: any) => i.id === made.id)).toBe(true)

    expect((await request(`/api/uploads/${made.id}`, { method: 'DELETE', headers: { cookie: admin.cookie } })).status).toBe(200)
    expect((await request(`/uploads/${made.id}`)).status).toBe(404)
    expect((await request('/api/uploads/not-a-valid-id', { method: 'DELETE', headers: { cookie: admin.cookie } })).status).toBe(422)
  })
})
