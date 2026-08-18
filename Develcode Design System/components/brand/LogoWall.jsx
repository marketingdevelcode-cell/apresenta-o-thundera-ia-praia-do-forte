import React from 'react';

export function LogoWall({ logos = [], columns = 6, tone = 'asIs', gap = 'var(--space-8)', style, ...rest }) {
  return (
    <div
      style={{
        display: 'grid', gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
        gap, alignItems: 'center', justifyItems: 'center',
        ...style
      }}
      {...rest}
    >
      {logos.map((l, i) => (
        <img key={i} src={typeof l === 'string' ? l : l.src} alt={typeof l === 'string' ? '' : (l.alt || '')}
          style={{ maxWidth: '100%', height: 40, objectFit: 'contain', filter: tone === 'knockout' ? 'brightness(0) invert(1)' : 'none', opacity: tone === 'knockout' ? .95 : 1 }} />
      ))}
    </div>
  );
}
