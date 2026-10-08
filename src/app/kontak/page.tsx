"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Phone,
  Mail,
  Share2,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function KontakPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = `Halo StarDev Studio,%0A%0A*Nama:* ${encodeURIComponent(
        formData.name
      )}%0A*Email:* ${encodeURIComponent(
        formData.email
      )}%0A*No. Telp:* ${encodeURIComponent(
        formData.phone
      )}%0A%0A*Pesan:*%0A${encodeURIComponent(formData.message)}`;

      window.open(`https://wa.me/6281929442611?text=${text}`, "_blank");
      setSubmitted(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 pt-24 sm:pt-32">
        {/* Page Header Banner */}
        <section className="relative py-14 sm:py-20 bg-[#050505] border-b border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-blue-500 font-semibold mb-3 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                // HUBUNGI KAMI • STARDEV STUDIO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-4">
                Kontak &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Konsultasi
                </span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Hubungi tim konsultan dan rekayasa web kami untuk mendiskusikan kebutuhan website,
                paket harga, hingga estimasi pengerjaan bisnis Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section (Persis Desain & Wording Foto Referensi) */}
        <section className="py-16 lg:py-24 bg-[#F6F7F9] text-neutral-900 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Get in touch! / Our Detail Contact */}
              <div className="lg:col-span-5 bg-[#ECEEF2] rounded-[28px] p-8 sm:p-10 border border-neutral-200/80 flex flex-col justify-between shadow-sm">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B35C8] tracking-tight mb-2 font-sans">
                    Get in touch!
                  </h2>
                  <h3 className="text-base sm:text-lg font-bold text-[#0D237D] mb-3">
                    Our Detail Contact
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-6 font-normal">
                    Hubungi tim marketing kami dan bawa bisnis Anda ke level yang lebih tinggi dengan
                    website yang modern, profesional dan optimal.
                  </p>

                  {/* Blue accent indicator */}
                  <div className="w-14 h-1 bg-[#0B35C8] rounded-full mb-8" />

                  {/* Contact Items List */}
                  <div className="space-y-5">
                    {/* Item 1: Phone / WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0B35C8] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Phone className="w-5 h-5 fill-current" />
                      </div>
                      <div className="pt-0.5">
                        <div className="text-[11px] text-neutral-500 font-medium">
                          Get in touch
                        </div>
                        <a
                          href="https://wa.me/6281929442611?text=Halo%20StarDev%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#0B35C8] transition-colors block"
                        >
                          Phone/Whatsapp
                        </a>
                        <div className="text-xs text-neutral-500 font-mono">
                          +62 819-2944-2611
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-neutral-300/80" />

                    {/* Item 2: Email Support */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0B35C8] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="pt-0.5">
                        <div className="text-[11px] text-neutral-500 font-medium">
                          Email Support
                        </div>
                        <a
                          href="mailto:support@stardevstudio.id"
                          className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#0B35C8] transition-colors block"
                        >
                          support@stardevstudio.id
                        </a>
                      </div>
                    </div>

                    <div className="w-full h-px bg-neutral-300/80" />

                    {/* Item 3: Social Media */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0B35C8] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Share2 className="w-5 h-5" />
                      </div>
                      <div className="pt-0.5">
                        <div className="text-[11px] text-neutral-500 font-medium">
                          Find Us On
                        </div>
                        <div className="text-sm sm:text-base font-bold text-neutral-900 mb-3">
                          Our Social Media
                        </div>

                        {/* Social Media Links (Persis seperti di Footer) */}
                        <div className="flex items-center gap-3">
                          {/* WhatsApp */}
                          <a
                            href="https://wa.me/6281929442611"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md shadow-[#25D366]/25"
                            aria-label="WhatsApp StarDev Studio"
                            title="WhatsApp: 081929442611"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/WhatsApp.svg.webp"
                              alt="WhatsApp"
                              className="w-full h-full object-contain"
                            />
                          </a>

                          {/* Instagram */}
                          <a
                            href="https://www.instagram.com/stardevstudio?stkn=MW5mcWQ1N2JjbnI1dQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md shadow-[#ee2a7b]/25"
                            aria-label="Instagram StarDev Studio"
                            title="Instagram: @stardevstudio"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/images/instagram.png"
                              alt="Instagram"
                              className="w-full h-full object-contain"
                            />
                          </a>

                          {/* TikTok */}
                          <a
                            href="https://www.tiktok.com/@jasapembuatanwebsite05?_r=1&_t=ZS-9AMJAapJNZO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md shadow-cyan-500/25"
                            aria-label="TikTok StarDev Studio"
                            title="TikTok: @jasapembuatanwebsite05"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/images/tiktok.png"
                              alt="TikTok"
                              className="w-full h-full object-contain"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Assurance Info */}
                <div className="mt-8 pt-6 border-t border-neutral-300/80 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Respon Cepat: Setiap Hari (08.00 - 22.00 WIB)</span>
                </div>
              </div>

              {/* Right Column: Tinggalkan Pesan Form */}
              <div className="lg:col-span-7 bg-white rounded-[28px] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-neutral-200/80 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-6 tracking-tight font-sans">
                    Tinggalkan Pesan
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nama */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2 font-sans">
                        Nama
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama lengkap Anda..."
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#0B35C8] focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm text-neutral-900 bg-white placeholder-neutral-400 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2 font-sans">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#0B35C8] focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm text-neutral-900 bg-white placeholder-neutral-400 transition-all"
                      />
                    </div>

                    {/* No. Telp */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2 font-sans">
                        No. Telp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0812xxxxxxx"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#0B35C8] focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm text-neutral-900 bg-white placeholder-neutral-400 transition-all"
                      />
                    </div>

                    {/* Pesan */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2 font-sans">
                        Pesan
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tuliskan pesan, pertanyaan, atau kebutuhan website Anda..."
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#0B35C8] focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm text-neutral-900 bg-white placeholder-neutral-400 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button (Persis Tombol Biru Lebar SUBMIT di Foto) */}
                    <button
                      type="submit"
                      disabled={submitted}
                      className="w-full py-3.5 px-6 rounded-lg bg-[#0B35C8] hover:bg-[#08299b] text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                          <span>MENGHUBUNGKAN KE WHATSAPP...</span>
                        </>
                      ) : (
                        <span>SUBMIT</span>
                      )}
                    </button>
                  </form>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Data Anda aman &amp; terlindungi</span>
                  <span>Langsung terhubung dengan Customer Support</span>
                </div>
              </div>

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
