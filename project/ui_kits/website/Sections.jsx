/* Ben Walther website UI kit — mid sections (media strip, outcomes, steps) */
const { Kicker, FeatureCard } = window.BigPapi_95c869;

function MediaStrip() {
  const logo = { fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', opacity: .62, fontFamily: 'var(--font-serif)', fontStyle: 'italic' };
  const logoSans = { ...logo, fontFamily: 'var(--font-sans)', fontStyle: 'normal', letterSpacing: '0.02em' };
  return (
    <section style={{ background: 'var(--surface-dark-soft)', color: 'var(--text-on-dark)' }}>
      <div className="bw-container media-row" style={{ padding: '30px 0', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>As featured in</span>
        <span style={logo}>Psychologies</span>
        <span style={logoSans}>BBC Radio</span>
        <span style={logo}>The Times</span>
        <span style={logoSans}>Calm</span>
        <span style={logo}>Stylist</span>
      </div>
    </section>
  );
}

function SectionHead({ kicker, title, center, dark }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 50, maxWidth: center ? undefined : '32ch' }}>
      <Kicker tone={dark ? 'on-dark' : 'plain'}>{kicker}</Kicker>
      <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--fs-h2)', letterSpacing: 'var(--ls-display)', color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)', lineHeight: 1.04, margin: '16px 0 0' }}>{title}</h2>
    </div>
  );
}

function Outcomes() {
  return (
    <section id="out" style={{ padding: '96px 0' }}>
      <div className="bw-container">
        <SectionHead kicker="What changes" title="Six months from now, here's what's different." />
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          <FeatureCard icon="→" title="Clarity">You finally know what you actually want — not what you were told to.</FeatureCard>
          <FeatureCard icon="↑" title="Momentum">You're moving on the thing you've been circling for years.</FeatureCard>
          <FeatureCard icon="◇" title="Steadiness">Setbacks stop derailing you. You recover in days, not months.</FeatureCard>
          <FeatureCard icon="✦" title="Confidence">You trust yourself again — and other people feel it.</FeatureCard>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    ['01', 'Get clear', 'We cut through the noise and name what actually matters to you — underneath the shoulds.'],
    ['02', 'Get unstuck', 'We find the patterns keeping you in place and build the leverage to break them.'],
    ['03', 'Get moving', 'Weekly accountability and doable steps that compound into a different life.'],
  ];
  return (
    <section id="how" style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)' }}>
      <div className="bw-container" style={{ padding: '96px 0' }}>
        <SectionHead center dark kicker="How it works" title="A simple system that actually sticks." />
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {steps.map(([n, t, d]) => (
            <div key={n} style={{ background: 'color-mix(in oklab, var(--text-on-dark) 6%, var(--surface-dark))', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-lg)', padding: '34px 30px' }}>
              <div className="bw-em" style={{ fontSize: 44, color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 23, margin: '14px 0 10px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.55, color: 'var(--text-on-dark-muted)', margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MediaStrip, Outcomes, Steps, SectionHead });
