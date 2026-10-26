import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Users, UserCheck, Trophy } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/sections/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { ParticipantsGrid } from '@/components/sections/participants-grid'
import { Reveal } from '@/components/motion-primitives'
import { BreadcrumbJsonLd } from '@/components/json-ld'
import { buildPageMetadata } from '@/lib/seo'
import { siteLinks } from '@/lib/links'
import {
  participantTeams,
  totalParticipants,
  totalTeams,
  qualifiedTeamCount,
} from '@/lib/participants'

export const metadata: Metadata = buildPageMetadata({
  title: 'Participants',
  description: `Every team that registered for Ghost Protocol CTF 2.0 — ${totalTeams} squads and ${totalParticipants} student hackers from colleges across India, with the finale podium and qualifier teams marked.`,
  path: '/participants',
})

export default function ParticipantsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Participants', path: '/participants' },
        ]}
      />
      <main className="relative overflow-x-hidden">
        <SiteNav />

        <section className="relative pb-8 pt-28 md:pt-36">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(60% 50% at 50% 0%, rgba(94,23,235,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="absolute inset-0 grid-lines opacity-25" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors"
                style={{ color: '#68738D' }}
              >
                <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to home
              </Link>
            </Reveal>

            <div className="mt-10">
              <SectionHeading
                as="h1"
                eyebrow="The Roster"
                title="Every team that showed up"
                description={`${totalTeams} teams and ${totalParticipants} student hackers registered for Ghost Protocol CTF 2.0. Search for your squad — the finale podium and qualifier teams are marked.`}
              />
            </div>

            {/* ── Headline stats ─────────────────────────────────────────── */}
            <Reveal delay={0.15}>
              <div className="mx-auto mt-10 grid w-fit grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: Users, value: `${totalTeams}`, label: 'Teams registered' },
                  { icon: UserCheck, value: `${totalParticipants}`, label: 'Participants' },
                  { icon: Trophy, value: `${qualifiedTeamCount}`, label: 'Qualified for finale' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 rounded-xl px-5 py-3.5"
                    style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.22)' }}
                  >
                    <stat.icon className="size-5" style={{ color: '#a78bfa' }} />
                    <div>
                      <p className="font-display text-xl font-bold" style={{ color: '#F8FAFC' }}>
                        {stat.value}
                      </p>
                      <p
                        className="font-mono text-[9px] uppercase tracking-[0.16em]"
                        style={{ color: '#68738D' }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={siteLinks.clubWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto mt-6 flex w-fit items-center gap-1.5 whitespace-nowrap text-sm transition-colors"
                style={{ color: '#38bdf8' }}
              >
                <span className="border-b border-transparent pb-px transition-colors duration-300 group-hover:border-[#38bdf8]">
                  Visit the club portal
                </span>
                <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </section>

        <div className="relative mx-auto max-w-6xl px-4 pb-24 md:pb-32">
          <ParticipantsGrid teams={participantTeams} />
        </div>

        <SiteFooter />
      </main>
    </>
  )
}
