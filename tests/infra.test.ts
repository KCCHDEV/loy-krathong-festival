// ระบบโครงสร้างพื้นฐาน: rate limit, CORS, JWT, resilience, config, metrics, jobs/cron, health, shutdown, load balancer
import { afterAll, describe, expect, it } from 'bun:test'
import { App } from '../core/server'
import { t, type Schema } from '../core/schema'
import { Limiter, parseRate, rateLimit } from '../core/ratelimit'
import { cors, originAllowed } from '../core/cors'
import { signJwt, verifyJwt, JwtError, bearerToken, jwtGuard } from '../core/jwt'
import { retry, withTimeout, CircuitBreaker, CircuitOpenError, Bulkhead, BulkheadFullError, TimeoutError, resilientFetch } from '../core/resilience'
import { loadConfig, ConfigError, productionSecretProblems, checkProductionSecrets } from '../core/config'
import { Registry, metrics } from '../core/metrics'
import { JobQueue, parseCron, cronMatches, nextCron } from '../core/jobs'
import { health } from '../core/health'
import { LoadBalancer, fnv1a } from '../core/lb'

const call = (app: App, path: string, init?: RequestInit) => app.handle(new Request(`http://localhost${path}`, init))

describe('rate limit', () => {
  it('Limiter: นับตามหน้าต่าง · เต็มแล้วปฏิเสธ · หน้าต่างใหม่ใช้ได้อีก', () => {
    const l = new Limiter(3, 1000)
    const t0 = 1_000_000
    expect([1, 2, 3].map(() => l.hit('a', t0).allowed)).toEqual([true, true, true])
    const denied = l.hit('a', t0 + 10)
    expect(denied.allowed).toBe(false)
    expect(denied.retryAfterMs).toBeGreaterThanOrEqual(1000)
    expect(l.hit('b', t0).allowed).toBe(true) // key อื่นไม่เกี่ยว
    expect(l.hit('a', t0 + 2500).allowed).toBe(true) // ผ่านไป >2 หน้าต่าง
  })

  it('sliding window: ไม่ให้ยิงสองเท่าตรงรอยต่อหน้าต่าง', () => {
    const l = new Limiter(10, 1000)
    const base = 5_000_000
    for (let i = 0; i < 10; i++) expect(l.hit('k', base + 900).allowed).toBe(true) // ท้ายหน้าต่างแรก
    // ต้นหน้าต่างถัดไป: หน้าต่างก่อนหน้ายังถ่วงน้ำหนักอยู่เกือบเต็ม → ต้องไม่ผ่านทันที
    expect(l.hit('k', base + 1100).allowed).toBe(false)
    expect(l.hit('k', base + 1990).allowed).toBe(false) // หน้าต่างใหม่เริ่ม base+1900: น้ำหนักเก่ายังเหลือ 91%
    expect(l.hit('k', base + 2800).allowed).toBe(true) // น้ำหนักเก่าเหลือ 20% → ใช้ได้อีก
  })

  it('sweep ลบ key เก่า · parseRate แปลง env', () => {
    const l = new Limiter(1, 1000)
    l.hit('x', 0)
    expect(l.sweep(5000)).toBe(1)
    expect(l.size).toBe(0)
    expect(parseRate('120/60')).toEqual({ max: 120, windowMs: 60_000 })
    expect(parseRate('5/500ms')).toEqual({ max: 5, windowMs: 500 })
    expect(parseRate('abc')).toBeNull()
  })

  it('plugin: 429 + Retry-After เมื่อเกิน · ข้าม path ที่ skip · แยกตาม rule', async () => {
    const app = new App()
    app.use(rateLimit({ rules: [{ path: '/login', max: 2, windowMs: 60_000 }, { max: 5, windowMs: 60_000 }], skip: ['/public/'] }))
    app.get('/login', () => 'ok').get('/x', () => 'ok').get('/public/a', () => 'ok')
    expect([200, 200].every(async () => (await call(app, '/login')).status === 200)).toBe(true)
    const third = await call(app, '/login')
    expect(third.status).toBe(429)
    expect(Number(third.headers.get('retry-after'))).toBeGreaterThanOrEqual(1)
    expect((await third.json()).error).toContain('ถี่')
    expect((await call(app, '/x')).status).toBe(200) // rule ทั่วไปยังไม่เต็ม
    for (let i = 0; i < 20; i++) expect((await call(app, '/public/a')).status).toBe(200)
  })

  it('ไม่ระบุ max/windowMs = ผิดพลาดตั้งแต่ลงทะเบียน', () => {
    expect(() => new App().use(rateLimit({}))).toThrow()
  })
})

describe('CORS', () => {
  const app = new App()
  app.use(cors({ origin: ['https://a.example'], credentials: true, expose: ['x-total'], maxAge: 600, paths: ['/api/'] }))
  app.get('/api/x', () => ({ ok: 1 })).get('/page', () => 'p')

  it('origin ที่อนุญาต: ใส่ header ให้ · preflight ตอบ 204', async () => {
    const res = await call(app, '/api/x', { headers: { origin: 'https://a.example' } })
    expect(res.headers.get('access-control-allow-origin')).toBe('https://a.example')
    expect(res.headers.get('access-control-allow-credentials')).toBe('true')
    expect(res.headers.get('vary')).toBe('Origin')
    const pre = await call(app, '/api/x', { method: 'OPTIONS', headers: { origin: 'https://a.example', 'access-control-request-method': 'POST', 'access-control-request-headers': 'content-type' } })
    expect(pre.status).toBe(204)
    expect(pre.headers.get('access-control-allow-methods')).toContain('POST')
    expect(pre.headers.get('access-control-allow-headers')).toBe('content-type')
    expect(pre.headers.get('access-control-max-age')).toBe('600')
  })

  it('origin อื่น / path นอกขอบเขต / ไม่มี Origin = ไม่ใส่ header', async () => {
    expect((await call(app, '/api/x', { headers: { origin: 'https://evil.example' } })).headers.get('access-control-allow-origin')).toBeNull()
    expect((await call(app, '/page', { headers: { origin: 'https://a.example' } })).headers.get('access-control-allow-origin')).toBeNull()
    expect((await call(app, '/api/x')).headers.get('access-control-allow-origin')).toBeNull()
  })

  it('originAllowed รองรับ string/array/regex/function · credentials กับ * ถูกปฏิเสธ', () => {
    expect(originAllowed('https://x.com', '*')).toBe(true)
    expect(originAllowed('https://x.com', /\.com$/)).toBe(true)
    expect(originAllowed('https://x.com', (o) => o.startsWith('https'))).toBe(true)
    expect(originAllowed('http://x.com', ['https://x.com'])).toBe(false)
    expect(() => new App().use(cors({ origin: '*', credentials: true }))).toThrow()
  })
})

describe('JWT', () => {
  const secret = 'super-secret-key'

  it('sign → verify ได้ claims เดิม · แก้ payload/secret ผิด/หมดอายุ/ยังไม่ถึงเวลา ถูกปฏิเสธ', () => {
    const token = signJwt({ sub: 'u1', role: 'admin' }, secret, { expiresIn: 60 })
    expect(verifyJwt(token, secret)).toMatchObject({ sub: 'u1', role: 'admin' })

    const reason = (fn: () => unknown) => {
      try {
        fn()
      } catch (e) {
        return (e as JwtError).reason
      }
    }
    expect(reason(() => verifyJwt(token, 'wrong'))).toBe('signature')
    const [h, , s] = token.split('.')
    const forged = `${h}.${Buffer.from(JSON.stringify({ sub: 'u1', role: 'root' })).toString('base64url')}.${s}`
    expect(reason(() => verifyJwt(forged, secret))).toBe('signature')
    expect(reason(() => verifyJwt(token, secret, { now: Math.floor(Date.now() / 1000) + 120 }))).toBe('expired')
    expect(reason(() => verifyJwt(signJwt({}, secret, { notBefore: 100 }), secret))).toBe('not-yet')
    expect(reason(() => verifyJwt('a.b', secret))).toBe('malformed')
    expect(reason(() => verifyJwt(signJwt({ iss: 'x' }, secret), secret, { issuer: 'y' }))).toBe('issuer')
  })

  it('ปฏิเสธ alg none และ alg อื่น', () => {
    const none = `${Buffer.from('{"alg":"none"}').toString('base64url')}.${Buffer.from('{"sub":"u1"}').toString('base64url')}.`
    expect(() => verifyJwt(none, secret)).toThrow(JwtError)
    const hs512 = `${Buffer.from('{"alg":"HS512"}').toString('base64url')}.${Buffer.from('{}').toString('base64url')}.x`
    expect(() => verifyJwt(hs512, secret)).toThrow(JwtError)
  })

  it('bearerToken + jwtGuard: ไม่มี/ผิด = 401, ถูก = ได้ user', async () => {
    expect(bearerToken(new Request('http://x', { headers: { authorization: 'Bearer abc' } }))).toBe('abc')
    expect(bearerToken(new Request('http://x', { headers: { authorization: 'Basic abc' } }))).toBeNull()

    const g = jwtGuard(secret)
    const app = new App()
    app.route('GET', '/me', ({ user }) => ({ user }), { beforeHandle: async (ctx: any) => (Object.assign(ctx, await g.derive!(ctx)), g.beforeHandle!(ctx)) })
    expect((await call(app, '/me')).status).toBe(401)
    expect((await call(app, '/me', { headers: { authorization: 'Bearer nope' } })).status).toBe(401)
    const ok = await call(app, '/me', { headers: { authorization: `Bearer ${signJwt({ sub: 'u9' }, secret, { expiresIn: 30 })}` } })
    expect(ok.status).toBe(200)
    expect((await ok.json()).user.sub).toBe('u9')
  })
})

describe('resilience', () => {
  const fastSleep = async () => {}

  it('retry: ลองซ้ำจนสำเร็จ · เกินจำนวนครั้งโยน error · shouldRetry ตัดได้', async () => {
    let n = 0
    expect(await retry(async () => (++n < 3 ? Promise.reject(new Error('x')) : 'ok'), { retries: 3, sleep: fastSleep })).toBe('ok')
    expect(n).toBe(3)
    let m = 0
    await expect(retry(async () => (m++, Promise.reject(new Error('always'))), { retries: 2, sleep: fastSleep })).rejects.toThrow('always')
    expect(m).toBe(3)
    let k = 0
    await expect(retry(async () => (k++, Promise.reject(new Error('fatal'))), { retries: 5, sleep: fastSleep, shouldRetry: () => false })).rejects.toThrow()
    expect(k).toBe(1)
  })

  it('withTimeout: เกินเวลา = TimeoutError และสั่ง abort signal', async () => {
    let aborted = false
    await expect(withTimeout((signal) => new Promise((_, rej) => { signal.addEventListener('abort', () => { aborted = true; rej(new Error('aborted')) }) }), 20)).rejects.toBeInstanceOf(TimeoutError)
    expect(aborted).toBe(true)
    expect(await withTimeout(async () => 7, 100)).toBe(7)
  })

  it('CircuitBreaker: ล้มติดกัน → open → รอ → half-open ลอง → ปิดเมื่อสำเร็จ', async () => {
    let now = 0
    const b = new CircuitBreaker({ failureThreshold: 3, resetMs: 1000, now: () => now })
    const fail = () => b.run(() => Promise.reject(new Error('boom'))).catch((e) => e)
    for (let i = 0; i < 3; i++) await fail()
    expect(b.state).toBe('open')
    expect(await fail()).toBeInstanceOf(CircuitOpenError) // ไม่ได้เรียก fn จริง
    now = 1500
    expect(await b.run(async () => 'recovered')).toBe('recovered')
    expect(b.state).toBe('closed')
    // half-open แล้วล้ม → กลับไป open ทันที
    for (let i = 0; i < 3; i++) await fail()
    now = 3000
    await fail()
    expect(b.state).toBe('open')
  })

  it('Bulkhead: จำกัดพร้อมกัน · คิวเต็มโยน BulkheadFullError', async () => {
    const b = new Bulkhead(2, 1)
    let active = 0
    let peak = 0
    const job = async () => {
      peak = Math.max(peak, ++active)
      await Bun.sleep(20)
      active--
    }
    await Promise.all([b.run(job), b.run(job), b.run(job)])
    expect(peak).toBe(2)
    const slow = () => Bun.sleep(30)
    const running = [b.run(slow), b.run(slow), b.run(slow)] // 2 ทำอยู่ + 1 รอ
    await expect(b.run(slow)).rejects.toBeInstanceOf(BulkheadFullError)
    await Promise.all(running)
  })

  it('resilientFetch: 503 แล้วสำเร็จ = ลองซ้ำ · POST ไม่ลองซ้ำ', async () => {
    let calls = 0
    const srv = Bun.serve({ port: 0, fetch: () => (++calls < 3 ? new Response('busy', { status: 503 }) : new Response('fine')) })
    try {
      const url = `http://localhost:${srv.port}/`
      const res = await resilientFetch(url, {}, { retries: 3, baseMs: 1, timeoutMs: 1000 })
      expect(await res.text()).toBe('fine')
      expect(calls).toBe(3)

      calls = 0
      const post = await resilientFetch(url, { method: 'POST' }, { retries: 3, baseMs: 1, timeoutMs: 1000 })
      expect(post.status).toBe(503) // ไม่ลองซ้ำ POST
      expect(calls).toBe(1)
    } finally {
      srv.stop(true)
    }
  })
})

describe('config', () => {
  it('loadConfig: แปลงชนิด + รายงานทุกค่าที่ผิดในครั้งเดียว', () => {
    const shape: Record<string, Schema> = { PORT: t.Numeric({ minimum: 1, maximum: 65535 }), NAME: t.String({ minLength: 3 }) }
    expect(loadConfig(shape, { PORT: '8080', NAME: 'abc' })).toEqual({ PORT: 8080, NAME: 'abc' })
    try {
      loadConfig(shape, { PORT: '99999', NAME: 'x' })
      throw new Error('ต้อง throw')
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError)
      expect((e as ConfigError).problems.map((p) => p.split(':')[0]).sort()).toEqual(['NAME', 'PORT'])
    }
  })

  it('secret ใน production: เตือนค่าเริ่มต้น/สั้น · STRICT_SECRETS=1 = throw · dev ไม่ว่า', () => {
    expect(productionSecretProblems({ NODE_ENV: 'development' })).toEqual([])
    expect(productionSecretProblems({ NODE_ENV: 'production' })).toHaveLength(2)
    expect(productionSecretProblems({ NODE_ENV: 'production', COOKIE_SECRET: 'dev-cookie-secret', ADMIN_KEY: 'x'.repeat(20) })).toHaveLength(1)
    expect(productionSecretProblems({ NODE_ENV: 'production', COOKIE_SECRET: 'a'.repeat(32), ADMIN_KEY: 'b'.repeat(32) })).toEqual([])
    expect(() => checkProductionSecrets({ NODE_ENV: 'production', STRICT_SECRETS: '1' })).toThrow(ConfigError)
    expect(checkProductionSecrets({ NODE_ENV: 'production' }).length).toBeGreaterThan(0)
  })
})

describe('metrics', () => {
  it('Counter/Gauge/Histogram: รูปแบบ Prometheus และ quantile', () => {
    const r = new Registry()
    const c = r.counter('orders_total', 'orders', ['status'])
    c.inc({ status: 'paid' })
    c.inc({ status: 'paid' }, 2)
    c.inc({ status: 'new' })
    r.gauge('queue_depth', 'depth').set(7)
    const h = r.histogram('lat_seconds', 'latency', ['route'], [0.1, 1])
    ;[0.05, 0.05, 0.5, 5].forEach((v) => h.observe(v, { route: '/x' }))
    const text = r.render()
    expect(text).toContain('# TYPE orders_total counter')
    expect(text).toContain('orders_total{status="paid"} 3')
    expect(text).toContain('queue_depth 7')
    expect(text).toContain('lat_seconds_bucket{route="/x",le="0.1"} 2')
    expect(text).toContain('lat_seconds_bucket{route="/x",le="1"} 3')
    expect(text).toContain('lat_seconds_bucket{route="/x",le="+Inf"} 4')
    expect(text).toContain('lat_seconds_count{route="/x"} 4')
    expect(h.quantile(0.5, { route: '/x' })).toBe(0.1)
    expect(h.quantile(0.99, { route: '/x' })).toBe(Infinity)
  })

  it('plugin: นับ request ตาม pattern ของ route (ไม่ใช่ URL จริง) และเปิด /metrics', async () => {
    const reg = new Registry()
    const app = new App()
    app.use(metrics({ registry: reg }))
    app.get('/users/:id', ({ params }) => params.id)
    await call(app, '/users/1')
    await call(app, '/users/2')
    await call(app, '/nope')
    const text = await (await call(app, '/metrics')).text()
    expect(text).toContain('http_requests_total{method="GET",route="/users/:id",status="200"} 2')
    expect(text).toContain('http_requests_total{method="GET",route="unmatched",status="404"} 1')
    expect(text).toContain('http_request_duration_seconds_count{method="GET",route="/users/:id"} 2')
    expect(text).toContain('process_resident_memory_bytes')
    expect(text).not.toContain('route="/metrics"')
  })
})

describe('jobs + cron', () => {
  it('cron: parse, match, next', () => {
    const spec = parseCron('*/15 9-17 * * 1-5')
    const monday10 = new Date(2026, 10, 2, 10, 30) // จันทร์ 2 พ.ย. 2026 10:30
    expect(cronMatches(spec, monday10)).toBe(true)
    expect(cronMatches(spec, new Date(2026, 10, 2, 10, 31))).toBe(false)
    expect(cronMatches(spec, new Date(2026, 10, 1, 10, 30))).toBe(false) // อาทิตย์
    expect(nextCron(spec, new Date(2026, 10, 2, 17, 50))?.getHours()).toBe(9) // ข้ามไปวันถัดไป 09:00
    expect(() => parseCron('* * *')).toThrow()
    expect(() => parseCron('60 * * * *')).toThrow()
    expect(cronMatches(parseCron('0 0 * * 7'), new Date(2026, 10, 1, 0, 0))).toBe(true) // 7 = อาทิตย์
  })

  it('enqueue → tick ทำงาน · payload ถึง handler · uniqueKey ซ้ำไม่เข้า', async () => {
    const q = new JobQueue(':memory:')
    const seen: unknown[] = []
    q.define('greet', (p) => void seen.push(p))
    const id = q.enqueue('greet', { n: 1 }, { uniqueKey: 'k1' })
    expect(id).toBeGreaterThan(0)
    expect(q.enqueue('greet', { n: 2 }, { uniqueKey: 'k1' })).toBeNull()
    expect(await q.tick()).toBe(1)
    expect(seen).toEqual([{ n: 1 }])
    expect(q.stats()).toMatchObject({ done: 1, pending: 0, total: 1 })
    q.close()
  })

  it('งานที่ถึงเวลาเท่านั้นถูกทำ (delay) · งานไม่มี handler ไม่ถูกแตะ', async () => {
    const q = new JobQueue(':memory:')
    let ran = 0
    q.define('later', () => void ran++)
    q.enqueue('later', {}, { delayMs: 60_000 })
    q.enqueue('orphan', {})
    expect(await q.tick()).toBe(0)
    expect(ran).toBe(0)
    expect(q.stats().pending).toBe(2)
    q.close()
  })

  it('ล้มเหลว → ลองใหม่ตาม backoff จนครบ maxAttempts แล้วเป็น failed พร้อมข้อความ error', async () => {
    const q = new JobQueue(':memory:')
    let attempts = 0
    q.define('flaky', () => {
      attempts++
      throw new Error('boom ' + attempts)
    }, { maxAttempts: 3, backoffMs: () => 0 })
    q.enqueue('flaky')
    await q.tick()
    expect(q.stats().pending).toBe(1) // รอลองใหม่
    await q.tick()
    await q.tick()
    expect(attempts).toBe(3)
    expect(q.stats()).toMatchObject({ failed: 1, pending: 0 })
    expect(q.list({ status: 'failed' })[0]!.last_error).toBe('boom 3')
    q.close()
  })

  it('ลองใหม่แล้วสำเร็จ = done และล้าง error', async () => {
    const q = new JobQueue(':memory:')
    let n = 0
    q.define('once-bad', () => {
      if (++n === 1) throw new Error('first')
    }, { backoffMs: () => 0 })
    q.enqueue('once-bad')
    await q.tick()
    await q.tick()
    expect(q.stats().done).toBe(1)
    expect(q.list()[0]!.last_error).toBeNull()
    q.close()
  })

  it('concurrency จำกัดจำนวนงานชนิดเดียวกันที่ทำพร้อมกัน', async () => {
    const q = new JobQueue(':memory:')
    let active = 0
    let peak = 0
    q.define('slow', async () => {
      peak = Math.max(peak, ++active)
      await Bun.sleep(15)
      active--
    }, { concurrency: 2 })
    for (let i = 0; i < 6; i++) q.enqueue('slow')
    while (q.stats().done < 6) await q.tick()
    expect(peak).toBe(2)
    q.close()
  })

  it('งานค้าง running (process ตาย) ถูกดึงกลับหลัง visibility', async () => {
    const q = new JobQueue(':memory:', { visibilityMs: 10 })
    q.define('x', () => {})
    q.enqueue('x')
    q.db.query(`UPDATE jobs SET status = 'running', locked_at = ?`).run(Date.now() - 1000)
    expect(q.stats().running).toBe(1)
    await q.tick()
    expect(q.stats().done).toBe(1)
    q.close()
  })

  it('cron ใส่งานครั้งเดียวต่อนาที แม้เรียกซ้ำ/หลาย process ใช้ DB เดียวกัน', () => {
    const q = new JobQueue(':memory:')
    q.cron('* * * * *', 'tick', () => {})
    const now = new Date(2026, 10, 4, 12, 0, 30)
    expect(q.checkCron(now)).toBe(1)
    expect(q.checkCron(new Date(2026, 10, 4, 12, 0, 50))).toBe(0) // นาทีเดิม
    expect(q.checkCron(new Date(2026, 10, 4, 12, 1, 0))).toBe(1)
    expect(q.stats().pending).toBe(2)
    // process อื่น (instance อื่นของ checkCron) ที่เห็นนาทีเดิมก็ใส่ซ้ำไม่ได้เพราะ uniqueKey
    ;(q as any).lastCronMinute = 0
    expect(q.checkCron(new Date(2026, 10, 4, 12, 1, 5))).toBe(0)
    q.close()
  })

  it('start/stop: ดึงงานเองเป็นระยะ และ stop รองานที่ค้างให้จบ', async () => {
    const q = new JobQueue(':memory:', { pollMs: 10 })
    let done = false
    q.define('bg', async () => {
      await Bun.sleep(30)
      done = true
    })
    q.start()
    q.enqueue('bg')
    await Bun.sleep(25)
    await q.stop()
    expect(done).toBe(true)
    q.close()
  })

  it('prune ลบงานเสร็จเก่า', async () => {
    const q = new JobQueue(':memory:')
    q.define('p', () => {})
    q.enqueue('p')
    await q.tick()
    expect(q.prune(-1)).toBe(1)
    expect(q.stats().total).toBe(0)
    q.close()
  })
})

describe('health + shutdown + ip/id', () => {
  it('/healthz เสมอ 200 · /readyz 200 เมื่อทุก check ผ่าน, 503 เมื่อมีตัวล้ม/ช้าเกิน', async () => {
    let dbUp = true
    const app = new App()
    app.use(health({ checks: { db: () => dbUp, slow: () => Bun.sleep(200) }, timeoutMs: 50 }))
    expect((await call(app, '/healthz')).status).toBe(200)
    const slow = await call(app, '/readyz')
    expect(slow.status).toBe(503)
    expect((await slow.json()).checks.slow.error).toContain('timeout')

    const app2 = new App()
    app2.use(health({ checks: { db: () => dbUp } }))
    expect((await call(app2, '/readyz')).status).toBe(200)
    dbUp = false
    expect((await call(app2, '/readyz')).status).toBe(503)
  })

  it('draining: /readyz ตอบ 503 · shutdown รอ request ค้างให้เสร็จก่อน แล้วเรียก hook', async () => {
    const app = new App()
    app.use(health())
    app.get('/slow', async () => {
      await Bun.sleep(80)
      return 'done'
    })
    app.listen({ port: 0 })
    const port = app.server!.port
    let hooked = false
    app.onShutdown(() => void (hooked = true))

    const pending = fetch(`http://localhost:${port}/slow`).then((r) => r.text())
    await Bun.sleep(20)
    expect(app.inflight).toBe(1)
    const stopping = app.shutdown(2000)
    expect(app.draining).toBe(true)
    expect(await pending).toBe('done') // ไม่ถูกตัดกลางทาง
    await stopping
    expect(app.inflight).toBe(0)
    expect(hooked).toBe(true)
    expect((await call(app, '/readyz')).status).toBe(503)
  })

  it('ctx.ip: trustProxy เชื่อ X-Forwarded-For ตัวแรก · ไม่เปิด = ไม่เชื่อ · ctx.id ใช้ X-Request-Id ที่ส่งมา', async () => {
    const make = (trustProxy: boolean) => new App({ trustProxy }).get('/who', ({ ip, id }) => ({ ip, id }))
    const headers = { 'x-forwarded-for': '203.0.113.9, 10.0.0.1', 'x-request-id': 'abc-123' }
    expect(await (await call(make(true), '/who', { headers })).json()).toEqual({ ip: '203.0.113.9', id: 'abc-123' })
    const untrusted = await (await call(make(false), '/who', { headers })).json()
    expect(untrusted.ip).toBe('unknown') // ไม่มี socket จริงในเทส และไม่เชื่อ header
    const generated = await (await call(make(false), '/who')).json()
    expect(generated.id).toMatch(/^[0-9a-z]+-[0-9a-z]+$/)
  })
})

// ───────────── load balancer ─────────────

describe('load balancer', () => {
  const servers: App[] = []
  const stoppers: (() => unknown)[] = []
  afterAll(async () => {
    for (const s of stoppers) await s()
    for (const s of servers) await s.server?.stop(true)
  })

  /** เปิดแอพจำลองหนึ่งตัวบนพอร์ตสุ่ม */
  function backend(name: string) {
    const app = new App({ trustProxy: true })
    app.use(health())
    app.get('/who', () => name)
    app.get('/headers', ({ headers, ip }) => ({ name, ip, headers }))
    app.post('/echo', ({ body }) => ({ name, body }))
    app.get('/status/:code', ({ params, set }) => ((set.status = Number(params.code)), name))
    app.get('/sse', async function* () {
      for (let i = 0; i < 3; i++) {
        yield `data: ${name}-${i}\n\n`
        await Bun.sleep(5)
      }
    })
    app.ws('/ws', { message: (ws, m) => void ws.send(`${name}:${String(m)}`) })
    app.listen({ port: 0 })
    servers.push(app)
    return { app, url: `http://127.0.0.1:${app.server!.port}` }
  }

  async function balancer(urls: (string | { url: string; weight?: number })[], opts: Partial<ConstructorParameters<typeof LoadBalancer>[0]> = {}) {
    const lb = new LoadBalancer({ upstreams: urls, healthIntervalMs: 50, cooldownMs: 100, ...opts })
    await lb.checkAll()
    lb.listen({ port: 0 })
    stoppers.push(() => lb.shutdown(500))
    return { lb, base: `http://127.0.0.1:${lb.server!.port}` }
  }

  const who = async (base: string, n: number) => {
    const out: string[] = []
    for (let i = 0; i < n; i++) out.push(await (await fetch(`${base}/who`)).text())
    return out
  }

  it('round-robin: สลับทีละตัว · weight 3:1 ได้สัดส่วน 3:1', async () => {
    const a = backend('A')
    const b = backend('B')
    const rr = await balancer([a.url, b.url])
    expect((await who(rr.base, 6)).join('')).toBe('ABABAB')

    const w = await balancer([{ url: a.url, weight: 3 }, b.url])
    const picks = await who(w.base, 8)
    expect(picks.filter((x) => x === 'A').length).toBe(6)
    expect(picks.filter((x) => x === 'B').length).toBe(2)
    expect(picks.join('')).not.toContain('AAAA') // smooth: ไม่กองรวมกัน
  })

  it('ip-hash: client เดียวกันไปตัวเดิมเสมอ · fnv1a คงที่', async () => {
    const a = backend('A')
    const b = backend('B')
    const sticky = await balancer([a.url, b.url], { strategy: 'ip-hash', trustProxy: true })
    const get = async (ip: string) => (await fetch(`${sticky.base}/who`, { headers: { 'x-forwarded-for': ip } })).text()
    const first = await get('198.51.100.7')
    for (let i = 0; i < 5; i++) expect(await get('198.51.100.7')).toBe(first)
    const spread = new Set(await Promise.all(Array.from({ length: 20 }, (_, i) => get(`10.0.${i}.1`))))
    expect(spread.size).toBe(2)
    expect(fnv1a('abc')).toBe(fnv1a('abc'))
  })

  it('least-connections: เลือกตัวที่ว่างกว่า', async () => {
    const a = backend('A')
    const b = backend('B')
    const { lb, base } = await balancer([a.url, b.url], { strategy: 'least-connections' })
    lb.nodes[0]!.active = 5 // จำลองว่า A ยุ่งอยู่
    expect((await who(base, 4)).join('')).toBe('BBBB')
  })

  it('ส่งต่อ header: X-Forwarded-For/Proto/Host และ backend เห็น IP จริงผ่าน trustProxy', async () => {
    const a = backend('A')
    const { base } = await balancer([a.url])
    const res = await (await fetch(`${base}/headers`, { headers: { 'x-custom': 'yes' } })).json()
    expect(res.headers['x-custom']).toBe('yes')
    expect(res.headers['x-forwarded-proto']).toBe('http')
    expect(res.headers['x-forwarded-host']).toContain('127.0.0.1')
    expect(res.headers['x-request-id']).toBeTruthy()
    expect(res.ip).toMatch(/127\.0\.0\.1|::1|::ffff:127\.0\.0\.1/)
  })

  it('POST พร้อม body ส่งถึง backend ครบ · status/body ของ backend ถูกส่งกลับตรงๆ', async () => {
    const a = backend('A')
    const { base } = await balancer([a.url])
    const post = await fetch(`${base}/echo`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ hello: 'world' }) })
    expect(await post.json()).toEqual({ name: 'A', body: { hello: 'world' } })
    expect((await fetch(`${base}/status/418`)).status).toBe(418)
  })

  it('ตัวหนึ่งตายแล้ว: GET ยังสำเร็จ (retry) และหลัง health check ตัวที่ตายถูกตัดออก · ตัวกลับมาแล้วถูกเอากลับ', async () => {
    const a = backend('A')
    const b = backend('B')
    const { lb, base } = await balancer([a.url, b.url], { retries: 1 })
    await a.app.server!.stop(true) // A ตาย
    const results = await who(base, 6)
    expect(results.every((r) => r === 'B')).toBe(true) // ไม่มี 502 หลุดมาถึง client
    await lb.checkAll()
    await lb.checkAll()
    expect(lb.nodes[0]!.healthy).toBe(false)
    expect(lb.status().upstreams[0]!.healthy).toBe(false)
    expect(lb.stats.retries).toBeGreaterThan(0)

    // เปิดตัว A กลับมาบนพอร์ตเดิม
    const port = Number(new URL(a.url).port)
    a.app.listen({ port })
    await lb.checkAll()
    expect(lb.nodes[0]!.healthy).toBe(true)
    expect(new Set(await who(base, 6))).toEqual(new Set(['A', 'B']))
  })

  it('instance ที่กำลัง draining (readyz 503) หลุดจากวงจรก่อนจะหยุดจริง', async () => {
    const a = backend('A')
    const b = backend('B')
    const { lb, base } = await balancer([a.url, b.url])
    a.app.draining = true
    await lb.checkAll()
    await lb.checkAll()
    expect(new Set(await who(base, 6))).toEqual(new Set(['B']))
  })

  it('ไม่มี upstream พร้อม = 503 + Retry-After · ทุกตัวตาย POST ได้ 502 (ไม่ลองซ้ำ)', async () => {
    const a = backend('A')
    const { lb, base } = await balancer([a.url])
    await a.app.server!.stop(true)
    await lb.checkAll()
    await lb.checkAll()
    const res = await fetch(`${base}/who`)
    expect(res.status).toBe(503)
    expect(res.headers.get('retry-after')).toBe('1')

    const c = backend('C')
    const second = await balancer([c.url], { unhealthyThreshold: 5 }) // ยังไม่ถูกตัดแม้ล้ม
    await c.app.server!.stop(true)
    const post = await fetch(`${second.base}/echo`, { method: 'POST', body: 'x' })
    expect(post.status).toBe(502)
  })

  it('SSE/response แบบสตรีมถูกส่งต่อทีละชิ้น ไม่ถูกเก็บรวม', async () => {
    const a = backend('A')
    const { base } = await balancer([a.url])
    const res = await fetch(`${base}/sse`)
    const reader = res.body!.getReader()
    const first = new TextDecoder().decode((await reader.read()).value)
    expect(first).toContain('data: A-0')
    let rest = ''
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      rest += new TextDecoder().decode(value)
    }
    expect(rest).toContain('A-2')
  })

  it('WebSocket ถูกส่งต่อสองทาง', async () => {
    const a = backend('A')
    const { base } = await balancer([a.url])
    const got = await new Promise<string>((resolve, reject) => {
      const ws = new WebSocket(base.replace('http', 'ws') + '/ws')
      ws.onopen = () => ws.send('ping')
      ws.onmessage = (e) => {
        resolve(String(e.data))
        ws.close()
      }
      ws.onerror = () => reject(new Error('ws error'))
      setTimeout(() => reject(new Error('ws timeout')), 3000)
    })
    expect(got).toBe('A:ping')
  })

  it('/__lb/status แสดงสถานะ · มี statusKey ต้องส่ง x-api-key', async () => {
    const a = backend('A')
    const open = await balancer([a.url])
    const status = await (await fetch(`${open.base}/__lb/status`)).json()
    expect(status.upstreams[0]).toMatchObject({ url: a.url, healthy: true })
    expect(status.strategy).toBe('round-robin')

    const locked = await balancer([a.url], { statusKey: 'k' })
    expect((await fetch(`${locked.base}/__lb/status`)).status).toBe(401)
    expect((await fetch(`${locked.base}/__lb/status`, { headers: { 'x-api-key': 'k' } })).status).toBe(200)
  })

  it('shutdown: คำขอที่ค้างจบก่อน · คำขอใหม่ได้ 503', async () => {
    const a = backend('A')
    a.app.get('/wait', async () => (await Bun.sleep(80), 'late'))
    const { lb, base } = await balancer([a.url])
    const pending = fetch(`${base}/wait`).then((r) => r.text())
    await Bun.sleep(20)
    const closing = lb.shutdown(2000)
    expect(lb.draining).toBe(true)
    expect(await pending).toBe('late')
    await closing
  })

  it('ต้องมี upstream อย่างน้อยหนึ่งตัว', () => {
    expect(() => new LoadBalancer({ upstreams: [] })).toThrow()
  })
})
