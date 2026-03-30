import Link from "next/link";
import { articles, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP1 from "@/components/layout/HeaderP1";
import { Clock, ArrowLeft } from "lucide-react";

const categoryColors: Record<string, string> = {
  "השתלות": "#C9A96E",
  "אסתטיקה": "#C9A96E",
  "חירום": "#C9A96E",
  "יישור": "#C9A96E",
  "ילדים": "#C9A96E",
};

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

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
            <li aria-current="page" style={{ color: "var(--accent)" }}>מאמרים</li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="mb-16 pb-12" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            ידע מקצועי
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            מאמרים ומידע מקצועי
          </h1>
          <p className="mt-4 text-base max-w-xl" style={{ color: "var(--text)" }}>
            מידע מקצועי על טיפולי שיניים, אסתטיקה דנטלית ובריאות הפה — שכתב הצוות שלנו עבורכם.
          </p>
        </div>

        {/* Featured article */}
        <Link
          href={`/premium-1/articles/${featured.slug}`}
          className="group block mb-16 pb-16"
          style={{ borderBottom: "1px solid var(--border)" }}
          aria-label={`קרא מאמר: ${featured.title}`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Placeholder image */}
            <div
              className="w-full"
              style={{ height: 280, backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              aria-hidden="true"
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  {featured.category}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>מאמר נבחר</span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold leading-tight mb-4 group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text)" }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <span
                  className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest group-hover:gap-2 transition-all"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  קרא עוד <ArrowLeft size={12} />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/premium-1/articles/${article.slug}`}
              className="group block"
              aria-label={`קרא מאמר: ${article.title}`}
            >
              {/* Placeholder image */}
              <div
                className="w-full mb-5"
                style={{ height: 180, backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: "var(--accent)" }}>
                {article.category}
              </span>
              <h3
                className="text-lg font-bold leading-snug mb-2 group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {article.title}
              </h3>
              <p className="text-base leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text)" }}>
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={10} aria-hidden="true" />
                  {article.readTime}
                </span>
              </div>
            </Link>
          ))}
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
