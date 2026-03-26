import Link from "next/link";
import { articles, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP3 from "@/components/layout/HeaderP3";
import { Clock } from "lucide-react";

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

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
            <li aria-current="page" style={{ color: "var(--accent)" }}>מאמרים</li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="mb-14">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent)" }}
          >
            ידע מקצועי
          </span>
          <h1 className="text-5xl font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            מאמרים ומידע מקצועי
          </h1>
          <p className="text-base max-w-lg" style={{ color: "var(--text-muted)" }}>
            כתבנו עבורכם מדריכים פרקטיים על טיפולי שיניים, טיפים לבריאות הפה ועוד.
          </p>
        </div>

        {/* Featured */}
        <Link
          href={`/premium-3/articles/${featured.slug}`}
          className="group block rounded-2xl overflow-hidden mb-14"
          style={{ border: "1px solid var(--border)", backgroundColor: "white" }}
          aria-label={`קרא מאמר: ${featured.title}`}
        >
          <div className="grid lg:grid-cols-2">
            <div style={{ minHeight: 260, backgroundColor: "var(--bg-secondary)" }} aria-hidden="true" />
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: "var(--bg)", color: "var(--accent)" }}
                >
                  {featured.category}
                </span>
                <h2
                  className="text-2xl font-bold leading-snug mb-3 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} aria-hidden="true" /> {featured.readTime}</span>
                <span
                  className="mr-auto text-xs font-semibold group-hover:opacity-60 transition-opacity"
                  style={{ color: "var(--text)" }}
                  aria-hidden="true"
                >
                  קרא עוד ←
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <h2 className="text-sm font-semibold mb-6 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          כל המאמרים
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/premium-3/articles/${article.slug}`}
              className="group block rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)", backgroundColor: "white" }}
              aria-label={`קרא מאמר: ${article.title}`}
            >
              <div style={{ height: 160, backgroundColor: "var(--bg-secondary)" }} aria-hidden="true" />
              <div className="p-5">
                <span
                  className="inline-block text-xs font-semibold px-3 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: "var(--bg)", color: "var(--accent)" }}
                >
                  {article.category}
                </span>
                <h3
                  className="text-base font-bold leading-snug mb-2 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {article.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={10} aria-hidden="true" /> {article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
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
