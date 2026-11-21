/**
 * ตั้งค่าจาก environment แบบตรวจชนิด + ล้มตั้งแต่เริ่มถ้าผิด (fail fast) — ดีกว่าไปพังกลางทางตอนมีคนใช้
 *
 *   const config = loadConfig({
 *     PORT: t.Numeric({ minimum: 1, maximum: 65535 }),
 *     ADMIN_KEY: t.String({ minLength: 16 }),
 *   }, process.env)
 *   config.PORT // number
 *
 * checkProductionSecrets(): ใน production เตือนเมื่อ COOKIE_SECRET / ADMIN_KEY ยังเป็นค่าเริ่มต้น (เดาได้ = ใครก็ปลอม session ได้)
 *   STRICT_SECRETS=1 = ไม่ยอมเริ่มระบบเลย
 */
import { t, validate, type Schema, type Static } from './schema'

export class ConfigError extends Error {
  constructor(readonly problems: string[]) {
    super('ตั้งค่า environment ไม่ถูกต้อง:\n' + problems.map((p) => `  - ${p}`).join('\n'))
  }
}

export function loadConfig<S extends Record<string, Schema>>(shape: S, env: Record<string, string | undefined> = process.env): { [K in keyof S]: Static<S[K]> } {
  const result = validate(t.Object(shape), env)
  if (!result.ok) throw new ConfigError(result.issues.map((i) => `${i.path.replace(/^\//, '')}: ${i.message}`))
  return result.value as any
}

const DEFAULTS: Record<string, string> = { COOKIE_SECRET: 'dev-cookie-secret', ADMIN_KEY: 'dev-secret' }

/** ปัญหาของ secret ในโหมด production (ค่าว่าง = ปลอดภัย) */
export function productionSecretProblems(env: Record<string, string | undefined> = process.env): string[] {
  if (env.NODE_ENV !== 'production') return []
  const problems: string[] = []
  for (const [name, dev] of Object.entries(DEFAULTS)) {
    const v = env[name]
    if (!v) problems.push(`${name} ไม่ได้ตั้ง (ตอนนี้ใช้ค่าเริ่มต้นที่ทุกคนรู้)`)
    else if (v === dev) problems.push(`${name} ยังเป็นค่าเริ่มต้น "${dev}"`)
    else if (v.length < 16) problems.push(`${name} สั้นเกินไป (ต้องอย่างน้อย 16 ตัวอักษร)`)
  }
  return problems
}

/** ใช้ตอนเริ่มระบบ: มีปัญหา → throw ถ้า STRICT_SECRETS=1 ไม่งั้นคืนรายการให้ผู้เรียกแสดงเตือน */
export function checkProductionSecrets(env: Record<string, string | undefined> = process.env): string[] {
  const problems = productionSecretProblems(env)
  if (problems.length && env.STRICT_SECRETS === '1') throw new ConfigError([...problems, 'STRICT_SECRETS=1: ไม่ยอมเริ่มระบบด้วย secret ที่เดาได้'])
  return problems
}
