import type { Metadata } from 'next'
import { Team } from '@/components/sections/team'

export const metadata: Metadata = {
  title: 'Team — Ghost Protocol CTF 2.0',
  description:
    'Meet the organizing team and faculty coordinators behind Ghost Protocol CTF 2.0 at NIET Greater Noida.',
}

export default function TeamPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <Team />
    </main>
  )
}
