import * as React from "react";

export interface SparkMarkProps {
  size?: number;
  /** Any CSS color; defaults to the brand gold token. */
  color?: string;
  className?: string;
}

/**
 * The Ben Walther spark logomark. Single source of truth for the mark
 * in React; mirrors public/logo/mark.svg (used for the favicon and
 * non-React contexts).
 */
export function SparkMark({ size = 22, color = "var(--accent)", className }: SparkMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path
        fill={color}
        d="M50 5 C54.5 38 62 45.5 95 50 C62 54.5 54.5 62 50 95 C45.5 62 38 54.5 5 50 C38 45.5 45.5 38 50 5 Z"
      />
    </svg>
  );
}
