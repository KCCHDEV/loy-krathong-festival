/**
 * ที่เก็บ response cache ชั้นที่ 2 ด้วย SQLite — รอด restart และใช้ร่วมกันได้ทุก process (start:cluster)
 * เปิดด้วย  CACHE_STORE=sqlite  (ไฟล์: CACHE_DB, ค่าเริ่มต้น cache.sqlite)
 * ชั้นที่ 1 (หน่วยความจำ) ยังอยู่ แต่จะอยู่ได้ไม่เกิน CACHE_L1_SECONDS (ค่าเริ่มต้น 5) เพื่อให้ revalidate ข้าม process มีผลเร็ว
 */
import { Database } from 'bun:sqlite'
import type { Packed } from './http-cache'

/** สิ่งที่เก็บต่อหนึ่ง URL: เนื้อหาที่บีบอัดแล้ว + เวลา fresh + tag */
export type CachedPage = { p: Packed; path: string; tags: string[]; freshUntil: number }

type Row = {
  path: string
  tags: string
  fresh: number
  etag: string
  type: string
  raw: Uint8Array
  gz: Uint8Array | null
  br: Uint8Array | null
}

export class SqliteStore {
  private db: Database

  constructor(file: string) {
    this.db = new Database(file, { create: true })
    this.db.exec(`
      PRAGMA busy_timeout = 5000; -- ต้องมาก่อน journal_mode: หลาย process เปิดไฟล์พร้อมกันตอนเริ่ม จะรอคิวแทนที่จะ error 'database is locked'
      PRAGMA journal_mode = WAL;
      PRAGMA synchronous = NORMAL;
      CREATE TABLE IF NOT EXISTS res_cache (
        key     TEXT PRIMARY KEY,
        path    TEXT NOT NULL,
        tags    TEXT NOT NULL,
        fresh   INTEGER NOT NULL,
        expires INTEGER NOT NULL,
        etag    TEXT NOT NULL,
        type    TEXT NOT NULL,
        raw     BLOB NOT NULL,
        gz      BLOB,
        br      BLOB
      );
      CREATE INDEX IF NOT EXISTS res_cache_path ON res_cache(path);
      CREATE INDEX IF NOT EXISTS res_cache_expires ON res_cache(expires);
    `)
  }

  get(key: string): CachedPage | undefined {
    const row = this.db
      .query<Row, [string, number]>('SELECT path, tags, fresh, etag, type, raw, gz, br FROM res_cache WHERE key = ? AND expires > ?')
      .get(key, Date.now())
    if (!row) return undefined
    const size = row.raw.byteLength + (row.gz?.byteLength ?? 0) + (row.br?.byteLength ?? 0) + 128
    return {
      path: row.path,
      tags: JSON.parse(row.tags),
      freshUntil: row.fresh,
      p: { raw: row.raw as Packed['raw'], gz: row.gz as Packed['gz'], br: row.br as Packed['br'], etag: row.etag, type: row.type, size },
    }
  }

  set(key: string, e: CachedPage, expiresAt: number) {
    this.db
      .query('INSERT OR REPLACE INTO res_cache (key, path, tags, fresh, expires, etag, type, raw, gz, br) VALUES (?,?,?,?,?,?,?,?,?,?)')
      .run(key, e.path, JSON.stringify(e.tags), e.freshUntil, expiresAt, e.p.etag, e.p.type, e.p.raw, e.p.gz, e.p.br)
  }

  /** path ลงท้าย /* = ทุกหน้าใต้ path นั้น */
  delByPath(path: string): number {
    if (path.endsWith('/*')) {
      const prefix = path.slice(0, -1) // เช่น '/docs/'
      return this.db
        .query('DELETE FROM res_cache WHERE path = ? OR substr(path, 1, ?) = ?')
        .run(prefix.slice(0, -1) || '/', prefix.length, prefix).changes
    }
    return this.db.query('DELETE FROM res_cache WHERE path = ?').run(path).changes
  }

  delByTag(tag: string): number {
    return this.db.query('DELETE FROM res_cache WHERE EXISTS (SELECT 1 FROM json_each(tags) WHERE value = ?)').run(tag).changes
  }

  flush(): number {
    return this.db.query('DELETE FROM res_cache').run().changes
  }

  sweep(): number {
    return this.db.query('DELETE FROM res_cache WHERE expires <= ?').run(Date.now()).changes
  }

  close() {
    this.db.close()
  }

  count(): number {
    return this.db.query<{ n: number }, []>('SELECT COUNT(*) AS n FROM res_cache').get()!.n
  }
}

export function openStoreFromEnv(): SqliteStore | null {
  if (process.env.CACHE_STORE !== 'sqlite') return null
  const store = new SqliteStore(process.env.CACHE_DB ?? 'cache.sqlite')
  setInterval(() => store.sweep(), 60_000).unref?.()
  return store
}
