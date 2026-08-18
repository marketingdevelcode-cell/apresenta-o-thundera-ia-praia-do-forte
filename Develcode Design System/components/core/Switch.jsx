import React from 'react';

export function Switch({ checked, onChange, label, tone = 'light', disabled, style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, ...style }}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        width: '46px', height: '26px', borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--dc-blue-600)' : dark ? '#2A2E35' : 'var(--dc-ink-300)',
        boxShadow: checked ? 'var(--glow-blue-sm)' : 'none',
        position: 'relative', transition: 'var(--transition-interactive)'
      }}>
        <span style={{
          position: 'absolute', top: '3px', left: checked ? '23px' : '3px',
          width: '20px', height: '20px', borderRadius: 'var(--radius-pill)',
          background: 'var(--dc-white)', boxShadow: 'var(--shadow-xs)',
          transition: 'left var(--dur-fast) var(--ease-standard)'
        }} />
      </span>
      {label && <span style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-core)', color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-800)' }}>{label}</span>}
    </label>
  );
}
