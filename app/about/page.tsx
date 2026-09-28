import type { Metadata } from 'next'
import { Club } from '@/components/sections/club'
import { Institution } from '@/components/sections/institution'
import { Glimpses } from '@/components/sections/glimpses'

export const metadata: Metadata = {
  title: 'About — Ghost Protocol CTF 2.0',
  description:
    'About Cyber Invaders, the cybersecurity club of NIET Greater Noida, and the institution behind Ghost Protocol CTF 2.0.',
}

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <Club />
      <Institution />
      <Glimpses />
    </main>
  )
}
