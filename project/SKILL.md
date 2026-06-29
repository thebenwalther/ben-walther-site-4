---
name: ben-walther-design
description: Use this skill to generate well-branded interfaces and assets for Ben Walther (life & personal-growth coach), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Ben Walther — life & personal-growth coach. Creative direction "Momentum": confident and high-energy but warm and premium (not hype/guru).
- **Voice:** warm, direct, plain-spoken, allergic to shame. Second-person "you". Sentence case. "You're not broken." See `readme.md` §2.
- **Palette (canonical):** Forest & Gold — cream surfaces, deep forest green, single gold accent for CTAs/proof. Alternates in `assets/palettes.css`.
- **Type:** Hanken Grotesk (800 display, tight tracking) + Instrument Serif italic for one accent phrase only. Both Google Fonts.
- **Foundations:** tokens in `tokens/*.css`, all imported by root `styles.css`. Link `styles.css` to inherit everything.
- **Components:** React primitives in `components/core/` — Button, Kicker, StatBlock, FeatureCard, Testimonial, ProgramCard, Card. Exposed at `window.BigPapi_95c869` after loading `_ds_bundle.js`.
- **UI kit:** `ui_kits/website/` — a click-through recreation of the marketing site composed from the core components.
- **Assets:** `assets/ben-headshot.jpeg` (client portrait), `assets/palettes.css`, `image-slot.js`.

## How to use the components (in plain HTML)
```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Testimonial } = window.BigPapi_95c869;
  // …render with React
</script>
```

## Rules of thumb
- One gold CTA per view. Gold is for action and proof only.
- Pill buttons; soft warm low-spread shadows; rounded everything.
- Solid cream or forest backgrounds — no gradients or photo backgrounds (only a faint corner gold glow on dark sections).
- Iconography is minimal unicode glyphs (✦ ★ → ◎). If a real icon set is required, substitute Lucide and flag it.
- Use the client's real photography in rounded frames; warm tone.
