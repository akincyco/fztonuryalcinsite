import { useEffect } from 'react'

export const SITE_URL = 'https://fztonuryalcin.com'
export const DEFAULT_IMAGE = `${SITE_URL}/assets/onur-yalcin-portrait-Pdhc5rvj.jpg`

// Ana sayfa (landing) SEO metni — index.html'deki statik değerlerle aynı tutulur,
// blog sayfasından geri dönüldüğünde title/description'ın eski haline dönmesi için.
export const HOME_SEO = {
  title:
    'En İyi Fizyoterapist Kadıköy Manuel Terapi yakınımda - Kozyatağı Fizyoterapist yakınımda veya Skolyoz Fizyoterapisti yakınımda mı arıyorsunuz - Fizyoterapist Onur Yalçın tam da aradığınız yer',
  description:
    "Kadıköy'de manuel terapi, TME (çene eklemi), skolyoz, pelvik taban ve klinik pilates alanlarında fizyoterapi ve rehabilitasyon hizmeti. Fizyoterapist Onur Yalçın – Kadıköy Kozyatağı.",
  canonical: `${SITE_URL}/`,
  ogType: 'website',
}

function setMetaTag(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  if (!href) return
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Kimlikli bir JSON-LD <script> ekler/günceller; obj null ise kaldırır.
function setJsonLd(id, obj) {
  let el = document.getElementById(id)
  if (!obj) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(obj)
}

function buildBreadcrumb(crumbs) {
  if (!crumbs || crumbs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : `${SITE_URL}${c.url}`,
    })),
  }
}

/**
 * Sayfa başına <title>, meta description, canonical, Open Graph ve (varsa) breadcrumb
 * JSON-LD etiketlerini günceller. SPA olduğu için her sayfa kendi SEO değerlerini set eder.
 * breadcrumbs: [{ name, url }] — url mutlak veya '/...' göreli olabilir.
 */
export function useSeo({ title, description, canonical, ogType = 'website', image = DEFAULT_IMAGE, breadcrumbs }) {
  const crumbsKey = breadcrumbs ? JSON.stringify(breadcrumbs) : ''
  useEffect(() => {
    if (title) document.title = title
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', canonical)
    setMetaTag('property', 'og:image', image)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', image)
    setCanonical(canonical)
    setJsonLd('ld-breadcrumb', buildBreadcrumb(breadcrumbs))
  }, [title, description, canonical, ogType, image, crumbsKey])
}
