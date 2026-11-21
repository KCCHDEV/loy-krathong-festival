import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'

const { app } = await createApp()
const post = (body: unknown) =>
  app.handle(new Request('http://localhost/api/krathongs', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }))
const ok = { name: 'เนย', wish: 'สุขภาพดี', color: '#ff6b9d', model: 'heart', deco: 'both' }

describe('กระทง', () => {
  it('ลอยแล้วเห็นใน GET พร้อมรูปทรงและของตกแต่ง', async () => {
    expect((await post(ok)).status).toBe(200)
    const list = await (await app.handle(new Request('http://localhost/api/krathongs'))).json()
    expect(list[0]).toMatchObject({ wish: 'สุขภาพดี', model: 'heart', deco: 'both' })
  })
  it('ปฏิเสธสี รูปทรง ของตกแต่งที่ไม่อยู่ในรายการ และพรว่าง', async () => {
    expect((await post({ ...ok, color: 'red' })).status).toBe(422)
    expect((await post({ ...ok, model: 'ufo' })).status).toBe(422)
    expect((await post({ ...ok, deco: 'x' })).status).toBe(422)
    expect((await post({ ...ok, wish: '' })).status).toBe(422)
  })
})
