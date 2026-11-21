import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'

const { app } = await createApp()

describe('stats', () => {
  it('GET /api/stats บอกจำนวนกระทงทั้งหมด', async () => {
    const res = await app.handle(new Request('http://localhost/api/stats'))
    expect(res.status).toBe(200)
    expect(typeof (await res.json()).krathongs).toBe('number')
  })
})
