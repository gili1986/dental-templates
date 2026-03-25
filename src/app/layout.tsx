import type { Metadata } from "next";
import "./globals.css";
import BackToHomeButton from "@/components/shared/BackToHomeButton";

export const metadata: Metadata = {
  title: "תבניות אתר לרופאי שיניים",
  description: "6 תבניות מקצועיות לאתרי רופאי שיניים בישראל",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <head><script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script></head>
      <body className="antialiased">
        {children}
        <BackToHomeButton />
      </body>
    </html>
  );
}
