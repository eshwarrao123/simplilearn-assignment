import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter via next/font for optimised, self-hosted font delivery.
// Weights required by design.md §3: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexcent — Lessons and Insights from 8 Years",
  description:
    "Where to grow your business as a photographer: site or social media? Manage your entire community in a single system with Nexcent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
