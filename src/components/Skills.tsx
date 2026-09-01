"use client";

import { useState } from "react";
import { GraduationCap, Award, Smartphone, Brain, BadgeCheck } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

const certIcons = [
  <GraduationCap key="grad" size={22} strokeWidth={1.5} />,
  <Award key="award" size={22} strokeWidth={1.5} />,
  <Smartphone key="phone" size={22} strokeWidth={1.5} />,
  <Brain key="brain" size={22} strokeWidth={1.5} />,
];

export default function Skills() {
  const { skillCategories, certifications } = PORTFOLIO;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
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

        {/* ─── Skills — Tab + Display Layout ──────────────────── */}
        <div className="reveal mb-24">
          <div className="grid md:grid-cols-[260px_1fr] gap-0 border border-[#C4956A]/20 rounded-3xl overflow-hidden bg-[#F5EFE0]">

            {/* Left tab rail */}
            <div className="border-r border-[#C4956A]/20 bg-[#EDE8DC]/50 p-3 flex flex-row md:flex-col gap-1">
              {skillCategories.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(i)}
                  className="w-full text-left px-4 py-4 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden flex-1 md:flex-none"
                  style={{
                    background: activeCategory === i ? "#2C1810" : "transparent",
                  }}
                >
                  {/* Hover fill */}
                  {activeCategory !== i && (
                    <span className="absolute inset-0 bg-[#C4956A]/0 group-hover:bg-[#C4956A]/8 transition-colors duration-300 rounded-xl" />
                  )}
                  {/* Number */}
                  <span
                    className="block text-xs font-mono mb-1 transition-colors duration-300"
                    style={{
                      color: activeCategory === i ? "#C4956A" : "#6B5744",
                      opacity: activeCategory === i ? 1 : 0.5,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Label */}
                  <span
                    className="block text-sm font-semibold transition-colors duration-300 leading-snug relative z-10"
                    style={{
                      color: activeCategory === i ? "#F5EFE0" : "#2C1810",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {cat.category}
                  </span>
                  {/* Active dot */}
                  {activeCategory === i && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C4956A]" />
                  )}
                </button>
              ))}
            </div>

            {/* Right skill display */}
            <div className="p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
              {skillCategories.map((cat, i) => (
                <div
                  key={cat.category}
                  className="transition-all duration-400"
                  style={{
                    display: activeCategory === i ? "block" : "none",
                    animation: activeCategory === i ? "fadeUp 0.4s cubic-bezier(0.22,1,0.36,1)" : "none",
                  }}
                >
                  {/* Category heading */}
                  <div className="flex items-baseline gap-3 mb-8">
                    <h3
                      className="text-3xl md:text-4xl font-bold text-[#2C1810]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {cat.category}
                    </h3>
                    <span className="text-[#C4956A] text-sm font-medium">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  {/* Skills as editorial list */}
                  <ul className="flex flex-col divide-y divide-[#C4956A]/15">
                    {cat.skills.map((skill, si) => (
                      <li
                        key={skill}
                        className="group flex items-center justify-between py-3.5 cursor-default"
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className="text-xs text-[#C4956A]/50 font-mono w-5 flex-shrink-0 group-hover:text-[#C4956A] transition-colors duration-200"
                          >
                            {String(si + 1).padStart(2, "0")}
                          </span>
                          <span
                            className="text-[#2C1810] font-semibold text-base md:text-lg group-hover:text-[#8B4A3C] transition-colors duration-250"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            {skill}
                          </span>
                        </div>
                        {/* Animated dot-dash on hover */}
                        <span className="w-6 h-px bg-[#C4956A]/0 group-hover:bg-[#C4956A] group-hover:w-12 transition-all duration-300" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Certifications — Horizontal scroll row ──────────── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#C4956A]/20" />
            <p className="text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase">
              Certifications
            </p>
            <div className="h-px flex-1 bg-[#C4956A]/20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`reveal delay-${i * 100 + 100} card-hover bg-[#2C1810] rounded-2xl p-6 relative overflow-hidden group cursor-default`}
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-[#8B4A3C]/20 -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#C4956A]/20" />

                {/* Icon in pill */}
                <div className="relative z-10 mb-4 w-12 h-12 rounded-xl bg-[#C4956A]/10 border border-[#C4956A]/20 flex items-center justify-center text-[#C4956A] transition-all duration-300 group-hover:bg-[#C4956A]/25 group-hover:scale-110">
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

                {/* Verified badge */}
                <div className="absolute bottom-4 right-4 z-10">
                  <BadgeCheck
                    size={22}
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
