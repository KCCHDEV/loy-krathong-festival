# 🪔 ลอยกระทงออนไลน์

เว็บลอยกระทงที่ทุกคนลอยร่วมกันในแม่น้ำเดียว สร้างบน [Kitsune](https://github.com/KCCHDEV/Kisune-WebServer) (Bun + SQLite)

```bash
bun install
bun dev        # http://localhost:3000
bun test
```

- `src/pages/index.tsx` — หน้าเว็บ · `src/api/krathongs.ts` — API (GET/POST) · `src/lib/krathong.ts` — ตาราง SQLite
- ต้องรันบน server ที่มี Bun (ใช้ GitHub Pages ไม่ได้)

## รูป/วิดีโอที่ผู้เยี่ยมชมแนบ

- แนบได้ 1 ไฟล์ต่อกระทง: รูป PNG/JPEG/GIF/WebP (≤ `MEDIA_IMAGE_MB`, ค่าเริ่มต้น 3) หรือวิดีโอ MP4/WebM (≤ `MEDIA_VIDEO_MB`, ค่าเริ่มต้น 10) เก็บในโฟลเดอร์ `MEDIA_DIR` (ค่าเริ่มต้น `uploads/`)
- เซิร์ฟเวอร์เช็กชนิดจาก magic bytes ไม่รับ SVG/HTML · หน้าเว็บบีบรูปผ่าน canvas ก่อนส่ง (ลบ EXIF/พิกัด GPS) · จำกัด 6 กระทง/นาที/IP
- ลบกระทงที่ไม่เหมาะสม: `DELETE /api/admin/krathongs/:id` พร้อม header `x-api-key: <ADMIN_KEY>` — **ตั้ง `ADMIN_KEY` เองก่อนขึ้นใช้งานจริง** (ค่าเริ่มต้นคือ `dev-secret`)

## ใช้งานหน้าเว็บ

- กดปุ่ม ✕ บนแผง (หรือกด **H**) เพื่อซ่อนฟอร์มดูฉากเต็มจอ · กดปุ่ม "🪔 ลอยกระทง" ด้านบน (หรือ H อีกครั้ง) เพื่อเปิดกลับ
- กดที่รูป/วิดีโอเหนือกระทง (หรือตัวกระทง) เพื่อดูแบบขยาย · กด Esc หรือพื้นที่ว่างเพื่อปิด
- มุมขวาล่างบอกจำนวนกระทงที่ลอยแล้ว (`/api/stats`) · กระทงสุ่มที่ลอยมาเรื่อย ๆ เป็นของตกแต่ง ไม่นับและไม่มีพร

## Rate limit

- ทุก path ต่อ IP: `RATE_LIMIT` (ค่าเริ่มต้น `300/60` = 300 ครั้ง/นาที · `RATE_LIMIT=0` ปิด)
- ลอยกระทงต่อ IP: `KRATHONG_PER_MIN` (6) และ `KRATHONG_PER_HOUR` (40)
- อยู่หลัง proxy/load balancer ต้องตั้ง `TRUST_PROXY=1` ไม่งั้นทุกคนจะถูกนับเป็น IP เดียวกัน

## สถิติผู้เข้าชม

- แถบล่างแสดง: กระทงที่ลอยแล้ว · ผู้เข้าชมวันนี้ (คน) · เข้าชมรวม (ครั้ง) · ออนไลน์ตอนนี้ — ข้อมูลจาก `/api/stats` และ `POST /api/visit`
- **ไม่เก็บ IP/User-Agent ดิบ** เก็บเฉพาะ hash = SHA-256(`COOKIE_SECRET` | วัน | IP | UA) 16 ตัวแรก ซึ่งเปลี่ยนทุกวัน จึงตามตัวคนข้ามวันไม่ได้ (วัน = เวลาไทย)
- ลิงก์เพจ Facebook อยู่ที่แถบล่าง แก้ได้ใน `src/pages/index.tsx`
