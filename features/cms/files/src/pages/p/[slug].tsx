// /p/:slug — หน้าเว็บทั่วไป (เช่น เกี่ยวกับเรา, นโยบาย) ที่จัดการใน CMS
import { defineLoader, notFound, type PageProps } from '@core/route'
import { PageHeader } from '@components'
import { getBySlug } from '../../lib/cms'
import { renderMarkdown } from '../../lib/markdown'

export const cache = 60
export const swr = 300
export const cacheTags = ['cms']

export const loader = defineLoader(({ params }) => getBySlug('page', params.slug as string) ?? notFound())
export const generateMetadata = ({ data }: PageProps<typeof loader>) => ({ title: data.title, description: data.excerpt })

export default function CmsPage({ data }: PageProps<typeof loader>) {
  return (
    <article>
      <PageHeader title={data.title} />
      <div class="prose">{renderMarkdown(data.body)}</div>
    </article>
  )
}
