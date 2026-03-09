"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  ArrowLeft,
  Award,
  Layers,
  Sparkles,
  Zap,
  SlidersHorizontal,
  HeartPulse,
  AlertCircle,
  Droplets,
} from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import KupatHolimBar from "@/components/shared/KupatHolimBar";
import { clinicData, services, reviews, faqs, navLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ── icon map ── */
const iconMap = {
  implants: <Layers size={26} strokeWidth={1} aria-hidden="true" />,
  veneers: <Sparkles size={26} strokeWidth={1} aria-hidden="true" />,
  whitening: <Zap size={26} strokeWidth={1} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={26} strokeWidth={1} aria-hidden="true" />,
  children: <HeartPulse size={26} strokeWidth={1} aria-hidden="true" />,
  emergency: <AlertCircle size={26} strokeWidth={1} aria-hidden="true" />,
  crowns: <Award size={26} strokeWidth={1} aria-hidden="true" />,
  cleaning: <Droplets size={26} strokeWidth={1} aria-hidden="true" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Premium1() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="theme-p1 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <KupatHolimBar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
              {clinicData.doctorName}
            </span>
            <div className="w-8 h-0.5 mt-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
          </div>
          <nav aria-label="ניווט ראשי">
            <ul className="hidden md:flex items-center gap-8 list-none">
              {[
                { label: "שירותים", href: "#services" },
                { label: "אודות", href: "#about" },
                { label: "ביקורות", href: "#reviews" },
                { label: "צרו קשר", href: "/premium-1/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs font-medium tracking-wide uppercase hover:opacity-60"
                    style={{ color: "var(--text-muted)" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold border hover:opacity-80"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
            <Phone size={13} aria-hidden="true" /> {clinicData.phone}
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="pt-24 pb-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="hero-heading-p1">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  Premium Dental Care
                </span>
              </div>

              <h1 id="hero-heading-p1"
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.tagline}
              </h1>

              <p className="text-base leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
                {clinicData.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="px-8 py-3.5 text-sm font-semibold flex items-center gap-2 hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}>
                  קביעת תור <ArrowLeft size={15} aria-hidden="true" />
                </a>
                <a href={`tel:${clinicData.phone}`}
                  className="px-8 py-3.5 text-sm font-semibold border hover:opacity-80"
                  style={{ borderColor: "var(--text)", color: "var(--text)" }}>
                  {clinicData.phone}
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
              <div className="aspect-[3/4] overflow-hidden"
                role="img" aria-label="מרפאת שיניים יוקרתית">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="מרפאת שיניים מינימליסטית ויוקרתית"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold accent line */}
              <div className="absolute bottom-0 right-0 w-2/3 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-0.5 h-16" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="absolute top-6 -left-6 bg-white p-4 shadow-lg"
                style={{ border: "1px solid var(--border)" }}>
                <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                  15+
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>שנות מצוינות</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-24" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="services-heading-p1">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>Services</span>
              </div>
              <h2 id="services-heading-p1" className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>השירותים שלנו</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border)" }}>
              {services.map((s, i) => (
                <motion.a key={s.id} href={`/premium-1/services/${s.id}`} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-6 hover:opacity-80 transition-opacity block"
                  style={{ backgroundColor: "var(--bg-secondary)" }}>
                  <div
                    className="flex justify-center mb-4"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {iconMap[s.id as keyof typeof iconMap]}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <p className="text-xs mt-1 hidden sm:block" style={{ color: "var(--text-muted)" }}>{s.description}</p>
                  <span className="text-xs mt-2 block" style={{ color: "var(--accent)" }}>קרא עוד ←</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-24" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="about-heading-p1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square overflow-hidden relative"
              role="img" aria-label={`תמונת ${clinicData.doctorName}`}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt={`ד״ר ${clinicData.doctorName}, רופאת שיניים`}
                className="w-full h-full object-cover"
              />
              {/* Gold corner */}
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l" style={{ borderColor: "var(--accent)" }} aria-hidden="true" />
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6">
              <div className="flex items-center gap-3">
                <Award size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>About</span>
              </div>
              <h2 id="about-heading-p1" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>{clinicData.doctorName}</h2>
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{clinicData.doctorTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{clinicData.doctorBio}</p>
              <div className="w-12 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            </motion.div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="py-24" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="reviews-heading-p1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-0.5" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>Reviews</span>
              </div>
              <h2 id="reviews-heading-p1" className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                מה אומרים המטופלים
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div key={r.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-8 bg-white"
                  style={{ boxShadow: "0 1px 20px rgba(0,0,0,0.05)" }}>
                  <div className="flex text-yellow-500 mb-4" aria-label={`דירוג: ${r.rating} כוכבים`}>
                    {[...Array(r.rating)].map((_, j) => <Star key={j} size={13} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text)" }}>&ldquo;{r.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{r.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="faq-heading-p1">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mb-12">
              <h2 id="faq-heading-p1" className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                שאלות נפוצות
              </h2>
              <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            </motion.div>
            <div className="space-y-0 border-t" style={{ borderColor: "var(--border)" }}>
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="border-b" style={{ borderColor: "var(--border)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between py-5 text-right text-sm font-semibold hover:opacity-70"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    <span>{faq.q}</span>
                    <ChevronDown size={15} aria-hidden="true"
                      className={cn("transition-transform flex-shrink-0 mr-3", openFaq === i && "rotate-180")}
                      style={{ color: "var(--accent)" }} />
                  </button>
                  {openFaq === i && (
                    <div className="pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="contact-heading-p1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-7">
              <div>
                <h2 id="contact-heading-p1" className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  יצירת קשר
                </h2>
                <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
              </div>
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
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}>
                קביעת תור ←
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="min-h-56 flex items-center justify-center"
              style={{ backgroundColor: "var(--bg)" }}
              role="img" aria-label="מפת מיקום המרפאה">
              <div className="text-center">
                <MapPin size={30} style={{ color: "var(--accent)", margin: "0 auto 8px" }} aria-hidden="true" />
                <p className="text-sm">{clinicData.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "var(--primary)", color: "var(--bg)" }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-6 text-sm">
            <div>
              <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
                {clinicData.doctorName}
              </p>
              <p className="opacity-60">{clinicData.address}</p>
            </div>
            <div>
              <p className="font-semibold mb-1 opacity-80">שעות</p>
              <p className="opacity-60">{clinicData.hours.weekdays}</p>
              <p className="opacity-60">{clinicData.hours.friday}</p>
            </div>
            <div>
              <p className="font-semibold mb-1 opacity-80">קשר</p>
              <a href={`tel:${clinicData.phone}`} className="opacity-60 hover:opacity-100 block">
                {clinicData.phone}
              </a>
              <a href="/נגישות" className="opacity-60 hover:opacity-100 block mt-1 underline">
                הצהרת נגישות
              </a>
            </div>
          </div>
          <div className="border-t pt-4 text-center text-xs opacity-30"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            © {new Date().getFullYear()} {clinicData.name}
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
