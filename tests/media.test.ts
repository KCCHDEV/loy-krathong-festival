import { describe, expect, it } from 'bun:test'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

process.env.MEDIA_DIR = mkdtempSync(join(tmpdir(), 'krathong-media-'))
const { createApp } = await import('../core/app')
const { app } = await createApp()

const PNG = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2, 3, 4, 5, 6, 7, 8])
const MP4 = new Uint8Array([0, 0, 0, 24, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6f, 0x6d, 1, 2, 3, 4])
const send = (file: File | undefined) => {
  const fd = new FormData()
  for (const [k, v] of Object.entries({ name: 'เนย', wish: 'สุขภาพดี', color: '#ff6b9d', model: 'lotus', deco: 'none' })) fd.append(k, v)
  if (file) fd.append('media', file)
  return app.handle(new Request('http://localhost/api/krathongs', { method: 'POST', body: fd }))
}

describe('แนบรูป/วิดีโอ', () => {
  it('รับ PNG แล้วเสิร์ฟกลับพร้อม header ปลอดภัยและรองรับ Range', async () => {
    const r = await send(new File([PNG], 'x.png', { type: 'image/png' }))
    expect(r.status).toBe(200)
    const k = await r.json()
    expect(k.mediaKind).toBe('image')
    const res = await app.handle(new Request(`http://localhost${k.media}`))
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toBe('image/png')
    expect(res.headers.get('x-content-type-options')).toBe('nosniff')
    const part = await app.handle(new Request(`http://localhost${k.media}`, { headers: { range: 'bytes=0-3' } }))
    expect(part.status).toBe(206)
    expect((await part.arrayBuffer()).byteLength).toBe(4)

    // admin ลบแล้วไฟล์หาย; ไม่มี key = 401
    const del = (key?: string) => app.handle(new Request(`http://localhost/api/admin/krathongs/${k.id}`, { method: 'DELETE', headers: key ? { 'x-api-key': key } : {} }))
    expect((await del()).status).toBe(401)
    expect((await del('dev-secret')).status).toBe(200)
    expect((await app.handle(new Request(`http://localhost${k.media}`))).status).toBe(404)
  })

  it('ปฏิเสธไฟล์ที่เนื้อหาไม่ใช่รูป/วิดีโอ แม้ตั้งชื่อ .png', async () => {
    const r = await send(new File([new TextEncoder().encode('<script>alert(1)</script>')], 'evil.png', { type: 'image/png' }))
    expect(r.status).toBe(415)
  })

  it('รับ MP4 และกัน path traversal', async () => {
    const r = await send(new File([MP4], 'a.mp4', { type: 'video/mp4' }))
    expect(r.status).toBe(200)
    expect((await r.json()).mediaKind).toBe('video')
    for (const p of ['..%2f..%2fpackage.json', '..%5cpackage.json', 'x.png']) {
      expect((await app.handle(new Request(`http://localhost/media/${p}`))).status).toBe(404)
    }
  })
})
