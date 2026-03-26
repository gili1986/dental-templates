import Link from "next/link";
import { articles, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP2 from "@/components/layout/HeaderP2";
import { Clock } from "lucide-react";

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

  return (
    <div
      className="theme-p2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <HeaderP2 />

      <main id="main-content">

        {/* Hero strip */}
        <div style={{ backgroundColor: "var(--text)", color: "var(--bg)" }} className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              ידע · מידע · מקצועיות
            </p>
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              מאמרים
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

          {/* Featured */}
          <Link
            href={`/premium-2/articles/${featured.slug}`}
            className="group grid lg:grid-cols-5 gap-0 mb-16 overflow-hidden"
            style={{ border: "2px solid var(--text)" }}
            aria-label={`קרא מאמר: ${featured.title}`}
          >
            {/* Image placeholder */}
            <div
              className="lg:col-span-2"
              style={{ minHeight: 280, backgroundColor: "#e8e8e8" }}
              aria-hidden="true"
            />
            {/* Content */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between" style={{ backgroundColor: "var(--bg)" }}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase px-2 py-0.5"
                    style={{ backgroundColor: "var(--accent)", color: "white" }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    מאמר נבחר
                  </span>
                </div>
                <h2
                  className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4 group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-center gap-4 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} aria-hidden="true" /> {featured.readTime}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }} aria-hidden="true">
                  קרא עוד →
                </span>
              </div>
            </div>
          </Link>

          {/* Grid divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              כל המאמרים
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} aria-hidden="true" />
          </div>

          {/* Articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/premium-2/articles/${article.slug}`}
                className="group block overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
                aria-label={`קרא מאמר: ${article.title}`}
              >
                {/* Placeholder image */}
                <div style={{ height: 160, backgroundColor: "var(--bg-secondary)" }} aria-hidden="true" />
                <div className="p-5">
                  <span
                    className="text-xs font-bold uppercase px-2 py-0.5 mb-3 inline-block"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
                  >
                    {article.category}
                  </span>
                  <h3
                    className="text-lg font-extrabold leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} aria-hidden="true" /> {article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: "var(--text)", color: "rgba(255,255,255,0.4)" }} className="py-10 mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-xs font-medium">
          <div style={{ color: "rgba(255,255,255,0.6)" }}>{clinicData.name}</div>
          <div className="flex flex-wrap gap-5">
            <Link href="/premium-2" className="hover:text-white transition-colors">בית</Link>
            <Link href="/premium-2/articles" className="hover:text-white transition-colors">מאמרים</Link>
            <Link href="/premium-2/contact" className="hover:text-white transition-colors">צרו קשר</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
