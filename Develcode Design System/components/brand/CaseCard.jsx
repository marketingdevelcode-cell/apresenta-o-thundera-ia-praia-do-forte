import React from 'react';
import { ResultRow } from './ResultRow.jsx';

export function CaseCard({ client, clientLogo, title, challengeLabel = 'O Desafio', challenge, resultsLabel = 'Resultados Obtidos', results = [], style, ...rest }) {
  return (
    <div
      style={{
        display: 'grid', gap: 'var(--space-4)',
        background: 'var(--dc-ink-950)', color: 'var(--dc-white)',
        border: 'var(--border-w) solid #16181D',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        boxShadow: 'var(--halo-soft)',
        ...style
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
        <span style={{ font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-core)', color: 'var(--dc-blue-400)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' }}>{client}</span>
        {clientLogo && <img src={clientLogo} alt="" style={{ height: 20, width: 'auto', opacity: .9 }} />}
      </div>
      <div style={{
        padding: '10px 18px', borderRadius: 'var(--radius-pill)',
        background: 'var(--dc-ink-1000)', border: 'var(--border-w) solid #23262C',
        font: 'var(--fw-bold) var(--fs-body)/1.3 var(--font-core)'
      }}>{title}</div>
      {challenge && (
        <div style={{ display: 'grid', gap: '4px' }}>
          <span style={{ font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-core)', color: 'var(--dc-blue-400)' }}>{challengeLabel}</span>
          <p style={{ margin: 0, font: 'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-core)', color: '#D8DBE1' }}>{challenge}</p>
        </div>
      )}
      {results.length > 0 && (
        <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
          <span style={{ font: 'var(--fw-bold) var(--fs-caption)/1 var(--font-core)', color: 'var(--dc-blue-400)' }}>{resultsLabel}</span>
          {results.map((r, i) => <ResultRow key={i} label={r.label} value={r.value} />)}
        </div>
      )}
    </div>
  );
}
