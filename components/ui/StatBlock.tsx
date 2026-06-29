import * as React from "react";
import styles from "./StatBlock.module.css";

export interface StatBlockProps {
  /** The numeral, e.g. "400", "1.2", "4.9". */
  value: React.ReactNode;
  /** Trailing unit rendered in gold, e.g. "+", "%", "M", "yrs", "★". */
  unit?: string;
  label?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const toneClass = { light: styles.light, dark: styles.dark };
const sizeClass = { sm: styles.sm, md: styles.md, lg: styles.lg };

/** Big proof numeral with a caption. The trailing unit is gold. */
export function StatBlock({ value, unit, label, tone = "light", align = "left", size = "md", style }: StatBlockProps) {
  return (
    <div style={{ textAlign: align, ...style }} className={[toneClass[tone], sizeClass[size]].join(" ")}>
      <div className={styles.value}>
        {value}
        {unit ? <span className={styles.unit}>{unit}</span> : null}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
