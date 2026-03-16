"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, ChevronDown, Leaf, ArrowLeft } from "lucide-react";
import { Tooth, Sparkle, Sun, ArrowsHorizontal, Baby, FirstAid, Crown, Drop } from "@phosphor-icons/react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import HeaderP3 from "@/components/layout/HeaderP3";
import { HealthFundsStrip, InsuranceStrip } from "@/components/shared/TrustStrips";
import { clinicData, services, reviews, faqs, navLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ── icon map ── */
const iconMap = {
  implants: <Tooth size={32} weight="fill" aria-hidden="true" />,
  veneers: <Sparkle size={32} weight="fill" aria-hidden="true" />,
  whitening: <Sun size={32} weight="fill" aria-hidden="true" />,
  orthodontics: <ArrowsHorizontal size={32} weight="bold" aria-hidden="true" />,
  children: <Baby size={32} weight="fill" aria-hidden="true" />,
  emergency: <FirstAid size={32} weight="fill" aria-hidden="true" />,
  crowns: <Crown size={32} weight="fill" aria-hidden="true" />,
  crown: <Crown size={32} weight="fill" aria-hidden="true" />,
  cleaning: <Drop size={32} weight="fill" aria-hidden="true" />,
  hygiene: <Drop size={32} weight="fill" aria-hidden="true" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Premium3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="theme-p3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      <HeaderP3 />

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="py-24 lg:py-36 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="hero-heading-p3">
          {/* Organic blob */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
              style={{ backgroundColor: "var(--accent)", filter: "blur(80px)" }} />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center relative">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-7">
              <div className="flex items-center gap-2">
                <Leaf size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs font-medium tracking-wider"
                  style={{ color: "var(--accent)" }}>גישה הוליסטית לבריאות הפה</span>
              </div>

              <h1 id="hero-heading-p3"
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.tagline}
              </h1>

              <p className="text-base leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
                {clinicData.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-sm font-semibold text-sm flex items-center gap-2 hover:opacity-90"
                  style={{ backgroundColor: "var(--primary)", color: "var(--bg)" }}>
                  קביעת תור <ArrowLeft size={15} aria-hidden="true" />
                </a>
                <a href={`tel:${clinicData.phone}`}
                  className="px-7 py-3.5 rounded-sm font-semibold text-sm border hover:opacity-80"
                  style={{ borderColor: "var(--primary)", color: "var(--primary)" }}>
                  {clinicData.phone}
                </a>
              </div>

              {/* Organic tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["טיפול עדין", "חומרים טבעיים", "סביבה מרגיעה", "נסיון עשיר"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--border)", color: "var(--text-muted)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]"
                role="img" aria-label="מרפאת שיניים חמה ואורגנית">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80"
                  alt="מרפאת שיניים חמה ומזמינה"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating review badge */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-4"
                style={{ border: "1px solid var(--border)" }}>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" aria-hidden="true" />)}
                </div>
                <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>4.9 · 340+ ביקורות</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <HealthFundsStrip />

        {/* ── SERVICES ── */}
        <section id="services" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="services-heading-p3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-12">
              <h2 id="services-heading-p3" className="text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}>הטיפולים שלנו</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                כל הטיפולים הדנטליים שתצטרכו
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <motion.div key={s.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-5 rounded-2xl border text-center hover:shadow-sm transition-shadow"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
                  <div
                    className="flex justify-center mb-3"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {iconMap[s.id as keyof typeof iconMap]}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <p className="text-xs mt-1 hidden sm:block" style={{ color: "var(--text-muted)" }}>{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="about-heading-p3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">
            <div className="rounded-3xl overflow-hidden aspect-square"
              role="img" aria-label={`תמונת ${clinicData.doctorName}`}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt={`ד״ר ${clinicData.doctorName}, רופאת שיניים`}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-5">
              <div className="flex items-center gap-2">
                <Leaf size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs" style={{ color: "var(--accent)" }}>אודות</span>
              </div>
              <h2 id="about-heading-p3" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>{clinicData.doctorName}</h2>
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{clinicData.doctorTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{clinicData.doctorBio}</p>
            </motion.div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="reviews-heading-p3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="reviews-heading-p3" className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>מה אומרים המטופלים</motion.h2>
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <motion.div key={r.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                  <div className="flex text-yellow-500 mb-3" aria-label={`דירוג: ${r.rating} כוכבים`}>
                    {[...Array(r.rating)].map((_, j) => <Star key={j} size={13} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="font-semibold text-sm">{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="faq-heading-p3">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="faq-heading-p3" className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>שאלות נפוצות</motion.h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between p-4 text-right font-semibold text-sm hover:opacity-80"
                    style={{ backgroundColor: "var(--bg)" }}>
                    <span>{faq.q}</span>
                    <ChevronDown size={15} aria-hidden="true"
                      className={cn("transition-transform flex-shrink-0 mr-2", openFaq === i && "rotate-180")}
                      style={{ color: "var(--accent)" }} />
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

        <InsuranceStrip />

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="contact-heading-p3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6">
              <h2 id="contact-heading-p3" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>בואו לבקר</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                נשמח לקבל אתכם בסביבה חמה ומזמינה
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: clinicData.phone, href: `tel:${clinicData.phone}` },
                  { icon: MapPin, text: clinicData.address, href: "#" },
                  { icon: Clock, text: clinicData.hours.weekdays, href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    className="flex items-center gap-3 text-sm hover:opacity-70">
                    <item.icon size={15} style={{ color: "var(--accent)" }} aria-hidden="true" />
                    {item.text}
                  </a>
                ))}
              </div>
              <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90"
                style={{ backgroundColor: "var(--primary)", color: "var(--bg)" }}>
                קביעת תור בוואטסאפ ←
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-3xl min-h-60 flex items-center justify-center"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              role="img" aria-label="מפת מיקום המרפאה">
              <div className="text-center">
                <MapPin size={32} style={{ color: "var(--accent)", margin: "0 auto 8px" }} aria-hidden="true" />
                <p className="text-sm">{clinicData.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-10" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-6 text-sm">
            <div>
              <p className="font-bold text-base mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.doctorName}
              </p>
              <p style={{ color: "var(--text-muted)" }}>{clinicData.address}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">שעות</p>
              <p style={{ color: "var(--text-muted)" }}>{clinicData.hours.weekdays}</p>
            </div>
            <div>
              <p className="font-semibold mb-1">קשר</p>
              <a href={`tel:${clinicData.phone}`} className="hover:opacity-80 block" style={{ color: "var(--text-muted)" }}>
                {clinicData.phone}
              </a>
              <a href="/נגישות" className="hover:opacity-80 block mt-1 underline" style={{ color: "var(--text-muted)" }}>
                הצהרת נגישות
              </a>
            </div>
          </div>
          <div className="border-t pt-4 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {clinicData.name}
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
