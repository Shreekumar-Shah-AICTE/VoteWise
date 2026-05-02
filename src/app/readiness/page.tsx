/**
 * Voter Readiness Check Page
 * Personalized assessment to check if user is ready to vote
 *
 * A11y: Form with proper labels, progress indicators
 */

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/** Readiness check questions */
const QUESTIONS = [
  { id: 1, q: "Do you have a valid Voter ID card (EPIC)?", category: "registration" },
  { id: 2, q: "Is your name on the electoral roll for your current address?", category: "registration" },
  { id: 3, q: "Do you know the location of your polling station?", category: "registration" },
  { id: 4, q: "Do you know the 7 steps of India's election process?", category: "knowledge" },
  { id: 5, q: "Do you know what an EVM and VVPAT are?", category: "knowledge" },
  { id: 6, q: "Do you know what NOTA means?", category: "knowledge" },
  { id: 7, q: "Do you have a valid photo ID to carry on polling day?", category: "documents" },
  { id: 8, q: "Do you know the polling hours in your constituency?", category: "documents" },
  { id: 9, q: "Do you know your fundamental right to vote is protected by the Constitution?", category: "rights" },
  { id: 10, q: "Do you know how to report election violations using cVIGIL?", category: "rights" },
];

export default function ReadinessPage() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = useCallback((id: number, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const answered = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(Boolean).length;
  const score = Math.round((yesCount / QUESTIONS.length) * 100);

  const getCategory = (cat: string) => {
    const qs = QUESTIONS.filter((q) => q.category === cat);
    const yes = qs.filter((q) => answers[q.id] === true).length;
    return Math.round((yes / qs.length) * 100);
  };

  return (
    <main id="main-content" className="min-h-screen">
      <header className="border-b border-white/5 bg-gray-950/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors rounded-lg p-1" aria-label="Back to home">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </Link>
          <h1 className="text-lg font-semibold"><span aria-hidden="true">✅</span> Voter Readiness Check</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {!showResult ? (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Are You <span className="text-indigo-400">Vote Ready</span>?</h2>
              <p className="text-gray-400 text-sm">Answer these 10 questions to check your preparedness</p>
            </div>

            <div className="space-y-4">
              {QUESTIONS.map((question, i) => (
                <div key={question.id} className="glass-card p-4 animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <p className="text-sm font-medium mb-3">{i + 1}. {question.q}</p>
                  <div className="flex gap-3" role="radiogroup" aria-label={question.q}>
                    <button
                      onClick={() => handleAnswer(question.id, true)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        answers[question.id] === true ? "bg-green-600 text-white" : "bg-white/5 text-gray-400 hover:bg-green-500/10 hover:text-green-400"
                      } focus-visible:ring-2 focus-visible:ring-green-400`}
                      role="radio"
                      aria-checked={answers[question.id] === true}
                    >
                      ✓ Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(question.id, false)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        answers[question.id] === false ? "bg-red-600 text-white" : "bg-white/5 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                      } focus-visible:ring-2 focus-visible:ring-red-400`}
                      role="radio"
                      aria-checked={answers[question.id] === false}
                    >
                      ✗ No
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowResult(true)}
              disabled={answered < QUESTIONS.length}
              className="w-full mt-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {answered < QUESTIONS.length ? `Answer all questions (${answered}/${QUESTIONS.length})` : "Check My Readiness Score →"}
            </button>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="text-6xl mb-4">{score >= 80 ? "🎉" : score >= 50 ? "👍" : "📚"}</div>
            <h2 className="text-2xl font-bold mb-2">Your Voter Readiness Score</h2>

            <div className="relative w-40 h-40 mx-auto my-6">
              <svg className="w-full h-full" viewBox="0 0 100 100" aria-label={`Readiness score: ${score}%`}>
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none"
                  stroke={score >= 80 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444"}
                  strokeWidth="8" strokeDasharray={`${score * 2.64} ${264 - score * 2.64}`}
                  strokeDashoffset="66" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">{score}%</span>
                <span className="text-xs text-gray-400">Ready</span>
              </div>
            </div>

            {/* Category breakdown */}
            <div className="glass-card p-4 max-w-sm mx-auto mb-6 text-left">
              {[
                { label: "Registration", key: "registration" },
                { label: "Process Knowledge", key: "knowledge" },
                { label: "Documents", key: "documents" },
                { label: "Rights Awareness", key: "rights" },
              ].map((cat) => (
                <div key={cat.key} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-gray-400">{cat.label}</span>
                  <span className={`text-sm font-semibold ${getCategory(cat.key) >= 80 ? "text-green-400" : getCategory(cat.key) >= 50 ? "text-yellow-400" : "text-red-400"}`}>
                    {getCategory(cat.key)}%
                  </span>
                </div>
              ))}
            </div>

            {score < 80 && (
              <div className="glass-card p-4 max-w-sm mx-auto mb-6 text-left">
                <h3 className="text-sm font-semibold text-indigo-400 mb-2">Recommendations</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  {getCategory("registration") < 100 && <li>• Complete your voter registration at nvsp.in</li>}
                  {getCategory("knowledge") < 100 && <li>• Learn the election process on our Timeline page</li>}
                  {getCategory("documents") < 100 && <li>• Prepare your photo ID and check polling station</li>}
                  {getCategory("rights") < 100 && <li>• Download the Voter Helpline and cVIGIL apps</li>}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <button onClick={() => { setShowResult(false); setAnswers({}); }} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-105">Retake Assessment</button>
              <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to Home</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
