'use client'

const CHECKOUT_URL = 'https://pay.kiwify.com.br/b1Y8ME9'

export default function Footer() {
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
