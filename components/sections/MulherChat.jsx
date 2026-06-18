'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IcoArrow } from '@/components/icons'

gsap.registerPlugin(ScrollTrigger)

const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

const bubbles = [
  { side: 'left',  text: 'Acho que tô gastando muito esse mês...' },
  { side: 'left',  text: 'Mas não faço ideia de onde foi o dinheiro' },
  { side: 'right', text: 'Olhei aqui: R$ 340 só em delivery' },
]

export default function MulherChat() {
  const sectionRef = useRef(null)
  const bubblesRef = useRef(null)
  const textRef    = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current.querySelector('.editorial-img-wrap'), {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      x: 60, opacity: 0, duration: 1.0, ease: 'power3.out',
    })

    const els = bubblesRef.current.querySelectorAll('.chat-bubble')
    gsap.set(els, { opacity: 0, y: 16 })
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      onEnter: () => gsap.to(els, {
        opacity: 1, y: 0, stagger: 0.8, duration: 0.7, ease: 'power3.out',
      }),
    })

    gsap.from(textRef.current.querySelectorAll('[data-reveal]'), {
      scrollTrigger: { trigger: textRef.current, start: 'top 78%' },
      y: 32, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="editorial-section editorial-section--reverse" ref={sectionRef}>
      <div className="editorial-text" ref={textRef}>
        <p className="eyebrow" data-reveal>Controle de verdade</p>
        <h2 className="editorial-h2" data-reveal>
          Chega de descobrir<br />
          <span className="green">o estrago no fim do mês.</span>
        </h2>
        <p className="editorial-p" data-reveal>
          Com o Finanças você acompanha cada gasto em tempo real
          e toma decisões com clareza, não com susto quando a fatura chega.
        </p>
        <a href={CHECKOUT_URL} className="btn-cta" data-reveal>
          Quero ter controle agora
          <span className="btn-ico"><IcoArrow /></span>
        </a>
      </div>

      {/* Foto com balões sobrepostos */}
      <div className="editorial-img-wrap mulher-wrap">
        <img
          src="/img/confiante.png"
          alt="Pessoa olhando para o celular preocupada"
          className="editorial-img"
        />
        <div className="mulher-bubbles" ref={bubblesRef}>
          {bubbles.map((b, i) => (
            <div key={i} className={`chat-bubble chat-bubble--${b.side}`}>
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
