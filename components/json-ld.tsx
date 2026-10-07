import { siteConfig, venue, schedule, eventFacts, seoCopy } from '@/lib/site'
import { siteLinks } from '@/lib/links'
import { faqs } from '@/lib/faq'
import { categories } from '@/lib/categories'

const ORGANIZATION_ID = `${siteConfig.url}/#organization`
const EVENT_ID = `${siteConfig.url}/#event`
const WEBSITE_ID = `${siteConfig.url}/#website`

const placeNode = {
  '@type': 'Place',
  '@id': `${siteConfig.url}/#venue`,
  name: venue.name,
  description: `${siteConfig.institutionFull} — grand finale venue for ${siteConfig.name}.`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: venue.street,
    addressLocality: venue.locality,
    addressRegion: venue.region,
    postalCode: venue.postalCode,
    addressCountry: venue.country,
  },
  hasMap: venue.mapsUrl,
}

const organizationNode = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: siteConfig.organizer,
  alternateName: 'Cyber Invaders Club',
  legalName: siteConfig.organizerFull,
  url: siteLinks.clubWebsite,
  description: siteConfig.organizerFull,
  email: siteLinks.email,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/cyber-invaders-full-logo.webp`,
  },
  image: `${siteConfig.url}/cyber-invaders-full-logo.webp`,
  parentOrganization: {
    '@type': 'Organization',
    name: siteConfig.institutionFull,
    url: siteLinks.nietWebsite,
  },
  sameAs: [siteLinks.instagram, siteLinks.linkedin, siteLinks.clubWebsite],
  address: {
    '@type': 'PostalAddress',
    streetAddress: venue.street,
    addressLocality: venue.locality,
    addressRegion: venue.region,
    postalCode: venue.postalCode,
    addressCountry: venue.country,
  },
}

const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: siteConfig.url,
  name: siteConfig.name,
  description: seoCopy.defaultDescription,
  inLanguage: siteConfig.language,
  publisher: { '@id': ORGANIZATION_ID },
}

const eventNode = {
  '@type': 'Event',
  '@id': EVENT_ID,
  name: siteConfig.name,
  alternateName: 'Ghost Protocol CTF 2.0',
  description: seoCopy.ogDescription,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  isAccessibleForFree: eventFacts.feeInr === 0,
  startDate: schedule.onlineStart,
  endDate: schedule.finaleEnd,
  image: [`${siteConfig.url}/opengraph-image`],
  logo: `${siteConfig.url}/icon.png`,
  maximumAttendeeCapacity: 1500,
  typicalAgeRange: '18-25',
  organizer: { '@id': ORGANIZATION_ID },
  location: [
    {
      '@type': 'VirtualLocation',
      url: siteConfig.url,
      name: `${siteConfig.name} — Online Qualification Round`,
    },
    placeNode,
  ],
  offers: {
    '@type': 'Offer',
    url: siteLinks.register,
    price: eventFacts.feeInr,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-09-01T00:00:00+05:30',
    validThrough: schedule.registrationDeadline,
  },
  performer: { '@id': ORGANIZATION_ID },
  keywords: categories.map((c) => c.name).join(', '),
  about: categories.map((c) => ({ '@type': 'Thing', name: c.name })),
}

const faqNode = {
  '@type': 'FAQPage',
  '@id': `${siteConfig.url}/#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

/**
 * The site-wide structured data graph.
 *
 * Rendered once in the root layout so every route advertises the same entity
 * identities — search and AI engines key off stable `@id` references, and a
 * graph that changes shape per page reads as inconsistent.
 */
export function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [websiteNode, organizationNode, eventNode, faqNode],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

type Crumb = { name: string; path: string }

/**
 * Breadcrumbs live in their own script because they are route-specific while the
 * rest of the graph is global. Multiple ld+json blocks are valid and are the
 * recommended way to express this.
 */
export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/** `ItemList` of the ten disciplines, used on the /categories hub. */
export function CategoryListJsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ghost Protocol CTF 2.0 challenge categories',
    numberOfItems: categories.length,
    itemListElement: categories.map((category, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: category.name,
      description: category.tagline,
      url: `${siteConfig.url}/categories/${category.slug}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/** `TechArticle`-flavoured schema for a single discipline page. */
export function CategoryPageJsonLd({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: name,
    description,
    url: `${siteConfig.url}/categories/${slug}`,
    inLanguage: siteConfig.language,
    isPartOf: { '@id': EVENT_ID },
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    about: { '@type': 'Thing', name: `${name} challenges at ${siteConfig.name}` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/** Event sub-event schema so both rounds are individually machine-readable. */
export function SubEventJsonLd({
  name,
  description,
  start,
  end,
  physical = false,
}: {
  name: string
  description: string
  start: string
  end: string
  physical?: boolean
}) {
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${siteConfig.name} — ${name}`,
    description,
    startDate: start,
    endDate: end,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: physical
      ? 'https://schema.org/OfflineEventAttendanceMode'
      : 'https://schema.org/OnlineEventAttendanceMode',
    isAccessibleForFree: true,
    organizer: { '@id': ORGANIZATION_ID },
    location: physical ? placeNode : { '@type': 'VirtualLocation', url: siteConfig.url },
    superEvent: { '@id': EVENT_ID },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}