#!/usr/bin/env bun
/**
 * create-kitsune — สร้างโปรเจกต์ใหม่จากต้นแบบด้วยคำสั่งเดียว (แบบ create-next-app)
 *
 *   bun create kitsune my-app            (เมื่อเผยแพร่เป็นแพ็กเกจ create-kitsune)
 *   bunx create-kitsune my-app
 *   bun run create ../my-app             (จากโฟลเดอร์ต้นแบบนี้)
 *
 * ขั้นตอน: คัดลอกต้นแบบ → ตั้งชื่อโปรเจกต์ → เลือกฟีเจอร์ (bun run setup) → bun install → git init → บอกขั้นต่อไป
 *
 * ตัวเลือก:
 *   --preset <blank|app|cms|full|examples>   เลือกชุดโดยไม่ถาม        --features auth,cms   ระบุฟีเจอร์เอง
 *   --examples / --no-examples               เก็บ/ตัดหน้าตัวอย่าง       --yes, -y            ไม่ถามอะไรเลย (ใช้ค่าเริ่มต้น = ชุด examples)
 *   --no-setup                               ไม่เลือกฟีเจอร์ (เก็บต้นแบบเต็ม รัน bun run setup ทีหลังได้)
 *   --no-install                             ไม่รัน bun install         --no-git              ไม่ git init
 *   --force                                  อนุญาตให้ใช้โฟลเดอร์ที่ไม่ว่าง (ไม่ทับไฟล์ที่มีอยู่แล้ว)
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs'
import { basename, join, relative, resolve, sep } from 'node:path'
import { ansi, interactive, text } from './setup/prompt'

// ───────────── ต้นแบบและการคัดลอก ─────────────

/** ต้นแบบ: ถ้ามีโฟลเดอร์ template/ ข้างไฟล์นี้ (แพ็กเกจที่ build แล้ว) ใช้อันนั้น ไม่งั้นใช้โปรเจกต์นี้เอง */
export function templateRoot(here = import.meta.dir): string {
  const packaged = join(here, 'template')
  return existsSync(join(packaged, 'package.json')) ? packaged : resolve(here, '..')
}

const SKIP_ANYWHERE = new Set(['node_modules', '.git', 'dist', 'copies'])
const SKIP_TOP = [/^data\.sqlite/, /^cache\.sqlite/, /^uploads$/, /^\.env$/, /^\.kitsune\.json$/]
/** ไฟล์ที่เป็นของตัวสร้างเอง ไม่ใช่ของโปรเจกต์ที่ได้ */
const SKIP_PATHS = new Set(['scripts/create.ts', 'scripts/pack-create.ts', 'tests/create.test.ts'])

/** rel = พาธสัมพัทธ์จากรากต้นแบบ (ใช้ / เสมอ) */
export function shouldCopy(rel: string): boolean {
  const parts = rel.split('/')
  if (parts.some((p) => SKIP_ANYWHERE.has(p))) return false
  if (SKIP_TOP.some((re) => re.test(parts[0]!)) && parts.length >= 1) return false
  return !SKIP_PATHS.has(rel)
}

/** คัดลอกต้นแบบเป็นไฟล์ต่อไฟล์ (ไม่ลงไปในโฟลเดอร์ที่ถูกตัดออกเลย) · ไม่ทับไฟล์ที่มีอยู่แล้ว · คืนจำนวนไฟล์ที่คัดลอก */
export function copyTemplate(src: string, dest: string, rel = ''): number {
  let copied = 0
  mkdirSync(join(dest, rel), { recursive: true })
  for (const entry of readdirSync(join(src, rel), { withFileTypes: true })) {
    const r = rel ? `${rel}/${entry.name}` : entry.name
    if (!shouldCopy(r)) continue
    if (entry.isDirectory()) copied += copyTemplate(src, dest, r)
    else if (entry.isFile()) {
      const to = join(dest, r)
      if (existsSync(to)) continue
      copyFileSync(join(src, r), to)
      copied++
    }
  }
  return copied
}

// ───────────── ชื่อโปรเจกต์ ─────────────

/** ตรวจชื่อโฟลเดอร์/แพ็กเกจ: ตัวพิมพ์เล็ก ตัวเลข - _ . (ไม่ขึ้นต้นด้วย . หรือ _) ยาวไม่เกิน 214 */
export function validateName(name: string): string | null {
  if (!name.trim()) return 'ต้องระบุชื่อ'
  if (name.length > 214) return 'ยาวเกินไป (สูงสุด 214 ตัวอักษร)'
  if (!/^[a-z0-9][a-z0-9._-]*$/.test(name)) return 'ใช้ได้เฉพาะ a-z 0-9 . _ - (ตัวพิมพ์เล็ก ขึ้นต้นด้วยตัวอักษรหรือตัวเลข)'
  return null
}

/** แปลงชื่อโฟลเดอร์เป็นชื่อแพ็กเกจที่ถูกต้อง (เช่น "My App" → "my-app") */
export function toPackageName(dirName: string): string {
  return (
    dirName
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, '-')
      .replace(/^[^a-z0-9]+|-+$/g, '') || 'kitsune-app'
  )
}

/** โฟลเดอร์ว่างพอจะสร้างไหม (มีแค่ .git / README ที่ไม่ชนกับต้นแบบถือว่าว่าง) */
export function isEmptyDir(dir: string): boolean {
  if (!existsSync(dir)) return true
  return readdirSync(dir).filter((n) => n !== '.git' && n !== '.DS_Store').length === 0
}

// ───────────── ไฟล์ของโปรเจกต์ใหม่ ─────────────

export function rewritePackageJson(dest: string, name: string) {
  const file = join(dest, 'package.json')
  const pkg = JSON.parse(readFileSync(file, 'utf8'))
  pkg.name = toPackageName(name)
  pkg.version = '0.1.0'
  pkg.private = true
  pkg.description = `${name} — สร้างด้วย Kitsune`
  delete pkg['bun-create']
  for (const script of ['create', 'pack:create']) delete pkg.scripts?.[script]
  writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n')
}

/** README เดิมของ framework ย้ายไป docs/FRAMEWORK.md แล้วเขียน README ของโปรเจกต์ใหม่แทน */
export function writeProjectReadme(dest: string, name: string, installed: string[], examples: boolean) {
  const old = join(dest, 'README.md')
  if (existsSync(old)) {
    mkdirSync(join(dest, 'docs'), { recursive: true })
    renameSync(old, join(dest, 'docs', 'FRAMEWORK.md'))
  }
  const features = installed.length ? installed.map((f) => `- \`${f}\``).join('\n') : '- (ยังไม่มีฟีเจอร์เสริม)'
  writeFileSync(
    join(dest, 'README.md'),
    `# ${name}

สร้างด้วย [Kitsune](docs/FRAMEWORK.md) — framework เว็บบน Bun ที่ไม่มี dependency ตอนรัน

## เริ่มต้น

\`\`\`bash
bun dev            # http://localhost:3000 (แก้ไฟล์แล้วรีโหลดเอง)
bun test           # รันเทส
bun run check      # ตรวจ route + type + XSS
bun start          # production
bun run lb         # หลาย process + load balancer
bun run setup      # เพิ่มฟีเจอร์ภายหลัง
\`\`\`

## ฟีเจอร์ที่ติดตั้ง

${features}
${examples ? '\nหน้าตัวอย่างอยู่ที่ `/examples` (ลบได้ภายหลังโดยลบโฟลเดอร์ `src/pages/examples` และตัวอื่นที่เกี่ยวข้อง)\n' : ''}
## โครงสร้าง

\`\`\`
src/pages/    หน้าเว็บ (ไฟล์ = URL)       src/api/     JSON API
src/lib/      โค้ดที่ใช้ร่วมกัน           src/jobs.ts  งานเบื้องหลัง / cron
core/         framework (ไม่ต้องแก้)      tests/       เทส
public/       ไฟล์ static
\`\`\`

เอกสารเต็มของ framework (routing, validation, cache, kit.js, load balancer ฯลฯ): [docs/FRAMEWORK.md](docs/FRAMEWORK.md)
`,
  )
}

// ───────────── ขั้นตอนหลัก ─────────────

export type CreateOptions = {
  name: string
  dest: string
  templateDir: string
  force?: boolean
}

export function scaffold(o: CreateOptions): { copied: number } {
  const problem = o.name === '.' ? null : validateName(basename(o.dest))
  if (problem && !o.force) throw new Error(`ชื่อโปรเจกต์ไม่ถูกต้อง "${basename(o.dest)}": ${problem}`)
  if (!o.force && !isEmptyDir(o.dest)) throw new Error(`โฟลเดอร์ ${o.dest} ไม่ว่าง (ใช้ --force ถ้าต้องการสร้างทับ/ปน)`)
  const inside = resolve(o.dest) + sep
  if (inside.startsWith(resolve(o.templateDir) + sep)) throw new Error('สร้างข้างในโฟลเดอร์ต้นแบบไม่ได้ — เลือกที่อยู่นอกโฟลเดอร์นี้ (เช่น ../my-app)')

  const copied = copyTemplate(o.templateDir, o.dest)
  rewritePackageJson(o.dest, basename(o.dest))
  return { copied }
}

function run(cmd: string[], cwd: string, quiet = false): number {
  const p = Bun.spawnSync(cmd, { cwd, stdin: 'inherit', stdout: quiet ? 'ignore' : 'inherit', stderr: quiet ? 'ignore' : 'inherit' })
  return p.exitCode ?? 1
}

function gitAvailable(): boolean {
  try {
    return Bun.spawnSync(['git', '--version'], { stdout: 'ignore', stderr: 'ignore' }).exitCode === 0
  } catch {
    return false
  }
}

const HELP = `สร้างโปรเจกต์ Kitsune ใหม่

  bun create kitsune <ชื่อโฟลเดอร์> [ตัวเลือก]

ตัวเลือก
  --preset <blank|app|cms|full|examples>   เลือกชุดสำเร็จรูปโดยไม่ถาม
  --features auth,cms                      ระบุฟีเจอร์เอง (ดูทั้งหมด: bun run setup --list ในโปรเจกต์)
  --examples | --no-examples               เก็บ/ตัดหน้าตัวอย่าง
  --yes, -y                                ไม่ถามอะไรเลย (ค่าเริ่มต้น = ชุด examples)
  --no-setup                               ไม่เลือกฟีเจอร์ (เก็บต้นแบบเต็ม)
  --no-install                             ไม่รัน bun install
  --no-git                                 ไม่ git init
  --force                                  ใช้โฟลเดอร์ที่ไม่ว่างได้
`

export async function main(argv: string[]): Promise<number> {
  const has = (f: string) => argv.includes(`--${f}`)
  const value = (f: string) => {
    const i = argv.indexOf(`--${f}`)
    return i >= 0 && argv[i + 1] && !argv[i + 1]!.startsWith('-') ? argv[i + 1] : undefined
  }
  if (has('help') || argv.includes('-h')) {
    console.log(HELP)
    return 0
  }

  const flagValues = new Set(['--preset', '--features', '--template'])
  const positional = argv.filter((a, i) => !a.startsWith('-') && !flagValues.has(argv[i - 1] ?? ''))
  let name = positional[0]

  if (!name) {
    if (!interactive() || has('yes') || argv.includes('-y')) {
      console.error(`${ansi.red('✖')} ต้องระบุชื่อโฟลเดอร์: bun create kitsune my-app`)
      return 1
    }
    console.log(`\n${ansi.bold('🦊 สร้างโปรเจกต์ Kitsune')}\n`)
    name = await text('ชื่อโปรเจกต์', 'my-kitsune-app', (v) => validateName(v))
  }

  const dest = resolve(name)
  const templateDir = value('template') ? resolve(value('template')!) : templateRoot()
  const yes = has('yes') || argv.includes('-y')

  console.log(`\n${ansi.bold('กำลังสร้างโปรเจกต์')} ${ansi.cyan(basename(dest))} ${ansi.gray(`ที่ ${dest}`)}`)
  let copied: number
  try {
    ;({ copied } = scaffold({ name, dest, templateDir, force: has('force') }))
  } catch (err) {
    console.error(`\n${ansi.red('✖')} ${(err as Error).message}\n`)
    return 1
  }
  console.log(ansi.gray(`  คัดลอก ${copied} รายการ`))

  // เลือกฟีเจอร์ (โต้ตอบ หรือจาก flag)
  let examples = true
  if (!has('no-setup')) {
    const pass: string[] = []
    for (const f of ['preset', 'features']) if (value(f)) pass.push(`--${f}`, value(f)!)
    for (const f of ['examples', 'no-examples']) if (has(f)) pass.push(`--${f}`)
    const picked = pass.length > 0
    if (!picked && (yes || !interactive())) pass.push('--preset', 'examples')
    if (yes || (!interactive() && !picked) || picked) pass.push('--yes')
    console.log()
    const code = run(['bun', 'scripts/setup.ts', ...pass], dest)
    if (code !== 0) {
      console.error(`\n${ansi.yellow('⚠')} ตัวเลือกฟีเจอร์ไม่สำเร็จ — โปรเจกต์ถูกสร้างแล้ว รัน ${ansi.bold('bun run setup')} อีกครั้งในโฟลเดอร์ได้`)
    }
  }
  const statePath = join(dest, '.kitsune.json')
  const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : null
  const installed: string[] = state?.installed ?? []
  examples = state ? state.examples : true

  writeProjectReadme(dest, basename(dest), installed, examples)

  if (!has('no-install')) {
    console.log(`\n${ansi.bold('bun install')} …`)
    if (run(['bun', 'install'], dest) !== 0) console.error(`${ansi.yellow('⚠')} bun install ไม่สำเร็จ — ลองรันเองในโฟลเดอร์โปรเจกต์`)
  }

  if (!has('no-git') && gitAvailable() && run(['git', 'rev-parse', '--is-inside-work-tree'], dest, true) !== 0) {
    if (run(['git', 'init'], dest, true) === 0) console.log(ansi.gray('  git init แล้ว'))
  }

  const rel = relative(process.cwd(), dest) || '.'
  console.log(`\n${ansi.green('✔')} สร้างโปรเจกต์เรียบร้อย\n`)
  console.log(`  ${ansi.bold(`cd ${rel.includes(' ') ? `"${rel}"` : rel}`)}`)
  console.log(`  ${ansi.bold('bun dev')}          ${ansi.gray('→ http://localhost:3000')}`)
  console.log(`  ${ansi.bold('bun run setup')}    ${ansi.gray('→ เพิ่มฟีเจอร์ภายหลัง')}\n`)
  return 0
}

if (import.meta.main) process.exit(await main(Bun.argv.slice(2)))
