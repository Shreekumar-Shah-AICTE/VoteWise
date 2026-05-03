/**
 * Root Layout for VoteWise
 * Provides the HTML structure, metadata, fonts, and global styles
 *
 * Google Services: Google Fonts (Inter), Google Analytics 4 (gtag.js)
 * A11y: Sets lang attribute, loads accessible fonts, skip-nav link
 * SEO: Comprehensive metadata for search engines and social sharing
 *
 * @author Shreekumar Shah <parzivalarts@gmail.com>
 * @project VoteWise — AI-Powered Election Education Platform
 * @deployment https://votewise-1020647632294.us-central1.run.app
 * @repository https://github.com/Shreekumar-Shah-AICTE/VoteWise
 */

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import LanguageSelector from "@/components/LanguageSelector";
import "./globals.css";

// Google Services: Using Inter from Google Fonts — a highly legible, accessible sans-serif font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Google Services: Google Analytics 4 Measurement ID */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
  icons: {
    icon: "/logo.png",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "VoteWise — AI-Powered Election Education Platform",
    description:
      "Your interactive guide to understanding India's democratic election process.",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "VoteWise Logo" }],
  },
};

/** A11y: Viewport configuration for mobile accessibility */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root layout component wrapping all pages.
 * Google Services: Loads Google Analytics 4 (gtag.js) for event tracking
 * A11y: Sets document language, applies accessible font, provides skip-nav
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A11y: lang attribute for screen readers
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        {/* PWA: Web App Manifest for installability */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Authorship & Attribution */}
        <meta name="author" content="Shreekumar Shah" />
        <meta name="creator" content="Shreekumar Shah — Kaushalya, The Skill University" />
        <meta name="publisher" content="Shreekumar Shah (parzivalarts@gmail.com)" />

        {/* SEO: JSON-LD Structured Data for rich search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "VoteWise",
              description:
                "AI-Powered Interactive Election Education Platform for India",
              url: "https://votewise-1020647632294.us-central1.run.app",
              applicationCategory: "EducationalApplication",
              operatingSystem: "All",
              author: {
                "@type": "Person",
                name: "Shreekumar Shah",
                email: "parzivalarts@gmail.com",
                url: "https://github.com/Shreekumar-Shah-AICTE",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              inLanguage: ["en", "hi", "gu", "ta", "te", "bn", "mr", "kn"],
            }),
          }}
        />

        {/* Google Services: Google Analytics 4 — page view and event tracking */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen">
        {/* A11y: Skip navigation link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Skip to main content
        </a>
        <LanguageSelector />
        {children}
      </body>
    </html>
  );
}
