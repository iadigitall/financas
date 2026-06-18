'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gastos = [
  { name: 'Spotify',         slug: 'spotify',       color: '#1DB954', cat: 'Lazer',          valor: 26.90 },
  { name: 'Netflix',         slug: 'netflix',       color: '#E50914', cat: 'Entretenimento', valor: 55.90 },
  { name: 'Apple TV+',       slug: 'appletv',       color: '#555555', cat: 'Assinaturas',    valor: 21.90 },
  { name: 'YouTube Premium', slug: 'youtube',       color: '#FF0000', cat: 'Entretenimento', valor: 27.90 },
  { name: 'Paramount+',      slug: 'paramountplus', color: '#0064FF', cat: 'Entretenimento', valor: 29.90 },
  { name: 'iFood Club',      slug: 'ifood',         color: '#EA1D2C', cat: 'Alimentação',    valor: 12.99 },
  { name: 'Uber One',        slug: 'uber',          color: '#ffffff', cat: 'Transporte',     valor: 24.99 },
  { name: 'Max',             slug: 'max',           color: '#7B2FBE', cat: 'Entretenimento', valor: 45.90 },
]

const total = gastos.reduce((s, g) => s + g.valor, 0).toFixed(2).replace('.', ',')

function GastoItem({ name, slug, color, cat, valor, delay }) {
  return (
    <div className="gr-item">
      <div className="gr-logo-wrap" style={{ background: `${color}22`, border: `1px solid ${color}40` }}>
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={name}
          className="gr-logo"
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.style.background = '#1f1f1f'
          }}
        />
      </div>
      <div className="gr-info">
        <span className="gr-name">{name}</span>
        <span className="gr-cat">{cat}</span>
      </div>
      <div className="gr-right">
        <span className="gr-valor">- R$ {valor.toFixed(2).replace('.', ',')}</span>
        <span className="gr-recorrente">mensal</span>
      </div>
    </div>
  )
}

export default function GastosReais() {
  const screenRef = useRef(null)
  const statRef   = useRef(null)

  useEffect(() => {
    gsap.from(screenRef.current, {
      scrollTrigger: { trigger: screenRef.current, start: 'top 78%' },
      x: 60, opacity: 0, duration: 1.0, ease: 'power3.out',
    })
    gsap.from(screenRef.current.querySelectorAll('.gr-item'), {
      scrollTrigger: { trigger: screenRef.current, start: 'top 70%' },
      x: 40, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out',
    })
    gsap.from(statRef.current.querySelectorAll('[data-reveal]'), {
      scrollTrigger: { trigger: statRef.current, start: 'top 78%' },
      y: 28, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="editorial-section">
      {/* Texto */}
      <div className="editorial-text" ref={statRef}>
        <p className="eyebrow" data-reveal>Onde vai o dinheiro</p>
        <h2 className="editorial-h2" data-reveal>
          Você sabe quanto gasta<br />
          <span className="green">em assinaturas por mês?</span>
        </h2>
        <p className="editorial-p" data-reveal>
          Cada serviço parece barato isolado.
          Mas somados, viram um boleto invisível todo mês.
          O Finanças te mostra o número real.
        </p>
        <div className="gr-total-card" data-reveal>
          <span className="gr-total-label">Total estimado em assinaturas</span>
          <span className="gr-total-valor">R$ {total}<span className="gr-total-mes">/mês</span></span>
          <span className="gr-total-sub">Você sabia disso?</span>
        </div>
      </div>

      {/* Mock de tela do app */}
      <div className="gr-screen" ref={screenRef}>
        <div className="gr-screen-header">
          <span className="gr-screen-title">Assinaturas</span>
          <span className="gr-screen-period">Junho 2026</span>
        </div>
        <div className="gr-list">
          {gastos.map((g, i) => <GastoItem key={i} {...g} />)}
        </div>
        <div className="gr-screen-footer">
          <span>Total do mês</span>
          <span className="gr-footer-total">R$ {total}</span>
        </div>
      </div>
    </section>
  )
}
