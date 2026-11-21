import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'
import { add, count } from '../src/lib/krathong'

const { app } = await createApp()
const list = async (qs = '') => (await app.handle(new Request(`http://localhost/api/krathongs${qs}`))).json()

describe('สุ่มกระทงจริง', () => {
  it('?random=N สุ่มจากกระทงในฐานข้อมูล · ค่าที่ไม่ใช่ตัวเลขใช้ล่าสุด · เกิน 30 ตัดเหลือ 30', async () => {
    for (let i = 0; i < 40; i++) add(`n${i}`, `w${i}`, '#ff6b9d', 'lotus', 'none')
    expect(count()).toBeGreaterThanOrEqual(40)
    const two = await list('?random=2')
    expect(two).toHaveLength(2)
    expect(two[0]).toMatchObject({ model: 'lotus', mediaKind: null })
    expect(await list('?random=1000')).toHaveLength(30)
    expect((await list('?random=abc')).length).toBeLessThanOrEqual(60)
    expect((await list()).length).toBeLessThanOrEqual(60)
  })
})
