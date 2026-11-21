/**
 * แกนของตัวติดตั้ง: อ่าน manifest ของฟีเจอร์ → วางแผน → ลงมือ (คัดลอกไฟล์ / ลบ demo / แก้ package.json / สร้างเมนู)
 * แยกเป็นฟังก์ชันล้วนเพื่อเทสได้ (tests/setup.test.ts) — scripts/setup.ts เป็นแค่ CLI ครอบอยู่
 */
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'

export type NavLink = { href: string; label: string }

export type Manifest = {
  id: string
  title: string
  description: string
  /** กลุ่มที่แสดงในเมนูเลือก */
  category: 'ผู้ใช้' | 'เนื้อหา' | 'ระบบ' | 'ตัวอย่าง'
  requires?: string[]
  /** ลิงก์ที่เพิ่มในเมนูบนเว็บ */
  nav?: NavLink[]
  /** ตัวแปร env ที่ฟีเจอร์ใช้ (เขียนลง .env.example) */
  env?: Record<string, string>
  /** ข้อความแสดงหลังติดตั้ง */
  notes?: string[]
  /** บรรทัดที่เพิ่มใน .gitignore (เช่น โฟลเดอร์ที่เก็บไฟล์อัปโหลด) */
  gitignore?: string[]
  /** (เฉพาะ builtin) พาธที่ลบเมื่อไม่ได้เลือก */
  remove?: string[]
  /** อยู่ในโปรเจกต์แล้ว ไม่ต้องคัดลอกไฟล์ (ใช้กับ examples) */
  builtin?: boolean
  order?: number
}

export type Preset = { id: string; title: string; description: string; features: string[] }
export type Feature = Manifest & { dir: string }
export type State = { version: 1; installed: string[]; examples: boolean; updatedAt: string }

export const STATE_FILE = '.kitsune.json'

export function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T
}

/** features/<id>/feature.json ทั้งหมด (ข้ามโฟลเดอร์ที่ขึ้นต้นด้วย _) */
export function loadFeatures(root: string): Map<string, Feature> {
  const base = join(root, 'features')
  const out = new Map<string, Feature>()
  if (!existsSync(base)) return out
  for (const name of readdirSync(base).sort()) {
    const dir = join(base, name)
    const file = join(dir, 'feature.json')
    if (name.startsWith('_') || !existsSync(file)) continue
    const m = readJson<Manifest>(file)
    if (m.id !== name) throw new Error(`features/${name}/feature.json: id "${m.id}" ต้องตรงกับชื่อโฟลเดอร์`)
    out.set(m.id, { ...m, dir })
  }
  return out
}

export function loadPresets(root: string): Preset[] {
  const file = join(root, 'features', 'presets.json')
  return existsSync(file) ? readJson<Preset[]>(file) : []
}

export function readState(root: string): State | null {
  const file = join(root, STATE_FILE)
  return existsSync(file) ? readJson<State>(file) : null
}

/** เพิ่มฟีเจอร์ที่ถูกต้องการ (requires) แบบต่อเนื่อง · id ที่ไม่มี = error · เรียงตาม order แล้วชื่อ */
export function resolveSelection(wanted: string[], all: Map<string, Feature>): { ids: string[]; added: Record<string, string[]> } {
  const ids = new Set<string>()
  const added: Record<string, string[]> = {}
  const visit = (id: string, from?: string) => {
    const f = all.get(id)
    if (!f) throw new Error(`ไม่รู้จักฟีเจอร์ "${id}" (มี: ${[...all.keys()].join(', ')})`)
    if (!ids.has(id)) {
      ids.add(id)
      if (from) (added[from] ??= []).push(id)
    }
    for (const r of f.requires ?? []) visit(r, id)
  }
  for (const w of wanted) visit(w)
  const order = (id: string) => all.get(id)!.order ?? 100
  return { ids: [...ids].sort((a, b) => order(a) - order(b) || a.localeCompare(b)), added }
}

// ───────────── แผน ─────────────

export type FileOp = { from: string; to: string; status: 'new' | 'same' | 'conflict' }
export type Plan = {
  /** ฟีเจอร์ที่จะติดตั้งใหม่ในรอบนี้ (ไม่รวมที่ติดตั้งแล้ว) */
  install: string[]
  alreadyInstalled: string[]
  files: FileOp[]
  /** พาธที่จะลบ (demo เมื่อไม่เลือก examples) */
  remove: string[]
  overlay: FileOp[]
  removeExamples: boolean
  keepExamples: boolean
}

function walk(dir: string, base = dir): string[] {
  const out: string[] = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) out.push(...walk(p, base))
    else out.push(relative(base, p))
  }
  return out
}

const sameFile = (a: string, b: string) => {
  try {
    return readFileSync(a).equals(readFileSync(b))
  } catch {
    return false
  }
}

function fileOps(srcDir: string, dest: string): FileOp[] {
  if (!existsSync(srcDir)) return []
  return walk(srcDir).map((rel) => {
    const to = join(dest, rel)
    const from = join(srcDir, rel)
    return { from, to, status: !existsSync(to) ? 'new' : sameFile(from, to) ? 'same' : 'conflict' }
  })
}

export function makePlan(root: string, opts: { features: string[]; examples: boolean }, state: State | null, all: Map<string, Feature>): Plan {
  const { ids } = resolveSelection(opts.features.filter((f) => f !== 'examples'), all)
  const done = new Set(state?.installed ?? [])
  const install = ids.filter((id) => !done.has(id))

  const files: FileOp[] = []
  for (const id of install) files.push(...fileOps(join(all.get(id)!.dir, 'files'), root))

  // ตัดตัวอย่างออก: ทำได้ครั้งแรกเท่านั้น (ถ้าเคยตัดไปแล้ว state.examples = false จะไม่ทำซ้ำ · ถ้าเคยเก็บไว้แล้วอยากตัด ก็ทำได้ตอนนี้)
  const removeExamples = !opts.examples && (state === null || state.examples)
  const examples = all.get('examples')
  const remove = removeExamples ? (examples?.remove ?? []).filter((p) => existsSync(join(root, p))) : []
  const overlay = removeExamples ? fileOps(join(root, 'features', '_blank', 'files'), root) : []

  return { install, alreadyInstalled: ids.filter((id) => done.has(id)), files, remove, overlay, removeExamples, keepExamples: opts.examples }
}

// ───────────── ลงมือ ─────────────

export type ApplyResult = { copied: number; skipped: string[]; conflicts: string[]; removed: number; navWritten: boolean; envWritten: boolean }

function copyOps(ops: FileOp[], force: boolean, result: ApplyResult, root: string) {
  for (const op of ops) {
    if (op.status === 'same') continue
    if (op.status === 'conflict' && !force) {
      result.conflicts.push(relative(root, op.to))
      continue
    }
    mkdirSync(dirname(op.to), { recursive: true })
    cpSync(op.from, op.to)
    result.copied++
  }
}

/** แก้ package.json: ตัด script/dependency ของ demo ที่ไม่ใช้แล้ว (trailer = three/mp4-muxer/puppeteer) */
export function patchPackageJson(root: string): boolean {
  const file = join(root, 'package.json')
  if (!existsSync(file)) return false
  const pkg = readJson<any>(file)
  let changed = false
  if (pkg.scripts?.trailer) {
    delete pkg.scripts.trailer
    changed = true
  }
  for (const dep of ['three', 'mp4-muxer', 'puppeteer-core', '@types/three']) {
    for (const group of ['dependencies', 'devDependencies']) {
      if (pkg[group]?.[dep]) {
        delete pkg[group][dep]
        changed = true
      }
    }
  }
  if (changed) writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n')
  return changed
}

function patchTsconfig(root: string) {
  const file = join(root, 'tsconfig.json')
  if (!existsSync(file)) return
  const ts = readJson<any>(file)
  if (Array.isArray(ts.include) && ts.include.includes('trailer')) {
    ts.include = ts.include.filter((x: string) => x !== 'trailer')
    writeFileSync(file, JSON.stringify(ts, null, 2) + '\n')
  }
}

/** src/lib/nav.gen.ts: เมนูบนเว็บ + รายชื่อฟีเจอร์ที่ติดตั้ง (หน้าแรกแบบไม่มีตัวอย่างใช้แสดงลิงก์) */
export function renderNav(links: NavLink[], installed: string[]): string {
  const rows = links.map((l) => `  { href: ${JSON.stringify(l.href)}, label: ${JSON.stringify(l.label)} },`).join('\n')
  return `// สร้างโดย \`bun run setup\` ตามฟีเจอร์ที่เลือก — รัน setup อีกครั้งเพื่อเพิ่มฟีเจอร์ (ไฟล์นี้ถูกเขียนใหม่)
export const navLinks: { href: string; label: string }[] = [
${rows}
]

/** ฟีเจอร์ที่ติดตั้งแล้ว (id จาก features/<id>) */
export const installedFeatures: string[] = ${JSON.stringify(installed)}
`
}

export function navFor(installed: string[], examples: boolean, all: Map<string, Feature>): NavLink[] {
  const links: NavLink[] = [{ href: '/', label: 'หน้าแรก' }]
  if (examples) links.push({ href: '/examples', label: 'ตัวอย่าง' }, { href: '/benchmark', label: 'ทดสอบความเร็ว' }, { href: '/about', label: 'โครงสร้าง' })
  for (const id of installed) for (const l of all.get(id)?.nav ?? []) if (!links.some((x) => x.href === l.href)) links.push(l)
  return links
}

/** เพิ่ม/อัปเดตบรรทัดใน .env.example (ไม่ทับค่าที่มีอยู่แล้ว) */
export function writeEnvExample(root: string, all: Map<string, Feature>, installed: string[]): boolean {
  const file = join(root, '.env.example')
  const existing = existsSync(file) ? readFileSync(file, 'utf8') : '# คัดลอกเป็น .env แล้วแก้ค่า — ห้ามเอา secret จริงใส่ไฟล์นี้\nCOOKIE_SECRET=change-me-to-a-long-random-string\nADMIN_KEY=change-me-too\n'
  let out = existing
  for (const id of installed) {
    for (const [k, v] of Object.entries(all.get(id)?.env ?? {})) {
      if (!new RegExp(`^#?\\s*${k}=`, 'm').test(out)) out += `${out.endsWith('\n') ? '' : '\n'}# ${id}\n${k}=${v}\n`
    }
  }
  if (out === existing && existsSync(file)) return false
  writeFileSync(file, out)
  return true
}

/** เพิ่มบรรทัดที่ฟีเจอร์ต้องการใน .gitignore (ไม่ซ้ำของเดิม) */
export function writeGitignore(root: string, all: Map<string, Feature>, ids: string[]): boolean {
  const lines = ids.flatMap((id) => all.get(id)?.gitignore ?? [])
  if (!lines.length) return false
  const file = join(root, '.gitignore')
  const existing = existsSync(file) ? readFileSync(file, 'utf8') : ''
  const have = new Set(existing.split('\n').map((l) => l.trim()))
  const add = lines.filter((l) => !have.has(l))
  if (!add.length) return false
  writeFileSync(file, existing + (existing && !existing.endsWith('\n') ? '\n' : '') + add.join('\n') + '\n')
  return true
}

export function applyPlan(root: string, plan: Plan, all: Map<string, Feature>, state: State | null, opts: { force?: boolean } = {}): ApplyResult & { state: State } {
  const result: ApplyResult = { copied: 0, skipped: [], conflicts: [], removed: 0, navWritten: false, envWritten: false }

  // 1) ลบ demo
  for (const p of plan.remove) {
    rmSync(join(root, p), { recursive: true, force: true })
    result.removed++
  }
  // 2) overlay หน้าแรก/ฐานข้อมูลเปล่า (ทับของ demo โดยตั้งใจ)
  copyOps(plan.overlay, true, result, root)
  // 3) ไฟล์ของฟีเจอร์
  copyOps(plan.files, opts.force ?? false, result, root)

  const installed = [...new Set([...(state?.installed ?? []), ...plan.install])]
  const examples = plan.removeExamples ? false : plan.keepExamples || (state?.examples ?? true)

  // 4) เมนู + env + package.json
  const links = navFor(installed, examples, all)
  mkdirSync(join(root, 'src', 'lib'), { recursive: true })
  writeFileSync(join(root, 'src', 'lib', 'nav.gen.ts'), renderNav(links, installed))
  result.navWritten = true
  result.envWritten = writeEnvExample(root, all, installed)
  writeGitignore(root, all, plan.install)
  if (plan.removeExamples) {
    patchPackageJson(root)
    patchTsconfig(root)
  }

  const next: State = { version: 1, installed, examples, updatedAt: new Date().toISOString() }
  writeFileSync(join(root, STATE_FILE), JSON.stringify(next, null, 2) + '\n')
  return { ...result, state: next }
}
