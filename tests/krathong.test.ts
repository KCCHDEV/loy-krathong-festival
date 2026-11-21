import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'

const { app } = await createApp()
const post = (body: unknown) =>
  app.handle(new Request('http://localhost/api/krathongs', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }))

describe('กระทง', () => {
  it('ลอยแล้วเห็นใน GET', async () => {
    const r = await post({ name: 'เนย', wish: 'สุขภาพดี', color: '#ff6b9d' })
    expect(r.status).toBe(200)
    const list = await (await app.handle(new Request('http://localhost/api/krathongs'))).json()
    expect(list[0].wish).toBe('สุขภาพดี')
  })
  it('ปฏิเสธสีที่ไม่อยู่ในรายการและพรว่าง', async () => {
    expect((await post({ name: 'a', wish: 'b', color: 'red' })).status).toBe(422)
    expect((await post({ name: 'a', wish: '', color: '#ff6b9d' })).status).toBe(422)
  })
})
