import React from 'react';

export function ResultRow({ label, value, tone = 'dark', style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        border: 'var(--border-w) solid ' + (dark ? 'var(--dc-blue-600)' : 'var(--dc-blue-200)'),
        background: dark ? 'rgba(2,107,240,.08)' : 'var(--dc-blue-050)',
        color: dark ? 'var(--dc-white)' : 'var(--dc-ink-900)',
        font: 'var(--fw-regular) var(--fs-body-sm)/1.2 var(--font-core)',
        ...style
      }}
      {...rest}
    >
      <span style={{ opacity: .9 }}>{label}</span>
      <strong style={{ fontWeight: 'var(--fw-bold)' }}>{value}</strong>
    </div>
  );
}
