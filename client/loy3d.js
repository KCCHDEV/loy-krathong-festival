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
  const HORIZON = new THREE.Color('#1b2a63'), TOP = new THREE.Color('#02040f'), DEEP = new THREE.Color('#050d22') // อัปเดตตามเวลา/อากาศ (ดู applyEnv)
  const env = { amp: 1, drift: 1, dayK: 0, cloud: 0, rain: 0 }
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
      uniforms: { top: { value: TOP }, hor: { value: HORIZON } },
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

  const moon = new THREE.Mesh(new THREE.SphereGeometry(28, 32, 16), new THREE.MeshBasicMaterial({ color: '#fff6cf', fog: false, transparent: true }))
  moon.position.copy(moonDir).multiplyScalar(800); scene.add(moon)
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffe9a8', blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.28 }))
  halo.scale.setScalar(170); halo.position.copy(moon.position); scene.add(halo)

  /* ---------- น้ำ ---------- */
  // amp = ความแรงคลื่น (ตามลม) ใช้ค่าเดียวกันทั้ง shader และ JS เพื่อให้กระทงลอยตามผิวน้ำพอดี
  const waveGLSL = 'uniform float amp;float wave(vec2 p,float t){return (sin(p.x*.3+t*.8)*.08+sin(p.y*.5+t*1.1)*.06+sin((p.x+p.y)*.7+t*1.7)*.03)*amp;}'
  const waveJS = (x, z, t) => (Math.sin(x * 0.3 + t * 0.8) * 0.08 + Math.sin(z * 0.5 + t * 1.1) * 0.06 + Math.sin((x + z) * 0.7 + t * 1.7) * 0.03) * env.amp
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 220, 220).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({
      uniforms: { t: { value: 0 }, amp: { value: 1 }, glint: { value: 1 }, moon: { value: moonDir }, hor: { value: HORIZON }, deep: { value: DEEP } },
      vertexShader: `${waveGLSL}uniform float t;varying vec3 w;
        void main(){vec3 p=position;p.y+=wave(p.xz,t);vec4 wp=modelMatrix*vec4(p,1.);w=wp.xyz;gl_Position=projectionMatrix*viewMatrix*wp;}`,
      fragmentShader: `${waveGLSL}uniform float t,glint;uniform vec3 moon,hor,deep;varying vec3 w;
        void main(){
          vec2 e=vec2(.05,0.);
          vec3 n=normalize(vec3(wave(w.xz-e.xy,t)-wave(w.xz+e.xy,t),.1,wave(w.xz-e.yx,t)-wave(w.xz+e.yx,t)));
          vec3 v=normalize(cameraPosition-w);
          float f=pow(1.-max(dot(n,v),0.),3.);
          vec3 col=mix(deep,hor*1.4,f);
          vec3 r=reflect(-v,n);
          col+=vec3(1.,.92,.7)*pow(max(dot(r,moon),0.),400.)*1.4*glint;
          col+=vec3(.9,.8,.5)*pow(max(dot(r,moon),0.),30.)*.08*glint;
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

  // รูปทรงแบบ extrude: หัวใจ / ดาว นอนราบ (แกน Y ขึ้น) · เรือ ตัวเรือตั้งตรง
  const flat = (shape, depth) => new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 }).rotateX(-Math.PI / 2)
  const heartShape = new THREE.Shape()
    .moveTo(0, -0.55).bezierCurveTo(-0.95, 0.1, -0.5, 0.75, 0, 0.3).bezierCurveTo(0.5, 0.75, 0.95, 0.1, 0, -0.55)
  const starShape = new THREE.Shape()
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2, r = i % 2 ? 0.32 : 0.7
    starShape[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r)
  }
  starShape.closePath()
  const hullShape = new THREE.Shape().moveTo(-0.9, 0.34).lineTo(-0.6, 0).lineTo(0.6, 0).lineTo(0.9, 0.34).closePath()
  const GEO = {
    heart: flat(heartShape, 0.2), heartTop: flat(heartShape, 0.1).scale(0.62, 1, 0.62).translate(0, 0.23, 0),
    star: flat(starShape, 0.2), starTop: flat(starShape, 0.1).scale(0.6, 1, 0.6).translate(0, 0.23, 0),
    hull: new THREE.ExtrudeGeometry(hullShape, { depth: 0.5, bevelEnabled: false }).translate(0, 0, -0.25),
    leaf: new THREE.ConeGeometry(0.17, 0.3, 4).translate(0, 0.15, 0),
    flower: new THREE.SphereGeometry(0.075, 10, 8),
    stick: new THREE.CylinderGeometry(0.012, 0.012, 0.75, 6).translate(0, 0.375, 0),
    sail: new THREE.BufferGeometry().setFromPoints([[0, 0, 0], [0.55, 0, 0], [0, 0.85, 0]].map((p) => new THREE.Vector3(...p))),
    mast: new THREE.CylinderGeometry(0.015, 0.015, 0.9, 6).translate(0, 0.45, 0),
  }
  const mat = (c, o) => new THREE.MeshBasicMaterial({ color: c, ...o })
  const leafMat = mat('#3f9d4a'), flowerMat = mat('#ffb703'), stickMat = mat('#8b5a2b'), sailMat = mat('#fff3d0', { side: THREE.DoubleSide })

  // ตัวกระทงแต่ละแบบ: คืนความสูงของพื้นที่วางเทียน (top) กับวงที่วางดอกไม้ (rx, rz)
  const MODELS = {
    lotus(g, color) {
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
      return { top: 0.1, rx: 0.62, rz: 0.62 }
    },
    banana(g, color) { // ใบตองพับแหลมซ้อนสองชั้น
      g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.62, 0.2, 28), baseMat))
      for (const [n, r, m, y] of [[18, 0.52, leafMat, 0.1], [11, 0.34, petalMat(color), 0.16]]) {
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2, p = new THREE.Mesh(GEO.leaf, m)
          p.position.set(Math.cos(a) * r, y, Math.sin(a) * r); p.rotation.set(0, -a, 0); p.rotateZ(-0.55)
          g.add(p)
        }
      }
      return { top: 0.1, rx: 0.7, rz: 0.7 }
    },
    heart(g, color) {
      g.add(new THREE.Mesh(GEO.heart, mat(color)))
      g.add(new THREE.Mesh(GEO.heartTop, mat(new THREE.Color(color).lerp(new THREE.Color('#fff'), 0.5))))
      return { top: 0.32, rx: 0.55, rz: 0.4 }
    },
    star(g, color) {
      g.add(new THREE.Mesh(GEO.star, mat(color)))
      g.add(new THREE.Mesh(GEO.starTop, mat(new THREE.Color(color).lerp(new THREE.Color('#fff'), 0.5))))
      return { top: 0.32, rx: 0.5, rz: 0.5 }
    },
    boat(g, color) {
      g.add(new THREE.Mesh(GEO.hull, mat(color)))
      const mast = new THREE.Mesh(GEO.mast, stickMat); mast.position.set(-0.35, 0.34, 0); g.add(mast)
      const sail = new THREE.Mesh(GEO.sail, sailMat); sail.position.set(-0.33, 0.45, 0); g.add(sail)
      return { top: 0.34, rx: 0.5, rz: 0.2, cx: 0.25 }
    },
  }

  function buildKrathong(color, model = 'lotus', deco = 'none') {
    const g = new THREE.Group()
    const { top, rx, rz, cx = 0 } = (MODELS[model] ?? MODELS.lotus)(g, color)
    const candle = new THREE.Mesh(candleGeo, candleMat); candle.position.set(cx, top + 0.175, 0); g.add(candle)
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ffb14a', blending: THREE.AdditiveBlending, depthWrite: false }))
    flame.position.set(cx, top + 0.48, 0); flame.scale.setScalar(0.9); g.add(flame)
    g.userData.flame = flame
    if (deco === 'flower' || deco === 'both') {
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2, f = new THREE.Mesh(GEO.flower, flowerMat)
        f.position.set(Math.cos(a) * rx, top + 0.02, Math.sin(a) * rz); g.add(f)
      }
    }
    if (deco === 'incense' || deco === 'both') {
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2 + 0.5, s = new THREE.Group()
        s.position.set(cx + Math.cos(a) * 0.12, top, Math.sin(a) * 0.12)
        s.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35)
        s.add(new THREE.Mesh(GEO.stick, stickMat))
        const tip = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: '#ff3b1f', blending: THREE.AdditiveBlending, depthWrite: false }))
        tip.position.y = 0.75; tip.scale.setScalar(0.2); s.add(tip); g.add(s)
      }
    }
    return g
  }

  const items = [], seen = new Set()
  const rnd = (id, k) => { const x = Math.sin(id * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x) } // สุ่มคงที่ตาม id: รีโหลดแล้วตำแหน่งเดิม

  function add(k, fresh) {
    if (seen.has(k.id)) return
    seen.add(k.id)
    const g = buildKrathong(k.color, k.model, k.deco); scene.add(g)
    const label = document.createElement('div'); label.className = 'lbl'; label.textContent = k.name + ': ' + k.wish // textContent = กัน XSS
    labels.appendChild(label)
    const it = {
      info: k, g, label, born: fresh ? performance.now() : -1e9, media: k.media ? makeBillboard(k) : null,
      x: fresh ? -4 : (rnd(k.id, 1) - 0.5) * 68, z: fresh ? 1 : -3 - rnd(k.id, 2) * 22,
      v: 0.35 + rnd(k.id, 3) * 0.45, ph: rnd(k.id, 4) * 6.28, spin: (rnd(k.id, 5) - 0.5) * 0.15,
    }
    g.userData.item = it; if (it.media) it.media.grp.userData.item = it // ให้ raycast หา item จาก mesh ที่ถูกคลิกได้
    items.push(it)
  }


  /* ---------- รูป/วิดีโอที่แนบกับกระทง: ป้ายลอยเหนือกระทง หันหน้าหากล้องเสมอ ---------- */
  const PW = 1.8, PH = 1.3, frameMat = new THREE.MeshBasicMaterial({ color: '#fff3d0', side: THREE.DoubleSide })
  const frameGeo = new THREE.PlaneGeometry(PW + 0.12, PH + 0.12), picGeo = new THREE.PlaneGeometry(PW, PH)
  function makeBillboard(k) {
    const grp = new THREE.Group(), inner = new THREE.Group()
    const pic = new THREE.Mesh(picGeo, new THREE.MeshBasicMaterial({ color: '#222', side: THREE.DoubleSide, toneMapped: false }))
    pic.position.z = 0.01; inner.add(new THREE.Mesh(frameGeo, frameMat), pic); grp.add(inner); grp.visible = false; scene.add(grp)
    return { grp, inner, pic, kind: k.mediaKind, url: k.media, started: false, video: null }
  }
  const fit = (b, w, h) => { // ย่อให้พอดีกรอบโดยคงสัดส่วนเดิม
    const r = w / h, box = PW / PH
    b.inner.scale.set(r > box ? 1 : r / box, r > box ? box / r : 1, 1)
  }
  function startMedia(b) {
    b.started = true
    if (b.kind === 'image') {
      new THREE.TextureLoader().load(b.url, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace; b.pic.material.map = tex; b.pic.material.color.set('#fff'); b.pic.material.needsUpdate = true
        fit(b, tex.image.width, tex.image.height)
      })
    } else {
      const v = document.createElement('video')
      Object.assign(v, { muted: true, loop: true, playsInline: true, crossOrigin: 'anonymous', preload: 'metadata', src: b.url })
      v.addEventListener('loadedmetadata', () => fit(b, v.videoWidth, v.videoHeight))
      const tex = new THREE.VideoTexture(v); tex.colorSpace = THREE.SRGBColorSpace
      b.pic.material.map = tex; b.pic.material.color.set('#fff'); b.pic.material.needsUpdate = true; b.video = v
    }
  }
  const MAX_VIDEOS = 3, VIDEO_RANGE = 22, MEDIA_RANGE = 34

  /* ---------- โคมลอยขึ้นฟ้า ---------- */
  const N = 60, lp = new Float32Array(N * 3), ls = new Float32Array(N)
  const resetLantern = (i) => { lp.set([(Math.random() - 0.5) * 160, 4 + Math.random() * 20, -40 - Math.random() * 120], i * 3); ls[i] = 0.6 + Math.random() * 0.8 }
  for (let i = 0; i < N; i++) { resetLantern(i); lp[i * 3 + 1] = Math.random() * 60 }
  const lGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(lp, 3))
  const lanternMat = new THREE.PointsMaterial({ map: glowTex, size: 3.5, color: '#c97a2c', blending: THREE.AdditiveBlending, transparent: true, depthWrite: false })
  scene.add(new THREE.Points(lGeo, lanternMat))

  /* ---------- เรนเดอร์ ---------- */
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.35, 0.5, 0.82)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

  const resize = () => {
    const w = innerWidth, h = innerHeight
    renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix()
  }
  addEventListener('resize', resize); resize()

  /* ---------- เวลา + สภาพอากาศของลำพูน (เวลา Asia/Bangkok, ข้อมูลจาก /api/weather) ---------- */
  const qs = new URLSearchParams(location.search) // ?t=14:30&w=rain|storm|cloud|clear — ใช้ลองดูฉากอื่น ๆ
  const hm = (s) => { const [h, m] = s.split('T').pop().split(':'); return +h * 60 + +m }
  const bkk = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Bangkok', hour: '2-digit', minute: '2-digit', hour12: false })
  const nowMin = () => (qs.get('t') ? hm(qs.get('t')) : hm(bkk.format(new Date())))
  const smooth = (a, b, x) => { const u = Math.min(1, Math.max(0, (x - a) / (b - a))); return u * u * (3 - 2 * u) }
  let W = { temp: null, code: 0, cloud: 20, wind: 6, sunrise: '06:15', sunset: '17:50' } // ค่าเริ่มต้นถ้าดึงอากาศไม่ได้
  const PRESET = { clear: { code: 0, cloud: 5 }, cloud: { code: 3, cloud: 90 }, rain: { code: 63, cloud: 95 }, storm: { code: 95, cloud: 100, wind: 30 } }
  const TH = (c) => (c === 0 ? 'ท้องฟ้าแจ่มใส' : c < 3 ? 'มีเมฆบางส่วน' : c === 3 ? 'เมฆมาก' : c < 50 ? 'หมอก' : c < 60 ? 'ฝนปรอย' : c < 80 ? 'ฝนตก' : c < 90 ? 'ฝนระลอก' : 'พายุฝนฟ้าคะนอง')

  const cloudSprites = Array.from({ length: 14 }, (_, i) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, fog: false }))
    s.scale.set(180 + Math.random() * 160, 70 + Math.random() * 40, 1)
    s.position.set((Math.random() - 0.5) * 700, 70 + Math.random() * 90, -180 - Math.random() * 300)
    s.userData.i = i; scene.add(s); return s
  })
  const RAIN = 1400, rainPos = new Float32Array(RAIN * 6)
  const seedDrop = (i) => { const x = (Math.random() - 0.5) * 60, y = Math.random() * 26, z = -30 + Math.random() * 40; rainPos.set([x, y, z, x - 0.1, y - 0.7, z], i * 6) }
  for (let i = 0; i < RAIN; i++) seedDrop(i)
  const rainGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(rainPos, 3))
  const rainLines = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: '#aebbd8', transparent: true, opacity: 0.4 }))
  rainLines.frustumCulled = false; scene.add(rainLines)

  const C = (h) => new THREE.Color(h)
  function applyEnv() {
    const m = nowMin(), sr = hm(W.sunrise), ss = hm(W.sunset)
    const isDay = m >= sr && m <= ss
    const nearest = Math.min(Math.abs(m - sr), Math.abs(m - ss))
    const signed = isDay ? Math.min(m - sr, ss - m) : -nearest // นาทีจากขอบฟ้า: + เหนือขอบฟ้า, - ใต้ขอบฟ้า
    const dayK = smooth(-25, 35, signed), tw = Math.max(0, 1 - nearest / 55)
    const preset = PRESET[qs.get('w')] ?? {}
    const w = { ...W, ...preset }
    const rain = w.code >= 95 ? 1 : w.code >= 80 ? 0.8 : w.code >= 61 ? 0.7 : w.code >= 51 ? 0.3 : 0
    const cloud = Math.min(1, Math.max(w.cloud / 100, rain ? 0.8 : 0, w.code === 45 || w.code === 48 ? 0.9 : 0))
    Object.assign(env, { dayK, cloud, rain, amp: Math.min(2.6, 0.6 + w.wind / 12 + (w.code >= 95 ? 0.5 : 0)), drift: 0.6 + w.wind / 15 })

    // สีท้องฟ้า: กลางคืน→กลางวัน→โทนส้มช่วงเช้า/เย็น→เทาตามเมฆ/ฝน
    const top = C('#02040f').lerp(C('#2f6fd0'), dayK), hor = C('#1b2a63').lerp(C('#a9d6ff'), dayK), deep = C('#050d22').lerp(C('#1c4f7a'), dayK)
    hor.lerp(C('#ff8a50'), tw * 0.8); top.lerp(C('#4a3a7a'), tw * 0.35)
    const g = Math.min(1, cloud * 0.75 + rain * 0.1)
    top.lerp(C('#090b14').lerp(C('#6f7f93'), dayK), g); hor.lerp(C('#141a2e').lerp(C('#aab4be'), dayK), g); deep.lerp(C('#060a12').lerp(C('#2a3a48'), dayK), g * 0.6)
    TOP.copy(top); HORIZON.copy(hor); DEEP.copy(deep)

    // ดวงอาทิตย์ (กลางวัน) / ดวงจันทร์ (กลางคืน) เคลื่อนข้ามฟ้าตามเวลา
    const span = isDay ? ss - sr : 1440 - (ss - sr), pos = isDay ? m - sr : (m > ss ? m - ss : m + 1440 - ss)
    const a = Math.min(1, Math.max(0, pos / span)) * Math.PI
    moonDir.set(-Math.cos(a) * 0.7, 0.07 + Math.sin(a) * 0.55, -1).normalize()
    moon.position.copy(moonDir).multiplyScalar(800); halo.position.copy(moon.position)
    const sun = isDay
    moon.material.color.set(sun ? '#fff1b0' : '#fff6cf'); halo.material.color.set(sun ? '#ffd27a' : '#ffe9a8')
    halo.scale.setScalar(sun ? 300 : 170)
    moon.material.opacity = 1 - cloud * 0.85; halo.material.opacity = (sun ? 0.55 : 0.28) * (1 - cloud * 0.8)
    water.material.uniforms.amp.value = env.amp; water.material.uniforms.glint.value = 1 - cloud * 0.85
    bloom.strength = 0.35 - dayK * 0.17
    lanternMat.opacity = 1 - dayK * 0.85

    cloudSprites.forEach((s) => {
      s.visible = s.userData.i / cloudSprites.length < cloud * 1.05
      s.material.color.set(C('#2c3350').lerp(C('#ffffff'), dayK).lerp(C('#6a7380'), rain * 0.6)); s.material.opacity = 0.25 + cloud * 0.4
    })
    rainLines.visible = rain > 0; rainGeo.setDrawRange(0, Math.floor(RAIN * rain * 2))

    const hh = String(Math.floor(m / 60)).padStart(2, '0'), mm = String(m % 60).padStart(2, '0')
    hud.textContent = `📍 ลำพูน · ${hh}:${mm} น. · ${w.temp != null ? Math.round(w.temp) + '°C · ' : ''}${TH(w.code)} · ลม ${Math.round(w.wind)} กม./ชม.`
  }
  function updateWeatherFx(dt, t) {
    for (const s of cloudSprites) { s.position.x += dt * 2.5 * env.drift; if (s.position.x > 380) s.position.x = -380 }
    if (!env.rain) return
    for (let i = 0; i < Math.floor(RAIN * env.rain); i++) {
      const j = i * 6 + 1
      rainPos[j] -= 28 * dt; rainPos[j + 3] -= 28 * dt
      if (rainPos[j] < 0) seedDrop(i), (rainPos[j] = 24 + Math.random() * 3, rainPos[j + 3] = rainPos[j] - 0.7)
    }
    rainGeo.attributes.position.needsUpdate = true
    if (env.rain > 0.9 && Math.random() < dt * 0.15) bloom.strength = 1.2 // ฟ้าแลบ
    else bloom.strength += (0.35 - env.dayK * 0.17 - bloom.strength) * Math.min(1, dt * 8)
  }
  const hud = document.getElementById('weather')
  applyEnv(); setInterval(applyEnv, 60000)
  const loadWeather = async () => {
    try { const j = await (await fetch('/api/weather')).json(); if (!j.error) { W = j; applyEnv() } } catch {}
  }
  loadWeather(); setInterval(loadWeather, 600000)

  const mouse = { x: 0, y: 0 }
  addEventListener('pointermove', (e) => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5 })

  const tmp = new THREE.Vector3(), clock = new THREE.Clock()
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.1), t = clock.elapsedTime, now = performance.now()
    water.material.uniforms.t.value = t
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.03
    camera.position.y += (2.4 - mouse.y - camera.position.y) * 0.03
    camera.lookAt(look)
    stars.material.opacity = (0.75 + Math.sin(t * 1.3) * 0.25) * (1 - env.dayK) * (1 - env.cloud)
    updateWeatherFx(dt, t)

    let videos = 0
    for (const k of items) {
      k.x += k.v * env.drift * dt
      if (k.x > 34) { k.x = -34; k.z = -3 - Math.random() * 22 } // กระทงจริงทุกอันวนกลับต้นน้ำ (ช่วงที่กล้องมองเห็น) เปลี่ยนเลนใหม่
      const age = (now - k.born) / 1000, drop = age < 1.2 ? 1 - age / 1.2 : 0 // กระทงใหม่หล่นลงน้ำ
      const y = waveJS(k.x, k.z, t) + 0.08 + drop * drop * 5
      k.g.position.set(k.x, y, k.z)
      k.g.rotation.set(Math.sin(t * 1.1 + k.ph) * 0.06, k.g.rotation.y + k.spin * dt, Math.cos(t * 0.9 + k.ph) * 0.06)
      k.g.scale.setScalar(age < 1.2 ? 0.4 + 0.6 * (age / 1.2) : 1)
      const fl = 1 + Math.sin(t * 17 + k.ph) * 0.12 + Math.sin(t * 29 + k.ph * 2) * 0.07
      k.g.userData.flame.scale.set(0.9 * fl, 0.9 * (2 - fl), 1)

      const dist = camera.position.distanceTo(k.g.position)
      const b = k.media
      if (b) {
        const near = dist < MEDIA_RANGE
        if (near && !b.started) startMedia(b)
        b.grp.visible = near
        if (near) {
          b.grp.position.set(k.x, y + 2.1, k.z); b.grp.quaternion.copy(camera.quaternion)
          b.grp.scale.setScalar(Math.min(1, age / 1.2 + 0.3))
        }
        if (b.video) { // เล่นเฉพาะวิดีโอที่ใกล้ (สูงสุด 3 อัน) ที่เหลือหยุดไว้ประหยัดเครื่อง
          const want = near && dist < VIDEO_RANGE && videos < MAX_VIDEOS
          if (want) { videos++; if (b.video.paused) b.video.play().catch(() => {}) } else if (!b.video.paused) b.video.pause()
        }
      }
      tmp.set(k.x, y + (b ? 3 : 1.3), k.z).project(camera)
      const on = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && dist < 38
      if (k.label) k.label.style.opacity = on ? Math.min(1, (38 - dist) / 14) : 0
      if (k.label && on) k.label.style.transform = `translate(-50%,-100%) translate(${(tmp.x * 0.5 + 0.5) * innerWidth}px,${(-tmp.y * 0.5 + 0.5) * innerHeight}px)`
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
  const countEl = document.getElementById('count')
  const n = (v) => v.toLocaleString('th-TH')
  const loadCount = async () => {
    try {
      const s = await (await fetch('/api/stats')).json()
      countEl.textContent = `🪔 ลอยแล้ว ${n(s.krathongs)} กระทง${s.krathongs > seen.size ? ` (แสดง ${n(seen.size)} ล่าสุด)` : ''} ·👀 วันนี้ ${n(s.visitorsToday)} คน · เข้าชมรวม ${n(s.views)} ครั้ง · 🟢 ออนไลน์ ${n(s.online)}`
    } catch {}
  }
  fetch('/api/visit', { method: 'POST' }).catch(() => {}).finally(loadCount) // นับการเปิดหน้า 1 ครั้ง แล้วค่อยแสดงตัวเลข
  load(false); setInterval(() => { load(true); loadCount() }, 10000)

  /* ---------- ซ่อน/แสดงแผงฟอร์มเพื่อดูฉากเต็มจอ (ปุ่ม ✕ หรือกด H) ---------- */
  const showBtn = document.getElementById('show')
  const togglePanel = (open) => { form.hidden = !open; showBtn.hidden = open }
  document.getElementById('hide').onclick = () => togglePanel(false)
  showBtn.onclick = () => togglePanel(true)

  /* ---------- กดที่กระทงที่มีรูป/วิดีโอเพื่อดูแบบขยาย ---------- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
  const itemAt = (e) => {
    ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera)
    const targets = items.filter((k) => k.media && k.media.grp.visible).flatMap((k) => [k.media.grp, k.g])
    for (const h of ray.intersectObjects(targets, true)) {
      for (let o = h.object; o; o = o.parent) if (o.userData.item) return o.userData.item
    }
  }
  let hoverAt = 0
  addEventListener('pointermove', (e) => {
    if (e.target !== canvas || performance.now() - hoverAt < 60) return
    hoverAt = performance.now(); canvas.style.cursor = itemAt(e) ? 'pointer' : ''
  })
  const lightbox = document.getElementById('lightbox'), lbBody = document.getElementById('lbBody'), lbCap = document.getElementById('lbCap')
  const closeLightbox = () => { lightbox.hidden = true; lbBody.replaceChildren() } // ลบ element = หยุดเล่นวิดีโอด้วย
  function openLightbox(k) {
    const m = k.info.media, el = document.createElement(k.info.mediaKind === 'video' ? 'video' : 'img')
    if (el.tagName === 'VIDEO') Object.assign(el, { controls: true, autoplay: true, loop: true, playsInline: true, src: m })
    else Object.assign(el, { src: m, alt: k.info.wish })
    lbBody.replaceChildren(el); lbCap.textContent = `${k.info.name}: ${k.info.wish}`; lightbox.hidden = false
  }
  canvas.addEventListener('click', (e) => { const k = itemAt(e); if (k) openLightbox(k) })
  lightbox.addEventListener('click', (e) => { if (e.target !== lbBody.firstChild) closeLightbox() })
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox()
    else if ((e.key === 'h' || e.key === 'H') && !/INPUT|TEXTAREA/.test(document.activeElement?.tagName)) togglePanel(form.hidden)
  })

  form.onsubmit = async (e) => {
    e.preventDefault()
    const btn = form.querySelector('button:not([type=button])'); btn.disabled = true; msg.textContent = ''
    try {
      const fd = new FormData()
      for (const [k, v] of [['name', form.name.value], ['wish', form.wish.value], ['color', form.c.value], ['model', form.model.value], ['deco', form.deco.value]]) fd.append(k, v)
      const file = form.media.files[0]
      if (file) fd.append('media', await prepare(file))
      const r = await fetch('/api/krathongs', { method: 'POST', body: fd })
      if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error)
      add(await r.json(), true); form.wish.value = ''; form.media.value = ''; fileName.textContent = FILE_HINT
    } catch (err) { msg.textContent = err?.message || 'ลอยไม่สำเร็จ ลองใหม่อีกครั้ง' }
    btn.disabled = false
  }

  /* ---------- แนบรูป/วิดีโอ ---------- */
  const fileName = document.getElementById('fileName'), FILE_HINT = fileName.textContent
  form.media.onchange = () => { fileName.textContent = form.media.files[0]?.name.slice(0, 28) || FILE_HINT; msg.textContent = '' }
  // รูป: วาดผ่าน canvas ก่อนส่ง = ลบ EXIF (เช่นพิกัด GPS ในรูปถ่าย) และย่อเหลือ ≤1280px · GIF จะเหลือเฟรมแรก · วิดีโอส่งตามเดิม (≤10 MB)
  async function prepare(file) {
    if (file.type.startsWith('video/')) {
      if (file.size > 10 * 1024 * 1024) throw new Error('วิดีโอใหญ่เกิน 10 MB')
      return file
    }
    let bmp
    try { bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }) } catch { throw new Error('ไฟล์นี้ไม่ใช่รูป/วิดีโอที่รองรับ (PNG, JPEG, WebP, GIF, MP4, WebM)') }
    const s = Math.min(1, 1280 / Math.max(bmp.width, bmp.height)), c = document.createElement('canvas')
    c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s)
    c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height)
    const blob = (await new Promise((r) => c.toBlob(r, 'image/webp', 0.85))) ?? (await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.85)))
    return new File([blob], 'photo', { type: blob.type })
  }
}
