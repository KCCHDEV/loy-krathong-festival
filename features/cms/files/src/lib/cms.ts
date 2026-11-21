/**
 * ข้อมูล CMS: บทความ (post) และหน้า (page) ใน SQLite + ประวัติการแก้ไข
 *
 * แก้ข้อมูลแล้วเรียก revalidateTag('cms') (หน้าเว็บ/ RSS ที่ cache ไว้ถูกล้างทันที) — ฟังก์ชันใน src/pages/admin/cms ทำให้แล้ว
 */
import { db } from './db'
import { plainText, slugify } from './markdown'

export type Kind = 'post' | 'page'
export type Status = 'draft' | 'published'
export type Entry = {
  id: number
  kind: Kind
  slug: string
  title: string
  body: string
  excerpt: string
  status: Status
  tags: string[]
  author_id: number | null
  created_at: number
  updated_at: number
  published_at: number | null
}
type Row = Omit<Entry, 'tags'> & { tags: string }
export type Revision = { id: number; entry_id: number; title: string; body: string; author_id: number | null; created_at: number }

export class CmsError extends Error {
  constructor(readonly code: 'invalid-title' | 'invalid-slug' | 'not-found' | 'invalid-kind') {
    super(code)
  }
}

db.exec(`
  CREATE TABLE IF NOT EXISTS cms_entries (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    kind         TEXT NOT NULL,
    slug         TEXT NOT NULL,
    title        TEXT NOT NULL,
    body         TEXT NOT NULL DEFAULT '',
    excerpt      TEXT NOT NULL DEFAULT '',
    status       TEXT NOT NULL DEFAULT 'draft',
    tags         TEXT NOT NULL DEFAULT '',
    author_id    INTEGER,
    created_at   INTEGER NOT NULL,
    updated_at   INTEGER NOT NULL,
    published_at INTEGER,
    UNIQUE (kind, slug)
  );
  CREATE INDEX IF NOT EXISTS cms_entries_list ON cms_entries (kind, status, published_at DESC);
  CREATE TABLE IF NOT EXISTS cms_revisions (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    entry_id   INTEGER NOT NULL REFERENCES cms_entries(id) ON DELETE CASCADE,
    title      TEXT NOT NULL,
    body       TEXT NOT NULL,
    author_id  INTEGER,
    created_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS cms_revisions_entry ON cms_revisions (entry_id, id DESC);
`)

const MAX_REVISIONS = 20

// tags เก็บเป็น ",a,b," เพื่อค้นด้วย LIKE '%,a,%' ได้แม่น
const packTags = (tags: string[]) => (tags.length ? `,${tags.join(',')},` : '')
const unpackTags = (s: string) => s.split(',').filter(Boolean)
const cleanTags = (tags: string[] | string | undefined): string[] => {
  const list = typeof tags === 'string' ? tags.split(/[,\n]/) : (tags ?? [])
  return [...new Set(list.map((t) => t.trim().toLowerCase().replace(/[,\s]+/g, '-')).filter((t) => t && t.length <= 40))].slice(0, 12)
}
const toEntry = (r: Row): Entry => ({ ...r, tags: unpackTags(r.tags) })

const q = {
  byId: db.query<Row, [number]>('SELECT * FROM cms_entries WHERE id = ?'),
  bySlug: db.query<Row, [string, string]>('SELECT * FROM cms_entries WHERE kind = ? AND slug = ?'),
  slugTaken: db.query<{ id: number }, [string, string, number]>('SELECT id FROM cms_entries WHERE kind = ? AND slug = ? AND id != ?'),
  insert: db.query<Row, [string, string, string, string, string, string, string, number | null, number, number, number | null]>(
    'INSERT INTO cms_entries (kind, slug, title, body, excerpt, status, tags, author_id, created_at, updated_at, published_at) VALUES (?,?,?,?,?,?,?,?,?,?,?) RETURNING *',
  ),
  update: db.query('UPDATE cms_entries SET slug=?, title=?, body=?, excerpt=?, status=?, tags=?, updated_at=?, published_at=? WHERE id=?'),
  delete: db.query('DELETE FROM cms_entries WHERE id = ?'),
  deleteRevs: db.query('DELETE FROM cms_revisions WHERE entry_id = ?'),
  addRev: db.query('INSERT INTO cms_revisions (entry_id, title, body, author_id, created_at) VALUES (?,?,?,?,?)'),
  trimRev: db.query('DELETE FROM cms_revisions WHERE entry_id = ? AND id NOT IN (SELECT id FROM cms_revisions WHERE entry_id = ? ORDER BY id DESC LIMIT ?)'),
  revs: db.query<Revision, [number]>('SELECT * FROM cms_revisions WHERE entry_id = ? ORDER BY id DESC'),
  rev: db.query<Revision, [number, number]>('SELECT * FROM cms_revisions WHERE id = ? AND entry_id = ?'),
  tagRows: db.query<{ tags: string }, []>("SELECT tags FROM cms_entries WHERE kind = 'post' AND status = 'published' AND tags != ''"),
}

/** slug ที่ไม่ซ้ำภายใน kind เดียวกัน: ชื่อ → my-title, ซ้ำ → my-title-2, -3 … */
export function uniqueSlug(kind: Kind, wanted: string, ignoreId = 0): string {
  const base = slugify(wanted)
  let slug = base
  for (let n = 2; q.slugTaken.get(kind, slug, ignoreId); n++) slug = `${base}-${n}`
  return slug
}

export type EntryInput = { kind: Kind; title: string; body?: string; slug?: string; status?: Status; tags?: string[] | string; authorId?: number | null }

export function createEntry(input: EntryInput): Entry {
  const title = input.title.trim()
  if (!title || title.length > 200) throw new CmsError('invalid-title')
  if (input.kind !== 'post' && input.kind !== 'page') throw new CmsError('invalid-kind')
  const body = input.body ?? ''
  const status = input.status ?? 'draft'
  const now = Date.now()
  const slug = uniqueSlug(input.kind, input.slug?.trim() || title)
  const row = q.insert.get(input.kind, slug, title, body, plainText(body), status, packTags(cleanTags(input.tags)), input.authorId ?? null, now, now, status === 'published' ? now : null)!
  return toEntry(row)
}

export type EntryPatch = Partial<Pick<EntryInput, 'title' | 'body' | 'slug' | 'status' | 'tags'>>

/** แก้ไข · ถ้าเนื้อหาหรือชื่อเปลี่ยน เก็บฉบับก่อนหน้าไว้ในประวัติ (ย้อนกลับได้) · published_at ตั้งตอนเผยแพร่ครั้งแรก */
export function updateEntry(id: number, patch: EntryPatch, authorId: number | null = null): Entry {
  const cur = q.byId.get(id)
  if (!cur) throw new CmsError('not-found')
  const title = patch.title !== undefined ? patch.title.trim() : cur.title
  if (!title || title.length > 200) throw new CmsError('invalid-title')
  const body = patch.body ?? cur.body
  const status = patch.status ?? cur.status
  const slug = patch.slug !== undefined && patch.slug.trim() ? uniqueSlug(cur.kind, patch.slug, id) : cur.slug
  const now = Date.now()

  if (title !== cur.title || body !== cur.body) {
    q.addRev.run(id, cur.title, cur.body, authorId, now)
    q.trimRev.run(id, id, MAX_REVISIONS)
  }
  const publishedAt = status === 'published' ? (cur.published_at ?? now) : cur.published_at
  q.update.run(slug, title, body, plainText(body), status, patch.tags !== undefined ? packTags(cleanTags(patch.tags)) : cur.tags, now, publishedAt, id)
  return toEntry(q.byId.get(id)!)
}

/** ลบรายการพร้อมประวัติ (ลบเองในธุรกรรมเดียว ไม่พึ่ง PRAGMA foreign_keys ของไฟล์ db.ts) */
export const deleteEntry = db.transaction((id: number): boolean => {
  q.deleteRevs.run(id)
  return q.delete.run(id).changes > 0
})

export const getById = (id: number): Entry | null => {
  const r = q.byId.get(id)
  return r ? toEntry(r) : null
}

/** publishedOnly = true สำหรับหน้าสาธารณะ (ร่างไม่ถูกเผย) */
export function getBySlug(kind: Kind, slug: string, publishedOnly = true): Entry | null {
  const r = q.bySlug.get(kind, slug)
  return r && (!publishedOnly || r.status === 'published') ? toEntry(r) : null
}

export type ListOptions = { kind?: Kind; status?: Status; q?: string; tag?: string; limit?: number; offset?: number }

function where(o: ListOptions) {
  const conds: string[] = []
  const args: (string | number)[] = []
  if (o.kind) (conds.push('kind = ?'), args.push(o.kind))
  if (o.status) (conds.push('status = ?'), args.push(o.status))
  if (o.q) {
    conds.push("(title LIKE ? ESCAPE '\\' OR body LIKE ? ESCAPE '\\')")
    const like = `%${o.q.replace(/[\\%_]/g, '\\$&')}%`
    args.push(like, like)
  }
  if (o.tag) (conds.push('tags LIKE ?'), args.push(`%,${cleanTags([o.tag])[0] ?? ''},%`))
  return { sql: conds.length ? `WHERE ${conds.join(' AND ')}` : '', args }
}

export function listEntries(o: ListOptions = {}): Entry[] {
  const { sql, args } = where(o)
  const order = o.status === 'published' ? 'published_at DESC, id DESC' : 'updated_at DESC, id DESC'
  const rows = db.query<Row, any[]>(`SELECT * FROM cms_entries ${sql} ORDER BY ${order} LIMIT ? OFFSET ?`).all(...args, o.limit ?? 20, o.offset ?? 0)
  return rows.map(toEntry)
}

export function countEntries(o: ListOptions = {}): number {
  const { sql, args } = where(o)
  return db.query<{ n: number }, any[]>(`SELECT COUNT(*) AS n FROM cms_entries ${sql}`).get(...args)!.n
}

export const revisions = (entryId: number): Revision[] => q.revs.all(entryId)

/** ย้อนเนื้อหากลับไปฉบับที่เลือก (ฉบับปัจจุบันถูกเก็บเข้าประวัติก่อน) */
export function restoreRevision(entryId: number, revisionId: number, authorId: number | null = null): Entry {
  const rev = q.rev.get(revisionId, entryId)
  if (!rev) throw new CmsError('not-found')
  return updateEntry(entryId, { title: rev.title, body: rev.body }, authorId)
}

/** แท็กของบทความที่เผยแพร่ พร้อมจำนวน (มากไปน้อย) */
export function allTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const { tags } of q.tagRows.all()) for (const t of unpackTags(tags)) counts.set(t, (counts.get(t) ?? 0) + 1)
  return [...counts].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

// ───── ข้อมูลตัวอย่างตอนยังว่าง ─────
if (countEntries() === 0) {
  createEntry({
    kind: 'post',
    title: 'ยินดีต้อนรับสู่บล็อกของคุณ',
    status: 'published',
    tags: 'ประกาศ',
    body: `# สวัสดี!

นี่คือบทความตัวอย่าง เขียนด้วย **markdown** — แก้หรือลบได้ที่ [หลังบ้าน](/admin/cms)

## ทำอะไรได้บ้าง

- เขียนบทความและหน้าเว็บ พร้อมพรีวิวสด
- เก็บเป็น *ร่าง* ก่อนแล้วค่อยเผยแพร่
- ประวัติการแก้ไข ย้อนกลับได้
- RSS (\`/blog/feed.xml\`) และ sitemap ให้อัตโนมัติ
`,
  })
  createEntry({ kind: 'page', title: 'เกี่ยวกับเรา', status: 'published', slug: 'about', body: '## เกี่ยวกับเรา\n\nแก้ข้อความหน้านี้ที่ /admin/cms' })
}
