/**
 * AI Election Assistant Page
 * Interactive chat interface powered by Google Gemini AI
 *
 * Google Services: Gemini API for conversational AI
 * A11y: ARIA live region for dynamic chat updates, keyboard navigation
 */

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ChatMessage } from "@/types";
import { generateId, sanitizeInput } from "@/lib/utils";

/** Suggested questions for first-time users */
const SUGGESTIONS = [
  "How do I register as a voter?",
  "What is an EVM and how does it work?",
  "What documents do I need on polling day?",
  "Explain the Model Code of Conduct",
  "What is NOTA and how does it work?",
  "How are votes counted in India?",
];

/**
 * AI Assistant chat page component.
 * Provides a conversational interface for election education.
 */
export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /** Auto-scroll to the latest message */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  /**
   * Sends a message to the AI assistant.
   * Security: Sanitizes input before sending to API.
   */
  const sendMessage = useCallback(
    async (messageText?: string) => {
      const text = messageText || input.trim();
      if (!text || isLoading) return;

      // Security: Sanitize user input
      const sanitizedText = sanitizeInput(text);

      const userMessage: ChatMessage = {
        id: generateId(),
        role: "user",
        content: sanitizedText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        // Build chat history for context
        const history = messages.map((msg) => ({
          role: msg.role === "user" ? ("user" as const) : ("model" as const),
          parts: [{ text: msg.content }],
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: sanitizedText,
            history,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to get response");
        }

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        const errorMessage: ChatMessage = {
          id: generateId(),
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting right now. Please try again in a moment. If the issue persists, make sure the Gemini API key is configured.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
        inputRef.current?.focus();
      }
    },
    [input, isLoading, messages]
  );

  /** Handle keyboard events for message submission */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5 bg-gray-950/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
            aria-label="Back to home"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-lg font-semibold flex items-center gap-2">
              <span aria-hidden="true">🤖</span>
              VoteWise AI Assistant
            </h1>
            <p className="text-xs text-gray-500">
              Powered by Google Gemini AI
            </p>
          </div>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div
        className="flex-1 overflow-y-auto px-4 py-6"
        role="log"
        aria-label="Chat messages"
        aria-live="polite"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Welcome message when chat is empty */}
          {messages.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <Image src="/logo.png" alt="VoteWise" width={64} height={64} className="rounded-xl" />
              <h2 className="text-2xl font-bold mb-2">Welcome to VoteWise AI</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                I&apos;m your non-partisan election education assistant. Ask me
                anything about India&apos;s democratic process!
              </p>

              {/* Suggestion chips */}
              <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    className="px-4 py-2 text-sm bg-white/5 hover:bg-indigo-500/20 text-gray-300 hover:text-indigo-300 rounded-full border border-white/10 hover:border-indigo-500/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message bubbles */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
            >
              <div
                className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-5 py-3 ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-br-sm"
                    : "glass-card text-gray-200 rounded-bl-sm"
                }`}
              >
                {/* Role indicator for a11y */}
                <span className="sr-only">
                  {msg.role === "user" ? "You said:" : "Assistant replied:"}
                </span>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="flex justify-start animate-fade-in w-full max-w-[85%] md:max-w-[70%]">
              <div className="glass-card rounded-2xl rounded-bl-sm px-5 py-4 w-full">
                <span className="sr-only">Assistant is typing...</span>
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse" />
                  <div className="h-4 bg-white/10 rounded-full w-full animate-pulse" style={{ animationDelay: "150ms" }} />
                  <div className="h-4 bg-white/10 rounded-full w-5/6 animate-pulse" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-white/5 bg-gray-950/80 backdrop-blur-lg p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="max-w-4xl mx-auto flex gap-3"
        >
          <label htmlFor="chat-input" className="sr-only">
            Type your question about elections
          </label>
          <textarea
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about India's election process..."
            rows={1}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            disabled={isLoading}
            aria-describedby="chat-hint"
          />
          <span id="chat-hint" className="sr-only">
            Press Enter to send, Shift+Enter for new line
          </span>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Send message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
}
