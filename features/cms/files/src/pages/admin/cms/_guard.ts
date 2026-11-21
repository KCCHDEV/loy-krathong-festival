// ทุกหน้าใน /admin/cms ต้อง login เป็น admin หรือ editor
import { requireRole } from '../../../lib/guards'

export default requireRole('admin', 'editor')
