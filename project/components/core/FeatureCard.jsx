import React from 'react';

/**
 * Ben Walther — FeatureCard
 * Soft surface with a rounded gold-tinted icon tile, title, and copy.
 * Used for "what changes" outcome grids.
 */
export function FeatureCard({ icon, title, children, tone = 'light', style, ...rest }) {
  const isDark = tone === 'dark';
  return (
    <div style={{
      background: isDark ? 'color-mix(in oklab, var(--text-on-dark) 6%, var(--surface-dark))' : 'var(--bw-white)',
      borderRadius: 'var(--radius-xl)',
      padding: '34px 30px',
      boxShadow: isDark ? 'none' : 'var(--shadow-lg)',
      border: isDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-subtle)',
      ...style,
    }} {...rest}>
      {icon ? (
        <div style={{
          width: 54, height: 54, borderRadius: 'var(--radius-md)',
          background: 'color-mix(in oklab, var(--accent) 16%, var(--bw-white))',
          color: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, fontWeight: 'var(--fw-black)', marginBottom: 22,
        }}>{icon}</div>
      ) : null}
      <h3 style={{
        margin: '0 0 10px', fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-black)',
        fontSize: 'var(--fs-h4)', color: isDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      }}>{title}</h3>
      <p style={{
        margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', lineHeight: 1.55,
        color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      }}>{children}</p>
    </div>
  );
}
