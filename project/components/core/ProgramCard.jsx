import React from 'react';
import { Button } from './Button.jsx';

/**
 * Ben Walther — ProgramCard
 * A coaching package / pricing tier. `featured` flips it to the dark
 * forest treatment with a floating "Most popular" pill.
 */
export function ProgramCard({
  tag, name, price, description, ctaLabel = 'Learn more', ctaHref, badge,
  featured = false, onCta, style, ...rest
}) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: featured ? 'var(--surface-dark-soft)' : 'var(--bw-white)',
      color: featured ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: featured ? '1.5px solid var(--surface-dark-soft)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl)',
      padding: '36px 32px',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      ...style,
    }} {...rest}>
      {badge ? (
        <span style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--accent)', color: 'var(--accent-ink)',
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-black)', fontSize: 12,
          letterSpacing: '0.04em', padding: '7px 16px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
        }}>{badge}</span>
      ) : null}

      {tag ? (
        <div style={{
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 12,
          letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16,
        }}>{tag}</div>
      ) : null}

      <h3 style={{
        margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-black)',
        fontSize: 'var(--fs-h3)', letterSpacing: '-0.01em',
        color: featured ? 'var(--text-on-dark)' : 'var(--text-strong)',
      }}>{name}</h3>

      {price ? (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 15, margin: '8px 0 18px',
          color: featured ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        }}>{price}</div>
      ) : null}

      <p style={{
        margin: '0 0 24px', flex: 1,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', lineHeight: 1.55,
        color: featured ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      }}>{description}</p>

      <Button
        variant={featured ? 'accent' : 'soft'}
        href={ctaHref}
        onClick={onCta}
        fullWidth
      >{ctaLabel}</Button>
    </div>
  );
}
