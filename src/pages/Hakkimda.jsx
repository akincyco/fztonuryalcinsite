import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'

export default function Hakkimda() {
  useSeo({
    title: 'Fizyoterapist Onur Yalçın Kimdir? | Hakkımda – Kadıköy Kozyatağı',
    description:
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın; Kadıköy Kozyatağı'nda bütüncül ve kaynak odaklı fizyoterapi ile manuel terapi uygular.",
    canonical: `${SITE_URL}/hakkimda`,
    breadcrumbs: [
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Hakkımda', url: '/hakkimda' },
    ],
  })
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '2rem' }}>
<section id="about" className="section" style={{backgroundColor: 'var(--surface)'}}><div className="container"><div style={{display: 'grid', gridTemplateColumns: 'minmax(0px, 1fr)', gap: '4rem', alignItems: 'center'}}><div className="animate-fade-in-up" id="about-image-side"><div style={{position: 'relative'}}><div style={{position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '4px solid var(--secondary)', borderRadius: 'var(--radius)', zIndex: '1'}}></div><div style={{position: 'relative', width: '100%', paddingBottom: '120%', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius)', zIndex: '2', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img alt="Fizyoterapist Onur Yalçın – Kadıköy Kozyatağı kliniğinde manuel terapi uygulaması" src="/assets/onur-yalcin-portrait-Pdhc5rvj.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0px', left: '0px'}} /></div></div></div><div className="animate-fade-in-up delay-100"><h1 style={{fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem'}}><span style={{color: 'var(--secondary)'}}>Fizyoterapist Onur Yalçın</span> Kimdir?</h1><p style={{color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8'}}>2015 yılında İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon bölümünden mezun olarak meslek hayatıma başladım. Akademik eğitimimi tamamladıktan sonra, klinik pratiklerimde insan vücudunun sadece bölgeden ibaret olmadığını, her bir eklemin ve dokunun birbiriyle konuşan devasa bir ağın parçası olduğunu gördüm. </p><p style={{color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8'}}>Bu süreçte edindiğim tecrübeler beni 'semptom odaklı' değil, 'kaynak odaklı' bir yaklaşıma yöneltti. Bugün kliniğimde; bir diz ağrısının arkasındaki çene eklemi (TME) düzensizliğini veya kronik bir bel ağrısının temelindeki solunum mekaniği bozukluğunu analiz ederek, hastalarımı bir bütün olarak değerlendiriyorum. </p><div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}><div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}><div style={{padding: '10px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '10px', color: 'var(--secondary)'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></div><div><h4 style={{fontWeight: '700', marginBottom: '0.25rem', fontSize: '1.1rem'}}>Kanıta Dayalı </h4><p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>Güncel fizyoterapi takibi</p></div></div><div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}><div style={{padding: '10px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '10px', color: 'var(--secondary)'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div><div><h4 style={{fontWeight: '700', marginBottom: '0.25rem', fontSize: '1.1rem'}}>Deneyim</h4><p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>Bilimsel altyapı ve Klinik Deneyim</p></div></div></div><blockquote style={{marginTop: '3rem', paddingLeft: '1.5rem', borderLeft: '4px solid var(--secondary)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--primary)'}}>"Ağrı bir sonuçtur, biz kaynağı iyileştiriyoruz"</blockquote></div></div></div></section>
      </main>
      <Footer />
    </>
  )
}
