import type { Metadata } from 'next'
import { Sponsors } from '@/components/sections/sponsors'

export const metadata: Metadata = {
  title: 'Sponsors — Ghost Protocol CTF 2.0',
  description:
    'Sponsors and partners powering Ghost Protocol CTF 2.0, the national student cybersecurity competition by Cyber Invaders.',
}

export default function SponsorsPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <Sponsors />
    </main>
  )
}
