import * as React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. `accent` (gold) is the primary CTA — one per view. */
  variant?: "accent" | "dark" | "light" | "outline" | "outline-on-dark" | "soft";
  size?: "sm" | "md" | "lg";
  /** Render as a link when set. */
  href?: string;
  /** With href: render a plain anchor that downloads the file instead of routing. */
  download?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit";
}

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  accent: styles.accent,
  dark: styles.dark,
  light: styles.light,
  outline: styles.outline,
  "outline-on-dark": styles.outlineOnDark,
  soft: styles.soft,
};

const sizeClass: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

/**
 * Pill-shaped button in the Ben Walther brand. Gold `accent` is the
 * primary call-to-action; `outline-on-dark` and `soft` pair it on
 * dark heroes and light sections respectively.
 */
export function Button({
  children,
  variant = "accent",
  size = "md",
  href,
  download = false,
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  style,
  type = "button",
}: ButtonProps) {
  const cls = [
    styles.btn,
    variantClass[variant],
    sizeClass[size],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {iconLeft ? <span aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span aria-hidden="true">{iconRight}</span> : null}
    </>
  );

  if (href && !disabled) {
    if (download) {
      return (
        <a href={href} download className={cls} style={style} onClick={onClick}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={style} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      style={style}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
