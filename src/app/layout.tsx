import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEMO | Fuel the Pursuit",
  description: "Fast-dissolving electrolyte strips. No water needed. No mess. Just pure hydration when the moment demands it.",
  keywords: ["electrolytes", "hydration", "dissolving strips", "sports nutrition", "workout", "fitness", "athletic performance"],
  authors: [{ name: "Memo Nu" }],
  openGraph: {
    title: "MEMO | Fuel the Pursuit",
    description: "Fast-dissolving electrolyte strips. No water needed. No mess. Just pure hydration when the moment demands it.",
    url: "https://memonu.com",
    siteName: "MEMO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEMO - Electrolytes, Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMO | Fuel the Pursuit",
    description: "Fast-dissolving electrolyte strips. No water needed. Join the waitlist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
