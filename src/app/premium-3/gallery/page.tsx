import Link from "next/link";
import { Leaf } from "lucide-react";
import { clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";

const galleryImages = [
  {
    id: 1,
    category: "מרפאה",
    caption: "חדר הטיפולים הראשי — ציוד CEREC ו-iTero",
    unsplash: "photo-1629909613654-28e377c37b09",
    size: "lg",
  },
  {
    id: 2,
    category: "מרפאה",
    caption: "חדר קבלה נעים ומרגיע",
    unsplash: "photo-1588776814546-1ffbb2e8c3e3",
    size: "sm",
  },
  {
    id: 3,
    category: "תוצאות",
    caption: "ציפויי חרסינה — לפני ואחרי",
    unsplash: "photo-1612349317150-e413f6a5b16d",
    size: "sm",
  },
  {
    id: 4,
    category: "צוות",
    caption: "ד\"ר יעל כהן בטיפול",
    unsplash: "photo-1559839734-2b71ea197ec2",
    size: "lg",
  },
  {
    id: 5,
    category: "תוצאות",
    caption: "שיקום חיוך מלא — 6 שתלים",
    unsplash: "photo-1579684385127-1ef15d508118",
    size: "sm",
  },
  {
    id: 6,
    category: "מרפאה",
    caption: "מערכת סריקה תלת-ממדית iTero",
    unsplash: "photo-1559757148-5c350d0d3c56",
    size: "sm",
  },
  {
    id: 7,
    category: "צוות",
    caption: "הצוות המסור שלנו",
    unsplash: "photo-1494790108755-2616b612b977",
    size: "lg",
  },
  {
    id: 8,
    category: "תוצאות",
    caption: "הלבנה מקצועית — תוצאות מיידיות",
    unsplash: "photo-1606811971618-4486d14f3f99",
    size: "sm",
  },
  {
    id: 9,
    category: "מרפאה",
    caption: "אזור ההמתנה הנוח",
    unsplash: "photo-1519494026892-80bbd2d6fd0d",
    size: "sm",
  },
];

const categories = ["הכל", "מרפאה", "צוות", "תוצאות"];

export default function GalleryPage() {
  return (
    <div
      className="theme-p3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40"
        style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
            <Link href="/premium-3"
              className="text-xl font-bold hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
              {clinicData.doctorName}
            </Link>
          </div>
          <nav aria-label="ניווט ראשי">
            <ul className="hidden md:flex items-center gap-7 list-none">
              <li><Link href="/premium-3/about" className="text-sm font-medium hover:opacity-60"
                style={{ color: "var(--text-muted)" }}>אודות</Link></li>
              <li><Link href="/premium-3/treatments" className="text-sm font-medium hover:opacity-60"
                style={{ color: "var(--text-muted)" }}>טיפולים</Link></li>
              <li><Link href="/premium-3/gallery" className="text-sm font-medium"
                style={{ color: "var(--accent)" }}>גלריה</Link></li>
            </ul>
          </nav>
          <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white rounded-full hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}>
            קביעת תור
          </a>
        </div>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Page header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>תמונות</p>
          <h1 className="text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
            הגלריה שלנו
          </h1>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
            המרפאה, הצוות, והתוצאות שמדברות בעד עצמן.
          </p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-12" role="group" aria-label="סנן לפי קטגוריה">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: cat === "הכל" ? "var(--primary)" : "var(--bg-secondary)",
                color: cat === "הכל" ? "white" : "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
              aria-pressed={cat === "הכל"}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4" aria-label="תמונות גלריה">
          {galleryImages.map((img) => (
            <figure
              key={img.id}
              className={`overflow-hidden rounded-2xl group ${img.size === "lg" ? "lg:col-span-2" : ""}`}
            >
              <div className="relative overflow-hidden"
                style={{ aspectRatio: img.size === "lg" ? "16/9" : "4/3" }}>
                <img
                  src={`https://images.unsplash.com/${img.unsplash}?w=800&q=80&auto=format`}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(74,55,40,0.8), transparent)" }}
                >
                  <div>
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1"
                      style={{ backgroundColor: "var(--accent)", color: "white" }}
                    >
                      {img.category}
                    </span>
                    <figcaption className="text-white text-sm font-medium">{img.caption}</figcaption>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-block px-12 py-12 rounded-3xl text-center"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
              רוצים להיות הבאים?
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-sm mx-auto"
              style={{ color: "var(--text-muted)" }}>
              קבעו ייעוץ ראשוני חינם ונבנה יחד את תוכנית הטיפול שלכם.
            </p>
            <a
              href={`https://wa.me/${clinicData.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--primary)" }}
            >
              קביעת ייעוץ חינם →
            </a>
          </div>
        </div>
      </main>

      <footer
        className="py-10 mt-20"
        style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm"
          style={{ color: "var(--text-muted)" }}>
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex gap-6">
            <Link href="/premium-3" className="hover:opacity-70">בית</Link>
            <Link href="/premium-3/about" className="hover:opacity-70">אודות</Link>
            <Link href="/premium-3/treatments" className="hover:opacity-70">טיפולים</Link>
            <Link href="/premium-3/gallery" className="hover:opacity-70">גלריה</Link>
            <Link href="/נגישות" className="hover:opacity-70 underline">נגישות</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
