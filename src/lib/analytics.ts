// src/lib/analytics.ts

type EventParams = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Universal event tracker: dispatches to both Google Tag Manager dataLayer and GA4 gtag.
 */
export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  // 1. GTM dataLayer: object format with 'event' key
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });

  // 2. Google Analytics (gtag.js) direct call if initialized
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Development debugging log
  if (process.env.NODE_ENV === "development") {
    console.log(`📊 [Analytics Event] ${eventName}:`, params);
  }
}

/**
 * Track project card clicks
 */
export function trackProjectClick(projectTitle: string, category: string = "Project") {
  trackEvent("project_card_click", {
    project_name: projectTitle,
    category,
  });
}

/**
 * Track external outbound links (LinkedIn, GitHub, email, publications, etc.)
 */
export function trackExternalLink(url: string, platform: string, linkText?: string) {
  trackEvent("external_link_click", {
    link_url: url,
    platform: platform.toLowerCase(),
    link_text: linkText || platform,
  });
}

/**
 * Track resume downloads (Candidate for GA4 Key Event)
 */
export function trackResumeDownload(fileUrl: string = "/resume.pdf") {
  trackEvent("resume_download", {
    file_name: "Tanzil_Shandilya_Resume",
    file_url: fileUrl,
  });
}

/**
 * Track successful contact form submissions (Candidate for GA4 Key Event)
 */
export function trackContactFormSubmit(details: { method?: string; contactType?: string } = {}) {
  trackEvent("contact_form_submit", {
    form_name: "contact_form",
    method: details.method || "website_form",
    ...details,
  });
}

