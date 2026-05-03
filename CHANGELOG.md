# Changelog

All notable changes to VoteWise are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-05-03

### Added
- AI Election Assistant powered by Google Gemini with 3-tier fallback system
- Interactive 7-step Election Timeline with detailed explanations
- Mock EVM Voting Simulator for first-time voter training
- Gamified Election Quiz with 25 questions across 5 categories
- Polling Station Finder integrated with Google Maps API
- Voter Readiness Checklist with personalized assessment
- Multi-language support for 8 Indian languages via Google Cloud Translation
- WCAG 2.1 AA accessibility compliance throughout
- Dark mode premium UI with India tricolor accents
- Progressive Web App (PWA) support with offline capabilities
- Comprehensive knowledge base with 18 expert-curated election topics
- Conversational AI patterns for greetings, identity, and meta-questions
- Smart context-aware fallback responses

### Security
- Content Security Policy (CSP) headers
- Rate limiting on API endpoints (20 req/min)
- Input validation with Zod schemas on all API routes
- XSS prevention via input sanitization
- Non-root Docker container execution

### Infrastructure
- Deployed on Google Cloud Run (serverless, auto-scaling)
- Multi-stage Docker build for minimal image size
- Google Analytics 4 integration for usage insights
- 259 passing tests across 11 test suites
