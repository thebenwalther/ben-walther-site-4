import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hero } from "@/components/site/Hero";

export const metadata: Metadata = {
  title: "Hero comparison (internal)",
  robots: { index: false, follow: false },
};

const variants: { id: string; label: string; lead: ReactNode }[] = [
  {
    id: "A",
    label: "Option A — current · “who you know you can be”",
    lead: (
      <>
        Coaching for capable people who&apos;ve quietly settled. I&apos;ll help you name the pattern that keeps
        you playing small — and close the gap between who you are and who you know you can be.
      </>
    ),
  },
  {
    id: "B",
    label: "Option B — ties to the headline · “who you’re built to be”",
    lead: (
      <>
        Coaching for capable people who&apos;ve quietly settled. I&apos;ll help you name the pattern that keeps
        you playing small — and close the gap between who you are and who you&apos;re built to be.
      </>
    ),
  },
  {
    id: "C",
    label: "Option C — boldest · “who you actually are”",
    lead: (
      <>
        Coaching for capable people who&apos;ve quietly settled. I&apos;ll help you name the pattern that keeps
        you playing small — and close the gap between how you&apos;ve been living and who you actually are.
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
