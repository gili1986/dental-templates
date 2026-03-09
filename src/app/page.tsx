"use client";

import Link from "next/link";

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
    fonts: "Rubik + Heebo",
    desc: "עיצוב מינימליסטי ומקצועי עם נגיעות כחולות. מתאים לרופאים שרוצים להקרין אמון ואמינות.",
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
    fonts: "Frank Ruhl Libre + Assistant",
    desc: "פלטה חמה ומזמינה בגוונים טרקוטה. מתאים למרפאות משפחתיות ורופאים ידידותיים.",
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
    fonts: "Rubik + Heebo",
    desc: "עיצוב כהה ועתידני עם נגיעות ציאן. לרופאים שמדגישים טכנולוגיה מתקדמת.",
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
    fonts: "Frank Ruhl Libre + Assistant",
    desc: "אלגנטיות נורדית עם פרטי זהב. whitespace גדול, פונטים פרימיום. לקליניקות יוקרה.",
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
    fonts: "Rubik + Heebo",
    desc: "עיצוב magazine-style עם כותרות גדולות ואדום נועז. בולט ובלתי נשכח.",
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
    fonts: "David Libre + Assistant",
    desc: "גוונים ארציים וחמים עם תחושת חומרים טבעיים. עדין, יוקרתי ומרגיע.",
  },
];

export default function Home() {
  return (
    <div
      dir="rtl"
      style={{ backgroundColor: "#FAFAFA", minHeight: "100vh", fontFamily: "'Heebo', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;600;700;800&family=Frank+Ruhl+Libre:wght@700&display=swap');
      `}</style>

      {/* Header */}
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #E5E7EB" }} className="py-5 px-6">
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#111" }}>
              🦷 תבניות אתר לרופאי שיניים
            </h1>
            <p style={{ fontSize: "0.75rem", color: "#888", marginTop: "2px" }}>
              6 תבניות מקצועיות · עברית · נגיש
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontSize: "0.7rem", backgroundColor: "#F0F7FF", color: "#1B4F8A", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>
              3 בייסיק
            </span>
            <span style={{ fontSize: "0.7rem", backgroundColor: "#FDF3EC", color: "#C4704A", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>
              3 פרמיום
            </span>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
        <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "32px", textAlign: "center" }}>
          לחץ על תבנית לצפייה בדמו המלא
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}>
          {templates.map((t) => (
            <Link key={t.id} href={`/${t.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #E5E7EB",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "pointer",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                }}
              >
                {/* Preview strip */}
                <div style={{
                  height: "120px",
                  backgroundColor: t.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}>
                  {/* Simulated nav */}
                  <div style={{
                    position: "absolute",
                    top: 0, right: 0, left: 0,
                    height: "28px",
                    backgroundColor: t.dark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 12px",
                    gap: "8px",
                  }}>
                    <div style={{
                      width: "60px", height: "6px", borderRadius: "3px",
                      backgroundColor: t.color, opacity: 0.8,
                    }} />
                    <div style={{ display: "flex", gap: "6px" }}>
                      {[30, 24, 28].map((w, i) => (
                        <div key={i} style={{
                          width: `${w}px`, height: "4px", borderRadius: "2px",
                          backgroundColor: t.dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
                        }} />
                      ))}
                    </div>
                  </div>

                  {/* Hero preview */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      width: "80px", height: "8px", borderRadius: "4px",
                      backgroundColor: t.color, opacity: 0.7,
                      margin: "0 auto 8px",
                    }} />
                    <div style={{
                      width: "120px", height: "5px", borderRadius: "3px",
                      backgroundColor: t.dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
                      margin: "0 auto 4px",
                    }} />
                    <div style={{
                      width: "90px", height: "5px", borderRadius: "3px",
                      backgroundColor: t.dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
                      margin: "0 auto 12px",
                    }} />
                    <div style={{
                      width: "70px", height: "22px", borderRadius: "4px",
                      backgroundColor: t.accent,
                      margin: "0 auto",
                      opacity: 0.9,
                    }} />
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "16px 18px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div>
                      <span style={{
                        fontSize: "0.65rem",
                        fontWeight: "700",
                        padding: "2px 8px",
                        borderRadius: "10px",
                        backgroundColor: t.tier === "premium" ? "#FDF3EC" : "#F0F7FF",
                        color: t.tier === "premium" ? "#C4704A" : "#1B4F8A",
                      }}>
                        {t.tierLabel}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "4px" }}>
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: t.color }} />
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: t.accent }} />
                    </div>
                  </div>

                  <h2 style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#111",
                    marginBottom: "4px",
                    fontFamily: "'Frank Ruhl Libre', serif",
                  }}>
                    {t.nameHe}
                  </h2>
                  <p style={{ fontSize: "0.7rem", color: "#888", marginBottom: "10px" }}>{t.name}</p>
                  <p style={{ fontSize: "0.78rem", color: "#555", lineHeight: "1.5", marginBottom: "12px" }}>{t.desc}</p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.68rem", color: "#999" }}>{t.fonts}</span>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: t.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}>
                      צפייה בדמו ←
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: "48px",
          padding: "20px 24px",
          backgroundColor: "white",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "0.8rem", color: "#888", lineHeight: "1.7" }}>
            כל התבניות כוללות: RTL עברית · כפתור WhatsApp · לוגואי קופות חולים · נגישות SI 5568 ·<br />
            תפריט ניווט · ביקורות · שאלות נפוצות · דף צור קשר · תצוגה מלאה למובייל
          </p>
        </div>
      </main>
    </div>
  );
}
