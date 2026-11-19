# ⚡ VOLTWEAR — Premium Gym & Streetwear E-Commerce Website

Website e-commerce fashion premium untuk pakaian gym, fitness, athletic wear, dan streetwear dengan referensi desain dan pengalaman pengguna (UX) yang terinspirasi dari **YoungLA** (spesifiknya produk YoungLA 4185 Heavyweight Oversized Tee: `https://www.youngla.com/products/4185`).

Dibuat menggunakan **Pure Vanilla Web Stack** (HTML5, CSS3, Vanilla JavaScript, LocalStorage) tanpa framework eksternal, siap dijalankan langsung di browser menggunakan Visual Studio Code Live Server.

---

## 🎨 Brand & Visual Identity

- **Brand Name**: VOLTWEAR® PRO
- **Design Philosophy**: Minimalist Luxury Athletic & Streetwear Aesthetic
- **Color Palette**:
  - `Primary`: `#111111` (Deep Obsidian / Blackout)
  - `Secondary`: `#F5F5F5` (Off-white / Slate tint)
  - `Accent`: `#D9FF00` (Electric Volt Neon Lime)
  - `Gray`: `#A5A5A5` / `#666666`
  - `White`: `#FFFFFF`
- **Typography**:
  - Headings: `Bebas Neue` & `Syne`
  - Body & UI: `Plus Jakarta Sans`
  - Badges & SKU: `Space Grotesk`
- **Iconography**: Font Awesome 6 Pro / Free CDN

---

## 📁 Struktur File Project

```
c:\YOUNGLA\
├── index.html              # Homepage lengkap + Master Catalog + Filter + Hero
├── product.html            # Halaman detail produk (YoungLA 4185 inspired)
├── cart.html               # Halaman keranjang belanja lengkap & checkout simulation
├── serve.js                # Server lokal Node.js opsional (zero-dependency)
├── README.md               # Dokumentasi lengkap & panduan penggunaan
├── css/
│   ├── style.css           # Design tokens, navbar, hero, catalog cards, modals, toast
│   ├── product.css         # Styling halaman produk: sticky gallery, swatches, accordions, reviews
│   └── responsive.css      # Responsivitas mobile hamburger, tablet, dan phone layout
├── js/
│   ├── products.js         # Database 12 produk gym fashion lengkap dengan gambar & review
│   ├── cart.js             # Cart engine LocalStorage, drawer sliding, free shipping meter, coupons
│   ├── product-detail.js   # Interaktivitas PDP (image zoom, swatches, size guide, review modal)
│   └── main.js             # Global navigation, live search modal, catalog filters, quick view
└── assets/
    ├── images/
    │   └── logo.svg        # Logo vektor resmi VOLTWEAR PRO
    ├── icons/
    │   └── bolt.svg        # Icon bolt volt neon
    └── banners/
```

---

## 🚀 Fitur Unggulan Website

### 1. Homepage (`index.html`)
- **Announcement Bar**: Promosi gratis ongkir global dan voucher diskon `VOLT15`.
- **Sticky Navbar**: Logo VOLTWEAR dengan volt icon, link kategori (Men, Women, New Arrivals, Best Sellers, Sale), live search bar modal, user profile trigger, dan icon shopping bag dengan counter badge realtime.
- **Hero Section**: Foto model gym beresolusi tinggi, tipografi bold, counter statistik atlet (320 GSM, 500K+ Athletes, 4.9★ Rating), dan dual CTA buttons.
- **Trust Bar**: 4 pilar brand (Free Global Shipping, 30-Day Returns, Custom Knits, Ergonomic Athlete Fit).
- **Shop By Category**: 6 grid kategori estetis (Oversized Tees, Hoodies & Pump Covers, Cargo Joggers, 5" Shorts, Compression, Women Seamless).
- **New Arrivals & Best Sellers**: Showcase produk terbaru dan terlaris.
- **Full Catalog Grid**: Filter kategori, filter gender, filter ukuran, sorting harga (terendah/tertinggi/rating/terbaru), serta tombol **Quick View** dan **Quick Add Size** langsung di card produk.
- **Brand Story / Manifesto**: Cerita brand "BUILT IN THE GYM. REFINED FOR THE STREETS." dengan detail spesifikasi kain 320 GSM dan 1.25" collar.
- **Athlete Instagram Lookbook**: 6 ubin lookbook atlet berserta username Instagram.
- **Newsletter Subscription**: Formulir newsletter interaktif dengan validasi email dan kode promo `VOLT15` otomatis.
- **Footer Lengkap**: Informasi brand, tautan bantuan, kebijakan retur, dan badge pembayaran (Visa, Mastercard, Amex, Apple Pay, Google Pay, PayPal).

### 2. Product Detail Page (`product.html`) — Fokus YoungLA 4185
- **2-Column Editorial Layout**:
  - **Sisi Kiri (Gallery)**:
    - Thumbnail strip vertikal/horizontal (klik/hover untuk mengganti gambar).
    - Gambar utama besar dengan **Interactive Hover Zoom Lens** (efek pembesar halus saat kursor digerakkan).
    - Tombol Lightbox Fullscreen untuk melihat foto resolusi tinggi.
    - Menampilkan sudut depan, belakang, samping, dan detail tekstur kain.
  - **Sisi Kanan (Product Configuration)**:
    - Nama produk: *4185 'IMMORTAL' HEAVYWEIGHT OVERSIZED TEE*.
    - Harga diskon `$48.00`, harga asli `$64.00`, dan badge diskon `SAVE 25%`.
    - Simulasi cicilan 4x tanpa bunga via Klarna / Afterpay.
    - **Color Swatches**: Pilihan warna interaktif (*Washed Onyx, Vintage Slate Gray, Off-White Chalk, Electric Volt*). Mengganti warna otomatis memperbarui galeri foto sesuai warna yang dipilih!
    - **Size Selector**: Pilihan ukuran *S, M, L, XL, XXL* dengan indikator stok menipis (*High Demand Alert*).
    - **Validasi Ukuran**: Jika tombol Add to Bag diklik tanpa memilih ukuran, muncul notifikasi error bergetar (*shake animation*) dan toast peringatan.
    - **Size Guide Button & Modal**: Tabel ukuran lengkap dengan tab *Centimeters (CM)* dan *Inches (IN)*, panduan cara mengukur dada, bahu, panjang, dan lengan, serta saran ukuran model.
    - **Tombol ADD TO BAG**: Ukuran besar, animasi sukses saat diklik, otomatis membuka **Sliding Cart Drawer**, dan menyimpan data ke `LocalStorage`.
    - **Tombol BUY WITH 1-CLICK**: Langsung menuju checkout.
    - **Perks Box**: Pengiriman gratis $100+, 320 GSM combed cotton, 30 hari retur, anti-susut.
    - **Accordion Dropdown**: *Description & Overview*, *Fabric & Care Guide*, *Fit & Sizing Specs*, dan *Shipping & Free Returns*.
- **Customer Reviews Section**:
  - Skor rating besar (4.9 / 5.0) berdasarkan 384 ulasan verified.
  - Baris breakdown bintang 5 hingga 1 bintang dengan persentase.
  - Bar meter fit komunitas (*True to Size 88%*).
  - Modal **Write a Review** interaktif (pemilihan bintang rating 1-5, nama, email, fit feedback, judul, komentar) yang langsung menerbitkan ulasan baru ke halaman!
  - Kartu ulasan pelanggan nyata dengan badge *Verified Buyer*, detail ukuran yang dibeli, dan tombol voting *Helpful*.
- **Related Products ("Complete The Look")**: Rekomendasi item pelengkap.
- **Sticky Add-to-Cart Bottom Bar**: Bar mengambang di bawah layar saat user scroll melewati tombol beli utama.

### 3. Shopping Cart Engine & Halaman Cart (`cart.html`)
- **Sliding Cart Drawer**: Terbuka dari sisi kanan di halaman mana pun saat tombol bag diklik atau saat produk ditambahkan.
- **Free Shipping Progress Bar**: Baris kalkulasi otomatis (contoh: *"Add $18.00 more for Free Worldwide Shipping"* atau *"FREE EXPRESS SHIPPING UNLOCKED"* jika subtotal >= $100).
- **Quantity Stepper**: Tombol [-] dan [+] dengan kalkulasi harga seketika.
- **Hapus Item**: Tombol trash can dengan konfirmasi toast.
- **Sistem Kupon / Promo Code**:
  - Masukkan kode `VOLT15` untuk diskon 15%!
  - Masukkan kode `PUMP10` untuk diskon 10%!
  - Masukkan kode `FREESHIP` untuk bebas ongkir!
- **Halaman Cart Penuh (`cart.html`)**:
  - Tabel rincian produk, harga, quantity, dan subtotal per item.
  - Ringkasan pesanan: Subtotal, diskon kupon, estimasi ongkir, estimasi pajak (8%), dan Grand Total.
  - Tombol **Clear Entire Bag**.
  - Tombol **Proceed to Checkout** yang membuka modal simulasi pembayaran 256-bit SSL aman.
- **LocalStorage**: Data keranjang belanja dan kupon aktif tetap tersimpan aman saat browser di-refresh atau berpindah halaman.

---

## 💻 Panduan Menjalankan Project

### Opsi A: Menggunakan Visual Studio Code Live Server (Direkomendasikan)

1. Buka folder `c:\YOUNGLA` di **Visual Studio Code**:
   ```bash
   code c:\YOUNGLA
   ```
2. Pastikan ekstensi **Live Server** (oleh *Ritwick Dey*) sudah terpasang di VS Code:
   - Tekan `Ctrl + Shift + X`.
   - Cari `Live Server`, lalu klik **Install**.
3. Di file explorer VS Code, klik kanan pada file `index.html`.
4. Pilih **"Open with Live Server"** (atau klik tombol **"Go Live"** di status bar kanan bawah VS Code).
5. Browser Anda akan otomatis membuka:
   ```
   http://127.0.0.1:5500/index.html
   ```

---

### Opsi B: Menggunakan Node.js Built-In Server (Tanpa Extension Tambahan)

1. Buka Terminal / PowerShell di direktori `c:\YOUNGLA`.
2. Jalankan perintah:
   ```bash
   node serve.js
   ```
3. Buka browser dan akses:
   ```
   http://localhost:3000/
   ```

---

## 🧪 Panduan Uji Fitur & Navigasi

1. **Buka Halaman Utama**:
   - Jelajahi Hero, kategori produk, produk New Arrivals, dan Best Sellers.
   - Di bagian katalog, coba klik filter **"Oversized Tees"**, **"Hoodies"**, **"Men"**, atau **"Women"**.
   - Coba sorting dari **"Price: Low to High"** atau **"Highest Rated"**.
   - Buka ikon kaca pembesar (Search) di navbar, ketik kata kunci seperti `"4185"` atau `"cargo"`.
2. **Buka Halaman Detail Produk YoungLA 4185**:
   - Akses `product.html?id=4185` (atau klik kartu produk 4185 di homepage).
   - Hover pada foto utama untuk melihat efek zoom lensa pembesar.
   - Klik thumbnail foto yang berbeda atau klik tombol fullscreen expand.
   - Coba klik swatch warna lain (*Vintage Slate Gray*, *Off-White Chalk*) — galeri foto akan langsung berubah sesuai warna!
   - Klik tombol **"Size Guide & Fit"** untuk melihat tabel ukuran dalam Centimeters (CM) dan Inches (IN).
   - Klik **"ADD TO BAG"** tanpa memilih ukuran terlebih dahulu — perhatikan peringatan validasi merah dan animasi getar.
   - Pilih ukuran **L** — perhatikan indikator stok (*Low Stock*).
   - Klik **"ADD TO BAG"** — drawer keranjang belanja akan meluncur keluar dari kanan dengan progress bar Free Shipping dan notifikasi toast.
   - Buka section review, baca ulasan pelanggan, atau klik **"WRITE A REVIEW"** untuk mencoba mengirim ulasan baru.
3. **Buka Halaman Keranjang Belanja**:
   - Klik **"VIEW FULL BAG & COUPONS"** atau buka `cart.html`.
   - Ubah quantity produk dengan tombol [+] atau [-].
   - Masukkan kode kupon `VOLT15` di kotak Promo Code lalu klik **APPLY** — diskon 15% akan langsung dipotong dari subtotal.
   - Klik **"PROCEED TO CHECKOUT"** untuk mencoba modal pembayaran instan.
   - Refresh browser Anda untuk membuktikan bahwa seluruh data keranjang belanja tetap tersimpan berkat `LocalStorage`.

---

© 2026 VOLTWEAR APPAREL LLC. ALL RIGHTS RESERVED.

