/**
 * Unit tests for VoteWise validation schemas
 * Tests input sanitization and validation rules
 *
 * Security: Verifies all user inputs are properly validated
 */

import { describe, it, expect } from "vitest";
import {
  chatMessageSchema,
  translateRequestSchema,
  quizAnswerSchema,
} from "@/lib/validation";

describe("chatMessageSchema", () => {
  it("should accept valid messages", () => {
    const result = chatMessageSchema.safeParse({
      message: "How do I register as a voter?",
    });
    expect(result.success).toBe(true);
  });

  it("should reject empty messages", () => {
    const result = chatMessageSchema.safeParse({ message: "" });
    expect(result.success).toBe(false);
  });

  it("should reject messages exceeding max length", () => {
    const result = chatMessageSchema.safeParse({
      message: "a".repeat(2001),
    });
    expect(result.success).toBe(false);
  });

  it("should trim whitespace from messages", () => {
    const result = chatMessageSchema.safeParse({
      message: "  Hello  ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.message).toBe("Hello");
    }
  });

  it("should accept messages with optional history", () => {
    const result = chatMessageSchema.safeParse({
      message: "Hello",
      history: [
        { role: "user", parts: [{ text: "Hi" }] },
        { role: "model", parts: [{ text: "Hello!" }] },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("should default history to empty array", () => {
    const result = chatMessageSchema.safeParse({ message: "Hello" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.history).toEqual([]);
    }
  });
});

describe("translateRequestSchema", () => {
  it("should accept valid translation requests", () => {
    const result = translateRequestSchema.safeParse({
      text: "Hello",
      targetLanguage: "hi",
    });
    expect(result.success).toBe(true);
  });

  it("should reject unsupported languages", () => {
    const result = translateRequestSchema.safeParse({
      text: "Hello",
      targetLanguage: "xx",
    });
    expect(result.success).toBe(false);
  });

  it("should accept all supported Indian languages", () => {
    const languages = ["en", "hi", "gu", "ta", "te", "bn", "mr", "kn"];
    languages.forEach((lang) => {
      const result = translateRequestSchema.safeParse({
        text: "Test",
        targetLanguage: lang,
      });
      expect(result.success).toBe(true);
    });
  });

  it("should reject text exceeding max length", () => {
    const result = translateRequestSchema.safeParse({
      text: "a".repeat(5001),
      targetLanguage: "hi",
    });
    expect(result.success).toBe(false);
  });
});

describe("quizAnswerSchema", () => {
  it("should accept valid quiz answers", () => {
    const result = quizAnswerSchema.safeParse({
      questionId: 1,
      selectedAnswer: 2,
    });
    expect(result.success).toBe(true);
  });

  it("should reject negative question IDs", () => {
    const result = quizAnswerSchema.safeParse({
      questionId: -1,
      selectedAnswer: 0,
    });
    expect(result.success).toBe(false);
  });

  it("should reject answer indices out of range", () => {
    const result = quizAnswerSchema.safeParse({
      questionId: 1,
      selectedAnswer: 10,
    });
    expect(result.success).toBe(false);
  });

  it("should reject non-integer values", () => {
    const result = quizAnswerSchema.safeParse({
      questionId: 1.5,
      selectedAnswer: 0,
    });
    expect(result.success).toBe(false);
  });
});
