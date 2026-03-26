import Link from "next/link";
import { articles, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP2 from "@/components/layout/HeaderP2";
import { Clock, ArrowRight } from "lucide-react";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug) ?? articles[0];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div
      className="theme-p2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <HeaderP2 />

      <main id="main-content">

        {/* Article hero */}
        <div style={{ backgroundColor: "var(--text)", color: "var(--bg)" }} className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-bold uppercase px-3 py-1"
                style={{ backgroundColor: "var(--accent)", color: "white" }}
              >
                {article.category}
              </span>
              <span className="text-xs flex items-center gap-1 opacity-60">
                <Clock size={11} aria-hidden="true" /> {article.readTime}
              </span>
              <span className="text-xs opacity-40">{article.date}</span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {article.title}
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid lg:grid-cols-3 gap-14">

          {/* ── Main content ── */}
          <article className="lg:col-span-2">

            {/* Hero image placeholder */}
            <div
              className="w-full mb-10"
              style={{ height: 320, backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              aria-hidden="true"
            />

            {/* Body */}
            <div className="space-y-5">
              {article.body.map((block, i) => {
                if (block.type === "intro")
                  return (
                    <p key={i} className="text-lg font-bold leading-relaxed" style={{ color: "var(--text)" }}>
                      {block.text}
                    </p>
                  );
                if (block.type === "h2")
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-extrabold mt-8"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                    >
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
                      className="px-5 py-4 text-sm font-medium"
                      style={{
                        borderRight: "4px solid var(--accent)",
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text)",
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
              className="mt-14 p-8"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                יש שאלות?
              </p>
              <p className="text-2xl font-extrabold mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                נשמח לענות ולעזור
              </p>
              <a
                href={`tel:${clinicData.phone}`}
                className="inline-block px-6 py-3 text-sm font-bold hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "var(--accent)", color: "white" }}
              >
                {clinicData.phone}
              </a>
            </div>

            {/* Back */}
            <div className="mt-8">
              <Link
                href="/premium-2/articles"
                className="inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--accent)] transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <ArrowRight size={14} aria-hidden="true" />
                חזרה לכל המאמרים
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="space-y-10">

            {/* Book CTA */}
            <div style={{ backgroundColor: "var(--accent)" }} className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                ייעוץ ראשוני חינם
              </p>
              <p className="text-lg font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                רוצים לדעת אם הטיפול מתאים לכם?
              </p>
              <a
                href={`tel:${clinicData.phone}`}
                className="block text-center py-3 text-sm font-bold bg-white hover:opacity-90 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                {clinicData.phone}
              </a>
            </div>

            {/* Related */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-4 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  מאמרים נוספים
                </p>
              </div>
              <div className="space-y-5">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/premium-2/articles/${a.slug}`}
                    className="group block border-b pb-4 last:border-b-0"
                    style={{ borderColor: "var(--border)" }}
                    aria-label={`קרא מאמר: ${a.title}`}
                  >
                    <span
                      className="text-xs font-bold uppercase px-2 py-0.5 inline-block mb-2"
                      style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
                    >
                      {a.category}
                    </span>
                    <p className="text-sm font-bold group-hover:text-[var(--accent)] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {a.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{a.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer style={{ backgroundColor: "var(--text)", color: "rgba(255,255,255,0.4)" }} className="py-10">
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
