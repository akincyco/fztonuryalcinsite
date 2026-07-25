import { useState, useEffect } from 'react'

const links = [
  { href: '/#hero', label: 'Anasayfa' },
  { href: '/#services', label: 'Tedavi Yaklaşımlarımız' },
  { href: '/#conditions', label: 'Şikayetler' },
  { href: '/#about', label: 'Kimdir?' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#faq', label: 'SSS' },
  { href: '/#contact', label: 'İletişim' },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition)',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--secondary)', whiteSpace: 'nowrap', marginRight: '2rem' }}>
          Fizyoterapist Onur Yalçın
        </a>

        <div className="nav-desktop" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', margin: 0 }}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={{ fontWeight: 500, transition: 'color 0.3s' }}>{l.label}</a>
              </li>
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
        style={{ top: scrolled ? '70px' : '80px', transform: open ? 'translateY(0)' : 'translateY(-150%)' }}
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
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
