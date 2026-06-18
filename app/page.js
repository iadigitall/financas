import Intro             from '@/components/sections/Intro'
import Hero              from '@/components/sections/Hero'
import Problema          from '@/components/sections/Problema'
import SubscriptionStrip from '@/components/sections/SubscriptionStrip'
import GastosReais       from '@/components/sections/GastosReais'
import MulherChat        from '@/components/sections/MulherChat'
import ComoFunciona      from '@/components/sections/ComoFunciona'
import CinematicPin      from '@/components/sections/CinematicPin'
import Funcionalidades   from '@/components/sections/Funcionalidades'
import Diferenciais      from '@/components/sections/Diferenciais'
import ProvaVisual       from '@/components/sections/ProvaVisual'
import Plano             from '@/components/sections/Plano'
import FAQ               from '@/components/sections/FAQ'
import Footer            from '@/components/sections/Footer'

export default function Page() {
  return (
    <main>
      <Intro />
      <Hero />
      <Problema />
      <SubscriptionStrip />
      <GastosReais />
      <MulherChat />
      <ComoFunciona />
      <CinematicPin />
      <Funcionalidades />
      <Diferenciais />
      <ProvaVisual />
      <Plano />
      <FAQ />
      <Footer />
    </main>
  )
}
