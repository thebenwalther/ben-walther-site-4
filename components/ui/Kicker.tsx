import * as React from "react";
import styles from "./Kicker.module.css";

export interface KickerProps {
  children?: React.ReactNode;
  /** `plain` gold uppercase, `on-dark` soft gold for dark sections, `pill` tinted capsule. */
  tone?: "plain" | "on-dark" | "pill";
  /** Prefix a small spark glyph. */
  spark?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const toneClass: Record<NonNullable<KickerProps["tone"]>, string> = {
  plain: styles.plain,
  "on-dark": styles.onDark,
  pill: styles.pill,
};

/** Small uppercase eyebrow label that introduces a section heading. */
export function Kicker({ children, tone = "plain", spark = false, className, style }: KickerProps) {
  return (
    <span className={[styles.kicker, toneClass[tone], className || ""].filter(Boolean).join(" ")} style={style}>
      {spark ? <span aria-hidden="true" className={styles.spark}>✦</span> : null}
      {children}
    </span>
  );
}
