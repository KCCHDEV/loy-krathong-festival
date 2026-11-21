import { Html, memo, type PropsWithChildren } from '@core/jsx'
import Nav from './Nav'
import Footer from './Footer'
import { asset } from '../lib/asset'
import { isDevMode } from '@core/dev-overlay'
import { HMR_SCRIPT } from '@core/hmr'

type Props = PropsWithChildren<{
  title?: string
  /** <meta name="description"> ของหน้านั้น (ไม่ใส่ = ข้อความมาตรฐาน) */
  description?: string
  /** path ปัจจุบัน ใช้ไฮไลต์เมนู */
  path?: string
  /** หน้า landing ใช้ main แบบเต็มความกว้าง */
  wide?: boolean
}>

// ตั้งธีมก่อน render เพื่อไม่ให้จอกระพริบ + ฟังก์ชันสลับธีมให้ปุ่มใน Nav เรียก
const safeThemeScript = `
(function () {
  var root = document.documentElement
  try { var saved = localStorage.getItem('theme'); if (saved) root.dataset.theme = saved } catch (e) {}
  window.toggleTheme = function () {
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
    root.dataset.theme = dark ? 'light' : 'dark'
    try { localStorage.setItem('theme', root.dataset.theme) } catch (e) {}
  }
})()
`

/** ส่วน <head> ขึ้นกับแค่ title/description จึงจำผลไว้ใน production */
const Head = memo(function Head({ title, description }: { title?: string; description?: string }) {
  return (
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{Html.escapeHtml(title ? `${title} · Kitsune` : 'Kitsune — ว่องไว แสนกล ครบในตัวเดียว')}</title>
        <meta
          name="description"
          content={Html.escapeHtml(description ?? 'Kitsune — ว่องไว แสนกล ครบในตัวเดียว · full-stack Bun เร็ว เบา type-safe')}
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><rect width=%2232%22 height=%2232%22 rx=%226%22 fill=%22%23c8321b%22/><path d=%22M10 8v16M10 16l9-8M12.5 14l8 10%22 stroke=%22white%22 stroke-width=%223%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>"
        />
        {/* ฟอนต์หลักโหลดล่วงหน้า (URL ต้องตรงกับใน style.css เป๊ะ ไม่งั้นโหลดซ้ำ) */}
        <link rel="preload" as="font" type="font/woff2" href="/public/fonts/ibm-plex-sans-thai-thai-400-normal.woff2" crossorigin="" />
        <link rel="preload" as="font" type="font/woff2" href="/public/fonts/ibm-plex-sans-thai-latin-400-normal.woff2" crossorigin="" />
        <link rel="stylesheet" href={asset('/public/style.css')} />
        <script>{safeThemeScript}</script>
        {isDevMode() ? <script>{HMR_SCRIPT}</script> : ''}
        {/* kit.js = JavaScript ฝั่ง browser ที่เขียนเอง (hx-*, boost, SSE, WebSocket, preload) เสิร์ฟจากเซิร์ฟเวอร์เรา ไม่พึ่ง CDN */}
        <script src={asset('/public/kit.js')} defer></script>
      </head>
  )
}, (p) => `${p.title ?? ''}\u0000${p.description ?? ''}`)

export default function Layout({ title, description, path = '/', wide, children }: Props) {
  return (
    <html lang="th">
      <Head title={title} description={description} />
      {/* preload: กดเมาส์ลงบนลิงก์ที่มี attribute preload ก็เริ่มโหลดหน้าเลย ก่อนปล่อยนิ้ว */}
      <body hx-boost="true" hx-ext="preload">
        <Nav path={path} />
        <main class={wide ? '' : 'container page'}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
