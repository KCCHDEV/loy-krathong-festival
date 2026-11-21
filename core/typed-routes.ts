/**
 * สร้าง core/routes.gen.ts จาก route ที่โหลดแล้ว — union ของทุก path ให้ href() ใช้ตรวจชนิด
 * เขียนไฟล์ใหม่เฉพาะตอนเนื้อหาเปลี่ยน (ไม่ทำให้ --watch รีสตาร์ทวน)
 */
import { join } from 'node:path'
import type { LoadedRoute } from './router'

const FILE = join(import.meta.dir, 'routes.gen.ts')

export async function generateRouteTypes(routes: LoadedRoute[]) {
  const paths = [...new Set(routes.filter((r) => r.method !== 'WS').map((r) => r.path))].sort()
  const body = paths.map((p) => `  | ${JSON.stringify(p)}`).join('\n')
  const next = `// สร้างอัตโนมัติโดย core/typed-routes.ts — ห้ามแก้เอง\nexport type RoutePath =\n${body || '  never'}\n`

  const file = Bun.file(FILE)
  if ((await file.exists()) && (await file.text()) === next) return false
  await Bun.write(FILE, next)
  return true
}
