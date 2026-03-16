"use client";

const healthFunds = [
  {
    name: "כללית",
    logoUrl: "https://www.clalit.co.il/he/PublishingImages/SiteLogo/logo-clalit-newsite.svg",
  },
  {
    name: "מכבי",
    logoUrl: "https://www.maccabi4u.co.il/Style/Images/Header/maccabi.png",
  },
  {
    name: "מאוחדת",
    logoUrl: "https://www.meuhedet.co.il/public_content/images/logo.png",
  },
];

const insuranceCompanies = [
  {
    name: "הראל",
    logoUrl: "https://media.harel-group.co.il/media/4jmkigev/harel_logo.svg",
  },
  {
    name: "כלל ביטוח",
    logoUrl: "https://www.clalbit.co.il/AngularClient/dist/assets/images/header/blue-logo2024.png",
  },
  {
    name: "מנורה",
    logoUrl: "https://cdn.menoramivt.co.il/public/images/20230810/1nyh0dll4s6z1h-logo-menora-1@2x.svg",
  },
];

function LogoItem({ name, logoUrl }: { name: string; logoUrl: string }) {
  return (
    <div className="flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity">
      {/* Fixed 96×24 bounding box — normalises all logos to equal visual weight */}
      <div style={{ width: 96, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src={logoUrl}
          alt={name}
          style={{ maxWidth: "96px", maxHeight: "24px", width: "auto", height: "auto", objectFit: "contain" }}
          className="grayscale"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const p = t.parentElement;
            if (p)
              p.innerHTML = `<span style="font-size:12px;font-weight:700;font-family:var(--font-body);opacity:0.6">${name}</span>`;
          }}
        />
      </div>
    </div>
  );
}

function Strip({
  title,
  items,
  align = "center",
}: {
  title: string;
  items: { name: string; logoUrl: string }[];
  align?: "center" | "end";
}) {
  return (
    <div className="py-6" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className={`${align === "end" ? "max-w-6xl" : "max-w-5xl"} mx-auto px-4 sm:px-6 flex flex-col gap-4 ${align === "end" ? "items-start" : "items-center"}`}>
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "var(--text)", fontFamily: "var(--font-body)", opacity: 0.4 }}>
          {title}
        </span>
        <div className={`flex items-center flex-wrap ${align === "end" ? "justify-start" : "justify-center"}`} style={{ gap: 48 }}>
          {items.map((item) => (
            <LogoItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HealthFundsStrip({ align }: { align?: "center" | "end" }) {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      <Strip title="מכירים בקופות החולים" items={healthFunds} align={align} />
    </div>
  );
}

export function InsuranceStrip({ align }: { align?: "center" | "end" }) {
  return (
    <div style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
      <Strip title="עובדים עם חברות ביטוח" items={insuranceCompanies} align={align} />
    </div>
  );
}

export default function TrustStrips() {
  return (
    <>
      <HealthFundsStrip />
      <InsuranceStrip />
    </>
  );
}
