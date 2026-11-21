// CMS: markdown ปลอดภัย, ข้อมูล (slug/ร่าง/ประวัติ/แท็ก), หน้าสาธารณะ + cache, หลังบ้านและสิทธิ์, RSS/sitemap/API
import { describe, expect, it } from 'bun:test'
import { createApp } from '../core/app'
import { createAccount } from '../src/lib/auth'
import { allTags, countEntries, createEntry, deleteEntry, getBySlug, listEntries, restoreRevision, revisions, updateEntry, uniqueSlug } from '../src/lib/cms'
import { plainText, renderMarkdown, slugify } from '../src/lib/markdown'

const { app } = await createApp()
const request = (path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))
const form = (path: string, fields: Record<string, string>, headers: Record<string, string> = {}) =>
  request(path, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', ...headers }, body: new URLSearchParams(fields) })
const cookieOf = (res: Response) => res.headers.getSetCookie().map((c) => c.split(';')[0]!).filter((c) => !c.endsWith('=')).join('; ')

let n = 0
const uniq = (p: string) => `${p}-${Date.now()}-${++n}`
async function loginAs(role: 'admin' | 'editor' | 'user') {
  const email = `${uniq(role)}@example.com`
  await createAccount({ email, name: role, password: 'password-1234' }, { role })
  return cookieOf(await form('/login', { email, password: 'password-1234' }))
}

describe('markdown (ปลอดภัยจาก XSS)', () => {
  const md = (s: string) => String(renderMarkdown(s))

  it('HTML ดิบถูก escape ทั้งหมด', () => {
    const html = md('<script>alert(1)</script> <img src=x onerror=alert(1)> **ok**')
    expect(html).not.toContain('<script')
    expect(html).not.toContain('<img')
    expect(html).toContain('&lt;script&gt;')
    expect(html).toContain('<strong>ok</strong>')
  })

  it('ลิงก์/รูปรับเฉพาะ URL ที่ปลอดภัย', () => {
    for (const evil of ['javascript:alert(1)', 'JaVaScRiPt:alert(1)', 'data:text/html;base64,xxx', '//evil.example/x', 'vbscript:x', ' javascript:alert(1)']) {
      expect(md(`[คลิก](${evil})`)).not.toContain('<a ')
      expect(md(`![x](${evil})`)).not.toContain('<img')
    }
    expect(md('[ok](https://example.com/a?b=1&c=2)')).toContain('<a href="https://example.com/a?b=1&amp;c=2" target="_blank" rel="noopener noreferrer nofollow ugc">ok</a>')
    expect(md('[in](/blog/x)')).toContain('<a href="/blog/x">in</a>')
    expect(md('[m](mailto:a@b.co)')).toContain('href="mailto:a@b.co"')
    expect(md('![alt](/public/a.png)')).toContain('<img src="/public/a.png" alt="alt" loading="lazy">')
  })

  it('ฉีด attribute ผ่านลิงก์/alt ไม่ได้', () => {
    expect(md('[a](https://x.com/"onmouseover="alert(1))')).not.toContain('onmouseover="alert')
    expect(md('![a" onerror="alert(1)](/x.png)')).not.toContain('onerror="alert')
  })

  it('บล็อกต่างๆ: หัวข้อ(id), ย่อหน้า, รายการ, อ้างอิง, เส้นคั่น, โค้ด', () => {
    const html = md('# หัวข้อ ไทย\n\nย่อหน้า *เอียง* และ ~~ลบ~~ กับ `code <b>`\n\n- a\n- b\n\n1. x\n2. y\n\n> คำคม\n\n---\n\n```ts\nconst a = "<x>"\n```')
    expect(html).toContain('<h1 id="หัวข้อ-ไทย">หัวข้อ ไทย</h1>')
    expect(html).toContain('<em>เอียง</em>')
    expect(html).toContain('<del>ลบ</del>')
    expect(html).toContain('<code>code &lt;b&gt;</code>')
    expect(html).toContain('<ul>\n<li>a</li>\n<li>b</li>\n</ul>')
    expect(html).toContain('<ol>\n<li>x</li>\n<li>y</li>\n</ol>')
    expect(html).toContain('<blockquote>\n<p>คำคม</p>\n</blockquote>')
    expect(html).toContain('<hr>')
    expect(html).toContain('<pre><code class="lang-ts">const a = &quot;&lt;x&gt;&quot;</code></pre>')
  })

  it('หัวข้อซ้ำได้ id ไม่ซ้ำ · markdown ใน code ไม่ถูกแปลง', () => {
    const html = md('## A\n\n## A\n\n`**x**`')
    expect(html).toContain('id="a"')
    expect(html).toContain('id="a-1"')
    expect(html).toContain('<code>**x**</code>')
  })

  it('plainText / slugify', () => {
    expect(plainText('# หัวข้อ\n\nข้อความ **หนา** [ลิงก์](/x) ![img](/y)\n\n```\ncode\n```', 100)).toBe('หัวข้อ ข้อความ หนา ลิงก์')
    expect(plainText('x'.repeat(300), 50)).toHaveLength(50)
    expect(slugify('  Hello, World!  ')).toBe('hello-world')
    expect(slugify('สวัสดี โลก')).toBe('สวัสดี-โลก')
    expect(slugify('!!!')).toBe('section')
  })
})

describe('ข้อมูล CMS', () => {
  it('slug สร้างจากชื่อและไม่ซ้ำภายใน kind เดียวกัน · ต่าง kind ใช้ซ้ำได้', () => {
    const title = uniq('Same Title')
    const a = createEntry({ kind: 'post', title })
    const b = createEntry({ kind: 'post', title })
    const c = createEntry({ kind: 'page', title })
    expect(b.slug).toBe(`${a.slug}-2`)
    expect(c.slug).toBe(a.slug)
    expect(uniqueSlug('post', title)).toBe(`${a.slug}-3`)
  })

  it('ร่างไม่ถูกเผย · เผยแพร่แล้วมี published_at ตั้งครั้งเดียว', () => {
    const e = createEntry({ kind: 'post', title: uniq('Draft'), body: 'x' })
    expect(e.status).toBe('draft')
    expect(e.published_at).toBeNull()
    expect(getBySlug('post', e.slug)).toBeNull()
    expect(getBySlug('post', e.slug, false)?.id).toBe(e.id)
    const pub = updateEntry(e.id, { status: 'published' })
    expect(pub.published_at).toBeGreaterThan(0)
    expect(getBySlug('post', e.slug)?.id).toBe(e.id)
    const again = updateEntry(e.id, { title: 'เปลี่ยนชื่อ' })
    expect(again.published_at).toBe(pub.published_at)
    expect(updateEntry(e.id, { status: 'draft' }).published_at).toBe(pub.published_at)
  })

  it('ตรวจชื่อเรื่อง · ไม่พบรายการ', () => {
    expect(() => createEntry({ kind: 'post', title: '   ' })).toThrow()
    expect(() => createEntry({ kind: 'post', title: 'x'.repeat(201) })).toThrow()
    expect(() => updateEntry(999_999, { title: 'x' })).toThrow()
  })

  it('ประวัติ: เก็บฉบับก่อนหน้าเมื่อแก้ · ย้อนกลับได้ · เก็บไม่เกิน 20', () => {
    const e = createEntry({ kind: 'post', title: 'v0', body: 'body0' })
    updateEntry(e.id, { body: 'body1' }, 5)
    updateEntry(e.id, { body: 'body2' })
    expect(revisions(e.id).map((r) => r.body)).toEqual(['body1', 'body0'])
    expect(revisions(e.id).map((r) => r.author_id)).toEqual([null, 5]) // ผู้ที่แก้ทับฉบับนั้น
    updateEntry(e.id, { tags: 'a' }) // แก้แท็กอย่างเดียวไม่สร้างประวัติ
    expect(revisions(e.id)).toHaveLength(2)

    const target = revisions(e.id).find((r) => r.body === 'body0')!
    const restored = restoreRevision(e.id, target.id)
    expect(restored.body).toBe('body0')
    expect(revisions(e.id)[0]!.body).toBe('body2') // ฉบับก่อนย้อนถูกเก็บไว้

    for (let i = 0; i < 30; i++) updateEntry(e.id, { body: `loop${i}` })
    expect(revisions(e.id)).toHaveLength(20)
    expect(() => restoreRevision(e.id, 999_999)).toThrow()
  })

  it('ค้นหา/กรองสถานะ/แท็ก/ประเภท · แท็กถูก normalize', () => {
    const token = uniq('needle')
    const a = createEntry({ kind: 'post', title: `A ${token}`, status: 'published', tags: ' Foo Bar , foo bar,BAZ ' })
    createEntry({ kind: 'post', title: `B ${token}`, status: 'draft', body: `มี ${token} ในเนื้อหา` })
    createEntry({ kind: 'page', title: `C ${token}`, status: 'published' })
    expect(a.tags).toEqual(['foo-bar', 'baz'])
    expect(listEntries({ q: token, limit: 50 })).toHaveLength(3)
    expect(listEntries({ q: token, status: 'published', limit: 50 })).toHaveLength(2)
    expect(listEntries({ q: token, kind: 'page', limit: 50 })).toHaveLength(1)
    expect(countEntries({ q: token, kind: 'post' })).toBe(2)
    expect(listEntries({ tag: 'foo-bar', limit: 50 }).some((e) => e.id === a.id)).toBe(true)
    expect(listEntries({ q: '100%_', limit: 5 })).toEqual([]) // อักขระพิเศษของ LIKE ถูก escape
    expect(allTags().some((t) => t.tag === 'baz')).toBe(true)
  })

  it('ลบรายการแล้วประวัติหายด้วย', () => {
    const e = createEntry({ kind: 'post', title: uniq('del'), body: 'a' })
    updateEntry(e.id, { body: 'b' })
    expect(deleteEntry(e.id)).toBe(true)
    expect(revisions(e.id)).toEqual([])
    expect(deleteEntry(e.id)).toBe(false)
  })
})

describe('หน้าสาธารณะ', () => {
  it('/blog แสดงเฉพาะที่เผยแพร่ · /blog/:slug 404 สำหรับร่าง · หน้า /p/:slug', async () => {
    const pub = createEntry({ kind: 'post', title: uniq('สาธารณะ'), status: 'published', body: '## หัวข้อย่อย\n\nเนื้อหา' })
    const draft = createEntry({ kind: 'post', title: uniq('ลับ'), status: 'draft' })
    const page = createEntry({ kind: 'page', title: uniq('หน้า'), status: 'published', slug: uniq('pg'), body: 'ข้อความหน้า' })

    const list = await (await request('/blog')).text()
    expect(list).toContain(pub.title)
    expect(list).not.toContain(draft.title)

    const one = await request(`/blog/${encodeURIComponent(pub.slug)}`)
    expect(one.status).toBe(200)
    const html = await one.text()
    expect(html).toContain(`<title>${pub.title} · `)
    expect(html).toContain('<h2 id="หัวข้อย่อย">หัวข้อย่อย</h2>')
    expect((await request(`/blog/${encodeURIComponent(draft.slug)}`)).status).toBe(404)
    expect(await (await request(`/p/${encodeURIComponent(page.slug)}`)).text()).toContain('ข้อความหน้า')
    expect((await request('/p/ไม่มีหน้านี้')).status).toBe(404)
  })

  it('ชื่อเรื่องที่มี HTML ถูก escape ในทุกที่ (รายการ, หน้า, title, RSS)', async () => {
    const evil = createEntry({ kind: 'post', title: `<img src=x onerror=alert(1)>${uniq('t')}`, status: 'published', body: '<script>alert(1)</script>' })
    const list = await (await request('/blog')).text()
    expect(list).not.toContain('<img src=x onerror')
    const page = await (await request(`/blog/${encodeURIComponent(evil.slug)}`)).text()
    expect(page).not.toContain('<script>alert(1)')
    expect(page).not.toContain('<img src=x onerror')
    expect(await (await request('/blog/feed.xml')).text()).not.toContain('<img src=x')
  })

  it('cache: ครั้งแรก MISS → HIT · แก้ผ่านหลังบ้านแล้วล้างทันที (ไม่ต้องรอ ttl)', async () => {
    const e = createEntry({ kind: 'post', title: uniq('cached'), status: 'published', body: 'ฉบับแรก' })
    const url = `/blog/${encodeURIComponent(e.slug)}`
    await request(url)
    const hit = await request(url)
    expect(hit.headers.get('x-cache')).toBe('HIT')
    expect(hit.headers.get('cache-control')).toContain('must-revalidate')
    expect(await hit.text()).toContain('ฉบับแรก')

    const cookie = await loginAs('editor')
    const save = await form(`/admin/cms/${e.id}`, { title: e.title, slug: e.slug, status: 'published', tags: '', body: 'ฉบับที่สอง' }, { cookie })
    expect(save.headers.get('location')).toBe(`/admin/cms/${e.id}?saved=1`)
    const after = await request(url)
    expect(after.headers.get('x-cache')).toBe('MISS')
    expect(await after.text()).toContain('ฉบับที่สอง')
  })

  it('RSS + sitemap: โครงสร้างถูกต้อง มีเฉพาะที่เผยแพร่', async () => {
    const e = createEntry({ kind: 'post', title: uniq('rss & <more>'), status: 'published', body: 'x' })
    const hidden = createEntry({ kind: 'post', title: uniq('hidden-draft'), status: 'draft' })
    const rss = await request('/blog/feed.xml')
    expect(rss.headers.get('content-type')).toContain('application/rss+xml')
    const xml = await rss.text()
    expect(xml.startsWith('<?xml')).toBe(true)
    expect(xml).toContain('rss &amp; &lt;more&gt;')
    expect(xml).toContain(`/blog/${encodeURIComponent(e.slug)}`)
    expect(xml).not.toContain(hidden.slug)

    const map = await (await request('/sitemap.xml')).text()
    expect(map).toContain('<urlset')
    expect(map).toContain(encodeURIComponent(e.slug))
    expect(map).not.toContain(encodeURIComponent(hidden.slug))
  })

  it('JSON API: รายการ/รายตัว · ร่าง 404 · ไม่ส่ง body ในรายการ', async () => {
    const e = createEntry({ kind: 'post', title: uniq('api'), status: 'published', body: '**หนา**' })
    const list = await (await request('/api/cms/posts?limit=50')).json()
    expect(list.total).toBeGreaterThan(0)
    expect(list.items.some((x: any) => x.id === e.id)).toBe(true)
    expect(list.items[0]).not.toHaveProperty('body')
    const one = await (await request(`/api/cms/posts/${encodeURIComponent(e.slug)}`)).json()
    expect(one.html).toContain('<strong>หนา</strong>')
    const draft = createEntry({ kind: 'post', title: uniq('apidraft') })
    expect((await request(`/api/cms/posts/${encodeURIComponent(draft.slug)}`)).status).toBe(404)
  })
})

describe('หลังบ้านและสิทธิ์', () => {
  it('ไม่ login → /login · user ธรรมดา → 403 · editor/admin เข้าได้', async () => {
    const anon = await request('/admin/cms')
    expect(anon.status).toBe(302)
    expect(anon.headers.get('location')).toBe('/login?next=%2Fadmin%2Fcms')
    expect((await request('/admin/cms', { headers: { cookie: await loginAs('user') } })).status).toBe(403)
    expect((await request('/admin/cms', { headers: { cookie: await loginAs('editor') } })).status).toBe(200)
    expect((await request('/admin/cms/new', { headers: { cookie: await loginAs('admin') } })).status).toBe(200)
  })

  it('POST จาก user ธรรมดาถูกปฏิเสธ (ไม่ใช่แค่ซ่อนหน้า)', async () => {
    const cookie = await loginAs('user')
    const before = countEntries()
    const res = await form('/admin/cms/new', { title: 'แอบสร้าง', kind: 'post' }, { cookie })
    expect(res.status).toBe(403)
    expect(countEntries()).toBe(before)
    expect((await form('/admin/cms/preview', { body: 'x' }, { cookie })).status).toBe(403)
  })

  it('สร้าง → แก้ → ย้อนกลับ → ลบ ผ่านฟอร์ม', async () => {
    const cookie = await loginAs('editor')
    const title = uniq('ผ่านฟอร์ม')
    const created = await form('/admin/cms/new', { title, kind: 'post', status: 'published', tags: 'ทดสอบ, cms', body: 'ฉบับ 1' }, { cookie })
    const id = Number(/\/admin\/cms\/(\d+)\?saved=1/.exec(created.headers.get('location')!)![1])
    expect(getBySlug('post', slugify(title))?.tags).toEqual(['ทดสอบ', 'cms'])

    const editPage = await (await request(`/admin/cms/${id}`, { headers: { cookie } })).text()
    expect(editPage).toContain('ฉบับ 1')
    expect(editPage).toContain('hx-post="/admin/cms/preview"')

    await form(`/admin/cms/${id}`, { title, status: 'published', body: 'ฉบับ 2' }, { cookie })
    const rev = revisions(id)[0]!
    expect(rev.body).toBe('ฉบับ 1')
    const restore = await form(`/admin/cms/${id}/_/restore?rev=${rev.id}`, {}, { cookie })
    expect(restore.headers.get('location')).toBe(`/admin/cms/${id}?saved=1`)
    expect((await request(`/blog/${encodeURIComponent(slugify(title))}`)).status).toBe(200)

    const del = await form(`/admin/cms/${id}/_/delete`, {}, { cookie })
    expect(del.headers.get('location')).toBe('/admin/cms')
    expect(getBySlug('post', slugify(title))).toBeNull()
    expect((await request(`/admin/cms/${id}`, { headers: { cookie } })).status).toBe(404)
  })

  it('ชื่อว่างถูกปฏิเสธพร้อมข้อความ · รายการ + ค้นหาในหลังบ้านใช้ได้ · พรีวิวสดแปลง markdown', async () => {
    const cookie = await loginAs('admin')
    expect((await form('/admin/cms/new', { title: '  ', kind: 'post' }, { cookie })).headers.get('location')).toBe('/admin/cms/new?error=1')
    const e = createEntry({ kind: 'post', title: uniq('หาเจอ') })
    const list = await (await request(`/admin/cms?q=${encodeURIComponent(e.title)}&status=draft`, { headers: { cookie } })).text()
    expect(list).toContain(`/admin/cms/${e.id}`)
    const prev = await (await form('/admin/cms/preview', { body: '# ชื่อ\n\n<script>x</script> **b**' }, { cookie })).text()
    expect(prev).toContain('<h1 id="ชื่อ">ชื่อ</h1>')
    expect(prev).not.toContain('<script>')
    expect(prev).toContain('<strong>b</strong>')
  })
})
