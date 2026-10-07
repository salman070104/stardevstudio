"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2, Sparkles, Terminal, Activity, Layers } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "web") return p.category.includes("Web") || p.category.includes("Corporate");
    if (filter === "ai") return p.category.includes("AI");
    if (filter === "custom") return p.category.includes("Digital") || p.category.includes("SaaS");
    return true;
  });

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#FFFFFF] text-neutral-900 border-t border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-200 gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              PORTFOLIO ARCHIVE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 font-display">
              SELECTED <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                WORK
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Dev" },
              { id: "ai", label: "AI & Auto" },
              { id: "custom", label: "SaaS & Apps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-neutral-900 text-white font-bold shadow-md"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 High-Impact Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col rounded-3xl bg-[#F8F9FA] border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Visual Mockup Container (Sleek CSS UI placeholder) */}
              <div className="relative h-64 sm:h-72 w-full bg-[#0B0F19] p-6 flex flex-col justify-between overflow-hidden">
                {/* Background glow gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accentBg} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                {/* Subtle grid lines */}
                <div className="absolute inset-0 bg-grid-dark opacity-30" />

                {/* Mockup Browser/Window Top Chrome */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400">
                    stardevstudio.id / {project.id}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                    {project.year}
                  </span>
                </div>

                {/* Real Website Screenshot Mockup */}
                <div className="relative z-10 my-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl h-44 sm:h-48 group-hover:scale-[1.03] transition-transform duration-500 bg-[#050505]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
                </div>

                {/* Bottom Metric Label */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>{project.metrics.label}</span>
                  <span className="text-white font-bold">{project.metrics.value}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">
                      {project.number} • {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      ID: {project.id}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-950 font-display mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Arrow Action */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover:text-neutral-900 transition-colors">
                      View Project Specs
                    </span>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
