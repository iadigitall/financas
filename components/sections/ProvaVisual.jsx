'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhoneFrame } from '@/components/Phone'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  { src: '/img/tela-inicial.png', alt: 'Tela inicial',    cap: 'Visão geral',        sub: 'Tudo em um só lugar, sempre atualizado' },
  { src: '/img/adicionar.png',    alt: 'Adicionar gasto', cap: 'Registro rápido',    sub: 'Menos de 10 segundos por gasto' },
  { src: '/img/contas.png',       alt: 'Contas a pagar',  cap: 'Contas do mês',      sub: 'Veja o que ainda está pendente' },
  { src: '/img/transacoes.png',   alt: 'Transações',      cap: 'Histórico completo', sub: 'Você vê tudo que entrou e saiu' },
]

export default function ProvaVisual() {
  const rowRef   = useRef(null)
  const trackRef = useRef(null)
  const timerRef = useRef(null)
  const touchX   = useRef(0)
  const [active, setActive] = useState(0)

  const goTo = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(idx, slides.length - 1))
    setActive(clamped)
    if (trackRef.current && window.innerWidth <= 600) {
      gsap.to(trackRef.current, {
        x: -(clamped * 100) + '%',
        duration: 0.7,
        ease: 'power3.out',
      })
    }
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % slides.length
        if (trackRef.current && window.innerWidth <= 600) {
          gsap.to(trackRef.current, {
            x: -(next * 100) + '%',
            duration: 0.7,
            ease: 'power3.out',
          })
        }
        return next
      })
    }, 3000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  // Swipe
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    const diff = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) < 40) return
    const next = diff > 0
      ? Math.min(active + 1, slides.length - 1)
      : Math.max(active - 1, 0)
    goTo(next)
    startTimer()
  }

  // Entrada GSAP no desktop
  useEffect(() => {
    if (window.innerWidth <= 600) return
    gsap.from(rowRef.current?.querySelectorAll('.mock'), {
      scrollTrigger: { trigger: rowRef.current, start: 'top 78%' },
      y: 50, opacity: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="section">
      <div className="container text-center">
        <p className="eyebrow" data-aos="fade-up">Na Prática</p>
        <h2 className="sec-h2" data-aos="fade-up" data-aos-delay="60">
          Assim fica no seu celular
        </h2>
        <p className="sec-p" data-aos="fade-up" data-aos-delay="100">
          Interface pensada para o dia a dia. Abre, registra, fecha. Simples assim.
        </p>

        <div className="mocks-row" ref={rowRef}>
          {/* Track — só em mobile vira carousel */}
          <div
            className="mocks-track"
            ref={trackRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((s, i) => (
              <div key={i} className={`mock${i === 1 ? ' mock-highlight' : ''}`}>
                <PhoneFrame src={s.src} alt={s.alt} />
                <p className="mock-cap">{s.cap}</p>
                <p className="mock-sub">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? ' carousel-dot-active' : ''}`}
              onClick={() => { goTo(i); startTimer() }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
