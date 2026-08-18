import React from 'react';

export function GlowCard({ children, tone = 'dark', glow = 'halo', ghostNumber, padding = 'var(--space-6)', style, ...rest }) {
  const dark = tone !== 'light';
  const shadow = glow === 'blue' ? 'var(--glow-blue-lg)' : glow === 'halo' ? 'var(--halo-card)' : glow === 'none' ? 'none' : 'var(--shadow-md)';
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        background: dark ? 'var(--dc-ink-950)' : 'var(--dc-white)',
        border: 'var(--border-w) solid ' + (dark ? '#1B1E24' : 'var(--border-subtle)'),
        boxShadow: shadow,
        color: dark ? 'var(--dc-white)' : 'var(--dc-ink-850)',
        padding,
        ...style
      }}
      {...rest}
    >
      {ghostNumber != null && (
        <span aria-hidden="true" style={{
          position: 'absolute', left: '10%', top: '-6%',
          font: 'var(--fw-black) 8rem/1 var(--font-display)',
          fontStyle: 'italic',
          color: dark ? 'rgba(255,255,255,.045)' : 'rgba(10,11,13,.05)',
          pointerEvents: 'none'
        }}>{ghostNumber}</span>
      )}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
