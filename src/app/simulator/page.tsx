/**
 * Mock EVM Voting Simulator Page
 * Simulates the actual Electronic Voting Machine experience
 *
 * A11y: Full keyboard navigation, screen reader announcements
 */

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { mockCandidates } from "@/data/mock-data";

/** Phases of the voting simulation */
type SimPhase = "intro" | "id-check" | "voting" | "vvpat" | "ink" | "complete";

export default function SimulatorPage() {
  const [phase, setPhase] = useState<SimPhase>("intro");
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleVote = useCallback((id: number) => {
    setSelectedCandidate(id);
  }, []);

  const confirmVote = useCallback(() => {
    if (selectedCandidate === null) return;
    setConfirmed(true);
    setPhase("vvpat");
    setTimeout(() => setPhase("ink"), 4000);
    setTimeout(() => setPhase("complete"), 7000);
  }, [selectedCandidate]);

  const reset = () => {
    setPhase("intro");
    setSelectedCandidate(null);
    setConfirmed(false);
  };

  const votedCandidate = mockCandidates.find((c) => c.id === selectedCandidate);

  return (
    <main id="main-content" className="min-h-screen">
      <header className="border-b border-white/5 bg-gray-950/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors rounded-lg p-1" aria-label="Back to home">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </Link>
          <div>
            <h1 className="text-lg font-semibold"><span aria-hidden="true">🗳️</span> Mock Voting Simulator</h1>
            <p className="text-xs text-gray-500">Experience the EVM voting process</p>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Intro Phase */}
        {phase === "intro" && (
          <div className="text-center animate-fade-in">
            <div className="text-7xl mb-6">🗳️</div>
            <h2 className="text-3xl font-bold mb-4">Mock Voting Simulator</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Experience the complete voting process — from ID verification to casting your vote on an EVM. This is a safe, educational simulation using fictional candidates.</p>
            <div className="glass-card p-4 mb-8 text-left">
              <h3 className="text-sm font-semibold text-indigo-400 mb-2">What you&apos;ll experience:</h3>
              <ol className="text-sm text-gray-400 space-y-1 list-decimal list-inside">
                <li>Identity verification at the polling booth</li>
                <li>Casting your vote on the Electronic Voting Machine (EVM)</li>
                <li>Verifying your vote via VVPAT slip</li>
                <li>Getting the indelible ink mark</li>
              </ol>
            </div>
            <button onClick={() => setPhase("id-check")} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400">
              Start Voting Simulation →
            </button>
          </div>
        )}

        {/* ID Check Phase */}
        {phase === "id-check" && (
          <div className="animate-fade-in">
            <div className="glass-card p-6 text-center mb-6">
              <div className="text-4xl mb-3">🪪</div>
              <h2 className="text-xl font-bold mb-2">Step 1: Identity Verification</h2>
              <p className="text-gray-400 text-sm mb-6">At the polling station, the Booth Level Officer (BLO) checks your identity against the electoral roll.</p>
              <div className="glass-card p-4 mb-6 text-left">
                <h3 className="text-xs font-semibold text-indigo-400 uppercase mb-2">Accepted ID Documents</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✅ Electoral Photo ID Card (EPIC / Voter ID)</li>
                  <li>✅ Aadhaar Card</li>
                  <li>✅ Passport</li>
                  <li>✅ Driving License</li>
                  <li>✅ PAN Card with photo</li>
                </ul>
              </div>
              <button onClick={() => setPhase("voting")} className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-green-400">
                ✓ Identity Verified — Proceed to Vote
              </button>
            </div>
          </div>
        )}

        {/* Voting Phase — EVM Interface */}
        {phase === "voting" && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-2">Step 2: Cast Your Vote</h2>
            <p className="text-gray-400 text-center text-sm mb-6">Select your preferred candidate on the EVM below</p>

            {/* EVM Simulation */}
            <div className="glass-card p-1 rounded-2xl border-2 border-gray-700 bg-gray-900" role="group" aria-label="Electronic Voting Machine">
              {/* EVM Header */}
              <div className="bg-gray-800 rounded-t-xl p-3 text-center border-b border-gray-700">
                <p className="text-xs text-gray-400 font-mono">BALLOT UNIT — ELECTRONIC VOTING MACHINE</p>
                <p className="text-xs text-gray-500 font-mono">Constituency: Demo Constituency (Educational Simulation)</p>
              </div>

              {/* Candidate Rows */}
              <div className="divide-y divide-gray-800">
                {mockCandidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors">
                    {/* Serial number */}
                    <span className="w-8 text-center text-sm font-mono text-gray-500">{candidate.serialNumber}</span>
                    {/* Candidate info */}
                    <div className="flex-1">
                      <div className="text-sm font-medium">{candidate.name}</div>
                      <div className="text-xs text-gray-500">{candidate.party}</div>
                    </div>
                    {/* Party symbol */}
                    <span className="text-xl w-10 text-center" aria-label={`${candidate.party} symbol`}>{candidate.symbol}</span>
                    {/* Vote button (Blue button like real EVM) */}
                    <button
                      onClick={() => handleVote(candidate.id)}
                      disabled={confirmed}
                      className={`w-12 h-8 rounded-md font-bold text-xs transition-all ${
                        selectedCandidate === candidate.id
                          ? "bg-blue-600 text-white ring-2 ring-blue-400 scale-110"
                          : "bg-blue-800 hover:bg-blue-700 text-blue-200"
                      } focus-visible:ring-2 focus-visible:ring-blue-400`}
                      aria-label={`Vote for ${candidate.name}`}
                      aria-pressed={selectedCandidate === candidate.id}
                    >
                      {selectedCandidate === candidate.id ? "●" : ""}
                    </button>
                  </div>
                ))}
              </div>

              {/* EVM Footer */}
              <div className="bg-gray-800 rounded-b-xl p-3 flex justify-between items-center border-t border-gray-700">
                <span className="text-xs text-gray-500 font-mono">ECIL / BEL</span>
                {selectedCandidate !== null && !confirmed && (
                  <button
                    onClick={confirmVote}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-lg transition-all animate-pulse-glow focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    CONFIRM VOTE
                  </button>
                )}
              </div>
            </div>

            {selectedCandidate === null && (
              <p className="text-center text-gray-500 text-sm mt-4">Press the blue button next to your chosen candidate</p>
            )}
          </div>
        )}

        {/* VVPAT Phase */}
        {phase === "vvpat" && votedCandidate && (
          <div className="text-center animate-fade-in">
            <h2 className="text-xl font-bold mb-2">Step 3: VVPAT Verification</h2>
            <p className="text-gray-400 text-sm mb-6">The VVPAT machine displays your vote for 7 seconds</p>
            <div className="glass-card p-6 max-w-xs mx-auto border-2 border-yellow-500/30 bg-yellow-500/5">
              <p className="text-xs text-yellow-400 uppercase tracking-wider mb-3">VVPAT Slip</p>
              <div className="border-2 border-dashed border-gray-600 p-4 rounded-lg bg-white/5">
                <p className="text-3xl mb-2">{votedCandidate.symbol}</p>
                <p className="font-bold text-lg">{votedCandidate.name}</p>
                <p className="text-sm text-gray-400">{votedCandidate.party}</p>
                <p className="text-xs text-gray-500 mt-2">S.No: {votedCandidate.serialNumber}</p>
              </div>
              <p className="text-xs text-yellow-400 mt-3 animate-pulse">Displaying for 7 seconds...</p>
            </div>
          </div>
        )}

        {/* Ink Phase */}
        {phase === "ink" && (
          <div className="text-center animate-fade-in">
            <div className="text-7xl mb-4">☝️</div>
            <h2 className="text-xl font-bold mb-2">Step 4: Indelible Ink</h2>
            <p className="text-gray-400 text-sm mb-4">Indelible ink is applied to your left index finger to prevent duplicate voting.</p>
            <div className="glass-card p-4 max-w-sm mx-auto text-sm text-gray-400">
              <p>The ink contains silver nitrate and cannot be washed off for several days. This ensures every citizen votes only once.</p>
            </div>
          </div>
        )}

        {/* Complete Phase */}
        {phase === "complete" && votedCandidate && (
          <div className="text-center animate-fade-in">
            <div className="text-7xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
            <p className="text-gray-400 mb-6">You&apos;ve successfully completed the mock voting simulation.</p>
            <div className="glass-card p-6 max-w-sm mx-auto mb-8">
              <p className="text-sm text-gray-400 mb-2">You voted for:</p>
              <p className="text-2xl mb-1">{votedCandidate.symbol}</p>
              <p className="font-bold">{votedCandidate.name}</p>
              <p className="text-sm text-gray-500">{votedCandidate.party}</p>
            </div>
            <p className="text-sm text-indigo-400 mb-6">Remember: Your real vote is secret and sacred. Every vote counts in our democracy! 🇮🇳</p>
            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <button onClick={reset} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400">Try Again</button>
              <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to Home</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
