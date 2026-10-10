import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional & UMKM | StarDev Studio",
  description:
    "Jasa buat website profesional, modern, responsif, dan terpercaya untuk bisnis Anda. Paket mulai 700rb. Gratis domain & hosting, sertifikat SSL HTTPS, dan optimasi SEO Google. Garansi revisi. Konsultasi WhatsApp gratis.",
  keywords: [
    "Jasa Website",
    "Jasa Pembuatan Website",
    "Jasa Website UMKM",
    "Jasa Website Profesional",
    "Buat Website Murah",
    "Paket Website Mulai 700rb",
    "StarDev Studio",
    "Web Development Indonesia",
    "Jasa Web Company Profile",
    "Jasa Buat Website Toko Online",
    "stardevstudio.id",
  ],
  authors: [{ name: "StarDev Studio", url: "https://stardevstudio.id" }],
  creator: "StarDev Studio",
  metadataBase: new URL("https://stardevstudio.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Pembuatan Website Profesional & UMKM | StarDev Studio",
    description:
      "Jasa buat website profesional, modern, responsif, dan terpercaya untuk bisnis Anda. Paket mulai 700rb. Gratis domain & hosting, sertifikat SSL HTTPS, dan optimasi SEO Google.",
    url: "https://stardevstudio.id",
    siteName: "StarDev Studio",
    images: [
      {
        url: "/logo/LOGO STARDEVSTUDIO.png",
        width: 521,
        height: 116,
        alt: "StarDev Studio — Jasa Pembuatan Website",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional & UMKM | StarDev Studio",
    description:
      "Jasa buat website profesional, modern, responsif, dan terpercaya untuk bisnis Anda. Paket mulai 700rb. Gratis domain & hosting, sertifikat SSL HTTPS, dan optimasi SEO Google.",
    images: ["/logo/LOGO STARDEVSTUDIO.png"],
  },
  icons: {
    icon: [
      { url: "/logo/povicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/logo/povicon.png",
    apple: [
      { url: "/logo/povicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "google7275fa4304625edf",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://stardevstudio.id/#website",
      "url": "https://stardevstudio.id",
      "name": "StarDev Studio",
      "alternateName": ["StarDev", "StarDev Studio Indonesia"],
      "description":
        "Jasa pembuatan website profesional, modern, responsif, dan sistem digital untuk bisnis & UMKM.",
      "inLanguage": "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://stardevstudio.id/#organization",
      "name": "StarDev Studio",
      "url": "https://stardevstudio.id",
      "logo": "https://stardevstudio.id/logo/LOGO%20STARDEVSTUDIO.png",
      "image": "https://stardevstudio.id/logo/LOGO%20STARDEVSTUDIO.png",
      "description":
        "Jasa pembuatan website profesional, modern, responsif, dan terpercaya untuk bisnis Anda. Paket mulai 700rb gratis domain dan hosting.",
      "telephone": "+6281929442611",
      "priceRange": "IDR 700.000 - 3.000.000",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ID",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Paket Pembuatan Website",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paket Silver Website",
              "description": "Website sederhana dan praktis untuk bisnis baru",
            },
            "price": "700000",
            "priceCurrency": "IDR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paket Gold Website",
              "description": "Website e-commerce, toko online & blog lengkap",
            },
            "price": "1600000",
            "priceCurrency": "IDR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paket Diamond Website",
              "description": "Website profil bisnis & company profile terpercaya",
            },
            "price": "2000000",
            "priceCurrency": "IDR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paket Platinum Website",
              "description": "Website sistem kustom, web app & interaktivitas eksklusif",
            },
            "price": "3000000",
            "priceCurrency": "IDR",
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#F5F5F5] min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
