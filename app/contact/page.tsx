import type { Metadata } from 'next'
import { Contact } from '@/components/sections/contact'

export const metadata: Metadata = {
  title: 'Contact — Ghost Protocol CTF 2.0',
  description:
    'Contact the Ghost Protocol CTF 2.0 organizers: reach Cyber Invaders at NIET Greater Noida with your questions.',
}

export default function ContactPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <Contact />
    </main>
  )
}
