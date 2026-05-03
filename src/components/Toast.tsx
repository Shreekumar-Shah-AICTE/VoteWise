"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "info" | "warning";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

/**
 * Toast Notification Component
 * Provides transient, non-interruptive feedback to the user.
 * A11y: Uses role="alert" and aria-live="assertive" for screen readers
 */
export default function Toast({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShouldRender(true), 0);
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    } else {
      // Allow animation to complete before removing from DOM
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!shouldRender) return null;

  const getIcon = () => {
    switch (type) {
      case "success": return "✅";
      case "warning": return "⚠️";
      case "info": return "ℹ️";
    }
  };

  const getColors = () => {
    switch (type) {
      case "success": return "bg-green-500/10 border-green-500/20 text-green-400";
      case "warning": return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      case "info": return "bg-blue-500/10 border-blue-500/20 text-blue-400";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
      <div
        className={`max-w-sm w-full bg-gray-900 shadow-xl rounded-xl pointer-events-auto border ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100 sm:translate-x-0" : "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        } ${getColors()}`}
        role="alert"
        aria-live="assertive"
      >
        <div className="p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span aria-hidden="true" className="text-xl">{getIcon()}</span>
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium">
                {message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="rounded-md inline-flex text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition-colors"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
