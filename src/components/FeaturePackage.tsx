"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  MonitorSmartphone,
  TrendingUp,
  Code2,
  Edit3,
} from "lucide-react";
import { featurePackageList, FeatureItem } from "@/data/features";

interface FeaturePackageProps {
  id?: string;
}

export const FeaturePackage: React.FC<FeaturePackageProps> = ({ id = "features" }) => {
  const getIcon = (iconName: FeatureItem["iconName"]) => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 text-[#0B35C8] stroke-[2.2]";
    switch (iconName) {
      case "Globe":
        return <Globe className={iconClass} />;
      case "Search":
        return <Search className={iconClass} />;
      case "MonitorSmartphone":
        return <MonitorSmartphone className={iconClass} />;
      case "TrendingUp":
        return <TrendingUp className={iconClass} />;
      case "Code2":
        return <Code2 className={iconClass} />;
      case "Edit3":
        return <Edit3 className={iconClass} />;
      default:
        return <Globe className={iconClass} />;
    }
  };

  return (
    <section
      id={id}
      className="relative py-20 lg:py-28 bg-[#F6F7F9] text-neutral-900 border-t border-b border-neutral-200/80 overflow-hidden"
    >
      {/* Anchor for backward compatibility with #services links */}
      <span id="services" className="absolute -top-24 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (sesuai referensi foto 1) */}
        <div className="mb-12 sm:mb-14">
          <p className="text-sm sm:text-base font-normal text-neutral-500 mb-2 font-sans tracking-normal">
            Apa yang akan Anda dapatkan?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-sans">
            Our Feature Package
          </h2>
        </div>

        {/* 6 Feature Cards Grid (sesuai referensi foto 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featurePackageList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-100 shadow-[0_6px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(11,53,200,0.12)] transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
            >
              {/* Circular Icon with Blue Border (sesuai foto 1) */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#0B35C8] flex items-center justify-center shrink-0 bg-white shadow-xs group-hover:scale-105 group-hover:bg-blue-50/50 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2 leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
