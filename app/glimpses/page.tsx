import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Images } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/sections/site-footer'
import { SectionHeading } from '@/components/section-heading'
import { ArchiveGallery } from '@/components/sections/archive-gallery'
import { Reveal } from '@/components/motion-primitives'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { siteLinks } from '@/lib/links'
import { archivePhotos } from '@/lib/archive-photos'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/json-ld'

export const metadata: Metadata = buildPageMetadata({
  title: 'Glimpses — Photo Archive',
  description:
    'The full Cyber Invaders photo archive — moments from past CTF workshops, qualifiers and competition floors at NIET Greater Noida, uncropped and in order.',
  path: '/glimpses',
  ogDescription:
    'Moments from past Cyber Invaders CTF workshops, qualifiers and competition floors at NIET Greater Noida.',
})

export default function GlimpsesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Glimpses', path: '/glimpses' },
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
              eyebrow="The Archive"
              title="Glimpses from the floor"
              description={`${archivePhotos.length} moments from Cyber Invaders workshops, qualifiers and CTF floors — uncropped, in colour, and in the order they all happened.`}
            />
          </div>

          <Reveal delay={0.15}>
            <p
              className="mx-auto mt-8 flex w-fit items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em]"
              style={{ color: '#68738D' }}
            >
              <Images className="size-3.5" style={{ color: '#a78bfa' }} />
              {archivePhotos.length} photographs
            </p>
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
        <ArchiveGallery photos={archivePhotos} />
      </div>

      {/* Closing block */}
      <section className="relative -mt-8 overflow-hidden pb-24 md:-mt-12 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(70% 60% at 50% 100%, rgba(232,62,140,0.10) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <div
              className="rounded-3xl px-7 py-12 text-center sm:px-14"
              style={{
                background:
                  'linear-gradient(135deg, rgba(13,20,37,0.96) 0%, rgba(9,14,28,0.96) 100%)',
                border: '1px solid rgba(94,23,235,0.24)',
                boxShadow: 'inset 0 1px 0 0 rgba(248,250,252,0.04), 0 24px 60px -30px rgba(94,23,235,0.35)',
              }}
            >
              <p
                className="font-mono text-[11px] font-medium uppercase tracking-[0.22em]"
                style={{ color: '#a78bfa' }}
              >
                The next frame could be yours
              </p>
              <h2
                className="mx-auto mt-4 max-w-2xl text-balance font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
                style={{ color: '#F8FAFC' }}
              >
                Every event starts with a handful of people who show up.
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed sm:text-base"
                style={{ color: '#9ca3af' }}
              >
                Ghost Protocol CTF 2.0 is open to students across the country. Join the channel to
                hear about workshops, qualifiers and the grand finale first.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={siteLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5D]"
                  style={{
                    background: '#25D366',
                    boxShadow: '0 10px 26px -12px rgba(37,211,102,0.75)',
                  }}
                >
                  <WhatsAppIcon className="size-4" />
                  Join Announcement Channel
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
                  style={{
                    border: '1px solid rgba(94,23,235,0.4)',
                    color: '#cbd5e1',
                    background: 'rgba(94,23,235,0.08)',
                  }}
                >
                  Talk to the club
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      </main>
    </>
  )
}
