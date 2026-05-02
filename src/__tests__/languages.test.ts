/**
 * Unit tests for VoteWise language configuration
 * Tests language lookup, validation, and data integrity
 *
 * Google Services: Validates Google Translate language code configuration
 */

import { describe, it, expect } from "vitest";
import {
  SUPPORTED_LANGUAGES,
  getLanguageByCode,
  isValidLanguageCode,
} from "@/lib/languages";

describe("SUPPORTED_LANGUAGES", () => {
  it("should support exactly 8 Indian languages", () => {
    expect(SUPPORTED_LANGUAGES).toHaveLength(8);
  });

  it("should include English as the first language", () => {
    expect(SUPPORTED_LANGUAGES[0].code).toBe("en");
    expect(SUPPORTED_LANGUAGES[0].name).toBe("English");
  });

  it("should include Hindi", () => {
    const hindi = SUPPORTED_LANGUAGES.find((l) => l.code === "hi");
    expect(hindi).toBeDefined();
    expect(hindi?.nativeName).toBe("हिन्दी");
  });

  it("should include Gujarati", () => {
    const gujarati = SUPPORTED_LANGUAGES.find((l) => l.code === "gu");
    expect(gujarati).toBeDefined();
    expect(gujarati?.nativeName).toBe("ગુજરાતી");
  });

  it("should have unique language codes", () => {
    const codes = SUPPORTED_LANGUAGES.map((l) => l.code);
    const uniqueCodes = new Set(codes);
    expect(uniqueCodes.size).toBe(codes.length);
  });

  it("should have non-empty native names for all languages", () => {
    SUPPORTED_LANGUAGES.forEach((lang) => {
      expect(lang.nativeName).toBeTruthy();
      expect(lang.nativeName.length).toBeGreaterThan(0);
    });
  });
});

describe("getLanguageByCode", () => {
  it("should return the correct language for valid codes", () => {
    const result = getLanguageByCode("hi");
    expect(result.name).toBe("Hindi");
    expect(result.nativeName).toBe("हिन्दी");
  });

  it("should return English as fallback for unknown codes", () => {
    const result = getLanguageByCode("xx");
    expect(result.code).toBe("en");
    expect(result.name).toBe("English");
  });

  it("should return English for empty string", () => {
    const result = getLanguageByCode("");
    expect(result.code).toBe("en");
  });
});

describe("isValidLanguageCode", () => {
  it("should return true for supported languages", () => {
    expect(isValidLanguageCode("en")).toBe(true);
    expect(isValidLanguageCode("hi")).toBe(true);
    expect(isValidLanguageCode("gu")).toBe(true);
    expect(isValidLanguageCode("ta")).toBe(true);
  });

  it("should return false for unsupported languages", () => {
    expect(isValidLanguageCode("fr")).toBe(false);
    expect(isValidLanguageCode("xx")).toBe(false);
    expect(isValidLanguageCode("")).toBe(false);
  });
});
