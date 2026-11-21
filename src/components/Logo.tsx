import { memo } from '@core/jsx'

/** โลโก้ Kitsune: หัวจิ้งจอกทรงเรขาคณิต สีเดียว (ตามสี accent ของธีม) */
export default memo(function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg class="logo" width={String(size)} height={String(size)} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="7" style="fill:var(--accent)" />
      {/* หู 2 ข้าง + หน้า แหลมลงเป็นปาก */}
      <path d="M6.5 6 13 11.5h6L25.5 6 24.5 16.5 16 26 7.5 16.5z" style="fill:var(--accent-text)" />
      {/* ตา + จมูก */}
      <circle cx="12.6" cy="16.4" r="1.35" style="fill:var(--accent)" />
      <circle cx="19.4" cy="16.4" r="1.35" style="fill:var(--accent)" />
      <path d="M14.6 21.6h2.8L16 23.4z" style="fill:var(--accent)" />
    </svg>
  )
}, (p) => String(p.size ?? 28))
