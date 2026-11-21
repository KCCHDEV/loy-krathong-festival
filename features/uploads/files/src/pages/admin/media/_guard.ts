// คลังไฟล์: admin หรือ editor
import { requireRole } from '../../../lib/guards'

export default requireRole('admin', 'editor')
