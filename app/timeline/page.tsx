import type { Metadata } from 'next'
import { Structure } from '@/components/sections/structure'

export const metadata: Metadata = {
  title: 'Timeline — Ghost Protocol CTF 2.0',
  description:
    'Ghost Protocol CTF 2.0 event timeline and structure: online qualification round followed by the offline grand finale.',
}

export default function TimelinePage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <Structure />
    </main>
  )
}
