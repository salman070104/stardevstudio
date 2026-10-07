"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Layers, ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

export const TrustIntro: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FFFFFF] text-neutral-900 border-t border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-neutral-200">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3">
              // 01 • INTRO & PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] text-neutral-950 font-display">
              WE BUILD <br />
              MORE THAN <br />
              WEBSITES.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between h-full pt-2 lg:pt-8">
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl font-normal">
              Kami mengubah ide dan kebutuhan bisnis menjadi produk digital yang dapat digunakan,
              dikembangkan, dan memberikan hasil nyata. Bukan sekadar visual menarik, melainkan
              mesin pertumbuhan untuk skala usaha Anda.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-500 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Engineering Excellence
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Measurable Impact
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                Production Scalability
              </span>
            </div>
          </div>
        </div>

        {/* Big Editorial Cards Grid (Directly inspired by Reference Screenshot cards: Big Blue, Dark, and Light card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: Hero Blue Card (Equivalent to the vibrant card in screenshot) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl bg-blue-600 text-white p-8 sm:p-9 shadow-xl shadow-blue-600/20 flex flex-col justify-between overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full text-white font-semibold">
                  01
                </span>
                <Globe className="w-6 h-6 text-cyan-200" />
              </div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight mb-2 font-display">
                WEB
              </div>
              <div className="text-xl font-bold uppercase tracking-wide text-cyan-100">
                Development
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-50 leading-relaxed">
                Website company profile dan platform bisnis yang memadukan estetika editorial tingkat
                tinggi dengan kecepatan loading sub-detik.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-200 font-semibold">
                <span>99/100 Lighthouse Speed</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 02: Dark Modern Card (Equivalent to the black 98% card in screenshot) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl bg-[#050505] text-white p-8 sm:p-9 shadow-xl shadow-black/20 flex flex-col justify-between border border-neutral-800"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-neutral-300 font-semibold">
                  02
                </span>
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-display">
                AI &amp; AUTO
              </div>
              <div className="text-xl font-bold uppercase tracking-wide text-neutral-200">
                Automation
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm text-neutral-400 leading-relaxed">
                Integrasi AI Agent cerdas dan alur otomasi WhatsApp serta pipeline bisnis yang
                mengeliminasi pekerjaan repetitif secara instan.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                <span>24/7 Autonomous Workflows</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 03: Crisp White/Light Card with fine border */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl bg-[#F5F5F5] text-neutral-900 p-8 sm:p-9 shadow-lg shadow-neutral-200/50 flex flex-col justify-between border border-neutral-300/80"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-widest bg-neutral-900 text-white px-3 py-1 rounded-full font-semibold">
                  03
                </span>
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-4xl sm:text-5xl font-black tracking-tight mb-2 text-neutral-950 font-display">
                CUSTOM
              </div>
              <div className="text-xl font-bold uppercase tracking-wide text-neutral-700">
                Digital Solutions
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-300">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Aplikasi web khusus, SaaS, dashboard operasional, dan arsitektur database yang
                dirancang spesifik sesuai skala bisnis Anda.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold">
                <span>Tailored Enterprise Fit</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
