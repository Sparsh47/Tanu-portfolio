"use client";

import { useEffect } from "react";
import { trackExternalLink, trackResumeDownload } from "@/lib/analytics";

/**
 * Global analytics listener: Automatically intercepts and tracks
 * - Outbound external links (LinkedIn, GitHub, external publications, etc.)
 * - Resume / document downloads (.pdf, files containing 'resume' or 'cv', or links with 'download')
 * - Mailto email clicks
 */
export default function AnalyticsProvider() {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a");
      if (!link || !link.href) return;

      const href = link.href;
      const text = (link.textContent || "").trim();

      // 1. Resume / CV / Document download
      if (
        link.hasAttribute("download") ||
        link.dataset.track === "resume" ||
        /\.pdf($|\?)/i.test(href) ||
        /resume|cv/i.test(href) ||
        /resume|cv/i.test(text)
      ) {
        trackResumeDownload(href);
        return;
      }

      // 2. LinkedIn clicks
      if (href.includes("linkedin.com")) {
        trackExternalLink(href, "linkedin", text || "LinkedIn Profile");
        return;
      }

      // 3. GitHub clicks
      if (href.includes("github.com")) {
        trackExternalLink(href, "github", text || "GitHub Profile");
        return;
      }

      // 4. Mailto link clicks
      if (href.startsWith("mailto:")) {
        trackExternalLink(href, "email", text || href.replace("mailto:", ""));
        return;
      }

      // 5. All other outbound external links
      try {
        const urlObj = new URL(href, window.location.href);
        if (
          urlObj.origin !== window.location.origin &&
          (urlObj.protocol === "http:" || urlObj.protocol === "https:")
        ) {
          const platform = urlObj.hostname.replace(/^www\./, "");
          trackExternalLink(href, platform, text || platform);
        }
      } catch {
        // Ignore malformed URLs
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}

