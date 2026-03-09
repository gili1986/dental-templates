import Link from "next/link";
import { clinicData } from "@/lib/mock-data";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";

export default function ContactPage() {
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
          <div className="w-20 hidden sm:block" />
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          className="py-20 px-4 sm:px-6"
          style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}>
              יצירת קשר
            </p>
            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-none"
              style={{ fontFamily: "var(--font-heading)" }}>
              דברו<br />איתנו
            </h1>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* ── FORM ── */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-8"
                style={{ color: "var(--accent)" }}>
                שלחו הודעה
              </h2>
              <form className="space-y-0" aria-label="טופס יצירת קשר">
                {/* Name + Phone row */}
                <div className="grid sm:grid-cols-2 gap-0"
                  style={{ borderBottom: "2px solid var(--text)" }}>
                  <div className="p-6" style={{ borderLeft: "1px solid var(--border)" }}>
                    <label htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "var(--text-muted)" }}>
                      שם *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="ישראל ישראלי"
                      className="w-full bg-transparent text-sm outline-none"
                      style={{ color: "var(--text)" }}
                    />
                  </div>
                  <div className="p-6">
                    <label htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "var(--text-muted)" }}>
                      טלפון *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="050-000-0000"
                      className="w-full bg-transparent text-sm outline-none"
                      style={{ color: "var(--text)" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                  <label htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-muted)" }}>
                    אימייל
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm outline-none"
                    style={{ color: "var(--text)" }}
                  />
                </div>

                {/* Service */}
                <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                  <label htmlFor="service"
                    className="block text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-muted)" }}>
                    טיפול מבוקש
                  </label>
                  <select
                    id="service"
                    className="w-full bg-transparent text-sm outline-none appearance-none"
                    style={{ color: "var(--text)" }}
                  >
                    <option value="">בחרו...</option>
                    <option value="implants">השתלות שיניים</option>
                    <option value="veneers">ציפויי חרסינה</option>
                    <option value="whitening">לבנת שיניים</option>
                    <option value="orthodontics">יישור שיניים</option>
                    <option value="crown">כתרים וגשרים</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                {/* Message */}
                <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                  <label htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-muted)" }}>
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="ספרו לנו..."
                    className="w-full bg-transparent text-sm outline-none resize-none"
                    style={{ color: "var(--text)" }}
                  />
                </div>

                {/* Submit */}
                <div style={{ borderBottom: "2px solid var(--text)" }}>
                  <button
                    type="submit"
                    className="w-full py-5 text-sm font-black uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    שליחה →
                  </button>
                </div>
              </form>
            </div>

            {/* ── INFO ── */}
            <div className="space-y-0" style={{ borderTop: "2px solid var(--text)" }}>
              <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}>
                  טלפון
                </div>
                <a href={`tel:${clinicData.phone}`}
                  className="text-2xl font-black hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {clinicData.phone}
                </a>
              </div>

              <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}>
                  וואטסאפ
                </div>
                <a href={`https://wa.me/${clinicData.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-2xl font-black hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  שלחו הודעה
                </a>
              </div>

              <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}>
                  כתובת
                </div>
                <div className="text-lg font-black" style={{ fontFamily: "var(--font-heading)" }}>
                  {clinicData.address}
                </div>
              </div>

              <div className="p-6" style={{ borderBottom: "2px solid var(--text)" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)" }}>
                  שעות פתיחה
                </div>
                <div className="space-y-2 text-sm font-medium">
                  <div className="flex justify-between">
                    <span>ראשון–חמישי</span>
                    <span style={{ color: "var(--accent)" }}>09:00–19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שישי</span>
                    <span style={{ color: "var(--accent)" }}>09:00–13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--text-muted)" }}>שבת</span>
                    <span style={{ color: "var(--text-muted)" }}>סגור</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div
                className="flex items-center justify-center text-sm"
                style={{
                  height: 200,
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--text)",
                  color: "var(--text-muted)",
                }}
                aria-label="מפת מיקום המרפאה"
              >
                🗺️ Google Maps embed
              </div>
            </div>
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
