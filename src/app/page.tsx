"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

// ─── Color System · Primary #4182DC ───────────────────────────────────────────
const P = {
  50:  "#EBF2FF",
  100: "#D3E5FA",
  200: "#A8CCF5",
  300: "#6FA8EB",
  500: "#4182DC",
  700: "#2A5CB8",
  900: "#1A3D7A",
} as const;

const N = {
  950: "#0D1F3C",
  800: "#1E2D42",
  600: "#3D4F65",
  400: "#7A8FA6",
  200: "#B8C6D4",
  100: "#DDE5F0",
  50:  "#F4F7FD",
} as const;

const templates = [
  {
    id: "basic-1",
    name: "B1 — Clean Trust",
    nameHe: "נקי ומקצועי",
    persona: "למרפאה שרוצה מראה קלאסי ומקצועי",
    tier: "basic",
    tierLabel: "בסיסי",
    color: "#1B4F8A",
    accent: "#4FC3F7",
    bg: "#F0F7FF",
    dark: false,
    structure: "דף אחד",
    fit: "רופאים שרוצים להקרין אמינות ומקצועיות",
    sections: ["hero", "services", "about", "reviews", "faq", "contact"],
    sectionColors: ["#1B4F8A", "#F0F7FF", "#ffffff", "#F0F7FF", "#ffffff", "#1B4F8A"],
    preview: { navBg: "#ffffff", navDark: false, heroBg: "#EEF4FB", imgBg: "#FFFFFF", textHi: "#1B4F8A", textLo: "#C8D8E8", cta: "#1B4F8A" },
  },
  {
    id: "basic-2",
    name: "B2 — Warm Approachable",
    nameHe: "חם ומזמין",
    persona: "לרופא שבונה קשר אישי עם המטופל",
    tier: "basic",
    tierLabel: "בסיסי",
    color: "#C4704A",
    accent: "#E8907A",
    bg: "#FDF3EC",
    dark: false,
    structure: "דף אחד",
    fit: "מרפאות משפחתיות עם דגש על קשר אישי",
    sections: ["hero", "about", "services", "reviews", "contact"],
    sectionColors: ["#C4704A", "#FDF3EC", "#ffffff", "#FDF3EC", "#C4704A"],
    preview: { navBg: "#FFFDF9", navDark: false, heroBg: "#FBF0E8", imgBg: "#FFFFFF", textHi: "#C4704A", textLo: "#DFC4B0", cta: "#C4704A" },
  },
  {
    id: "basic-3",
    name: "B3 — Clinical High-Tech",
    nameHe: "טכנולוגי ומתקדם",
    persona: "לקליניקה שמדגישה ציוד וטכנולוגיה מתקדמת",
    tier: "basic",
    tierLabel: "בסיסי",
    color: "#0D1B2A",
    accent: "#00E5FF",
    bg: "#0F2035",
    dark: true,
    structure: "דף אחד",
    fit: "קליניקות שמדגישות ציוד וטכנולוגיה מתקדמת",
    sections: ["hero", "tech", "services", "reviews", "contact"],
    sectionColors: ["#0D1B2A", "#0a1929", "#0F2035", "#0a1929", "#0D1B2A"],
    preview: { navBg: "#0D1B2A", navDark: true, heroBg: "#0D1B2A", imgBg: "#162840", textHi: "#00E5FF", textLo: "#1E3F5A", cta: "#00E5FF" },
  },
  {
    id: "premium-1",
    name: "P1 — Nordic Minimal Luxury",
    nameHe: "נורדי מינימליסטי",
    persona: "לרופא עם מוניטין וקליניקת יוקרה",
    tier: "premium",
    tierLabel: "מתקדם",
    color: "#2C2C2C",
    accent: "#C9A96E",
    bg: "#F2F0EB",
    dark: false,
    structure: "מולטי-פייג׳",
    fit: "קליניקות יוקרה ורופאים עם מוניטין בינלאומי",
    sections: ["home", "services", "about", "contact"],
    sectionColors: ["#2C2C2C", "#F2F0EB", "#ffffff", "#2C2C2C"],
    preview: { navBg: "#FAFAF8", navDark: false, heroBg: "#F2F0EB", imgBg: "#E2DDD4", textHi: "#2C2C2C", textLo: "#C8C2B8", cta: "#C9A96E" },
  },
  {
    id: "premium-2",
    name: "P2 — Bold Editorial",
    nameHe: "אדיטוריאל נועז",
    persona: "לרופא שרוצה לבלוט ולהוביל",
    tier: "premium",
    tierLabel: "מתקדם",
    color: "#1A1A1A",
    accent: "#FF4D4D",
    bg: "#F8F8F8",
    dark: false,
    structure: "מולטי-פייג׳",
    fit: "רופאים שרוצים להיות מובילים שוק ובולטים",
    sections: ["home", "treatments", "results", "contact"],
    sectionColors: ["#1A1A1A", "#F8F8F8", "#ffffff", "#1A1A1A"],
    preview: { navBg: "#ffffff", navDark: false, heroBg: "#F5F5F5", imgBg: "#E0E0E0", textHi: "#1A1A1A", textLo: "#C8C8C8", cta: "#FF4D4D" },
  },
  {
    id: "premium-3",
    name: "P3 — Warm Organic Premium",
    nameHe: "אורגני פרמיום",
    persona: "לרופא שבונה מותג אישי וסיפור",
    tier: "premium",
    tierLabel: "מתקדם",
    color: "#4A3728",
    accent: "#D4B896",
    bg: "#F0E8DE",
    dark: false,
    structure: "מולטי-פייג׳",
    fit: "רופאים שמספרים סיפור ומבנים קשר עמוק עם מטופלים",
    sections: ["home", "about", "treatments", "gallery"],
    sectionColors: ["#4A3728", "#F0E8DE", "#ffffff", "#4A3728"],
    preview: { navBg: "#FAF6F1", navDark: false, heroBg: "#EDE3D8", imgBg: "#D8C8B4", textHi: "#4A3728", textLo: "#C4B09A", cta: "#4A3728" },
  },
];

const included = [
  { icon: "circle-flags:il",        label: "עברית מלאה RTL"         },
  { icon: "ph:device-mobile-fill",  label: "מותאם למובייל"          },
  { icon: "ph:wheelchair-fill",     label: "נגישות SI 5568"          },
  { icon: "ph:whatsapp-logo",       label: "כפתור WhatsApp",  color: "#25D366" },
  { icon: "ph:first-aid-kit-fill",  label: "לוגואי קופות חולים"     },
  { icon: "ph:star-fill",           label: "ביקורות מטופלים", color: "#F59E0B" },
  { icon: "ph:question-fill",       label: "שאלות נפוצות"           },
  { icon: "ph:map-trifold-fill",    label: "מפה וניווט"             },
  { icon: "ph:magnifying-glass-fill", label: "בסיס SEO מוכן"       },
  { icon: "ph:lock-key-fill",       label: "SSL + HTTPS"            },
];

const stats = [
  { number: "73%", label: "מהמטופלים מחפשים רופא שיניים גוגל לפני שמתקשרים" },
  { number: "8 שנ׳", label: "ממוצע גיל האתרים של רופאי שיניים בישראל" },
  { number: "3 ימים", label: "הזמן שלוקח לנו להעלות את האתר שלך לאוויר" },
];

const steps = [
  {
    num: "01",
    icon: "ph:cursor-click-fill",
    title: "בוחרים תבנית",
    desc: "עיינו ב-6 התבניות, לחצו על כל אחת לדמו חי, ובחרו את מה שמרגיש נכון לקליניקה שלכם. אפשר גם לשלב בין תבניות.",
  },
  {
    num: "02",
    icon: "ph:paper-plane-tilt-fill",
    title: "שולחים תכנים",
    desc: "לוגו, תמונות, טקסט קצר. שולחים ב-WhatsApp ואנחנו מעלים הכל לאתר.",
  },
  {
    num: "03",
    icon: "ph:rocket-launch-fill",
    title: "עולים לאוויר",
    desc: "האתר שלכם עולה חי עם דומיין, SSL ואופטימיזציה לגוגל. מתחילים לקבל מטופלים.",
  },
];

const faqs = [
  {
    q: "כמה זמן לוקח להעלות את האתר?",
    a: "ברגע שמקבלים ממך לוגו, טקסטים ותמונות, האתר עולה לאוויר תוך 3-5 ימי עסקים.",
  },
  {
    q: "האם אני יכול לשנות את הטקסטים לאחר מכן?",
    a: "כן. לאחר ההשקה תקבל גישה למערכת ניהול פשוטה לעדכון תכנים, או שנעדכן עבורך בתשלום שעתי.",
  },
  {
    q: "מה ההבדל בין בסיסי למתקדם?",
    a: "בסיסי הוא דף אחד ארוך עם כל המידע, מושלם להשקה מהירה. מתקדם כולל דפים נפרדים לכל טיפול, גלריה תוצאות ו-SEO חזק לחיפושים ספציפיים.",
  },
  {
    q: "האם האתר מופיע בגוגל?",
    a: "כן. כל תבנית בנויה עם בסיס SEO טכני — מבנה כותרות, מהירות טעינה, ו-sitemap. לתוצאות גוגל מתקדמות יש לנו חבילת SEO נפרדת.",
  },
  {
    q: "יש עלות חודשית?",
    a: "יש עלות אחסון חודשית קטנה. עלות ההקמה היא חד-פעמית. נשוחח על כל הפרטים ב-WhatsApp.",
  },
];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function TemplatePreview({ t }: { t: typeof templates[0] }) {
  const p = t.preview;
  const pill = 999;

  return (
    <div style={{ width: "100%", backgroundColor: "white", padding: "8px" }}>
      <div style={{
        height: "152px",
        backgroundColor: p.heroBg,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "12px 14px",
        gap: "12px",
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: "9px" }}>
          <div style={{ width: "36px", height: "10px", borderRadius: pill, backgroundColor: p.cta }} />
          <div style={{ width: "70%", height: "12px", borderRadius: pill, backgroundColor: p.textLo }} />
          <div style={{ width: "55%", height: "12px", borderRadius: pill, backgroundColor: p.textLo, opacity: 0.7 }} />
          <div style={{ width: "52px", height: "20px", borderRadius: pill, backgroundColor: p.cta, marginTop: "2px" }} />
        </div>
        <div style={{ width: "38%", height: "108px", borderRadius: "10px", backgroundColor: p.imgBg, flexShrink: 0 }} />
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        border: `1px solid ${N[100]}`,
        overflow: "hidden",
        transition: "box-shadow 0.2s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "right",
        }}
      >
        <span style={{ fontSize: "0.88rem", fontWeight: "700", color: N[950], lineHeight: 1.4, fontFamily: "'Google Sans', sans-serif" }}>{q}</span>
        <Icon
          icon={open ? "ph:minus-bold" : "ph:plus-bold"}
          width={18} height={18}
          style={{ flexShrink: 0, color: P[500], transition: "transform 0.2s" }}
        />
      </button>
      {open && (
        <div style={{ padding: "0 20px 16px", fontSize: "0.82rem", color: N[600], lineHeight: 1.7 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div dir="rtl" style={{ backgroundColor: N[50], minHeight: "100vh", fontFamily: "'Google Sans', sans-serif" }}>
      <style>{`
        @font-face { font-family: 'Google Sans'; src: url('/fonts/GoogleSans-Regular.ttf') format('truetype'); font-weight: 400; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Google Sans'; src: url('/fonts/GoogleSans-Medium.ttf') format('truetype'); font-weight: 500; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Google Sans'; src: url('/fonts/GoogleSans-SemiBold.ttf') format('truetype'); font-weight: 600; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Google Sans'; src: url('/fonts/GoogleSans-Bold.ttf') format('truetype'); font-weight: 700 900; font-style: normal; font-display: swap; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Google Sans', sans-serif; }
        .btn-wa { transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease; }
        .btn-wa:hover { background-color: #25D366 !important; color: white !important; transform: translateY(-1px); }
        .template-card { transition: all 0.22s ease; }
        .template-card:hover { transform: translateY(-4px); }
        .choose-btn { transition: all 0.18s ease; }
        .choose-btn:hover { background-color: #25D366 !important; color: white !important; }
        .choose-btn:hover .choose-icon { color: white !important; }
      `}</style>

      {/* ─── Header ─── */}
      <header style={{
        backgroundColor: "white",
        borderBottom: `1px solid ${N[100]}`,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: "1160px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/dentes-logo.svg" width={40} height={36} alt="DentalSites logo" style={{ flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: "800", color: N[950], lineHeight: 1 }}>DentalSites</div>
              <div style={{ fontSize: "0.65rem", color: N[400], lineHeight: 1 }}>אתרים לרופאי שיניים</div>
            </div>
          </div>
          <a
            href="https://wa.me/972500000000"
            className="btn-wa"
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              backgroundColor: "#25D366", color: "white",
              padding: "8px 16px", borderRadius: "20px",
              fontSize: "0.8rem", fontWeight: "700", textDecoration: "none",
            }}
          >
            <WhatsAppIcon size={16} />
            <span>דברו איתנו</span>
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "72px 24px 64px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            backgroundColor: "rgba(26,61,122,0.08)",
            border: "1px solid rgba(26,61,122,0.15)",
            borderRadius: "20px", padding: "4px 16px",
            fontSize: "0.72rem", fontWeight: "600", marginBottom: "20px",
            letterSpacing: "0.03em", color: "#1A3D7A",
          }}>
            <Icon icon="ph:seal-check-fill" width={13} height={13} />
            <span>6 תבניות מקצועיות · עברית מלאה · נגישות SI 5568</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 4.5vw, 3.1rem)",
            fontWeight: "900",
            lineHeight: 1.15,
            marginBottom: "20px",
            fontFamily: "'Google Sans', sans-serif",
            color: "#0D1F3C",
          }}>
            בחרו את העיצוב שמדבר<br />למרפאה שלכם.
          </h1>

          <p style={{ fontSize: "1rem", color: "#3D5A8A", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto 28px" }}>
            73% מהמטופלים מחפשים רופא שיניים בגוגל לפני שמתקשרים.
            בחר תבנית, שלח תכנים, ואנחנו מעלים אותך לאוויר.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#templates"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: P[500], color: "white",
                padding: "12px 24px", borderRadius: "24px",
                fontSize: "0.9rem", fontWeight: "700", textDecoration: "none",
                boxShadow: `0 4px 16px ${P[500]}55`,
              }}
            >
              <Icon icon="ph:eye-fill" width={18} height={18} />
              <span>לצפייה בתבניות</span>
            </a>
            <a
              href="https://wa.me/972500000000"
              className="btn-wa"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "white", color: N[950],
                border: `1px solid ${N[100]}`,
                padding: "12px 24px", borderRadius: "24px",
                fontSize: "0.9rem", fontWeight: "700", textDecoration: "none",
              }}
            >
              <WhatsAppIcon size={18} />
              <span>יש לי שאלה</span>
            </a>
          </div>
        </div>
      </section>


      {/* ─── How It Works ─── */}
      <section style={{ backgroundColor: "white", padding: "72px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{
              display: "inline-block", fontSize: "0.72rem", fontWeight: "700",
              color: P[500], backgroundColor: P[50],
              padding: "4px 14px", borderRadius: "10px", marginBottom: "12px", letterSpacing: "0.05em",
            }}>
              איך זה עובד
            </div>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: N[950], fontFamily: "'Google Sans', sans-serif" }}>
              3 שלבים והאתר שלך באוויר
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", justifyContent: "center", gap: "0" }}>
            {steps.map((step, i) => (
              <React.Fragment key={step.num}>
                {/* Card */}
                <div style={{
                  flex: "1 1 220px", maxWidth: "260px",
                  backgroundColor: N[50],
                  border: `1.5px solid ${N[100]}`,
                  borderRadius: "16px",
                  padding: "28px 24px",
                  display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px",
                }}>
                  {/* Number */}
                  <span style={{
                    fontSize: "2.2rem", fontWeight: "900", color: P[200],
                    fontFamily: "'Google Sans', sans-serif", lineHeight: 1,
                  }}>{step.num}</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: "800", color: N[950], fontFamily: "'Google Sans', sans-serif", margin: 0 }}>{step.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: N[600], lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div key={`arrow-${i}`} style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "0 8px", flexShrink: 0, color: P[300], alignSelf: "center",
                  }}>
                    <Icon icon="ph:arrow-left-bold" width={24} height={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Template Grid ─── */}
      <section id="templates" style={{ maxWidth: "1160px", margin: "0 auto", padding: "72px 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-block", fontSize: "0.72rem", fontWeight: "700",
            color: P[500], backgroundColor: P[50],
            padding: "4px 14px", borderRadius: "10px", marginBottom: "12px", letterSpacing: "0.05em",
          }}>
            6 תבניות מוכנות
          </div>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: N[950], fontFamily: "'Google Sans', sans-serif", marginBottom: "8px" }}>
            צפו בדמו ובחרו את העיצוב המתאים לכם
          </h2>
          <p style={{ fontSize: "0.85rem", color: N[400], maxWidth: "480px", margin: "0 auto" }}>
            לחצו על כל תבנית לצפייה מלאה. אפשר לשלב בין התבניות, לחצו על "בחר תבנית זו" להמשך תהליך בוואטסאפ.
          </p>
        </div>

        {/* Tier divider — Basic */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: "700", color: P[500],
            backgroundColor: P[50], padding: "4px 14px", borderRadius: "10px", whiteSpace: "nowrap",
          }}>
            בסיסי - דף אחד
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: N[100] }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
          gap: "24px",
          marginBottom: "40px",
        }}>
          {templates.filter(t => t.tier === "basic").map((t) => (
            <div
              key={t.id}
              className="template-card"
              onMouseEnter={() => setHoveredId(t.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                overflow: "hidden",
                border: `2px solid transparent`,
                boxShadow: hoveredId === t.id
                  ? `0 16px 48px rgba(65,130,220,0.16)`
                  : `0 2px 8px rgba(65,130,220,0.08)`,
              }}
            >
              <Link href={`/${t.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <TemplatePreview t={t} />
                <div style={{ padding: "10px 16px 8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                    <span style={{
                      fontSize: "0.6rem", fontWeight: "700", padding: "2px 8px", borderRadius: "8px",
                      backgroundColor: P[50], color: P[500],
                    }}>{t.tierLabel}</span>
                    <span style={{
                      fontSize: "0.6rem", fontWeight: "600", padding: "2px 8px", borderRadius: "8px",
                      backgroundColor: N[50], color: N[400],
                      display: "inline-flex", alignItems: "center", gap: "4px",
                    }}>
                      <Icon icon="ph:file-text-fill" width={11} height={11} />
                      {t.structure}
                    </span>
                    <div style={{ marginRight: "auto", display: "flex", gap: "4px" }}>
                      <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: t.color }} />
                      <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: t.accent }} />
                    </div>
                  </div>
                  <h2 style={{ fontSize: "1.05rem", fontWeight: "800", color: N[950], marginBottom: "2px", fontFamily: "'Google Sans', sans-serif" }}>
                    {t.nameHe}
                  </h2>
                  <p style={{ fontSize: "0.75rem", color: N[400], marginBottom: "14px", lineHeight: 1.4 }}>
                    {t.persona}
                  </p>
                </div>
              </Link>

              {/* CTA row */}
              <div style={{
                padding: "0 16px 16px",
                display: "flex", gap: "8px",
              }}>
                <Link
                  href={`/${t.id}`}
                  style={{
                    flex: 1, textAlign: "center",
                    padding: "9px 12px", borderRadius: "10px",
                    fontSize: "0.78rem", fontWeight: "600",
                    backgroundColor: N[50], color: N[600],
                    textDecoration: "none", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                  }}
                >
                  <Icon icon="ph:eye-fill" width={14} height={14} />
                  צפה בדמו
                </Link>
                <a
                  href={`https://wa.me/972500000000?text=${encodeURIComponent(`היי! רוצה לשמוע על תבנית ״${t.nameHe}״ לאתר המרפאה שלי`)}`}
                  className="choose-btn"
                  style={{
                    flex: 2, textAlign: "center",
                    padding: "9px 12px", borderRadius: "10px",
                    fontSize: "0.78rem", fontWeight: "700",
                    backgroundColor: "#f0fdf4", color: "#16a34a",
                    textDecoration: "none", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  }}
                >
                  <span className="choose-icon" style={{ color: "#16a34a" }}>
                    <WhatsAppIcon size={14} />
                  </span>
                  בחר תבנית זו
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tier divider — Premium */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: "700", color: "#F06A10",
            backgroundColor: "#FFF3E8", padding: "4px 14px", borderRadius: "10px", whiteSpace: "nowrap",
          }}>
            מתקדם - מולטי-פייג׳
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: N[100] }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
          gap: "24px",
          marginBottom: "72px",
        }}>
          {templates.filter(t => t.tier === "premium").map((t) => (
            <div
              key={t.id}
              className="template-card"
              onMouseEnter={() => setHoveredId(t.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                overflow: "hidden",
                border: `2px solid transparent`,
                boxShadow: hoveredId === t.id
                  ? `0 16px 48px rgba(240,106,16,0.14)`
                  : `0 2px 8px rgba(65,130,220,0.08)`,
              }}
            >
              <Link href={`/${t.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <TemplatePreview t={t} />
                <div style={{ padding: "10px 16px 8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                    <span style={{
                      fontSize: "0.6rem", fontWeight: "700", padding: "2px 8px", borderRadius: "8px",
                      backgroundColor: "#FFF3E8", color: "#F06A10",
                    }}>{t.tierLabel}</span>
                    <span style={{
                      fontSize: "0.6rem", fontWeight: "600", padding: "2px 8px", borderRadius: "8px",
                      backgroundColor: N[50], color: N[400],
                      display: "inline-flex", alignItems: "center", gap: "4px",
                    }}>
                      <Icon icon="ph:stack-fill" width={11} height={11} />
                      {t.structure}
                    </span>
                    <div style={{ marginRight: "auto", display: "flex", gap: "4px" }}>
                      <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: t.color }} />
                      <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: t.accent }} />
                    </div>
                  </div>
                  <h2 style={{ fontSize: "1.05rem", fontWeight: "800", color: N[950], marginBottom: "2px", fontFamily: "'Google Sans', sans-serif" }}>
                    {t.nameHe}
                  </h2>
                  <p style={{ fontSize: "0.75rem", color: N[400], marginBottom: "14px", lineHeight: 1.4 }}>
                    {t.persona}
                  </p>
                </div>
              </Link>
              <div style={{ padding: "0 16px 16px", display: "flex", gap: "8px" }}>
                <Link
                  href={`/${t.id}`}
                  style={{
                    flex: 1, textAlign: "center",
                    padding: "9px 12px", borderRadius: "10px",
                    fontSize: "0.78rem", fontWeight: "600",
                    backgroundColor: N[50], color: N[600],
                    textDecoration: "none", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                  }}
                >
                  <Icon icon="ph:eye-fill" width={14} height={14} />
                  צפה בדמו
                </Link>
                <a
                  href={`https://wa.me/972500000000?text=${encodeURIComponent(`היי! רוצה לשמוע על תבנית ״${t.nameHe}״ לאתר המרפאה שלי`)}`}
                  className="choose-btn"
                  style={{
                    flex: 2, textAlign: "center",
                    padding: "9px 12px", borderRadius: "10px",
                    fontSize: "0.78rem", fontWeight: "700",
                    backgroundColor: "#f0fdf4", color: "#16a34a",
                    textDecoration: "none", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  }}
                >
                  <span className="choose-icon" style={{ color: "#16a34a" }}>
                    <WhatsAppIcon size={14} />
                  </span>
                  בחר תבנית זו
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ─── What's Included ─── */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "900", color: N[950], fontFamily: "'Google Sans', sans-serif", marginBottom: "6px" }}>
              מה כלול בכל תבנית
            </h2>
            <p style={{ fontSize: "0.82rem", color: N[400] }}>הכל כלול, ללא תוספות</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {included.map((f, i) => (
              <div key={i} style={{
                backgroundColor: "white", borderRadius: "10px", padding: "12px 16px",
                display: "flex", alignItems: "center", gap: "8px",
                border: `1px solid ${N[100]}`, minWidth: "190px",
              }}>
                <Icon icon={f.icon} width={18} height={18} style={{ flexShrink: 0, color: f.color ?? P[500] }} />
                <span style={{ fontSize: "0.8rem", fontWeight: "600", color: N[800], flex: 1 }}>{f.label}</span>
                <Icon icon="ph:check-bold" width={14} height={14} style={{ flexShrink: 0, color: "#22C55E" }} />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Comparison ─── */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "900", color: N[950], fontFamily: "'Google Sans', sans-serif", marginBottom: "6px" }}>
              בסיסי או מתקדם?
            </h2>
            <p style={{ fontSize: "0.82rem", color: N[400] }}>בחרו את הרמה שמתאימה לשלב שלכם עכשיו</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1060px] mx-auto">
            {/* בסיסי */}
            <div style={{ backgroundColor: "white", borderRadius: "14px", padding: "24px", border: `1px solid ${N[100]}`, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: "700", color: P[500], backgroundColor: P[50], display: "inline-block", padding: "4px 12px", borderRadius: "10px", marginBottom: "8px" }}>בסיסי</div>
              <p style={{ fontSize: "0.72rem", color: N[400], marginBottom: "16px" }}>להשקה מהירה ומקצועית</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                {["דף בית אחד רציף (one-pager)", "6–8 סקשנים מובנים", "3 עיצובים שונים לבחירה", "מושלם להתחלה", "עלות הטמעה נמוכה יותר"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: N[600] }}>
                    <Icon icon="ph:check-bold" width={14} height={14} style={{ color: P[500], flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* מתקדם */}
            <div style={{ backgroundColor: "white", borderRadius: "14px", padding: "24px", border: `2px solid #FFB88A`, display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ position: "absolute", top: "-11px", right: "20px", fontSize: "0.65rem", fontWeight: "700", backgroundColor: "#F06A10", color: "white", padding: "3px 10px", borderRadius: "8px" }}>
                מומלץ לרוב הרופאים
              </div>
              <div style={{ fontSize: "0.7rem", fontWeight: "700", color: "#F06A10", backgroundColor: "#FFF3E8", display: "inline-block", padding: "4px 12px", borderRadius: "10px", marginBottom: "8px" }}>מתקדם</div>
              <p style={{ fontSize: "0.72rem", color: N[400], marginBottom: "16px" }}>לקליניקה שצומחת ורוצה SEO</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                {["מולטי-פייג׳ עם דפים נפרדים", "דפי שירות / טיפולים עצמאיים", "בלוג מאמרים מקצועיים", "עדכוני תוכן לפי דרישה", "גלריה לפני-אחרי + סיפור הרופא", "SEO חזק לטיפולים ספציפיים"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: N[600] }}>
                    <Icon icon="ph:diamond-fill" width={12} height={12} style={{ color: "#F06A10", flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* מותאם אישית */}
            <div style={{ background: `linear-gradient(145deg, ${N[950]} 0%, ${P[900]} 100%)`, borderRadius: "14px", padding: "24px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: "700", color: P[200], backgroundColor: "rgba(255,255,255,0.1)", display: "inline-block", padding: "4px 12px", borderRadius: "10px", marginBottom: "8px" }}>מותאם אישית</div>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginBottom: "16px" }}>בנוי בשבילך מאפס</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                {["עיצוב ייחודי, לא קיים בשום מרפאה אחרת", "מבנה דפים לפי הצרכים שלך", "הזמנת תורים, CRM, טפסים", "SEO מותאם לנישה ואזור", "ליווי צמוד מהרעיון ועד השקה"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "rgba(255,255,255,0.8)" }}>
                    <Icon icon="ph:star-four-fill" width={12} height={12} style={{ color: P[300], flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/972500000000" className="btn-wa" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                backgroundColor: "#25D366", color: "white",
                padding: "10px 16px", borderRadius: "20px",
                fontSize: "0.82rem", fontWeight: "700", textDecoration: "none", marginTop: "20px",
              }}>
                <WhatsAppIcon size={16} />
                <span>דברו איתנו על הפרויקט</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── FAQ ─── */}
        <div style={{ maxWidth: "720px", margin: "0 auto 72px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "900", color: N[950], fontFamily: "'Google Sans', sans-serif", marginBottom: "6px" }}>
              שאלות נפוצות
            </h2>
            <p style={{ fontSize: "0.82rem", color: N[400] }}>תשובות לשאלות שכולם שואלים</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

      </section>

      {/* ─── Bottom CTA ─── */}
      <section style={{
        background: `linear-gradient(135deg, ${P[900]} 0%, ${P[500]} 100%)`,
        padding: "64px 24px",
        textAlign: "center",
        color: "white",
      }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", fontFamily: "'Google Sans', sans-serif", marginBottom: "10px" }}>
            מצאת תבנית שאתה אוהב?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginBottom: "28px", lineHeight: 1.6 }}>
            שלחו לנו הודעה ב-WhatsApp. נאשר את הבחירה, נתאם פרטים ונעלה את האתר לאוויר תוך ימים.
          </p>
          <a
            href="https://wa.me/972500000000"
            className="btn-wa"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              backgroundColor: "#25D366", color: "white",
              padding: "14px 32px", borderRadius: "30px",
              fontSize: "1rem", fontWeight: "800", textDecoration: "none",
              boxShadow: "0 4px 24px rgba(37,211,102,0.4)",
            }}
          >
            <WhatsAppIcon size={22} />
            <span>שלחו הודעה ב-WhatsApp</span>
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        backgroundColor: N[950], color: "rgba(255,255,255,0.35)",
        textAlign: "center", padding: "24px", fontSize: "0.72rem",
      }}>
        <p>© {new Date().getFullYear()} DentalSites · כל הזכויות שמורות · תבניות אתר מקצועיות לרופאי שיניים בישראל</p>
      </footer>
    </div>
  );
}
