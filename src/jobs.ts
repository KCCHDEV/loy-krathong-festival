// งานเบื้องหลังและงานตามเวลา — ถูก import ตอน createApp, index.tsx เป็นคนสั่ง jobs.start()
// เพิ่มงานของคุณที่นี่: jobs.define('ชื่อ', async (payload) => {...}) แล้ว jobs.enqueue('ชื่อ', payload) จากที่ไหนก็ได้
import { cache } from '@core/cache'
import { jobs } from '@core/jobs'

// ตัวอย่างงานที่เรียกจาก API: POST /api/admin/jobs { "name": "echo", "payload": { "message": "hi" } }
jobs.define<{ message?: string }>('echo', ({ message }, job) => {
  console.log(`[job #${job.id}] echo (ครั้งที่ ${job.attempt}):`, message ?? '(ว่าง)')
})

// ทุก 10 นาที: ล้าง cache ที่หมดอายุ + ลบประวัติงานที่เสร็จแล้วเกิน 7 วัน (ข้าม process ไม่ซ้ำ: cron ใช้ uniqueKey ต่อนาที)
jobs.cron('*/10 * * * *', 'housekeeping', () => {
  cache.sweep()
  jobs.prune()
})
