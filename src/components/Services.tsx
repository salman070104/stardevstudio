"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Store,
  Landmark,
  CalendarCheck,
  Receipt,
  Rocket,
  GraduationCap,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { websiteSolutions, WebsiteSolution } from "@/data/services";

interface ServicesProps {
  onSelectService?: (service: WebsiteSolution) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getIcon = (id: string) => {
    switch (id) {
      case "website-perusahaan":
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case "website-umkm":
        return <Store className="w-5 h-5 text-cyan-400" />;
      case "website-desa":
        return <Landmark className="w-5 h-5 text-emerald-400" />;
      case "website-pemesanan":
        return <CalendarCheck className="w-5 h-5 text-amber-400" />;
      case "website-sistem-kasir":
        return <Receipt className="w-5 h-5 text-cyan-300" />;
      case "website-landing-page":
        return <Rocket className="w-5 h-5 text-blue-500" />;
      case "website-sekolah":
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case "website-kecamatan":
        return <MapPin className="w-5 h-5 text-sky-400" />;
      case "website-pemerintahan":
        return <ShieldCheck className="w-5 h-5 text-blue-300" />;
      default:
        return <Building2 className="w-5 h-5 text-white" />;
    }
  };

  const filteredSolutions = websiteSolutions.filter((item) => {
    if (selectedFilter === "all") return true;
    return item.category === selectedFilter;
  });

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#050505] text-white overflow-hidden bg-grid-dark"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              SOLUSI WEBSITE &amp; SISTEM DIGITAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              WEBSITE APA SAJA <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                YANG KAMI BANGUN?
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-neutral-400 text-sm leading-relaxed">
              Mulai dari profil bisnis, sistem kasir, reservasi online, hingga portal informasi desa
              dan instansi pemerintahan—setiap produk dirancang siap pakai dengan standar modern.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "Semua Solusi (9)" },
            { id: "business", label: "Bisnis & Komersial" },
            { id: "system", label: "Sistem & Operasional" },
            { id: "public", label: "Publik & Edukasi" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedFilter === tab.id
                  ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30"
                  : "bg-[#0B0F19] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-[#0B0F19] border border-white/10 hover:border-blue-500/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                {/* Subtle top edge glow on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-cyan-400 transition-all duration-500" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-400/30 transition-all">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                    {item.categoryLabel}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                      Fitur Unggulan:
                    </div>
                    {item.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Target & Direct Action */}
                <div className="pt-5 border-t border-white/10">
                  <div className="text-[11px] font-mono text-neutral-400 mb-4">
                    <span className="text-neutral-500">Cocok Untuk: </span>
                    <span className="text-neutral-200">{item.suitableFor}</span>
                  </div>

                  <a
                    href={`https://wa.me/6281929442611?text=Halo%20StarDev%20Studio,%20saya%20tertarik%20dengan%20pembuatan%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-blue-600 text-neutral-200 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-between transition-all duration-200 border border-white/10 hover:border-blue-500 shadow-sm"
                  >
                    <span>Konsultasi {item.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
