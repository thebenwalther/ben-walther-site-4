import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. `accent` (gold) is the primary CTA — one per view. */
  variant?: 'accent' | 'dark' | 'light' | 'outline' | 'outline-on-dark' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor when set. */
  href?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Pill-shaped button in the Ben Walther brand. Gold `accent` is the
 * primary call-to-action; `outline-on-dark` and `soft` pair it on
 * dark heroes and light sections respectively.
 *
 * @startingPoint section="Core" subtitle="Pill CTA button — accent, dark, outline, soft" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
