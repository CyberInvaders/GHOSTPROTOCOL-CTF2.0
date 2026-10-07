import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Target } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/sections/site-footer'
import { Reveal } from '@/components/motion-primitives'
import { QuickFacts } from '@/components/quick-facts'
import { CategoriesIndex } from '@/components/categories-index'
import { CategoryListJsonLd, BreadcrumbJsonLd } from '@/components/json-ld'
import { buildPageMetadata } from '@/lib/seo'
import { eventFacts, schedule, siteConfig } from '@/lib/site'
import { siteLinks } from '@/lib/links'

const title = 'CTF Challenge Categories'
const description = `Explore all ${eventFacts.categoryCount} Ghost Protocol CTF 2.0 challenge categories — web exploitation, cryptography, forensics, reverse engineering, OSINT, pwn, steganography, cloud and AI security.`

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: '/categories',
})

export default function CategoriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Categories', path: '/categories' },
        ]}
      />
      <CategoryListJsonLd />

      <SiteNav />

      <main className="relative overflow-x-hidden">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(60% 50% at 50% 0%, rgba(94,23,235,0.16) 0%, transparent 65%)',
            }}
          />
          <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl px-4">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-8">
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
                    Categories
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={0.05}>
              <span
                className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em]"
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
                Challenge Categories
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                style={{ color: '#F8FAFC' }}
              >
                {eventFacts.categoryCount} disciplines.{' '}
                <span
                  style={{
                    background: 'linear-gradient(120deg, #5e17eb 0%, #E83E8C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  One battlefield.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#9ca3af' }}>
                Every discipline below is scored live across both rounds of{' '}
                {siteConfig.name}. Open a category to see exactly what it tests, what
                you&rsquo;ll face, and how to prepare.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Category grid ────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <CategoriesIndex />
          </div>
        </section>

        {/* ── Quick facts ──────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <QuickFacts />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <Reveal>
              <Target className="mx-auto size-7" style={{ color: '#a78bfa' }} strokeWidth={1.6} />
              <h2
                className="mt-5 text-balance font-display text-3xl font-bold tracking-tight"
                style={{ color: '#F8FAFC' }}
              >
                Pick a discipline. Take the field.
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed"
                style={{ color: '#9ca3af' }}
              >
                Teams can specialise or compete across every category — the leaderboard does
                not care. Entry is {eventFacts.feeLabel.toLowerCase()}, and registration closes{' '}
                {schedule.registrationDeadlineLabel}.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={siteLinks.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#4a10c4]"
                  style={{
                    background: '#5e17eb',
                    boxShadow: '0 10px 30px -12px rgba(94,23,235,0.8)',
                  }}
                >
                  Register Now <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold transition-colors"
                  style={{
                    border: '1px solid rgba(94,23,235,0.32)',
                    color: '#a78bfa',
                  }}
                >
                  Back to the main site
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}