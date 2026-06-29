# Website UI kit — Ben Walther

A high-fidelity, click-through recreation of the **Direction D ("Momentum")** marketing site, composed entirely from the design system's core components (`window.BigPapi_95c869`).

## Run
Open `index.html`. It loads React + Babel, the design-system bundle (`_ds_bundle.js`), and the screen files below.

## Structure
- `Header.jsx` — `Nav` (sticky, translucent) + `Hero` (dark, portrait, floating chips, stat strip).
- `Sections.jsx` — `MediaStrip` ("as featured in"), `Outcomes` (FeatureCard grid), `Steps` (dark "how it works"), shared `SectionHead`.
- `Offer.jsx` — `Programs` (ProgramCard tiers), `SocialProof` (stat band + Testimonial wall), `Podcast` (episode cards), `FinalCTA`, `Footer`.
- `app.jsx` — composition + interactivity: `BookingModal` (form → success state), `NowPlaying` podcast bar, smooth scroll to podcast.

## Interactions
- Any **Book / Apply / Enquire** CTA opens the booking modal; submitting shows a confirmation state.
- Clicking a **podcast episode** surfaces a "Now playing" bar.
- **Listen to the podcast** scrolls to the podcast section.

## Components used
`Button`, `Kicker`, `StatBlock`, `FeatureCard`, `ProgramCard`, `Testimonial` — all from the core library. The kit only adds layout and page-specific copy; it does not re-implement primitives.

## Notes
- Portrait: `../../assets/ben-headshot.jpeg`.
- Responsive: grids collapse to one column under 980px.
- This is a faithful recreation of the chosen direction, not a new design.
