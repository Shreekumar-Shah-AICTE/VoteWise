/**
 * Election Quiz Page
 * Gamified quiz engine with scoring, badges, and explanations
 *
 * A11y: Keyboard navigation, ARIA roles, live regions
 */

"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";
import { quizQuestions } from "@/data/quiz-questions";
import { shuffleArray, getDifficultyColor } from "@/lib/utils";
import Toast from "@/components/Toast";

export default function QuizPage() {
  const shuffledQuestions = useMemo(() => shuffleArray(quizQuestions).slice(0, 15), []);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const q = shuffledQuestions[idx];

  const handleAnswer = useCallback((i: number) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === q.correctAnswer) setScore((s) => s + 1);
  }, [answered, q]);

  const handleNext = useCallback(() => {
    if (idx + 1 >= shuffledQuestions.length) { setDone(true); return; }
    setIdx((i) => i + 1);
    setSelected(null);
    setAnswered(false);
  }, [idx, shuffledQuestions.length]);

  const restart = () => { setIdx(0); setSelected(null); setAnswered(false); setScore(0); setDone(false); };

  const pct = Math.round((score / shuffledQuestions.length) * 100);
  const badge = pct >= 90 ? { e: "🏆", t: "Election Expert", c: "text-yellow-400" }
    : pct >= 70 ? { e: "🎓", t: "Informed Voter", c: "text-green-400" }
    : pct >= 50 ? { e: "📚", t: "Active Learner", c: "text-blue-400" }
    : { e: "🌱", t: "Civic Explorer", c: "text-gray-400" };

  useEffect(() => {
    if (done) {
      setShowToast(true);
    }
  }, [done]);

  if (done) return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-4">
      <Toast 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
        message={`Badge Earned: ${badge.t}!`} 
        type={pct >= 70 ? "success" : "info"} 
      />
      <div className="glass-card p-8 max-w-md w-full text-center animate-fade-in">
        <div className="text-6xl mb-4">{badge.e}</div>
        <h1 className="text-2xl font-bold mb-1">Quiz Complete!</h1>
        <p className={`text-lg font-semibold ${badge.c} mb-4`}>{badge.t}</p>
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full" viewBox="0 0 100 100" aria-label={`Score: ${pct}%`}>
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="8"
              strokeDasharray={`${pct * 2.64} ${264 - pct * 2.64}`} strokeDashoffset="66" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">{pct}%</span>
            <span className="text-xs text-gray-400">{score}/{shuffledQuestions.length}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button onClick={restart} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400">Try Again</button>
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to Home</Link>
        </div>
      </div>
    </main>
  );

  return (
    <main id="main-content" className="min-h-screen">
      <header className="border-b border-white/5 bg-gray-950/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors rounded-lg p-1" aria-label="Back to home">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-lg font-semibold"><span aria-hidden="true">🧠</span> Election Quiz</h1>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">{idx + 1}/{shuffledQuestions.length}</span>
            <span className="text-indigo-400 font-semibold">Score: {score}</span>
          </div>
        </div>
        <div className="h-1 bg-white/5">
          <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${((idx + 1) / shuffledQuestions.length) * 100}%` }}
            role="progressbar" aria-valuenow={idx + 1} aria-valuemin={1} aria-valuemax={shuffledQuestions.length} />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="glass-card p-6 animate-fade-in" key={idx}>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(q.difficulty)}`}>{q.difficulty}</span>
            <span className="text-xs text-gray-500">{q.category}</span>
          </div>
          <h2 className="text-xl font-semibold mb-6">{q.question}</h2>
          <div className="space-y-3 mb-6" role="radiogroup" aria-label="Answer options">
            {q.options.map((opt, i) => {
              const correct = i === q.correctAnswer;
              const sel = i === selected;
              let cls = "w-full text-left p-4 rounded-xl border transition-all duration-200 ";
              if (answered) {
                cls += correct ? "bg-green-500/10 border-green-500/50 text-green-300" : sel ? "bg-red-500/10 border-red-500/50 text-red-300" : "bg-white/2 border-white/5 text-gray-500";
              } else {
                cls += "bg-white/5 border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 text-gray-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400";
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={answered} className={cls} role="radio" aria-checked={sel}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-semibold flex-shrink-0">{String.fromCharCode(65 + i)}</span>
                    <span className="text-sm">{opt}</span>
                    {answered && correct && <span className="ml-auto text-green-400">✓</span>}
                    {answered && sel && !correct && <span className="ml-auto text-red-400">✗</span>}
                  </div>
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 mb-6 animate-fade-in" role="status" aria-live="polite">
              <h3 className="text-sm font-semibold text-indigo-400 mb-1">Explanation</h3>
              <p className="text-sm text-gray-300">{q.explanation}</p>
            </div>
          )}
          {answered && (
            <button onClick={handleNext} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-indigo-400 animate-fade-in">
              {idx + 1 >= shuffledQuestions.length ? "See Results" : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
