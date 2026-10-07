import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { WhyParticipate } from '@/components/sections/why-participate'
import { Structure } from '@/components/sections/structure'
import { Categories } from '@/components/sections/categories'
import { Club } from '@/components/sections/club'
import { Institution } from '@/components/sections/institution'
import { Metrics } from '@/components/sections/metrics'
import { Glimpses } from '@/components/sections/glimpses'
import { GlimpsesCta } from '@/components/sections/glimpses-cta'
import { Sponsors } from '@/components/sections/sponsors'
import { Team } from '@/components/sections/team'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { FinalCta } from '@/components/sections/final-cta'
import { SiteFooter } from '@/components/sections/site-footer'
import { CtfParticleOutro } from '@/components/sections/ctf-particle-outro'
import { QuickFacts } from '@/components/quick-facts'
import { buildPageMetadata } from '@/lib/seo'
import { seoCopy } from '@/lib/site'

export const metadata = buildPageMetadata({
  title: seoCopy.defaultTitle,
  description: seoCopy.defaultDescription,
  path: '',
})

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <SiteNav />
      <Hero />
      <WhyParticipate />
      <Structure />
      <Categories />
      <Club />
      <Institution />
      <Metrics />
      <section id="quick-facts" className="relative py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <QuickFacts />
        </div>
      </section>
      <Glimpses />
      <GlimpsesCta />
      <Sponsors />
      <Team />
      <Faq />
      <Contact />
      <FinalCta />
      <SiteFooter />
      <CtfParticleOutro />
    </main>
  )
}
