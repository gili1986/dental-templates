"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackToHomeButton() {
  const pathname = usePathname();

  // הצג רק בתוך תבנית, לא בדף הבית
  if (pathname === "/") return null;

  return (
    <Link
      href="/#templates"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 bg-black/75 hover:bg-black/95 text-white text-sm font-medium px-4 py-2.5 rounded-full backdrop-blur-sm shadow-lg transition-all hover:scale-105 active:scale-95"
      style={{ direction: "rtl" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
      כל התבניות
    </Link>
  );
}
