/**
 * ตรวจ route ทั้งโปรเจกต์ก่อน deploy — bun scripts/check-routes.ts (รวมอยู่ใน bun run check)
 *  - route ซ้ำ / export ผิดรูป / loader ไม่ใช่ฟังก์ชัน (router รวบรวมไว้ใน problems)
 *  - หน้าที่ cache อยู่ใต้ _guard (ผลขึ้นกับผู้ใช้ → ห้าม cache)
 *  - _layout/_error/_not-found/_loading ที่ default export ไม่ใช่ฟังก์ชัน
 * ยังสร้าง core/routes.gen.ts ใหม่ให้ href() ด้วย (ต้องทำก่อน tsc)
 */
process.env.DB_FILE = ':memory:'
process.env.LOG = '0'
process.env.NODE_ENV = 'development'

const { createApp } = await import('../core/app')
const { problems } = await import('../core/router')

const { routes } = await createApp()
const errors = [...problems]

for (const r of routes) {
  if (r.cache && r.guarded) errors.push(`${r.file}: ${r.method} ${r.path} ใช้ cache ทั้งที่อยู่ใต้ _guard (ผลขึ้นกับผู้ใช้)`)
}

const conventions = new Bun.Glob('**/_{layout,error,not-found,loading}.{ts,tsx}')
for (const file of conventions.scanSync({ cwd: 'src/pages' })) {
  const mod = await import(`../src/pages/${file}`)
  if (typeof mod.default !== 'function') errors.push(`src/pages/${file}: default export ต้องเป็นฟังก์ชัน`)
}

if (errors.length) {
  console.error(`\n✖ พบ ${errors.length} ปัญหา:\n` + errors.map((e) => `  - ${e}`).join('\n'))
  process.exit(1)
}
console.log(`✔ ตรวจ ${routes.length} route แล้ว ไม่พบปัญหา`)
process.exit(0)
