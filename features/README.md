# features/ — ต้นแบบของฟีเจอร์ที่เลือกติดตั้งได้

โฟลเดอร์นี้คือ "ชั้นวางของ" ที่ `bun run setup` หยิบไปใส่โปรเจกต์ — ไม่ได้ถูกโหลดโดยแอพ (ไม่มีโค้ดในนี้ทำงานจนกว่าจะถูกคัดลอกออกไป)

```
features/
  presets.json            ชุดสำเร็จรูป (blank, app, cms, full, examples)
  <id>/feature.json       ข้อมูลของฟีเจอร์
  <id>/files/…            ไฟล์ที่จะคัดลอกไปวางที่ราก โปรเจกต์ (โครงสร้างโฟลเดอร์เหมือนโปรเจกต์จริง)
  _blank/files/…          ไฟล์ที่ใช้ทับเมื่อ "ไม่เอาตัวอย่าง" (หน้าแรกเปล่า, db.ts เปล่า, เทสพื้นฐาน)
  examples/feature.json   ฟีเจอร์ builtin: ตัวอย่างที่อยู่ในโปรเจกต์อยู่แล้ว — ไม่ติ๊ก = ลบ ตามรายการ remove
```

## ที่มีให้

| id | ได้อะไร | ต้องใช้ |
| --- | --- | --- |
| `auth` | สมัคร / login / logout / บัญชี / เปลี่ยนรหัสผ่าน · API + JWT · guard สำเร็จรูป (`requireLogin`, `requireRole`, `requireApi`) · argon2id, กันเดารหัส | — |
| `admin` | แดชบอร์ดระบบ + จัดการผู้ใช้ (เปลี่ยนบทบาท ระงับ) | auth |
| `cms` | บทความ/หน้า markdown, ร่าง→เผยแพร่, แท็ก, ประวัติ+ย้อนกลับ, พรีวิวสด, RSS, sitemap, JSON API | auth |
| `uploads` | อัปโหลดไฟล์ปลอดภัย (ตรวจ magic bytes) + คลังไฟล์ + API | auth |
| `contact` | ฟอร์มติดต่อ กันสแปม + กล่องข้อความหลังบ้าน + งานแจ้งเตือน | auth |
| `examples` | หน้าตัวอย่างและ demo ทั้งหมด (routing, htmx, SSE, WebSocket, benchmark, เอกสาร) | — |

## เพิ่มฟีเจอร์ของคุณเอง

1. สร้าง `features/<id>/feature.json`

   ```json
   {
     "id": "shop",
     "title": "ร้านค้า",
     "description": "สินค้า ตะกร้า สั่งซื้อ",
     "category": "เนื้อหา",
     "requires": ["auth"],
     "order": 60,
     "nav": [{ "href": "/shop", "label": "ร้านค้า" }],
     "env": { "SHOP_CURRENCY": "THB" },
     "gitignore": ["uploads/"],
     "notes": ["ข้อความที่จะแสดงหลังติดตั้ง"]
   }
   ```

   `category` เป็นหนึ่งใน `ผู้ใช้` · `เนื้อหา` · `ระบบ` · `ตัวอย่าง` · `requires` ถูกติดตั้งให้อัตโนมัติ
2. วางไฟล์ใน `features/<id>/files/` ตามที่อยากให้ไปอยู่ในโปรเจกต์ (เช่น `files/src/pages/shop/index.tsx`, `files/tests/shop.test.ts`)
3. (ถ้าต้องการ) เพิ่ม id ในชุดที่ `presets.json`
4. ทดสอบ: `bun run setup --list` แล้ว `bun run setup --dry-run --features <id>`

### กติกาที่ต้องรักษา

- **ตารางฐานข้อมูล:** สร้างตอน import ด้วย `CREATE TABLE IF NOT EXISTS` (ผ่าน `db` จาก `src/lib/db.ts`) — ไม่มีขั้นตอน migrate แยก
- **เทส:** ทุกฟีเจอร์มาพร้อมไฟล์เทสใน `files/tests/` (`bun test` อ่านเฉพาะ `tests/` ของโปรเจกต์ ไม่ได้อ่านโฟลเดอร์นี้)
- **เมนูบนเว็บ:** ใส่ใน `nav` ของ manifest — ตัวติดตั้งสร้าง `src/lib/nav.gen.ts` ให้ อย่าแก้ `Nav.tsx`
- **guard ซ้อน:** `_guard.ts` ของโฟลเดอร์แม่ครอบโฟลเดอร์ลูกทั้งหมด ถ้าสองสิทธิ์ต่างกันอยู่ใต้ `/admin` ให้แยกกลุ่มด้วยโฟลเดอร์ `(ชื่อ)` (ไม่ขึ้นใน URL) เหมือน `admin/(dash)` กับ `admin/cms`
- **ห้ามชนไฟล์กัน:** สองฟีเจอร์เขียนไฟล์เดียวกันไม่ได้ (เทส `tests/setup.test.ts` ตรวจให้)

## ตรวจว่าชุดไหนติดตั้งแล้วผ่านทั้งหมด

คัดลอกโปรเจกต์ไปโฟลเดอร์ชั่วคราว → `bun run setup --preset <ชุด> --yes --verify` → `bun run check`
(ชุดทั้งห้าผ่านทั้ง `tsc`, `xss-scan` และ `bun test` ก่อนปล่อย)
