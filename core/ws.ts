/** WebSocket: export const WS = defineSocket({ open, message, close }) ในไฟล์ route (ดู core/route.ts) */
import type { ServerWebSocket } from 'bun'
import type { Schema, Static } from './schema'

/** ทุกอย่างที่ Bun ให้มา: send, subscribe, publish (ส่งหาคนอื่นในห้อง), close */
export type Socket = ServerWebSocket<unknown>

export type LoadedSocket = {
  body?: Schema
  open?: (ws: Socket) => unknown
  message?: (ws: Socket, message: any) => unknown
  close?: (ws: Socket, code: number, reason: string) => unknown
}

export function defineSocket<B extends Schema = never>(def: {
  /** ตรวจข้อความที่เข้ามา (ส่ง JSON มา เราแปลงให้) — ไม่ผ่านจะถูกทิ้ง */
  body?: B
  open?: (ws: Socket) => unknown
  message?: (ws: Socket, message: [B] extends [never] ? unknown : Static<B>) => unknown
  close?: (ws: Socket, code: number, reason: string) => unknown
}) {
  return def as LoadedSocket
}
