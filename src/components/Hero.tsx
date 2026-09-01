"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const words = PORTFOLIO.rotatingWords;

  // Slot machine word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 380);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  // Mouse parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* ─── Background Orbs (parallax) ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#C4956A]/12 blur-3xl"
          style={{
            transform: `translate(${mouse.x * -18}px, ${mouse.y * -12}px)`,
            transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div
          className="absolute bottom-16 -left-24 w-[400px] h-[400px] rounded-full bg-[#8B4A3C]/10 blur-3xl"
          style={{
            transform: `translate(${mouse.x * 14}px, ${mouse.y * 10}px)`,
            transition: "transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {/* Spinning ring */}
        <div
          className="absolute top-28 right-16 w-28 h-28 border border-[#C4956A]/25 rounded-full animate-spin-slow hidden lg:block"
          style={{
            transform: `translate(${mouse.x * -10}px, ${mouse.y * -8}px) rotate(0deg)`,
          }}
        />
        <div
          className="absolute top-36 right-24 w-14 h-14 border-2 border-[#8B4A3C]/15 rounded-full hidden lg:block"
          style={{
            animation: "spinSlow 12s linear infinite reverse",
            transform: `translate(${mouse.x * 8}px, ${mouse.y * 6}px)`,
          }}
        />
        {/* Decorative dots */}
        <div className="absolute bottom-32 right-32 hidden lg:grid grid-cols-4 gap-2.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#C4956A]/25"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* ─── Left — Text Content ──────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDE8DC] border border-[#C4956A]/40 text-[#8B4A3C] text-sm font-medium mb-8 w-fit animate-border-pulse cursor-default"
              style={{
                animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                animationDelay: "0.1s",
                opacity: 0,
              }}
            >
              <Sparkles size={13} className="text-[#C4956A]" />
              Available for Projects
            </div>

            {/* Tagline */}
            <p
              className="text-[#6B5744] text-lg md:text-xl font-medium mb-2"
              style={{
                animation: "fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards",
                animationDelay: "0.22s",
                opacity: 0,
              }}
            >
              {PORTFOLIO.tagline}
            </p>

            {/* Big headline + rotating word */}
            <div
              style={{
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
                animationDelay: "0.34s",
                opacity: 0,
              }}
            >
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="block text-[#2C1810]">campaigns</span>
                <span className="block italic text-[#8B4A3C] relative overflow-hidden h-[1.1em]">
                  <span
                    className="inline-block transition-all duration-380"
                    style={{
                      transform: isAnimating
                        ? "translateY(-110%)"
                        : "translateY(0)",
                      opacity: isAnimating ? 0 : 1,
                      transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
                    }}
                  >
                    {words[wordIndex]}
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-[#6B5744] text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light"
              style={{
                animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                animationDelay: "0.5s",
                opacity: 0,
              }}
            >
              {PORTFOLIO.heroSubtitle}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                animationDelay: "0.64s",
                opacity: 0,
              }}
            >
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="magnetic btn-fill bg-[#2C1810] text-[#F5EFE0] text-sm font-semibold px-8 py-4 rounded-full hover:shadow-xl"
              >
                <span>{PORTFOLIO.ctaText}</span>
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[#2C1810]/30 text-[#2C1810] text-sm font-semibold px-8 py-4 rounded-full hover:border-[#8B4A3C] hover:text-[#8B4A3C] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
              >
                View My Work
                <ArrowDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-8 mt-12 pt-8 border-t border-[#C4956A]/25"
              style={{
                animation: "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                animationDelay: "0.8s",
                opacity: 0,
              }}
            >
              {PORTFOLIO.about.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="cursor-default">
                  <p
                    className="text-2xl font-bold text-[#2C1810]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-[#6B5744] mt-0.5 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right — Profile Image ─────────────────────────── */}
          <div
            className="relative flex justify-center lg:justify-end"
            style={{
              animation: "scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards",
              animationDelay: "0.35s",
              opacity: 0,
              transform: `translate(${mouse.x * -5}px, ${mouse.y * -4}px)`,
              transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="relative">
              {/* Morphing blob behind image */}
              <div className="absolute inset-0 scale-[1.12] bg-gradient-to-br from-[#C4956A]/20 to-[#8B4A3C]/15 animate-morph-blob" />

              {/* Profile image */}
              <div className="relative w-72 h-80 md:w-96 md:h-[490px] rounded-3xl overflow-hidden border-2 border-[#C4956A]/30 shadow-2xl">
                <Image
                  src={PORTFOLIO.profileImage}
                  alt={`${PORTFOLIO.name} — ${PORTFOLIO.title}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-5 -left-8 glass px-5 py-3 rounded-2xl shadow-lg animate-float cursor-default"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <MapPin size={11} className="text-[#C4956A]" />
                  <p className="text-[10px] text-[#6B5744] font-medium tracking-wide">
                    Currently at
                  </p>
                </div>
                <p
                  className="text-[#2C1810] font-bold text-sm"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Ogilvy India
                </p>
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-5 -right-5 glass px-4 py-3 rounded-2xl shadow-lg animate-float-reverse cursor-default"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-[10px] text-[#6B5744] font-medium tracking-wide">
                  Reach Generated
                </p>
                <p
                  className="text-[#8B4A3C] font-bold text-xl"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  4M+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Marquee Strip ────────────────────────────────────── */}
      <div className="border-t border-b border-[#C4956A]/25 bg-[#EDE8DC]/60 py-4 overflow-hidden mt-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...PORTFOLIO.marqueeWords, ...PORTFOLIO.marqueeWords].map(
            (word, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 mx-6 text-sm font-medium text-[#6B5744] cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4956A]" />
                {word}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
