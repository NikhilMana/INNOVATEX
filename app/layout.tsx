import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovatex.mitmysore.in"),
  title: {
    default: "InnovateX — Building The Future of AI Innovation",
    template: "%s | InnovateX",
  },
  description:
    "InnovateX is the innovation ecosystem of the CSE AI & ML department at MIT Mysore — building, learning, and shipping the future.",
  keywords: [
    "InnovateX",
    "MIT Mysore",
    "AI",
    "ML",
    "CSE",
    "Innovation",
    "Student Club",
    "Vision X",
    "COSMIC",
    "Arivu",
    "Arghya",
  ],
  authors: [{ name: "InnovateX — MIT Mysore CSE AI & ML" }],
  openGraph: {
    title: "InnovateX — Building The Future of AI Innovation",
    description:
      "The innovation ecosystem of the CSE AI & ML department at MIT Mysore.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovateX",
    description:
      "The innovation ecosystem of the CSE AI & ML department at MIT Mysore.",
  },
  icons: {
    icon: "/images/logos/logo.png?v=2",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
