import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Ana sayfadaki bölümlere URL'de hash (#hero vb.) bırakmadan yumuşak kaydırma sağlar.
 * Başka bir sayfadaysa önce ana sayfaya gider, sonra bölüme kaydırır.
 */
export function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return function goToSection(id, e) {
    if (e) e.preventDefault()

    const scrollTo = () => {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return true
      }
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return true
      }
      return false
    }

    if (location.pathname !== '/') {
      navigate('/')
      // Ana sayfa render olana kadar bekleyip kaydır
      let tries = 0
      const iv = setInterval(() => {
        if (scrollTo() || ++tries > 30) clearInterval(iv)
      }, 40)
    } else {
      scrollTo()
    }
  }
}
