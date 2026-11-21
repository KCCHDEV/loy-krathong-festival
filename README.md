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
