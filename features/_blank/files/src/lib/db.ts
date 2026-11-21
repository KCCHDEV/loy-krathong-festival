/**
 * ฐานข้อมูลด้วย bun:sqlite (มากับ Bun ไม่ต้องติดตั้งเพิ่ม)
 * ฟีเจอร์ที่ติดตั้งผ่าน `bun run setup` สร้างตารางของตัวเองเมื่อ import (CREATE TABLE IF NOT EXISTS)
 * อยากเปลี่ยนเป็น Postgres/Drizzle ภายหลัง แก้แค่ไฟล์นี้กับไฟล์ใน src/lib/ ของแต่ละฟีเจอร์
 */
import { Database } from 'bun:sqlite'

export const db = new Database(process.env.DB_FILE ?? 'data.sqlite', { create: true })

// ตั้งค่าให้เร็ว: WAL อ่าน/เขียนพร้อมกันได้ · NORMAL ไม่ต้องรอ fsync ทุก commit (ยังปลอดภัยกับ WAL)
// busy_timeout ต้องมาก่อน journal_mode (หลาย process เปิดไฟล์พร้อมกันตอนเริ่ม จะรอคิวแทนที่จะ error)
db.exec(`
  PRAGMA busy_timeout = 5000;
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;
  PRAGMA temp_store = MEMORY;
  PRAGMA cache_size = -65536;
  PRAGMA foreign_keys = ON;
`)
