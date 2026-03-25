"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToHomeButton() {
  const pathname = usePathname();

  // הצג רק בתוך תבנית, לא בדף הבית
  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-1.5 bg-black/70 hover:bg-black/90 text-white text-xs font-medium px-3 py-2 rounded-full backdrop-blur-sm shadow-lg transition-all hover:scale-105 active:scale-95"
      style={{ direction: "rtl" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
      כל התבניות
    </Link>
  );
}
