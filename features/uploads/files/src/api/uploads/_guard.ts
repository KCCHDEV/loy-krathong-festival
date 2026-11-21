// ทุก API ใต้ /api/uploads ต้อง login (session cookie หรือ Authorization: Bearer <JWT>)
import { requireApi } from '../../lib/guards'

export default requireApi()
