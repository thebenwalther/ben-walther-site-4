import * as React from "react";
import { Button } from "./Button";
import styles from "./ProgramCard.module.css";

export interface ProgramCardProps {
  /** Small uppercase eyebrow, e.g. "Three months". */
  tag?: React.ReactNode;
  name: React.ReactNode;
  /** Price / cadence line, e.g. "$240 / session, every other week". */
  price?: React.ReactNode;
  description?: React.ReactNode;
  ctaLabel?: React.ReactNode;
  ctaHref?: string;
  /** Floating pill, e.g. "Most popular". */
  badge?: React.ReactNode;
  /** Dark forest treatment for the highlighted tier. */
  featured?: boolean;
  onCta?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * A coaching package / pricing tier card. Compose three in a row;
 * mark the middle one `featured` for the dark, badged treatment.
 */
export function ProgramCard({
  tag,
  name,
  price,
  description,
  ctaLabel = "Learn more",
  ctaHref,
  badge,
  featured = false,
  onCta,
  style,
}: ProgramCardProps) {
  return (
    <div className={[styles.card, featured ? styles.featured : styles.standard].join(" ")} style={style}>
      {badge ? <span className={styles.badge}>{badge}</span> : null}
      {tag ? <div className={styles.tag}>{tag}</div> : null}
      <h3 className={styles.name}>{name}</h3>
      {price ? <div className={styles.price}>{price}</div> : null}
      <p className={styles.description}>{description}</p>
      <Button variant={featured ? "accent" : "soft"} href={ctaHref} onClick={onCta} fullWidth>
        {ctaLabel}
      </Button>
    </div>
  );
}
