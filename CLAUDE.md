# Regras de Animação — Finanças Landing Page

## Stack
- Next.js 15 + React 19
- Tailwind CSS (layout e utilitários)
- GSAP + ScrollTrigger (todas as animações de movimento)
- Lenis (scroll suave — via `components/LenisProvider.jsx`)

## Regras de Animação

### Scroll
- Use **sempre** Lenis. Nunca `scroll-behavior: smooth` no CSS.
- Lenis já está integrado com `gsap.ticker` no LenisProvider.
- Conflito Lenis + ScrollTrigger: verificar `ScrollTrigger.update` no evento `scroll` do Lenis.

### GSAP
- Duração mínima: **0.7s** para qualquer animação de entrada ou saída.
- Ease de entrada: **`power3.out`**.
- Ease de saída: **`power3.in`**.
- Para elementos especiais / impacto: **`expo.out`**.
- **Proibido**: `linear`, `power1`, `power2`, `back`, `elastic`, `sine`.
- Stagger entre blocos principais: **0.2s**. Entre palavras: 0.08s. Entre chars: 0.014s.
- Sempre use `will-change: transform` em elementos que sofrem animação GSAP.

### CSS
- Use apenas para estados estáticos (hover, focus, loading states do splash).
- Duração mínima CSS: 0.4s.

### Mobile
- Usar `ScrollTrigger.matchMedia` para desabilitar pin scroll em mobile (< 768px).
- Verificar conflito Lenis + ScrollTrigger no mobile antes de qualquer deploy.
- Simplificar animações em mobile: sem 3D transforms, sem pin scroll.

## Produto
- Checkout: `https://pay.kiwify.com.br/b1Y8ME9`
- Preço: R$ 13,90/mês

## Vídeo do Hero
- Arquivo: `/public/hero.mp4` (substituir pelo vídeo real)
- Deve ser dark, abstrato e sutil (opacidade 0.15 no CSS)
- Sugestão: vídeo de partículas, cidade à noite, ou fluxo de dados
