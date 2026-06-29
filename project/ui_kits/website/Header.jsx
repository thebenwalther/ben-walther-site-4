/* Ben Walther website UI kit — Header (nav + hero) */
const { Button, Kicker, StatBlock } = window.BigPapi_95c869;

function Nav({ onBook }) {
  const link = { fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500, color: 'var(--text-on-dark)', opacity: .74, textDecoration: 'none', cursor: 'pointer' };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'color-mix(in oklab, var(--surface-dark) 92%, transparent)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
      <nav className="bw-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--nav-height)', color: 'var(--text-on-dark)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden="true" style={{ flexShrink: 0 }}><path fill="var(--accent)" d="M50 12 C53.6 40 59.5 45.9 88 50 C59.5 54.1 53.6 60 50 88 C46.4 60 40.5 54.1 12 50 C40.5 45.9 46.4 40 50 12 Z"/></svg>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.015em', whiteSpace: 'nowrap' }}>Ben Walther</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <a style={link} href="#out">Results</a>
          <a style={link} href="#how">How it works</a>
          <a style={link} href="#prog">Programs</a>
          <a style={link} href="#pod">Podcast</a>
          <Button variant="accent" size="sm" onClick={onBook}>Book a call</Button>
        </div>
      </nav>
    </header>
  );
}

function HeroChip({ children, style }) {
  return (
    <div style={{ position: 'absolute', background: 'var(--bw-white)', color: 'var(--text-body)', borderRadius: 'var(--radius-md)', padding: '13px 17px', boxShadow: '0 18px 40px -18px rgba(0,0,0,.5)', display: 'flex', alignItems: 'center', gap: 11, ...style }}>{children}</div>
  );
}

function Hero({ onBook, onListen }) {
  return (
    <section style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(90% 70% at 88% -6%, color-mix(in oklab, var(--accent) 24%, transparent), transparent 52%)' }}></div>
      <div className="bw-container" style={{ position: 'relative', zIndex: 2, paddingTop: 70 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.18fr .82fr', gap: 50, alignItems: 'center' }}>
          <div>
            <Kicker tone="on-dark" spark>Life &amp; Personal Growth Coach</Kicker>
            <h1 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: .97, letterSpacing: 'var(--ls-display)', margin: '26px 0 0' }}>
              You weren't built to settle. <span className="bw-em" style={{ color: 'var(--accent)' }}>Let's prove it.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--text-on-dark-muted)', margin: '28px 0 34px', maxWidth: '40ch' }}>
              High-accountability coaching for people who are finally ready to close the gap between who they are and who they know they could be.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="accent" iconRight="→" onClick={onBook}>Book your free intro call</Button>
              <Button variant="outline-on-dark" iconLeft="▶" onClick={onListen}>Listen to the podcast</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28, fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-on-dark-muted)' }}>
              <span className="bw-stars">★★★★★</span> <span><b style={{ color: 'var(--text-on-dark)' }}>4.9</b> average · from 400+ clients coached</span>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="../../assets/ben-headshot.jpeg" alt="Ben Walther" style={{ width: '100%', height: 540, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
            <HeroChip style={{ left: -30, top: 48 }}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: 'color-mix(in oklab, var(--accent) 16%, var(--bw-white))', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800 }}>✦</div>
              <div><div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-strong)', lineHeight: 1 }}>12 yrs</div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>coaching</div></div>
            </HeroChip>
            <HeroChip style={{ right: -22, bottom: 60, flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <span className="bw-stars">★★★★★</span>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', maxWidth: '12ch' }}>“Changed my whole year.”</div>
            </HeroChip>
          </div>
        </div>
        <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 60, padding: '28px 0 40px', borderTop: '1px solid var(--border-on-dark)' }}>
          <StatBlock tone="dark" value="400" unit="+" label="clients coached" />
          <StatBlock tone="dark" value="1.2" unit="M" label="podcast downloads" />
          <StatBlock tone="dark" value="12" unit="yrs" label="in practice" />
          <StatBlock tone="dark" value="94" unit="%" label="renew or refer" />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero });
