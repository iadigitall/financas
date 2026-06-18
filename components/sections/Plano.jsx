'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IcoCheck, IcoArrow } from '@/components/icons'

gsap.registerPlugin(ScrollTrigger)

const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

const beneficios = [
  'Acesso completo a todas as funcionalidades',
  'Gastos e receitas ilimitados',
  'Contas fixas que se repetem automaticamente',
  'Alertas de limite em tempo real',
  'Histórico completo mês a mês',
  'Funciona sem instalar, abre no navegador',
  'Dados seguros na nuvem',
  'Cancele quando quiser, sem burocracia',
]

export default function Plano() {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: { trigger: cardRef.current, start: 'top 78%' },
      y: 40, opacity: 0, scale: 0.96, duration: 0.9, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="section text-center">
      <div className="container">
        <p className="eyebrow" data-aos="fade-up">Planos e Preços</p>
        <h2 className="sec-h2" data-aos="fade-up">
          Um plano. Acesso completo.
        </h2>
        <p className="sec-p" data-aos="fade-up">
          Sem tier gratuito limitado. Sem recursos escondidos. Tudo disponível desde o primeiro dia.
        </p>

        <div className="plano-card" ref={cardRef}>
          <div className="plano-badge">Acesso completo</div>
          <div className="plano-price-row">
            <span className="plano-currency">R$</span>
            <span className="plano-price">13</span>
            <div className="plano-price-right">
              <span className="plano-cents">,90</span>
              <span className="plano-period">/mês</span>
            </div>
          </div>
          <p className="plano-desc">Menos que uma refeição. Mais que suficiente para ter controle total.</p>

          <ul className="plano-list">
            {beneficios.map((b, i) => (
              <li key={i}>
                <span className="plano-check"><IcoCheck /></span>
                {b}
              </li>
            ))}
          </ul>

          <a href={CHECKOUT_URL} className="btn-cta btn-cta--full">
            Começar agora
            <span className="btn-ico"><IcoArrow /></span>
          </a>
          <p className="plano-note">Acesso imediato · Cancele quando quiser</p>
        </div>
      </div>
    </section>
  )
}
