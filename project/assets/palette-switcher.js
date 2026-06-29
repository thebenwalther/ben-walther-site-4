/* Floating palette switcher shared by the three direction pages.
   Swaps [data-palette] on <html>, persists to localStorage. */
(function () {
  var PALETTES = [
    { id: 'forest', name: 'Forest & Gold',     swatch: ['#1C3A2E', '#C6A664', '#F3EEE4'] },
    { id: 'clay',   name: 'Clay & Terracotta', swatch: ['#5B2A22', '#C67A4C', '#F5ECE1'] },
    { id: 'ink',    name: 'Ink & Ochre',       swatch: ['#242220', '#C0973A', '#F6F3ED'] },
    { id: 'plum',   name: 'Plum & Amber',      swatch: ['#3A2231', '#C98A5E', '#F4EEE8'] },
    { id: 'ember',  name: 'Ember & Charcoal',  swatch: ['#221E1C', '#DB7A3C', '#F4F0E9'] },
    { id: 'coral',  name: 'Coral & Cream',     swatch: ['#FF6A3D', '#2A2521', '#FFF8F1'] },
    { id: 'sun',    name: 'Sunbeam',           swatch: ['#F4B400', '#232020', '#FFFDF6'] },
    { id: 'brass',  name: 'Midnight & Brass',  swatch: ['#1E2A36', '#B8924E', '#EFEBE2'] },
  ];
  var KEY = 'bw-palette';
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var current = saved || 'forest';
  document.documentElement.setAttribute('data-palette', current);

  function apply(id) {
    current = id;
    document.documentElement.setAttribute('data-palette', id);
    try { localStorage.setItem(KEY, id); } catch (e) {}
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
      b.onclick = function () { apply(p.id); };
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
    css.textContent = [
      '.palette-switcher{position:fixed;right:20px;bottom:20px;z-index:9999;',
      'background:rgba(255,255,255,.86);backdrop-filter:blur(12px);',
      '-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.08);',
      'border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:7px;',
      'box-shadow:0 16px 40px -16px rgba(20,18,12,.34);font-family:var(--sans,system-ui),sans-serif;}',
      '.palette-switcher .ps-label{font-size:11px;font-weight:700;letter-spacing:.14em;',
      'text-transform:uppercase;color:#8a877d;padding:2px 4px 4px;}',
      '.palette-switcher .ps-btn{display:flex;align-items:center;gap:9px;border:none;',
      'background:transparent;cursor:pointer;padding:5px 8px 5px 5px;border-radius:9px;',
      'transition:background .15s;}',
      '.palette-switcher .ps-btn:hover{background:rgba(0,0,0,.05);}',
      '.palette-switcher .ps-btn.is-on{background:rgba(0,0,0,.07);}',
      '.palette-switcher .ps-btn span{width:13px;height:13px;border-radius:50%;',
      'box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);margin-right:-6px;}',
      '.palette-switcher .ps-btn span:last-of-type{margin-right:0;}',
      '.palette-switcher .ps-btn em{font-style:normal;font-size:12.5px;font-weight:600;',
      'color:#3a3a34;margin-left:6px;white-space:nowrap;}',
      '.palette-switcher .ps-btn.is-on em{color:#15130d;}',
      '@media print{.palette-switcher{display:none;}}'
    ].join('');
    document.head.appendChild(css);
    render();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else { mount(); }
})();
