/* Ben Walther website UI kit — programs, proof, podcast, final CTA, footer */
const { Button, Kicker, StatBlock, ProgramCard, Testimonial } = window.BigPapi_95c869;

function Programs({ onApply }) {
  return (
    <section id="prog" style={{ padding: '96px 0' }}>
      <div className="bw-container">
        <window.SectionHead center kicker="Ways to start" title="Pick your level of commitment." />
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, alignItems: 'stretch' }}>
          <ProgramCard tag="One-off" name="The Reset" price="$295 · single 90-min session"
            description="A deep, focused session to cut through the fog and leave with a clear, do-able next step."
            ctaLabel="Book a Reset" onCta={onApply} />
          <ProgramCard featured badge="Most popular" tag="Three months" name="1:1 Coaching" price="$240 / session, every other week"
            description="Six sessions plus weekly accountability to make real change stick. This is where transformation happens."
            ctaLabel="Apply for 1:1" onCta={onApply} />
          <ProgramCard tag="Ongoing" name="Inner Circle" price="$420 / month"
            description="Monthly coaching plus between-session support for people building something big and refusing to do it alone."
            ctaLabel="Enquire" onCta={onApply} />
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const t = [
    ['SK', 'Sarah K.', 'Product Designer', "I came in wanting a new job. I left with a different relationship to my whole life. Best money I've ever spent on myself."],
    ['JT', 'James T.', 'Founder', "Ben doesn't let you hide. Kindly, but he doesn't. Three months with him did what three years of overthinking couldn't."],
    ['MR', 'Maya R.', 'Marketing Lead', "I've worked with coaches before. This was the first time it actually translated into things I did, not just felt."],
    ['DO', 'Daniel O.', 'Teacher', "Calm, sharp, and impossible to bluff. I left every session with one clear thing to do — and I did it."],
    ['PL', 'Priya L.', 'Founder', "I finally stopped waiting for permission. Started the business this year. Ben's the reason I jumped."],
    ['TC', 'Tom C.', 'Engineer', "No hype, no shame, no nonsense. Just honest conversations that quietly rearranged my life."],
  ];
  return (
    <section style={{ background: 'var(--surface-raised)' }}>
      <div className="bw-container" style={{ padding: '96px 0' }}>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, textAlign: 'center', marginBottom: 64 }}>
          <StatBlock align="center" size="lg" value="400" unit="+" label="lives changed and counting" />
          <StatBlock align="center" size="lg" value="4.9" unit="★" label="average client rating" />
          <StatBlock align="center" size="lg" value="94" unit="%" label="renew or refer a friend" />
        </div>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 36, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0 }}>Don't take my word for it.</h2>
        </div>
        <div className="proof-wall" style={{ columnCount: 3, columnGap: 20 }}>
          {t.map(([i, n, r, q]) => (
            <div key={i} style={{ breakInside: 'avoid', marginBottom: 20 }}>
              <Testimonial initials={i} name={n} role={r} quote={q} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Episode({ ep, len, title, onPlay }) {
  return (
    <div>
      <div onClick={onPlay} style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden', cursor: 'pointer', background: 'var(--surface-dark)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 80% at 70% 20%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 60%)' }}></div>
        <div style={{ position: 'absolute', left: 16, bottom: 16, width: 46, height: 46, borderRadius: '50%', background: 'var(--accent)', color: 'var(--accent-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 8px 20px -8px rgba(0,0,0,.5)' }}>▶</div>
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em', margin: '18px 0 8px' }}>{ep} · {len}</div>
      <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 20, color: 'var(--text-strong)', lineHeight: 1.25, margin: 0 }}>{title}</h3>
    </div>
  );
}

function Podcast({ onPlay }) {
  return (
    <section id="pod" style={{ padding: '96px 0' }}>
      <div className="bw-container">
        <div className="pod-head" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 30, marginBottom: 42, flexWrap: 'wrap' }}>
          <div>
            <Kicker spark>The Becoming Podcast</Kicker>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 42, letterSpacing: '-0.03em', color: 'var(--text-strong)', margin: '14px 0 0' }}>Weekly conversations on doing the work.</h2>
          </div>
          <a href="#pod" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-strong)', borderBottom: '2px solid var(--accent)', paddingBottom: 3, textDecoration: 'none' }}>All episodes →</a>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          <Episode ep="EP 142" len="48 MIN" title="Why willpower keeps failing you (and what works instead)" onPlay={() => onPlay('EP 142 — Why willpower keeps failing you')} />
          <Episode ep="EP 141" len="53 MIN" title="The quiet cost of always being the strong one" onPlay={() => onPlay('EP 141 — The quiet cost of always being the strong one')} />
          <Episode ep="EP 140" len="41 MIN" title="How to make a hard decision you've been avoiding" onPlay={() => onPlay('EP 140 — How to make a hard decision')} />
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onBook }) {
  return (
    <section style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '120%', transform: 'translate(-50%,-50%)', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 26%, transparent), transparent 60%)', pointerEvents: 'none' }}></div>
      <div className="bw-container" style={{ padding: '120px 0', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Kicker tone="on-dark" spark>Your move</Kicker>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 66, letterSpacing: '-0.035em', lineHeight: 1.02, maxWidth: '20ch', margin: '24px auto 18px' }}>
          The gap won't close <span className="bw-em" style={{ color: 'var(--accent)' }}>by itself.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, color: 'var(--text-on-dark-muted)', marginBottom: 36 }}>Book a free, no-pressure intro call. Twenty minutes to see if we're a fit.</p>
        <Button variant="accent" iconRight="→" onClick={onBook}>Book your free intro call</Button>
      </div>
    </section>
  );
}

function Footer() {
  const col = { display: 'block', fontFamily: 'var(--font-sans)', fontSize: 15, marginBottom: 10, opacity: .78, color: 'var(--text-on-dark)', textDecoration: 'none' };
  const h4 = { fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', marginBottom: 14 };
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', borderTop: '1px solid var(--border-on-dark)' }}>
      <div className="bw-container foot-row" style={{ paddingTop: 46, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 24 }}>Ben Walther</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-on-dark-muted)', marginTop: 10, maxWidth: '30ch' }}>Life &amp; growth coaching for people ready to become themselves.</div>
        </div>
        <div style={{ display: 'flex', gap: 52 }}>
          <div><div style={h4}>Explore</div><a style={col} href="#out">Results</a><a style={col} href="#how">How it works</a><a style={col} href="#prog">Programs</a><a style={col} href="#pod">Podcast</a></div>
          <div><div style={h4}>Connect</div><a style={col} href="#">Instagram</a><a style={col} href="#">LinkedIn</a><a style={col} href="#">YouTube</a><a style={col} href="#">Newsletter</a></div>
        </div>
      </div>
      <div className="bw-container" style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-on-dark-muted)', padding: '40px 0' }}>© 2026 Ben Walther · Certified ICF Coach</div>
    </footer>
  );
}

Object.assign(window, { Programs, SocialProof, Podcast, FinalCTA, Footer });
