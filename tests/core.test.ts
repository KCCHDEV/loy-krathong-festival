// framework ที่เขียนเอง: schema, JSX, cookie, router, body, SSE, OpenAPI — ทดสอบด้วย App ตรงๆ ไม่แตะแอพจริง
import { describe, expect, it } from 'bun:test'
import { App, sse } from '../core/server'
import { t, validate, parseSize, toJsonSchema } from '../core/schema'
import { escapeHtml, jsx, Fragment, renderToStream, Suspense } from '../core/jsx'
import { CookieJar, unsign } from '../core/cookie'
import { buildSpec } from '../core/openapi'

const call = (app: App, path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))
const json = (body: unknown): RequestInit => ({ method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })

describe('schema', () => {
  const User = t.Object({ name: t.String({ minLength: 1 }), age: t.Optional(t.Numeric({ minimum: 0 })), role: t.Union([t.Literal('a'), t.Literal('b')]) })

  it('ผ่าน: ตัด key ที่ไม่ได้ประกาศ และแปลง Numeric จากข้อความ', () => {
    const r = validate(User, { name: 'x', age: '7', role: 'a', extra: 1 })
    expect(r).toEqual({ ok: true, value: { name: 'x', age: 7, role: 'a' } })
  })

  it('ไม่ผ่าน: รายงาน path และข้อความ error ที่ตั้งเอง', () => {
    const r = validate(t.Object({ n: t.String({ error: 'ต้องใส่ชื่อ' }), tags: t.Array(t.Integer()) }), { n: 1, tags: [1, 'x'] })
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.issues.map((i) => [i.path, i.message])).toEqual([['/n', 'ต้องใส่ชื่อ'], ['/tags/1', 'Expected number']])
  })

  it('format email, min/max, additionalProperties: true', () => {
    expect(validate(t.String({ format: 'email' }), 'a@b.co').ok).toBe(true)
    expect(validate(t.String({ format: 'email' }), 'nope').ok).toBe(false)
    expect(validate(t.Number({ maximum: 3 }), 4).ok).toBe(false)
    expect(validate(t.Object({ a: t.String() }, { additionalProperties: true }), { a: 'x', b: 2 })).toEqual({ ok: true, value: { a: 'x', b: 2 } })
  })

  it('parseSize และ JSON Schema', () => {
    expect(parseSize('5m')).toBe(5 * 1024 * 1024)
    expect(parseSize('500k')).toBe(512_000)
    expect(toJsonSchema(User)).toMatchObject({ type: 'object', required: ['name', 'role'] })
  })
})

describe('JSX runtime', () => {
  it('attribute ถูก escape เสมอ, safe escape เนื้อหา, boolean/null ตามกติกา', () => {
    expect(jsx('a', { href: '"><script>', children: 'x' })).toBe('<a href="&quot;&gt;&lt;script&gt;">x</a>')
    expect(jsx('p', { safe: true, children: '<b>' })).toBe('<p>&lt;b&gt;</p>')
    expect(jsx('p', { children: '<b>' })).toBe('<p><b></p>')
    expect(jsx('input', { disabled: true, hidden: false, value: null, name: 'n' })).toBe('<input disabled name="n"/>')
    expect(jsx('ul', { children: [jsx('li', { children: 1 }), null, false, jsx('li', { children: 2 })] })).toBe('<ul><li>1</li><li>2</li></ul>')
  })

  it('component, Fragment และ async component', async () => {
    const Hello = ({ name }: { name: string }) => jsx('b', { safe: true, children: name })
    expect(jsx(Hello, { name: '<x>' })).toBe('<b>&lt;x&gt;</b>')
    expect(jsx(Fragment, { children: ['a', 'b'] })).toBe('ab')
    const Slow = async () => jsx('i', { children: 'late' })
    const out = jsx('div', { children: [jsx(Slow, {}), 'z'] })
    expect(out).toBeInstanceOf(Promise)
    expect(await out).toBe('<div><i>late</i>z</div>')
    expect(escapeHtml(`&<>"'`)).toBe('&amp;&lt;&gt;&quot;&#39;')
  })

  it('renderToStream: ส่ง fallback ก่อน แล้วสลับด้วยเนื้อหาจริง และ catch เมื่อ error', async () => {
    const stream = renderToStream((rid) =>
      jsx('main', {
        children: [
          jsx(Suspense, { rid, fallback: 'wait', children: Bun.sleep(5).then(() => 'DONE') as any }),
          jsx(Suspense, { rid, fallback: 'wait2', catch: 'OOPS', children: Promise.reject(new Error('x')) as any }),
        ],
      }),
    )
    const text = await new Response(stream).text()
    expect(text).toContain('<div id="B:')
    expect(text).toContain('wait')
    expect(text).toContain('>DONE</template>')
    expect(text).toContain('>OOPS</template>')
  })
})

describe('cookie', () => {
  const secret = 'shh'
  const signed = new Set(['s'])

  it('เซ็นแล้วอ่านกลับได้ · ลายเซ็นปลอมถูกปฏิเสธ', () => {
    const jar = new CookieJar(null, secret, signed)
    jar.proxy().s!.set({ value: 'ann', httpOnly: true, maxAge: 60 })
    const line = jar.headers[0]!
    expect(line).toContain('HttpOnly')
    const raw = decodeURIComponent(/^s=([^;]+)/.exec(line)![1]!)
    expect(unsign(raw, secret)).toBe('ann')
    expect(unsign(raw, 'other')).toBe(false)

    const back = new CookieJar(`s=${encodeURIComponent(raw)}`, secret, signed)
    expect(back.proxy().s!.value).toBe('ann')
    expect(() => new CookieJar('s=ann.forged', secret, signed).verifyAll()).toThrow()
  })

  it('cookie ธรรมดาไม่เซ็น · remove ตั้ง Max-Age=0', () => {
    const jar = new CookieJar('plain=v%20x', secret, signed)
    expect(jar.proxy().plain!.value).toBe('v x')
    jar.proxy().plain!.remove()
    expect(jar.headers[0]).toContain('Max-Age=0')
    expect(jar.proxy().plain!.value).toBeUndefined()
  })
})

describe('server', () => {
  const app = new App()
    .get('/', () => 'root')
    .get('/users/me', () => 'me')
    .get('/users/:id', ({ params }) => ({ id: params.id }), { params: t.Object({ id: t.Numeric() }) })
    .get('/files/*', ({ params }) => params['*'])
    .post('/echo', ({ body }) => body, { body: t.Object({ n: t.Numeric(), file: t.Optional(t.File()) }, { additionalProperties: false }) })
    .get('/gen', async function* () {
      yield sse({ event: 'a', data: 'one\ntwo' })
      yield sse({ data: { k: 1 }, id: 7 })
    })
    .get('/status', ({ status }) => status(418, { tea: true }))
    .get('/cookie', ({ cookie, set }) => {
      cookie.visit!.set({ value: '1', maxAge: 5 })
      set.headers['x-extra'] = 'yes'
      return 'ok'
    })
    .get('/boom', () => {
      throw new Error('nope')
    })

  it('static ชนะ param ชนะ wildcard · trailing slash · decode param', async () => {
    expect(await (await call(app, '/users/me')).text()).toBe('me')
    expect(await (await call(app, '/users/42/')).json()).toEqual({ id: 42 })
    expect(await (await call(app, '/files/a%20b/c.txt')).text()).toBe('a b/c.txt')
    expect(await (await call(app, '/')).text()).toBe('root')
    expect((await call(app, '/users/abc')).status).toBe(422)
    expect((await call(app, '/nowhere')).status).toBe(404)
  })

  it('HEAD ใช้ handler ของ GET แต่ไม่ส่ง body', async () => {
    const res = await call(app, '/users/me', { method: 'HEAD' })
    expect(res.status).toBe(200)
    expect(await res.text()).toBe('')
  })

  it('อ่าน body: json / form / multipart / json พัง = 400', async () => {
    expect(await (await call(app, '/echo', json({ n: '3', x: 1 }))).json()).toEqual({ n: 3 })
    const form = await call(app, '/echo', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'n=9' })
    expect(await form.json()).toEqual({ n: 9 })
    const fd = new FormData()
    fd.append('n', '5')
    fd.append('file', new File(['abc'], 'a.txt'))
    expect((await call(app, '/echo', { method: 'POST', body: fd })).status).toBe(200)
    const bad = await call(app, '/echo', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{oops' })
    expect(bad.status).toBe(400)
  })

  it('SSE: จัดรูปแบบ event และตั้ง content-type', async () => {
    const res = await call(app, '/gen')
    expect(res.headers.get('content-type')).toContain('text/event-stream')
    expect(await res.text()).toBe('event: a\ndata: one\ndata: two\n\nid: 7\ndata: {"k":1}\n\n')
  })

  it('status(), set.headers, Set-Cookie และ error ทั่วไป = 500', async () => {
    const s = await call(app, '/status')
    expect(s.status).toBe(418)
    expect(await s.json()).toEqual({ tea: true })
    const c = await call(app, '/cookie')
    expect(c.headers.get('x-extra')).toBe('yes')
    expect(c.headers.getSetCookie()[0]).toContain('visit=1')
    expect((await call(app, '/boom')).status).toBe(500)
  })

  it('onRequest ตัดจบได้ · derive ต่อ context · onError ตั้งเอง', async () => {
    const a = new App()
      .onRequest((ctx) => (ctx.path === '/blocked' ? new Response('no', { status: 403 }) : undefined))
      .derive(() => ({ who: 'me' }))
      .get('/who', ({ who }) => who)
      .get('/err', () => {
        throw new Error('x')
      })
      .onError(({ set }) => ((set.status = 599), 'custom'))
    expect((await call(a, '/blocked')).status).toBe(403)
    expect(await (await call(a, '/who')).text()).toBe('me')
    const e = await call(a, '/err')
    expect([e.status, await e.text()]).toEqual([599, 'custom'])
  })
})

describe('ความเร็ว: ทางลัดของ pipeline', () => {
  const app = new App({ htmlSecurityHeaders: true, serverTiming: true })
    .get('/sync', () => 'plain')
    .get('/async', async () => 'plain')
    .get('/page', () => '<html><body>x</body></html>')
    .get('/json', () => ({ a: 1 }))
    .get('/typed', ({ set }) => ((set.headers['Content-Type'] = 'text/javascript'), 'export {}'))
    .get('/users/:id', ({ params }) => params.id)
  app.lazy('answer', () => 42)
  app.get('/lazy', ({ answer }) => String(answer))

  it('handler sync = ได้ Response ทันที (ไม่ผ่าน Promise) · handler async = Promise', async () => {
    const req = (p: string) => new Request(`http://localhost${p}`)
    expect(app.handle(req('/sync'))).toBeInstanceOf(Response)
    expect(app.handle(req('/users/9'))).toBeInstanceOf(Response)
    expect(app.handle(req('/async'))).toBeInstanceOf(Promise)
    expect(await (await app.handle(req('/async'))).text()).toBe('plain')
  })

  it('header ความปลอดภัยใส่เฉพาะ HTML · JSON/ข้อความธรรมดาไม่มี · ทุกคำตอบมี Server-Timing', async () => {
    const html = await call(app, '/page')
    expect(html.headers.get('x-frame-options')).toBe('SAMEORIGIN')
    expect(html.headers.get('x-content-type-options')).toBe('nosniff')
    const json = await call(app, '/json')
    expect(json.headers.get('x-frame-options')).toBeNull()
    expect(json.headers.get('server-timing')).toMatch(/^app;dur=/)
  })

  it('set.headers ทับ content-type เริ่มต้นได้ (ไม่สนตัวพิมพ์)', async () => {
    expect((await call(app, '/typed')).headers.get('content-type')).toBe('text/javascript')
  })

  it('lazy(): สร้างค่าเมื่ออ่านครั้งแรก', async () => {
    expect(await (await call(app, '/lazy')).text()).toBe('42')
  })

  it('exact route และ route มี param ไม่ปนกัน', async () => {
    expect(await (await call(app, '/users/abc')).text()).toBe('abc')
    expect((await call(app, '/users')).status).toBe(404)
  })
})

describe('บีบอัดและ header ของหน้า cache', () => {
  const big = '<p>' + 'สวัสดี '.repeat(600) + '</p>'
  const app = new App({ compress: true }).get('/big', () => big).get('/small', () => '<p>x</p>')
  const gz = { 'accept-encoding': 'gzip, br' }

  it('บีบ gzip เมื่อ >1KB และ client รองรับ · เล็กหรือไม่รองรับ = ไม่บีบ', async () => {
    const res = await call(app, '/big', { headers: gz })
    expect(res.headers.get('content-encoding')).toBe('gzip')
    expect(res.headers.get('vary')).toBe('Accept-Encoding')
    const raw = new Uint8Array(await res.arrayBuffer())
    expect(raw.length).toBeLessThan(big.length / 2)
    expect(new TextDecoder().decode(Bun.gunzipSync(raw))).toBe(big)
    expect((await call(app, '/big')).headers.get('content-encoding')).toBeNull()
    expect((await call(app, '/small', { headers: gz })).headers.get('content-encoding')).toBeNull()
  })
})

describe('openapi', () => {
  it('สร้างสเปกจาก schema ของ route /api/* เท่านั้น', () => {
    const app = new App()
      .get('/api/items/:id', () => 1, { params: t.Object({ id: t.Numeric() }), detail: { summary: 'ดึงรายการ' } })
      .post('/api/items', () => 1, { body: t.Object({ name: t.String() }) })
      .get('/page', () => 'x')
    const spec = buildSpec(app) as any
    expect(Object.keys(spec.paths).sort()).toEqual(['/api/items', '/api/items/{id}'])
    expect(spec.paths['/api/items/{id}'].get.summary).toBe('ดึงรายการ')
    expect(spec.paths['/api/items/{id}'].get.parameters[0]).toMatchObject({ name: 'id', in: 'path' })
    expect(spec.paths['/api/items'].post.requestBody.content['application/json'].schema.required).toEqual(['name'])
  })
})
