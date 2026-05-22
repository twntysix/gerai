const products = [
  {
    id: 'tts-26',
    name: 'TTS Pilihan Kompas Jilid 26',
    category: 'Buku',
    price: 75000,
    originalPrice: 89000,
    rating: 4.9,
    sold: '1,2 rb',
    stock: 23,
    badge: 'Buku Terlaris',
    image: './assets/book-tts.svg',
    description:
      'Kumpulan TTS pilihan Harian Kompas bertema 60 tahun Kompas, dirancang untuk menemani waktu santai sekaligus melatih ingatan.',
    details: ['232 halaman', 'Ukuran 19 x 19 cm', 'Penulis Dwiweko Soeprijono', 'Berat 0,6 kg'],
  },
  {
    id: 'langganan-kompas',
    name: 'Langganan Kompas.id Premium 12 Bulan',
    category: 'Langganan',
    price: 499000,
    originalPrice: 598000,
    rating: 5,
    sold: '8,4 rb',
    stock: 999,
    badge: 'Digital',
    image: './assets/subscription-6.svg',
    description:
      'Akses berita mendalam, e-paper, laporan investigasi, dan arsip Kompas.id selama 12 bulan.',
    details: ['Aktif instan', 'Akses Kompas.id', 'Termasuk ePaper', 'Dukungan pelanggan'],
  },
  {
    id: 'langganan-kompas-6',
    name: 'Langganan Kompas.id Premium 6 Bulan',
    category: 'Langganan',
    price: 279000,
    originalPrice: 329000,
    rating: 4.9,
    sold: '4,1 rb',
    stock: 999,
    badge: 'Digital',
    image: './assets/subscription-3.svg',
    description: 'Paket akses Kompas.id Premium untuk pembaca yang ingin fleksibilitas setengah tahun.',
    details: ['Aktif instan', 'Akses Kompas.id', 'Termasuk ePaper', 'Masa aktif 6 bulan'],
  },
  {
    id: 'langganan-kompas-3',
    name: 'Langganan Kompas.id Premium 3 Bulan',
    category: 'Langganan',
    price: 149000,
    originalPrice: 179000,
    rating: 4.8,
    sold: '2,7 rb',
    stock: 999,
    badge: 'Digital',
    image: './assets/subscription.svg',
    description: 'Paket percobaan Premium untuk membaca laporan mendalam dan arsip Kompas.id.',
    details: ['Aktif instan', 'Akses Kompas.id', 'Termasuk ePaper', 'Masa aktif 3 bulan'],
  },
  {
    id: 'epaper-12',
    name: 'Paket ePaper Kompas 12 Bulan',
    category: 'Langganan',
    price: 399000,
    originalPrice: 479000,
    rating: 4.9,
    sold: '3,3 rb',
    stock: 999,
    badge: 'ePaper',
    image: './assets/epaper-kompas.svg',
    description: 'Akses ePaper Harian Kompas setiap pagi dalam format digital yang nyaman dibaca.',
    details: ['Aktif instan', 'ePaper harian', 'Arsip edisi lama', 'Masa aktif 12 bulan'],
  },
  {
    id: 'paket-keluarga',
    name: 'Kompas.id Paket Keluarga',
    category: 'Langganan',
    price: 699000,
    originalPrice: 849000,
    rating: 5,
    sold: '980',
    stock: 999,
    badge: 'Multi Akun',
    image: './assets/family-plan.svg',
    description: 'Paket langganan untuk keluarga dengan akses Premium di beberapa perangkat.',
    details: ['Multi perangkat', 'Akses Kompas.id', 'Termasuk ePaper', 'Prioritas bantuan'],
  },
  {
    id: 'gift-subscription',
    name: 'Gift Subscription Kompas.id',
    category: 'Langganan',
    price: 249000,
    originalPrice: 299000,
    rating: 4.8,
    sold: '760',
    stock: 999,
    badge: 'Hadiah',
    image: './assets/gift-subscription.svg',
    description: 'Voucher langganan digital Kompas.id untuk hadiah teman, keluarga, atau kolega.',
    details: ['Kode voucher', 'Mudah dikirim', 'Akses Kompas.id', 'Masa aktif 6 bulan'],
  },
  {
    id: 'ruang-redaksi',
    name: 'Cerita di Balik Ruang Redaksi',
    category: 'Buku',
    price: 129000,
    originalPrice: 149000,
    rating: 4.8,
    sold: '640',
    stock: 16,
    badge: 'Rekomendasi',
    image: './assets/book-journalism.svg',
    description:
      'Buku esai dan kisah kerja jurnalistik Kompas, cocok untuk pembaca yang menyukai proses di balik berita.',
    details: ['Soft cover', 'Tema jurnalisme', 'Penerbit Buku Kompas', 'Berat 0,35 kg'],
  },
  {
    id: 'kmedia-tee',
    name: 'K-Media Ringer Tee Regular T-shirt',
    category: 'Merchandise',
    price: 215000,
    originalPrice: 249000,
    rating: 4.9,
    sold: '312',
    stock: 9,
    badge: 'Varian Ukuran',
    image: './assets/tshirt-kompas.svg',
    description:
      'Kaos harian dengan karakter warna Kompas, tersedia dalam beberapa ukuran.',
    details: ['Cotton combed', 'S, M, L, XL', 'Regular fit', 'Berat 0,25 kg'],
  },
  {
    id: 'kelas-feature',
    name: 'Tiket Kelas Menulis Feature',
    category: 'Tiket',
    price: 175000,
    originalPrice: 225000,
    rating: 4.7,
    sold: '188',
    stock: 40,
    badge: 'Online',
    image: './assets/ticket-event.svg',
    description:
      'Kelas praktis bersama editor untuk memperkuat struktur cerita, angle, dan narasi feature.',
    details: ['Kelas daring', 'Materi 2 jam', 'E-sertifikat', 'Rekaman tersedia'],
  },
  {
    id: 'travel-kit',
    name: 'Teman Travel Seru Kit',
    category: 'Bundling',
    price: 128000,
    originalPrice: 169000,
    rating: 4.8,
    sold: '527',
    stock: 7,
    badge: 'Bundling',
    image: './assets/bundle-travel.svg',
    description:
      'Bundling travel mat dan buku TTS untuk teman perjalanan, piknik, atau akhir pekan.',
    details: ['Travel mat tahan air', 'Ringan dibawa', 'Bundling TTS', 'Berat 0,24 kg'],
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
    name: 'Tiket & Kelas',
    icon: 'ticket',
    count: 'Event pilihan',
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
let currentSlide = 0;
let carouselTimer = null;
let carouselPaused = false;
let carouselTransitioning = false;
let selectedProductImageIndex = 0;
let selectedProductFormat = 'Fisik';
let isProductDescriptionExpanded = false;
const wishlist = new Set();

const heroSlides = [
  {
    badge: 'Promo pembaca Kompas',
    title: 'Gerai Resmi Kompas.id',
    copy: 'Temukan buku pilihan, merchandise, tiket kelas, dan paket langganan dalam satu pengalaman belanja yang lebih ringkas.',
    image: './assets/book-tts.svg',
    primary: 'Belanja Sekarang',
    secondary: 'Lihat Kategori',
    theme: 'blue',
  },
  {
    badge: 'Bundling pilihan redaksi',
    title: 'Bacaan dan Kit Akhir Pekan',
    copy: 'Pilih bundling TTS, buku, dan merchandise Kompas untuk teman perjalanan, hadiah, atau koleksi pribadi.',
    image: './assets/bundle-travel.svg',
    primary: 'Lihat Bundling',
    secondary: 'Produk Terbaru',
    theme: 'green',
  },
  {
    badge: 'Akses digital',
    title: 'Langganan Premium Lebih Mudah',
    copy: 'Nikmati laporan mendalam, ePaper, dan arsip Kompas.id dengan paket langganan resmi dari Gerai.',
    image: './assets/subscription.svg',
    primary: 'Pilih Paket',
    secondary: 'Bandingkan',
    theme: 'yellow',
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
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
    Bundling: 'soft-green',
  };

  return variants[product.category] || 'soft-black';
}

function relatedProducts() {
  const imageVariants = [
    './assets/subscription-6.svg',
    './assets/book-journalism.svg',
    './assets/tshirt-kompas.svg',
    './assets/ticket-event.svg',
    './assets/bundle-travel.svg',
  ];

  return products.slice(1, 6).map((product, index) => ({
    ...product,
    image: imageVariants[index],
  }));
}

function productLongDescription(product) {
  return `${product.description} Buku ini disusun sebagai teman jeda yang ringan tetapi tetap khas Kompas: rapi, bernas, dan dekat dengan keseharian pembaca. Di dalamnya, pembaca dapat menemukan tantangan teka-teki silang pilihan yang cocok untuk mengisi akhir pekan, perjalanan, atau waktu santai di rumah. Setiap halaman dirancang agar mudah dibaca, nyaman digenggam, dan tetap terasa sebagai koleksi yang layak disimpan.`;
}

function latestProducts() {
  return [
    ...products,
    {
      id: 'notebook-redaksi',
      name: 'Notebook Ruang Redaksi Kompas',
      category: 'Merchandise',
      price: 99000,
      originalPrice: 119000,
      rating: 4.8,
      sold: '421',
      stock: 28,
      badge: 'Edisi Khusus',
      image: './assets/notebook-redaksi.svg',
      description: 'Notebook premium bertema ruang redaksi untuk catatan harian, kerja, dan ide liputan.',
      details: ['Hard cover', '120 halaman', 'Kertas ivory', 'Berat 0,3 kg'],
    },
  ];
}

function icon(name, className = 'h-5 w-5') {
  const paths = {
    search:
      '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
    cart: '<circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L22 8H7"></path>',
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
    refresh:
      '<path d="M21 12a9 9 0 0 1-15.5 6.2"></path><path d="M3 12A9 9 0 0 1 18.5 5.8"></path><path d="M18 2v4h-4"></path><path d="M6 22v-4h4"></path>',
    shield:
      '<path d="M12 3 20 6v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z"></path><path d="m9 12 2 2 4-5"></path>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"></path>',
    tag: '<path d="M20 12v7a2 2 0 0 1-2 2h-7L3 13V5a2 2 0 0 1 2-2h8z"></path><circle cx="8" cy="8" r="1.5"></circle>',
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
    <header class="sticky top-0 z-40 border-b border-[#EEEEEE] bg-white/95 backdrop-blur">
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
          <label class="header-search">
            ${icon('search', 'h-5 w-5 text-kompas-muted')}
            <input class="min-h-11 w-full border-0 bg-transparent text-sm outline-none" placeholder="Cari buku, merchandise, langganan..." />
          </label>
        </div>
        <div class="header-right">
          <a href="#checkout" class="icon-btn relative inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal" aria-label="Keranjang">
            ${icon('cart')}
            <span class="cart-counter">1</span>
          </a>
          <a href="#home" class="icon-btn inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal" aria-label="Wishlist">
            ${icon('heart')}
          </a>
          <button class="auth-action btn btn-secondary min-h-11 px-5" type="button">Daftar</button>
          <button class="auth-action btn btn-primary min-h-11 px-5" type="button">Masuk</button>
          <button class="icon-btn inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-kompas-royal lg:hidden" data-menu-toggle aria-label="Buka menu">
            ${icon('menu')}
          </button>
        </div>
      </div>
      <div class="kompas-container hidden pb-4 lg:hidden" data-mobile-menu>
        <label class="mb-3 flex items-center gap-2 rounded-lg border border-[#DDDDDD] px-3">
          ${icon('search', 'h-5 w-5 text-kompas-muted')}
          <input class="min-h-11 w-full border-0 bg-transparent text-sm outline-none" placeholder="Cari produk Kompas" />
        </label>
        <div class="grid gap-3 text-sm font-bold">
          <div class="grid grid-cols-2 gap-2">
            <a class="rounded-lg bg-kompas-blueSoft px-3 py-3 text-kompas-royal" href="#home">Beranda</a>
            <a class="rounded-lg bg-kompas-blueSoft px-3 py-3 text-kompas-royal" href="#home-categories">Kategori</a>
            <a class="rounded-lg bg-kompas-blueSoft px-3 py-3 text-kompas-royal" href="#product">Detail Produk</a>
            <a class="rounded-lg bg-kompas-blueSoft px-3 py-3 text-kompas-royal" href="#checkout">Checkout</a>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <button class="btn btn-secondary min-h-11" type="button">Daftar</button>
            <button class="btn btn-primary min-h-11" type="button">Masuk</button>
          </div>
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
    <footer class="mt-16 bg-white">
      ${footerBottom()}
    </footer>
  `;
}

function productCard(product, compact = false) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const isWishlisted = wishlist.has(product.id);
  return `
    <article class="product-card">
      <a href="#product" class="block">
          <div class="relative bg-kompas-canvas">
            <img class="product-image" src="${product.image}" alt="${product.name}" />
          ${badge(`${discount}%`, 'soft-red', 'absolute left-3 top-3')}
        </div>
        <div class="product-card-content grid gap-2 p-3">
          <div class="flex items-center gap-2">
            ${badge(product.badge, productBadgeVariant(product))}
          </div>
          <h3 class="${compact ? 'line-clamp-2 text-sm' : 'line-clamp-2'} min-h-[42px] font-bold leading-tight">${product.name}</h3>
          <div>
            <p class="font-bold text-kompas-royal">${formatCurrency(product.price)}</p>
            <p class="product-card-original-price text-xs line-through">${formatCurrency(product.originalPrice)}</p>
          </div>
        </div>
      </a>
      <div class="product-card-footer">
        <p class="product-card-meta flex items-center gap-1 text-xs">${icon('star', 'h-3.5 w-3.5 fill-[#FFCC00] text-[#FFCC00]')} ${product.rating} · ${product.sold} terjual</p>
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
                <article class="hero-slide hero-theme-${slide.theme}">
                  <div class="kompas-container hero-carousel-inner">
                    <div class="relative z-10 w-full max-w-[560px] text-white">
                      <h1 class="mt-5 font-bold">${slide.title}</h1>
                      <p class="mt-5 text-lg text-white/90">${slide.copy}</p>
                      <div class="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a class="btn btn-hero-primary" href="#product">${slide.primary}</a>
                        <a class="btn border border-white text-white" href="#home-categories">${slide.secondary}</a>
                      </div>
                    </div>
                    <img src="${slide.image}" alt="${slide.title}" class="hero-product-art" />
                  </div>
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
  const recommended = products.slice(0, 5).map((product) => productCard(product)).join('');
  const newest = latestProducts()
    .reverse()
    .slice(0, 10)
    .map((product) => productCard(product, true))
    .join('');
  const subscriptions = products
    .filter((product) => product.category === 'Langganan')
    .slice(0, 5)
    .map((product) => productCard(product))
    .join('');

  return `
    ${header('home')}
    <main>
      ${heroCarousel()}

      ${section(
        'Kategori Populer',
        'Lihat Semua',
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
        'Untuk Anda',
        'Lihat Semua',
        `<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">${recommended}</div>`,
      )}

      ${section(
        'Produk Langganan',
        'Lihat Semua',
        `<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">${subscriptions}</div>`,
      )}

      ${section(
        'Produk Terbaru',
        'Lihat Semua',
        `<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">${newest}</div>
        <div class="mt-6 flex justify-center">
          <button class="btn btn-secondary" type="button">Muat Lainnya</button>
        </div>`,
      )}
    </main>
    ${footer()}
  `;
}

function productPage() {
  const product = products[0];
  const isWishlisted = wishlist.has(product.id);
  const subtotal = product.price * quantity;
  const savings = product.originalPrice - product.price;
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const galleryImages = [product.image, './assets/book-journalism.svg', './assets/bundle-travel.svg', './assets/subscription.svg'];
  const selectedImage = galleryImages[selectedProductImageIndex] || product.image;
  const formats = ['Fisik', 'Fisik & Digital'];
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
          <div class="pdp-main-media">
            <img src="${selectedImage}" alt="${product.name}" />
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
          <div class="mt-3">${badge(product.badge, productBadgeVariant(product))}</div>
          <h1>${product.name}</h1>
          <p class="pdp-sku">SKU: GERAI-${product.id.toUpperCase()}</p>
          <p class="pdp-rating">${icon('star', 'h-4 w-4 fill-[#FFCC00] text-[#FFCC00]')} ${product.rating} · ${product.sold} terjual</p>
          <div class="pdp-price-tools">
            <div class="pdp-price-stack">
              <strong>${formatCurrency(product.price)}</strong>
              <div class="pdp-original-row">
                <span class="pdp-discount-wrap">${badge(`${discount}%`, 'soft-red', 'pdp-discount-badge')}</span>
                <span class="pdp-original-price">${formatCurrency(product.originalPrice)}</span>
              </div>
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
            <p>Format</p>
            <div class="pdp-options" role="group" aria-label="Pilih format">
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
            <a class="btn btn-primary" href="#checkout">Beli Sekarang</a>
            <button class="btn btn-secondary" type="button">${icon('cart')} Tambah ke Keranjang</button>
          </div>

          <ul class="pdp-service-list">
            <li>${icon('truck', 'h-5 w-5')} Dikirim dari Kompas Palmerah</li>
            <li>${icon('shield', 'h-5 w-5')} Produk resmi Gerai Kompas.id</li>
          </ul>
        </aside>
      </section>

      ${section(
        'Produk Terkait',
        'Lihat Semua',
        `<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">${relatedProducts().map((item) => productCard(item, true)).join('')}</div>`,
      )}
    </main>
    ${footer()}
  `;
}

function checkoutPage() {
  const product = products[0];
  const shipping = selectedShipping === 'instant' ? 28000 : 15000;
  const insurance = 3000;
  const discount = 14000;
  const total = product.price * quantity + shipping + insurance - discount;
  const paymentMethods = {
    once: [
      { id: 'bca-va', name: 'BCA Virtual Account', desc: 'Verifikasi otomatis dalam beberapa menit', logo: 'bca' },
      { id: 'qris', name: 'QRIS', desc: 'Bayar dengan aplikasi bank atau e-wallet', logo: 'qris' },
      { id: 'gopay', name: 'GoPay', desc: 'Saldo dan GoPayLater yang tersedia', logo: 'gopay' },
    ],
    recurring: [
      { id: 'credit-card', name: 'Kartu Kredit / Debit', desc: 'Ditagihkan otomatis saat masa aktif berakhir', logo: 'card' },
      { id: 'debit-online', name: 'Debit Online', desc: 'Cocok untuk kartu dengan otorisasi berulang', logo: 'debit' },
      { id: 'gopay-autodebit', name: 'GoPay AutoDebit', desc: 'Perpanjangan otomatis lewat akun GoPay', logo: 'gopay' },
    ],
  };
  const activePaymentMethods = paymentMethods[selectedPaymentPlan];
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
              <button type="button">Ubah</button>
            </div>
            <div class="checkout-address">
              <div>
                <p>Reza Pratama</p>
                <span>Jl. Palmerah Selatan No. 26, Jakarta Pusat, DKI Jakarta 10270 · 0812-900-50800</span>
              </div>
            </div>
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
                  <p>Buku · Penerbit Buku Kompas</p>
                  <div class="checkout-product-variant">${badge(`Format: ${selectedProductFormat}`, 'soft-blue', 'checkout-format-badge')}</div>
                  <div class="checkout-product-meta">
                    <strong>${formatCurrency(product.price)}</strong>
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

        <aside class="checkout-summary">
          <div class="checkout-summary-title">
            <h2>Ringkasan Belanja</h2>
            ${badge(paymentPlanLabel, selectedPaymentPlan === 'once' ? 'soft-blue' : 'soft-green')}
          </div>
          <div class="checkout-summary-lines">
            <div><span>Subtotal produk</span><strong>${formatCurrency(product.price * quantity)}</strong></div>
            <div><span>Pengiriman</span><strong>${formatCurrency(shipping)}</strong></div>
            <div><span>Proteksi paket</span><strong>${formatCurrency(insurance)}</strong></div>
            <div class="is-discount"><span>Voucher GERAI14</span><strong>-${formatCurrency(discount)}</strong></div>
          </div>
          <div class="checkout-payment-alert ${isPaymentTermsExpanded ? 'is-expanded' : ''}">
            <strong>${paymentTerms.title}</strong>
            <p>
              ${visiblePaymentTerms}
              <button type="button" data-payment-terms-toggle>
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
        </aside>
      </div>
    </main>
    ${checkoutFooter()}
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
    <button class="checkout-more-payment" type="button">
      <span>
        <strong>Pilih metode pembayaran lainnya</strong>
        <small>Kartu kredit/debit, e-wallet, dan Virtual Account bank lain</small>
      </span>
      <span class="checkout-more-logos" aria-hidden="true">
        ${logos.map((logo) => paymentLogo(logo)).join('')}
      </span>
      ${icon('chevron', 'h-4 w-4')}
    </button>
  `;
}

function paymentLogo(logo) {
  const logos = {
    bca: '<span class="payment-logo payment-logo-bca">BCA</span>',
    qris: '<span class="payment-logo payment-logo-qris">QRIS</span>',
    gopay: '<span class="payment-logo payment-logo-gopay">GoPay</span>',
    card: '<span class="payment-logo payment-logo-card"><span>VISA</span><span>MC</span></span>',
    debit: '<span class="payment-logo payment-logo-debit">Debit</span>',
    ovo: '<span class="payment-logo payment-logo-ovo">OVO</span>',
    shopeepay: '<span class="payment-logo payment-logo-shopeepay">ShopeePay</span>',
    mandiri: '<span class="payment-logo payment-logo-mandiri">Mandiri</span>',
    bni: '<span class="payment-logo payment-logo-bni">BNI</span>',
    bri: '<span class="payment-logo payment-logo-bri">BRI</span>',
  };

  return logos[logo] || '<span class="payment-logo">Pay</span>';
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

function bindEvents() {
  document.querySelector('[data-menu-toggle]')?.addEventListener('click', () => {
    document.querySelector('[data-mobile-menu]')?.classList.toggle('hidden');
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
    });
  });

  document.querySelectorAll('[data-slide-index]').forEach((button) => {
    button.addEventListener('click', () => {
      transitionToSlide(Number(button.getAttribute('data-slide-index') || 0));
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
      quantity = action === 'plus' ? Math.min(quantity + 1, 10) : Math.max(quantity - 1, 1);
      render();
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

  document.querySelectorAll('[data-product-image]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedProductImageIndex = Number(button.getAttribute('data-product-image') || 0);
      render();
    });
  });

  document.querySelectorAll('[data-product-format]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedProductFormat = button.getAttribute('data-product-format') || 'Fisik';
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
    const shareData = {
      title: products[0].name,
      text: products[0].description,
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

function render() {
  const route = window.location.hash.replace('#', '') || 'home';
  const app = document.querySelector('#app');

  if (route === 'product') {
    clearInterval(carouselTimer);
    app.innerHTML = productPage();
  } else if (route === 'checkout') {
    clearInterval(carouselTimer);
    app.innerHTML = checkoutPage();
  } else {
    app.innerHTML = homePage();
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
    }, 6000);
  }

  bindEvents();
}

window.addEventListener('hashchange', render);
render();
