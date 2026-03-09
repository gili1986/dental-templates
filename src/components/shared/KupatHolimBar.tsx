import { kupatHolim } from "@/lib/mock-data";

interface KupatHolimBarProps {
  className?: string;
  dark?: boolean;
}

export default function KupatHolimBar({ className = "", dark = false }: KupatHolimBarProps) {
  return (
    <div
      className={`py-3 px-4 border-b ${dark ? "border-[var(--border)] bg-[var(--bg-secondary)]" : "border-gray-100 bg-gray-50"} ${className}`}
      aria-label="קופות חולים מכירות"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span
          className={`text-xs font-medium ml-2 ${dark ? "text-[var(--text-muted)]" : "text-gray-500"}`}
        >
          מכירים בקופות:
        </span>
        {kupatHolim.map((k) => (
          <span
            key={k.abbr}
            className={`text-xs px-3 py-1 rounded-full border font-medium ${
              dark
                ? "border-[var(--border)] text-[var(--text-muted)] bg-transparent"
                : "border-gray-200 text-gray-600 bg-white"
            }`}
          >
            {k.abbr}
          </span>
        ))}
      </div>
    </div>
  );
}
