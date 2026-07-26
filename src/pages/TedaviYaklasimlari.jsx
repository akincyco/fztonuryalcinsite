import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { serviceCategories } from '../data/services.js'

export default function TedaviYaklasimlari() {
  useSeo({
    title: 'Tedavi Yaklaşımlarımız | Fizyoterapi ve Rehabilitasyon Hizmetleri – Kadıköy Kozyatağı',
    description:
      "Kadıköy Kozyatağı'nda manuel terapi, Schroth ile skolyoz, pelvik taban, TME (çene eklemi), klinik pilates ve nörolojik/ortopedik rehabilitasyon dahil fizyoterapi hizmet kategorilerimiz. Fizyoterapist Onur Yalçın.",
    canonical: `${SITE_URL}/tedavi-yaklasimlarimiz`,
    breadcrumbs: [
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Tedavi Yaklaşımlarımız', url: '/tedavi-yaklasimlarimiz' },
    ],
  })

  return (
    <>
      <Navbar />
      <main>
        <header
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            color: '#fff',
            padding: '8rem 0 4rem',
          }}
        >
          <div className="container" style={{ maxWidth: 900 }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.2 }}>
              Tedavi Yaklaşımlarımız
            </h1>
            <p style={{ marginTop: '1.25rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
              Kadıköy Kozyatağı'ndaki kliniğimizde sunduğumuz fizyoterapi ve rehabilitasyon hizmetlerini
              kategorilere ayırdık. Detaylı bilgi için ilgili başlığı inceleyebilirsiniz.
            </p>
          </div>
        </header>

        <section className="section" style={{ padding: '4rem 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/tedavi-yaklasimlarimiz/${cat.slug}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    padding: '2rem',
                    transition: 'var(--transition)',
                  }}
                >
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>{cat.name}</h2>
                  <span style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {cat.services.length} hizmet
                  </span>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.7, flexGrow: 1 }}>
                    {cat.intro}
                  </p>
                  <span style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.95rem', marginTop: '1.25rem' }}>
                    İncele →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--background)', textAlign: 'center', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
              Şikayetinizi paylaşın, size en uygun değerlendirme ve programı birlikte belirleyelim.
            </p>
            <a
              href="https://wa.me/905072949900?text=Merhaba,%20tedavileriniz%20hakkında%20bilgi%20almak%20istiyorum."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
