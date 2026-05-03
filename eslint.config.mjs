import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Custom strict rules for code quality
  {
    rules: {
      // Enforce no console.log in production code (use console.warn/error for legitimate needs)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Enforce consistent return statements
      "consistent-return": "off",
      // Prefer const over let when variable is never reassigned
      "prefer-const": "error",
      // No var declarations — use let/const
      "no-var": "error",
      // Enforce strict equality checks
      eqeqeq: ["error", "always"],
      // Disallow duplicate imports
      "no-duplicate-imports": "error",
    },
  },
]);

export default eslintConfig;
