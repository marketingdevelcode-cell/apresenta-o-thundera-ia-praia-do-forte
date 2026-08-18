import React from 'react';

const SRC = {
  'horizontal-black': 'develcode-horizontal-black.png',
  'horizontal-white': 'develcode-horizontal-white.png',
  'mark-blue': 'develcode-mark-blue.png',
  'mark-white': 'develcode-mark-white-x.png',
  'mark-tile': 'develcode-mark-tile-blue.png',
  'lockup-2026': 'develcode-lockup-2026-white.png'
};

export function Logo({ variant = 'horizontal-black', height = 40, assetsBase = '/assets/logos', alt = 'Develcode — Own the Shift', style, ...rest }) {
  const file = SRC[variant] || SRC['horizontal-black'];
  return (
    <img
      src={assetsBase + '/' + file}
      alt={alt}
      style={{ height: typeof height === 'number' ? height + 'px' : height, width: 'auto', flex: '0 0 auto', alignSelf: 'flex-start', objectFit: 'contain', display: 'block', ...style }}
      {...rest}
    />
  );
}
