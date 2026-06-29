/* Ben Walther website UI kit — app shell: composition + interactivity */
const { Button, Kicker } = window.BigPapi_95c869;
const { Nav, Hero, MediaStrip, Outcomes, Steps, Programs, SocialProof, Podcast, FinalCTA, Footer } = window;

function BookingModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (!open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(20,18,12,.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(480px, 100%)', background: 'var(--bw-white)', borderRadius: 'var(--radius-2xl)', padding: '40px 38px', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 18, right: 20, border: 'none', background: 'transparent', fontSize: 22, color: 'var(--text-muted)', cursor: 'pointer', lineHeight: 1 }}>×</button>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '14px 0' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'color-mix(in oklab, var(--accent) 18%, var(--bw-white))', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, margin: '0 auto 20px' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)', letterSpacing: '-0.02em', margin: '0 0 10px' }}>You're in the diary.</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 26px' }}>Check your inbox — I'll send a calendar link and a couple of questions to get us started.</p>
            <Button variant="accent" fullWidth onClick={onClose}>Done</Button>
          </div>
        ) : (
          <div>
            <Kicker spark>Free intro call</Kicker>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 28, color: 'var(--text-strong)', letterSpacing: '-0.02em', margin: '14px 0 8px' }}>Let's see if we're a fit.</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 24px' }}>Twenty minutes, no pressure. Tell me where to reach you.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Your name" placeholder="Jamie Rivers" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="What's nagging at you right now?" placeholder="A sentence is plenty…" textarea />
              <div style={{ marginTop: 8 }}>
                <Button variant="accent" fullWidth iconRight="→">Request my intro call</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, type = 'text', placeholder, textarea }) {
  const base = { width: '100%', border: '1.5px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '13px 16px', fontSize: 15.5, fontFamily: 'var(--font-sans)', color: 'var(--text-body)', background: 'var(--surface-page)', outline: 'none', boxSizing: 'border-box' };
  return (
    <label style={{ display: 'block', marginBottom: 16 }}>
      <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 7 }}>{label}</span>
      {textarea
        ? <textarea rows={3} placeholder={placeholder} style={{ ...base, resize: 'vertical' }} />
        : <input type={type} placeholder={placeholder} style={base} />}
    </label>
  );
}

function NowPlaying({ track, onClose }) {
  if (!track) return null;
  return (
    <div style={{ position: 'fixed', left: '50%', bottom: 22, transform: 'translateX(-50%)', zIndex: 90, display: 'flex', alignItems: 'center', gap: 16, background: 'var(--surface-dark)', color: 'var(--text-on-dark)', borderRadius: 'var(--radius-pill)', padding: '12px 14px 12px 16px', boxShadow: 'var(--shadow-lg)', maxWidth: 'calc(100vw - 32px)' }}>
      <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--accent)', color: 'var(--accent-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>❙❙</span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-soft)' }}>Now playing</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 320 }}>{track}</div>
      </div>
      <button onClick={onClose} aria-label="Stop" style={{ border: 'none', background: 'transparent', color: 'var(--text-on-dark-muted)', fontSize: 20, cursor: 'pointer', lineHeight: 1, paddingLeft: 4 }}>×</button>
    </div>
  );
}

function App() {
  const [booking, setBooking] = React.useState(false);
  const [track, setTrack] = React.useState(null);
  const openBooking = () => setBooking(true);
  const playPod = () => { const el = document.getElementById('pod'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); };
  return (
    <div>
      <Nav onBook={openBooking} />
      <Hero onBook={openBooking} onListen={playPod} />
      <MediaStrip />
      <Outcomes />
      <Steps />
      <Programs onApply={openBooking} />
      <SocialProof />
      <Podcast onPlay={setTrack} />
      <FinalCTA onBook={openBooking} />
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
      <NowPlaying track={track} onClose={() => setTrack(null)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
