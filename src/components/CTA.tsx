"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Sparkles, Mail, Send } from "lucide-react";

interface CTAProps {
  onOpenContact?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section id="cta" className="relative py-28 lg:py-36 bg-[#050505] text-white overflow-hidden bg-grid-dark">
      {/* High-impact radial blue/cyan aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#0B0F19] via-[#0D1527] to-[#080C14] border border-blue-500/30 p-8 sm:p-14 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle top edge neon line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-widest text-cyan-300 font-mono font-semibold">
                Start Your Digital Evolution
              </span>
            </div>

            {/* Huge Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white font-display leading-[0.92] mb-6">
              READY TO BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400">
                SOMETHING GREAT?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-xl mb-10">
              Tell us what you&apos;re building. We&apos;ll help turn your idea into a digital product.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
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
                href="https://wa.me/6281929442611?text=Halo%20StarDev%20Studio,%20saya%20ingin%20konsultasi%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/15 font-semibold text-sm uppercase tracking-wider transition-all duration-200 hover:border-white/30"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Talk to Us</span>
              </a>
            </div>

            {/* Sub-text */}
            <div className="mt-8 text-xs font-mono text-neutral-500 flex items-center gap-4">
              <span>Fast 24h Response</span>
              <span>•</span>
              <span>Direct Engineering Consultation</span>
              <span>•</span>
              <span>stardevstudio.id</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
