# Fizyoterapist Onur Yalçın — Web Sitesi (Kaynak Kod)

Bu proje, `fztonuryalcin.com` sitesinin **düzenlenebilir kaynak kodudur**. Orijinal
kaynak kod kaybolduğu için (GitHub'da/zip'te/Netlify'da yalnızca derlenmiş `dist`
çıktısı vardı), site canlı halinden ve derlenmiş paketten birebir yeniden kuruldu.

- **Teknoloji:** Vite + React 18 + React Router
- **Blog içeriği:** `src/data/blogPosts.js` (Markdown), `react-markdown` ile render edilir
- **Stiller:** `src/index.css` (orijinal CSS + bileşenlerden çıkarılan responsive stiller)
- **Görseller:** `public/assets/`

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ üretir
npm run preview  # dist'i lokal servis eder
```

## Dağıtım (Netlify)

`netlify.toml` hazır: build komutu `npm run build`, publish klasörü `dist`.
SPA yönlendirmesi için `public/_redirects` ve `netlify.toml` içinde fallback tanımlı.
Repoyu Netlify'a bağlayıp otomatik deploy açabilirsiniz (artık "drag & drop"
yerine kaynak koddan otomatik build alınır).

## İçerik Nasıl Düzenlenir?

- **Ana sayfa bölümleri:** `src/pages/Home.jsx` (hero, hizmetler, kimdir, şikayetler,
  iletişim vb. — metinler düz metin olarak JSX içinde, doğrudan düzenlenebilir)
- **Menü / üst bar:** `src/components/Navbar.jsx`
- **Alt bilgi:** `src/components/Footer.jsx`
- **SSS:** `src/components/Faq.jsx`
- **Yorumlar:** `src/components/Testimonials.jsx`
- **Blog yazıları:** `src/data/blogPosts.js` (yeni yazı eklemek için diziye `{ id, title,
  category, date, excerpt, content }` nesnesi ekleyin; `content` Markdown'dır)

## ⚠️ Yapılacaklar (canlıdaki eksikler)

- `index.html` içindeki **Meta Pixel ID** hâlâ placeholder:
  `fbq('init', 'BURAYA_PIXEL_ID_GELECEK')` → gerçek Pixel ID ile değiştirin
  (`<noscript>` içindeki `id=BURAYA_PIXEL_ID_GELECEK` de dahil). Bu, canlı sitede de
  böyleydi; pixel şu an veri toplamıyor.
- İletişim formu **FormSubmit.co** kullanıyor
  (`action="https://formsubmit.co/fztonuryalcin@gmail.com"`); ilk gönderimde
  FormSubmit e-posta doğrulaması isteyebilir.
