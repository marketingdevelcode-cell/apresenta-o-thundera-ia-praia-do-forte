const DS = window.DevelcodeDesignSystem_775fcf || {};
const { ArrowLabel, MetricTile, CaseCard, LogoWall, Logo } = DS;
const A = '../../assets';

const S = {
  frame: { width: 1280, height: 720, position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-core)' },
  pad: { position: 'absolute', inset: 0, padding: '56px 80px', display: 'flex', flexDirection: 'column' },
  h1: { margin: 0, font: 'var(--fw-bold) var(--fs-h1)/var(--lh-heading) var(--font-display)', letterSpacing: 'var(--ls-display)' },
  hero: { margin: 0, font: 'italic var(--fw-bold) var(--fs-display-1)/var(--lh-tight) var(--font-display)', letterSpacing: 'var(--ls-display)', color: '#fff' },
  vertical: { margin: '6px 0 0', font: 'var(--fw-bold) var(--fs-h2)/1 var(--font-display)', color: 'var(--dc-blue-400)' },
  dark: { background: 'var(--grad-dark), var(--dc-ink-950)' },
  blue: { backgroundImage: 'url(' + A + '/img/bg-blue-grain.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--dc-blue-600)' },
  light: { backgroundImage: 'url(' + A + '/img/bg-light-chevron.png)', backgroundSize: 'cover', backgroundColor: 'var(--dc-ink-100)' }
};

function TitleSlide() {
  return (
    <section style={{ ...S.frame, ...S.blue }} data-screen-label="01 Title">
      <img src={A + '/img/ribbon-white.png'} alt="" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 620, opacity: .5 }} />
      <div style={{ ...S.pad, alignItems: 'center', justifyContent: 'center' }}>
        <Logo variant="lockup-2026" height={137} assetsBase={A + '/logos'} alt="Develcode — Own the Shift — 2026" style={{ position: 'relative' }} />
      </div>
    </section>
  );
}

function StatementSlide() {
  return (
    <section style={{ ...S.frame, ...S.light }} data-screen-label="02 Statement">
      <div style={{ ...S.pad, gap: 32 }}>
        <Logo height={56} assetsBase={A + '/logos'} style={{ alignSelf: 'flex-start' }} />
        <ArrowLabel tone="onLight" style={{ alignSelf: 'flex-start' }}>O que nos move</ArrowLabel>
        <div style={{ display: 'grid', gap: 24, maxWidth: 960, font: 'var(--fw-regular) 32px/1.35 var(--font-core)', color: 'var(--dc-ink-900)' }}>
          <p style={{ margin: 0 }}>Existimos para <strong><em>mover negócios através da tecnologia.</em></strong></p>
          <p style={{ margin: 0 }}><strong><em>Há mais de 12 anos, construímos software e aceleramos a adoção de IA</em></strong>, com intenção estratégica e clareza em cada entrega.</p>
          <p style={{ margin: 0 }}>Chamamos esse movimento de <em style={{ borderBottom: '2px solid var(--dc-blue-500)' }}>SHIFT.</em></p>
        </div>
      </div>
    </section>
  );
}

const VERTICALS = [
  { name: 'Business', image: 'vertical-image-business.png', line: <>Decida o que <strong><em>mover no negócio</em></strong> antes de escrever código.</>, items: [
    ['Product Discovery', 'Validação de mercado e MVP acelerados por IA.'],
    ['AI Opportunity Map', 'Casos de IA priorizados por ROI e viabilidade de dados.'],
    ['Delivery Assessment', 'Diagnóstico de entrega, qualidade e dívida técnica dos times.'] ] },
  { name: 'Build', image: 'vertical-image-build.png', line: <>O SDLC acelerado por <strong><em>IA e com Governança.</em></strong></>, items: [
    ['Product Engineering', 'Web, mobile e SaaS com IA integrada ao SDLC.'],
    ['Application Modernization', 'Refatoração e migração faseada por workload.'],
    ['AI-Augmented Delivery', 'Squads com workflow agêntico medido por baseline.'],
    ['Software Sustainment', 'Evolução contínua com SLA e backlog técnico ativo.'],
    ['Cloud & Infrastructure', 'IaC, FinOps e observabilidade.'] ] },
  { name: 'Data & IA', image: 'vertical-image-data.png', line: <>Leve <strong><em>IA e inteligência de dados</em></strong> para dentro da sua operação.</>, items: [
    ['Intelligent Agents', 'Agentes autônomos operando nos sistemas críticos.'],
    ['Process Automation', 'Fluxos redesenhados com IA e governança ponta a ponta.'],
    ['Data & Analytics', 'Pipelines, modelos e analytics sobre dado governado.'],
    ['AI Strategy Roadmap', 'ROI por caso, maturidade de dados e sequência de adoção.'],
    ['AI Integration', 'Governe LLMs, MCPs e APIs, do piloto à produção.'] ] },
  { name: 'Management', image: 'vertical-image-management.png', line: <><strong><em>Observabilidade executiva da engenharia</em></strong>, e frente de segurança.</>, items: [
    ['Executive Intelligence', 'Visão em tempo real da performance da engenharia.'],
    ['Cybersecurity', 'Correção contínua de vulnerabilidades no pipeline.'] ] }
];

function IndexSlide({ onPick }) {
  return (
    <section style={{ ...S.frame, backgroundImage: 'url(' + A + '/img/bg-shift-os-curve.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} data-screen-label="03 Shift OS">
      <div style={{ ...S.pad, padding: '72px 80px 56px' }}>
        <h1 style={{ margin: 0, font: 'var(--fw-bold) 62px/1 var(--font-display)', color: '#fff', letterSpacing: 'var(--ls-display)' }}>Shift OS</h1>
        <p style={{ margin: '12px 0 0', font: 'var(--fw-light) 40px/1.1 var(--font-core)', color: '#fff' }}>Nossas <strong><em style={{ fontWeight: 'var(--fw-bold)' }}>4 Verticais:</em></strong></p>
        <div style={{ display: 'grid', gap: 34, maxWidth: 560, marginTop: 52 }}>
          {VERTICALS.map((v, i) => (
            <button key={v.name} onClick={() => onPick(i)} style={{ position: 'relative', textAlign: 'left', background: 'none', border: 'none', padding: '0 0 14px', cursor: 'pointer', font: 'italic var(--fw-bold) 34px/1 var(--font-display)', color: '#fff', letterSpacing: 'var(--ls-heading)' }}>
              Shift <b style={{ fontStyle: 'normal', color: '#1D6BF5' }}>{v.name}</b>
              <span aria-hidden="true" style={{ position: 'absolute', left: 0, bottom: 0, width: 560, height: 1, background: 'linear-gradient(90deg,rgba(255,255,255,.8) 0%,rgba(255,255,255,.3) 55%,rgba(255,255,255,0) 100%)' }} />
            </button>
          ))}
        </div>
        <Logo variant="horizontal-white" height={52} assetsBase={A + '/logos'} style={{ marginTop: 'auto', alignSelf: 'flex-start', objectFit: 'contain' }} />
      </div>
    </section>
  );
}

function VerticalSlide({ index = 0 }) {
  const v = VERTICALS[index];
  return (
    <section style={{ ...S.frame, ...S.dark }} data-screen-label={'Shift ' + v.name}>
      <img src={A + '/img/' + v.image} alt="" style={{ position: 'absolute', right: 0, top: 56, height: 608, width: 296, borderRadius: 14, objectFit: 'cover' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 110, background: 'linear-gradient(0deg,rgba(2,107,240,.42) 0%,rgba(2,107,240,0) 100%)', pointerEvents: 'none' }} />
      <div style={{ ...S.pad, padding: '56px 336px 56px 80px', flexDirection: 'row', gap: 64 }}>
        <div style={{ width: 300, display: 'flex', flexDirection: 'column' }}>
          <p style={S.hero}>Shift</p>
          <p style={S.vertical}>{v.name}</p>
          <p style={{ margin: '48px 0 0', font: 'var(--fw-regular) var(--fs-h3)/1.35 var(--font-core)', color: '#fff' }}>{v.line}</p>
          <Logo variant="horizontal-white" height={56} assetsBase={A + '/logos'} style={{ marginTop: 'auto', alignSelf: 'flex-start', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 1, display: 'grid', gap: v.items.length > 3 ? 14 : 26, alignContent: 'center' }}>
          {v.items.map(([t, d], i) => (
            <div key={t} style={{ position: 'relative', overflow: 'hidden', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, height: v.items.length > 3 ? 104 : 162, background: '#0B0C0E', border: '1px solid #2A2D33', borderRadius: 'var(--radius-lg)', boxShadow: '0 0 26px rgba(255,255,255,.13)', padding: v.items.length > 3 ? '14px 22px' : '22px 26px' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '4%', top: '-12%', font: 'var(--fw-black) 190px/1 var(--font-display)', color: 'rgba(255,255,255,.035)', pointerEvents: 'none' }}>{i + 1}</span>
              <div style={{ position: 'relative', alignSelf: 'flex-start', marginLeft: -20 }}><ArrowLabel size={v.items.length > 3 ? 'sm' : 'md'}>{t}</ArrowLabel></div>
              <p style={{ position: 'relative', margin: '0 0 0 30px', maxWidth: '34ch', font: 'var(--fw-regular) ' + (v.items.length > 3 ? 'var(--fs-body-sm)' : 'var(--fs-body)') + '/var(--lh-body) var(--font-core)', color: '#E3E5E9' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CASES = [
  { client: 'Leroy Merlin', title: <>Projeto Instala<br/>Venda de Serviços Digitais</>, challenge: 'Criação de canal digital de serviços integrado ao ERP para substituir processos 100% manuais.', results: [{ label: 'Serviços Realizados', value: '300.000' }, { label: 'Profissionais Cadastrados', value: '2.000' }, { label: 'Categorias de Serviços', value: '84+' }] },
  { client: 'Varejo & Saúde', title: <>Reengenharia de<br/>App e Plataforma</>, challenge: 'Modernização de app com 4M+ usuários em stack obsoleta sem interrupção crítica de operação.', results: [{ label: 'Net Satisfaction Score', value: '+80%' }, { label: 'Data Load Time', value: '-80%' }] },
  { client: 'Tokio Marine', title: <>App de Atendimento<br/>a Sinistros</>, challenge: 'Redução de gargalos operacionais no atendimento telefônico via automação digital.', results: [{ label: 'Custos Operacionais', value: '-30%' }, { label: 'Agilidade de Atendimento', value: 'Elevada' }, { label: 'Erros Manuais', value: 'Extintos' }] }
];

function CasesSlide() {
  return (
    <section style={{ ...S.frame, ...S.blue }} data-screen-label="Cases">
      <Logo variant="mark-white" height={44} assetsBase={A + '/logos'} style={{ position: 'absolute', right: 80, top: 44 }} />
      <div style={S.pad}>
        <h2 style={{ ...S.h1, color: '#fff' }}>Alguns de nossos <em style={{ fontStyle: 'italic' }}>Cases</em></h2>
        <p style={{ margin: '10px 0 0', font: 'var(--fw-regular) var(--fs-body-lg)/var(--lh-snug) var(--font-core)', color: '#fff' }}>Resultados reais que comprovam <strong><em>nossa capacidade de transformar operações.</em></strong></p>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {CASES.map(c => <CaseCard key={c.client} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function ProofSlide() {
  const tiles = [['12', <>Anos de<br/>Mercado</>], ['+80%', <>NPS de<br/>Satisfação</>], ['+100', <>Clientes<br/>Atendidos</>], ['+500', <>Projetos<br/>Entregues</>]];
  const blue = 'linear-gradient(105deg,#0B5BE8 0%,#0A55E0 55%,#0733B8 100%)';
  return (
    <section style={{ ...S.frame, ...S.light }} data-screen-label="Proof">
      <div style={{ ...S.pad, padding: '75px 82px' }}>
        <Logo height={97} assetsBase={A + '/logos'} style={{ alignSelf: 'flex-start', objectFit: 'contain' }} />
        <div style={{ marginTop: 49, boxSizing: 'border-box', width: 1078, height: 239, borderRadius: 22, background: blue, display: 'flex', alignItems: 'center', padding: '0 64px' }}>
          <p style={{ margin: 0, font: 'var(--fw-regular) 33px/1.35 var(--font-core)', color: '#fff' }}>
            <span style={{ fontSize: 30, lineHeight: 1, marginRight: 10, textShadow: '0 0 12px rgba(255,255,255,.6)' }}>↘</span>
            <strong>6x consecutivas</strong> certificados GPTW em 4 categorias<br/>nos rankings regionais e nacionais.
          </p>
        </div>
        <div style={{ width: 1078, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginTop: 40 }}>
          {tiles.map(([v, l], i) => (
            <div key={i} style={{ height: 137, borderRadius: 12, background: blue, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, color: '#fff', textAlign: 'center' }}>
              <b style={{ font: 'var(--fw-bold) 38px/1 var(--font-display)', letterSpacing: 'var(--ls-display)' }}>{v}</b>
              <span style={{ font: 'var(--fw-bold) 22px/1.2 var(--font-core)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSlide() {
  return (
    <section style={{ ...S.frame, ...S.blue }} data-screen-label="Clientes">
      <div style={S.pad}>
        <h2 style={{ ...S.h1, color: '#fff' }}>Alguns de nossos <em style={{ fontStyle: 'italic' }}>Clientes</em></h2>
        <img src={A + '/img/clientes-logos.png'} alt="Clientes Develcode" style={{ marginTop: 34, width: '100%', height: 460, objectFit: 'contain' }} />
      </div>
    </section>
  );
}

function ContactSlide() {
  const cards = [
    ['Daniel Armino – CEO', 'Caxias do Sul - RS', '+55 54 99156.1044', 'daniel.armino@develcode.com.br'],
    ['Eliverto Moraes – Comercial', 'Caxias do Sul - RS', '+55 54 9322-6827', 'eliverto.moraes@develcode.com.br'],
    ['Contatos Gerais Develcode', '+55 54 3536.0518', 'Rua Gen. Arcy Da Rocha Nobrega, 559 · Salas 402 e 403', 'CEP 95040 000 – Caxias do Sul/RS']
  ];
  return (
    <section style={{ ...S.frame, ...S.dark }} data-screen-label="Contatos">
      <div style={{ ...S.pad, flexDirection: 'row', gap: 56 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ margin: 0, font: 'var(--fw-light) 60px/1 var(--font-display)', color: '#fff' }}>Contatos</h2>
          {cards.map(rows => (
            <div key={rows[0]} style={{ border: '1px solid var(--dc-blue-500)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'grid', gap: 3, background: 'rgba(2,107,240,.05)' }}>
              <div style={{ font: 'var(--fw-bold) var(--fs-body)/1.3 var(--font-core)', color: '#fff' }}>{rows[0]}</div>
              {rows.slice(1).map(r => <div key={r} style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1.45 var(--font-core)', color: '#C9CDD4' }}>{r}</div>)}
            </div>
          ))}
        </div>
        <div style={{ width: 440, display: 'grid', placeItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 20, backgroundImage: 'url(' + A + '/img/panel-blue-vertical-lines.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-md)' }} />
          <div style={{ position: 'relative', background: 'var(--dc-blue-600)', padding: '22px 26px', borderRadius: 'var(--radius-xs)' }}>
            <Logo variant="horizontal-white" height={44} assetsBase={A + '/logos'} />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TitleSlide, StatementSlide, IndexSlide, VerticalSlide, CasesSlide, ProofSlide, ClientsSlide, ContactSlide, VERTICALS });
