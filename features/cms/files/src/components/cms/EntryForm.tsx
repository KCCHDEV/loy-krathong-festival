import { Button } from '@components'
import type { Entry } from '../../lib/cms'

type Props = { action: string; entry?: Partial<Entry>; error?: string; kindLocked?: boolean }

/** ฟอร์มเขียน/แก้บทความหรือหน้า + พรีวิว markdown สด (ยิงไป /admin/cms/preview ทุกครั้งที่พิมพ์หยุด 0.4 วินาที) */
export default function EntryForm({ action, entry = {}, error }: Props) {
  return (
    <form method="post" action={action} class="cms-form">
      {error ? <div class="alert alert-error" role="alert" safe>{error}</div> : ''}
      <div class="cms-meta">
        <label>
          ชื่อเรื่อง
          <input name="title" required maxlength="200" value={entry.title ?? ''} />
        </label>
        <label>
          slug (ใน URL — เว้นว่างให้สร้างจากชื่อ)
          <input name="slug" maxlength="200" value={entry.slug ?? ''} />
        </label>
        <label>
          ประเภท
          <select name="kind" disabled={entry.id ? true : undefined}>
            <option value="post" selected={entry.kind !== 'page' ? true : undefined}>
              บทความ (/blog/…)
            </option>
            <option value="page" selected={entry.kind === 'page' ? true : undefined}>
              หน้า (/p/…)
            </option>
          </select>
        </label>
        <label>
          สถานะ
          <select name="status">
            <option value="draft" selected={entry.status !== 'published' ? true : undefined}>
              ร่าง (ยังไม่เผยแพร่)
            </option>
            <option value="published" selected={entry.status === 'published' ? true : undefined}>
              เผยแพร่
            </option>
          </select>
        </label>
        <label>
          แท็ก (คั่นด้วย ,)
          <input name="tags" value={(entry.tags ?? []).join(', ')} />
        </label>
      </div>
      <div class="cms-editor">
        <label>
          เนื้อหา (markdown)
          <textarea
            id="body"
            name="body"
            rows="22"
            spellcheck="false"
            hx-post="/admin/cms/preview"
            hx-trigger="input changed delay:400ms, load"
            hx-target="#preview"
            hx-include="this"
            safe
          >
            {'\n' + (entry.body ?? '')}
          </textarea>
        </label>
        <div>
          <p class="muted small">พรีวิว</p>
          <div id="preview" class="prose card"></div>
        </div>
      </div>
      <Button type="submit">บันทึก</Button>
    </form>
  )
}
