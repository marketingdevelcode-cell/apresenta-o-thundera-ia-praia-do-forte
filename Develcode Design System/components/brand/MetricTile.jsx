import React from 'react';

export function MetricTile({ value, label, tone = 'blue', align = 'center', style, ...rest }) {
  const map = {
    blue:  { bg: 'var(--grad-blue-soft)', fg: 'var(--dc-white)', bd: 'transparent' },
    dark:  { bg: 'var(--dc-ink-950)',     fg: 'var(--dc-white)', bd: '#1B1E24' },
    light: { bg: 'var(--dc-white)',       fg: 'var(--dc-ink-900)', bd: 'var(--border-subtle)' }
  };
  const t = map[tone] || map.blue;
  return (
    <div
      style={{
        background: t.bg, color: t.fg,
        border: 'var(--border-w) solid ' + t.bd,
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-5) var(--space-4)',
        textAlign: align,
        display: 'grid', gap: '2px',
        ...style
      }}
      {...rest}
    >
      <div style={{ font: 'var(--fw-bold) var(--fs-h2)/1 var(--font-display)', letterSpacing: 'var(--ls-display)' }}>{value}</div>
      <div style={{ font: 'var(--fw-semibold) var(--fs-body-sm)/1.25 var(--font-core)', opacity: tone === 'light' ? .7 : .92 }}>{label}</div>
    </div>
  );
}
