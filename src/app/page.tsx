"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import MarketingProjects from "@/components/MarketingProjects";
import ResearchProjects from "@/components/ResearchProjects";
import SocialWork from "@/components/SocialWork";
import Contact from "@/components/Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#F5EFE0] min-h-screen overflow-x-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#2C1810",
            color: "#F5EFE0",
            fontFamily: "Inter, sans-serif",
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
  );
}
