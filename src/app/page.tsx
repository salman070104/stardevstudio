"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { FeaturePackage } from "@/components/FeaturePackage";
import { Pricing } from "@/components/Pricing";
import { WhyStarDev } from "@/components/WhyStarDev";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { SculpturalBanner } from "@/components/SculpturalBanner";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Cmd+K / Ctrl+K shortcut listener
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
      {/* Sticky Premium Navbar with Search Trigger */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section (Dark) */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Trust / Intro Section (Alternating Light #FFFFFF) */}
        <TrustIntro />

        {/* Sculptural Giant 3D/Brand Typography Banner (Dark) */}
        <SculpturalBanner />

        {/* Feature Package / Apa yang akan Anda dapatkan? (Alternating Light #FFFFFF, matching foto 1) */}
        <FeaturePackage />

        {/* Pricelist / Paket Bisnis (Alternating Light #FFFFFF, matching foto 1) */}
        <Pricing />

        {/* Why StarDev / Advantage Grid (Dark #050505) */}
        <WhyStarDev />

        {/* How We Build / Methodology Process (Alternating Light #FFFFFF) */}
        <Process />

        {/* About / Technology with Purpose (Dark #050505) */}
        <About />

        {/* High-Impact Final CTA Section (Dark) */}
        <CTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Minimalist Dark Footer */}
      <Footer />

      {/* Interactive Project Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Quick Search / Command Palette Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
