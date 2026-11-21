// ฉากลอยกระทง 3D (Three.js) — build: bun run build:client → public/loy.js
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'

const form = document.getElementById('panel'), msg = document.getElementById('msg')
const canvas = document.getElementById('scene'), labels = document.getElementById('labels')

let renderer
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
} catch {
  msg.textContent = 'เบราว์เซอร์นี้ไม่รองรับ WebGL'
}

if (renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  const scene = new THREE.Scene()
  const HORIZON = new THREE.Color('#1b2a63')
  scene.background = new THREE.Color('#050818')
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1200)
  camera.position.set(0, 2.4, 9)
  const look = new THREE.Vector3(0, 1.6, -20)

  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128
    const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 0, 64, 64, 64)
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,255,255,.55)'); r.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = r; g.fillRect(0, 0, 128, 128)
    return new THREE.CanvasTexture(c)
  })()

  /* ---------- ท้องฟ้า + ดาว + พระจันทร์ ---------- */
  const moonDir = new THREE.Vector3(0.28, 0.32, -1).normalize()
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(900, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: { top: { value: new THREE.Color('#02040f') }, hor: { value: HORIZON } },
      vertexShader: 'varying vec3 p;void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: 'varying vec3 p;uniform vec3 top,hor;void main(){float h=clamp(normalize(p).y,0.,1.);gl_FragColor=vec4(mix(hor,top,pow(h,.45)),1.);}',
    })))

  const starPos = new Float32Array(1200)
  for (let i = 0; i < 400; i++) {
    const v = new THREE.Vector3().randomDirection(); v.y = Math.abs(v.y) * 0.9 + 0.05
    v.multiplyScalar(850); starPos.set([v.x, v.y, v.z], i * 3)
  }
  const starGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(starPos, 3))
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 2.2, sizeAttenuation: false, color: '#ffffff', transparent: true, depthWrite: false, fog: false }))
  scene.add(stars)

  const moon = new THREE.Mesh(new THREE.SphereGeometry(28, 32, 16), new THREE.MeshBasicMaterial({ color: '#fff6cf', fog: false }))
  moon.position.copy(moonDir).multiplyScalar(800); scene.add(moon)
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffe9a8', blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.28 }))
  halo.scale.setScalar(170); halo.position.copy(moon.position); scene.add(halo)

  /* ---------- น้ำ ---------- */
  const waveGLSL = 'float wave(vec2 p,float t){return sin(p.x*.3+t*.8)*.08+sin(p.y*.5+t*1.1)*.06+sin((p.x+p.y)*.7+t*1.7)*.03;}'
  const waveJS = (x, z, t) => Math.sin(x * 0.3 + t * 0.8) * 0.08 + Math.sin(z * 0.5 + t * 1.1) * 0.06 + Math.sin((x + z) * 0.7 + t * 1.7) * 0.03
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 220, 220).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({
      uniforms: { t: { value: 0 }, moon: { value: moonDir }, hor: { value: HORIZON }, deep: { value: new THREE.Color('#050d22') } },
      vertexShader: `${waveGLSL}uniform float t;varying vec3 w;
        void main(){vec3 p=position;p.y+=wave(p.xz,t);vec4 wp=modelMatrix*vec4(p,1.);w=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,
      fragmentShader: `${waveGLSL}uniform float t;uniform vec3 moon,hor,deep;varying vec3 w;
        void main(){
          vec2 e=vec2(.05,0.);
          vec3 n=normalize(vec3(wave(w.xz-e.xy,t)-wave(w.xz+e.xy,t),.1,wave(w.xz-e.yx,t)-wave(w.xz+e.yx,t)));
          vec3 v=normalize(cameraPosition-w);
          float f=pow(1.-max(dot(n,v),0.),3.);
          vec3 col=mix(deep,hor*1.4,f);
          vec3 r=reflect(-v,n);
          col+=vec3(1.,.92,.7)*pow(max(dot(r,moon),0.),400.)*1.4;
          col+=vec3(.9,.8,.5)*pow(max(dot(r,moon),0.),30.)*.08;
          float d=clamp(length(w-cameraPosition)/700.,0.,1.);
          gl_FragColor=vec4(mix(col,hor,d*d),1.);}`,
    }))
  scene.add(water)

  /* ---------- กระทง ---------- */
  const petalGeo = new THREE.ConeGeometry(0.13, 0.55, 4).translate(0, 0.275, 0)
  const baseGeo = new THREE.CylinderGeometry(0.5, 0.56, 0.2, 24)
  const candleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.35, 8)
  const baseMat = new THREE.MeshBasicMaterial({ color: '#e9d79b' })
  const candleMat = new THREE.MeshBasicMaterial({ color: '#fff3d0' })
  const petalMats = {}
  const petalMat = (c) => (petalMats[c] ??= new THREE.MeshBasicMaterial({ color: c }))

  function buildKrathong(color) {
    const g = new THREE.Group()
    g.add(new THREE.Mesh(baseGeo, baseMat))
    for (const [n, r, tilt, y, s] of [[14, 0.42, 0.9, 0.08, 1], [10, 0.27, 0.35, 0.16, 0.85]]) {
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + (tilt > 0.5 ? 0 : 0.3)
        const p = new THREE.Mesh(petalGeo, petalMat(color))
        p.position.set(Math.cos(a) * r, y, Math.sin(a) * r)
        p.rotation.set(0, -a, 0); p.rotateZ(-tilt); p.scale.set(1, s, 1)
        g.add(p)
      }
    }
    const candle = new THREE.Mesh(candleGeo, candleMat); candle.position.y = 0.27; g.add(candle)
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffb14a', blending: THREE.AdditiveBlending, depthWrite: false }))
    flame.position.y = 0.58; flame.scale.setScalar(0.9); g.add(flame)
    g.userData.flame = flame
    return g
  }

  const items = [], seen = new Set()
  const rnd = (id, k) => { const x = Math.sin(id * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x) } // สุ่มคงที่ตาม id: รีโหลดแล้วตำแหน่งเดิม

  function add(k, fresh) {
    if (seen.has(k.id)) return
    seen.add(k.id)
    const g = buildKrathong(k.color); scene.add(g)
    const label = document.createElement('div'); label.className = 'lbl'; label.textContent = k.name + ': ' + k.wish // textContent = กัน XSS
    labels.appendChild(label)
    items.push({
      g, label, born: fresh ? performance.now() : -1e9,
      x: fresh ? -4 : (rnd(k.id, 1) - 0.5) * 90, z: fresh ? 1 : -3 - rnd(k.id, 2) * 22,
      v: 0.35 + rnd(k.id, 3) * 0.45, ph: rnd(k.id, 4) * 6.28, spin: (rnd(k.id, 5) - 0.5) * 0.15,
    })
  }

  /* ---------- โคมลอยขึ้นฟ้า ---------- */
  const N = 60, lp = new Float32Array(N * 3), ls = new Float32Array(N)
  const resetLantern = (i) => { lp.set([(Math.random() - 0.5) * 160, 4 + Math.random() * 20, -40 - Math.random() * 120], i * 3); ls[i] = 0.6 + Math.random() * 0.8 }
  for (let i = 0; i < N; i++) { resetLantern(i); lp[i * 3 + 1] = Math.random() * 60 }
  const lGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(lp, 3))
  scene.add(new THREE.Points(lGeo, new THREE.PointsMaterial({ map: glowTex, size: 3.5, color: '#c97a2c', blending: THREE.AdditiveBlending, transparent: true, depthWrite: false })))

  /* ---------- เรนเดอร์ ---------- */
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.35, 0.5, 0.82))
  composer.addPass(new OutputPass())

  const resize = () => {
    const w = innerWidth, h = innerHeight
    renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix()
  }
  addEventListener('resize', resize); resize()

  const mouse = { x: 0, y: 0 }
  addEventListener('pointermove', (e) => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5 })

  const tmp = new THREE.Vector3(), clock = new THREE.Clock()
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.1), t = clock.elapsedTime, now = performance.now()
    water.material.uniforms.t.value = t
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.03
    camera.position.y += (2.4 - mouse.y - camera.position.y) * 0.03
    camera.lookAt(look)
    stars.material.opacity = 0.75 + Math.sin(t * 1.3) * 0.25

    for (const k of items) {
      k.x += k.v * dt; if (k.x > 48) k.x = -48
      const age = (now - k.born) / 1000, drop = age < 1.2 ? 1 - age / 1.2 : 0 // กระทงใหม่หล่นลงน้ำ
      const y = waveJS(k.x, k.z, t) + 0.08 + drop * drop * 5
      k.g.position.set(k.x, y, k.z)
      k.g.rotation.set(Math.sin(t * 1.1 + k.ph) * 0.06, k.g.rotation.y + k.spin * dt, Math.cos(t * 0.9 + k.ph) * 0.06)
      k.g.scale.setScalar(age < 1.2 ? 0.4 + 0.6 * (age / 1.2) : 1)
      const fl = 1 + Math.sin(t * 17 + k.ph) * 0.12 + Math.sin(t * 29 + k.ph * 2) * 0.07
      k.g.userData.flame.scale.set(0.9 * fl, 0.9 * (2 - fl), 1)

      tmp.set(k.x, y + 1.3, k.z).project(camera)
      const dist = camera.position.distanceTo(k.g.position)
      const on = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && dist < 38
      k.label.style.opacity = on ? Math.min(1, (38 - dist) / 14) : 0
      if (on) k.label.style.transform = `translate(-50%,-100%) translate(${(tmp.x * 0.5 + 0.5) * innerWidth}px,${(-tmp.y * 0.5 + 0.5) * innerHeight}px)`
    }

    for (let i = 0; i < N; i++) { lp[i * 3 + 1] += ls[i] * dt * 1.6; lp[i * 3] += Math.sin(t * 0.3 + i) * dt * 0.5; if (lp[i * 3 + 1] > 70) resetLantern(i) }
    lGeo.attributes.position.needsUpdate = true

    composer.render()
  })

  /* ---------- ข้อมูลจาก API ---------- */
  // ดึงกระทงของทุกคนทุก 10 วินาที (กระทงใหม่ของคนอื่นหล่นลงน้ำเอง)
  const load = async (fresh) => {
    try { (await (await fetch('/api/krathongs')).json()).reverse().forEach((k) => add(k, fresh)) } catch {}
  }
  load(false); setInterval(() => load(true), 10000)

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
}
