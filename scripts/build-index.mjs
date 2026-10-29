// Generates the static catalog pages: index.html at the repo root and
// courses/index.html. Re-run with `node scripts/build-index.mjs` after
// catalog.json changes. Zero dependencies.
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const catalog = JSON.parse(await readFile(join(root, 'catalog.json'), 'utf8'))

const SUBJECTS = [
  ['phys', '物理'],
  ['chem', '化学'],
  ['bio', '生物'],
  ['geo', '地理'],
]

const esc = (value) => String(value).replace(/[&<>"]/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
))

function renderCourseRow(course, courseHref) {
  const steps = course.steps.length
  return `      <li><a href="${courseHref}">${esc(course.title)}</a><span class="meta">${esc(course.textbook.join(' · '))} · ${steps} 步 · <a class="online" href="${esc(course.online)}">在线版</a></span></li>`
}

function renderPage({ title, courseHref, onlinePrefixNote }) {
  const groups = SUBJECTS
    .map(([subject, label]) => {
      const rows = catalog
        .filter((course) => course.subject === subject)
        .map((course) => renderCourseRow(course, courseHref(course)))
      if (rows.length === 0) return ''
      return `    <h2>${label}（${rows.length} 门）</h2>\n    <ul>\n${rows.join('\n')}\n    </ul>`
    })
    .filter(Boolean)
    .join('\n')
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<style>
  :root { color-scheme: light dark; }
  body { font-family: system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
         max-width: 46rem; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; }
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.1rem; margin-top: 2rem; }
  ul { list-style: none; padding: 0; }
  li { padding: .45rem 0; border-bottom: 1px solid color-mix(in srgb, currentColor 12%, transparent); }
  li > a { font-weight: 600; text-decoration: none; }
  li > a:hover { text-decoration: underline; }
  .meta { display: block; font-size: .85rem; opacity: .7; }
  .online { font-weight: 400; font-size: .85rem; }
</style>
</head>
<body>
<h1>铜匠实验室 · 课程目录</h1>
<p>共 ${catalog.length} 门 3D 互动课件。${onlinePrefixNote}</p>
${groups}
</body>
</html>
`
}

await writeFile(
  join(root, 'index.html'),
  renderPage({
    title: '铜匠实验室 · 课程目录',
    courseHref: (course) => course.file,
    onlinePrefixNote: '课程文件在 courses/ 目录，本地打开即可运行，无需服务器。',
  }),
)
await writeFile(
  join(root, 'courses', 'index.html'),
  renderPage({
    title: '铜匠实验室 · 课程目录',
    courseHref: (course) => `./${course.slug}.html`,
    onlinePrefixNote: '课件里的“回家”按钮指向本页。',
  }),
)
console.log(`wrote index.html and courses/index.html (${catalog.length} courses)`)
