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
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMS2FBXC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AnalyticsProvider />
        {children}
        {/* Google Tag Manager — fires GA4 tag configured inside GTM */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WMS2FBXC');
          `}
        </Script>
      </body>
    </html>
  );
}
