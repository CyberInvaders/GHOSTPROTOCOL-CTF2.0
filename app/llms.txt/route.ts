import { siteConfig, venue, schedule, eventFacts, seoCopy } from '@/lib/site'
import { siteLinks } from '@/lib/links'
import { categories } from '@/lib/categories'
import { faqs } from '@/lib/faq'

export const dynamic = 'force-static'

/**
 * `/llms.txt` — the emerging convention for telling AI assistants what a site
 * is and what it covers, so it can be cited accurately instead of guessed at.
 * Built entirely from `lib/*` so it can never drift from the visible pages.
 */
function buildLlmsTxt(): string {
  const categoryLines = categories.map((c) =>
    c.slug
      ? `- [${c.name}](${siteConfig.url}/categories/${c.slug}): ${c.tagline}`
      : `- ${c.name}: ${c.tagline}`,
  )

  const faqLines = faqs.map((faq) => `- **${faq.q}**\n  ${faq.a}`)

  return `# ${siteConfig.name}

> ${seoCopy.ogDescription}

${siteConfig.tagline} — a national-level student cybersecurity competition run by ${siteConfig.organizerFull}. Both rounds are free to enter.

## Key facts

- **Online qualification round:** ${schedule.onlineDateLabel}, ${eventFacts.onlineDurationHours} hours, fully remote, open to participants anywhere in India.
- **On-ground grand finale:** ${schedule.finaleDateLabel}, ${eventFacts.finaleDurationHours} hours, held at ${venue.name}.
- **Format:** ${eventFacts.format}. Teams of ${eventFacts.teamMin}–${eventFacts.teamMax}; solo entry is allowed.
- **Registration fee:** ${eventFacts.feeLabel} per team (not per member). Teams that qualify for the finale — the top 35 to 50 on the leaderboard — pay no additional participation fee.
- **Prize pool:** ${eventFacts.prizePoolLabel} across cash, trophies, certificates and goodies.
- **Eligibility:** ${eventFacts.eligibility}.
- **Expected scale:** roughly ${eventFacts.expectedTeamsLabel} and ${eventFacts.expectedStudentsLabel} competing.
- **Registration deadline:** ${schedule.registrationDeadlineLabel}.
- **Travel and accommodation:** not provided for outstation finalists.

## Challenge categories

Ghost Protocol CTF 2.0 runs ${eventFacts.categoryCount} challenge categories:

${categoryLines.join('\n')}

## Registration

${siteLinks.register}

## Contact

- Email: ${siteLinks.email}
- WhatsApp announcement channel: ${siteLinks.whatsappChannel}
- Instagram: ${siteLinks.instagram}
- Club portal: ${siteLinks.clubWebsite}
- ${siteConfig.institutionFull}: ${siteLinks.nietWebsite}

## Venue

${venue.fullAddress}

## Frequently asked questions

${faqLines.join('\n')}

## About this file

This is an \`llms.txt\` file describing ${siteConfig.name} for AI assistants. A longer version with full category detail is at ${siteConfig.url}/llms-full.txt, and the machine-readable structured data is at ${siteConfig.url}/ (JSON-LD).

Site URL: ${siteConfig.url}
`
}

/** The short-form guide. */
export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}