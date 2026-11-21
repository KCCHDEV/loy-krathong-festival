// /blog/:slug — บทความหนึ่งชิ้น (เฉพาะที่เผยแพร่แล้ว · ร่างตอบ 404)
import { defineLoader, notFound, type PageProps } from '@core/route'
import { PageHeader } from '@components'
import { getBySlug } from '../../lib/cms'
import { renderMarkdown } from '../../lib/markdown'

export const cache = 60
export const swr = 300
export const cacheTags = ['cms']

export const loader = defineLoader(({ params }) => getBySlug('post', params.slug as string) ?? notFound())
export const generateMetadata = ({ data }: PageProps<typeof loader>) => ({ title: data.title, description: data.excerpt, path: '/blog' })

export default function Post({ data }: PageProps<typeof loader>) {
  return (
    <article>
      <PageHeader title={data.title} lead={new Date(data.published_at ?? data.created_at).toLocaleDateString('th-TH', { dateStyle: 'long' })} back={{ href: '/blog', label: 'บทความทั้งหมด' }} />
      <div class="prose">{renderMarkdown(data.body)}</div>
      {data.tags.length ? (
        <p class="tags">
          {data.tags.map((t) => (
            <a href={`/blog?tag=${encodeURIComponent(t)}`}>
              <code safe>{t}</code>
            </a>
          ))}
        </p>
      ) : (
        ''
      )}
    </article>
  )
}
