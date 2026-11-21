// หน้าแดชบอร์ดและจัดการผู้ใช้เฉพาะ admin · (dash) เป็นโฟลเดอร์จัดกลุ่ม ไม่อยู่ใน URL
// แยกจาก /admin/cms (editor ก็เข้าได้) เพราะ _guard.ts ของโฟลเดอร์แม่จะครอบทุกโฟลเดอร์ลูก
import { requireRole } from '../../../lib/guards'

export default requireRole('admin')
