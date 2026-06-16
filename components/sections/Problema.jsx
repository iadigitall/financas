'use client'
import { IcoWallet, IcoAlert, IcoTrend, IcoRepeat } from '@/components/icons'

const pains = [
  {
    Icon: IcoWallet,
    title: 'No dia 20 o saldo já foi',
    desc: 'Você olha a conta e se pergunta onde foi tudo. Mas não tem como saber. Cada centavo sumiu sem deixar rastro.',
  },
  {
    Icon: IcoAlert,
    title: 'Os pequenos gastos te engolam',
    desc: 'O delivery, o lanchinho, a assinatura esquecida. Cada um parece pequeno. Somados, é um valor absurdo.',
  },
  {
    Icon: IcoTrend,
    title: 'Sobrar dinheiro parece impossível',
    desc: 'Todo mês você promete controlar. Na segunda semana já esqueceu. Isso acontece com todo mundo que não tem uma ferramenta.',
  },
  {
    Icon: IcoRepeat,
    title: 'O fim do mês sempre é um susto',
    desc: 'Quanto deu? Quanto sobrou? Você nunca sabe antes de acontecer. E quando descobre, já é tarde.',
  },
]

export default function Problema() {
  return (
    <section className="section section-alt">
      <div className="container text-center">
        <p className="eyebrow" data-aos="fade-up">O Problema</p>
        <h2 className="sec-h2" data-aos="fade-up" data-aos-delay="60">
          Isso te parece familiar?
        </h2>
        <p className="sec-p" data-aos="fade-up" data-aos-delay="100">
          Se sim, você não está sozinho. E não é fraqueza. É falta de visibilidade.
        </p>
        <div className="pain-grid">
          {pains.map(({ Icon, title, desc }, i) => (
            <div key={i} className="pain-card" data-aos="fade-up" data-aos-delay={i * 70}>
              <div className="pain-ico"><Icon /></div>
              <h3 className="pain-title">{title}</h3>
              <p className="pain-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
