const PURCHASE_TYPES = Object.freeze({
  SHOPPING: 'Produk Belanja',
  SUBSCRIPTION: 'Produk Langganan',
});
const PURCHASE_TYPE_FIELD = 'Jenis Pembelian';

const products = [
  {
    id: 'source-17',
    name: 'Kompas Digital Premium',
    category: 'Langganan',
    price: 50000,
    originalPrice: null,
    sold: '3,8 rb',
    stock: 999,
    sku: 'GERAI-KDP-748291',
    badge: 'Langganan',
    image: './assets/product-kompas-digital-premium.png',
    description: 'Akses semua artikel premium, ePaper, dan berita eksklusif di Kompas.id.',
    longDescription:
      'Kompas Digital Premium memberikan akses semua artikel premium, ePaper, dan berita eksklusif di Kompas.id. Produk ini cocok untuk pembaca yang ingin mengikuti berita mendalam, opini, audio berita, TTS, dan arsip digital Kompas melalui web, iOS, maupun Android.',
    longDescriptionHtml: `
      <p>Kompas Digital Premium memberikan akses semua artikel premium, ePaper, dan berita eksklusif di Kompas.id. Produk ini cocok untuk pembaca yang ingin mengikuti berita mendalam, opini, audio berita, TTS, dan arsip digital Kompas melalui web, iOS, maupun Android.</p>
      <h3>Yang kamu dapat:</h3>
      <ul>
        <li>Akses semua artikel Kompas.id.</li>
        <li>ePaper Kompas.id.</li>
        <li>TTS dan Audio Berita Kompas.id.</li>
        <li>Akses artikel Opini eksklusif dan artikel interaktif.</li>
        <li>Buku Kompas.id.</li>
        <li>Akses multiplatform: Web, iOS, dan Android.</li>
        <li>ePaper regional Tribun.</li>
      </ul>
      <h3>Periode Langganan</h3>
      <ul>
        <li>1 bulan: Rp50.000.</li>
        <li>1 tahun: Rp360.000.</li>
      </ul>
    `,
    details: [
      'Akses semua artikel Kompas.id',
      'ePaper Kompas.id',
      'TTS dan Audio Berita Kompas.id',
      'Akses artikel Opini eksklusif dan artikel interaktif',
      'Buku Kompas.id',
      'Akses multiplatform: Web, iOS, dan Android',
      'ePaper regional Tribun',
    ],
    shippingText:
      'Pengiriman menggunakan layanan ekspedisi pilihan. Estimasi tiba 3-7 hari kerja. Retur dapat dilakukan dalam 7 hari setelah produk diterima.',
    formats: ['Digital'],
    periods: ['1 bulan', '1 tahun'],
    periodPrices: {
      '1 bulan': { price: 50000 },
      '1 tahun': { price: 360000 },
    },
    variantPrices: {
      Digital: { price: 50000 },
    },
  },
  {
    id: 'source-19',
    name: 'Kompas One Premium',
    category: 'Langganan',
    price: 49000,
    originalPrice: null,
    sold: '2,6 rb',
    stock: 999,
    sku: 'GERAI-KONE-915284',
    badge: 'Langganan',
    image: './assets/product-kompas-one-premium.png',
    description:
      'Satu langganan premium untuk mengakses Kompas.id, Kompas.com, Kontan, dan benefit digital pilihan dalam ekosistem Kompas Gramedia.',
    longDescription:
      'Kompas One Premium menghadirkan satu akses langganan untuk menikmati konten premium lintas platform Kompas Gramedia. Cocok untuk pembaca yang ingin mengikuti berita harian, analisis bisnis, ePaper, dan konten premium melalui satu akun.',
    longDescriptionHtml: `
      <p>Kompas One Premium dirancang untuk pembaca yang membutuhkan akses informasi menyeluruh: berita tepercaya, analisis ekonomi, laporan bisnis, dan konten premium dalam satu paket langganan.</p>
      <h3>Yang kamu dapat:</h3>
      <ul>
        <li>Akses premium Kompas.id untuk artikel mendalam, ePaper, TTS, dan audio berita.</li>
        <li>Akses konten pilihan Kompas.com pada kanal yang didukung.</li>
        <li>Akses Kontan digital untuk berita bisnis, pasar, dan keuangan.</li>
        <li>Satu akun Kompas.id untuk pengalaman baca lintas perangkat.</li>
      </ul>
      <h3>Periode Langganan</h3>
      <ul>
        <li>Bulanan: aktif 30 hari setelah pembayaran terverifikasi.</li>
        <li>Tahunan: aktif 12 bulan setelah pembayaran terverifikasi dengan harga lebih hemat.</li>
      </ul>
    `,
    details: [
      'Produk: Kompas One Premium',
      'Akses Kompas.id Premium',
      'Akses Kompas.com dan Kontan digital pada kanal yang didukung',
      'Aktivasi menggunakan akun Kompas.id',
      'Periode langganan: Bulanan atau Tahunan',
      'Dapat digunakan di web, iOS, dan Android',
    ],
    shippingText:
      'Akses digital dikirim melalui email akun pembeli setelah pembayaran terverifikasi. Pastikan email aktif dan dapat menerima instruksi aktivasi Kompas One Premium.',
    formats: ['Digital'],
    periods: ['Bulanan', 'Tahunan'],
    periodPrices: {
      Bulanan: { price: 49000 },
      Tahunan: { price: 499000 },
    },
    variantPrices: {
      Digital: { price: 49000 },
    },
  },
  {
    id: 'source-20',
    name: 'Kompas Digital Premium + Koran',
    category: 'Langganan',
    startingPrice: true,
    price: 250000,
    originalPrice: null,
    sold: '1,4 rb',
    stock: 999,
    sku: 'GERAI-KDP-KORAN-582604',
    badge: 'Bundling',
    image: './assets/product-kompas-digital-premium-koran.png',
    description:
      'Paket langganan Kompas Digital Premium dengan koran cetak Harian Kompas yang dikirim ke alamat pilihan.',
    longDescription:
      'Kompas Digital Premium + Koran menggabungkan akses digital Kompas.id dengan pengalaman membaca Harian Kompas cetak di rumah. Produk ini cocok untuk pembaca yang ingin mengikuti berita mendalam secara digital sekaligus tetap menikmati koran fisik setiap hari. Setelah pembayaran terverifikasi, akses digital dikirim melalui email akun pembeli dan pengiriman koran diproses ke alamat yang terdaftar.',
    longDescriptionHtml: `
      <p>Paket ini dirancang untuk pembaca yang membutuhkan akses berita tepercaya lintas kanal. Akses digital memberi keleluasaan membaca di mana saja, sementara koran cetak menghadirkan pengalaman membaca Kompas secara lengkap di rumah.</p>
      <h3>Yang kamu dapat:</h3>
      <ul>
        <li>Akses semua artikel premium Kompas.id.</li>
        <li>ePaper Kompas.id dan arsip digital pilihan.</li>
        <li>TTS, audio berita, artikel opini eksklusif, dan konten interaktif.</li>
        <li>Harian Kompas cetak dikirim ke alamat pelanggan sesuai periode langganan.</li>
        <li>Akses multiplatform melalui web, iOS, dan Android.</li>
      </ul>
      <h3>Periode Langganan</h3>
      <ul>
        <li>1 Bulan: Rp250.000.</li>
        <li>3 Bulan: Rp706.000.</li>
        <li>6 Bulan: Rp1.353.000.</li>
      </ul>
    `,
    details: [
      'Produk: Kompas Digital Premium + Koran',
      'Termasuk akses Kompas.id Premium',
      'Termasuk Harian Kompas cetak',
      'Aktivasi digital menggunakan akun Kompas.id',
      'Periode langganan: 1 Bulan, 3 Bulan, atau 6 Bulan',
      'Pengiriman koran mengikuti cakupan area layanan Harian Kompas',
    ],
    shippingText:
      'Koran cetak dikirim ke alamat pelanggan setelah pembayaran terverifikasi dan alamat masuk area layanan. Instruksi aktivasi digital dikirim terpisah melalui email pembeli. Perubahan alamat dapat dilakukan melalui layanan pelanggan sesuai ketentuan yang berlaku.',
    formats: ['Bundling'],
    periods: ['1 Bulan', '3 Bulan', '6 Bulan'],
    requiresShipping: true,
    periodPrices: {
      '1 Bulan': { price: 250000 },
      '3 Bulan': { price: 706000 },
      '6 Bulan': { price: 1353000 },
    },
    variantPrices: {
      Bundling: { price: 250000 },
    },
  },
  {
    id: 'source-21',
    name: 'Kompas Professional Mining',
    category: 'Langganan',
    price: 1500000,
    originalPrice: null,
    sold: '620',
    stock: 999,
    sku: 'GERAI-KPMINING-742931',
    badge: 'Langganan',
    image: './assets/product-kompas-professional-mining.png',
    description:
      'Langganan tahunan untuk profesional yang membutuhkan kurasi berita, analisis ekonomi, regulasi, dan dinamika industri pertambangan.',
    longDescription:
      'Kompas Professional Mining adalah paket akses digital tahunan untuk pembaca profesional yang mengikuti sektor pertambangan, energi, komoditas, dan kebijakan publik. Produk ini membantu pengguna memantau isu bisnis, regulasi, keberlanjutan, hingga dampak sosial ekonomi industri melalui ekosistem informasi Kompas.id.',
    longDescriptionHtml: `
      <p>Dirancang untuk profesional, analis, konsultan, akademisi, dan pengambil keputusan yang membutuhkan referensi informasi tepercaya terkait sektor pertambangan. Akses diaktifkan melalui akun Kompas.id setelah pembayaran terverifikasi.</p>
      <h3>Yang kamu dapat:</h3>
      <ul>
        <li>Akses Kompas.id Premium selama 1 tahun.</li>
        <li>Kurasi artikel ekonomi, bisnis, energi, komoditas, dan pertambangan.</li>
        <li>ePaper Kompas.id dan arsip berita pilihan untuk kebutuhan riset.</li>
        <li>Artikel opini, analisis kebijakan, serta liputan mendalam terkait industri strategis.</li>
        <li>Akses multiplatform melalui web, iOS, dan Android.</li>
      </ul>
      <h3>Periode Langganan</h3>
      <ul>
        <li>1 Tahun: Rp1.500.000.</li>
      </ul>
    `,
    details: [
      'Produk: Kompas Professional Mining',
      'Periode langganan: 1 Tahun',
      'Termasuk akses Kompas.id Premium',
      'Fokus kurasi: pertambangan, energi, komoditas, regulasi, dan ekonomi',
      'Aktivasi menggunakan akun Kompas.id',
      'Dapat digunakan di web, iOS, dan Android',
    ],
    shippingText:
      'Produk digital diaktifkan setelah pembayaran terverifikasi. Instruksi aktivasi dikirim melalui email akun pembeli. Produk ini tidak memerlukan pengiriman fisik.',
    formats: ['Digital'],
    periods: ['1 Tahun'],
    periodPrices: {
      '1 Tahun': { price: 1500000 },
    },
    variantPrices: {
      Digital: { price: 1500000 },
    },
  },
  {
    id: 'source-18',
    name: 'Bundling Pesta Bola: Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 + Akses Kompas Digital Premium',
    category: 'Bundling',
    price: 50000,
    originalPrice: null,
    sold: '1,9 rb',
    stock: 36,
    sku: 'GERAI-PESTABOLA-634812',
    badge: 'Bundling',
    image: './assets/product-pesta-bola-premium.png',
    galleryImages: [
      './assets/product-pesta-bola-premium.png',
      './assets/product-pesta-bola-basic.png',
      './assets/product-pesta-bola-plus.png',
      './assets/product-pesta-bola-premium-alt.png',
    ],
    description:
      'Dapetin sepaket Bundling Premium: Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026, akses Kompas.id, dan pilihan paket collectible untuk Pesta Bola.',
    longDescription:
      'Yang kamu dapat: produk fisik Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026, edisi collectible yang diproduksi terbatas setebal 40 halaman, serta akses Kompas.id untuk membaca berita Pesta Bola 2026 secara digital. Pilih paket Basic (Tabloid Only), Bundling Plus, atau Bundling Premium sesuai kebutuhan sebelum checkout.',
    longDescriptionHtml: `
      <p>Dapetin sepaket Bundling Premium: Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 + Jersei Erspo + Kompas.id. Detail paket sebagai berikut:</p>
      <h3>Yang kamu dapat:</h3>
      <h4>Fisik</h4>
      <p>Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026, edisi collectible yang diproduksi terbatas setebal 40 halaman.</p>
      <h4>Digital</h4>
      <p>Akses Kompas.id untuk membaca berita Pesta Bola 2026 secara digital.</p>
      <h4>Basic (Tabloid Only)</h4>
      <ul>
        <li>Tabloid Bola Edisi Khusus. Edisi collectible yang diproduksi terbatas setebal 40 halaman. Isinya, review tim dan pemain, analisis peluang juara, dan infografis menarik. Rp50.000.</li>
      </ul>
      <h4>Bundling Plus</h4>
      <ul>
        <li>Tabloid Bola Edisi Khusus. Edisi collectible yang diproduksi terbatas setebal 40 halaman. Isinya, review tim dan pemain, analisis peluang juara, dan infografis menarik.</li>
        <li>Match-Day Time Zone Architect, fitur sinkronisasi jadwal pertandingan ke kalender.</li>
        <li>Kartu Koleksi Legend 11. Di tiap paket, ada 3 kartu random legenda sepak bola.</li>
        <li>Akses Kompas.id untuk berita Pesta Bola 2026. Harga spesial Rp99.000 dari harga normal Rp125.000.</li>
      </ul>
      <h4>Bundling Premium</h4>
      <ul>
        <li>Tabloid Bola Edisi Khusus.</li>
        <li>Edisi collectible yang diproduksi terbatas setebal 40 halaman. Isinya, review tim dan pemain, analisis peluang juara, dan infografis menarik.</li>
        <li>Match-Day Time Zone Architect, fitur sinkronisasi jadwal pertandingan ke kalender.</li>
        <li>Kartu Koleksi Legend 11. Di tiap paket, ada 3 kartu random legenda sepak bola.</li>
        <li>Akses Kompas.id untuk berita Pesta Bola 2026.</li>
        <li>Jersei Eksklusif Kompas x Erspo, didesain khusus dan hanya tersedia di paket ini. Harga spesial Rp475.000 dari harga normal Rp750.000.</li>
      </ul>
      <p>Gas, checkout sebelum kehabisan.</p>
      <p><strong>Tulis ukuran di kolom notes. Jika tidak, ukuran akan dikirim secara acak sesuai stok.</strong></p>
    `,
    details: [
      'Produk: Bundling Pesta Bola',
      'Tabloid: Bola by Kompas Edisi Pesta Bola Amerika 2026',
      'Jumlah halaman: 40 halaman',
      'Termasuk akses Kompas Digital Premium',
    ],
    shippingText:
      'Produk fisik dikirim dari Kompas Palmerah setelah pembayaran terverifikasi. Jika paket memuat akses digital, instruksi aktivasi dikirim terpisah melalui email pembeli.',
    formats: ['Basic (Tabloid Only)', 'Bundling Plus', 'Bundling Premium', 'eMagazine'],
    productTypeLabel: 'Bundling',
    optionLabel: 'Paket',
    requiresShipping: true,
    productTypeByFormat: {
      'Basic (Tabloid Only)': 'Fisik',
      'Bundling Plus': 'Bundling',
      'Bundling Premium': 'Bundling',
      eMagazine: 'Digital',
    },
    formatImageIndex: {
      'Basic (Tabloid Only)': 1,
      'Bundling Plus': 1,
      'Bundling Premium': 2,
      eMagazine: 3,
    },
    variantPrices: {
      'Basic (Tabloid Only)': { price: 50000 },
      'Bundling Plus': { price: 99000, originalPrice: 125000 },
      'Bundling Premium': { price: 475000, originalPrice: 750000 },
      eMagazine: { price: 25000 },
    },
  },
  {
    id: 'source-1',
    name: 'Bundling #DemamBola Tabloid Soccer dan Kompas.id',
    category: 'Bundling',
    price: 95000,
    originalPrice: null,
    sold: '1,2 rb',
    stock: 42,
    sku: 'GERAI-BOLA-DM95',
    badge: 'Bundling',
    image: './assets/product-demam-bola.jpg',
    description: 'Paket baca bola untuk mengikuti demam turnamen bersama Tabloid Soccer dan akses Kompas.id.',
    longDescription:
      'Bundling #DemamBola Tabloid Soccer dan Kompas.id dibuat untuk pembaca yang ingin mengikuti suasana pesta bola dengan bacaan fisik dan akses digital. Paket ini cocok untuk nobar, koleksi edisi olahraga, dan membaca ulasan pertandingan dari kanal Kompas secara lebih lengkap. Setelah pembayaran terverifikasi, akses digital dikirim melalui email akun pembeli, sementara tabloid diproses untuk pengiriman.',
    details: ['Isi paket: Tabloid Soccer edisi #DemamBola', 'Termasuk akses Kompas.id', 'Produk fisik dan digital', 'Estimasi pengiriman 2-4 hari kerja', 'Berat paket 0,25 kg'],
    formats: ['Bundling', 'Digital'],
    variantPrices: {
      Bundling: { price: 95000 },
      Digital: { price: 59000 },
    },
  },
  {
    id: 'source-2',
    name: 'Paket Bundling Eksklusif: Bobo the Origin x Kompas.id & e-Magazine Bobo Reguler',
    category: 'Bundling',
    price: 175000,
    originalPrice: 229000,
    sold: '860',
    stock: 35,
    sku: 'GERAI-BOBO-ORIGIN175',
    badge: 'Bundling',
    image: './assets/product-bobo-origin.jpg',
    description: 'Paket nostalgia keluarga berisi Bobo the Origin, akses Kompas.id, dan e-Magazine Bobo Reguler.',
    longDescription:
      'Paket Bundling Eksklusif Bobo the Origin x Kompas.id & e-Magazine Bobo Reguler menghadirkan pengalaman baca lintas generasi. Produk ini menggabungkan konten anak dan keluarga dari Bobo dengan akses digital Kompas.id untuk orang tua. Cocok sebagai hadiah keluarga, koleksi nostalgia, atau paket bacaan akhir pekan di rumah.',
    details: ['Isi paket: Bobo the Origin', 'Termasuk e-Magazine Bobo Reguler', 'Termasuk akses Kompas.id', 'Produk fisik dan digital', 'Aktivasi digital dikirim melalui email pembeli'],
    formats: ['Bundling', 'Fisik', 'Digital'],
    variantPrices: {
      Bundling: { price: 175000, originalPrice: 229000 },
      Fisik: { price: 125000, originalPrice: 159000 },
      Digital: { price: 79000, originalPrice: 99000 },
    },
  },
  {
    id: 'source-3',
    name: 'Bundling Pesta Bola: Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 + Akses Kompas Digital Premium',
    category: 'Bundling',
    price: 99000,
    originalPrice: 125000,
    sold: '1 rb',
    stock: 27,
    sku: 'GERAI-PESTABOLA99',
    badge: 'Bundling',
    image: './assets/product-pesta-bola.jpg',
    description: 'Paket Tabloid Bola by Kompas edisi Pesta Bola Amerika 2026 dengan akses Kompas Digital Premium.',
    longDescription:
      'Bundling Pesta Bola menggabungkan Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 dan akses Kompas Digital Premium. Paket ini membantu pembaca mengikuti analisis tim, pemain, jadwal, dan cerita turnamen dengan lebih menyeluruh. Tabloid dikirim sebagai produk fisik, sementara akses digital aktif setelah pembayaran terverifikasi.',
    details: ['Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026', 'Termasuk akses Kompas Digital Premium', 'Cocok untuk koleksi dan nobar', 'Produk fisik dan digital', 'Berat paket 0,25 kg'],
    formats: ['Bundling', 'Fisik', 'Digital'],
    variantPrices: {
      Bundling: { price: 99000, originalPrice: 125000 },
      Fisik: { price: 50000 },
      Digital: { price: 69000, originalPrice: 89000 },
    },
  },
  {
    id: 'source-4',
    name: 'Paket Bundling Eksklusif: Bobo the Origin x Kompas.id & e-Magazine Bobo Reguler',
    category: 'Bundling',
    price: 149000,
    originalPrice: 229000,
    sold: '720',
    stock: 19,
    sku: 'GERAI-BOBO-ORIGIN149',
    badge: 'Bundling',
    image: './assets/product-bobo-origin.jpg',
    description: 'Paket hemat Bobo the Origin dengan akses digital Kompas.id dan e-Magazine Bobo Reguler.',
    longDescription:
      'Varian paket hemat Bobo the Origin ini ditujukan untuk pembaca keluarga yang ingin mendapatkan produk fisik dan akses digital dalam satu transaksi. Pembeli mendapatkan pengalaman baca anak lewat Bobo dan akses informasi tepercaya dari Kompas.id. Produk fisik dikirim ke alamat pembeli, sedangkan akses digital dikirim melalui email.',
    details: ['Isi paket: Bobo the Origin', 'e-Magazine Bobo Reguler', 'Akses Kompas.id', 'Produk fisik dan digital', 'Stok promo terbatas'],
    formats: ['Bundling', 'Fisik', 'Digital'],
    variantPrices: {
      Bundling: { price: 149000, originalPrice: 229000 },
      Fisik: { price: 109000, originalPrice: 159000 },
      Digital: { price: 69000, originalPrice: 99000 },
    },
  },
  {
    id: 'source-5',
    name: 'Harian Kompas Akhir Pekan + Kompas.id',
    category: 'Langganan',
    startingPrice: true,
    price: 175000,
    originalPrice: null,
    sold: '2,4 rb',
    stock: 999,
    sku: 'GERAI-HK-AKHIRPEKAN',
    badge: 'Langganan',
    image: './assets/product-harian-kompas.jpeg',
    description: 'Paket Harian Kompas Akhir Pekan dengan akses Kompas.id untuk pengalaman baca cetak dan digital.',
    longDescription:
      'Harian Kompas Akhir Pekan + Kompas.id dirancang untuk pembaca yang ingin menikmati koran akhir pekan dalam format fisik sekaligus mengikuti berita harian melalui Kompas.id. Paket ini cocok untuk pembaca rutin yang ingin menjaga kebiasaan membaca koran di rumah tanpa kehilangan fleksibilitas digital.',
    details: ['Harga mulai Rp175.000', 'Harian Kompas Akhir Pekan', 'Termasuk akses Kompas.id', 'Produk fisik dan digital', 'Pengiriman mengikuti area layanan Harian Kompas'],
    formats: ['Digital'],
    variantPrices: {
      Digital: { price: 175000 },
    },
  },
  {
    id: 'source-6',
    name: 'Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026',
    category: 'Buku',
    price: 50000,
    originalPrice: null,
    sold: '1,7 rb',
    stock: 63,
    sku: 'GERAI-TABLOID-BOLA2026',
    badge: 'Tabloid',
    image: './assets/product-pesta-bola.jpg',
    description: 'Tabloid Bola by Kompas edisi khusus Pesta Bola Amerika 2026 untuk koleksi dan panduan nobar.',
    longDescription:
      'Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 memuat ulasan turnamen, profil tim, cerita pemain, dan rangkuman informasi yang cocok dibaca sebelum pertandingan. Produk ini hadir sebagai edisi fisik collectible untuk penggemar sepak bola dan pembaca setia Kompas.',
    details: ['Produk fisik', 'Edisi Pesta Bola Amerika 2026', 'Konten analisis dan profil tim', 'Cocok untuk koleksi', 'Berat 0,2 kg'],
    formats: ['Fisik'],
    variantPrices: {
      Fisik: { price: 50000 },
    },
  },
  {
    id: 'source-7',
    name: 'Kaus Halaman Depan Kompas - Pilih Tanggal Koran Sesukamu',
    category: 'Merchandise',
    price: 199000,
    originalPrice: null,
    sold: '540',
    stock: 24,
    sku: 'GERAI-KAUS-HALKOMPAS',
    badge: 'Merchandise',
    image: './assets/product-kaus-kompas.png',
    description: 'Kaus custom dengan desain halaman depan Kompas sesuai tanggal koran pilihan pembeli.',
    longDescription:
      'Kaus Halaman Depan Kompas memungkinkan pembeli memilih tanggal koran yang ingin dijadikan desain. Produk ini cocok sebagai hadiah personal, merchandise komunitas, atau kenang-kenangan momen bersejarah. Setelah checkout, pembeli dapat menuliskan tanggal koran pilihan pada catatan pesanan.',
    details: ['Produk fisik', 'Custom tanggal halaman depan Kompas', 'Material kaus nyaman untuk harian', 'Ukuran dipilih pada halaman detail', 'Estimasi produksi dan pengiriman 5-7 hari kerja'],
    formats: ['Fisik'],
    variantPrices: {
      Fisik: { price: 199000 },
    },
  },
  {
    id: 'source-8',
    name: 'Benvenuto Papa Francesco Sang Reformer Pesan dan Kesaksian',
    category: 'Buku',
    price: 169000,
    originalPrice: null,
    sold: '310',
    stock: 18,
    sku: 'GERAI-BENVENUTO-PAPA',
    badge: 'Buku',
    image: './assets/product-papa-francesco.jpeg',
    description: 'Buku tentang Paus Fransiskus, pesan reformasi, dan kesaksian yang relevan bagi pembaca lintas iman.',
    longDescription:
      'Benvenuto Papa Francesco Sang Reformer Pesan dan Kesaksian menghadirkan bacaan reflektif tentang sosok Paus Fransiskus sebagai pemimpin spiritual dan pembaru. Buku ini cocok untuk pembaca yang tertarik pada humanisme, kepemimpinan, dan dialog sosial keagamaan.',
    details: ['Produk fisik', 'Tema biografi dan refleksi', 'Penerbit Buku Kompas', 'Cocok untuk koleksi dan hadiah', 'Berat 0,45 kg'],
    formats: ['Fisik'],
    variantPrices: {
      Fisik: { price: 169000 },
    },
  },
  {
    id: 'source-9',
    name: 'Bundling #DemamBola Tabloid Soccer dan Kompas.id',
    category: 'Bundling',
    price: 95000,
    originalPrice: null,
    sold: '980',
    stock: 39,
    sku: 'GERAI-BOLA-DM95-B',
    badge: 'Bundling',
    image: './assets/product-demam-bola.jpg',
    description: 'Paket baca bola untuk mengikuti demam turnamen bersama Tabloid Soccer dan akses Kompas.id.',
    longDescription:
      'Bundling #DemamBola Tabloid Soccer dan Kompas.id menggabungkan bacaan olahraga fisik dan akses berita digital. Paket ini relevan untuk pembaca yang ingin mengikuti turnamen dari sudut pandang Kompas, mulai dari ulasan pertandingan sampai cerita di balik lapangan.',
    details: ['Isi paket: Tabloid Soccer edisi #DemamBola', 'Termasuk akses Kompas.id', 'Produk fisik dan digital', 'Pengiriman 2-4 hari kerja', 'Berat paket 0,25 kg'],
  },
  {
    id: 'source-10',
    name: 'Paket Bundling Eksklusif: Bobo the Origin x Kompas.id & e-Magazine Bobo Reguler',
    category: 'Bundling',
    price: 175000,
    originalPrice: 229000,
    sold: '650',
    stock: 28,
    sku: 'GERAI-BOBO-ORIGIN175-B',
    badge: 'Bundling',
    image: './assets/product-bobo-origin.jpg',
    description: 'Paket nostalgia keluarga berisi Bobo the Origin, akses Kompas.id, dan e-Magazine Bobo Reguler.',
    longDescription:
      'Paket Bundling Eksklusif Bobo the Origin x Kompas.id & e-Magazine Bobo Reguler menjadi pilihan untuk keluarga yang ingin menggabungkan bacaan anak dan akses berita berkualitas. Paket ini membawa pengalaman fisik dan digital dalam satu pesanan.',
    details: ['Bobo the Origin', 'e-Magazine Bobo Reguler', 'Akses Kompas.id', 'Produk fisik dan digital', 'Aktivasi digital melalui email'],
  },
  {
    id: 'source-11',
    name: 'Bundling Pesta Bola: Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 + Akses Kompas Digital Premium',
    category: 'Bundling',
    price: 99000,
    originalPrice: 125000,
    sold: '940',
    stock: 22,
    sku: 'GERAI-PESTABOLA99-B',
    badge: 'Bundling',
    image: './assets/product-pesta-bola.jpg',
    description: 'Paket Tabloid Bola by Kompas edisi Pesta Bola Amerika 2026 dengan akses Kompas Digital Premium.',
    longDescription:
      'Bundling Pesta Bola menghadirkan Tabloid Bola by Kompas dan akses Kompas Digital Premium dalam satu paket. Pembeli dapat membaca ulasan turnamen secara fisik dan mengikuti berita digital Kompas.id setelah akses aktif.',
    details: ['Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026', 'Akses Kompas Digital Premium', 'Produk fisik dan digital', 'Cocok untuk koleksi', 'Berat paket 0,25 kg'],
  },
  {
    id: 'source-12',
    name: 'Paket Bundling Eksklusif: Bobo the Origin x Kompas.id & e-Magazine Bobo Reguler',
    category: 'Bundling',
    price: 149000,
    originalPrice: 229000,
    sold: '610',
    stock: 17,
    sku: 'GERAI-BOBO-ORIGIN149-B',
    badge: 'Bundling',
    image: './assets/product-bobo-origin.jpg',
    description: 'Paket hemat Bobo the Origin dengan akses digital Kompas.id dan e-Magazine Bobo Reguler.',
    longDescription:
      'Paket hemat Bobo the Origin ini cocok untuk pembaca keluarga yang menginginkan produk koleksi dan akses digital. Produk fisik dikirim ke alamat pembeli, sementara akses e-Magazine dan Kompas.id dikirim melalui email setelah pembayaran diverifikasi.',
    details: ['Bobo the Origin', 'e-Magazine Bobo Reguler', 'Akses Kompas.id', 'Produk fisik dan digital', 'Stok promo terbatas'],
  },
  {
    id: 'source-13',
    name: 'Harian Kompas Akhir Pekan + Kompas.id',
    category: 'Langganan',
    startingPrice: true,
    price: 175000,
    originalPrice: null,
    sold: '2,1 rb',
    stock: 999,
    sku: 'GERAI-HK-AKHIRPEKAN-B',
    badge: 'Langganan',
    image: './assets/product-harian-kompas.jpeg',
    description: 'Paket Harian Kompas Akhir Pekan dengan akses Kompas.id untuk pengalaman baca cetak dan digital.',
    longDescription:
      'Harian Kompas Akhir Pekan + Kompas.id menggabungkan kebiasaan membaca koran akhir pekan dengan akses berita digital. Paket ini memberi pengalaman yang realistis untuk pelanggan yang ingin membaca edisi cetak di rumah dan tetap mengikuti pembaruan berita melalui Kompas.id.',
    details: ['Harga mulai Rp175.000', 'Harian Kompas Akhir Pekan', 'Termasuk akses Kompas.id', 'Produk fisik dan digital', 'Pengiriman mengikuti area layanan Harian Kompas'],
  },
  {
    id: 'source-14',
    name: 'Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026',
    category: 'Buku',
    price: 50000,
    originalPrice: null,
    sold: '1,3 rb',
    stock: 58,
    sku: 'GERAI-TABLOID-BOLA2026-B',
    badge: 'Tabloid',
    image: './assets/product-pesta-bola.jpg',
    description: 'Tabloid Bola by Kompas edisi khusus Pesta Bola Amerika 2026 untuk koleksi dan panduan nobar.',
    longDescription:
      'Tabloid Bola by Kompas Edisi Pesta Bola Amerika 2026 adalah produk fisik untuk penggemar sepak bola yang ingin membaca ulasan turnamen dalam format collectible. Cocok dibeli sendiri atau sebagai tambahan untuk paket bundling digital.',
    details: ['Produk fisik', 'Edisi Pesta Bola Amerika 2026', 'Konten analisis dan profil tim', 'Cocok untuk koleksi', 'Berat 0,2 kg'],
  },
  {
    id: 'source-15',
    name: 'Kaus Halaman Depan Kompas - Pilih Tanggal Koran Sesukamu',
    category: 'Merchandise',
    price: 199000,
    originalPrice: null,
    sold: '410',
    stock: 21,
    sku: 'GERAI-KAUS-HALKOMPAS-B',
    badge: 'Merchandise',
    image: './assets/product-kaus-kompas.png',
    description: 'Kaus custom dengan desain halaman depan Kompas sesuai tanggal koran pilihan pembeli.',
    longDescription:
      'Kaus Halaman Depan Kompas adalah merchandise personal yang memungkinkan pembeli memilih tanggal koran sebagai desain utama. Produk ini sangat cocok untuk hadiah ulang tahun, perayaan, atau momen bersejarah keluarga.',
    details: ['Produk fisik', 'Custom tanggal halaman depan Kompas', 'Pilihan ukuran S sampai XXL', 'Tuliskan tanggal pilihan pada catatan pesanan', 'Estimasi produksi dan pengiriman 5-7 hari kerja'],
  },
  {
    id: 'source-16',
    name: 'Benvenuto Papa Francesco Sang Reformer Pesan dan Kesaksian',
    category: 'Buku',
    price: 169000,
    originalPrice: null,
    sold: '260',
    stock: 15,
    sku: 'GERAI-BENVENUTO-PAPA-B',
    badge: 'Buku',
    image: './assets/product-papa-francesco.jpeg',
    description: 'Buku tentang Paus Fransiskus, pesan reformasi, dan kesaksian yang relevan bagi pembaca lintas iman.',
    longDescription:
      'Benvenuto Papa Francesco Sang Reformer Pesan dan Kesaksian menyajikan bacaan reflektif tentang kepemimpinan, pesan kemanusiaan, dan kesaksian mengenai Paus Fransiskus. Produk ini cocok untuk pembaca buku refleksi, biografi, dan dialog sosial keagamaan.',
    details: ['Produk fisik', 'Tema biografi dan refleksi', 'Penerbit Buku Kompas', 'Cocok untuk koleksi dan hadiah', 'Berat 0,45 kg'],
  },
];

const categories = [
  {
    slug: 'buku',
    name: 'Buku',
    icon: 'book-open',
    thumbnail: './assets/category-popular-book.png?v=named-assets',
    heroImage: './assets/category-buku-hero-removebg.png',
    count: '400+ produk',
    tone: 'bg-[#E1F0FF] text-kompas-royal',
    description:
      'Temukan pilihan buku resmi Gerai Kompas: terbitan Penerbit Buku Kompas, TTS Kompas, edisi khusus, dan bacaan pilihan bertema jurnalisme, sejarah, politik, sosial, kesehatan, hingga budaya Indonesia.',
    labels: ['Fisik'],
  },
  {
    slug: 'merchandise',
    name: 'Merchandise',
    icon: 'shirt',
    thumbnail: './assets/category-popular-merchandise.png?v=named-assets',
    heroImage: './assets/category-merchandise-hero-removebg.png',
    count: '80+ koleksi',
    tone: 'bg-[#FFF8D6] text-[#7A5700]',
    description:
      'Koleksi merchandise resmi Kompas untuk pembaca dan komunitas: kaus, tote bag, aksesori, dan item edisi khusus yang dirancang dengan identitas visual Kompas.',
    labels: ['Fisik'],
  },
  {
    slug: 'langganan',
    name: 'Langganan',
    icon: 'newspaper',
    thumbnail: './assets/category-popular-subscription.png?v=named-assets',
    heroImage: './assets/category-langganan-hero.png',
    count: 'Digital',
    tone: 'bg-[#EEFCD2] text-[#1A5D06]',
    description:
      'Pilihan paket langganan digital dan cetak untuk mengakses jurnalisme Kompas: Kompas.id, ePaper, Harian Kompas, dan paket baca keluarga.',
    labels: ['Digital'],
  },
  {
    slug: 'tiket',
    name: 'Tiket',
    icon: 'ticket',
    thumbnail: './assets/category-popular-ticket.png?v=named-assets',
    heroImage: './assets/category-tiket-hero.png',
    count: 'Event & kelas',
    tone: 'bg-[#FFEECC] text-[#7A2100]',
    description:
      'Ikuti agenda pilihan Kompas: kelas menulis, webinar redaksi, diskusi buku, dan acara komunitas yang menghubungkan pembaca dengan narasumber tepercaya.',
    labels: ['Fisik'],
  },
  {
    slug: 'bundling',
    name: 'Bundling',
    icon: 'cart',
    thumbnail: './assets/category-popular-bundling.png?v=named-assets',
    heroImage: './assets/category-bundling-hero.png',
    count: 'Paket hemat',
    tone: 'bg-[#FFD6D6] text-kompas-red',
    description:
      'Paket hemat Gerai Kompas yang menggabungkan produk fisik dan digital, cocok untuk pembaca yang ingin mendapatkan nilai lebih dalam satu transaksi.',
    labels: ['Bundling'],
  },
  {
    slug: 'produk-mitra',
    name: 'Produk Mitra',
    icon: 'store',
    thumbnail: './assets/category-produk-mitra.png',
    heroImage: './assets/category-produk-mitra.png',
    count: 'Pilihan mitra',
    tone: 'bg-[#F2E8FF] text-[#5B2A86]',
    description:
      'Kurasi produk dari mitra pilihan Kompas untuk melengkapi kebutuhan pembaca: paket kolaborasi, produk komunitas, dan penawaran khusus yang relevan dengan ekosistem Gerai Kompas.',
    labels: ['Fisik'],
    isHiddenFromPopular: true,
  },
];

const headerCategoryGroups = [
  {
    title: 'Buku',
    slug: 'buku',
    icon: 'book-open',
    tone: '#E1F0FF',
    description: 'Buku pilihan, edisi khusus, dan referensi tepercaya.',
    children: [
      'Biografi',
      'Business & Economics',
      'Business & Management',
      'Diet & Health',
      'English Books',
      'Fiction & Literature',
      'Law',
      'Photography',
      'Psychology',
      'Reference',
      'Self Improvement',
      'Social Sciences',
      'Travel',
      'TTS Kompas',
    ],
  },
  {
    title: 'Merchandise',
    slug: 'merchandise',
    icon: 'shirt',
    tone: '#FFF3CC',
    description: 'Apparel, aksesori, dan koleksi resmi Kompas.',
    children: ['Apparel', 'Accessories', 'Home & Office', 'Toys & Puzzle'],
  },
  {
    title: 'Bundling',
    slug: 'bundling',
    icon: 'cart',
    tone: '#DFF8F2',
    description: 'Paket hemat produk fisik dan digital Gerai Kompas.',
    children: [],
  },
  {
    title: 'Langganan',
    slug: 'langganan',
    icon: 'newspaper',
    tone: '#EEFCD2',
    description: 'Paket digital, ePaper, dan akses baca Kompas.',
    children: [],
  },
  {
    title: 'Tiket',
    slug: 'tiket',
    icon: 'ticket',
    tone: '#FFE7DA',
    description: 'Event, kelas, dan agenda komunitas pembaca.',
    children: ['Event', 'Kelas'],
  },
  {
    title: 'Produk Mitra',
    slug: 'produk-mitra',
    icon: 'store',
    tone: '#F2E8FF',
    description: 'Kurasi produk kolaborasi dari mitra pilihan.',
    children: [],
  },
];

function slugifyCategorySegment(value = '') {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function headerCategoryChildSlug(group, child) {
  if (group.slug === 'merchandise' && child === 'Bundling') {
    return 'bundling';
  }

  return `${group.slug}-${slugifyCategorySegment(child)}`;
}

function allCategoryDefinitions() {
  const allCategory = {
    slug: 'semua-kategori',
    name: 'Semua Kategori',
    icon: 'grid',
    thumbnail: './assets/category-all.png',
    heroImage: './assets/category-all.png',
    count: 'Semua produk',
    tone: 'bg-[#F2E8FF] text-[#5B2A86]',
    description:
      'Jelajahi seluruh kategori Gerai Kompas: buku, merchandise, tiket, bundling, langganan, dan produk pilihan lainnya.',
    labels: ['Bundling', 'Fisik', 'Digital'],
  };
  const childCategories = headerCategoryGroups.flatMap((group) => {
    const parentCategory = categories.find((category) => category.slug === group.slug) || categories[0];
    return group.children.map((child) => ({
      ...parentCategory,
      slug: headerCategoryChildSlug(group, child),
      name: child,
      parentSlug: group.slug,
      description: `${child} dalam kategori ${group.title} Gerai Kompas. Temukan pilihan produk yang relevan, resmi, dan dikurasi untuk pembaca Kompas.`,
      count: parentCategory.count,
    }));
  });

  return [allCategory, ...categories, ...childCategories];
}

const collections = [
  {
    slug: 'terlaris',
    title: 'Terlaris',
    productTitle: 'Semua Produk Terlaris',
    description:
      'Kumpulan produk Gerai Kompas yang paling banyak diminati pembaca: paket bundling, langganan, buku pilihan, dan merchandise favorit untuk pengalaman belanja yang ringkas.',
    heroImage: './assets/section-terlaris-hero.png',
  },
  {
    slug: 'bundling',
    title: 'Bundling',
    productTitle: 'Semua Paket Bundling',
    description:
      'Paket hemat yang menggabungkan produk fisik dan digital Gerai Kompas. Cocok untuk pembaca yang ingin mendapatkan nilai lebih dalam satu transaksi.',
    heroImage: './assets/section-bundling-hero.png',
  },
  {
    slug: 'langganan',
    title: 'Langganan',
    productTitle: 'Semua Produk Langganan',
    description:
      'Pilihan paket langganan digital dan cetak untuk mengakses jurnalisme Kompas: Kompas.id, ePaper, Harian Kompas, dan paket baca keluarga.',
    heroImage: './assets/section-langganan-hero.png',
  },
  {
    slug: 'terbaru',
    title: 'Baru di Gerai',
    productTitle: 'Semua Produk Baru di Gerai',
    description:
      'Produk terbaru dari Gerai Kompas, mulai dari buku, paket langganan, bundling pilihan, sampai merchandise resmi yang baru tersedia untuk pembaca.',
    heroImage: './assets/section-terbaru-hero.png',
  },
  {
    slug: 'rekomendasi',
    title: 'Rekomendasi',
    productTitle: 'Semua Produk Rekomendasi',
    description:
      'Kurasi produk pilihan Gerai Kompas yang relevan untuk pembaca: buku, langganan, bundling, dan merchandise yang cocok untuk kebutuhan harian.',
    heroImage: './assets/section-rekomendasi-hero.png',
  },
];

let quantity = 1;
let selectedShipping = 'reguler';
let isShippingDropdownOpen = false;
let selectedPaymentPlan = 'once';
let selectedPaymentMethod = 'bca-va';
let isPaymentTermsExpanded = false;
let selectedAddressId = 'home';
let isAddressManagerOpen = false;
let addressFormMode = 'list';
let editingAddressId = null;
let addressDraft = null;
let openAddressMenuId = null;
let addressDeleteCandidateId = null;
let promoDraft = '';
let appliedPromoCode = '';
let promoError = '';
let autoPromoSnackbar = '';
let autoPromoSnackbarType = 'success';
let autoPromoSnackbarTimer = null;
let isPromoModalOpen = false;
let isPaymentMethodModalOpen = false;
let isShareModalOpen = false;
let isShareLinkCopied = false;
let isAllCategoriesSheetOpen = false;
let openAllCategoriesGroups = [];
let pendingPaymentMethod = null;
let openPaymentGroups = [];
let cartPreviewActiveTab = 'belanja';
let isCartPreviewPinned = false;
let cartActiveTab = 'belanja';
let isCartDeleteConfirmOpen = false;
let isCartSummarySheetOpen = false;
const cartTabSelectionOverrides = {
  belanja: {},
  langganan: {},
};
let cartItems = [
  {
    cartId: 'cart-1',
    productId: 'category-bundling-1',
    type: 'Bundling',
    formats: ['Bundling', 'Fisik', 'Digital'],
    quantity: 1,
    selected: true,
    visible: true,
  },
  {
    cartId: 'cart-3',
    productId: 'category-merchandise-1',
    type: 'Fisik',
    formats: ['Fisik'],
    quantity: 1,
    selected: true,
    visible: true,
  },
];
let currentSlide = 0;
let carouselTimer = null;
let carouselPaused = false;
let carouselTransitioning = false;
const HERO_SLIDE_DURATION = 6000;
const CATEGORY_PAGE_SIZE = 20;
const HOME_LATEST_PAGE_SIZE = 8;
let selectedProductId = 'source-1';
let selectedProductImageIndex = 0;
let selectedProductFormats = ['Bundling', 'Digital'];
let selectedProductFormat = selectedProductFormats[0];
let selectedProductPeriod = '';
let isProductDescriptionExpanded = false;
let isPurchaseSheetOpen = false;
let purchaseSheetMode = 'buy';
let shouldAnimatePurchaseSheet = false;
let shouldUseInitialProductImage = false;
let shouldScrollProductToTop = false;
let lastRenderedLocationKey = '';
let shouldSkipNextRouteScroll = false;
let pendingScrollRestoreY = null;
let pendingElementScrollRestores = [];
let mobileCheckoutBarController = null;
const categoryMobileVisibleCounts = {};
const categoryMobileLoading = {};
const collectionMobileVisibleCounts = {};
const collectionMobileLoading = {};
let homeLatestVisibleCount = HOME_LATEST_PAGE_SIZE;
let isHomeLatestLoading = false;
const wishlist = new Set();
const wishlistSavedAt = new Map();
let wishlistSeeded = false;
let wishlistSort = 'newest';
let wishlistMobileVisibleCount = CATEGORY_PAGE_SIZE;
let isWishlistLoading = false;
let searchSort = 'relevance';
let activeSearchFilter = '';
let searchVisibleCount = CATEGORY_PAGE_SIZE;
let isSearchLoading = false;
let authMode = null;
let authFeedback = '';
let authStep = 'identifier';
let authIdentifier = '';
let authIdentifierError = '';
let isAuthenticated = true;
let pendingWishlistProductId = null;
let pendingAuthRedirect = '';
let pendingAddressManagerOpen = false;

const checkoutAddresses = [
  {
    id: 'home',
    label: 'Rumah',
    recipient: 'Reza Pratama',
    phone: '0812-900-50800',
    district: 'Tanah Abang',
    city: 'Jakarta Pusat',
    province: 'DKI Jakarta',
    address: 'Jl. Palmerah Selatan No. 26',
    courierNote: '',
  },
  {
    id: 'office',
    label: 'Kantor',
    recipient: 'Reza Pratama',
    phone: '0812-900-50800',
    district: 'Palmerah',
    city: 'Jakarta Barat',
    province: 'DKI Jakarta',
    address: 'Menara Kompas Lt. 5, Jl. Palmerah Barat No. 29',
    courierNote: 'Titip ke resepsionis jika penerima sedang rapat.',
  },
];

const promoCatalog = {
  GERAI14: {
    label: 'Voucher GERAI14',
    value: 14000,
  },
  PAYDAY35: {
    label: 'Promo Payday',
    value: 25000,
  },
  AUTORENEW10: {
    label: 'Diskon Perpanjang Otomatis',
    rate: 0.1,
    maxValue: 50000,
    auto: true,
  },
};

const heroSlides = [
  {
    title: 'Promo Payday Diskon Buku',
    image: './assets/hero-payday-2026.png',
    href: '#',
  },
  {
    title: 'Katalog Merchandise Kompas Edisi HUT ke-61',
    image: './assets/hero-merchandise-hut-61-wide.png',
    href: '#',
  },
  {
    title: 'Katalog Merchandise Kompas Edisi HUT ke-61',
    image: './assets/hero-merchandise-kompas-hut-61.png',
    href: '#',
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => (
    {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char]
  ));
}

function roundVariantPrice(value) {
  return Math.max(0, Math.round(value / 1000) * 1000);
}

function productVariantPricing(product, type = selectedProductFormat, period = product.id === selectedProductId ? selectedProductPeriod : productPeriodOptions(product)[0] || '') {
  if (period && product.periodPrices?.[period]) {
    const periodPrice = product.periodPrices[period];
    return {
      price: periodPrice.price,
      originalPrice: periodPrice.originalPrice || null,
    };
  }

  const normalizedType = normalizeProductFormatLabel(type);
  if (product.variantPrices?.[normalizedType]) {
    const variantPrice = product.variantPrices[normalizedType];
    return {
      price: variantPrice.price,
      originalPrice: variantPrice.originalPrice || null,
    };
  }

  if (product.variantPrices?.[type]) {
    const variantPrice = product.variantPrices[type];
    return {
      price: variantPrice.price,
      originalPrice: variantPrice.originalPrice || null,
    };
  }

  const basePrice = product.price;
  const discountRatio =
    product.originalPrice && product.originalPrice > product.price
      ? product.originalPrice / product.price
      : null;
  const multipliers = {
    Bundling: 1,
    Fisik: product.category === 'Buku' || product.category === 'Merchandise' || product.category === 'Tiket' ? 1 : 0.72,
    Digital: product.category === 'Langganan' ? 1 : 0.58,
  };
  const multiplier = multipliers[type] || 1;
  const price = roundVariantPrice(basePrice * multiplier);
  const originalPrice = discountRatio ? roundVariantPrice(price * discountRatio) : null;

  return {
    price,
    originalPrice,
  };
}

function visibleCartItems() {
  return cartItems.filter((item) => item.visible);
}

function isSubscriptionCartItem(item) {
  return item.type === 'Digital' || cartItemProduct(item).category === 'Langganan';
}

function isShoppingBundlingCartItem(item) {
  const product = cartItemProduct(item);
  return productPurchaseType(product) === PURCHASE_TYPES.SHOPPING && cartItemProductType(item) === 'Bundling';
}

function isCartLanggananTabItem(item) {
  return isSubscriptionCartItem(item) || isShoppingBundlingCartItem(item);
}

function isLockedSubscriptionProduct(product = getSelectedProduct()) {
  return product?.category === 'Langganan';
}

function cartItemQuantity(item) {
  return isSubscriptionCartItem(item) ? 1 : item.quantity;
}

function activeCartTabItems() {
  const items = visibleCartItems();
  return cartActiveTab === 'langganan' ? items.filter(isCartLanggananTabItem) : items;
}

function cartItemSelectedInTab(item, tab = cartActiveTab) {
  const overrides = cartTabSelectionOverrides[tab] || {};
  return Object.prototype.hasOwnProperty.call(overrides, item.cartId) ? overrides[item.cartId] : item.selected;
}

function activeCartTabSelectedItems() {
  return activeCartTabItems().filter((item) => cartItemSelectedInTab(item));
}

function selectedCartItems() {
  return visibleCartItems().filter((item) => item.selected);
}

function cartItemProduct(item) {
  return findProductById(item.productId) || products.find((product) => product.id === 'source-1') || products[0];
}

function cartItemProductType(item) {
  const product = cartItemProduct(item);
  return productTypeForFormat(product, item.type || '');
}

function checkoutPaymentPlanConstraint(items = checkoutOrderItems()) {
  const cartTab = checkoutCartSourceTab(items);
  if (cartTab === 'langganan') {
    return {
      plan: 'recurring',
      source: 'cart-langganan',
      icon: 'refresh',
      title: 'Perpanjang Otomatis',
      description: 'Pesanan dari Keranjang Langganan akan diperbarui otomatis sehingga Anda tidak perlu melakukan perpanjangan secara manual.',
    };
  }

  if (cartTab === 'belanja') {
    return {
      plan: 'once',
      source: 'cart-belanja',
      icon: 'bank',
      title: 'Sekali Bayar',
      description: 'Pesanan dari Keranjang Belanja dibayar satu kali, tanpa perpanjangan otomatis.',
    };
  }

  const lockedShoppingItem = items.find((item) => {
    const product = cartItemProduct(item);
    const productType = cartItemProductType(item);
    return productPurchaseType(product) === PURCHASE_TYPES.SHOPPING && ['Digital', 'Fisik'].includes(productType);
  });

  if (lockedShoppingItem) {
    const productType = cartItemProductType(lockedShoppingItem);
    return {
      plan: 'once',
      source: `shopping-${productType.toLowerCase()}`,
      icon: productType === 'Digital' ? 'card' : 'bank',
      title: 'Sekali Bayar',
      description: `Produk Belanja dengan jenis produk ${productType} dibayar satu kali, tanpa perpanjangan otomatis.`,
    };
  }

  return {
    plan: null,
    source: 'selectable',
  };
}

function cartItemTotals(item) {
  const product = cartItemProduct(item);
  const pricing = productVariantPricing(product, item.type, item.period);
  const quantityValue = cartItemQuantity(item);
  const subtotal = pricing.price * quantityValue;
  const discount = pricing.originalPrice ? (pricing.originalPrice - pricing.price) * quantityValue : 0;

  return {
    product,
    pricing,
    subtotal,
    discount,
  };
}

function cartItemVariantLabels(item, options = {}) {
  const labels = [item.type, item.period].filter(Boolean);
  if (options.includeProductType) {
    const productType = cartItemProductType(item);
    if (productType && !labels.includes(productType)) {
      labels.unshift(productType);
    }
  }

  if (!labels.length && item.formats?.length) {
    labels.push(item.formats[0]);
  }

  return [...new Set(labels)];
}

function cartItemVariantBadges(item, options = {}) {
  return cartItemVariantLabels(item, options)
    .map((label) => badge(label, badgeVariantForLabel(label), 'checkout-format-badge'))
    .join('');
}

function showSnackbar(message, type = 'success') {
  autoPromoSnackbar = message;
  autoPromoSnackbarType = type;
}

function renderPreservingScroll(scrollSelectors = []) {
  pendingScrollRestoreY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  pendingElementScrollRestores = scrollSelectors
    .map((selector) => {
      const element = document.querySelector(selector);
      return element ? { selector, scrollTop: element.scrollTop, scrollLeft: element.scrollLeft } : null;
    })
    .filter(Boolean);
  render();
}

function cartSummaryTotals(items = selectedCartItems()) {
  return items.reduce(
    (summary, item) => {
      const totals = cartItemTotals(item);
      return {
        subtotal: summary.subtotal + totals.subtotal,
        discount: summary.discount + totals.discount,
        originalTotal: summary.originalTotal + totals.subtotal + totals.discount,
        count: summary.count + cartItemQuantity(item),
      };
    },
    {
      subtotal: 0,
      discount: 0,
      originalTotal: 0,
      count: 0,
    },
  );
}

const shippingOptions = [
  { id: 'reguler', name: 'JNE Reguler', desc: 'Estimasi tiba 2-4 hari kerja setelah pembayaran terverifikasi', price: 9000 },
  { id: 'yes', name: 'JNE YES', desc: 'Estimasi tiba 1 hari setelah pembayaran terverifikasi', price: 12000 },
];

function checkoutNeedsShipping(items) {
  return items.some((item) => {
    const product = cartItemProduct(item);
    const productType = cartItemProductType(item);
    if (productType === 'Digital') {
      return false;
    }

    if (product.requiresShipping) {
      return true;
    }

    if (productType === 'Bundling' || productType === 'Fisik') {
      return true;
    }

    if (product.category === 'Langganan' || product.category === 'Tiket') {
      return false;
    }

    return false;
  });
}

function checkoutNeedsStoreNote(items) {
  return items.some((item) => cartItemProductType(item) !== 'Digital');
}

function selectedShippingOption() {
  return shippingOptions.find((option) => option.id === selectedShipping) || shippingOptions[0];
}

function checkoutCartItemsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('checkoutFlow') !== 'cart') {
    return [];
  }

  const cartItemIds = (params.get('cartItems') || '')
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean);

  if (!cartItemIds.length) {
    return [];
  }

  return cartItemIds
    .map((id) => cartItems.find((item) => item.cartId === id && item.visible))
    .filter(Boolean);
}

function checkoutCartSourceTab(items = checkoutCartItemsFromUrl()) {
  const params = new URLSearchParams(window.location.search);
  if (params.get('checkoutFlow') !== 'cart') {
    return null;
  }

  if (!items.length) {
    return null;
  }

  const tab = params.get('cartTab');
  if (tab === 'belanja' || tab === 'langganan') {
    return tab;
  }

  return items.every(isSubscriptionCartItem) ? 'langganan' : 'belanja';
}

function checkoutOrderItems() {
  const cartCheckoutItems = checkoutCartItemsFromUrl();
  if (cartCheckoutItems.length) {
    return cartCheckoutItems;
  }

  const product = getSelectedProduct();
  const isSubscriptionCheckoutProduct = product.category === 'Langganan' || selectedProductFormat === 'Digital';
  return [
    {
      cartId: 'checkout-single',
      productId: product.id,
      type: selectedProductFormat,
      formats: selectedProductFormats,
      period: selectedProductPeriod,
      quantity: isSubscriptionCheckoutProduct ? 1 : quantity,
      selected: true,
      visible: true,
      isSingleCheckout: true,
    },
  ];
}

function routeUrl(route, productId = selectedProductId, type = selectedProductFormat, formats = selectedProductFormats, period = productId === selectedProductId ? selectedProductPeriod : productPeriodOptions(findProductById(productId))[0] || '') {
  const params = new URLSearchParams(window.location.search);
  params.delete('cartItems');
  params.delete('cartTab');
  params.delete('period');

  if (route === 'product' || route === 'checkout' || route === 'cart') {
    params.set('product', productId);
    params.set('type', type);
    params.set('types', sortProductLabels(formats).join(','));
    if (productPeriodOptions(findProductById(productId)).length && period) {
      params.set('period', period);
    }
    if (route === 'checkout') {
      params.set('checkoutFlow', 'buy-now');
    } else {
      params.delete('checkoutFlow');
    }
  } else {
    params.delete('product');
    params.delete('type');
    params.delete('types');
    params.delete('period');
    params.delete('checkoutFlow');
  }

  const query = params.toString();
  return `${query ? `?${query}` : window.location.pathname}#${route}`;
}

function homeUrl() {
  return `${window.location.pathname}#home`;
}

function searchUrl(query = '', overrides = {}) {
  const params = new URLSearchParams(window.location.search);
  params.delete('product');
  params.delete('type');
  params.delete('types');
  params.delete('period');
  params.delete('checkoutFlow');
  params.delete('cartItems');
  params.delete('cartTab');
  params.delete('page');
  params.delete('category');
  params.delete('collection');

  const searchQuery = query.trim();
  if (searchQuery) {
    params.set('q', searchQuery);
  } else {
    params.delete('q');
  }

  ['filterCategory', 'filterType', 'sort'].forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(overrides, key)) {
      const value = String(overrides[key] || '').trim();
      if (value && value !== 'all' && !(key === 'sort' && value === 'relevance')) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }
  });

  const queryString = params.toString();
  return `${queryString ? `?${queryString}` : window.location.pathname}#search`;
}

function categoryUrl(slug = 'buku') {
  const params = new URLSearchParams(window.location.search);
  params.delete('product');
  params.delete('type');
  params.delete('types');
  params.delete('period');
  params.delete('checkoutFlow');
  params.delete('cartItems');
  params.delete('cartTab');
  params.delete('page');
  params.delete('collection');
  params.set('category', slug);
  const query = params.toString();
  return `${query ? `?${query}` : window.location.pathname}#category`;
}

function headerCategoryChildUrl(group, child) {
  return categoryUrl(headerCategoryChildSlug(group, child));
}

function headerCategoryPanel(group, isActive = false) {
  const category = categories.find((item) => item.slug === group.slug) || categories[0];
  const activeClass = isActive ? ' is-active' : '';
  return `
    <div class="rubric-category-panel${activeClass}" data-rubric-category-panel="${group.slug}">
      <a class="rubric-group-title" href="${categoryUrl(group.slug)}">
        <span>${icon(group.icon, 'h-4 w-4')} ${group.title}</span>
      </a>
      ${
        group.children.length
          ? `<div class="rubric-child-grid">
              ${group.children
                .map((child) => `<a href="${headerCategoryChildUrl(group, child)}">${child}</a>`)
                .join('')}
            </div>`
          : `<a class="rubric-spotlight" href="${categoryUrl(group.slug)}">
              <span class="rubric-spotlight-image">
                <img src="${category.heroImage || category.thumbnail}" alt="" />
              </span>
              <span>
                <strong>${category.name}</strong>
                <small>${category.description}</small>
              </span>
              <em>Lihat kategori ${icon('chevron', 'h-4 w-4')}</em>
            </a>`
      }
    </div>
  `;
}

function headerCategoryMenu() {
  return `
    <div class="rubric-panel" aria-label="Kategori produk">
      <div class="rubric-side">
        <div class="rubric-parent-list">
          ${headerCategoryGroups
            .map(
              (group, index) => `
                <a class="rubric-parent-link ${index === 0 ? 'is-active' : ''}" href="${categoryUrl(group.slug)}" data-rubric-parent="${group.slug}">
                  <span class="rubric-parent-icon" style="--rubric-icon-bg: ${group.tone};"><img src="${(categories.find((category) => category.slug === group.slug) || categories[0]).thumbnail}" alt="" /></span>
                  <strong>${group.title}</strong>
                </a>
              `,
            )
            .join('')}
        </div>
      </div>
      <div class="rubric-content">
        ${headerCategoryGroups.map((group, index) => headerCategoryPanel(group, index === 0)).join('')}
      </div>
    </div>
  `;
}

function headerShortcutLinks() {
  return [
    ['Terlaris', collectionUrl('terlaris'), 'terlaris', '#fff4d8'],
    ['Terbaru', collectionUrl('terbaru'), 'terbaru', '#f2e8ff'],
    ['Rekomendasi', collectionUrl('rekomendasi'), 'rekomendasi', '#ffeadc'],
    ['Bundling', collectionUrl('bundling'), 'bundling', '#dff9f3'],
    ['Langganan', collectionUrl('langganan'), 'langganan', '#eefcd2'],
  ];
}

function allCategoriesShortcutLinks() {
  return headerShortcutLinks().filter(([, , slug]) => !['bundling', 'langganan'].includes(slug));
}

function allCategoriesSheet() {
  if (!isAllCategoriesSheetOpen) {
    return '';
  }

  return `
    <div class="checkout-modal-shell all-categories-sheet-shell" data-all-categories-sheet>
      <button class="checkout-modal-backdrop" type="button" data-all-categories-close aria-label="Tutup semua kategori"></button>
      <section class="checkout-modal-panel all-categories-sheet-panel" role="dialog" aria-modal="true" aria-label="Lihat semua kategori">
        <div class="all-categories-sheet-handle" aria-hidden="true"></div>
        <div class="checkout-modal-header all-categories-sheet-header">
          <div>
            <h2>Semua Kategori</h2>
          </div>
          <button type="button" data-all-categories-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="all-categories-sheet-content">
          <p class="all-categories-sheet-description">Temukan produk Gerai Kompas berdasarkan koleksi pilihan dan kategori.</p>
          <section class="all-categories-shortcuts" aria-label="Koleksi pilihan">
            <h3>Koleksi Pilihan</h3>
            <div>
              ${allCategoriesShortcutLinks()
                .map(([label, href, slug, tone]) => {
                  const collection = collections.find((item) => item.slug === slug) || collections[0];
                  return `
                    <a class="all-categories-shortcut" href="${href}" data-all-categories-link>
                      <span class="all-categories-shortcut-icon" style="--collection-shortcut-bg: ${tone};">
                        <img src="${collection.heroImage}" alt="" loading="lazy" />
                      </span>
                      <span>${label}</span>
                    </a>
                  `;
                })
                .join('')}
            </div>
          </section>
          <section class="all-categories-menu" aria-label="Kategori produk">
            <h3>Kategori Produk</h3>
            <div class="all-categories-menu-list">
              ${headerCategoryGroups
                .map((group) => {
                  const category = categories.find((item) => item.slug === group.slug) || categories[0];
                  const isOpen = openAllCategoriesGroups.includes(group.slug);
                  const childLinks = group.children.length
                    ? [
                        `<a href="${categoryUrl(group.slug)}" data-all-categories-link>Semua ${group.title}</a>`,
                        ...group.children.map((child) => `<a href="${categoryUrl(headerCategoryChildSlug(group, child))}" data-all-categories-link>${child}</a>`),
                      ]
                        .join('')
                    : `<a href="${categoryUrl(group.slug)}" data-all-categories-link>Lihat produk ${group.title}</a>`;

                  return `
                    <article class="all-categories-group ${isOpen ? 'is-open' : ''}">
                      <button class="all-categories-parent" type="button" data-all-categories-group-toggle="${group.slug}" aria-expanded="${isOpen}">
                        <span class="all-categories-parent-icon" style="--category-sheet-icon-bg: ${group.tone};">
                          <img src="${category.thumbnail}" alt="" loading="lazy" />
                        </span>
                        <span>
                          <strong>${group.title}</strong>
                        </span>
                        ${icon('chevron-down', `h-4 w-4 ${isOpen ? 'rotate-180' : ''}`)}
                      </button>
                      <div class="all-categories-children" ${isOpen ? '' : 'hidden'}>
                        ${childLinks}
                      </div>
                    </article>
                  `;
                })
                .join('')}
            </div>
          </section>
        </div>
      </section>
    </div>
  `;
}

function collectionUrl(slug = 'terlaris') {
  const params = new URLSearchParams(window.location.search);
  params.delete('product');
  params.delete('type');
  params.delete('types');
  params.delete('page');
  params.delete('category');
  params.set('collection', slug);
  const query = params.toString();
  return `${query ? `?${query}` : window.location.pathname}#collection`;
}

function wishlistUrl(page = 1) {
  const params = new URLSearchParams(window.location.search);
  params.delete('product');
  params.delete('type');
  params.delete('types');
  params.delete('category');
  params.delete('collection');
  if (page > 1) {
    params.set('page', String(page));
  } else {
    params.delete('page');
  }
  const query = params.toString();
  return `${query ? `?${query}` : window.location.pathname}#wishlist`;
}

function cartCheckoutUrl(items = selectedCartItems()) {
  const firstItem = items[0];
  if (!firstItem) {
    return '#cart';
  }

  const product = cartItemProduct(firstItem);
  const params = new URLSearchParams(window.location.search);
  params.delete('category');
  params.delete('collection');
  params.delete('page');
  params.set('product', product.id);
  params.set('type', firstItem.type);
  params.set('types', sortProductLabels(firstItem.formats).join(','));
  params.set('cartItems', items.map((item) => item.cartId).join(','));
  params.set('cartTab', cartActiveTab);
  params.set('checkoutFlow', 'cart');
  return `?${params.toString()}#checkout`;
}

function cartPreview() {
  const items = visibleCartItems();
  const purchaseCount = items.reduce((total, item) => total + cartItemQuantity(item), 0);
  const subscriptionCount = items
    .filter(isCartLanggananTabItem)
    .reduce((total, item) => total + cartItemQuantity(item), 0);
  const activeItems = cartPreviewActiveTab === 'langganan'
    ? items.filter(isCartLanggananTabItem)
    : items;
  const activeCount = activeItems.reduce((total, item) => total + cartItemQuantity(item), 0);
  const activeTotal = activeItems.reduce((sum, item) => sum + cartItemTotals(item).subtotal, 0);

  if (!items.length) {
    return `
      <div class="cart-preview${isCartPreviewPinned ? ' is-open' : ''}" role="status" aria-label="Preview keranjang">
        <div class="cart-preview-tabs">
          <button class="${cartPreviewActiveTab === 'belanja' ? 'is-active' : ''}" type="button" data-cart-preview-tab="belanja">Belanja (0)</button>
          <button class="${cartPreviewActiveTab === 'langganan' ? 'is-active' : ''}" type="button" data-cart-preview-tab="langganan">Langganan (0)</button>
          <a href="${routeUrl('cart')}">Lihat Keranjang</a>
        </div>
        <div class="cart-preview-empty">
          <strong>Keranjang masih kosong</strong>
          <p>Produk yang Anda tambahkan akan muncul di sini.</p>
        </div>
      </div>
    `;
  }

  const previewItems = activeItems.slice(0, 3).map((item) => {
    const { product, pricing } = cartItemTotals(item);
    const discount = pricing.originalPrice
      ? Math.round(((pricing.originalPrice - pricing.price) / pricing.originalPrice) * 100)
      : 0;

    return `
      <article class="cart-preview-item">
        <a class="cart-preview-media" href="${routeUrl('product', product.id, item.type, item.formats)}" aria-label="${product.name}">
          ${discount ? badge(`${discount}%`, 'soft-red', 'cart-preview-discount') : ''}
          <img src="${product.image}" alt="${product.name}" />
        </a>
        <div class="cart-preview-copy">
          <a href="${routeUrl('product', product.id, item.type, item.formats)}">${product.name}</a>
          ${badge(item.type, 'soft-blue', 'checkout-format-badge')}
          <div class="cart-preview-bottom">
            <div class="cart-preview-price">
              <strong>${formatCurrency(pricing.price)}</strong>
              ${pricing.originalPrice ? `<span>${formatCurrency(pricing.originalPrice)}</span>` : ''}
            </div>
            <div class="cart-preview-meta">
              <strong>Jumlah ${cartItemQuantity(item)}</strong>
              <button type="button" data-cart-delete="${item.cartId}" aria-label="Hapus ${product.name}">${icon('trash', 'h-5 w-5')}</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
  const emptyTabCopy = cartPreviewActiveTab === 'langganan'
    ? '<div class="cart-preview-empty"><strong>Belum ada langganan</strong><p>Produk digital atau langganan yang Anda tambahkan akan muncul di sini.</p></div>'
    : '<div class="cart-preview-empty"><strong>Keranjang masih kosong</strong><p>Produk yang Anda tambahkan akan muncul di sini.</p></div>';

  return `
    <div class="cart-preview${isCartPreviewPinned ? ' is-open' : ''}" role="status" aria-label="Preview keranjang">
      <div class="cart-preview-tabs">
        <button class="${cartPreviewActiveTab === 'belanja' ? 'is-active' : ''}" type="button" data-cart-preview-tab="belanja">Belanja (${purchaseCount})</button>
        <button class="${cartPreviewActiveTab === 'langganan' ? 'is-active' : ''}" type="button" data-cart-preview-tab="langganan">Langganan (${subscriptionCount})</button>
        <a href="${routeUrl('cart')}">Lihat Keranjang</a>
      </div>
      <div class="cart-preview-list">
        ${previewItems || emptyTabCopy}
      </div>
      <div class="cart-preview-footer">
        <span>Total (${activeCount} produk):</span>
        <strong>${formatCurrency(activeTotal)}</strong>
      </div>
    </div>
  `;
}

function selectedCategory() {
  const slug = new URLSearchParams(window.location.search).get('category') || 'buku';
  return allCategoryDefinitions().find((category) => category.slug === slug) || categories[0];
}

function selectedCollection() {
  const slug = new URLSearchParams(window.location.search).get('collection') || 'terlaris';
  return collections.find((collection) => collection.slug === slug) || collections[0];
}

function categoryPageUrl(slug = 'buku', page = 1) {
  const params = new URLSearchParams(window.location.search);
  params.delete('product');
  params.delete('type');
  params.delete('types');
  params.delete('collection');
  params.set('category', slug);
  params.set('page', String(page));
  return `?${params.toString()}#category`;
}

function collectionPageUrl(slug = 'terlaris', page = 1) {
  const params = new URLSearchParams(window.location.search);
  params.delete('product');
  params.delete('type');
  params.delete('types');
  params.delete('category');
  params.set('collection', slug);
  params.set('page', String(page));
  return `?${params.toString()}#collection`;
}

function selectedCategoryPage(totalPages = 1) {
  const page = Number(new URLSearchParams(window.location.search).get('page') || 1);
  if (!Number.isFinite(page)) {
    return 1;
  }

  return Math.min(Math.max(Math.trunc(page), 1), totalPages);
}

function categoryForProduct(product) {
  return categories.find((category) => category.name === product.category) || categories[0];
}

function replaceRouteParams(route = window.location.hash.replace('#', '') || 'home') {
  if (route === 'home' && window.location.search) {
    window.history.replaceState(null, '', homeUrl());
    return;
  }

  if (route !== 'product' && route !== 'checkout' && route !== 'cart') {
    return;
  }

  window.history.replaceState(null, '', routeUrl(route));
}

function hydrateProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const product = findProductById(params.get('product'));
  if (!product) {
    return;
  }

  const previousProductId = selectedProductId;
  const previousProductFormat = selectedProductFormat;
  selectedProductId = product.id;
  const urlFormats = sortProductLabels((params.get('types') || '').split(',').filter(Boolean));
  selectedProductFormats = urlFormats.length ? urlFormats : sortProductLabels(productFormatBadges(product));

  const urlType = params.get('type');
  selectedProductFormat = selectedProductFormats.includes(urlType) ? urlType : selectedProductFormats[0];
  const periods = productPeriodOptions(product);
  const urlPeriod = params.get('period');
  selectedProductPeriod = periods.includes(urlPeriod) ? urlPeriod : periods[0] || '';
  const didProductOrFormatChange = previousProductId !== product.id || previousProductFormat !== selectedProductFormat;
  const shouldStartFromFirstImage =
    product.id === 'source-18' && (shouldUseInitialProductImage || previousProductId !== product.id);
  if (shouldStartFromFirstImage) {
    selectedProductImageIndex = 0;
  } else if (didProductOrFormatChange) {
    selectedProductImageIndex = productFormatImageIndex(product, selectedProductFormat);
  }
  shouldUseInitialProductImage = false;
}

function badge(label, variant = 'soft-blue', className = '') {
  return `<span class="badge badge-${variant} ${className}">${label}</span>`;
}

function badgeVariantForLabel(label) {
  const variants = {
    Digital: 'soft-blue',
    Bundling: 'soft-orange',
    Fisik: 'soft-yellow',
  };

  return variants[label] || 'soft-blue';
}

function productBadgeVariant(product) {
  const variants = {
    Buku: 'soft-blue',
    Langganan: 'soft-blue',
    Merchandise: 'soft-yellow',
    Tiket: 'soft-orange',
    Bundling: 'soft-orange',
    'Produk Mitra': 'soft-blue',
  };

  return variants[product.category] || 'soft-black';
}

function productFormatBadges(product) {
  if (product.formats?.length) {
    return sortProductLabels(product.formats);
  }

  if (product.category === 'Langganan') {
    return ['Digital'];
  }

  if (product.category === 'Bundling') {
    return ['Bundling'];
  }

  return ['Fisik'];
}

function renderProductBadges(labels) {
  return sortProductLabels(labels)
    .map((label) => badge(label, badgeVariantForLabel(label)))
    .join('');
}

function sortProductLabels(labels) {
  const priority = {
    'Basic (Tabloid Only)': 1,
    'Bundling Plus': 2,
    'Bundling Premium': 3,
    eMagazine: 4,
    Bundling: 5,
    Fisik: 6,
    Digital: 7,
  };

  return [...new Set(labels.map(normalizeProductFormatLabel))]
    .sort((a, b) => (priority[a] || 99) - (priority[b] || 99))
}

function normalizeProductFormatLabel(label) {
  return label === 'Basic' ? 'Basic (Tabloid Only)' : label;
}

function productTypeForFormat(product = {}, format = '') {
  const normalizedFormat = normalizeProductFormatLabel(format);
  const productTypeMap = product.productTypeByFormat || {};
  if (productTypeMap[normalizedFormat]) {
    return productTypeMap[normalizedFormat];
  }

  if (['Bundling', 'Fisik', 'Digital'].includes(normalizedFormat)) {
    return normalizedFormat;
  }

  return normalizeProductFormatLabel(product.productTypeLabel || productFormatBadges(product)[0] || normalizedFormat);
}

function productPurchaseType(product = {}) {
  return product.purchaseType || product[PURCHASE_TYPE_FIELD] || (
    product.category === 'Langganan'
      ? PURCHASE_TYPES.SUBSCRIPTION
      : PURCHASE_TYPES.SHOPPING
  );
}

function withPurchaseType(product) {
  if (!product) {
    return product;
  }

  const purchaseType = productPurchaseType(product);
  return {
    ...product,
    purchaseType,
    [PURCHASE_TYPE_FIELD]: purchaseType,
  };
}

function expandCategoryProductList(productList, targetCount, slug) {
  if (productList.length >= targetCount) {
    return productList.slice(0, targetCount).map(withPurchaseType);
  }

  const editions = ['Pilihan', 'Edisi Baru', 'Favorit Pembaca', 'Rekomendasi Redaksi'];
  const expandedProducts = productList.map(withPurchaseType);
  let index = 0;

  while (expandedProducts.length < targetCount) {
    const baseProduct = productList[index % productList.length];
    const editionNumber = Math.floor(index / productList.length) + 2;
    const itemNumber = expandedProducts.length + 1;
    const priceAdjustment = (itemNumber % 4) * 5000;
    const originalAdjustment = baseProduct.originalPrice ? (itemNumber % 3) * 7000 : 0;

    expandedProducts.push(withPurchaseType({
      ...baseProduct,
      id: `${baseProduct.id || `category-${slug}`}-item-${itemNumber}`,
      name: `${baseProduct.name} - ${editions[index % editions.length]} ${editionNumber}`,
      price: baseProduct.price + priceAdjustment,
      originalPrice: baseProduct.originalPrice ? baseProduct.originalPrice + originalAdjustment : null,
      sold: String(Math.max(Number.parseInt(String(baseProduct.sold).replace(/\D/g, ''), 10) || 100, 100) + itemNumber * 7),
      stock: Math.max(8, (baseProduct.stock || 20) - (itemNumber % 7)),
      sku: `${baseProduct.sku || `GERAI-${slug.toUpperCase()}`}-${String(itemNumber).padStart(2, '0')}`,
    }));
    index += 1;
  }

  return expandedProducts;
}

function categoryBookProducts() {
  const bookProducts = [
    ...pickProducts(['source-6', 'source-8', 'source-14', 'source-16']),
    {
      id: 'book-rute-indonesia',
      name: 'Rute Indonesia Raya',
      category: 'Buku',
      price: 99000,
      originalPrice: 125000,
      sold: '460',
      stock: 46,
      sku: 'GERAI-BUKU-RUTE99',
      badge: 'Buku',
      image: './assets/book-rute.svg',
      description: 'Buku gagasan kebangsaan tentang rute Indonesia menepati janji kemerdekaan.',
      longDescription:
        'Rute Indonesia Raya membahas visi dan gagasan tentang bagaimana Indonesia menepati janji kemerdekaan dan membangun pengaruh dalam persaingan global. Buku ini cocok untuk pembaca yang tertarik pada politik, geopolitik, dan arah pembangunan bangsa.',
      details: ['Produk fisik', 'Tema politik dan kebangsaan', 'Penerbit Buku Kompas', 'Berat 0,25 kg', 'Format softcover'],
    },
    {
      id: 'book-transportasi-konektivitas',
      name: 'Transportasi, Konektivitas, dan Ketahanan Nasional',
      category: 'Buku',
      price: 225000,
      originalPrice: 250000,
      sold: '390',
      stock: 41,
      sku: 'GERAI-BUKU-TRANSPORT225',
      badge: 'Buku',
      image: './assets/book-transport.svg',
      description: 'Kajian transportasi dan konektivitas sebagai fondasi ketahanan nasional Indonesia.',
      longDescription:
        'Transportasi, Konektivitas, dan Ketahanan Nasional mengulas agenda konektivitas sebagai fondasi perubahan paradigma pembangunan. Buku ini relevan untuk pembaca yang mengikuti isu infrastruktur, logistik, wilayah timur Indonesia, dan kebijakan publik.',
      details: ['Produk fisik', 'Tema transportasi dan kebijakan publik', 'Penerbit Buku Kompas', '420 halaman', 'Berat 0,6 kg'],
    },
    {
      id: 'book-demokrasi-agama-pancasila',
      name: 'Demokrasi, Agama, Pancasila',
      category: 'Buku',
      price: 99000,
      originalPrice: null,
      sold: '520',
      stock: 28,
      sku: 'GERAI-BUKU-DAP99',
      badge: 'Buku',
      image: './assets/book-nation.svg',
      description: 'Refleksi kebangsaan tentang demokrasi, agama, dan Pancasila.',
      longDescription:
        'Demokrasi, Agama, Pancasila mengangkat persoalan kemajemukan, demokrasi, hak asasi manusia, populisme, dan agama dalam kehidupan bangsa. Buku ini cocok untuk pembaca yang menyukai esai politik dan refleksi sosial.',
      details: ['Produk fisik', 'Tema sosial politik', 'Penerbit Buku Kompas', '242 halaman', 'Format softcover'],
    },
    {
      id: 'book-psikologi-politik',
      name: 'Psikologi Politik',
      category: 'Buku',
      price: 85000,
      originalPrice: null,
      sold: '330',
      stock: 12,
      sku: 'GERAI-BUKU-PSIPOL85',
      badge: 'Buku',
      image: './assets/book-global.svg',
      description: 'Bacaan sosial politik tentang relasi kekuasaan, ekonomi daerah, dan perilaku elite.',
      longDescription:
        'Psikologi Politik membahas pertanyaan mengenai kewenangan daerah, tata kelola ekonomi, sumber daya alam, dan relasi kepentingan publik dengan elite lokal. Buku ini relevan untuk pembaca ilmu sosial dan politik.',
      details: ['Produk fisik', 'Tema social sciences', 'Penerbit Buku Kompas', '616 halaman', 'Berat 0,4 kg'],
    },
    {
      id: 'book-tts-28',
      name: 'TTS Pilihan Kompas Jilid 28',
      category: 'Buku',
      price: 75000,
      originalPrice: 89000,
      sold: '1,8 rb',
      stock: 64,
      sku: 'GERAI-TTS-28',
      badge: 'Buku',
      image: './assets/book-tts.svg',
      description: 'Kumpulan teka-teki silang pilihan Kompas untuk menemani waktu santai.',
      longDescription:
        'TTS Pilihan Kompas Jilid 28 menghadirkan kumpulan teka-teki silang dengan tingkat kesulitan beragam. Buku ini cocok untuk pembaca yang ingin bersantai sambil melatih ingatan dan kosakata.',
      details: ['Produk fisik', 'TTS Kompas', 'Penerbit Buku Kompas', 'Cocok untuk hadiah', 'Berat 0,35 kg'],
    },
    {
      id: 'book-hatta',
      name: 'Hatta: Jejak yang Melampaui Zaman',
      category: 'Buku',
      price: 129000,
      originalPrice: 149000,
      sold: '760',
      stock: 33,
      sku: 'GERAI-BUKU-HATTA129',
      badge: 'Buku',
      image: './assets/book-hatta.svg',
      description: 'Buku sejarah dan biografi tentang jejak Mohammad Hatta dalam perjalanan bangsa.',
      longDescription:
        'Hatta: Jejak yang Melampaui Zaman menyajikan bacaan sejarah dan biografi yang menempatkan sosok Mohammad Hatta dalam konteks gagasan kebangsaan, demokrasi, dan integritas publik.',
      details: ['Produk fisik', 'Tema sejarah dan biografi', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,4 kg'],
    },
    {
      id: 'book-biofilm',
      name: 'Biofilm: Dunia Mikro yang Mengubah Hidup Manusia',
      category: 'Buku',
      price: 118000,
      originalPrice: null,
      sold: '210',
      stock: 20,
      sku: 'GERAI-BUKU-BIOFILM118',
      badge: 'Buku',
      image: './assets/book-biofilm.svg',
      description: 'Bacaan sains populer tentang mikroorganisme dan dampaknya bagi kesehatan.',
      longDescription:
        'Biofilm: Dunia Mikro yang Mengubah Hidup Manusia menghadirkan penjelasan sains populer mengenai mikroorganisme, kesehatan, dan lingkungan dalam bahasa yang mudah dipahami.',
      details: ['Produk fisik', 'Tema sains populer', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,3 kg'],
    },
    {
      id: 'book-health',
      name: 'Menjaga Sehat di Tengah Rutinitas',
      category: 'Buku',
      price: 98000,
      originalPrice: 115000,
      sold: '480',
      stock: 37,
      sku: 'GERAI-BUKU-SEHAT98',
      badge: 'Buku',
      image: './assets/book-health.svg',
      description: 'Panduan populer menjaga kesehatan fisik dan mental dalam keseharian.',
      longDescription:
        'Menjaga Sehat di Tengah Rutinitas berisi bacaan praktis mengenai kebiasaan sehat, pola makan, istirahat, dan kesehatan mental untuk pembaca urban.',
      details: ['Produk fisik', 'Tema kesehatan', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,25 kg'],
    },
    {
      id: 'book-langsing',
      name: 'Langsing dan Bugar dengan Pola Seimbang',
      category: 'Buku',
      price: 94000,
      originalPrice: null,
      sold: '310',
      stock: 24,
      sku: 'GERAI-BUKU-LANGSING94',
      badge: 'Buku',
      image: './assets/book-langsing.svg',
      description: 'Buku gaya hidup sehat dengan pendekatan kebiasaan makan yang seimbang.',
      longDescription:
        'Langsing dan Bugar dengan Pola Seimbang mengajak pembaca memahami pola hidup sehat yang realistis, tidak ekstrem, dan dapat dijalankan dalam keseharian.',
      details: ['Produk fisik', 'Tema kesehatan dan gaya hidup', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,25 kg'],
    },
    {
      id: 'book-ngorok',
      name: 'Mengenal Gangguan Tidur dan Ngorok',
      category: 'Buku',
      price: 88000,
      originalPrice: 105000,
      sold: '270',
      stock: 26,
      sku: 'GERAI-BUKU-NGOROK88',
      badge: 'Buku',
      image: './assets/book-ngorok.svg',
      description: 'Buku kesehatan populer tentang kualitas tidur dan gangguan mendengkur.',
      longDescription:
        'Mengenal Gangguan Tidur dan Ngorok menjelaskan penyebab, risiko, dan cara memahami gangguan tidur yang sering dianggap sepele tetapi berpengaruh pada kualitas hidup.',
      details: ['Produk fisik', 'Tema kesehatan', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,25 kg'],
    },
    {
      id: 'book-nusantara',
      name: 'Nusantara: Cerita dari Timur Indonesia',
      category: 'Buku',
      price: 125000,
      originalPrice: 145000,
      sold: '420',
      stock: 31,
      sku: 'GERAI-BUKU-NUSANTARA125',
      badge: 'Buku',
      image: './assets/book-nusantara.svg',
      description: 'Kumpulan kisah perjalanan dan sosial budaya dari berbagai wilayah Indonesia.',
      longDescription:
        'Nusantara: Cerita dari Timur Indonesia menghadirkan esai perjalanan, sosial budaya, dan catatan lapangan yang memperkaya cara pandang terhadap keberagaman Indonesia.',
      details: ['Produk fisik', 'Tema perjalanan dan budaya', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,35 kg'],
    },
    {
      id: 'book-run-charity',
      name: 'Lari untuk Kebaikan',
      category: 'Buku',
      price: 79000,
      originalPrice: null,
      sold: '190',
      stock: 22,
      sku: 'GERAI-BUKU-RUN79',
      badge: 'Buku',
      image: './assets/book-run-charity.svg',
      description: 'Bacaan ringan tentang olahraga, komunitas, dan gerakan sosial.',
      longDescription:
        'Lari untuk Kebaikan mengangkat cerita olahraga, komunitas, dan solidaritas. Buku ini cocok untuk pembaca yang menyukai kisah inspiratif dan gaya hidup aktif.',
      details: ['Produk fisik', 'Tema olahraga dan komunitas', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,2 kg'],
    },
    {
      id: 'book-serbaneka',
      name: 'Serbaneka Cerita Kompas',
      category: 'Buku',
      price: 89000,
      originalPrice: 109000,
      sold: '580',
      stock: 44,
      sku: 'GERAI-BUKU-SERBANEKA89',
      badge: 'Buku',
      image: './assets/book-serbaneka.svg',
      description: 'Kumpulan tulisan pilihan Kompas untuk pembaca lintas minat.',
      longDescription:
        'Serbaneka Cerita Kompas berisi kumpulan tulisan pilihan yang mencakup isu sosial, budaya, perjalanan, dan refleksi keseharian dengan gaya khas Kompas.',
      details: ['Produk fisik', 'Kumpulan tulisan pilihan', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,3 kg'],
    },
    {
      id: 'book-kebangsaan',
      name: 'Kebangsaan yang Dirawat',
      category: 'Buku',
      price: 112000,
      originalPrice: null,
      sold: '360',
      stock: 29,
      sku: 'GERAI-BUKU-KEBANGSAAN112',
      badge: 'Buku',
      image: './assets/book-nation.svg',
      description: 'Esai kebangsaan tentang demokrasi, toleransi, dan masa depan Indonesia.',
      longDescription:
        'Kebangsaan yang Dirawat menghadirkan kumpulan esai tentang demokrasi, toleransi, ingatan sejarah, dan pekerjaan merawat Indonesia sebagai ruang hidup bersama.',
      details: ['Produk fisik', 'Tema kebangsaan', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,3 kg'],
    },
    {
      id: 'book-global',
      name: 'Membaca Dunia yang Bergerak',
      category: 'Buku',
      price: 135000,
      originalPrice: 155000,
      sold: '240',
      stock: 18,
      sku: 'GERAI-BUKU-GLOBAL135',
      badge: 'Buku',
      image: './assets/book-global.svg',
      description: 'Bacaan isu global tentang geopolitik, ekonomi, dan masyarakat dunia.',
      longDescription:
        'Membaca Dunia yang Bergerak mengajak pembaca memahami dinamika global melalui sudut pandang geopolitik, ekonomi, dan perubahan sosial yang memengaruhi Indonesia.',
      details: ['Produk fisik', 'Tema isu global', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,35 kg'],
    },
    {
      id: 'book-nusantara-archive',
      name: 'Catatan Perjalanan Nusantara',
      category: 'Buku',
      price: 118000,
      originalPrice: 139000,
      sold: '310',
      stock: 21,
      sku: 'GERAI-BUKU-NUSANTARA118',
      badge: 'Buku',
      image: './assets/book-nusantara.svg',
      description: 'Kisah perjalanan, budaya, dan lanskap Indonesia dari sudut pandang Kompas.',
      longDescription:
        'Catatan Perjalanan Nusantara merangkum kisah perjalanan, budaya, dan lanskap Indonesia melalui narasi yang dekat dengan pembaca Kompas. Buku ini cocok untuk pembaca yang menyukai reportase humanis dan kekayaan daerah.',
      details: ['Produk fisik', 'Tema perjalanan dan budaya', 'Penerbit Buku Kompas', 'Format softcover', 'Berat 0,32 kg'],
    },
  ];

  return expandCategoryProductList(bookProducts, 75, 'buku');
}

function buildCategoryProducts(slug, options) {
  return options.names.map((name, index) => {
    const originalPrice = options.originalPrices?.[index % options.originalPrices.length] || null;
    return withPurchaseType({
      id: `category-${slug}-${index + 1}`,
      name,
      category: options.category,
      purchaseType: options.category === 'Langganan' ? PURCHASE_TYPES.SUBSCRIPTION : PURCHASE_TYPES.SHOPPING,
      price: options.prices[index % options.prices.length],
      originalPrice,
      sold: options.sold[index % options.sold.length],
      stock: options.stock[index % options.stock.length],
      sku: `GERAI-${slug.toUpperCase()}-${String(index + 1).padStart(2, '0')}`,
      badge: options.category,
      image: options.images[index % options.images.length],
      formats: options.formats,
      variantPrices: options.variantPrices?.[index % options.variantPrices.length],
      description: options.descriptions[index % options.descriptions.length],
      longDescription: options.longDescription,
      details: options.details,
    });
  });
}

function categoryProducts(slug = 'buku') {
  const categoryDefinition = allCategoryDefinitions().find((category) => category.slug === slug);
  const sourceSlug = categoryDefinition?.parentSlug || slug;

  if (sourceSlug === 'semua-kategori') {
    return expandCategoryProductList(
      uniqueProductList([
        ...categoryProducts('buku').slice(0, 15),
        ...categoryProducts('merchandise').slice(0, 12),
        ...categoryProducts('langganan').slice(0, 12),
        ...categoryProducts('bundling').slice(0, 12),
        ...categoryProducts('tiket').slice(0, 8),
      ]),
      75,
      'semua-kategori',
    );
  }

  if (sourceSlug === 'produk-mitra') {
    return [];
  }

  if (sourceSlug === 'buku') {
    return categoryBookProducts();
  }

  const templates = {
    merchandise: {
      category: 'Merchandise',
      names: [
        'Kaus Halaman Depan Kompas - Pilih Tanggal Koran Sesukamu',
        'Kaus Reader Kompas Edisi HUT ke-61',
        'Jersey Press Liberty Kompas Edisi Terbatas',
        'Totebag Kompas Klasik',
        'Notebook Redaksi Kompas',
        'Tumbler Kompas Blue Edition',
        'Lanyard Kompas Reader',
        'Pouch K-Media Travel Kit',
        'Kaus Kompas K Navy',
        'Tote Bag Amanat Hati Nurani Rakyat',
        'Topi Kompas Daily',
        'Sticker Pack Kompas 61',
        'Kemeja Utility Kompas',
        'Sling Bag Kompas Edition',
        'Kaus Front Page Custom',
        'Mug Kompas.id',
        'Payung Lipat Kompas',
        'Card Holder Kompas',
        'Hoodie Reader Club',
        'Pin Set Kompas Archive',
      ],
      prices: [199000, 189000, 249000, 129000, 79000, 99000, 59000, 139000],
      originalPrices: [null, 219000, null, 159000],
      sold: ['540', '320', '240', '610', '180'],
      stock: [24, 18, 35, 42, 16],
      images: ['./assets/product-kaus-kompas.png', './assets/tshirt-kompas.svg', './assets/notebook-redaksi.svg', './assets/hero-merchandise-kompas-hut-61.png'],
      descriptions: [
        'Merchandise resmi Kompas untuk pembaca dan komunitas.',
        'Produk fisik edisi khusus dengan identitas visual Kompas.',
        'Item koleksi Gerai Kompas yang cocok untuk hadiah.',
      ],
      longDescription:
        'Merchandise resmi Gerai Kompas dibuat untuk pembaca, komunitas, dan kolektor yang ingin membawa identitas Kompas dalam keseharian. Produk fisik dikirim setelah pembayaran terverifikasi.',
      details: ['Produk fisik', 'Official merchandise Kompas', 'Edisi terbatas', 'Estimasi pengiriman 2-4 hari kerja', 'Dikirim dari Kompas Palmerah'],
      formats: ['Fisik'],
    },
    langganan: {
      category: 'Langganan',
      names: [
        'Kompas.id Premium 1 Bulan',
        'Kompas.id Premium 3 Bulan',
        'Kompas.id Premium 6 Bulan',
        'Kompas.id Premium 12 Bulan',
        'ePaper Harian Kompas 1 Bulan',
        'ePaper Harian Kompas 6 Bulan',
        'ePaper Harian Kompas 12 Bulan',
        'Harian Kompas Akhir Pekan + Kompas.id',
        'Kompas.id Paket Keluarga',
        'Gift Subscription Kompas.id 3 Bulan',
        'Gift Subscription Kompas.id 6 Bulan',
        'Kompas Digital Premium Mahasiswa',
        'Kompas One Bulanan',
        'Kompas One Tahunan',
        'Paket Baca Digital Akhir Pekan',
        'Paket Kompas.id dan ePaper',
        'Kompas.id Premium Auto Renewal',
        'Harian Kompas Cetak Reguler',
        'Paket Korporat Kompas.id',
        'Paket Arsip Kompas Digital',
      ],
      prices: [39000, 149000, 279000, 499000, 79000, 399000, 699000, 175000],
      originalPrices: [null, 179000, 329000, 598000],
      sold: ['8,4 rb', '4,1 rb', '2,7 rb', '980', '760'],
      stock: [999],
      images: ['./assets/subscription.svg', './assets/subscription-3.svg', './assets/subscription-6.svg', './assets/epaper-kompas.svg', './assets/product-harian-kompas.jpeg'],
      descriptions: [
        'Akses digital untuk membaca jurnalisme mendalam Kompas.',
        'Paket langganan resmi Kompas.id dan ePaper.',
        'Langganan fleksibel untuk pembaca personal dan keluarga.',
      ],
      longDescription:
        'Paket langganan Gerai Kompas menghadirkan akses digital Kompas.id, ePaper, dan pilihan paket cetak tertentu. Aktivasi digital dikirim melalui email setelah pembayaran terverifikasi.',
      details: ['Produk digital', 'Aktivasi melalui email', 'Akses Kompas.id atau ePaper', 'Pilihan perpanjangan otomatis tersedia', 'Dukungan pelanggan Kompas Kring'],
      formats: ['Digital'],
    },
    tiket: {
      category: 'Tiket',
      names: [
        'Kelas Menulis Feature bersama Redaksi Kompas',
        'Webinar Jurnalisme Data',
        'Diskusi Buku Penerbit Buku Kompas',
        'Kelas Fotografi Jurnalistik',
        'Workshop Menulis Opini',
        'Tur Redaksi Kompas Palmerah',
        'Kelas Literasi Media untuk Pelajar',
        'Webinar Ekonomi dan Kebijakan Publik',
        'Talkshow Sejarah dan Arsip Kompas',
        'Kelas Menulis Cerpen',
        'Workshop Riset Berita',
        'Diskusi Politik Kebangsaan',
        'Kelas Membaca Data Publik',
        'Meet the Editor Kompas.id',
        'Kelas Storytelling Visual',
        'Webinar Kesehatan Populer',
        'Pelatihan Podcast Jurnalistik',
        'Forum Pembaca Kompas',
        'Kelas Menulis Esai Budaya',
        'Webinar Lingkungan dan Kota',
      ],
      prices: [75000, 99000, 50000, 125000, 149000, 85000],
      originalPrices: [null, 150000, null, 175000],
      sold: ['120', '260', '90', '340', '180'],
      stock: [40, 60, 80, 25, 35],
      images: ['./assets/ticket-event.svg', './assets/book-journalism.svg', './assets/notebook-redaksi.svg'],
      descriptions: [
        'Tiket kelas dan event pilihan Kompas untuk komunitas pembaca.',
        'Agenda edukatif bersama redaksi, penulis, dan narasumber tepercaya.',
        'Event online dan offline dari Gerai Kompas.',
      ],
      longDescription:
        'Tiket event Gerai Kompas menghubungkan pembaca dengan kelas, webinar, diskusi, dan pengalaman komunitas. Detail akses dikirim melalui email setelah pembayaran terverifikasi.',
      details: ['Tiket event', 'Konfirmasi melalui email', 'Kuota terbatas', 'Jadwal mengikuti agenda Gerai Kompas', 'Tidak termasuk produk fisik'],
      formats: ['Fisik'],
    },
    bundling: {
      category: 'Bundling',
      names: [
        'Bundling #DemamBola Tabloid Soccer dan Kompas.id',
        'Paket Bundling Eksklusif: Bobo the Origin x Kompas.id',
        'Bundling Pesta Bola + Kompas Digital Premium',
        'Bundling Buku Kebangsaan dan Kompas.id',
        'Bundling TTS Pilihan dan ePaper Kompas',
        'Paket Baca Keluarga Kompas',
        'Bundling Buku Kesehatan dan Kompas.id',
        'Bundling Merchandise Reader dan Kompas.id',
        'Bundling Tabloid Bola dan ePaper',
        'Bundling Buku Sejarah dan Arsip Kompas',
        'Bundling Kompas One Bulanan',
        'Paket Kompas.id + Bobo e-Magazine',
        'Bundling Buku Nusantara dan ePaper',
        'Paket Akhir Pekan Kompas',
        'Bundling Buku Sains dan Kompas.id',
        'Paket Jurnalisme Data Kompas',
        'Bundling TTS dan Buku Kompas',
        'Bundling Merchandise HUT Kompas',
        'Paket Kompas Digital dan Event',
        'Bundling Penerbit Buku Kompas Pilihan',
      ],
      prices: [95000, 175000, 99000, 149000, 129000, 199000],
      originalPrices: [null, 229000, 125000, 179000],
      sold: ['1,2 rb', '860', '1 rb', '720', '650'],
      stock: [42, 35, 27, 19, 28],
      images: ['./assets/product-demam-bola.jpg', './assets/product-bobo-origin.jpg', './assets/product-pesta-bola.jpg', './assets/bundle-tts-epaper.svg', './assets/bundle-nation-premium.svg'],
      descriptions: [
        'Paket hemat yang menggabungkan produk fisik dan akses digital Kompas.',
        'Bundling resmi Gerai Kompas untuk pembaca yang ingin nilai lebih.',
        'Paket koleksi dan langganan dalam satu transaksi.',
      ],
      longDescription:
        'Produk bundling Gerai Kompas menggabungkan produk fisik, akses digital, atau event tertentu dalam satu paket. Detail aktivasi dan pengiriman mengikuti jenis produk yang dipilih.',
      details: ['Paket bundling', 'Produk fisik dan/atau digital', 'Aktivasi melalui email bila ada akses digital', 'Estimasi pengiriman 2-4 hari kerja', 'Promo terbatas'],
      formats: ['Bundling', 'Fisik', 'Digital'],
    },
    'produk-mitra': {
      category: 'Produk Mitra',
      names: [
        'Paket Kolaborasi Kompas x Mitra Literasi',
        'Starter Kit Membaca Akhir Pekan',
        'Paket Komunitas Pembaca Kompas',
        'Bundling Mitra Edukasi dan Kompas.id',
        'Set Hadiah Pembaca Pilihan',
        'Paket Kelas dan Buku Mitra',
        'Koleksi Produk Kreatif Mitra Kompas',
        'Paket Kolaborasi Keluarga Membaca',
        'Mitra Pack Jurnalistik Muda',
        'Paket Kompas Community Essentials',
      ],
      prices: [89000, 129000, 159000, 199000, 249000, 99000],
      originalPrices: [null, 159000, null, 229000],
      sold: ['180', '240', '96', '310', '145'],
      stock: [20, 35, 28, 16, 42],
      images: ['./assets/bundle-nation-premium.svg', './assets/notebook-redaksi.svg', './assets/product-bobo-origin.jpg', './assets/product-kaus-kompas.png'],
      descriptions: [
        'Produk kolaborasi dari mitra pilihan Gerai Kompas.',
        'Kurasi paket komunitas untuk pembaca aktif.',
        'Penawaran khusus dari ekosistem Kompas dan mitra.',
      ],
      longDescription:
        'Produk Mitra menghadirkan pilihan produk kolaborasi yang dikurasi untuk pembaca Kompas. Ketersediaan, detail aktivasi, dan pengiriman mengikuti jenis produk dari masing-masing mitra.',
      details: ['Produk mitra pilihan', 'Kurasi resmi Gerai Kompas', 'Ketersediaan terbatas', 'Detail pengiriman mengikuti jenis produk', 'Dukungan pelanggan Gerai Kompas'],
      formats: ['Fisik'],
    },
  };

  const template = templates[sourceSlug] || templates.bundling;
  return expandCategoryProductList(buildCategoryProducts(slug, template), 75, slug);
}

function pickProducts(productIds) {
  return productIds.map((productId) => baseProductById(productId)).filter(Boolean);
}

function catalogProducts() {
  const categoryCatalog = categories.flatMap((category) => categoryProducts(category.slug));
  const collectionCatalog = collections.flatMap((collection) => collectionProducts(collection.slug));
  const catalog = [
    ...products,
    ...bundlingProducts(),
    ...latestProducts(),
    ...homepageLatestProducts(),
    ...categoryCatalog,
    ...collectionCatalog,
  ].filter(Boolean);
  const unique = new Map();
  catalog.forEach((product) => {
    if (!unique.has(product.id)) {
      unique.set(product.id, withPurchaseType(product));
    }
  });
  return [...unique.values()];
}

function findProductById(productId) {
  return catalogProducts().find((product) => product.id === productId);
}

function ensureWishlistSeed() {
  if (wishlistSeeded) {
    return;
  }

  const homepageProductIds = new Set([
    ...bestSellerProducts(),
    ...homepageLatestProducts(),
    ...bundlingProducts(),
    baseProductById('source-17'),
    baseProductById('source-19'),
    baseProductById('source-20'),
    baseProductById('source-21'),
    ...categoryProducts('langganan'),
  ].filter(Boolean).map((product) => product.id));
  const seedProducts = [
    ...categoryProducts('buku'),
    ...categoryProducts('merchandise'),
    ...categoryProducts('tiket'),
    ...categoryProducts('produk-mitra'),
  ].filter((product) => product && !homepageProductIds.has(product.id));
  const uniqueProducts = [];
  const seen = new Set();
  seedProducts.forEach((product) => {
    if (product && !seen.has(product.id)) {
      seen.add(product.id);
      uniqueProducts.push(product);
    }
  });

  const baseTime = Date.now();
  uniqueProducts.slice(0, 40).forEach((product, index) => {
    wishlist.add(product.id);
    wishlistSavedAt.set(product.id, baseTime - index * 60000);
  });
  wishlistSeeded = true;
}

function wishlistProducts() {
  ensureWishlistSeed();
  const catalog = new Map(catalogProducts().map((product) => [product.id, product]));
  return [...wishlist]
    .map((productId) => catalog.get(productId))
    .filter(Boolean);
}

function completeAuthentication() {
  isAuthenticated = true;
  if (pendingWishlistProductId) {
    wishlist.add(pendingWishlistProductId);
    wishlistSavedAt.set(pendingWishlistProductId, Date.now());
    pendingWishlistProductId = null;
  }
  if (pendingAddressManagerOpen) {
    isAddressManagerOpen = true;
    addressFormMode = 'list';
    editingAddressId = null;
    addressDraft = null;
    openAddressMenuId = null;
    pendingAddressManagerOpen = false;
  }
  const redirectAfterAuth = pendingAuthRedirect;
  pendingAuthRedirect = '';
  authMode = null;
  authFeedback = '';
  authStep = 'identifier';
  authIdentifierError = '';
  if (redirectAfterAuth) {
    window.history.pushState(null, '', redirectAfterAuth);
  }
}

function openLoginForRedirect(redirectUrl = '') {
  pendingAuthRedirect = redirectUrl;
  authMode = 'login';
  authFeedback = '';
  authStep = 'identifier';
  authIdentifierError = '';
}

function sortedWishlistProducts() {
  const wishlistItems = [...wishlistProducts()];
  const savedTime = (product) => wishlistSavedAt.get(product.id) || 0;

  return wishlistItems.sort((a, b) => {
    if (wishlistSort === 'oldest') {
      return savedTime(a) - savedTime(b);
    }
    if (wishlistSort === 'price-low') {
      return productVariantPricing(a, productFormatOptions(a)[0]).price - productVariantPricing(b, productFormatOptions(b)[0]).price;
    }
    if (wishlistSort === 'price-high') {
      return productVariantPricing(b, productFormatOptions(b)[0]).price - productVariantPricing(a, productFormatOptions(a)[0]).price;
    }
    return savedTime(b) - savedTime(a);
  });
}

function getSelectedProduct() {
  return findProductById(selectedProductId) || products[0];
}

function productGalleryImages(product) {
  const singleImageGalleryProductIds = new Set(['source-17', 'source-19', 'source-20', 'source-21']);

  if (singleImageGalleryProductIds.has(product.id)) {
    return [product.image];
  }

  if (product.galleryImages?.length) {
    const galleryImages = [product.image, ...product.galleryImages]
      .filter(Boolean)
      .filter((imagePath, index, imageList) => imageList.indexOf(imagePath) === index);

    while (galleryImages.length < 4) {
      galleryImages.push(product.image);
    }

    return galleryImages.slice(0, 4);
  }

  const fallbackByCategory = {
    Buku: ['./assets/book-tts.svg', './assets/book-journalism.svg', './assets/book-nation.svg', './assets/book-global.svg'],
    Bundling: ['./assets/product-demam-bola.jpg', './assets/product-bobo-origin.jpg', './assets/product-pesta-bola.jpg', './assets/bundle-tts-epaper.svg'],
    Merchandise: ['./assets/product-kaus-kompas.png', './assets/tshirt-kompas.svg', './assets/notebook-redaksi.svg', './assets/hero-merchandise-kompas-hut-61.png'],
    Langganan: ['./assets/product-harian-kompas.jpeg', './assets/subscription.svg', './assets/subscription-3.svg', './assets/epaper-kompas.svg'],
    Tiket: ['./assets/ticket-event.svg', './assets/book-journalism.svg', './assets/notebook-redaksi.svg', './assets/book-run-charity.svg'],
    'Produk Mitra': ['./assets/category-produk-mitra.png', './assets/bundle-nation-premium.svg', './assets/notebook-redaksi.svg', './assets/product-bobo-origin.jpg'],
  };
  const relatedImages = catalogProducts()
    .filter((item) => item.category === product.category && item.id !== product.id)
    .map((item) => item.image);
  const galleryImages = [product.image, ...relatedImages, ...(fallbackByCategory[product.category] || [])]
    .filter(Boolean)
    .filter((imagePath, index, imageList) => imageList.indexOf(imagePath) === index);

  while (galleryImages.length < 4) {
    galleryImages.push(product.image);
  }

  return galleryImages.slice(0, 4);
}

function getSelectedAddress() {
  return checkoutAddresses.find((address) => address.id === selectedAddressId) || checkoutAddresses[0] || null;
}

function resolveDistrictMeta(district = '') {
  const normalized = district.trim().toLowerCase();
  const districtMap = {
    palmerah: { city: 'Jakarta Barat', province: 'DKI Jakarta' },
    'tanah abang': { city: 'Jakarta Pusat', province: 'DKI Jakarta' },
    menteng: { city: 'Jakarta Pusat', province: 'DKI Jakarta' },
    kebayoran: { city: 'Jakarta Selatan', province: 'DKI Jakarta' },
    depok: { city: 'Kota Depok', province: 'Jawa Barat' },
    bandung: { city: 'Kota Bandung', province: 'Jawa Barat' },
  };

  return districtMap[normalized] || (normalized ? { city: 'Jakarta Pusat', province: 'DKI Jakarta' } : { city: '', province: '' });
}

const addressRegionOptions = {
  'DKI Jakarta': {
    'Jakarta Barat': ['Palmerah', 'Grogol Petamburan', 'Kebon Jeruk', 'Kembangan'],
    'Jakarta Pusat': ['Gambir', 'Menteng', 'Tanah Abang', 'Senen'],
    'Jakarta Selatan': ['Kebayoran Baru', 'Mampang Prapatan', 'Setiabudi', 'Tebet'],
    'Jakarta Timur': ['Cakung', 'Jatinegara', 'Matraman', 'Pulogadung'],
    'Jakarta Utara': ['Kelapa Gading', 'Koja', 'Pademangan', 'Tanjung Priok'],
  },
  'Jawa Barat': {
    'Kota Bandung': ['Coblong', 'Sukajadi', 'Sumur Bandung', 'Lengkong'],
    'Kota Depok': ['Beji', 'Cimanggis', 'Pancoran Mas', 'Sukmajaya'],
    'Kota Bekasi': ['Bekasi Barat', 'Bekasi Selatan', 'Bekasi Timur', 'Medan Satria'],
  },
  Banten: {
    'Kota Tangerang': ['Ciledug', 'Karawaci', 'Pinang', 'Tangerang'],
    'Kota Tangerang Selatan': ['Ciputat', 'Pamulang', 'Pondok Aren', 'Serpong'],
  },
};

function addressProvinceOptions() {
  return Object.keys(addressRegionOptions);
}

function addressCityOptions(province = '') {
  return Object.keys(addressRegionOptions[province] || {});
}

function addressDistrictOptions(province = '', city = '') {
  return addressRegionOptions[province]?.[city] || [];
}

function addressSelectOptions(options, selectedValue = '', placeholder = 'Pilih') {
  const values = selectedValue && !options.includes(selectedValue) ? [selectedValue, ...options] : options;
  return `
    <option value="" ${selectedValue ? '' : 'selected'} disabled>${placeholder}</option>
    ${values.map((value) => `<option value="${value}" ${value === selectedValue ? 'selected' : ''}>${value}</option>`).join('')}
  `;
}

function formatAddressLine(address) {
  if (!address) {
    return '';
  }

  return [address.address, address.district, address.city, address.province].filter(Boolean).join(', ');
}

function getAppliedPromo() {
  return appliedPromoCode ? promoCatalog[appliedPromoCode] : null;
}

function promoDiscountAmount(promo, total) {
  if (!promo) {
    return 0;
  }

  if (promo.rate) {
    const rateDiscount = Math.round(total * promo.rate);
    return Math.min(rateDiscount, promo.maxValue || rateDiscount, total);
  }

  return Math.min(promo.value || 0, total);
}

function checkoutHasDigitalSubscription(items = checkoutOrderItems()) {
  return items.some((item) => {
    const product = cartItemProduct(item);
    return product.category === 'Langganan' && item.type === 'Digital';
  });
}

function syncAutoRenewPromo(items = checkoutOrderItems(), options = {}) {
  const autoPromoCode = 'AUTORENEW10';
  const shouldApplyAutoPromo = selectedPaymentPlan === 'recurring' && checkoutHasDigitalSubscription(items);
  const isAutoPromoActive = appliedPromoCode === autoPromoCode;

  if (shouldApplyAutoPromo && !isAutoPromoActive) {
    appliedPromoCode = autoPromoCode;
    promoError = '';
    if (options.notify) {
      autoPromoSnackbar = 'Promo perpanjang otomatis berhasil diterapkan.';
      autoPromoSnackbarType = 'success';
    }
    return;
  }

  if (!shouldApplyAutoPromo && isAutoPromoActive) {
    appliedPromoCode = '';
    if (options.notify) {
      autoPromoSnackbar = 'Promo perpanjang otomatis dibatalkan karena tidak memenuhi syarat.';
      autoPromoSnackbarType = 'info';
    }
  }
}

function productFormatOptions(product) {
  const labels = product.id === selectedProductId ? selectedProductFormats : productFormatBadges(product);
  return sortProductLabels(labels);
}

function productPeriodOptions(product) {
  return product?.periods?.length ? product.periods : [];
}

function normalizeSelectedFormat(product) {
  const formats = productFormatOptions(product);
  if (!formats.includes(selectedProductFormat)) {
    selectedProductFormat = formats[0];
  }

  const periods = productPeriodOptions(product);
  if (periods.length && !periods.includes(selectedProductPeriod)) {
    selectedProductPeriod = periods[0];
  }

  if (!periods.length) {
    selectedProductPeriod = '';
  }
}

function relatedProducts() {
  const selectedProduct = getSelectedProduct();
  const sameCategoryProducts = catalogProducts().filter((product) => product.category === selectedProduct.category && product.id !== selectedProductId);
  const fallbackProducts = catalogProducts().filter((product) => product.category !== selectedProduct.category && product.id !== selectedProductId);
  return [...sameCategoryProducts, ...fallbackProducts].slice(0, 4);
}

function normalizeSearchValue(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function searchParams() {
  const params = new URLSearchParams(window.location.search);
  const categoryRaw = params.get('filterCategory') || 'all';
  const typeRaw = params.get('filterType') || 'all';
  const categoryValues = categoryRaw === 'all' ? [] : categoryRaw.split(',').filter(Boolean);
  const typeValues = typeRaw === 'all' ? [] : typeRaw.split(',').filter(Boolean);
  return {
    query: params.get('q') || '',
    category: categoryRaw,
    type: typeRaw,
    categoryValues,
    typeValues,
    sort: params.get('sort') || 'relevance',
  };
}

function productSearchText(product) {
  return [
    product.name,
    product.category,
    product.description,
    product.longDescription,
    product.details?.join(' '),
    productSearchTypes(product).join(' '),
    product.periods?.join(' '),
  ]
    .filter(Boolean)
    .join(' ');
}

function productSearchTypes(product) {
  return [...new Set([product.productTypeLabel, ...productFormatBadges(product)].filter(Boolean))];
}

function searchScore(product, query) {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) {
    return 1;
  }

  const name = normalizeSearchValue(product.name);
  const category = normalizeSearchValue(product.category);
  const formats = normalizeSearchValue(productFormatBadges(product).join(' '));
  const corpus = normalizeSearchValue(productSearchText(product));
  const terms = normalizedQuery.split(' ').filter(Boolean);
  let score = 0;

  if (name === normalizedQuery) {
    score += 120;
  }
  if (name.startsWith(normalizedQuery)) {
    score += 80;
  }
  if (name.includes(normalizedQuery)) {
    score += 60;
  }
  if (category.includes(normalizedQuery)) {
    score += 32;
  }
  if (formats.includes(normalizedQuery)) {
    score += 24;
  }
  if (corpus.includes(normalizedQuery)) {
    score += 16;
  }

  terms.forEach((term) => {
    if (name.includes(term)) {
      score += 12;
    } else if (category.includes(term) || formats.includes(term)) {
      score += 8;
    } else if (corpus.includes(term)) {
      score += 4;
    }
  });

  return score;
}

function searchProductResults() {
  const params = searchParams();
  const normalizedQuery = normalizeSearchValue(params.query);
  const catalog = catalogProducts();
  const scoredProducts = catalog
    .map((product, index) => ({
      product,
      index,
      score: searchScore(product, params.query),
    }))
    .filter(({ product, score }) => {
      if (normalizedQuery && score <= 0) {
        return false;
      }
      if (params.categoryValues.length && !params.categoryValues.includes(product.category)) {
        return false;
      }
      if (params.typeValues.length && !params.typeValues.some((type) => productSearchTypes(product).includes(type))) {
        return false;
      }
      return true;
    });

  scoredProducts.sort((a, b) => {
    const priceA = productVariantPricing(a.product, productFormatBadges(a.product)[0]).price;
    const priceB = productVariantPricing(b.product, productFormatBadges(b.product)[0]).price;

    if (params.sort === 'newest') {
      return a.index - b.index;
    }
    if (params.sort === 'price-high') {
      return priceB - priceA;
    }
    if (params.sort === 'price-low') {
      return priceA - priceB;
    }

    return b.score - a.score || a.index - b.index;
  });

  return scoredProducts.map(({ product }) => product);
}

function productLongDescription(product) {
  return product.longDescription || `${product.description} Produk ini dipilih untuk menghadirkan pengalaman belanja Gerai Kompas yang ringkas, resmi, dan mudah dipahami. Informasi produk disusun agar pembeli dapat menilai harga, format, stok, dan manfaat produk sebelum melanjutkan ke checkout.`;
}

function truncateText(text, maxLength = 30) {
  return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}...` : text;
}

function productDescriptionMarkup(product, longDescription, isExpanded) {
  const contentMarkup = product.longDescriptionHtml
    ? `<div class="pdp-description-rich">${productRichDescriptionMarkup(product.longDescriptionHtml)}</div>`
    : `<p>${longDescription}</p>`;
  return `<div class="pdp-description-content ${isExpanded ? 'is-expanded' : 'is-collapsed'}" data-pdp-description-content>${contentMarkup}</div>`;
}

function productRichDescriptionMarkup(descriptionHtml) {
  return descriptionHtml
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gis, '<h2 class="pdp-description-heading">$1</h2>')
    .replace(
      /<li>(.*?)<\/li>/gis,
      `<li><span class="pdp-description-check" aria-hidden="true">${icon('check', 'h-3 w-3')}</span><span>$1</span></li>`,
    );
}

function addSelectedProductToCart() {
  const product = getSelectedProduct();
  const existingItem = cartItems.find(
    (item) =>
      item.visible &&
      item.productId === product.id &&
      item.type === selectedProductFormat &&
      (item.period || '') === (selectedProductPeriod || ''),
  );

  if (existingItem) {
    const maxQuantity = product.category === 'Langganan' || selectedProductFormat === 'Digital' ? 1 : 99;
    existingItem.quantity = Math.min(maxQuantity, existingItem.quantity + quantity);
    existingItem.selected = true;
    return;
  }

  cartItems.unshift({
    cartId: `cart-${Date.now()}`,
    productId: product.id,
    type: selectedProductFormat,
    formats: selectedProductFormats,
    period: selectedProductPeriod,
    quantity: product.category === 'Langganan' || selectedProductFormat === 'Digital' ? 1 : quantity,
    selected: true,
    visible: true,
  });
}

function productTypeSummaryMarkup(product) {
  if (product.id === 'source-18') {
    return '';
  }

  if (!product.productTypeLabel) {
    return '';
  }

  return `<p class="pdp-option-label">Jenis Produk: <span>${product.productTypeLabel}</span></p>`;
}

function pdpSelectedProductTypeMarkup(product, format = selectedProductFormat) {
  if (product.id !== 'source-18') {
    return '';
  }

  const productType = productTypeForFormat(product, format);
  return `
    <p class="pdp-option-label pdp-selected-product-type">
      <strong>Jenis Produk:</strong>
      ${badge(productType, badgeVariantForLabel(productType), 'checkout-format-badge')}
    </p>
  `;
}

function productOptionLabel(product) {
  return product.optionLabel || 'Jenis Produk';
}

function productFormatImageIndex(product, format) {
  const formatImageIndex = product.formatImageIndex || {};
  return Number.isInteger(formatImageIndex[format]) ? formatImageIndex[format] : 0;
}

function productShippingDescription(product, type = selectedProductFormat) {
  if (product.shippingText) {
    return product.shippingText;
  }

  if (type === 'Digital' || product.category === 'Langganan') {
    return 'Akses digital dikirim melalui email akun pembeli setelah pembayaran terverifikasi. Pastikan email aktif dan dapat menerima instruksi aktivasi dari Kompas.id.';
  }

  if (product.category === 'Tiket') {
    return 'Tiket atau tautan akses event dikirim melalui email setelah pembayaran terverifikasi. Detail jadwal, tautan, dan ketentuan kehadiran mengikuti informasi pada produk.';
  }

  if (product.id === 'source-7' || product.id === 'source-15') {
    return 'Produk dibuat sesuai tanggal koran yang dipilih pembeli. Tuliskan tanggal halaman depan Kompas pada catatan pesanan. Estimasi produksi dan pengiriman 5-7 hari kerja setelah pembayaran terverifikasi.';
  }

  if (type === 'Bundling') {
    return 'Produk fisik dikirim dari Kompas Palmerah setelah pembayaran terverifikasi. Jika paket memuat akses digital, instruksi aktivasi dikirim terpisah melalui email pembeli.';
  }

  return 'Produk fisik dikirim dari Kompas Palmerah setelah pembayaran terverifikasi. Estimasi tiba 2-4 hari kerja untuk pengiriman reguler, tergantung alamat tujuan dan layanan logistik.';
}

function productServiceSummary(product, type = selectedProductFormat) {
  if (product.id === 'source-20') {
    return 'Koran dikirim dan akses digital via email';
  }

  if (product.id === 'source-21') {
    return 'Akses profesional via email';
  }

  if (product.id === 'source-17') {
    return 'Akses digital premium Kompas.id';
  }

  if (type === 'Digital' || product.category === 'Langganan') {
    return 'Aktivasi digital via email';
  }

  if (product.category === 'Tiket') {
    return 'Tiket dikirim via email';
  }

  if (product.id === 'source-7' || product.id === 'source-15') {
    return 'Produksi custom 5-7 hari kerja';
  }

  return 'Dikirim dari Kompas Palmerah';
}

function productMetaLabel(product) {
  const labels = {
    Bundling: 'Paket resmi Gerai Kompas',
    Langganan: 'Harian Kompas dan Kompas.id',
    Merchandise: 'Official merchandise Kompas',
    Buku: 'Penerbit Buku Kompas',
    Tiket: 'Event dan kelas Kompas',
    'Produk Mitra': 'Produk kolaborasi mitra',
  };

  return labels[product.category] || 'Produk resmi Gerai Kompas';
}

function baseProductById(productId) {
  return withPurchaseType(products.find((product) => product.id === productId));
}

function uniqueProductList(productList) {
  return productList
    .filter(Boolean)
    .map(withPurchaseType)
    .filter((product, index, list) => list.findIndex((item) => item.id === product.id) === index);
}

function latestProducts() {
  const homepageBundlingProducts = categoryProducts('bundling')
    .slice(0, 4)
    .map((product) => (
      product.name === 'Bundling Buku Kebangsaan dan Kompas.id'
        ? baseProductById('source-7')
        : product
    ));

  return uniqueProductList([
    baseProductById('source-17'),
    baseProductById('source-20'),
    baseProductById('source-21'),
    baseProductById('source-18'),
    ...homepageBundlingProducts,
    ...categoryProducts('buku').slice(0, 8),
    ...categoryProducts('merchandise').slice(0, 4),
    ...categoryProducts('langganan').slice(0, 4),
    ...categoryProducts('tiket').slice(0, 4),
  ]);
}

function homepageLatestProducts() {
  return latestProducts().slice(0, 24);
}

function bundlingProducts() {
  return uniqueProductList([
    baseProductById('source-18'),
    ...categoryProducts('bundling'),
  ]).slice(0, 4);
}

function bestSellerProducts() {
  const bundling = categoryProducts('bundling');
  const books = categoryProducts('buku');
  const merch = categoryProducts('merchandise');
  const subscriptions = categoryProducts('langganan');
  return uniqueProductList([
    baseProductById('source-18'),
    baseProductById('source-2'),
    bundling[0],
    merch[0],
    subscriptions[0],
    books.find((product) => product.id === 'book-hatta') || books[1],
    books.find((product) => product.id === 'book-rute-indonesia') || books[2],
    merch[1],
    bundling[2],
  ]);
}

function collectionProducts(slug = 'terlaris') {
  if (slug === 'bundling') {
    return categoryProducts('bundling');
  }

  if (slug === 'terbaru') {
    return expandCategoryProductList(latestProducts(), 75, 'terbaru');
  }

  if (slug === 'langganan') {
    return uniqueProductList([
      baseProductById('source-17'),
      baseProductById('source-19'),
      ...categoryProducts('langganan'),
    ]);
  }

  if (slug === 'rekomendasi') {
    return expandCategoryProductList(
      uniqueProductList([
        ...bestSellerProducts(),
        ...latestProducts(),
        ...categoryProducts('buku').slice(0, 6),
        ...categoryProducts('merchandise').slice(0, 4),
      ]),
      75,
      'rekomendasi',
    );
  }

  return expandCategoryProductList(bestSellerProducts(), 75, 'terlaris');
}

function icon(name, className = 'h-5 w-5') {
  const paths = {
    search:
      '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
    cart: '<circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L22 8H7"></path>',
    'cart-plus':
      '<circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L22 8H7"></path><path d="M14.5 10v5"></path><path d="M12 12.5h5"></path>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
    heart:
      '<path d="M20.8 4.6a5.4 5.4 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.4 5.4 0 1 0-7.7 7.7L12 21l8.8-8.7a5.4 5.4 0 0 0 0-7.7z"></path>',
    user: '<circle cx="12" cy="8" r="4"></circle><path d="M20 21a8 8 0 0 0-16 0"></path>',
    menu: '<path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path>',
    grid:
      '<rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect>',
    'book-open':
      '<path d="M12 7v14"></path><path d="M3 5.5A3.5 3.5 0 0 1 6.5 2H12v19H6.5A3.5 3.5 0 0 0 3 24z"></path><path d="M21 5.5A3.5 3.5 0 0 0 17.5 2H12v19h5.5a3.5 3.5 0 0 1 3.5 3z"></path>',
    shirt:
      '<path d="M8 4 4 6.5 6 11l2-1v10h8V10l2 1 2-4.5L16 4a4 4 0 0 1-8 0z"></path>',
    newspaper:
      '<path d="M4 5h13a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3z"></path><path d="M8 9h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path>',
    ticket:
      '<path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4z"></path><path d="M13 5v14"></path>',
    truck:
      '<path d="M3 6h11v10H3z"></path><path d="M14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle>',
    card:
      '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 10h18"></path><path d="M7 15h4"></path>',
    bank:
      '<path d="M3 10h18"></path><path d="m5 10 7-5 7 5"></path><path d="M6 10v8"></path><path d="M10 10v8"></path><path d="M14 10v8"></path><path d="M18 10v8"></path><path d="M4 18h16"></path>',
    wallet:
      '<path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12"></path><path d="M16 13h5"></path>',
    store:
      '<path d="M4 10h16"></path><path d="M5 10l1-5h12l1 5"></path><path d="M6 10v10h12V10"></path><path d="M9 20v-6h6v6"></path>',
    refresh:
      '<path d="M21 12a9 9 0 0 1-15.5 6.2"></path><path d="M3 12A9 9 0 0 1 18.5 5.8"></path><path d="M18 2v4h-4"></path><path d="M6 22v-4h4"></path>',
    shield:
      '<path d="M12 3 20 6v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z"></path><path d="m9 12 2 2 4-5"></path>',
    check: '<path d="m5 12 4 4L19 6"></path>',
    info:
      '<circle cx="12" cy="12" r="9"></circle><path d="M12 10v6"></path><path d="M12 7.5h.01"></path>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"></path>',
    tag: '<path d="M20 12v7a2 2 0 0 1-2 2h-7L3 13V5a2 2 0 0 1 2-2h8z"></path><circle cx="8" cy="8" r="1.5"></circle>',
    edit:
      '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"></path>',
    trash:
      '<path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M6 7l1 14h10l1-14"></path><path d="M9 7V4h6v3"></path>',
    more:
      '<circle cx="5" cy="12" r="1.4"></circle><circle cx="12" cy="12" r="1.4"></circle><circle cx="19" cy="12" r="1.4"></circle>',
    mail:
      '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path>',
    lock:
      '<rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path>',
    eye:
      '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>',
    'eye-off':
      '<path d="M3 3l18 18"></path><path d="M10.6 10.6A3 3 0 0 0 13.4 13.4"></path><path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c6.5 0 10 8 10 8a17.8 17.8 0 0 1-3.1 4.2"></path><path d="M6.1 6.1A17.5 17.5 0 0 0 2 12s3.5 6 10 6a10.7 10.7 0 0 0 4-.8"></path>',
    share:
      '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.6 10.5 6.8-4"></path><path d="m8.6 13.5 6.8 4"></path>',
    link:
      '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"></path><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"></path>',
    settings:
      '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 0 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 0 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 0 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.1a2 2 0 0 1 0 4H21a1.7 1.7 0 0 0-1.6 1z"></path>',
    receipt:
      '<path d="M6 3h12v18l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2L6 21z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h4"></path>',
    'log-out':
      '<path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path><path d="M21 3v18"></path>',
    'map-pin':
      '<path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>',
    plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
    minus: '<path d="M5 12h14"></path>',
    chevron: '<path d="m9 18 6-6-6-6"></path>',
    'chevron-down': '<path d="m6 9 6 6 6-6"></path>',
  };

  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.chevron}</svg>`;
}

function header(active = 'home') {
  const cartCount = visibleCartItems().reduce((total, item) => total + cartItemQuantity(item), 0);
  const selectedAddress = getSelectedAddress();
  const headerAddressLabel = selectedAddress
    ? `${selectedAddress.label} · ${selectedAddress.district || selectedAddress.city || selectedAddress.province}`
    : 'Pilih alamat pengiriman';
  const headerAddressIsEmpty = !isAuthenticated;
  const headerAddressEyebrow = 'Dikirim ke';
  const headerAddressText = headerAddressIsEmpty ? 'Pilih Alamat' : headerAddressLabel;
  const shortcutLinks = headerShortcutLinks();
  const accountButton = isAuthenticated
    ? `<div class="header-account-menu auth-action">
        <button class="header-account-chip" type="button" aria-label="Akun Reza" aria-haspopup="true">
          <span class="header-account-avatar">R<span class="header-account-crown" aria-hidden="true">♛</span></span>
        </button>
        <nav class="header-account-dropdown" aria-label="Menu akun">
          <div class="header-account-summary">
            <span class="header-account-summary-avatar">R</span>
            <div>
              <strong>Reza Pratama</strong>
              <span>Aktif Berlangganan</span>
              <span>hingga 12 Nov 3010</span>
            </div>
          </div>
          <a href="#">${icon('receipt', 'h-4 w-4')} <span>Daftar Pesanan</span></a>
          <a href="#">${icon('settings', 'h-4 w-4')} <span>Pengaturan</span></a>
          <button type="button" data-auth-logout>${icon('log-out', 'h-4 w-4')} <span>Keluar</span></button>
        </nav>
      </div>`
    : `<button class="auth-action btn btn-secondary min-h-11 px-5" type="button" data-auth-open="register">Daftar</button>
      <button class="auth-action btn btn-primary min-h-11 px-5" type="button" data-auth-open="login">Masuk</button>`;
  const mobileAccountButton = isAuthenticated
    ? `<button class="header-account-chip mobile-header-account-chip lg:hidden" type="button" data-account-menu-toggle aria-expanded="false" aria-label="Buka menu akun">
        <span class="header-account-avatar">R<span class="header-account-crown" aria-hidden="true">♛</span></span>
      </button>`
    : `<button class="icon-btn inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal lg:hidden" data-account-menu-toggle aria-expanded="false" aria-label="Buka menu akun">
        ${icon('user')}
      </button>`;
  const shortcutBar =
    active === 'home'
      ? `<div class="header-shortcuts" aria-label="Navigasi cepat">
          <div class="kompas-container header-shortcuts-inner">
            <nav class="header-shortcut-links" aria-label="Produk pilihan">
              ${shortcutLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
            </nav>
            <button class="header-address-trigger" type="button" data-address-manager-open>
              ${icon('map-pin', 'h-4 w-4')}
              <span>
                <small>${headerAddressEyebrow}</small>
                <strong>${headerAddressText}</strong>
              </span>
              ${icon('chevron-down', 'header-address-chevron h-4 w-4')}
            </button>
          </div>
        </div>`
      : '';
  const siteHeaderBorderClass = active === 'home' ? '' : 'border-b border-[#EEEEEE]';

  if (active === 'checkout') {
    return `
      <header class="sticky top-0 z-40 border-b border-[#EEEEEE] bg-white/95 backdrop-blur">
        <div class="kompas-container checkout-header-main">
          <a href="${homeUrl()}" class="flex shrink-0 items-center gap-3" aria-label="Gerai Kompas.id">
            <img src="./assets/logo-gerai.webp" class="brand-logo" alt="Logo Gerai Kompas" />
          </a>
        </div>
      </header>
    `;
  }

  return `
    <header class="sticky top-0 z-40 ${siteHeaderBorderClass} bg-white/95 backdrop-blur" data-site-header>
      <div class="kompas-container header-main">
        <div class="header-left">
          <a href="${homeUrl()}" class="flex shrink-0 items-center gap-3" aria-label="Gerai Kompas.id">
            <img src="./assets/logo-gerai.webp" class="brand-logo" alt="Logo Gerai Kompas" />
          </a>
          <div class="rubric-menu" data-rubric-menu>
            <button class="rubric-trigger" type="button" data-rubric-toggle aria-expanded="false">
              ${icon('grid', 'h-4 w-4')} Kategori ${icon('chevron-down', 'h-4 w-4')}
            </button>
            ${headerCategoryMenu()}
          </div>
          <label class="header-search" data-search-field>
            ${icon('search', 'h-5 w-5 text-kompas-muted')}
            <input data-search-input class="min-h-11 w-full border-0 bg-transparent text-sm outline-none" placeholder="Cari buku, merchandise, atau langganan..." value="${escapeHtml(searchParams().query)}" />
            <button class="search-clear" type="button" data-search-clear aria-label="Hapus pencarian">${icon('x', 'h-4 w-4')}</button>
          </label>
        </div>
        <div class="header-right">
          <button class="icon-btn mobile-search-action inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal lg:hidden" type="button" data-mobile-search-toggle aria-label="Buka pencarian">
            ${icon('search')}
          </button>
          <div class="header-cart-hover">
            <a href="${routeUrl('cart')}" class="icon-btn relative inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal" aria-label="Keranjang">
              ${icon('cart')}
              ${cartCount ? `<span class="cart-counter">${cartCount}</span>` : ''}
            </a>
            ${cartPreview()}
          </div>
          ${
            isAuthenticated
              ? `<a href="${wishlistUrl()}" class="header-wishlist icon-btn relative hidden h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal lg:inline-flex" aria-label="Wishlist">
                  ${icon('heart')}
                </a>`
              : ''
          }
          ${accountButton}
          ${mobileAccountButton}
        </div>
      </div>
    </header>
    ${shortcutBar}
      <div class="mobile-overlay" data-mobile-search hidden>
        <div class="mobile-overlay-backdrop" data-mobile-overlay-close></div>
        <div class="mobile-search-panel" role="dialog" aria-label="Pencarian produk">
          <label class="mobile-search-form" data-search-field>
            ${icon('search', 'h-5 w-5 text-kompas-muted')}
            <input data-mobile-search-input data-search-input class="min-h-11 w-full border-0 bg-transparent text-sm outline-none" placeholder="Cari buku, merchandise, atau langganan..." value="${escapeHtml(searchParams().query)}" />
            <button class="search-clear" type="button" data-search-clear aria-label="Hapus pencarian">${icon('x', 'h-4 w-4')}</button>
          </label>
        </div>
      </div>
      <div class="mobile-overlay" data-account-menu hidden>
        <div class="mobile-overlay-backdrop" data-mobile-overlay-close></div>
        <div class="account-menu-panel" role="dialog" aria-label="Menu akun">
          ${
            isAuthenticated
              ? `<div class="account-menu-profile">
                  <span class="header-account-summary-avatar">R</span>
                  <div>
                    <strong>Reza Pratama</strong>
                    <span>Aktif Berlangganan</span>
                    <span>hingga 12 Nov 3010</span>
                  </div>
                </div>`
              : `<div class="account-menu-actions">
                  <button class="btn btn-secondary" type="button" data-auth-open="register">Daftar</button>
                  <button class="btn btn-primary" type="button" data-auth-open="login">Masuk</button>
                </div>`
          }
          <nav class="account-menu-list" aria-label="Navigasi akun">
            <a href="#">${icon('receipt', 'h-5 w-5')} Daftar Pesanan</a>
            <a href="${wishlistUrl()}">${icon('heart', 'h-5 w-5')} Wishlist</a>
            <a href="#">${icon('settings', 'h-5 w-5')} Pengaturan</a>
            ${isAuthenticated ? `<button type="button" data-auth-logout>${icon('log-out', 'h-5 w-5')} Keluar</button>` : ''}
          </nav>
        </div>
      </div>
  `;
}

function authDialog() {
  if (!authMode) {
    return '';
  }

  const isRegister = authMode === 'register';
  const isLoginPasswordStep = !isRegister && authStep === 'password';
  const title = isRegister ? 'Daftar Akun' : 'Masuk';
  const description = isRegister
    ? 'Buat Akun Kompas.id untuk menyimpan pesanan dan memudahkan transaksi berikutnya.'
    : 'Masuk dengan Akun Kompas.id Anda.';
  const primaryLabel = isRegister ? 'Lanjutkan' : 'Masuk';
  const switchLabel = isRegister ? 'Sudah punya akun?' : 'Belum punya akun?';
  const switchAction = isRegister ? 'Masuk' : 'Daftar';
  const switchMode = isRegister ? 'login' : 'register';
  const providerAction = 'Lanjutkan';

  return `
    <div class="auth-modal-shell" data-auth-modal>
      <button class="auth-modal-backdrop" type="button" data-auth-close aria-label="Tutup ${title}"></button>
      <section class="auth-modal-panel ${isRegister ? 'is-register' : 'is-login'}" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <div class="auth-sheet-handle" aria-hidden="true"></div>
        <div class="auth-modal-header is-login-title">
          <h2 class="auth-modal-title" id="auth-modal-title">${title}</h2>
          <button type="button" data-auth-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="auth-modal-body auth-login-body">
          <div class="auth-login-intro">
            <p class="auth-login-description">${description}</p>
          </div>
          ${
            authFeedback
              ? `<div class="auth-feedback" role="status">${icon('check', 'h-4 w-4')} ${authFeedback}</div>`
              : ''
          }
          <form class="auth-login-card" data-auth-form>
                  ${
                    isRegister
                      ? `<div class="auth-social-list">
                          <button class="auth-provider-button is-google" type="button" data-auth-provider="google">
                            <span aria-hidden="true"></span>
                            ${providerAction} dengan Google
                          </button>
                          <button class="auth-provider-button is-apple" type="button" data-auth-provider="apple">
                            <span aria-hidden="true"></span>
                            ${providerAction} dengan Apple
                          </button>
                          <button class="auth-provider-button is-privy" type="button" data-auth-provider="privy">
                            <span aria-hidden="true"></span>
                            ${providerAction} dengan Privy
                          </button>
                        </div>
                        <div class="auth-divider"><span>Atau</span></div>
                        <label>
                          <span>Email atau Nomor Telepon</span>
                          <input class="${authIdentifierError ? 'is-error' : ''}" type="text" autocomplete="username" data-auth-identifier data-auth-autofocus placeholder="" value="${escapeHtml(authIdentifier)}" ${authIdentifierError ? 'aria-invalid="true" aria-describedby="auth-identifier-error"' : ''} />
                        </label>
                        ${authIdentifierError ? `<p class="auth-field-error" id="auth-identifier-error">${authIdentifierError}</p>` : ''}
                        <p>Contoh format: nama@email.com atau 081234567890.</p>
                        <button class="auth-continue-button" type="submit">${primaryLabel}</button>
                        <p class="auth-register-consent">Dengan mendaftar Kompas.id, saya telah membaca dan menyetujui Syarat Ketentuan dan Kebijakan Privasi.</p>`
                      : isLoginPasswordStep
                        ? `<div class="auth-login-email-review">
                            <strong>Email</strong>
                            <div>
                              <span>${escapeHtml(authIdentifier || 'reza.fikri@kompas.com')}</span>
                              <button type="button" data-auth-edit-identifier>Ubah</button>
                            </div>
                          </div>
                          <label>
                            <span>Kata Sandi</span>
                            <div class="auth-login-password-field">
                              <input type="password" autocomplete="current-password" data-auth-password data-auth-autofocus />
                              <button type="button" data-password-toggle aria-label="Tampilkan kata sandi" aria-pressed="false">${icon('eye', 'h-5 w-5')}</button>
                            </div>
                          </label>
                          <div class="auth-login-row">
                            <label class="auth-remember">
                              <input type="checkbox" />
                              <span>Ingat saya.</span>
                            </label>
                            <a href="https://auth.kompas.id/forgot-password" target="_blank" rel="noreferrer">Lupa kata sandi?</a>
                          </div>
                          <button class="auth-continue-button" type="submit">Masuk</button>`
                        : `<label>
                            <span>Email atau Nomor Telepon</span>
                            <input class="${authIdentifierError ? 'is-error' : ''}" type="text" autocomplete="username" data-auth-identifier data-auth-autofocus placeholder="" value="${escapeHtml(authIdentifier)}" ${authIdentifierError ? 'aria-invalid="true" aria-describedby="auth-identifier-error"' : ''} />
                          </label>
                          ${authIdentifierError ? `<p class="auth-field-error" id="auth-identifier-error">${authIdentifierError}</p>` : ''}
                          <p>Contoh format: nama@email.com atau 081234567890.</p>
                          <button class="auth-continue-button" type="submit">Lanjutkan</button>
                          <div class="auth-divider"><span>Atau</span></div>
                          <div class="auth-social-list">
                            <button class="auth-provider-button is-google" type="button" data-auth-provider="google">
                              <span aria-hidden="true"></span>
                              ${providerAction} dengan Google
                            </button>
                            <button class="auth-provider-button is-apple" type="button" data-auth-provider="apple">
                              <span aria-hidden="true"></span>
                              ${providerAction} dengan Apple
                            </button>
                            <button class="auth-provider-button is-privy" type="button" data-auth-provider="privy">
                              <span aria-hidden="true"></span>
                              ${providerAction} dengan Privy
                            </button>
                          </div>`
                  }
                </form>
          <p class="auth-login-switch-bottom">${switchLabel} <button type="button" data-auth-switch="${switchMode}">${switchAction}</button></p>
        </div>
      </section>
    </div>
  `;
}

function footer() {
  return `
    <footer class="mt-16 border-t border-[#DDDDDD] bg-white">
      <div class="kompas-container grid gap-8 py-10 md:grid-cols-[1.1fr_.8fr_.8fr_.9fr]">
        <div>
          <img src="./assets/logo-gerai.webp" class="mb-4 h-12 w-[190px] rounded object-cover object-left" alt="Logo Gerai Kompas" />
          <p class="max-w-sm text-sm leading-6 text-kompas-muted">Gerai resmi untuk buku, merchandise, tiket, dan langganan digital Kompas.id.</p>
        </div>
        <div>
          <h3 class="mb-3 font-bold">Produk</h3>
          <div class="grid gap-2 text-sm text-kompas-muted">
            <a href="${categoryUrl('buku')}">Buku</a>
            <a href="${categoryUrl('merchandise')}">Merchandise</a>
            <a href="${categoryUrl('tiket')}">Tiket</a>
            <a href="${categoryUrl('langganan')}">Langganan</a>
          </div>
        </div>
        <div>
          <h3 class="mb-3 font-bold">Bantuan</h3>
          <div class="grid gap-2 text-sm text-kompas-muted">
            <a href="#checkout">Status Pesanan</a>
            <a href="#checkout">Pengiriman</a>
            <a href="#checkout">Pembayaran</a>
            <a href="#checkout">Hubungi Kami</a>
          </div>
        </div>
        <div>
          <h3 class="mb-3 font-bold">Layanan Pelanggan</h3>
          <p class="text-sm leading-6 text-kompas-muted">Kompas Kring: +6221 2567 6000<br />Email: hotline@kompas.id<br />Jam kerja: 06.00-16.00 WIB</p>
        </div>
      </div>
      ${footerBottom()}
    </footer>
  `;
}

function footerBottom() {
  return `
    <div class="border-t border-[#EEEEEE]">
      <div class="footer-bottom kompas-container py-5 text-sm text-kompas-muted">
        <span>© PT Kompas Media Nusantara</span>
        <nav aria-label="Link footer">
          <a href="${homeUrl()}">Karier</a>
          <a href="${homeUrl()}">Iklan</a>
          <a href="${homeUrl()}">Berlangganan</a>
        </nav>
      </div>
    </div>
  `;
}

function checkoutFooter() {
  return `
    <footer class="checkout-footer mt-16 bg-white">
      <div class="border-t border-[#EEEEEE]">
        <div class="footer-bottom kompas-container py-5 text-sm text-kompas-muted">
          <span>© PT Kompas Media Nusantara</span>
        </div>
      </div>
    </footer>
  `;
}

function productCard(product, compact = false, labels = productFormatBadges(product)) {
  const isWishlisted = wishlist.has(product.id);
  const formatLabels = sortProductLabels(labels);
  const pricing = productVariantPricing(product, formatLabels[0]);
  const discount = pricing.originalPrice ? Math.round((1 - pricing.price / pricing.originalPrice) * 100) : null;
  const productHref = routeUrl('product', product.id, formatLabels[0], formatLabels);
  return `
    <article class="product-card">
      <a href="${productHref}" class="product-card-media-link block" data-select-product="${product.id}" data-product-formats="${formatLabels.join('|')}">
        <div class="relative bg-kompas-canvas">
          <img class="product-image" src="${product.image}" alt="${product.name}" />
          ${discount ? badge(`${discount}%`, 'soft-red', 'absolute left-3 top-3') : ''}
        </div>
      </a>
      <div class="product-card-content grid gap-2 p-3">
        <a href="${productHref}" class="product-card-title-link" data-select-product="${product.id}" data-product-formats="${formatLabels.join('|')}">
          <h3 class="${compact ? 'text-sm' : ''} product-card-title">${product.name}</h3>
        </a>
        <div class="product-card-price-row">
          <a href="${productHref}" class="product-card-price-link" data-select-product="${product.id}" data-product-formats="${formatLabels.join('|')}">
          <div class="product-card-price-block">
            ${product.startingPrice ? '<span class="price-prefix">Harga mulai</span>' : ''}
            ${pricing.originalPrice ? `<p class="product-card-original-price text-xs line-through">${formatCurrency(pricing.originalPrice)}</p>` : ''}
            <p class="font-bold text-kompas-royal">${formatCurrency(pricing.price)}</p>
          </div>
          </a>
        </div>
      </div>
      <button class="wishlist-card-button ${isWishlisted ? 'is-active' : ''}" type="button" data-wishlist="${product.id}" aria-label="Tambahkan ${product.name} ke wishlist" aria-pressed="${isWishlisted}">
        ${icon('heart', 'h-4 w-4')}
      </button>
    </article>
  `;
}

function heroCarousel() {
  return `
    <section class="hero-full" aria-label="Promo Gerai Kompas" data-hero-carousel>
      <div class="hero-carousel">
        <div class="hero-carousel-track" style="transform: translateX(-${currentSlide * 100}%);">
          ${heroSlides
            .map(
              (slide) => `
                <article class="hero-slide">
                  <a class="hero-slide-link" href="${slide.href || '#'}" aria-label="${slide.title}">
                    <img src="${slide.image}" alt="${slide.title}" class="hero-slide-image" />
                  </a>
                </article>
              `,
            )
            .join('')}
          </div>
      </div>
      <button class="hero-arrow hero-arrow-left" type="button" data-carousel="prev" aria-label="Slide sebelumnya">${icon('chevron', 'h-5 w-5 rotate-180')}</button>
      <button class="hero-arrow hero-arrow-right" type="button" data-carousel="next" aria-label="Slide berikutnya">${icon('chevron', 'h-5 w-5')}</button>
      <div class="hero-dots" aria-label="Pilih slide">
        ${heroSlides
          .map(
            (_, index) => `
              <button class="hero-dot ${index === currentSlide ? 'is-active' : ''}" type="button" data-slide-index="${index}" aria-label="Tampilkan slide ${index + 1}"></button>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function purchaseBottomSheet(product, formats, pricing, subtotal) {
  if (!isPurchaseSheetOpen) {
    return '';
  }

  const isCartMode = purchaseSheetMode === 'cart';
  const isLockedSubscription = isLockedSubscriptionProduct(product);
  return `
    <div class="purchase-sheet-shell ${shouldAnimatePurchaseSheet ? 'is-entering' : ''}" data-purchase-sheet>
      <button class="purchase-sheet-backdrop" type="button" data-purchase-sheet-close aria-label="Tutup pilihan pembelian"></button>
      <section class="purchase-bottom-sheet" role="dialog" aria-modal="true" aria-label="Pilihan pembelian">
        <div class="purchase-sheet-handle" aria-hidden="true"></div>
        <div class="purchase-sheet-header">
          <h2>Atur Pembelian</h2>
          <button type="button" data-purchase-sheet-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="purchase-sheet-product">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <h3>${product.name}</h3>
            <strong>${formatCurrency(pricing.price)}</strong>
            ${pricing.originalPrice ? `<span>${formatCurrency(pricing.originalPrice)}</span>` : ''}
          </div>
        </div>
        <div class="purchase-sheet-section">
          <div class="purchase-sheet-label">
            <p class="pdp-option-label"><strong>${productOptionLabel(product)}:</strong> <span>${selectedProductFormat}</span></p>
          </div>
          <div class="pdp-options" role="group" aria-label="Pilih jenis produk">
            ${formats
              .map(
                (format) => `
                  <button class="${format === selectedProductFormat ? 'is-selected' : ''}" type="button" data-product-format="${format}" aria-pressed="${format === selectedProductFormat}">${format}</button>
                `,
              )
              .join('')}
          </div>
        </div>
        ${
          productPeriodOptions(product).length
            ? `<div class="purchase-sheet-section">
                <div class="purchase-sheet-label">
                  <p class="pdp-option-label"><strong>Periode:</strong> <span>${selectedProductPeriod}</span></p>
                </div>
                <div class="pdp-options" role="group" aria-label="Pilih periode produk">
                  ${productPeriodOptions(product)
                    .map(
                      (period) => `
                        <button class="${period === selectedProductPeriod ? 'is-selected' : ''}" type="button" data-product-period="${period}" aria-pressed="${period === selectedProductPeriod}">${period}</button>
                      `,
                    )
                    .join('')}
                </div>
              </div>`
            : ''
        }
        <div class="purchase-sheet-section">
          <div class="purchase-sheet-label">
            <span>Jumlah</span>
            ${isLockedSubscription ? '' : `<small>Stok ${product.stock}</small>`}
          </div>
          ${
            isLockedSubscription
              ? `<div class="pdp-quantity">
                  <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
                  <span>1</span>
                  <button type="button" data-qty="plus" aria-label="Tambah" disabled>${icon('plus', 'h-4 w-4')}</button>
                </div>`
              : `<div class="pdp-quantity">
                  <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
                  <span>${quantity}</span>
                  <button type="button" data-qty="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
                </div>`
          }
          ${
            isLockedSubscription
              ? '<p class="pdp-quantity-note">Produk langganan hanya dapat dibeli adalah 1 per transaksi.</p>'
              : ''
          }
        </div>
        <div class="purchase-sheet-actions">
          ${
            isCartMode && !isLockedSubscription
              ? `<button class="btn btn-primary w-full purchase-sheet-add" type="button" data-add-to-cart data-purchase-sheet-add>${icon('cart-plus', 'h-5 w-5')} <span>Tambah ke Keranjang</span></button>`
              : `<a class="btn btn-primary w-full" href="${routeUrl('checkout', product.id, selectedProductFormat, selectedProductFormats)}" data-buy-now-trigger>Beli Sekarang</a>`
          }
        </div>
      </section>
    </div>
  `;
}

function restartHeroLoader() {
  const activeDot = document.querySelector('.hero-dot.is-active');
  if (!activeDot) {
    return;
  }
  activeDot.classList.remove('is-active');
  void activeDot.offsetWidth;
  activeDot.classList.add('is-active');
}

function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    const activeRoute = window.location.hash.replace('#', '') || 'home';
    if (activeRoute !== 'home') {
      return;
    }
    if (carouselPaused) {
      return;
    }
    transitionToSlide((currentSlide + 1) % heroSlides.length);
  }, HERO_SLIDE_DURATION);
}

function transitionToSlide(nextSlide) {
  if (carouselTransitioning || nextSlide === currentSlide) {
    return;
  }

  const heroTrack = document.querySelector('[data-hero-carousel] .hero-carousel-track');
  if (!heroTrack) {
    currentSlide = nextSlide;
    render();
    return;
  }

  carouselTransitioning = true;
  currentSlide = nextSlide;
  heroTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll('[data-slide-index]').forEach((button) => {
    const isActive = Number(button.getAttribute('data-slide-index') || 0) === currentSlide;
    button.classList.toggle('is-active', isActive);
  });
  restartHeroLoader();

  window.setTimeout(() => {
    carouselTransitioning = false;
  }, 460);
}

function section(title, action, content, id = '', actionHref = categoryUrl('buku')) {
  return `
    <section ${id ? `id="${id}"` : ''} class="kompas-container py-8">
      <div class="section-title">
        <h2>${title}</h2>
        ${action ? `<a class="font-bold text-[#0356A8]" href="${actionHref}">${action}</a>` : ''}
      </div>
      ${content}
    </section>
  `;
}

function categoryIllustration(category) {
  if (category.heroImage) {
    return `
      <div class="category-illustration category-illustration-${category.slug} category-illustration-image col-span-1 min-w-0" aria-hidden="true">
        <img src="${category.heroImage}" alt="" />
      </div>
    `;
  }

  return `
    <div class="category-illustration category-illustration-${category.slug} col-span-1 min-w-0" aria-hidden="true">
      <span class="category-illustration-icon ${category.tone}">${icon(category.icon, 'h-9 w-9')}</span>
      <div class="category-illustration-shelf">
        <span class="category-book category-book-primary"></span>
        <span class="category-book category-book-yellow"></span>
        <span class="category-book category-book-light"></span>
        <span class="category-book category-book-red"></span>
      </div>
      <div class="category-illustration-paper">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
}

function categoryPagination(category, currentPage, totalPages) {
  if (totalPages <= 1) {
    return '';
  }

  const pageItems = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;
    return `
      <a class="category-pagination-item ${isActive ? 'is-active' : ''}" href="${categoryPageUrl(category.slug, page)}" aria-label="Halaman ${page}" ${isActive ? 'aria-current="page"' : ''}>${page}</a>
    `;
  }).join('');

  return `
    <nav class="category-pagination" aria-label="Pagination kategori">
      <a class="category-pagination-nav ${currentPage === 1 ? 'is-disabled' : ''}" href="${categoryPageUrl(category.slug, Math.max(1, currentPage - 1))}" aria-label="Halaman sebelumnya">
        ${icon('chevron', 'h-4 w-4 rotate-180')}
      </a>
      <div class="category-pagination-pages">
        ${pageItems}
      </div>
      <a class="category-pagination-nav ${currentPage === totalPages ? 'is-disabled' : ''}" href="${categoryPageUrl(category.slug, Math.min(totalPages, currentPage + 1))}" aria-label="Halaman berikutnya">
        ${icon('chevron', 'h-4 w-4')}
      </a>
    </nav>
  `;
}

function collectionPagination(collection, currentPage, totalPages) {
  if (totalPages <= 1) {
    return '';
  }

  const pageItems = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;
    return `
      <a class="category-pagination-item ${isActive ? 'is-active' : ''}" href="${collectionPageUrl(collection.slug, page)}" aria-label="Halaman ${page}" ${isActive ? 'aria-current="page"' : ''}>${page}</a>
    `;
  }).join('');

  return `
    <nav class="category-pagination" aria-label="Pagination ${collection.title}">
      <a class="category-pagination-nav ${currentPage === 1 ? 'is-disabled' : ''}" href="${collectionPageUrl(collection.slug, Math.max(1, currentPage - 1))}" aria-label="Halaman sebelumnya">
        ${icon('chevron', 'h-4 w-4 rotate-180')}
      </a>
      <div class="category-pagination-pages">
        ${pageItems}
      </div>
      <a class="category-pagination-nav ${currentPage === totalPages ? 'is-disabled' : ''}" href="${collectionPageUrl(collection.slug, Math.min(totalPages, currentPage + 1))}" aria-label="Halaman berikutnya">
        ${icon('chevron', 'h-4 w-4')}
      </a>
    </nav>
  `;
}

function wishlistPagination(currentPage, totalPages) {
  if (totalPages <= 1) {
    return '';
  }

  const pageItems = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentPage;
    return `
      <a class="category-pagination-item ${isActive ? 'is-active' : ''}" href="${wishlistUrl(page)}" aria-label="Halaman ${page}" ${isActive ? 'aria-current="page"' : ''}>${page}</a>
    `;
  }).join('');

  return `
    <nav class="category-pagination" aria-label="Pagination wishlist">
      <a class="category-pagination-nav ${currentPage === 1 ? 'is-disabled' : ''}" href="${wishlistUrl(Math.max(1, currentPage - 1))}" aria-label="Halaman sebelumnya">
        ${icon('chevron', 'h-4 w-4 rotate-180')}
      </a>
      <div class="category-pagination-pages">
        ${pageItems}
      </div>
      <a class="category-pagination-nav ${currentPage === totalPages ? 'is-disabled' : ''}" href="${wishlistUrl(Math.min(totalPages, currentPage + 1))}" aria-label="Halaman berikutnya">
        ${icon('chevron', 'h-4 w-4')}
      </a>
    </nav>
  `;
}

function categoryLoadMoreControl(category, visibleCount, totalCount) {
  if (visibleCount >= totalCount) {
    return `
      <p class="category-load-complete">Semua produk sudah ditampilkan.</p>
    `;
  }

  if (categoryMobileLoading[category.slug]) {
    return `
      <div class="category-skeleton-grid" aria-live="polite" aria-label="Memuat produk berikutnya">
        ${Array.from({ length: 4 }, () => `
          <article class="category-skeleton-card">
            <span class="category-skeleton-media"></span>
            <span class="category-skeleton-line is-title"></span>
            <span class="category-skeleton-line"></span>
            <span class="category-skeleton-line is-short"></span>
          </article>
        `).join('')}
      </div>
    `;
  }

  return `
    <button class="btn btn-secondary category-load-more-button" type="button" data-category-load-more="${category.slug}">
      Lihat Lainnya
    </button>
  `;
}

function wishlistLoadMoreControl(visibleCount, totalCount) {
  if (visibleCount >= totalCount) {
    return `
      <p class="category-load-complete">Semua produk wishlist sudah ditampilkan.</p>
    `;
  }

  if (isWishlistLoading) {
    return `
      <div class="category-skeleton-grid" aria-live="polite" aria-label="Memuat wishlist berikutnya">
        ${Array.from({ length: 4 }, () => `
          <article class="category-skeleton-card">
            <span class="category-skeleton-media"></span>
            <span class="category-skeleton-line is-title"></span>
            <span class="category-skeleton-line"></span>
            <span class="category-skeleton-line is-short"></span>
          </article>
        `).join('')}
      </div>
    `;
  }

  return `
    <button class="btn btn-secondary category-load-more-button" type="button" data-wishlist-load-more>
      Lihat Lainnya
    </button>
  `;
}

function searchLoadMoreControl(visibleCount, totalCount) {
  if (visibleCount >= totalCount) {
    return '';
  }

  if (isSearchLoading) {
    return `
      <div class="category-skeleton-grid" aria-live="polite" aria-label="Memuat hasil pencarian berikutnya">
        ${Array.from({ length: 4 }, () => `
          <article class="category-skeleton-card">
            <span class="category-skeleton-media"></span>
            <span class="category-skeleton-line is-title"></span>
            <span class="category-skeleton-line"></span>
            <span class="category-skeleton-line is-short"></span>
          </article>
        `).join('')}
      </div>
    `;
  }

  return `
    <button class="btn btn-secondary category-load-more-button" type="button" data-search-load-more>
      Lihat Lainnya
    </button>
  `;
}

function wishlistSortControl() {
  const options = [
    ['newest', 'Terbaru Disimpan'],
    ['oldest', 'Terlama Disimpan'],
    ['price-low', 'Harga Terendah'],
    ['price-high', 'Harga Tertinggi'],
  ];

  return `
    <div class="wishlist-sort-control">
      <span id="wishlist-sort-label">Urutkan</span>
      <div class="wishlist-sort-select-wrap">
      <select data-wishlist-sort aria-labelledby="wishlist-sort-label">
        ${options
          .map(([value, label]) => `<option value="${value}" ${wishlistSort === value ? 'selected' : ''}>${label}</option>`)
          .join('')}
      </select>
      ${icon('chevron-down', 'h-4 w-4')}
      </div>
    </div>
  `;
}

function collectionLoadMoreControl(collection, visibleCount, totalCount) {
  if (visibleCount >= totalCount) {
    return `
      <p class="category-load-complete">Semua produk sudah ditampilkan.</p>
    `;
  }

  if (collectionMobileLoading[collection.slug]) {
    return `
      <div class="category-skeleton-grid" aria-live="polite" aria-label="Memuat produk berikutnya">
        ${Array.from({ length: 4 }, () => `
          <article class="category-skeleton-card">
            <span class="category-skeleton-media"></span>
            <span class="category-skeleton-line is-title"></span>
            <span class="category-skeleton-line"></span>
            <span class="category-skeleton-line is-short"></span>
          </article>
        `).join('')}
      </div>
    `;
  }

  return `
    <button class="btn btn-secondary category-load-more-button" type="button" data-collection-load-more="${collection.slug}">
      Lihat Lainnya
    </button>
  `;
}

function homeLatestLoadMoreControl(totalCount) {
  if (homeLatestVisibleCount >= totalCount) {
    return '';
  }

  if (isHomeLatestLoading) {
    return `
      <div class="home-latest-more home-latest-skeleton category-skeleton-grid" aria-live="polite" aria-label="Memuat produk terbaru berikutnya">
        ${Array.from({ length: HOME_LATEST_PAGE_SIZE }, () => `
          <article class="category-skeleton-card">
            <span class="category-skeleton-media"></span>
            <span class="category-skeleton-line is-title"></span>
            <span class="category-skeleton-line"></span>
            <span class="category-skeleton-line is-short"></span>
          </article>
        `).join('')}
      </div>
    `;
  }

  return `
    <div class="home-latest-more home-latest-action">
      <button class="btn btn-secondary category-load-more-button" type="button" data-home-latest-load-more>
        Muat Lainnya
      </button>
    </div>
  `;
}

function categoryPage() {
  const category = selectedCategory();
  const productsForCategory = categoryProducts(category.slug);
  const isEmptyCategory = productsForCategory.length === 0;
  const isMobileCategoryView = window.matchMedia('(max-width: 640px)').matches;
  const categoryPageSize = CATEGORY_PAGE_SIZE;
  const categoryTotalPages = Math.max(1, Math.ceil(productsForCategory.length / categoryPageSize));
  const currentCategoryPage = selectedCategoryPage(categoryTotalPages);
  const mobileVisibleCount = Math.min(
    categoryMobileVisibleCounts[category.slug] || categoryPageSize,
    productsForCategory.length,
  );
  const categoryStartIndex = isMobileCategoryView ? 0 : (currentCategoryPage - 1) * categoryPageSize;
  const categoryEndIndex = isMobileCategoryView ? mobileVisibleCount : categoryStartIndex + categoryPageSize;
  const visibleCategoryProducts = productsForCategory.slice(categoryStartIndex, categoryEndIndex);
  const categoryProductsMarkup = visibleCategoryProducts
    .map((product, index) => productCard(product, index > 7, category.labels))
    .join('');
  const categoryActionMarkup = isEmptyCategory
    ? ''
    : isMobileCategoryView
      ? categoryLoadMoreControl(category, mobileVisibleCount, productsForCategory.length)
      : categoryPagination(category, currentCategoryPage, categoryTotalPages);

  return `
    ${header('category')}
    <main class="category-page">
      <section class="category-hero kompas-container">
        <nav class="pdp-breadcrumb category-breadcrumb" aria-label="Breadcrumb">
          <a href="${homeUrl()}">Beranda</a>
          <span>/</span>
          <span>${category.name}</span>
        </nav>
        <div class="category-hero-panel category-hero-panel-${category.slug} grid grid-cols-2 items-center gap-6 max-[640px]:grid-cols-[minmax(0,1fr)_112px] max-[640px]:gap-3">
          <div class="category-hero-copy col-span-1 min-w-0">
            <h1>${category.name}</h1>
            <p>${category.description}</p>
          </div>
          ${categoryIllustration(category)}
        </div>
      </section>

      <section class="kompas-container category-products-section">
        <div class="section-title">
          <h2>Semua ${category.name}</h2>
          <span class="category-result-count">${productsForCategory.length} produk</span>
        </div>
        ${
          isEmptyCategory
            ? categoryEmptyState(category)
            : `<div class="category-product-grid">${categoryProductsMarkup}</div>`
        }
        <div class="category-more-action">
          ${categoryActionMarkup}
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function categoryEmptyState(category) {
  return `
    <div class="category-empty-state">
      <img src="./assets/product-unavailable-cropped.png" alt="" />
      <h2>Produk Belum Tersedia</h2>
      <p>Produk untuk kategori ${category.name} sedang kami siapkan. Silakan cek kembali beberapa waktu lagi.</p>
    </div>
  `;
}

function collectionPage() {
  const collection = selectedCollection();
  const productsForCollection = collectionProducts(collection.slug);
  const isMobileCollectionView = window.matchMedia('(max-width: 640px)').matches;
  const collectionPageSize = CATEGORY_PAGE_SIZE;
  const collectionTotalPages = Math.ceil(productsForCollection.length / collectionPageSize);
  const currentCollectionPage = selectedCategoryPage(collectionTotalPages);
  const mobileVisibleCount = Math.min(
    collectionMobileVisibleCounts[collection.slug] || collectionPageSize,
    productsForCollection.length,
  );
  const collectionStartIndex = isMobileCollectionView ? 0 : (currentCollectionPage - 1) * collectionPageSize;
  const collectionEndIndex = isMobileCollectionView ? mobileVisibleCount : collectionStartIndex + collectionPageSize;
  const visibleCollectionProducts = productsForCollection.slice(collectionStartIndex, collectionEndIndex);
  const collectionProductsMarkup = visibleCollectionProducts
    .map((product, index) => productCard(product, index > 7, productFormatBadges(product)))
    .join('');
  const collectionActionMarkup = isMobileCollectionView
    ? collectionLoadMoreControl(collection, mobileVisibleCount, productsForCollection.length)
    : collectionPagination(collection, currentCollectionPage, collectionTotalPages);

  return `
    ${header('collection')}
    <main class="category-page collection-page">
      <section class="category-hero kompas-container">
        <nav class="pdp-breadcrumb category-breadcrumb" aria-label="Breadcrumb">
          <a href="${homeUrl()}">Beranda</a>
          <span>/</span>
          <span>${collection.title}</span>
        </nav>
        <div class="category-hero-panel category-hero-panel-${collection.slug} grid grid-cols-2 items-center gap-6 max-[640px]:grid-cols-[minmax(0,1fr)_112px] max-[640px]:gap-3">
          <div class="category-hero-copy col-span-1 min-w-0">
            <h1>${collection.title}</h1>
            <p>${collection.description}</p>
          </div>
          ${categoryIllustration(collection)}
        </div>
      </section>

      <section class="kompas-container category-products-section">
        <div class="section-title">
          <h2>${collection.productTitle}</h2>
          <span class="category-result-count">${productsForCollection.length} produk</span>
        </div>
        <div class="category-product-grid">${collectionProductsMarkup}</div>
        <div class="category-more-action">
          ${collectionActionMarkup}
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function wishlistPage() {
  const productsForWishlist = sortedWishlistProducts();
  const isMobileWishlistView = window.matchMedia('(max-width: 640px)').matches;
  const wishlistTotalPages = Math.ceil(productsForWishlist.length / CATEGORY_PAGE_SIZE);
  const currentWishlistPage = selectedCategoryPage(wishlistTotalPages);
  const mobileVisibleCount = Math.min(wishlistMobileVisibleCount, productsForWishlist.length);
  const wishlistStartIndex = isMobileWishlistView ? 0 : (currentWishlistPage - 1) * CATEGORY_PAGE_SIZE;
  const wishlistEndIndex = isMobileWishlistView ? mobileVisibleCount : wishlistStartIndex + CATEGORY_PAGE_SIZE;
  const visibleWishlistProducts = productsForWishlist.slice(wishlistStartIndex, wishlistEndIndex);
  const wishlistProductsMarkup = visibleWishlistProducts
    .map((product, index) => productCard(product, index > 7, productFormatBadges(product)))
    .join('');
  const wishlistActionMarkup = isMobileWishlistView
    ? wishlistLoadMoreControl(mobileVisibleCount, productsForWishlist.length)
    : wishlistPagination(currentWishlistPage, wishlistTotalPages);

  return `
    ${header('wishlist')}
    <main class="category-page wishlist-page">
      <section class="kompas-container wishlist-hero">
        <nav class="pdp-breadcrumb category-breadcrumb" aria-label="Breadcrumb">
          <a href="${homeUrl()}">Beranda</a>
          <span>/</span>
          <span>Wishlist</span>
        </nav>
        <div class="wishlist-heading">
          <div>
            <h1>Wishlist</h1>
            <p>Produk Gerai Kompas yang Anda simpan untuk dibeli nanti.</p>
          </div>
          ${wishlistSortControl()}
        </div>
      </section>

      <section class="kompas-container category-products-section">
        <div class="wishlist-list-meta">
          <span class="category-result-count">${productsForWishlist.length} produk</span>
        </div>
        ${
          productsForWishlist.length
            ? `<div class="category-product-grid">${wishlistProductsMarkup}</div>
              <div class="category-more-action">
                ${wishlistActionMarkup}
              </div>`
            : `<div class="wishlist-empty-state">
                <h2>Wishlist Kosong</h2>
                <p>Simpan produk dari Gerai Kompas untuk melihatnya kembali di halaman ini.</p>
                <a class="btn btn-secondary button-base" href="${homeUrl()}">Jelajahi Produk</a>
              </div>`
        }
      </section>
    </main>
    ${footer()}
  `;
}

function searchFilterControls() {
  const params = searchParams();
  const categoryOptions = categories
    .filter((category) => !category.isHiddenFromPopular)
    .map((category) => ({ value: category.name, label: category.name }));
  const typeOptions = [
    { value: 'Bundling', label: 'Bundling' },
    { value: 'Fisik', label: 'Fisik' },
    { value: 'Digital', label: 'Digital' },
  ];
  const sortOptions = [
    { value: 'relevance', label: 'Relevansi' },
    { value: 'newest', label: 'Terbaru' },
    { value: 'price-high', label: 'Harga Tertinggi' },
    { value: 'price-low', label: 'Harga Terendah' },
  ];

  const chipFilter = (label, values, options, filterName) => {
    const selectedCount = values.length;
    const chipLabel = selectedCount ? `${label} (${selectedCount})` : label;
    return `
      <button class="search-filter-chip ${selectedCount ? 'is-selected' : ''} ${activeSearchFilter === filterName ? 'is-open' : ''}" type="button" data-search-filter-open="${filterName}">
        <span>${chipLabel}</span>
        ${icon('chevron-down', 'h-4 w-4')}
      </button>
    `;
  };

  const sortControl = `
    <label class="wishlist-sort-control search-sort-control">
      <span>Urutkan</span>
      <span class="wishlist-sort-select-wrap">
        <select data-search-sort>
          ${sortOptions
            .map((option) => `<option value="${escapeHtml(option.value)}" ${option.value === params.sort ? 'selected' : ''}>${option.label}</option>`)
            .join('')}
        </select>
        ${icon('chevron-down', 'h-4 w-4')}
      </span>
    </label>
  `;

  return `
    <div class="search-result-toolbar">
      <div class="search-filter-chips">
        ${chipFilter('Kategori', params.categoryValues, categoryOptions, 'filterCategory')}
        ${chipFilter('Jenis Produk', params.typeValues, typeOptions, 'filterType')}
      </div>
      ${sortControl}
    </div>
  `;
}

function searchFilterModal() {
  if (!activeSearchFilter) {
    return '';
  }

  const params = searchParams();
  const isCategoryFilter = activeSearchFilter === 'filterCategory';
  const label = isCategoryFilter ? 'Kategori' : 'Jenis Produk';
  const values = isCategoryFilter ? params.categoryValues : params.typeValues;
  const options = isCategoryFilter
    ? categories
      .filter((category) => !category.isHiddenFromPopular)
      .map((category) => ({ value: category.name, label: category.name }))
    : [
      { value: 'Bundling', label: 'Bundling' },
      { value: 'Fisik', label: 'Fisik' },
      { value: 'Digital', label: 'Digital' },
    ];

  return `
    <div class="search-filter-modal-shell" data-search-filter-modal>
      <button class="search-filter-modal-backdrop" type="button" data-search-filter-close aria-label="Tutup filter ${label}"></button>
      <section class="search-filter-modal-panel" role="dialog" aria-modal="true" aria-label="Filter ${label}">
        <div class="search-filter-sheet-header">
          <strong>${label}</strong>
          <button type="button" data-search-filter-close aria-label="Tutup filter ${label}">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="search-filter-option-list">
          <label class="search-filter-option is-reset">
            <input type="checkbox" data-search-filter-checkbox data-search-filter="${activeSearchFilter}" value="all" ${values.length ? '' : 'checked'} />
            <span>Semua ${label}</span>
          </label>
          ${options
            .map(
              (option) => `
                <label class="search-filter-option">
                  <input type="checkbox" data-search-filter-checkbox data-search-filter="${activeSearchFilter}" value="${escapeHtml(option.value)}" ${values.includes(option.value) ? 'checked' : ''} />
                  <span>${option.label}</span>
                </label>
              `,
            )
            .join('')}
        </div>
        <div class="search-filter-modal-actions">
          <button class="btn btn-primary button-base" type="button" data-search-filter-apply>Terapkan</button>
        </div>
      </section>
    </div>
  `;
}

function searchPage() {
  const params = searchParams();
  searchSort = params.sort;
  const productsForSearch = searchProductResults();
  const queryCopy = params.query.trim();
  const resultCopy = queryCopy
    ? `Menampilkan produk yang cocok dengan “${escapeHtml(queryCopy)}”.`
    : 'Menampilkan semua produk Gerai Kompas.';
  const visibleSearchProducts = productsForSearch.slice(0, searchVisibleCount);
  const searchProductsMarkup = visibleSearchProducts
    .map((product, index) => productCard(product, index > 7, productFormatBadges(product)))
    .join('');

  return `
    ${header('search')}
    <main class="category-page search-page">
      <section class="kompas-container search-hero">
        <nav class="pdp-breadcrumb category-breadcrumb" aria-label="Breadcrumb">
          <a href="${homeUrl()}">Beranda</a>
          <span>/</span>
          <span>Pencarian</span>
        </nav>
        <div class="search-heading">
          <div>
            <h1>Hasil Pencarian</h1>
            <p>${resultCopy}</p>
          </div>
          <span class="category-result-count">${productsForSearch.length} produk</span>
        </div>
        ${searchFilterControls()}
        ${searchFilterModal()}
      </section>

      <section class="kompas-container category-products-section search-products-section">
        ${
          productsForSearch.length
            ? `<div class="category-product-grid">${searchProductsMarkup}</div>
              ${searchLoadMoreControl(visibleSearchProducts.length, productsForSearch.length)}`
            : `<div class="search-empty-state">
                <img src="./assets/search-not-found.png" alt="" loading="lazy" />
                <h2>Produk Tidak Ditemukan</h2>
                <p>Coba gunakan kata kunci lain seperti buku, Kompas Digital, bundling, merchandise, atau tiket.</p>
              </div>`
        }
      </section>
    </main>
    ${footer()}
  `;
}

function cartPage() {
  const product = getSelectedProduct();
  normalizeSelectedFormat(product);
  const allCartVisibleItems = visibleCartItems();
  const purchaseCount = allCartVisibleItems.reduce((total, item) => total + cartItemQuantity(item), 0);
  const subscriptionCount = allCartVisibleItems
    .filter(isCartLanggananTabItem)
    .reduce((total, item) => total + cartItemQuantity(item), 0);
  const cartVisibleItems = activeCartTabItems();
  const visibleSelectedItems = activeCartTabSelectedItems();
  const cartTotals = cartSummaryTotals(visibleSelectedItems);
  const appliedPromo = getAppliedPromo();
  const promoDiscount = promoDiscountAmount(appliedPromo, cartTotals.subtotal);
  const totalDiscount = cartTotals.discount + promoDiscount;
  const totalDue = cartTotals.subtotal - promoDiscount;
  const hasSelectedItems = visibleSelectedItems.length > 0;
  const isAllCartSelected = cartVisibleItems.length > 0
    && cartVisibleItems.every((item) => cartItemSelectedInTab(item));
  const recommendations = pickProducts(['source-2', 'source-3', 'source-7', 'source-8', 'source-13'])
    .filter((item) => item.id !== product.id)
    .slice(0, 4)
    .map((item) => productCard(item, true, productFormatBadges(item)))
    .join('');
  const cartItemsMarkup = cartVisibleItems
    .map((item) => {
      const { product: itemProduct, pricing } = cartItemTotals(item);
      const productHref = routeUrl('product', itemProduct.id, item.type, item.formats);
      const isItemChecked = cartItemSelectedInTab(item);
      const isSubscriptionItem = isSubscriptionCartItem(item);
      const quantityMarkup = isSubscriptionItem
        ? '<div class="cart-quantity-text">Jumlah: 1</div>'
        : `<div class="pdp-quantity cart-quantity">
            <button type="button" data-cart-qty="${item.cartId}" data-cart-qty-action="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-qty="${item.cartId}" data-cart-qty-action="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
          </div>`;

      return `
        <article class="cart-item">
          <label class="cart-item-check" aria-label="Pilih ${itemProduct.name}">
            <input type="checkbox" data-cart-select-item="${item.cartId}" ${isItemChecked ? 'checked' : ''} />
          </label>
          <a class="cart-item-media" href="${productHref}">
            <img src="${itemProduct.image}" alt="${itemProduct.name}" />
          </a>
          <div class="cart-item-content">
            <a href="${productHref}">
              <h2>${itemProduct.name}</h2>
            </a>
            <div class="cart-item-type">${cartItemVariantBadges(item, { includeProductType: true })}</div>
            <div class="cart-item-price">
              <strong>${formatCurrency(pricing.price)}</strong>
              ${pricing.originalPrice ? `<span>${formatCurrency(pricing.originalPrice)}</span>` : ''}
            </div>
          </div>
          <div class="cart-item-actions">
            <div class="cart-item-tools">
              <button class="cart-item-wishlist ${wishlist.has(itemProduct.id) ? 'is-active' : ''}" type="button" data-wishlist="${itemProduct.id}" aria-label="Tambahkan ${itemProduct.name} ke wishlist" aria-pressed="${wishlist.has(itemProduct.id)}">
                ${icon('heart', 'h-5 w-5')}
              </button>
              <button class="cart-item-delete" type="button" data-cart-delete="${item.cartId}" aria-label="Hapus ${itemProduct.name}">
                ${icon('trash', 'h-5 w-5')}
              </button>
            </div>
            ${quantityMarkup}
          </div>
        </article>
      `;
    })
    .join('');
  const checkoutTarget = visibleSelectedItems.length ? cartCheckoutUrl(visibleSelectedItems) : '#cart';

  return `
    ${header('cart')}
    <main class="cart-page kompas-container py-6">
      <h1>Keranjang</h1>
      <p class="cart-page-instruction">Pilih keranjang Belanja atau Langganan sesuai produk yang ingin Anda beli.</p>
      <div class="cart-layout">
        <div class="cart-main">
          <div class="cart-page-tabs" role="tablist" aria-label="Jenis keranjang">
            <button class="${cartActiveTab === 'belanja' ? 'is-active' : ''}" type="button" role="tab" aria-selected="${cartActiveTab === 'belanja'}" data-cart-tab="belanja">Belanja (${purchaseCount})</button>
            <button class="${cartActiveTab === 'langganan' ? 'is-active' : ''}" type="button" role="tab" aria-selected="${cartActiveTab === 'langganan'}" data-cart-tab="langganan">Langganan (${subscriptionCount})</button>
            ${hasSelectedItems ? '<button class="cart-tab-delete" type="button" data-cart-delete-selected>Hapus</button>' : ''}
          </div>
          <section class="cart-card cart-list-card">
            <div class="cart-list-header">
              <label class="cart-check-row">
                <input type="checkbox" data-cart-select-all ${isAllCartSelected ? 'checked' : ''} ${cartVisibleItems.length ? '' : 'disabled'} />
                <span>Pilih Semua</span>
              </label>
              ${hasSelectedItems ? '<button type="button" data-cart-delete-selected>Hapus</button>' : ''}
            </div>
            ${
              cartVisibleItems.length
                ? cartItemsMarkup
                : `<div class="cart-empty-state">
                    ${icon('cart', 'h-8 w-8')}
                    <h2>Keranjang Kosong</h2>
                    <p>Tambahkan produk Gerai Kompas untuk melanjutkan transaksi.</p>
                    <a class="btn btn-secondary button-base" href="${homeUrl()}">Jelajahi Produk</a>
                  </div>`
            }
          </section>
        </div>

        <aside class="cart-sidebar">
          <section class="cart-card cart-summary">
            <h2>Ringkasan Belanja</h2>
            <div class="cart-summary-lines">
              <div><span>Total Harga (${cartTotals.count} Barang)</span><strong>${formatCurrency(cartTotals.originalTotal)}</strong></div>
              <div><span>Total Diskon</span><strong class="is-discount">-${formatCurrency(totalDiscount)}</strong></div>
            </div>
            <div class="cart-summary-total">
              <span>Total Tagihan</span>
              <strong>${formatCurrency(totalDue)}</strong>
            </div>
            ${checkoutPromoEntry(appliedPromo, promoDiscount)}
            ${
              cartTotals.count
                ? `<a class="btn btn-primary w-full" href="${checkoutTarget}" data-cart-checkout="${visibleSelectedItems[0].cartId}">Beli (${cartTotals.count})</a>`
                : '<button class="btn btn-primary w-full" type="button" disabled>Beli</button>'
            }
          </section>
        </aside>
      </div>

      <section class="cart-recommendations">
        <div class="section-title">
          <h2>Mungkin Anda Suka</h2>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">${recommendations}</div>
      </section>
    </main>
    <div class="mobile-cart-bar" data-mobile-cart-bar>
      <div class="mobile-cart-promo">
        ${checkoutPromoEntry(appliedPromo, promoDiscount)}
      </div>
      <div class="mobile-cart-actions">
        <label class="cart-check-row mobile-cart-select">
          <input type="checkbox" data-cart-select-all ${isAllCartSelected ? 'checked' : ''} ${cartVisibleItems.length ? '' : 'disabled'} />
          <span>Pilih Semua</span>
        </label>
        <button class="mobile-cart-total-wrap" type="button" data-cart-summary-open aria-label="Buka ringkasan belanja">
          <span class="mobile-cart-summary-trigger" aria-hidden="true">
            ${icon('chevron-down', 'h-4 w-4 rotate-180')}
          </span>
          <div class="mobile-cart-total">
            <span>Total</span>
            <strong>${formatCurrency(totalDue)}</strong>
          </div>
        </button>
        ${
          cartTotals.count
            ? `<a class="btn btn-primary" href="${checkoutTarget}" data-cart-checkout="${visibleSelectedItems[0].cartId}">Beli (${cartTotals.count})</a>`
            : '<button class="btn btn-primary" type="button" disabled>Beli</button>'
        }
      </div>
    </div>
    ${footer()}
    ${promoModal()}
    ${cartSummarySheet(cartTotals, totalDiscount, totalDue)}
    ${cartDeleteConfirmModal()}
  `;
}

function cartSummarySheet(cartTotals, totalDiscount, totalDue) {
  if (!isCartSummarySheetOpen) {
    return '';
  }

  return `
    <div class="checkout-modal-shell cart-summary-sheet-shell" data-cart-summary-sheet>
      <button class="checkout-modal-backdrop" type="button" data-cart-summary-close aria-label="Tutup ringkasan belanja"></button>
      <section class="checkout-modal-panel cart-summary-sheet-panel" role="dialog" aria-modal="true" aria-label="Ringkasan Belanja">
        <div class="checkout-modal-header">
          <div>
            <h2>Ringkasan Belanja</h2>
            <p>Rincian total pesanan yang dipilih di keranjang.</p>
          </div>
          <button type="button" data-cart-summary-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="cart-summary-sheet-content">
          <div class="cart-summary-lines">
            <div><span>Total Harga (${cartTotals.count} Barang)</span><strong>${formatCurrency(cartTotals.originalTotal)}</strong></div>
            <div><span>Total Diskon</span><strong class="is-discount">-${formatCurrency(totalDiscount)}</strong></div>
          </div>
          <div class="cart-summary-total">
            <span>Total Tagihan</span>
            <strong>${formatCurrency(totalDue)}</strong>
          </div>
        </div>
      </section>
    </div>
  `;
}

function cartDeleteConfirmModal() {
  if (!isCartDeleteConfirmOpen) {
    return '';
  }

  const selectedCount = activeCartTabSelectedItems().length;

  return `
    <div class="checkout-modal-shell cart-delete-confirm-shell" data-cart-delete-confirm>
      <button class="checkout-modal-backdrop" type="button" data-cart-delete-cancel aria-label="Batal hapus produk"></button>
      <section class="checkout-modal-panel cart-delete-confirm-panel" role="dialog" aria-modal="true" aria-label="Konfirmasi hapus produk">
        <div class="checkout-modal-header">
          <div>
            <h2>Hapus ${selectedCount} Produk?</h2>
            <p>Produk yang Anda pilih akan dihapus dari Keranjang.</p>
          </div>
          <button type="button" data-cart-delete-cancel aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="checkout-modal-actions cart-delete-confirm-actions">
          <button class="btn btn-secondary" type="button" data-cart-delete-cancel>Batal</button>
          <button class="btn btn-primary" type="button" data-cart-delete-confirm-button>Hapus</button>
        </div>
      </section>
    </div>
  `;
}

function homePage() {
  const productGridClass = 'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4';
  const latestProductList = homepageLatestProducts();
  const latestVisibleProducts = latestProductList.slice(0, homeLatestVisibleCount);
  const recommended = bestSellerProducts().slice(0, 4)
    .map((product) => productCard(product))
    .join('');
  const newest = latestVisibleProducts
    .map((product) => productCard(product, true))
    .join('');
  const subscriptions = uniqueProductList([
    baseProductById('source-17'),
    baseProductById('source-20'),
    baseProductById('source-21'),
    baseProductById('source-19'),
    ...categoryProducts('langganan'),
  ]).slice(0, 4)
    .map((product) => productCard(product))
    .join('');
  const bundles = bundlingProducts()
    .map((product) => productCard(product))
    .join('');

  return `
    ${header('home')}
    <main>
      ${heroCarousel()}

      ${section(
        'Kategori Pilihan',
        '',
        `<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <button class="category-card category-card-all flex items-center gap-4 rounded-lg p-4 text-left" type="button" data-all-categories-open>
            <span class="category-card-media category-card-media-all" aria-hidden="true">
              <img src="./assets/all-categories.png" alt="" loading="lazy" />
            </span>
            <span>
              <span class="block font-bold">Lihat Semua</span>
            </span>
          </button>
          ${categories
            .filter((category) => !category.isHiddenFromPopular)
            .map(
              (category) => `
                <a class="category-card flex items-center gap-4 rounded-lg p-4" href="${categoryUrl(category.slug)}">
                  <span class="category-card-media category-card-media-${category.slug}" aria-hidden="true">
                    <img src="${category.thumbnail}" alt="" loading="lazy" />
                  </span>
                  <span>
                    <span class="block font-bold">${category.name}</span>
                    <span class="text-sm text-kompas-muted">${category.count}</span>
                  </span>
                </a>
              `,
            )
            .join('')}
        </div>`,
        'home-categories',
      )}

      ${section(
        'Terlaris',
        'Lihat Semua',
        `<div class="${productGridClass}">${recommended}</div>`,
        '',
        collectionUrl('terlaris'),
      )}

      ${section(
        'Bundling',
        'Lihat Semua',
        `<div class="${productGridClass}">${bundles}</div>`,
        '',
        collectionUrl('bundling'),
      )}

      ${section(
        'Langganan',
        'Lihat Semua',
        `<div class="${productGridClass}">${subscriptions}</div>`,
        '',
        collectionUrl('langganan'),
      )}

      ${section(
        'Baru di Gerai',
        'Lihat Semua',
        `<div class="${productGridClass}">${newest}</div>
        ${homeLatestLoadMoreControl(latestProductList.length)}`,
        '',
        collectionUrl('terbaru'),
      )}
    </main>
    ${allCategoriesSheet()}
    ${footer()}
  `;
}

function productPage() {
  const product = getSelectedProduct();
  normalizeSelectedFormat(product);
  const productCategory = categoryForProduct(product);
  const isWishlisted = wishlist.has(product.id);
  const pricing = productVariantPricing(product, selectedProductFormat);
  const isLockedSubscription = isLockedSubscriptionProduct(product);
  if (isLockedSubscription && quantity !== 1) {
    quantity = 1;
  }
  const subtotal = pricing.price * quantity;
  const discount = pricing.originalPrice ? Math.round((1 - pricing.price / pricing.originalPrice) * 100) : null;
  const galleryImages = productGalleryImages(product);
  const formats = productFormatOptions(product);
  const longDescription = productLongDescription(product);
  return `
    ${header('product')}
    <main class="product-detail-page kompas-container py-6">
      <nav class="pdp-breadcrumb" aria-label="Breadcrumb">
        <a href="${homeUrl()}">Beranda</a>
        <span>/</span>
        <a href="${categoryUrl(productCategory.slug)}">${productCategory.name}</a>
        <span>/</span>
        <span title="${product.name}">${truncateText(product.name, 30)}</span>
      </nav>

      <section class="pdp-hero" aria-label="Detail produk">
        <div class="pdp-gallery">
          <div class="pdp-main-media" data-pdp-gallery-swipe data-gallery-count="${galleryImages.length}" data-current-image="${selectedProductImageIndex}">
            <div class="pdp-main-track" data-pdp-main-track style="transform: translate3d(-${selectedProductImageIndex * 100}%, 0, 0);">
              ${galleryImages
                .map(
                  (imagePath, index) => `
                    <img src="${imagePath}" alt="${product.name} ${index + 1}" draggable="false" />
                  `,
                )
                .join('')}
            </div>
            <span class="pdp-gallery-indicator" data-pdp-gallery-indicator aria-label="Gambar ${selectedProductImageIndex + 1} dari ${galleryImages.length}">${selectedProductImageIndex + 1}/${galleryImages.length}</span>
          </div>
          <div class="pdp-gallery-strip" aria-label="Galeri produk">
            ${galleryImages
              .map(
                (imagePath, index) => `
                  <button class="pdp-gallery-thumb ${index === selectedProductImageIndex ? 'is-active' : ''}" type="button" data-product-image="${index}" aria-label="Lihat gambar ${index + 1}" aria-pressed="${index === selectedProductImageIndex}">
                    <img src="${imagePath}" alt="" />
                  </button>
                `,
              )
              .join('')}
          </div>
        </div>

        <div class="pdp-product-info">
          <h1>${product.name}</h1>
          <p class="pdp-rating">${product.sold} terjual</p>
          <div class="pdp-price-tools">
            <div class="pdp-price-stack">
              <strong>${formatCurrency(pricing.price)}</strong>
              ${
                pricing.originalPrice
                  ? `<div class="pdp-original-row">
                      <span class="pdp-discount-wrap">${badge(`${discount}%`, 'soft-red', 'pdp-discount-badge')}</span>
                      <span class="pdp-original-price">${formatCurrency(pricing.originalPrice)}</span>
                    </div>`
                  : ''
              }
            </div>
            <div class="pdp-product-actions" aria-label="Aksi produk">
              <button class="${isWishlisted ? 'is-active' : ''}" type="button" data-wishlist="${product.id}" aria-label="Tambahkan ${product.name} ke wishlist" aria-pressed="${isWishlisted}">
                ${icon('heart', 'h-5 w-5')}
              </button>
              <button type="button" data-share-product aria-label="Bagikan ${product.name}">
                ${icon('share', 'h-5 w-5')}
              </button>
            </div>
          </div>
          <div class="pdp-option-group">
            ${productTypeSummaryMarkup(product)}
            <p class="pdp-option-label">${productOptionLabel(product)}: <span>${selectedProductFormat}</span></p>
            <div class="pdp-options" role="group" aria-label="Pilih jenis produk">
              ${formats
                .map(
                  (format) => `
                    <button class="${format === selectedProductFormat ? 'is-selected' : ''}" type="button" data-product-format="${format}" aria-pressed="${format === selectedProductFormat}">${format}</button>
                  `,
                )
                .join('')}
            </div>
            ${pdpSelectedProductTypeMarkup(product, selectedProductFormat)}
          </div>
          ${
            product.periods?.length
              ? `<div class="pdp-option-group">
                  <p class="pdp-option-label">Periode: <span>${selectedProductPeriod}</span></p>
                  <div class="pdp-options" role="group" aria-label="Pilih periode produk">
                    ${productPeriodOptions(product)
                      .map(
                        (period) => `
                          <button class="${period === selectedProductPeriod ? 'is-selected' : ''}" type="button" data-product-period="${period}" aria-pressed="${period === selectedProductPeriod}">${period}</button>
                        `,
                      )
                      .join('')}
                  </div>
                </div>`
              : ''
          }

          <div class="pdp-detail-stack">
            <section class="pdp-description-block" aria-label="Deskripsi produk">
              <h2 class="pdp-description-title">Deskripsi</h2>
              ${productDescriptionMarkup(product, longDescription, isProductDescriptionExpanded)}
              <span class="pdp-description-fade" aria-hidden="true"></span>
              <button class="pdp-description-toggle" type="button" data-description-toggle aria-expanded="${isProductDescriptionExpanded}">
                ${isProductDescriptionExpanded ? 'Tutup' : 'Selengkapnya'} ${icon('chevron-down', `h-4 w-4 ${isProductDescriptionExpanded ? 'rotate-180' : ''}`)}
              </button>
            </section>
            <details class="pdp-disclosure">
              <summary>Detail Produk</summary>
              <ul>
                ${product.details.map((detail) => `<li>${detail}</li>`).join('')}
                <li>SKU: ${product.sku || `GERAI-${product.id.toUpperCase()}`}</li>
              </ul>
            </details>
            <details class="pdp-disclosure">
              <summary>Pengiriman & Retur</summary>
              <p>${productShippingDescription(product, selectedProductFormat)} Retur dapat diajukan jika produk fisik diterima dalam kondisi tidak sesuai.</p>
            </details>
          </div>
        </div>

        <aside class="pdp-buybox">
          <div class="pdp-option-group">
            <p>Jumlah</p>
            <div class="pdp-quantity-row">
              ${
                isLockedSubscription
                  ? `<div class="pdp-quantity">
                      <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
                      <span>1</span>
                      <button type="button" data-qty="plus" aria-label="Tambah" disabled>${icon('plus', 'h-4 w-4')}</button>
                    </div>`
                  : `<div class="pdp-quantity">
                      <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
                      <span>${quantity}</span>
                      <button type="button" data-qty="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
                    </div>
                    <span>Stok ${product.stock}</span>`
              }
            </div>
            ${
              isLockedSubscription
                ? '<p class="pdp-quantity-note">Produk langganan hanya dapat dibeli adalah 1 per transaksi.</p>'
                : ''
            }
          </div>

          <div class="pdp-subtotal">
            <span>Subtotal</span>
            <strong>${formatCurrency(subtotal)}</strong>
          </div>

          <div class="pdp-actions ${isLockedSubscription ? 'is-single-action' : ''}">
            <a class="btn btn-primary" href="${routeUrl('checkout', product.id, selectedProductFormat, selectedProductFormats)}" data-buy-now-trigger>Beli Sekarang</a>
            ${
              isLockedSubscription
                ? ''
                : `<button class="btn btn-secondary pdp-cart-action" type="button" data-add-to-cart>${icon('cart-plus')} <span>Tambah ke Keranjang</span></button>`
            }
          </div>

          <ul class="pdp-service-list">
            <li>${icon('truck', 'h-5 w-5')} ${productServiceSummary(product, selectedProductFormat)}</li>
            <li>${icon('shield', 'h-5 w-5')} Produk resmi Gerai Kompas.id</li>
          </ul>
        </aside>
      </section>

      <section class="pdp-related py-8">
        <div class="section-title">
          <h2>Produk Terkait</h2>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">${relatedProducts().map((item) => productCard(item, true)).join('')}</div>
      </section>
    </main>
    ${purchaseBottomSheet(product, formats, pricing, subtotal)}
    ${shareModal(product)}
    ${footer()}
  `;
}

function shareModal(product) {
  if (!isShareModalOpen) {
    return '';
  }

  const shareUrl = new URL(routeUrl('product', product.id, selectedProductFormat, selectedProductFormats), window.location.href).href;
  const shareText = `${product.name} - Gerai Kompas.id`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const shareOptions = [
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, className: 'share-x' },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, className: 'share-facebook' },
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`, className: 'share-whatsapp' },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, className: 'share-linkedin' },
  ];

  return `
    <div class="checkout-modal-shell share-modal-shell" data-share-modal>
      <button class="checkout-modal-backdrop" type="button" data-share-close aria-label="Tutup pilihan bagikan"></button>
      <section class="checkout-modal-panel share-modal-panel" role="dialog" aria-modal="true" aria-labelledby="share-modal-title">
        <div class="checkout-modal-header share-modal-header">
          <div>
            <h2 id="share-modal-title">Bagikan Produk</h2>
            <p>Pilih kanal untuk membagikan produk ini.</p>
          </div>
          <button type="button" data-share-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="share-modal-content">
          <div class="share-product-card">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <strong>${product.name}</strong>
              <span>${formatCurrency(productVariantPricing(product, selectedProductFormat).price)}</span>
            </div>
          </div>
          <div class="share-option-grid">
            ${shareOptions
              .map(
                (option) => `
                  <a class="share-option" href="${option.href}" target="_blank" rel="noopener noreferrer">
                    <span class="share-option-icon ${option.className}" aria-hidden="true"></span>
                    <span>${option.label}</span>
                  </a>
                `,
              )
              .join('')}
            <button class="share-option" type="button" data-share-copy="${shareUrl}">
              <span class="share-option-icon share-copy" aria-hidden="true"></span>
              <span>${isShareLinkCopied ? 'Tersalin' : 'Salin Tautan'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  return Promise.resolve();
}

function checkoutPage() {
  const product = getSelectedProduct();
  normalizeSelectedFormat(product);
  const checkoutItems = checkoutOrderItems();
  const cartCheckoutTab = checkoutCartSourceTab(checkoutItems);
  const paymentPlanConstraint = checkoutPaymentPlanConstraint(checkoutItems);
  const isPaymentPlanSelectable = !paymentPlanConstraint.plan;
  if (paymentPlanConstraint.plan && selectedPaymentPlan !== paymentPlanConstraint.plan) {
    selectedPaymentPlan = paymentPlanConstraint.plan;
    isPaymentTermsExpanded = false;
  }
  syncAutoRenewPromo(checkoutItems);
  const selectedAddress = getSelectedAddress();
  const appliedPromo = getAppliedPromo();
  const needsShipping = checkoutNeedsShipping(checkoutItems);
  const needsStoreNote = checkoutNeedsStoreNote(checkoutItems);
  const shipping = needsShipping ? selectedShippingOption().price : 0;
  const insurance = needsShipping ? 3000 : 0;
  const subtotal = checkoutItems.reduce((total, item) => total + cartItemTotals(item).subtotal, 0);
  const grossTotal = subtotal + shipping + insurance;
  const discount = promoDiscountAmount(appliedPromo, grossTotal);
  const total = grossTotal - discount;
  const checkoutProductsMarkup = checkoutItems
    .map((item) => {
      const { product: itemProduct, pricing } = cartItemTotals(item);
      const isSingleCheckout = item.isSingleCheckout;
      const isLockedSubscriptionQuantity = cartCheckoutTab === 'langganan' || isSubscriptionCartItem(item);
      const quantityControl = isLockedSubscriptionQuantity
        ? '<div class="checkout-quantity-text">Jumlah: 1</div>'
        : isSingleCheckout
          ? `<div class="pdp-quantity checkout-quantity">
            <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
            <span>${item.quantity}</span>
            <button type="button" data-qty="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
          </div>`
          : `<div class="pdp-quantity checkout-quantity">
            <button type="button" data-checkout-cart-qty="${item.cartId}" data-cart-qty-action="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
            <span>${item.quantity}</span>
            <button type="button" data-checkout-cart-qty="${item.cartId}" data-cart-qty-action="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
          </div>`;

      return `
        <div class="checkout-product-row">
          <div class="checkout-product-main">
            <img src="${itemProduct.image}" alt="${itemProduct.name}" />
            <div>
              <h3>${itemProduct.name}</h3>
              <div class="checkout-product-variant">${cartItemVariantBadges(item, { includeProductType: true })}</div>
              <div class="checkout-product-meta">
                <strong>${formatCurrency(pricing.price)}</strong>
                ${pricing.originalPrice ? `<span class="checkout-product-original-price">${formatCurrency(pricing.originalPrice)}</span>` : ''}
              </div>
            </div>
          </div>
          <div class="checkout-quantity-control">
            ${quantityControl}
          </div>
        </div>
      `;
    })
    .join('');
  let activePaymentMethods = visiblePaymentMethods();
  const selectedExpandedMethod = allPaymentMethods().find((method) => method.id === selectedPaymentMethod);
  if (
    selectedPaymentPlan === 'once' &&
    selectedExpandedMethod &&
    !activePaymentMethods.some((method) => method.id === selectedExpandedMethod.id)
  ) {
    activePaymentMethods = [...activePaymentMethods, selectedExpandedMethod];
  }
  if (!activePaymentMethods.some((method) => method.id === selectedPaymentMethod)) {
    selectedPaymentMethod = activePaymentMethods[0].id;
  }
  const paymentPlanLabel = selectedPaymentPlan === 'once' ? 'Sekali Bayar' : 'Perpanjang Otomatis';
  const hasAutoRenewPromo = checkoutHasDigitalSubscription(checkoutItems);
  const isShoppingBundlingRecurringCheckout = selectedPaymentPlan === 'recurring'
    && checkoutItems.some((item) => {
      const itemProduct = cartItemProduct(item);
      return productPurchaseType(itemProduct) === PURCHASE_TYPES.SHOPPING && cartItemProductType(item) === 'Bundling';
    });
  const paymentTerms =
    selectedPaymentPlan === 'once'
      ? {
          title: 'Ketentuan Sekali Bayar',
          short:
            'Pesanan dibayarkan satu kali dan tidak diperpanjang otomatis.',
          full:
            'Pesanan dibayarkan satu kali sesuai total yang tertera. Setelah pembayaran berhasil diverifikasi, produk fisik diproses untuk pengiriman dan akses digital, bila ada, diaktifkan sesuai periode yang dipilih. Tidak ada tagihan lanjutan setelah masa akses berakhir, kecuali Anda melakukan pembelian ulang secara manual di Gerai Kompas.',
        }
      : {
          title: 'Ketentuan Perpanjang Otomatis',
          short: isShoppingBundlingRecurringCheckout
            ? 'Perpanjang otomatis hanya berlaku untuk produk langganan digital. Pembayaran selanjutnya <strong>Rp120.000/1 tahun</strong>'
            : 'Tagihan berikutnya diproses otomatis sesuai metode pembayaran tersimpan.',
          full: isShoppingBundlingRecurringCheckout
            ? 'Perpanjang otomatis pada pesanan ini hanya berlaku untuk akses langganan digital yang termasuk di dalam paket bundling. Produk fisik dalam paket tetap dibayar satu kali pada transaksi ini. Pembayaran selanjutnya sebesar <strong>Rp120.000/1 tahun</strong> akan diproses otomatis menggunakan metode pembayaran tersimpan sampai Anda menghentikan perpanjangan melalui menu kelola akun Kompas.id atau layanan pelanggan.'
            : 'Dengan memilih perpanjang otomatis, Anda menyetujui bahwa tagihan periode berikutnya dapat diproses otomatis menggunakan metode pembayaran yang tersimpan. Anda dapat menghentikan perpanjangan otomatis melalui menu kelola akun Kompas.id atau layanan pelanggan sebelum tanggal penagihan berikutnya.',
        };
  const visiblePaymentTerms = isPaymentTermsExpanded ? paymentTerms.full : paymentTerms.short;
  return `
    ${header('checkout')}
    <main class="checkout-page kompas-container py-6">
      <div class="checkout-heading">
        <div>
          <h1>Checkout</h1>
          <p>Lengkapi pesanan Anda di Gerai Kompas.</p>
        </div>
      </div>
      <div class="checkout-grid">
        <div class="checkout-main">
          ${
            needsShipping
              ? `<section class="checkout-card">
                  <div class="checkout-card-title">
                    <h2 class="checkout-title-label">${icon('truck', 'h-5 w-5')} Alamat Pengiriman</h2>
                  </div>
                  ${
                    selectedAddress
                      ? `<div class="checkout-address">
                          <div>
                            <p>${selectedAddress.recipient} <span class="checkout-address-label">${selectedAddress.label}</span></p>
                            <span>${formatAddressLine(selectedAddress)} · ${selectedAddress.phone}</span>
                          </div>
                          <button class="checkout-address-action" type="button" data-address-manager-open>Ganti</button>
                        </div>`
                      : `<button class="checkout-address checkout-address-empty" type="button" data-address-empty-add>
                          <div>
                            <p>Belum Ada Alamat Pengiriman</p>
                            <span>Tambahkan alamat agar produk fisik dapat diproses setelah pembayaran terverifikasi.</span>
                          </div>
                          ${icon('chevron', 'h-4 w-4')}
                        </button>`
                  }
                </section>`
              : ''
          }

          <section class="checkout-card">
            <div class="checkout-store-row">
              ${icon('cart', 'h-5 w-5')}
              <div>
                <h2>Pesanan Anda</h2>
              </div>
            </div>
            <div class="checkout-product-list">
              ${checkoutProductsMarkup}
            </div>
            ${
              needsStoreNote
                ? `<label class="checkout-note">
                    <span>Catatan untuk Gerai</span>
                    <input type="text" placeholder="Contoh: jangan sertakan invoice harga" />
                  </label>`
                : ''
            }
          </section>

          ${
            needsShipping
              ? `<section class="checkout-card">
                  <div class="checkout-card-title">
                    <h2 class="checkout-title-label">${icon('truck', 'h-5 w-5')} Jasa Pengiriman</h2>
                  </div>
                  ${shippingDropdown()}
                </section>`
              : ''
          }

          <section class="checkout-card">
            <div class="checkout-card-title">
              <h2 class="checkout-title-label">${icon('card', 'h-5 w-5')} Pembayaran</h2>
            </div>
            ${
              isPaymentPlanSelectable
                ? `<div class="checkout-payment-section">
                    <p>Opsi Pembayaran</p>
                    <div class="checkout-plan-grid">
                      ${paymentPlanOption('once', 'Sekali Bayar', 'Bayar penuh untuk pesanan ini saja', 'bank')}
                      ${paymentPlanOption('recurring', 'Perpanjang Otomatis', 'Tagihan berikutnya diproses otomatis', 'refresh', null, hasAutoRenewPromo)}
                    </div>
                  </div>`
                : `<div class="checkout-payment-section">
                    <div class="checkout-payment-info-alert">
                      ${icon(paymentPlanConstraint.icon, 'h-5 w-5')}
                      <div>
                        <strong>${paymentPlanConstraint.title}</strong>
                        <p>${paymentPlanConstraint.description}</p>
                      </div>
                    </div>
                  </div>`
            }
            <div class="checkout-payment-section">
              <p>Metode Pembayaran</p>
              <div class="checkout-methods">
                ${activePaymentMethods.map((method) => paymentMethodOption(method)).join('')}
              </div>
              ${selectedPaymentPlan === 'once' ? otherPaymentTouchpoint() : ''}
            </div>
          </section>
        </div>

        <aside class="checkout-sidebar">
          ${checkoutPromoEntry(appliedPromo, discount)}
          <section class="checkout-summary">
            <div class="checkout-summary-title">
              <h2>Ringkasan Transaksi</h2>
              ${badge(paymentPlanLabel, selectedPaymentPlan === 'once' ? 'soft-blue' : 'soft-green')}
            </div>
            <div class="checkout-summary-lines">
              <div><span>Subtotal produk</span><strong>${formatCurrency(subtotal)}</strong></div>
              <div><span>Pengiriman</span><strong>${formatCurrency(shipping)}</strong></div>
              <div><span>Proteksi paket</span><strong>${formatCurrency(insurance)}</strong></div>
              ${
                discount
                  ? `<div class="is-discount"><span>${appliedPromo.label}</span><strong>-${formatCurrency(discount)}</strong></div>`
                  : ''
              }
            </div>
            <div class="checkout-payment-alert ${isPaymentTermsExpanded ? 'is-expanded' : ''}">
              <strong>${paymentTerms.title}</strong>
              <p>
                ${visiblePaymentTerms} <button type="button" data-payment-terms-toggle>
                  ${isPaymentTermsExpanded ? 'Tutup' : 'Selengkapnya'} ${icon('chevron-down', `h-4 w-4 ${isPaymentTermsExpanded ? 'rotate-180' : ''}`)}
                </button>
              </p>
            </div>
            <div class="checkout-total">
              <span>Total</span>
              <strong>${formatCurrency(total)}</strong>
            </div>
            <button class="btn btn-primary w-full" type="button">Bayar Sekarang</button>
            <p>Dengan melanjutkan, Anda menyetujui syarat & ketentuan bertransaksi di Gerai Kompas.id.</p>
          </section>
        </aside>
      </div>
    </main>
    <div class="mobile-checkout-bar" data-mobile-checkout-bar>
      <div>
        <span>Total</span>
        <strong>${formatCurrency(total)}</strong>
      </div>
      <button class="btn btn-primary" type="button">Bayar Sekarang</button>
    </div>
    ${checkoutFooter()}
    ${addressManagerModal()}
    ${addressDeleteConfirmModal()}
    ${promoModal()}
    ${paymentMethodModal()}
  `;
}

function checkoutPromoEntry(appliedPromo, discount) {
  return `
    <div class="checkout-promo-entry ${appliedPromo ? 'is-applied' : ''}">
      <button class="checkout-promo-main" type="button" data-promo-modal-open>
        <span class="checkout-promo-icon"><img src="./assets/promo-coupon.png" alt="" /></span>
        <span>
          <strong>${appliedPromo ? `${appliedPromo.label} dipakai` : 'Gunakan Kode Promo'}</strong>
          ${
            appliedPromo
              ? `<small>Hemat ${formatCurrency(discount)} untuk pesanan ini</small>`
              : ''
          }
        </span>
        ${icon('chevron', 'h-5 w-5')}
      </button>
    </div>
  `;
}

function paymentPlanOption(value, name, desc, iconName, lockedPlan = null, hasPromo = false) {
  const checked = selectedPaymentPlan === value;
  const isLocked = Boolean(lockedPlan);
  const isDisabled = isLocked && lockedPlan !== value;
  return `
    <label class="checkout-plan ${checked ? 'is-selected' : ''} ${isDisabled ? 'is-disabled' : ''} ${isLocked && checked ? 'is-locked' : ''}">
      <input type="radio" name="paymentPlan" value="${value}" ${checked ? 'checked' : ''} ${isLocked ? 'disabled' : ''} />
      ${icon(iconName, 'h-5 w-5')}
      <span>
        <strong class="checkout-plan-title">${name}${hasPromo ? badge('Promo', 'soft-red', 'checkout-plan-promo-badge') : ''}</strong>
        <small>${desc}</small>
      </span>
    </label>
  `;
}

function paymentMethodOption(method) {
  const checked = selectedPaymentMethod === method.id;
  return `
    <label class="checkout-method ${checked ? 'is-selected' : ''}">
      <input type="radio" name="paymentMethod" value="${method.id}" ${checked ? 'checked' : ''} />
      ${paymentLogo(method.logo)}
      <span>
        <strong>${method.name}</strong>
        <small>${method.desc}</small>
      </span>
    </label>
  `;
}

function autoPromoSnackbarMarkup() {
  if (!autoPromoSnackbar) {
    return '';
  }
  const snackbarIcon = autoPromoSnackbarType === 'success' ? 'check' : 'info';

  return `
    <div class="checkout-auto-promo-snackbar is-${autoPromoSnackbarType}" role="status" aria-live="polite">
      ${icon(snackbarIcon, 'h-4 w-4')}
      <span>${autoPromoSnackbar}</span>
    </div>
  `;
}

function otherPaymentTouchpoint() {
  const logos = ['card', 'ovo', 'shopeepay', 'mandiri', 'bni', 'bri'];
  return `
    <button class="checkout-more-payment" type="button" data-payment-modal-open>
      <span>
        <strong>Pilih metode pembayaran lainnya</strong>
        <small>Kartu kredit/debit, dompet digital, dan Virtual Account bank lain</small>
      </span>
      <span class="checkout-more-logos" aria-hidden="true">
        ${logos.map((logo) => paymentLogo(logo)).join('')}
      </span>
      ${icon('chevron', 'h-4 w-4')}
    </button>
  `;
}

function paymentLogo(logo) {
  const logoImage = (name, alt) => `<img src="./assets/logo-payment-${name}.png" alt="${alt}" />`;
  const logos = {
    bca: `<span class="payment-logo payment-logo-bca">${logoImage('bca', 'BCA')}</span>`,
    qris: `<span class="payment-logo payment-logo-qris">${logoImage('qris', 'QRIS')}</span>`,
    gopay: `<span class="payment-logo payment-logo-gopay">${logoImage('gopay', 'GoPay')}</span>`,
    card: `<span class="payment-logo payment-logo-card">${logoImage('visa', 'Visa')}${logoImage('mastercard', 'Mastercard')}${logoImage('jcb', 'JCB')}</span>`,
    debit: '<span class="payment-logo payment-logo-debit">Debit</span>',
    ovo: `<span class="payment-logo payment-logo-ovo">${logoImage('ovo', 'OVO')}</span>`,
    shopeepay: `<span class="payment-logo payment-logo-shopeepay">${logoImage('shopee', 'ShopeePay')}</span>`,
    dana: `<span class="payment-logo payment-logo-dana">${logoImage('dana', 'DANA')}</span>`,
    linkaja: `<span class="payment-logo payment-logo-linkaja">${logoImage('linkaja', 'LinkAja')}</span>`,
    indomaret: `<span class="payment-logo payment-logo-indomaret">${logoImage('indomaret', 'Indomaret')}</span>`,
    mandiri: `<span class="payment-logo payment-logo-mandiri">${logoImage('mandiri', 'Mandiri')}</span>`,
    permata: `<span class="payment-logo payment-logo-permata">${logoImage('permata', 'Permata Bank')}</span>`,
    bni: `<span class="payment-logo payment-logo-bni">${logoImage('bni', 'BNI')}</span>`,
    bri: `<span class="payment-logo payment-logo-bri">${logoImage('bri', 'BRI')}</span>`,
  };

  return logos[logo] || '<span class="payment-logo">Pay</span>';
}

function paymentGroupForMethod(methodId) {
  return allPaymentMethods().find((method) => method.id === methodId)?.group || '';
}

function paymentGroupIcon(group) {
  const groupIcons = {
    'Transfer Bank': 'bank',
    Kartu: 'card',
    'Dompet Digital': 'wallet',
    Gerai: 'store',
  };

  return icon(groupIcons[group] || 'card', 'h-4 w-4');
}

function addressManagerModal() {
  if (!isAddressManagerOpen) {
    return '';
  }

  const draft = addressDraft || {
    label: '',
    recipient: '',
    phone: '',
    district: '',
    city: '',
    province: '',
    address: '',
    courierNote: '',
  };
  const draftProvince = draft.province || '';
  const draftCity = draft.city || '';
  const cityOptions = addressCityOptions(draftProvince);
  const districtOptions = addressDistrictOptions(draftProvince, draftCity);

  const listContent = checkoutAddresses.length
    ? `
      <div class="checkout-modal-list">
        ${checkoutAddresses
          .map(
            (address) => `
            <article class="address-option ${address.id === selectedAddressId ? 'is-selected' : ''} ${checkoutAddresses.length === 1 ? 'is-only-address' : ''}">
              <div>
                <p>${address.recipient} <span>${address.label}</span></p>
                <small>${formatAddressLine(address)}</small>
                <small>${address.phone}</small>
              </div>
              <div class="address-option-actions">
                <div class="address-context-menu">
                  <button class="address-menu-trigger" type="button" data-address-menu-toggle="${address.id}" aria-label="Buka menu alamat ${address.label}" aria-expanded="${openAddressMenuId === address.id}">
                    ${icon('more', 'h-5 w-5')}
                  </button>
                  ${
                    openAddressMenuId === address.id
                      ? `<div class="address-menu-panel">
                          <button type="button" data-address-edit="${address.id}">${icon('edit', 'h-4 w-4')} Ubah</button>
                          <button type="button" data-address-delete="${address.id}">${icon('trash', 'h-4 w-4')} Hapus</button>
                        </div>`
                      : ''
                  }
                </div>
                ${address.id === selectedAddressId ? '' : `<button class="btn btn-secondary button-base" type="button" data-address-select="${address.id}">Pilih</button>`}
              </div>
            </article>
          `,
          )
          .join('')}
      </div>
      <button class="address-add-button" type="button" data-address-add-open>${icon('plus', 'h-4 w-4')} Tambah Alamat Baru</button>
    `
    : `
      <div class="address-empty-state">
        <div class="address-empty-icon">${icon('truck', 'h-6 w-6')}</div>
        <h3>Belum Ada Alamat</h3>
        <p>Tambahkan alamat pengiriman agar pesanan fisik dapat diproses oleh Gerai Kompas.</p>
        <button class="btn btn-primary button-base" type="button" data-address-add-open>Tambah Alamat</button>
      </div>
    `;

  const formContent = `
    <div class="checkout-address-form">
      <label>
        <span>Label Alamat</span>
        <input type="text" value="${draft.label}" data-address-field="label" placeholder="Contoh: Rumah, Kantor, Apartemen" />
      </label>
      <label>
        <span>Nama Penerima</span>
        <input type="text" value="${draft.recipient}" data-address-field="recipient" placeholder="Nama penerima" />
      </label>
      <label>
        <span>Nomor Ponsel</span>
        <input type="text" value="${draft.phone}" data-address-field="phone" placeholder="08xx" />
      </label>
      <label>
        <span>Provinsi</span>
        <select data-address-field="province">
          ${addressSelectOptions(addressProvinceOptions(), draftProvince, 'Pilih provinsi')}
        </select>
      </label>
      <label>
        <span>Kota/Kabupaten</span>
        <select data-address-field="city" ${draftProvince ? '' : 'disabled'}>
          ${addressSelectOptions(cityOptions, draftCity, draftProvince ? 'Pilih kota/kabupaten' : 'Pilih provinsi dahulu')}
        </select>
      </label>
      <label>
        <span>Kecamatan</span>
        <select data-address-field="district" ${draftCity ? '' : 'disabled'}>
          ${addressSelectOptions(districtOptions, draft.district || '', draftCity ? 'Pilih kecamatan' : 'Pilih kota/kabupaten dahulu')}
        </select>
      </label>
      <label>
        <span>Alamat Lengkap</span>
        <textarea data-address-field="address" placeholder="Nama jalan, nomor rumah, RT/RW, kode pos">${draft.address}</textarea>
      </label>
      <label>
        <span>Catatan untuk Kurir (Opsional)</span>
        <input type="text" value="${draft.courierNote || ''}" data-address-field="courierNote" placeholder="Warna rumah, patokan, pesan khusus, dll." />
      </label>
      <div class="checkout-modal-actions">
        <button class="btn btn-secondary" type="button" data-address-cancel>Batal</button>
        <button class="btn btn-primary" type="button" data-address-save>Simpan Alamat</button>
      </div>
    </div>
  `;

  return `
    <div class="checkout-modal-shell" data-address-manager>
      <button class="checkout-modal-backdrop" type="button" data-address-manager-close aria-label="Tutup pengaturan alamat"></button>
      <section class="checkout-modal-panel address-manager-panel" role="dialog" aria-modal="true" aria-label="Atur alamat pengiriman">
        <div class="checkout-modal-header">
          <div>
            <h2>${addressFormMode === 'list' ? 'Pilih Alamat' : addressFormMode === 'add' ? 'Tambah Alamat' : 'Ubah Alamat'}</h2>
            <p>Kelola alamat pengiriman untuk pesanan Gerai Kompas.</p>
          </div>
          <button type="button" data-address-manager-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        ${addressFormMode === 'list' ? listContent : formContent}
      </section>
    </div>
  `;
}

function addressDeleteConfirmModal() {
  if (!addressDeleteCandidateId) {
    return '';
  }

  const address = checkoutAddresses.find((item) => item.id === addressDeleteCandidateId);
  if (!address) {
    return '';
  }

  return `
    <div class="checkout-modal-shell address-confirm-shell" data-address-delete-confirm>
      <button class="checkout-modal-backdrop" type="button" data-address-delete-cancel aria-label="Batal hapus alamat"></button>
      <section class="checkout-modal-panel address-confirm-panel" role="dialog" aria-modal="true" aria-label="Konfirmasi hapus alamat">
        <div class="checkout-modal-header">
          <div>
            <h2>Hapus Alamat?</h2>
            <p>Alamat ${address.label} akan dihapus dari daftar alamat pengiriman.</p>
          </div>
          <button type="button" data-address-delete-cancel aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="address-confirm-body">
          <strong>${address.recipient}</strong>
          <span>${formatAddressLine(address)}</span>
        </div>
        <div class="checkout-modal-actions address-confirm-actions">
          <button class="btn btn-secondary" type="button" data-address-delete-cancel>Batal</button>
          <button class="btn btn-primary" type="button" data-address-delete-confirm-button>Hapus Alamat</button>
        </div>
      </section>
    </div>
  `;
}

function promoModal() {
  if (!isPromoModalOpen) {
    return '';
  }

  const appliedPromo = getAppliedPromo();

  return `
    <div class="checkout-modal-shell" data-promo-modal>
      <button class="checkout-modal-backdrop" type="button" data-promo-modal-close aria-label="Tutup input promo"></button>
      <section class="checkout-modal-panel promo-modal-panel" role="dialog" aria-modal="true" aria-label="Masukkan kode promo">
        <div class="checkout-modal-header">
          <div>
            <h2>Pakai Promo</h2>
            <p>Masukkan kode promo Gerai Kompas untuk mengurangi total belanja.</p>
          </div>
          <button type="button" data-promo-modal-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="promo-modal-content">
          ${
            appliedPromo
              ? `<div class="promo-applied-card">
                  <div>
                    <strong>${appliedPromo.label} sedang digunakan</strong>
                    <span>Promo aktif pada transaksi ini dan akan mengurangi total belanja.</span>
                  </div>
                  <button type="button" data-promo-remove>Batalkan promo</button>
                </div>`
              : ''
          }
          <div class="checkout-promo-form">
            <input type="text" value="${promoDraft}" placeholder="Masukkan kode promo" data-promo-input />
            <button class="btn btn-primary" type="button" data-promo-apply>Terapkan</button>
          </div>
          <div class="promo-suggestion">
            <p>Kode yang bisa dicoba</p>
            <div>
              <button type="button" data-promo-suggestion="GERAI14">GERAI14</button>
              <button type="button" data-promo-suggestion="PAYDAY35">PAYDAY35</button>
            </div>
          </div>
          ${
            appliedPromo
              ? `<p class="checkout-promo-status is-success">${icon('check', 'h-4 w-4')} ${appliedPromo.label} berhasil diterapkan.</p>`
              : ''
          }
          ${promoError ? `<p class="checkout-promo-status is-error">${promoError}</p>` : ''}
        </div>
      </section>
    </div>
  `;
}

function paymentMethodModal() {
  if (!isPaymentMethodModalOpen) {
    return '';
  }

  const groupedMethods = allPaymentMethods().reduce((groups, method) => {
    groups[method.group] = groups[method.group] || [];
    groups[method.group].push(method);
    return groups;
  }, {});
  const visualPaymentMethod = pendingPaymentMethod || selectedPaymentMethod;

  return `
    <div class="checkout-modal-shell" data-payment-method-modal>
      <button class="checkout-modal-backdrop" type="button" data-payment-modal-close aria-label="Tutup pilihan pembayaran"></button>
      <section class="checkout-modal-panel payment-modal-panel" role="dialog" aria-modal="true" aria-label="Pilih metode pembayaran">
        <div class="checkout-modal-header">
          <div>
            <h2>Pilih Metode Pembayaran</h2>
            <p>Metode pembayaran tersedia untuk transaksi Gerai Kompas.</p>
          </div>
          <button type="button" data-payment-modal-close aria-label="Tutup">${icon('x', 'h-5 w-5')}</button>
        </div>
        <div class="payment-modal-groups">
          ${Object.entries(groupedMethods)
            .map(
              ([group, methods]) => {
                const isOpen = openPaymentGroups.includes(group);
                const previewLogos = methods.map((method) => method.logo);
                return `
                <section class="payment-modal-group ${isOpen ? 'is-open' : ''}">
                  <button class="payment-modal-group-toggle" type="button" data-payment-group-toggle="${group}" aria-expanded="${isOpen}">
                    <span class="payment-modal-group-title">${paymentGroupIcon(group)} <span>${group}</span></span>
                    ${
                      isOpen
                        ? ''
                        : `<span class="payment-modal-group-preview" aria-hidden="true">
                            ${previewLogos.map((logo) => paymentLogo(logo)).join('')}
                          </span>`
                    }
                    ${icon('chevron-down', `h-5 w-5 ${isOpen ? 'rotate-180' : ''}`)}
                  </button>
                  ${
                    isOpen
                      ? `<div class="payment-modal-options">
                          ${methods
                            .map(
                              (method) => `
                                <button class="payment-modal-option ${visualPaymentMethod === method.id ? 'is-selected' : ''}" type="button" data-payment-modal-select="${method.id}" aria-pressed="${visualPaymentMethod === method.id}">
                                  ${paymentLogo(method.logo)}
                                  <span>
                                    <strong>${method.name}</strong>
                                    <small>${method.desc}</small>
                                  </span>
                                  ${visualPaymentMethod === method.id ? icon('check', 'h-5 w-5') : ''}
                                </button>
                              `,
                            )
                            .join('')}
                        </div>`
                      : ''
                  }
                </section>
              `;
              },
            )
            .join('')}
        </div>
        ${
          pendingPaymentMethod
            ? `<div class="payment-modal-footer">
                <button class="btn btn-primary" type="button" data-payment-modal-confirm>Pilih</button>
              </div>`
            : ''
        }
      </section>
    </div>
  `;
}

function shippingOption(value, name, desc, price) {
  const checked = selectedShipping === value;
  return `
    <label class="checkout-shipping ${checked ? 'is-selected' : ''}">
      <span class="flex items-center gap-3">
        <input type="radio" name="shipping" value="${value}" ${checked ? 'checked' : ''} />
        <span>
          <span class="block font-bold">${name}</span>
          <small>${desc}</small>
        </span>
      </span>
      <strong>${formatCurrency(price)}</strong>
    </label>
  `;
}

function shippingDropdown() {
  const selected = selectedShippingOption();
  return `
    <div class="checkout-shipping-dropdown ${isShippingDropdownOpen ? 'is-open' : ''}">
      <button class="checkout-shipping checkout-shipping-trigger is-selected" type="button" data-shipping-toggle aria-expanded="${isShippingDropdownOpen}">
        <span class="checkout-shipping-copy">
          <span>
            <span class="checkout-shipping-title">${selected.name}</span>
            <small class="checkout-shipping-desc">${selected.desc}</small>
          </span>
        </span>
        <span class="checkout-shipping-price">
          <strong>${formatCurrency(selected.price)}</strong>
          ${icon('chevron-down', `h-5 w-5 ${isShippingDropdownOpen ? 'rotate-180' : ''}`)}
        </span>
      </button>
      ${
        isShippingDropdownOpen
          ? `<div class="checkout-shipping-menu">
              ${shippingOptions
                .map(
                  (option) => `
                    <button class="checkout-shipping-option ${selectedShipping === option.id ? 'is-selected' : ''}" type="button" data-shipping-select="${option.id}" aria-pressed="${selectedShipping === option.id}">
                      <span>
                        <strong>${option.name}</strong>
                        <small class="checkout-shipping-desc">${option.desc}</small>
                      </span>
                      <span>
                        <strong>${formatCurrency(option.price)}</strong>
                        <span class="checkout-shipping-check">${selectedShipping === option.id ? icon('check', 'h-5 w-5') : ''}</span>
                      </span>
                    </button>
                  `,
                )
                .join('')}
            </div>`
          : ''
      }
    </div>
  `;
}

function allPaymentMethods() {
  return [
    { id: 'bca-va', name: 'BCA Virtual Account', desc: 'Verifikasi otomatis dalam beberapa menit', logo: 'bca', group: 'Transfer Bank' },
    { id: 'mandiri-bill', name: 'Mandiri Bill Payment', desc: 'Bayar melalui Mandiri Bill Payment', logo: 'mandiri', group: 'Transfer Bank' },
    { id: 'permata-va', name: 'Permata', desc: 'Bayar melalui Permata Virtual Account', logo: 'permata', group: 'Transfer Bank' },
    { id: 'bni-va', name: 'BNI Virtual Account', desc: 'Bayar lewat BNI Mobile, ATM, atau internet banking', logo: 'bni', group: 'Transfer Bank' },
    { id: 'mandiri-va', name: 'Mandiri Virtual Account', desc: 'Bayar lewat Livin, ATM, atau internet banking', logo: 'mandiri', group: 'Transfer Bank' },
    { id: 'bri-va', name: 'BRI Virtual Account', desc: 'Bayar lewat BRImo, ATM, atau internet banking', logo: 'bri', group: 'Transfer Bank' },
    { id: 'credit-card', name: 'Kartu Kredit / Debit', desc: 'Visa, Mastercard, JCB', logo: 'card', group: 'Kartu' },
    { id: 'gopay', name: 'GoPay', desc: 'Bayar dari saldo GoPay', logo: 'gopay', group: 'Dompet Digital' },
    { id: 'ovo', name: 'OVO', desc: 'Bayar dari saldo OVO', logo: 'ovo', group: 'Dompet Digital' },
    { id: 'dana', name: 'DANA', desc: 'Bayar dari saldo DANA', logo: 'dana', group: 'Dompet Digital' },
    { id: 'linkaja', name: 'LinkAja', desc: 'Bayar dari saldo LinkAja', logo: 'linkaja', group: 'Dompet Digital' },
    { id: 'qris', name: 'QRIS', desc: 'Bayar dengan aplikasi bank atau dompet digital', logo: 'qris', group: 'Dompet Digital' },
    { id: 'shopeepay', name: 'ShopeePay', desc: 'Bayar dari saldo ShopeePay', logo: 'shopeepay', group: 'Dompet Digital' },
    { id: 'indomaret', name: 'Indomaret', desc: 'Bayar di gerai Indomaret terdekat', logo: 'indomaret', group: 'Gerai' },
  ];
}

function visiblePaymentMethods() {
  if (selectedPaymentPlan === 'recurring') {
    return [
      { id: 'credit-card', name: 'Kartu Kredit / Debit', desc: 'Ditagihkan otomatis saat masa aktif berakhir', logo: 'card' },
      { id: 'gopay-autodebit', name: 'GoPay AutoDebit', desc: 'Perpanjangan otomatis lewat akun GoPay', logo: 'gopay' },
      { id: 'ovo-autodebit', name: 'OVO AutoDebit', desc: 'Perpanjangan otomatis lewat akun OVO', logo: 'ovo' },
      { id: 'shopeepay-autodebit', name: 'ShopeePay AutoDebit', desc: 'Perpanjangan otomatis lewat akun ShopeePay', logo: 'shopeepay' },
    ];
  }

  return [
    { id: 'bca-va', name: 'BCA Virtual Account', desc: 'Verifikasi otomatis dalam beberapa menit', logo: 'bca' },
    { id: 'qris', name: 'QRIS', desc: 'Bayar dengan aplikasi bank atau e-wallet', logo: 'qris' },
    { id: 'gopay', name: 'GoPay', desc: 'Saldo dan GoPayLater yang tersedia', logo: 'gopay' },
  ];
}

function openPurchaseSheet(mode) {
  purchaseSheetMode = mode;
  isPurchaseSheetOpen = true;
  shouldAnimatePurchaseSheet = true;
  render();
}

function closePurchaseSheet() {
  const sheet = document.querySelector('[data-purchase-sheet]');
  if (sheet) {
    sheet.classList.remove('is-entering');
    sheet.classList.add('is-closing');
    window.setTimeout(() => {
      isPurchaseSheetOpen = false;
      shouldAnimatePurchaseSheet = false;
      render();
    }, 220);
    return;
  }

  isPurchaseSheetOpen = false;
  shouldAnimatePurchaseSheet = false;
  render();
}

function bindEvents() {
  const closeMobileOverlays = () => {
    document.querySelector('[data-mobile-search]')?.setAttribute('hidden', '');
    document.querySelector('[data-account-menu]')?.setAttribute('hidden', '');
    document.querySelector('[data-account-menu-toggle]')?.setAttribute('aria-expanded', 'false');
  };

  document.querySelector('[data-mobile-search-toggle]')?.addEventListener('click', () => {
    const searchOverlay = document.querySelector('[data-mobile-search]');
    const willOpen = searchOverlay?.hasAttribute('hidden');
    closeMobileOverlays();
    if (!willOpen) {
      return;
    }
    searchOverlay?.removeAttribute('hidden');
    window.setTimeout(() => {
      document.querySelector('[data-mobile-search-input]')?.focus();
    }, 0);
  });

  document.querySelector('[data-site-header]')?.addEventListener('click', (event) => {
    const searchOverlay = document.querySelector('[data-mobile-search]');
    if (searchOverlay?.hasAttribute('hidden')) {
      return;
    }
    if (event.target.closest('[data-mobile-search-toggle], .mobile-search-panel')) {
      return;
    }
    closeMobileOverlays();
  });

  document.querySelector('[data-account-menu-toggle]')?.addEventListener('click', () => {
    const accountMenu = document.querySelector('[data-account-menu]');
    const willOpen = accountMenu?.hasAttribute('hidden');
    closeMobileOverlays();
    if (willOpen) {
      accountMenu?.removeAttribute('hidden');
      document.querySelector('[data-account-menu-toggle]')?.setAttribute('aria-expanded', 'true');
    }
  });

  document.querySelectorAll('[data-mobile-overlay-close]').forEach((element) => {
    element.addEventListener('click', closeMobileOverlays);
  });

  document.querySelector('[data-all-categories-open]')?.addEventListener('click', () => {
    isAllCategoriesSheetOpen = true;
    closeMobileOverlays();
    render();
  });

  document.querySelectorAll('[data-all-categories-close]').forEach((element) => {
    element.addEventListener('click', () => {
      isAllCategoriesSheetOpen = false;
      openAllCategoriesGroups = [];
      render();
    });
  });

  document.querySelectorAll('[data-all-categories-group-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const slug = button.getAttribute('data-all-categories-group-toggle');
      if (!slug) {
        return;
      }
      openAllCategoriesGroups = openAllCategoriesGroups.includes(slug)
        ? openAllCategoriesGroups.filter((item) => item !== slug)
        : [...openAllCategoriesGroups, slug];
      renderPreservingScroll(['.all-categories-sheet-content']);
    });
  });

  document.querySelectorAll('[data-all-categories-link]').forEach((link) => {
    link.addEventListener('click', () => {
      isAllCategoriesSheetOpen = false;
      openAllCategoriesGroups = [];
    });
  });

  document.querySelectorAll('[data-auth-open]').forEach((button) => {
    button.addEventListener('click', () => {
      authMode = button.getAttribute('data-auth-open') === 'register' ? 'register' : 'login';
      authStep = 'identifier';
      authIdentifier = '';
      authIdentifierError = '';
      authFeedback = '';
      closeMobileOverlays();
      render();
    });
  });

  document.querySelectorAll('[data-auth-close]').forEach((element) => {
    element.addEventListener('click', () => {
      authMode = null;
      authFeedback = '';
      authStep = 'identifier';
      authIdentifier = '';
      authIdentifierError = '';
      pendingAuthRedirect = '';
      render();
    });
  });

  document.querySelectorAll('[data-auth-switch]').forEach((button) => {
    button.addEventListener('click', () => {
      authMode = button.getAttribute('data-auth-switch') === 'register' ? 'register' : 'login';
      authStep = 'identifier';
      authIdentifier = '';
      authIdentifierError = '';
      authFeedback = '';
      render();
    });
  });

  document.querySelector('[data-auth-edit-identifier]')?.addEventListener('click', () => {
    authStep = 'identifier';
    authFeedback = '';
    authIdentifierError = '';
    render();
  });

  document.querySelector('[data-password-toggle]')?.addEventListener('click', () => {
    const passwordInput = document.querySelector('[data-auth-password]');
    const toggleButton = document.querySelector('[data-password-toggle]');
    if (!passwordInput) {
      return;
    }
    const shouldShowPassword = passwordInput.type === 'password';
    passwordInput.type = shouldShowPassword ? 'text' : 'password';
    if (toggleButton) {
      toggleButton.setAttribute('aria-label', shouldShowPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
      toggleButton.setAttribute('aria-pressed', shouldShowPassword ? 'true' : 'false');
      toggleButton.innerHTML = icon(shouldShowPassword ? 'eye-off' : 'eye', 'h-5 w-5');
    }
  });

  document.querySelector('[data-auth-identifier]')?.addEventListener('input', (event) => {
    authIdentifier = event.currentTarget.value;
    authIdentifierError = '';
    event.currentTarget.classList.remove('is-error');
    event.currentTarget.removeAttribute('aria-invalid');
    event.currentTarget.removeAttribute('aria-describedby');
    document.querySelector('#auth-identifier-error')?.remove();
  });

  document.querySelector('[data-auth-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (authStep === 'identifier') {
      const identifierInput = event.currentTarget.querySelector('[data-auth-identifier]');
      authIdentifier = identifierInput?.value.trim() || '';
      if (!authIdentifier) {
        authIdentifierError = 'Email atau nomor ponsel wajib diisi.';
        authFeedback = '';
        render();
        return;
      }
      if (authMode === 'register') {
        completeAuthentication();
        render();
        return;
      }
      authIdentifierError = '';
      authStep = 'password';
      authFeedback = '';
      render();
      return;
    }
    if (authMode === 'login' && authStep === 'password') {
      completeAuthentication();
      render();
      return;
    }
    authFeedback = authMode === 'register'
      ? 'Akun berhasil dibuat untuk prototype ini.'
      : 'Berhasil masuk untuk prototype ini.';
    render();
  });

  document.querySelectorAll('[data-auth-provider], [data-auth-google]').forEach((button) => {
    button.addEventListener('click', () => {
      completeAuthentication();
      render();
    });
  });

  document.querySelectorAll('[data-auth-logout]').forEach((button) => {
    button.addEventListener('click', () => {
      isAuthenticated = false;
      pendingAuthRedirect = '';
      pendingWishlistProductId = null;
      pendingAddressManagerOpen = false;
      closeMobileOverlays();
      render();
    });
  });

  if (mobileCheckoutBarController) {
    mobileCheckoutBarController.abort();
    mobileCheckoutBarController = null;
  }
  const mobileCheckoutBar = document.querySelector('[data-mobile-checkout-bar]');
  if (mobileCheckoutBar) {
    mobileCheckoutBarController = new AbortController();
    const syncMobileCheckoutBar = () => {
      const summary = document.querySelector('.checkout-summary');
      const summaryRect = summary?.getBoundingClientRect();
      const summaryVisible = Boolean(summaryRect && summaryRect.top < window.innerHeight - 72);
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 72;
      mobileCheckoutBar.classList.toggle('is-hidden', summaryVisible || nearBottom);
    };
    syncMobileCheckoutBar();
    window.addEventListener('scroll', syncMobileCheckoutBar, {
      passive: true,
      signal: mobileCheckoutBarController.signal,
    });
    window.addEventListener('resize', syncMobileCheckoutBar, {
      signal: mobileCheckoutBarController.signal,
    });
  }

  document.querySelectorAll('[data-search-field]').forEach((field) => {
    const input = field.querySelector('[data-search-input]');
    const clearButton = field.querySelector('[data-search-clear]');
    if (!input || !clearButton) {
      return;
    }
    const syncSearchState = () => {
      field.classList.toggle('has-value', Boolean(input.value.trim()));
    };
    input.addEventListener('input', syncSearchState);
    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') {
        return;
      }
      event.preventDefault();
      const nextUrl = searchUrl(input.value);
      document.querySelector('[data-mobile-search]')?.setAttribute('hidden', '');
      searchVisibleCount = CATEGORY_PAGE_SIZE;
      isSearchLoading = false;
      window.history.pushState(null, '', nextUrl);
      render();
    });
    clearButton.addEventListener('click', (event) => {
      event.preventDefault();
      input.value = '';
      syncSearchState();
      input.focus();
    });
    syncSearchState();
  });

  const updateSearchParam = (key, value) => {
    const params = searchParams();
    const nextUrl = searchUrl(params.query, {
      filterCategory: params.category,
      filterType: params.type,
      sort: params.sort,
      [key]: value,
    });
    searchVisibleCount = CATEGORY_PAGE_SIZE;
    isSearchLoading = false;
    window.history.pushState(null, '', nextUrl);
    render();
  };

  document.querySelector('[data-search-load-more]')?.addEventListener('click', () => {
    if (isSearchLoading) {
      return;
    }

    const totalProducts = searchProductResults().length;
    isSearchLoading = true;
    render();

    window.setTimeout(() => {
      searchVisibleCount = Math.min(searchVisibleCount + CATEGORY_PAGE_SIZE, totalProducts);
      isSearchLoading = false;
      render();
    }, 520);
  });

  document.querySelectorAll('[data-search-filter-open]').forEach((button) => {
    button.addEventListener('click', () => {
      activeSearchFilter = button.getAttribute('data-search-filter-open') || '';
      render();
    });
  });

  document.querySelectorAll('[data-search-filter-checkbox]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const input = event.currentTarget;
      const modal = input.closest('[data-search-filter-modal]');
      const allInput = modal?.querySelector('[data-search-filter-checkbox][value="all"]');
      const itemInputs = [...(modal?.querySelectorAll('[data-search-filter-checkbox]:not([value="all"])') || [])];

      if (input.value === 'all') {
        itemInputs.forEach((itemInput) => {
          itemInput.checked = false;
        });
      } else {
        if (input.checked && allInput) {
          allInput.checked = false;
        }
        if (allInput && !itemInputs.some((itemInput) => itemInput.checked)) {
          allInput.checked = true;
        }
      }
    });
  });

  document.querySelector('[data-search-filter-apply]')?.addEventListener('click', () => {
    const modal = document.querySelector('[data-search-filter-modal]');
    const checkedValues = [...modal.querySelectorAll('[data-search-filter-checkbox]:checked')]
      .map((input) => input.value)
      .filter((value) => value !== 'all');
    const filterName = activeSearchFilter;
    activeSearchFilter = '';
    updateSearchParam(filterName, checkedValues.join(','));
  });

  document.querySelectorAll('[data-search-filter-close]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      activeSearchFilter = '';
      render();
    });
  });

  document.querySelector('[data-search-sort]')?.addEventListener('change', (event) => {
    searchSort = event.target.value || 'relevance';
    updateSearchParam('sort', searchSort);
  });

  const rubricMenu = document.querySelector('[data-rubric-menu]');
  const rubricToggle = document.querySelector('[data-rubric-toggle]');
  const activateRubricCategory = (slug) => {
    document.querySelectorAll('[data-rubric-parent]').forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('data-rubric-parent') === slug);
    });
    document.querySelectorAll('[data-rubric-category-panel]').forEach((panel) => {
      panel.classList.toggle('is-active', panel.getAttribute('data-rubric-category-panel') === slug);
    });
  };

  document.querySelectorAll('[data-rubric-parent]').forEach((link) => {
    const slug = link.getAttribute('data-rubric-parent');
    link.addEventListener('mouseenter', () => activateRubricCategory(slug));
    link.addEventListener('focus', () => activateRubricCategory(slug));
  });

  rubricMenu?.addEventListener('mouseenter', () => {
    rubricToggle?.setAttribute('aria-expanded', 'true');
  });

  rubricMenu?.addEventListener('mouseleave', () => {
    rubricToggle?.setAttribute('aria-expanded', 'false');
  });

  if (!document.body.dataset.outsideClickBound) {
    document.addEventListener('click', (event) => {
      const activeRubricMenu = document.querySelector('[data-rubric-menu]');
      const activeRubricToggle = document.querySelector('[data-rubric-toggle]');
      if (!activeRubricMenu?.contains(event.target)) {
        activeRubricMenu?.classList.remove('is-open');
        activeRubricToggle?.setAttribute('aria-expanded', 'false');
      }

      const activeShippingDropdown = document.querySelector('.checkout-shipping-dropdown');
      if (isShippingDropdownOpen && !activeShippingDropdown?.contains(event.target)) {
        isShippingDropdownOpen = false;
        render();
      }
    });
    document.body.dataset.outsideClickBound = 'true';
  }

  document.querySelectorAll('[data-carousel]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.getAttribute('data-carousel');
      const nextSlide =
        direction === 'next'
          ? (currentSlide + 1) % heroSlides.length
          : (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      transitionToSlide(nextSlide);
      startCarouselTimer();
    });
  });

  document.querySelectorAll('[data-slide-index]').forEach((button) => {
    button.addEventListener('click', () => {
      transitionToSlide(Number(button.getAttribute('data-slide-index') || 0));
      startCarouselTimer();
    });
  });

  document.querySelector('[data-category-load-more]')?.addEventListener('click', (event) => {
    const slug = event.currentTarget.getAttribute('data-category-load-more') || 'buku';
    if (categoryMobileLoading[slug]) {
      return;
    }

    const totalProducts = categoryProducts(slug).length;
    const currentVisibleCount = categoryMobileVisibleCounts[slug] || CATEGORY_PAGE_SIZE;
    categoryMobileLoading[slug] = true;
    render();

    window.setTimeout(() => {
      categoryMobileVisibleCounts[slug] = Math.min(currentVisibleCount + CATEGORY_PAGE_SIZE, totalProducts);
      categoryMobileLoading[slug] = false;
      render();
    }, 520);
  });

  document.querySelector('[data-collection-load-more]')?.addEventListener('click', (event) => {
    const slug = event.currentTarget.getAttribute('data-collection-load-more') || 'terlaris';
    if (collectionMobileLoading[slug]) {
      return;
    }

    const totalProducts = collectionProducts(slug).length;
    const currentVisibleCount = collectionMobileVisibleCounts[slug] || CATEGORY_PAGE_SIZE;
    collectionMobileLoading[slug] = true;
    render();

    window.setTimeout(() => {
      collectionMobileVisibleCounts[slug] = Math.min(currentVisibleCount + CATEGORY_PAGE_SIZE, totalProducts);
      collectionMobileLoading[slug] = false;
      render();
    }, 520);
  });

  document.querySelector('[data-home-latest-load-more]')?.addEventListener('click', () => {
    if (isHomeLatestLoading) {
      return;
    }

    const totalProducts = homepageLatestProducts().length;
    isHomeLatestLoading = true;
    render();

    window.setTimeout(() => {
      homeLatestVisibleCount = Math.min(homeLatestVisibleCount + HOME_LATEST_PAGE_SIZE, totalProducts);
      isHomeLatestLoading = false;
      render();
    }, 520);
  });

  document.querySelector('[data-wishlist-load-more]')?.addEventListener('click', () => {
    if (isWishlistLoading) {
      return;
    }

    const totalProducts = sortedWishlistProducts().length;
    isWishlistLoading = true;
    render();

    window.setTimeout(() => {
      wishlistMobileVisibleCount = Math.min(wishlistMobileVisibleCount + CATEGORY_PAGE_SIZE, totalProducts);
      isWishlistLoading = false;
      render();
    }, 520);
  });

  document.querySelector('[data-wishlist-sort]')?.addEventListener('change', (event) => {
    wishlistSort = event.target.value || 'newest';
    wishlistMobileVisibleCount = CATEGORY_PAGE_SIZE;
    const params = new URLSearchParams(window.location.search);
    params.delete('page');
    const query = params.toString();
    history.replaceState(null, '', `${query ? `?${query}` : window.location.pathname}#wishlist`);
    render();
  });

  document.querySelectorAll('[data-select-product]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const productId = link.getAttribute('data-select-product');
      const product = findProductById(productId);
      if (!product) {
        return;
      }
      selectedProductId = product.id;
      quantity = 1;
      selectedProductImageIndex = 0;
      shouldUseInitialProductImage = true;
      selectedProductFormats = sortProductLabels((link.getAttribute('data-product-formats') || '').split('|').filter(Boolean));
      if (!selectedProductFormats.length) {
        selectedProductFormats = sortProductLabels(productFormatBadges(product));
      }
      selectedProductFormat = selectedProductFormats[0];
      selectedProductPeriod = productPeriodOptions(product)[0] || '';
      selectedProductImageIndex = product.id === 'source-18' ? 0 : productFormatImageIndex(product, selectedProductFormat);
      isProductDescriptionExpanded = false;
      isPaymentTermsExpanded = false;
      isPurchaseSheetOpen = false;
      shouldAnimatePurchaseSheet = false;
      shouldScrollProductToTop = true;
      window.history.pushState(null, '', link.href);
      render();
    });
  });

  document.querySelector('[data-hero-carousel]')?.addEventListener('mouseenter', () => {
    carouselPaused = true;
  });

  document.querySelector('[data-hero-carousel]')?.addEventListener('mouseleave', () => {
    carouselPaused = false;
  });

  document.querySelector('[data-hero-carousel]')?.addEventListener('focusin', () => {
    carouselPaused = true;
  });

  document.querySelector('[data-hero-carousel]')?.addEventListener('focusout', () => {
    carouselPaused = false;
  });

  const heroCarouselElement = document.querySelector('[data-hero-carousel]');
  if (heroCarouselElement) {
    let heroSwipeStartX = 0;
    let heroSwipeStartY = 0;
    let isHeroSwiping = false;
    let shouldSuppressHeroClick = false;

    const isMobileHeroSwipe = () => window.matchMedia('(max-width: 640px)').matches;

    heroCarouselElement.addEventListener('pointerdown', (event) => {
      if (!isMobileHeroSwipe()) {
        return;
      }

      heroSwipeStartX = event.clientX;
      heroSwipeStartY = event.clientY;
      isHeroSwiping = true;
    });

    heroCarouselElement.addEventListener('pointerup', (event) => {
      if (!isHeroSwiping) {
        return;
      }

      isHeroSwiping = false;
      const deltaX = event.clientX - heroSwipeStartX;
      const deltaY = event.clientY - heroSwipeStartY;
      if (Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
        return;
      }

      shouldSuppressHeroClick = true;
      const nextSlide =
        deltaX < 0
          ? (currentSlide + 1) % heroSlides.length
          : (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      transitionToSlide(nextSlide);
      startCarouselTimer();

      window.setTimeout(() => {
        shouldSuppressHeroClick = false;
      }, 360);
    });

    heroCarouselElement.addEventListener('pointercancel', () => {
      isHeroSwiping = false;
    });

    heroCarouselElement.addEventListener(
      'click',
      (event) => {
        if (!shouldSuppressHeroClick) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
      },
      true,
    );
  }

  document.querySelectorAll('[data-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-qty');
      const product = getSelectedProduct();
      if (isLockedSubscriptionProduct(product)) {
        quantity = 1;
        shouldAnimatePurchaseSheet = false;
        render();
        return;
      }
      const maxQuantity = Math.max(Math.min(product.stock, 10), 1);
      quantity = action === 'plus' ? Math.min(quantity + 1, maxQuantity) : Math.max(quantity - 1, 1);
      shouldAnimatePurchaseSheet = false;
      render();
    });
  });

  document.querySelectorAll('[data-cart-preview-tab]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      cartPreviewActiveTab = button.getAttribute('data-cart-preview-tab') || 'belanja';
      isCartPreviewPinned = true;
      render();
    });
  });

  document.querySelector('.header-cart-hover')?.addEventListener('mouseleave', () => {
    if (!isCartPreviewPinned) {
      return;
    }
    isCartPreviewPinned = false;
    render();
  });

  document.querySelectorAll('[data-cart-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      cartActiveTab = button.getAttribute('data-cart-tab') || 'belanja';
      render();
    });
  });

  document.querySelectorAll('[data-cart-select-all]').forEach((input) => {
    input.addEventListener('change', (event) => {
      const isChecked = event.currentTarget.checked;
      activeCartTabItems().forEach((item) => {
        cartTabSelectionOverrides[cartActiveTab][item.cartId] = isChecked;
      });
      render();
    });
  });

  document.querySelectorAll('[data-cart-select-item]').forEach((input) => {
    input.addEventListener('change', (event) => {
      const cartId = event.currentTarget.getAttribute('data-cart-select-item');
      cartTabSelectionOverrides[cartActiveTab][cartId] = event.currentTarget.checked;
      render();
    });
  });

  document.querySelectorAll('[data-cart-delete]').forEach((button) => {
    button.addEventListener('click', () => {
      const cartId = button.getAttribute('data-cart-delete');
      cartItems = cartItems.map((item) =>
        item.cartId === cartId ? { ...item, visible: false, selected: false } : item,
      );
      render();
    });
  });

  document.querySelectorAll('[data-cart-delete-selected]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!activeCartTabSelectedItems().length) {
        return;
      }
      isCartDeleteConfirmOpen = true;
      render();
    });
  });

  document.querySelector('[data-cart-summary-open]')?.addEventListener('click', () => {
    isCartSummarySheetOpen = true;
    render();
  });

  document.querySelectorAll('[data-cart-summary-close]').forEach((button) => {
    button.addEventListener('click', () => {
      isCartSummarySheetOpen = false;
      render();
    });
  });

  document.querySelectorAll('[data-cart-delete-cancel]').forEach((button) => {
    button.addEventListener('click', () => {
      isCartDeleteConfirmOpen = false;
      render();
    });
  });

  document.querySelector('[data-cart-delete-confirm-button]')?.addEventListener('click', () => {
    const selectedIds = new Set(activeCartTabSelectedItems().map((item) => item.cartId));
    cartItems = cartItems.map((item) =>
      selectedIds.has(item.cartId) ? { ...item, visible: false, selected: false } : item,
    );
    isCartDeleteConfirmOpen = false;
    render();
  });

  document.querySelectorAll('[data-cart-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const cartId = button.getAttribute('data-cart-qty');
      const action = button.getAttribute('data-cart-qty-action');
      cartItems = cartItems.map((item) => {
        if (item.cartId !== cartId) {
          return item;
        }
        if (isSubscriptionCartItem(item)) {
          return { ...item, quantity: 1 };
        }
        const product = cartItemProduct(item);
        const maxQuantity = Math.max(Math.min(product.stock, 10), 1);
        const nextQuantity = action === 'plus'
          ? Math.min(item.quantity + 1, maxQuantity)
          : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: nextQuantity };
      });
      render();
    });
  });

  document.querySelectorAll('[data-checkout-cart-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const cartId = button.getAttribute('data-checkout-cart-qty');
      const action = button.getAttribute('data-cart-qty-action');
      cartItems = cartItems.map((item) => {
        if (item.cartId !== cartId) {
          return item;
        }
        if (isSubscriptionCartItem(item)) {
          return { ...item, quantity: 1 };
        }
        const product = cartItemProduct(item);
        const maxQuantity = Math.max(Math.min(product.stock, 10), 1);
        const nextQuantity = action === 'plus'
          ? Math.min(item.quantity + 1, maxQuantity)
          : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: nextQuantity };
      });
      render();
    });
  });

  document.querySelectorAll('[data-cart-checkout]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const cartId = event.currentTarget.getAttribute('data-cart-checkout');
      const item = cartItems.find((cartItem) => cartItem.cartId === cartId);
      if (!item) {
        return;
      }
      const product = cartItemProduct(item);
      selectedProductId = product.id;
      selectedProductFormats = sortProductLabels(item.formats);
      selectedProductFormat = item.type;
      selectedProductPeriod = item.period || productPeriodOptions(product)[0] || '';
      quantity = cartItemQuantity(item);

      if (!isAuthenticated) {
        event.preventDefault();
        openLoginForRedirect(event.currentTarget.href);
        render();
      }
    });
  });

  document.querySelectorAll('[data-buy-now-trigger]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!isAuthenticated) {
        event.preventDefault();
        openLoginForRedirect(event.currentTarget.href);
        isPurchaseSheetOpen = false;
        shouldAnimatePurchaseSheet = false;
        render();
        return;
      }
      if (
        !window.matchMedia('(max-width: 640px)').matches ||
        event.currentTarget.closest('[data-purchase-sheet]')
      ) {
        return;
      }
      event.preventDefault();
      openPurchaseSheet('buy');
    });
  });

  document.querySelectorAll('[data-add-to-cart]').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (isLockedSubscriptionProduct(getSelectedProduct())) {
        event.preventDefault();
        return;
      }

      if (
        event.currentTarget.classList.contains('pdp-cart-action') &&
        window.matchMedia('(max-width: 640px)').matches
      ) {
        return;
      }

      event.preventDefault();
      const target = event.currentTarget;
      if (target.dataset.cartAdding === 'true') {
        return;
      }

      target.dataset.cartAdding = 'true';
      target.classList.add('is-adding');
      const label = target.querySelector('span');
      const previousLabel = label?.textContent;
      if (label) {
        label.textContent = 'Menambahkan...';
      }

      window.setTimeout(() => {
        addSelectedProductToCart();
        target.classList.remove('is-adding');
        target.classList.add('is-added');
        if (label) {
          label.textContent = 'Ditambahkan';
        }

        window.setTimeout(() => {
          if (target.hasAttribute('data-purchase-sheet-add')) {
            isPurchaseSheetOpen = false;
            shouldAnimatePurchaseSheet = false;
          }
          if (label && previousLabel) {
            label.textContent = previousLabel;
          }
          render();
        }, 420);
      }, 260);
    });
  });

  document.querySelector('.pdp-cart-action')?.addEventListener('click', (event) => {
    if (!window.matchMedia('(max-width: 640px)').matches) {
      return;
    }
    if (isLockedSubscriptionProduct(getSelectedProduct())) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    openPurchaseSheet('cart');
  });

  document.querySelectorAll('[data-purchase-sheet-close]').forEach((button) => {
    button.addEventListener('click', () => {
      closePurchaseSheet();
    });
  });

  document.querySelectorAll('input[name="shipping"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      selectedShipping = event.target.value;
      render();
    });
  });

  document.querySelector('[data-shipping-toggle]')?.addEventListener('click', (event) => {
    event.stopPropagation();
    isShippingDropdownOpen = !isShippingDropdownOpen;
    render();
  });

  document.querySelectorAll('[data-shipping-select]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedShipping = button.getAttribute('data-shipping-select') || selectedShipping;
      isShippingDropdownOpen = false;
      render();
    });
  });

  document.querySelectorAll('input[name="paymentPlan"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      const cartTab = checkoutCartSourceTab();
      if (cartTab) {
        selectedPaymentPlan = cartTab === 'langganan' ? 'recurring' : 'once';
        selectedPaymentMethod = selectedPaymentPlan === 'once' ? 'bca-va' : 'credit-card';
        isPaymentTermsExpanded = false;
        render();
        return;
      }
      selectedPaymentPlan = event.target.value;
      selectedPaymentMethod = selectedPaymentPlan === 'once' ? 'bca-va' : 'credit-card';
      isPaymentTermsExpanded = false;
      syncAutoRenewPromo(checkoutOrderItems(), { notify: true });
      render();
    });
  });

  document.querySelectorAll('input[name="paymentMethod"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      selectedPaymentMethod = event.target.value;
      render();
    });
  });

  document.querySelectorAll('[data-address-manager-open]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!isAuthenticated) {
        pendingAddressManagerOpen = true;
        authMode = 'login';
        authStep = 'identifier';
        authIdentifier = '';
        authIdentifierError = '';
        authFeedback = '';
        closeMobileOverlays();
        render();
        return;
      }

      isAddressManagerOpen = true;
      addressFormMode = 'list';
      editingAddressId = null;
      addressDraft = null;
      openAddressMenuId = null;
      render();
    });
  });

  document.querySelector('[data-address-empty-add]')?.addEventListener('click', () => {
    isAddressManagerOpen = true;
    addressFormMode = 'add';
    editingAddressId = null;
    openAddressMenuId = null;
    addressDraft = {
      label: '',
      recipient: '',
      phone: '',
      district: '',
      city: '',
      province: '',
      address: '',
      courierNote: '',
    };
    render();
  });

  document.querySelectorAll('[data-address-manager-close]').forEach((button) => {
    button.addEventListener('click', () => {
      isAddressManagerOpen = false;
      addressFormMode = 'list';
      editingAddressId = null;
      addressDraft = null;
      openAddressMenuId = null;
      addressDeleteCandidateId = null;
      render();
    });
  });

  document.querySelectorAll('[data-address-select]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedAddressId = button.getAttribute('data-address-select') || selectedAddressId;
      isAddressManagerOpen = false;
      addressFormMode = 'list';
      openAddressMenuId = null;
      showSnackbar('Alamat pengiriman berhasil dipilih.', 'success');
      render();
    });
  });

  document.querySelectorAll('[data-address-menu-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const addressId = button.getAttribute('data-address-menu-toggle');
      openAddressMenuId = openAddressMenuId === addressId ? null : addressId;
      render();
    });
  });

  document.querySelector('[data-address-add-open]')?.addEventListener('click', () => {
    addressFormMode = 'add';
    editingAddressId = null;
    addressDraft = {
      label: '',
      recipient: '',
      phone: '',
      district: '',
      city: '',
      province: '',
      address: '',
      courierNote: '',
    };
    render();
  });

  document.querySelectorAll('[data-address-edit]').forEach((button) => {
    button.addEventListener('click', () => {
      const address = checkoutAddresses.find((item) => item.id === button.getAttribute('data-address-edit'));
      if (!address) {
        return;
      }
      addressFormMode = 'edit';
      editingAddressId = address.id;
      addressDraft = { ...address };
      openAddressMenuId = null;
      render();
    });
  });

  document.querySelectorAll('[data-address-delete]').forEach((button) => {
    button.addEventListener('click', () => {
      addressDeleteCandidateId = button.getAttribute('data-address-delete');
      openAddressMenuId = null;
      render();
    });
  });

  document.querySelectorAll('[data-address-delete-cancel]').forEach((button) => {
    button.addEventListener('click', () => {
      addressDeleteCandidateId = null;
      render();
    });
  });

  document.querySelector('[data-address-delete-confirm-button]')?.addEventListener('click', () => {
    if (!addressDeleteCandidateId) {
      addressDeleteCandidateId = null;
      render();
      return;
    }

    const deleteIndex = checkoutAddresses.findIndex((address) => address.id === addressDeleteCandidateId);
    if (deleteIndex >= 0) {
      checkoutAddresses.splice(deleteIndex, 1);
    }
    if (selectedAddressId === addressDeleteCandidateId) {
      selectedAddressId = checkoutAddresses[0]?.id || '';
    }
    addressDeleteCandidateId = null;
    openAddressMenuId = null;
    showSnackbar('Alamat pengiriman berhasil dihapus.', 'success');
    render();
  });

  document.querySelectorAll('[data-address-field]').forEach((field) => {
    const updateAddressField = () => {
      const key = field.getAttribute('data-address-field');
      if (!key) {
        return;
      }
      addressDraft = addressDraft || {};
      addressDraft[key] = field.value;

      if (key === 'province') {
        const cityOptions = addressCityOptions(field.value);
        addressDraft.city = cityOptions[0] || '';
        addressDraft.district = addressDistrictOptions(field.value, addressDraft.city)[0] || '';
        render();
        return;
      }

      if (key === 'city') {
        addressDraft.district = addressDistrictOptions(addressDraft.province, field.value)[0] || '';
        render();
      }
    };

    field.addEventListener(field.tagName === 'SELECT' ? 'change' : 'input', updateAddressField);
  });

  document.querySelector('[data-address-cancel]')?.addEventListener('click', () => {
    addressFormMode = 'list';
    editingAddressId = null;
    addressDraft = null;
    render();
  });

  document.querySelector('[data-address-save]')?.addEventListener('click', () => {
    const draft = addressDraft || {};
    const normalizedAddress = {
      id: editingAddressId || `address-${Date.now()}`,
      label: draft.label?.trim() || 'Alamat',
      recipient: draft.recipient?.trim() || 'Penerima',
      phone: draft.phone?.trim() || 'Nomor belum diisi',
      district: draft.district?.trim() || '',
      city: draft.city?.trim() || '',
      province: draft.province?.trim() || '',
      address: draft.address?.trim() || 'Alamat belum lengkap',
      courierNote: draft.courierNote?.trim() || '',
    };

    const isEditingAddress = addressFormMode === 'edit';
    if (isEditingAddress) {
      const addressIndex = checkoutAddresses.findIndex((address) => address.id === editingAddressId);
      if (addressIndex >= 0) {
        checkoutAddresses[addressIndex] = normalizedAddress;
      }
    } else {
      checkoutAddresses.push(normalizedAddress);
    }

    selectedAddressId = normalizedAddress.id;
    isAddressManagerOpen = false;
    addressFormMode = 'list';
    editingAddressId = null;
    addressDraft = null;
    showSnackbar(isEditingAddress ? 'Alamat pengiriman berhasil diubah.' : 'Alamat pengiriman berhasil ditambahkan.', 'success');
    render();
  });

  document.querySelector('[data-promo-input]')?.addEventListener('input', (event) => {
    promoDraft = event.target.value;
    promoError = '';
  });

  document.querySelectorAll('[data-promo-modal-open]').forEach((button) => {
    button.addEventListener('click', () => {
      isPromoModalOpen = true;
      promoError = '';
      render();
    });
  });

  document.querySelectorAll('[data-promo-modal-close]').forEach((button) => {
    button.addEventListener('click', () => {
      isPromoModalOpen = false;
      promoError = '';
      render();
    });
  });

  document.querySelectorAll('[data-promo-suggestion]').forEach((button) => {
    button.addEventListener('click', () => {
      promoDraft = button.getAttribute('data-promo-suggestion') || '';
      promoError = '';
      render();
    });
  });

  document.querySelectorAll('[data-promo-remove]').forEach((button) => {
    button.addEventListener('click', () => {
      appliedPromoCode = '';
      promoDraft = '';
      promoError = '';
      isPromoModalOpen = false;
      render();
    });
  });

  document.querySelector('[data-promo-apply]')?.addEventListener('click', () => {
    const code = promoDraft.trim().toUpperCase();
    if (!code) {
      promoError = 'Masukkan kode promo terlebih dahulu.';
      render();
      return;
    }

    if (!promoCatalog[code]) {
      appliedPromoCode = '';
      promoError = 'Kode promo belum tersedia untuk prototype ini.';
      render();
      return;
    }

    appliedPromoCode = code;
    promoDraft = '';
    promoError = '';
    isPromoModalOpen = false;
    render();
  });

  document.querySelector('[data-payment-modal-open]')?.addEventListener('click', () => {
    isPaymentMethodModalOpen = true;
    pendingPaymentMethod = null;
    openPaymentGroups = [];
    render();
  });

  document.querySelectorAll('[data-payment-modal-close]').forEach((button) => {
    button.addEventListener('click', () => {
      isPaymentMethodModalOpen = false;
      pendingPaymentMethod = null;
      openPaymentGroups = [];
      render();
    });
  });

  document.querySelectorAll('[data-payment-group-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.getAttribute('data-payment-group-toggle');
      if (!group) {
        return;
      }
      openPaymentGroups = openPaymentGroups.includes(group)
        ? openPaymentGroups.filter((item) => item !== group)
        : [...openPaymentGroups, group];
      renderPreservingScroll(['.payment-modal-groups']);
    });
  });

  document.querySelectorAll('[data-payment-modal-select]').forEach((button) => {
    button.addEventListener('click', () => {
      const methodId = button.getAttribute('data-payment-modal-select');
      pendingPaymentMethod = pendingPaymentMethod === methodId ? null : methodId;
      const selectedGroup = paymentGroupForMethod(methodId);
      if (selectedGroup && !openPaymentGroups.includes(selectedGroup)) {
        openPaymentGroups = [...openPaymentGroups, selectedGroup];
      }
      renderPreservingScroll(['.payment-modal-groups']);
    });
  });

  document.querySelector('[data-payment-modal-confirm]')?.addEventListener('click', () => {
    if (!pendingPaymentMethod) {
      return;
    }
    selectedPaymentPlan = 'once';
    selectedPaymentMethod = pendingPaymentMethod;
    pendingPaymentMethod = null;
    isPaymentMethodModalOpen = false;
    openPaymentGroups = [];
    render();
  });

  document.querySelectorAll('[data-product-image]').forEach((button) => {
    button.addEventListener('click', () => {
      syncProductGallery(Number(button.getAttribute('data-product-image') || 0));
    });
  });

  const productGallerySwipe = document.querySelector('[data-pdp-gallery-swipe]');
  if (productGallerySwipe) {
    let pointerSwipeStartX = 0;
    let pointerSwipeStartY = 0;
    let pointerSwipeStartIndex = 0;
    let activeGalleryPointerId = null;
    let isPointerSwiping = false;

    const activeGalleryIndex = () => {
      const currentImage = Number(productGallerySwipe.getAttribute('data-current-image'));
      if (Number.isFinite(currentImage)) {
        return currentImage;
      }

      const activeThumb = document.querySelector('.pdp-gallery-thumb.is-active');
      const activeThumbIndex = Number(activeThumb?.getAttribute('data-product-image'));
      return Number.isFinite(activeThumbIndex) ? activeThumbIndex : selectedProductImageIndex;
    };

    const moveProductImage = (deltaX, deltaY, startIndex = activeGalleryIndex()) => {
      if (Math.abs(deltaX) < 44 || Math.abs(deltaX) <= Math.abs(deltaY)) {
        return false;
      }

      const galleryCount = Number(productGallerySwipe.getAttribute('data-gallery-count') || 1);
      if (galleryCount <= 1) {
        return false;
      }

      const currentIndex = Math.min(Math.max(startIndex, 0), galleryCount - 1);
      const direction = deltaX < 0 ? 1 : -1;
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), galleryCount - 1);
      if (nextIndex === currentIndex) {
        syncProductGallery(currentIndex);
        return false;
      }
      syncProductGallery(nextIndex);
      return true;
    };

    productGallerySwipe.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary) {
        return;
      }
      pointerSwipeStartX = event.clientX;
      pointerSwipeStartY = event.clientY;
      pointerSwipeStartIndex = activeGalleryIndex();
      activeGalleryPointerId = event.pointerId;
      isPointerSwiping = true;
      productGallerySwipe.setPointerCapture?.(event.pointerId);
    });

    productGallerySwipe.addEventListener('pointerup', (event) => {
      if (!isPointerSwiping || event.pointerId !== activeGalleryPointerId) {
        isPointerSwiping = false;
        return;
      }

      isPointerSwiping = false;
      activeGalleryPointerId = null;
      productGallerySwipe.releasePointerCapture?.(event.pointerId);
      moveProductImage(
        event.clientX - pointerSwipeStartX,
        event.clientY - pointerSwipeStartY,
        pointerSwipeStartIndex,
      );
    });

    productGallerySwipe.addEventListener('pointercancel', (event) => {
      if (event.pointerId !== activeGalleryPointerId) {
        return;
      }
      isPointerSwiping = false;
      activeGalleryPointerId = null;
    });
  }

  document.querySelectorAll('[data-product-format]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedProductFormat = button.getAttribute('data-product-format') || 'Fisik';
      selectedProductImageIndex = productFormatImageIndex(getSelectedProduct(), selectedProductFormat);
      shouldSkipNextRouteScroll = true;
      pendingScrollRestoreY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      replaceRouteParams('product');
      shouldAnimatePurchaseSheet = false;
      render();
    });
  });

  document.querySelectorAll('[data-product-period]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedProductPeriod = button.getAttribute('data-product-period') || '';
      shouldSkipNextRouteScroll = true;
      pendingScrollRestoreY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      replaceRouteParams('product');
      shouldAnimatePurchaseSheet = false;
      render();
    });
  });

  document.querySelector('[data-description-toggle]')?.addEventListener('click', () => {
    isProductDescriptionExpanded = !isProductDescriptionExpanded;
    render();
  });

  document.querySelector('[data-payment-terms-toggle]')?.addEventListener('click', () => {
    isPaymentTermsExpanded = !isPaymentTermsExpanded;
    render();
  });

  document.querySelector('[data-share-product]')?.addEventListener('click', () => {
    isShareModalOpen = true;
    isShareLinkCopied = false;
    render();
  });

  document.querySelectorAll('[data-share-close]').forEach((button) => {
    button.addEventListener('click', () => {
      isShareModalOpen = false;
      isShareLinkCopied = false;
      render();
    });
  });

  document.querySelector('[data-share-copy]')?.addEventListener('click', async (event) => {
    const shareUrl = event.currentTarget.getAttribute('data-share-copy') || window.location.href;
    try {
      await copyTextToClipboard(shareUrl);
      isShareLinkCopied = true;
      render();
    } catch {
      isShareLinkCopied = false;
    }
  });

  document.querySelectorAll('[data-wishlist]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const productId = button.getAttribute('data-wishlist');
      if (!productId) {
        return;
      }
      if (!isAuthenticated) {
        pendingWishlistProductId = productId;
        authMode = 'login';
        authStep = 'identifier';
        authIdentifier = '';
        authIdentifierError = '';
        authFeedback = '';
        closeMobileOverlays();
        render();
        return;
      }
      if (wishlist.has(productId)) {
        if (window.location.hash === '#wishlist') {
          const card = button.closest('.product-card');
          button.disabled = true;
          card?.classList.add('is-removing');
          window.setTimeout(() => {
            wishlist.delete(productId);
            wishlistSavedAt.delete(productId);
            showSnackbar('Produk dihapus dari wishlist.', 'info');
            render();
          }, 340);
          return;
        }
        wishlist.delete(productId);
        wishlistSavedAt.delete(productId);
        showSnackbar('Produk dihapus dari wishlist.', 'info');
      } else {
        wishlist.add(productId);
        wishlistSavedAt.set(productId, Date.now());
        showSnackbar('Produk ditambahkan ke wishlist.', 'success');
      }
      render();
    });
  });
}

function syncProductGallery(nextIndex) {
  const gallery = document.querySelector('[data-pdp-gallery-swipe]');
  const track = document.querySelector('[data-pdp-main-track]');
  const indicator = document.querySelector('[data-pdp-gallery-indicator]');
  const galleryCount = Number(gallery?.getAttribute('data-gallery-count') || 1);
  const normalizedIndex = Math.min(Math.max(Number(nextIndex) || 0, 0), Math.max(galleryCount - 1, 0));

  selectedProductImageIndex = normalizedIndex;
  gallery?.setAttribute('data-current-image', String(normalizedIndex));

  if (track) {
    track.style.transform = `translate3d(-${normalizedIndex * 100}%, 0, 0)`;
  }

  if (indicator) {
    indicator.textContent = `${normalizedIndex + 1}/${galleryCount}`;
    indicator.setAttribute('aria-label', `Gambar ${normalizedIndex + 1} dari ${galleryCount}`);
  }

  document.querySelectorAll('[data-product-image]').forEach((button) => {
    const buttonIndex = Number(button.getAttribute('data-product-image') || 0);
    const isActive = buttonIndex === normalizedIndex;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function syncProductDescriptionToggle() {
  const block = document.querySelector('.pdp-description-block');
  const content = document.querySelector('[data-pdp-description-content]');
  const toggle = document.querySelector('[data-description-toggle]');
  if (!block || !content || !toggle) {
    return;
  }

  const collapsedHeightValue = getComputedStyle(content)
    .getPropertyValue('--pdp-description-collapsed-height')
    .trim();
  const collapsedHeight = Number.parseFloat(collapsedHeightValue) || 220;
  const hasOverflow = content.scrollHeight > collapsedHeight + 2;
  block.classList.toggle('has-description-overflow', hasOverflow);
  toggle.hidden = !hasOverflow;
  toggle.setAttribute('aria-expanded', isProductDescriptionExpanded ? 'true' : 'false');
}

function scrollRouteToTopIfNeeded() {
  const locationKey = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (!lastRenderedLocationKey) {
    lastRenderedLocationKey = locationKey;
    return;
  }

  if (locationKey === lastRenderedLocationKey) {
    return;
  }

  if (shouldSkipNextRouteScroll) {
    shouldSkipNextRouteScroll = false;
    lastRenderedLocationKey = locationKey;
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  lastRenderedLocationKey = locationKey;
}

function render() {
  const route = window.location.hash.replace('#', '') || 'home';
  const app = document.querySelector('#app');
  if (route !== 'home') {
    isAllCategoriesSheetOpen = false;
  }
  if (route !== 'search') {
    activeSearchFilter = '';
  }
  if (route !== 'checkout' && appliedPromoCode === 'AUTORENEW10') {
    appliedPromoCode = '';
    autoPromoSnackbar = '';
  }

  if (route === 'product') {
    hydrateProductFromUrl();
    clearInterval(carouselTimer);
    app.innerHTML = productPage();
    replaceRouteParams('product');
    if (shouldScrollProductToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      shouldScrollProductToTop = false;
    }
  } else if (route === 'checkout') {
    hydrateProductFromUrl();
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    clearInterval(carouselTimer);
    app.innerHTML = checkoutPage();
    if (!new URLSearchParams(window.location.search).has('cartItems')) {
      replaceRouteParams('checkout');
    }
  } else if (route === 'cart') {
    hydrateProductFromUrl();
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    clearInterval(carouselTimer);
    app.innerHTML = cartPage();
    replaceRouteParams('cart');
  } else if (route === 'category') {
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    clearInterval(carouselTimer);
    app.innerHTML = categoryPage();
  } else if (route === 'collection') {
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    clearInterval(carouselTimer);
    app.innerHTML = collectionPage();
  } else if (route === 'wishlist') {
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    clearInterval(carouselTimer);
    app.innerHTML = wishlistPage();
  } else if (route === 'search') {
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    clearInterval(carouselTimer);
    app.innerHTML = searchPage();
  } else {
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    app.innerHTML = homePage();
    replaceRouteParams('home');
    startCarouselTimer();
  }

  app.insertAdjacentHTML('beforeend', authDialog());
  if (route !== 'checkout') {
    app.insertAdjacentHTML('beforeend', addressManagerModal());
    app.insertAdjacentHTML('beforeend', addressDeleteConfirmModal());
  }
  app.insertAdjacentHTML('beforeend', autoPromoSnackbarMarkup());
  bindEvents();
  if (autoPromoSnackbar) {
    window.clearTimeout(autoPromoSnackbarTimer);
    autoPromoSnackbarTimer = window.setTimeout(() => {
      autoPromoSnackbar = '';
      render();
    }, 2600);
  }
  window.requestAnimationFrame(syncProductDescriptionToggle);
  if (authMode) {
    window.requestAnimationFrame(() => {
      document.querySelector('[data-auth-autofocus]')?.focus();
    });
  }
  scrollRouteToTopIfNeeded();
  if (pendingScrollRestoreY !== null) {
    window.scrollTo({ top: pendingScrollRestoreY, left: 0, behavior: 'auto' });
    pendingScrollRestoreY = null;
  }
  if (pendingElementScrollRestores.length) {
    pendingElementScrollRestores.forEach(({ selector, scrollTop, scrollLeft }) => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
      }
    });
    pendingElementScrollRestores = [];
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('popstate', render);
render();
