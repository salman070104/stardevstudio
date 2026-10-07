"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { Logo } from "./Logo";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "< 15jt",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Create WhatsApp redirect link
      const text = `Halo StarDev Studio,%0A%0ASaya: ${formData.name}%0AEmail: ${formData.email}%0AKebutuhan: ${formData.service}%0ABudget: ${formData.budget}%0ADetail: ${formData.details}`;
      window.open(`https://wa.me/6281929442611?text=${text}`, "_blank");
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0B0F19] border border-blue-500/30 p-6 sm:p-8 text-white shadow-2xl shadow-blue-950/50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 text-cyan-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white font-display mb-2">
                  Request Terkirim!
                </h3>
                <p className="text-sm text-neutral-400 max-w-xs font-mono">
                  Menghubungkan ke WhatsApp Engineer StarDev Studio...
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Project Brief</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white font-display">
                    Start a Project
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Ceritakan kebutuhan digital Anda. Tim kami akan merespons dalam waktu 24 jam.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div>
                    <label className="block text-neutral-400 uppercase mb-1">
                      Nama / Perusahaan *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: Alex Pratama"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 uppercase mb-1">
                      Email / WhatsApp *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="email@company.com atau 0812xxxx"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-400 uppercase mb-1">
                        Pilihan Layanan
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl bg-[#080C14] border border-white/10 px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Website Perusahaan">Website Perusahaan</option>
                        <option value="Website UMKM">Website UMKM</option>
                        <option value="Website Desa">Website Desa</option>
                        <option value="Website Pemesanan">Website Pemesanan (Booking)</option>
                        <option value="Website Sistem Kasir">Website Sistem Kasir (POS)</option>
                        <option value="Website Landing Page">Website Landing Page</option>
                        <option value="Website Sekolah">Website Sekolah</option>
                        <option value="Website Kecamatan">Website Kecamatan</option>
                        <option value="Website Pemerintahan">Website Pemerintahan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-400 uppercase mb-1">
                        Estimasi Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl bg-[#080C14] border border-white/10 px-3 py-2.5 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="< 10jt">&lt; Rp 10 Juta</option>
                        <option value="10jt - 30jt">Rp 10 - 30 Juta</option>
                        <option value="30jt - 75jt">Rp 30 - 75 Juta</option>
                        <option value="> 75jt">&gt; Rp 75 Juta</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-400 uppercase mb-1">
                      Detail Kebutuhan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Jelaskan gambaran fitur atau tujuan produk Anda..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01]"
                  >
                    <span>Kirim &amp; Hubungi Studio</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
