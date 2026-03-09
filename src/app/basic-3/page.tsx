"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, ChevronDown, Zap, Shield, ArrowLeft } from "lucide-react";
import {
  IconShieldCheck,
  IconDiamond,
  IconBolt,
  IconArrowsHorizontal,
  IconHeart,
  IconAlertTriangle,
  IconCrown,
  IconDroplet,
} from "@tabler/icons-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import KupatHolimBar from "@/components/shared/KupatHolimBar";
import { clinicData, services, reviews, faqs, navLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";

/* ── icon map ── */
const iconMap = {
  implants: <IconShieldCheck size={28} stroke={1.5} aria-hidden="true" />,
  veneers: <IconDiamond size={28} stroke={1.5} aria-hidden="true" />,
  whitening: <IconBolt size={28} stroke={1.5} aria-hidden="true" />,
  orthodontics: <IconArrowsHorizontal size={28} stroke={1.5} aria-hidden="true" />,
  children: <IconHeart size={28} stroke={1.5} aria-hidden="true" />,
  emergency: <IconAlertTriangle size={28} stroke={1.5} aria-hidden="true" />,
  crowns: <IconCrown size={28} stroke={1.5} aria-hidden="true" />,
  cleaning: <IconDroplet size={28} stroke={1.5} aria-hidden="true" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function Basic3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="theme-b3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <AccessibilityWidget />
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40" style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <KupatHolimBar dark />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }} aria-hidden="true">ד</div>
            <span className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
              {clinicData.doctorName}
            </span>
          </div>
          <nav aria-label="ניווט ראשי">
            <ul className="hidden md:flex items-center gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium hover:opacity-70"
                    style={{ color: "var(--text-muted)" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded text-sm font-bold"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
            <Phone size={14} aria-hidden="true" /> {clinicData.phone}
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="py-24 lg:py-36 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="hero-heading-b3">
          {/* Tech grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }} aria-hidden="true" />

          {/* Glow */}
          <div className="absolute top-1/2 right-1/4 w-96 h-96 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ backgroundColor: "var(--accent)", opacity: 0.04, filter: "blur(100px)" }} aria-hidden="true" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center relative">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
              <div className="flex items-center gap-2">
                <Zap size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}>טכנולוגיה דנטלית מתקדמת</span>
              </div>

              <h1 id="hero-heading-b3" className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}>
                הטכנולוגיה<br />
                <span style={{ color: "var(--accent)" }}>בשירות החיוך</span><br />
                שלכם
              </h1>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {clinicData.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 rounded text-sm font-bold flex items-center gap-2 hover:opacity-90"
                  style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
                  קביעת תור <ArrowLeft size={15} aria-hidden="true" />
                </a>
                <a href={`tel:${clinicData.phone}`}
                  className="px-6 py-3 rounded text-sm font-semibold border flex items-center gap-2 hover:opacity-80"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                  <Phone size={14} aria-hidden="true" /> {clinicData.phone}
                </a>
              </div>

              {/* Tech stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { val: "3D", label: "סריקה דיגיטלית" },
                  { val: "CEREC", label: "כתרים ביום" },
                  { val: "לייזר", label: "טיפולים מדויקים" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded border text-center"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
                    <div className="text-sm font-bold" style={{ color: "var(--accent)" }}>{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
              <div className="rounded overflow-hidden aspect-[4/3] border"
                style={{ borderColor: "var(--border)" }}
                role="img" aria-label="מרפאת שיניים טכנולוגית">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
                  alt="ציוד דנטלי מתקדם ומודרני"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay badge */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                className="absolute -bottom-4 -right-4 rounded border p-3"
                style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--accent)" }}>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" aria-hidden="true" />)}
                </div>
                <p className="text-xs font-bold" style={{ color: "var(--accent)" }}>4.9 · 340+ ביקורות</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="services-heading-b3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-10">
              <h2 id="services-heading-b3" className="text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}>הטיפולים שלנו</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                פתרונות מתקדמים לכל צורך דנטלי
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {services.map((s, i) => (
                <motion.div key={s.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-4 rounded border hover:border-[var(--accent)] transition-colors"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
                  <div
                    className="flex justify-center mb-2"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {iconMap[s.id as keyof typeof iconMap]}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-xs hidden sm:block" style={{ color: "var(--text-muted)" }}>{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="about-heading-b3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded border aspect-square overflow-hidden"
              style={{ borderColor: "var(--border)" }}
              role="img" aria-label={`תמונת ${clinicData.doctorName}`}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt={`ד״ר ${clinicData.doctorName}, רופאת שיניים`}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold"
                style={{ color: "var(--accent)" }}>
                <Shield size={13} aria-hidden="true" /> אודות המרפאה
              </div>
              <h2 id="about-heading-b3" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>{clinicData.doctorName}</h2>
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{clinicData.doctorTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{clinicData.doctorBio}</p>
            </motion.div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="reviews-heading-b3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="reviews-heading-b3" className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>מה אומרים המטופלים</motion.h2>
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <motion.div key={r.id} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="p-5 rounded border"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
                  <div className="flex text-yellow-400 mb-3" aria-label={`דירוג: ${r.rating} כוכבים`}>
                    {[...Array(r.rating)].map((_, j) => <Star key={j} size={13} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text)" }}>&ldquo;{r.text}&rdquo;</p>
                  <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{r.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="faq-heading-b3">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              id="faq-heading-b3" className="text-3xl font-bold text-center mb-10"
              style={{ fontFamily: "var(--font-heading)" }}>שאלות נפוצות</motion.h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} initial="hidden"
                  whileInView="show" viewport={{ once: true }}
                  className="rounded border overflow-hidden"
                  style={{ borderColor: openFaq === i ? "var(--accent)" : "var(--border)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between p-4 text-right text-sm font-semibold hover:opacity-80"
                    style={{ backgroundColor: "var(--bg-secondary)" }}>
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

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}
          aria-labelledby="contact-heading-b3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-5">
              <h2 id="contact-heading-b3" className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}>צרו קשר</h2>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: clinicData.phone, href: `tel:${clinicData.phone}` },
                  { icon: MapPin, text: clinicData.address, href: "#" },
                  { icon: Clock, text: clinicData.hours.weekdays, href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    className="flex items-center gap-3 text-sm hover:opacity-80">
                    <item.icon size={15} style={{ color: "var(--accent)" }} aria-hidden="true" />
                    {item.text}
                  </a>
                ))}
              </div>
              <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold hover:opacity-90"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
                קביעת תור ←
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded border min-h-60 flex items-center justify-center"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
              role="img" aria-label="מפת מיקום המרפאה">
              <div className="text-center">
                <MapPin size={32} style={{ color: "var(--accent)", margin: "0 auto 8px" }} aria-hidden="true" />
                <p className="text-sm">{clinicData.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }} className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-6 text-sm">
            <div>
              <p className="font-bold mb-1" style={{ color: "var(--accent)" }}>{clinicData.doctorName}</p>
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
              <a href="/נגישות" className="hover:opacity-80 block underline mt-1" style={{ color: "var(--text-muted)" }}>
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
