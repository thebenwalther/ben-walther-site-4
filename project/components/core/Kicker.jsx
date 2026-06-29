import React from 'react';

/**
 * Ben Walther — Kicker
 * Uppercase, wide-tracked section label. The small gold eyebrow that
 * sits above headings. `pill` wraps it in a tinted capsule (bright style).
 */
export function Kicker({ children, tone = 'plain', spark = false, style, ...rest }) {
  const isDark = tone === 'on-dark';
  const isPill = tone === 'pill';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: 'var(--fs-kicker)',
    lineHeight: 1,
    textTransform: 'uppercase',
    letterSpacing: isPill ? '0.04em' : 'var(--ls-kicker)',
    color: isDark ? 'var(--accent-soft)' : 'var(--accent)',
    ...(isPill && {
      textTransform: 'none',
      letterSpacing: '0.02em',
      background: 'color-mix(in oklab, var(--accent) 14%, var(--bw-white))',
      color: 'var(--accent)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
    }),
    ...style,
  };

  return (
    <span style={base} {...rest}>
      {spark ? <span aria-hidden="true" style={{ color: 'var(--accent)' }}>✦</span> : null}
      {children}
    </span>
  );
}
