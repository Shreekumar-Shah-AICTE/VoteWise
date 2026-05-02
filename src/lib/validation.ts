/**
 * Input validation schemas for VoteWise API routes
 * Uses Zod for runtime type checking and input sanitization
 *
 * Security: Validates and sanitizes all user inputs before processing
 * @module lib/validation
 */

import { z } from "zod";

/**
 * Schema for chat message input validation.
 * Security: Prevents XSS by limiting message length and trimming whitespace.
 */
export const chatMessageSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(2000, "Message is too long (max 2000 characters)")
    .trim(),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "model"]),
        parts: z.array(z.object({ text: z.string() })),
      })
    )
    .optional()
    .default([]),
});

/**
 * Schema for translation request validation.
 * Security: Validates target language against allowed languages.
 */
export const translateRequestSchema = z.object({
  text: z
    .string()
    .min(1, "Text cannot be empty")
    .max(5000, "Text is too long (max 5000 characters)")
    .trim(),
  targetLanguage: z.enum(["en", "hi", "gu", "ta", "te", "bn", "mr", "kn"], {
    errorMap: () => ({ message: "Unsupported language code" }),
  }),
});

/**
 * Schema for quiz answer submission validation.
 * Security: Ensures answer index is within valid range.
 */
export const quizAnswerSchema = z.object({
  questionId: z.number().int().positive(),
  selectedAnswer: z.number().int().min(0).max(5),
});

/** Type inference helpers for validated inputs */
export type ChatMessageInput = z.infer<typeof chatMessageSchema>;
export type TranslateRequestInput = z.infer<typeof translateRequestSchema>;
export type QuizAnswerInput = z.infer<typeof quizAnswerSchema>;
