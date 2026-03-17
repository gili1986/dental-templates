"use client";

import { useState } from "react";
import { Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 140);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 80);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = "100%";
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  return (
    <div className="fixed top-4 left-4 z-50" dir="rtl">
      <button
        onClick={() => setOpen(!open)}
        aria-label="פתח תפריט נגישות"
        aria-expanded={open}
        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:opacity-90 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
      >
        <Accessibility size={18} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="אפשרויות נגישות"
          className="absolute top-12 left-0 bg-white border border-gray-200 rounded-xl shadow-xl p-4 w-52 text-sm"
        >
          <p className="font-bold text-gray-800 mb-3 text-base">נגישות</p>

          {/* Font size controls */}
          <div className="mb-3">
            <p className="text-gray-600 mb-1">גודל טקסט</p>
            <div className="flex gap-2">
              <button
                onClick={increaseFontSize}
                aria-label="הגדל טקסט"
                className="flex-1 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 font-bold text-base"
              >
                א+
              </button>
              <button
                onClick={resetFontSize}
                aria-label="איפוס גודל טקסט"
                className="flex-1 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-xs"
              >
                איפוס
              </button>
              <button
                onClick={decreaseFontSize}
                aria-label="הקטן טקסט"
                className="flex-1 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 text-xs"
              >
                א-
              </button>
            </div>
          </div>

          {/* High contrast */}
          <button
            onClick={toggleContrast}
            aria-pressed={highContrast}
            className={cn(
              "w-full py-2 rounded-lg border text-sm font-medium transition-colors",
              highContrast
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            )}
          >
            {highContrast ? "✓ " : ""}ניגודיות גבוהה
          </button>

          {/* Accessibility statement link */}
          <a
            href="/נגישות"
            className="block mt-3 text-center text-[var(--primary,#1B4F8A)] text-xs underline hover:no-underline"
          >
            הצהרת נגישות
          </a>
        </div>
      )}
    </div>
  );
}
