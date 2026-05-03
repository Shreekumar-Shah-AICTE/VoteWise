/**
 * Page Component Verification Tests
 * Ensures all primary routes exist, export default components,
 * and contain required ARIA landmarks for accessibility.
 */

import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Pages: Structure and Accessibility", () => {
  const pagesDir = path.join(process.cwd(), "src/app");

  // Helper to read file content safely
  const readPage = (routePath: string) => {
    try {
      return fs.readFileSync(path.join(pagesDir, routePath), "utf-8");
    } catch {
      return null;
    }
  };

  const pagesToTest = [
    { name: "Home Page", path: "page.tsx" },
    { name: "AI Assistant", path: "assistant/page.tsx" },
    { name: "Timeline", path: "timeline/page.tsx" },
    { name: "Quiz Engine", path: "quiz/page.tsx" },
    { name: "EVM Simulator", path: "simulator/page.tsx" },
    { name: "Station Finder", path: "stations/page.tsx" },
    { name: "Voter Readiness", path: "readiness/page.tsx" },
  ];

  describe.each(pagesToTest)("$name Route ($path)", ({ path: routePath }) => {
    it("should exist in the file system", () => {
      const content = readPage(routePath);
      expect(content).not.toBeNull();
    });

    it("should export a default component", () => {
      const content = readPage(routePath);
      if (content) {
        expect(content).toMatch(/export default function/);
      }
    });

    it("should contain a main landmark for accessibility", () => {
      const content = readPage(routePath);
      if (content) {
        // Checking for semantic main tag
        expect(content).toMatch(/<main/);
      }
    });

    it("should contain a heading element", () => {
      const content = readPage(routePath);
      if (content) {
        // Should have at least one h1, h2, or h3
        expect(content).toMatch(/<h[1-3]/);
      }
    });
  });

  describe("Error Pages", () => {
    it("should have a custom 404 Not Found page", () => {
      const content = readPage("not-found.tsx");
      expect(content).not.toBeNull();
      expect(content).toContain("404");
    });

    it("should have a global Error Boundary", () => {
      const content = readPage("error.tsx");
      expect(content).not.toBeNull();
      expect(content).toContain('"use client"'); // Error boundaries must be client components
    });
  });

  describe("API Routes", () => {
    it("should export a POST handler for chat", () => {
      const content = readPage("api/chat/route.ts");
      expect(content).not.toBeNull();
      expect(content).toContain("export async function POST");
    });

    it("should implement rate limiting on chat route", () => {
      const content = readPage("api/chat/route.ts");
      expect(content).toContain("checkRateLimit");
    });
  });
});
