"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, Laptop } from "lucide-react";

interface LaptopProject {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  badgeColor: string;
  urlLabel: string;
}

const laptopProjects: LaptopProject[] = [
  {
    id: "keluargadi",
    title: "Keluarga di Indonesia",
    category: "E-Commerce & Digital Store",
    image: "/images/keluargadi.png",
    tag: "E-Commerce Live",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    urlLabel: "stardevstudio.id / keluarga-di-indonesia",
  },
  {
    id: "sistem-login",
    title: "StarConnect Portal",
    category: "Web Application & Billing System",
    image: "/images/sistem-login.png",
    tag: "Customer Portal",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    urlLabel: "stardevstudio.id / customer-portal",
  },
  {
    id: "starconnect",
    title: "StarConnect Internet",
    category: "ISP & Corporate Website",
    image: "/images/Starconnect.png",
    tag: "Corporate ISP",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    urlLabel: "stardevstudio.id / starconnect-isp",
  },
  {
    id: "blokm",
    title: "Blok M Studio",
    category: "Creative Agency Website",
    image: "/images/blokm.png",
    tag: "Studio Agency",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    urlLabel: "stardevstudio.id / blok-m-studio",
  },
];

export const HeroLaptopShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch laptop mockups every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % laptopProjects.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? laptopProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % laptopProjects.length);
  };

  const currentProject = laptopProjects[currentIndex];

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[380px] sm:w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-indigo-600/20 rounded-full blur-[110px]" />
      </div>

      {/* Floating Status & Category Badge */}
      <div className="w-full flex items-center justify-between mb-3 px-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
            Interactive Showcase
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          <span className="text-white font-bold">{currentIndex + 1}</span>
          <span>/</span>
          <span>{laptopProjects.length}</span>
        </div>
      </div>

      {/* Main Laptop PNG Mockup Container with Smooth Animated Switching */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center relative cursor-pointer group"
            onClick={handleNext}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] group-hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-blue-600 text-white/80 hover:text-white border border-white/15 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer z-20"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-blue-600 text-white/80 hover:text-white border border-white/15 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer z-20"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Card Info & Dot Controls */}
      <div className="w-full mt-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold border ${currentProject.badgeColor}`}
            >
              {currentProject.tag}
            </span>
            <span className="text-[11px] font-mono text-neutral-400 truncate">
              {currentProject.urlLabel}
            </span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
            {currentProject.title}
          </h4>
        </div>

        {/* Interactive Dots Switcher */}
        <div className="flex items-center gap-1.5 self-center sm:self-auto shrink-0">
          {laptopProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to ${proj.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-7 bg-blue-500 shadow-sm shadow-blue-500/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
