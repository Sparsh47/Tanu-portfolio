import type { Metadata } from "next";
import Script from "next/script";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tanzil-shandilya.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Tanzil Shandilya — Marketing Strategist",
  description:
    "Portfolio of Tanzil Shandilya — a marketing strategist crafting campaigns that convert, captivate, and connect. Expert in brand strategy, digital marketing, and consumer research.",
  keywords: [
    "Marketing Strategist",
    "Brand Strategy",
    "Digital Marketing",
    "SEO",
    "Content Marketing",
    "Tanzil Shandilya",
  ],
  authors: [{ name: "Tanzil Shandilya" }],
  verification: {
    google: "google19a5526715cb9158",
  },
  openGraph: {
    title: "Tanzil Shandilya — Marketing Strategist",
    description:
      "Marketing professional crafting campaigns that convert, captivate, and connect.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AnalyticsProvider />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WMS2FBXC"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
          `}
        </Script>
      </body>
    </html>
  );
}
