"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Send, Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

export default function KontakPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    packageChoice: "Paket Gold (1.6 Juta)",
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
      const text = `Halo StarDev Studio,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0AWhatsApp: ${formData.phone}%0APilihan Paket: ${formData.packageChoice}%0APesan: ${formData.message}`;
      window.open(`https://wa.me/6281929442611?text=${text}`, "_blank");
      setSubmitted(false);
    }, 1000);
  };

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
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                // HUBUNGI KAMI • STARDEV STUDIO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-6">
                Mari Diskusikan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                  Website Impian Anda
                </span>
              </h1>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
                Punya pertanyaan seputar paket, estimasi waktu pengerjaan, atau ingin fitur kustom?
                Tim kami siap berdiskusi dan memberikan rekomendasi terbaik untuk bisnis Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="py-20 lg:py-24 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Info Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Kontak Langsung
                  </h2>

                  <div className="space-y-5 text-sm text-neutral-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-neutral-500 uppercase">WhatsApp Official</div>
                        <a
                          href="https://wa.me/6281929442611"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          +62 819-2944-2611
                        </a>
                        <div className="text-xs text-neutral-400 mt-0.5">Respon Cepat (08.00 - 22.00 WIB)</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-neutral-500 uppercase">Email Support</div>
                        <div className="font-bold text-white">support@stardevstudio.id</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Konsultasi Penawaran &amp; Kerjasama</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-neutral-500 uppercase">Waktu Pengerjaan</div>
                        <div className="font-bold text-white">3 - 7 Hari Kerja Selesai</div>
                        <div className="text-xs text-neutral-400 mt-0.5">Garansi Revisi Sampai Puas</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <a
                      href="https://wa.me/6281929442611?text=Halo%20StarDev%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/WhatsApp.svg.webp" alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>Chat WhatsApp Sekarang</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5"
                >
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Kirim Pesan Konsultasi
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Isi detail singkat di bawah ini dan kami akan segera mengarahkan Anda ke WhatsApp bersama tim analis kami.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812xxxxxxx"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Pilihan Paket
                      </label>
                      <select
                        value={formData.packageChoice}
                        onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="Paket Silver (700K)">Paket Silver (IDR 700K)</option>
                        <option value="Paket Gold (1.6 Juta)">Paket Gold (IDR 1,6 Juta)</option>
                        <option value="Paket Diamond (2 Juta)">Paket Diamond (IDR 2 Juta)</option>
                        <option value="Paket Platinum (3 Juta)">Paket Platinum (IDR 3 Juta)</option>
                        <option value="Kustom / Web App Khusus">Kustom / Web App Khusus</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Ceritakan Kebutuhan Website Anda
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan jenis usaha, fitur yang diinginkan, atau referensi website..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                        <span>Mengarahkan ke WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim &amp; Hubungkan ke WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
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
