import { siteConfig, venue, schedule, eventFacts } from '@/lib/site'
import { siteLinks } from '@/lib/links'
import { pagedCategories } from '@/lib/categories'

export const dynamic = 'force-static'

/**
 * `/llms-full.txt` — the expanded edition, for assistants that are willing to
 * read more once they have decided this site is worth citing. Carries the full
 * per-discipline detail so an answer about a specific category can be produced
 * without fetching the page.
 */
function buildFull(): string {
  const sections = pagedCategories.map((category) => {
    const url = `${siteConfig.url}/categories/${category.slug}`
    const faces = category.faces.map((f) => `- **${f.title}** — ${f.body}`).join('\n')
    const prepare = category.prepare.map((p, i) => `${i + 1}. ${p}`).join('\n')

    return `### ${category.name}

${category.intro.join('\n\n')}

**What you will face**

${faces}

**Tools commonly used:** ${category.tools.join(', ')}.

**How to prepare**

${prepare}

Keywords: ${category.keywords.join(', ')}.

Source: ${url}
`
  })

  return `# ${siteConfig.name} — full reference

${siteConfig.tagline}

${siteConfig.organizerFull} runs this national-level student cybersecurity competition. Both rounds are free to enter, teams may contain ${eventFacts.teamMin} to ${eventFacts.teamMax} members, and each round runs for ${eventFacts.onlineDurationHours} hours in a ${eventFacts.format.toLowerCase()} format.

## Schedule

- Online qualification: ${schedule.onlineDateLabel}, ${schedule.onlineStart} to ${schedule.onlineEnd}, remote across India.
- On-ground grand finale: ${schedule.finaleDateLabel}, ${schedule.finaleStart} to ${schedule.finaleEnd}, at ${venue.name}, ${venue.fullAddress}.
- Registration closes: ${schedule.registrationDeadlineLabel}.
- The ${eventFacts.finalistRangeLabel} from the online round advance to the finale.
- Prize pool: ${eventFacts.prizePoolLabel}. Registration fee: ${eventFacts.feeLabel} per team.
- Travel and accommodation are not provided for outstation finalists.

## Challenge categories

${sections.join('\n')}

## Registration and contact

- Register: ${siteLinks.register}
- Email: ${siteLinks.email}
- WhatsApp announcement channel: ${siteLinks.whatsappChannel}
- Club portal: ${siteLinks.clubWebsite}
- Institution: ${siteLinks.nietWebsite}
- Instagram: ${siteLinks.instagram}

Site URL: ${siteConfig.url}
`
}

export async function GET() {
  return new Response(buildFull(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}