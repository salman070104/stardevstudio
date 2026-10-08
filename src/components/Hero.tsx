"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { HeroLaptopShowcase } from "./HeroLaptopShowcase";
import { TextVelocity } from "./TextVelocity";

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-0 lg:pt-28 flex flex-col justify-between bg-[#050505] text-white overflow-hidden bg-grid-dark"
    >
      {/* Ambient gradient glow orbs with breathing pulse */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex items-center">
        {/* Main Grid: Asymmetric Layout (inspired by editorial reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full py-8 lg:py-12">
          {/* Left Column (Headline + Supporting Copy + CTAs) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline / Sub-badge with Shimmer Effect */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="badge-shine inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 w-fit mb-5 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-xs uppercase tracking-wider text-cyan-200 font-medium font-mono">
                Build Your Digital Future
              </span>
            </motion.div>

            {/* Huge Display Headline with Dynamic Text Shimmer */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-black uppercase tracking-tight leading-[0.92] text-white font-display"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
                WE BUILD
              </span>{" "}
              <br />
              <span className="text-shimmer drop-shadow-[0_0_35px_rgba(37,99,235,0.5)]">
                THE DIGITAL
              </span>{" "}
              <br />
              <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                FUTURE.
              </span>
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

            {/* CTAs with Button Shimmer & Glowing Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenContact}
                className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-600/35 hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/15 hover:border-cyan-400/50 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:scale-[1.03] active:scale-[0.98]"
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

      {/* Text Velocity Scrolling Banner (Persis di bawah Trusted Delivery sesuai foto referensi) */}
      <div className="w-full mt-6 border-t border-b border-white/10 bg-[#050505] relative z-20 overflow-hidden">
        <TextVelocity
          texts={[
            "JASA PEMBUATAN WEBSITE DAN AI AUTOMATION SERTA SOFTWARE ENGINEER / ",
            "JASA PEMBUATAN WEBSITE DAN AI AUTOMATION SERTA SOFTWARE ENGINEER / ",
          ]}
          velocity={2.5}
        />
      </div>
    </section>
  );
};
