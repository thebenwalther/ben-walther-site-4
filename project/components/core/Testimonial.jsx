import React from 'react';

/**
 * Ben Walther — Testimonial
 * Soft white card: gold stars, quote, avatar (initials) + attribution.
 */
export function Testimonial({ quote, name, role, initials, rating = 5, tone = 'light', style, ...rest }) {
  const isDark = tone === 'dark';
  return (
    <figure style={{
      margin: 0,
      background: isDark ? 'color-mix(in oklab, var(--text-on-dark) 6%, var(--surface-dark))' : 'var(--bw-white)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 28px',
      boxShadow: isDark ? 'none' : 'var(--shadow-lg)',
      border: isDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-subtle)',
      ...style,
    }} {...rest}>
      <div aria-label={`${rating} out of 5`} style={{ color: 'var(--accent)', letterSpacing: 2, fontSize: 15, marginBottom: 14 }}>
        {'★'.repeat(rating)}
      </div>
      <blockquote style={{
        margin: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body-lg)',
        lineHeight: 1.55,
        color: isDark ? 'var(--text-on-dark)' : 'var(--text-body)',
      }}>{quote}</blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20 }}>
        <span aria-hidden="true" style={{
          width: 42, height: 42, borderRadius: '50%',
          background: 'var(--accent-soft)', color: 'var(--bw-forest-deep)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 15,
        }}>{initials}</span>
        <span>
          <b style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 15, color: isDark ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>{name}</b>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
