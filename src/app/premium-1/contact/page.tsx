import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";

export default function ContactPage() {
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
          <div className="w-24 hidden sm:block" /> {/* spacer */}
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <li><Link href="/premium-1" className="hover:opacity-70">בית</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--accent)" }}>צרו קשר</li>
          </ol>
        </nav>

        {/* Page heading */}
        <div className="mb-16 pb-12" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}>
            יצירת קשר
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}>
            נשמח לשמוע מכם
          </h1>
        </div>

        {/* Two-col layout: form + info */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── FORM (3 cols) ── */}
          <div className="lg:col-span-3">
            <form className="space-y-6" aria-label="טופס יצירת קשר">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-muted)" }}>
                    שם מלא *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="ישראל ישראלי"
                    className="w-full px-4 py-3 text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-muted)" }}>
                    טלפון *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="050-000-0000"
                    className="w-full px-4 py-3 text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-muted)" }}>
                  אימייל
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-muted)" }}>
                  סוג טיפול מבוקש
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 text-sm outline-none transition-colors appearance-none"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <option value="">בחרו טיפול...</option>
                  <option value="implants">השתלות שיניים</option>
                  <option value="veneers">ציפויי חרסינה</option>
                  <option value="whitening">לבנת שיניים</option>
                  <option value="orthodontics">יישור שיניים</option>
                  <option value="crown">כתרים וגשרים</option>
                  <option value="children">רפואת שיניים לילדים</option>
                  <option value="emergency">חירום דנטלי</option>
                  <option value="hygiene">ניקוי וטיפול שגרתי</option>
                  <option value="other">אחר / ייעוץ כללי</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-muted)" }}>
                  הודעה
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="ספרו לנו איך נוכל לעזור..."
                  className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--text)" }}
              >
                שליחת הודעה
              </button>
            </form>
          </div>

          {/* ── INFO SIDEBAR (2 cols) ── */}
          <aside className="lg:col-span-2 space-y-10">

            {/* Quick contact */}
            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}>
                פרטי התקשרות
              </h2>
              <div className="space-y-4">
                <a href={`tel:${clinicData.phone}`}
                  className="flex items-start gap-3 group"
                  aria-label={`חייגו ${clinicData.phone}`}>
                  <Phone size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--text-muted)" }}>טלפון</div>
                    <div className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                      {clinicData.phone}
                    </div>
                  </div>
                </a>

                <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                  aria-label="שלחו הודעה בוואטסאפ">
                  <MessageCircle size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--text-muted)" }}>וואטסאפ</div>
                    <div className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                      שלחו הודעה עכשיו
                    </div>
                  </div>
                </a>

                <a href={`mailto:${clinicData.email}`}
                  className="flex items-start gap-3 group"
                  aria-label={`שלחו אימייל ל-${clinicData.email}`}>
                  <Mail size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--text-muted)" }}>אימייל</div>
                    <div className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                      {clinicData.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--text-muted)" }}>כתובת</div>
                    <div className="text-sm font-medium">{clinicData.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
              <h2 className="text-xs font-medium uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}>
                שעות פעילות
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <span style={{ color: "var(--text-muted)" }}>ראשון–חמישי</span>
                  <span className="font-medium">09:00–19:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span style={{ color: "var(--text-muted)" }}>שישי</span>
                  <span className="font-medium">09:00–13:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span style={{ color: "var(--text-muted)" }}>שבת</span>
                  <span className="font-medium">סגור</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
              <div
                className="w-full flex items-center justify-center text-sm"
                style={{
                  height: 176,
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
                aria-label="מפת מיקום המרפאה"
              >
                מפה — Google Maps embed
              </div>
              <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                {clinicData.address}
              </p>
            </div>
          </aside>
        </div>
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
