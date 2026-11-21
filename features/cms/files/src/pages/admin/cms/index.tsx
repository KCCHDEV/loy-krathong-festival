// /admin/cms — รายการบทความและหน้าทั้งหมด (รวมร่าง) · ค้นหา/กรอง
import type { RouteContext } from '@core/route'
import { Card, PageHeader } from '@components'
import { countEntries, listEntries, type Kind, type Status } from '../../../lib/cms'

export const metadata = { title: 'จัดการเนื้อหา', path: '/admin' }

const PAGE_SIZE = 25
const kinds = ['post', 'page']
const statuses = ['draft', 'published']
const date = (ms: number) => new Date(ms).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' })

export default function CmsList({ query }: RouteContext) {
  const kind = kinds.includes(query.kind ?? '') ? (query.kind as Kind) : undefined
  const status = statuses.includes(query.status ?? '') ? (query.status as Status) : undefined
  const q = query.q?.slice(0, 100) || undefined
  const page = Math.max(1, Math.floor(Number(query.page)) || 1)
  const opts = { kind, status, q }
  const rows = listEntries({ ...opts, limit: PAGE_SIZE, offset: (page - 1) * PAGE_SIZE })
  const total = countEntries(opts)
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const link = (p: number) => `/admin/cms?${new URLSearchParams({ ...(kind ? { kind } : {}), ...(status ? { status } : {}), ...(q ? { q } : {}), page: String(p) })}`

  return (
    <>
      <PageHeader title="จัดการเนื้อหา" lead={`${total} รายการ`}>
        <p>
          <a class="btn btn-primary" href="/admin/cms/new">
            เขียนใหม่
          </a>{' '}
          <a class="btn btn-outline" href="/blog">
            ดูหน้าเว็บ
          </a>
        </p>
      </PageHeader>
      <Card>
        <form method="get" action="/admin/cms" class="form">
          <input name="q" placeholder="ค้นหาชื่อ/เนื้อหา" value={q ?? ''} />
          <select name="kind">
            <option value="">ทุกประเภท</option>
            <option value="post" selected={kind === 'post' ? true : undefined}>
              บทความ
            </option>
            <option value="page" selected={kind === 'page' ? true : undefined}>
              หน้า
            </option>
          </select>
          <select name="status">
            <option value="">ทุกสถานะ</option>
            <option value="draft" selected={status === 'draft' ? true : undefined}>
              ร่าง
            </option>
            <option value="published" selected={status === 'published' ? true : undefined}>
              เผยแพร่
            </option>
          </select>
          <button class="btn btn-outline" type="submit">
            กรอง
          </button>
        </form>
        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>ชื่อเรื่อง</th>
                <th>ประเภท</th>
                <th>สถานะ</th>
                <th>แก้ไขล่าสุด</th>
              </tr>
            </thead>
            <tbody>
              {rows.length ? (
                rows.map((e) => (
                  <tr>
                    <td>
                      <a href={`/admin/cms/${e.id}`} safe>
                        {e.title}
                      </a>
                      <div class="muted small" safe>{e.slug}</div>
                    </td>
                    <td safe>{e.kind === 'post' ? 'บทความ' : 'หน้า'}</td>
                    <td>
                      <span class={e.status === 'published' ? 'badge badge-ok' : 'badge'} safe>
                        {e.status === 'published' ? 'เผยแพร่' : 'ร่าง'}
                      </span>
                    </td>
                    <td class="muted" safe>{date(e.updated_at)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colspan="4" class="muted">
                    ไม่พบรายการ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {pages > 1 ? (
          <nav class="pager">
            {page > 1 ? <a href={link(page - 1)}>← ก่อนหน้า</a> : ''}
            <span class="muted" safe>{`หน้า ${page} / ${pages}`}</span>
            {page < pages ? <a href={link(page + 1)}>ถัดไป →</a> : ''}
          </nav>
        ) : (
          ''
        )}
      </Card>
    </>
  )
}
