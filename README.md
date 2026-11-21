# 🪔 ลอยกระทงออนไลน์

เว็บลอยกระทงที่ทุกคนลอยร่วมกันในแม่น้ำเดียว สร้างบน [Kitsune](https://github.com/KCCHDEV/Kisune-WebServer) (Bun + SQLite)

```bash
bun install
bun dev        # http://localhost:3000
bun test
```

- `src/pages/index.tsx` — หน้าเว็บ · `src/api/krathongs.ts` — API (GET/POST) · `src/lib/krathong.ts` — ตาราง SQLite
- ต้องรันบน server ที่มี Bun (ใช้ GitHub Pages ไม่ได้)
