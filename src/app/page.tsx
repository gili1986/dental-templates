"use client";

import Link from "next/link";
import { useState } from "react";

const templates = [
  {
    id: "basic-1",
    name: "B1 — Clean Trust",
    nameHe: "נקי ומקצועי",
    tier: "basic",
    tierLabel: "בייסיק",
    color: "#1B4F8A",
    accent: "#4FC3F7",
    bg: "#F0F7FF",
    dark: false,
    structure: "דף אחד",
    fit: "רופאים שרוצים להקרין אמינות ומקצועיות",
    sections: ["hero", "services", "about", "reviews", "faq", "contact"],
    sectionColors: ["#1B4F8A", "#F0F7FF", "#ffffff", "#F0F7FF", "#ffffff", "#1B4F8A"],
  },
  {
    id: "basic-2",
    name: "B2 — Warm Approachable",
    nameHe: "חם ומזמין",
    tier: "basic",
    tierLabel: "בייסיק",
    color: "#C4704A",
    accent: "#E8907A",
    bg: "#FDF3EC",
    dark: false,
    structure: "דף אחד",
    fit: "מרפאות משפחתיות עם דגש על קשר אישי",
    sections: ["hero", "about", "services", "reviews", "contact"],
    sectionColors: ["#C4704A", "#FDF3EC", "#ffffff", "#FDF3EC", "#C4704A"],
  },
  {
    id: "basic-3",
    name: "B3 — Clinical High-Tech",
    nameHe: "טכנולוגי ומתקדם",
    tier: "basic",
    tierLabel: "בייסיק",
    color: "#0D1B2A",
    accent: "#00E5FF",
    bg: "#0F2035",
    dark: true,
    structure: "דף אחד",
    fit: "קליניקות שמדגישות ציוד וטכנולוגיה מתקדמת",
    sections: ["hero", "tech", "services", "reviews", "contact"],
    sectionColors: ["#0D1B2A", "#0a1929", "#0F2035", "#0a1929", "#0D1B2A"],
  },
  {
    id: "premium-1",
    name: "P1 — Nordic Minimal Luxury",
    nameHe: "נורדי מינימליסטי",
    tier: "premium",
    tierLabel: "פרמיום",
    color: "#2C2C2C",
    accent: "#C9A96E",
    bg: "#F2F0EB",
    dark: false,
    structure: "מולטי-פייג׳",
    fit: "קליניקות יוקרה ורופאים עם מוניטין בינלאומי",
    sections: ["home", "services", "about", "contact"],
    sectionColors: ["#2C2C2C", "#F2F0EB", "#ffffff", "#2C2C2C"],
  },
  {
    id: "premium-2",
    name: "P2 — Bold Editorial",
    nameHe: "אדיטוריאל נועז",
    tier: "premium",
    tierLabel: "פרמיום",
    color: "#1A1A1A",
    accent: "#FF4D4D",
    bg: "#F8F8F8",
    dark: false,
    structure: "מולטי-פייג׳",
    fit: "רופאים שרוצים להיות מובילים שוק ובולטים",
    sections: ["home", "treatments", "results", "contact"],
    sectionColors: ["#1A1A1A", "#F8F8F8", "#ffffff", "#1A1A1A"],
  },
  {
    id: "premium-3",
    name: "P3 — Warm Organic Premium",
    nameHe: "אורגני פרמיום",
    tier: "premium",
    tierLabel: "פרמיום",
    color: "#4A3728",
    accent: "#D4B896",
    bg: "#F0E8DE",
    dark: false,
    structure: "מולטי-פייג׳",
    fit: "רופאים שמספרים סיפור ומבנים קשר עמוק עם מטופלים",
    sections: ["home", "about", "treatments", "gallery"],
    sectionColors: ["#4A3728", "#F0E8DE", "#ffffff", "#4A3728"],
  },
];

const features = [
  { icon: "🇮🇱", label: "עברית מלאה RTL" },
  { icon: "📱", label: "מותאם למובייל" },
  { icon: "♿", label: "נגישות SI 5568" },
  { icon: "💬", label: "כפתור WhatsApp" },
  { icon: "🏥", label: "לוגואי קופות חולים" },
  { icon: "⭐", label: "ביקורות מטופלים" },
  { icon: "❓", label: "שאלות נפוצות" },
  { icon: "🗺️", label: "מפה וניווט" },
];

function TemplatePreview({ t }: { t: typeof templates[0] }) {
  const sectionHeights = [36, 22, 20, 14, 8];
  const sectionsToShow = t.sections.slice(0, 5);

  return (
    <div
      style={{
        width: "100%",
        height: "160px",
        backgroundColor: t.bg,
        borderRadius: "8px 8px 0 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Nav bar */}
      <div
        style={{
          height: "20px",
          backgroundColor: t.dark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          borderBottom: t.dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ width: "40px", height: "4px", borderRadius: "2px", backgroundColor: t.color, opacity: 0.9 }} />
        <div style={{ display: "flex", gap: "5px" }}>
          {[22, 18, 26, 20].map((w, i) => (
            <div key={i} style={{
              width: `${w}px`, height: "3px", borderRadius: "1.5px",
              backgroundColor: t.dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
            }} />
          ))}
        </div>
      </div>

      {/* Hero section */}
      <div
        style={{
          height: "55px",
          backgroundColor: t.sectionColors[0],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "5px",
          padding: "0 12px",
        }}
      >
        <div style={{ width: "90px", height: "6px", borderRadius: "3px", backgroundColor: t.dark || t.tier === "premium" ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.9)" }} />
        <div style={{ width: "60px", height: "3px", borderRadius: "2px", backgroundColor: "rgba(255,255,255,0.4)" }} />
        <div style={{ width: "44px", height: "14px", borderRadius: "3px", backgroundColor: t.accent, opacity: 0.9, marginTop: "2px" }} />
      </div>

      {/* Section 2 */}
      <div
        style={{
          height: "32px",
          backgroundColor: t.sectionColors[1],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "0 8px",
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            flex: 1,
            height: "18px",
            borderRadius: "3px",
            backgroundColor: t.dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            border: t.dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
          }} />
        ))}
      </div>

      {/* Section 3 */}
      <div
        style={{
          height: "28px",
          backgroundColor: t.sectionColors[2] ?? "#ffffff",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: "8px",
        }}
      >
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: t.accent, opacity: 0.3, flexShrink: 0 }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px" }}>
          <div style={{ width: "70%", height: "4px", borderRadius: "2px", backgroundColor: t.dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)" }} />
          <div style={{ width: "50%", height: "3px", borderRadius: "1.5px", backgroundColor: t.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)" }} />
        </div>
      </div>

      {/* Footer strip */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "12px",
        backgroundColor: t.sectionColors[t.sectionColors.length - 1],
        opacity: 0.9,
      }} />
    </div>
  );
}

export default function Home() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      dir="rtl"
      style={{ backgroundColor: "#F7F8FA", minHeight: "100vh", fontFamily: "'Heebo', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Heebo', sans-serif; }
      `}</style>

      {/* ─── Header ─── */}
      <header style={{
        backgroundColor: "white",
        borderBottom: "1px solid #E5E7EB",
        padding: "0 24px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: "1160px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.4rem" }}>🦷</span>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "#111", lineHeight: 1 }}>DentalSites</div>
              <div style={{ fontSize: "0.65rem", color: "#888", marginTop: "2px" }}>תבניות אתר לרופאי שיניים</div>
            </div>
          </div>
          <a
            href="https://wa.me/972500000000"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#25D366",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            <span>💬</span>
            <span>דברו איתנו</span>
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section style={{
        background: "linear-gradient(135deg, #1B4F8A 0%, #0D3266 100%)",
        color: "white",
        padding: "64px 24px 56px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "5px 14px",
            fontSize: "0.75rem",
            fontWeight: "600",
            marginBottom: "20px",
            letterSpacing: "0.02em",
          }}>
            <span>✦</span>
            <span>6 תבניות מקצועיות · RTL עברית · נגישות SI 5568</span>
          </div>

          <h1 style={{
            fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
            fontWeight: "900",
            lineHeight: 1.15,
            marginBottom: "16px",
            fontFamily: "'Heebo', sans-serif",
          }}>
            בחר את התבנית שמתאימה<br />למרפאה שלך
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            אתרים מוכנים לפרסום, בעברית מלאה, מותאמים למובייל ועומדים בדרישות נגישות ישראל.
            כל תבנית כוללת מבנה שונה שמתאים לסגנון הקליניקה.
          </p>
        </div>
      </section>

      {/* ─── Template Grid ─── */}
      <main style={{ maxWidth: "1160px", margin: "0 auto", padding: "48px 24px" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E7EB" }} />
          <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#888", whiteSpace: "nowrap", letterSpacing: "0.08em" }}>
            3 בייסיק · 3 פרמיום
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E7EB" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px",
          marginBottom: "64px",
        }}>
          {templates.map((t) => (
            <Link
              key={t.id}
              href={`/${t.id}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor: "white",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: hoveredId === t.id ? `2px solid ${t.color}` : "2px solid transparent",
                  boxShadow: hoveredId === t.id
                    ? `0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px ${t.color}20`
                    : "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.22s ease",
                  transform: hoveredId === t.id ? "translateY(-3px)" : "none",
                  cursor: "pointer",
                }}
              >
                {/* Preview */}
                <TemplatePreview t={t} />

                {/* Card body */}
                <div style={{ padding: "16px 18px 18px" }}>

                  {/* Badges row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                    <span style={{
                      fontSize: "0.62rem",
                      fontWeight: "700",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      backgroundColor: t.tier === "premium" ? "#FDF3EC" : "#F0F7FF",
                      color: t.tier === "premium" ? "#C4704A" : "#1B4F8A",
                      letterSpacing: "0.03em",
                    }}>
                      {t.tierLabel}
                    </span>
                    <span style={{
                      fontSize: "0.62rem",
                      fontWeight: "600",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      backgroundColor: "#F3F4F6",
                      color: "#555",
                    }}>
                      {t.structure === "מולטי-פייג׳" ? "🗂 " : "📄 "}{t.structure}
                    </span>
                    {/* Color dots */}
                    <div style={{ marginRight: "auto", display: "flex", gap: "4px" }}>
                      <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: t.color }} />
                      <div style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: t.accent }} />
                    </div>
                  </div>

                  {/* Name */}
                  <h2 style={{
                    fontSize: "1.05rem",
                    fontWeight: "800",
                    color: "#111",
                    marginBottom: "3px",
                    fontFamily: "'Heebo', sans-serif",
                    lineHeight: 1.2,
                  }}>
                    {t.nameHe}
                  </h2>
                  <p style={{ fontSize: "0.68rem", color: "#aaa", marginBottom: "10px" }}>{t.name}</p>

                  {/* Fit tag */}
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                    backgroundColor: "#F7F8FA",
                    borderRadius: "8px",
                    padding: "8px 10px",
                    marginBottom: "14px",
                  }}>
                    <span style={{ fontSize: "0.75rem", color: "#888", flexShrink: 0 }}>הכי מתאים ל:</span>
                    <span style={{ fontSize: "0.75rem", color: "#444", fontWeight: "600", lineHeight: 1.4 }}>
                      {t.fit}
                    </span>
                  </div>

                  {/* CTA */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "12px",
                    borderTop: "1px solid #F0F0F0",
                  }}>
                    <span style={{ fontSize: "0.7rem", color: "#bbb" }}>
                      {t.sections.length} עמודים/סקשנים
                    </span>
                    <span style={{
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      color: t.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      opacity: hoveredId === t.id ? 1 : 0.7,
                      transition: "opacity 0.2s",
                    }}>
                      צפה בדמו
                      <span style={{ fontSize: "1rem" }}>←</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ─── Features Grid ─── */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h2 style={{
              fontSize: "1.4rem",
              fontWeight: "900",
              color: "#111",
              fontFamily: "'Heebo', sans-serif",
              marginBottom: "6px",
            }}>
              כל תבנית כוללת
            </h2>
            <p style={{ fontSize: "0.82rem", color: "#888" }}>
              ללא עלות נוספת — הכל כלול בכל אחת מהתבניות
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "12px",
          }}>
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #EFEFEF",
                }}
              >
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{f.icon}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: "600", color: "#333" }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Basic vs Premium Comparison ─── */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h2 style={{
              fontSize: "1.4rem",
              fontWeight: "900",
              color: "#111",
              fontFamily: "'Heebo', sans-serif",
              marginBottom: "6px",
            }}>
              בייסיק לעומת פרמיום
            </h2>
            <p style={{ fontSize: "0.82rem", color: "#888" }}>מה ההבדל בין שתי החבילות?</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            maxWidth: "760px",
            margin: "0 auto",
          }}>
            {/* Basic */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "14px",
              padding: "24px",
              border: "1px solid #E5E7EB",
            }}>
              <div style={{
                fontSize: "0.7rem",
                fontWeight: "700",
                color: "#1B4F8A",
                backgroundColor: "#F0F7FF",
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: "10px",
                marginBottom: "14px",
              }}>
                בייסיק
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "דף בית אחד רציף (one-pager)",
                  "6–8 סקשנים קבועים",
                  "שלושה מבנים שונים לבחירה",
                  "מושלם להשקה מהירה",
                  "עלות הטמעה נמוכה יותר",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "#444" }}>
                    <span style={{ color: "#1B4F8A", fontWeight: "700", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "14px",
              padding: "24px",
              border: "2px solid #C4704A",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #C4704A, #E8907A)",
              }} />
              <div style={{
                fontSize: "0.7rem",
                fontWeight: "700",
                color: "#C4704A",
                backgroundColor: "#FDF3EC",
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: "10px",
                marginBottom: "14px",
              }}>
                פרמיום
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "אתר מולטי-פייג׳ עם דפים פנימיים",
                  "דפי שירות / טיפולים נפרדים",
                  "גלריה / לפני-אחרי / סיפור הרופא",
                  "SEO טוב יותר לטיפולים ספציפיים",
                  "מתאים לקליניקות שצומחות",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "#444" }}>
                    <span style={{ color: "#C4704A", fontWeight: "700", flexShrink: 0, marginTop: "1px" }}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Bottom CTA ─── */}
      <section style={{
        background: "linear-gradient(135deg, #0D3266 0%, #1B4F8A 100%)",
        padding: "48px 24px",
        textAlign: "center",
        color: "white",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontWeight: "900",
            fontFamily: "'Heebo', sans-serif",
            marginBottom: "10px",
          }}>
            מצאת תבנית שאתה אוהב?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem", marginBottom: "24px", lineHeight: 1.7 }}>
            דברו איתנו ב-WhatsApp — נתאים את התבנית לקליניקה שלך ונשיק תוך ימים ספורים.
          </p>
          <a
            href="https://wa.me/972500000000"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#25D366",
              color: "white",
              padding: "14px 28px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "800",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>💬</span>
            <span>שלחו הודעה ב-WhatsApp</span>
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        backgroundColor: "#0D1B2A",
        color: "rgba(255,255,255,0.45)",
        textAlign: "center",
        padding: "20px 24px",
        fontSize: "0.72rem",
      }}>
        <p>© 2025 DentalSites · כל הזכויות שמורות · תבניות אתר מקצועיות לרופאי שיניים בישראל</p>
      </footer>
    </div>
  );
}
