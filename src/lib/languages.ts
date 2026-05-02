/**
 * Language configuration for VoteWise multi-language support
 * Defines supported Indian languages for Google Translate integration
 *
 * Google Services: Google Cloud Translation API configuration
 * A11y: Language metadata for screen reader pronunciation switching
 *
 * @module lib/languages
 */

import type { LanguageOption } from "@/types";

/**
 * Supported languages for VoteWise.
 * Each language includes its native name for the language selector UI.
 *
 * Google Services: These language codes are used with Google Cloud Translation API.
 */
export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
];

/**
 * Returns the language option for a given language code.
 *
 * @param code - The language code to look up
 * @returns The matching LanguageOption, or English as fallback
 */
export function getLanguageByCode(code: string): LanguageOption {
  return (
    SUPPORTED_LANGUAGES.find((lang) => lang.code === code) ||
    SUPPORTED_LANGUAGES[0]
  );
}

/**
 * Validates whether a given string is a supported language code.
 *
 * @param code - The language code to validate
 * @returns True if the language is supported
 */
export function isValidLanguageCode(code: string): boolean {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === code);
}
