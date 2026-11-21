import type { PropsWithChildren } from '@core/jsx'

type Props = PropsWithChildren<{
  title: string
  lead?: string
  /** ลิงก์ย้อนกลับ */
  back?: { href: string; label: string }
}>

/** หัวหน้าของทุกหน้าย่อย: ลิงก์กลับ → หัวข้อ → คำอธิบาย */
export default function PageHeader({ title, lead, back, children }: Props) {
  return (
    <header class="page-header">
      {back ? (
        <a href={back.href} class="crumb" safe>
          {`← ${back.label}`}
        </a>
      ) : (
        ''
      )}
      <h1 class="page-title" safe>
        {title}
      </h1>
      {lead ? (
        <p class="lead" safe>
          {lead}
        </p>
      ) : (
        ''
      )}
      {children}
    </header>
  )
}
