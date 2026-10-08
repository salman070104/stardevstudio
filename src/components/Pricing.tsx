"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { pricingPlans, PricingPlan } from "@/data/pricing";

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const getWhatsAppUrl = (plan: PricingPlan) => {
    return `https://wa.me/6281929442611?text=${encodeURIComponent(plan.waMessage)}`;
  };

  return (
    <section
      id="pricing"
      className="relative py-20 lg:py-28 bg-[#FFFFFF] text-neutral-900 border-t border-b border-neutral-200 overflow-hidden"
    >
      {/* Anchor for backward compatibility with #projects links */}
      <span id="projects" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (sesuai referensi foto 1) */}
        <div className="mb-14">
          <p className="text-sm font-medium text-neutral-500 mb-2 font-sans tracking-wide">
            Pricelist
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-sans">
            Pilih Paket Untuk Bisnis Anda
          </h2>
        </div>

        {/* 4 Pricing Cards Grid (sesuai referensi foto 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-[28px] p-6 sm:p-7 flex flex-col justify-between items-center text-center transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#0B35C8] text-white shadow-xl shadow-blue-600/30 lg:-translate-y-3 z-10"
                    : "bg-[#ECEEF2] text-neutral-900 border border-neutral-200/80 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Top Section: Icon, Title, Description */}
                <div className="w-full flex flex-col items-center">
                  {/* Medal Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-xs ${
                      isFeatured ? "bg-white" : "bg-white"
                    }`}
                  >
                    <Award
                      className={`w-7 h-7 ${
                        isFeatured ? "text-[#0B35C8]" : "text-[#0D237D]"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 tracking-tight ${
                      isFeatured ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed min-h-[58px] flex items-center justify-center mb-6 font-normal ${
                      isFeatured ? "text-blue-100" : "text-neutral-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Pill */}
                  <div
                    className={`w-full max-w-[190px] py-2 px-5 rounded-full font-bold text-sm tracking-wide mb-5 flex items-center justify-center ${
                      isFeatured
                        ? "border border-white text-white"
                        : "border border-neutral-800 text-neutral-900"
                    }`}
                  >
                    {plan.price}
                  </div>

                  {/* Detail Paket Button */}
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-2.5 px-5 rounded-full font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 mb-5 cursor-pointer ${
                      isFeatured
                        ? "bg-white text-neutral-900 hover:bg-blue-50"
                        : "bg-white text-neutral-800 border border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300"
                    }`}
                  >
                    Detail Paket
                  </button>
                </div>

                {/* Bottom Section: Renewal Text & Book Now CTA */}
                <div className="w-full flex flex-col items-center pt-2">
                  {/* Renewal Text */}
                  <span
                    className={`text-[11px] mb-4 text-center font-normal ${
                      isFeatured ? "text-blue-200" : "text-neutral-500"
                    }`}
                  >
                    {plan.renewal}
                  </span>

                  {/* Book Now Button */}
                  <a
                    href={getWhatsAppUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md transition-all duration-200 hover:scale-[1.02] ${
                      isFeatured
                        ? "bg-[#071F6E] hover:bg-[#051752] text-white shadow-blue-950/40"
                        : "bg-[#0D237D] hover:bg-[#091b61] text-white shadow-blue-900/20"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/WhatsApp.svg.webp"
                      alt="WhatsApp"
                      className="w-4 h-4 object-contain"
                    />
                    <span>Book Now</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Paket Interactive Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 overflow-hidden text-neutral-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-neutral-950">
                    {selectedPlan.name}
                  </h3>
                  <div className="text-blue-600 font-bold text-sm">
                    {selectedPlan.price}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 pb-4 border-b border-neutral-100">
                {selectedPlan.description}
              </p>

              {/* Included Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Fitur &amp; Keuntungan yang Didapatkan:</span>
                </h4>
                <ul className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {selectedPlan.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Renewal Info */}
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs text-neutral-600 flex items-center justify-between mb-6">
                <span className="font-medium">Biaya Tahun Berikutnya:</span>
                <span className="font-bold text-neutral-900">
                  {selectedPlan.renewal}
                </span>
              </div>

              {/* Modal CTA Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="w-1/3 py-3 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={getWhatsAppUrl(selectedPlan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-2/3 py-3 px-5 rounded-full bg-[#0D237D] hover:bg-[#091b61] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/WhatsApp.svg.webp"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain"
                  />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
