import Link from "next/link";
import {
  Layers, Sparkles, Zap, SlidersHorizontal, HeartPulse,
  AlertCircle, Award, Droplets,
} from "lucide-react";
import { clinicData, services } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";

const iconMap: Record<string, React.ReactNode> = {
  implants: <Layers size={32} strokeWidth={2.5} aria-hidden="true" />,
  veneers: <Sparkles size={32} strokeWidth={2.5} aria-hidden="true" />,
  whitening: <Zap size={32} strokeWidth={2.5} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={32} strokeWidth={2.5} aria-hidden="true" />,
  children: <HeartPulse size={32} strokeWidth={2.5} aria-hidden="true" />,
  emergency: <AlertCircle size={32} strokeWidth={2.5} aria-hidden="true" />,
  crown: <Award size={32} strokeWidth={2.5} aria-hidden="true" />,
  hygiene: <Droplets size={32} strokeWidth={2.5} aria-hidden="true" />,
};

/* Full editorial content per service */
const treatmentContent: Record<string, {
  tag: string;
  full: string;
  bullets: string[];
  duration: string;
  price: string;
}> = {
  implants: {
    tag: "שיקום",
    full: "שתל שיניים הוא הפתרון המתקדם ביותר לשיניים חסרות. השתל מוחדר לתוך עצם הלסת, מתמזג עם העצם ומשמש כשורש מלאכותי לכתר. התוצאה: שן אסתטית, תפקודית ועמידה לשנים.",
    bullets: ["סריקה תלת-ממדית לפני הניתוח", "הרדמה מקומית — ללא כאב", "כתר חרסינה מותאם אישית", "אחריות 10 שנה"],
    duration: "4–8 חודשים",
    price: "החל מ-₪4,500",
  },
  veneers: {
    tag: "אסתטיקה",
    full: "ציפויי חרסינה הם קליפות דקות מחרסינה המוצמדות לפני השן. הן משנות צבע, צורה וגודל עם הסרה מינימלית של שכבת האמייל. הבחירה של כוכבי הוליווד — עכשיו גם בתל אביב.",
    bullets: ["e.max / Eris — חרסינה פרמיום", "0.5 מ\"מ עובי בלבד", "צבע מותאם ל-16 גוון", "15–20 שנות חיים"],
    duration: "2–3 ביקורים",
    price: "החל מ-₪2,800 לשן",
  },
  whitening: {
    tag: "הלבנה",
    full: "הלבנה מקצועית בשילוב ג'ל ריכוז גבוה ומנורת LED מאחירה את גוון השיניים בעד 8 דרגות בביקור אחד. מהיר, בטוח ועם תוצאות מיידיות.",
    bullets: ["תוצאות גלויות באותו יום", "עד 8 גוונים בהירים יותר", "ניתן לתחזק בבית", "בטוח לאמייל"],
    duration: "ביקור אחד (90 דק׳)",
    price: "₪790",
  },
  orthodontics: {
    tag: "יישור",
    full: "מגשי יישור שקופים (Invisalign) מאפשרים ליישר שיניים ללא גשרים מתכתיים. המגשים שקופים, נשלפים ונוחים — אף אחד לא ישים לב שאתם בטיפול.",
    bullets: ["שקוף ובלתי נראה", "נשלף לאכילה ולצחצוח", "מותאם דיגיטלית", "מתאים לכל הגילאים"],
    duration: "6–18 חודשים",
    price: "החל מ-₪8,500",
  },
  children: {
    tag: "ילדים",
    full: "מרפאת שיניים ידידותית לילדים. הצוות שלנו מיומן בטיפול בילדים עם חרדת שיניים. הסביבה שעוצבה במיוחד לילדים הופכת כל ביקור לחוויה חיובית.",
    bullets: ["צוות מומחה לילדים", "ציוד מותאם לגיל", "הסברים בגובה העיניים", "פרסים אחרי כל ביקור"],
    duration: "30–60 דקות",
    price: "לפי קופת חולים",
  },
  emergency: {
    tag: "חירום",
    full: "כאב שיניים לא מחכה. אנחנו זמינים לטיפולי חירום ביום-ביום — כולל כאב חד, שן שנשברה, או אבצס. נקבע לכם תור באותו יום.",
    bullets: ["תגובה תוך שעה", "טיפול ביום הפנייה", "ניתן גם בסופ\"ש", "גם לתיירים"],
    duration: "לפי הצורך",
    price: "לפי הטיפול",
  },
  crown: {
    tag: "שיקום",
    full: "כתרים מחרסינה לשיניים שנשברו, סדוקות או עברו טיפול שורש. מיוצרים בטכנולוגיית CEREC — מדידה דיגיטלית, ייצור במקום, התקנה באותו יום.",
    bullets: ["יצור ביום אחד (CEREC)", "חרסינה זירקוניה", "מותאם לצבע טבעי", "ביקורת לאחר שנה"],
    duration: "ביקור אחד",
    price: "החל מ-₪2,200",
  },
  hygiene: {
    tag: "מניעה",
    full: "ניקוי שיניים מקצועי על ידי היגיינאית דנטלית — כולל הסרת אבנית, ליטוש, וזיהוי מוקדם של בעיות כגון חורים, מחלות חניכיים ולחץ לסתות.",
    bullets: ["הסרת אבנית בעל-קולית", "ליטוש וצחצוח מקצועי", "בדיקת חניכיים ו-X-ray", "המלצות לתחזוקה"],
    duration: "60 דקות",
    price: "₪350",
  },
};

export default function TreatmentsPage() {
  return (
    <div
      className="theme-p2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40"
        style={{ backgroundColor: "var(--bg)", borderBottom: "2px solid var(--text)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/premium-2"
            className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: "var(--text)" }}>
            ← חזרה
          </Link>
          <span className="text-base font-black uppercase tracking-widest"
            style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
            {clinicData.doctorName}
          </span>
          <Link href="/premium-2/contact"
            className="hidden sm:inline-flex px-5 py-2 text-sm font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: "var(--accent)" }}>
            תור עכשיו
          </Link>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO STRIP ── */}
        <section
          className="py-20 px-4 sm:px-6"
          style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}>
              כל הטיפולים
            </p>
            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-none"
              style={{ fontFamily: "var(--font-heading)" }}>
              טיפולים
            </h1>
          </div>
        </section>

        {/* ── TREATMENTS MAGAZINE GRID ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-label="רשימת טיפולים">
          <div className="space-y-0">
            {services.map((service, i) => {
              const content = treatmentContent[service.id];
              if (!content) return null;
              const isEven = i % 2 === 0;

              return (
                <article
                  key={service.id}
                  className="grid lg:grid-cols-2 gap-0"
                  style={{ borderBottom: "2px solid var(--text)" }}
                  aria-labelledby={`treatment-${service.id}`}
                >
                  {/* Tag + number col */}
                  <div
                    className={`p-10 lg:p-16 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}
                    style={{ backgroundColor: isEven ? "var(--bg)" : "var(--bg-secondary)" }}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1"
                          style={{ backgroundColor: "var(--accent)", color: "white" }}>
                          {content.tag}
                        </span>
                        <span className="text-4xl font-black opacity-10"
                          style={{ fontFamily: "var(--font-heading)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mb-4" style={{ color: "var(--accent)" }}>
                        {iconMap[service.id]}
                      </div>

                      <h2 id={`treatment-${service.id}`}
                        className="text-3xl lg:text-4xl font-black uppercase mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        {service.title}
                      </h2>
                      <p className="text-sm leading-relaxed max-w-md"
                        style={{ color: "var(--text-muted)" }}>
                        {content.full}
                      </p>
                    </div>

                    <div className="mt-8 flex gap-6 text-sm">
                      <div>
                        <div className="text-xs uppercase tracking-widest mb-1"
                          style={{ color: "var(--text-muted)" }}>
                          משך
                        </div>
                        <div className="font-bold">{content.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest mb-1"
                          style={{ color: "var(--text-muted)" }}>
                          מחיר
                        </div>
                        <div className="font-bold" style={{ color: "var(--accent)" }}>{content.price}</div>
                      </div>
                    </div>
                  </div>

                  {/* Bullets col */}
                  <div
                    className={`p-10 lg:p-16 flex flex-col justify-center ${isEven ? "" : "lg:order-1"}`}
                    style={{ backgroundColor: isEven ? "var(--bg-secondary)" : "var(--bg)" }}
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6"
                      style={{ color: "var(--text-muted)" }}>
                      מה כלול
                    </h3>
                    <ul className="space-y-4">
                      {content.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-center gap-4">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-black text-white"
                            style={{ backgroundColor: "var(--accent)" }}>
                            {j + 1}
                          </span>
                          <span className="text-sm font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/${clinicData.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 self-start inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "var(--text)" }}
                      aria-label={`קביעת תור ל${service.title}`}
                    >
                      קביעת תור →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          className="py-20 px-4 sm:px-6 text-center"
          style={{ backgroundColor: "var(--accent)", color: "white" }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: "var(--font-heading)" }}>
              לא בטוחים מה מתאים לכם?
            </h2>
            <p className="text-sm leading-relaxed mb-8 opacity-80">
              ייעוץ ראשוני ללא עלות. נבדוק את מצב השיניים ונמליץ על הטיפול הנכון.
            </p>
            <Link
              href="/premium-2/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-widest bg-white hover:opacity-90 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              קביעת ייעוץ חינם
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
