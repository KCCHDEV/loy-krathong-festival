// /account — โปรไฟล์ + เปลี่ยนรหัสผ่าน + ออกจากระบบ
import type { RouteContext } from '@core/route'
import { Card, Button, PageHeader } from '@components'
import { authMessages, type Account } from '../../lib/auth'

export const metadata = { title: 'บัญชีของฉัน', path: '/account' }

export default function AccountPage(ctx: RouteContext) {
  const user = ctx.user as Account
  const error = ctx.query.error ? (authMessages[ctx.query.error] ?? 'เกิดข้อผิดพลาด') : ''
  const ok = ctx.query.saved === '1'
  return (
    <>
      <PageHeader title="บัญชีของฉัน" lead={`เข้าสู่ระบบในชื่อ ${user.name}`} />
      <div class="grid">
        <Card title="ข้อมูลบัญชี">
          <dl class="dl">
            <dt>ชื่อ</dt>
            <dd safe>{user.name}</dd>
            <dt>อีเมล</dt>
            <dd safe>{user.email}</dd>
            <dt>บทบาท</dt>
            <dd safe>{user.role}</dd>
            <dt>สมัครเมื่อ</dt>
            <dd safe>{new Date(user.created_at).toLocaleString('th-TH')}</dd>
          </dl>
          <form method="post" action="/logout">
            <Button type="submit" variant="ghost">
              ออกจากระบบ
            </Button>
          </form>
        </Card>
        <Card title="เปลี่ยนรหัสผ่าน">
          {error ? <div class="alert alert-error" role="alert" safe>{error}</div> : ''}
          {ok ? <div class="alert alert-ok" role="status">เปลี่ยนรหัสผ่านแล้ว</div> : ''}
          <form method="post" action="/account/password" class="stack">
            <label>
              รหัสผ่านปัจจุบัน
              <input name="current" type="password" required autocomplete="current-password" />
            </label>
            <label>
              รหัสผ่านใหม่ (อย่างน้อย 8 ตัวอักษร)
              <input name="next" type="password" required minlength="8" autocomplete="new-password" />
            </label>
            <Button type="submit">บันทึก</Button>
          </form>
        </Card>
      </div>
    </>
  )
}
