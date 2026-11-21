// GET / — หน้าลอยกระทงออนไลน์ (เอกสารเต็มของตัวเอง ไม่ใช้ layout ราก)
import { COLORS } from '../lib/krathong'
import { asset } from '../lib/asset'

export const layout = false

export default function Home() {
  return (
    <>
      {'<!doctype html>'}
      <html lang="th">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>ลอยกระทงออนไลน์</title>
          <link rel="stylesheet" href={asset('/public/loy.css')} />
        </head>
        <body>
          <div id="moon"></div>
          <div id="river"></div>
          <form id="panel">
            <h1>🪔 ลอยกระทงออนไลน์</h1>
            <input name="name" placeholder="ชื่อของคุณ" maxlength="20" required />
            <input name="wish" placeholder="พรที่อยากขอ" maxlength="40" required />
            <div id="colors">
              {COLORS.map((c, i) => (
                <label>
                  <input type="radio" name="c" value={c} checked={i === 0} />
                  <span style={`background:${c}`}></span>
                </label>
              ))}
            </div>
            <button>ลอยกระทง</button>
            <div id="msg"></div>
          </form>
          <script src={asset('/public/loy.js')} defer></script>
        </body>
      </html>
    </>
  )
}
