"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { About } from "@/components/About";
import { WhyStarDev } from "@/components/WhyStarDev";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { ArrowRight, ShieldCheck, Zap, Code, Award } from "lucide-react";

export default function TentangKamiPage() {
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
              <div className="font-mono text-xs uppercase tracking-widest text-blue-500 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                // TENTANG KAMI • STARDEV STUDIO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-6">
                Membangun Standar Baru <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Rekayasa Digital
                </span>
              </h1>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
                StarDev Studio adalah studio rekayasa web dan solusi digital berbasis di Indonesia.
                Kami berfokus menghadirkan arsitektur website modern, kecepatan performa kelas dunia,
                serta desain fungsional yang mendorong pertumbuhan bisnis nyata.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  Mulai Konsultasi
                </button>
                <Link
                  href="/layanan"
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/15 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Lihat Layanan Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Existing About Component */}
        <About />

        {/* Process Component */}
        <Process />

        {/* Why StarDev Component */}
        <WhyStarDev />

        {/* Final CTA */}
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
