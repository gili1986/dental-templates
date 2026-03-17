"use client";
import { useRef, useState, useCallback } from "react";

interface Props {
  beforeSrc: string; // full URL
  afterSrc: string;  // full URL
  label?: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, label }: Props) {
  const [pos, setPos] = useState(42);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      style={{ aspectRatio: "4/3", cursor: "col-resize" }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => { e.preventDefault(); updatePos(e.touches[0].clientX); }}
    >
      {/* BEFORE — real photo, subtle desaturate to feel "pre-treatment" */}
      <img
        src={beforeSrc}
        alt="לפני טיפול"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.95) saturate(0.9)" }}
        draggable={false}
      />

      {/* AFTER — clipped to left `pos`% */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={afterSrc}
          alt="אחרי טיפול"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{
          left: `${pos}%`,
          transform: "translateX(-50%)",
          width: 2,
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 10px rgba(0,0,0,0.4)",
        }}
      >
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center"
          style={{ touchAction: "none", cursor: "col-resize" }}
          onMouseDown={(e) => { dragging.current = true; e.preventDefault(); }}
          onTouchStart={(e) => e.preventDefault()}
          aria-label="גרור להשוואת לפני ואחרי"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M6 9H1M6 9L3.5 6.5M6 9L3.5 11.5" stroke="#444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9H17M12 9L14.5 6.5M12 9L14.5 11.5" stroke="#444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 right-3 z-20 text-xs font-bold uppercase tracking-widest px-2 py-1 text-white pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
        לפני
      </span>
      <span className="absolute bottom-3 left-3 z-20 text-xs font-bold uppercase tracking-widest px-2 py-1 text-white pointer-events-none"
        style={{ backgroundColor: "var(--accent)" }}>
        אחרי
      </span>

      {label && (
        <span className="absolute top-4 right-4 z-20 text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white pointer-events-none"
          style={{ backgroundColor: "var(--accent)" }}>
          {label}
        </span>
      )}
    </div>
  );
}
