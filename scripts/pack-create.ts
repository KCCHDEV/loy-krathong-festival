/**
 * สร้างแพ็กเกจ create-kitsune ที่พร้อมเผยแพร่ → dist/create-kitsune/
 *
 *   bun run pack:create
 *   cd dist/create-kitsune && npm publish          # เมื่อพร้อม (ต้องล็อกอิน npm เอง)
 *   ผู้ใช้:  bun create kitsune my-app   หรือ  bunx create-kitsune my-app
 *
 * โครงสร้าง: cli.js (ตัวสร้างที่ bundle แล้ว มี shebang bun) + template/ (สำเนาโปรเจกต์นี้ที่ตัดไฟล์ส่วนตัวออก)
 * ทดสอบก่อนเผยแพร่: bun dist/create-kitsune/cli.js ../ทดลอง --preset blank --no-install
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { copyTemplate } from './create'

const root = resolve(import.meta.dir, '..')
const out = join(root, 'dist', 'create-kitsune')
const rootPkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

// 1) ตัวสร้าง: bundle เป็นไฟล์เดียว (รวม prompt ด้วย) + shebang
const built = await Bun.build({ entrypoints: [join(root, 'scripts', 'create.ts')], target: 'bun', minify: false })
if (!built.success) {
  console.error(built.logs.join('\n'))
  process.exit(1)
}
const code = await built.outputs[0]!.text()
// bundle เก็บ shebang ของ create.ts ไว้ที่บรรทัดแรกให้แล้ว — เติมเฉพาะเมื่อไม่มี
writeFileSync(join(out, 'cli.js'), code.startsWith('#!') ? code : `#!/usr/bin/env bun\n${code}`)

// 2) ต้นแบบ
const copied = copyTemplate(root, join(out, 'template'))
// package.json ของต้นแบบไม่ต้องมี bun-create (ตัวสร้างของเรารัน setup เอง)
const tplPkgFile = join(out, 'template', 'package.json')
const tplPkg = JSON.parse(readFileSync(tplPkgFile, 'utf8'))
delete tplPkg['bun-create']
writeFileSync(tplPkgFile, JSON.stringify(tplPkg, null, 2) + '\n')

// 3) แพ็กเกจ
writeFileSync(
  join(out, 'package.json'),
  JSON.stringify(
    {
      name: 'create-kitsune',
      version: rootPkg.version ?? '1.0.0',
      description: 'สร้างโปรเจกต์ Kitsune (Bun full-stack framework ไม่มี dependency ตอนรัน) ด้วยคำสั่งเดียว',
      bin: { 'create-kitsune': './cli.js' },
      files: ['cli.js', 'template'],
      engines: { bun: '>=1.1.0' },
      keywords: ['bun', 'framework', 'create', 'starter', 'kitsune'],
    },
    null,
    2,
  ) + '\n',
)
writeFileSync(
  join(out, 'README.md'),
  `# create-kitsune

\`\`\`bash
bun create kitsune my-app
# หรือ
bunx create-kitsune my-app
\`\`\`

เลือกชุดเริ่มต้น (เปล่า / แอพมีสมาชิก / CMS / ทุกอย่าง / ตัวอย่าง) และฟีเจอร์ที่ต้องการระหว่างสร้าง

ไม่อยากกดเลือก: \`bun create kitsune my-app --preset cms --yes\` · ดูตัวเลือกทั้งหมด: \`--help\`
ต้องใช้ [Bun](https://bun.sh) ≥ 1.1
`,
)

const size = Bun.spawnSync(['bun', '-e', `console.log(new Bun.Glob('**/*').scanSync({cwd:${JSON.stringify(out)},dot:true,onlyFiles:true}).toArray().length)`]).stdout.toString().trim()
console.log(`✔ dist/create-kitsune พร้อมแล้ว (${copied} รายการในต้นแบบ, ${size} ไฟล์ทั้งหมด)`)
console.log(`  ทดลอง:     bun dist/create-kitsune/cli.js ../ทดลอง --preset blank --no-install`)
console.log(`  เผยแพร่:   cd dist/create-kitsune && npm publish   (ยังไม่ได้ทำให้ — ต้องล็อกอิน npm ด้วยตัวคุณเอง)`)
void existsSync
