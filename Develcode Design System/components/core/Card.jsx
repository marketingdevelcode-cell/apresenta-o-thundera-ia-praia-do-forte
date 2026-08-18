import React from 'react';

export function Card({ children, tone = 'light', padding = 'var(--space-6)', interactive = false, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const dark = tone === 'dark';
  return (
    <div
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        background: dark ? 'var(--dc-ink-950)' : 'var(--dc-white)',
        color: dark ? 'var(--dc-white)' : 'var(--dc-ink-850)',
        border: 'var(--border-w) solid ' + (dark ? '#1B1E24' : 'var(--border-subtle)'),
        boxShadow: dark ? (interactive && hovered ? 'var(--halo-card)' : 'var(--halo-soft)') : (interactive && hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)'),
        transform: interactive && hovered ? 'translateY(-2px)' : 'none',
        transition: 'var(--transition-interactive)',
        padding,
        ...style
      }}
      {...rest}
    >{children}</div>
  );
}
