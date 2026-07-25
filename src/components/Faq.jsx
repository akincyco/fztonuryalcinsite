import { useState } from 'react'

const faqs = [{question:"Seanslar ne kadar sürüyor?",answer:"İlk değerlendirme ve standart fizyoterapi seanslarımız genellikle 45-60 dakika arası sürmektedir. Uygulanacak olan tedavi yaklaşımına (Manuel Terapi, Klinik Pilates vs.) göre bu süre değişiklik gösterebilir."},{question:"Bel/Boyun fıtığım var, klinik pilates yapabilir miyim?",answer:"Kesinlikle evet. Klinik pilates, normal pilatesten farklı olarak direkt fizyoterapist eşliğinde ve tamamen mevcut omurga rahatsızlığınıza (fıtık, skolyoz vb.) özel olarak modifiye edilerek uygulanır. Fıtık tedavisinde en güvenilir yaklaşımlardan biridir."},{question:"Kaç seansta iyileşirim?",answer:"Tedavi süreci kişiye, problemin kaynağına ve dokuların iyileşme hızına göre değişmekle birlikte; bütüncül yaklaşımımız sayesinde genellikle ilk seanstan itibaren vücudunuzdaki rahatlamayı ve farkı hissedersiniz. İlk değerlendirme sonrası size özel bir yol haritası çiziyoruz."},{question:"Randevuya gelirken yanımda ne getirmeliyim?",answer:"Rahat hareket edebileceğiniz eşofman, şort veya tayt gibi spor kıyafetleri ile gelmeniz tedavi ve değerlendirme süreçlerimizi kolaylaştıracaktır. Eğer varsa yakın tarihli MR, röntgen veya doktor raporlarınızı da yanınızda getirebilirsiniz."}]

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="M12 5v14" />
  </svg>
)
const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
)

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h2 className="section-title">Sıkça Sorulan Sorular</h2>
        <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          Kliniğimize gelmeden önce hastalarımızın en çok merak ettiği sorular ve cevapları.
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0, 212, 255, 0.1)', transition: 'var(--transition)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}
                >
                  {item.question}
                  <span style={{ color: 'var(--secondary)', flexShrink: 0, marginLeft: '1rem' }}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out', padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
                  <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
