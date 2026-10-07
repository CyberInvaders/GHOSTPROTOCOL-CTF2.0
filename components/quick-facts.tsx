'use client'

import { Reveal } from '@/components/motion-primitives'
import { siteConfig, schedule, eventFacts, venue } from '@/lib/site'

/**
 * A definition list of the event's canonical facts.
 *
 * Retrieval-based AI answers lift short, self-contained factual statements far
 * more reliably than the same facts buried in prose — so these live in their
 * own labelled structure, generated from `lib/site.ts` so they cannot disagree
 * with the rest of the site.
 */
const facts = [
  { label: 'Online qualifier', value: `${schedule.onlineDateLabel} · ${eventFacts.onlineDurationHours} hours · remote` },
  { label: 'Grand finale', value: `${schedule.finaleDateLabel} · ${eventFacts.finaleDurationHours} hours · on-ground` },
  { label: 'Format', value: eventFacts.format },
  { label: 'Team size', value: `${eventFacts.teamMin}–${eventFacts.teamMax} members (solo entry allowed)` },
  { label: 'Registration fee', value: `${eventFacts.feeLabel} per team` },
  { label: 'Prize pool', value: eventFacts.prizePoolLabel },
  { label: 'Challenge categories', value: `${eventFacts.categoryCount} disciplines` },
  { label: 'Eligibility', value: 'Any student in an undergraduate or postgraduate programme, any stream' },
  { label: 'Venue', value: venue.name },
  { label: 'Organised by', value: `${siteConfig.organizer} · ${siteConfig.institution}` },
]

export function QuickFacts({ className }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div
        className="rounded-2xl p-6 sm:p-8"
        style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.22)' }}
      >
        <h2 className="font-display text-lg font-bold tracking-tight" style={{ color: '#F8FAFC' }}>
          Quick facts
        </h2>
        <p className="mt-1.5 text-sm" style={{ color: '#68738D' }}>
          Everything about {siteConfig.name} at a glance.
        </p>

        <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b pb-3"
              style={{ borderColor: 'rgba(94,23,235,0.12)' }}
            >
              <dt
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: '#68738D' }}
              >
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-snug" style={{ color: '#F8FAFC' }}>
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  )
}