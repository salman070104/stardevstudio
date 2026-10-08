export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  renewal: string;
  featured: boolean;
  popular?: boolean;
  features: string[];
  waMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "silver",
    name: "Paket Silver",
    description:
      "Paket ini cocok untuk Anda yang baru memulai bisnis dan membutuhkan website sederhana yang praktis.",
    price: "IDR. 700K",
    renewal: "Perpanjangan 500rb/tahun",
    featured: false,
    features: [
      "Gratis Domain Resmi (.com / .id)",
      "High-Speed Cloud Hosting 1 Tahun",
      "Sertifikat Keamanan SSL HTTPS Gembok Hijau",
      "1 - 3 Halaman Utama Siap Pakai",
      "Desain Responsif (Presisi di HP & Laptop)",
      "Integrasi Tombol WhatsApp & Media Sosial",
      "Garansi Bebas Revisi Sampai Puas",
      "Panduan Penggunaan Website",
    ],
    waMessage:
      "Halo StarDev Studio, saya tertarik untuk memesan Paket Silver (IDR 700K). Boleh minta info alur pemesanannya?",
  },
  {
    id: "gold",
    name: "Paket Gold",
    badge: "Paling Populer",
    popular: true,
    description:
      "Paket ini ideal untuk Anda yang membutuhkan website dengan fitur lengkap seperti e-commerce, blog, dan lainnya.",
    price: "IDR 1,6JUTA",
    renewal: "Perpanjangan 600rb/tahun",
    featured: true,
    features: [
      "Gratis Domain Resmi (.com / .id)",
      "Cloud Server Berkecepatan Tinggi 1 Tahun",
      "Sertifikat Keamanan SSL HTTPS Premium",
      "Hingga 5 - 8 Halaman / Katalog Produk",
      "Fitur E-Commerce / Toko Online / Blog Berita",
      "Integrasi Checkout & Form Pemesanan WhatsApp",
      "Desain Modern Kustom sesuai Branding Bisnis",
      "Optimasi SEO Google Agar Mudah Ditemukan",
      "Garansi Bebas Revisi Sampai Puas",
      "Support & Pendampingan Teknis 24 Jam",
    ],
    waMessage:
      "Halo StarDev Studio, saya tertarik untuk memesan Paket Gold (IDR 1.6 Juta). Boleh minta info alur pemesanannya?",
  },
  {
    id: "diamond",
    name: "Paket Diamond",
    description:
      "Paket ini cocok untuk Anda yang membutuhkan website profil bisnis untuk meningkatkan kehadiran online.",
    price: "IDR. 2JUTA",
    renewal: "Perpanjangan 1juta/tahun",
    featured: false,
    features: [
      "Gratis Domain Bisnis (.com / .id / .co.id)",
      "Cloud Server Bisnis Prioritas 1 Tahun",
      "Sertifikat Keamanan SSL HTTPS Enterprise",
      "Hingga 10 - 15 Halaman Kustom Interaktif",
      "Desain Editorial Eksklusif Kelas Perusahaan",
      "Fitur Portofolio Proyek, Layanan & Tim",
      "Integrasi Email Perusahaan Resmi (nama@domain.id)",
      "Setup SEO Advance & Google Search Console",
      "Garansi Bebas Revisi Sampai Puas",
      "Prioritas Support Teknis Siaga 24 Jam",
    ],
    waMessage:
      "Halo StarDev Studio, saya tertarik untuk memesan Paket Diamond (IDR 2 Juta). Boleh minta info alur pemesanannya?",
  },
  {
    id: "platinum",
    name: "Paket Platinum",
    description:
      "Paket ini ideal untuk Anda yang membutuhkan website dengan fitur kompleks dan desain yang unik serta menarik.",
    price: "IDR. 3JUTA",
    renewal: "Perpanjangan 50% per tahun",
    featured: false,
    features: [
      "Gratis Domain Pilihan (.com / .id / .co.id / .sch.id / .desa.id)",
      "Dedicated High-Performance Cloud Server",
      "Sertifikat SSL HTTPS & Proteksi DDoS",
      "Halaman & Fitur Kustom Sesuai Kebutuhan",
      "Dukungan Sistem Kasir / Web App / Portal Desa / Sekolah / Booking",
      "Database Terintegrasi & Multi-User Management",
      "Animasi 3D / Interaktivitas Modern Generasi Baru",
      "Full Training Admin & Buku Panduan Khusus",
      "Garansi Maintenance Penuh & Bebas Bug",
      "Dedicated Project Manager & Support 24/7",
    ],
    waMessage:
      "Halo StarDev Studio, saya tertarik untuk memesan Paket Platinum (IDR 3 Juta). Boleh minta info alur pemesanannya?",
  },
];
