'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { IcoArrow, IcoCheck } from '@/components/icons'

const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

export default function CTAFinal() {
  const btnRef = useRef(null)
  const bgRef  = useRef(null)

  useEffect(() => {
    gsap.to(btnRef.current, {
      scale: 1.04, duration: 1.4, repeat: -1, yoyo: true, ease: 'power3.out',
    })
    gsap.to(bgRef.current, {
      backgroundPosition: '100% 50%', duration: 7, repeat: -1, yoyo: true, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="cta-section" id="assinar">
      <div ref={bgRef} className="cta-bg" />
      <div className="container cta-inner" data-aos="fade-up">
        <p className="eyebrow">Comece Agora</p>
        <h2 className="cta-h2">
          Chega de terminar o mês<br />sem entender o que aconteceu.
        </h2>
        <p className="cta-p">
          Com o Finanças você tem visibilidade total do seu dinheiro.
          E visibilidade é o primeiro passo para a liberdade financeira.
        </p>
        <div className="cta-price-card">
          <div className="cta-price-tag">Assinatura mensal</div>
          <div className="cta-price-row">
            <span className="cta-cur">R$</span>
            <span className="cta-val">13</span>
            <span className="cta-dec">,90<span className="cta-mo">/mês</span></span>
          </div>
          <p className="cta-compare">Menos que um jantar. O controle total do seu dinheiro.</p>
          <a ref={btnRef} href={CHECKOUT_URL} className="btn-cta btn-cta-lg">
            Quero ter controle agora <span className="btn-ico"><IcoArrow /></span>
          </a>
        </div>
        <ul className="cta-guarantees">
          {['Acesso imediato após a assinatura', 'Funciona em qualquer celular', 'Cancele quando quiser', 'Suporte incluído'].map((g, i) => (
            <li key={i}><span className="g-ico"><IcoCheck /></span>{g}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
