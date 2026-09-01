"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import MarketingProjects from "@/components/MarketingProjects";
import ResearchProjects from "@/components/ResearchProjects";
import SocialWork from "@/components/SocialWork";
import Contact from "@/components/Contact";
import PageLoader from "@/components/PageLoader";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const initReveal = useCallback(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const elements = document.querySelectorAll(selectors);

    // ── Immediately mark elements already in viewport ──────────
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.05) {
        el.classList.add("visible");
      }
    });

    // ── IntersectionObserver for remaining elements ─────────────
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      // Generous rootMargin so elements near-viewport fire early
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return observer;
  }, []);

  useEffect(() => {
    // Don't run observer until loader is gone
    if (loading) return;

    // Wait one frame for layout paint, then start observing
    const raf = requestAnimationFrame(() => {
      const observer = initReveal();
      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [loading, initReveal]);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* ── Loading screen ─────────────────────────────────── */}
      {loading && <PageLoader onComplete={handleLoaderComplete} />}

      {/* ── Main content ───────────────────────────────────── */}
      <main
        className="bg-[#F5EFE0] min-h-screen overflow-x-hidden"
        style={{
          // Keep content rendered but invisible during load
          // (avoids flash/jump when loader exits)
          visibility: loading ? "hidden" : "visible",
        }}
      >
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#2C1810",
              color: "#F5EFE0",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              borderRadius: "12px",
              padding: "14px 20px",
              fontSize: "14px",
            },
            success: {
              iconTheme: { primary: "#C4956A", secondary: "#2C1810" },
            },
            error: {
              iconTheme: { primary: "#E07070", secondary: "#2C1810" },
            },
          }}
        />
        <Navbar />
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <MarketingProjects />
        <ResearchProjects />
        <SocialWork />
        <Contact />
      </main>
    </>
  );
}
