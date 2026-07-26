// Merkezi site / konum yapılandırması.
// VİZYON: İleride İstanbul geneline veya başka ilçelere yayılırken konum ifadelerini
// tek tek aramak yerine buradan yönetiyoruz. Yeni ilçe/bölge hedeflerken bu dosyayı
// ve (gerekirse) areaServed / district sayfalarını güncellemek yeterli olacak şekilde kuruldu.

export const BRAND = 'Fizyoterapist Onur Yalçın'
export const SITE_URL = 'https://fztonuryalcin.com'
export const PHONE = '+90 507 294 99 00'

// Fiziksel klinik konumu (schema adresi bu gerçek konuma sabit kalır)
export const LOCATION = {
  district: 'Kadıköy', // birincil yerel SEO hedefi
  neighborhood: 'Kozyatağı', // mahalle
  city: 'İstanbul',
}

// "Kadıköy Kozyatağı" gibi birleşik ifade
export const AREA = `${LOCATION.district} ${LOCATION.neighborhood}`

// İleride İstanbul geneli/ilçe hedefleri buraya eklenebilir (ör. areaServed genişletme,
// ilçe bazlı landing sayfaları). Şimdilik birincil hedef Kadıköy.
export const TARGET_DISTRICTS = ['Kadıköy']
