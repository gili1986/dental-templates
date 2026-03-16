"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Phone, ChevronDown,
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

export default function HeaderP1() {
  const [servicesOpen, setServicesOpen] = useState(false);
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
        <nav aria-label="ניווט ראשי">
          <ul className="hidden md:flex items-center gap-8 list-none">
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
            {[
              { label: "אודות", href: "/premium-1/#about" },
              { label: "ביקורות", href: "/premium-1/#reviews" },
              { label: "צרו קשר", href: "/premium-1/contact" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium tracking-wide uppercase hover:opacity-60"
                  style={{ color: "var(--text)" }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold border hover:opacity-80"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
          <Phone size={13} aria-hidden="true" /> {clinicData.phone}
        </a>
      </div>
    </header>
  );
}
