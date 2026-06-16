import Intro          from '@/components/sections/Intro'
import Hero           from '@/components/sections/Hero'
import Problema       from '@/components/sections/Problema'
import ComoFunciona   from '@/components/sections/ComoFunciona'
import CinematicPin   from '@/components/sections/CinematicPin'
import Funcionalidades from '@/components/sections/Funcionalidades'
import Diferenciais   from '@/components/sections/Diferenciais'
import ProvaVisual    from '@/components/sections/ProvaVisual'
import CTAFinal       from '@/components/sections/CTAFinal'
import Footer         from '@/components/sections/Footer'

export default function Page() {
  return (
    <main>
      <Intro />
      <Hero />
      <Problema />
      <ComoFunciona />
      <CinematicPin />
      <Funcionalidades />
      <Diferenciais />
      <ProvaVisual />
      <CTAFinal />
      <Footer />
    </main>
  )
}
