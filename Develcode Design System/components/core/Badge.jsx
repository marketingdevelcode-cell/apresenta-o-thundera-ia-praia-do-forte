import React from 'react';

const TONES = {
  blue:    { bg: 'var(--dc-blue-050)', fg: 'var(--dc-blue-700)', bd: 'var(--dc-blue-200)' },
  solid:   { bg: 'var(--dc-blue-600)', fg: 'var(--dc-white)',    bd: 'transparent' },
  neutral: { bg: 'var(--dc-ink-150)',  fg: 'var(--dc-ink-700)',  bd: 'var(--dc-ink-200)' },
  dark:    { bg: 'rgba(255,255,255,.06)', fg: 'var(--dc-white)', bd: '#2A2E35' },
  success: { bg: 'rgba(16,181,127,.12)', fg: '#0B7A56', bd: 'rgba(16,181,127,.35)' },
  warning: { bg: 'rgba(245,165,36,.14)', fg: '#8A5A05', bd: 'rgba(245,165,36,.4)' },
  danger:  { bg: 'rgba(229,72,77,.12)',  fg: '#A5282C', bd: 'rgba(229,72,77,.35)' }
};

export function Badge({ children, tone = 'blue', uppercase = false, style, ...rest }) {
  const t = TONES[tone] || TONES.blue;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 10px', borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, border: 'var(--border-w) solid ' + t.bd,
      font: 'var(--fw-bold) var(--fs-caption)/1.2 var(--font-core)',
      letterSpacing: uppercase ? 'var(--ls-caps)' : 'var(--ls-body)',
      textTransform: uppercase ? 'uppercase' : 'none',
      ...style
    }} {...rest}>{children}</span>
  );
}
