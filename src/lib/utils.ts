/**
 * Utility functions for VoteWise
 * Common helpers used across the application
 *
 * @module lib/utils
 */

/**
 * Generates a unique identifier for messages and elements.
 * Uses crypto.randomUUID when available, falls back to timestamp-based ID.
 *
 * @returns A unique string identifier
 */
export function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Formats a number as a percentage string.
 *
 * @param value - The decimal value (0-1)
 * @returns Formatted percentage string (e.g., "85%")
 */
export function formatPercentage(value: number): string {
  return `${Math.round(value * 100)}%`;
}

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to clamp
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns The clamped value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Sanitizes user input to prevent XSS attacks.
 * Security: Strips HTML tags and escapes special characters.
 *
 * @param input - Raw user input string
 * @returns Sanitized string safe for display
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Calculates the time elapsed since a given date in a human-readable format.
 *
 * @param date - The date to calculate elapsed time from
 * @returns Human-readable time string (e.g., "2 minutes ago")
 */
export function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Used to randomize quiz question order.
 *
 * @param array - The array to shuffle
 * @returns A new shuffled array (does not mutate original)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Returns the difficulty color class based on quiz question difficulty.
 *
 * @param difficulty - The difficulty level
 * @returns Tailwind CSS color classes
 */
export function getDifficultyColor(
  difficulty: "easy" | "medium" | "hard"
): string {
  const colors: Record<string, string> = {
    easy: "bg-green-500/20 text-green-400 border-green-500/30",
    medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    hard: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return colors[difficulty] || colors.easy;
}
