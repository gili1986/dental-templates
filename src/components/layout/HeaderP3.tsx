import Link from "next/link";
import { Phone, Leaf } from "lucide-react";
import { clinicData } from "@/lib/mock-data";

export default function HeaderP3() {
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
        <nav aria-label="ניווט ראשי">
          <ul className="hidden md:flex items-center gap-7 list-none">
            {[
              { label: "אודות", href: "/premium-3/about" },
              { label: "טיפולים", href: "/premium-3/treatments" },
              { label: "גלריה", href: "/premium-3/gallery" },
              { label: "צרו קשר", href: "/premium-3/#contact" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium hover:opacity-60"
                  style={{ color: "var(--text-muted)" }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold hover:opacity-90"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
          <Phone size={13} aria-hidden="true" /> {clinicData.phone}
        </a>
      </div>
    </header>
  );
}
