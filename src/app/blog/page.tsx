"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowUpRight, Calendar, Clock, Tag, Sparkles } from "lucide-react";

export default function BlogPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const articles = [
    {
      id: "mengapa-website-lemot-membunuh-konversi",
      title: "Mengapa Kecepatan Website Sangat Berpengaruh Terhadap Omset & Penjualan",
      excerpt:
        "Data menunjukkan 53% pengunjung meninggalkan website yang membutuhkan waktu loading lebih dari 3 detik. Pelajari bagaimana optimasi sub-detik dapat meningkatkan omset bisnis Anda.",
      category: "Web Engineering",
      date: "08 Okt 2026",
      readTime: "4 min read",
      author: "StarDev Engineering Team",
    },
    {
      id: "panduan-seo-website-umkm-2026",
      title: "Panduan Praktis SEO Google untuk Website Bisnis & UMKM Indonesia",
      excerpt:
        "Cara mudah membuat website bisnis Anda mudah ditemukan pelanggan di halaman pertama Google tanpa harus selalu bergantung pada iklan berbayar.",
      category: "SEO & Growth",
      date: "05 Okt 2026",
      readTime: "5 min read",
      author: "StarDev Growth Team",
    },
    {
      id: "keamanan-website-dan-sertifikat-ssl",
      title: "Pentingnya Sertifikat SSL HTTPS: Bukan Sekadar Gembok Hijau di Browser",
      excerpt:
        "Mengapa Google menandai website tanpa SSL sebagai 'Tidak Aman' dan bagaimana enkripsi melindungi data transaksi pelanggan Anda.",
      category: "Security",
      date: "02 Okt 2026",
      readTime: "3 min read",
      author: "StarDev Security Team",
    },
    {
      id: "integrasi-whatsapp-otomatis-di-website",
      title: "Meningkatkan Closing Rate dengan Integrasi Checkout WhatsApp Otomatis",
      excerpt:
        "Perilaku konsumen di Indonesia sangat menyukai konsultasi via WhatsApp. Pelajari format tombol pemesanan interaktif yang terbukti menaikkan konversi.",
      category: "Business Automation",
      date: "28 Sep 2026",
      readTime: "4 min read",
      author: "StarDev Product Team",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 pt-24 sm:pt-32">
        {/* Page Hero */}
        <section className="relative py-16 lg:py-24 bg-[#050505] border-b border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                // BLOG &amp; INSIGHTS • STARDEV STUDIO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-6">
                Wawasan Rekayasa Digital &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                  Pertumbuhan Bisnis
                </span>
              </h1>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
                Artikel, studi kasus, tips teknis, dan panduan terkini seputar pengembangan web, optimasi SEO,
                serta strategi digital langsung dari praktisi StarDev Studio.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20 lg:py-24 bg-[#0B0F19] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl p-7 sm:p-8 bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                      {item.title}
                    </h2>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      {item.date}
                    </span>
                    <span className="text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Baca Selengkapnya
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <WhatsAppButton />
    </div>
  );
}
