import React from 'react';

/**
 * Ben Walther — Button
 * Pill button. `accent` (gold) is the primary CTA; use one per view.
 */
export function Button({
  children,
  variant = 'accent',
  size = 'md',
  href,
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const pads = {
    sm: '12px 20px',
    md: '16px 28px',
    lg: '18px 34px',
  };
  const fonts = { sm: 15, md: 16, lg: 17 };

  const variants = {
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      boxShadow: 'var(--shadow-accent)',
      border: '1.5px solid transparent',
    },
    dark: {
      background: 'var(--surface-dark-soft)',
      color: 'var(--text-on-dark)',
      border: '1.5px solid transparent',
    },
    light: {
      background: 'var(--bw-white)',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-subtle)',
    },
    'outline-on-dark': {
      background: 'transparent',
      color: 'var(--text-on-dark)',
      border: '1.5px solid var(--border-on-dark)',
    },
    soft: {
      background: 'color-mix(in oklab, var(--accent) 14%, var(--bw-white))',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent',
    },
  };

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: fonts[size],
    lineHeight: 1,
    padding: pads[size],
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), opacity var(--dur-fast)',
    ...variants[variant],
    ...style,
  };

  const hover = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)'; };
  const leave = (e) => { e.currentTarget.style.transform = 'translateY(0)'; };

  const inner = (
    <>
      {iconLeft ? <span aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span aria-hidden="true">{iconRight}</span> : null}
    </>
  );

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === 'button' ? disabled : undefined}
      style={base}
      onMouseEnter={hover}
      onMouseLeave={leave}
      {...rest}
    >
      {inner}
    </Tag>
  );
}
