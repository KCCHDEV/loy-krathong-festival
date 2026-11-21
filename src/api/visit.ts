// POST /api/visit — หน้าเว็บเรียกครั้งเดียวตอนเปิด เพื่อนับผู้เข้าชม (ไม่เก็บ IP/UA ดิบ ดู ../lib/visits.ts)
import { visit } from '../lib/visits'

export const POST = ({ ip, headers }: { ip: string; headers: Record<string, string | undefined> }) => {
  visit(ip, headers['user-agent'] ?? '')
  return { ok: true }
}
