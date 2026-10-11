import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NST — Non Standard Team | Design & Development",
  description:
    "Anything but standard. NST is an independent creative team building brands, websites, digital experiences, motion, and words for ambitious businesses.",
  openGraph: {
    title: "NST — Anything but standard.",
    description:
      "Independent minds. One collective. Branding, web development, UI/UX, motion, and writing.",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
