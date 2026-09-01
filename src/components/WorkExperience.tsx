"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Calendar, Tag } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

export default function WorkExperience() {
  const { workExperience } = PORTFOLIO;
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-10 bg-[#EDE8DC]/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 items-end mb-16">
          <div>
            <p className="reveal text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase mb-4">
              Work Experience
            </p>
            <h2
              className="reveal text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Where I&apos;ve Made
              <span className="italic text-[#8B4A3C]"> My Mark</span>
            </h2>
          </div>
          <p className="reveal text-[#6B5744] font-light leading-relaxed">
            A track record built across some of the most respected names in
            Indian marketing and advertising.
          </p>
        </div>

        {/* Experience Accordion */}
        <div className="flex flex-col divide-y divide-[#C4956A]/20">
          {workExperience.map((job, index) => {
            const isOpen = expanded === index;
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={job.company}
                className={`reveal delay-${index * 150} group`}
              >
                {/* ─── Row header (always visible) ─────────────── */}
                <button
                  onClick={() => setExpanded(isOpen ? null : index)}
                  className="w-full text-left py-8 flex items-start gap-6 md:gap-10 cursor-pointer"
                >
                  {/* Large number */}
                  <span
                    className="flex-shrink-0 text-5xl md:text-7xl font-bold leading-none select-none transition-all duration-400"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      color: isOpen ? job.color : "rgba(44,24,16,0.08)",
                    }}
                  >
                    {num}
                  </span>

                  <div className="flex-1 min-w-0 pt-1">
                    {/* Company + badges row */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="text-sm font-semibold tracking-wide uppercase transition-colors duration-300"
                        style={{ color: job.color }}
                      >
                        {job.company}
                      </span>
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white"
                        style={{ background: job.color + "cc" }}
                      >
                        {job.type}
                      </span>
                    </div>

                    {/* Role title */}
                    <h3
                      className="text-2xl md:text-3xl font-bold text-[#2C1810] leading-tight transition-colors duration-300 group-hover:text-[#8B4A3C] mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {job.role}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-[#6B5744] text-sm">
                      <Calendar size={13} strokeWidth={1.5} className="text-[#C4956A]" />
                      <span className="font-medium">{job.duration}</span>
                    </div>
                  </div>

                  {/* Expand chevron */}
                  <div
                    className="flex-shrink-0 mt-2 w-10 h-10 rounded-full border border-[#C4956A]/30 flex items-center justify-center transition-all duration-400"
                    style={{
                      background: isOpen ? job.color : "transparent",
                      borderColor: isOpen ? job.color : undefined,
                    }}
                  >
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className="transition-all duration-400"
                      style={{
                        color: isOpen ? "white" : "#C4956A",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                </button>

                {/* ─── Expandable detail panel ──────────────────── */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div className="pb-10 pl-[68px] md:pl-[100px] pr-0 md:pr-16">
                    {/* Colored top bar */}
                    <div
                      className="h-px w-full mb-8 transition-all duration-700"
                      style={{
                        background: `linear-gradient(to right, ${job.color}, transparent)`,
                        opacity: isOpen ? 1 : 0,
                      }}
                    />

                    <div className="grid md:grid-cols-5 gap-8">
                      {/* Description */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag size={11} strokeWidth={1.5} className="text-[#C4956A]" />
                          <p className="text-xs font-semibold text-[#C4956A] uppercase tracking-widest">
                            Overview
                          </p>
                        </div>
                        <p className="text-[#6B5744] text-sm leading-relaxed font-light">
                          {job.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag size={11} strokeWidth={1.5} className="text-[#C4956A]" />
                          <p className="text-xs font-semibold text-[#C4956A] uppercase tracking-widest">
                            Key Achievements
                          </p>
                        </div>
                        <ul className="flex flex-col gap-3">
                          {job.highlights.map((h, hi) => (
                            <li
                              key={h}
                              className="flex items-start gap-3 text-sm text-[#2C1810] font-light"
                              style={{
                                transitionDelay: `${hi * 60}ms`,
                              }}
                            >
                              <CheckCircle2
                                size={14}
                                strokeWidth={1.5}
                                className="mt-0.5 flex-shrink-0"
                                style={{ color: job.color }}
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
