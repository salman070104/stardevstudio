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
  title: "StarDev Studio — Web, AI & Digital Solutions",
  description:
    "StarDev Studio membangun website, web application, AI automation, dan digital solutions untuk bisnis modern.",
  keywords: [
    "StarDev Studio",
    "Web Development",
    "Web Application",
    "AI Automation",
    "Company Profile",
    "Software Agency",
    "Digital Solutions",
    "stardevstudio.id"
  ],
  authors: [{ name: "StarDev Studio", url: "https://stardevstudio.id" }],
  creator: "StarDev Studio",
  metadataBase: new URL("https://stardevstudio.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StarDev Studio — Web, AI & Digital Solutions",
    description:
      "StarDev Studio membangun website, web application, AI automation, dan digital solutions untuk bisnis modern.",
    url: "https://stardevstudio.id",
    siteName: "StarDev Studio",
    images: [
      {
        url: "/logo/LOGO STARDEVSTUDIO.png",
        width: 521,
        height: 116,
        alt: "StarDev Studio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StarDev Studio — Web, AI & Digital Solutions",
    description:
      "StarDev Studio membangun website, web application, AI automation, dan digital solutions untuk bisnis modern.",
    images: ["/logo/LOGO STARDEVSTUDIO.png"],
  },
  icons: {
    icon: "/logo/LOGO STARDEVSTUDIO.png",
    apple: "/logo/LOGO STARDEVSTUDIO.png",
  },
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
      <body className="bg-[#050505] text-[#F5F5F5] min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
