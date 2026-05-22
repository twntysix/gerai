# Gerai Kompas.id Ecommerce Prototype

Prototype ini berisi tiga halaman responsive untuk redesign Gerai Kompas.id:

- Homepage
- Product detail
- Checkout beli langsung

## Cara Menjalankan

Buka `index.html` di browser, atau jalankan server statis sederhana dari folder ini:

```bash
/Users/prodev/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/serve.mjs
```

Lalu akses `http://localhost:4173`.

## Catatan Implementasi

- UI memakai Tailwind CSS CDN plus `styles.css` untuk token desain.
- Font utama: PT Sans.
- Logo Gerai memakai attachment `cropped-BOMAsset-7NEW.webp` yang disalin ke `assets/logo-gerai.webp`.
- UX audit tersimpan di `UX_AUDIT.md`.
- Karena lingkungan lokal belum memiliki PHP, Composer, npm, atau Docker runtime lengkap, delivery ini dibuat sebagai prototype statis yang siap dipindahkan ke Laravel Blade/Livewire sesuai standar `CLAUDE.md`.
