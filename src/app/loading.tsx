/**
 * Global Loading UI Component
 * Displayed during page transitions and data fetching via React Suspense.
 *
 * Next.js Best Practice: loading.tsx enables streaming SSR with instant loading feedback.
 * A11y: Loading state announced to screen readers via aria-busy and sr-only text.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 */

export default function Loading() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center"
      aria-busy="true"
    >
      <div className="text-center animate-fade-in">
        {/* Animated loading indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div
            className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-indigo-300 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
        <p className="text-sm text-gray-400">Loading...</p>
        {/* Screen reader announcement */}
        <span className="sr-only" role="status">
          Page is loading, please wait.
        </span>
      </div>
    </main>
  );
}
