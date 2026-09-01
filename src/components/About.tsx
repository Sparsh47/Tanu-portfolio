"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

function CounterStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 70;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="card-hover bg-[#EDE8DC] rounded-2xl p-6 border border-[#C4956A]/20 text-center group cursor-default"
    >
      <p
        className="text-4xl md:text-5xl font-bold text-[#2C1810] group-hover:text-[#8B4A3C] transition-colors duration-400"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {count}
        <span className="text-[#C4956A]">{suffix}</span>
      </p>
      <p className="text-[#6B5744] text-sm mt-2 font-medium">{label}</p>
    </div>
  );
}

export default function About() {
  const { about } = PORTFOLIO;

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="reveal text-sm font-semibold text-[#8B4A3C] tracking-widest uppercase mb-4">
          Who I Am
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Bio */}
          <div>
            <h2
              className="reveal text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight mb-8"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {about.headline}
            </h2>
            {about.bio.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`reveal text-[#6B5744] text-base md:text-lg leading-relaxed mb-5 font-light ${
                  i === 0 ? "" : "delay-200"
                }`}
              >
                {para}
              </p>
            ))}

            {/* Decorative quote */}
            <div className="reveal delay-300 mt-8 pl-5 border-l-2 border-[#C4956A] cursor-default">
              <Quote
                size={20}
                className="text-[#C4956A] mb-2"
                strokeWidth={1.5}
              />
              <p
                className="text-[#8B4A3C] italic text-lg leading-relaxed"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Great marketing starts with deep human understanding — and ends
                with measurable results.
              </p>
            </div>
          </div>

          {/* Right — Stats Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, i) => (
                <div key={stat.label} className={`reveal delay-${(i + 1) * 100}`}>
                  <CounterStat
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              ))}
            </div>

            {/* Location card */}
            <div className="reveal delay-500 mt-8 bg-[#2C1810] rounded-2xl p-6 text-[#F5EFE0] relative overflow-hidden cursor-default group">
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#8B4A3C]/30 -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:scale-125" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-[#C4956A]/20 translate-y-1/2 -translate-x-1/2 transition-all duration-500 group-hover:scale-125" />
              <p className="text-[#C4956A] text-xs font-semibold tracking-widest uppercase mb-2 relative z-10">
                Currently Based In
              </p>
              <p
                className="text-2xl font-bold relative z-10"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                New Delhi, India
              </p>
              <p className="text-[#EDE8DC]/60 text-sm mt-1 relative z-10 font-light">
                Open to remote &amp; global projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
