/**
 * Unit tests for VoteWise utility functions
 * Tests sanitization, ID generation, formatting, and array operations
 */

import { describe, it, expect } from "vitest";
import {
  generateId,
  formatPercentage,
  clamp,
  sanitizeInput,
  timeAgo,
  shuffleArray,
  getDifficultyColor,
} from "@/lib/utils";

describe("generateId", () => {
  it("should generate a non-empty string", () => {
    const id = generateId();
    expect(id).toBeTruthy();
    expect(typeof id).toBe("string");
  });

  it("should generate unique IDs", () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()));
    expect(ids.size).toBe(100);
  });
});

describe("formatPercentage", () => {
  it("should format 0 as 0%", () => {
    expect(formatPercentage(0)).toBe("0%");
  });

  it("should format 1 as 100%", () => {
    expect(formatPercentage(1)).toBe("100%");
  });

  it("should format 0.75 as 75%", () => {
    expect(formatPercentage(0.75)).toBe("75%");
  });

  it("should round decimal percentages", () => {
    expect(formatPercentage(0.333)).toBe("33%");
  });
});

describe("clamp", () => {
  it("should return value when within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("should return min when value is below range", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("should return max when value is above range", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("should handle equal min and max", () => {
    expect(clamp(5, 3, 3)).toBe(3);
  });
});

describe("sanitizeInput", () => {
  it("should escape HTML angle brackets", () => {
    expect(sanitizeInput("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt;"
    );
  });

  it("should escape ampersands", () => {
    expect(sanitizeInput("AT&T")).toBe("AT&amp;T");
  });

  it("should escape double quotes", () => {
    expect(sanitizeInput('say "hello"')).toBe("say &quot;hello&quot;");
  });

  it("should leave safe text unchanged", () => {
    expect(sanitizeInput("Hello World 123")).toBe("Hello World 123");
  });

  it("should handle empty string", () => {
    expect(sanitizeInput("")).toBe("");
  });
});

describe("timeAgo", () => {
  it("should return 'just now' for recent dates", () => {
    expect(timeAgo(new Date())).toBe("just now");
  });

  it("should return minutes for dates within an hour", () => {
    const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000);
    expect(timeAgo(fiveMinAgo)).toBe("5 min ago");
  });
});

describe("shuffleArray", () => {
  it("should return an array of the same length", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffleArray(arr)).toHaveLength(5);
  });

  it("should contain all original elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    arr.forEach((item) => expect(shuffled).toContain(item));
  });

  it("should not mutate the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const original = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(original);
  });

  it("should handle empty array", () => {
    expect(shuffleArray([])).toEqual([]);
  });

  it("should handle single element array", () => {
    expect(shuffleArray([42])).toEqual([42]);
  });
});

describe("getDifficultyColor", () => {
  it("should return green classes for easy", () => {
    expect(getDifficultyColor("easy")).toContain("green");
  });

  it("should return yellow classes for medium", () => {
    expect(getDifficultyColor("medium")).toContain("yellow");
  });

  it("should return red classes for hard", () => {
    expect(getDifficultyColor("hard")).toContain("red");
  });
});
