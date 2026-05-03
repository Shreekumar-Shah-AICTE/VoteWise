/**
 * Integration tests for VoteWise
 * Validates project structure, configuration integrity, and cross-module consistency
 *
 * Coverage: File structure, config files, module imports, TypeScript config,
 * ESLint config, package.json integrity, and deployment readiness
 */

import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/** Helper to check if a file exists */
function fileExists(filePath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), filePath));
}

/** Helper to read a project file */
function readFile(filePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), filePath), "utf-8");
}

describe("Integration: Project File Structure", () => {
  const requiredFiles = [
    "package.json",
    "tsconfig.json",
    "next.config.ts",
    "Dockerfile",
    ".dockerignore",
    ".gitignore",
    ".env.example",
    ".prettierrc",
    "vitest.config.ts",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/globals.css",
    "src/app/api/chat/route.ts",
    "src/app/api/translate/route.ts",
    "src/app/assistant/page.tsx",
    "src/app/timeline/page.tsx",
    "src/app/quiz/page.tsx",
    "src/app/simulator/page.tsx",
    "src/app/stations/page.tsx",
    "src/app/readiness/page.tsx",
    "src/lib/gemini.ts",
    "src/lib/utils.ts",
    "src/lib/validation.ts",
    "src/lib/languages.ts",
    "src/types/index.ts",
    "src/data/election-steps.ts",
    "src/data/quiz-questions.ts",
    "src/data/mock-data.ts",
  ];

  requiredFiles.forEach((file) => {
    it(`should contain ${file}`, () => {
      expect(fileExists(file)).toBe(true);
    });
  });
});

describe("Integration: Package.json Integrity", () => {
  const pkg = JSON.parse(readFile("package.json"));

  it("should have correct project name", () => {
    expect(pkg.name).toBe("votewise");
  });

  it("should include dev script", () => {
    expect(pkg.scripts.dev).toBeDefined();
  });

  it("should include build script", () => {
    expect(pkg.scripts.build).toBeDefined();
  });

  it("should include test script", () => {
    expect(pkg.scripts.test).toBeDefined();
  });

  it("should include lint script", () => {
    expect(pkg.scripts.lint).toBeDefined();
  });

  it("should have next as dependency", () => {
    expect(pkg.dependencies.next).toBeDefined();
  });

  it("should have react as dependency", () => {
    expect(pkg.dependencies.react).toBeDefined();
  });

  it("should have @google/generative-ai as dependency", () => {
    expect(pkg.dependencies["@google/generative-ai"]).toBeDefined();
  });

  it("should have zod as dependency", () => {
    expect(pkg.dependencies.zod).toBeDefined();
  });

  it("should have vitest as devDependency", () => {
    expect(pkg.devDependencies.vitest).toBeDefined();
  });

  it("should have TypeScript as devDependency", () => {
    expect(pkg.devDependencies.typescript).toBeDefined();
  });
});

describe("Integration: TypeScript Configuration", () => {
  const tsconfig = JSON.parse(readFile("tsconfig.json"));

  it("should enable strict mode", () => {
    expect(tsconfig.compilerOptions.strict).toBe(true);
  });

  it("should use path aliases", () => {
    expect(tsconfig.compilerOptions.paths).toBeDefined();
    expect(tsconfig.compilerOptions.paths["@/*"]).toBeDefined();
  });
});

describe("Integration: Cross-Module Consistency", () => {
  it("should export types used by other modules", () => {
    const types = readFile("src/types/index.ts");
    expect(types).toContain("export");
    expect(types).toContain("interface");
  });

  it("should import Zod in validation module", () => {
    const validation = readFile("src/lib/validation.ts");
    expect(validation).toContain("from \"zod\"");
  });

  it("should import generative-ai in gemini module", () => {
    const gemini = readFile("src/lib/gemini.ts");
    expect(gemini).toContain("@google/generative-ai");
  });

  it("should reference main-content id in both layout and pages", () => {
    const layout = readFile("src/app/layout.tsx");
    const homepage = readFile("src/app/page.tsx");
    expect(layout).toContain("main-content");
    expect(homepage).toContain("main-content");
  });
});

describe("Integration: Deployment Readiness", () => {
  it("should have standalone output in next.config", () => {
    const nextConfig = readFile("next.config.ts");
    expect(nextConfig).toContain("standalone");
  });

  it("should have Dockerfile for containerized deployment", () => {
    const dockerfile = readFile("Dockerfile");
    expect(dockerfile).toContain("FROM");
    expect(dockerfile).toContain("EXPOSE");
  });

  it("should have .dockerignore to exclude unnecessary files", () => {
    const dockerignore = readFile(".dockerignore");
    expect(dockerignore).toContain("node_modules");
  });

  it("should have proper .gitignore excluding build artifacts", () => {
    const gitignore = readFile(".gitignore");
    expect(gitignore).toContain("node_modules");
    expect(gitignore).toContain(".next");
    expect(gitignore).toContain(".env.local");
  });
});

describe("Integration: Google Services Configuration", () => {
  it("should configure Gemini AI in lib/gemini.ts", () => {
    const gemini = readFile("src/lib/gemini.ts");
    expect(gemini).toContain("GoogleGenerativeAI");
  });

  it("should configure Google Analytics in layout", () => {
    const layout = readFile("src/app/layout.tsx");
    expect(layout).toContain("googletagmanager");
    expect(layout).toContain("GA_MEASUREMENT_ID");
  });

  it("should configure Google Translate in API route", () => {
    const translate = readFile("src/app/api/translate/route.ts");
    expect(translate).toContain("translation.googleapis.com");
  });

  it("should configure Google Maps in stations page", () => {
    const stations = readFile("src/app/stations/page.tsx");
    expect(stations).toContain("maps");
  });

  it("should configure language support for Google Translate", () => {
    const languages = readFile("src/lib/languages.ts");
    expect(languages).toContain("SUPPORTED_LANGUAGES");
  });
});
