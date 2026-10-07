'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronRight, ArrowRight, Wrench, Target, ListOrdered, Sparkles } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { QuickFacts } from '@/components/quick-facts'
import { siteLinks } from '@/lib/links'
import { categoryIcons } from '@/lib/category-icons'
import { relatedCategories, type Category } from '@/lib/categories'
import { eventFacts, siteConfig } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

function Breadcrumbs({ name }: { name: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs" style={{ color: '#68738D' }}>
        <li>
          <Link href="/" className="transition-colors hover:text-[#a78bfa]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3" />
        </li>
        <li>
          <Link href="/categories" className="transition-colors hover:text-[#a78bfa]">
            Categories
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3" />
        </li>
        <li aria-current="page" style={{ color: '#a78bfa' }}>
          {name}
        </li>
      </ol>
    </nav>
  )
}

function FactChip({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-lg px-4 py-3"
      style={{ background: '#111A2E', border: '1px solid rgba(94,23,235,0.18)' }}
    >
      <p
        className="font-mono text-[9px] uppercase tracking-[0.2em]"
        style={{ color: '#68738D' }}
      >
        {label}
      </p>
      <p className="mt-1 text-sm font-medium" style={{ color: '#F8FAFC' }}>
        {value}
      </p>
    </div>
  )
}

export function CategoryPage({ category }: { category: Category }) {
  const Icon = categoryIcons[category.icon]
  const related = relatedCategories(category.slug)

  return (
    <>
      <SiteNav />

      <main className="relative overflow-x-hidden">
        {/* ── Hero band ────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(60% 50% at 30% 0%, rgba(94,23,235,0.16) 0%, transparent 65%)',
            }}
          />
          <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

          <div className="relative mx-auto max-w-4xl px-4">
            <Reveal>
              <Breadcrumbs name={category.name} />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="flex items-center gap-4">
                <span
                  className="grid size-14 shrink-0 place-items-center rounded-2xl"
                  style={{
                    border: '1px solid rgba(94,23,235,0.32)',
                    background: '#111A2E',
                  }}
                >
                  {Icon ? (
                    <Icon className="size-7" style={{ color: '#a78bfa' }} strokeWidth={1.6} />
                  ) : null}
                </span>
                <div>
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
                    Challenge Category
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="mt-7 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                style={{ color: '#F8FAFC' }}
              >
                {category.name}{' '}
                <span
                  style={{
                    background: 'linear-gradient(120deg, #5e17eb 0%, #E83E8C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  CTF Challenges
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: '#9ca3af' }}>
                {category.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                <FactChip label="Round duration" value={`${eventFacts.onlineDurationHours} hours`} />
                <FactChip label="Format" value={eventFacts.format} />
                <FactChip label="Team size" value={`${eventFacts.teamMin}–${eventFacts.teamMax} members`} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Intro ────────────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <div className="space-y-5">
              {category.intro.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p
                    className="text-base leading-relaxed md:text-lg"
                    style={{ color: '#cbd5e1' }}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── What you'll face ─────────────────────────────────────────── */}
        {category.faces.length > 0 && (
          <section className="relative py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <Target className="size-5" style={{ color: '#a78bfa' }} strokeWidth={1.8} />
                  <h2
                    className="font-display text-2xl font-bold tracking-tight md:text-3xl"
                    style={{ color: '#F8FAFC' }}
                  >
                    What you&rsquo;ll actually face
                  </h2>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                  Challenge types modelled on the work real security teams do, weighted
                  toward the mid and upper difficulty bands.
                </p>
              </Reveal>

              <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.faces.map((face) => (
                  <motion.div
                    key={face.title}
                    variants={staggerItem}
                    className="flex h-full flex-col rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
                    style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.18)' }}
                  >
                    <div
                      className="mb-3 h-0.5 w-10 rounded-full"
                      style={{ background: 'linear-gradient(90deg,#5e17eb,#E83E8C)' }}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-base font-semibold" style={{ color: '#F8FAFC' }}>
                      {face.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                      {face.body}
                    </p>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>
          </section>
        )}

        {/* ── Tools ────────────────────────────────────────────────────── */}
        {category.tools.length > 0 && (
          <section className="relative py-12 md:py-16">
            <div className="mx-auto max-w-4xl px-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <Wrench className="size-5" style={{ color: '#a78bfa' }} strokeWidth={1.8} />
                  <h2
                    className="font-display text-2xl font-bold tracking-tight"
                    style={{ color: '#F8FAFC' }}
                  >
                    Tools you&rsquo;ll reach for
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {category.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md px-3.5 py-2 font-mono text-xs"
                      style={{
                        background: '#111A2E',
                        border: '1px solid rgba(94,23,235,0.2)',
                        color: '#a78bfa',
                      }}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {/* ── How to prepare ───────────────────────────────────────────── */}
        {category.prepare.length > 0 && (
          <section className="relative py-12 md:py-16">
            <div className="mx-auto max-w-3xl px-4">
              <Reveal>
                <div className="flex items-center gap-3">
                  <ListOrdered className="size-5" style={{ color: '#a78bfa' }} strokeWidth={1.8} />
                  <h2
                    className="font-display text-2xl font-bold tracking-tight"
                    style={{ color: '#F8FAFC' }}
                  >
                    How to prepare
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                  None of this is required to enter — it is simply the shortest path to
                  scoring points in this discipline.
                </p>
              </Reveal>

              <ol className="mt-8 space-y-4">
                {category.prepare.map((step, i) => (
                  <Reveal key={i} delay={i * 0.05} as="li">
                    <div className="flex gap-5">
                      <span
                        className="grid size-9 shrink-0 place-items-center rounded-lg font-mono text-sm font-bold"
                        style={{
                          background: 'linear-gradient(150deg,#5e17eb,#4a10c4)',
                          color: '#fff',
                        }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="pt-1.5 text-sm leading-relaxed md:text-base" style={{ color: '#cbd5e1' }}>
                        {step}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* ── Quick facts ──────────────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <QuickFacts />
          </div>
        </section>

        {/* ── Related categories ───────────────────────────────────────── */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading
              eyebrow="Keep Exploring"
              title="Adjacent disciplines"
              description="Competitors in CTF teams tend to specialise — here is where the skills overlap."
            />

            <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
              {related.map((rel) => {
                const RelIcon = categoryIcons[rel.icon]
                return (
                  <motion.div key={rel.slug} variants={staggerItem}>
                    <Link
                      href={`/categories/${rel.slug}`}
                      className="group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                      style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.18)' }}
                    >
                      {RelIcon ? (
                        <RelIcon className="size-6" style={{ color: '#a78bfa' }} strokeWidth={1.6} />
                      ) : null}
                      <h3
                        className="mt-4 font-display text-base font-semibold"
                        style={{ color: '#F8FAFC' }}
                      >
                        {rel.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                        {rel.tagline}
                      </p>
                      <span
                        className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors group-hover:text-[#a78bfa]"
                        style={{ color: '#68738D' }}
                      >
                        Explore <ArrowRight className="size-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </StaggerGroup>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <Reveal>
              <Sparkles className="mx-auto size-7" style={{ color: '#a78bfa' }} strokeWidth={1.6} />
              <h2
                className="mt-5 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl"
                style={{ color: '#F8FAFC' }}
              >
                Ready to prove it on the scoreboard?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed" style={{ color: '#9ca3af' }}>
                {category.name} is one of {eventFacts.categoryCount} disciplines in{' '}
                {siteConfig.name}. Entry is {eventFacts.feeLabel.toLowerCase()} and teams of{' '}
                {eventFacts.teamMin}–{eventFacts.teamMax} are welcome.
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
                <a
                  href={siteLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1EBE5D]"
                  style={{
                    background: '#25D366',
                    boxShadow: '0 10px 30px -12px rgba(37,211,102,0.7)',
                  }}
                >
                  <WhatsAppIcon className="size-5" />
                  Join Announcement Channel
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  )
}