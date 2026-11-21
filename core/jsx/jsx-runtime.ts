// tsconfig: "jsxImportSource": "@core/jsx" → TypeScript/Bun import ไฟล์นี้ให้เอง
import type { Children, SafeHtml } from './index'

export { jsx, jsxs, Fragment } from './index'

export namespace JSX {
  export type Element = SafeHtml | Promise<SafeHtml>
  export interface ElementChildrenAttribute {
    children: {}
  }
  /** ทุก tag รับ attribute อะไรก็ได้ (รวม hx-*, data-*) · safe = escape เนื้อหาข้างใน */
  export type Attrs = { [attr: string]: any; children?: Children; safe?: boolean | ''; class?: string; id?: string }
  export interface IntrinsicElements {
    [tag: string]: Attrs
  }
}
