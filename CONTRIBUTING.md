# 🤝 Contributing to VoteWise

Thank you for your interest in contributing to VoteWise! This document provides guidelines and information for contributors.

---

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 with custom design tokens
- **AI:** Google Gemini 2.5 Flash (`@google/generative-ai`)
- **Maps:** Google Maps JavaScript API
- **Translation:** Google Cloud Translation API
- **Analytics:** Google Analytics 4 (gtag.js)
- **Deployment:** Google Cloud Run (Docker)
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint + Prettier

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Google Gemini API Key ([Get one free](https://aistudio.google.com/apikey))

### Setup

```bash
git clone https://github.com/Shreekumar-Shah-AICTE/VoteWise.git
cd VoteWise
npm install
cp .env.example .env.local
# Add your API keys to .env.local
npm run dev
```

---

## 📋 Development Guidelines

### Code Quality

- **TypeScript:** Strict mode enabled — no `any` types allowed
- **ESLint:** Zero warnings policy — run `npm run lint` before committing
- **Prettier:** Consistent formatting — run `npm run format` before committing
- **JSDoc:** All exported functions must have JSDoc comments

### Security

- Never hardcode API keys — always use `process.env`
- Validate all API inputs with Zod schemas
- Sanitize user input before rendering (use `sanitizeInput()`)
- See [`SECURITY.md`](SECURITY.md) for full security policy

### Accessibility (WCAG 2.1 AA)

- Use semantic HTML (`<main>`, `<nav>`, `<section>`, etc.)
- Add `aria-label` to all interactive elements
- Ensure 4.5:1 minimum color contrast ratio
- Test with keyboard navigation (Tab, Enter, Space, Escape)
- Respect `prefers-reduced-motion` and `prefers-contrast`

### Testing

- All new features must include tests
- Run `npm test` before submitting PRs
- Target: 100% pass rate
- See [`TESTING.md`](TESTING.md) for testing documentation

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add language toggle dropdown
fix: correct quiz scoring edge case
docs: update API documentation
test: add security audit tests
style: format code with Prettier
refactor: extract validation utilities
```

---

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages and API routes
├── data/          # Static election data (steps, quiz, stations)
├── lib/           # Shared utilities (AI, validation, sanitization)
├── types/         # TypeScript type definitions
└── __tests__/     # Test suites (unit, security, a11y, integration)
```

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

_Built for the PromptWars Challenge 2 — Election Process Education_
