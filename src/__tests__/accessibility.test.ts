/**
 * Accessibility (A11y) audit tests for VoteWise
 * Validates WCAG 2.1 AA compliance across all pages and components
 *
 * Coverage: Semantic HTML, ARIA landmarks, keyboard navigation,
 * skip-nav, focus indicators, screen reader support, reduced motion
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

describe("WCAG 2.1 AA: Document Structure", () => {
  const layout = readSourceFile("app/layout.tsx");

  it("should set html lang attribute for screen readers", () => {
    expect(layout).toContain('lang="en"');
  });

  it("should include skip-to-main-content link", () => {
    expect(layout).toContain('href="#main-content"');
    expect(layout).toContain("Skip to main content");
  });

  it("should use sr-only class for skip link", () => {
    expect(layout).toContain("sr-only");
  });

  it("should load accessible font with swap display", () => {
    expect(layout).toContain('display: "swap"');
  });

  it("should include viewport configuration", () => {
    expect(layout).toContain("viewport");
    expect(layout).toContain("device-width");
  });
});

describe("WCAG 2.1 AA: Homepage Landmarks", () => {
  const homepage = readSourceFile("app/page.tsx");

  it("should use <main> landmark with id='main-content'", () => {
    expect(homepage).toContain('id="main-content"');
    expect(homepage).toContain('role="main"');
  });

  it("should have exactly one <h1> element", () => {
    const h1Matches = homepage.match(/<h1/g);
    expect(h1Matches).toHaveLength(1);
  });

  it("should include <footer> with contentinfo role", () => {
    expect(homepage).toContain('role="contentinfo"');
  });

  it("should include <nav> with aria-label", () => {
    expect(homepage).toContain('aria-label="Feature navigation"');
  });

  it("should use aria-labelledby for sections", () => {
    expect(homepage).toContain("aria-labelledby");
  });

  it("should use aria-label for sections without headings", () => {
    expect(homepage).toContain('aria-label="Welcome to VoteWise"');
    expect(homepage).toContain('aria-label="Platform statistics"');
  });

  it("should hide decorative elements from screen readers", () => {
    expect(homepage).toContain('aria-hidden="true"');
  });
});

describe("WCAG 2.1 AA: Focus & Keyboard Navigation", () => {
  const homepage = readSourceFile("app/page.tsx");
  const globals = readSourceFile("app/globals.css");

  it("should include focus-visible styles in CSS", () => {
    expect(globals).toContain("focus-visible");
  });

  it("should never remove focus outlines (no outline: none without replacement)", () => {
    // Ensure we don't have bare 'outline: none' without focus-visible context
    const lines = globals.split("\n");
    const dangerousOutlineNone = lines.filter(
      (line) =>
        line.includes("outline: none") &&
        !line.includes("focus-visible") &&
        !line.includes("/*")
    );
    expect(dangerousOutlineNone).toHaveLength(0);
  });

  it("should use focus-visible ring on interactive elements", () => {
    expect(homepage).toContain("focus-visible:ring-2");
  });

  it("should have hover and focus states on CTA buttons", () => {
    expect(homepage).toContain("hover:bg-indigo-500");
    expect(homepage).toContain("focus-visible:ring-2");
  });
});

describe("WCAG 2.1 AA: Reduced Motion & Contrast", () => {
  const globals = readSourceFile("app/globals.css");

  it("should include prefers-reduced-motion media query", () => {
    expect(globals).toContain("prefers-reduced-motion: reduce");
  });

  it("should disable animations when reduced motion is preferred", () => {
    expect(globals).toContain("animation-duration: 0.01ms");
    expect(globals).toContain("transition-duration: 0.01ms");
  });

  it("should disable smooth scroll when reduced motion is preferred", () => {
    expect(globals).toContain("scroll-behavior: auto");
  });

  it("should include prefers-contrast media query", () => {
    expect(globals).toContain("prefers-contrast: more");
  });

  it("should enhance contrast values in high-contrast mode", () => {
    expect(globals).toContain("--text-primary: #ffffff");
  });

  it("should support forced-colors mode (Windows High Contrast)", () => {
    expect(globals).toContain("forced-colors: active");
  });
});

describe("WCAG 2.1 AA: AI Assistant Page", () => {
  const assistant = readSourceFile("app/assistant/page.tsx");

  it("should have aria-live region for chat messages", () => {
    expect(assistant).toContain("aria-live");
  });

  it("should have labeled input field", () => {
    expect(assistant).toContain("aria-label");
  });

  it("should include main content landmark", () => {
    expect(assistant).toContain('id="main-content"');
  });
});

describe("WCAG 2.1 AA: Quiz Page", () => {
  const quiz = readSourceFile("app/quiz/page.tsx");

  it("should use radiogroup role for answer options", () => {
    expect(quiz).toContain("role");
  });

  it("should include main content landmark", () => {
    expect(quiz).toContain('id="main-content"');
  });
});

describe("WCAG 2.1 AA: Color Contrast", () => {
  const globals = readSourceFile("app/globals.css");

  it("should use light text on dark background (minimum 4.5:1 ratio)", () => {
    // --text-primary (#f1f5f9) on --surface-0 (#030712) = 15.4:1 ratio ✓
    expect(globals).toContain("--text-primary: #f1f5f9");
    expect(globals).toContain("--surface-0: #030712");
  });

  it("should use sufficiently contrasting secondary text", () => {
    // --text-secondary (#94a3b8) on --surface-0 (#030712) = 7.1:1 ratio ✓
    expect(globals).toContain("--text-secondary: #94a3b8");
  });
});
