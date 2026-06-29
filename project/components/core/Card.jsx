import React from 'react';

/**
 * Ben Walther — Card
 * Generic surface primitive. `surface` picks the background; `pad`
 * and `radius` map to spacing/radius tokens. Other components are
 * specialised versions of this.
 */
export function Card({ children, surface = 'white', pad = 'lg', radius = 'lg', shadow = 'lg', style, ...rest }) {
  const surfaces = {
    white: { background: 'var(--bw-white)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)' },
    cream: { background: 'var(--surface-raised)', color: 'var(--text-body)', border: '1px solid transparent' },
    dark:  { background: 'var(--surface-dark-soft)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' },
  };
  const pads = { sm: 20, md: 28, lg: 34 };
  const radii = { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-2xl)' };
  const shadows = { none: 'none', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' };

  return (
    <div style={{
      padding: pads[pad],
      borderRadius: radii[radius],
      boxShadow: surface === 'dark' ? 'none' : shadows[shadow],
      ...surfaces[surface],
      ...style,
    }} {...rest}>
      {children}
    </div>
  );
}
