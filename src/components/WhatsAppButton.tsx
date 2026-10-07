import React from "react";

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/6281929442611?text=Halo%20StarDev%20Studio,%20saya%20ingin%20konsultasi%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp StarDev Studio"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-opacity hover:opacity-90"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/WhatsApp.svg.webp"
        alt="WhatsApp StarDev Studio"
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </a>
  );
};
