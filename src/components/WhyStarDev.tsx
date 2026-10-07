"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Cpu, TrendingUp, Sparkles, Server } from "lucide-react";
import { benefitsData } from "@/data/process";

export const WhyStarDev: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case "01":
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case "02":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case "03":
        return <Zap className="w-5 h-5 text-cyan-300" />;
      case "04":
        return <Server className="w-5 h-5 text-blue-500" />;
      case "05":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case "06":
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#050505] text-white overflow-hidden bg-grid-dark">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              OUR ADVANTAGE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display">
              WHY <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                STARDEV?
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Kami memadukan disiplin rekayasa perangkat lunak enterprise dengan selera desain kelas
              dunia untuk menciptakan produk yang awet, cepat, dan menguntungkan.
            </p>
          </div>
        </div>

        {/* 6-Card Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((benefit, index) => {
            const isFeatured = index === 0 || index === 4;
            return (
              <motion.div
                key={benefit.number}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#0B0F19] to-[#0D1527] border-blue-500/40 shadow-xl shadow-blue-900/15"
                    : "bg-[#0B0F19]/70 border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar: Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-neutral-300 font-bold">
                      {benefit.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-cyan-400">
                        {benefit.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        {getIcon(benefit.number)}
                      </div>
                    </div>
                  </div>

                  {/* Benefit Title */}
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white font-display mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>{benefit.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
