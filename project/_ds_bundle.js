/* @ds-bundle: {"format":3,"namespace":"BigPapi_95c869","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/core/FeatureCard.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"ProgramCard","sourcePath":"components/core/ProgramCard.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/core/Testimonial.jsx"}],"sourceHashes":{"assets/palette-switcher.js":"67a457b90e3e","components/core/Button.jsx":"3bace829d0fb","components/core/Card.jsx":"81f3ea7e212b","components/core/FeatureCard.jsx":"6f9f9fe74618","components/core/Kicker.jsx":"4568b84ee954","components/core/ProgramCard.jsx":"267bd234dfe5","components/core/StatBlock.jsx":"2cbb4c02bae3","components/core/Testimonial.jsx":"1a4d50da6ca1","image-slot.js":"9309434cb09c","ui_kits/website/Header.jsx":"83c7b0244e13","ui_kits/website/Offer.jsx":"41a9392aad37","ui_kits/website/Sections.jsx":"326fe9472fcf","ui_kits/website/app.jsx":"892e3b75f393"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BigPapi_95c869 = window.BigPapi_95c869 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/palette-switcher.js
try { (() => {
/* Floating palette switcher shared by the three direction pages.
   Swaps [data-palette] on <html>, persists to localStorage. */
(function () {
  var PALETTES = [{
    id: 'forest',
    name: 'Forest & Gold',
    swatch: ['#1C3A2E', '#C6A664', '#F3EEE4']
  }, {
    id: 'clay',
    name: 'Clay & Terracotta',
    swatch: ['#5B2A22', '#C67A4C', '#F5ECE1']
  }, {
    id: 'ink',
    name: 'Ink & Ochre',
    swatch: ['#242220', '#C0973A', '#F6F3ED']
  }, {
    id: 'plum',
    name: 'Plum & Amber',
    swatch: ['#3A2231', '#C98A5E', '#F4EEE8']
  }, {
    id: 'ember',
    name: 'Ember & Charcoal',
    swatch: ['#221E1C', '#DB7A3C', '#F4F0E9']
  }, {
    id: 'coral',
    name: 'Coral & Cream',
    swatch: ['#FF6A3D', '#2A2521', '#FFF8F1']
  }, {
    id: 'sun',
    name: 'Sunbeam',
    swatch: ['#F4B400', '#232020', '#FFFDF6']
  }, {
    id: 'brass',
    name: 'Midnight & Brass',
    swatch: ['#1E2A36', '#B8924E', '#EFEBE2']
  }];
  var KEY = 'bw-palette';
  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}
  var current = saved || 'forest';
  document.documentElement.setAttribute('data-palette', current);
  function apply(id) {
    current = id;
    document.documentElement.setAttribute('data-palette', id);
    try {
      localStorage.setItem(KEY, id);
    } catch (e) {}
    render();
  }
  var root;
  function render() {
    if (!root) return;
    root.innerHTML = '';
    var label = document.createElement('div');
    label.className = 'ps-label';
    label.textContent = 'Palette';
    root.appendChild(label);
    PALETTES.forEach(function (p) {
      var b = document.createElement('button');
      b.className = 'ps-btn' + (p.id === current ? ' is-on' : '');
      b.title = p.name;
      b.onclick = function () {
        apply(p.id);
      };
      p.swatch.forEach(function (c) {
        var s = document.createElement('span');
        s.style.background = c;
        b.appendChild(s);
      });
      var nm = document.createElement('em');
      nm.textContent = p.name;
      b.appendChild(nm);
      root.appendChild(b);
    });
  }
  function mount() {
    root = document.createElement('div');
    root.className = 'palette-switcher';
    document.body.appendChild(root);
    var css = document.createElement('style');
    css.textContent = ['.palette-switcher{position:fixed;right:20px;bottom:20px;z-index:9999;', 'background:rgba(255,255,255,.86);backdrop-filter:blur(12px);', '-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.08);', 'border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:7px;', 'box-shadow:0 16px 40px -16px rgba(20,18,12,.34);font-family:var(--sans,system-ui),sans-serif;}', '.palette-switcher .ps-label{font-size:11px;font-weight:700;letter-spacing:.14em;', 'text-transform:uppercase;color:#8a877d;padding:2px 4px 4px;}', '.palette-switcher .ps-btn{display:flex;align-items:center;gap:9px;border:none;', 'background:transparent;cursor:pointer;padding:5px 8px 5px 5px;border-radius:9px;', 'transition:background .15s;}', '.palette-switcher .ps-btn:hover{background:rgba(0,0,0,.05);}', '.palette-switcher .ps-btn.is-on{background:rgba(0,0,0,.07);}', '.palette-switcher .ps-btn span{width:13px;height:13px;border-radius:50%;', 'box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);margin-right:-6px;}', '.palette-switcher .ps-btn span:last-of-type{margin-right:0;}', '.palette-switcher .ps-btn em{font-style:normal;font-size:12.5px;font-weight:600;', 'color:#3a3a34;margin-left:6px;white-space:nowrap;}', '.palette-switcher .ps-btn.is-on em{color:#15130d;}', '@media print{.palette-switcher{display:none;}}'].join('');
    document.head.appendChild(css);
    render();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/palette-switcher.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — Button
 * Pill button. `accent` (gold) is the primary CTA; use one per view.
 */
function Button({
  children,
  variant = 'accent',
  size = 'md',
  href,
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const pads = {
    sm: '12px 20px',
    md: '16px 28px',
    lg: '18px 34px'
  };
  const fonts = {
    sm: 15,
    md: 16,
    lg: 17
  };
  const variants = {
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      boxShadow: 'var(--shadow-accent)',
      border: '1.5px solid transparent'
    },
    dark: {
      background: 'var(--surface-dark-soft)',
      color: 'var(--text-on-dark)',
      border: '1.5px solid transparent'
    },
    light: {
      background: 'var(--bw-white)',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-subtle)'
    },
    'outline-on-dark': {
      background: 'transparent',
      color: 'var(--text-on-dark)',
      border: '1.5px solid var(--border-on-dark)'
    },
    soft: {
      background: 'color-mix(in oklab, var(--accent) 14%, var(--bw-white))',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent'
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: fonts[size],
    lineHeight: 1,
    padding: pads[size],
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), opacity var(--dur-fast)',
    ...variants[variant],
    ...style
  };
  const hover = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const leave = e => {
    e.currentTarget.style.transform = 'translateY(0)';
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, iconRight) : null);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: hover,
    onMouseLeave: leave
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — Card
 * Generic surface primitive. `surface` picks the background; `pad`
 * and `radius` map to spacing/radius tokens. Other components are
 * specialised versions of this.
 */
function Card({
  children,
  surface = 'white',
  pad = 'lg',
  radius = 'lg',
  shadow = 'lg',
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: 'var(--bw-white)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    cream: {
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--surface-dark-soft)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    }
  };
  const pads = {
    sm: 20,
    md: 28,
    lg: 34
  };
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-2xl)'
  };
  const shadows = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: pads[pad],
      borderRadius: radii[radius],
      boxShadow: surface === 'dark' ? 'none' : shadows[shadow],
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — FeatureCard
 * Soft surface with a rounded gold-tinted icon tile, title, and copy.
 * Used for "what changes" outcome grids.
 */
function FeatureCard({
  icon,
  title,
  children,
  tone = 'light',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: isDark ? 'color-mix(in oklab, var(--text-on-dark) 6%, var(--surface-dark))' : 'var(--bw-white)',
      borderRadius: 'var(--radius-xl)',
      padding: '34px 30px',
      boxShadow: isDark ? 'none' : 'var(--shadow-lg)',
      border: isDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-md)',
      background: 'color-mix(in oklab, var(--accent) 16%, var(--bw-white))',
      color: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26,
      fontWeight: 'var(--fw-black)',
      marginBottom: 22
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h4)',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.55,
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — Kicker
 * Uppercase, wide-tracked section label. The small gold eyebrow that
 * sits above headings. `pill` wraps it in a tinted capsule (bright style).
 */
function Kicker({
  children,
  tone = 'plain',
  spark = false,
  style,
  ...rest
}) {
  const isDark = tone === 'on-dark';
  const isPill = tone === 'pill';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: 'var(--fs-kicker)',
    lineHeight: 1,
    textTransform: 'uppercase',
    letterSpacing: isPill ? '0.04em' : 'var(--ls-kicker)',
    color: isDark ? 'var(--accent-soft)' : 'var(--accent)',
    ...(isPill && {
      textTransform: 'none',
      letterSpacing: '0.02em',
      background: 'color-mix(in oklab, var(--accent) 14%, var(--bw-white))',
      color: 'var(--accent)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)'
    }),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), spark ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--accent)'
    }
  }, "\u2726") : null, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgramCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — ProgramCard
 * A coaching package / pricing tier. `featured` flips it to the dark
 * forest treatment with a floating "Most popular" pill.
 */
function ProgramCard({
  tag,
  name,
  price,
  description,
  ctaLabel = 'Learn more',
  ctaHref,
  badge,
  featured = false,
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: featured ? 'var(--surface-dark-soft)' : 'var(--bw-white)',
      color: featured ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: featured ? '1.5px solid var(--surface-dark-soft)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl)',
      padding: '36px 32px',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      ...style
    }
  }, rest), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -13,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-black)',
      fontSize: 12,
      letterSpacing: '0.04em',
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, badge) : null, tag ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 16
    }
  }, tag) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'var(--fs-h3)',
      letterSpacing: '-0.01em',
      color: featured ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, name), price ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      margin: '8px 0 18px',
      color: featured ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, price) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.55,
      color: featured ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'accent' : 'soft',
    href: ctaHref,
    onClick: onCta,
    fullWidth: true
  }, ctaLabel));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — StatBlock
 * A big confident numeral with a label beneath. The trailing unit
 * (+, %, M, yrs, ★) renders in gold. Used in proof strips.
 */
function StatBlock({
  value,
  unit,
  label,
  tone = 'light',
  align = 'left',
  size = 'md',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  const sizes = {
    sm: 30,
    md: 40,
    lg: 64
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-black)',
      fontSize: sizes[size],
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, value, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, unit) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: 8
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ben Walther — Testimonial
 * Soft white card: gold stars, quote, avatar (initials) + attribution.
 */
function Testimonial({
  quote,
  name,
  role,
  initials,
  rating = 5,
  tone = 'light',
  style,
  ...rest
}) {
  const isDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: isDark ? 'color-mix(in oklab, var(--text-on-dark) 6%, var(--surface-dark))' : 'var(--bw-white)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 28px',
      boxShadow: isDark ? 'none' : 'var(--shadow-lg)',
      border: isDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-label": `${rating} out of 5`,
    style: {
      color: 'var(--accent)',
      letterSpacing: 2,
      fontSize: 15,
      marginBottom: 14
    }
  }, '★'.repeat(rating)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.55,
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--accent-soft)',
      color: 'var(--bw-forest-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 15
    }
  }, initials), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Testimonial.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Ben Walther website UI kit — Header (nav + hero) */
const {
  Button,
  Kicker,
  StatBlock
} = window.BigPapi_95c869;
function Nav({
  onBook
}) {
  const link = {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: 500,
    color: 'var(--text-on-dark)',
    opacity: .74,
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 60,
      background: 'color-mix(in oklab, var(--surface-dark) 92%, transparent)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "bw-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'var(--nav-height)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "var(--accent)",
    d: "M50 12 C53.6 40 59.5 45.9 88 50 C59.5 54.1 53.6 60 50 88 C46.4 60 40.5 54.1 12 50 C40.5 45.9 46.4 40 50 12 Z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-0.015em',
      whiteSpace: 'nowrap'
    }
  }, "Ben Walther")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#out"
  }, "Results"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#prog"
  }, "Programs"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#pod"
  }, "Podcast"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onBook
  }, "Book a call"))));
}
function HeroChip({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      background: 'var(--bw-white)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 17px',
      boxShadow: '0 18px 40px -18px rgba(0,0,0,.5)',
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      ...style
    }
  }, children);
}
function Hero({
  onBook,
  onListen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(90% 70% at 88% -6%, color-mix(in oklab, var(--accent) 24%, transparent), transparent 52%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-container",
    style: {
      position: 'relative',
      zIndex: 2,
      paddingTop: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.18fr .82fr',
      gap: 50,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: "on-dark",
    spark: true
  }, "Life & Personal Growth Coach"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'var(--fs-display)',
      lineHeight: .97,
      letterSpacing: 'var(--ls-display)',
      margin: '26px 0 0'
    }
  }, "You weren't built to settle. ", /*#__PURE__*/React.createElement("span", {
    className: "bw-em",
    style: {
      color: 'var(--accent)'
    }
  }, "Let's prove it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.5,
      color: 'var(--text-on-dark-muted)',
      margin: '28px 0 34px',
      maxWidth: '40ch'
    }
  }, "High-accountability coaching for people who are finally ready to close the gap between who they are and who they know they could be."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "\u2192",
    onClick: onBook
  }, "Book your free intro call"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark",
    iconLeft: "\u25B6",
    onClick: onListen
  }, "Listen to the podcast")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 28,
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bw-stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, "4.9"), " average \xB7 from 400+ clients coached"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ben-headshot.jpeg",
    alt: "Ben Walther",
    style: {
      width: '100%',
      height: 540,
      objectFit: 'cover',
      borderRadius: 20,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(HeroChip, {
    style: {
      left: -30,
      top: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: 'color-mix(in oklab, var(--accent) 16%, var(--bw-white))',
      color: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 800
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "12 yrs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "coaching"))), /*#__PURE__*/React.createElement(HeroChip, {
    style: {
      right: -22,
      bottom: 60,
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bw-stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      maxWidth: '12ch'
    }
  }, "\u201CChanged my whole year.\u201D")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 60,
      padding: '28px 0 40px',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "400",
    unit: "+",
    label: "clients coached"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "1.2",
    unit: "M",
    label: "podcast downloads"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "12",
    unit: "yrs",
    label: "in practice"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "94",
    unit: "%",
    label: "renew or refer"
  }))));
}
Object.assign(window, {
  Nav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Offer.jsx
try { (() => {
/* Ben Walther website UI kit — programs, proof, podcast, final CTA, footer */
const {
  Button,
  Kicker,
  StatBlock,
  ProgramCard,
  Testimonial
} = window.BigPapi_95c869;
function Programs({
  onApply
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "prog",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    center: true,
    kicker: "Ways to start",
    title: "Pick your level of commitment."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(ProgramCard, {
    tag: "One-off",
    name: "The Reset",
    price: "$295 \xB7 single 90-min session",
    description: "A deep, focused session to cut through the fog and leave with a clear, do-able next step.",
    ctaLabel: "Book a Reset",
    onCta: onApply
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    featured: true,
    badge: "Most popular",
    tag: "Three months",
    name: "1:1 Coaching",
    price: "$240 / session, every other week",
    description: "Six sessions plus weekly accountability to make real change stick. This is where transformation happens.",
    ctaLabel: "Apply for 1:1",
    onCta: onApply
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    tag: "Ongoing",
    name: "Inner Circle",
    price: "$420 / month",
    description: "Monthly coaching plus between-session support for people building something big and refusing to do it alone.",
    ctaLabel: "Enquire",
    onCta: onApply
  }))));
}
function SocialProof() {
  const t = [['SK', 'Sarah K.', 'Product Designer', "I came in wanting a new job. I left with a different relationship to my whole life. Best money I've ever spent on myself."], ['JT', 'James T.', 'Founder', "Ben doesn't let you hide. Kindly, but he doesn't. Three months with him did what three years of overthinking couldn't."], ['MR', 'Maya R.', 'Marketing Lead', "I've worked with coaches before. This was the first time it actually translated into things I did, not just felt."], ['DO', 'Daniel O.', 'Teacher', "Calm, sharp, and impossible to bluff. I left every session with one clear thing to do — and I did it."], ['PL', 'Priya L.', 'Founder', "I finally stopped waiting for permission. Started the business this year. Ben's the reason I jumped."], ['TC', 'Tom C.', 'Engineer', "No hype, no shame, no nonsense. Just honest conversations that quietly rearranged my life."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-raised)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      textAlign: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    align: "center",
    size: "lg",
    value: "400",
    unit: "+",
    label: "lives changed and counting"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "center",
    size: "lg",
    value: "4.9",
    unit: "\u2605",
    label: "average client rating"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    align: "center",
    size: "lg",
    value: "94",
    unit: "%",
    label: "renew or refer a friend"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 36,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Don't take my word for it.")), /*#__PURE__*/React.createElement("div", {
    className: "proof-wall",
    style: {
      columnCount: 3,
      columnGap: 20
    }
  }, t.map(([i, n, r, q]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      breakInside: 'avoid',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    initials: i,
    name: n,
    role: r,
    quote: q
  }))))));
}
function Episode({
  ep,
  len,
  title,
  onPlay
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    onClick: onPlay,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16/10',
      borderRadius: 16,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(80% 80% at 70% 20%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      boxShadow: '0 8px 20px -8px rgba(0,0,0,.5)'
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent)',
      letterSpacing: '0.04em',
      margin: '18px 0 8px'
    }
  }, ep, " \xB7 ", len), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-strong)',
      lineHeight: 1.25,
      margin: 0
    }
  }, title));
}
function Podcast({
  onPlay
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "pod",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pod-head",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 30,
      marginBottom: 42,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    spark: true
  }, "The Becoming Podcast"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 42,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, "Weekly conversations on doing the work.")), /*#__PURE__*/React.createElement("a", {
    href: "#pod",
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      borderBottom: '2px solid var(--accent)',
      paddingBottom: 3,
      textDecoration: 'none'
    }
  }, "All episodes \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Episode, {
    ep: "EP 142",
    len: "48 MIN",
    title: "Why willpower keeps failing you (and what works instead)",
    onPlay: () => onPlay('EP 142 — Why willpower keeps failing you')
  }), /*#__PURE__*/React.createElement(Episode, {
    ep: "EP 141",
    len: "53 MIN",
    title: "The quiet cost of always being the strong one",
    onPlay: () => onPlay('EP 141 — The quiet cost of always being the strong one')
  }), /*#__PURE__*/React.createElement(Episode, {
    ep: "EP 140",
    len: "41 MIN",
    title: "How to make a hard decision you've been avoiding",
    onPlay: () => onPlay('EP 140 — How to make a hard decision')
  }))));
}
function FinalCTA({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      top: '120%',
      transform: 'translate(-50%,-50%)',
      width: 900,
      height: 900,
      borderRadius: '50%',
      background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 26%, transparent), transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bw-container",
    style: {
      padding: '120px 0',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "on-dark",
    spark: true
  }, "Your move"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 66,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      maxWidth: '20ch',
      margin: '24px auto 18px'
    }
  }, "The gap won't close ", /*#__PURE__*/React.createElement("span", {
    className: "bw-em",
    style: {
      color: 'var(--accent)'
    }
  }, "by itself.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 19,
      color: 'var(--text-on-dark-muted)',
      marginBottom: 36
    }
  }, "Book a free, no-pressure intro call. Twenty minutes to see if we're a fit."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "\u2192",
    onClick: onBook
  }, "Book your free intro call")));
}
function Footer() {
  const col = {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    marginBottom: 10,
    opacity: .78,
    color: 'var(--text-on-dark)',
    textDecoration: 'none'
  };
  const h4 = {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-on-dark-muted)',
    marginBottom: 14
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container foot-row",
    style: {
      paddingTop: 46,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 24
    }
  }, "Ben Walther"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      marginTop: 10,
      maxWidth: '30ch'
    }
  }, "Life & growth coaching for people ready to become themselves.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 52
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h4
  }, "Explore"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#out"
  }, "Results"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#prog"
  }, "Programs"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#pod"
  }, "Podcast")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: h4
  }, "Connect"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#"
  }, "YouTube"), /*#__PURE__*/React.createElement("a", {
    style: col,
    href: "#"
  }, "Newsletter")))), /*#__PURE__*/React.createElement("div", {
    className: "bw-container",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)',
      padding: '40px 0'
    }
  }, "\xA9 2026 Ben Walther \xB7 Certified ICF Coach"));
}
Object.assign(window, {
  Programs,
  SocialProof,
  Podcast,
  FinalCTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Offer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Ben Walther website UI kit — mid sections (media strip, outcomes, steps) */
const {
  Kicker,
  FeatureCard
} = window.BigPapi_95c869;
function MediaStrip() {
  const logo = {
    fontSize: 21,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    opacity: .62,
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic'
  };
  const logoSans = {
    ...logo,
    fontFamily: 'var(--font-sans)',
    fontStyle: 'normal',
    letterSpacing: '0.02em'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark-soft)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container media-row",
    style: {
      padding: '30px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "As featured in"), /*#__PURE__*/React.createElement("span", {
    style: logo
  }, "Psychologies"), /*#__PURE__*/React.createElement("span", {
    style: logoSans
  }, "BBC Radio"), /*#__PURE__*/React.createElement("span", {
    style: logo
  }, "The Times"), /*#__PURE__*/React.createElement("span", {
    style: logoSans
  }, "Calm"), /*#__PURE__*/React.createElement("span", {
    style: logo
  }, "Stylist")));
}
function SectionHead({
  kicker,
  title,
  center,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? 'center' : 'left',
      marginBottom: 50,
      maxWidth: center ? undefined : '32ch'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: dark ? 'on-dark' : 'plain'
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2)',
      letterSpacing: 'var(--ls-display)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      lineHeight: 1.04,
      margin: '16px 0 0'
    }
  }, title));
}
function Outcomes() {
  return /*#__PURE__*/React.createElement("section", {
    id: "out",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "What changes",
    title: "Six months from now, here's what's different."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "\u2192",
    title: "Clarity"
  }, "You finally know what you actually want \u2014 not what you were told to."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "\u2191",
    title: "Momentum"
  }, "You're moving on the thing you've been circling for years."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "\u25C7",
    title: "Steadiness"
  }, "Setbacks stop derailing you. You recover in days, not months."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "\u2726",
    title: "Confidence"
  }, "You trust yourself again \u2014 and other people feel it."))));
}
function Steps() {
  const steps = [['01', 'Get clear', 'We cut through the noise and name what actually matters to you — underneath the shoulds.'], ['02', 'Get unstuck', 'We find the patterns keeping you in place and build the leverage to break them.'], ['03', 'Get moving', 'Weekly accountability and doable steps that compound into a different life.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-container",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    dark: true,
    kicker: "How it works",
    title: "A simple system that actually sticks."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: 'color-mix(in oklab, var(--text-on-dark) 6%, var(--surface-dark))',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: '34px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bw-em",
    style: {
      fontSize: 44,
      color: 'var(--accent)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 23,
      margin: '14px 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, d))))));
}
Object.assign(window, {
  MediaStrip,
  Outcomes,
  Steps,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Ben Walther website UI kit — app shell: composition + interactivity */
const {
  Button,
  Kicker
} = window.BigPapi_95c869;
const {
  Nav,
  Hero,
  MediaStrip,
  Outcomes,
  Steps,
  Programs,
  SocialProof,
  Podcast,
  FinalCTA,
  Footer
} = window;
function BookingModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(20,18,12,.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(480px, 100%)',
      background: 'var(--bw-white)',
      borderRadius: 'var(--radius-2xl)',
      padding: '40px 38px',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 18,
      right: 20,
      border: 'none',
      background: 'transparent',
      fontSize: 22,
      color: 'var(--text-muted)',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'color-mix(in oklab, var(--accent) 18%, var(--bw-white))',
      color: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      margin: '0 auto 20px'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em',
      margin: '0 0 10px'
    }
  }, "You're in the diary."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: '0 0 26px'
    }
  }, "Check your inbox \u2014 I'll send a calendar link and a couple of questions to get us started."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: onClose
  }, "Done")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    spark: true
  }, "Free intro call"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em',
      margin: '14px 0 8px'
    }
  }, "Let's see if we're a fit."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: '0 0 24px'
    }
  }, "Twenty minutes, no pressure. Tell me where to reach you."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    placeholder: "Jamie Rivers"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "What's nagging at you right now?",
    placeholder: "A sentence is plenty\u2026",
    textarea: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    iconRight: "\u2192"
  }, "Request my intro call"))))));
}
function Field({
  label,
  type = 'text',
  placeholder,
  textarea
}) {
  const base = {
    width: '100%',
    border: '1.5px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    padding: '13px 16px',
    fontSize: 15.5,
    fontFamily: 'var(--font-sans)',
    color: 'var(--text-body)',
    background: 'var(--surface-page)',
    outline: 'none',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 7
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    placeholder: placeholder,
    style: {
      ...base,
      resize: 'vertical'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    style: base
  }));
}
function NowPlaying({
  track,
  onClose
}) {
  if (!track) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 22,
      transform: 'translateX(-50%)',
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 14px 12px 16px',
      boxShadow: 'var(--shadow-lg)',
      maxWidth: 'calc(100vw - 32px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      flexShrink: 0
    }
  }, "\u2759\u2759"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)'
    }
  }, "Now playing"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 320
    }
  }, track)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Stop",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-on-dark-muted)',
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      paddingLeft: 4
    }
  }, "\xD7"));
}
function App() {
  const [booking, setBooking] = React.useState(false);
  const [track, setTrack] = React.useState(null);
  const openBooking = () => setBooking(true);
  const playPod = () => {
    const el = document.getElementById('pod');
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onBook: openBooking
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: openBooking,
    onListen: playPod
  }), /*#__PURE__*/React.createElement(MediaStrip, null), /*#__PURE__*/React.createElement(Outcomes, null), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement(Programs, {
    onApply: openBooking
  }), /*#__PURE__*/React.createElement(SocialProof, null), /*#__PURE__*/React.createElement(Podcast, {
    onPlay: setTrack
  }), /*#__PURE__*/React.createElement(FinalCTA, {
    onBook: openBooking
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }), /*#__PURE__*/React.createElement(NowPlaying, {
    track: track,
    onClose: () => setTrack(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
