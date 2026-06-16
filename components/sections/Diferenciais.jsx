'use client'
import { IcoChart, IcoCalendar, IcoWifi } from '@/components/icons'

const diffs = [
  {
    Icon: IcoChart,
    tag: 'Saúde financeira',
    title: 'O app sabe quando você comprometeu demais do salário',
    desc: 'Quando seus gastos passam de 35% do que você ganha, o Finanças te avisa. A maioria dos apps não liga pra isso. O seu liga.',
  },
  {
    Icon: IcoCalendar,
    tag: 'Virada de mês',
    title: 'Fecha o mês, começa do zero e guarda tudo',
    desc: 'Fechou junho? O app arquiva tudo e abre julho em branco. Qualquer mês anterior fica guardado pra você consultar quando quiser.',
  },
  {
    Icon: IcoWifi,
    tag: 'Tecnologia',
    title: 'Funciona sem internet. Instala sem App Store.',
    desc: 'É um PWA. Você instala direto no browser no iPhone ou Android, abre como se fosse um app e funciona mesmo sem sinal.',
  },
]

export default function Diferenciais() {
  return (
    <section className="section diff-section">
      <div className="container">
        <div className="text-center">
          <p className="eyebrow" data-aos="fade-up">Por que é diferente</p>
          <h2 className="sec-h2" data-aos="fade-up" data-aos-delay="60">
            Tem coisa aqui que você<br /><span className="green">não acha</span> em outro app
          </h2>
          <p className="sec-p" data-aos="fade-up" data-aos-delay="100">
            Não estamos falando de gráfico bonito. Estamos falando de decisões que mudam o seu mês.
          </p>
        </div>
        <div className="diff-list">
          {diffs.map(({ Icon, tag, title, desc }, i) => (
            <div key={i} className="diff-item" data-aos="fade-up" data-aos-delay={i * 90}>
              <div className="diff-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="diff-icon-wrap"><Icon /></div>
              <div className="diff-body">
                <p className="diff-tag">{tag}</p>
                <h3 className="diff-title">{title}</h3>
                <p className="diff-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="diff-teaser" data-aos="fade-up">
          <p className="diff-teaser-main">Isso é só o que resolvemos mostrar aqui.</p>
          <p className="diff-teaser-sub">Entre e descubra o resto.</p>
        </div>
      </div>
    </section>
  )
}
