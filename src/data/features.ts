export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Globe" | "Search" | "MonitorSmartphone" | "TrendingUp" | "Code2" | "Edit3";
}

export const featurePackageList: FeatureItem[] = [
  {
    id: "domain-hosting",
    title: "Gratis Domain & Hosting",
    description:
      "Setiap pembuatan website sudah termasuk hosting dan domain gratis. Pilih nama domain yang Anda inginkan, dan kami akan urus semuanya.",
    iconName: "Globe",
  },
  {
    id: "ssl-gratis",
    title: "Sertifikat SSL Gratis",
    description:
      "Website Anda akan dilengkapi dengan sertifikat SSL gratis untuk memastikan keamanan dan meningkatkan kepercayaan pengguna.",
    iconName: "Search",
  },
  {
    id: "desain-responsif",
    title: "Desain Responsif",
    description:
      "Website akan tampil sempurna di berbagai perangkat, termasuk komputer, tablet, dan ponsel.",
    iconName: "MonitorSmartphone",
  },
  {
    id: "optimasi-seo",
    title: "Optimasi SEO",
    description:
      "Kami memastikan website Anda mudah ditemukan di mesin pencari seperti Google untuk meningkatkan daya jangkau.",
    iconName: "TrendingUp",
  },
  {
    id: "desain-modern",
    title: "Desain Modern",
    description:
      "Website Anda akan menggunakan desain modern dan teknologi terbaru untuk menjaga kesan profesional dan up-to-date.",
    iconName: "Code2",
  },
  {
    id: "konten-copywriting",
    title: "Layanan Konten & Copywriting",
    description:
      "Kami membantu menulis konten yang menarik dan efektif untuk meningkatkan interaksi dan konversi pengunjung.",
    iconName: "Edit3",
  },
];
