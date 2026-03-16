import Link from "next/link";
import { Phone } from "lucide-react";
import { clinicData } from "@/lib/mock-data";

export default function HeaderP2() {
  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "3px solid var(--accent)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/premium-2"
          className="text-xl font-extrabold tracking-tight hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
          {clinicData.doctorName}
        </Link>
        <nav aria-label="ניווט ראשי">
          <ul className="hidden md:flex items-center gap-8 list-none">
            {[
              { label: "טיפולים", href: "/premium-2/treatments" },
              { label: "תוצאות", href: "/premium-2/results" },
              { label: "ביקורות", href: "/premium-2/#reviews" },
              { label: "צרו קשר", href: "/premium-2/contact" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-bold hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text-muted)" }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}>
          <Phone size={13} aria-hidden="true" /> {clinicData.phone}
        </a>
      </div>
    </header>
  );
}
