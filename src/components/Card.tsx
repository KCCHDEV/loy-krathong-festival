import type { PropsWithChildren } from '@core/jsx'

export default function Card({ title, children }: PropsWithChildren<{ title?: string }>) {
  return (
    <section class="card">
      {title ? <h2 safe>{title}</h2> : ''}
      {children}
    </section>
  )
}
