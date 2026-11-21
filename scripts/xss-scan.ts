/**
 * ตรวจ XSS ใน JSX ด้วย TypeScript checker — bun scripts/xss-scan.ts (อยู่ใน bun run check)
 *
 * กฎ: expression ที่เป็น string ธรรมดา (ไม่ใช่ literal, ไม่ใช่ผลของ JSX / escapeHtml) ที่ใส่เป็นเนื้อหาใน JSX
 *     ต้องอยู่ใน element ที่มี `safe` หรือผ่าน escapeHtml ก่อน — ไม่งั้นข้อมูลจาก user แทรก <script> ได้
 *
 *   <p safe>{user.name}</p>             ✔
 *   <p>{escapeHtml(user.name)}</p>      ✔
 *   <p>{user.name}</p>                  ✖ (name เป็น string ธรรมดา)
 *   <p>{html as SafeHtml}</p>           ✔ (บอกว่าเชื่อถือเอง — ใช้เฉพาะ HTML ที่เราสร้างเอง)
 */
import ts from 'typescript'

const cfg = ts.readConfigFile('tsconfig.json', ts.sys.readFile)
const parsed = ts.parseJsonConfigFileContent(cfg.config, ts.sys, process.cwd())
const program = ts.createProgram(parsed.fileNames, parsed.options)
const checker = program.getTypeChecker()

let scanned = 0
const problems: string[] = []

/** type นี้อาจเป็น string ธรรมดาที่ไม่ปลอดภัยหรือไม่ */
function unsafe(type: ts.Type, depth = 0): boolean {
  if (depth > 4) return false
  if (type.isUnion()) return type.types.some((x) => unsafe(x, depth + 1))
  if (type.flags & ts.TypeFlags.Intersection) return false // SafeHtml = string & { brand }
  if (type.flags & ts.TypeFlags.StringLiteral) return false
  if (type.flags & ts.TypeFlags.String) return true
  if (type.flags & ts.TypeFlags.TemplateLiteral) return true
  if (checker.isArrayType(type) || checker.isTupleType(type)) {
    const [elem] = checker.getTypeArguments(type as ts.TypeReference)
    return elem ? unsafe(elem, depth + 1) : false
  }
  return false
}

const isSafeElement = (el: ts.JsxElement) => {
  const open = el.openingElement
  return open.attributes.properties.some((p) => ts.isJsxAttribute(p) && p.name.getText() === 'safe')
}

function visit(node: ts.Node, sf: ts.SourceFile) {
  if (ts.isJsxExpression(node) && node.expression && ts.isJsxElement(node.parent) && !isSafeElement(node.parent)) {
    const e = node.expression
    const name = ts.isIdentifier(e) ? e.text : ''
    // {children} คือ HTML ที่ component ข้างบนสร้างให้แล้ว
    if (name !== 'children' && unsafe(checker.getTypeAtLocation(e))) {
      const { line, character } = sf.getLineAndCharacterOfPosition(e.getStart())
      problems.push(`${sf.fileName.replace(process.cwd().replaceAll('\\', '/') + '/', '')}:${line + 1}:${character + 1}  {${e.getText().slice(0, 50)}} เป็น string ธรรมดา — ใส่ safe ที่ element หรือใช้ escapeHtml()`)
    }
  }
  ts.forEachChild(node, (c) => visit(c, sf))
}

for (const sf of program.getSourceFiles()) {
  if (sf.isDeclarationFile || sf.fileName.includes('node_modules') || !sf.fileName.endsWith('.tsx')) continue
  scanned++
  visit(sf, sf)
}

if (problems.length) {
  console.error(`\n✖ พบ ${problems.length} จุดที่เสี่ยง XSS:\n` + problems.map((p) => '  ' + p).join('\n'))
  process.exit(1)
}
console.log(`✔ ไม่พบจุดเสี่ยง XSS (ตรวจ ${scanned} ไฟล์ .tsx)`)
