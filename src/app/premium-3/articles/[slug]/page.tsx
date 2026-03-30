import Link from "next/link";
import { articles, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP3 from "@/components/layout/HeaderP3";
import { Clock, ArrowRight } from "lucide-react";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug) ?? articles[0];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div
      className="theme-p3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <HeaderP3 />

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <li><Link href="/premium-3" className="hover:opacity-70">בית</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/premium-3/articles" className="hover:opacity-70">מאמרים</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--accent)" }}>{article.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-14">

          {/* ── Main content ── */}
          <article className="lg:col-span-2">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
              >
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
              className="w-full rounded-2xl mb-10"
              style={{ height: 300, backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              aria-hidden="true"
            />

            {/* Body */}
            <div className="space-y-5">
              {article.body.map((block, i) => {
                if (block.type === "intro")
                  return (
                    <p key={i} className="text-lg leading-relaxed font-medium" style={{ color: "var(--text)" }}>
                      {block.text}
                    </p>
                  );
                if (block.type === "h2")
                  return (
                    <h2 key={i} className="text-2xl font-bold mt-8 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {block.text}
                    </h2>
                  );
                if (block.type === "p")
                  return (
                    <p key={i} className="text-sm leading-loose" style={{ color: "var(--text-muted)" }}>
                      {block.text}
                    </p>
                  );
                if (block.type === "tip")
                  return (
                    <div
                      key={i}
                      className="rounded-2xl px-6 py-4 text-sm"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
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
            <div
              className="mt-14 p-8 rounded-2xl"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                רוצים להתייעץ?
              </p>
              <p className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                נשמח לענות על כל שאלה
              </p>
              <a
                href={`https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent(`קראתי את המאמר "${article.title}" ורציתי לשאול...`)}`}
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "var(--text)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                שלחו הודעה בוואטסאפ
              </a>
            </div>

            {/* Back */}
            <div className="mt-8">
              <Link
                href="/premium-3/articles"
                className="inline-flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
                style={{ color: "var(--text-muted)" }}
              >
                <ArrowRight size={14} aria-hidden="true" />
                חזרה לכל המאמרים
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-8">

            {/* Doctor card */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "white", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                על הכותבת
              </p>
              <div
                className="w-14 h-14 rounded-full mb-3"
                style={{ backgroundColor: "var(--bg-secondary)" }}
                aria-hidden="true"
              />
              <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.doctorName}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {clinicData.doctorTitle}
              </p>
            </div>

            {/* Book CTA */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                ייעוץ ראשוני
              </p>
              <p className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                קבעו תור ללא עלות
              </p>
              <a
                href={`tel:${clinicData.phone}`}
                className="block text-center py-3 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "var(--accent)", color: "var(--text)" }}
              >
                {clinicData.phone}
              </a>
            </div>

            {/* Related */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)" }}>
                אולי יעניין אתכם גם
              </p>
              <div className="space-y-4">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/premium-3/articles/${a.slug}`}
                    className="group flex gap-3 items-start"
                    aria-label={`קרא מאמר: ${a.title}`}
                  >
                    <div
                      className="rounded-lg flex-shrink-0 mt-0.5"
                      style={{ width: 48, height: 48, backgroundColor: "var(--bg-secondary)" }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold leading-snug group-hover:opacity-60 transition-opacity" style={{ fontFamily: "var(--font-heading)" }}>
                        {a.title}
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{a.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer
        className="py-10 mt-16"
        style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/premium-3" className="hover:opacity-70">בית</Link>
            <Link href="/premium-3/articles" className="hover:opacity-70">מאמרים</Link>
            <Link href="/premium-3/#contact" className="hover:opacity-70">צרו קשר</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
