/**
 * เอกสาร API อัตโนมัติ (แทน @elysiajs/openapi + Scalar) — สร้างจาก schema ของ route ใน src/api
 *
 *   GET /openapi        หน้าเอกสาร (HTML ล้วน ไม่พึ่ง CDN)
 *   GET /openapi/json   OpenAPI 3.0 JSON เอาไปใช้กับ Postman / codegen ได้
 */
import type { App, RouteEntry } from './server'
import { toJsonSchema, type Schema } from './schema'
import { escapeHtml } from './jsx'

const esc = (v: unknown) => escapeHtml(String(v))
const documented = (e: RouteEntry) => e.path.startsWith('/api') && e.method !== 'WS' && !e.path.includes('/_/')
const oaPath = (p: string) => p.replace(/:(\w+)/g, '{$1}').replace(/\/\*$/, '/{path}')

function parameters(e: RouteEntry) {
  const out: Record<string, unknown>[] = []
  const names = [...e.path.matchAll(/:(\w+)/g)].map((m) => m[1]!)
  const pschema = e.hook.params ? (toJsonSchema(e.hook.params).properties as Record<string, unknown>) : {}
  for (const n of names) out.push({ name: n, in: 'path', required: true, schema: pschema[n] ?? { type: 'string' } })
  if (e.hook.query) {
    const js = toJsonSchema(e.hook.query) as { properties?: Record<string, unknown>; required?: string[] }
    for (const [n, schema] of Object.entries(js.properties ?? {})) out.push({ name: n, in: 'query', required: js.required?.includes(n) ?? false, schema })
  }
  return out
}

export function buildSpec(app: App, info = { title: 'API', version: '1.0.0' }) {
  const paths: Record<string, Record<string, unknown>> = {}
  for (const e of app.entries.filter(documented)) {
    const op: Record<string, unknown> = { ...(e.hook.detail ?? {}), parameters: parameters(e), responses: { 200: { description: 'OK' } } }
    if (e.hook.body) op.requestBody = { required: true, content: { 'application/json': { schema: toJsonSchema(e.hook.body) } } }
    if (e.hook.body || e.hook.query || e.hook.params) (op.responses as any)[422] = { description: 'ข้อมูลไม่ถูกต้อง' }
    ;(paths[oaPath(e.path)] ??= {})[e.method.toLowerCase()] = op
  }
  return { openapi: '3.0.3', info, paths }
}

function schemaTable(schema: Schema | undefined) {
  if (!schema) return ''
  const js = toJsonSchema(schema) as { properties?: Record<string, any>; required?: string[] }
  const rows = Object.entries(js.properties ?? {})
    .map(([k, v]) => `<tr><td><code>${esc(k)}</code></td><td>${esc(v.type ?? '')}${v.format ? ' · ' + esc(v.format) : ''}</td><td>${js.required?.includes(k) ? 'ต้องมี' : 'ไม่บังคับ'}</td></tr>`)
    .join('')
  return rows ? `<table><tr><th>ชื่อ</th><th>ชนิด</th><th></th></tr>${rows}</table>` : ''
}

function page(app: App, title: string) {
  const entries = app.entries.filter(documented).sort((a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method))
  const items = entries
    .map((e) => {
      const summary = (e.hook.detail as { summary?: string } | undefined)?.summary
      const names = [...e.path.matchAll(/:(\w+)/g)]
      return `<details><summary><b class="m ${e.method}">${e.method}</b> <code>${esc(e.path)}</code> <span class="muted">${esc(summary ?? '')}</span></summary>
${names.length ? `<h4>Path</h4><ul>${names.map((n) => `<li><code>${esc(n[1])}</code></li>`).join('')}</ul>` : ''}
${e.hook.query ? `<h4>Query</h4>${schemaTable(e.hook.query)}` : ''}
${e.hook.body ? `<h4>Body (JSON)</h4>${schemaTable(e.hook.body)}` : ''}
<p class="muted">${e.method === 'GET' ? `<a href="${esc(e.path.includes(':') ? '#' : e.path)}">ลองเปิด</a>` : ''}</p></details>`
    })
    .join('')
  return `<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · API</title>
<style>
:root{color-scheme:light dark;--bg:#fff;--fg:#1c1626;--mut:#7a6f87;--line:#e6dff0;--card:#faf7ff}
@media (prefers-color-scheme:dark){:root{--bg:#17121c;--fg:#f5eefb;--mut:#a99bb8;--line:#2f2539;--card:#211a28}}
body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.6 system-ui,'IBM Plex Sans Thai',sans-serif}
main{max-width:860px;margin:0 auto;padding:32px 20px}
h1{margin:0 0 4px}.muted{color:var(--mut)}
details{background:var(--card);border:1px solid var(--line);border-radius:10px;margin:10px 0;padding:10px 14px}
summary{cursor:pointer}code{font-family:ui-monospace,Consolas,monospace}
.m{display:inline-block;min-width:58px;text-align:center;border-radius:6px;padding:0 6px;color:#111;font-size:12px}
.GET{background:#7ee2a8}.POST{background:#8fb8ff}.PUT{background:#ffd479}.PATCH{background:#c9a8ff}.DELETE{background:#ff9a9a}
table{border-collapse:collapse;width:100%}td,th{border-bottom:1px solid var(--line);padding:4px 8px;text-align:left}
a{color:#8b5cf6}
</style></head><body><main>
<h1>${esc(title)}</h1><p class="muted">สร้างอัตโนมัติจาก <code>src/api</code> · <a href="/openapi/json">OpenAPI JSON</a> · <a href="/">กลับเว็บ</a></p>
${items || '<p class="muted">ยังไม่มี API</p>'}
</main></body></html>`
}

export const openapiDocs = (info = { title: 'API', version: '1.0.0' }) => (app: App) =>
  app
    .get('/openapi', () => page(app, info.title))
    .get('/openapi/json', () => buildSpec(app, info))
