"use client";

import * as React from "react";
import { ProgramCard } from "@/components/ui";
import { SectionHead } from "./SectionHead";
import { BookingModal } from "./BookingModal";
import { programs } from "@/lib/data/programs";
import styles from "./Programs.module.css";

/** Coaching package tiers. Each CTA opens the booking modal (secondary funnel). */
export function Programs() {
  const [context, setContext] = React.useState<string | null>(null);

  return (
    <section id="prog" className={styles.section}>
      <div className="bw-container">
        <SectionHead center kicker="Ways to start" title="Pick your level of commitment." />
        <div className={styles.grid}>
          {programs.map((p) => (
            <ProgramCard
              key={p.name}
              tag={p.tag}
              name={p.name}
              price={p.price}
              description={p.description}
              ctaLabel={p.ctaLabel}
              featured={p.featured}
              badge={p.badge}
              onCta={() => setContext(`${p.ctaLabel} — ${p.name}`)}
            />
          ))}
        </div>
      </div>
      <BookingModal open={context !== null} onClose={() => setContext(null)} context={context ?? undefined} />
    </section>
  );
}
