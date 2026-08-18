const { Button, IconButton, Tabs } = window.DevelcodeDesignSystem_775fcf || {};
const VERTICALS = window.VERTICALS || [];

const ORDER = ['title', 'statement', 'index', 'vertical', 'cases', 'proof', 'clients', 'contact'];
const LABELS = { title: 'Capa', statement: 'O que nos move', index: 'Shift OS', vertical: 'Vertical', cases: 'Cases', proof: 'Números', clients: 'Clientes', contact: 'Contatos' };

function Deck() {
  const [i, setI] = React.useState(0);
  const [vertical, setVertical] = React.useState(0);
  const step = ORDER[i];
  React.useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowRight') setI(v => Math.min(ORDER.length - 1, v + 1));
      if (e.key === 'ArrowLeft') setI(v => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const slide = {
    title: <TitleSlide />, statement: <StatementSlide />,
    index: <IndexSlide onPick={(n) => { setVertical(n); setI(ORDER.indexOf('vertical')); }} />,
    vertical: <VerticalSlide index={vertical} />,
    cases: <CasesSlide />, proof: <ProofSlide />, clients: <ClientsSlide />, contact: <ContactSlide />
  }[step];

  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <div style={{ width: 1280, height: 720, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>{slide}</div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <IconButton label="Slide anterior" variant="outline" onClick={() => setI(v => Math.max(0, v - 1))}>←</IconButton>
        <Tabs tabs={ORDER.map(k => ({ value: k, label: LABELS[k] }))} value={step} onChange={(v) => setI(ORDER.indexOf(v))} />
        <IconButton label="Próximo slide" variant="outline" onClick={() => setI(v => Math.min(ORDER.length - 1, v + 1))}>→</IconButton>
        {step === 'vertical' && (
          <Tabs tabs={VERTICALS.map((v, n) => ({ value: String(n), label: v.name }))} value={String(vertical)} onChange={(v) => setVertical(Number(v))} />
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Deck });
