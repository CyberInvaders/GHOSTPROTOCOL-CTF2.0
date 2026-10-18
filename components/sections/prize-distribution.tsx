'use client'

import { motion } from 'motion/react'
import { Trophy, Medal, Star, Users, Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'

const prizes = [
  {
    icon: Trophy,
    rank: 'Winner',
    accent: '#fbbf24',
    items: [
      'Cash Prize',
      'CompTIA Security+ Certification to all winning team members',
    ],
  },
  {
    icon: Medal,
    rank: '1st Runner Up',
    accent: '#c0c7d1',
    items: [
      'Cash Prize',
      'Additional Valuable Certificate to all team members',
    ],
  },
  {
    icon: Medal,
    rank: '2nd Runner Up',
    accent: '#cd7f32',
    items: ['Cash Prize'],
  },
  {
    icon: Star,
    rank: 'Domain Masters',
    accent: '#5e17eb',
    items: [
      '₹5,000 each for 3 teams',
      'Teams who solve all questions correctly in any 1 given specific domain',
    ],
  },
  {
    icon: Award,
    rank: 'Man of the Match',
    accent: '#38bdf8',
    items: [
      'One Valuable Certificate',
      'Participant who solves the maximum questions (apart from winning teams)',
    ],
  },
  {
    icon: Users,
    rank: 'For All Participants',
    accent: '#22c55e',
    items: ['Certificate of Appreciation', 'Special Gifts'],
  },
]

export function PrizeDistribution() {
  return (
    <section id="prizes" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(50% 35% at 50% 0%, rgba(94,23,235,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Prizes"
          title="₹2.5 Lakh Prize Pool"
          description="Every role on the scoreboard is rewarded — from the championship podium to the sharpest individual minds in the arena."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {prizes.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.rank}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#0D1425',
                  border: `1px solid ${p.accent}33`,
                  boxShadow: `0 4px 24px -10px ${p.accent}22`,
                }}
              >
                {/* top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: p.accent }}
                  aria-hidden="true"
                />

                {/* icon + rank */}
                <div className="flex items-center gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-lg"
                    style={{
                      background: `${p.accent}18`,
                      border: `1px solid ${p.accent}45`,
                    }}
                  >
                    <Icon className="size-5" style={{ color: p.accent }} />
                  </span>
                  <h3
                    className="font-display text-base font-bold sm:text-lg"
                    style={{ color: '#F8FAFC' }}
                  >
                    {p.rank}
                  </h3>
                </div>

                {/* prize items */}
                <ul className="mt-4 space-y-2.5">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-snug"
                      style={{ color: '#cbd5e1' }}
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full"
                        style={{ background: p.accent, boxShadow: `0 0 6px ${p.accent}` }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
