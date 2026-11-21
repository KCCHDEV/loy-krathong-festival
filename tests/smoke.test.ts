// เทสพื้นฐานของโปรเจกต์ที่ติดตั้งแบบไม่มีตัวอย่าง — เพิ่มเทสของคุณในโฟลเดอร์ tests/
import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'

const { app } = await createApp()
const get = (path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))

describe('พื้นฐาน', () => {
  it('หน้าแรกตอบ HTML และมีเมนู', async () => {
    const res = await get('/')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toContain('text/html')
    expect(await res.text()).toContain('ลอยกระทง')
  })

  it('ไม่พบหน้า = 404 (หน้า) และ 404 JSON (API)', async () => {
    expect((await get('/nope')).status).toBe(404)
    const api = await get('/api/nope')
    expect(api.status).toBe(404)
    expect(await api.json()).toEqual({ error: 'Not Found' })
  })

  it('health check และไฟล์ static', async () => {
    expect((await get('/healthz')).status).toBe(200)
    expect((await get('/readyz')).status).toBe(200)
    expect((await get('/public/kit.js')).status).toBe(200)
  })

  it('API ของ admin ต้องมี x-api-key', async () => {
    expect((await get('/api/admin/system')).status).toBe(401)
    expect((await get('/api/admin/system', { headers: { 'x-api-key': process.env.ADMIN_KEY ?? 'dev-secret' } })).status).toBe(200)
  })
})
