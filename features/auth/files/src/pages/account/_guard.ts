// ทุกหน้าใน /account ต้อง login — ยังไม่ login จะถูกส่งไป /login แล้วกลับมาที่เดิม
import { requireLogin } from '../../lib/guards'

export default requireLogin
