"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Leaf, Menu, X } from "lucide-react";
import { clinicData } from "@/lib/mock-data";

const navLinks = [
  { label: "אודות", href: "/premium-3/about" },
  { label: "טיפולים", href: "/premium-3/treatments" },
  { label: "גלריה", href: "/premium-3/gallery" },
  { label: "צרו קשר", href: "/premium-3/#contact" },
];

export default function HeaderP3() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Leaf size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
          <Link
            href="/premium-3"
            className="text-xl font-bold hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
            {clinicData.doctorName}
          </Link>
        </div>

        {/* Desktop nav */}
        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium hover:opacity-60"
                  style={{ color: "var(--text-muted)" }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop phone */}
        <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold hover:opacity-90"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
          <Phone size={13} aria-hidden="true" /> {clinicData.phone}
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-1"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-p3"
          style={{ color: "var(--text)" }}>
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav id="mobile-nav-p3" aria-label="ניווט נייד"
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
          <ul className="list-none py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="block px-4 py-3 text-sm font-medium hover:opacity-60"
                  style={{ color: "var(--text)", borderBottom: "1px solid var(--border)" }}
                  onClick={closeMobile}>
                  {link.label}
                </a>
              </li>
            ))}
            {/* Phone CTA */}
            <li className="px-4 py-3">
              <a href={`tel:${clinicData.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-sm text-sm font-semibold hover:opacity-90"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
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
