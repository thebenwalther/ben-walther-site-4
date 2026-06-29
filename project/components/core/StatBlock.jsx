import React from 'react';

/**
 * Ben Walther — StatBlock
 * A big confident numeral with a label beneath. The trailing unit
 * (+, %, M, yrs, ★) renders in gold. Used in proof strips.
 */
export function StatBlock({ value, unit, label, tone = 'light', align = 'left', size = 'md', style, ...rest }) {
  const isDark = tone === 'dark';
  const sizes = { sm: 30, md: 40, lg: 64 };

  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-black)',
        fontSize: sizes[size],
        letterSpacing: '-0.03em',
        lineHeight: 1,
        color: isDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      }}>
        {value}{unit ? <span style={{ color: 'var(--accent)' }}>{unit}</span> : null}
      </div>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-small)',
        color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        marginTop: 8,
      }}>{label}</div>
    </div>
  );
}
