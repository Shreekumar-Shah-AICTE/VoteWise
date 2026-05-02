/**
 * AI Chat API Route for VoteWise
 * Handles chat interactions with the Gemini AI election assistant
 *
 * Google Services: Uses Google Gemini API for AI-powered responses
 * Security: Input validation with Zod, rate limiting headers
 *
 * @route POST /api/chat
 */

import { NextRequest, NextResponse } from "next/server";
import { getElectionAssistantModel } from "@/lib/gemini";
import { chatMessageSchema } from "@/lib/validation";

/**
 * Rate limiting configuration
 * Security: Prevents abuse of the AI endpoint
 */
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 20; // Max 20 requests per minute
const requestLog = new Map<string, number[]>();

/**
 * Simple in-memory rate limiter.
 * Security: Prevents API abuse and excessive costs.
 *
 * @param ip - Client IP address
 * @returns Whether the request is within rate limits
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  const requests = requestLog.get(ip) || [];
  const recentRequests = requests.filter((t) => t > windowStart);
  requestLog.set(ip, [...recentRequests, now]);
  return recentRequests.length < MAX_REQUESTS;
}

/**
 * POST handler for chat messages.
 * Validates input, checks rate limits, and returns AI response.
 */
export async function POST(request: NextRequest) {
  try {
    // Security: Rate limiting check
    const clientIp =
      request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a moment." },
        { status: 429 }
      );
    }

    // Security: Validate input with Zod schema
    const body = await request.json();
    const validation = chatMessageSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: validation.error.issues.map((i) => i.message),
        },
        { status: 400 }
      );
    }

    const { message, history } = validation.data;

    // Google Services: Initialize Gemini AI model
    const model = getElectionAssistantModel();

    // Start or continue chat session with history
    const chat = model.startChat({
      history: history,
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json(
      { response: text },
      {
        status: 200,
        headers: {
          // Security: Cache control to prevent sensitive data caching
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Chat API error:", error);

    // Graceful error handling with user-friendly message
    return NextResponse.json(
      {
        error:
          "I'm having trouble connecting right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
