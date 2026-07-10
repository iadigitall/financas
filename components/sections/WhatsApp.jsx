'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WhatsApp() {
  const textRef = useRef(null)
  const chatRef = useRef(null)

  useEffect(() => {
    // texto esquerda
    gsap.from(textRef.current.querySelectorAll('[data-reveal]'), {
      scrollTrigger: { trigger: textRef.current, start: 'top 78%' },
      y: 32, opacity: 0, stagger: 0.13, duration: 0.9, ease: 'power3.out',
    })
    // mensagens aparecem em sequência
    gsap.from(chatRef.current.querySelectorAll('.wa-msg'), {
      scrollTrigger: { trigger: chatRef.current, start: 'top 80%' },
      y: 20, opacity: 0, stagger: 0.18, duration: 0.7, ease: 'power3.out',
    })
  }, [])

  return (
    <section className="section whats-section">
      <div className="whats-editorial">

        {/* TEXTO ESQUERDA */}
        <div className="whats-text" ref={textRef}>
          <p className="eyebrow" data-reveal>Integração com WhatsApp</p>
          <h2 className="editorial-h2" data-reveal>
            Registre gastos<br />
            <span className="green">sem abrir o app</span>
          </h2>
          <p className="whats-sub" data-reveal>
            Fala naturalmente pelo WhatsApp. O Finanças entende, categoriza e salva na hora.
          </p>

          <div className="whats-features" data-reveal>
            <div className="whats-feat">
              <div className="whats-feat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <p className="whats-feat-title">Linguagem natural</p>
                <p className="whats-feat-desc">"Gastei 50 no almoço" — ele entende e salva.</p>
              </div>
            </div>

            <div className="whats-feat">
              <div className="whats-feat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <div>
                <p className="whats-feat-title">Resumo do mês</p>
                <p className="whats-feat-desc">Digite "resumo" e veja gastos, contas e limite.</p>
              </div>
            </div>

            <div className="whats-feat">
              <div className="whats-feat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div>
                <p className="whats-feat-title">Contas pendentes</p>
                <p className="whats-feat-desc">Digite "contas" e veja o que ainda não foi pago.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOCKUP WHATSAPP DIREITA */}
        <div className="whats-phone-wrap">
          <div className="whats-phone">
            {/* header do chat */}
            <div className="wa-header">
              <div className="wa-avatar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="wa-header-info">
                <p className="wa-name">Finanças</p>
                <p className="wa-status">online</p>
              </div>
              <div className="wa-header-icons">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </div>
            </div>

            {/* área do chat */}
            <div className="wa-chat" ref={chatRef}>

              {/* mensagem do bot — boas vindas */}
              <div className="wa-msg wa-msg--bot">
                <p>Olá, <strong>Gustavo!</strong> 👋 Sou seu assistente financeiro.</p>
                <p style={{marginTop:'8px'}}>Pode me falar naturalmente:</p>
                <p style={{marginTop:'6px', color:'rgba(255,255,255,0.65)', fontStyle:'italic', fontSize:'13px'}}>"gastei 50 no almoço"</p>
                <p style={{color:'rgba(255,255,255,0.65)', fontStyle:'italic', fontSize:'13px'}}>"paguei 30 de uber"</p>
                <p style={{color:'rgba(255,255,255,0.65)', fontStyle:'italic', fontSize:'13px'}}>"deu 89 na farmácia"</p>
                <span className="wa-time">18:25</span>
              </div>

              {/* usuário — adiciona gasto */}
              <div className="wa-msg wa-msg--user">
                Fui no mercado e fiz uma compra de 250 reais
                <span className="wa-time">18:26 <span className="wa-tick">✓✓</span></span>
              </div>

              {/* bot — confirma gasto */}
              <div className="wa-msg wa-msg--bot">
                <p>✅ <strong>Gasto salvo com sucesso!</strong></p>
                <p>💸 R$ 250.00 Mercado</p>
                <p>🗂 mercado</p>
                <span className="wa-time">18:26</span>
              </div>

              {/* usuário — pede resumo */}
              <div className="wa-msg wa-msg--user">
                Me mostra meu resumo
                <span className="wa-time">18:26 <span className="wa-tick">✓✓</span></span>
              </div>

              {/* bot — resumo completo */}
              <div className="wa-msg wa-msg--bot">
                <p>Olá, <strong>Gustavo!</strong> 👋</p>
                <p style={{marginTop:'10px'}}>📅 <strong>2026/07</strong></p>
                <p>💸 Gastos: <strong>R$ 306.00</strong></p>
                <p>📋 Contas: <strong>R$ 100.00</strong></p>
                <p>📊 Total: <strong>R$ 406.00</strong> (8% do salário)</p>
                <p>🎯 Limite: R$ 4000.00 (10% usado)</p>
                <p style={{marginTop:'10px'}}>🏆 <strong>Top categorias:</strong></p>
                <p style={{paddingLeft:'12px'}}>mercado: R$ 250.00</p>
                <p style={{paddingLeft:'12px'}}>farmacia: R$ 56.00</p>
                <p style={{marginTop:'10px'}}>⚠️ <strong>1 conta pendente:</strong></p>
                <p style={{paddingLeft:'12px'}}>Cartão de crédito: R$ 100.00</p>
                <span className="wa-time">18:26</span>
              </div>

            </div>

            {/* input bar */}
            <div className="wa-input-bar">
              <div className="wa-input-field">Digite uma mensagem</div>
              <div className="wa-send">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
