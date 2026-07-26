import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { getCategoryBySlug, serviceCategories } from '../data/services.js'

export default function KategoriPage() {
  const { slug } = useParams()
  const cat = getCategoryBySlug(slug)

  useSeo({
    title: cat
      ? `Kadıköy ${cat.name} | Kozyatağı – Fizyoterapist Onur Yalçın`
      : 'Kategori bulunamadı | Fizyoterapist Onur Yalçın',
    description: cat ? cat.intro : 'Aradığınız hizmet kategorisi bulunamadı.',
    canonical: `${SITE_URL}/tedavi-yaklasimlarimiz/${slug}`,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!cat) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '10rem 1.5rem 6rem', textAlign: 'center' }}>
          <h1>Kategori bulunamadı</h1>
          <p style={{ margin: '1rem 0 2rem' }}>Aradığınız hizmet kategorisi mevcut değil.</p>
          <Link to="/tedavi-yaklasimlarimiz" className="btn btn-primary">Tüm Tedavi Yaklaşımları</Link>
        </div>
        <Footer />
      </>
    )
  }

  const others = serviceCategories.filter((c) => c.slug !== cat.slug)

  return (
    <>
      <Navbar />
      <main>
        <header
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            color: '#fff',
            padding: '7.5rem 0 4rem',
          }}
        >
          <div className="container" style={{ maxWidth: 900 }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: '0.9rem', marginBottom: '1.25rem', color: 'rgba(255,255,255,0.7)' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Ana Sayfa</Link>
              {' / '}
              <Link to="/tedavi-yaklasimlarimiz" style={{ color: 'var(--secondary)' }}>Tedavi Yaklaşımlarımız</Link>
              {' / '}
              <span style={{ color: '#fff' }}>{cat.name}</span>
            </nav>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2 }}>
              {cat.name}
            </h1>
            <p style={{ marginTop: '1.25rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
              {cat.intro}
            </p>
          </div>
        </header>

        <section className="section" style={{ padding: '4rem 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {cat.services.map((s) => (
                <div
                  key={s.name}
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem' }}>{s.name}</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.65, flexGrow: 1 }}>
                    {s.description}
                  </p>
                  {s.blog && (
                    <Link
                      to={`/blog/${s.blog}`}
                      style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem' }}
                    >
                      Detaylı bilgi →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: '3rem', padding: '2rem', textAlign: 'center',
                background: 'var(--background)', borderRadius: 'var(--radius)',
              }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Randevu ve değerlendirme için</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                Şikayetinize yönelik kişiye özel programı birlikte belirleyelim.
              </p>
              <a
                href="https://wa.me/905072949900?text=Merhaba,%20tedavileriniz%20hakkında%20bilgi%20almak%20istiyorum."
                className="btn btn-primary" target="_blank" rel="noopener noreferrer"
              >
                WhatsApp ile İletişime Geç
              </a>
            </div>

            {/* Diğer kategoriler */}
            <div style={{ marginTop: '3.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Diğer Tedavi Yaklaşımları</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/tedavi-yaklasimlarimiz/${c.slug}`}
                    style={{
                      padding: '0.6rem 1.1rem', borderRadius: 30, border: '1px solid var(--border)',
                      backgroundColor: 'var(--surface)', color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem',
                    }}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
