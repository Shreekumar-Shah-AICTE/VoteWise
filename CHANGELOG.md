# 📋 Changelog — VoteWise

All notable changes to the VoteWise project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-05-03

### Added

#### Core Features
- **AI Election Assistant** — Conversational chatbot powered by Google Gemini 2.5 Flash with non-partisan system instructions, streaming responses, suggestion chips, and chat history management
- **Interactive Election Timeline** — Visual 7-step journey through India's election process with expandable detail cards, key facts, and ECI-sourced data
- **Election Quiz Engine** — 25 questions across 5 categories (Registration, Process, Rights, History, Constitution), 3 difficulty levels, score tracking, and badge system
- **Mock EVM Simulator** — 5-phase voting simulation (Intro → ID Check → EVM Voting → VVPAT Verification → Indelible Ink) with realistic interface
- **Polling Station Finder** — Interactive Google Maps integration with station markers across 8 major Indian cities and Google Maps navigation deep links
- **Voter Readiness Assessment** — 10-question evaluation with 4-category scoring (Registration, Process, Documents, Rights) and personalized recommendations

#### Google Services Integration
- Google Gemini AI (`@google/generative-ai`) — Primary AI engine for election assistant
- Google Maps JavaScript API (`@vis.gl/react-google-maps`) — Polling station geospatial visualization
- Google Cloud Translation API — Multi-language support for 8 Indian languages
- Google Analytics 4 (`gtag.js`) — User engagement and event tracking
- Google Cloud Run — Containerized production deployment

#### Security
- Content Security Policy (CSP) headers via `next.config.ts`
- HTTP Strict Transport Security (HSTS) with 1-year max-age
- X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy headers
- Zod runtime input validation on all API endpoints
- XSS prevention via HTML entity escaping (`sanitizeInput()`)
- Rate limiting on AI chat endpoint (20 req/min per IP)
- Non-root Docker container execution (UID 1001)
- Environment variable management (never hardcoded API keys)

#### Accessibility (WCAG 2.1 AA)
- `<html lang="en">` for screen readers
- Skip-to-main-content navigation link
- Semantic HTML5 landmarks (`<main>`, `<nav>`, `<footer>`, `<section>`)
- ARIA attributes (`role`, `aria-label`, `aria-labelledby`, `aria-live`, `aria-hidden`)
- Keyboard navigation support (Tab, Enter, Space, Escape)
- `focus-visible` indicators on all interactive elements
- `@media (prefers-reduced-motion: reduce)` — disables all animations
- `@media (prefers-contrast: more)` — enhances color values
- `@media (forced-colors: active)` — Windows High Contrast support
- 4.5:1 minimum color contrast ratios

#### Testing
- 106 passing tests across 5 test suites
- Integration tests (28) — project structure, config, cross-module consistency
- Security audit tests (22) — headers, validation, XSS, rate limiting, Docker
- Edge case tests (23) — XSS payloads, boundaries, Unicode, overflow
- Accessibility tests (21) — ARIA, landmarks, motion, contrast
- Utility tests (12) — core function validation

#### Developer Experience
- TypeScript strict mode with zero `any` types
- ESLint + Prettier for consistent code quality
- JSDoc documentation on all exported functions
- Path aliases (`@/`) for clean imports
- Vitest for fast, ESM-native testing
- Multi-stage Dockerfile for optimized production builds

---

*Built for the PromptWars Challenge 2 — Election Process Education*
