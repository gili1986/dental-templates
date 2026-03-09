import Link from "next/link";
import { Leaf } from "lucide-react";
import { clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";

const timeline = [
  { year: "2008", title: "סיום תואר ראשון", desc: "בוגרת הפקולטה לרפואת שיניים, אוניברסיטת תל אביב — בהצטיינות." },
  { year: "2010", title: "התמחות", desc: "התמחות בבית חולים קפלן ברפואת שיניים שיקומית ואסתטיקה דנטלית." },
  { year: "2012", title: "פתיחת המרפאה", desc: "יסוד המרפאה בתל אביב עם חזון לרפואת שיניים אנושית ומקצועית." },
  { year: "2016", title: "הסמכה ב-Invisalign", desc: "השלמת הכשרה מוסמכת ב-Invisalign Diamond Provider לאחר טיפול ב-200+ מטופלים." },
  { year: "2019", title: "הכנסת CEREC", desc: "אינטגרציה של מערכת CEREC לייצור כתרים ביום אחד — ראשונה בתל אביב המרכזית." },
  { year: "2024", title: "15+ שנים", desc: "מעל 2,400 מטופלים מרוצים, ומשיכה ללמוד ולהשתפר בכל שנה." },
];

const philosophy = [
  {
    icon: "🌿",
    title: "גישה הוליסטית",
    desc: "בריאות הפה קשורה לבריאות הכללית. אנו מסתכלים על המטופל בשלמות ולא רק על השן הבעייתית.",
  },
  {
    icon: "🤝",
    title: "שותפות אמיתית",
    desc: "כל מטופל מקבל הסבר מלא לפני כל שלב. אנו מאמינים שהחלטות מתקבלות יחד.",
  },
  {
    icon: "✨",
    title: "אסתטיקה טבעית",
    desc: "תוצאות שנראות טבעיות, לא מלאכותיות. החיוך הכי יפה הוא זה שנראה כאילו נולד עם שלך.",
  },
  {
    icon: "🛡️",
    title: "בטיחות קודם",
    desc: "ציוד מעוקר, חומרים בדוקים, ועמידה בכל תקני הבטיחות הישראליים והבינלאומיים.",
  },
];

export default function AboutPage() {
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
              <li><Link href="/premium-3/about" className="text-sm font-medium"
                style={{ color: "var(--accent)" }}>אודות</Link></li>
              <li><Link href="/premium-3/treatments" className="text-sm font-medium hover:opacity-60"
                style={{ color: "var(--text-muted)" }}>טיפולים</Link></li>
              <li><Link href="/premium-3/gallery" className="text-sm font-medium hover:opacity-60"
                style={{ color: "var(--text-muted)" }}>גלריה</Link></li>
            </ul>
          </nav>
          <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-white rounded-full hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}>
            קביעת תור
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          className="py-24 px-4 sm:px-6"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>
                הכירו אותנו
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
                מסע של 15 שנה
                <br />ברפואת שיניים
              </h1>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)", lineHeight: 2 }}>
                {clinicData.doctorBio}
              </p>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
                aria-hidden="true"
              />
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format"
                alt={`ד"ר יעל כהן, רופאת שיניים מומחית`}
                className="relative w-full rounded-2xl object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-20 px-4 sm:px-6" aria-labelledby="philosophy-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="philosophy-heading"
              className="text-3xl font-bold mb-12 text-center"
              style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
              הפילוסופיה שלנו
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophy.map((p) => (
                <div
                  key={p.title}
                  className="p-8 rounded-2xl text-center"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{p.icon}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section
          className="py-20 px-4 sm:px-6"
          style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="timeline-heading"
        >
          <div className="max-w-4xl mx-auto">
            <h2 id="timeline-heading"
              className="text-3xl font-bold mb-12"
              style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
              הדרך שלנו
            </h2>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className="grid grid-cols-[80px_1fr] gap-6 pb-10"
                  style={{
                    borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
                    paddingTop: i > 0 ? "2.5rem" : "0",
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                    {t.year}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{t.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-20 px-4 sm:px-6" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="team-heading"
              className="text-3xl font-bold mb-12"
              style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
              הצוות שלנו
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  name: "ד\"ר יעל כהן",
                  role: "מנהלת המרפאה",
                  spec: "אסתטיקה דנטלית ושיקום",
                  img: "photo-1559839734-2b71ea197ec2",
                },
                {
                  name: "ד\"ר אמיר לוי",
                  role: "רופא שיניים",
                  spec: "השתלות וכירורגיה",
                  img: "photo-1612349317150-e413f6a5b16d",
                },
                {
                  name: "נועה ברקוביץ",
                  role: "היגיינאית דנטלית",
                  spec: "ניקוי מקצועי ומניעה",
                  img: "photo-1494790108755-2616b612b977",
                },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={`https://images.unsplash.com/${member.img}?w=400&q=80&auto=format&fit=crop`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-bold" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                  <p className="text-sm" style={{ color: "var(--accent)" }}>{member.role}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{member.spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 px-4 sm:px-6 text-center"
          style={{ backgroundColor: "var(--primary)", color: "white" }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              נשמח להכיר אתכם
            </h2>
            <p className="text-sm leading-relaxed mb-8 opacity-80">
              ייעוץ ראשוני חינם. בואו ונבנה יחד תוכנית טיפול מותאמת.
            </p>
            <a
              href={`https://wa.me/${clinicData.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-medium bg-white rounded-full hover:opacity-90 transition-opacity"
              style={{ color: "var(--primary)" }}
            >
              קביעת ייעוץ חינם
            </a>
          </div>
        </section>
      </main>

      <footer
        className="py-10"
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
