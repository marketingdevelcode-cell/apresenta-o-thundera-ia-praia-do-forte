import React from 'react';

export function Input({ label, hint, error, tone = 'light', id, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const dark = tone === 'dark';
  const rid = id || React.useId();
  const borderColor = error ? 'var(--dc-danger)' : focused ? 'var(--dc-blue-500)' : dark ? '#2A2E35' : 'var(--border-subtle)';
  return (
    <div style={{ display: 'grid', gap: '6px', ...style }}>
      {label && <label htmlFor={rid} style={{ font: 'var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-core)', color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-700)' }}>{label}</label>}
      <input
        id={rid}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          minHeight: '44px', padding: '10px 16px',
          borderRadius: 'var(--radius-sm)',
          border: 'var(--border-w-strong) solid ' + borderColor,
          background: dark ? 'var(--dc-ink-950)' : 'var(--dc-white)',
          color: dark ? 'var(--dc-white)' : 'var(--dc-ink-900)',
          font: 'var(--fw-regular) var(--fs-body)/1.3 var(--font-core)',
          boxShadow: focused ? 'var(--ring-focus)' : 'none',
          outline: 'none',
          transition: 'var(--transition-interactive)'
        }}
        {...rest}
      />
      {(hint || error) && <span style={{ font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-core)', color: error ? 'var(--dc-danger)' : dark ? 'var(--dc-ink-400)' : 'var(--dc-ink-500)' }}>{error || hint}</span>}
    </div>
  );
}
