import { Announcement } from '@/components/sections/announcement'
import { FinalCta } from '@/components/sections/final-cta'
import { SectionHeading } from '@/components/section-heading'

const exploreCards = [
  {
    href: '/overview',
    index: '01',
    title: 'Overview',
    blurb: 'Start here — the mission briefing, stats and prize pool.',
  },
  {
    href: '/timeline',
    index: '02',
    title: 'Timeline',
    blurb: 'Online qualifiers to the offline grand finale, step by step.',
  },
  {
    href: '/categories',
    index: '03',
    title: 'Categories',
    blurb: 'Why compete, plus web, crypto, forensics, reversing, pwn, OSINT.',
  },
  {
    href: '/about',
    index: '04',
    title: 'About',
    blurb: 'Cyber Invaders club and NIET Greater Noida.',
  },
  {
    href: '/sponsors',
    index: '05',
    title: 'Sponsors',
    blurb: 'Partners powering the competition.',
  },
  {
    href: '/team',
    index: '06',
    title: 'Team',
    blurb: 'Organizers and faculty coordinators.',
  },
  {
    href: '/faq',
    index: '07',
    title: "FAQ's",
    blurb: 'Eligibility, teams, rounds and prizes answered.',
  },
  {
    href: '/contact',
    index: '08',
    title: 'Contact',
    blurb: 'Reach the organizers with your questions.',
  },
]

function ExploreIndex() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SectionHeading
          eyebrow="MISSION INDEX"
          title="Explore the protocol"
          description="Every briefing now lives on its own page. Pick a channel to dive in."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exploreCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group flex flex-col justify-between gap-8 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(13, 20, 37, 0.72)',
                border: '1px solid rgba(94, 23, 235, 0.18)',
              }}
            >
              <div>
                <p
                  className="font-mono text-[11px] font-bold tracking-[0.24em]"
                  style={{ color: '#a78bfa' }}
                >
                  {card.index}
                </p>
                <h3 className="font-display mt-2 text-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {card.blurb}
                </p>
              </div>
              <span className="font-mono text-xs font-semibold text-[#68738D] transition-colors group-hover:text-white">
                OPEN CHANNEL →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main className="relative overflow-x-hidden pt-20 md:pt-24">
      <ExploreIndex />
      <Announcement />
      <FinalCta />
    </main>
  )
}
