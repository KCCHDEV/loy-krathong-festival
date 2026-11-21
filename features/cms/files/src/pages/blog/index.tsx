// /blog — รายการบทความที่เผยแพร่ (cache + ล้างอัตโนมัติเมื่อแก้ผ่านหลังบ้าน) · ?tag=ชื่อ · ?page=2
import type { RouteContext } from '@core/route'
import { PageHeader } from '@components'
import { allTags, countEntries, listEntries } from '../../lib/cms'

export const cache = 60
export const swr = 300
export const cacheTags = ['cms']
export const metadata = { title: 'บล็อก', description: 'บทความทั้งหมด', path: '/blog' }

const PAGE_SIZE = 10
const date = (ms: number) => new Date(ms).toLocaleDateString('th-TH', { dateStyle: 'long' })

export default function Blog({ query }: RouteContext) {
  const page = Math.max(1, Math.floor(Number(query.page)) || 1)
  const tag = query.tag || undefined
  const opts = { kind: 'post', status: 'published', tag } as const
  const posts = listEntries({ ...opts, limit: PAGE_SIZE, offset: (page - 1) * PAGE_SIZE })
  const total = countEntries(opts)
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const link = (p: number) => `/blog?${new URLSearchParams({ ...(tag ? { tag } : {}), ...(p > 1 ? { page: String(p) } : {}) })}`.replace(/\?$/, '')

  return (
    <>
      <PageHeader title={tag ? `บทความแท็ก “${tag}”` : 'บล็อก'} lead={`${total} บทความ`} />
      <div class="blog-layout">
        <div class="stack">
          {posts.length ? (
            posts.map((p) => (
              <article class="card">
                <h2>
                  <a href={`/blog/${encodeURIComponent(p.slug)}`} safe>
                    {p.title}
                  </a>
                </h2>
                <p class="muted small" safe>{date(p.published_at ?? p.created_at)}</p>
                <p safe>{p.excerpt}</p>
                {p.tags.length ? (
                  <p class="tags">
                    {p.tags.map((t) => (
                      <a href={`/blog?tag=${encodeURIComponent(t)}`}>
                        <code safe>{t}</code>
                      </a>
                    ))}
                  </p>
                ) : (
                  ''
                )}
              </article>
            ))
          ) : (
            <p class="muted">ยังไม่มีบทความ</p>
          )}
          {pages > 1 ? (
            <nav class="pager" aria-label="หน้า">
              {page > 1 ? <a href={link(page - 1)}>← ใหม่กว่า</a> : ''}
              <span class="muted" safe>{`หน้า ${page} / ${pages}`}</span>
              {page < pages ? <a href={link(page + 1)}>เก่ากว่า →</a> : ''}
            </nav>
          ) : (
            ''
          )}
        </div>
        <aside class="card">
          <h2>แท็ก</h2>
          <p class="tags">
            {allTags().map((t) => (
              <a href={`/blog?tag=${encodeURIComponent(t.tag)}`}>
                <code safe>{`${t.tag} (${t.count})`}</code>
              </a>
            ))}
          </p>
          <p class="small">
            <a href="/blog/feed.xml" hx-boost="false">
              RSS
            </a>
          </p>
        </aside>
      </div>
    </>
  )
}
