"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { processSteps } from "@/data/process";

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#FFFFFF] text-neutral-900 border-t border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-200 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              OUR METHODOLOGY
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 font-display">
              HOW WE <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                BUILD
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Alur kerja terstruktur yang transparan dan adaptif, memastikan setiap fase proyek
              selesai tepat waktu dengan standar kode kelas enterprise.
            </p>
          </div>
        </div>

        {/* 6 Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-3xl bg-[#F8F9FA] border border-neutral-200/90 p-8 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display text-neutral-300 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600">
                    Phase {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 font-display mb-1">
                  {step.title}
                </h3>

                <p className="text-xs text-blue-600 font-mono mb-4">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Pill */}
              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Deliverable:</span>
                <span className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
