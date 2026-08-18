import React from 'react';

export function SectionHeading({ title, subtitle, tone = 'light', size = 'h1', align = 'left', style, ...rest }) {
  const light = tone === 'light';
  const fs = size === 'display' ? 'var(--fs-display-2)' : size === 'h2' ? 'var(--fs-h2)' : 'var(--fs-h1)';
  return (
    <header style={{ display: 'grid', gap: 'var(--space-3)', textAlign: align, ...style }} {...rest}>
      <h2 style={{
        margin: 0, font: 'var(--fw-bold) ' + fs + '/var(--lh-heading) var(--font-display)',
        letterSpacing: 'var(--ls-display)', color: light ? 'var(--dc-ink-1000)' : 'var(--dc-white)'
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          margin: 0, maxWidth: '62ch',
          font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-snug) var(--font-core)',
          color: light ? 'var(--dc-ink-600)' : 'rgba(255,255,255,.82)'
        }}>{subtitle}</p>
      )}
    </header>
  );
}
