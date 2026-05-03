/**
 * Custom 404 Not Found Page for VoteWise
 * Displays a premium, on-brand error page with navigation back to home
 *
 * A11y: Semantic structure, descriptive text, focus management
 * Design: Dark mode with tricolor accent, consistent with brand
 */

import Link from "next/link";

/**
 * Not Found page component.
 * Rendered when a user navigates to a non-existent route.
 */
export default function NotFound() {
  return (
    <main
      id="main-content"
      role="main"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      {/* Tricolor accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 tricolor-gradient"
        aria-hidden="true"
      />

      {/* Error icon */}
      <div className="text-8xl mb-6" aria-hidden="true">
        🗳️
      </div>

      {/* Error message */}
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl text-gray-300 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It might have been
        moved or the URL may be incorrect.
      </p>

      {/* Navigation options */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <span aria-hidden="true">🏠</span>
          Back to Home
        </Link>
        <Link
          href="/assistant"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <span aria-hidden="true">🤖</span>
          Ask AI Assistant
        </Link>
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-gray-600">
        VoteWise — AI-Powered Election Education Platform
      </p>
    </main>
  );
}
