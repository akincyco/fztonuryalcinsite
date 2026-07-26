// Build öncesi sitemap.xml üretir (public/sitemap.xml).
// Blog yazıları ve hizmet kategorileri veri dosyalarından otomatik okunur;
// yeni içerik eklendikçe sitemap kendini günceller.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { SITE_URL } from '../src/config/site.js'
import { blogPosts } from '../src/data/blogPosts.js'
import { serviceCategories } from '../src/data/services.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/tedavi-yaklasimlarimiz', priority: '0.8' },
  { path: '/hakkimda', priority: '0.8' },
  { path: '/iletisim', priority: '0.8' },
  ...serviceCategories.map((c) => ({ path: `/tedavi-yaklasimlarimiz/${c.slug}`, priority: '0.7' })),
  ...blogPosts.map((p) => ({ path: `/blog/${p.id}`, priority: '0.6' })),
]

const urls = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

const out = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(out, xml, 'utf-8')
console.log(`sitemap.xml üretildi: ${routes.length} URL -> public/sitemap.xml`)
