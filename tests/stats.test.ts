import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'

const { app } = await createApp()
const get = async () => (await app.handle(new Request('http://localhost/api/stats', { headers: { 'user-agent': 'test' } }))).json()

describe('stats', () => {
  it('บอกจำนวนกระทงและสถิติผู้เข้าชม', async () => {
    const s = await get()
    for (const k of ['krathongs', 'views', 'visitorsToday', 'online']) expect(typeof s[k]).toBe('number')
  })

  it('POST /api/visit นับเข้าชมเพิ่ม · รีเฟรชรัวไม่นับซ้ำ · ไม่เก็บ IP/UA ดิบ', async () => {
    const before = await get()
    const post = () => app.handle(new Request('http://localhost/api/visit', { method: 'POST', headers: { 'user-agent': 'test' } }))
    expect((await post()).status).toBe(200)
    await post()
    const after = await get()
    expect(after.views).toBe(before.views + 1)
    expect(after.visitorsToday).toBeGreaterThanOrEqual(1)
    expect(after.online).toBeGreaterThanOrEqual(1)
    const { db } = await import('../src/lib/db')
    const rows = db.query('SELECT h FROM visitors').all() as { h: string }[]
    expect(rows.every((r) => /^[0-9a-f]{16}$/.test(r.h))).toBe(true)
  })
})
