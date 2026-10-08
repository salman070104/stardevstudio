"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LaptopProject {
  id: string;
  title: string;
  image: string;
}

const laptopProjects: LaptopProject[] = [
  {
    id: "keluargadi",
    title: "Keluarga di Indonesia",
    image: "/images/keluargadi.png",
  },
  {
    id: "sistem-login",
    title: "StarConnect Portal",
    image: "/images/sistem-login.png",
  },
  {
    id: "starconnect",
    title: "StarConnect Internet",
    image: "/images/Starconnect.png",
  },
  {
    id: "blokm",
    title: "Blok M Studio",
    image: "/images/blokm.png",
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
  }, [isPaused]);

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
      className="relative w-full flex flex-col items-center justify-center select-none group/showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[380px] sm:w-[520px] h-[320px] bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-indigo-600/20 rounded-full blur-[110px]" />
      </div>

      {/* Main Laptop PNG Mockup Container with Smooth Animated Switching */}
      <div className="relative w-full aspect-[16/10] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center relative cursor-pointer"
            onClick={handleNext}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-300"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-blue-600 text-white/80 hover:text-white border border-white/15 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer z-20 opacity-0 group-hover/showcase:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-blue-600 text-white/80 hover:text-white border border-white/15 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer z-20 opacity-0 group-hover/showcase:opacity-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};
