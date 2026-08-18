import React from 'react';

export function Tabs({ tabs = [], value, onChange, tone = 'light', style, ...rest }) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].value ?? tabs[0]));
  const current = value !== undefined ? value : internal;
  const dark = tone === 'dark';
  const pick = (v) => { setInternal(v); onChange && onChange(v); };
  return (
    <div role="tablist" style={{
      display: 'inline-flex', gap: '4px', padding: '4px',
      borderRadius: 'var(--radius-pill)',
      background: dark ? 'rgba(255,255,255,.05)' : 'var(--dc-ink-150)',
      ...style
    }} {...rest}>
      {tabs.map((t, i) => {
        const v = t.value ?? t;
        const label = t.label ?? t;
        const on = v === current;
        return (
          <button key={i} role="tab" aria-selected={on} onClick={() => pick(v)} style={{
            padding: '8px 18px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
            background: on ? (dark ? 'var(--dc-blue-600)' : 'var(--dc-white)') : 'transparent',
            color: on ? (dark ? 'var(--dc-white)' : 'var(--dc-blue-600)') : (dark ? 'rgba(255,255,255,.7)' : 'var(--dc-ink-600)'),
            font: 'var(--fw-bold) var(--fs-body-sm)/1 var(--font-core)',
            boxShadow: on && !dark ? 'var(--shadow-xs)' : 'none',
            transition: 'var(--transition-interactive)'
          }}>{label}</button>
        );
      })}
    </div>
  );
}
