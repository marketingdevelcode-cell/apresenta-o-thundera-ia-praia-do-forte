import React from 'react';

const TONES = {
  onDark:  { fg: 'var(--dc-white)',      bd: '#1D6BF5',            bg: '#05070A', glow: '0 0 14px rgba(29,107,245,.9), 0 0 34px rgba(2,107,240,.35), inset 0 0 12px rgba(29,107,245,.25)' },
  onLight: { fg: 'var(--dc-blue-600)',   bd: 'var(--dc-blue-500)', bg: 'var(--dc-white)',     glow: 'var(--glow-blue-sm)' },
  solid:   { fg: 'var(--dc-white)',      bd: 'transparent',        bg: 'var(--dc-blue-600)',  glow: 'none' }
};
const SIZES = {
  sm: { fs: 'var(--fs-body-sm)', pad: '6px 14px 6px 6px', dot: 22, gap: 8 },
  md: { fs: 'var(--fs-h4)',      pad: '8px 20px 8px 8px', dot: 30, gap: 10 },
  lg: { fs: 'var(--fs-h3)',      pad: '10px 26px 10px 10px', dot: 38, gap: 12 }
};

export function ArrowLabel({ children, tone = 'onDark', size = 'md', showArrow = true, full = false, style, ...rest }) {
  const t = TONES[tone] || TONES.onDark;
  const s = SIZES[size] || SIZES.md;
  return (
    <span
      style={{
        display: full ? 'flex' : 'inline-flex', width: full ? '100%' : 'auto', alignItems: 'center', gap: s.gap + 'px',
        padding: showArrow ? s.pad : s.pad.replace(/ \d+px$/, ' ' + (size === 'lg' ? 26 : size === 'sm' ? 14 : 20) + 'px'),
        borderRadius: 'var(--radius-pill)',
        border: 'var(--border-w-strong) solid ' + t.bd,
        background: t.bg, color: t.fg,
        font: 'var(--fw-bold) ' + s.fs + '/1 var(--font-core)',
        letterSpacing: 'var(--ls-heading)',
        boxShadow: t.glow,
        whiteSpace: 'nowrap',
        ...style
      }}
      {...rest}
    >
      {showArrow && (
        <span aria-hidden="true" style={{
          flex: '0 0 auto',
          width: s.dot + 'px', height: s.dot + 'px', borderRadius: 'var(--radius-pill)',
          background: tone === 'onDark' ? '#05070A' : 'transparent',
          border: 'var(--border-w-strong) solid ' + (tone === 'solid' ? 'rgba(255,255,255,.7)' : tone === 'onDark' ? '#1D6BF5' : 'var(--dc-blue-500)'),
          boxShadow: tone === 'onDark' ? '0 0 10px rgba(29,107,245,.7)' : 'none',
          display: 'grid', placeItems: 'center',
          fontSize: Math.round(s.dot * 0.5) + 'px', lineHeight: 1,
          color: tone === 'onLight' ? 'var(--dc-blue-600)' : 'var(--dc-white)'
        }}>↘</span>
      )}
      <span>{children}</span>
    </span>
  );
}
