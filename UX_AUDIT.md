# UX Audit Gerai Kompas.id

Audit ini dipakai sebagai dasar desain ulang halaman Gerai Kompas.id. Referensi utama adalah gerai.kompas.id, tampilan Kompas.id terlampir, benchmark Tokopedia terlampir, dan token Figma Design Library Web.

## Temuan Utama

1. Navigasi Gerai saat ini terlalu repetitif. Pada hasil crawl, menu Terlaris, Terbaru, Rekomendasi, dan Kategori muncul berulang sehingga prioritas informasi kurang jelas.
2. Homepage Gerai sudah memiliki rekomendasi, terbaru, terlaris, dan kategori, tetapi listing kurang menonjolkan manfaat pembelian, harga, badge, rating, dan quick path ke checkout.
3. Product detail masih terasa seperti template WooCommerce: informasi stok, jumlah, add-to-cart, deskripsi, dimensi, dan review ada, tetapi tidak dibentuk menjadi keputusan beli yang cepat.
4. Checkout perlu meniru pola marketplace: alamat, produk, pengiriman, pembayaran, dan ringkasan belanja harus terlihat dalam satu alur tanpa membuat pembeli menebak langkah berikutnya.
5. Look and feel Kompas perlu lebih dekat ke kompas.id: putih lapang, Royal Blue sebagai warna aksi, aksen Yellow untuk highlight, font PT Sans, dan kartu dengan elevation ringan.

## Prinsip Redesign

1. Header konsisten dengan search sebagai pusat navigasi belanja.
2. Homepage dibagi menjadi slideshow promo, kategori populer, Untuk Anda, Produk Langganan, dan Produk Terbaru.
3. Product card mengikuti benchmark marketplace: gambar besar, badge, harga, harga coret, rating, jumlah terjual, dan kategori.
4. Product detail menggunakan galeri kiri dan panel pembelian sticky kanan untuk mempercepat "beli langsung".
5. Checkout dibuat satu halaman dengan ringkasan sticky agar total transaksi selalu terlihat.
6. Semua CTA mengikuti token button Figma: tinggi 48px, radius 8px, PT Sans Bold, primary #00559A, neutral #EEEEEE, danger #D00D0D.
7. Elevation mengikuti Figma: `Shadow-sm` untuk card dan `Shadow-base` untuk panel prioritas.

## Token Yang Dipakai

- Brand Royal Blue: #00559A
- Royal Blue dark: #00447B
- Blue accent: #057DF4
- Blue soft: #E1F0FF
- Yellow accent: #FFCC00
- Yellow soft: #FFF8D6
- Green success: #50A718
- Red danger: #D00D0D
- Text default: #24292F
- Text muted: #57606A
- Neutral line: #DDDDDD
- Neutral canvas: #F4F4F4
- Shadow-sm: `0 -1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.12)`
- Shadow-base: `0 -1px 4px rgba(0,0,0,.06), 0 3px 6px rgba(0,0,0,.08)`

## Page Decisions

### Homepage

- Slideshow hero menampilkan promo dan highlight produk dengan sinyal Gerai resmi.
- Kategori populer dibuat sebagai shortcut visual agar produk buku, merchandise, langganan, dan tiket mudah dipindai.
- Section "Untuk Anda" dan "Produk Terbaru" memakai grid responsif seperti marketplace.
- Produk Langganan diberi section khusus karena beda nature dengan produk fisik.

### Product Detail

- Sticky purchase summary mengurangi scroll bolak-balik saat user sudah ingin membeli.
- Informasi pengiriman dan keaslian produk ditampilkan dekat keputusan beli.
- Spesifikasi dipisah dalam chip agar lebih mudah dipindai.

### Checkout

- Alamat, produk, pengiriman, dan pembayaran dibuat sebagai card berurutan.
- Ringkasan belanja sticky meniru pola marketplace yang menjaga kejelasan total.
- Opsi pengiriman berupa radio card untuk menghindari dropdown tersembunyi.
