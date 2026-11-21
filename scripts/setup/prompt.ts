/**
 * ตัวเลือกใน terminal แบบโต้ตอบ (เขียนเอง ไม่พึ่ง inquirer/prompts) — ลูกศร/jk เลื่อน · space ติ๊ก · a เลือกทั้งหมด · enter ยืนยัน
 */
import { emitKeypressEvents } from 'node:readline'

const useColor = !process.env.NO_COLOR && !!process.stdout.isTTY
const paint = (open: string, close: string) => (s: string) => (useColor ? `\x1b[${open}m${s}\x1b[${close}m` : s)
export const ansi = {
  bold: paint('1', '22'),
  dim: paint('2', '22'),
  red: paint('91', '39'),
  green: paint('92', '39'),
  yellow: paint('93', '39'),
  cyan: paint('96', '39'),
  gray: paint('90', '39'),
}

export const interactive = () => !!process.stdin.isTTY && !!process.stdout.isTTY

export type Choice<T extends string = string> = { value: T; label: string; hint?: string; disabled?: boolean; checked?: boolean }

type Key = { name?: string; ctrl?: boolean; sequence?: string }

/** อ่านปุ่มทีละครั้งจนกว่า handler จะคืนค่า */
function readKeys<R>(onKey: (str: string | undefined, key: Key) => R | undefined): Promise<R> {
  return new Promise((resolve) => {
    emitKeypressEvents(process.stdin)
    const wasRaw = process.stdin.isRaw
    process.stdin.setRawMode(true)
    process.stdin.resume()
    const handler = (str: string | undefined, key: Key) => {
      if (key.ctrl && key.name === 'c') {
        process.stdin.setRawMode(wasRaw)
        process.stdout.write('\x1b[?25h\n')
        process.exit(130)
      }
      const result = onKey(str, key)
      if (result !== undefined) {
        process.stdin.off('keypress', handler)
        process.stdin.setRawMode(wasRaw)
        process.stdin.pause()
        resolve(result)
      }
    }
    process.stdin.on('keypress', handler)
  })
}

function draw(lines: string[], prevLines: number): number {
  if (prevLines) process.stdout.write(`\x1b[${prevLines}A`)
  for (const l of lines) process.stdout.write(`\x1b[2K${l}\n`)
  // ลบบรรทัดเกินถ้ารอบนี้สั้นลง
  for (let i = lines.length; i < prevLines; i++) process.stdout.write('\x1b[2K\n')
  if (prevLines > lines.length) process.stdout.write(`\x1b[${prevLines - lines.length}A`)
  return lines.length
}

/** เลือกอย่างเดียวจากรายการ */
export async function select<T extends string>(title: string, items: Choice<T>[], initial = 0): Promise<T> {
  let cursor = initial
  let drawn = 0
  process.stdout.write('\x1b[?25l')
  const render = () => {
    const lines = [ansi.bold(title), ...items.map((it, i) => `${i === cursor ? ansi.cyan('❯') : ' '} ${i === cursor ? ansi.bold(it.label) : it.label}${it.hint ? ansi.gray('  ' + it.hint) : ''}`), ansi.gray('  ↑/↓ เลื่อน · enter เลือก')]
    drawn = draw(lines, drawn)
  }
  render()
  const value = await readKeys<T>((_s, key) => {
    if (key.name === 'up' || key.name === 'k') cursor = (cursor - 1 + items.length) % items.length
    else if (key.name === 'down' || key.name === 'j') cursor = (cursor + 1) % items.length
    else if (key.name === 'return') return items[cursor]!.value
    render()
    return undefined
  })
  process.stdout.write('\x1b[?25h')
  return value
}

/** ติ๊กได้หลายตัว (disabled = ติ๊กอยู่แล้วและเปลี่ยนไม่ได้) */
export async function multiselect<T extends string>(title: string, items: Choice<T>[]): Promise<T[]> {
  const checked = new Set(items.filter((i) => i.checked || i.disabled).map((i) => i.value))
  let cursor = Math.max(0, items.findIndex((i) => !i.disabled))
  let drawn = 0
  process.stdout.write('\x1b[?25l')
  const render = () => {
    const lines = [
      ansi.bold(title),
      ...items.map((it, i) => {
        const on = checked.has(it.value)
        const box = it.disabled ? ansi.gray('[✓]') : on ? ansi.green('[✓]') : '[ ]'
        const label = it.disabled ? ansi.gray(it.label) : i === cursor ? ansi.bold(it.label) : it.label
        return `${i === cursor ? ansi.cyan('❯') : ' '} ${box} ${label}${it.hint ? ansi.gray('  ' + it.hint) : ''}`
      }),
      ansi.gray('  ↑/↓ เลื่อน · space ติ๊ก · a ทั้งหมด · enter ยืนยัน'),
    ]
    drawn = draw(lines, drawn)
  }
  render()
  const out = await readKeys<T[]>((str, key) => {
    if (key.name === 'up' || key.name === 'k') cursor = (cursor - 1 + items.length) % items.length
    else if (key.name === 'down' || key.name === 'j') cursor = (cursor + 1) % items.length
    else if (key.name === 'space') {
      const it = items[cursor]!
      if (!it.disabled) checked.has(it.value) ? checked.delete(it.value) : checked.add(it.value)
    } else if (str === 'a') {
      const all = items.filter((i) => !i.disabled).every((i) => checked.has(i.value))
      for (const it of items) if (!it.disabled) all ? checked.delete(it.value) : checked.add(it.value)
    } else if (key.name === 'return') return items.filter((i) => checked.has(i.value)).map((i) => i.value)
    render()
    return undefined
  })
  process.stdout.write('\x1b[?25h')
  return out
}

export async function confirm(message: string, initial = true): Promise<boolean> {
  process.stdout.write(`${ansi.bold(message)} ${ansi.gray(initial ? '(Y/n)' : '(y/N)')} `)
  const answer = await readKeys<boolean>((str, key) => {
    if (key.name === 'return') return initial
    if (str?.toLowerCase() === 'y') return true
    if (str?.toLowerCase() === 'n') return false
    return undefined
  })
  process.stdout.write(answer ? 'ใช่\n' : 'ไม่\n')
  return answer
}

/** ถามข้อความบรรทัดเดียว (พิมพ์ได้ · backspace · enter ยืนยัน) · validate คืนข้อความ error หรือ null เมื่อผ่าน */
export async function text(message: string, initial = '', validate?: (value: string) => string | null): Promise<string> {
  let value = ''
  let error = ''
  let drawn = 0
  const render = () => {
    const shown = value || ansi.gray(initial)
    drawn = draw([`${ansi.bold(message)} ${ansi.gray('›')} ${shown}`, ...(error ? [ansi.red('  ' + error)] : [])], drawn)
  }
  render()
  const out = await readKeys<string>((str, key) => {
    if (key.name === 'return') {
      const v = value || initial
      const problem = validate?.(v) ?? null
      if (problem) {
        error = problem
        render()
        return undefined
      }
      return v
    }
    if (key.name === 'backspace') value = value.slice(0, -1)
    else if (str && str.length === 1 && str >= ' ' && !key.ctrl) value += str
    error = ''
    render()
    return undefined
  })
  // เขียนบรรทัดสุดท้ายทับ (ล้างบรรทัด error ถ้ามี)
  process.stdout.write(`\x1b[${drawn}A\x1b[2K${ansi.bold(message)} ${ansi.gray('›')} ${ansi.cyan(out)}\n`)
  for (let i = 1; i < drawn; i++) process.stdout.write('\x1b[2K\n')
  return out
}
