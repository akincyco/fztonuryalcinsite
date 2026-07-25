import { useState, useEffect } from 'react'

const testimonials = [{name:"Ayşe Y.",problem:"Bel Fıtığı & Kronik Ağrı",text:"Yıllardır çektiğim bel fıtığı ağrıları yüzünden ameliyatlık olduğumu düşünüyordum. Onur Bey'in bütüncül manuel terapi yaklaşımı ve klinik pilates seansları sayesinde ağrılarımdan tamamen kurtuldum. Hayat kalitem inanılmaz arttı.",rating:5},{name:"Mert K.",problem:"Çene Eklemi (TME) Disfonksiyonu",text:"Sürekli diş sıkmam ve sabahları uyandığımda geçmeyen baş ağrılarım vardı. Onur Bey, çene eklemi ve omurga bağlantısını kurarak harika bir tedavi süreci yönetti. Artık sabahları ağrısız uyanıyorum.",rating:5},{name:"Zeynep B.",problem:"Postür Bozukluğu & Skolyoz",text:"Masa başı çalışmaktan duruşum tamamen bozulmuştu ve sırt ağrılarım dayanılmazdı. Fizyoterapist eşliğinde yaptığımız egzersizler ve nörogelişimsel yoga sayesinde hem duruşum düzeldi hem de stres kaynaklı gerginliklerim azaldı.",rating:5}]

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: 0.2, position: 'absolute', top: '2rem', left: '2rem' }}>
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>
)
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
)
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
)
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
)

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((y) => (y + 1) % testimonials.length)
  const prev = () => setCurrent((y) => (y - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  const item = testimonials[current]

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="section-title">Danışanlarımız Ne Diyor?</h2>
        <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-light)' }}>
          Sağlığına kavuşan danışanlarımızın deneyimleri.
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ backgroundColor: 'var(--background)', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', textAlign: 'center', position: 'relative' }}>
            <QuoteIcon />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {[...Array(item.rating)].map((_, p) => <StarIcon key={p} />)}
            </div>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--primary)', fontStyle: 'italic', marginBottom: '2rem', minHeight: '120px' }}>
              {'"'}{item.text}{'"'}
            </p>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>{item.name}</h4>
              <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{item.problem}</p>
            </div>
          </div>
          <button onClick={prev} style={{ position: 'absolute', top: '50%', left: '-20px', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--border)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: 'var(--shadow)', color: 'var(--primary)', zIndex: 2 }} aria-label="Önceki">
            <ChevronLeft />
          </button>
          <button onClick={next} style={{ position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--border)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: 'var(--shadow)', color: 'var(--primary)', zIndex: 2 }} aria-label="Sonraki">
            <ChevronRight />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, p) => (
            <button key={p} onClick={() => setCurrent(p)} aria-label={`${p + 1}. yoruma git`}
              style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: p === current ? 'var(--secondary)' : 'rgba(0, 212, 255, 0.2)', transition: 'var(--transition)' }} />
          ))}
        </div>
      </div>
    </section>
  )
}
