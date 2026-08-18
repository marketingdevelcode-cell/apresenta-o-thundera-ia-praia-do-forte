import React from 'react';

export function IconButton({ children, label, variant = 'ghost', size = 40, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const map = {
    ghost:   { bg: hovered ? 'rgba(2,107,240,.10)' : 'transparent', fg: 'var(--dc-blue-600)', bd: 'transparent' },
    outline: { bg: hovered ? 'var(--dc-blue-050)' : 'transparent',  fg: 'var(--dc-blue-600)', bd: 'var(--dc-blue-600)' },
    solid:   { bg: hovered ? 'var(--dc-blue-500)' : 'var(--dc-blue-600)', fg: 'var(--dc-white)', bd: 'transparent' },
    onDark:  { bg: hovered ? 'rgba(2,107,240,.18)' : 'rgba(255,255,255,.05)', fg: 'var(--dc-white)', bd: 'var(--dc-blue-500)' }
  };
  const t = map[variant] || map.ghost;
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        width: size + 'px', height: size + 'px', display: 'grid', placeItems: 'center',
        borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        background: t.bg, color: t.fg, border: 'var(--border-w-strong) solid ' + t.bd,
        boxShadow: variant === 'onDark' ? 'var(--glow-blue-sm)' : 'none',
        transition: 'var(--transition-interactive)',
        ...style
      }}
      {...rest}
    >{children}</button>
  );
}
