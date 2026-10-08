"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FeaturePackage } from "@/components/FeaturePackage";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { mainServicesList, MainService } from "@/data/services";
import {
  Globe,
  Search,
  Target,
  Code2,
  Share2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function LayananPage() {
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

  const getServiceIcon = (iconName: MainService["iconName"]) => {
    const iconClass = "w-7 h-7";
    switch (iconName) {
      case "Globe":
        return <Globe className={iconClass} />;
      case "Search":
        return <Search className={iconClass} />;
      case "Target":
        return <Target className={iconClass} />;
      case "Code2":
        return <Code2 className={iconClass} />;
      case "Share2":
        return <Share2 className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      default:
        return <Globe className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 pt-24 sm:pt-32">
        {/* Page Hero */}
        <section className="relative py-16 lg:py-24 bg-[#050505] border-b border-white/10 overflow-hidden bg-grid-dark">
          {/* Ambient glow */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="badge-shine inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                  // LAYANAN &amp; PAKET • STARDEV STUDIO
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-6">
                Solusi Website &amp; <br />
                <span className="text-shimmer drop-shadow-[0_0_35px_rgba(37,99,235,0.4)]">
                  Layanan Digital Bergaransi
                </span>
              </h1>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Dari pembuatan website berkinerja tinggi, optimasi SEO Google bergaransi, iklan Google Ads &amp; Social Media, hingga pembuatan aplikasi sistem kustom. Seluruh layanan didukung garansi kepuasan serta bantuan teknis langsung.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#daftar-layanan"
                  className="btn-shimmer px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/35 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Eksplor 6 Layanan Utama
                </a>
                <a
                  href="#pricing"
                  className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/15 hover:border-cyan-400/50 font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                >
                  Lihat Pricelist Paket
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Layanan Utama Bergaransi Section (Sesuai Foto Referensi User) */}
        <section
          id="daftar-layanan"
          className="relative py-20 lg:py-28 bg-[#FFFFFF] text-neutral-900 border-b border-neutral-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="font-mono text-xs uppercase tracking-widest text-[#0B35C8] font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0B35C8]" />
                // 6 LAYANAN UNGGULAN KAMI
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 font-sans leading-tight">
                Jasa Pembuatan Website &amp; <br />
                <span className="text-[#0B35C8]">Layanan Digital Bergaransi</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                Dirancang khusus untuk membantu bisnis dan UMKM bertumbuh pesat dengan teknologi modern, eksekusi cepat, dan hasil yang dapat diukur.
              </p>
            </div>

            {/* 6 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
              {mainServicesList.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 rounded-3xl bg-[#F8F9FB] border border-neutral-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 group card-interactive"
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center text-[#0B35C8] group-hover:scale-110 group-hover:bg-[#0B35C8] group-hover:text-white transition-all duration-300">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-2xs">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#0B35C8] mb-2 tracking-tight transition-colors">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-[13px] font-semibold text-[#0B35C8] mb-3 leading-snug">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-4 border-t border-neutral-200/70 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0B35C8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA with Direct WhatsApp Consultation */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/6281929442611?text=${encodeURIComponent(
                        `Halo StarDev Studio, saya tertarik untuk konsultasi mengenai layanan ${service.title}. Mohon info penawaran dan detail paketnya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer w-full py-3 px-5 rounded-full bg-[#0B35C8] hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md shadow-blue-900/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/WhatsApp.svg.webp"
                        alt="WhatsApp"
                        className="w-4 h-4 object-contain"
                      />
                      <span>Konsultasi {service.title}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Package Section (Apa yang akan Anda dapatkan?) */}
        <FeaturePackage />

        {/* Pricing Section (Paket Bisnis) */}
        <Pricing />

        {/* CTA Section */}
        <CTA onOpenContact={() => setIsContactOpen(true)} />
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
