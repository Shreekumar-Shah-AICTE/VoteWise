/**
 * Unit tests for Gemini AI configuration
 * Tests system instruction content and model configuration
 *
 * Google Services: Validates Gemini AI setup
 */

import { describe, it, expect } from "vitest";
import {
  ELECTION_SYSTEM_INSTRUCTION,
  getElectionAssistantModel,
} from "@/lib/gemini";

describe("ELECTION_SYSTEM_INSTRUCTION", () => {
  it("should include non-partisanship rule", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("non-partisan");
  });

  it("should include ECI reference", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain(
      "Election Commission of India"
    );
  });

  it("should include VoteWise AI identity", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("VoteWise AI");
  });

  it("should include voter registration knowledge", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION.toLowerCase()).toContain("voter registration");
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("Form 6");
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("EPIC");
  });

  it("should include EVM and VVPAT knowledge", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("EVM");
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("VVPAT");
  });

  it("should include Model Code of Conduct knowledge", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("Model Code of Conduct");
  });

  it("should include accessibility directive", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("simple, clear language");
  });

  it("should recommend official sources", () => {
    expect(ELECTION_SYSTEM_INSTRUCTION).toContain("eci.gov.in");
  });
});

describe("getElectionAssistantModel", () => {
  it("should return a model instance", () => {
    const model = getElectionAssistantModel();
    expect(model).toBeDefined();
  });
});
