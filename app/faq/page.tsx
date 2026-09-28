import type { Metadata } from 'next'
import { Faq } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'FAQ — Ghost Protocol CTF 2.0',
  description:
    'Frequently asked questions about Ghost Protocol CTF 2.0: eligibility, team size, rounds, prizes and more.',
}

export default function FaqPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <Faq />
    </main>
  )
}
