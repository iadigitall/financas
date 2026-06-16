'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhoneFrame } from '@/components/Phone'
import { IcoArrow } from '@/components/icons'

gsap.registerPlugin(ScrollTrigger)

const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

export default function Hero() {
  const titleRef     = useRef(null)
  const subRef       = useRef(null)
  const ctaRef       = useRef(null)
  const noteRef      = useRef(null)
  const rightRef     = useRef(null)
  const indicatorRef = useRef(null)

  // Reveal cinematográfico com tensão — palavras sobem do overflow
  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const words = title.querySelectorAll('.word')

    // Estado inicial: palavras escondidas abaixo do clip
    gsap.set(words, { y: '105%' })
    gsap.set([subRef.current, ctaRef.current, noteRef.current], { opacity: 0, y: 18 })

    // 0.6s de silêncio (a "tensão") antes da primeira palavra
    const tl = gsap.timeline({ delay: 0.6 })

    tl.to(words, {
      y: '0%',
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
    })
    .to(subRef.current, {
      opacity: 1, y: 0,
      duration: 0.8, ease: 'power3.out',
    }, '-=0.3')
    .to(ctaRef.current, {
      opacity: 1, y: 0,
      duration: 0.8, ease: 'power3.out',
    }, '-=0.55')
    .to(noteRef.current, {
      opacity: 1, y: 0,
      duration: 0.7, ease: 'power3.out',
    }, '-=0.5')
    .fromTo(rightRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1.0, ease: 'power3.out' },
      0.3
    )

    return () => tl.kill()
  }, [])

  // Parallax suave do phone no movimento do mouse (desktop)
  useEffect(() => {
    if (window.innerWidth < 768) return
    const h = e => gsap.to(rightRef.current, {
      x: (e.clientX / window.innerWidth - 0.5) * 18,
      y: (e.clientY / window.innerHeight - 0.5) * 12,
      duration: 0.7, ease: 'power3.out',
    })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  // Scroll indicator some ao descer
  useEffect(() => {
    const indicator = indicatorRef.current
    if (!indicator) return

    const trigger = ScrollTrigger.create({
      start: 'top top-=80',
      onEnter: () => gsap.to(indicator, { opacity: 0, y: 12, duration: 0.7, ease: 'power3.out' }),
      onLeaveBack: () => gsap.to(indicator, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
    })

    return () => trigger.kill()
  }, [])

  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dsbz2izvi/video/upload/vc_h264,q_100,f_mp4/ssstik.io_1777665184648_euj4mu.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-left">
          <p className="eyebrow">Controle financeiro inteligente</p>

          <h1 ref={titleRef} className="hero-title">
            <span className="title-line">
              {['Você', 'não', 'está'].map(w => (
                <span key={w} className="word-wrap">
                  <span className="word">{w}</span>{' '}
                </span>
              ))}
            </span>
            <span className="title-line">
              {['quebrado.', 'Você'].map(w => (
                <span key={w} className="word-wrap">
                  <span className="word">{w}</span>{' '}
                </span>
              ))}
            </span>
            <span className="title-line">
              {['está', 'no'].map(w => (
                <span key={w} className="word-wrap">
                  <span className="word">{w}</span>{' '}
                </span>
              ))}
              <span className="word-wrap">
                <span className="word hero-accent">escuro.</span>
              </span>
            </span>
          </h1>

          <p ref={subRef} className="hero-sub">
            O Finanças acende a luz. Você vê exatamente onde vai
            cada real do seu salário. E a partir daí, você decide o que muda.
          </p>

          <a ref={ctaRef} href="#assinar" className="btn-cta">
            Quero ter controle do meu dinheiro
            <span className="btn-ico"><IcoArrow /></span>
          </a>

          <p ref={noteRef} className="hero-note">
            R$ 13,90 por mês &nbsp;·&nbsp; Acesso imediato &nbsp;·&nbsp; Cancele quando quiser
          </p>
        </div>

        <div ref={rightRef} className="hero-right">
          <PhoneFrame src="/img/tela-inicial.png" alt="Tela inicial do Finanças" />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div ref={indicatorRef} className="hero-scroll-indicator">
        <span>Role para baixo</span>
        <div className="scroll-chevron">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
