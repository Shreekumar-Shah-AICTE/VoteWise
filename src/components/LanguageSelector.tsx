"use client";

import { useState, useEffect } from "react";

const SUPPORTED_LANGUAGE_CODES = ["en", "hi", "gu", "ta", "te", "bn", "mr", "kn"] as const;

const getLanguageName = (code: string) => {
  const names: Record<string, string> = {
    en: "English",
    hi: "हिंदी (Hindi)",
    gu: "ગુજરાતી (Gujarati)",
    ta: "தமிழ் (Tamil)",
    te: "తెలుగు (Telugu)",
    bn: "বাংলা (Bengali)",
    mr: "मराठी (Marathi)",
    kn: "ಕನ್ನಡ (Kannada)",
  };
  return names[code] || "English";
};

/**
 * Language Selector Component
 * Allows users to switch between the 8 supported Indian languages.
 * Note: In a full production app with a database, this would update user preferences.
 * Here, we update the HTML lang attribute to demonstrate a11y compliance.
 */
export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On mount, check if there's a stored language preference
    const stored = localStorage.getItem("votewise_lang");
    if (stored && SUPPORTED_LANGUAGE_CODES.includes(stored as any)) {
      setCurrentLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const handleSelect = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    
    // Update document language for screen readers (A11y)
    document.documentElement.lang = code;
    
    // Store preference
    localStorage.setItem("votewise_lang", code);
    
    // In a real implementation, this would trigger a context update
    // or router refresh to load localized strings
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-white/10 bg-gray-900/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          id="language-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span aria-hidden="true">🌐</span>
          {getLanguageName(currentLang)}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {isOpen && (
          <div 
            className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {SUPPORTED_LANGUAGE_CODES.map((code) => (
                <button
                  key={code}
                  className={`${
                    currentLang === code ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } group flex items-center w-full px-4 py-2 text-sm transition-colors`}
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => handleSelect(code)}
                >
                  {getLanguageName(code)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
