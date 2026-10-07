"use client";

import React from "react";
import { motion } from "framer-motion";

export const SculpturalBanner: React.FC = () => {
  return (
    <div className="relative py-16 sm:py-24 bg-[#050505] overflow-hidden border-t border-b border-white/10 select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] bg-blue-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center px-4 relative z-10">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-2 font-semibold">
          // STARDEV STUDIO PLATFORM
        </div>

        {/* Giant Architectural Wordmark */}
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[180px] font-black uppercase tracking-tighter leading-none font-display">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700 hover:from-cyan-400 hover:via-blue-500 hover:to-blue-700 transition-all duration-500">
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
