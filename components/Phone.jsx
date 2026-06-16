export function Phone({ children }) {
  return (
    <div className="phone">
      <div className="phone-top">
        <span className="phone-time">9:41</span>
        <div className="phone-island" />
        <div className="phone-signal">
          <span /><span /><span /><span />
        </div>
      </div>
      <div className="phone-body">{children}</div>
      <div className="phone-bottom-bar" />
    </div>
  )
}

// Frame limpo para screenshots reais — sem Dynamic Island sobreposto
export function PhoneFrame({ src, alt = '' }) {
  return (
    <div className="phone phone-screenshot">
      <img src={src} alt={alt} className="phone-screenshot-img" />
    </div>
  )
}

export function ScreenDashboard() {
  return (
    <div className="sc">
      <div className="sc-header">
        <div>
          <div className="sc-greeting">Oi, Marcos!</div>
          <div className="sc-period">
            <span className="sc-period-num">06</span>
            <div>
              <div className="sc-period-name">Junho,</div>
              <div className="sc-period-year">2025</div>
            </div>
          </div>
        </div>
        <div className="sc-avatar">M</div>
      </div>

      <div className="sc-debt-card">
        <div className="sc-debt-inner">
          <div className="sc-debt-left">
            <div className="sc-debt-label">Finanças Totais <span>›</span></div>
            <div className="sc-debt-value">R$ 1.840</div>
            <div className="sc-debt-limit">Limite: <span className="sc-debt-limit-tag">R$ 2.000</span></div>
            <div className="sc-prog-row">
              <div className="sc-prog-track">
                <div className="sc-prog-bar" style={{ width: '92%' }} />
              </div>
              <span className="sc-prog-info">92% utilizado</span>
            </div>
          </div>
          <div className="sc-debt-sep" />
          <div className="sc-debt-right">
            <div className="sc-debt-stat">
              <div className="sc-stat-lbl">Despesas</div>
              <div className="sc-stat-val sc-pink">R$ 1.340</div>
            </div>
            <div className="sc-debt-stat">
              <div className="sc-stat-lbl">Pendentes</div>
              <div className="sc-stat-val sc-green-glow">R$ 500</div>
            </div>
          </div>
        </div>
        <div className="sc-pills">
          <div className="sc-pill sc-pill-green">VER CONTAS +</div>
          <div className="sc-pill sc-pill-red">ADD DESPESA -</div>
        </div>
      </div>

      <div className="sc-section">
        <div className="sc-section-title">Categorias</div>
        {[
          { name: 'Alimentação', pct: 62, val: '860', col: '#A3FF47' },
          { name: 'Transporte',  pct: 35, val: '480', col: '#60A5FA' },
          { name: 'Lazer',       pct: 55, val: '380', col: '#F59E0B' },
          { name: 'Saúde',       pct: 14, val: '120', col: '#F87171' },
        ].map(c => (
          <div key={c.name} className="sc-cat">
            <div className="sc-cat-head">
              <span className="sc-cat-dot" style={{ background: c.col }} />
              <span className="sc-cat-name">{c.name}</span>
              <span className="sc-cat-val">R$ {c.val}</span>
            </div>
            <div className="sc-cat-track">
              <div className="sc-cat-bar" style={{ width: `${c.pct}%`, background: c.col }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScreenAdd() {
  return (
    <div className="sc">
      <div className="sc-header">
        <div className="sc-back-btn">← Voltar</div>
      </div>
      <div className="sc-add-title">Adicionar Despesa</div>

      <div className="sc-amount-block">
        <div className="sc-amount-lbl">Valor</div>
        <div className="sc-amount">R$ 89<span className="sc-amount-dec">,90</span></div>
      </div>

      <div className="sc-field-block">
        <div className="sc-field-lbl">Descrição</div>
        <div className="sc-field-val">Supermercado Extra</div>
      </div>

      <div className="sc-field-lbl" style={{ marginBottom: 8 }}>Categoria</div>
      <div className="sc-chips-grid">
        {[
          { name: 'Alimentação', col: '#A3FF47', on: true  },
          { name: 'Transporte',  col: '#60A5FA', on: false },
          { name: 'Lazer',       col: '#F59E0B', on: false },
          { name: 'Saúde',       col: '#F87171', on: false },
        ].map(c => (
          <div key={c.name}
            className={`sc-chip-cat${c.on ? ' sc-chip-on' : ''}`}
            style={c.on ? { borderColor: c.col, color: c.col } : {}}>
            <span className="sc-chip-circle" style={{ background: c.col }} />
            {c.name}
          </div>
        ))}
      </div>

      <div className="sc-add-btn">SALVAR DESPESA</div>
    </div>
  )
}

export function ScreenStats() {
  const bars = [
    { mes: 'Mar', h: 65 },
    { mes: 'Abr', h: 48 },
    { mes: 'Mai', h: 87 },
    { mes: 'Jun', h: 58, current: true },
  ]
  return (
    <div className="sc">
      <div className="sc-header">
        <div className="sc-greeting">Comparação Mensal</div>
      </div>

      <div className="sc-bars">
        {bars.map(b => (
          <div key={b.mes} className="sc-bcol">
            <div style={{ flex: 100 - b.h }} />
            <div className="sc-bbar" style={{
              flex: b.h,
              background: b.current ? 'linear-gradient(180deg,#A3FF47,#6FCC1A)' : '#2A2A2A',
              boxShadow: b.current ? '0 0 10px rgba(163,255,71,0.35)' : 'none',
            }} />
            <span className="sc-bmes" style={{ color: b.current ? '#A3FF47' : '#444' }}>{b.mes}</span>
          </div>
        ))}
      </div>

      <div className="sc-insight-card">
        <span className="sc-insight-up">33% menos</span> que o mês passado
      </div>

      <div className="sc-section">
        <div className="sc-section-title">Inteligência Financeira</div>
        <div className="sc-intel-item">
          <span className="sc-intel-dot" style={{ background: '#A3FF47' }} />
          <span>Alimentação 12% acima da média</span>
        </div>
        <div className="sc-intel-item">
          <span className="sc-intel-dot" style={{ background: '#60A5FA' }} />
          <span>Lazer dentro do limite esse mês</span>
        </div>
        <div className="sc-intel-item">
          <span className="sc-intel-dot" style={{ background: '#F59E0B' }} />
          <span>Você economizou R$ 160 vs junho</span>
        </div>
      </div>
    </div>
  )
}
