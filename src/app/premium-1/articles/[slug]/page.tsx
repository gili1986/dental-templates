import Link from "next/link";
import { articles, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP1 from "@/components/layout/HeaderP1";
import { Clock, ArrowRight } from "lucide-react";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug) ?? articles[0];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div
      className="theme-p1 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <HeaderP1 />

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <li><Link href="/premium-1" className="hover:opacity-70">בית</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/premium-1/articles" className="hover:opacity-70">מאמרים</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--accent)" }}>{article.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-16">

          {/* ── Main content ── */}
          <article className="lg:col-span-2">

            {/* Category + meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                {article.category}
              </span>
              <span className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                <Clock size={11} aria-hidden="true" /> {article.readTime}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{article.date}</span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {article.title}
            </h1>

            {/* Hero placeholder */}
            <div
              className="w-full mb-10"
              style={{ height: 300, backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              aria-hidden="true"
            />

            {/* Body */}
            <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
              {article.body.map((block, i) => {
                if (block.type === "intro")
                  return <p key={i} className="text-base font-medium leading-relaxed" style={{ color: "var(--text)" }}>{block.text}</p>;
                if (block.type === "h2")
                  return (
                    <h2 key={i} className="text-xl font-bold pt-4" style={{ fontFamily: "var(--font-heading)", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                      {block.text}
                    </h2>
                  );
                if (block.type === "p")
                  return <p key={i} className="text-base" style={{ color: "var(--text)" }}>{block.text}</p>;
                if (block.type === "tip")
                  return (
                    <div
                      key={i}
                      className="px-5 py-4 text-sm"
                      style={{
                        borderRight: "3px solid var(--accent)",
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {block.text}
                    </div>
                  );
                return null;
              })}
            </div>

            {/* CTA */}
            <div className="mt-14 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                יש שאלות? נשמח לעזור
              </p>
              <a
                href={`https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(`קראתי את המאמר "${article.title}" ורציתי לשאול...`)}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                שלחו לנו הודעה
              </a>
            </div>

            {/* Back */}
            <div className="mt-8">
              <Link
                href="/premium-1/articles"
                className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                style={{ color: "var(--text-muted)" }}
              >
                <ArrowRight size={14} aria-hidden="true" />
                חזרה לכל המאמרים
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-10">

            {/* About the doctor */}
            <div style={{ borderTop: "2px solid var(--accent)", paddingTop: "1.5rem" }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                על הכותבת
              </p>
              <div
                className="w-12 h-12 mb-3"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                aria-hidden="true"
              />
              <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.doctorName}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {clinicData.doctorTitle}
              </p>
            </div>

            {/* Book CTA */}
            <div
              className="p-6"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                רוצים להתייעץ?
              </p>
              <p className="text-sm font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                קבעו תור לייעוץ ראשוני ללא עלות
              </p>
              <a
                href={`tel:${clinicData.phone}`}
                className="block text-center py-3 text-xs font-semibold border hover:opacity-80 transition-opacity"
                style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              >
                {clinicData.phone}
              </a>
            </div>

            {/* Related articles */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)" }}>
                מאמרים נוספים
              </p>
              <div className="space-y-5">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/premium-1/articles/${a.slug}`}
                    className="group block"
                    aria-label={`קרא מאמר: ${a.title}`}
                  >
                    <span className="text-xs" style={{ color: "var(--accent)" }}>{a.category}</span>
                    <p className="text-sm font-medium mt-0.5 group-hover:opacity-60 transition-opacity" style={{ fontFamily: "var(--font-heading)" }}>
                      {a.title}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{a.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }} className="py-10 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/premium-1" className="hover:opacity-70">בית</Link>
            <Link href="/premium-1/articles" className="hover:opacity-70">מאמרים</Link>
            <Link href="/premium-1/contact" className="hover:opacity-70">צרו קשר</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
