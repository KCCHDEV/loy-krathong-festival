const river = document.getElementById('river'), form = document.getElementById('panel'), msg = document.getElementById('msg')
const items = [], seen = new Set()

for (let i = 0; i < 70; i++) {
  const s = document.createElement('div'); s.className = 'star'
  s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 50}vh;animation-delay:${Math.random() * 3}s`
  document.body.appendChild(s)
}

function add(k, fresh) {
  if (seen.has(k.id)) return
  seen.add(k.id)
  const el = document.createElement('div'); el.className = 'k'
  const w = document.createElement('div'); w.className = 'wish'; w.textContent = k.name + ': ' + k.wish // textContent = กัน XSS
  const f = document.createElement('div'); f.className = 'flame'; f.textContent = '🔥'
  const b = document.createElement('div'); b.className = 'base'; b.style.background = k.color
  el.append(w, f, b); river.appendChild(el)
  items.push({ el, x: fresh ? -130 : Math.random() * innerWidth, y: Math.random() * (innerHeight * .45 - 80), v: .3 + Math.random() * .4, p: Math.random() * 6 })
}

function tick(t) {
  for (const k of items) {
    k.x += k.v; if (k.x > innerWidth) k.x = -130
    k.el.style.transform = `translate(${k.x}px,${k.y + Math.sin(t / 700 + k.p) * 6}px)`
  }
  requestAnimationFrame(tick)
}

// ดึงกระทงของทุกคนทุก 10 วินาที (กระทงใหม่ของคนอื่นลอยเข้ามาเอง)
async function load(fresh) {
  try { (await (await fetch('/api/krathongs')).json()).reverse().forEach((k) => add(k, fresh)) } catch {}
}
load(false); setInterval(() => load(true), 10000); requestAnimationFrame(tick)

form.onsubmit = async (e) => {
  e.preventDefault()
  const btn = form.querySelector('button'); btn.disabled = true; msg.textContent = ''
  try {
    const r = await fetch('/api/krathongs', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: form.name.value, wish: form.wish.value, color: form.c.value }),
    })
    if (!r.ok) throw 0
    add(await r.json(), true); form.wish.value = ''
  } catch { msg.textContent = 'ลอยไม่สำเร็จ ลองใหม่อีกครั้ง' }
  btn.disabled = false
}
