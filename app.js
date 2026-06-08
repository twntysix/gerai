const products = [
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
    name: 'Buku',
    icon: 'book-open',
    count: '400+ produk',
    tone: 'bg-[#E1F0FF] text-kompas-royal',
  },
  {
    name: 'Merchandise',
    icon: 'shirt',
    count: '80+ item',
    tone: 'bg-[#FFF8D6] text-[#7A5700]',
  },
  {
    name: 'Langganan',
    icon: 'newspaper',
    count: 'Digital',
    tone: 'bg-[#EEFCD2] text-[#1A5D06]',
  },
  {
    name: 'Tiket',
    icon: 'ticket',
    count: 'Event & kelas',
    tone: 'bg-[#FFEECC] text-[#7A2100]',
  },
  {
    name: 'Bundling',
    icon: 'cart',
    count: 'Paket hemat',
    tone: 'bg-[#FFD6D6] text-kompas-red',
  },
];

let quantity = 1;
let selectedShipping = 'reguler';
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
let isPromoModalOpen = false;
let isPaymentMethodModalOpen = false;
let pendingPaymentMethod = null;
let currentSlide = 0;
let carouselTimer = null;
let carouselPaused = false;
let carouselTransitioning = false;
const HERO_SLIDE_DURATION = 6000;
let selectedProductId = products[0].id;
let selectedProductImageIndex = 0;
let selectedProductFormats = productFormatBadges(products[0]);
let selectedProductFormat = selectedProductFormats[0];
let isProductDescriptionExpanded = false;
let isPurchaseSheetOpen = false;
let purchaseSheetMode = 'buy';
let shouldAnimatePurchaseSheet = false;
let shouldScrollProductToTop = false;
let mobileCheckoutBarController = null;
const wishlist = new Set();

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

function roundVariantPrice(value) {
  return Math.max(0, Math.round(value / 1000) * 1000);
}

function productVariantPricing(product, type = selectedProductFormat) {
  const basePrice = product.price;
  const discountRatio =
    product.originalPrice && product.originalPrice > product.price
      ? product.originalPrice / product.price
      : null;
  const multipliers = {
    Bundling: 1,
    Fisik: product.category === 'Buku' || product.category === 'Merchandise' ? 1 : 0.72,
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

function routeUrl(route, productId = selectedProductId, type = selectedProductFormat, formats = selectedProductFormats) {
  const params = new URLSearchParams(window.location.search);

  if (route === 'product' || route === 'checkout') {
    params.set('product', productId);
    params.set('type', type);
    params.set('types', sortProductLabels(formats).join(','));
  } else {
    params.delete('product');
    params.delete('type');
    params.delete('types');
  }

  const query = params.toString();
  return `${query ? `?${query}` : window.location.pathname}#${route}`;
}

function replaceRouteParams(route = window.location.hash.replace('#', '') || 'home') {
  if (route !== 'product' && route !== 'checkout') {
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

  selectedProductId = product.id;
  const urlFormats = sortProductLabels((params.get('types') || '').split(',').filter(Boolean));
  selectedProductFormats = urlFormats.length ? urlFormats : sortProductLabels(productFormatBadges(product));

  const urlType = params.get('type');
  selectedProductFormat = selectedProductFormats.includes(urlType) ? urlType : selectedProductFormats[0];
}

function badge(label, variant = 'soft-blue', className = '') {
  return `<span class="badge badge-${variant} ${className}">${label}</span>`;
}

function productBadgeVariant(product) {
  const variants = {
    Buku: 'soft-blue',
    Langganan: 'soft-blue',
    Merchandise: 'soft-yellow',
    Tiket: 'soft-orange',
    Bundling: 'soft-orange',
  };

  return variants[product.category] || 'soft-black';
}

function productFormatBadges(product) {
  if (product.category === 'Langganan') {
    return ['Digital'];
  }

  if (product.category === 'Bundling') {
    return ['Bundling'];
  }

  return ['Fisik'];
}

function renderProductBadges(labels) {
  const variants = {
    Digital: 'soft-blue',
    Bundling: 'soft-orange',
    Fisik: 'soft-yellow',
  };

  return sortProductLabels(labels)
    .map((label) => badge(label, variants[label] || 'soft-black'))
    .join('');
}

function sortProductLabels(labels) {
  const priority = {
    Bundling: 1,
    Fisik: 2,
    Digital: 3,
  };

  return [...new Set(labels)]
    .sort((a, b) => (priority[a] || 99) - (priority[b] || 99))
}

function pickProducts(productIds) {
  return productIds.map((productId) => products.find((product) => product.id === productId)).filter(Boolean);
}

function catalogProducts() {
  const catalog = [...products, ...bundlingProducts(), ...latestProducts()].filter(Boolean);
  const unique = new Map();
  catalog.forEach((product) => {
    if (!unique.has(product.id)) {
      unique.set(product.id, product);
    }
  });
  return [...unique.values()];
}

function findProductById(productId) {
  return catalogProducts().find((product) => product.id === productId);
}

function getSelectedProduct() {
  return findProductById(selectedProductId) || products[0];
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

function formatAddressLine(address) {
  if (!address) {
    return '';
  }

  return [address.address, address.district, address.city, address.province].filter(Boolean).join(', ');
}

function getAppliedPromo() {
  return appliedPromoCode ? promoCatalog[appliedPromoCode] : null;
}

function productFormatOptions(product) {
  const labels = product.id === selectedProductId ? selectedProductFormats : productFormatBadges(product);
  return sortProductLabels(labels);
}

function normalizeSelectedFormat(product) {
  const formats = productFormatOptions(product);
  if (!formats.includes(selectedProductFormat)) {
    selectedProductFormat = formats[0];
  }
}

function relatedProducts() {
  return catalogProducts().filter((product) => product.id !== selectedProductId).slice(0, 4);
}

function productLongDescription(product) {
  return product.longDescription || `${product.description} Produk ini dipilih untuk menghadirkan pengalaman belanja Gerai Kompas yang ringkas, resmi, dan mudah dipahami. Informasi produk disusun agar pembeli dapat menilai harga, format, stok, dan manfaat produk sebelum melanjutkan ke checkout.`;
}

function productMetaLabel(product) {
  const labels = {
    Bundling: 'Paket resmi Gerai Kompas',
    Langganan: 'Harian Kompas dan Kompas.id',
    Merchandise: 'Official merchandise Kompas',
    Buku: 'Penerbit Buku Kompas',
  };

  return labels[product.category] || 'Produk resmi Gerai Kompas';
}

function latestProducts() {
  return products;
}

function bundlingProducts() {
  return pickProducts(['source-2', 'source-3', 'source-4', 'source-6']);
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
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"></path>',
    tag: '<path d="M20 12v7a2 2 0 0 1-2 2h-7L3 13V5a2 2 0 0 1 2-2h8z"></path><circle cx="8" cy="8" r="1.5"></circle>',
    edit:
      '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"></path>',
    trash:
      '<path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M6 7l1 14h10l1-14"></path><path d="M9 7V4h6v3"></path>',
    more:
      '<circle cx="5" cy="12" r="1.4"></circle><circle cx="12" cy="12" r="1.4"></circle><circle cx="19" cy="12" r="1.4"></circle>',
    share:
      '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.6 10.5 6.8-4"></path><path d="m8.6 13.5 6.8 4"></path>',
    plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
    minus: '<path d="M5 12h14"></path>',
    chevron: '<path d="m9 18 6-6-6-6"></path>',
    'chevron-down': '<path d="m6 9 6 6 6-6"></path>',
  };

  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.chevron}</svg>`;
}

function header(active = 'home') {
  if (active === 'checkout') {
    return `
      <header class="sticky top-0 z-40 border-b border-[#EEEEEE] bg-white/95 backdrop-blur">
        <div class="kompas-container checkout-header-main">
          <a href="#home" class="flex shrink-0 items-center gap-3" aria-label="Gerai Kompas.id">
            <img src="./assets/logo-gerai.webp" class="brand-logo" alt="Logo Gerai Kompas" />
          </a>
        </div>
      </header>
    `;
  }

  return `
    <header class="sticky top-0 z-40 border-b border-[#EEEEEE] bg-white/95 backdrop-blur" data-site-header>
      <div class="kompas-container header-main">
        <div class="header-left">
          <a href="#home" class="flex shrink-0 items-center gap-3" aria-label="Gerai Kompas.id">
            <img src="./assets/logo-gerai.webp" class="brand-logo" alt="Logo Gerai Kompas" />
          </a>
          <div class="rubric-menu" data-rubric-menu>
            <button class="rubric-trigger" type="button" data-rubric-toggle aria-expanded="false">
              ${icon('grid', 'h-4 w-4')} Kategori ${icon('chevron-down', 'h-4 w-4')}
            </button>
            <div class="rubric-panel" aria-label="Kategori produk">
              <div class="rubric-side">
                <a href="#home-categories">Pilihan Pembaca ${icon('chevron', 'h-4 w-4')}</a>
                <a href="#home-categories">Buku & Edisi Khusus ${icon('chevron', 'h-4 w-4')}</a>
                <a href="#home-categories">Langganan Digital ${icon('chevron', 'h-4 w-4')}</a>
                <a href="#home-categories">Merchandise ${icon('chevron', 'h-4 w-4')}</a>
                <a href="#home-categories">Tiket & Kelas ${icon('chevron', 'h-4 w-4')}</a>
              </div>
              <div class="rubric-content">
                <div>
                  <h3>Buku Kompas</h3>
                  <a href="#home">TTS Pilihan</a>
                  <a href="#home">Buku Jurnalisme</a>
                  <a href="#home">Politik & Sejarah</a>
                  <a href="#home">Anak & Keluarga</a>
                </div>
                <div>
                  <h3>Langganan</h3>
                  <a href="#home">Kompas.id Premium</a>
                  <a href="#home">ePaper Harian</a>
                  <a href="#home">Paket Keluarga</a>
                  <a href="#home">Gift Subscription</a>
                </div>
                <div>
                  <h3>Merch & Event</h3>
                  <a href="#home">K-Media Apparel</a>
                  <a href="#home">Travel Kit</a>
                  <a href="#home">Kelas Menulis</a>
                  <a href="#home">Webinar Redaksi</a>
                </div>
              </div>
            </div>
          </div>
          <label class="header-search" data-search-field>
            ${icon('search', 'h-5 w-5 text-kompas-muted')}
            <input data-search-input class="min-h-11 w-full border-0 bg-transparent text-sm outline-none" placeholder="Cari buku, merchandise, langganan..." />
            <button class="search-clear" type="button" data-search-clear aria-label="Hapus pencarian">${icon('x', 'h-4 w-4')}</button>
          </label>
        </div>
        <div class="header-right">
          <button class="icon-btn mobile-search-action inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal lg:hidden" type="button" data-mobile-search-toggle aria-label="Buka pencarian">
            ${icon('search')}
          </button>
          <a href="${routeUrl('checkout')}" class="icon-btn relative inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal" aria-label="Keranjang">
            ${icon('cart')}
            <span class="cart-counter">1</span>
          </a>
          <a href="#home" class="icon-btn header-wishlist inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal" aria-label="Wishlist">
            ${icon('heart')}
          </a>
          <button class="auth-action btn btn-secondary min-h-11 px-5" type="button">Daftar</button>
          <button class="auth-action btn btn-primary min-h-11 px-5" type="button">Masuk</button>
          <button class="icon-btn inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal lg:hidden" data-account-menu-toggle aria-expanded="false" aria-label="Buka menu akun">
            ${icon('user')}
          </button>
        </div>
      </div>
      <div class="mobile-overlay" data-mobile-search hidden>
        <div class="mobile-overlay-backdrop" data-mobile-overlay-close></div>
        <div class="mobile-search-panel" role="dialog" aria-label="Pencarian produk">
          <label class="mobile-search-form" data-search-field>
            ${icon('search', 'h-5 w-5 text-kompas-muted')}
            <input data-mobile-search-input data-search-input class="min-h-11 w-full border-0 bg-transparent text-sm outline-none" placeholder="Cari buku, merchandise, langganan..." />
            <button class="search-clear" type="button" data-search-clear aria-label="Hapus pencarian">${icon('x', 'h-4 w-4')}</button>
          </label>
        </div>
      </div>
      <div class="mobile-overlay" data-account-menu hidden>
        <div class="mobile-overlay-backdrop" data-mobile-overlay-close></div>
        <div class="account-menu-panel" role="dialog" aria-label="Menu akun">
          <div class="account-menu-actions">
            <button class="btn btn-secondary" type="button">Daftar</button>
            <button class="btn btn-primary" type="button">Masuk</button>
          </div>
          <nav class="account-menu-list" aria-label="Navigasi akun">
            <a href="#checkout">${icon('cart', 'h-5 w-5')} Daftar Transaksi</a>
            <a href="#home">${icon('heart', 'h-5 w-5')} Wishlist</a>
          </nav>
        </div>
      </div>
    </header>
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
            <a href="#home-categories">Buku</a>
            <a href="#home-categories">Merchandise</a>
            <a href="#home-categories">Tiket</a>
            <a href="#home-categories">Langganan</a>
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
          <a href="#home">Karier</a>
          <a href="#home">Iklan</a>
          <a href="#home">Berlangganan</a>
        </nav>
      </div>
    </div>
  `;
}

function checkoutFooter() {
  return `
    <footer class="checkout-footer mt-16 bg-white">
      ${footerBottom()}
    </footer>
  `;
}

function productCard(product, compact = false, labels = productFormatBadges(product)) {
  const isWishlisted = wishlist.has(product.id);
  const formatLabels = sortProductLabels(labels);
  const pricing = productVariantPricing(product, formatLabels[0]);
  const discount = pricing.originalPrice ? Math.round((1 - pricing.price / pricing.originalPrice) * 100) : null;
  return `
    <article class="product-card">
      <a href="${routeUrl('product', product.id, formatLabels[0], formatLabels)}" class="block" data-select-product="${product.id}" data-product-formats="${formatLabels.join('|')}">
          <div class="relative bg-kompas-canvas">
            <img class="product-image" src="${product.image}" alt="${product.name}" />
          ${discount ? badge(`${discount}%`, 'soft-red', 'absolute left-3 top-3') : ''}
        </div>
        <div class="product-card-content grid gap-2 p-3">
          <h3 class="${compact ? 'line-clamp-2 text-sm' : 'line-clamp-2'} min-h-[42px] font-bold leading-tight">${product.name}</h3>
          <div>
            ${product.startingPrice ? '<span class="price-prefix">Harga mulai</span>' : ''}
            <p class="font-bold text-kompas-royal">${formatCurrency(pricing.price)}</p>
            ${pricing.originalPrice ? `<p class="product-card-original-price text-xs line-through">${formatCurrency(pricing.originalPrice)}</p>` : ''}
          </div>
        </div>
      </a>
      <div class="product-card-footer">
        <div class="product-card-badges">
          ${renderProductBadges(formatLabels)}
        </div>
        <button class="wishlist-card-button ${isWishlisted ? 'is-active' : ''}" type="button" data-wishlist="${product.id}" aria-label="Tambahkan ${product.name} ke wishlist" aria-pressed="${isWishlisted}">
          ${icon('heart', 'h-4 w-4')}
        </button>
      </div>
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

  const isDigital = selectedProductFormat === 'Digital';
  const isCartMode = purchaseSheetMode === 'cart';
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
            <p class="pdp-option-label"><strong>Jenis Produk:</strong> <span>${selectedProductFormat}</span></p>
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
        <div class="purchase-sheet-section">
          <div class="purchase-sheet-label">
            <span>Jumlah</span>
            <small>Stok ${product.stock}</small>
          </div>
          <div class="pdp-quantity">
            <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
            <span>${quantity}</span>
            <button type="button" data-qty="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
          </div>
        </div>
        <div class="purchase-sheet-info">
          ${icon(isDigital ? 'card' : 'truck', 'h-5 w-5')}
          <span>${isDigital ? 'Akses digital akan dikirim melalui email akun pembeli.' : 'Produk fisik dikirim setelah pembayaran terverifikasi.'}</span>
        </div>
        <div class="purchase-sheet-total">
          <span>Subtotal</span>
          <strong>${formatCurrency(subtotal)}</strong>
        </div>
        ${
          isCartMode
            ? `<button class="btn btn-primary w-full" type="button" data-purchase-sheet-close>${icon('cart-plus', 'h-5 w-5')} Tambah ke Keranjang</button>`
            : `<a class="btn btn-primary w-full" href="${routeUrl('checkout', product.id, selectedProductFormat, selectedProductFormats)}">Beli Sekarang</a>`
        }
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
    if (activeRoute !== 'home' && activeRoute !== 'home-categories') {
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

function section(title, action, content, id = '') {
  return `
    <section ${id ? `id="${id}"` : ''} class="kompas-container py-8">
      <div class="section-title">
        <h2>${title}</h2>
        ${action ? `<a class="font-bold text-[#0356A8]" href="#home">${action}</a>` : ''}
      </div>
      ${content}
    </section>
  `;
}

function homePage() {
  const productGridClass = 'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4';
  const bestSellerBadges = [
    ['Bundling', 'Digital'],
    ['Bundling', 'Digital', 'Fisik'],
    ['Bundling', 'Digital', 'Fisik'],
    ['Fisik'],
  ];
  const latestBadges = [
    ['Bundling', 'Digital'],
    ['Bundling', 'Digital', 'Fisik'],
    ['Bundling', 'Digital', 'Fisik'],
    ['Bundling', 'Digital', 'Fisik'],
    ['Digital', 'Fisik'],
    ['Fisik'],
    ['Fisik'],
    ['Fisik'],
  ];
  const recommended = pickProducts(['source-1', 'source-2', 'source-3', 'source-7'])
    .map((product, index) => productCard(product, false, bestSellerBadges[index] || productFormatBadges(product)))
    .join('');
  const newest = products
    .slice(8, 16)
    .map((product, index) => productCard(product, true, latestBadges[index] || productFormatBadges(product)))
    .join('');
  const subscriptions = pickProducts(['source-5', 'source-13', 'source-1', 'source-11'])
    .map((product) => productCard(product, false, ['Digital']))
    .join('');
  const bundles = bundlingProducts()
    .map((product, index) =>
      productCard(product, false, index % 2 === 0 ? ['Bundling', 'Fisik'] : ['Bundling', 'Digital']),
    )
    .join('');

  return `
    ${header('home')}
    <main>
      ${heroCarousel()}

      ${section(
        'Kategori Populer',
        '',
        `<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          ${categories
            .map(
              (category) => `
                <a class="category-card flex items-center gap-4 rounded-lg p-4" href="#home">
                  <span class="grid h-12 w-12 place-items-center rounded-lg ${category.tone}">${icon(category.icon)}</span>
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
      )}

      ${section(
        'Bundling',
        'Lihat Semua',
        `<div class="${productGridClass}">${bundles}</div>`,
      )}

      ${section(
        'Langganan',
        'Lihat Semua',
        `<div class="${productGridClass}">${subscriptions}</div>`,
      )}

      ${section(
        'Baru di Gerai',
        '',
        `<div class="${productGridClass}">${newest}</div>
        <div class="mt-6 flex justify-center">
          <button class="btn btn-secondary" type="button">Lihat Lainnya</button>
        </div>`,
      )}
    </main>
    ${footer()}
  `;
}

function productPage() {
  const product = getSelectedProduct();
  normalizeSelectedFormat(product);
  const isWishlisted = wishlist.has(product.id);
  const pricing = productVariantPricing(product, selectedProductFormat);
  const subtotal = pricing.price * quantity;
  const discount = pricing.originalPrice ? Math.round((1 - pricing.price / pricing.originalPrice) * 100) : null;
  const galleryImages = [product.image, product.image, product.image, product.image];
  const formats = productFormatOptions(product);
  const longDescription = productLongDescription(product);
  const visibleDescription = isProductDescriptionExpanded
    ? longDescription
    : `${longDescription.slice(0, 188)}...`;
  return `
    ${header('product')}
    <main class="product-detail-page kompas-container py-6">
      <nav class="pdp-breadcrumb" aria-label="Breadcrumb">
        <a href="#home">Beranda</a>
        <span>/</span>
        <a href="#home-categories">Buku</a>
        <span>/</span>
        <span>${product.name}</span>
      </nav>

      <section class="pdp-hero" aria-label="Detail produk">
        <div class="pdp-gallery">
          <div class="pdp-main-media" data-pdp-gallery-swipe data-gallery-count="${galleryImages.length}">
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
            <p class="pdp-option-label">Jenis Produk: <span>${selectedProductFormat}</span></p>
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

          <div class="pdp-detail-stack">
            <section class="pdp-description-block" aria-label="Deskripsi produk">
              <h2>Deskripsi</h2>
              <p>${visibleDescription}</p>
              <button class="pdp-description-toggle" type="button" data-description-toggle>
                ${isProductDescriptionExpanded ? 'Tutup' : 'Selengkapnya'} ${icon('chevron-down', `h-4 w-4 ${isProductDescriptionExpanded ? 'rotate-180' : ''}`)}
              </button>
            </section>
            <details class="pdp-disclosure">
              <summary>Detail Produk</summary>
              <ul>
                <li>SKU: ${product.sku || `GERAI-${product.id.toUpperCase()}`}</li>
                ${product.details.map((detail) => `<li>${detail}</li>`).join('')}
              </ul>
            </details>
            <details class="pdp-disclosure">
              <summary>Pengiriman & Retur</summary>
              <p>Dikirim dari Kompas Palmerah, Jakarta Pusat. Estimasi tiba 2-4 hari kerja untuk pengiriman reguler. Retur dapat diajukan jika produk diterima dalam kondisi tidak sesuai.</p>
            </details>
          </div>
        </div>

        <aside class="pdp-buybox">
          <div class="pdp-option-group">
            <p>Jumlah</p>
            <div class="pdp-quantity-row">
              <div class="pdp-quantity">
                <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
                <span>${quantity}</span>
                <button type="button" data-qty="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
              </div>
              <span>Stok ${product.stock}</span>
            </div>
          </div>

          <div class="pdp-subtotal">
            <span>Subtotal</span>
            <strong>${formatCurrency(subtotal)}</strong>
          </div>

          <div class="pdp-actions">
            <a class="btn btn-primary" href="${routeUrl('checkout', product.id, selectedProductFormat, selectedProductFormats)}" data-buy-now-trigger>Beli Sekarang</a>
            <button class="btn btn-secondary pdp-cart-action" type="button">${icon('cart-plus')} <span>Tambah ke Keranjang</span></button>
          </div>

          <ul class="pdp-service-list">
            <li>${icon('truck', 'h-5 w-5')} Dikirim dari Kompas Palmerah</li>
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
    ${footer()}
  `;
}

function checkoutPage() {
  const product = getSelectedProduct();
  normalizeSelectedFormat(product);
  const pricing = productVariantPricing(product, selectedProductFormat);
  const selectedAddress = getSelectedAddress();
  const appliedPromo = getAppliedPromo();
  const needsShipping = selectedProductFormat !== 'Digital';
  const shipping = needsShipping ? 15000 : 0;
  const insurance = needsShipping ? 3000 : 0;
  const subtotal = pricing.price * quantity;
  const grossTotal = subtotal + shipping + insurance;
  const discount = appliedPromo ? Math.min(appliedPromo.value, grossTotal) : 0;
  const total = grossTotal - discount;
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
          short:
            'Tagihan berikutnya diproses otomatis sesuai metode pembayaran tersimpan.',
          full:
            'Dengan memilih perpanjang otomatis, Anda menyetujui bahwa tagihan periode berikutnya dapat diproses otomatis menggunakan metode pembayaran yang tersimpan. Notifikasi perpanjangan akan dikirim sebelum masa aktif berakhir. Anda dapat menghentikan perpanjangan otomatis melalui pengaturan akun atau layanan pelanggan sebelum tanggal penagihan berikutnya.',
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
          <section class="checkout-card">
            <div class="checkout-card-title">
              <h2 class="checkout-title-label">${icon('truck', 'h-5 w-5')} Alamat Pengiriman</h2>
              <button type="button" data-address-manager-open>Ubah</button>
            </div>
            ${
              selectedAddress
                ? `<div class="checkout-address">
                    <div>
                      <p>${selectedAddress.recipient} <span class="checkout-address-label">${selectedAddress.label}</span></p>
                      <span>${formatAddressLine(selectedAddress)} · ${selectedAddress.phone}</span>
                    </div>
                  </div>`
                : `<button class="checkout-address checkout-address-empty" type="button" data-address-empty-add>
                    <div>
                      <p>Belum Ada Alamat Pengiriman</p>
                      <span>Tambahkan alamat agar produk fisik dapat diproses setelah pembayaran terverifikasi.</span>
                    </div>
                    ${icon('chevron', 'h-4 w-4')}
                  </button>`
            }
          </section>

          <section class="checkout-card">
            <div class="checkout-store-row">
              ${icon('cart', 'h-5 w-5')}
              <div>
                <h2>Pesanan Anda</h2>
              </div>
            </div>
            <div class="checkout-product-row">
              <div class="checkout-product-main">
                <img src="${product.image}" alt="${product.name}" />
                <div>
                  <h3>${product.name}</h3>
                  <div class="checkout-product-variant">${badge(selectedProductFormat, 'soft-blue', 'checkout-format-badge')}</div>
                  <div class="checkout-product-meta">
                    <strong>${formatCurrency(pricing.price)}</strong>
                    ${pricing.originalPrice ? `<span class="checkout-product-original-price">${formatCurrency(pricing.originalPrice)}</span>` : ''}
                  </div>
                </div>
              </div>
              <div class="checkout-quantity-control">
                <div class="pdp-quantity checkout-quantity">
                  <button type="button" data-qty="minus" aria-label="Kurangi">${icon('minus', 'h-4 w-4')}</button>
                  <span>${quantity}</span>
                  <button type="button" data-qty="plus" aria-label="Tambah">${icon('plus', 'h-4 w-4')}</button>
                </div>
              </div>
            </div>
            <label class="checkout-note">
              <span>Catatan untuk Gerai</span>
              <input type="text" placeholder="Contoh: kirim sebagai hadiah" />
            </label>
          </section>

          <section class="checkout-card">
            <div class="checkout-card-title">
              <h2>Pembayaran</h2>
            </div>
            <div class="checkout-payment-section">
              <p>Opsi Pembayaran</p>
              <div class="checkout-plan-grid">
                ${paymentPlanOption('once', 'Sekali Bayar', 'Bayar penuh untuk pesanan ini saja', 'bank')}
                ${paymentPlanOption('recurring', 'Perpanjang Otomatis', 'Tagihan berikutnya diproses otomatis', 'refresh')}
              </div>
            </div>
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
            <p>Dengan melanjutkan, pembeli menyetujui syarat transaksi resmi Gerai Kompas.id.</p>
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
        <span class="checkout-promo-icon">${icon('ticket', 'h-7 w-7')}</span>
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

function paymentPlanOption(value, name, desc, iconName) {
  const checked = selectedPaymentPlan === value;
  return `
    <label class="checkout-plan ${checked ? 'is-selected' : ''}">
      <input type="radio" name="paymentPlan" value="${value}" ${checked ? 'checked' : ''} />
      ${icon(iconName, 'h-5 w-5')}
      <span>
        <strong>${name}</strong>
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
  const draftDistrictMeta = resolveDistrictMeta(draft.district || '');
  const draftCity = draft.city || draftDistrictMeta.city;
  const draftProvince = draft.province || draftDistrictMeta.province;

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
        <span>Kecamatan</span>
        <input type="text" value="${draft.district || ''}" data-address-field="district" placeholder="Contoh: Palmerah" />
      </label>
      ${
        draft.city || draft.province
          ? `<label>
              <span>Kota/Kabupaten</span>
              <input type="text" value="${draftCity}" data-address-field="city" />
            </label>
            <label>
              <span>Provinsi</span>
              <input type="text" value="${draftProvince}" data-address-field="province" />
            </label>`
          : ''
      }
      <label>
        <span>Alamat Lengkap</span>
        <textarea data-address-field="address" placeholder="Nama jalan, nomor rumah, RT/RW, kode pos">${draft.address}</textarea>
      </label>
      <label>
        <span>Catatan untuk Kurir (Opsional)</span>
        <textarea data-address-field="courierNote" placeholder="Contoh: titip ke resepsionis">${draft.courierNote || ''}</textarea>
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
              ([group, methods]) => `
                <section>
                  <h3>${paymentGroupIcon(group)} <span>${group}</span></h3>
                  <div class="payment-modal-options">
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
                  </div>
                </section>
              `,
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
          <span class="text-sm text-kompas-muted">${desc}</span>
        </span>
      </span>
      <strong>${formatCurrency(price)}</strong>
    </label>
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
    clearButton.addEventListener('click', (event) => {
      event.preventDefault();
      input.value = '';
      syncSearchState();
      input.focus();
    });
    syncSearchState();
  });

  const rubricMenu = document.querySelector('[data-rubric-menu]');
  const rubricToggle = document.querySelector('[data-rubric-toggle]');
  rubricToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = rubricMenu?.classList.toggle('is-open') || false;
    rubricToggle.setAttribute('aria-expanded', String(isOpen));
  });

  if (!document.body.dataset.outsideClickBound) {
    document.addEventListener('click', (event) => {
      const activeRubricMenu = document.querySelector('[data-rubric-menu]');
      const activeRubricToggle = document.querySelector('[data-rubric-toggle]');
      if (!activeRubricMenu?.contains(event.target)) {
        activeRubricMenu?.classList.remove('is-open');
        activeRubricToggle?.setAttribute('aria-expanded', 'false');
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
      selectedProductFormats = sortProductLabels((link.getAttribute('data-product-formats') || '').split('|').filter(Boolean));
      if (!selectedProductFormats.length) {
        selectedProductFormats = sortProductLabels(productFormatBadges(product));
      }
      selectedProductFormat = selectedProductFormats[0];
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

  document.querySelectorAll('[data-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-qty');
      const product = getSelectedProduct();
      const maxQuantity = Math.max(Math.min(product.stock, 10), 1);
      quantity = action === 'plus' ? Math.min(quantity + 1, maxQuantity) : Math.max(quantity - 1, 1);
      shouldAnimatePurchaseSheet = false;
      render();
    });
  });

  document.querySelector('[data-buy-now-trigger]')?.addEventListener('click', (event) => {
    if (!window.matchMedia('(max-width: 640px)').matches) {
      return;
    }
    event.preventDefault();
    openPurchaseSheet('buy');
  });

  document.querySelector('.pdp-cart-action')?.addEventListener('click', (event) => {
    if (!window.matchMedia('(max-width: 640px)').matches) {
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

  document.querySelectorAll('input[name="paymentPlan"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      selectedPaymentPlan = event.target.value;
      selectedPaymentMethod = selectedPaymentPlan === 'once' ? 'bca-va' : 'credit-card';
      isPaymentTermsExpanded = false;
      render();
    });
  });

  document.querySelectorAll('input[name="paymentMethod"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      selectedPaymentMethod = event.target.value;
      render();
    });
  });

  document.querySelector('[data-address-manager-open]')?.addEventListener('click', () => {
    isAddressManagerOpen = true;
    addressFormMode = 'list';
    editingAddressId = null;
    addressDraft = null;
    openAddressMenuId = null;
    render();
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
    render();
  });

  document.querySelectorAll('[data-address-field]').forEach((field) => {
    field.addEventListener('input', () => {
      const key = field.getAttribute('data-address-field');
      if (!key) {
        return;
      }
      addressDraft = addressDraft || {};
      addressDraft[key] = field.value;
    });

    if (field.getAttribute('data-address-field') === 'district') {
      field.addEventListener('blur', () => {
        addressDraft = addressDraft || {};
        addressDraft.district = field.value;
        const districtMeta = resolveDistrictMeta(field.value);
        addressDraft.city = districtMeta.city;
        addressDraft.province = districtMeta.province;
        render();
      });
    }
  });

  document.querySelector('[data-address-cancel]')?.addEventListener('click', () => {
    addressFormMode = 'list';
    editingAddressId = null;
    addressDraft = null;
    render();
  });

  document.querySelector('[data-address-save]')?.addEventListener('click', () => {
    const draft = addressDraft || {};
    const districtMeta = resolveDistrictMeta(draft.district || '');
    const normalizedAddress = {
      id: editingAddressId || `address-${Date.now()}`,
      label: draft.label?.trim() || 'Alamat',
      recipient: draft.recipient?.trim() || 'Penerima',
      phone: draft.phone?.trim() || 'Nomor belum diisi',
      district: draft.district?.trim() || '',
      city: draft.city?.trim() || districtMeta.city,
      province: draft.province?.trim() || districtMeta.province,
      address: draft.address?.trim() || 'Alamat belum lengkap',
      courierNote: draft.courierNote?.trim() || '',
    };

    if (addressFormMode === 'edit') {
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
    render();
  });

  document.querySelector('[data-promo-input]')?.addEventListener('input', (event) => {
    promoDraft = event.target.value;
    promoError = '';
  });

  document.querySelector('[data-promo-modal-open]')?.addEventListener('click', () => {
    isPromoModalOpen = true;
    promoError = '';
    render();
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
    render();
  });

  document.querySelectorAll('[data-payment-modal-close]').forEach((button) => {
    button.addEventListener('click', () => {
      isPaymentMethodModalOpen = false;
      pendingPaymentMethod = null;
      render();
    });
  });

  document.querySelectorAll('[data-payment-modal-select]').forEach((button) => {
    button.addEventListener('click', () => {
      const methodId = button.getAttribute('data-payment-modal-select');
      pendingPaymentMethod = pendingPaymentMethod === methodId ? null : methodId;
      render();
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
    render();
  });

  document.querySelectorAll('[data-product-image]').forEach((button) => {
    button.addEventListener('click', () => {
      syncProductGallery(Number(button.getAttribute('data-product-image') || 0));
    });
  });

  const productGallerySwipe = document.querySelector('[data-pdp-gallery-swipe]');
  if (productGallerySwipe) {
    let swipeStartX = 0;
    let swipeStartY = 0;
    let pointerSwipeStartX = 0;
    let pointerSwipeStartY = 0;
    let isPointerSwiping = false;
    let lastTouchSwipeAt = 0;

    const moveProductImage = (deltaX, deltaY) => {
      if (Math.abs(deltaX) < 44 || Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }

      const galleryCount = Number(productGallerySwipe.getAttribute('data-gallery-count') || 1);
      if (galleryCount <= 1) {
        return;
      }

      const nextIndex =
        deltaX < 0
          ? (selectedProductImageIndex + 1) % galleryCount
          : (selectedProductImageIndex - 1 + galleryCount) % galleryCount;
      syncProductGallery(nextIndex);
    };

    productGallerySwipe.addEventListener(
      'touchstart',
      (event) => {
        const touch = event.touches[0];
        swipeStartX = touch.clientX;
        swipeStartY = touch.clientY;
      },
      { passive: true },
    );

    productGallerySwipe.addEventListener(
      'touchend',
      (event) => {
        const touch = event.changedTouches[0];
        if (!touch) {
          return;
        }

        const deltaX = touch.clientX - swipeStartX;
        const deltaY = touch.clientY - swipeStartY;
        lastTouchSwipeAt = Date.now();
        moveProductImage(deltaX, deltaY);
      },
      { passive: true },
    );

    productGallerySwipe.addEventListener('pointerdown', (event) => {
      pointerSwipeStartX = event.clientX;
      pointerSwipeStartY = event.clientY;
      isPointerSwiping = true;
    });

    productGallerySwipe.addEventListener('pointerup', (event) => {
      if (!isPointerSwiping || Date.now() - lastTouchSwipeAt < 350) {
        isPointerSwiping = false;
        return;
      }

      isPointerSwiping = false;
      moveProductImage(event.clientX - pointerSwipeStartX, event.clientY - pointerSwipeStartY);
    });

    productGallerySwipe.addEventListener('pointercancel', () => {
      isPointerSwiping = false;
    });
  }

  document.querySelectorAll('[data-product-format]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedProductFormat = button.getAttribute('data-product-format') || 'Fisik';
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

  document.querySelector('[data-share-product]')?.addEventListener('click', async () => {
    const product = getSelectedProduct();
    const shareData = {
      title: product.name,
      text: product.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard?.writeText(shareData.url);
    } catch {
      // Share can be cancelled by the user; no UI recovery is needed.
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
      if (wishlist.has(productId)) {
        wishlist.delete(productId);
      } else {
        wishlist.add(productId);
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
  const normalizedIndex = ((nextIndex % galleryCount) + galleryCount) % galleryCount;

  selectedProductImageIndex = normalizedIndex;

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

function render() {
  const route = window.location.hash.replace('#', '') || 'home';
  const app = document.querySelector('#app');

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
    replaceRouteParams('checkout');
  } else {
    isPurchaseSheetOpen = false;
    shouldAnimatePurchaseSheet = false;
    app.innerHTML = homePage();
    startCarouselTimer();
  }

  bindEvents();
}

window.addEventListener('hashchange', render);
window.addEventListener('popstate', render);
render();
