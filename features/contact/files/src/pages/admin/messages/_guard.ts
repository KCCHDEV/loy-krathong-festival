// กล่องข้อความจากฟอร์มติดต่อ: เฉพาะ admin
import { requireRole } from '../../../lib/guards'

export default requireRole('admin')
