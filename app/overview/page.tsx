import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Metrics } from '@/components/sections/metrics'

export const metadata: Metadata = {
  title: 'Overview — Ghost Protocol CTF 2.0',
  description:
    'Ghost Protocol CTF 2.0 overview: a national-level student cybersecurity competition by Cyber Invaders, NIET Greater Noida. Hack. Secure. Evolve.',
}

export default function OverviewPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Metrics />
    </main>
  )
}
