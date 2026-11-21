// GET / — หน้าลอยกระทงออนไลน์ (เอกสารเต็มของตัวเอง ไม่ใช้ layout ราก)
import { COLORS, DECOS, MODELS } from '../lib/krathong'
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
          <canvas id="scene"></canvas>
          <div id="labels"></div>
          <div id="weather"></div>
          <div id="count">🪔 กำลังนับ…</div>
          <button type="button" id="show" hidden>🪔 ลอยกระทง</button>
          <div id="lightbox" hidden>
            <button type="button" id="lbClose" aria-label="ปิด">✕</button>
            <div id="lbBody"></div>
            <p id="lbCap"></p>
          </div>
          <form id="panel">
            <button type="button" id="hide" aria-label="ซ่อนแผง (กด H)" title="ซ่อนเพื่อดูฉาก (กด H)">✕</button>
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
            <div class="chips">
              {Object.entries(MODELS).map(([v, label], i) => (
                <label>
                  <input type="radio" name="model" value={v} checked={i === 0} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            <div class="chips">
              {Object.entries(DECOS).map(([v, label], i) => (
                <label>
                  <input type="radio" name="deco" value={v} checked={i === 0} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            <label class="file">
              <input type="file" name="media" accept="image/*,video/mp4,video/webm" />
              <span id="fileName">📎 แนบรูปหรือวิดีโอ (ไม่บังคับ)</span>
            </label>
            <button>ลอยกระทง</button>
            <div id="msg"></div>
          </form>
          <script src={asset('/public/loy.js')} defer></script>
        </body>
      </html>
    </>
  )
}
