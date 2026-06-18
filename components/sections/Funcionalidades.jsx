'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const feats = [
  {
    img: '/img/adicionar.png',
    title: 'Registro em 8 segundos',
    desc: 'Valor, categoria, salvo. Menos tempo que mandar um áudio no WhatsApp. Sem desculpa pra não registrar.',
  },
  {
    img: '/img/tela-inicial.png',
    title: 'Alerta antes de estourar',
    desc: 'O app avisa quando você está chegando no limite. Você decide antes de passar. Não fica sabendo depois que já foi.',
  },
  {
    img: '/img/contas.png',
    title: 'Contas fixas que param sozinhas',
    desc: 'Cadastra as 12 parcelas do carro. O app lança todo mês e para automaticamente quando a última vencer.',
  },
]

export default function Funcionalidades() {
  const textRef = useRef(null)
  const imgRef  = useRef(null)

  useEffect(() => {
    gsap.from(textRef.current.querySelectorAll('[data-reveal]'), {
      scrollTrigger: { trigger: textRef.current, start: 'top 78%' },
      y: 32, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
    })
    gsap.from(imgRef.current, {
      scrollTrigger: { trigger: imgRef.current, start: 'top 80%' },
      x: 60, opacity: 0, duration: 1.0, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="section section-alt">
      <div className="func-editorial">

        {/* Texto + cards esquerda */}
        <div className="func-text" ref={textRef}>
          <p className="eyebrow" data-reveal>Funcionalidades</p>
          <h2 className="editorial-h2" data-reveal>
            O que você tem<br /><span className="green">no Finanças</span>
          </h2>
          <p className="editorial-p" data-reveal>
            Feito para quem quer usar todo dia, não configurar uma vez e abandonar.
          </p>
          <div className="func-cards">
            {feats.map(({ img, title, desc }, i) => (
              <div key={i} className="func-card" data-reveal>
                <div className="func-card-thumb">
                  <img src={img} alt={title} className="func-card-img" />
                </div>
                <div>
                  <h3 className="feat-title">{title}</h3>
                  <p className="feat-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots sobrepostos direita */}
        <div className="func-img-wrap" ref={imgRef}>
          <img
            src="/img/tela-inicial.png"
            alt="Tela inicial do Finanças"
            className="func-screenshot"
          />
          <img
            src="/img/transacoes.png"
            alt="Tela de transações do Finanças"
            className="func-screenshot func-screenshot--offset"
          />
        </div>

      </div>
    </section>
  )
}
