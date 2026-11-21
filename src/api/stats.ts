// GET /api/stats — จำนวนกระทงที่ลอยแล้วทั้งหมด (เห็นแค่ 60 อันล่าสุดใน /api/krathongs)
import { count } from '../lib/krathong'

export const GET = () => ({ krathongs: count() })
