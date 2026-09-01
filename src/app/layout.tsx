import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
