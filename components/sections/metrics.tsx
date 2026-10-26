'use client'

import { motion } from 'motion/react'
import { Users, UsersRound, Trophy, Globe, MonitorSmartphone, Building, Sparkles, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { CountUp } from '@/components/count-up'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { totalParticipants, totalTeams } from '@/lib/participants'

type Metric = {
  icon: LucideIcon
  count: number | null
  prefix?: string
  suffix?: string
  static?: string
  label: string
  sub: string
  badge: string
  back: string
  /** Optional destination — turns the card into an entry point to another page. */
  href?: string
}

const metrics: Metric[] = [
  {
    icon: Users,
    count: totalTeams,
    prefix: '',
    suffix: '',
    label: 'Teams Registered',
    sub: `${totalParticipants} hackers took the floor`,
    badge: 'FINAL',
    back: `${totalTeams} teams registered for Ghost Protocol CTF 2.0 — ${totalParticipants} student hackers from colleges across India. Open the participants page to find your team.`,
    href: '/participants',
  },
  {
    icon: UsersRound,
    count: totalParticipants,
    prefix: '',
    suffix: '',
    label: 'Students Competed',
    sub: 'Across the qualifier and finale',
    badge: 'FINAL',
    back: `${totalParticipants} undergraduate and postgraduate ethical hackers competed across the 12-hour remote qualifier and the 12-hour on-ground finale.`,
  },
  {
    icon: Trophy,
    count: 250000,
    prefix: 'Up to ₹',
    suffix: '',
    label: 'Prize Pool',
    sub: 'Guaranteed rewards & bounties',
    badge: 'REWARDS',
    back: 'Guaranteed Pool: ₹2.5 Lakh covering cash prizes, CompTIA Security+ certification for the winning team, champion trophies, certificates of merit & exclusive goodies — a combined reward for top teams and finalists.',
  },
  {
    icon: Globe,
    count: null,
    static: 'National',
    label: 'Reach',
    sub: 'Pan-India open qualifier',
    badge: 'SCOPE',
    back: 'Open Nationally: Remote qualification round welcoming registered student teams from colleges across all Indian states.',
  },
  {
    icon: MonitorSmartphone,
    count: null,
    static: '2 Rounds',
    label: 'Tournament Format',
    sub: 'Online prelims → NIET grand finale',
    badge: 'FORMAT',
    back: 'Two-Stage Combat: 12-hr remote Jeopardy prelims followed by a 12-hour live on-ground Jeopardy finale at NIET.',
  },
  {
    icon: Building,
    count: null,
    static: 'Industry',
    label: 'Exposure & Rigor',
    sub: 'Real-world attack scenarios',
    badge: 'IMPACT',
    back: 'Real-world Scenarios: Practical challenges modeled after enterprise incident responses and current threat-actor TTPs.',
  },
]

export function Metrics() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <StaggerGroup className="grid grid-cols-1 auto-rows-fr gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => {
            const faces = (
              <>
                {/* ── Front face ── */}
                <div
                  className="flip-face flip-face-front flex flex-1 flex-col justify-between overflow-hidden rounded-xl glass-strong p-5 sm:p-7 md:p-8"
                  style={{ background: '#0D1425' }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                    style={{ background: '#5e17eb' }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <m.icon className="size-5 sm:size-6" style={{ color: '#a78bfa' }} />
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider"
                        style={{
                          background: m.badge === 'EXPECTED' ? 'rgba(232, 62, 140, 0.15)' : 'rgba(94, 23, 235, 0.15)',
                          color: m.badge === 'EXPECTED' ? '#e83e8c' : '#a78bfa',
                          border: m.badge === 'EXPECTED' ? '1px solid rgba(232, 62, 140, 0.3)' : '1px solid rgba(94, 23, 235, 0.3)',
                        }}
                      >
                        {m.badge}
                      </span>
                    </div>

                    <div
                      className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                      style={{ color: '#F8FAFC' }}
                    >
                      {m.count !== null ? (
                        <CountUp to={m.count} prefix={m.prefix ?? ''} suffix={m.suffix ?? ''} />
                      ) : (
                        <span>{m.static}</span>
                      )}
                    </div>
                    <div
                      className="mt-1.5 sm:mt-2 font-display text-base sm:text-lg font-semibold"
                      style={{ color: '#F8FAFC' }}
                    >
                      {m.label}
                    </div>
                  </div>

                  <div className="mt-2 text-xs sm:text-sm" style={{ color: '#68738D' }}>{m.sub}</div>

                  {m.href ? (
                    <span
                      className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: '#a78bfa' }}
                    >
                      View all participants
                      <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  ) : null}
                </div>

                {/* ── Back face ── */}
                <div
                  className="flip-face flip-face-back flex flex-col overflow-hidden rounded-xl p-5 sm:p-7 md:p-8"
                  style={{
                    background: 'linear-gradient(150deg, #5e17eb 0%, #4a10c4 55%, #0D1425 130%)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                  }}
                >
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="grid size-8 sm:size-9 place-items-center rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)' }}
                        >
                          <m.icon className="size-4 text-white" />
                        </span>
                        <span className="font-display text-sm sm:text-base font-bold text-white">{m.label}</span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
                        {m.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#E9E4FF]">{m.back}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-[#E9E4FF]/60">
                    <span>Ghost Protocol 2.0</span>
                    <span>{m.href ? 'Tap to open roster' : 'Metrics Breakdown'}</span>
                  </div>
                </div>
              </>
            )

            return (
              <motion.div
                key={m.label}
                variants={staggerItem}
                className="flip-scene group relative min-h-[250px] sm:min-h-[280px]"
              >
                {m.href ? (
                  <Link
                    href={m.href}
                    className="flip-inner flex flex-col"
                    aria-label={`${m.label} — open the participants roster`}
                  >
                    {faces}
                  </Link>
                ) : (
                  <div className="flip-inner flex flex-col">{faces}</div>
                )}
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
