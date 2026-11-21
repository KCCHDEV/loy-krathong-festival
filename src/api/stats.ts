// GET /api/stats — จำนวนกระทงทั้งหมด (/api/krathongs เห็นแค่ 60 อันล่าสุด) + สถิติผู้เข้าชม
// หน้าเว็บเรียกทุก 10 วินาที จึงใช้เป็นสัญญาณ "ออนไลน์" ด้วย
import { count } from '../lib/krathong'
import { stats, touch } from '../lib/visits'

export const GET = ({ ip, headers }: { ip: string; headers: Record<string, string | undefined> }) => {
  touch(ip, headers['user-agent'] ?? '')
  return { krathongs: count(), ...stats() }
}
