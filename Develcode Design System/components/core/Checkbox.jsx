import React from 'react';

export function Checkbox({ label, checked, onChange, tone = 'light', disabled, style, ...rest }) {
  const dark = tone === 'dark';
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        width: '20px', height: '20px', display: 'grid', placeItems: 'center',
        borderRadius: 'var(--radius-xs)',
        border: 'var(--border-w-strong) solid ' + (checked ? 'var(--dc-blue-600)' : dark ? '#3A3E46' : 'var(--border-strong)'),
        background: checked ? 'var(--dc-blue-600)' : 'transparent',
        color: 'var(--dc-white)', font: 'var(--fw-bold) 12px/1 var(--font-core)',
        transition: 'var(--transition-interactive)'
      }}>{checked ? '✓' : ''}</span>
      <span style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1.3 var(--font-core)', color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-800)' }}>{label}</span>
    </label>
  );
}
