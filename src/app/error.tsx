/**
 * Global Error Boundary for VoteWise
 * Catches runtime errors and displays a user-friendly recovery page
 *
 * A11y: Semantic structure, clear error messaging
 * Security: No stack traces exposed to users
 */

"use client";

/**
 * Error boundary component.
 * Catches React rendering errors and provides a recovery mechanism.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
        ⚠️
      </div>

      {/* Error message — Security: No stack traces shown */}
      <h1 className="text-4xl font-bold text-white mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        We encountered an unexpected error. Don&apos;t worry — your progress is
        safe. Please try again.
      </p>

      {/* Recovery actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <span aria-hidden="true">🔄</span>
          Try Again
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <span aria-hidden="true">🏠</span>
          Back to Home
        </a>
      </div>

      {/* Error reference for support — Security: Only digest, not full trace */}
      {error.digest && (
        <p className="mt-8 text-xs text-gray-600">
          Error reference: {error.digest}
        </p>
      )}
    </main>
  );
}
