import Link from "next/link";
import { clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP2 from "@/components/layout/HeaderP2";

const caseStudies = [
  {
    id: 1,
    tag: "ציפויי חרסינה",
    name: "מ.כ., 34",
    quote: "תמיד נמנעתי מלהצטלם. היום אני מחייכת בכל תמונה.",
    before: "שיניים צהובות ולא אחידות",
    after: "8 ציפויי e.max לבן פנינה",
    duration: "3 ביקורים",
    unsplash: "photo-1494790108755-2616b612b977",
  },
  {
    id: 2,
    tag: "השתלות שיניים",
    name: "ד.מ., 52",
    quote: "איבדתי שן בתאונה. השתל נראה ומרגיש כמו שן אמיתית לחלוטין.",
    before: "חור בחיוך לאחר חבלה",
    after: "שתל + כתר זירקוניה",
    duration: "5 חודשים",
    unsplash: "photo-1579684385127-1ef15d508118",
  },
  {
    id: 3,
    tag: "יישור שיניים",
    name: "נ.ל., 27",
    quote: "18 חודשים של טיפול ולא הרגשתי כלום. התוצאה מדהימה.",
    before: "שיניים עקומות ומרוכזות",
    after: "Invisalign — יישור מלא",
    duration: "18 חודשים",
    unsplash: "photo-1559757148-5c350d0d3c56",
  },
  {
    id: 4,
    tag: "הלבנה",
    name: "ר.ס., 41",
    quote: "בא לי קפה בבוקר יותר מדי. לאחר הלבנה — הפסקתי לדאוג.",
    before: "כתמים מקפה ותה",
    after: "הלבנה מקצועית LED",
    duration: "ביקור אחד",
    unsplash: "photo-1612349317150-e413f6a5b16d",
  },
  {
    id: 5,
    tag: "כתרים",
    name: "א.ב., 58",
    quote: "השן הייתה סדוקה ולא יכולתי לנשוך. היום — לא מרגיש הבדל.",
    before: "שן סדוקה אחרי טיפול שורש",
    after: "כתר זירקוניה CEREC",
    duration: "יום אחד",
    unsplash: "photo-1588776814546-1ffbb2e8c3e3",
  },
  {
    id: 6,
    tag: "שיקום מלא",
    name: "ה.פ., 62",
    quote: "לאחר שנים של בעיות — חיוך חדש שנתן לי ביטחון עצמי מחודש.",
    before: "מספר שיניים חסרות + שיניים ישנות",
    after: "4 שתלים + 6 כתרים",
    duration: "8 חודשים",
    unsplash: "photo-1629909613654-28e377c37b09",
  },
];

export default function ResultsPage() {
  return (
    <div
      className="theme-p2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      <HeaderP2 />

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          className="py-20 px-4 sm:px-6"
          style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}>
              סיפורי מטופלים
            </p>
            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-none"
              style={{ fontFamily: "var(--font-heading)" }}>
              תוצאות
            </h1>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section
          className="py-10 px-4 sm:px-6"
          style={{ backgroundColor: "var(--accent)", color: "white" }}
          aria-label="נתוני מרפאה"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 text-center">
            {[
              { num: "2,400+", label: "מטופלים מרוצים" },
              { num: "98%", label: "מדד שביעות רצון" },
              { num: "15+", label: "שנות ניסיון" },
            ].map((s) => (
              <div key={s.num}>
                <div className="text-3xl lg:text-5xl font-black"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {s.num}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-label="מקרי טיפול">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {caseStudies.map((c) => (
              <article
                key={c.id}
                className="flex flex-col"
                style={{ border: "1px solid var(--text)" }}
                aria-labelledby={`case-${c.id}`}
              >
                {/* Image placeholder */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={`https://images.unsplash.com/${c.unsplash}?w=600&q=80&auto=format`}
                    alt={`לאחר טיפול — ${c.tag}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white"
                      style={{ backgroundColor: "var(--accent)" }}>
                      {c.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col"
                  style={{ borderTop: "2px solid var(--text)" }}>
                  <blockquote className="text-sm leading-relaxed italic mb-4 flex-1"
                    style={{ color: "var(--text-muted)" }}>
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>

                  <div className="space-y-3 text-xs" style={{ color: "var(--text-muted)" }}>
                    <div className="flex gap-4">
                      <div>
                        <div className="font-bold uppercase tracking-widest mb-0.5">לפני</div>
                        <div>{c.before}</div>
                      </div>
                      <div>
                        <div className="font-bold uppercase tracking-widest mb-0.5"
                          style={{ color: "var(--accent)" }}>
                          אחרי
                        </div>
                        <div>{c.after}</div>
                      </div>
                    </div>
                    <div className="pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                      <span className="font-bold uppercase">{c.name}</span>
                      <span className="mx-2 opacity-40">·</span>
                      <span>{c.duration}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 px-4 sm:px-6"
          style={{ backgroundColor: "var(--bg-secondary)", borderTop: "2px solid var(--text)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              הסיפור הבא יכול להיות שלכם
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              קבעו ייעוץ חינם ונבנה יחד את תוכנית הטיפול שלכם.
            </p>
            <Link
              href="/premium-2/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--accent)" }}
            >
              קביעת תור עכשיו →
            </Link>
          </div>
        </section>
      </main>

      <footer
        className="py-10"
        style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm opacity-60">
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex gap-6">
            <Link href="/premium-2" className="hover:opacity-70">בית</Link>
            <Link href="/premium-2/treatments" className="hover:opacity-70">טיפולים</Link>
            <Link href="/premium-2/results" className="hover:opacity-70">תוצאות</Link>
            <Link href="/premium-2/contact" className="hover:opacity-70">צרו קשר</Link>
            <Link href="/נגישות" className="hover:opacity-70 underline">נגישות</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
