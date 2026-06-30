import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hero } from "@/components/site/Hero";

export const metadata: Metadata = {
  title: "Hero comparison (internal)",
  robots: { index: false, follow: false },
};

const variants: { id: string; label: string; lead: ReactNode }[] = [
  {
    id: "1",
    label: "Option 1 — current · “who you actually are” (bold, present-tense)",
    lead: (
      <>
        Coaching for capable people who&apos;ve quietly settled. I&apos;ll help you name the pattern that keeps
        you playing small — and close the gap between who you&apos;ve been and who you actually are.
      </>
    ),
  },
  {
    id: "2",
    label: "Option 2 — warmer · “who you’re created to be” (echoes the headline)",
    lead: (
      <>
        Coaching for capable people who&apos;ve quietly settled. I&apos;ll help you name the pattern that keeps
        you playing small — and close the gap between who you are and who you&apos;re created to be.
      </>
    ),
  },
];

const labelBar: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 70,
  background: "var(--accent)",
  color: "var(--accent-ink)",
  fontFamily: "var(--font-sans)",
  fontWeight: 800,
  fontSize: 15,
  letterSpacing: "0.01em",
  padding: "12px 24px",
  textAlign: "center",
};

export default function HeroComparePage() {
  return (
    <main>
      <div
        style={{
          background: "var(--surface-raised)",
          padding: "40px 24px",
          textAlign: "center",
          fontFamily: "var(--font-sans)",
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: 26, color: "var(--text-strong)", margin: "0 0 8px" }}>
          Hero options — side by side
        </h1>
        <p style={{ color: "var(--text-muted)", margin: 0 }}>
          Same headline and layout; only the supporting line changes. Internal review page (not indexed, not linked).
        </p>
      </div>

      {variants.map((v) => (
        <section key={v.id}>
          <div style={labelBar}>{v.label}</div>
          <Hero lead={v.lead} />
        </section>
      ))}
    </main>
  );
}
