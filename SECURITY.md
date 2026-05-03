# 🔐 Security Policy — VoteWise

> VoteWise implements a **defense-in-depth** security architecture across all application layers, ensuring the protection of user data, API integrity, and deployment safety.

---

## Security Architecture Overview

VoteWise employs **7 layers of security** following the Zero Trust model:

```
Layer 1: HTTP Security Headers (CSP, HSTS, X-Frame-Options)
Layer 2: Input Validation (Zod runtime schemas)
Layer 3: XSS Prevention (HTML entity escaping)
Layer 4: Rate Limiting (20 req/min per IP)
Layer 5: API Key Protection (environment variables, never hardcoded)
Layer 6: Docker Hardening (non-root user, Alpine image, multi-stage build)
Layer 7: Cache Control (no-store on sensitive API responses)
```

---

## HTTP Security Headers

All routes are protected with the following headers via `next.config.ts`:

| Header | Value | Protection |
|:-------|:------|:-----------|
| `X-Frame-Options` | `DENY` | Prevents clickjacking attacks |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME type sniffing |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Forces HTTPS for 1 year |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer leakage |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(self)` | Restricts browser APIs |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' ...` | Prevents XSS and data injection |

---

## Input Validation

Every API endpoint uses **Zod** for runtime schema validation before processing any user input:

```typescript
// Chat message validation — src/lib/validation.ts
const chatMessageSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z.array(...).optional(),
});

// Translation request validation
const translateRequestSchema = z.object({
  text: z.string().min(1).max(5000),
  targetLanguage: z.enum(SUPPORTED_LANGUAGE_CODES),
});
```

**Why Zod:** Unlike manual validation, Zod provides compile-time TypeScript types AND runtime validation from a single schema definition — eliminating type drift between validation and business logic.

---

## XSS Prevention

All user-generated content is sanitized via `sanitizeInput()` in `src/lib/utils.ts`:

| Character | Escaped To | Attack Prevented |
|:---------:|:----------:|:-----------------|
| `<` | `&lt;` | Script tag injection |
| `>` | `&gt;` | Script tag injection |
| `&` | `&amp;` | Entity bypass attacks |
| `"` | `&quot;` | Attribute injection |
| `'` | `&#039;` | Attribute injection |

### Attack Vectors Tested
- `<script>alert("xss")</script>` — Script injection
- `<img src=x onerror=alert(1)>` — Event handler injection
- `<a href="javascript:alert(1)">` — Protocol injection
- Nested/obfuscated script tags
- HTML entity double-encoding

---

## Rate Limiting

The AI chat endpoint (`POST /api/chat`) implements per-IP rate limiting:

- **Window:** 60 seconds
- **Max Requests:** 20 per IP per window
- **Response:** HTTP 429 `Too Many Requests`
- **Storage:** In-memory Map (resets on server restart)
- **IP Detection:** `x-forwarded-for` header (Cloud Run compatible)

---

## API Key Protection

| Practice | Implementation |
|:---------|:---------------|
| Environment variables | All keys loaded from `.env.local` via `process.env` |
| Git exclusion | `.env` and `.env.local` in `.gitignore` |
| Example file | `.env.example` with placeholder values only |
| No hardcoding | Zero API keys in source code (verified by security tests) |
| Docker exclusion | `.env*` in `.dockerignore` |

---

## Docker Security

The production `Dockerfile` implements container hardening:

1. **Multi-stage build** — Only production artifacts in final image (no dev dependencies)
2. **Alpine base** — Minimal OS footprint (~5MB vs ~100MB for Debian)
3. **Non-root user** — Runs as `nextjs` (UID 1001), not root
4. **Standalone output** — Next.js standalone mode for minimal file inclusion
5. **Read-only where possible** — Application files owned by root, executed by non-root

---

## Reporting Vulnerabilities

If you discover a security vulnerability in VoteWise, please report it responsibly:

1. **Email:** parzivalarts@gmail.com
2. **Do NOT** create a public GitHub issue for security vulnerabilities
3. Include steps to reproduce the vulnerability
4. We will acknowledge receipt within 48 hours

---

## Security Testing

VoteWise includes **22 automated security tests** that run on every CI/CD pipeline execution:

```bash
# Run security tests
npx vitest run src/__tests__/security.test.ts

# Verify all tests pass
npm test
```

See [`TESTING.md`](TESTING.md) for full testing documentation.

---

*Built with defense-in-depth for the PromptWars Challenge 2*
