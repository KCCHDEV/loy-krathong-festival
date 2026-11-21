// /admin/users — จัดการผู้ใช้: เปลี่ยนบทบาท / ระงับ-เปิดบัญชี
//   กันพลาด: เปลี่ยนบทบาท/ระงับตัวเองไม่ได้ และต้องเหลือ admin ที่ใช้งานได้อย่างน้อย 1 คนเสมอ
import { defineRoute, redirect, t, type RouteContext } from '@core/route'
import { Card, PageHeader } from '@components'
import { ROLES, findAccount, listAccounts, setDisabled, setRole, type Account, type Role } from '../../../../lib/auth'

export const metadata = { title: 'จัดการผู้ใช้', path: '/admin' }

const errors: Record<string, string> = {
  self: 'เปลี่ยนบทบาทหรือระงับบัญชีของตัวเองไม่ได้',
  'last-admin': 'ต้องเหลือแอดมินที่ใช้งานได้อย่างน้อย 1 คน',
  'not-found': 'ไม่พบผู้ใช้',
}
const date = (ms: number | null) => (ms ? new Date(ms).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : '—')

export default function UsersPage({ query, user }: RouteContext) {
  const me = user as Account
  const users = listAccounts(500)
  return (
    <>
      <PageHeader title="จัดการผู้ใช้" lead={`${users.length} บัญชี`} back={{ href: '/admin', label: 'หลังบ้าน' }} />
      {query.error ? <div class="alert alert-error" role="alert" safe>{errors[query.error] ?? 'เกิดข้อผิดพลาด'}</div> : ''}
      {query.saved ? <div class="alert alert-ok" role="status">บันทึกแล้ว</div> : ''}
      <Card>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>ชื่อ / อีเมล</th>
                <th>บทบาท</th>
                <th>เข้าล่าสุด</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr>
                  <td>
                    <strong safe>{u.name}</strong>
                    <div class="muted small" safe>{u.email}</div>
                  </td>
                  <td>
                    {u.id === me.id ? (
                      <span safe>{u.role} (คุณ)</span>
                    ) : (
                      <form method="post" action="/admin/users/_/role" class="form">
                        <input type="hidden" name="id" value={String(u.id)} />
                        <select name="role" aria-label={`บทบาทของ ${u.name}`}>
                          {ROLES.map((r) => (
                            <option value={r} selected={u.role === r ? true : undefined} safe>
                              {r}
                            </option>
                          ))}
                        </select>
                        <button class="btn btn-outline btn-sm" type="submit">
                          เปลี่ยน
                        </button>
                      </form>
                    )}
                  </td>
                  <td class="muted" safe>{date(u.last_login_at)}</td>
                  <td>
                    {u.id === me.id ? (
                      <span class="badge badge-ok">ใช้งาน</span>
                    ) : (
                      <form method="post" action="/admin/users/_/toggle">
                        <input type="hidden" name="id" value={String(u.id)} />
                        <input type="hidden" name="disabled" value={u.disabled ? '0' : '1'} />
                        <button class={u.disabled ? 'btn btn-outline btn-sm' : 'btn btn-ghost btn-sm'} type="submit">
                          {u.disabled ? 'เปิดบัญชี' : 'ระงับ'}
                        </button>
                        {u.disabled ? <span class="badge"> ถูกระงับ</span> : ''}
                      </form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  )
}

/** admin ที่ยังใช้งานได้ ถ้าไม่นับ id นี้ เหลือกี่คน */
const otherActiveAdmins = (excludeId: number) => listAccounts(10_000).filter((a) => a.role === 'admin' && !a.disabled && a.id !== excludeId).length

export const actions = {
  role: defineRoute({
    body: t.Object({ id: t.Numeric(), role: t.Union([t.Literal('admin'), t.Literal('editor'), t.Literal('user')]) }),
    handler: ({ body, user }) => {
      const target = findAccount(body.id)
      if (!target) return redirect('/admin/users?error=not-found')
      if (target.id === (user as Account).id) return redirect('/admin/users?error=self')
      if (target.role === 'admin' && body.role !== 'admin' && !otherActiveAdmins(target.id)) return redirect('/admin/users?error=last-admin')
      setRole(target.id, body.role as Role)
      return redirect('/admin/users?saved=1')
    },
  }),
  toggle: defineRoute({
    body: t.Object({ id: t.Numeric(), disabled: t.Union([t.Literal('0'), t.Literal('1')]) }),
    handler: ({ body, user }) => {
      const target = findAccount(body.id)
      if (!target) return redirect('/admin/users?error=not-found')
      if (target.id === (user as Account).id) return redirect('/admin/users?error=self')
      if (body.disabled === '1' && target.role === 'admin' && !otherActiveAdmins(target.id)) return redirect('/admin/users?error=last-admin')
      setDisabled(target.id, body.disabled === '1')
      return redirect('/admin/users?saved=1')
    },
  }),
}
