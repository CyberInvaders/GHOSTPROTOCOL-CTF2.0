/**
 * Canonical source of truth for the site.
 *
 * Everything downstream that needs to state a fact about the event — JSON-LD
 * structured data, the Open Graph image, llms.txt, and the visible Quick Facts
 * panel — reads from here. Keeping them all on one object is what stops the
 * copy from contradicting itself (and stops the machine-readable layer from
 * drifting away from the human-readable one).
 */

import { siteLinks } from './links'

export const siteConfig = {
  url: 'https://gpctf2.0.cyberinvaders.tech',
  name: 'Ghost Protocol CTF 2.0',
  shortName: 'GPCTF 2.0',
  tagline: 'Hack. Secure. Evolve.',
  organizer: 'Cyber Invaders',
  organizerFull: 'Cyber Invaders — the cybersecurity club of NIET Greater Noida',
  institution: 'NIET Greater Noida',
  institutionFull: 'Noida Institute of Engineering and Technology, Greater Noida',
  locale: 'en_IN',
  language: 'en',
  email: siteLinks.email,
} as const

/** Addresses must match the contact section and the schema exactly (NAP consistency). */
export const venue = {
  name: 'NIET Greater Noida',
  street: '19, Knowledge Park II, Institutional Area',
  locality: 'Greater Noida',
  region: 'Uttar Pradesh',
  postalCode: '201306',
  country: 'IN',
  fullAddress:
    '19, Knowledge Park II, Institutional Area, Greater Noida, Uttar Pradesh 201306, India',
  mapsUrl: siteLinks.googleMaps,
} as const

/**
 * ISO-8601 with an explicit +05:30 offset so search engines resolve the event
 * to the actual Indian clock time rather than guessing from the crawler's zone.
 */
export const schedule = {
  onlineDate: '2026-10-17',
  onlineStart: '2026-10-17T09:00:00+05:30',
  onlineEnd: '2026-10-17T21:00:00+05:30',
  onlineDateLabel: '17 October 2026',
  finaleDate: '2026-10-24',
  finaleStart: '2026-10-24T09:00:00+05:30',
  finaleEnd: '2026-10-24T21:00:00+05:30',
  finaleDateLabel: '24 October 2026',
  /** Registration closes the night before the online qualifier. */
  registrationDeadline: '2026-10-15T23:59:00+05:30',
  registrationDeadlineLabel: '15 October 2026, 11:59 PM IST',
} as const

export const eventFacts = {
  format: 'Jeopardy-style CTF',
  onlineDurationHours: 12,
  finaleDurationHours: 12,
  onlineDurationLabel: '12-hour remote Jeopardy qualifier',
  finaleDurationLabel: '12-hour on-ground Jeopardy finale',
  teamMin: 1,
  teamMax: 3,
  feeInr: 0,
  feeLabel: 'Free',
  prizePoolInr: 51000,
  prizePoolLabel: 'Up to ₹51,000',
  categoryCount: 10,
  eligibility: 'Any student currently enrolled in an undergraduate or postgraduate programme, in any stream',
  finalistRangeLabel: 'Top 35 to 50 teams',
  expectedTeams: 500,
  expectedStudents: 1500,
  expectedTeamsLabel: '500+ teams',
  expectedStudentsLabel: '1,500+ students',
  accommodationProvided: false,
} as const

/**
 * Sized to Google's display limits (~60 characters for a title, ~155 for a
 * description) so neither gets truncated mid-sentence.
 */
export const seoCopy = {
  defaultTitle: 'Ghost Protocol CTF 2.0 — Student Cybersecurity Competition',
  defaultDescription:
    'Hack. Secure. Evolve. Ghost Protocol CTF 2.0 — a free national cybersecurity competition for students by Cyber Invaders, NIET Greater Noida.',
  ogDescription:
    'A national-level student cybersecurity competition by Cyber Invaders, NIET Greater Noida. Free 12-hour online qualifier, 12-hour on-ground finale, up to ₹51,000 in prizes.',
} as const

/** Every route the sitemap should advertise, with its last-modified date. */
export const routeLastModified = new Date('2026-10-08T00:00:00Z')

export const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/categories', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/glimpses', priority: 0.6, changeFrequency: 'monthly' as const },
]