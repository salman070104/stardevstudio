export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  metrics: { label: string; value: string };
  tags: string[];
  themeColor: string;
  accentBg: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "keluarga-di-indonesia",
    number: "01",
    title: "Keluarga di Indonesia",
    category: "E-Commerce & Digital Store",
    year: "2026",
    tagline: "High-converting digital catalog & checkout experience",
    description:
      "Platform e-commerce katalog digital dan asset studio dengan alur belanja mulus, sistem checkout terintegrasi, dan performa visual sinematik.",
    image: "/images/1.png",
    metrics: { label: "Conversion Rate", value: "+46%" },
    tags: ["Next.js", "Tailwind CSS", "Payment Gateway", "SEO Suite"],
    themeColor: "#2563EB",
    accentBg: "from-blue-600/20 to-cyan-500/10"
  },
  {
    id: "starconnect-portal",
    number: "02",
    title: "StarConnect Portal",
    category: "Web Application & Billing System",
    year: "2026",
    tagline: "Customer authentication & automated billing engine",
    description:
      "Aplikasi web portal pelanggan modern untuk cek tagihan, riwayat transaksi, dan manajemen akun internet dengan proteksi keamanan tinggi.",
    image: "/images/2.png",
    metrics: { label: "Operational Speed", value: "+340%" },
    tags: ["React", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    themeColor: "#06B6D4",
    accentBg: "from-cyan-500/20 to-blue-600/10"
  },
  {
    id: "starconnect-isp",
    number: "03",
    title: "StarConnect Internet",
    category: "ISP & Corporate Website",
    year: "2026",
    tagline: "Modern ISP broadband & business service showcase",
    description:
      "Website corporate ISP dengan interaktivitas visual 3D modern, informasi paket WiFi interaktif, dan integrasi WhatsApp booking instan.",
    image: "/images/3.png",
    metrics: { label: "Performance Score", value: "99/100" },
    tags: ["Next.js", "TypeScript", "Tailwind", "WhatsApp CRM"],
    themeColor: "#3B82F6",
    accentBg: "from-blue-500/20 to-indigo-600/10"
  },
  {
    id: "blok-m-studio",
    number: "04",
    title: "Blok M Studio",
    category: "Creative Agency & Studio Website",
    year: "2026",
    tagline: "Editorial photography studio portfolio & booking system",
    description:
      "Website portfolio kreatif untuk studio fotografi profesional dengan layout editorial, dark mode elegan, dan fitur reservasi jadwal online.",
    image: "/images/4.png",
    metrics: { label: "User Engagement", value: "4.9/5.0" },
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Cloudflare"],
    themeColor: "#0EA5E9",
    accentBg: "from-sky-500/20 to-cyan-600/10"
  }
];
