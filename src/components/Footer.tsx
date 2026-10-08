"use client";

import React from "react";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="#home" className="inline-block mb-4">
              <Logo variant="full" theme="dark" size="md" />
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mb-5 font-normal">
              Digital technology studio yang membantu bisnis membangun website, aplikasi web,
              automation, dan solusi AI modern dengan performa tinggi.
            </p>

            {/* Social Media Links (Berwarna: WA, IG, TikTok) */}
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281929442611"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md shadow-[#25D366]/25"
                aria-label="WhatsApp StarDev Studio"
                title="WhatsApp: 081929442611"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/WhatsApp.svg.webp"
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/stardevstudio?stkn=MW5mcWQ1N2JjbnI1dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md shadow-[#ee2a7b]/25"
                aria-label="Instagram StarDev Studio"
                title="Instagram: @stardevstudio"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@jasapembuatanwebsite05?_r=1&_t=ZS-9AMJAapJNZO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md shadow-cyan-500/25"
                aria-label="TikTok StarDev Studio"
                title="TikTok: @jasapembuatanwebsite05"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tiktok.png"
                  alt="TikTok"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricelist
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Application
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI &amp; Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Digital Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-3 text-sm text-neutral-400 mb-6">
              <a
                href="https://stardevstudio.id"
                className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors text-sm"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>stardevstudio.id</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-neutral-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>hello@stardevstudio.id</span>
              </div>
            </div>

            <a
              href="https://wa.me/6281929442611"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-md shadow-[#25D366]/30 hover:scale-[1.02] transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/WhatsApp.svg.webp" alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-400 gap-4">
          <div>© 2026 StarDev Studio. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js &amp; Tailwind</span>
            <span>•</span>
            <span>stardevstudio.id</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
