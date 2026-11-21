/**
 * ตัวติดตั้งฟีเจอร์ — เลือกว่าจะเอาอะไรมาบ้าง แทนที่จะได้ตัวอย่างทั้งหมดหรือโปรเจกต์เปล่าอย่างเดียว
 *
 *   bun run setup                        โต้ตอบ: เลือกชุดเริ่มต้น แล้วติ๊กฟีเจอร์ที่ต้องการ
 *   bun run setup --list                 ดูชุดและฟีเจอร์ทั้งหมด
 *   bun run setup --preset cms           ติดตั้งตามชุดสำเร็จรูป (blank | app | cms | full | examples)
 *   bun run setup --features auth,cms    ระบุฟีเจอร์เอง (ฟีเจอร์ที่ต้องพึ่งกันถูกเพิ่มให้เอง)
 *   bun run setup --add uploads          เพิ่มฟีเจอร์ทีหลัง (ไม่แตะของที่ติดตั้งแล้ว)
 *
 *   ตัวเลือก: --auto (ไม่มี terminal = ข้ามเงียบๆ ใช้กับ postinstall) · --examples / --no-examples (เก็บ/ตัดหน้าตัวอย่าง) · --yes (ไม่ถามยืนยัน) · --dry-run (ดูแผนเฉยๆ)
 *             --force (ทับไฟล์ที่ต่างจากต้นแบบ) · --verify (รัน check + test หลังติดตั้ง) · --dir <พาธ> · --clean (ลบโฟลเดอร์ features/ หลังเสร็จ)
 *
 * ตัดตัวอย่างออกลบไฟล์จริง — ทำครั้งแรกเท่านั้น และจะแสดงรายการให้ยืนยันก่อนเสมอ
 */
import { existsSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { ansi, confirm, interactive, multiselect, select } from './setup/prompt'
import { applyPlan, loadFeatures, loadPresets, makePlan, readState, resolveSelection, type Feature, type Plan } from './setup/lib'

const argv = Bun.argv.slice(2)
const has = (f: string) => argv.includes(`--${f}`)
const value = (f: string) => {
  const i = argv.indexOf(`--${f}`)
  return i >= 0 && argv[i + 1] && !argv[i + 1]!.startsWith('--') ? argv[i + 1] : undefined
}
const list = (v?: string) => (v ? v.split(',').map((s) => s.trim()).filter(Boolean) : [])

const root = resolve(value('dir') ?? join(import.meta.dir, '..'))
const all = loadFeatures(root)
const presets = loadPresets(root)
const state = readState(root)

function die(msg: string): never {
  console.error(`\n${ansi.red('✖')} ${msg}\n`)
  process.exit(1)
}

if (!all.size) die(`ไม่พบโฟลเดอร์ features/ ใน ${root} — ตัวติดตั้งนี้ใช้กับโปรเจกต์ที่มาจากต้นฉบับ`)

// ───────────── --list ─────────────
if (has('list')) {
  console.log(`\n${ansi.bold('ชุดสำเร็จรูป')}`)
  for (const p of presets) console.log(`  ${ansi.cyan(p.id.padEnd(9))} ${p.title}  ${ansi.gray(p.features.join(', ') || '(ไม่มีฟีเจอร์เสริม)')}`)
  console.log(`\n${ansi.bold('ฟีเจอร์')}`)
  for (const f of all.values()) {
    const mark = state?.installed.includes(f.id) ? ansi.green('✓') : ' '
    console.log(`  ${mark} ${ansi.cyan(f.id.padEnd(9))} ${f.title}${f.requires?.length ? ansi.gray(`  (ต้องใช้ ${f.requires.join(', ')})`) : ''}\n             ${ansi.gray(f.description)}`)
  }
  if (state) console.log(`\n  ติดตั้งแล้ว: ${state.installed.join(', ') || '-'} · ตัวอย่าง: ${state.examples ? 'มี' : 'ตัดออกแล้ว'}\n`)
  process.exit(0)
}

// ───────────── เลือก ─────────────
let features: string[] = []
let examples: boolean | undefined = has('examples') ? true : has('no-examples') ? false : undefined

const presetId = value('preset')
if (presetId) {
  const p = presets.find((x) => x.id === presetId)
  if (!p) die(`ไม่รู้จักชุด "${presetId}" (มี: ${presets.map((x) => x.id).join(', ')})`)
  features = [...p.features]
  if (examples === undefined) examples = p.features.includes('examples')
}
features.push(...list(value('features')), ...list(value('add')))
if (features.includes('examples')) {
  examples ??= true
  features = features.filter((f) => f !== 'examples')
}

const flagsGiven = !!(presetId || value('features') || value('add') || examples !== undefined)

if (!flagsGiven) {
  // --auto: เรียกจาก bun create / postinstall — ไม่มี terminal ก็ข้ามเงียบๆ (ไม่ทำให้ขั้นตอนข้างนอกล้ม)
  if (has('auto') && !interactive()) {
    console.log('ข้ามการเลือกฟีเจอร์ (ไม่มี terminal) — รัน bun run setup ภายหลังได้')
    process.exit(0)
  }
  if (!interactive()) die('ไม่ได้ต่อกับ terminal แบบโต้ตอบ — ระบุ --preset หรือ --features (ดู bun run setup --list)')

  console.log(`\n${ansi.bold('🦊 Kitsune — เลือกสิ่งที่จะติดตั้ง')}\n`)
  if (state) console.log(`${ansi.gray(`ติดตั้งแล้ว: ${state.installed.join(', ') || '(ยังไม่มีฟีเจอร์เสริม)'} · ตัวอย่าง: ${state.examples ? 'มี' : 'ตัดออกแล้ว'}`)}\n`)

  let start: string[] = []
  let startExamples = state?.examples ?? true
  if (!state) {
    const choice = await select('เริ่มจากชุดไหน?', [
      ...presets.map((p) => ({ value: p.id, label: p.title, hint: p.description })),
      { value: 'custom', label: 'เลือกเอง', hint: 'ติ๊กฟีเจอร์ทีละอย่าง' },
    ])
    const p = presets.find((x) => x.id === choice)
    start = p ? p.features.filter((f) => f !== 'examples') : []
    startExamples = p ? p.features.includes('examples') : false
    console.log()
  }

  const installed = new Set(state?.installed ?? [])
  const items = [...all.values()]
    .filter((f) => !f.builtin)
    .map((f) => ({ value: f.id, label: f.title, hint: f.description, checked: start.includes(f.id), disabled: installed.has(f.id) }))
  if (!state || state.examples) items.push({ value: 'examples', label: 'ตัวอย่างและหน้าสาธิต', hint: 'routing, htmx, SSE, WebSocket, benchmark, เอกสาร (ไม่ติ๊ก = ลบออก)', checked: startExamples, disabled: false })

  const picked = await multiselect('ติ๊กฟีเจอร์ที่ต้องการ', items)
  features = picked.filter((f) => f !== 'examples')
  examples = state && !state.examples ? false : picked.includes('examples')
  console.log()
}

examples ??= state?.examples ?? false

// ───────────── แผน ─────────────
let selection: ReturnType<typeof resolveSelection>
try {
  selection = resolveSelection(features, all)
} catch (err) {
  die((err as Error).message)
}
const plan: Plan = makePlan(root, { features: selection.ids, examples }, state, all)

const describe = (f: Feature) => `${ansi.cyan(f.id.padEnd(9))} ${f.title}`
console.log(ansi.bold('แผนการติดตั้ง'))
if (plan.install.length) for (const id of plan.install) console.log(`  ${ansi.green('+')} ${describe(all.get(id)!)}`)
else console.log(ansi.gray('  (ไม่มีฟีเจอร์ใหม่ให้ติดตั้ง)'))
for (const [from, deps] of Object.entries(selection.added)) console.log(ansi.gray(`    ↳ ${from} ต้องใช้ ${deps.join(', ')} จึงเพิ่มให้`))
if (plan.alreadyInstalled.length) console.log(ansi.gray(`  = ติดตั้งแล้ว: ${plan.alreadyInstalled.join(', ')}`))
console.log(`  ${plan.files.filter((f) => f.status !== 'same').length} ไฟล์จะถูกเพิ่ม${plan.files.some((f) => f.status === 'conflict') ? ansi.yellow(` (${plan.files.filter((f) => f.status === 'conflict').length} ไฟล์ต่างจากต้นแบบ — ${has('force') ? 'จะทับ' : 'จะข้าม ใช้ --force เพื่อทับ'})`) : ''}`)

if (plan.removeExamples) {
  console.log(`\n  ${ansi.red('−')} ${ansi.bold('จะลบหน้าตัวอย่างและ demo ออก')} ${ansi.gray('(ย้อนกลับไม่ได้ ยกเว้นดาวน์โหลดใหม่)')}`)
  for (const p of plan.remove) console.log(ansi.gray(`      ${p}`))
  console.log(ansi.gray('    หน้าแรกถูกแทนที่ด้วยหน้าเปล่า และเอา dependency ของ trailer ออกจาก package.json'))
} else if (state && !state.examples) {
  console.log(ansi.gray('\n  (ตัวอย่างถูกตัดออกไปแล้วก่อนหน้านี้)'))
}
console.log()

if (has('dry-run')) {
  console.log(ansi.yellow('--dry-run: ยังไม่ได้เปลี่ยนอะไร\n'))
  process.exit(0)
}
if (!plan.install.length && !plan.removeExamples) {
  console.log('ไม่มีอะไรต้องทำ\n')
  process.exit(0)
}

if (!has('yes') && !has('y')) {
  if (!interactive()) die('ต้องยืนยัน — เพิ่ม --yes (หรือใช้ --dry-run เพื่อดูแผน)')
  if (!(await confirm(plan.removeExamples ? 'ลบตัวอย่างและติดตั้งตามแผนนี้?' : 'ติดตั้งตามแผนนี้?', !plan.removeExamples))) {
    console.log('ยกเลิก\n')
    process.exit(0)
  }
}

// ───────────── ลงมือ ─────────────
const result = applyPlan(root, plan, all, state, { force: has('force') })

console.log(`${ansi.green('✔')} คัดลอก ${result.copied} ไฟล์${result.removed ? ` · ลบ ${result.removed} รายการ` : ''}`)
if (result.conflicts.length) {
  console.log(ansi.yellow(`\n  ข้ามไฟล์ที่คุณแก้ไว้แล้ว (${result.conflicts.length}) — ต้นแบบอยู่ใน features/<ชื่อ>/files/ :`))
  for (const c of result.conflicts) console.log(ansi.gray(`    ${c}`))
}
console.log(ansi.gray(`  เมนูเว็บ: src/lib/nav.gen.ts${result.envWritten ? ' · ตัวแปร env: .env.example' : ''}`))

// สร้าง core/routes.gen.ts ใหม่ให้ href() รู้จัก route ที่เพิ่ม/ลบ
const gen = Bun.spawnSync(['bun', 'scripts/check-routes.ts'], { cwd: root, stdout: 'pipe', stderr: 'pipe', env: { ...process.env, NODE_ENV: 'development' } })
if (gen.exitCode !== 0) console.log(ansi.yellow(`\n  ⚠ ตรวจ route ไม่ผ่าน:\n${gen.stdout.toString()}${gen.stderr.toString()}`))
else console.log(ansi.gray(`  ${gen.stdout.toString().trim()}`))

if (has('verify')) {
  console.log(ansi.gray('\n  รัน bun test …'))
  const t = Bun.spawnSync(['bun', 'test'], { cwd: root, stdout: 'pipe', stderr: 'pipe' })
  const tail = (t.stdout.toString() + t.stderr.toString()).trim().split('\n').slice(-5).join('\n')
  console.log(t.exitCode === 0 ? ansi.green(tail) : ansi.red(tail))
  if (t.exitCode !== 0) process.exit(1)
}

const notes = plan.install.flatMap((id) => (all.get(id)?.notes ?? []).map((n) => `${id}: ${n}`))
if (notes.length) {
  console.log(`\n${ansi.bold('ขั้นต่อไป')}`)
  for (const n of notes) console.log(`  • ${n}`)
}
if (plan.removeExamples) console.log(`  • ${ansi.bold('bun install')} เพื่อให้ dependency ที่ตัดออกหายจาก node_modules/lockfile`)
console.log(`  • ${ansi.bold('bun dev')} แล้วเปิด http://localhost:3000${plan.install.includes('auth') ? ' (สมัครสมาชิกคนแรก = แอดมิน)' : ''}`)
console.log(ansi.gray('  • เพิ่มฟีเจอร์ทีหลัง: bun run setup (หรือ bun run setup --add ชื่อ)\n'))

if (has('clean')) {
  rmSync(join(root, 'features'), { recursive: true, force: true })
  console.log(ansi.gray('  ลบโฟลเดอร์ features/ แล้ว (เพิ่มฟีเจอร์ทีหลังไม่ได้จนกว่าจะดาวน์โหลดต้นแบบใหม่)\n'))
}
