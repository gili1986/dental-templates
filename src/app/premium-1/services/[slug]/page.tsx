import Link from "next/link";
import { services, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";

/* Per-service extended content */
const serviceContent: Record<string, {
  description: string;
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  implants: {
    description: "שתל שיניים הוא פתרון קבוע ואסתטי לשיניים חסרות. השתל מוחדר לתוך עצם הלסת ומשמש כשורש מלאכותי עליו מורכב הכתר. הטיפול נחשב לסטנדרט הזהב בשיקום שיניים.",
    process: [
      { step: "01", title: "ייעוץ והדמיה", desc: "סריקה תלת-ממדית של הלסת ותכנון דיגיטלי מדויק של מיקום השתל." },
      { step: "02", title: "החדרת השתל", desc: "הכנסת השתל לעצם הלסת בהליך מינימלי-פולשני תחת הרדמה מקומית." },
      { step: "03", title: "ריפוי ואינטגרציה", desc: "תהליך של 3–6 חודשים בו השתל מתמזג עם העצם (אוסאואינטגרציה)." },
      { step: "04", title: "התקנת הכתר", desc: "מדידה ובניית כתר חרסינה מותאם אישית ומוחדר על השתל." },
    ],
    faqs: [
      { q: "כמה זמן נמשך הטיפול?", a: "מהחדרת השתל ועד הכתר הסופי — בין 4 ל-8 חודשים, תלוי בקצב ריפוי העצם." },
      { q: "האם הטיפול כואב?", a: "הטיפול מתבצע תחת הרדמה מלאה. לאחר מכן יתכן אי-נוחות קלה שמטופלת בנוגדי כאב רגילים." },
      { q: "כמה זמן מחזיק שתל?", a: "שתל איכותי עם טיפול נכון נמשך לכל החיים." },
    ],
  },
  veneers: {
    description: "ציפויי חרסינה הם קונכיות דקות המוצמדות לפני השן לשיפור צבע, צורה וגודל. הם הפתרון המבוקש ביותר לחיוך הוליוודי — מינימלי-פולשני עם תוצאה דרמטית.",
    process: [
      { step: "01", title: "שיחת עיצוב", desc: "מיפוי הצפיות, הרצונות והמגבלות. לעיתים נעשית בדיקת 'mock-up' בפה." },
      { step: "02", title: "הכנת השיניים", desc: "הסרת שכבת אמייל דקה (0.5–0.7 מ\"מ) ולקיחת רושם דיגיטלי." },
      { step: "03", title: "ייצור בחו\"ל", desc: "הציפויים מיוצרים במעבדה מתמחה מחרסינה פרימיום (e.max / Eris)." },
      { step: "04", title: "הדבקה מדויקת", desc: "הדבקה בהרדמה מקומית, כולל כיוון צבע ובדיקת נגיסה." },
    ],
    faqs: [
      { q: "האם ניתן לבצע רק שן אחת?", a: "כן, אולם לרוב מבצעים 4–8 ציפויים יחד ליצירת תוצאה הרמונית." },
      { q: "כמה זמן נמשכים ציפויי חרסינה?", a: "עם טיפול נכון — 15–20 שנה ויותר." },
      { q: "האם זה מכאיב?", a: "הכנת השן נעשית תחת הרדמה. לאחר מכן יתכן רגישות קלה למשך יום-יומיים." },
    ],
  },
  whitening: {
    description: "הלבנת שיניים מקצועית מאחרת שיניים בעד 8 גוונים בביקור אחד. אנחנו משתמשים בג'ל הלבנה מרוכז בשילוב מנורת LED לתוצאה מהירה ובטוחה.",
    process: [
      { step: "01", title: "בדיקת התאמה", desc: "בדיקת בריאות חניכיים ומצב כלל השיניים לוודא שהלבנה מתאימה." },
      { step: "02", title: "הגנה על החניכיים", desc: "מריחת חומר מגן על החניכיים כדי לשמור עליהן במהלך הטיפול." },
      { step: "03", title: "מריחה והפעלה", desc: "מריחת ג'ל הלבנה ריכוז גבוה, הפעלה בעזרת מנורת LED ל-15 דקות × 3." },
      { step: "04", title: "ביסוס הצבע", desc: "הצבע ממשיך להתייצב 48 שעות לאחר הטיפול. ניתן לקבל ג'ל לתחזוקה בבית." },
    ],
    faqs: [
      { q: "כמה זמן נמשכת ההלבנה?", a: "תלוי בהרגלי האכילה והשתייה — בממוצע 1–2 שנים." },
      { q: "האם ציפויים ושיניים מלאכותיות מתלבנות?", a: "לא. הלבנה פועלת על שיניים טבעיות בלבד." },
      { q: "האם יש תופעות לוואי?", a: "יתכנו רגישות קלה לכמה שעות לאחר הטיפול. זו תופעה זמנית ותחלוף." },
    ],
  },
};

/* Fallback for services without detailed content */
const defaultContent = {
  description: "טיפול מקצועי ומתקדם המבוצע על ידי צוות מומחה עם ניסיון רב שנים.",
  process: [
    { step: "01", title: "ייעוץ ראשוני", desc: "שיחה מקיפה לאיסוף מידע והבנת הצרכים." },
    { step: "02", title: "תכנון הטיפול", desc: "בנייה אישית של תכנית טיפול מותאמת." },
    { step: "03", title: "ביצוע הטיפול", desc: "הטיפול מתבצע בסביבה נוחה ומקצועית." },
    { step: "04", title: "מעקב ותחזוקה", desc: "ביקורות מעקב להבטחת תוצאות מיטביות לאורך זמן." },
  ],
  faqs: [
    { q: "מה כולל הטיפול?", a: "הטיפול כולל בדיקה מקיפה, ביצוע ובדיקת מעקב לאחר שבועיים." },
    { q: "כמה זמן לוקח?", a: "משתנה בהתאם לטיפול. נדון בכך בשיחת הייעוץ הראשונה." },
  ],
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);
  if (!service) return <div>שירות לא נמצא</div>;

  const content = serviceContent[service.id] ?? defaultContent;

  return (
    <div
      className="theme-p1 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40"
        style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/premium-1"
            className="text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}>
            → חזרה לדף הבית
          </Link>
          <div style={{ fontFamily: "var(--font-heading)", textAlign: "center" }}>
            <span className="text-base font-bold" style={{ color: "var(--text)" }}>
              {clinicData.doctorName}
            </span>
          </div>
          <Link href="/premium-1/contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2 text-sm font-medium border hover:bg-black hover:text-white transition-colors"
            style={{ borderColor: "var(--text)", color: "var(--text)" }}>
            צרו קשר
          </Link>
        </div>
      </header>

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <li><Link href="/premium-1" className="hover:opacity-70">בית</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--accent)" }}>{service.title}</li>
          </ol>
        </nav>

        {/* Service header */}
        <div className="mb-16 pb-12" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}>
            טיפול
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}>
            {service.title}
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white hover:opacity-90"
              style={{ backgroundColor: "var(--text)" }}>
              קביעת תור לטיפול
            </a>
            <a href={`tel:${clinicData.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium border hover:opacity-70"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}>
              {clinicData.phone}
            </a>
          </div>
        </div>

        {/* Process */}
        <section aria-labelledby="process-heading" className="mb-16">
          <h2 id="process-heading" className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-heading)" }}>
            איך הטיפול מתנהל
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {content.process.map((p) => (
              <div key={p.step} className="flex gap-4 p-6"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                <div className="text-3xl font-bold flex-shrink-0" style={{ color: "var(--accent)", opacity: 0.4, fontFamily: "var(--font-heading)" }}>
                  {p.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-16">
          <h2 id="faq-heading" className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-heading)" }}>
            שאלות נפוצות
          </h2>
          <div className="space-y-4">
            {content.faqs.map((f, i) => (
              <div key={i} className="p-6" style={{ border: "1px solid var(--border)" }}>
                <h3 className="font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other services */}
        <section aria-labelledby="other-services-heading">
          <h2 id="other-services-heading" className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}>
            טיפולים נוספים
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {services.filter((s) => s.id !== service.id).slice(0, 3).map((s) => (
              <Link key={s.id} href={`/premium-1/services/${s.id}`}
                className="p-4 flex items-center justify-between group hover:opacity-80"
                style={{ border: "1px solid var(--border)" }}>
                <span className="text-sm font-medium">{s.title}</span>
                <span className="text-lg group-hover:translate-x-[-4px] transition-transform" style={{ color: "var(--accent)" }}>←</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }} className="py-10 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm"
          style={{ color: "var(--text-muted)" }}>
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex gap-6">
            <Link href="/premium-1" className="hover:opacity-70">בית</Link>
            <Link href="/premium-1/contact" className="hover:opacity-70">צרו קשר</Link>
            <Link href="/נגישות" className="hover:opacity-70 underline">נגישות</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
