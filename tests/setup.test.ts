// ตัวติดตั้งฟีเจอร์ (scripts/setup): การเลือก, แผน, ลงมือ, ลงเพิ่มทีหลัง, ความขัดแย้ง + ตัวเลือกแบบโต้ตอบ
import { afterEach, describe, expect, it } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { applyPlan, loadFeatures, loadPresets, makePlan, navFor, patchPackageJson, readState, renderNav, resolveSelection, writeEnvExample, STATE_FILE } from '../scripts/setup/lib'

const dirs: string[] = []
afterEach(() => {
  for (const d of dirs.splice(0)) rmSync(d, { recursive: true, force: true })
})

function put(root: string, rel: string, content: string) {
  const p = join(root, rel)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, content)
}

/** โปรเจกต์จำลอง: ฟีเจอร์ auth ← cms (cms ต้องใช้ auth), examples (builtin) + overlay เปล่า */
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'kitsune-setup-'))
  dirs.push(root)
  const manifest = (m: object) => JSON.stringify(m)
  put(root, 'features/presets.json', JSON.stringify([{ id: 'blank', title: 'เปล่า', description: '', features: [] }, { id: 'site', title: 'เว็บ', description: '', features: ['cms'] }]))
  put(root, 'features/auth/feature.json', manifest({ id: 'auth', title: 'สมาชิก', description: 'd', category: 'ผู้ใช้', order: 10, nav: [{ href: '/account', label: 'บัญชี' }], env: { AUTH_KEY: 'x' }, gitignore: ['secrets/'], notes: ['ตั้ง AUTH_KEY'] }))
  put(root, 'features/auth/files/src/lib/auth.ts', 'export const auth = 1\n')
  put(root, 'features/auth/files/src/pages/login.tsx', 'login\n')
  put(root, 'features/cms/feature.json', manifest({ id: 'cms', title: 'CMS', description: 'd', category: 'เนื้อหา', order: 30, requires: ['auth'], nav: [{ href: '/blog', label: 'บล็อก' }] }))
  put(root, 'features/cms/files/src/lib/cms.ts', 'export const cms = 1\n')
  put(root, 'features/examples/feature.json', manifest({ id: 'examples', title: 'ตัวอย่าง', description: 'd', category: 'ตัวอย่าง', builtin: true, order: 90, remove: ['src/pages/examples', 'src/pages/about.tsx', 'trailer', 'src/pages/missing'] }))
  put(root, 'features/_blank/files/src/pages/index.tsx', 'blank home\n')
  put(root, 'src/pages/index.tsx', 'demo home\n')
  put(root, 'src/pages/examples/a.tsx', 'demo\n')
  put(root, 'src/pages/about.tsx', 'about\n')
  put(root, 'trailer/main.ts', 'trailer\n')
  put(root, 'package.json', JSON.stringify({ scripts: { dev: 'x', trailer: 'bun scripts/trailer.ts' }, dependencies: { three: '1' }, devDependencies: { typescript: '5', 'mp4-muxer': '1', 'puppeteer-core': '1', '@types/three': '1' } }))
  put(root, 'tsconfig.json', JSON.stringify({ include: ['src', 'trailer', 'tests'] }))
  return root
}

const setup = (root: string, features: string[], examples: boolean, opts: { force?: boolean } = {}) => {
  const all = loadFeatures(root)
  const state = readState(root)
  const { ids } = resolveSelection(features, all)
  const plan = makePlan(root, { features: ids, examples }, state, all)
  return { plan, all, result: applyPlan(root, plan, all, state, opts) }
}

describe('การเลือกฟีเจอร์', () => {
  it('เพิ่มฟีเจอร์ที่ต้องพึ่ง (requires) ให้เอง · เรียงตาม order · จดว่าใครดึงใครมา', () => {
    const all = loadFeatures(fixture())
    const r = resolveSelection(['cms'], all)
    expect(r.ids).toEqual(['auth', 'cms'])
    expect(r.added).toEqual({ cms: ['auth'] })
    expect(resolveSelection(['cms', 'auth', 'cms'], all).ids).toEqual(['auth', 'cms']) // ไม่ซ้ำ
    expect(resolveSelection([], all).ids).toEqual([])
  })

  it('id ที่ไม่มีบอกรายชื่อที่มี · manifest ที่ id ไม่ตรงชื่อโฟลเดอร์ผิดพลาด', () => {
    const root = fixture()
    expect(() => resolveSelection(['nope'], loadFeatures(root))).toThrow(/ไม่รู้จักฟีเจอร์ "nope".*auth/)
    put(root, 'features/wrong/feature.json', JSON.stringify({ id: 'other', title: '', description: '', category: 'ระบบ' }))
    expect(() => loadFeatures(root)).toThrow(/ต้องตรงกับชื่อโฟลเดอร์/)
  })

  it('โหลดชุดสำเร็จรูป และข้ามโฟลเดอร์ _ ที่ไม่ใช่ฟีเจอร์', () => {
    const root = fixture()
    expect(loadPresets(root).map((p) => p.id)).toEqual(['blank', 'site'])
    expect([...loadFeatures(root).keys()]).toEqual(['auth', 'cms', 'examples'])
  })
})

describe('แผนและการติดตั้ง', () => {
  it('ติดตั้งครั้งแรก: คัดลอกไฟล์ฟีเจอร์ · สร้างเมนู/env/.gitignore/state · แจ้งสถานะไฟล์', () => {
    const root = fixture()
    const { plan, result } = setup(root, ['cms'], true)
    expect(plan.install).toEqual(['auth', 'cms'])
    expect(plan.files.every((f) => f.status === 'new')).toBe(true)
    expect(plan.removeExamples).toBe(false)
    expect(plan.remove).toEqual([])

    expect(readFileSync(join(root, 'src/lib/auth.ts'), 'utf8')).toBe('export const auth = 1\n')
    expect(existsSync(join(root, 'src/lib/cms.ts'))).toBe(true)
    expect(result.copied).toBe(3)

    const nav = readFileSync(join(root, 'src/lib/nav.gen.ts'), 'utf8')
    expect(nav).toContain('{ href: "/examples", label: "ตัวอย่าง" }')
    expect(nav).toContain('{ href: "/account", label: "บัญชี" }')
    expect(nav).toContain('{ href: "/blog", label: "บล็อก" }')
    expect(nav).toContain('installedFeatures: string[] = ["auth","cms"]')

    expect(readFileSync(join(root, '.env.example'), 'utf8')).toContain('AUTH_KEY=x')
    expect(readFileSync(join(root, '.gitignore'), 'utf8')).toContain('secrets/')
    expect(readState(root)).toMatchObject({ version: 1, installed: ['auth', 'cms'], examples: true })
  })

  it('ไม่เอาตัวอย่าง: ลบเฉพาะที่มีอยู่จริง · ใช้หน้าแรกเปล่าแทน · ตัด dependency ของ trailer · เมนูไม่มีลิงก์ตัวอย่าง', () => {
    const root = fixture()
    const { plan, result } = setup(root, [], false)
    expect(plan.removeExamples).toBe(true)
    expect(plan.remove.sort()).toEqual(['src/pages/about.tsx', 'src/pages/examples', 'trailer']) // ไม่มี src/pages/missing ในแผน
    expect(result.removed).toBe(3)
    expect(existsSync(join(root, 'src/pages/examples'))).toBe(false)
    expect(existsSync(join(root, 'trailer'))).toBe(false)
    expect(readFileSync(join(root, 'src/pages/index.tsx'), 'utf8')).toBe('blank home\n')

    const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
    expect(pkg.scripts).toEqual({ dev: 'x' })
    expect(pkg.dependencies).toEqual({})
    expect(Object.keys(pkg.devDependencies)).toEqual(['typescript'])
    expect(JSON.parse(readFileSync(join(root, 'tsconfig.json'), 'utf8')).include).toEqual(['src', 'tests'])
    expect(readFileSync(join(root, 'src/lib/nav.gen.ts'), 'utf8')).not.toContain('/examples')
    expect(readState(root)!.examples).toBe(false)
  })

  it('ลงเพิ่มทีหลัง: ไม่แตะของเดิม · ติดตั้งเฉพาะที่ใหม่ · รันซ้ำไม่ทำอะไร', () => {
    const root = fixture()
    setup(root, ['auth'], true)
    put(root, 'src/lib/auth.ts', 'export const auth = "ผู้ใช้แก้เอง"\n') // ผู้ใช้แก้ไฟล์ของฟีเจอร์ไปแล้ว

    const second = setup(root, ['cms'], true)
    expect(second.plan.install).toEqual(['cms']) // auth ติดตั้งแล้ว
    expect(second.plan.alreadyInstalled).toEqual(['auth'])
    expect(readFileSync(join(root, 'src/lib/auth.ts'), 'utf8')).toContain('ผู้ใช้แก้เอง')
    expect(readState(root)!.installed).toEqual(['auth', 'cms'])

    const third = setup(root, ['cms', 'auth'], true)
    expect(third.plan.install).toEqual([])
    expect(third.result.copied).toBe(0)
  })

  it('ไฟล์ที่ผู้ใช้แก้ไว้ = conflict ข้ามไว้ · --force ถึงทับ', () => {
    const root = fixture()
    put(root, 'src/lib/auth.ts', 'ของผู้ใช้\n')
    const kept = setup(root, ['auth'], true)
    expect(kept.plan.files.find((f) => f.to.endsWith('auth.ts'))!.status).toBe('conflict')
    expect(kept.result.conflicts).toEqual([join('src', 'lib', 'auth.ts')])
    expect(readFileSync(join(root, 'src/lib/auth.ts'), 'utf8')).toBe('ของผู้ใช้\n')

    const root2 = fixture()
    put(root2, 'src/lib/auth.ts', 'ของผู้ใช้\n')
    setup(root2, ['auth'], true, { force: true })
    expect(readFileSync(join(root2, 'src/lib/auth.ts'), 'utf8')).toBe('export const auth = 1\n')
  })

  it('ไฟล์เหมือนต้นแบบเป๊ะ = same ไม่นับว่าคัดลอก', () => {
    const root = fixture()
    put(root, 'src/lib/auth.ts', 'export const auth = 1\n')
    const { plan, result } = setup(root, ['auth'], true)
    expect(plan.files.find((f) => f.to.endsWith('auth.ts'))!.status).toBe('same')
    expect(result.copied).toBe(1) // เหลือแค่ login.tsx
  })

  it('ตัดตัวอย่างทำได้แค่ครั้งแรก: ติดตั้งเพิ่มทีหลังแบบเดิมไม่ลบ/ไม่ทับซ้ำ', () => {
    const root = fixture()
    setup(root, [], false)
    put(root, 'src/pages/index.tsx', 'หน้าแรกของผู้ใช้\n')
    const again = setup(root, ['auth'], false)
    expect(again.plan.removeExamples).toBe(false)
    expect(readFileSync(join(root, 'src/pages/index.tsx'), 'utf8')).toBe('หน้าแรกของผู้ใช้\n')
    expect(readState(root)!.examples).toBe(false)
  })

  it('--dry-run เทียบเท่า: makePlan อย่างเดียวไม่เปลี่ยนอะไรในดิสก์', () => {
    const root = fixture()
    const all = loadFeatures(root)
    makePlan(root, { features: ['auth', 'cms'], examples: false }, null, all)
    expect(existsSync(join(root, STATE_FILE))).toBe(false)
    expect(existsSync(join(root, 'src/lib/auth.ts'))).toBe(false)
    expect(existsSync(join(root, 'src/pages/examples'))).toBe(true)
  })
})

describe('ชิ้นส่วนย่อย', () => {
  it('renderNav / navFor: ไม่ซ้ำ href · ตัวอย่างเพิ่ม 3 ลิงก์', () => {
    const all = loadFeatures(fixture())
    expect(navFor(['auth', 'cms'], false, all).map((l) => l.href)).toEqual(['/', '/account', '/blog'])
    expect(navFor([], true, all).map((l) => l.href)).toEqual(['/', '/examples', '/benchmark', '/about'])
    expect(renderNav([{ href: '/a"b', label: 'x"y' }], [])).toContain('{ href: "/a\\"b", label: "x\\"y" }')
  })

  it('writeEnvExample: ไม่ทับค่าที่มีอยู่แล้ว และไม่เขียนซ้ำเมื่อไม่มีอะไรใหม่', () => {
    const root = fixture()
    const all = loadFeatures(root)
    put(root, '.env.example', 'AUTH_KEY=ค่าของฉัน\n')
    expect(writeEnvExample(root, all, ['auth'])).toBe(false)
    expect(readFileSync(join(root, '.env.example'), 'utf8')).toBe('AUTH_KEY=ค่าของฉัน\n')
  })

  it('patchPackageJson: ไม่มีอะไรให้ตัด = false', () => {
    const root = mkdtempSync(join(tmpdir(), 'kitsune-pkg-'))
    dirs.push(root)
    put(root, 'package.json', JSON.stringify({ scripts: { dev: 'x' } }))
    expect(patchPackageJson(root)).toBe(false)
    expect(patchPackageJson(join(root, 'nowhere'))).toBe(false)
  })
})

// ตรวจความสมบูรณ์ของต้นแบบ — มีความหมายเฉพาะในโปรเจกต์ที่ยังไม่ได้รัน setup (หลังติดตั้งไฟล์ demo ถูกลบ/features อาจถูกลบด้วย --clean)
const root = join(import.meta.dir, '..')
const pristine = existsSync(join(root, 'features', 'presets.json')) && !existsSync(join(root, STATE_FILE))

describe.skipIf(!pristine)('ต้นแบบจริงในโปรเจกต์นี้', () => {
  const all = loadFeatures(root)

  it('ทุกฟีเจอร์ถูกต้อง: requires ชี้ไปที่มีอยู่จริง · มีไฟล์ · ไม่ซ้ำ id', () => {
    for (const f of all.values()) {
      for (const r of f.requires ?? []) expect(all.has(r)).toBe(true)
      if (!f.builtin) expect(existsSync(join(f.dir, 'files'))).toBe(true)
      expect(f.title.length).toBeGreaterThan(0)
      expect(['ผู้ใช้', 'เนื้อหา', 'ระบบ', 'ตัวอย่าง']).toContain(f.category)
    }
    expect([...all.keys()].sort()).toEqual(['admin', 'auth', 'cms', 'contact', 'examples', 'uploads'])
  })

  it('ชุดสำเร็จรูปอ้างถึงเฉพาะฟีเจอร์ที่มี', () => {
    for (const p of loadPresets(root)) for (const id of p.features) expect(all.has(id)).toBe(true)
    expect(loadPresets(root).map((p) => p.id)).toEqual(['blank', 'app', 'cms', 'full', 'examples'])
  })

  it('พาธที่ examples จะลบมีอยู่จริงในโปรเจกต์ (กัน manifest ล้าสมัย) · ไฟล์ของฟีเจอร์ไม่ชนกันเอง', () => {
    for (const p of all.get('examples')!.remove ?? []) expect(existsSync(join(root, p)) || p === 'dist').toBe(true)
    const seen = new Map<string, string>()
    for (const f of all.values()) {
      if (f.builtin) continue
      const plan = makePlan(root, { features: [f.id], examples: true }, { version: 1, installed: [...all.keys()].filter((k) => k !== f.id), examples: true, updatedAt: '' }, all)
      for (const op of plan.files) {
        const rel = op.to.slice(root.length)
        expect(seen.get(rel), `${rel} ซ้ำระหว่าง ${seen.get(rel)} กับ ${f.id}`).toBeUndefined()
        seen.set(rel, f.id)
      }
    }
  })
})

// ───────────── ตัวเลือกแบบโต้ตอบ (จำลองแป้นพิมพ์) ─────────────

describe('prompt แบบโต้ตอบ', () => {
  async function drive<T>(run: () => Promise<T>, keys: { str?: string; name: string }[]): Promise<T> {
    const stdin = process.stdin as any
    const realRaw = stdin.setRawMode
    const realWrite = process.stdout.write
    stdin.setRawMode = () => stdin
    stdin.isRaw = false
    ;(process.stdout as any).write = () => true
    try {
      const pending = run()
      await Bun.sleep(5)
      for (const k of keys) stdin.emit('keypress', k.str, { name: k.name })
      return await pending
    } finally {
      stdin.setRawMode = realRaw
      ;(process.stdout as any).write = realWrite
    }
  }

  it('select: ลูกศรเลื่อน (วนรอบ) แล้ว enter เลือก', async () => {
    const { select } = await import('../scripts/setup/prompt')
    const items = [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }]
    expect(await drive(() => select('x', items), [{ name: 'down' }, { name: 'down' }, { name: 'return' }])).toBe('c')
    expect(await drive(() => select('x', items), [{ name: 'up' }, { name: 'return' }])).toBe('c') // วนจากบนสุดลงล่างสุด
    expect(await drive(() => select('x', items, 1), [{ str: 'j', name: 'j' }, { name: 'return' }])).toBe('c')
  })

  it('multiselect: space ติ๊ก/เอาออก · ติ๊กไว้ล่วงหน้า · ตัวที่ disabled ติ๊กอยู่เสมอและข้ามเคอร์เซอร์ · a ทั้งหมด', async () => {
    const { multiselect } = await import('../scripts/setup/prompt')
    const items = [
      { value: 'done', label: 'ติดตั้งแล้ว', disabled: true },
      { value: 'a', label: 'A', checked: true },
      { value: 'b', label: 'B' },
    ]
    // เริ่มที่ตัวแรกที่ไม่ disabled (a): space = เอา a ออก, ลง b แล้ว space = ติ๊ก b
    expect(await drive(() => multiselect('x', items), [{ name: 'space' }, { name: 'down' }, { name: 'space' }, { name: 'return' }])).toEqual(['done', 'b'])
    expect(await drive(() => multiselect('x', items), [{ str: 'a', name: 'a' }, { name: 'return' }])).toEqual(['done', 'a', 'b'])
    expect(await drive(() => multiselect('x', items), [{ str: 'a', name: 'a' }, { str: 'a', name: 'a' }, { name: 'return' }])).toEqual(['done']) // กด a สองครั้ง = เอาออกทั้งหมด
  })

  it('confirm: y / n / enter (ค่าเริ่มต้น)', async () => {
    const { confirm } = await import('../scripts/setup/prompt')
    expect(await drive(() => confirm('ok?'), [{ str: 'y', name: 'y' }])).toBe(true)
    expect(await drive(() => confirm('ok?'), [{ str: 'n', name: 'n' }])).toBe(false)
    expect(await drive(() => confirm('ok?', false), [{ name: 'return' }])).toBe(false)
  })
})
