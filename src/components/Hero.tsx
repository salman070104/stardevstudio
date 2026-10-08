"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal, Cpu, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Logo } from "./Logo";
import { HeroLaptopShowcase } from "./HeroLaptopShowcase";

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#050505] text-white overflow-hidden bg-grid-dark"
    >
      {/* Ambient gradient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Metadata Bar & Sparkle */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-6 font-mono text-[11px] sm:text-xs text-neutral-400 tracking-widest uppercase">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              WEB
            </span>
            <span className="text-neutral-600">/</span>
            <span className="text-blue-400 font-semibold">AI</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-300 font-semibold">AUTOMATION</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block font-mono text-xs text-neutral-400">
              EST. 2026 • JAKARTA, ID
            </span>
            <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Main Grid: Asymmetric Layout (inspired by editorial reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (Headline + Supporting Copy + CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline / Sub-badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                Build Your Digital Future
              </span>
            </motion.div>

            {/* Huge Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-black uppercase tracking-tight leading-[0.92] text-white font-display"
            >
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400">
                THE DIGITAL
              </span> <br />
              FUTURE.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed"
            >
              StarDev Studio membantu bisnis membangun website, aplikasi, AI automation, dan digital
              experiences yang cepat, modern, dan scalable.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]"
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/15 font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:border-white/30"
              >
                <span>Lihat Paket Harga</span>
              </a>
            </motion.div>

            {/* Active Clients & Metric Badge (Screenshot inspired) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client Avatar 1"
                    className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client Avatar 2"
                    className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client Avatar 3"
                    className="w-8 h-8 rounded-full border-2 border-[#050505] object-cover"
                  />
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white font-mono">
                    +99
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                    Trusted Delivery
                  </div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>Enterprise Grade</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Rotating Laptop Mockup Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroLaptopShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};
