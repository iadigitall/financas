'use client'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { IcoChevronDown } from '@/components/icons'

const perguntas = [
  {
    q: 'Preciso instalar algum aplicativo?',
    a: 'Não. O Finanças é um PWA (Progressive Web App) e funciona direto no navegador do seu celular, tablet ou computador. Basta acessar o link e fazer seu cadastro.',
  },
  {
    q: 'Meus dados financeiros ficam seguros?',
    a: 'Sim. Todos os seus dados ficam armazenados na nuvem com segurança. Nunca compartilhamos suas informações com terceiros e você tem controle total sobre o que registra.',
  },
  {
    q: 'Preciso conectar minha conta no banco?',
    a: 'Não. Você registra seus gastos manualmente, em segundos. Isso mantém sua privacidade total e te coloca no controle do que entra e sai, sem dar acesso ao seu banco.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem fidelidade, sem multa, sem burocracia. Se quiser cancelar, é só não renovar a assinatura. Simples assim.',
  },
  {
    q: 'Funciona para mais de uma pessoa da família?',
    a: 'Por enquanto cada conta é individual. Cada membro da família pode criar a sua própria conta no Finanças e gerenciar seus gastos de forma independente.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const bodyRef  = useRef(null)
  const iconRef  = useRef(null)

  const toggle = () => {
    const body = bodyRef.current
    if (!open) {
      gsap.set(body, { height: 'auto', opacity: 1 })
      const h = body.offsetHeight
      gsap.from(body, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.out' })
      gsap.to(iconRef.current, { rotation: 180, duration: 0.4, ease: 'power3.out' })
    } else {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.45, ease: 'power3.in' })
      gsap.to(iconRef.current, { rotation: 0, duration: 0.4, ease: 'power3.out' })
    }
    setOpen(!open)
  }

  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-question" onClick={toggle}>
        <span>{q}</span>
        <span className="faq-icon" ref={iconRef}><IcoChevronDown /></span>
      </button>
      <div className="faq-body" ref={bodyRef} style={{ height: 0, opacity: 0, overflow: 'hidden' }}>
        <p className="faq-answer">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow text-center" data-aos="fade-up">Dúvidas Frequentes</p>
        <h2 className="sec-h2 text-center" data-aos="fade-up">
          Perguntas Frequentes
        </h2>
        <div className="faq-list" data-aos="fade-up">
          {perguntas.map((p, i) => (
            <FAQItem key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
