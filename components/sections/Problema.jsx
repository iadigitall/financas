'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IcoCheck, IcoAlert, IcoArrow } from '@/components/icons'

gsap.registerPlugin(ScrollTrigger)

const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

export default function Problema() {
  const sectionRef = useRef(null)
  const imgRef     = useRef(null)
  const cardRef    = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll('[data-reveal]'), {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      y: 32, opacity: 0, stagger: 0.13, duration: 0.9, ease: 'power3.out',
    })
    gsap.from(imgRef.current, {
      scrollTrigger: { trigger: imgRef.current, start: 'top 82%' },
      y: 40, opacity: 0, scale: 0.97, duration: 1.0, ease: 'power3.out',
    })
    gsap.to(cardRef.current, {
      y: -10, duration: 2.8, ease: 'power1.inOut', repeat: -1, yoyo: true,
    })
  }, [])

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">

        {/* 1. Título */}
        <div className="problema-head">
          <p className="eyebrow" data-reveal>O Problema</p>
          <h2 className="sec-h2 problema-h2" data-reveal>
            Assustado com a fatura?<br />
            <span className="green">Com o Finanças, não.</span>
          </h2>
        </div>

        {/* 2. Imagem grande */}
        <div className="problema-img-wrap" ref={imgRef}>
          <img
            src="/img/assustado.png"
            alt="Pessoa assustada com a fatura"
            className="problema-img"
          />
          <div className="editorial-bill-card" ref={cardRef}>
            <div className="bill-card-top">
              <span className="bill-ico-wrap"><IcoAlert /></span>
              <span className="bill-label">Fatura do cartão</span>
            </div>
            <div className="bill-value">R$ 3.847<span className="bill-cents">,90</span></div>
            <div className="bill-tag-row">
              <span className="bill-tag-dot" />
              <span className="bill-tag-txt">Acima do limite definido</span>
            </div>
          </div>
        </div>

        {/* 3. Texto + lista + CTA */}
        <div className="problema-body" data-reveal>
          <p className="problema-desc">
            Todo mês a mesma história: você abre a fatura e leva um susto.
            O dinheiro foi embora e você não sabe exatamente pra onde.
            O Finanças muda isso: você acompanha cada gasto em tempo real,
            antes da surpresa chegar.
          </p>
          <ul className="editorial-list problema-list">
            <li><span className="ico-check"><IcoCheck /></span>Alerta antes de chegar no limite</li>
            <li><span className="ico-check"><IcoCheck /></span>Histórico completo de todos os gastos</li>
            <li><span className="ico-check"><IcoCheck /></span>Fim das surpresas no fim do mês</li>
          </ul>
          <a href={CHECKOUT_URL} className="btn-cta">
            Quero ter controle agora
            <span className="btn-ico"><IcoArrow /></span>
          </a>
        </div>

      </div>
    </section>
  )
}
