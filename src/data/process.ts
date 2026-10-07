export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Understanding your vision & business needs",
    description: "Memahami model bisnis, problem inti, target pasar, ekspektasi teknis, dan tujuan jangka panjang produk Anda.",
    deliverable: "Product Brief & Scope of Work"
  },
  {
    step: "02",
    title: "PLAN",
    subtitle: "Architecture & strategic roadmap",
    description: "Menyusun struktur arsitektur data, user flow perjalanan pengguna, pemilihan stack teknologi, dan jadwal milestones.",
    deliverable: "System Architecture & Roadmap"
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Interface design & high-fidelity prototype",
    description: "Membuat visual interface modern, wireframe detail, design token system, dan prototipe interaktif yang memikat.",
    deliverable: "Interactive Figma Design System"
  },
  {
    step: "04",
    title: "BUILD",
    subtitle: "Clean code & modern engineering",
    description: "Coding dengan standar industri: Next.js, TypeScript, scalable architecture, modul modular, dan best practices keamanan.",
    deliverable: "Functional Fullstack Codebase"
  },
  {
    step: "05",
    title: "LAUNCH",
    subtitle: "Rigorous QA & lightning deployment",
    description: "Pengujian menyeluruh (cross-browser, mobile devices, security check, performance audit) lalu deploy ke cloud server.",
    deliverable: "Production Deployment & Domain Live"
  },
  {
    step: "06",
    title: "GROW",
    subtitle: "Continuous scale & intelligent automation",
    description: "Maintenance berkala, monitoring kesehatan server, integrasi automasi lanjutan, dan scaling fitur seiring pertumbuhan bisnis.",
    deliverable: "Dedicated Support & Growth Retainer"
  }
];

export interface BenefitItem {
  number: string;
  title: string;
  badge: string;
  description: string;
  highlight: string;
}

export const benefitsData: BenefitItem[] = [
  {
    number: "01",
    title: "Built for Business",
    badge: "ROI Focused",
    description: "Kami tidak sekadar menulis kode; setiap fitur dirancang untuk menghasilkan konversi nyata, efisiensi operasional, dan reputasi brand profesional.",
    highlight: "Berorientasi pada hasil bisnis & konversi"
  },
  {
    number: "02",
    title: "Modern Technology",
    badge: "Cutting-Edge",
    description: "Mengadopsi ekosistem modern (Next.js App Router, TypeScript, Tailwind) yang cepat, aman, dan mudah dimaintain tanpa beban legacy code.",
    highlight: "Tech stack masa depan tanpa utang teknis"
  },
  {
    number: "03",
    title: "Fast & Responsive",
    badge: "Sub-Second Load",
    description: "Layout diuji presisi pada desktop, tablet, dan smartphone dengan skor Lighthouse tinggi untuk pengalaman pengguna yang instan tanpa lag.",
    highlight: "Performa secepat kilat di setiap perangkat"
  },
  {
    number: "04",
    title: "Scalable Architecture",
    badge: "Enterprise Ready",
    description: "Arsitektur kode terstruktur modular yang siap menangani lonjakan trafik ratusan ribu pengguna tanpa perlu refactor dari awal.",
    highlight: "Mudah dikembangkan seiring skala bisnis"
  },
  {
    number: "05",
    title: "AI Ready",
    badge: "Future Proof",
    description: "Integrasi cerdas dengan LLM API, AI assistants, dan automated workflow yang menempatkan perusahaan Anda selangkah di depan kompetitor.",
    highlight: "Kesiapan integrasi AI & otomatisasi"
  },
  {
    number: "06",
    title: "Long-Term Support",
    badge: "Partnership",
    description: "Dukungan pasca-peluncuran yang responsif, pembaruan keamanan berkala, dan konsultasi teknis berkelanjutan demi kelancaran operasional.",
    highlight: "Mitra teknologi jangka panjang terpercaya"
  }
];
