/**
 * VoteWise Homepage
 * Landing page with hero section, feature navigation, and interactive elements
 *
 * A11y: Semantic HTML structure with ARIA landmarks
 * Design: Dark mode with India tricolor accents
 */

import Link from "next/link";

/** Navigation features for the homepage */
const features = [
  {
    title: "AI Election Assistant",
    description:
      "Ask any question about India's election process and get instant, accurate answers powered by Google Gemini AI.",
    href: "/assistant",
    icon: "🤖",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Election Timeline",
    description:
      "Explore the complete 7-step election process with detailed explanations, key facts, and timelines.",
    href: "/timeline",
    icon: "📋",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Election Quiz",
    description:
      "Test your knowledge with 25 questions across 5 difficulty levels. Earn your VoteReady badge!",
    href: "/quiz",
    icon: "🧠",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mock Voting Simulator",
    description:
      "Experience the actual EVM voting process in a safe, interactive simulation before your first real vote.",
    href: "/simulator",
    icon: "🗳️",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Polling Station Finder",
    description:
      "Find your nearest polling station on an interactive map powered by Google Maps.",
    href: "/stations",
    icon: "📍",
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Voter Readiness Check",
    description:
      "Take a quick assessment to check if you're fully prepared to vote. Get personalized recommendations.",
    href: "/readiness",
    icon: "✅",
    color: "from-teal-500 to-cyan-600",
  },
];

/**
 * Home page component for VoteWise.
 * Renders the hero section and feature navigation grid.
 */
export default function HomePage() {
  return (
    // A11y: Main content landmark
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section
        aria-label="Welcome to VoteWise"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Tricolor accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 tricolor-gradient"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          {/* App icon */}
          <div
            className="text-7xl mb-6 animate-pulse-glow inline-block rounded-2xl p-4"
            aria-hidden="true"
          >
            🗳️
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
              VoteWise
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-400 mb-2 font-light">
            AI-Powered Election Education Platform
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Your interactive guide to understanding India&apos;s democratic
            election process — learn, quiz yourself, and experience mock
            voting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/assistant"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span aria-hidden="true">🤖</span>
              Ask the AI Assistant
            </Link>
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <span aria-hidden="true">📋</span>
              Explore Election Process
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          aria-hidden="true"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Explore
          </span>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Grid Section */}
      <section
        aria-labelledby="features-heading"
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <h2
          id="features-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Everything You Need to Be{" "}
          <span className="text-indigo-400">Vote Ready</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          From learning the basics to practicing on a mock EVM — VoteWise
          covers every step of your journey as a voter.
        </p>

        {/* A11y: Feature cards grid with proper navigation structure */}
        <nav aria-label="Feature navigation">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="glass-card p-6 group hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 focus-visible:ring-2 focus-visible:ring-indigo-400 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </section>

      {/* Stats Section */}
      <section
        aria-label="Platform statistics"
        className="max-w-5xl mx-auto px-4 py-16"
      >
        <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7", label: "Election Steps" },
            { value: "25+", label: "Quiz Questions" },
            { value: "8", label: "Languages" },
            { value: "6", label: "Interactive Tools" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        role="contentinfo"
        className="border-t border-white/5 py-8 text-center text-gray-500 text-sm"
      >
        <p>
          Built for{" "}
          <span className="text-indigo-400">
            PromptWars Challenge 2
          </span>{" "}
          — Election Process Education
        </p>
        <p className="mt-1">
          Powered by Google Gemini AI · Google Maps · Google Translate
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Disclaimer: VoteWise is an educational tool. For official
          information, visit{" "}
          <a
            href="https://eci.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            eci.gov.in
          </a>
        </p>
      </footer>
    </main>
  );
}
