import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

// TODO: cole o link do checkout aqui
const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

// ─── ÍCONES ───────────────────────────────────────────────────────────────────
const IcoArrow     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
const IcoCheck     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
const IcoWallet    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M2 10h1M21 10h1"/></svg>
const IcoAlert     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const IcoTrend     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
const IcoRepeat    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
const IcoZap       = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
const IcoChart     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
const IcoBell      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
const IcoTag       = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
const IcoPhone     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
const IcoCalendar  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
const IcoWifi      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
const IcoEdit      = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
const IcoEye       = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
const IcoSparkle   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>

// ─── PHONE MOCKUP ─────────────────────────────────────────────────────────────
function Phone({ children }) {
  return (
    <div className="phone">
      <div className="phone-top">
        <span className="phone-time">9:41</span>
        <div className="phone-island" />
        <div className="phone-signal">
          <span /><span /><span /><span />
        </div>
      </div>
      <div className="phone-body">{children}</div>
      <div className="phone-bottom-bar" />
    </div>
  )
}

// Fiel ao app real: glassmorphism verde, pills, gradiente
function ScreenDashboard() {
  return (
    <div className="sc">
      {/* Header do app */}
      <div className="sc-header">
        <div>
          <div className="sc-greeting">Oi, Marcos!</div>
          <div className="sc-period">
            <span className="sc-period-num">06</span>
            <div>
              <div className="sc-period-name">Junho,</div>
              <div className="sc-period-year">2025</div>
            </div>
          </div>
        </div>
        <div className="sc-avatar">M</div>
      </div>

      {/* Debt card — igual ao real */}
      <div className="sc-debt-card">
        <div className="sc-debt-inner">
          <div className="sc-debt-left">
            <div className="sc-debt-label">Finanças Totais <span>›</span></div>
            <div className="sc-debt-value">R$ 1.840</div>
            <div className="sc-debt-limit">Limite: <span className="sc-debt-limit-tag">R$ 2.000</span></div>
            <div className="sc-prog-row">
              <div className="sc-prog-track">
                <div className="sc-prog-bar" style={{ width: '92%' }} />
              </div>
              <span className="sc-prog-info">92% utilizado</span>
            </div>
          </div>
          <div className="sc-debt-sep" />
          <div className="sc-debt-right">
            <div className="sc-debt-stat">
              <div className="sc-stat-lbl">Despesas</div>
              <div className="sc-stat-val sc-pink">R$ 1.340</div>
            </div>
            <div className="sc-debt-stat">
              <div className="sc-stat-lbl">Pendentes</div>
              <div className="sc-stat-val sc-green-glow">R$ 500</div>
            </div>
          </div>
        </div>
        <div className="sc-pills">
          <div className="sc-pill sc-pill-green">VER CONTAS +</div>
          <div className="sc-pill sc-pill-red">ADD DESPESA -</div>
        </div>
      </div>

      {/* Categorias */}
      <div className="sc-section">
        <div className="sc-section-title">Categorias</div>
        {[
          { name: 'Alimentação', pct: 62, val: '860', col: '#A3FF47' },
          { name: 'Transporte',  pct: 35, val: '480', col: '#60A5FA' },
          { name: 'Lazer',       pct: 55, val: '380', col: '#F59E0B' },
          { name: 'Saúde',       pct: 14, val: '120', col: '#F87171' },
        ].map(c => (
          <div key={c.name} className="sc-cat">
            <div className="sc-cat-head">
              <span className="sc-cat-dot" style={{ background: c.col }} />
              <span className="sc-cat-name">{c.name}</span>
              <span className="sc-cat-val">R$ {c.val}</span>
            </div>
            <div className="sc-cat-track">
              <div className="sc-cat-bar" style={{ width: `${c.pct}%`, background: c.col }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScreenAdd() {
  return (
    <div className="sc">
      <div className="sc-header">
        <div className="sc-back-btn">← Voltar</div>
      </div>
      <div className="sc-add-title">Adicionar Despesa</div>

      <div className="sc-amount-block">
        <div className="sc-amount-lbl">Valor</div>
        <div className="sc-amount">R$ 89<span className="sc-amount-dec">,90</span></div>
      </div>

      <div className="sc-field-block">
        <div className="sc-field-lbl">Descrição</div>
        <div className="sc-field-val">Supermercado Extra</div>
      </div>

      <div className="sc-field-lbl" style={{ marginBottom: 8 }}>Categoria</div>
      <div className="sc-chips-grid">
        {[
          { name: 'Alimentação', col: '#A3FF47', on: true  },
          { name: 'Transporte',  col: '#60A5FA', on: false },
          { name: 'Lazer',       col: '#F59E0B', on: false },
          { name: 'Saúde',       col: '#F87171', on: false },
        ].map(c => (
          <div key={c.name}
            className={`sc-chip-cat${c.on ? ' sc-chip-on' : ''}`}
            style={c.on ? { borderColor: c.col, color: c.col } : {}}>
            <span className="sc-chip-circle" style={{ background: c.col }} />
            {c.name}
          </div>
        ))}
      </div>

      <div className="sc-add-btn">SALVAR DESPESA</div>
    </div>
  )
}

function ScreenStats() {
  const bars = [
    { mes: 'Mar', h: 65 },
    { mes: 'Abr', h: 48 },
    { mes: 'Mai', h: 87 },
    { mes: 'Jun', h: 58, current: true },
  ]
  return (
    <div className="sc">
      <div className="sc-header">
        <div className="sc-greeting">Comparação Mensal</div>
      </div>

      {/* flex-spacer trick: sem height%, funciona em qualquer container */}
      <div className="sc-bars">
        {bars.map(b => (
          <div key={b.mes} className="sc-bcol">
            <div style={{ flex: 100 - b.h }} />
            <div className="sc-bbar" style={{
              flex: b.h,
              background: b.current ? 'linear-gradient(180deg,#A3FF47,#6FCC1A)' : '#2A2A2A',
              boxShadow: b.current ? '0 0 10px rgba(163,255,71,0.35)' : 'none',
            }} />
            <span className="sc-bmes" style={{ color: b.current ? '#A3FF47' : '#444' }}>{b.mes}</span>
          </div>
        ))}
      </div>

      <div className="sc-insight-card">
        <span className="sc-insight-up">33% menos</span> que o mês passado
      </div>

      <div className="sc-section">
        <div className="sc-section-title">Inteligência Financeira</div>
        <div className="sc-intel-item">
          <span className="sc-intel-dot" style={{ background: '#A3FF47' }} />
          <span>Alimentação 12% acima da média</span>
        </div>
        <div className="sc-intel-item">
          <span className="sc-intel-dot" style={{ background: '#60A5FA' }} />
          <span>Lazer dentro do limite esse mês</span>
        </div>
        <div className="sc-intel-item">
          <span className="sc-intel-dot" style={{ background: '#F59E0B' }} />
          <span>Você economizou R$ 160 vs junho</span>
        </div>
      </div>
    </div>
  )
}

// ─── INTRO — cópia exata do splash do app ─────────────────────────────────────
function Intro() {
  return (
    <section className="intro-section">
      <div className="spl-content">
        <div className="spl-icon">
          <svg viewBox="0 0 56 56" fill="none">
            <rect className="spl-bg" width="56" height="56" rx="16" fill="#A3FF47"/>
            <path className="spl-path" d="M14 38 L20 30 L27 34 L35 22 L42 18"
              stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle className="spl-dot spl-dot-1" cx="14" cy="38" r="3" fill="#0D0D0D"/>
            <circle className="spl-dot spl-dot-2" cx="42" cy="18" r="3" fill="#0D0D0D"/>
          </svg>
        </div>
        <div className="spl-welcome">Bem-vindo ao</div>
        <div className="spl-brand">Finanças</div>
        <div className="spl-bar"></div>
        <div className="spl-tagline">Controle inteligente</div>
      </div>
      <div className="intro-hint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        <span>Role para continuar</span>
      </div>
    </section>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const canvasRef = useRef(null)
  const titleRef  = useRef(null)
  const rightRef  = useRef(null)
  const subRef    = useRef(null)
  const ctaRef    = useRef(null)
  const noteRef   = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 768) return
    const canvas = canvasRef.current
    if (!canvas) return
    let done = null

    import('three').then((THREE) => {
      const W = window.innerWidth, H = window.innerHeight
      const scene    = new THREE.Scene()
      const camera   = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
      camera.position.z = 5
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const n = 200, pos = new Float32Array(n * 3)
      for (let i = 0; i < n; i++) {
        pos[i*3]   = (Math.random()-0.5)*22
        pos[i*3+1] = (Math.random()-0.5)*14
        pos[i*3+2] = (Math.random()-0.5)*8
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const mat = new THREE.PointsMaterial({ color: 0xa3ff47, size: 0.06, transparent: true, opacity: 0.35 })
      const pts = new THREE.Points(geo, mat)
      scene.add(pts)

      let mx = 0, my = 0
      const mm = e => { mx = e.clientX/W - 0.5; my = e.clientY/H - 0.5 }
      window.addEventListener('mousemove', mm)
      let id
      const tick = () => {
        id = requestAnimationFrame(tick)
        pts.rotation.y += 0.0005 + mx * 0.001
        pts.rotation.x += my * 0.0008
        renderer.render(scene, camera)
      }
      tick()
      const rz = () => { renderer.setSize(window.innerWidth, window.innerHeight); camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix() }
      window.addEventListener('resize', rz)
      done = () => { cancelAnimationFrame(id); window.removeEventListener('mousemove', mm); window.removeEventListener('resize', rz); renderer.dispose(); geo.dispose(); mat.dispose() }
    })
    return () => done?.()
  }, [])

  useEffect(() => {
    const el = titleRef.current
    if (!el) return

    // 1. Cria os spans
    el.querySelectorAll('.hl').forEach(l => {
      l.innerHTML = [...l.textContent].map(c =>
        c === ' ' ? ' ' : `<span class="ch">${c}</span>`
      ).join('')
    })

    // 2. Esconde os chars DEPOIS de criá-los (sem flash)
    gsap.set(el.querySelectorAll('.ch'), { opacity: 0, y: 18 })

    // 3. gsap.to() e fromTo() — nunca aplicam estado inicial imediatamente
    const tl = gsap.timeline()
    tl.to(el.querySelectorAll('.ch'), {
        opacity: 1, y: 0, stagger: 0.014, duration: 0.44, ease: 'power3.out',
      })
      .fromTo(subRef.current,
        { y: 10 }, { y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.1')
      .fromTo(ctaRef.current,
        { y: 8, scale: 0.97 }, { y: 0, scale: 1, duration: 0.42, ease: 'back.out(1.5)' }, '-=0.2')
      .fromTo(noteRef.current,
        { y: 6 }, { y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.15')
      .fromTo(rightRef.current,
        { opacity: 0, x: 32 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.15)
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return
    const h = e => gsap.to(rightRef.current, { x: (e.clientX/window.innerWidth - 0.5)*16, y: (e.clientY/window.innerHeight - 0.5)*10, duration: 0.5, ease: 'power2.out' })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="eyebrow">Controle financeiro inteligente</p>
          <h1 ref={titleRef} className="hero-title">
            <span className="hl">Você não está</span><br />
            <span className="hl">quebrado. Você</span><br />
            <span className="hl hero-accent">está no escuro.</span>
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
          <Phone><ScreenDashboard /></Phone>
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEMA ─────────────────────────────────────────────────────────────────
function Problema() {
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

// ─── COMO FUNCIONA ────────────────────────────────────────────────────────────
function ComoFunciona() {
  const leftRef  = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    // apenas translação — opacity fica no CSS/AOS para não sumir antes do scroll
    gsap.from(leftRef.current?.querySelectorAll('.step'), {
      scrollTrigger: { trigger: leftRef.current, start: 'top 80%' },
      x: -24, stagger: 0.15, duration: 0.55, ease: 'power3.out',
    })
    gsap.from(phoneRef.current, {
      scrollTrigger: { trigger: phoneRef.current, start: 'top 80%' },
      y: 32, duration: 0.75, ease: 'power3.out',
    })
  }, [])

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
            <Phone><ScreenStats /></Phone>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FUNCIONALIDADES ──────────────────────────────────────────────────────────
function Funcionalidades() {
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

  const on3D  = e => { const c=e.currentTarget,r=c.getBoundingClientRect(); gsap.to(c,{rotateX:-(e.clientY-r.top-r.height/2)/14,rotateY:(e.clientX-r.left-r.width/2)/14,duration:0.25,ease:'power2.out',transformPerspective:900}) }
  const off3D = e => gsap.to(e.currentTarget,{rotateX:0,rotateY:0,duration:0.6,ease:'elastic.out(1,0.5)'})

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

// ─── DIFERENCIAIS ─────────────────────────────────────────────────────────────
function Diferenciais() {
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

// ─── PROVA VISUAL ─────────────────────────────────────────────────────────────
function ProvaVisual() {
  const rowRef = useRef(null)
  useEffect(() => {
    gsap.from(rowRef.current?.querySelectorAll('.mock'), {
      scrollTrigger: { trigger: rowRef.current, start: 'top 80%' },
      y: 44, stagger: 0.12, duration: 0.7, ease: 'power3.out',
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
          <div className="mock">
            <Phone><ScreenStats /></Phone>
            <p className="mock-cap">Comparativo mensal</p>
            <p className="mock-sub">Você vê a evolução mês a mês</p>
          </div>
          <div className="mock mock-highlight">
            <Phone><ScreenDashboard /></Phone>
            <p className="mock-cap">Visão geral</p>
            <p className="mock-sub">Tudo em um só lugar, sempre atualizado</p>
          </div>
          <div className="mock">
            <Phone><ScreenAdd /></Phone>
            <p className="mock-cap">Registro rápido</p>
            <p className="mock-sub">Menos de 10 segundos por gasto</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA FINAL ────────────────────────────────────────────────────────────────
function CTAFinal() {
  const btnRef = useRef(null)
  const bgRef  = useRef(null)
  useEffect(() => {
    gsap.to(btnRef.current, { scale: 1.04, duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(bgRef.current,  { backgroundPosition: '100% 50%', duration: 6, repeat: -1, yoyo: true, ease: 'none' })
  }, [])

  return (
    <section className="cta-section" id="assinar">
      <div ref={bgRef} className="cta-bg" />
      <div className="container cta-inner" data-aos="fade-up">
        <p className="eyebrow">Comece Agora</p>
        <h2 className="cta-h2">
          Chega de terminar o mês<br />sem entender o que aconteceu.
        </h2>
        <p className="cta-p">
          Com o Finanças você tem visibilidade total do seu dinheiro.
          E visibilidade é o primeiro passo para a liberdade financeira.
        </p>
        <div className="cta-price-card">
          <div className="cta-price-tag">Assinatura mensal</div>
          <div className="cta-price-row">
            <span className="cta-cur">R$</span>
            <span className="cta-val">13</span>
            <span className="cta-dec">,90<span className="cta-mo">/mês</span></span>
          </div>
          <p className="cta-compare">Menos que um jantar. O controle total do seu dinheiro.</p>
          <a ref={btnRef} href={CHECKOUT_URL} className="btn-cta btn-cta-lg">
            Quero ter controle agora <span className="btn-ico"><IcoArrow /></span>
          </a>
        </div>
        <ul className="cta-guarantees">
          {['Acesso imediato após a assinatura', 'Funciona em qualquer celular', 'Cancele quando quiser', 'Suporte incluído'].map((g, i) => (
            <li key={i}><span className="g-ico"><IcoCheck /></span>{g}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <svg viewBox="0 0 40 40" fill="none" width="26" height="26">
            <rect width="40" height="40" rx="11" fill="#A3FF47"/>
            <path d="M10 28L14 22L19 25L25 16L30 13" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Finanças
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Finanças · Liberdade financeira começa com visibilidade</p>
        <a href={CHECKOUT_URL} className="footer-cta">Assinar por R$ 13,90/mês →</a>
      </div>
    </footer>
  )
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 640, once: true, offset: 70, easing: 'ease-out-cubic' })
  }, [])
  return (
    <main>
      <Intro />
      <Hero />
      <Problema />
      <ComoFunciona />
      <Funcionalidades />
      <Diferenciais />
      <ProvaVisual />
      <CTAFinal />
      <Footer />
    </main>
  )
}
