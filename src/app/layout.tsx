/**
 * Root Layout for VoteWise
 * Provides the HTML structure, metadata, fonts, and global styles
 *
 * A11y: Sets lang attribute, loads accessible fonts
 * SEO: Comprehensive metadata for search engines
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// A11y: Using Inter — a highly legible, accessible sans-serif font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** SEO: Comprehensive metadata for the application */
export const metadata: Metadata = {
  title: "VoteWise — AI-Powered Election Education Platform",
  description:
    "Learn about India's election process through an interactive AI assistant, quizzes, mock voting simulator, and multi-language support. Built for PromptWars Challenge 2.",
  keywords: [
    "election education",
    "India elections",
    "voter awareness",
    "ECI",
    "democracy",
    "VoteWise",
    "AI assistant",
  ],
  authors: [{ name: "Shreekumar Shah" }],
  openGraph: {
    title: "VoteWise — AI-Powered Election Education Platform",
    description:
      "Your interactive guide to understanding India's democratic election process.",
    type: "website",
  },
};

/**
 * Root layout component wrapping all pages.
 * A11y: Sets document language, applies accessible font.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A11y: lang attribute for screen readers
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen">
        {/* A11y: Skip navigation link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
