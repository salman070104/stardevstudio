"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Logo } from "./Logo";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#050505] text-white overflow-hidden bg-grid-dark">
      {/* Ambient glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Core Statement */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              STUDIO MANIFESTO
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display leading-[0.95] mb-8">
              TECHNOLOGY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                WITH PURPOSE.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
              StarDev Studio adalah digital technology studio yang berfokus pada pembuatan website,
              aplikasi web, automation, dan solusi AI untuk membantu bisnis berkembang di era digital.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xs font-mono text-cyan-400 uppercase mb-1">
                  // Mission
                </div>
                <div className="text-sm text-neutral-300 font-medium">
                  Menjembatani inovasi teknologi termutakhir menjadi instrumen nyata pertumbuhan bisnis.
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xs font-mono text-blue-400 uppercase mb-1">
                  // Standard
                </div>
                <div className="text-sm text-neutral-300 font-medium">
                  Arsitektur bersih, performa tanpa kompromi, dan visual berstandar internasional.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card & Brand Badge */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0B0F19] border border-white/10 p-8 sm:p-9 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <Logo variant="full" theme="dark" size="sm" />
                <span className="text-[11px] font-mono text-neutral-400">stardevstudio.id</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400">Location</span>
                  <span className="text-white font-semibold">Indonesia • Global Delivery</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400">Core Disciplines</span>
                  <span className="text-cyan-400 font-semibold">Web • AI • Automation</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400">Architecture</span>
                  <span className="text-white font-semibold">Next.js • TypeScript • Cloud</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400">Client Focus</span>
                  <span className="text-emerald-400 font-semibold">Startups, SMEs &amp; Enterprise</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="text-xs text-neutral-400 mb-1 font-mono uppercase tracking-wider">
                  Official Studio Tagline
                </div>
                <div className="text-base font-bold text-white tracking-wide">
                  &ldquo;Build Your Digital Future.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
