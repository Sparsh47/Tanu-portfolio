"use client";

import { useState, useEffect, useRef } from "react";
import { X, Menu, ArrowRight } from "lucide-react";
import { PORTFOLIO } from "@/app/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Social Work", href: "#social" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  const initials = PORTFOLIO.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[#C4956A]/20 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#2C1810] flex items-center justify-center transition-all duration-400 group-hover:bg-[#8B4A3C] group-hover:scale-110">
              <span
                className="text-[#F5EFE0] text-sm font-bold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {initials}
              </span>
            </div>
            <span
              className="text-[#2C1810] font-semibold text-sm tracking-wide hidden sm:block"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {PORTFOLIO.name}
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link text-sm text-[#6B5744] hover:text-[#2C1810] transition-colors duration-200 pb-0.5 font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block btn-fill border border-[#2C1810] text-[#2C1810] text-sm font-semibold px-5 py-2 rounded-full"
          >
            <span>Get in Touch</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-[#2C1810] hover:text-[#8B4A3C] transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* ─── Full-Screen Mobile Menu ────────────────────────── */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[60] bg-[#2C1810]/40 backdrop-blur-sm menu-overlay cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            ref={menuRef}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[420px] bg-[#2C1810] flex flex-col animate-slide-menu-in"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-[#C4956A]/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C4956A] flex items-center justify-center">
                  <span
                    className="text-[#2C1810] text-sm font-bold"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {initials}
                  </span>
                </div>
                <span className="text-[#F5EFE0] text-sm font-semibold">
                  {PORTFOLIO.name}
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-[#C4956A]/30 flex items-center justify-center text-[#C4956A] hover:bg-[#C4956A] hover:text-[#2C1810] transition-all duration-300 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-8 py-10 flex flex-col gap-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-center justify-between py-5 border-b border-[#C4956A]/10 cursor-pointer text-left w-full"
                  style={{
                    animation: `menuLinkIn 0.4s cubic-bezier(0.22,1,0.36,1) both`,
                    animationDelay: `${0.08 + i * 0.06}s`,
                  }}
                >
                  {/* Number + Label */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[#C4956A]/40 text-xs font-mono w-5"
                      style={{ fontFamily: "monospace" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-semibold text-2xl transition-all duration-300 ${
                        hoveredLink === link.href
                          ? "text-[#C4956A] translate-x-1"
                          : "text-[#F5EFE0]"
                      }`}
                      style={{
                        fontFamily: "Playfair Display, serif",
                        transition:
                          "color 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                        transform:
                          hoveredLink === link.href
                            ? "translateX(8px)"
                            : "translateX(0)",
                      }}
                    >
                      {link.label}
                    </span>
                  </div>
                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    className={`text-[#C4956A] transition-all duration-300 ${
                      hoveredLink === link.href
                        ? "opacity-100 translate-x-1"
                        : "opacity-0 -translate-x-2"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-[#C4956A]/20">
              <p className="text-[#EDE8DC]/40 text-xs">
                © {new Date().getFullYear()} {PORTFOLIO.name}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
