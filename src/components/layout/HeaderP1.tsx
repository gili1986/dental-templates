"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Phone, ChevronDown, Menu, X,
  Layers, Sparkles, Zap, SlidersHorizontal, HeartPulse, AlertCircle, Award, Droplets,
} from "lucide-react";
import { clinicData, services } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const iconMap = {
  implants: <Layers size={14} strokeWidth={1} aria-hidden="true" />,
  veneers: <Sparkles size={14} strokeWidth={1} aria-hidden="true" />,
  whitening: <Zap size={14} strokeWidth={1} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={14} strokeWidth={1} aria-hidden="true" />,
  children: <HeartPulse size={14} strokeWidth={1} aria-hidden="true" />,
  emergency: <AlertCircle size={14} strokeWidth={1} aria-hidden="true" />,
  crown: <Award size={14} strokeWidth={1} aria-hidden="true" />,
  hygiene: <Droplets size={14} strokeWidth={1} aria-hidden="true" />,
};

const navLinks = [
  { label: "אודות", href: "/premium-1/#about" },
  { label: "ביקורות", href: "/premium-1/#reviews" },
  { label: "מאמרים", href: "/premium-1/articles" },
  { label: "צרו קשר", href: "/premium-1/contact" },
];

export default function HeaderP1() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div>
          <Link
            href="/premium-1"
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
            {clinicData.doctorName}
          </Link>
          <div className="w-8 h-0.5 mt-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
        </div>

        {/* Desktop nav */}
        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex items-center gap-8 list-none">
            <li className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm font-medium tracking-wide uppercase hover:opacity-60 flex items-center gap-1"
                style={{ color: "var(--text)" }}
                aria-expanded={servicesOpen}
                aria-haspopup="true">
                שירותים
                <ChevronDown size={12} className={cn("transition-transform duration-200", servicesOpen && "rotate-180")} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full mt-2 w-56 shadow-xl z-50 py-1"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", right: "50%", transform: "translateX(50%)" }}>
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/premium-1/services/${s.id}`}
                      className="flex items-center gap-3 px-4 py-3 text-xs hover:opacity-70 transition-opacity"
                      style={{ borderBottom: "1px solid var(--border)", color: "var(--text)" }}
                      onClick={() => setServicesOpen(false)}>
                      <span style={{ color: "var(--accent)" }}>{iconMap[s.id as keyof typeof iconMap]}</span>
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium tracking-wide uppercase hover:opacity-60"
                  style={{ color: "var(--text)" }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop phone */}
        <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold border hover:opacity-80"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
          <Phone size={13} aria-hidden="true" /> {clinicData.phone}
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-1"
          aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-p1"
          style={{ color: "var(--text)" }}>
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav id="mobile-nav-p1" aria-label="ניווט נייד"
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
          <ul className="list-none py-2">
            {/* Services accordion */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide uppercase"
                style={{ color: "var(--text)" }}
                aria-expanded={mobileServicesOpen}>
                שירותים
                <ChevronDown size={14} className={cn("transition-transform duration-200", mobileServicesOpen && "rotate-180")} aria-hidden="true" style={{ color: "var(--accent)" }} />
              </button>
              {mobileServicesOpen && (
                <ul className="list-none border-t border-b" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/premium-1/services/${s.id}`}
                        className="flex items-center gap-3 px-6 py-2.5 text-xs hover:opacity-70"
                        style={{ borderBottom: "1px solid var(--border)", color: "var(--text)" }}
                        onClick={closeMobile}>
                        <span style={{ color: "var(--accent)" }}>{iconMap[s.id as keyof typeof iconMap]}</span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="block px-4 py-3 text-sm font-medium tracking-wide uppercase hover:opacity-60"
                  style={{ color: "var(--text)", borderBottom: "1px solid var(--border)" }}
                  onClick={closeMobile}>
                  {link.label}
                </a>
              </li>
            ))}
            {/* Phone CTA */}
            <li className="px-4 py-3">
              <a href={`tel:${clinicData.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold border"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
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
