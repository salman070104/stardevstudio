export interface WebsiteSolution {
  id: string;
  number: string;
  title: string;
  category: "business" | "system" | "public";
  categoryLabel: string;
  tagline: string;
  description: string;
  features: string[];
  suitableFor: string;
}

export const websiteSolutions: WebsiteSolution[] = [
  {
    id: "website-perusahaan",
    number: "01",
    title: "Website Perusahaan",
    category: "business",
    categoryLabel: "Bisnis & Komersial",
    tagline: "Company profile profesional untuk meningkatkan kredibilitas & reputasi brand",
    description:
      "Website corporate berkelas dunia dengan performa loading cepat, desain elegan, struktur SEO optimal, dan formulir inquiry klien terintegrasi.",
    features: [
      "Desain Eksklusif & Modern",
      "Struktur SEO Google Siap Ranking",
      "Katalog Portofolio & Legalitas",
      "Integrasi Email Domain Perusahaan"
    ],
    suitableFor: "Perusahaan, PT, CV, Startup, dan Holding Corporate"
  },
  {
    id: "website-umkm",
    number: "02",
    title: "Website UMKM",
    category: "business",
    categoryLabel: "Bisnis & Komersial",
    tagline: "Katalog produk dan etalase digital untuk memperluas jangkauan pasar",
    description:
      "Website praktis dan ekonomis untuk memajang produk lokal, profil toko, galeri foto, peta lokasi Google Maps, dan tombol order WhatsApp langsung.",
    features: [
      "Katalog Produk & Pricelist Rapi",
      "Tombol Order WhatsApp Otomatis",
      "Integrasi Google Maps & Jam Buka",
      "Ringan & Ramah Kuota di Smartphone"
    ],
    suitableFor: "Toko Grosir, Produsen Lokal, Cafe, Kerajinan & Bisnis Rumahan"
  },
  {
    id: "website-desa",
    number: "03",
    title: "Website Desa",
    category: "public",
    categoryLabel: "Publik & Edukasi",
    tagline: "Sistem Informasi Desa (SID), transparansi publik, dan layanan surat warga",
    description:
      "Portal resmi pemerintah desa untuk publikasi berita, profil aparatur desa, transparansi anggaran APBDes, potensi lokal, dan pengajuan surat mandiri.",
    features: [
      "Profil Aparatur & Peta Wilayah",
      "Portal Berita & Agenda Kegiatan",
      "Transparansi Anggaran & Dana Desa",
      "Formulir Permohonan Surat Online"
    ],
    suitableFor: "Kantor Desa, Balai Desa, dan BUMDes"
  },
  {
    id: "website-pemesanan",
    number: "04",
    title: "Website Pemesanan (Booking)",
    category: "system",
    categoryLabel: "Sistem & Operasional",
    tagline: "Sistem reservasi jadwal, sewa, dan booking tiket otomatis 24 jam",
    description:
      "Sistem pemesanan online otomatis yang memudahkan pelanggan memilih tanggal, melihat ketersediaan slot, konfirmasi instan, dan notifikasi ke pengelola.",
    features: [
      "Kalender Ketersediaan Real-Time",
      "Manajemen Kuota & Slot Waktu",
      "Notifikasi WhatsApp / Email Instan",
      "Integrasi Pembayaran Otomatis"
    ],
    suitableFor: "Studio Foto, Lapangan Olahraga, Klinik, Travel & Salon"
  },
  {
    id: "website-sistem-kasir",
    number: "05",
    title: "Website Sistem Kasir (POS)",
    category: "system",
    categoryLabel: "Sistem & Operasional",
    tagline: "Aplikasi kasir berbasis web untuk catat penjualan dan stok real-time",
    description:
      "Sistem kasir cloud Point of Sale (POS) yang dapat diakses dari laptop, tablet, atau HP untuk mencatat transaksi harian, stok barang, cetak struk, dan rekap omzet.",
    features: [
      "Pencatatan Transaksi & Cetak Struk Thermal",
      "Manajemen Stok Barang & Barcode",
      "Laporan Laba Rugi & Omzet Harian",
      "Multi-Role: Kasir, Admin, dan Owner"
    ],
    suitableFor: "Retail, Minimarket, Coffee Shop, Toko Pakaian & Bengkel"
  },
  {
    id: "website-landing-page",
    number: "06",
    title: "Website Landing Page",
    category: "business",
    categoryLabel: "Bisnis & Komersial",
    tagline: "Halaman penawaran produk berkonversi tinggi untuk iklan & kampanye",
    description:
      "Landing page satu halaman (single page) dengan copywriting persuasif, loading secepat kilat, dan tombol CTA strategis yang siap dihubungkan ke Facebook Ads / Google Ads.",
    features: [
      "Copywriting Penjualan Teruji",
      "Kecepatan Loading Sub-Detik",
      "Integrasi Meta Pixel & Google Analytics",
      "Direct Call-To-Action ke WhatsApp"
    ],
    suitableFor: "Produk Khusus, Event, Pelatihan, Kursus, dan Promosi Kilat"
  },
  {
    id: "website-sekolah",
    number: "07",
    title: "Website Sekolah",
    category: "public",
    categoryLabel: "Publik & Edukasi",
    tagline: "Profil akademik, sistem PPDB online, dan wadah prestasi siswa",
    description:
      "Portal sekolah modern yang informatif untuk pengumuman resmi, profil guru, galeri kegiatan ekstrakurikuler, dan modul pendaftaran santri/siswa baru (PPDB).",
    features: [
      "Modul PPDB / Pendaftaran Online",
      "Daftar Tenaga Pendidik & Prestasi",
      "Pengumuman Kelulusan & Agenda",
      "Download Materi & Kalender Akademik"
    ],
    suitableFor: "SD, SMP, SMA, SMK, Pondok Pesantren, dan Bimbel"
  },
  {
    id: "website-kecamatan",
    number: "08",
    title: "Website Kecamatan",
    category: "public",
    categoryLabel: "Publik & Edukasi",
    tagline: "Pusat informasi publik kecamatan dan integrasi data seluruh desa",
    description:
      "Portal resmi kantor kecamatan untuk mempublikasikan layanan administrasi terpadu (PATEN), data statistik kewilayahan, profil instansi, dan informasi antar-desa.",
    features: [
      "Panduan Layanan KTP, KK, & Perizinan",
      "Direktori Desa/Kelurahan Binaan",
      "Struktur Organisasi & Pejabat",
      "Kanal Aduan & Aspirasi Masyarakat"
    ],
    suitableFor: "Kantor Kecamatan dan Instansi Wilayah Terpadu"
  },
  {
    id: "website-pemerintahan",
    number: "09",
    title: "Website Pemerintahan",
    category: "public",
    categoryLabel: "Publik & Edukasi",
    tagline: "Portal resmi OPD / Dinas dengan standar keamanan & transparansi e-Gov",
    description:
      "Website dinas/instansi pemerintah yang aman, memenuhi standar kepatuhan e-Government, menyajikan dokumen publik, PPID, dan integrasi API layanan pemerintahan.",
    features: [
      "Standar Keamanan Tinggi & Anti-Deface",
      "Layanan Keterbukaan Informasi (PPID)",
      "Regulasi, SK, & Arsip Dokumen Publik",
      "Desain Netral, Formal, & Aksesibel"
    ],
    suitableFor: "Dinas Pemda, OPD, Badan Daerah, dan Lembaga Instansi Publik"
  }
];
