# ลอยกระทงออนไลน์ — image สำหรับ production
# ไม่มี dependency ตอนรัน (three.js ถูกบันเดิลไว้ใน public/loy.js แล้ว) จึงคัดลอกเฉพาะซอร์สที่ใช้รัน
FROM oven/bun:1.4.4-slim
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    DB_FILE=/data/data.sqlite \
    MEDIA_DIR=/data/uploads
COPY --chown=bun:bun package.json tsconfig.json index.tsx ./
COPY --chown=bun:bun core ./core
COPY --chown=bun:bun src ./src
COPY --chown=bun:bun public ./public
# ฐานข้อมูล + รูป/วิดีโอที่ผู้เยี่ยมชมอัปโหลดอยู่ใน volume /data (ไม่หายตอนอัปเดต image)
RUN mkdir -p /data && chown bun:bun /data
VOLUME /data
USER bun
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s CMD ["bun", "-e", "fetch('http://localhost:3000/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
CMD ["bun", "index.tsx"]
