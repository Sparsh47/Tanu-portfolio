"use client";

import { ExternalLink, TrendingUp } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

export default function ResearchProjects() {
  const { researchProjects } = PORTFOLIO;

  return (
    <section id="research" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase mb-4">
            Academic Work
          </p>
          <h2
            className="reveal text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Research &amp;{" "}
            <span className="italic text-[#8B4A3C]">Publications</span>
          </h2>
          <p className="reveal text-[#6B5744] mt-4 max-w-xl mx-auto font-light">
            Peer-reviewed research exploring the intersection of consumer
            psychology, digital behaviour, and marketing effectiveness.
          </p>
        </div>

        {/* Research List */}
        <div className="flex flex-col gap-5">
          {researchProjects.map((paper, index) => (
            <ResearchCard key={paper.title} paper={paper} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchCard({
  paper,
  index,
}: {
  paper: (typeof PORTFOLIO.researchProjects)[number];
  index: number;
}) {
  return (
    <details
      className={`reveal delay-${index * 100 + 100} group bg-[#EDE8DC] rounded-2xl border border-[#C4956A]/20 overflow-hidden cursor-pointer`}
    >
      {/* Summary (always visible) */}
      <summary className="p-7 list-none">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            {/* Journal & Year */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-[#8B4A3C] bg-[#8B4A3C]/10 px-3 py-1 rounded-full">
                {paper.year}
              </span>
              <span className="text-xs text-[#6B5744] font-medium">
                {paper.journal}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-lg md:text-xl font-bold text-[#2C1810] group-hover:text-[#8B4A3C] transition-colors duration-300 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {paper.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#6B5744] bg-[#F5EFE0] border border-[#C4956A]/25 px-3 py-1 rounded-full cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Toggle icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C4956A]/40 flex items-center justify-center text-[#8B4A3C] transition-all duration-300 group-hover:bg-[#8B4A3C] group-hover:text-white group-hover:border-[#8B4A3C] mt-1 cursor-pointer">
            <TrendingUp
              size={14}
              className="transition-transform duration-300 group-open:rotate-90"
            />
          </div>
        </div>
      </summary>

      {/* Expandable abstract */}
      <div className="px-7 pb-7">
        <div className="pt-5 border-t border-[#C4956A]/20">
          <p className="text-xs font-semibold text-[#8B4A3C] mb-3 uppercase tracking-wider">
            Abstract
          </p>
          <p className="text-[#6B5744] text-sm leading-relaxed font-light mb-4">
            {paper.abstract}
          </p>
          {paper.link && paper.link !== "#" && (
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-[#8B4A3C] text-sm font-semibold hover:text-[#2C1810] transition-colors duration-200 cursor-pointer"
            >
              Read Full Paper
              <ExternalLink size={13} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </details>
  );
}
