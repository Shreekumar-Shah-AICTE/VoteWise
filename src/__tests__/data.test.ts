/**
 * Data integrity tests for VoteWise election data
 * Ensures election steps and quiz questions are consistent and complete
 */

import { describe, it, expect } from "vitest";
import { electionSteps } from "@/data/election-steps";
import { quizQuestions } from "@/data/quiz-questions";
import { mockCandidates } from "@/data/mock-data";

describe("electionSteps", () => {
  it("should have exactly 7 steps", () => {
    expect(electionSteps).toHaveLength(7);
  });

  it("should have sequential IDs from 1 to 7", () => {
    electionSteps.forEach((step, index) => {
      expect(step.id).toBe(index + 1);
    });
  });

  it("should have all required fields for each step", () => {
    electionSteps.forEach((step) => {
      expect(step.title).toBeTruthy();
      expect(step.shortDescription).toBeTruthy();
      expect(step.detailedDescription).toBeTruthy();
      expect(step.icon).toBeTruthy();
      expect(step.keyFacts.length).toBeGreaterThan(0);
      expect(step.timeline).toBeTruthy();
    });
  });

  it("should have at least 5 key facts per step", () => {
    electionSteps.forEach((step) => {
      expect(step.keyFacts.length).toBeGreaterThanOrEqual(5);
    });
  });
});

describe("quizQuestions", () => {
  it("should have at least 20 questions", () => {
    expect(quizQuestions.length).toBeGreaterThanOrEqual(20);
  });

  it("should have unique IDs", () => {
    const ids = quizQuestions.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("should have valid correct answer indices", () => {
    quizQuestions.forEach((q) => {
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThan(q.options.length);
    });
  });

  it("should have 4 options per question", () => {
    quizQuestions.forEach((q) => {
      expect(q.options).toHaveLength(4);
    });
  });

  it("should have valid difficulty levels", () => {
    const validDifficulties = ["easy", "medium", "hard"];
    quizQuestions.forEach((q) => {
      expect(validDifficulties).toContain(q.difficulty);
    });
  });

  it("should have explanations for all questions", () => {
    quizQuestions.forEach((q) => {
      expect(q.explanation).toBeTruthy();
      expect(q.explanation.length).toBeGreaterThan(20);
    });
  });
});

describe("mockCandidates", () => {
  it("should have at least 5 candidates including NOTA", () => {
    expect(mockCandidates.length).toBeGreaterThanOrEqual(5);
  });

  it("should include NOTA as the last option", () => {
    const lastCandidate = mockCandidates[mockCandidates.length - 1];
    expect(lastCandidate.name).toBe("NOTA");
  });

  it("should have sequential serial numbers", () => {
    mockCandidates.forEach((candidate, index) => {
      expect(candidate.serialNumber).toBe(index + 1);
    });
  });
});
