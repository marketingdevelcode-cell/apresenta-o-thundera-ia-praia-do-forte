import React from 'react';

export function Select({ label, options = [], hint, tone = 'light', id, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const dark = tone === 'dark';
  const rid = id || React.useId();
  return (
    <div style={{ display: 'grid', gap: '6px', ...style }}>
      {label && <label htmlFor={rid} style={{ font: 'var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-core)', color: dark ? 'rgba(255,255,255,.86)' : 'var(--dc-ink-700)' }}>{label}</label>}
      <select
        id={rid}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          minHeight: '44px', padding: '10px 40px 10px 16px',
          borderRadius: 'var(--radius-sm)',
          border: 'var(--border-w-strong) solid ' + (focused ? 'var(--dc-blue-500)' : dark ? '#2A2E35' : 'var(--border-subtle)'),
          background: (dark ? 'var(--dc-ink-950)' : 'var(--dc-white)') + " url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'><path d='M1 1l6 6 6-6' fill='none' stroke='%23026BF0' stroke-width='2'/></svg>\") no-repeat right 16px center",
          color: dark ? 'var(--dc-white)' : 'var(--dc-ink-900)',
          font: 'var(--fw-regular) var(--fs-body)/1.3 var(--font-core)',
          boxShadow: focused ? 'var(--ring-focus)' : 'none',
          appearance: 'none', outline: 'none', cursor: 'pointer',
          transition: 'var(--transition-interactive)'
        }}
        {...rest}
      >
        {options.map((o, i) => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          return <option key={i} value={v}>{l}</option>;
        })}
      </select>
      {hint && <span style={{ font: 'var(--fw-regular) var(--fs-caption)/1.3 var(--font-core)', color: dark ? 'var(--dc-ink-400)' : 'var(--dc-ink-500)' }}>{hint}</span>}
    </div>
  );
}
