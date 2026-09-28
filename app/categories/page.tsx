import type { Metadata } from 'next'
import { WhyParticipate } from '@/components/sections/why-participate'
import { Categories } from '@/components/sections/categories'

export const metadata: Metadata = {
  title: 'Categories — Ghost Protocol CTF 2.0',
  description:
    'Why compete in Ghost Protocol CTF 2.0 plus challenge categories: web, crypto, forensics, reverse engineering, pwn, OSINT and more.',
}

export default function CategoriesPage() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <WhyParticipate />
      <Categories />
    </main>
  )
}
