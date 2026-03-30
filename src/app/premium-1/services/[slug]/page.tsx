import Link from "next/link";
import { services, clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP1 from "@/components/layout/HeaderP1";
import {
  ArrowRight, ArrowLeft,
  Layers,
  Sparkles,
  Zap,
  SlidersHorizontal,
  HeartPulse,
  AlertCircle,
  Award,
  Droplets,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  implants: <Layers size={48} strokeWidth={1} aria-hidden="true" />,
  veneers: <Sparkles size={48} strokeWidth={1} aria-hidden="true" />,
  whitening: <Zap size={48} strokeWidth={1} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={48} strokeWidth={1} aria-hidden="true" />,
  children: <HeartPulse size={48} strokeWidth={1} aria-hidden="true" />,
  emergency: <AlertCircle size={48} strokeWidth={1} aria-hidden="true" />,
  crown: <Award size={48} strokeWidth={1} aria-hidden="true" />,
  hygiene: <Droplets size={48} strokeWidth={1} aria-hidden="true" />,
};

const serviceContent: Record<string, {
  tagline: string;
  description: string;
  stats: { value: string; label: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  images: [string, string, string];
}> = {
  implants: {
    tagline: "הפתרון הקבוע והמוצלח ביותר לשיניים חסרות",
    description: "שתל שיניים הוא פתרון קבוע ואסתטי לשיניים חסרות. השתל מוחדר לתוך עצם הלסת ומשמש כשורש מלאכותי עליו מורכב הכתר. הטיפול נחשב לסטנדרט הזהב בשיקום שיניים — תוצאה שנראית, מרגישה ומתפקדת כמו שן אמיתית.",
    stats: [
      { value: "98%", label: "שיעור הצלחה" },
      { value: "4–8", label: "חודשי טיפול" },
      { value: "כל החיים", label: "אורך חיים" },
    ],
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
    images: [
      "/clinic-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "/smile-hero.jpg",
    ],
  },
  whitening: {
    tagline: "חיוך בהיר ומרהיב — בביקור אחד",
    description: "הלבנת שיניים מקצועית מבהירה שיניים בעד 8 גוונים בביקור אחד. אנחנו משתמשים בג'ל הלבנה מרוכז בשילוב מנורת LED לתוצאה מהירה ובטוחה. הטיפול מותאם לכל מטופל בנפרד — כולל בדיקת התאמה מקדימה.",
    stats: [
      { value: "8", label: "גוונים בהירים יותר" },
      { value: "60", label: "דקות טיפול" },
      { value: "2 שנים", label: "משך התוצאה" },
    ],
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
    images: [
      "/smile-hero.jpg",
      "/clinic-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  veneers: {
    tagline: "החיוך ההוליוודי שתמיד חלמתם עליו",
    description: "ציפויי חרסינה הם קונכיות דקות המוצמדות לפני השן לשיפור צבע, צורה וגודל. הם הפתרון המבוקש ביותר לחיוך הוליוודי — מינימלי-פולשני עם תוצאה דרמטית שנמשכת שנים רבות.",
    stats: [
      { value: "4–8", label: "ציפויים ביחד" },
      { value: "20 שנה", label: "אורך חיים" },
      { value: "0.5mm", label: "עובי הציפוי" },
    ],
    process: [
      { step: "01", title: "שיחת עיצוב", desc: "מיפוי הצפיות, הרצונות והמגבלות. לעיתים נעשית בדיקת 'mock-up' בפה." },
      { step: "02", title: "הכנת השיניים", desc: "הסרת שכבת אמייל דקה (0.5–0.7 מ\"מ) ולקיחת רושם דיגיטלי." },
      { step: "03", title: "ייצור במעבדה", desc: "הציפויים מיוצרים במעבדה מתמחה מחרסינה פרימיום (e.max / Eris)." },
      { step: "04", title: "הדבקה מדויקת", desc: "הדבקה בהרדמה מקומית, כולל כיוון צבע ובדיקת נגיסה." },
    ],
    faqs: [
      { q: "האם ניתן לבצע רק שן אחת?", a: "כן, אולם לרוב מבצעים 4–8 ציפויים יחד ליצירת תוצאה הרמונית." },
      { q: "כמה זמן נמשכים ציפויי חרסינה?", a: "עם טיפול נכון — 15–20 שנה ויותר." },
      { q: "האם זה מכאיב?", a: "הכנת השן נעשית תחת הרדמה. לאחר מכן יתכן רגישות קלה למשך יום-יומיים." },
    ],
    images: [
      "/smile-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "/clinic-hero.jpg",
    ],
  },
  orthodontics: {
    tagline: "יישור שיניים שקוף, נוח ובלתי נראה",
    description: "מגשי יישור שקופים מאפשרים לישר שיניים ללא גשש מתכת, בנוחות מרבית ובאסתטיקה מלאה. כל מגש מייצר תנועה מדויקת של השיניים עד לתוצאה הרצויה — ללא כאב, ללא מבוכה.",
    stats: [
      { value: "12–18", label: "חודשי טיפול" },
      { value: "22h", label: "לבישה ביממה" },
      { value: "כל גיל", label: "מתאים ל" },
    ],
    process: [
      { step: "01", title: "סריקה דיגיטלית", desc: "סריקת הפה ליצירת מודל תלת-ממדי מדויק של השיניים." },
      { step: "02", title: "תכנון הטיפול", desc: "סימולציה ממוחשבת של כל שלבי היישור עד לתוצאה הסופית." },
      { step: "03", title: "ייצור המגשים", desc: "סדרה של מגשים שקופים, מותאמים אישית, המשתנים כל 2 שבועות." },
      { step: "04", title: "מעקב ועידון", desc: "ביקורות קבועות לוודא שהטיפול מתקדם כמתוכנן, כולל עידון סופי." },
    ],
    faqs: [
      { q: "האם צריך ללבוש את המגש כל הזמן?", a: "כן, 22 שעות ביממה. מסירים רק לאכילה ולצחצוב שיניים." },
      { q: "האם מגשי יישור כואבים?", a: "יתכן לחץ קל בימים הראשונים של כל מגש חדש — זה סימן שהטיפול פועל." },
      { q: "מה לאחר הטיפול?", a: "לובשים מגש שמירה בלילה למניעת נסיגה — טיפול פשוט ונוח." },
    ],
    images: [
      "/clinic-hero.jpg",
      "/smile-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  children: {
    tagline: "חוויה נעימה וחיובית לשיני ילדיכם",
    description: "אנחנו מתמחים ברפואת שיניים לילדים בגישה עדינה, סבלנית ומשחקית. המטרה שלנו — שהילד יצא מהמרפאה עם חיוך ותחושת ביטחון, ולא עם חרדה. הצוות שלנו עבר הכשרה מיוחדת בפדיאטריה דנטלית.",
    stats: [
      { value: "גיל 1+", label: "ביקור ראשון" },
      { value: "כל 6", label: "חודשים — ביקור" },
      { value: "100%", label: "גישה ידידותית" },
    ],
    process: [
      { step: "01", title: "היכרות ראשונה", desc: "ביקור היכרות ללא כלים — רק כדי שהילד יכיר את הצוות ואת הסביבה." },
      { step: "02", title: "בדיקה עדינה", desc: "בדיקה עדינה של השיניים, החניכיים ומבנה הפה." },
      { step: "03", title: "ניקוי ומניעה", desc: "ניקוי מקצועי, פלואוריד וציפוי מגן (סילנט) לשיניים חדשות." },
      { step: "04", title: "הנחיות לבית", desc: "הדרכה מותאמת לגיל לצחצוב נכון, תזונה ושמירה על בריאות הפה." },
    ],
    faqs: [
      { q: "מאיזה גיל להתחיל?", a: "מומלץ להביא לביקור ראשון עם הופעת השן הראשונה, בסביבות גיל שנה." },
      { q: "מה אם הילד מפחד?", a: "הצוות שלנו מיומן בעבודה עם ילדים חרדים — נוח, איטי ומבלי ללחוץ." },
      { q: "האם קופת החולים מכסה?", a: "כן — בדיקות, ניקוי וטיפולי מניעה מכוסים לילדים עד גיל 18." },
    ],
    images: [
      "/clinic-hero.jpg",
      "/smile-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  emergency: {
    tagline: "כאב שיניים? אנחנו כאן עכשיו",
    description: "אנחנו מספקים מענה לחירום דנטלי מהיר ויעיל — שיניים שבורות, כאבים חדים, שתל שנפל. צרו קשר ואנחנו נדאג לכם בהקדם האפשרי, גם בשעות הערב ובסופי שבוע.",
    stats: [
      { value: "24/7", label: "זמינות" },
      { value: "<2h", label: "זמן מענה" },
      { value: "כל הקופות", label: "מקבלים" },
    ],
    process: [
      { step: "01", title: "פנייה מיידית", desc: "התקשרו או שלחו הודעת WhatsApp — תקבלו מענה תוך דקות." },
      { step: "02", title: "הערכה בטלפון", desc: "תיאור הבעיה בטלפון וקביעת רמת הדחיפות." },
      { step: "03", title: "ביקור חירום", desc: "אנחנו מפנים טיפול לאותו יום, כולל שיכוך כאב מיידי." },
      { step: "04", title: "פתרון והמשך", desc: "טיפול בשורש הבעיה וקביעת תוכנית המשך בהתאם לצורך." },
    ],
    faqs: [
      { q: "מה נחשב חירום דנטלי?", a: "כאב חד, שן שבורה, נפיחות בפנים, שתל או כתר שנפל, חבלה בפה." },
      { q: "האם אפשר להגיע בלי תור?", a: "כן — במקרי חירום אמיתיים אנחנו מפנים תוך שעות, גם ללא תור קבוע." },
      { q: "האם קופת החולים מכסה?", a: "בדרך כלל כן לחלק מהטיפולים. נבדוק יחד מה מכוסה עבורכם." },
    ],
    images: [
      "/clinic-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "/smile-hero.jpg",
    ],
  },
  crown: {
    tagline: "שיקום שלם לשן פגועה — עם מראה טבעי לחלוטין",
    description: "כתר שיניים הוא כיסוי מלא לשן שנחלשה, נסדקה או עברה טיפול שורש. הכתר משחזר את הצורה, הגודל והתפקוד המלא — ומותאם בצורה מושלמת לשאר השיניים.",
    stats: [
      { value: "15+", label: "שנות עמידות" },
      { value: "2", label: "ביקורים בלבד" },
      { value: "100%", label: "מראה טבעי" },
    ],
    process: [
      { step: "01", title: "הכנת השן", desc: "שחיקה עדינה של השן ולקיחת רושם דיגיטלי מדויק." },
      { step: "02", title: "כתר זמני", desc: "הרכבת כתר זמני להגנת השן בזמן ייצור הכתר הקבוע." },
      { step: "03", title: "ייצור מותאם", desc: "הכתר מיוצר מחרסינה פרמיום, מותאם לצבע ולצורה הטבעית." },
      { step: "04", title: "הרכבה סופית", desc: "הרכבת הכתר הקבוע, בדיקת נגיסה ואחיזה מושלמת." },
    ],
    faqs: [
      { q: "כמה זמן מחזיק כתר?", a: "כתר חרסינה איכותי נמשך 15–20 שנה עם טיפול נכון." },
      { q: "האם הכתר נראה טבעי?", a: "לחלוטין. אנחנו מתאימים את הצבע, הצורה והגודל לשאר השיניים." },
      { q: "האם הכנת השן כואבת?", a: "הטיפול מתבצע תחת הרדמה מקומית. לאחר מכן יתכן אי-נוחות קלה." },
    ],
    images: [
      "/clinic-hero.jpg",
      "/smile-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  hygiene: {
    tagline: "הבסיס לפה בריא — לאורך שנים",
    description: "ניקוי שיניים מקצועי מסיר אבנית ופלאק שצחצוב יומי אינו מצליח להגיע אליהם. טיפול סדיר מונע חניכייתיס, עששת ומחלות פה אחרות — ומשמר את הבריאות הדנטלית לטווח ארוך.",
    stats: [
      { value: "כל 6", label: "חודשים מומלץ" },
      { value: "45", label: "דקות טיפול" },
      { value: "100%", label: "ללא כאב" },
    ],
    process: [
      { step: "01", title: "בדיקת מצב הפה", desc: "בדיקה כוללת של החניכיים, השיניים ורקמות הפה." },
      { step: "02", title: "הסרת אבנית", desc: "שימוש בכלי אולטרסוניק להסרה יסודית של אבנית מעל ומתחת לחניכיים." },
      { step: "03", title: "ניקוי וצחצוב", desc: "ניקוי בין-שיני ומריחת פסטה מחטאת למראה נוצץ ובריא." },
      { step: "04", title: "פלואוריד ועצות", desc: "מריחת פלואוריד לחיזוק האמייל, וייעוץ לשיפור שגרת הניקוי הביתית." },
    ],
    faqs: [
      { q: "כמה פעמים בשנה צריך ניקוי?", a: "לרוב מספיק פעמיים בשנה. לחולי חניכייתיס מומלץ 3–4 פעמים." },
      { q: "האם זה כואב?", a: "ניקוי שיניים מקצועי אינו כואב. אם יש רגישות, נתאים את הטיפול בהתאם." },
      { q: "האם קופת החולים מכסה?", a: "כן, ניקוי שנתי מכוסה על ידי כל קופות החולים." },
    ],
    images: [
      "/clinic-hero.jpg",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "/smile-hero.jpg",
    ],
  },
};

const defaultContent = serviceContent.implants;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return <div>שירות לא נמצא</div>;

  const content = serviceContent[service.id] ?? defaultContent;
  const icon = iconMap[service.id];

  return (
    <div
      className="theme-p1 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      <HeaderP1 />

      {/* ── HERO ── */}
      <section
        className="py-8"
        style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}
        aria-labelledby="service-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Icon + label + title */}
          <div className="mb-2" style={{ color: "var(--accent)" }} aria-hidden="true">
            {icon}
          </div>
          <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
            {clinicData.doctorName} · טיפולים
          </div>
          <h1
            id="service-heading"
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}>
            {service.title}
          </h1>

          {/* Stats — horizontal row */}
          <div className="flex gap-10">
            {content.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0">
                <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                  {stat.value}
                </span>
                <span className="text-sm uppercase tracking-wider" style={{ color: "var(--text)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

        {/* ── ABOUT + GALLERY ── */}
        <section className="mb-24" aria-labelledby="about-heading">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>על הטיפול</span>
              </div>
              <h2 id="about-heading" className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                מה כולל הטיפול?
              </h2>
              <p className="text-base leading-loose" style={{ color: "var(--text-muted)", lineHeight: 1.9 }}>
                {content.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/5] overflow-hidden">
                <img
                  src={content.images[1]}
                  alt={`${service.title} - תמונה 1`}
                  className="w-full h-full object-cover"
                  loading="lazy" />
              </div>
              <div className="aspect-[3/5] overflow-hidden mt-16">
                <img
                  src={content.images[2]}
                  alt={`${service.title} - תמונה 2`}
                  className="w-full h-full object-cover"
                  loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mb-24" aria-labelledby="process-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>תהליך הטיפול</span>
          </div>
          <h2 id="process-heading" className="text-3xl font-bold mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            איך זה עובד
          </h2>
          <div className="grid sm:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {content.process.map((p) => (
              <div key={p.step} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", opacity: 0.25 }}>
                  {p.step}
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-24" aria-labelledby="faq-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>שאלות</span>
          </div>
          <h2 id="faq-heading" className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-heading)" }}>
            שאלות נפוצות
          </h2>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {content.faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none hover:opacity-70">
                  <span className="font-medium" style={{ fontFamily: "var(--font-heading)" }}>{f.q}</span>
                  <span className="text-sm flex-shrink-0 mr-4 text-lg" style={{ color: "var(--accent)" }}>+</span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── PREV / NEXT ── */}
        {(() => {
          const idx = services.findIndex((s) => s.id === service.id);
          const prev = services[(idx - 1 + services.length) % services.length];
          const next = services[(idx + 1) % services.length];
          return (
            <nav aria-label="ניווט בין טיפולים" className="grid grid-cols-2 gap-4">
              {/* Right (RTL) = prev */}
              <Link
                href={`/premium-1/services/${prev.id}`}
                className="p-6 flex items-center justify-between group hover:opacity-80 transition-opacity"
                style={{ border: "1px solid var(--border)" }}>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="font-medium text-sm">{prev.title}</span>
              </Link>
              {/* Left (RTL) = next */}
              <Link
                href={`/premium-1/services/${next.id}`}
                className="p-6 flex items-center justify-between group hover:opacity-80 transition-opacity"
                style={{ border: "1px solid var(--border)" }}>
                <span className="font-medium text-sm">{next.title}</span>
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" style={{ color: "var(--accent)" }} aria-hidden="true" />
              </Link>
            </nav>
          );
        })()}
      </main>

      {/* ── CTA FULL WIDTH ── */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: "var(--text)", color: "white" }}
        aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <div className="mb-2 text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            {clinicData.doctorName}
          </div>
          <h2 id="cta-heading" className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            מוכנים לקבוע תור?
          </h2>
          <p className="mb-10 text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            צרו קשר עכשיו ואנחנו נדאג לכם בהקדם האפשרי
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${clinicData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold hover:opacity-90"
              style={{ backgroundColor: "var(--accent)", color: "white" }}>
              קביעת תור ←
            </a>
            <a
              href={`tel:${clinicData.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold border border-white/30 text-white hover:border-white">
              {clinicData.phone}
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }} className="py-10">
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm"
          style={{ color: "var(--text-muted)" }}>
          <div>{clinicData.name} · {clinicData.address}</div>
          <div className="flex gap-6">
            <Link href="/premium-1" className="hover:opacity-70">בית</Link>
            <Link href="/premium-1/contact" className="hover:opacity-70">צרו קשר</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
