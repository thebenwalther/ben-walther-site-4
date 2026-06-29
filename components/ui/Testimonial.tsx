import * as React from "react";
import styles from "./Testimonial.module.css";

export interface TestimonialProps {
  quote: React.ReactNode;
  name: React.ReactNode;
  role?: React.ReactNode;
  /** Avatar initials, e.g. "SK". */
  initials?: string;
  /** Filled gold stars, 1–5. */
  rating?: number;
  tone?: "light" | "dark";
  style?: React.CSSProperties;
}

/**
 * Client testimonial card — gold star rating, quote, and an
 * initials avatar with name + role.
 */
export function Testimonial({ quote, name, role, initials, rating = 5, tone = "light", style }: TestimonialProps) {
  const toneClass = tone === "dark" ? styles.dark : styles.light;
  return (
    <figure className={[styles.card, toneClass].join(" ")} style={style}>
      <div aria-label={`${rating} out of 5`} className={styles.stars}>
        {"★".repeat(rating)}
      </div>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <figcaption className={styles.caption}>
        <span aria-hidden="true" className={styles.avatar}>
          {initials}
        </span>
        <span>
          <b className={styles.name}>{name}</b>
          <span className={styles.role}>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
