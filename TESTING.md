# 🧪 Testing Documentation — VoteWise

> Comprehensive testing strategy ensuring code quality, security hardening, accessibility compliance, and data integrity across the entire VoteWise platform.

---

## Testing Philosophy

VoteWise follows a **multi-layered testing strategy** inspired by the Testing Trophy pattern:

1. **Unit Tests** — Validate individual utility functions and data transformations
2. **Security Audit Tests** — Verify defense-in-depth security measures (CSP, XSS, Rate Limiting)
3. **Accessibility Tests** — Ensure WCAG 2.1 AA compliance across all pages and components
4. **Integration Tests** — Validate project structure, cross-module consistency, and deployment readiness
5. **Edge Case Tests** — Stress-test with malicious payloads, boundary values, and Unicode input

---

## Test Suite Overview

| Suite | File | Tests | Coverage |
|:------|:-----|:-----:|:---------|
| **Integration** | `src/__tests__/integration.test.ts` | 28 | Project structure (28 file checks), package.json integrity, TypeScript config, cross-module consistency, deployment readiness, Google Services configuration |
| **Security** | `src/__tests__/security.test.ts` | 22 | HTTP security headers (CSP, HSTS, X-Frame-Options), Zod input validation, XSS prevention, rate limiting, API key protection, Docker hardening, API response headers |
| **Edge Cases** | `src/__tests__/edge-cases.test.ts` | 23 | XSS attack payloads (script injection, img onerror, event handlers, nested tags, javascript: URLs), input boundary values, numeric overflow, array operations, Unicode/Hindi/Gujarati text, translation validation, ID uniqueness, text truncation |
| **Accessibility** | `src/__tests__/accessibility.test.ts` | 21 | Document structure (lang, skip-nav, fonts), homepage ARIA landmarks, focus & keyboard navigation, `prefers-reduced-motion`, `prefers-contrast`, `forced-colors`, AI assistant a11y, quiz a11y, color contrast ratios |
| **Utilities** | `src/__tests__/utils.test.ts` | 12 | `generateId`, `sanitizeInput`, `clamp`, `formatPercentage`, `shuffleArray`, `timeAgo`, `getDifficultyColor`, `truncateText` |
| **Total** | **5 suites** | **106** | **100% pass rate** |

---

## Running Tests

```bash
# Run all 106 tests
npm test

# Run with verbose output (see individual test names)
npx vitest run --reporter=verbose

# Run a specific test suite
npx vitest run src/__tests__/security.test.ts

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode during development
npx vitest
```

---

## Security Test Details

The security test suite validates **defense-in-depth** across all application layers:

### HTTP Security Headers
- ✅ `X-Frame-Options: DENY` — Prevents clickjacking
- ✅ `X-Content-Type-Options: nosniff` — Prevents MIME sniffing
- ✅ `Strict-Transport-Security` — Forces HTTPS connections
- ✅ `Referrer-Policy` — Controls referrer information leakage
- ✅ `Permissions-Policy` — Restricts browser feature access
- ✅ `Content-Security-Policy` — Prevents XSS and data injection

### Input Validation (Zod)
- ✅ Chat message schema validation (min/max length)
- ✅ Translation request schema validation (language codes)
- ✅ Runtime type safety with Zod inference

### XSS Prevention
- ✅ HTML entity escaping (`<`, `>`, `&`, `"`, `'`)
- ✅ Script injection neutralization
- ✅ Event handler injection prevention
- ✅ JavaScript URL protocol blocking

### Rate Limiting
- ✅ 20 requests/minute per IP on `/api/chat`
- ✅ Request tracking via in-memory Map
- ✅ 429 status code on limit exceeded

### Docker Security
- ✅ Multi-stage build (minimized attack surface)
- ✅ Non-root user execution (UID 1001)
- ✅ Alpine-based image (minimal OS footprint)

---

## Accessibility Test Details

The accessibility test suite validates **WCAG 2.1 AA** compliance:

### Document Structure
- ✅ `<html lang="en">` for screen readers
- ✅ Skip-to-main-content link with `sr-only` class
- ✅ Accessible font loading with `display: swap`
- ✅ Viewport configuration for mobile accessibility

### ARIA Landmarks
- ✅ `<main>` with `id="main-content"` and `role="main"`
- ✅ Single `<h1>` per page
- ✅ `<footer>` with `role="contentinfo"`
- ✅ `<nav>` with descriptive `aria-label`
- ✅ `aria-labelledby` for headed sections
- ✅ `aria-hidden="true"` on decorative elements

### Motion & Contrast
- ✅ `@media (prefers-reduced-motion: reduce)` disables all animations
- ✅ `@media (prefers-contrast: more)` enhances color values
- ✅ `@media (forced-colors: active)` for Windows High Contrast
- ✅ All text meets 4.5:1 minimum contrast ratio

---

## Edge Case Test Details

The edge case suite stress-tests application robustness:

### XSS Attack Payloads Tested
```
<script>alert("xss")</script>
<img src=x onerror=alert(1)>
<div onmouseover="steal()">hover</div>
<<script>script>alert("xss")<</script>/script>
<a href="javascript:alert(1)">click</a>
```

### Boundary Values Tested
- Empty string, whitespace-only, single character
- Maximum length (2000 chars), over-maximum (10001 chars)
- Zero, negative numbers, equal min/max

### Unicode/International Text Tested
- Hindi: `भारत में चुनाव कैसे होते हैं?`
- Gujarati: `ભારતમાં ચૂંટણી કેવી રીતે થાય છે?`
- Emoji: `🗳️`
- Mixed script: `Election = चुनाव = ચૂંટણી`

---

## Test Configuration

Tests are configured via `vitest.config.ts`:

```typescript
{
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.ts",
  },
  resolve: {
    alias: { "@": "./src" },
  },
}
```

- **Framework:** Vitest 3.x (Vite-native, ESM-first)
- **Environment:** jsdom (for DOM-related tests)
- **Path Aliases:** `@/` maps to `src/` for clean imports
- **TypeScript:** Full type safety in all test files

---

*Built for the PromptWars Challenge 2 — Election Process Education*
