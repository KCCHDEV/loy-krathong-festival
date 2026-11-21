// layout ราก — ครอบทุกหน้า GET ที่คืน fragment (หน้าที่คืนเอกสารเต็ม <html> หรือตั้ง export const layout = false จะไม่ถูกครอบ)
// หน้าเก่าที่ return <Layout>…</Layout> เองยังใช้ได้: ผลลัพธ์เป็น <html> แล้วจะไม่ถูกครอบซ้ำ
import { Layout } from '@components'
import { defineLayout } from '@core/route'

export default defineLayout(({ children, metadata, ctx }) => (
  <Layout
    title={metadata.title}
    description={metadata.description}
    path={(metadata.path as string | undefined) ?? ctx.path}
    wide={metadata.wide as boolean | undefined}
  >
    {children}
  </Layout>
))
