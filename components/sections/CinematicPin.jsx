'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  {
    eyebrow: 'O problema real',
    stat: '92%',
    statClass: '',
    desc: 'do salário desaparece todo mês sem deixar rastro. Você não é descuidado. Você está no escuro.',
  },
  {
    eyebrow: 'A solução',
    stat: '8s',
    statClass: '',
    desc: 'para registrar qualquer gasto. Menos tempo que mandar um áudio no WhatsApp.',
  },
  {
    eyebrow: 'O resultado',
    stat: 'Zero',
    statClass: 'pin-stat-green',
    desc: 'surpresas no fim do mês. Você sabe onde está antes de chegar lá.',
  },
]

export default function CinematicPin() {
  const sectionRef = useRef(null)
  const slidesRef  = useRef([])
  const dotsRef    = useRef([])

  useEffect(() => {
    // Desabilita pin scroll em mobile — sem conflito com Lenis
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const section = sectionRef.current
      if (!section) return

      const slideEls = slidesRef.current

      // Estado inicial: todos invisíveis exceto o primeiro
      slideEls.forEach((slide, i) => {
        const els = slide?.querySelectorAll('[data-pin]')
        gsap.set(slide, { opacity: i === 0 ? 1 : 0 })
        if (els) gsap.set(els, { y: 55, opacity: 0 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1.5,
          onUpdate: (self) => {
            // Ativa o dot correspondente ao slide visível
            const idx = Math.min(2, Math.floor(self.progress * 3))
            dotsRef.current.forEach((dot, i) => {
              if (dot) dot.classList.toggle('active', i === idx)
            })
          },
        },
      })

      // Slide 0 — elementos entram com 0.2s stagger, power3.out
      const els0 = slideEls[0]?.querySelectorAll('[data-pin]')
      if (els0) {
        tl.to(els0, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        tl.to({}, { duration: 0.8 })
        tl.to(slideEls[0], { opacity: 0, y: -35, duration: 0.5, ease: 'power3.in' })
      }

      // Slide 1
      if (slideEls[1]) {
        const els1 = slideEls[1].querySelectorAll('[data-pin]')
        tl.to(slideEls[1], { opacity: 1, duration: 0.3, ease: 'power3.out' }, '<0.1')
        tl.to(els1, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '<0.2')
        tl.to({}, { duration: 0.8 })
        tl.to(slideEls[1], { opacity: 0, y: -35, duration: 0.5, ease: 'power3.in' })
      }

      // Slide 2 — entra e fica
      if (slideEls[2]) {
        const els2 = slideEls[2].querySelectorAll('[data-pin]')
        tl.to(slideEls[2], { opacity: 1, duration: 0.3, ease: 'power3.out' }, '<0.1')
        tl.to(els2, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '<0.2')
        tl.to({}, { duration: 1.0 })
      }

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    })

    // Mobile: exibe os três slides estaticamente (sem pin)
    mm.add('(max-width: 767px)', () => {
      const slideEls = slidesRef.current
      slideEls.forEach(slide => {
        if (slide) gsap.set(slide, { opacity: 1, y: 0 })
        const els = slide?.querySelectorAll('[data-pin]')
        if (els) gsap.set(els, { y: 0, opacity: 1 })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pin-section">
      <div className="pin-inner">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={el => { slidesRef.current[i] = el }}
            className="pin-slide"
          >
            <p className="pin-eyebrow" data-pin>{slide.eyebrow}</p>
            <p className={`pin-stat ${slide.statClass}`} data-pin>{slide.stat}</p>
            <p className="pin-desc" data-pin>{slide.desc}</p>
          </div>
        ))}

        {/* Indicadores de progresso */}
        <div className="pin-progress">
          {slides.map((_, i) => (
            <div
              key={i}
              ref={el => { dotsRef.current[i] = el }}
              className={`pin-dot${i === 0 ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
