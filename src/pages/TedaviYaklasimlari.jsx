import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { serviceCategories } from '../data/services.js'

const slug = (s) =>
  s.toLowerCase()
    .replaceAll('ı', 'i').replaceAll('ğ', 'g').replaceAll('ü', 'u')
    .replaceAll('ş', 's').replaceAll('ö', 'o').replaceAll('ç', 'c')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export default function TedaviYaklasimlari() {
  useSeo({
    title: 'Tedavi Yaklaşımlarımız | Fizyoterapi ve Rehabilitasyon Hizmetleri – Kadıköy Kozyatağı',
    description:
      "Kadıköy Kozyatağı'nda manuel terapi, Schroth ile skolyoz, pelvik taban, TME (çene eklemi), klinik pilates ve nörolojik/ortopedik rehabilitasyon dahil 60+ fizyoterapi hizmeti. Fizyoterapist Onur Yalçın.",
    canonical: `${SITE_URL}/tedavi-yaklasimlarimiz`,
  })

  return (
    <>
      <Navbar />
      <main>
        {/* Başlık alanı */}
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
              Kadıköy Kozyatağı'ndaki kliniğimizde; bütüncül fizyoterapi ve manuel terapiden Schroth ile
              skolyoz rehabilitasyonuna, pelvik taban ve TME (çene eklemi) uygulamalarından klinik pilatese
              kadar geniş bir hizmet yelpazesi sunuyoruz. Değerlendirme sonrası her danışana özel program
              oluşturuyoruz.
            </p>
          </div>
        </header>

        {/* Kategori bölümleri */}
        {serviceCategories.map((cat) => (
          <section key={cat.name} id={slug(cat.name)} className="section" style={{ padding: '3.5rem 0' }}>
            <div className="container">
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  position: 'relative',
                  paddingBottom: '0.75rem',
                }}
              >
                {cat.name}
                <span
                  style={{
                    position: 'absolute', bottom: 0, left: 0, width: 56, height: 3,
                    backgroundColor: 'var(--secondary)', borderRadius: 2,
                  }}
                />
              </h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                {cat.services.length} hizmet
              </p>

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
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem' }}>{s.name}</h3>
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
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section" style={{ backgroundColor: 'var(--background)', textAlign: 'center', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Size uygun programı birlikte belirleyelim</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
              Şikayetinize yönelik değerlendirme ve randevu için bize ulaşın.
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
