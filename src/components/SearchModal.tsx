"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  CreditCard,
  CheckCircle2,
  Phone,
  Compass,
  CornerDownLeft,
} from "lucide-react";

export interface SearchItem {
  id: string;
  title: string;
  category: "Paket Harga" | "Fitur" | "Navigasi" | "Kontak";
  description: string;
  badge?: string;
  action: () => void;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const openWhatsApp = () => {
    onClose();
    window.open("https://wa.me/6281929442611", "_blank");
  };

  const searchItems: SearchItem[] = [
    // Paket Harga
    {
      id: "paket-silver",
      title: "Paket Silver",
      category: "Paket Harga",
      description: "IDR. 700K • Website sederhana dan praktis untuk bisnis baru",
      badge: "700K",
      action: () => scrollToSection("pricing"),
    },
    {
      id: "paket-gold",
      title: "Paket Gold",
      category: "Paket Harga",
      description: "IDR 1,6JUTA • Fitur lengkap e-commerce, toko online & blog",
      badge: "Populer",
      action: () => scrollToSection("pricing"),
    },
    {
      id: "paket-diamond",
      title: "Paket Diamond",
      category: "Paket Harga",
      description: "IDR. 2JUTA • Website profil bisnis profesional & terpercaya",
      badge: "2 Juta",
      action: () => scrollToSection("pricing"),
    },
    {
      id: "paket-platinum",
      title: "Paket Platinum",
      category: "Paket Harga",
      description: "IDR. 3JUTA • Fitur kompleks, kustom & desain interaktif eksklusif",
      badge: "Enterprise",
      action: () => scrollToSection("pricing"),
    },

    // Fitur Unggulan
    {
      id: "fitur-domain-hosting",
      title: "Gratis Domain & Hosting",
      category: "Fitur",
      description: "Sudah termasuk domain resmi dan server cloud berkecepatan tinggi",
      action: () => scrollToSection("features"),
    },
    {
      id: "fitur-ssl",
      title: "Sertifikat SSL Gratis",
      category: "Fitur",
      description: "Proteksi HTTPS gembok hijau untuk keamanan dan reputasi website",
      action: () => scrollToSection("features"),
    },
    {
      id: "fitur-responsif",
      title: "Desain Responsif",
      category: "Fitur",
      description: "Tampilan presisi dan optimal di smartphone, tablet, serta komputer",
      action: () => scrollToSection("features"),
    },
    {
      id: "fitur-seo",
      title: "Optimasi SEO Google",
      category: "Fitur",
      description: "Struktur website dirancang agar cepat terindeks dan ranking di mesin pencari",
      action: () => scrollToSection("features"),
    },
    {
      id: "fitur-desain-modern",
      title: "Desain Modern",
      category: "Fitur",
      description: "Teknologi modern dan estetika kekinian yang profesional",
      action: () => scrollToSection("features"),
    },
    {
      id: "fitur-copywriting",
      title: "Layanan Konten & Copywriting",
      category: "Fitur",
      description: "Penulisan kata-kata promosi dan copywriting persuasif siap tayang",
      action: () => scrollToSection("features"),
    },

    // Navigasi
    {
      id: "nav-home",
      title: "Beranda (Home)",
      category: "Navigasi",
      description: "Kembali ke bagian atas halaman utama",
      action: () => scrollToSection("home"),
    },
    {
      id: "nav-features",
      title: "Our Feature Package",
      category: "Navigasi",
      description: "Lihat apa saja yang Anda dapatkan di setiap pembuatan website",
      action: () => scrollToSection("features"),
    },
    {
      id: "nav-pricing",
      title: "Pricelist & Paket",
      category: "Navigasi",
      description: "Daftar harga dan pilihan paket website lengkap",
      action: () => scrollToSection("pricing"),
    },
    {
      id: "nav-why-us",
      title: "Mengapa StarDev (Why Us)",
      category: "Navigasi",
      description: "Standar rekayasa web kelas enterprise & keunggulan kami",
      action: () => scrollToSection("why-us"),
    },
    {
      id: "nav-process",
      title: "Alur Pengerjaan (Process)",
      category: "Navigasi",
      description: "5 langkah mudah dari konsultasi hingga website live",
      action: () => scrollToSection("process"),
    },
    {
      id: "nav-about",
      title: "Tentang Kami (About)",
      category: "Navigasi",
      description: "Filosofi dan dedikasi StarDev Studio",
      action: () => scrollToSection("about"),
    },

    // Kontak
    {
      id: "contact-form",
      title: "Konsultasi Proyek Baru",
      category: "Kontak",
      description: "Buka formulir konsultasi untuk mendiskusikan kebutuhan Anda",
      action: () => {
        onClose();
        onOpenContact();
      },
    },
    {
      id: "contact-wa",
      title: "Chat WhatsApp Official",
      category: "Kontak",
      description: "Hubungi tim admin StarDev Studio di 0819-2944-2611",
      badge: "WhatsApp",
      action: openWhatsApp,
    },
  ];

  const filteredItems = searchItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Paket Harga":
        return <CreditCard className="w-4 h-4 text-blue-400" />;
      case "Fitur":
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case "Navigasi":
        return <Compass className="w-4 h-4 text-purple-400" />;
      case "Kontak":
        return <Phone className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-md">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl bg-[#0B0F19] border border-blue-500/25 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-950/60 overflow-hidden flex flex-col text-white"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <Search className="w-5 h-5 text-blue-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari paket, fitur, harga, atau layanan..."
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[11px] text-neutral-400 font-mono">
                ESC
              </kbd>
            </div>

            {/* Quick Filter Tags (when query is empty) */}
            {!query && (
              <div className="px-5 sm:px-6 py-3 border-b border-white/5 bg-white/[0.01] flex flex-wrap items-center gap-2 text-xs">
                <span className="text-neutral-500 font-medium">Saran pencarian:</span>
                {[
                  "Paket Silver",
                  "Paket Gold",
                  "Domain & Hosting",
                  "SEO",
                  "WhatsApp",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-3 sm:p-4 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-neutral-400 text-sm">
                  <p className="mb-2">Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-neutral-500">
                    Coba kata kunci lain seperti: Silver, Gold, Domain, SSL, atau Harga.
                  </p>
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "bg-blue-600/20 text-white border border-blue-500/40"
                          : "hover:bg-white/5 text-neutral-300 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-white/5 text-neutral-400 group-hover:text-white group-hover:bg-white/10"
                          }`}
                        >
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold truncate text-white">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-400 truncate mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pl-3 shrink-0">
                        <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                          {item.category}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected
                              ? "text-blue-400 translate-x-0.5"
                              : "text-neutral-600 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer / Instructions */}
            <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] text-neutral-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">↓</kbd>
                  <span>navigasi</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-400">
                    <CornerDownLeft className="w-3 h-3 inline" />
                  </kbd>
                  <span>pilih</span>
                </span>
              </div>
              <div>StarDev Quick Search</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
