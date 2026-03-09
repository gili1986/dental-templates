"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  TrendingUp,
  ArrowLeft,
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
import KupatHolimBar from "@/components/shared/KupatHolimBar";
import { clinicData, services, reviews, faqs, navLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ── icon map ── */
const iconMap = {
  implants: <Layers size={28} strokeWidth={2.5} aria-hidden="true" />,
  veneers: <Sparkles size={28} strokeWidth={2.5} aria-hidden="true" />,
  whitening: <Zap size={28} strokeWidth={2.5} aria-hidden="true" />,
  orthodontics: <SlidersHorizontal size={28} strokeWidth={2.5} aria-hidden="true" />,
  children: <HeartPulse size={28} strokeWidth={2.5} aria-hidden="true" />,
  emergency: <AlertCircle size={28} strokeWidth={2.5} aria-hidden="true" />,
  crowns: <Award size={28} strokeWidth={2.5} aria-hidden="true" />,
  cleaning: <Droplets size={28} strokeWidth={2.5} aria-hidden="true" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function Premium2() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="theme-p2 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "3px solid var(--accent)" }}>
        <KupatHolimBar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {clinicData.doctorName}
          </span>
          <nav aria-label="ניווט ראשי">
            <ul className="hidden md:flex items-center gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-bold hover:text-[var(--accent)] transition-colors"
                    style={{ color: "var(--text-muted)" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}>
            <Phone size={13} aria-hidden="true" /> {clinicData.phone}
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO — EDITORIAL STYLE ── */}
        <section style={{ backgroundColor: "var(--bg)" }} aria-labelledby="hero-heading-p2">
          {/* Big editorial banner */}
          <div className="border-b-4" style={{ borderColor: "var(--accent)" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
              <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span className="text-xs font-extrabold tracking-widest uppercase"
                    style={{ color: "var(--accent)" }}>
                    מרפאת השיניים המובילה
                  </span>
                </div>
                <h1 id="hero-heading-p2"
                  className="text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {clinicData.tagline}
                </h1>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show" className="space-y-6">
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {clinicData.heroSubtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="px-7 py-3 font-extrabold text-white text-base flex items-center gap-2 hover:opacity-90"
                      style={{ backgroundColor: "var(--accent)" }}>
                      קביעת תור עכשיו <ArrowLeft size={16} aria-hidden="true" />
                    </a>
                    <a href={`tel:${clinicData.phone}`}
                      className="px-7 py-3 font-extrabold text-base border-2 hover:bg-black hover:text-white transition-colors"
                      style={{ borderColor: "var(--text)", color: "var(--text)" }}>
                      {clinicData.phone}
                    </a>
                  </div>

                  {/* Stats bar */}
                  <div className="flex gap-8 pt-4 border-t-2" style={{ borderColor: "var(--text)" }}>
                    {[
                      { n: "15+", l: "שנות ניסיון" },
                      { n: "2K+", l: "מטופלים" },
                      { n: "4.9★", l: "דירוג גוגל" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-2xl font-extrabold" style={{ color: "var(--accent)" }}>{s.n}</div>
                        <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Hero image */}
                <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
                  <div className="aspect-[4/3] overflow-hidden"
                    role="img" aria-label="מרפאת שיניים בולדית ומודרנית">
                    <img
                      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
                      alt="כלי עבודה דנטליים מקצועיים"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Red accent corner */}
                  <div className="absolute top-0 left-0 w-4 h-16" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES — Magazine grid ── */}
        <section id="services" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="services-heading-p2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="services-heading-p2"
              className="text-4xl font-extrabold mb-10 border-b-4 pb-4"
              style={{ fontFamily: "var(--font-heading)", borderColor: "var(--accent)" }}>
              השירותים שלנו
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border" style={{ borderColor: "var(--border)" }}>
              {services.map((s, i) => (
                <motion.div key={s.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-6 border-l border-b group hover:bg-black hover:text-white transition-colors"
                  style={{ borderColor: "var(--border)" }}>
                  <div
                    className="flex justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {iconMap[s.id as keyof typeof iconMap]}
                  </div>
                  <h3 className="font-extrabold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="about-heading-p2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative overflow-hidden"
              role="img" aria-label={`תמונת ${clinicData.doctorName}`}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt={`ד״ר ${clinicData.doctorName}, רופאת שיניים`}
                className="w-full h-full object-cover"
              />
              {/* Red strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-5">
              <h2 id="about-heading-p2" className="text-4xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)" }}>{clinicData.doctorName}</h2>
              <div className="h-1 w-12" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                {clinicData.doctorTitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{clinicData.doctorBio}</p>
            </motion.div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="reviews-heading-p2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="reviews-heading-p2"
              className="text-4xl font-extrabold mb-10 border-b-4 pb-4"
              style={{ fontFamily: "var(--font-heading)", borderColor: "var(--accent)" }}>
              מה אומרים עלינו
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div key={r.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-6 border-t-4 bg-white"
                  style={{ borderColor: "var(--accent)" }}>
                  <div className="flex text-yellow-400 mb-3" aria-label={`דירוג: ${r.rating} כוכבים`}>
                    {[...Array(r.rating)].map((_, j) => <Star key={j} size={13} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="font-extrabold text-sm">{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="faq-heading-p2">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="faq-heading-p2"
              className="text-4xl font-extrabold mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>שאלות נפוצות</motion.h2>
            <div className="space-y-0 border-t-2" style={{ borderColor: "var(--text)" }}>
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="border-b-2" style={{ borderColor: "var(--text)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between py-5 text-right font-extrabold text-sm hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}>
                    <span>{faq.q}</span>
                    <ChevronDown size={15} aria-hidden="true"
                      className={cn("transition-transform flex-shrink-0 mr-3", openFaq === i && "rotate-180")} />
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
        <section id="contact" className="py-20" style={{ backgroundColor: "var(--accent)" }}
          aria-labelledby="contact-heading-p2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6">
              <h2 id="contact-heading-p2"
                className="text-4xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-heading)" }}>
                קבעו תור היום
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                נשמח לפגוש אתכם ולהיות הרופאים שלכם לכל החיים
              </p>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: clinicData.phone, href: `tel:${clinicData.phone}` },
                  { icon: MapPin, text: clinicData.address, href: "#" },
                  { icon: Clock, text: clinicData.hours.weekdays, href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white">
                    <item.icon size={15} aria-hidden="true" />
                    {item.text}
                  </a>
                ))}
              </div>
              <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 font-extrabold bg-white hover:bg-gray-100"
                style={{ color: "var(--accent)" }}>
                קביעת תור בוואטסאפ ←
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="min-h-60 flex items-center justify-center bg-white/10 rounded"
              role="img" aria-label="מפת מיקום המרפאה">
              <div className="text-center">
                <MapPin size={32} className="text-white mx-auto mb-2" aria-hidden="true" />
                <p className="text-sm text-white">{clinicData.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "var(--text)", color: "var(--bg)" }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-6 text-sm">
            <div>
              <p className="font-extrabold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {clinicData.doctorName}
              </p>
              <p className="opacity-60">{clinicData.address}</p>
            </div>
            <div>
              <p className="font-bold mb-1">שעות</p>
              <p className="opacity-60">{clinicData.hours.weekdays}</p>
            </div>
            <div>
              <p className="font-bold mb-1">קשר</p>
              <a href={`tel:${clinicData.phone}`} className="opacity-60 hover:opacity-100 block">{clinicData.phone}</a>
              <a href="/נגישות" className="opacity-60 hover:opacity-100 block mt-1 underline">הצהרת נגישות</a>
            </div>
          </div>
          <div className="border-t pt-4 text-center text-xs opacity-30" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            © {new Date().getFullYear()} {clinicData.name}
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
