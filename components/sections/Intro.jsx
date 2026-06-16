'use client'

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="spl-content">
        <div className="spl-icon">
          <svg viewBox="0 0 56 56" fill="none">
            <rect className="spl-bg" width="56" height="56" rx="16" fill="#A3FF47"/>
            <path className="spl-path" d="M14 38 L20 30 L27 34 L35 22 L42 18"
              stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle className="spl-dot spl-dot-1" cx="14" cy="38" r="3" fill="#0D0D0D"/>
            <circle className="spl-dot spl-dot-2" cx="42" cy="18" r="3" fill="#0D0D0D"/>
          </svg>
        </div>
        <div className="spl-welcome">Bem-vindo ao</div>
        <div className="spl-brand">Finanças</div>
        <div className="spl-bar"></div>
        <div className="spl-tagline">Controle inteligente</div>
      </div>
      <div className="intro-hint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        <span>Role para continuar</span>
      </div>
    </section>
  )
}
