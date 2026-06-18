'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const diffs = [
  {
    num: '01',
    tag: 'Saúde financeira',
    title: 'O app sabe quando você comprometeu demais do salário',
    desc: 'Quando seus gastos passam de 35% do que você ganha, o Finanças te avisa. A maioria dos apps não liga pra isso. O seu liga.',
  },
  {
    num: '02',
    tag: 'Virada de mês',
    title: 'Fecha o mês, começa do zero e guarda tudo',
    desc: 'Fechou junho? O app arquiva tudo e abre julho em branco. Qualquer mês anterior fica guardado pra você consultar quando quiser.',
  },
  {
    num: '03',
    tag: 'Tecnologia',
    title: 'Funciona sem internet. Instala sem App Store.',
    desc: 'É um PWA. Você instala direto no browser no iPhone ou Android, abre como se fosse um app e funciona mesmo sem sinal.',
  },
]

export default function Diferenciais() {
  const textRef = useRef(null)
  const imgRef  = useRef(null)

  useEffect(() => {
    gsap.from(textRef.current.querySelectorAll('[data-reveal]'), {
      scrollTrigger: { trigger: textRef.current, start: 'top 78%' },
      y: 32, opacity: 0, stagger: 0.13, duration: 0.9, ease: 'power3.out',
    })
    gsap.from(imgRef.current, {
      scrollTrigger: { trigger: imgRef.current, start: 'top 82%' },
      x: -60, opacity: 0, duration: 1.0, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="section diff-section">
      <div className="diff-editorial">

        {/* Foto esquerda */}
        <div className="diff-img-wrap" ref={imgRef}>
          <img
            src="/img/trite.png"
            alt="Pessoa preocupada com as contas"
            className="diff-img"
          />
          <div className="diff-img-caption">
            <span className="diff-cap-num">73%</span>
            <span className="diff-cap-txt">dos brasileiros não sabem para onde vai o dinheiro todo mês</span>
          </div>
        </div>

        {/* Lista direita sem ícones SVG */}
        <div className="diff-text" ref={textRef}>
          <p className="eyebrow" data-reveal>Por que é diferente</p>
          <h2 className="editorial-h2" data-reveal>
            Tem coisa aqui que você<br /><span className="green">não acha</span> em outro app
          </h2>
          <div className="diff-list-inline">
            {diffs.map(({ num, tag, title, desc }, i) => (
              <div key={i} className="diff-item-inline" data-reveal>
                <span className="diff-num-badge">{num}</span>
                <div className="diff-body">
                  <p className="diff-tag">{tag}</p>
                  <h3 className="diff-title">{title}</h3>
                  <p className="diff-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
