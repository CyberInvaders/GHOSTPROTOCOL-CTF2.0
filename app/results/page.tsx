import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CalendarDays,
  ChevronRight,
  MapPin,
  Trophy,
  Users,
} from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/sections/site-footer'
import { ResultsList } from '@/components/results-list'
import { ResultsPodium } from '@/components/results-podium'
import { FinaleTimeline } from '@/components/finale-timeline'
import { FinaleGuidelines } from '@/components/finale-guidelines'
import { Reveal } from '@/components/motion-primitives'
import { BreadcrumbJsonLd, ResultsListJsonLd } from '@/components/json-ld'
import { buildPageMetadata } from '@/lib/seo'
import { siteConfig, schedule, venue } from '@/lib/site'
import { qualifiedCount, winnerCount } from '@/lib/results'

export const metadata: Metadata = buildPageMetadata({
  title: 'Round 1 Results',
  description: `${qualifiedCount} teams cleared Round 1 of ${siteConfig.name} and advance to the Round 2 finale on ${schedule.finaleDateLabel}. See the full qualifier list and the top three winners.`,
  path: '/results',
})

const finaleDay = new Date(schedule.finaleStart).toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
})

const reportStats = [
  { value: String(qualifiedCount), label: 'Teams qualified' },
  { value: String(winnerCount).padStart(2, '0'), label: 'Round 1 winners' },
  { value: finaleDay.toUpperCase(), label: 'Round 2 finale' },
]

const corners = [
  'left-0 top-0 border-l border-t',
  'right-0 top-0 border-r border-t',
  'bottom-0 left-0 border-b border-l',
  'bottom-0 right-0 border-b border-r',
]

function SectionLabel({
  index,
  label,
  meta,
}: {
  index: string
  label: string
  meta?: string
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px]">
        <span style={{ color: '#a78bfa' }}>{index} //</span>{' '}
        <span style={{ color: '#9ca3af' }}>{label}</span>
      </span>
      <span
        className="h-px flex-1"
        style={{
          background:
            'linear-gradient(90deg, rgba(148,163,184,0.20) 0%, rgba(148,163,184,0.02) 100%)',
        }}
        aria-hidden="true"
      />
      {meta ? (
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-[#68738D] sm:text-[11px]">
          {meta}
        </span>
      ) : null}
    </div>
  )
}

export default function ResultsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Results', path: '/results' },
        ]}
      />
      <ResultsListJsonLd />

      <SiteNav />

      <main className="relative overflow-x-hidden">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(58% 46% at 50% 0%, rgba(94,23,235,0.16) 0%, transparent 68%)',
            }}
          />
          <div className="absolute inset-0 grid-lines opacity-25" aria-hidden="true" />

          <div
            className="pointer-events-none absolute -right-2 top-6 select-none font-display font-bold leading-none tracking-tighter sm:top-0"
            aria-hidden="true"
            style={{
              fontSize: 'clamp(5rem, 17vw, 13rem)',
              color: 'rgba(167,139,250,0.04)',
            }}
          >
            GPCTF
          </div>

          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-9">
                <ol
                  className="flex items-center gap-1.5 font-mono text-xs"
                  style={{ color: '#68738D' }}
                >
                  <li>
                    <Link href="/" className="transition-colors hover:text-[#a78bfa]">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="size-3" />
                  </li>
                  <li aria-current="page" style={{ color: '#a78bfa' }}>
                    Results
                  </li>
                </ol>
              </nav>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end lg:gap-14">
              <div>
                <Reveal delay={0.05}>
                  <span
                    className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]"
                    style={{
                      border: '1px solid rgba(94,23,235,0.18)',
                      background: '#0D1425',
                      color: '#9ca3af',
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full animate-glow-pulse"
                      style={{ background: '#E83E8C' }}
                    />
                    Round 1 complete
                  </span>
                </Reveal>

                <Reveal delay={0.1}>
                  <h1
                    className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                    style={{ color: '#F8FAFC' }}
                  >
                    Round 1{' '}
                    <span
                      style={{
                        background: 'linear-gradient(120deg, #5e17eb 0%, #E83E8C 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Results
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={0.15}>
                  <p
                    className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                    style={{ color: '#9ca3af' }}
                  >
                    {qualifiedCount} teams cleared the first round of {siteConfig.name} and
                    advance to the on-ground Round 2 finale. The top {winnerCount} take the
                    podium — the rest now prepare for the floor.
                  </p>
                </Reveal>
              </div>

              {/* Mission report panel */}
              <Reveal delay={0.2}>
                <div
                  className="relative overflow-hidden rounded-2xl p-5"
                  style={{
                    background: '#080D1A',
                    border: '1px solid rgba(94,23,235,0.24)',
                    boxShadow: '0 24px 60px -46px rgba(94,23,235,0.55)',
                  }}
                >
                  {corners.map((corner) => (
                    <span
                      key={corner}
                      className={`pointer-events-none absolute size-3 ${corner}`}
                      style={{ borderColor: 'rgba(167,139,250,0.45)' }}
                      aria-hidden="true"
                    />
                  ))}

                  <div className="flex items-center justify-between gap-3">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.22em]"
                      style={{ color: '#68738D' }}
                    >
                      Mission report
                    </p>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: '#E83E8C' }}
                    >
                      R1 / Final
                    </span>
                  </div>

                  <div
                    className="mt-4 grid grid-cols-3 divide-x"
                    style={{ borderColor: 'rgba(148,163,184,0.12)' }}
                  >
                    {reportStats.map((stat) => (
                      <div key={stat.label} className="px-2 first:pl-0 last:pr-0">
                        <p
                          className="font-display text-xl font-bold tracking-tight sm:text-2xl"
                          style={{ color: '#F8FAFC' }}
                        >
                          {stat.value}
                        </p>
                        <p
                          className="mt-1 font-mono text-[9px] uppercase leading-tight tracking-[0.14em]"
                          style={{ color: '#68738D' }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 flex items-center gap-2 border-t pt-4 font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{
                      borderColor: 'rgba(148,163,184,0.10)',
                      color: '#9ca3af',
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full animate-glow-pulse"
                      style={{ background: '#22c55e' }}
                    />
                    Results published &amp; verified
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Winners podium ───────────────────────────────────────────── */}
        <section className="relative py-8 md:py-10">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <SectionLabel
                index="01"
                label="Round 1 winners"
                meta={`Top ${winnerCount} teams`}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ResultsPodium />
            </Reveal>
          </div>
        </section>

        {/* ── Qualifier leaderboard ────────────────────────────────────── */}
        <section className="relative py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <SectionLabel
                index="02"
                label="Qualifiers"
                meta={`${qualifiedCount} teams`}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ResultsList />
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-mono text-[10px] uppercase tracking-[0.16em] sm:text-[11px]"
                style={{ color: '#68738D' }}
              >
                <Trophy className="size-3.5" style={{ color: '#a78bfa' }} aria-hidden="true" />
                Results are final and based on Round 1 performance.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Round 2 call-out ─────────────────────────────────────────── */}
        <section className="relative pb-10 md:pb-14">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-9"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(94,23,235,0.16) 0%, rgba(232,62,140,0.07) 46%, #080D1A 100%)',
                  border: '1px solid rgba(94,23,235,0.26)',
                }}
              >
                <div className="absolute inset-0 grid-lines opacity-20" aria-hidden="true" />

                <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-md">
                    <p
                      className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]"
                      style={{ color: '#E83E8C' }}
                    >
                      Next // Round 02
                    </p>
                    <h2
                      className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl"
                      style={{ color: '#F8FAFC' }}
                    >
                      The finale awaits.
                    </h2>
                    <p
                      className="mt-3 text-sm leading-relaxed sm:text-base"
                      style={{ color: '#9ca3af' }}
                    >
                      Qualifiers move to the on-ground Jeopardy finale — same disciplines,
                      higher stakes, one floor.
                    </p>

                    <div
                      className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: '#68738D' }}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays
                          className="size-3.5"
                          style={{ color: '#a78bfa' }}
                          aria-hidden="true"
                        />
                        {schedule.finaleDateLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin
                          className="size-3.5"
                          style={{ color: '#a78bfa' }}
                          aria-hidden="true"
                        />
                        {venue.name}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 sm:text-right">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: '#68738D' }}
                    >
                      Finale date
                    </p>
                    <p
                      className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl"
                      style={{ color: '#F8FAFC' }}
                    >
                      {finaleDay} <span style={{ color: '#a78bfa' }}>2026</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Finale timeline ──────────────────────────────────────────── */}
        <section id="finale-timeline" className="relative scroll-mt-24 pb-10 md:pb-14">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <SectionLabel
                index="03"
                label="Finale timeline"
                meta={schedule.finaleDateLabel}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <FinaleTimeline />
            </Reveal>
          </div>
        </section>

        {/* ── Finale guidelines ────────────────────────────────────────── */}
        <section className="relative pb-24 md:pb-32">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <SectionLabel index="04" label="Finale guidelines" meta="On-ground rules" />
            </Reveal>
            <Reveal delay={0.05}>
              <FinaleGuidelines />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
