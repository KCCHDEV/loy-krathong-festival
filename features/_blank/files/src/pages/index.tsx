// GET / — หน้าแรกเปล่าของโปรเจกต์ (แก้ได้เลย) · แสดงฟีเจอร์ที่ติดตั้งไว้พร้อมลิงก์
import { PageHeader, Card } from '@components'
import { installedFeatures, navLinks } from '../lib/nav.gen'

export const metadata = { path: '/' }

export default function Home() {
  const links = navLinks.filter((l) => l.href !== '/')
  return (
    <>
      <PageHeader title="Kitsune" lead="โปรเจกต์ใหม่ของคุณพร้อมแล้ว — แก้ไฟล์นี้ที่ src/pages/index.tsx" />
      <div class="grid">
        <Card title="ฟีเจอร์ที่ติดตั้ง">
          {installedFeatures.length ? (
            <ul>
              {installedFeatures.map((f) => (
                <li>
                  <code safe>{f}</code>
                </li>
              ))}
            </ul>
          ) : (
            <p class="muted">ยังไม่มี — เพิ่มได้ด้วย <code>bun run setup</code></p>
          )}
        </Card>
        <Card title="ลิงก์">
          {links.length ? (
            <ul>
              {links.map((l) => (
                <li>
                  <a href={l.href} safe>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p class="muted">เพิ่มหน้าใหม่ได้โดยสร้างไฟล์ใน <code>src/pages</code></p>
          )}
        </Card>
        <Card title="เริ่มสร้าง">
          <ul>
            <li>หน้าเว็บ: <code>src/pages/ชื่อ.tsx</code> → <code>/ชื่อ</code></li>
            <li>API: <code>src/api/ชื่อ.ts</code> → <code>/api/ชื่อ</code></li>
            <li>งานเบื้องหลัง/cron: <code>src/jobs.ts</code></li>
            <li>รันหลาย process + load balancer: <code>bun run lb</code></li>
          </ul>
        </Card>
      </div>
    </>
  )
}
