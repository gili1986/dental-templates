"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { clinicData } from "@/lib/mock-data";

const navLinks = [
  { label: "טיפולים", href: "/premium-2/treatments" },
  { label: "תוצאות", href: "/premium-2/results" },
  { label: "מאמרים", href: "/premium-2/articles" },
  { label: "ביקורות", href: "/premium-2/#reviews" },
  { label: "צרו קשר", href: "/premium-2/contact" },
];

export default function HeaderP2() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "3px solid var(--accent)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/premium-2"
          className="text-xl font-extrabold tracking-tight hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
          {clinicData.doctorName}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-bold hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text-muted)" }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop phone */}
        <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}>
          <Phone size={13} aria-hidden="true" /> {clinicData.phone}
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-1"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-p2"
          style={{ color: "var(--text)" }}>
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav id="mobile-nav-p2" aria-label="ניווט נייד"
          className="md:hidden border-t-2"
          style={{ backgroundColor: "var(--bg)", borderColor: "var(--text)" }}>
          <ul className="list-none py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="block px-4 py-3 text-sm font-bold hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text)", borderBottom: "2px solid var(--border)" }}
                  onClick={closeMobile}>
                  {link.label}
                </a>
              </li>
            ))}
            {/* Phone CTA */}
            <li className="px-4 py-3">
              <a href={`tel:${clinicData.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}
                onClick={closeMobile}>
                <Phone size={14} aria-hidden="true" /> {clinicData.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
