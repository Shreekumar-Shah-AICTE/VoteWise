/**
 * Core type definitions for VoteWise
 * Defines the data structures used throughout the election education platform
 */

/** Represents a single step in India's election process */
export interface ElectionStep {
  /** Unique identifier for the step */
  id: number;
  /** Title of the election step */
  title: string;
  /** Short description for timeline cards */
  shortDescription: string;
  /** Detailed explanation of the step */
  detailedDescription: string;
  /** Emoji icon representing the step */
  icon: string;
  /** Key facts about this step */
  keyFacts: string[];
  /** Duration or timeline for this step */
  timeline: string;
}

/** Represents a quiz question for the election quiz engine */
export interface QuizQuestion {
  /** Unique identifier for the question */
  id: number;
  /** The question text */
  question: string;
  /** Array of answer options */
  options: string[];
  /** Index of the correct answer (0-based) */
  correctAnswer: number;
  /** Explanation shown after answering */
  explanation: string;
  /** Difficulty level of the question */
  difficulty: "easy" | "medium" | "hard";
  /** Category of the question */
  category: string;
}

/** Represents the user's quiz state */
export interface QuizState {
  /** Index of the current question */
  currentQuestionIndex: number;
  /** Array of user's selected answers (null if not answered) */
  answers: (number | null)[];
  /** Number of correct answers */
  score: number;
  /** Whether the quiz is completed */
  isCompleted: boolean;
  /** Time taken in seconds */
  timeTaken: number;
}

/** Represents a candidate in the mock voting simulator */
export interface MockCandidate {
  /** Unique identifier */
  id: number;
  /** Candidate name (fictional) */
  name: string;
  /** Party name (fictional) */
  party: string;
  /** Party symbol emoji */
  symbol: string;
  /** Serial number on the EVM */
  serialNumber: number;
}

/** Represents a polling station for the map view */
export interface PollingStation {
  /** Unique identifier */
  id: string;
  /** Name of the polling station */
  name: string;
  /** Full address */
  address: string;
  /** Latitude coordinate */
  lat: number;
  /** Longitude coordinate */
  lng: number;
  /** Constituency name */
  constituency: string;
}

/** Represents a chat message in the AI assistant */
export interface ChatMessage {
  /** Unique identifier */
  id: string;
  /** Role of the message sender */
  role: "user" | "assistant";
  /** Message content */
  content: string;
  /** Timestamp of the message */
  timestamp: Date;
}

/** Supported languages for multi-language support */
export type SupportedLanguage =
  | "en"
  | "hi"
  | "gu"
  | "ta"
  | "te"
  | "bn"
  | "mr"
  | "kn";

/** Language metadata for the language selector */
export interface LanguageOption {
  /** Language code */
  code: SupportedLanguage;
  /** Display name in English */
  name: string;
  /** Display name in native script */
  nativeName: string;
}

/** Voter readiness assessment result */
export interface VoterReadinessResult {
  /** Overall readiness score (0-100) */
  score: number;
  /** Category-wise breakdown */
  breakdown: {
    registration: number;
    processKnowledge: number;
    documentReadiness: number;
    rightsAwareness: number;
  };
  /** Personalized recommendations */
  recommendations: string[];
}

/** Navigation item for the main menu */
export interface NavItem {
  /** Display label */
  label: string;
  /** Route path */
  href: string;
  /** Icon identifier */
  icon: string;
  /** Description for accessibility */
  description: string;
}
