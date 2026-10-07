"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyStarDev } from "@/components/WhyStarDev";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { SculpturalBanner } from "@/components/SculpturalBanner";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Sticky Premium Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section (Dark) */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Trust / Intro Section (Alternating Light #FFFFFF) */}
        <TrustIntro />

        {/* Services / What We Build (Dark #050505) */}
        <Services onSelectService={() => setIsContactOpen(true)} />

        {/* Selected Work / Projects Showcase (Alternating Light #FFFFFF) */}
        <Projects />

        {/* Why StarDev / Advantage Grid (Dark #050505) */}
        <WhyStarDev />

        {/* How We Build / Methodology Process (Alternating Light #FFFFFF) */}
        <Process />

        {/* About / Technology with Purpose (Dark #050505) */}
        <About />

        {/* Sculptural Giant 3D/Brand Typography Banner (Dark) */}
        <SculpturalBanner />

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

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
