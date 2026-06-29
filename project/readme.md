# Ben Walther — Design System

The brand and component system for **Ben Walther**, a life & personal-growth coach. This system lets design agents produce on-brand pages, decks, and assets without re-deriving the look each time.

> **Namespace:** components are exposed at `window.BigPapi_95c869` (e.g. `const { Button } = window.BigPapi_95c869`). The namespace is derived from the project's internal title and is cosmetic; the brand is *Ben Walther*.

---

## 1. Brand context

Ben Walther is a one-person coaching practice — **life & personal growth**, one-to-one and small-group, online and in person. The audience is mid-career, quietly successful people in the "messy middle" of a career, relationship, or reinvention who sense there's a fuller version of their life waiting on the other side of a few honest choices.

The chosen creative direction is **"Momentum"** (Direction D in exploration): high-energy and confident — big display headlines, proof numbers (clients, downloads, %), an "as featured in" media strip, star-rated testimonials, and a podcast presence — but kept **warm and premium** through the Forest & Gold palette so it reads as a trustworthy coach, not a hype-driven guru funnel.

### Sources & references
This system was built from scratch (no prior codebase or Figma). Direction was set from these reference sites supplied by the client:
- Calm / literary end: melnoakes.com, denisedt.com, craigwhitementoring.com, simonsinek.com
- High-performance / commercial end (the chosen energy): tonyrobbins.com, lewishowes.com, growthday.com, marieforleo.com, amyporterfield.com, aliabdaal.com, melrobbins.com, gabbybernstein.com, deangraziosi.com, troyslevy.com

Five full exploration pages remain in the project root (`Ben Walther - A … E.html`) with a live palette switcher — useful for revisiting alternate directions.

**Client-supplied asset:** `assets/ben-headshot.jpeg` (Ben's portrait).

---

## 2. Content fundamentals (voice & tone)

The voice is **warm, direct, plain-spoken, and allergic to shame**. It treats the reader as capable, not broken.

- **Person:** Second person "you" addressed directly; first-person "I" for Ben. Reads like a sharp, kind friend.
- **Casing:** Sentence case everywhere except the uppercase kicker labels. No Title Case headlines.
- **Sentence rhythm:** Short, declarative, confident. Often a hard statement followed by a turn — *"You're not broken. You're just out of practice at listening to yourself."*
- **The core reframe:** *"You already know what to do."* / *"You're not broken."* — never deficit framing.
- **Energy without hype:** Confident CTAs ("Let's prove it.", "The gap won't close by itself.") but no fake scarcity, no exclamation-point salesmanship.
- **Emoji:** Used *sparingly* and only in the friendly register (a single 👋 on an intro). Default to none. The brand's "spark" is the ✦ glyph, not emoji.
- **Numbers as proof:** Real, specific, rounded (400+, 1.2M, 94%, 4.9★) — presented plainly, never inflated.
- **Examples:**
  - Hero: *"You weren't built to settle. Let's prove it."*
  - Sub: *"High-accountability coaching for people finally ready to close the gap between who they are and who they know they could be."*
  - Section header: *"Six months from now, here's what's different."*
  - CTA: *"Book your free intro call →"*

---

## 3. Visual foundations

**Palette — Forest & Gold (canonical).** Warm cream surfaces (`#F3EEE4`), deep forest green for dark sections and headlines (`#1C3A2E` / `#14291F`), and a single gold accent (`#C6A664`) reserved almost exclusively for calls-to-action and proof units. Warm near-black ink (`#23231E`) and warm muted grey (`#6E6A5E`) for text. Tokens in `tokens/colors.css`.

- **Alternate palettes** live in `assets/palettes.css` (Ember & Charcoal, Clay & Terracotta, Ink & Ochre, Plum & Amber, Midnight & Brass, Coral & Cream, Sunbeam) — swap brand variables for campaigns while keeping structure. Ember & Charcoal is the recommended high-energy alternate.

**Typography.** Display/UI is **Hanken Grotesk** (800 for headlines, tight `-0.035em` tracking, near-1.0 line height — big and confident). Editorial accent is **Instrument Serif italic**, used *only* for one highlighted phrase per headline, ordinal numerals, and pull-quotes — never body copy. Body is Hanken Grotesk 400/500 at 16–20px with a 1.55 line height and generous measure. Both are Google Fonts (see "Iconography & assets" caveat). Tokens in `tokens/typography.css`.

**Backgrounds.** Solid warm cream or solid deep forest — **no photographic or gradient backgrounds**. The only "decoration" is a soft radial gold glow bleeding from a corner of dark hero/CTA sections (low opacity, ~18–26%), and an occasional large faint circle. Imagery is the client's real photography, placed in rounded frames — warm in tone, never cool or desaturated.

**Cards.** Soft white (`#FBF8F2`) surfaces, generous radius (16–28px), and a **soft warm low-spread shadow** (`0 18px 44px -18px rgba(30,28,20,.4)`) — lifted, not floating. Hairline warm borders. Featured/pricing cards flip to solid forest green. No colored-left-border cards, no harsh drop shadows.

**Corner radii.** Buttons are **fully pill** (999px). Cards 16–28px. Chips/icon-tiles ~14–16px. Photo frames 20–32px. Nothing is sharp-cornered.

**Buttons & interactive.** Primary = gold pill with warm ink text and a soft gold glow shadow. Secondary = forest, white, outline, or tinted-gold "soft". **Hover:** lift `translateY(-2px)` + slightly deeper shadow (no color change). **Press/disabled:** opacity drop. One gold CTA per view.

**Motion.** Restrained. `cubic-bezier(0.22,1,0.36,1)` ease-out, 0.14–0.2s. Hover lifts and fades only — no bounces, no infinite loops, no parallax.

**Spacing & layout.** 8px base rhythm; big section padding (80–120px) for editorial pace. Container 1240px (1100px tight), 56px gutters. Sticky translucent blurred nav at 76px. Generous whitespace is part of the premium feel.

**Transparency & blur.** Used only for the sticky nav (translucent surface + `backdrop-filter: blur(10px)`) and the corner gold glows. Not a general motif.

---

## 4. Iconography & assets

- **Icon approach:** This brand is **deliberately light on iconography**. It uses a small set of **unicode glyphs** as accents rather than an icon library: the **✦ spark** (the brand's signature mark, paired with kickers and CTAs), **★ stars** (gold, for ratings), simple **arrows (→ ▶)**, and a few geometric glyphs (◎ ↑ ♡ ◇) inside gold-tinted icon tiles on feature cards. There is **no icon font and no SVG icon set** — keep it minimal and glyph-based.
- **If a project needs a real icon set**, substitute **Lucide** (CDN: `https://unpkg.com/lucide-static`) — its thin, rounded, friendly stroke best matches the brand. Flag the substitution; it is not part of the native system.
- **Emoji:** avoid except a single 👋 in the friendly intro register.
- **Logo:** the logomark is **"The Spark"** — a refined four-point spark (the brand's ✦ signature, formalized) in gold. Files in `assets/logo/`: `mark.svg` (spark, `currentColor`) and `badge.svg` (gold spark on a forest rounded square, for avatars/favicons). The wordmark sits beside it: "Ben Walther" in Hanken Grotesk 800 at `-0.02em`; on dark it may take a gold period. Two alternates (a lowercase "bw" monogram and an "Ascend" rising-chevron mark) are shown on the Logomark specimen card but the Spark is the recommended primary.
- **Assets folder:** `assets/ben-headshot.jpeg` (client portrait), `assets/palettes.css` (alternate palettes), `assets/palette-switcher.js` (exploration-page palette toggle), `assets/image-slot` helper is at root (`image-slot.js`).

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this); `@import` manifest only.
- `base.css` — element resets + brand utility classes (`.bw-em`, `.bw-kicker`, `.bw-container`, `.bw-stars`).
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.
- `Ben Walther - A…E.html` — the five exploration pages (Direction D = chosen). `explore-directions.html` — the original 3-up hero canvas.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css` (spacing + radius + shadow + layout + motion), `fonts.css`.

**`guidelines/`** — 15 specimen cards: Colors (brand, neutrals, accent-on-dark, semantic), Type (display, body, serif accent, kicker), Spacing (scale, radii, shadows), Brand (wordmark, proof & ratings, alternate palettes, voice).

**`components/core/`** — reusable React primitives (namespace `BigPapi_95c869`):
- `Button` — pill CTA (accent/dark/light/outline/outline-on-dark/soft).
- `Kicker` — uppercase gold eyebrow (plain/on-dark/pill).
- `StatBlock` — big proof numeral with gold unit + label.
- `FeatureCard` — gold-tinted icon tile + title + copy.
- `Testimonial` — star-rated quote card with initials avatar.
- `ProgramCard` — coaching/pricing tier (featured = dark, badged).
- `Card` — generic surface primitive.
- `core.card.html` — live demo of all of the above.

**`ui_kits/`** — *(in progress)* `website/` — click-through recreation of the Direction D marketing page composed from the core components.

---

## 6. Caveats / open items
- **Fonts are CDN (Google Fonts)** via `@import` in `tokens/fonts.css`, so the compiler reports 0 shipped font binaries — expected. Self-host (swap to `@font-face`) if offline use or binary shipping is needed.
- **No logo mark** yet beyond the wordmark — happy to design one. *(Done — see "The Spark" logomark in `assets/logo/`.)*
- **UI kit** screens are being built next.
- **Namespace** `BigPapi_95c869` is cosmetic (from an earlier project auto-title); the brand is Ben Walther.
