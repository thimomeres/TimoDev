# Law Society of Singapore — Homepage

Proyek front-end homepage untuk The Law Society of Singapore. Dibangun dengan React + Vite, menampilkan carousel berita yang mengambil data dari **The Guardian Open Platform API**.

## Tech stack

| Teknologi | Versi / Catatan |
|-----------|-----------------|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 (tersedia, styling utama memakai CSS per-section) |
| The Guardian API | Direkomendasikan untuk tugas ini |

## Pengaturan (Setup)

### 1. Clone & install

```bash
git clone <url-repositori-anda>
cd law-society-test
npm install
```

### 2. Kunci API Guardian

```bash
cp .env.example .env
```

Edit `.env` dan isi kunci API:

```
VITE_GUARDIAN_API_KEY=your_guardian_api_key_here
```

### 3. Cara mendapatkan kunci API (gratis)

1. Buka [The Guardian Open Platform](https://open-platform.theguardian.com/access/)
2. Daftar akun developer (gratis, tanpa kartu kredit)
3. Buat aplikasi baru → salin **API key**
4. Tempel ke `VITE_GUARDIAN_API_KEY` di file `.env`
5. Restart dev server jika sedang berjalan

### 4. Jalankan

```bash
npm run dev     # development → http://localhost:5173
npm run build   # production build
npm run preview # preview build
```

## API yang digunakan

**The Guardian Open Platform** — `https://content.guardianapis.com/search`

| Parameter | Nilai |
|-----------|-------|
| Query | `law OR legal OR court OR justice OR lawyer` |
| `page-size` | 30 (difilter, min. 6 artikel valid) |
| `show-fields` | `thumbnail, trailText, standfirst, headline` |
| `order-by` | `newest` |

File terkait:
- `src/services/guardianApi.js` — fetch & mapping data
- `src/hooks/useNewsArticles.js` — state loading / error / retry
- `src/utils/formatDate.js` — format tanggal `DD MMM YYYY` (bulan Indonesia)

## Fitur carousel berita

| Persyaratan | Status |
|-------------|--------|
| Thumbnail dari API + placeholder cadangan | ✅ |
| Tanggal `DD MMM YYYY` (contoh: 24 Mei 2025) | ✅ |
| Judul maks. 2 baris (`line-clamp`) | ✅ |
| Deskripsi maks. 3 baris (`line-clamp`) | ✅ |
| Tautan "Baca selengkapnya" → tab baru | ✅ |
| Desktop ≥1280px → 3 kartu | ✅ |
| Tablet 768–1279px → 2 kartu | ✅ |
| Mobile <768px → 1 kartu | ✅ |
| Panah kiri/kanan + animasi geser | ✅ |
| Min. 6 artikel | ✅ |
| Status loading (skeleton) | ✅ |
| Status error + tombol retry | ✅ |
| `aria-label` pada kontrol carousel | ✅ |

### Bonus yang diimplementasikan

- **Skeleton cards** saat loading (bukan spinner biasa)
- **Auto-play** setiap 5 detik, **berhenti saat hover/focus**
- **Animasi masuk** saat scroll ke setiap section (fade + slide up)
- **Navigasi hamburger** full-screen overlay (desktop & mobile)

## Struktur halaman

1. Hero — "BECOME AN AFFILIATE OF THE LAW SOCIETY"
2. What We Do — kartu layanan
3. 60th Anniversary banner
4. Media & Press — carousel berita (Guardian API)
5. Career Growth banner
6. Footer

## Struktur folder

```
src/
├── components/
│   ├── atoms/          # Ikon kecil
│   ├── molecules/      # PressCard, ServiceCard, MobileNav
│   ├── organisms/      # NewsCarousel, NavOverlay
│   └── sections/       # Hero, WhatWeDo, Anniversary, dll.
├── hooks/              # useNewsArticles
├── services/           # guardianApi
├── utils/              # formatDate
└── pages/              # HomePage
```

## Masalah yang diketahui (Known issues)

1. **Tanggal artikel** memakai nama bulan singkat Indonesia (`Mei`, `Agu`) — sesuai contoh brief, bukan format Inggris penuh.
2. **Beberapa artikel Guardian** tidak memiliki `trailText` yang cukup panjang dan difilter; jika hasil API sedikit, carousel bisa menampilkan pesan error.
3. **File `career-phone-hand.svg`** berukuran besar (~7 MB) — dapat memperlambat load pertama kali.
4. **Menu navigasi overlay** adalah implementasi front-end statis (link `#`) — tidak terhubung ke halaman nyata.
5. **Repositori Git** perlu diinisialisasi terpisah di folder proyek ini dengan commit history yang rapi sebelum dikumpulkan (lihat bagian di bawah).

## Keputusan desain

- Teks kartu berita memakai **"Baca selengkapnya"** sesuai brief tugas (bukan "MORE DETAIL" dari Figma).
- Pesan error carousel dalam **Bahasa Indonesia** agar mudah dipahami pengguna lokal.
- Navigasi desktop muncul sebagai **overlay full-screen** saat hamburger diklik, bukan navbar tetap di atas halaman.

## Pengumpulan (Checklist)

Sebelum submit, pastikan:

- [ ] Repositori GitHub **publik** khusus proyek ini
- [ ] **Commit history** rapi (bukan satu commit besar)
- [ ] `.env` **tidak** di-commit (sudah ada di `.gitignore`)
- [ ] `README.md` ini lengkap dan akurat
- [ ] API key valid — carousel menampilkan artikel nyata

### Inisialisasi Git (jika belum)

```bash
cd law-society-test
git init
git add .
git commit -m "feat: initial homepage with Guardian API carousel"
# Buat commit terpisah per fitur/section untuk riwayat yang bersih
```

## Lisensi

Proyek ini dibuat untuk keperluan penilaian / tugas front-end.
