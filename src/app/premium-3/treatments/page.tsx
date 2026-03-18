import Link from "next/link";
import { Layers, Sparkles, Zap, SlidersHorizontal, Heart, AlertTriangle, Award, Droplets } from "lucide-react";
import { clinicData, services } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP3 from "@/components/layout/HeaderP3";

const iconMap: Record<string, React.ReactNode> = {
  implants: <Layers size={36} strokeWidth={1.5} aria-hidden="true" />,
  veneers: <Sparkles size={36} strokeWidth={1.5} aria-hidden="true" />,
  whitening: <Zap size={36} strokeWidth={1.5} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={36} strokeWidth={1.5} aria-hidden="true" />,
  children: <Heart size={36} strokeWidth={1.5} aria-hidden="true" />,
  emergency: <AlertTriangle size={36} strokeWidth={1.5} aria-hidden="true" />,
  crown: <Award size={36} strokeWidth={1.5} aria-hidden="true" />,
  hygiene: <Droplets size={36} strokeWidth={1.5} aria-hidden="true" />,
};

const treatmentContent: Record<string, {
  story: string;
  steps: { label: string; text: string }[];
  note: string;
}> = {
  implants: {
    story: "שתל שיניים הוא הפתרון הקרוב ביותר לשן טבעית שניתן להציע. טכנולוגיה שמאפשרת לחיות בלי להרגיש שיש לך שן מלאכותית.",
    steps: [
      { label: "בדיקה ותכנון", text: "סריקה תלת-ממדית לתכנון מדויק של מיקום השתל." },
      { label: "הכנסת השתל", text: "הליך מינימלי-פולשני תחת הרדמה מקומית — ללא כאב." },
      { label: "ריפוי", text: "3–6 חודשים להתמזגות השתל עם עצם הלסת." },
      { label: "כתר סופי", text: "כתר חרסינה מותאם אישית לצבע וצורה." },
    ],
    note: "אחריות 10 שנה. החל מ-₪4,500 לשתל.",
  },
  veneers: {
    story: "ציפויי חרסינה — הדרך היפה ביותר לשנות חיוך בלי לגעת בשן עצמה יותר ממה שצריך. אסתטיקה שמרגישה טבעית.",
    steps: [
      { label: "עיצוב החיוך", text: "שיחה על הציפיות ובדיקת mock-up דיגיטלי." },
      { label: "הכנת השיניים", text: "הסרת שכבת אמייל דקה ולקיחת רושם מדויק." },
      { label: "ייצור", text: "חרסינה e.max מיוצרת במעבדה מתמחה (7–10 ימים)." },
      { label: "הצמדה", text: "הדבקה בהרדמה מקומית, בדיקת צבע ונגיסה." },
    ],
    note: "15–20 שנות חיים עם טיפול נכון. החל מ-₪2,800 לשן.",
  },
  whitening: {
    story: "לפעמים כל מה שצריך הוא בוסטר של בהירות. הלבנה מקצועית מאחירה עד 8 גוונים בביקור אחד.",
    steps: [
      { label: "בדיקת התאמה", text: "בדיקת בריאות השיניים לוודא שהלבנה מתאימה." },
      { label: "הגנה", text: "ריפוד וציפוי חניכיים בחומר מגן." },
      { label: "הלבנה", text: "ג'ל ריכוז גבוה + מנורת LED, 3 × 15 דקות." },
      { label: "ביסוס", text: "הצבע ממשיך להתייצב 48 שעות לאחר הטיפול." },
    ],
    note: "ביקור אחד (90 דקות). ₪790.",
  },
  orthodontics: {
    story: "יישור שיניים שקוף ובלתי נראה עם Invisalign. טיפול שמתאים לחיים — לא להפך.",
    steps: [
      { label: "סריקה דיגיטלית", text: "מיפוי תלת-ממד מלא של השיניים ותכנון הטיפול." },
      { label: "קבלת המגשים", text: "סט מגשים שקופים — מוחלפים כל שבועיים." },
      { label: "מעקב", text: "ביקורת כל 6–8 שבועות לבדיקת התקדמות." },
      { label: "ריטיינר", text: "מגש שמירה לאחר סיום הטיפול." },
    ],
    note: "6–18 חודשים. החל מ-₪8,500.",
  },
  children: {
    story: "הגישה לטיפול שיניים בגיל צעיר מעצבת את הקשר של הילד עם בריאות הפה לכל החיים. אנחנו עושים את זה בכיף.",
    steps: [
      { label: "הכנה מנטלית", text: "שיחה עם הילד לפני הטיפול — הסברים בגובה העיניים." },
      { label: "סביבה ידידותית", text: "ציוד מותאם לגיל ואווירה נינוחה ומשחקית." },
      { label: "הטיפול", text: "בעדינות וסבלנות, עם עצירות לנוח כשצריך." },
      { label: "פרס", text: "בסוף כל ביקור — מדבקות וחיוך גדול." },
    ],
    note: "מגיל 3. לפי קופת חולים.",
  },
  emergency: {
    story: "כאב שיניים לא מחכה לתור. אנחנו זמינים לחירום ביום-יום ומוצאים פתרון מהיר.",
    steps: [
      { label: "פנייה", text: "התקשרות או וואטסאפ — תגובה תוך שעה." },
      { label: "הגעה", text: "תור באותו יום ברוב המקרים." },
      { label: "אבחון", text: "X-ray ואבחון מהיר של הבעיה." },
      { label: "טיפול", text: "פתרון מיידי לכאב, גם בשישי ושבת." },
    ],
    note: "זמינים גם לתיירים. תשלום לפי הטיפול.",
  },
  crown: {
    story: "כתר שן שומר על שן שנפגעה ומחזיר אותה לתפקוד מלא. עם CEREC — הכל ביום אחד.",
    steps: [
      { label: "הכנת השן", text: "גילוף עדין וסריקה דיגיטלית של השן." },
      { label: "עיצוב", text: "תוכנת CEREC מעצבת את הכתר על פי הסריקה." },
      { label: "ייצור", text: "ייצור הכתר בציוד CNC תוך 20–30 דקות." },
      { label: "התקנה", text: "הצמדה, בדיקת נגיסה וכיוון סופי." },
    ],
    note: "ביקור אחד בלבד. החל מ-₪2,200.",
  },
  hygiene: {
    story: "ניקוי שיניים מקצועי פעמיים בשנה הוא ההשקעה הכי טובה שאפשר לעשות לבריאות הפה.",
    steps: [
      { label: "בדיקה", text: "בדיקת X-ray ומיפוי מצב החניכיים." },
      { label: "הסרת אבנית", text: "הסרת אבנית עם מכשיר על-קולי ויד." },
      { label: "ליטוש", text: "ניקוי ולייטוש השטחים לשמירה על בריאות האמייל." },
      { label: "הנחיות", text: "הדרכה אישית לתחזוקה נכונה בבית." },
    ],
    note: "מומלץ פעמיים בשנה. ₪350.",
  },
};

export default function TreatmentsPage() {
  return (
    <div
      className="theme-p3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      <HeaderP3 />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Page header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>כל הטיפולים</p>
          <h1 className="text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}>
            הטיפולים שלנו
          </h1>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
            גישה אישית, חומרים איכותיים ותוצאות שנמשכות שנים. כך אנחנו עובדים.
          </p>
        </div>

        {/* Treatment cards */}
        <div className="space-y-8" aria-label="רשימת טיפולים">
          {services.map((service, i) => {
            const content = treatmentContent[service.id];
            if (!content) return null;

            return (
              <article
                key={service.id}
                className="rounded-3xl overflow-hidden"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                aria-labelledby={`t-${service.id}`}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Icon + title side */}
                  <div
                    className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center gap-6"
                    style={{
                      backgroundColor: i % 2 === 0 ? "var(--primary)" : "var(--primary-light)",
                      color: "white",
                    }}
                  >
                    <div>
                      {iconMap[service.id]}
                    </div>
                    <div>

                      <h2 id={`t-${service.id}`}
                        className="text-2xl lg:text-3xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}>
                        {service.title}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {content.story}
                      </p>
                    </div>
                    <div className="text-xs border-t border-white/20 pt-4">
                      {content.note}
                    </div>
                  </div>

                  {/* Steps side */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-6"
                      style={{ color: "var(--text-muted)" }}>
                      תהליך הטיפול
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {content.steps.map((step, j) => (
                        <div key={j}
                          className="flex gap-3 p-4 rounded-xl"
                          style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                          <div
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ backgroundColor: i % 2 === 0 ? "var(--primary)" : "var(--primary-light)" }}
                          >
                            {j + 1}
                          </div>
                          <div>
                            <div className="text-sm font-bold">{step.label}</div>
                            <div className="text-sm leading-relaxed"
                              style={{ color: "var(--text-muted)" }}>
                              {step.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${clinicData.whatsapp}`}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: i % 2 === 0 ? "var(--primary)" : "var(--primary-light)" }}
                      aria-label={`קביעת תור ל${service.title}`}
                    >
                      קביעת תור לטיפול זה
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <footer
        className="py-10 mt-20"
        style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm"
          style={{ color: "var(--text-muted)" }}>
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex flex-wrap gap-4">
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
