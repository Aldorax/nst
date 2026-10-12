import Script from "next/script";
import { Suspense } from "react";
import { SiteHeader } from "./navigation";
import { SiteFooter } from "./shared";
import { StudioIntro } from "./intro";
import { PageTransition, PageEntrance } from "./transitions";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl, siteDescription } from "./site";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const display = localFont({
  src: "../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});
const sans = localFont({
  src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "300 700",
  display: "swap",
});
const mono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  variable: "--font-code",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
    : {}),
  title: {
    default: "NST — Non Standard Team | Creative & Development Agency",
    template: "%s | NST",
  },
  description: siteDescription,
  applicationName: "NST — Non Standard Team",
  openGraph: {
    type: "website",
    siteName: "NST — Non Standard Team",
    locale: "en_US",
    title: "NST — Anything but ordinary.",
    description: siteDescription,
    ...(siteUrl ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "NST — Anything but ordinary.",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: { url: "/icon.svg", type: "image/svg+xml" },
    apple: "/apple-icon",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body>
        <Script
          id="nst-theme-init"
          strategy="beforeInteractive"
        >{`try{var theme=localStorage.getItem('nst-theme');document.documentElement.dataset.theme=theme==='light'?'light':'dark';}catch(e){}`}</Script>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <StudioIntro />
        <Suspense fallback={<div className="header-placeholder" />}>
          <SiteHeader />
        </Suspense>
        <Suspense fallback={children}>
          <PageEntrance>{children}</PageEntrance>
        </Suspense>
        <SiteFooter />
        <Suspense fallback={null}>
          <PageTransition />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
