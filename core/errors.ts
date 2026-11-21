/** error ที่ framework รู้จัก — onError ใน core/app.ts แยกตาม code */
import type { Issue } from './schema'

export class KitError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly status: number,
  ) {
    super(message)
  }
}

export class NotFoundError extends KitError {
  constructor(message = 'NOT_FOUND') {
    super('NOT_FOUND', message, 404)
  }
}

export class ParseError extends KitError {
  constructor(message = 'ไม่สามารถอ่านข้อมูลที่ส่งมาได้') {
    super('PARSE', message, 400)
  }
}

export class ValidationError extends KitError {
  constructor(
    /** body | query | params | headers */
    readonly where: string,
    readonly all: Issue[],
  ) {
    super('VALIDATION', all[0]?.message ?? 'Validation failed', 422)
  }
}

export class InvalidCookieSignature extends KitError {
  constructor(readonly key: string) {
    super('INVALID_COOKIE_SIGNATURE', `ลายเซ็นของ cookie "${key}" ไม่ถูกต้อง`, 401)
  }
}

/** คืนจาก handler/guard เพื่อตอบสถานะพร้อมเนื้อหา:  return status(404, { error: '...' }) */
export class StatusResponse {
  constructor(
    readonly code: number,
    readonly body?: unknown,
  ) {}
}

export const status = (code: number, body?: unknown) => new StatusResponse(code, body)
