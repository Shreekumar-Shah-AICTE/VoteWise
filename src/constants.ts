/**
 * Application-wide constants for VoteWise
 * Centralizes magic numbers and configuration values
 *
 * Code Quality: No magic numbers — all values are named and documented.
 * @module constants
 */

/** Rate limiting configuration for API endpoints */
export const RATE_LIMIT = {
  /** Maximum requests per window */
  MAX_REQUESTS: 20,
  /** Rate limit window duration in milliseconds (1 minute) */
  WINDOW_MS: 60_000,
} as const;

/** Chat configuration */
export const CHAT = {
  /** Maximum message length in characters */
  MAX_MESSAGE_LENGTH: 2000,
  /** Maximum translation text length */
  MAX_TRANSLATION_LENGTH: 5000,
  /** Number of suggestion chips shown to users */
  SUGGESTION_COUNT: 6,
} as const;

/** Quiz configuration */
export const QUIZ = {
  /** Total number of questions per quiz session */
  QUESTIONS_PER_SESSION: 10,
  /** Score thresholds for badge awards */
  BADGE_THRESHOLDS: {
    /** Score needed for gold badge (percentage) */
    GOLD: 90,
    /** Score needed for silver badge (percentage) */
    SILVER: 70,
    /** Score needed for bronze badge (percentage) */
    BRONZE: 50,
  },
} as const;

/** Accessibility configuration */
export const A11Y = {
  /** Minimum color contrast ratio (WCAG 2.1 AA) */
  MIN_CONTRAST_RATIO: 4.5,
  /** VVPAT display duration in milliseconds */
  VVPAT_DISPLAY_MS: 7_000,
  /** Toast notification auto-dismiss duration */
  TOAST_DURATION_MS: 5_000,
} as const;

/** Application metadata */
export const APP_META = {
  NAME: "VoteWise",
  DESCRIPTION:
    "AI-Powered Interactive Election Education Platform for India",
  VERSION: "1.0.0",
  AUTHOR: "Shreekumar Shah",
  URL: "https://votewise-1020647632294.us-central1.run.app",
} as const;
