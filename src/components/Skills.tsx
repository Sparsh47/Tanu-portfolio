"use client";

import { useState } from "react";
import { GraduationCap, Award, Smartphone, Brain, BadgeCheck } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

const certIcons = [
  <GraduationCap key="grad" size={20} strokeWidth={1.5} />,
  <Award key="award" size={20} strokeWidth={1.5} />,
  <Smartphone key="phone" size={20} strokeWidth={1.5} />,
  <Brain key="brain" size={20} strokeWidth={1.5} />,
];

export default function Skills() {
  const { skillCategories, certifications } = PORTFOLIO;
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ───────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="reveal text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Skills &amp;{" "}
            <span className="italic text-[#8B4A3C]">Certifications</span>
          </h2>
        </div>

        {/* ── Skills — Stacked editorial rows ──────────────── */}
        <div className="reveal mb-20 border border-[#C4956A]/20 rounded-3xl overflow-hidden bg-[#F5EFE0] divide-y divide-[#C4956A]/15">
          {skillCategories.map((cat, i) => {
            const isOpen = openCategory === i;
            return (
              <div key={cat.category} className="group">
                {/* Row header — click to toggle on mobile, always expanded on lg */}
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 md:py-6 cursor-pointer text-left"
                  onClick={() => setOpenCategory(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Number */}
                    <span
                      className="flex-shrink-0 text-xs font-mono text-[#C4956A]/60"
                      style={{ fontFamily: "monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Category name */}
                    <h3
                      className="text-base md:text-lg font-bold text-[#2C1810] truncate transition-colors duration-300 group-hover:text-[#8B4A3C]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {cat.category}
                    </h3>
                  </div>

                  {/* Desktop: always show skills inline; Mobile: show count + chevron */}
                  <div className="hidden md:flex flex-wrap gap-2 flex-1 justify-end">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill border border-[#8B4A3C]/35 text-[#8B4A3C] text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Mobile: skill count + expand indicator */}
                  <div className="flex md:hidden items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-[#6B5744] font-medium">
                      {cat.skills.length} skills
                    </span>
                    <div
                      className="w-7 h-7 rounded-full border border-[#C4956A]/40 flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen ? "#2C1810" : "transparent",
                        borderColor: isOpen ? "#2C1810" : undefined,
                      }}
                    >
                      <svg
                        width="10" height="10" viewBox="0 0 10 10"
                        className="transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path
                          d="M1.5 3.5L5 7L8.5 3.5"
                          stroke={isOpen ? "#C4956A" : "#8B4A3C"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Mobile expandable skills */}
                <div
                  className="md:hidden overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div className="px-6 pb-5 flex flex-wrap gap-2 border-t border-[#C4956A]/10 pt-4">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill border border-[#8B4A3C]/35 text-[#8B4A3C] text-xs font-medium px-3 py-2 rounded-full"
                      >
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Certifications ────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#C4956A]/20" />
            <p className="text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase">
              Certifications
            </p>
            <div className="h-px flex-1 bg-[#C4956A]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`reveal delay-${i * 100 + 100} card-hover bg-[#2C1810] rounded-2xl p-6 relative overflow-hidden group cursor-default`}
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#8B4A3C]/20 -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#C4956A]/20" />

                {/* Icon */}
                <div className="relative z-10 mb-4 w-11 h-11 rounded-xl bg-[#C4956A]/10 border border-[#C4956A]/20 flex items-center justify-center text-[#C4956A] transition-all duration-300 group-hover:bg-[#C4956A]/25 group-hover:scale-110">
                  {certIcons[i] || certIcons[0]}
                </div>

                <h4
                  className="text-[#F5EFE0] font-bold text-sm leading-snug mb-2 relative z-10"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {cert.title}
                </h4>
                <p className="text-[#C4956A] text-xs font-medium relative z-10 tracking-wide">
                  {cert.issuer}
                </p>
                <p className="text-[#EDE8DC]/40 text-xs mt-1 relative z-10">
                  {cert.year}
                </p>

                {/* Verified */}
                <div className="absolute bottom-4 right-4 z-10">
                  <BadgeCheck
                    size={20}
                    className="text-[#6B8F71] transition-all duration-300 group-hover:text-[#8EC99A] group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
