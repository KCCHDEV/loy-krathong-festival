// /admin — ภาพรวมระบบ
import type { RouteContext } from '@core/route'
import { cache } from '@core/cache'
import { jobs } from '@core/jobs'
import { Card, PageHeader } from '@components'
import { countAccounts, listAccounts, ROLES, type Account } from '../../../lib/auth'
import { installedFeatures } from '../../../lib/nav.gen'

export const metadata = { title: 'หลังบ้าน', path: '/admin' }

const fmtBytes = (n: number) => `${(n / 1048576).toFixed(1)} MB`
const fmtUptime = (s: number) => (s >= 3600 ? `${Math.floor(s / 3600)} ชม. ${Math.floor((s % 3600) / 60)} นาที` : `${Math.floor(s / 60)} นาที ${Math.floor(s % 60)} วินาที`)

export default function Dashboard({ app, user }: RouteContext) {
  const me = user as Account
  const mem = process.memoryUsage()
  const accounts = listAccounts(200)
  const byRole = Object.fromEntries(ROLES.map((r) => [r, accounts.filter((a) => a.role === r).length]))
  const job = jobs.stats()
  const c = cache.stats()
  const recent = accounts.slice(0, 5)
  const has = (id: string) => installedFeatures.includes(id)

  return (
    <>
      <PageHeader title="หลังบ้าน" lead={`สวัสดี ${me.name}`} />
      <div class="stat-row">
        <div class="stat">
          <span class="stat-value" safe>{String(countAccounts())}</span>
          <span class="stat-label">ผู้ใช้ทั้งหมด</span>
          <span class="stat-sub" safe>{ROLES.map((r) => `${r} ${byRole[r]}`).join(' · ')}</span>
        </div>
        <div class="stat">
          <span class="stat-value" safe>{fmtBytes(mem.rss)}</span>
          <span class="stat-label">หน่วยความจำ</span>
          <span class="stat-sub" safe>{`heap ${fmtBytes(mem.heapUsed)}`}</span>
        </div>
        <div class="stat">
          <span class="stat-value" safe>{String(job.pending + job.running)}</span>
          <span class="stat-label">งานเบื้องหลังที่รอ/กำลังทำ</span>
          <span class="stat-sub" safe>{`สำเร็จ ${job.done} · พลาด ${job.failed}`}</span>
        </div>
        <div class="stat">
          <span class="stat-value" safe>{`${(c.hitRate * 100).toFixed(0)}%`}</span>
          <span class="stat-label">cache hit rate</span>
          <span class="stat-sub" safe>{`${c.items} รายการ · ${fmtBytes(c.bytes)}`}</span>
        </div>
      </div>

      <div class="grid">
        <Card title="ผู้ใช้ล่าสุด">
          <table class="table">
            <tbody>
              {recent.map((a) => (
                <tr>
                  <td safe>{a.name}</td>
                  <td class="muted" safe>{a.email}</td>
                  <td safe>{a.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <a href="/admin/users">จัดการผู้ใช้ทั้งหมด →</a>
          </p>
        </Card>
        <Card title="ระบบ">
          <dl class="dl">
            <dt>uptime</dt>
            <dd safe>{fmtUptime(process.uptime())}</dd>
            <dt>request ที่กำลังทำ</dt>
            <dd safe>{String(app.inflight)}</dd>
            <dt>process</dt>
            <dd safe>{`pid ${process.pid} · worker ${process.env.WORKER_ID ?? 0}`}</dd>
            <dt>โหมด</dt>
            <dd safe>{process.env.NODE_ENV ?? 'development'}</dd>
          </dl>
          <p class="muted small">รายละเอียดเพิ่มเติม: <code>/api/admin/system</code> (x-api-key) · <code>/metrics</code> เมื่อ METRICS=1</p>
        </Card>
        <Card title="ทางลัด">
          <ul>
            {has('cms') ? (
              <li>
                <a href="/admin/cms">จัดการเนื้อหา (CMS)</a>
              </li>
            ) : (
              ''
            )}
            {has('uploads') ? (
              <li>
                <a href="/admin/media">คลังไฟล์</a>
              </li>
            ) : (
              ''
            )}
            {has('contact') ? (
              <li>
                <a href="/admin/messages">ข้อความจากฟอร์มติดต่อ</a>
              </li>
            ) : (
              ''
            )}
            <li>
              <a href="/account">บัญชีของฉัน</a>
            </li>
          </ul>
        </Card>
      </div>
    </>
  )
}
