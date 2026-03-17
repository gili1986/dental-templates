"use client";

import Link from "next/link";
import { useState } from "react";
import { clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP3 from "@/components/layout/HeaderP3";

const galleryImages = [
  {
    id: 1,
    category: "מרפאה",
    caption: "חדר הטיפולים הראשי — ציוד CEREC ו-iTero",
    unsplash: "photo-1629909613654-28e377c37b09",
    aspect: "4/3",
  },
  {
    id: 2,
    category: "צוות",
    caption: "ד\"ר יעל כהן בטיפול",
    unsplash: "photo-1594824476967-48c8b964273f",
    aspect: "4/3",
  },
  {
    id: 3,
    category: "תוצאות",
    caption: "ציפויי חרסינה — לפני ואחרי",
    unsplash: "photo-1606811971618-4486d14f3f99",
    aspect: "4/3",
  },
  {
    id: 4,
    category: "מרפאה",
    caption: "חדר קבלה נעים ומרגיע",
    unsplash: "photo-1519494026892-80bbd2d6fd0d",
    aspect: "4/3",
  },
  {
    id: 5,
    category: "צוות",
    caption: "הצוות המסור שלנו",
    unsplash: "photo-1527613426441-4da17471b66d",
    aspect: "4/3",
  },
  {
    id: 6,
    category: "תוצאות",
    caption: "שיקום חיוך מלא — 6 שתלים",
    unsplash: "photo-1559839734-2b71ea197ec2",
    aspect: "4/3",
  },
  {
    id: 7,
    category: "מרפאה",
    caption: "מערכת סריקה תלת-ממדית iTero",
    unsplash: "photo-1551076805-e1869033e561",
    aspect: "4/3",
  },
  {
    id: 8,
    category: "תוצאות",
    caption: "הלבנה מקצועית — תוצאות מיידיות",
    unsplash: "photo-1573496359142-b8d87734a5a2",
    aspect: "4/3",
  },
  {
    id: 9,
    category: "מרפאה",
    caption: "אזור ההמתנה הנוח",
    unsplash: "photo-1629909615184-74f495363b67",
    aspect: "4/3",
  },
];

const categories = ["הכל", "מרפאה", "צוות", "תוצאות"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredImages = activeCategory === "הכל"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div
      className="theme-p3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      <HeaderP3 />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Page header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>תמונות</p>
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
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer"
              style={{
                backgroundColor: cat === activeCategory ? "var(--primary)" : "var(--bg-secondary)",
                color: cat === activeCategory ? "white" : "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
              aria-pressed={cat === activeCategory}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest masonry — CSS columns, natural image heights */}
        <div className="columns-2 lg:columns-3 gap-4" aria-label="תמונות גלריה">
          {filteredImages.map((img) => (
            <figure
              key={img.id}
              className="break-inside-avoid mb-4 overflow-hidden rounded-2xl group relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${img.unsplash}?w=800&q=80&auto=format`}
                  alt={img.caption}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(74,55,40,0.85), transparent)" }}
                >
                  <div>
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1"
                      style={{ backgroundColor: "var(--primary)", color: "white" }}
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
