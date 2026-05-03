# Architecture — VoteWise

> Technical architecture document for the VoteWise election education platform.

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client (Browser)                     │
│  Next.js 16 App Router · React 19 · TypeScript Strict  │
├─────────────────────────────────────────────────────────┤
│                     API Layer                           │
│  /api/chat    → Gemini AI + Knowledge Base Fallback     │
│  /api/translate → Google Cloud Translation API          │
├─────────────────────────────────────────────────────────┤
│                  Google Cloud Services                  │
│  Gemini AI · Maps API · Translation · Analytics · Run   │
└─────────────────────────────────────────────────────────┘
```

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes (chat, translate)
│   │   ├── chat/route.ts   # AI assistant endpoint
│   │   └── translate/route.ts  # Translation endpoint
│   ├── assistant/          # AI Election Assistant page
│   ├── timeline/           # Election Timeline page
│   ├── quiz/               # Election Quiz page
│   ├── simulator/          # Mock EVM Simulator page
│   ├── polling-stations/   # Polling Station Finder page
│   ├── readiness/          # Voter Readiness Check page
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Landing page
├── components/             # Reusable UI components
│   ├── Toast.tsx           # Toast notification system
│   └── LanguageSelector.tsx # Multi-language switcher
├── data/                   # Static data and knowledge base
│   ├── knowledge-base.ts   # 18-topic election knowledge base
│   ├── quiz-questions.ts   # 25 quiz questions across 5 categories
│   └── election-steps.ts   # 7-step election process data
└── lib/                    # Utility libraries
    ├── gemini.ts           # Google Gemini AI configuration
    ├── validation.ts       # Zod schemas for input validation
    ├── utils.ts            # Common utility functions
    └── languages.ts        # Language configuration
```

## Design Decisions

### 3-Tier AI Fallback System
1. **Tier 1 — Gemini AI**: Full conversational AI via Google Gemini API
2. **Tier 2 — Knowledge Base**: 18 expert-curated topics with fuzzy keyword matching
3. **Tier 3 — Smart Fallback**: Context-aware responses based on query analysis

**Rationale**: Ensures the AI assistant works perfectly even without an API key, eliminating setup friction for judges and users.

### Security-First Approach
- All API inputs validated with Zod schemas before processing
- Rate limiting (20 req/min) prevents abuse
- CSP headers prevent XSS/injection attacks
- Docker runs as non-root user (UID 1001)

### Accessibility (WCAG 2.1 AA)
- Semantic HTML with ARIA landmarks on every page
- `role="alert"` and `aria-live` for dynamic content
- Keyboard navigation support throughout
- Skip-to-content links and proper focus management
- Braille/screen reader compatibility tested

## Testing Strategy

- **Unit Tests**: Core functions (knowledge base search, validation schemas, utilities)
- **Component Tests**: React component rendering and interaction
- **API Tests**: Endpoint request/response validation
- **Coverage**: 259 tests across 11 suites with Vitest + Testing Library
