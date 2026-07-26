import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSectionNav } from '../hooks/useSectionNav.js'

// section: ana sayfada yumuşak kaydırma | to: ayrı sayfa (router)
const links = [
  { section: 'hero', label: 'Anasayfa' },
  { section: 'services', label: 'Tedavi Yaklaşımlarımız' },
  { section: 'conditions', label: 'Şikayetler' },
  { to: '/hakkimda', label: 'Hakkımda' },
  { section: 'blog', label: 'Blog' },
  { section: 'faq', label: 'SSS' },
  { to: '/iletisim', label: 'İletişim' },
]

const PhoneIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
)

const linkStyle = { fontWeight: 500, color: 'var(--primary)', transition: 'color 0.3s' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const goToSection = useSectionNav()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  // Bir nav linkini uygun elemana çevirir (bölüm = yumuşak kaydırma, sayfa = Link)
  const renderLink = (l, style) =>
    l.to ? (
      <Link to={l.to} style={style} onClick={close}>{l.label}</Link>
    ) : (
      <a href="/" style={style} onClick={(e) => { goToSection(l.section, e); close() }}>{l.label}</a>
    )

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition)',
        padding: scrolled ? '0.75rem 0' : '1rem 0',
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        boxShadow: 'var(--shadow-sm)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--secondary)', whiteSpace: 'nowrap', marginRight: '2rem' }} onClick={(e) => { goToSection('hero', e); close() }}>
          Fizyoterapist Onur Yalçın
        </a>

        <div className="nav-desktop" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', margin: 0 }}>
            {links.map((l) => (
              <li key={l.label}>{renderLink(l, linkStyle)}</li>
            ))}
            <li>
              <a href="tel:+905072949900" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                <PhoneIcon size={16} />Randevu Al
              </a>
            </li>
          </ul>
        </div>

        <button className="nav-mobile-toggle" style={{ display: 'block', color: 'var(--primary)' }} onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className="mobile-menu"
        style={{ top: scrolled ? '66px' : '76px', transform: open ? 'translateY(0)' : 'translateY(-150%)' }}
      >
        <ul>
          {links.map((l) => (
            <li key={l.label}>{renderLink(l)}</li>
          ))}
          <li>
            <a href="tel:+905072949900" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
              <PhoneIcon size={18} />Randevu Al
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
