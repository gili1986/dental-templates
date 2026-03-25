"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, Zap, Shield, Cpu, ScanLine, ArrowLeft, Menu, X } from "lucide-react";
import {
  IconShieldCheck,
  IconDiamond,
  IconBolt,
  IconArrowsHorizontal,
  IconHeart,
  IconAlertTriangle,
  IconCrown,
  IconDroplet,
  IconScan,
  IconDevices,
  IconRadioactive,
} from "@tabler/icons-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AccessibilityWidget from "@/components/shared/AccessibilityWidget";
import { HealthFundsStrip, InsuranceStrip } from "@/components/shared/TrustStrips";
import { clinicData, services, reviews } from "@/lib/mock-data";
import { useEffect } from "react";

const b3NavLinks = [
  { label: "טכנולוגיה", href: "#technology" },
  { label: "שירותים", href: "#services" },
  { label: "ביקורות", href: "#reviews" },
  { label: "צרו קשר", href: "#contact" },
];
import { useState } from "react";

/* ── service icon map ── */
const iconMap = {
  implants: <IconShieldCheck size={26} stroke={1.5} aria-hidden="true" />,
  veneers: <IconDiamond size={26} stroke={1.5} aria-hidden="true" />,
  whitening: <IconBolt size={26} stroke={1.5} aria-hidden="true" />,
  orthodontics: <IconArrowsHorizontal size={26} stroke={1.5} aria-hidden="true" />,
  children: <IconHeart size={26} stroke={1.5} aria-hidden="true" />,
  emergency: <IconAlertTriangle size={26} stroke={1.5} aria-hidden="true" />,
  crowns: <IconCrown size={26} stroke={1.5} aria-hidden="true" />,
  crown: <IconCrown size={26} stroke={1.5} aria-hidden="true" />,
  cleaning: <IconDroplet size={26} stroke={1.5} aria-hidden="true" />,
  hygiene: <IconDroplet size={26} stroke={1.5} aria-hidden="true" />,
};

/* ── service tabs ── */
const serviceTabs = [
  {
    id: "restoration",
    label: "שתלים ושיקום",
    ids: ["implants", "crown", "hygiene"],
  },
  {
    id: "aesthetics",
    label: "אסתטיקה",
    ids: ["veneers", "whitening", "orthodontics"],
  },
  {
    id: "family",
    label: "ילדים וחירום",
    ids: ["children", "emergency"],
  },
];

/* ── tech showcase data ── */
const techFeatures = [
  {
    icon: <IconScan size={36} stroke={1} aria-hidden="true" />,
    name: "סריקה תלת-ממדית",
    badge: "3D",
    desc: "סריקה דיגיטלית מדויקת של הפה כולו בשניות — ללא רושם מסורתי. תמונה מדויקת ל-100%.",
    detail: "iTero Element 5D",
  },
  {
    icon: <IconDevices size={36} stroke={1} aria-hidden="true" />,
    name: "כתרים ביום אחד",
    badge: "CEREC",
    desc: "עיצוב, ייצור והתקנת כתר חרסינה בביקור יחיד. ללא מעבדה חיצונית, ללא המתנה.",
    detail: "CEREC Primescan + MC X",
  },
  {
    icon: <IconRadioactive size={36} stroke={1} aria-hidden="true" />,
    name: "טיפולים בלייזר",
    badge: "LASER",
    desc: "טיפולי חניכיים, הלבנה ועוד — עם לייזר דנטלי. ללא כאב, ריפוי מהיר, תוצאות מדויקות.",
    detail: "Fotona LightWalker",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function Basic3() {
  const [activeTab, setActiveTab] = useState("restoration");
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  useEffect(() => { document.title = `${clinicData.doctorName} | מרפאת שיניים`; }, []);

  const activeServices = services.filter((s) =>
    (serviceTabs.find((t) => t.id === activeTab)?.ids ?? []).includes(s.id)
  );

  return (
    <div
      className="theme-b3 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}
    >
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      <AccessibilityWidget />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40"
        style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }} aria-hidden="true">ד</div>
            <span className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}>
              {clinicData.doctorName}
            </span>
          </div>
          {/* Desktop nav */}
          <nav aria-label="ניווט ראשי" className="hidden md:block">
            <ul className="flex items-center gap-6 list-none">
              {b3NavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium hover:opacity-70"
                    style={{ color: "var(--text-muted)" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop phone */}
          <a href={`tel:${clinicData.phone}`} aria-label={`התקשרו: ${clinicData.phone}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-sm font-bold"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
            <Phone size={14} aria-hidden="true" /> {clinicData.phone}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-1"
            aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-b3"
            style={{ color: "var(--text)" }}>
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav id="mobile-nav-b3" aria-label="ניווט נייד"
            className="md:hidden border-t"
            style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
            <ul className="list-none py-2">
              {b3NavLinks.map((link) => (
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
                  className="flex items-center justify-center gap-2 w-full py-3 rounded text-sm font-bold"
                  style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
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
        <section className="py-24 lg:py-36 relative overflow-hidden"
          style={{
            backgroundImage: "url(/clinic-hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-labelledby="hero-heading-b3">
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(8,12,22,0.80)" }} aria-hidden="true" />
          {/* Tech grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }} aria-hidden="true" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ backgroundColor: "var(--accent)", opacity: 0.06, filter: "blur(100px)" }} aria-hidden="true" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
              <div className="flex items-center gap-2">
                <Zap size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}>טכנולוגיה דנטלית מתקדמת</span>
              </div>

              <h1 id="hero-heading-b3" className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none"
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
                  style={{ borderColor: "var(--accent)", color: "var(--accent)", backgroundColor: "#092138" }}>
                  <Phone size={14} aria-hidden="true" /> {clinicData.phone}
                </a>
              </div>

              {/* Tech stat chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { icon: <ScanLine size={13} />, label: "סריקה 3D" },
                  { icon: <Cpu size={13} />, label: "CEREC כתרים ביום" },
                  { icon: <Shield size={13} />, label: "לייזר דנטלי" },
                ].map((chip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold border"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)", backgroundColor: "rgba(0,229,255,0.05)" }}
                  >
                    <span aria-hidden="true">{chip.icon}</span>
                    {chip.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="relative">
              <div className="rounded overflow-hidden aspect-[4/3] border"
                style={{ borderColor: "var(--border)" }}>
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
                  alt="ציוד דנטלי מתקדם ומודרני"
                  className="w-full h-full object-cover"
                />
              </div>
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

        <HealthFundsStrip invert />

        {/* ── TECHNOLOGY SHOWCASE ── */}
        <section id="technology" className="py-20"
          style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
          aria-labelledby="tech-heading-b3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-12">
              <div className="flex justify-center items-center gap-2 mb-3">
                <Cpu size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  ציוד ומערכות
                </span>
              </div>
              <h2 id="tech-heading-b3" className="text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}>
                הטכנולוגיה שמאחורי הטיפול
              </h2>
              <p className="text-sm max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
                אנחנו משקיעים בציוד המתקדם ביותר בעולם — כדי שהטיפול שלכם יהיה מדויק, מהיר ונוח
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {techFeatures.map((t, i) => (
                <motion.div
                  key={t.badge}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-7 rounded border flex flex-col gap-5"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
                >
                  {/* Badge + icon row */}
                  <div className="flex items-start justify-between">
                    <div style={{ color: "var(--accent)" }}>
                      {t.icon}
                    </div>
                    <span className="text-xs font-extrabold px-2 py-1 rounded tracking-widest"
                      style={{ backgroundColor: "rgba(0,229,255,0.1)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
                      {t.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {t.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {t.desc}
                    </p>
                    <p className="text-xs font-mono" style={{ color: "var(--accent)", opacity: 0.7 }}>
                      {t.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES (tabbed) ── */}
        <section id="services" className="py-20" style={{ backgroundColor: "var(--bg)" }}
          aria-labelledby="services-heading-b3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-10">
              <h2 id="services-heading-b3" className="text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}>הטיפולים שלנו</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                פתרונות מתקדמים לכל צורך דנטלי
              </p>
            </motion.div>

            {/* Tab buttons */}
            <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="קטגוריות טיפול">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls="b3-services-panel"
                  onClick={() => setActiveTab(tab.id)}
                  className="px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: "var(--accent)", color: "var(--bg)" }
                      : { backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Service cards */}
            <div id="b3-services-panel" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              role="tabpanel" aria-label={serviceTabs.find((t) => t.id === activeTab)?.label}>
              {activeServices.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="p-5 rounded border flex flex-col gap-3 hover:border-[var(--accent)] transition-colors"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(0,229,255,0.08)", color: "var(--accent)" }}>
                      {iconMap[s.id as keyof typeof iconMap]}
                    </div>
                    <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
          aria-labelledby="about-heading-b3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded border aspect-square overflow-hidden max-w-sm mx-auto md:max-w-full"
              style={{ borderColor: "var(--border)" }}>
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
        <section id="reviews" className="py-20" style={{ backgroundColor: "var(--bg)" }}
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
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
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

        <InsuranceStrip invert />

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20"
          style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
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

      <footer role="contentinfo" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }} className="py-8">
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
          <div className="border-t pt-4 text-center text-xs"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {clinicData.name}
            {" · "}
            <a href="/privacy" className="underline hover:opacity-80">מדיניות פרטיות</a>
            {" · "}
            <a href="/terms" className="underline hover:opacity-80">תנאי שימוש</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton phone={clinicData.whatsapp} />
    </div>
  );
}
