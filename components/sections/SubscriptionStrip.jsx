'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const apps = [
  { name: 'Spotify',      slug: 'spotify',       color: 'ffffff' },
  { name: 'Netflix',      slug: 'netflix',       color: 'ffffff' },
  { name: 'iFood',        slug: 'ifood',         color: 'ffffff' },
  { name: 'Uber',         slug: 'uber',          color: 'ffffff' },
  { name: 'Apple TV+',    slug: 'appletv',       color: 'ffffff' },
  { name: 'YouTube',      slug: 'youtube',       color: 'ffffff' },
  { name: 'Paramount+',   slug: 'paramountplus', color: 'ffffff' },
  { name: 'Nubank',       slug: 'nubank',        color: 'ffffff' },
  { name: 'Mercado Pago', slug: 'mercadopago',   color: 'ffffff' },
  { name: 'Duolingo',     slug: 'duolingo',      color: 'ffffff' },
  { name: 'PicPay',       slug: 'picpay',        color: 'ffffff' },
  { name: 'Max',          slug: 'max',           color: 'ffffff' },
]

function StripItem({ name, slug, color }) {
  return (
    <div className="strip-item">
      <div className="strip-logo-wrap">
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt={name}
          className="strip-logo"
          onError={e => { e.target.style.display = 'none' }}
        />
      </div>
      <span className="strip-name">{name}</span>
    </div>
  )
}

export default function SubscriptionStrip() {
  const trackRef = useRef(null)
  const animRef  = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const totalWidth = track.scrollWidth / 2
    animRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })
    return () => animRef.current?.kill()
  }, [])

  return (
    <section className="strip-section">
      <p className="strip-label">Registre gastos de qualquer app ou serviço</p>
      <div className="strip-overflow">
        <div className="strip-track" ref={trackRef}>
          {[...apps, ...apps].map((app, i) => (
            <StripItem key={i} {...app} />
          ))}
        </div>
      </div>
    </section>
  )
}
