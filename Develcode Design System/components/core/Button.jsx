import React from 'react';

const SIZES = {
  sm: { pad: '8px 16px',  fs: 'var(--fs-body-sm)', h: 36 },
  md: { pad: '12px 24px', fs: 'var(--fs-body)',    h: 44 },
  lg: { pad: '16px 32px', fs: 'var(--fs-body-lg)', h: 54 }
};

function look(variant, hovered, active) {
  switch (variant) {
    case 'secondary':
      return { background: hovered ? 'var(--dc-blue-050)' : 'transparent', color: 'var(--dc-blue-600)', border: 'var(--border-w-strong) solid var(--dc-blue-600)', boxShadow: hovered ? 'var(--glow-blue-sm)' : 'none' };
    case 'ghost':
      return { background: hovered ? 'rgba(2,107,240,.08)' : 'transparent', color: 'var(--dc-blue-600)', border: 'var(--border-w-strong) solid transparent', boxShadow: 'none' };
    case 'onDark':
      return { background: hovered ? 'rgba(2,107,240,.16)' : 'rgba(255,255,255,.04)', color: 'var(--dc-white)', border: 'var(--border-w-strong) solid var(--dc-blue-500)', boxShadow: hovered ? 'var(--glow-blue)' : 'var(--glow-blue-sm)' };
    case 'inverse':
      return { background: hovered ? 'var(--dc-ink-150)' : 'var(--dc-white)', color: 'var(--dc-blue-600)', border: 'var(--border-w-strong) solid transparent', boxShadow: 'none' };
    default:
      return { background: hovered ? 'var(--dc-blue-500)' : 'var(--dc-blue-600)', color: 'var(--dc-white)', border: 'var(--border-w-strong) solid transparent', boxShadow: hovered ? 'var(--glow-blue)' : 'none' };
  }
}

export function Button({ children, variant = 'primary', size = 'md', full = false, disabled = false, iconLeft, iconRight, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const l = look(variant, hovered && !disabled, active);
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        width: full ? '100%' : 'auto', minHeight: s.h + 'px', padding: s.pad,
        borderRadius: 'var(--radius-pill)',
        font: 'var(--fw-bold) ' + s.fs + '/1 var(--font-core)',
        letterSpacing: 'var(--ls-heading)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .4 : 1,
        transform: active && !disabled ? 'translateY(1px)' : 'none',
        transition: 'var(--transition-interactive)',
        ...l,
        ...style
      }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
