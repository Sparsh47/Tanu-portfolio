"use client";

import { Heart, Lightbulb, HeartHandshake } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={28} className="text-[#C4956A]" strokeWidth={1.5} />,
  lightbulb: <Lightbulb size={28} className="text-[#C4956A]" strokeWidth={1.5} />,
  handshake: <HeartHandshake size={28} className="text-[#C4956A]" strokeWidth={1.5} />,
};

// Map content icons to Lucide keys
const socialIcons = ["heart", "lightbulb", "handshake"];

export default function SocialWork() {
  const { socialWork } = PORTFOLIO;

  return (
    <section
      id="social"
      className="py-24 md:py-32 px-6 md:px-10 bg-[#2C1810] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B4A3C]/20 blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C4956A]/10 blur-3xl translate-y-1/3 -translate-x-1/4" />
        {/* Decorative grid dots */}
        <div className="absolute top-16 left-16 grid grid-cols-5 gap-3 opacity-10 hidden lg:grid">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C4956A]" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <p className="reveal text-sm font-semibold text-[#C4956A] tracking-widest uppercase mb-4">
              Giving Back
            </p>
            <h2
              className="reveal text-4xl md:text-5xl font-bold text-[#F5EFE0] leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Marketing for{" "}
              <span className="italic text-[#C4956A]">Social Good</span>
            </h2>
          </div>
          <p className="reveal text-[#EDE8DC]/70 text-base leading-relaxed font-light">
            Beyond campaigns and KPIs, I believe in using the power of
            marketing to create meaningful change. Here&apos;s how I&apos;ve
            been doing that.
          </p>
        </div>

        {/* Social Work Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {socialWork.map((item, index) => (
            <div
              key={item.title}
              className={`reveal delay-${index * 150 + 100} group relative bg-white/5 border border-[#C4956A]/20 rounded-2xl p-7 cursor-default overflow-hidden`}
            >
              {/* Hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B4A3C]/0 to-[#C4956A]/0 group-hover:from-[#8B4A3C]/12 group-hover:to-[#C4956A]/8 transition-all duration-600" />
              {/* Top-right glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#C4956A]/0 group-hover:bg-[#C4956A]/10 blur-2xl transition-all duration-500" />

              {/* Icon */}
              <div className="relative z-10 mb-5 w-14 h-14 rounded-xl bg-[#C4956A]/10 border border-[#C4956A]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C4956A]/20 group-hover:scale-110">
                {iconMap[socialIcons[index]] || iconMap["heart"]}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-lg font-bold text-[#F5EFE0] mb-1 group-hover:text-[#C4956A] transition-colors duration-300"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#C4956A] text-xs font-semibold mb-1 tracking-wide">
                  {item.organisation}
                </p>
                <p className="text-[#EDE8DC]/40 text-xs mb-4 font-medium">
                  {item.duration}
                </p>

                <p className="text-[#EDE8DC]/70 text-sm leading-relaxed mb-5 font-light">
                  {item.description}
                </p>

                {/* Impact metric */}
                <div className="flex items-center gap-2 pt-4 border-t border-[#C4956A]/15">
                  <div className="w-2 h-2 rounded-full bg-[#6B8F71] flex-shrink-0" />
                  <p className="text-[#F5EFE0] text-sm font-semibold">
                    {item.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
