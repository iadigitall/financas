'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhoneFrame } from '@/components/Phone'
import { IcoPhone, IcoEdit, IcoEye, IcoCheck } from '@/components/icons'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    Icon: IcoPhone, num: '01', title: 'Configura em 1 minuto',
    desc: 'Cria sua conta, coloca seu salário e define seu limite mensal. Sem configuração complicada. Está pronto para usar na hora.',
    items: ['Funciona no celular, tablet e computador', 'Sem instalar nada, direto no navegador', 'Login seguro e dados na nuvem'],
  },
  {
    Icon: IcoEdit, num: '02', title: 'Registra cada gasto em 8 segundos',
    desc: 'Gastou R$ 50 no mercado? Abre o app, escolhe alimentação, coloca o valor e salva. É isso. Menos tempo que mandar um áudio.',
    items: ['Categorias prontas: alimentação, transporte, lazer, saúde', 'Histórico completo de todos os lançamentos', 'Contas fixas que se repetem todo mês no automático'],
  },
  {
    Icon: IcoEye, num: '03', title: 'Você finalmente sabe onde está',
    desc: 'Veja em tempo real quanto já foi para cada categoria, quanto ainda sobra e quando está chegando no limite. O fim do mês deixa de ser surpresa.',
    items: ['Alerta antes de estourar o orçamento', 'Gráficos e comparativo mês a mês', 'Inteligência financeira que aponta onde cortar'],
  },
]

export default function ComoFunciona() {
  const leftRef  = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const stepsEl = leftRef.current?.querySelectorAll('.step')
    if (stepsEl) {
      gsap.from(stepsEl, {
        scrollTrigger: { trigger: leftRef.current, start: 'top 78%' },
        x: -28, opacity: 0, stagger: 0.2, duration: 0.9, ease: 'power3.out',
      })
    }
    gsap.from(phoneRef.current, {
      scrollTrigger: { trigger: phoneRef.current, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div className="how-wrap">
          <div className="how-left" ref={leftRef}>
            <p className="eyebrow">Como Funciona</p>
            <h2 className="how-h2">
              2 minutos por dia.<br /><span className="green">Resultado o mês todo.</span>
            </h2>
            <p className="how-p">
              Não precisa ser organizado. Não precisa entender de finanças.
              Precisa só registrar o que gastou.
            </p>
            {steps.map(({ Icon, num, title, desc, items }, i) => (
              <div key={i} className="step">
                <div className="step-icon"><Icon /></div>
                <div className="step-body">
                  <span className="step-num">{num}</span>
                  <h3 className="step-title">{title}</h3>
                  <p className="step-desc">{desc}</p>
                  <ul className="step-list">
                    {items.map((item, j) => (
                      <li key={j}><span className="step-chk"><IcoCheck /></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="how-right" ref={phoneRef}>
            <PhoneFrame src="/img/transacoes.png" alt="Tela de transações do Finanças" />
          </div>
        </div>
      </div>
    </section>
  )
}
