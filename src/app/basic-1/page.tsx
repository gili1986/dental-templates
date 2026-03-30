"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  CheckCircle,
  ArrowLeft,
  Menu,
  X,
  Layers,
  Sparkles,
  Zap,
  SlidersHorizontal,
  HeartPulse,
  AlertCircle,
  Award,
  Droplets,
} from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import { HealthFundsStrip, InsuranceStrip } from "@/components/shared/TrustStrips";
import {
  clinicData,
  services,
  reviews,
  faqs,
  navLinks,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

/* ── icon map ── */
const iconMap = {
  implants: <Layers size={28} aria-hidden="true" />,
  veneers: <Sparkles size={28} aria-hidden="true" />,
  whitening: <Zap size={28} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={28} aria-hidden="true" />,
  children: <HeartPulse size={28} aria-hidden="true" />,
  emergency: <AlertCircle size={28} aria-hidden="true" />,
  crowns: <Award size={28} aria-hidden="true" />,
  crown: <Award size={28} aria-hidden="true" />,
  cleaning: <Droplets size={28} aria-hidden="true" />,
  hygiene: <Droplets size={28} aria-hidden="true" />,
};

/* ── animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Basic1() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  useEffect(() => { document.title = `${clinicData.doctorName} | מרפאת שיניים`; }, []);

  return (
    <div
      className="theme-b1 min-h-screen"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Skip link must be first focusable element — WCAG 2.4.1 */}
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <AccessibilityWidget />

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-40 shadow-sm"
        style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: "var(--primary)" }}
              aria-hidden="true"
            >
              ד
            </div>
            <span
              className="font-bold text-lg"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--primary)",
              }}
            >
              {clinicData.doctorName}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="ניווט ראשי" className="hidden md:block">
            <ul className="flex items-center gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href={`tel:${clinicData.phone}`}
            aria-label={`התקשרו אלינו: ${clinicData.phone}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Phone size={15} aria-hidden="true" />
            {clinicData.phone}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-1"
            aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-b1"
            style={{ color: "var(--text)" }}>
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav id="mobile-nav-b1" aria-label="ניווט נייד"
            className="md:hidden border-t"
            style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
            <ul className="list-none py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="block px-4 py-3 text-sm font-medium hover:opacity-70"
                    style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}
                    onClick={closeMobile}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-4 py-3">
                <a href={`tel:${clinicData.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90"
                  style={{ backgroundColor: "var(--primary)" }}
                  onClick={closeMobile}>
                  <Phone size={14} aria-hidden="true" /> {clinicData.phone}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <main id="main-content">
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="hero-heading"
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "white",
                }}
              >
                <CheckCircle size={13} aria-hidden="true" />
                מרפאה מוסמכת ומורשית
              </div>

              <h1
                id="hero-heading"
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                חיוך בריא ויפה<br />לכל החיים
              </h1>

              <p
                className="text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--text-muted)" }}
              >
                מרפאת שיניים מתקדמת המציעה שירותים מקצועיים ואיכותיים<br />בסביבה נעימה ומזמינה
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/${clinicData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-white text-base transition-opacity hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  קביעת תור עכשיו
                  <ArrowLeft size={16} aria-hidden="true" />
                </a>
                <a
                  href={`tel:${clinicData.phone}`}
                  className="px-6 py-3 rounded-lg font-semibold text-base transition-colors flex items-center gap-2 border"
                  style={{
                    borderColor: "var(--primary)",
                    color: "var(--primary)",
                  }}
                >
                  <Phone size={16} aria-hidden="true" />
                  {clinicData.phone}
                </a>
              </div>

              {/* Trust stats */}
              <div className="flex gap-8 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                {[
                  { num: "15+", label: "שנות ניסיון" },
                  { num: "2,000+", label: "מטופלים מרוצים" },
                  { num: "98%", label: "שביעות רצון" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/hero-b1-v2.png"
                  alt="מרפאת שיניים מודרנית ונקייה"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-bold" style={{ color: "var(--text)" }}>
                    4.9/5
                  </span>
                </div>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  מתוך 340 ביקורות
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <HealthFundsStrip />

        {/* ── SERVICES ── */}
        <section
          id="services"
          className="py-20"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                id="services-heading"
                className="text-3xl lg:text-4xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                השירותים שלנו
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
                מגוון רחב של טיפולי שיניים מקצועיים תחת קורת גג אחת
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border text-center group hover:shadow-md transition-shadow cursor-default"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
                >
                  <div
                    className="flex justify-center mb-3"
                    style={{ color: "var(--primary)" }}
                    aria-hidden="true"
                  >
                    {iconMap[service.id as keyof typeof iconMap]}
                  </div>
                  <h3
                    className="font-semibold text-base mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed hidden sm:block" style={{ color: "var(--text-muted)" }}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section
          id="about"
          className="py-20"
          style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="about-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Doctor photo */}
            <div
              className="rounded-2xl overflow-hidden aspect-square order-2 md:order-1"
              aria-label={`תמונת ${clinicData.doctorName}`}
            >
              <img
                src="/images/doctor-b1-v2.jpg"
                alt={`ד״ר ${clinicData.doctorName}, רופאת שיניים`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5 order-1 md:order-2"
            >
              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "var(--primary)", color: "white" }}
              >
                אודות המרפאה
              </div>
              <h2
                id="about-heading"
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {clinicData.doctorName}
              </h2>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--primary)" }}
              >
                {clinicData.doctorTitle}
              </p>
              <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
                {clinicData.doctorBio}
              </p>
              <ul className="space-y-2">
                {[
                  "בוגרת האוניברסיטה העברית ירושלים",
                  "חברה באגוד רופאי השיניים בישראל",
                  "מוסמכת בטיפולי לייזר",
                  "שפות: עברית, אנגלית, רוסית",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle
                      size={15}
                      style={{ color: "var(--primary)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section
          id="reviews"
          className="py-20"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="reviews-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2
                id="reviews-heading"
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                מה אומרים המטופלים
              </h2>
              <p style={{ color: "var(--text-muted)" }} className="text-sm">
                4.9 כוכבים מתוך 340+ ביקורות אמיתיות
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
                >
                  <div className="flex text-yellow-400 mb-3" aria-label={`דירוג: ${review.rating} כוכבים`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text)" }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{review.name}</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {review.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          className="py-20"
          style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              id="faq-heading"
              className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              שאלות נפוצות
            </motion.h2>

            <div className="space-y-3" role="list">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                  role="listitem"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-panel-b1-${i}`}
                    className="w-full flex items-center justify-between p-4 text-right font-semibold text-sm hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ backgroundColor: "var(--bg)" }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={cn(
                        "transition-transform flex-shrink-0 mr-2",
                        openFaq === i && "rotate-180"
                      )}
                      style={{ color: "var(--primary)" }}
                    />
                  </button>
                  <div
                    id={`faq-panel-b1-${i}`}
                    role="region"
                    aria-label={faq.q}
                    hidden={openFaq !== i}
                    className="px-4 pb-4 text-sm leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                      backgroundColor: "var(--bg)",
                      borderTop: "1px solid var(--border)",
                      paddingTop: "12px",
                    }}
                  >
                    {faq.a}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <InsuranceStrip />

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="py-20"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="contact-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2
                id="contact-heading"
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                יצירת קשר
              </h2>
              <p style={{ color: "var(--text-muted)" }} className="text-sm leading-relaxed">
                נשמח לענות על כל שאלה ולקבוע תור בזמן הנוח לכם
              </p>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "טלפון", value: clinicData.phone, href: `tel:${clinicData.phone}` },
                  { icon: MapPin, label: "כתובת", value: clinicData.address, href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--bg-secondary)" }}
                    >
                      <item.icon size={16} style={{ color: "var(--primary)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-muted)" }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <Clock size={16} style={{ color: "var(--primary)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-1" style={{ color: "var(--text-muted)" }}>
                      שעות פעילות
                    </div>
                    <div className="text-sm space-y-0.5">
                      <div>{clinicData.hours.weekdays}</div>
                      <div>{clinicData.hours.friday}</div>
                      <div style={{ color: "var(--text-muted)" }}>{clinicData.hours.saturday}</div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${clinicData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                קביעת תור בוואטסאפ ←
              </a>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden min-h-64 flex items-center justify-center"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              role="img"
              aria-label="מפת המיקום של המרפאה"
            >
              <div className="text-center">
                <MapPin
                  size={40}
                  style={{ color: "var(--primary)", margin: "0 auto 8px" }}
                  aria-hidden="true"
                />
                <p className="text-sm font-medium">{clinicData.address}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  כאן תופיע מפת Google Maps
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{ backgroundColor: "var(--primary)", color: "white" }}
        className="py-10"
        role="contentinfo"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {clinicData.doctorName}
              </h3>
              <p className="text-sm opacity-80">{clinicData.address}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm">שעות פעילות</h3>
              <p className="text-sm opacity-80">{clinicData.hours.weekdays}</p>
              <p className="text-sm opacity-80">{clinicData.hours.friday}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm">צרו קשר</h3>
              <a
                href={`tel:${clinicData.phone}`}
                className="text-sm opacity-80 hover:opacity-100 block"
              >
                {clinicData.phone}
              </a>
              <a
                href="/נגישות"
                className="text-sm opacity-80 hover:opacity-100 block mt-1 underline"
              >
                הצהרת נגישות
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-4 text-center text-xs opacity-60">
            © {new Date().getFullYear()} {clinicData.name} | כל הזכויות שמורות
            {" · "}
            <a href="/privacy" className="underline hover:opacity-100">מדיניות פרטיות</a>
            {" · "}
            <a href="/terms" className="underline hover:opacity-100">תנאי שימוש</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
