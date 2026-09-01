"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [phase, setPhase] = useState<"idle" | "animate" | "exit">("idle");

  useEffect(() => {
    // Kick off animation on next frame to ensure SVG is mounted
    const t0 = requestAnimationFrame(() => {
      setPhase("animate");
    });
    // Start exit fade at 1.6s
    const t1 = setTimeout(() => setPhase("exit"), 1600);
    // Unmount at 2s
    const t2 = setTimeout(() => onComplete(), 2000);

    return () => {
      cancelAnimationFrame(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const circumference = 2 * Math.PI * 80; // r=80

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F5EFE0",
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: phase === "exit" ? "none" : "all",
      }}
    >
      {/* ── SVG Ring + Initials ──────────────────────────── */}
      <div style={{ position: "relative", width: 200, height: 200, marginBottom: 28 }}>
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          style={{ overflow: "visible" }}
        >
          {/* Outer track */}
          <circle
            cx="100" cy="100" r="80"
            fill="none"
            stroke="#EDE8DC"
            strokeWidth="1.5"
          />

          {/* Animated drawing ring */}
          <circle
            cx="100" cy="100" r="80"
            fill="none"
            stroke="#C4956A"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset:
                phase === "animate" ? 0 : circumference,
              transition:
                "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)",
              transform: "rotate(-90deg)",
              transformOrigin: "100px 100px",
            }}
          />

          {/* Inner subtle ring */}
          <circle
            cx="100" cy="100" r="68"
            fill="none"
            stroke="#EDE8DC"
            strokeWidth="1"
            strokeDasharray="4 8"
            style={{
              opacity: phase === "animate" ? 0.6 : 0,
              transition: "opacity 0.6s ease 0.4s",
            }}
          />

          {/* Decorative dot on the ring tip */}
          <circle
            cx="100" cy="20"
            r="4"
            fill="#8B4A3C"
            style={{
              opacity: phase === "animate" ? 1 : 0,
              transition: "opacity 0.3s ease 1.2s",
            }}
          />

          {/* Large italic T */}
          <text
            x="100" y="96"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#2C1810"
            fontFamily="Playfair Display, Georgia, serif"
            fontSize="52"
            fontWeight="700"
            fontStyle="italic"
            style={{
              opacity: phase === "animate" ? 1 : 0,
              transition: "opacity 0.5s ease 0.3s",
            }}
          >
            T
          </text>

          {/* Dot below T */}
          <circle
            cx="100" cy="127"
            r="3"
            fill="#C4956A"
            style={{
              opacity: phase === "animate" ? 1 : 0,
              transition: "opacity 0.4s ease 0.7s",
            }}
          />
        </svg>
      </div>

      {/* ── Name ─────────────────────────────────────────── */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        {/* Full name with letter stagger */}
        <p
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#2C1810",
            letterSpacing: "0.12em",
            opacity: phase === "animate" ? 1 : 0,
            transform: phase === "animate" ? "translateY(0)" : "translateY(10px)",
            transition:
              "opacity 0.6s ease 0.5s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s",
            marginBottom: 6,
          }}
        >
          TANZIL SHANDILYA
        </p>
        <p
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: "#8B4A3C",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: phase === "animate" ? 1 : 0,
            transition: "opacity 0.5s ease 0.8s",
          }}
        >
          Marketing Strategist
        </p>
      </div>

      {/* ── Progress bar ──────────────────────────────────── */}
      <div
        style={{
          width: 160,
          height: 1.5,
          background: "#EDE8DC",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(to right, #8B4A3C, #C4956A)",
            borderRadius: 2,
            width: phase === "animate" ? "100%" : "0%",
            transition: "width 1.4s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        />
      </div>
    </div>
  );
}
