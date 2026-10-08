"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenContact?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Multi-page navigation links sesuai foto referensi
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
            : "py-5 bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center focus:outline-none">
            <Logo variant="full" theme="dark" size="md" />
          </Link>

          {/* Desktop Nav Links (Multi-page sesuai foto referensi) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B0F19]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs sm:text-[13px] tracking-normal transition-colors duration-200 rounded-full font-medium ${
                    isActive
                      ? "text-white bg-white/15 font-semibold shadow-xs"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Trigger & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger Button (Identik di HP & Desktop) */}
            <button
              onClick={onOpenSearch}
              className="relative group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white overflow-hidden transition-all duration-300 bg-blue-600 hover:bg-blue-500 shadow-md sm:shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 cursor-pointer"
              aria-label="Search"
            >
              <span>Search</span>
              <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#080C14]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-2">
                // Menu Navigasi
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base sm:text-lg font-semibold py-1.5 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-blue-400 font-bold"
                        : "text-neutral-200 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-neutral-500">→</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>Search</span>
                  <Search className="w-4 h-4" />
                </button>
                <div className="text-center text-xs text-neutral-400 font-mono mt-1">
                  stardevstudio.id • Digital Future
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
