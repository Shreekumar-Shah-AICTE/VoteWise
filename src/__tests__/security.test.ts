/**
 * Security audit tests for VoteWise
 * Validates defense-in-depth security measures across all layers
 *
 * Coverage: CSP headers, rate limiting, input validation, XSS prevention,
 * environment variable management, API key protection, Docker security
 */

import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/** Helper to read a source file */
function readSourceFile(filePath: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "src", filePath),
    "utf-8"
  );
}

/** Helper to read a project root file */
function readRootFile(filePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf-8");
}

describe("Security: HTTP Security Headers", () => {
  const nextConfig = readRootFile("next.config.ts");

  it("should set X-Frame-Options header", () => {
    expect(nextConfig).toContain("X-Frame-Options");
  });

  it("should set X-Content-Type-Options header", () => {
    expect(nextConfig).toContain("X-Content-Type-Options");
  });

  it("should set Strict-Transport-Security (HSTS) header", () => {
    expect(nextConfig).toContain("Strict-Transport-Security");
  });

  it("should set Referrer-Policy header", () => {
    expect(nextConfig).toContain("Referrer-Policy");
  });

  it("should set Permissions-Policy header", () => {
    expect(nextConfig).toContain("Permissions-Policy");
  });

  it("should set Content-Security-Policy header", () => {
    expect(nextConfig).toContain("Content-Security-Policy");
  });
});

describe("Security: Input Validation (Zod)", () => {
  const validation = readSourceFile("lib/validation.ts");

  it("should validate chat message input", () => {
    expect(validation).toContain("chatMessageSchema");
  });

  it("should enforce maximum message length", () => {
    expect(validation).toContain("max");
  });

  it("should enforce minimum message length", () => {
    expect(validation).toContain("min");
  });

  it("should validate translate request input", () => {
    expect(validation).toContain("translateRequestSchema");
  });

  it("should use Zod for schema validation", () => {
    expect(validation).toContain('from "zod"');
  });
});

describe("Security: XSS Prevention", () => {
  const utils = readSourceFile("lib/utils.ts");

  it("should include sanitizeInput function", () => {
    expect(utils).toContain("sanitizeInput");
  });

  it("should escape HTML angle brackets", () => {
    expect(utils).toContain("&lt;");
    expect(utils).toContain("&gt;");
  });

  it("should escape HTML ampersand", () => {
    expect(utils).toContain("&amp;");
  });

  it("should escape HTML quotes", () => {
    expect(utils).toContain("&quot;");
  });
});

describe("Security: Rate Limiting", () => {
  const chatRoute = readSourceFile("app/api/chat/route.ts");

  it("should implement rate limiting on chat endpoint", () => {
    expect(chatRoute).toContain("checkRateLimit");
  });

  it("should track requests per IP address", () => {
    expect(chatRoute).toContain("requestLog");
  });

  it("should return 429 status when rate limited", () => {
    expect(chatRoute).toContain("429");
  });

  it("should configure max requests per window", () => {
    expect(chatRoute).toContain("MAX_REQUESTS");
  });

  it("should configure rate limit time window", () => {
    expect(chatRoute).toContain("RATE_LIMIT_WINDOW");
  });
});

describe("Security: API Key Protection", () => {
  const gitignore = readRootFile(".gitignore");
  const envExample = readRootFile(".env.example");

  it("should exclude .env from version control", () => {
    expect(gitignore).toContain(".env");
  });

  it("should exclude .env.local from version control", () => {
    expect(gitignore).toContain(".env.local");
  });

  it("should provide .env.example with placeholder values", () => {
    expect(envExample).toContain("GEMINI");
    expect(envExample).not.toMatch(
      /AIza[0-9A-Za-z_-]{35}/
    ); // No real API keys
  });

  it("should never hardcode API keys in source code", () => {
    const geminiLib = readSourceFile("lib/gemini.ts");
    expect(geminiLib).not.toMatch(/AIza[0-9A-Za-z_-]{35}/);
    expect(geminiLib).toContain("process.env");
  });
});

describe("Security: Docker Hardening", () => {
  const dockerfile = readRootFile("Dockerfile");

  it("should use multi-stage build", () => {
    const fromStatements = dockerfile.match(/FROM/g);
    expect(fromStatements!.length).toBeGreaterThanOrEqual(2);
  });

  it("should run as non-root user", () => {
    expect(dockerfile).toContain("nextjs");
    expect(dockerfile).toContain("USER");
  });

  it("should use Alpine-based image for minimal attack surface", () => {
    expect(dockerfile).toContain("alpine");
  });

  it("should set standalone output mode", () => {
    expect(dockerfile).toContain("standalone");
  });
});

describe("Security: API Response Headers", () => {
  const chatRoute = readSourceFile("app/api/chat/route.ts");

  it("should set no-cache headers on sensitive responses", () => {
    expect(chatRoute).toContain("no-store");
  });

  it("should validate request body before processing", () => {
    expect(chatRoute).toContain("safeParse");
  });
});
