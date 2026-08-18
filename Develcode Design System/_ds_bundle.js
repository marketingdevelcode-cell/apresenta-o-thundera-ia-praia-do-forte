/* @ds-bundle: {"format":4,"namespace":"DevelcodeDesignSystem_775fcf","components":[{"name":"ArrowLabel","sourcePath":"components/brand/ArrowLabel.jsx"},{"name":"CaseCard","sourcePath":"components/brand/CaseCard.jsx"},{"name":"GlowCard","sourcePath":"components/brand/GlowCard.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"LogoWall","sourcePath":"components/brand/LogoWall.jsx"},{"name":"MetricTile","sourcePath":"components/brand/MetricTile.jsx"},{"name":"ResultRow","sourcePath":"components/brand/ResultRow.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/brand/ArrowLabel.jsx":"51313ca98c7c","components/brand/CaseCard.jsx":"1356bf40d57f","components/brand/GlowCard.jsx":"d0e70bb20435","components/brand/Logo.jsx":"7ea9460a6709","components/brand/LogoWall.jsx":"476118019f13","components/brand/MetricTile.jsx":"a00bdf9fef07","components/brand/ResultRow.jsx":"053a26db3519","components/brand/SectionHeading.jsx":"38ca9df4c283","components/core/Badge.jsx":"f11f747f1799","components/core/Button.jsx":"1cfa006dba11","components/core/Card.jsx":"e8df139ea378","components/core/Checkbox.jsx":"5f9ff4a675a8","components/core/IconButton.jsx":"c5eaea96e5e9","components/core/Input.jsx":"5c16786812ae","components/core/Select.jsx":"44f752ad0f15","components/core/Switch.jsx":"5254df2e1a2d","components/core/Tabs.jsx":"b78cfb5d5ab0","ui_kits/apresentacao/Deck.jsx":"d229ab8b0f6f","ui_kits/apresentacao/Slides.jsx":"d115e63f60be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DevelcodeDesignSystem_775fcf = window.DevelcodeDesignSystem_775fcf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ArrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  onDark: {
    fg: 'var(--dc-white)',
    bd: '#1D6BF5',
    bg: '#05070A',
    glow: '0 0 14px rgba(29,107,245,.9), 0 0 34px rgba(2,107,240,.35), inset 0 0 12px rgba(29,107,245,.25)'
  },
  onLight: {
    fg: 'var(--dc-blue-600)',
    bd: 'var(--dc-blue-500)',
    bg: 'var(--dc-white)',
    glow: 'var(--glow-blue-sm)'
  },
  solid: {
    fg: 'var(--dc-white)',
    bd: 'transparent',
    bg: 'var(--dc-blue-600)',
    glow: 'none'
  }
};
const SIZES = {
  sm: {
    fs: 'var(--fs-body-sm)',
    pad: '6px 14px 6px 6px',
    dot: 22,
    gap: 8
  },
  md: {
    fs: 'var(--fs-h4)',
    pad: '8px 20px 8px 8px',
    dot: 30,
    gap: 10
  },
  lg: {
    fs: 'var(--fs-h3)',
    pad: '10px 26px 10px 10px',
    dot: 38,
    gap: 12
  }
};
function ArrowLabel({
  children,
  tone = 'onDark',
  size = 'md',
  showArrow = true,
  full = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.onDark;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : 'auto',
      alignItems: 'center',
      gap: s.gap + 'px',
      padding: showArrow ? s.pad : s.pad.replace(/ \d+px$/, ' ' + (size === 'lg' ? 26 : size === 'sm' ? 14 : 20) + 'px'),
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-w-strong) solid ' + t.bd,
      background: t.bg,
      color: t.fg,
      font: 'var(--fw-bold) ' + s.fs + '/1 var(--font-core)',
      letterSpacing: 'var(--ls-heading)',
      boxShadow: t.glow,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), showArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: s.dot + 'px',
      height: s.dot + 'px',
      borderRadius: 'var(--radius-pill)',
      background: tone === 'onDark' ? '#05070A' : 'transparent',
      border: 'var(--border-w-strong) solid ' + (tone === 'solid' ? 'rgba(255,255,255,.7)' : tone === 'onDark' ? '#1D6BF5' : 'var(--dc-blue-500)'),
      boxShadow: tone === 'onDark' ? '0 0 10px rgba(29,107,245,.7)' : 'none',
      display: 'grid',
      placeItems: 'center',
      fontSize: Math.round(s.dot * 0.5) + 'px',
      lineHeight: 1,
      color: tone === 'onLight' ? 'var(--dc-blue-600)' : 'var(--dc-white)'
    }
  }, "\u2198"), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ArrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/GlowCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlowCard({
  children,
  tone = 'dark',
  glow = 'halo',
  ghostNumber,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const dark = tone !== 'light';
  const shadow = glow === 'blue' ? 'var(--glow-blue-lg)' : glow === 'halo' ? 'var(--halo-card)' : glow === 'none' ? 'none' : 'var(--shadow-md)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--dc-ink-950)' : 'var(--dc-white)',
      border: 'var(--border-w) solid ' + (dark ? '#1B1E24' : 'var(--border-subtle)'),
      boxShadow: shadow,
      color: dark ? 'var(--dc-white)' : 'var(--dc-ink-850)',
      padding,
      ...style
    }
  }, rest), ghostNumber != null && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '10%',
      top: '-6%',
      font: 'var(--fw-black) 8rem/1 var(--font-display)',
      fontStyle: 'italic',
      color: dark ? 'rgba(255,255,255,.045)' : 'rgba(10,11,13,.05)',
      pointerEvents: 'none'
    }
  }, ghostNumber), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { GlowCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GlowCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'horizontal-black': 'develcode-horizontal-black.png',
  'horizontal-white': 'develcode-horizontal-white.png',
  'mark-blue': 'develcode-mark-blue.png',
  'mark-white': 'develcode-mark-white-x.png',
  'mark-tile': 'develcode-mark-tile-blue.png',
  'lockup-2026': 'develcode-lockup-2026-white.png'
};
function Logo({
  variant = 'horizontal-black',
  height = 40,
  assetsBase = '/assets/logos',
  alt = 'Develcode — Own the Shift',
  style,
  ...rest
}) {
  const file = SRC[variant] || SRC['horizontal-black'];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetsBase + '/' + file,
    alt: alt,
    style: {
      height: typeof height === 'number' ? height + 'px' : height,
      width: 'auto',
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      objectFit: 'contain',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  logos = [],
  columns = 6,
  tone = 'asIs',
  gap = 'var(--space-8)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
      gap,
      alignItems: 'center',
      justifyItems: 'center',
      ...style
    }
  }, rest), logos.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: typeof l === 'string' ? l : l.src,
    alt: typeof l === 'string' ? '' : l.alt || '',
    style: {
      maxWidth: '100%',
      height: 40,
      objectFit: 'contain',
      filter: tone === 'knockout' ? 'brightness(0) invert(1)' : 'none',
      opacity: tone === 'knockout' ? .95 : 1
    }
  })));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/brand/MetricTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricTile({
  value,
  label,
  tone = 'blue',
  align = 'center',
  style,
  ...rest
}) {
  const map = {
    blue: {
      bg: 'var(--grad-blue-soft)',
      fg: 'var(--dc-white)',
      bd: 'transparent'
    },
    dark: {
      bg: 'var(--dc-ink-950)',
      fg: 'var(--dc-white)',
      bd: '#1B1E24'
    },
    light: {
      bg: 'var(--dc-white)',
      fg: 'var(--dc-ink-900)',
      bd: 'var(--border-subtle)'
    }
  };
  const t = map[tone] || map.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.bg,
      color: t.fg,
      border: 'var(--border-w) solid ' + t.bd,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5) var(--space-4)',
      textAlign: align,
      display: 'grid',
      gap: '2px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-h2)/1 var(--font-display)',
      letterSpacing: 'var(--ls-display)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.25 var(--font-core)',
      opacity: tone === 'light' ? .7 : .92
    }
  }, label));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/ResultRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ResultRow({
  label,
  value,
  tone = 'dark',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-w) solid ' + (dark ? 'var(--dc-blue-600)' : 'var(--dc-blue-200)'),
      background: dark ? 'rgba(2,107,240,.08)' : 'var(--dc-blue-050)',
      color: dark ? 'var(--dc-white)' : 'var(--dc-ink-900)',
      font: 'var(--fw-regular) var(--fs-body-sm)/1.2 var(--font-core)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .9
    }
  }, label), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, value));
}
Object.assign(__ds_scope, { ResultRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ResultRow.jsx", error: String((e && e.message) || e) }); }

// components/brand/CaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseCard({
  client,
  clientLogo,
  title,
  challengeLabel = 'O Desafio',
  challenge,
  resultsLabel = 'Resultados Obtidos',
  results = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      background: 'var(--dc-ink-950)',
      color: 'var(--dc-white)',
      border: 'var(--border-w) solid #16181D',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--halo-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-core)',
      color: 'var(--dc-blue-400)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase'
    }
  }, client), clientLogo && /*#__PURE__*/React.createElement("img", {
    src: clientLogo,
    alt: "",
    style: {
      height: 20,
      width: 'auto',
      opacity: .9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--dc-ink-1000)',
      border: 'var(--border-w) solid #23262C',
      font: 'var(--fw-bold) var(--fs-body)/1.3 var(--font-core)'
    }
  }, title), challenge && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-core)',
      color: 'var(--dc-blue-400)'
    }
  }, challengeLabel), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-core)',
      color: '#D8DBE1'
    }
  }, challenge)), results.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-core)',
      color: 'var(--dc-blue-400)'
    }
  }, resultsLabel), results.map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.ResultRow, {
    key: i,
    label: r.label,
    value: r.value
  }))));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  title,
  subtitle,
  tone = 'light',
  size = 'h1',
  align = 'left',
  style,
  ...rest
}) {
  const light = tone === 'light';
  const fs = size === 'display' ? 'var(--fs-display-2)' : size === 'h2' ? 'var(--fs-h2)' : 'var(--fs-h1)';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) ' + fs + '/var(--lh-heading) var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--dc-ink-1000)' : 'var(--dc-white)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '62ch',
      font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-snug) var(--font-core)',
      color: light ? 'var(--dc-ink-600)' : 'rgba(255,255,255,.82)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    bg: 'var(--dc-blue-050)',
    fg: 'var(--dc-blue-700)',
    bd: 'var(--dc-blue-200)'
  },
  solid: {
    bg: 'var(--dc-blue-600)',
    fg: 'var(--dc-white)',
    bd: 'transparent'
  },
  neutral: {
    bg: 'var(--dc-ink-150)',
    fg: 'var(--dc-ink-700)',
    bd: 'var(--dc-ink-200)'
  },
  dark: {
    bg: 'rgba(255,255,255,.06)',
    fg: 'var(--dc-white)',
    bd: '#2A2E35'
  },
  success: {
    bg: 'rgba(16,181,127,.12)',
    fg: '#0B7A56',
    bd: 'rgba(16,181,127,.35)'
  },
  warning: {
    bg: 'rgba(245,165,36,.14)',
    fg: '#8A5A05',
    bd: 'rgba(245,165,36,.4)'
  },
  danger: {
    bg: 'rgba(229,72,77,.12)',
    fg: '#A5282C',
    bd: 'rgba(229,72,77,.35)'
  }
};
function Badge({
  children,
  tone = 'blue',
  uppercase = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: 'var(--border-w) solid ' + t.bd,
      font: 'var(--fw-bold) var(--fs-caption)/1.2 var(--font-core)',
      letterSpacing: uppercase ? 'var(--ls-caps)' : 'var(--ls-body)',
      textTransform: uppercase ? 'uppercase' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    pad: '8px 16px',
    fs: 'var(--fs-body-sm)',
    h: 36
  },
  md: {
    pad: '12px 24px',
    fs: 'var(--fs-body)',
    h: 44
  },
  lg: {
    pad: '16px 32px',
    fs: 'var(--fs-body-lg)',
    h: 54
  }
};
function look(variant, hovered, active) {
  switch (variant) {
    case 'secondary':
      return {
        background: hovered ? 'var(--dc-blue-050)' : 'transparent',
        color: 'var(--dc-blue-600)',
        border: 'var(--border-w-strong) solid var(--dc-blue-600)',
        boxShadow: hovered ? 'var(--glow-blue-sm)' : 'none'
      };
    case 'ghost':
      return {
        background: hovered ? 'rgba(2,107,240,.08)' : 'transparent',
        color: 'var(--dc-blue-600)',
        border: 'var(--border-w-strong) solid transparent',
        boxShadow: 'none'
      };
    case 'onDark':
      return {
        background: hovered ? 'rgba(2,107,240,.16)' : 'rgba(255,255,255,.04)',
        color: 'var(--dc-white)',
        border: 'var(--border-w-strong) solid var(--dc-blue-500)',
        boxShadow: hovered ? 'var(--glow-blue)' : 'var(--glow-blue-sm)'
      };
    case 'inverse':
      return {
        background: hovered ? 'var(--dc-ink-150)' : 'var(--dc-white)',
        color: 'var(--dc-blue-600)',
        border: 'var(--border-w-strong) solid transparent',
        boxShadow: 'none'
      };
    default:
      return {
        background: hovered ? 'var(--dc-blue-500)' : 'var(--dc-blue-600)',
        color: 'var(--dc-white)',
        border: 'var(--border-w-strong) solid transparent',
        boxShadow: hovered ? 'var(--glow-blue)' : 'none'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const l = look(variant, hovered && !disabled, active);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      width: full ? '100%' : 'auto',
      minHeight: s.h + 'px',
      padding: s.pad,
      borderRadius: 'var(--radius-pill)',
      font: 'var(--fw-bold) ' + s.fs + '/1 var(--font-core)',
      letterSpacing: 'var(--ls-heading)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      transition: 'var(--transition-interactive)',
      ...l,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'light',
  padding = 'var(--space-6)',
  interactive = false,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--dc-ink-950)' : 'var(--dc-white)',
      color: dark ? 'var(--dc-white)' : 'var(--dc-ink-850)',
      border: 'var(--border-w) solid ' + (dark ? '#1B1E24' : 'var(--border-subtle)'),
      boxShadow: dark ? interactive && hovered ? 'var(--halo-card)' : 'var(--halo-soft)' : interactive && hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: interactive && hovered ? 'translateY(-2px)' : 'none',
      transition: 'var(--transition-interactive)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  tone = 'light',
  disabled,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '20px',
      height: '20px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-xs)',
      border: 'var(--border-w-strong) solid ' + (checked ? 'var(--dc-blue-600)' : dark ? '#3A3E46' : 'var(--border-strong)'),
      background: checked ? 'var(--dc-blue-600)' : 'transparent',
      color: 'var(--dc-white)',
      font: 'var(--fw-bold) 12px/1 var(--font-core)',
      transition: 'var(--transition-interactive)'
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-core)',
      color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 40,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const map = {
    ghost: {
      bg: hovered ? 'rgba(2,107,240,.10)' : 'transparent',
      fg: 'var(--dc-blue-600)',
      bd: 'transparent'
    },
    outline: {
      bg: hovered ? 'var(--dc-blue-050)' : 'transparent',
      fg: 'var(--dc-blue-600)',
      bd: 'var(--dc-blue-600)'
    },
    solid: {
      bg: hovered ? 'var(--dc-blue-500)' : 'var(--dc-blue-600)',
      fg: 'var(--dc-white)',
      bd: 'transparent'
    },
    onDark: {
      bg: hovered ? 'rgba(2,107,240,.18)' : 'rgba(255,255,255,.05)',
      fg: 'var(--dc-white)',
      bd: 'var(--dc-blue-500)'
    }
  };
  const t = map[variant] || map.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width: size + 'px',
      height: size + 'px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: t.bg,
      color: t.fg,
      border: 'var(--border-w-strong) solid ' + t.bd,
      boxShadow: variant === 'onDark' ? 'var(--glow-blue-sm)' : 'none',
      transition: 'var(--transition-interactive)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  tone = 'light',
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const dark = tone === 'dark';
  const rid = id || React.useId();
  const borderColor = error ? 'var(--dc-danger)' : focused ? 'var(--dc-blue-500)' : dark ? '#2A2E35' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-core)',
      color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      minHeight: '44px',
      padding: '10px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-w-strong) solid ' + borderColor,
      background: dark ? 'var(--dc-ink-950)' : 'var(--dc-white)',
      color: dark ? 'var(--dc-white)' : 'var(--dc-ink-900)',
      font: 'var(--fw-regular) var(--fs-body)/1.3 var(--font-core)',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-interactive)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-core)',
      color: error ? 'var(--dc-danger)' : dark ? 'var(--dc-ink-400)' : 'var(--dc-ink-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  tone = 'light',
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const dark = tone === 'dark';
  const rid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      font: 'var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-core)',
      color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      minHeight: '44px',
      padding: '10px 40px 10px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-w-strong) solid ' + (focused ? 'var(--dc-blue-500)' : dark ? '#2A2E35' : 'var(--border-subtle)'),
      background: (dark ? 'var(--dc-ink-950)' : 'var(--dc-white)') + " url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'><path d='M1 1l6 6 6-6' fill='none' stroke='%23026BF0' stroke-width='2'/></svg>\") no-repeat right 16px center",
      color: dark ? 'var(--dc-white)' : 'var(--dc-ink-900)',
      font: 'var(--fw-regular) var(--fs-body)/1.3 var(--font-core)',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: 'var(--transition-interactive)'
    }
  }, rest), options.map((o, i) => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: v
    }, l);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-core)',
      color: dark ? 'var(--dc-ink-400)' : 'var(--dc-ink-500)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  label,
  tone = 'light',
  disabled,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '46px',
      height: '26px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--dc-blue-600)' : dark ? '#2A2E35' : 'var(--dc-ink-300)',
      boxShadow: checked ? 'var(--glow-blue-sm)' : 'none',
      position: 'relative',
      transition: 'var(--transition-interactive)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '23px' : '3px',
      width: '20px',
      height: '20px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--dc-white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-core)',
      color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].value ?? tabs[0]));
  const current = value !== undefined ? value : internal;
  const dark = tone === 'dark';
  const pick = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: '4px',
      padding: '4px',
      borderRadius: 'var(--radius-pill)',
      background: dark ? 'rgba(255,255,255,.05)' : 'var(--dc-ink-150)',
      ...style
    }
  }, rest), tabs.map((t, i) => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const on = v === current;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(v),
      style: {
        padding: '8px 18px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: 'pointer',
        background: on ? dark ? 'var(--dc-blue-600)' : 'var(--dc-white)' : 'transparent',
        color: on ? dark ? 'var(--dc-white)' : 'var(--dc-blue-600)' : dark ? 'rgba(255,255,255,.7)' : 'var(--dc-ink-600)',
        font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-core)',
        boxShadow: on && !dark ? 'var(--shadow-xs)' : 'none',
        transition: 'var(--transition-interactive)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apresentacao/Deck.jsx
try { (() => {
const {
  Button,
  IconButton,
  Tabs
} = window.DevelcodeDesignSystem_775fcf || {};
const VERTICALS = window.VERTICALS || [];
const ORDER = ['title', 'statement', 'index', 'vertical', 'cases', 'proof', 'clients', 'contact'];
const LABELS = {
  title: 'Capa',
  statement: 'O que nos move',
  index: 'Shift OS',
  vertical: 'Vertical',
  cases: 'Cases',
  proof: 'Números',
  clients: 'Clientes',
  contact: 'Contatos'
};
function Deck() {
  const [i, setI] = React.useState(0);
  const [vertical, setVertical] = React.useState(0);
  const step = ORDER[i];
  React.useEffect(() => {
    const h = e => {
      if (e.key === 'ArrowRight') setI(v => Math.min(ORDER.length - 1, v + 1));
      if (e.key === 'ArrowLeft') setI(v => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  const slide = {
    title: /*#__PURE__*/React.createElement(TitleSlide, null),
    statement: /*#__PURE__*/React.createElement(StatementSlide, null),
    index: /*#__PURE__*/React.createElement(IndexSlide, {
      onPick: n => {
        setVertical(n);
        setI(ORDER.indexOf('vertical'));
      }
    }),
    vertical: /*#__PURE__*/React.createElement(VerticalSlide, {
      index: vertical
    }),
    cases: /*#__PURE__*/React.createElement(CasesSlide, null),
    proof: /*#__PURE__*/React.createElement(ProofSlide, null),
    clients: /*#__PURE__*/React.createElement(ClientsSlide, null),
    contact: /*#__PURE__*/React.createElement(ContactSlide, null)
  }[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, slide), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Slide anterior",
    variant: "outline",
    onClick: () => setI(v => Math.max(0, v - 1))
  }, "\u2190"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ORDER.map(k => ({
      value: k,
      label: LABELS[k]
    })),
    value: step,
    onChange: v => setI(ORDER.indexOf(v))
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Pr\xF3ximo slide",
    variant: "outline",
    onClick: () => setI(v => Math.min(ORDER.length - 1, v + 1))
  }, "\u2192"), step === 'vertical' && /*#__PURE__*/React.createElement(Tabs, {
    tabs: VERTICALS.map((v, n) => ({
      value: String(n),
      label: v.name
    })),
    value: String(vertical),
    onChange: v => setVertical(Number(v))
  })));
}
Object.assign(window, {
  Deck
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apresentacao/Deck.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apresentacao/Slides.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.DevelcodeDesignSystem_775fcf || {};
const {
  ArrowLabel,
  MetricTile,
  CaseCard,
  LogoWall,
  Logo
} = DS;
const A = '../../assets';
const S = {
  frame: {
    width: 1280,
    height: 720,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'var(--font-core)'
  },
  pad: {
    position: 'absolute',
    inset: 0,
    padding: '56px 80px',
    display: 'flex',
    flexDirection: 'column'
  },
  h1: {
    margin: 0,
    font: 'var(--fw-bold) var(--fs-h1)/var(--lh-heading) var(--font-display)',
    letterSpacing: 'var(--ls-display)'
  },
  hero: {
    margin: 0,
    font: 'italic var(--fw-bold) var(--fs-display-1)/var(--lh-tight) var(--font-display)',
    letterSpacing: 'var(--ls-display)',
    color: '#fff'
  },
  vertical: {
    margin: '6px 0 0',
    font: 'var(--fw-bold) var(--fs-h2)/1 var(--font-display)',
    color: 'var(--dc-blue-400)'
  },
  dark: {
    background: 'var(--grad-dark), var(--dc-ink-950)'
  },
  blue: {
    backgroundImage: 'url(' + A + '/img/bg-blue-grain.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'var(--dc-blue-600)'
  },
  light: {
    backgroundImage: 'url(' + A + '/img/bg-light-chevron.png)',
    backgroundSize: 'cover',
    backgroundColor: 'var(--dc-ink-100)'
  }
};
function TitleSlide() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.blue
    },
    "data-screen-label": "01 Title"
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/img/ribbon-white.png',
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 620,
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.pad,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup-2026",
    height: 137,
    assetsBase: A + '/logos',
    alt: "Develcode \u2014 Own the Shift \u2014 2026",
    style: {
      position: 'relative'
    }
  })));
}
function StatementSlide() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.light
    },
    "data-screen-label": "02 Statement"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.pad,
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 56,
    assetsBase: A + '/logos',
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement(ArrowLabel, {
    tone: "onLight",
    style: {
      alignSelf: 'flex-start'
    }
  }, "O que nos move"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24,
      maxWidth: 960,
      font: 'var(--fw-regular) 32px/1.35 var(--font-core)',
      color: 'var(--dc-ink-900)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Existimos para ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "mover neg\xF3cios atrav\xE9s da tecnologia."))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "H\xE1 mais de 12 anos, constru\xEDmos software e aceleramos a ado\xE7\xE3o de IA")), ", com inten\xE7\xE3o estrat\xE9gica e clareza em cada entrega."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Chamamos esse movimento de ", /*#__PURE__*/React.createElement("em", {
    style: {
      borderBottom: '2px solid var(--dc-blue-500)'
    }
  }, "SHIFT.")))));
}
const VERTICALS = [{
  name: 'Business',
  image: 'vertical-image-business.png',
  line: /*#__PURE__*/React.createElement(React.Fragment, null, "Decida o que ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "mover no neg\xF3cio")), " antes de escrever c\xF3digo."),
  items: [['Product Discovery', 'Validação de mercado e MVP acelerados por IA.'], ['AI Opportunity Map', 'Casos de IA priorizados por ROI e viabilidade de dados.'], ['Delivery Assessment', 'Diagnóstico de entrega, qualidade e dívida técnica dos times.']]
}, {
  name: 'Build',
  image: 'vertical-image-build.png',
  line: /*#__PURE__*/React.createElement(React.Fragment, null, "O SDLC acelerado por ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "IA e com Governan\xE7a."))),
  items: [['Product Engineering', 'Web, mobile e SaaS com IA integrada ao SDLC.'], ['Application Modernization', 'Refatoração e migração faseada por workload.'], ['AI-Augmented Delivery', 'Squads com workflow agêntico medido por baseline.'], ['Software Sustainment', 'Evolução contínua com SLA e backlog técnico ativo.'], ['Cloud & Infrastructure', 'IaC, FinOps e observabilidade.']]
}, {
  name: 'Data & IA',
  image: 'vertical-image-data.png',
  line: /*#__PURE__*/React.createElement(React.Fragment, null, "Leve ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "IA e intelig\xEAncia de dados")), " para dentro da sua opera\xE7\xE3o."),
  items: [['Intelligent Agents', 'Agentes autônomos operando nos sistemas críticos.'], ['Process Automation', 'Fluxos redesenhados com IA e governança ponta a ponta.'], ['Data & Analytics', 'Pipelines, modelos e analytics sobre dado governado.'], ['AI Strategy Roadmap', 'ROI por caso, maturidade de dados e sequência de adoção.'], ['AI Integration', 'Governe LLMs, MCPs e APIs, do piloto à produção.']]
}, {
  name: 'Management',
  image: 'vertical-image-management.png',
  line: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "Observabilidade executiva da engenharia")), ", e frente de seguran\xE7a."),
  items: [['Executive Intelligence', 'Visão em tempo real da performance da engenharia.'], ['Cybersecurity', 'Correção contínua de vulnerabilidades no pipeline.']]
}];
function IndexSlide({
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      backgroundImage: 'url(' + A + '/img/bg-shift-os-curve.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    "data-screen-label": "03 Shift OS"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.pad,
      padding: '72px 80px 56px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--fw-bold) 62px/1 var(--font-display)',
      color: '#fff',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Shift OS"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: 'var(--fw-light) 40px/1.1 var(--font-core)',
      color: '#fff'
    }
  }, "Nossas ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "4 Verticais:"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 34,
      maxWidth: 560,
      marginTop: 52
    }
  }, VERTICALS.map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: v.name,
    onClick: () => onPick(i),
    style: {
      position: 'relative',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      padding: '0 0 14px',
      cursor: 'pointer',
      font: 'italic var(--fw-bold) 34px/1 var(--font-display)',
      color: '#fff',
      letterSpacing: 'var(--ls-heading)'
    }
  }, "Shift ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontStyle: 'normal',
      color: '#1D6BF5'
    }
  }, v.name), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 560,
      height: 1,
      background: 'linear-gradient(90deg,rgba(255,255,255,.8) 0%,rgba(255,255,255,.3) 55%,rgba(255,255,255,0) 100%)'
    }
  })))), /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-white",
    height: 52,
    assetsBase: A + '/logos',
    style: {
      marginTop: 'auto',
      alignSelf: 'flex-start',
      objectFit: 'contain'
    }
  })));
}
function VerticalSlide({
  index = 0
}) {
  const v = VERTICALS[index];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.dark
    },
    "data-screen-label": 'Shift ' + v.name
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/img/' + v.image,
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 56,
      height: 608,
      width: 296,
      borderRadius: 14,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 110,
      background: 'linear-gradient(0deg,rgba(2,107,240,.42) 0%,rgba(2,107,240,0) 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.pad,
      padding: '56px 336px 56px 80px',
      flexDirection: 'row',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: S.hero
  }, "Shift"), /*#__PURE__*/React.createElement("p", {
    style: S.vertical
  }, v.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '48px 0 0',
      font: 'var(--fw-regular) var(--fs-h3)/1.35 var(--font-core)',
      color: '#fff'
    }
  }, v.line), /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-white",
    height: 56,
    assetsBase: A + '/logos',
    style: {
      marginTop: 'auto',
      alignSelf: 'flex-start',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: v.items.length > 3 ? 14 : 26,
      alignContent: 'center'
    }
  }, v.items.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10,
      height: v.items.length > 3 ? 104 : 162,
      background: '#0B0C0E',
      border: '1px solid #2A2D33',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 0 26px rgba(255,255,255,.13)',
      padding: v.items.length > 3 ? '14px 22px' : '22px 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '4%',
      top: '-12%',
      font: 'var(--fw-black) 190px/1 var(--font-display)',
      color: 'rgba(255,255,255,.035)',
      pointerEvents: 'none'
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'flex-start',
      marginLeft: -20
    }
  }, /*#__PURE__*/React.createElement(ArrowLabel, {
    size: v.items.length > 3 ? 'sm' : 'md'
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '0 0 0 30px',
      maxWidth: '34ch',
      font: 'var(--fw-regular) ' + (v.items.length > 3 ? 'var(--fs-body-sm)' : 'var(--fs-body)') + '/var(--lh-body) var(--font-core)',
      color: '#E3E5E9'
    }
  }, d))))));
}
const CASES = [{
  client: 'Leroy Merlin',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Projeto Instala", /*#__PURE__*/React.createElement("br", null), "Venda de Servi\xE7os Digitais"),
  challenge: 'Criação de canal digital de serviços integrado ao ERP para substituir processos 100% manuais.',
  results: [{
    label: 'Serviços Realizados',
    value: '300.000'
  }, {
    label: 'Profissionais Cadastrados',
    value: '2.000'
  }, {
    label: 'Categorias de Serviços',
    value: '84+'
  }]
}, {
  client: 'Varejo & Saúde',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Reengenharia de", /*#__PURE__*/React.createElement("br", null), "App e Plataforma"),
  challenge: 'Modernização de app com 4M+ usuários em stack obsoleta sem interrupção crítica de operação.',
  results: [{
    label: 'Net Satisfaction Score',
    value: '+80%'
  }, {
    label: 'Data Load Time',
    value: '-80%'
  }]
}, {
  client: 'Tokio Marine',
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "App de Atendimento", /*#__PURE__*/React.createElement("br", null), "a Sinistros"),
  challenge: 'Redução de gargalos operacionais no atendimento telefônico via automação digital.',
  results: [{
    label: 'Custos Operacionais',
    value: '-30%'
  }, {
    label: 'Agilidade de Atendimento',
    value: 'Elevada'
  }, {
    label: 'Erros Manuais',
    value: 'Extintos'
  }]
}];
function CasesSlide() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.blue
    },
    "data-screen-label": "Cases"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark-white",
    height: 44,
    assetsBase: A + '/logos',
    style: {
      position: 'absolute',
      right: 80,
      top: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: S.pad
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...S.h1,
      color: '#fff'
    }
  }, "Alguns de nossos ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "Cases")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-snug) var(--font-core)',
      color: '#fff'
    }
  }, "Resultados reais que comprovam ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "nossa capacidade de transformar opera\xE7\xF5es."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, CASES.map(c => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: c.client
  }, c))))));
}
function ProofSlide() {
  const tiles = [['12', /*#__PURE__*/React.createElement(React.Fragment, null, "Anos de", /*#__PURE__*/React.createElement("br", null), "Mercado")], ['+80%', /*#__PURE__*/React.createElement(React.Fragment, null, "NPS de", /*#__PURE__*/React.createElement("br", null), "Satisfa\xE7\xE3o")], ['+100', /*#__PURE__*/React.createElement(React.Fragment, null, "Clientes", /*#__PURE__*/React.createElement("br", null), "Atendidos")], ['+500', /*#__PURE__*/React.createElement(React.Fragment, null, "Projetos", /*#__PURE__*/React.createElement("br", null), "Entregues")]];
  const blue = 'linear-gradient(105deg,#0B5BE8 0%,#0A55E0 55%,#0733B8 100%)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.light
    },
    "data-screen-label": "Proof"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.pad,
      padding: '75px 82px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 97,
    assetsBase: A + '/logos',
    style: {
      alignSelf: 'flex-start',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 49,
      boxSizing: 'border-box',
      width: 1078,
      height: 239,
      borderRadius: 22,
      background: blue,
      display: 'flex',
      alignItems: 'center',
      padding: '0 64px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) 33px/1.35 var(--font-core)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      lineHeight: 1,
      marginRight: 10,
      textShadow: '0 0 12px rgba(255,255,255,.6)'
    }
  }, "\u2198"), /*#__PURE__*/React.createElement("strong", null, "6x consecutivas"), " certificados GPTW em 4 categorias", /*#__PURE__*/React.createElement("br", null), "nos rankings regionais e nacionais.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1078,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22,
      marginTop: 40
    }
  }, tiles.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 137,
      borderRadius: 12,
      background: blue,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      color: '#fff',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: 'var(--fw-bold) 38px/1 var(--font-display)',
      letterSpacing: 'var(--ls-display)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/1.2 var(--font-core)'
    }
  }, l))))));
}
function ClientsSlide() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.blue
    },
    "data-screen-label": "Clientes"
  }, /*#__PURE__*/React.createElement("div", {
    style: S.pad
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...S.h1,
      color: '#fff'
    }
  }, "Alguns de nossos ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "Clientes")), /*#__PURE__*/React.createElement("img", {
    src: A + '/img/clientes-logos.png',
    alt: "Clientes Develcode",
    style: {
      marginTop: 34,
      width: '100%',
      height: 460,
      objectFit: 'contain'
    }
  })));
}
function ContactSlide() {
  const cards = [['Daniel Armino – CEO', 'Caxias do Sul - RS', '+55 54 99156.1044', 'daniel.armino@develcode.com.br'], ['Eliverto Moraes – Comercial', 'Caxias do Sul - RS', '+55 54 9322-6827', 'eliverto.moraes@develcode.com.br'], ['Contatos Gerais Develcode', '+55 54 3536.0518', 'Rua Gen. Arcy Da Rocha Nobrega, 559 · Salas 402 e 403', 'CEP 95040 000 – Caxias do Sul/RS']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...S.frame,
      ...S.dark
    },
    "data-screen-label": "Contatos"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.pad,
      flexDirection: 'row',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-light) 60px/1 var(--font-display)',
      color: '#fff'
    }
  }, "Contatos"), cards.map(rows => /*#__PURE__*/React.createElement("div", {
    key: rows[0],
    style: {
      border: '1px solid var(--dc-blue-500)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      display: 'grid',
      gap: 3,
      background: 'rgba(2,107,240,.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-body)/1.3 var(--font-core)',
      color: '#fff'
    }
  }, rows[0]), rows.slice(1).map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      font: 'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-core)',
      color: '#C9CDD4'
    }
  }, r))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 440,
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 20,
      backgroundImage: 'url(' + A + '/img/panel-blue-vertical-lines.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--dc-blue-600)',
      padding: '22px 26px',
      borderRadius: 'var(--radius-xs)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal-white",
    height: 44,
    assetsBase: A + '/logos'
  })))));
}
Object.assign(window, {
  TitleSlide,
  StatementSlide,
  IndexSlide,
  VerticalSlide,
  CasesSlide,
  ProofSlide,
  ClientsSlide,
  ContactSlide,
  VERTICALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apresentacao/Slides.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLabel = __ds_scope.ArrowLabel;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.GlowCard = __ds_scope.GlowCard;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.ResultRow = __ds_scope.ResultRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
