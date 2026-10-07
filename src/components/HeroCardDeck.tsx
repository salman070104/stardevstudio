"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  RotateCcw,
  Smartphone,
  Globe,
} from "lucide-react";

interface ValueCard {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  url: string;
  iconName: string;
}

const valueCards: ValueCard[] = [
  {
    id: 1,
    tag: "GARANSI KEPUASAN",
    title: "BEBAS REVISI 24 JAM",
    subtitle: "Revisi sampai Anda benar-benar puas",
    description:
      "Fleksibel tanpa batasan kaku. Desain, tata letak, dan fitur website kami sesuaikan hingga 100% cocok dengan selera dan ekspektasi bisnis Anda tanpa biaya tersembunyi.",
    highlights: ["Bebas Revisi", "Sampai Puas", "Tanpa Biaya Tambahan"],
    url: "stardevstudio.id/bebas-revisi",
    iconName: "rotate",
  },
  {
    id: 2,
    tag: "FAST RESPONSE",
    title: "SUPPORT 24 JAM NONSTOP",
    subtitle: "Standby teknis langsung via WhatsApp",
    description:
      "Ada kendala server, butuh pembaruan konten, atau ingin konsultasi mendadak? Tim teknis kami siap siaga 24 jam mendampingi kelancaran website Anda setiap hari.",
    highlights: ["Respon < 15 Menit", "Teknisi Siaga", "WhatsApp 24 Jam"],
    url: "stardevstudio.id/support-24jam",
    iconName: "clock",
  },
  {
    id: 3,
    tag: "ALL-IN-ONE",
    title: "GRATIS DOMAIN & HOSTING",
    subtitle: "Website langsung live tanpa repot setup server",
    description:
      "Paket lengkap sudah termasuk pendaftaran domain resmi (.com / .id), server cloud berkecepatan tinggi, dan sertifikat keamanan SSL HTTPS gembok hijau.",
    highlights: ["Domain Resmi Gratis", "Cloud Server Cepat", "SSL HTTPS Aman"],
    url: "stardevstudio.id/gratis-domain",
    iconName: "globe",
  },
  {
    id: 4,
    tag: "DISIPLIN WAKTU",
    title: "PENGERJAAN CEPAT & ON-TIME",
    subtitle: "Timeline terukur dengan progress transparan",
    description:
      "Kami menghargai waktu Anda. Setiap tahap pembuatan memiliki jadwal yang jelas dengan laporan berkala, memastikan website launching sesuai rencana bisnis.",
    highlights: ["Jadwal Terukur", "Update Berkala", "Tepat Waktu"],
    url: "stardevstudio.id/pengerjaan-cepat",
    iconName: "zap",
  },
  {
    id: 5,
    tag: "MOBILE FIRST",
    title: "RESPONSIF DI SEMUA HP & LAYAR",
    subtitle: "Tampilan rapi dan loading secepat kilat",
    description:
      "Website otomatis menyesuaikan layar smartphone, tablet, laptop hingga PC. Navigasi intuitif, tombol mudah dijangkau, dan ringan dibuka di jaringan mana pun.",
    highlights: ["100% Mobile Friendly", "Loading Sub-Detik", "SEO Ready"],
    url: "stardevstudio.id/mobile-friendly",
    iconName: "phone",
  },
];

export const HeroCardDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch card every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % valueCards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % valueCards.length);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "rotate":
        return <RotateCcw className="w-4 h-4 text-blue-600" />;
      case "clock":
        return <Clock className="w-4 h-4 text-emerald-600" />;
      case "globe":
        return <Globe className="w-4 h-4 text-indigo-600" />;
      case "zap":
        return <Zap className="w-4 h-4 text-amber-600" />;
      case "phone":
        return <Smartphone className="w-4 h-4 text-cyan-600" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto select-none py-2">
      {/* Interactive 3D Stack of Cards - Model seperti yang pertama, warna abu2 keputihan, teks hitam */}
      <div
        onClick={nextCard}
        className="relative h-[340px] sm:h-[355px] w-full cursor-pointer group"
      >
        {valueCards.map((card, idx) => {
          // Calculate offset position relative to active card
          const position = (idx - currentIndex + valueCards.length) % valueCards.length;
          const isFront = position === 0;

          // Card layering dynamics (seperti model pertama)
          const yOffset = position * 12;
          const scale = 1 - position * 0.04;
          const zIndex = valueCards.length - position;
          const opacity = position > 2 ? 0 : 1 - position * 0.18;
          const rotate = position === 0 ? 0 : position === 1 ? 2.5 : -2.5;

          return (
            <motion.div
              key={card.id}
              layout
              initial={false}
              animate={{
                y: yOffset,
                scale: scale,
                rotate: rotate,
                zIndex: zIndex,
                opacity: opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
              }}
              className={`absolute inset-x-0 top-0 rounded-3xl overflow-hidden border will-change-transform flex flex-col justify-between ${
                isFront
                  ? "bg-[#ECEEF2] border-neutral-300/90 text-neutral-900"
                  : position === 1
                  ? "bg-[#DFE2E8] border-neutral-300/80 text-neutral-900"
                  : "bg-[#D4D8E0] border-neutral-300/70 text-neutral-900"
              }`}
              style={{
                height: "305px",
                boxShadow: isFront
                  ? "0 20px 40px -10px rgba(0, 0, 0, 0.45), 0 0 25px -5px rgba(255, 255, 255, 0.08)"
                  : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Browser Window Header (Model seperti yang pertama) */}
              <div className="bg-[#DFE2E8] px-4 py-2 border-b border-neutral-300/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-3 py-0.5 rounded-full bg-white/90 border border-neutral-300 text-[10px] font-mono text-neutral-700 truncate max-w-[200px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>https://{card.url}</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-700">
                  0{card.id}
                </span>
              </div>

              {/* Card Body (Kata-kata, warna abu2 keputihan dan teks hitam) */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#ECEEF2] to-[#E5E8EE]">
                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20">
                      <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                      <span>{card.tag}</span>
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-white/80 border border-neutral-300/80 flex items-center justify-center shadow-xs">
                      {renderIcon(card.iconName)}
                    </div>
                  </div>

                  {/* Main Title - Hitam Pekat */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 font-display leading-tight mb-1">
                    {card.title}
                  </h3>

                  {/* Subtitle - Biru Elegan */}
                  <p className="text-xs font-bold text-blue-600 font-mono mb-2">
                    {card.subtitle}
                  </p>

                  {/* Description - Hitam/Abu Tua Mudah Dibaca */}
                  <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Key Points / Highlights */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-neutral-300/70">
                  {card.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/90 border border-neutral-300/80 text-[10px] font-semibold text-neutral-800 shadow-2xs font-mono"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Bar (Model seperti yang pertama) */}
              <div className="bg-[#DFE2E8] px-4 py-2.5 border-t border-neutral-300/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-mono font-bold text-neutral-800 uppercase tracking-wider">
                    STARDEV STUDIO GUARANTEE
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-white font-medium bg-neutral-900 hover:bg-neutral-800 px-3 py-1 rounded-full shadow-xs transition-colors">
                  <span>Klik ganti kartu</span>
                  <span className="text-xs">↻</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
