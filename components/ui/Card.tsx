import * as React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  children?: React.ReactNode;
  surface?: "white" | "cream" | "dark";
  pad?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "xl";
  shadow?: "none" | "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}

const surfaceClass = { white: styles.white, cream: styles.cream, dark: styles.dark };
const padClass = { sm: styles.padSm, md: styles.padMd, lg: styles.padLg };
const radiusClass = { sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl };
const shadowClass = { none: styles.shadowNone, sm: styles.shadowSm, md: styles.shadowMd, lg: styles.shadowLg };

/** Generic surface primitive — the base other cards specialise. */
export function Card({ children, surface = "white", pad = "lg", radius = "lg", shadow = "lg", className, style }: CardProps) {
  const appliedShadow = surface === "dark" ? "none" : shadow;
  return (
    <div
      className={[surfaceClass[surface], padClass[pad], radiusClass[radius], shadowClass[appliedShadow], className || ""]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
