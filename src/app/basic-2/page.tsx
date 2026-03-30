"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, ArrowLeft, Heart, CheckCircle, Menu, X } from "lucide-react";
import { Tooth, Sparkle, Sun, ArrowsHorizontal, Baby, FirstAid, Crown, Drop } from "@phosphor-icons/react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import { HealthFundsStrip, InsuranceStrip } from "@/components/shared/TrustStrips";
import { clinicData, services, reviews } from "@/lib/mock-data";
import { useState, useEffect } from "react";

const b2NavLinks = [
  { label: "שירותים", href: "#services" },
  { label: "ביקורות", href: "#reviews" },
  { label: "אודות הרופאה", href: "#about" },
  { label: "צרו קשר", href: "#contact" },
];

/* ── icon map ── */
const iconMap = {
  implants: <Tooth size={28} weight="duotone" aria-hidden="true" />,
  veneers: <Sparkle size={28} weight="duotone" aria-hidden="true" />,
  whitening: <Sun size={28} weight="duotone" aria-hidden="true" />,
  orthodontics: <ArrowsHorizontal size={28} weight="duotone" aria-hidden="true" />,
  children: <Baby size={28} weight="duotone" aria-hidden="true" />,
  emergency: <FirstAid size={28} weight="duotone" aria-hidden="true" />,
  crowns: <Crown size={28} weight="duotone" aria-hidden="true" />,
  crown: <Crown size={28} weight="duotone" aria-hidden="true" />,
  cleaning: <Drop size={28} weight="duotone" aria-hidden="true" />,
  hygiene: <Drop size={28} weight="duotone" aria-hidden="true" />,
};

/* Short descriptions per service for horizontal layout */
const serviceDescs: Record<string, string> = {
  implants: "שתלים מן הטבע — פתרון קבוע שנראה ומרגיש כמו שן אמיתית",
  veneers: "ציפויי חרסינה דקים לשיניים מושלמות ואסתטיות",
  whitening: "הלבנה מקצועית עד 8 גוונים בביקור אחד",
  orthodontics: "יישור שיניים בשיטות מתקדמות לכל גיל",
  children: "טיפול עדין וחם לילדים בסביבה מרגיעה ובטוחה",
  emergency: "זמינים לכם גם בשעות חירום — לא תישארו לבד",
  crowns: "כתרים וגשרים בחומרים פרימיום להשחזור מלא",
  cleaning: "ניקוי שיניים וחניכיים לבריאות הפה לאורך שנים",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: "easeOut" as const },
  }),
};

export default function Basic2() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  useEffect(() => { document.title = `${clinicData.doctorName} | מרפאת שיניים`; }, []);
  return (
    <div
      className="theme-b2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <AccessibilityWidget />

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-40"
        style={{ backgroundColor: "var(--bg)", borderBottom: "2px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-xl font-bold" style={{ color: "var(--primary)" }}>
              {clinicData.doctorName}
            </span>
            <span className="text-xs block" style={{ color: "var(--text-muted)" }}>
              {clinicData.doctorTitle}
            </span>
          </div>
          {/* Desktop nav */}
          <nav aria-label="ניווט ראשי" className="hidden md:block">
            <ul className="flex items-center gap-6 list-none">
              {b2NavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-muted)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop phone */}
          <a
            href={`tel:${clinicData.phone}`}
            aria-label={`התקשרו: ${clinicData.phone}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Phone size={14} aria-hidden="true" />
            {clinicData.phone}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-1"
            aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-b2"
            style={{ color: "var(--text)" }}>
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav id="mobile-nav-b2" aria-label="ניווט נייד"
            className="md:hidden border-t-2"
            style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
            <ul className="list-none py-2">
              {b2NavLinks.map((link) => (
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
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white hover:opacity-90"
                  style={{ backgroundColor: "var(--primary)" }}
                  onClick={closeMobile}>
                  <Phone size={14} aria-hidden="true" /> {clinicData.phone}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-labelledby="hero-heading-b2"
        >
          {/* Gradient overlay — opaque on text side (right/RTL), transparent on clinic side */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ background: "linear-gradient(to left, rgba(253,243,236,0.95) 35%, rgba(253,243,236,0.55) 65%, rgba(253,243,236,0.25) 100%)" }} />
          {/* Warm background blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--accent)", filter: "blur(80px)" }} aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: "var(--primary)", filter: "blur(60px)" }} aria-hidden="true" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center relative">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-7">
              <div className="flex items-center gap-2">
                <Heart size={16} style={{ color: "var(--primary)" }} aria-hidden="true" />
                <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                  מרפאה משפחתית חמה ומזמינה
                </span>
              </div>
              <h1
                id="hero-heading-b2"
                className="text-4xl lg:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                הבריאות שלכם<br />
                <span style={{ color: "var(--primary)" }}>בידיים טובות</span>
              </h1>
              <p className="text-base leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
                מרפאת שיניים מתקדמת המציעה שירותים מקצועיים ואיכותיים<br />בסביבה נעימה ומזמינה
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${clinicData.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full font-semibold text-white text-base hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  קביעת תור <ArrowLeft size={16} aria-hidden="true" />
                </a>
                <a
                  href={`tel:${clinicData.phone}`}
                  className="px-7 py-3 rounded-full font-semibold text-base border-2 hover:opacity-80 flex items-center gap-2"
                  style={{ borderColor: "var(--primary)", color: "var(--primary)", backgroundColor: "#FFF4EB" }}
                >
                  <Phone size={15} aria-hidden="true" /> התקשרו
                </a>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/smile-hero-b2.avif"
                  alt="חיוך בריא ויפה"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section aria-label="נתוני המרפאה" style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "340+", label: "מטופלים מרוצים", sub: "ביקורות 5 כוכבים" },
                { value: "15+", label: "שנות ניסיון", sub: "בטיפולים אסתטיים" },
                { value: "3", label: "קופות חולים", sub: "כללית, מכבי ומאוחדת" },
                { value: "98%", label: "ממליצים", sub: "על המרפאה לחברים" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-center px-2"
                >
                  <p className="text-3xl font-bold" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                    {stat.value}
                  </p>
                  <p className="text-base font-semibold mt-0.5" style={{ color: "var(--text)" }}>{stat.label}</p>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HealthFundsStrip />

        {/* ── SERVICES (horizontal list-cards) ── */}
        <section id="services" className="py-20"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="services-heading-b2"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-12">
              <h2
                id="services-heading-b2"
                className="text-3xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                מה אנחנו מציעים
              </h2>
              <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
                כל מה שצריך לחיוך מושלם ולפה בריא
              </p>
            </motion.div>

            {/* 2-column horizontal rows */}
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.id}
                  variants={fadeUp}
                  custom={i * 0.5}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-2xl border hover:shadow-md transition-shadow"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  {/* Icon box */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--primary)" }}
                    aria-hidden="true"
                  >
                    {iconMap[s.id as keyof typeof iconMap]}
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold text-base mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {serviceDescs[s.id] ?? s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="reviews-heading-b2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="reviews-heading-b2"
              className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>
              מה המטופלים אומרים
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div key={r.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-6 rounded-2xl border"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
                  <div className="flex text-yellow-400 mb-3" aria-label={`דירוג: ${r.rating} כוכבים`}>
                    {[...Array(r.rating)].map((_, j) => <Star key={j} size={13} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-sm font-semibold">{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOCTOR INTRO (prominent, full-width) ── */}
        <section id="about" className="py-20 lg:py-28"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="about-heading-b2"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Photo — larger, 2 of 5 cols */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:max-w-full shadow-lg">
                  <img
                    src="/images/doctor-b2-v2.jpg"
                    alt={`ד״ר ${clinicData.doctorName}, רופאת שיניים`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Bio — 3 of 5 cols */}
              <motion.div
                variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="lg:col-span-3 space-y-6"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "var(--primary)" }}>
                    הכירו את הרופאה שלכם
                  </p>
                  <h2
                    id="about-heading-b2"
                    className="text-4xl lg:text-5xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {clinicData.doctorName}
                  </h2>
                  <p className="text-base font-medium" style={{ color: "var(--text-muted)" }}>
                    {clinicData.doctorTitle}
                  </p>
                </div>

                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {clinicData.doctorBio}
                </p>

                <ul className="space-y-3">
                  {[
                    "15+ שנות ניסיון קליני",
                    "מומחית בטיפולים אסתטיים ושיקומיים",
                    "גישה אנושית ורגישה לכל מטופל",
                    "הדרכה מתמדת בטכנולוגיות מתקדמות",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} style={{ color: "var(--primary)", flexShrink: 0 }} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${clinicData.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  קביעת תור <ArrowLeft size={15} aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <InsuranceStrip />

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="contact-heading-b2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-5">
              <h2 id="contact-heading-b2" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>בואו לבקר</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                נשמח לפגוש אתכם ולהיות הרופאים שלכם לכל החיים
              </p>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: clinicData.phone, href: `tel:${clinicData.phone}` },
                  { icon: MapPin, text: clinicData.address, href: "#" },
                  { icon: Clock, text: clinicData.hours.weekdays, href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    className="flex items-center gap-3 text-sm hover:opacity-80">
                    <item.icon size={16} style={{ color: "var(--primary)" }} aria-hidden="true" />
                    {item.text}
                  </a>
                ))}
              </div>
              <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}>
                קביעת תור בוואטסאפ ←
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-3xl min-h-60 flex items-center justify-center"
              style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
              role="img" aria-label="מפת מיקום המרפאה">
              <div className="text-center">
                <MapPin size={36} style={{ color: "var(--primary)", margin: "0 auto 8px" }} aria-hidden="true" />
                <p className="text-sm font-medium">{clinicData.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" style={{ backgroundColor: "var(--primary)", color: "white" }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.doctorName}
              </h3>
              <p className="text-sm opacity-75">{clinicData.address}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm">שעות</h3>
              <p className="text-sm opacity-75">{clinicData.hours.weekdays}</p>
              <p className="text-sm opacity-75">{clinicData.hours.friday}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm">קשר</h3>
              <a href={`tel:${clinicData.phone}`} className="text-sm opacity-75 hover:opacity-100 block">
                {clinicData.phone}
              </a>
              <a href="/נגישות" className="text-sm opacity-75 hover:opacity-100 block mt-1 underline">
                הצהרת נגישות
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-4 text-center text-xs opacity-50">
            © {new Date().getFullYear()} {clinicData.name}
            {" · "}
            <a href="/privacy" className="underline hover:opacity-100">מדיניות פרטיות</a>
            {" · "}
            <a href="/terms" className="underline hover:opacity-100">תנאי שימוש</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
