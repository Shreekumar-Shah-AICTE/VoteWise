/**
 * Interactive Election Timeline Page
 * Displays the 7-step Indian election process with detailed info cards
 *
 * A11y: Semantic list structure, keyboard navigation
 * Design: Vertical timeline with expandable cards
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { electionSteps } from "@/data/election-steps";

/**
 * Timeline page component showing the complete election process.
 * Features expandable cards with detailed information for each step.
 */
export default function TimelinePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  /** Toggle expanded state for a step */
  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <main id="main-content" className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/5 bg-gray-950/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
            aria-label="Back to home"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-lg font-semibold flex items-center gap-2">
              <span aria-hidden="true">📋</span>
              Election Process Timeline
            </h1>
            <p className="text-xs text-gray-500">
              The complete 7-step journey of India&apos;s elections
            </p>
          </div>
        </div>
      </header>

      {/* Timeline Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-3">
            How India&apos;s Elections{" "}
            <span className="text-indigo-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            India conducts the world&apos;s largest democratic exercise. Here
            are the 7 essential steps that make it happen.
          </p>
        </div>

        {/* Timeline */}
        <ol
          className="relative border-l-2 border-indigo-500/20 ml-4 space-y-8"
          aria-label="Election process steps"
        >
          {electionSteps.map((step, index) => (
            <li
              key={step.id}
              className="ml-8 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[13px] w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                  expandedStep === step.id
                    ? "bg-indigo-600 border-indigo-400 text-white"
                    : "bg-gray-900 border-indigo-500/40 text-indigo-400"
                }`}
                aria-hidden="true"
              >
                {step.id}
              </div>

              {/* Step card */}
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full text-left glass-card p-5 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-expanded={expandedStep === step.id}
                aria-controls={`step-details-${step.id}`}
              >
                {/* Step header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl" aria-hidden="true">
                        {step.icon}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        Step {step.id}: {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      {step.shortDescription}
                    </p>
                  </div>

                  {/* Expand indicator */}
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
                      expandedStep === step.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Expanded details */}
                {expandedStep === step.id && (
                  <div
                    id={`step-details-${step.id}`}
                    className="mt-4 pt-4 border-t border-white/5 animate-fade-in"
                  >
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {step.detailedDescription}
                    </p>

                    {/* Key facts */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                        Key Facts
                      </h4>
                      <ul className="space-y-1.5" role="list">
                        {step.keyFacts.map((fact, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-indigo-400 mt-0.5" aria-hidden="true">
                              •
                            </span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline info */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{step.timeline}</span>
                    </div>
                  </div>
                )}
              </button>
            </li>
          ))}
        </ol>

        {/* CTA at bottom */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-400 mb-4">
            Ready to test your knowledge?
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span aria-hidden="true">🧠</span>
            Take the Election Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
