"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, ChevronDown, Heart, ArrowLeft } from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import KupatHolimBar from "@/components/shared/KupatHolimBar";
import { clinicData, services, reviews, faqs, navLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: "easeOut" as const },
  }),
};

export default function Basic2() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="theme-b2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-40"
        style={{ backgroundColor: "var(--bg)", borderBottom: "2px solid var(--border)" }}
      >
        <KupatHolimBar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-xl font-bold" style={{ color: "var(--primary)" }}>
              {clinicData.doctorName}
            </span>
            <span className="text-xs block" style={{ color: "var(--text-muted)" }}>
              {clinicData.doctorTitle}
            </span>
          </div>
          <nav aria-label="ניווט ראשי">
            <ul className="hidden md:flex items-center gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-muted)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={`tel:${clinicData.phone}`}
            aria-label={`התקשרו: ${clinicData.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Phone size={14} aria-hidden="true" />
            {clinicData.phone}
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section
          className="py-20 lg:py-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="hero-heading-b2"
        >
          {/* Warm organic background blobs */}
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
                {clinicData.heroSubtitle}
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
                  style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                >
                  <Phone size={15} aria-hidden="true" /> התקשרו
                </a>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
              <div
                className="rounded-3xl aspect-[4/3] flex items-center justify-center"
                style={{ backgroundColor: "var(--border)" }}
                role="img" aria-label="תמונת המרפאה"
              >
                <div className="text-center">
                  <div className="text-8xl mb-2" aria-hidden="true">🏥</div>
                  <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    תמונת מרפאה / רופא
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" aria-hidden="true" />)}
                </div>
                <p className="text-xs font-bold" style={{ color: "var(--text)" }}>מטופלים אוהבים אותנו</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>340+ ביקורות</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="services-heading-b2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-12">
              <h2 id="services-heading-b2" className="text-3xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}>
                מה אנחנו מציעים
              </h2>
              <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
                כל מה שצריך לחיוך מושלם ולפה בריא
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <motion.div key={s.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-5 rounded-2xl border text-center hover:shadow-md transition-shadow"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
                  <div className="text-4xl mb-3" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="about-heading-b2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl aspect-square flex items-center justify-center"
              style={{ backgroundColor: "var(--border)" }}
              role="img" aria-label={`תמונת ${clinicData.doctorName}`}>
              <div className="text-center">
                <div className="text-7xl mb-2" aria-hidden="true">👩‍⚕️</div>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>תמונת הרופא/ה</p>
              </div>
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-5">
              <h2 id="about-heading-b2" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>{clinicData.doctorName}</h2>
              <p className="font-semibold text-sm" style={{ color: "var(--primary)" }}>
                {clinicData.doctorTitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {clinicData.doctorBio}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="reviews-heading-b2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="reviews-heading-b2"
              className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>ביקורות מטופלים</motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div key={r.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-6 rounded-2xl border"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
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

        {/* ── FAQ ── */}
        <section id="faq" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="faq-heading-b2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="faq-heading-b2"
              className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>שאלות נפוצות</motion.h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between p-4 text-right font-semibold text-sm"
                    style={{ backgroundColor: "var(--bg)" }}>
                    <span>{faq.q}</span>
                    <ChevronDown size={16} aria-hidden="true"
                      className={cn("transition-transform flex-shrink-0 mr-2", openFaq === i && "rotate-180")}
                      style={{ color: "var(--primary)" }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 pt-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)", backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20" style={{ backgroundColor: "var(--bg)" }}
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
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              role="img" aria-label="מפת מיקום המרפאה">
              <div className="text-center">
                <MapPin size={36} style={{ color: "var(--primary)", margin: "0 auto 8px" }} aria-hidden="true" />
                <p className="text-sm font-medium">{clinicData.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "var(--primary)", color: "white" }} className="py-10">
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
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
