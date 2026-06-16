'use client'
import gsap from 'gsap'
import { IcoZap, IcoBell, IcoRepeat } from '@/components/icons'

const feats = [
  {
    Icon: IcoZap,
    title: 'Registro em 8 segundos',
    desc: 'Valor, categoria, salvo. Menos tempo que mandar um áudio no WhatsApp. Sem desculpa pra não registrar.',
  },
  {
    Icon: IcoBell,
    title: 'Alerta antes de estourar',
    desc: 'O app avisa quando você está chegando no limite. Você decide antes de passar. Não fica sabendo depois que já foi.',
  },
  {
    Icon: IcoRepeat,
    title: 'Contas fixas que param sozinhas',
    desc: 'Cadastra as 12 parcelas do carro. O app lança todo mês e para automaticamente quando a última vencer.',
  },
]

const on3D  = e => {
  const c = e.currentTarget
  const r = c.getBoundingClientRect()
  gsap.to(c, {
    rotateX: -(e.clientY - r.top  - r.height / 2) / 14,
    rotateY:  (e.clientX - r.left - r.width  / 2) / 14,
    duration: 0.3, ease: 'power3.out', transformPerspective: 900,
  })
}
const off3D = e => gsap.to(e.currentTarget, {
  rotateX: 0, rotateY: 0, duration: 0.8, ease: 'expo.out',
})

export default function Funcionalidades() {
  return (
    <section className="section section-alt">
      <div className="container text-center">
        <p className="eyebrow" data-aos="fade-up">Funcionalidades</p>
        <h2 className="sec-h2" data-aos="fade-up" data-aos-delay="60">
          O que você tem<br /><span className="green">no Finanças</span>
        </h2>
        <p className="sec-p" data-aos="fade-up" data-aos-delay="100">
          Feito para quem quer usar todo dia, não configurar uma vez e abandonar.
        </p>
        <div className="feat-grid-3">
          {feats.map(({ Icon, title, desc }, i) => (
            <div key={i} className="feat-card"
              data-aos="fade-up" data-aos-delay={i * 70}
              onMouseMove={on3D} onMouseLeave={off3D}>
              <div className="feat-ico"><Icon /></div>
              <h3 className="feat-title">{title}</h3>
              <p className="feat-desc">{desc}</p>
            </div>
          ))}
        </div>
        <p className="feat-teaser" data-aos="fade-up">
          Tem mais 7 recursos dentro do app. Você vai descobrindo conforme usa.
        </p>
      </div>
    </section>
  )
}
