"use client";

import React from "react";
import { motion } from "framer-motion";

export const SculpturalBanner: React.FC = () => {
  return (
    <div className="relative py-16 sm:py-24 bg-[#050505] overflow-hidden border-t border-b border-white/10 select-none">
      {/* Background ambient lighting with pulse glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] sm:w-[800px] h-[250px] bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/25 rounded-full blur-[140px] animate-pulse-glow" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center px-4 relative z-10">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-2 font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>// STARDEV STUDIO PLATFORM</span>
        </div>

        {/* Giant Architectural Wordmark with Shimmer & Glow */}
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[180px] font-black uppercase tracking-tighter leading-none font-display py-2">
          <span className="text-shimmer drop-shadow-[0_0_45px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform duration-500 inline-block cursor-default">
            STARDEV
          </span>
        </h2>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
          <span>Web Engineering</span>
          <span className="text-blue-500">•</span>
          <span>Intelligent AI</span>
          <span className="text-cyan-400">•</span>
          <span>Business Automation</span>
        </div>
      </div>
    </div>
  );
};
