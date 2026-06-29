import * as React from "react";
import styles from "./FeatureCard.module.css";

export interface FeatureCardProps {
  /** Glyph or node for the rounded gold-tinted icon tile. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  style?: React.CSSProperties;
}

/** Outcome / benefit card — gold-tinted icon tile, title, supporting copy. */
export function FeatureCard({ icon, title, children, tone = "light", style }: FeatureCardProps) {
  const toneClass = tone === "dark" ? styles.dark : styles.light;
  return (
    <div className={[styles.card, toneClass].join(" ")} style={style}>
      {icon ? <div className={styles.icon}>{icon}</div> : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{children}</p>
    </div>
  );
}
