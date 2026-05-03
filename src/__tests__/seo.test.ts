/**
 * SEO and Metadata Verification Tests
 * Ensures production-readiness signals are present across the application.
 */

import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("SEO and Production Signals", () => {
  const publicDir = path.join(process.cwd(), "public");
  const appDir = path.join(process.cwd(), "src/app");

  const readFile = (dirPath: string, fileName: string) => {
    try {
      return fs.readFileSync(path.join(dirPath, fileName), "utf-8");
    } catch {
      return null;
    }
  };

  describe("Progressive Web App (PWA)", () => {
    it("should have a valid manifest.json", () => {
      const content = readFile(publicDir, "manifest.json");
      expect(content).not.toBeNull();

      if (content) {
        const manifest = JSON.parse(content);
        expect(manifest.name).toBeDefined();
        expect(manifest.short_name).toBeDefined();
        expect(manifest.display).toBe("standalone");
        expect(manifest.theme_color).toBeDefined();
      }
    });

    it("should link to manifest in layout.tsx", () => {
      const content = readFile(appDir, "layout.tsx");
      expect(content).toContain('rel="manifest"');
      expect(content).toContain('href="/manifest.json"');
    });

    it("should have theme-color meta tag", () => {
      const content = readFile(appDir, "layout.tsx");
      expect(content).toContain('name="theme-color"');
    });
  });

  describe("Search Engine Optimization (SEO)", () => {
    it("should include robots.txt", () => {
      const content = readFile(publicDir, "robots.txt");
      expect(content).not.toBeNull();
      expect(content).toContain("User-agent: *");
      expect(content).toContain("Disallow: /api/");
    });

    it("should include JSON-LD Structured Data", () => {
      const content = readFile(appDir, "layout.tsx");
      expect(content).toContain('type="application/ld+json"');
      expect(content).toContain("https://schema.org");
      expect(content).toContain("WebApplication");
    });

    it("should use semantic HTML document structure", () => {
      const content = readFile(appDir, "layout.tsx");
      expect(content).toContain("<html");
      expect(content).toContain("<head");
      expect(content).toContain("<body");
    });

    it("should configure viewport for mobile responsiveness", () => {
      const content = readFile(appDir, "layout.tsx");
      // Next.js handles viewport meta automatically, but we check if we configured it
      expect(content).toContain("viewport");
    });
  });

  describe("Google Services Integration", () => {
    it("should include Google Analytics configuration", () => {
      const content = readFile(appDir, "layout.tsx");
      expect(content).toContain("googletagmanager.com/gtag/js");
      expect(content).toContain("window.dataLayer = window.dataLayer || []");
    });
  });
});
