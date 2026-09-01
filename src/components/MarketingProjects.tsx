"use client";

import { useState } from "react";
import { BarChart2 } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

export default function MarketingProjects() {
  const { marketingProjects } = PORTFOLIO;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-10 bg-[#EDE8DC]/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <p className="reveal text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase mb-4">
              Case Studies
            </p>
            <h2
              className="reveal text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Marketing Results That
              <span className="italic text-[#8B4A3C]"> Speak for Themselves</span>
            </h2>
          </div>
          <p className="reveal text-[#6B5744] text-base leading-relaxed">
            From viral social campaigns to performance-driven ad strategies,
            here&apos;s a selection of work that drove real, measurable impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {marketingProjects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal delay-${index * 100 + 100} card-hover group relative bg-[#F5EFE0] rounded-3xl overflow-hidden border border-[#C4956A]/20 cursor-default`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Banner */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Animated circles on hover */}
                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 transition-all duration-500 ${
                    hoveredIndex === index ? "scale-150" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/8 transition-all duration-700 ${
                    hoveredIndex === index ? "scale-125" : "scale-100"
                  }`}
                />

                {/* Category pill */}
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {project.category}
                </span>

                {/* Result metric — appears on hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
                    <p className="text-white/80 text-xs font-medium">Result</p>
                    <p
                      className="text-white font-bold text-sm mt-0.5"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="text-xl font-bold text-[#2C1810] mb-3 group-hover:text-[#8B4A3C] transition-colors duration-300"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#6B5744] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#8B4A3C] bg-[#8B4A3C]/10 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-[#C4956A]/20">
                  <BarChart2 size={13} className="text-[#6B8F71]" strokeWidth={1.5} />
                  <p className="text-[#2C1810] text-sm font-semibold">{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
