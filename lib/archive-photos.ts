/**
 * Cyber Invaders photo archive.
 *
 * Shared by the homepage "Glimpses from the floor" section and the dedicated
 * /glimpses gallery page, so both stay in sync from a single list.
 *
 * `w` / `h` are the intrinsic pixel dimensions of the source file. Passing them
 * to next/image lets the browser reserve the correct box before the file loads,
 * which is what lets every photo keep its own proportions — no cropping, no
 * stretching, and no layout shift as the grid reflows.
 *
 * `featured` marks the photos that also appear in the homepage grid. The
 * homepage renders only those; /glimpses renders the entire archive. Every
 * photo is encoded to webp under 50KB.
 *
 * Order is deliberate: it is the sequence the photos are meant to read in.
 */
export type ArchivePhoto = {
  src: string
  w: number
  h: number
  alt: string
  featured?: boolean
}

export const archivePhotos: ArchivePhoto[] = [
  // ── Homepage selection ───────────────────────────────────────────────
  {
    src: '/archive-1.webp',
    w: 1000,
    h: 658,
    alt: 'Hands-on workshop session with mentors',
    featured: true,
  },
  {
    src: '/archive-2.webp',
    w: 560,
    h: 746,
    alt: 'Winners receiving certificates and a prize hamper',
    featured: true,
  },
  {
    src: '/archive-3.webp',
    w: 1100,
    h: 912,
    alt: 'Cyber Invaders team on stage',
    featured: true,
  },
  {
    src: '/archive-8.webp',
    w: 600,
    h: 800,
    alt: 'Trophy presentation at the closing ceremony',
    featured: true,
  },
  {
    src: '/archive-4.webp',
    w: 1100,
    h: 574,
    alt: 'Students at competition workstations',
    featured: true,
  },
  {
    src: '/archive-5.webp',
    w: 900,
    h: 484,
    alt: 'Workshop wide view',
    featured: true,
  },
  {
    src: '/archive-6.webp',
    w: 800,
    h: 594,
    alt: 'Team collaboration shot',
    featured: true,
  },
  {
    src: '/archive-7.webp',
    w: 700,
    h: 492,
    alt: 'Hackers in action',
    featured: true,
  },
  {
    src: '/archive-9.webp',
    w: 1200,
    h: 780,
    alt: 'Guest speaker addressing the Cyber Invaders audience',
    featured: true,
  },
  {
    src: '/archive-10.webp',
    w: 1200,
    h: 888,
    alt: 'Participants at the event with the club crew',
    featured: true,
  },
  {
    src: '/archive-11.webp',
    w: 1200,
    h: 914,
    alt: 'Cyber Invaders members during the event',
    featured: true,
  },
  {
    src: '/archive-12.webp',
    w: 1200,
    h: 884,
    alt: 'Attendees gathered at the Cyber Invaders session',
    featured: true,
  },

  // ── Full archive (/glimpses only) ─────────────────────────────────────
  {
    src: '/archive-13.webp',
    w: 700,
    h: 526,
    alt: 'Certificate handover with the faculty coordinator',
  },
  {
    src: '/archive-14.webp',
    w: 700,
    h: 526,
    alt: 'Winners posing with their certificates after the ceremony',
  },
  {
    src: '/archive-15.webp',
    w: 700,
    h: 526,
    alt: 'Group photo with faculty after the closing ceremony',
  },
  {
    src: '/archive-16.webp',
    w: 700,
    h: 526,
    alt: 'Certificate winners lined up alongside faculty',
  },
  {
    src: '/archive-17.webp',
    w: 700,
    h: 526,
    alt: 'Full group portrait at the closing ceremony',
  },
  {
    src: '/archive-18.webp',
    w: 700,
    h: 526,
    alt: 'Faculty coordinator with the winning team',
  },
  {
    src: '/archive-19.webp',
    w: 800,
    h: 600,
    alt: 'A certificate being presented to a winner',
  },
  {
    src: '/archive-20.webp',
    w: 800,
    h: 600,
    alt: 'Winner receiving her certificate on stage',
  },
  {
    src: '/archive-21.webp',
    w: 640,
    h: 854,
    alt: 'Prize hamper presented to the winners',
  },
  {
    src: '/archive-22.webp',
    w: 800,
    h: 600,
    alt: 'Winners with gift hampers and the faculty council',
  },
  {
    src: '/archive-23.webp',
    w: 700,
    h: 524,
    alt: 'Winners holding prizes alongside the faculty council',
  },
  {
    src: '/archive-24.webp',
    w: 700,
    h: 524,
    alt: 'Award winners grouped with the organizers',
  },
  {
    src: '/archive-25.webp',
    w: 700,
    h: 524,
    alt: 'Certificate winners with the faculty coordinator',
  },
  {
    src: '/archive-26.webp',
    w: 800,
    h: 600,
    alt: 'Prize hamper and certificate for the winning team',
  },
  {
    src: '/archive-27.webp',
    w: 700,
    h: 524,
    alt: 'Bottles and hamper awarded to the winners',
  },
  {
    src: '/archive-28.webp',
    w: 700,
    h: 524,
    alt: 'Winners with their prizes and trophies',
  },
  {
    src: '/archive-29.webp',
    w: 700,
    h: 524,
    alt: 'Prize distribution with the faculty coordinator',
  },
  {
    src: '/archive-30.webp',
    w: 700,
    h: 524,
    alt: 'Two winners receiving their certificates',
  },
  {
    src: '/archive-31.webp',
    w: 800,
    h: 600,
    alt: 'Winners pose with certificates and faculty',
  },
  {
    src: '/archive-32.webp',
    w: 800,
    h: 600,
    alt: 'Certificate presentation at the closing ceremony',
  },
  {
    src: '/archive-33.webp',
    w: 700,
    h: 524,
    alt: 'Winner with a certificate beside the faculty coordinator',
  },
  {
    src: '/archive-34.webp',
    w: 700,
    h: 524,
    alt: 'Team posing with certificates at the ceremony',
  },
  {
    src: '/archive-35.webp',
    w: 800,
    h: 600,
    alt: 'Certificate handover for the winning team',
  },
  {
    src: '/archive-36.webp',
    w: 800,
    h: 600,
    alt: 'Winners with a prize hamper and certificates',
  },
  {
    src: '/archive-37.webp',
    w: 800,
    h: 600,
    alt: 'Prize hamper presented to the winners',
  },
  {
    src: '/archive-38.webp',
    w: 800,
    h: 600,
    alt: 'Full club group photo in front of the event screen',
  },
  {
    src: '/archive-39.webp',
    w: 800,
    h: 600,
    alt: 'Cyber Invaders crew group portrait',
  },
  {
    src: '/archive-40.webp',
    w: 800,
    h: 600,
    alt: 'Attendees group photo at the closing ceremony',
  },
  {
    src: '/archive-41.webp',
    w: 800,
    h: 600,
    alt: 'Full group portrait with the faculty coordinator',
  },
  {
    src: '/archive-42.webp',
    w: 800,
    h: 600,
    alt: 'Everyone on stage for the closing group photo',
  },
  {
    src: '/archive-43.webp',
    w: 800,
    h: 600,
    alt: 'Group photo of participants and organizers',
  },
  {
    src: '/archive-44.webp',
    w: 800,
    h: 600,
    alt: 'Closing ceremony group portrait',
  },
  {
    src: '/archive-45.webp',
    w: 600,
    h: 802,
    alt: 'Close-up of the prize hamper',
  },
  {
    src: '/archive-46.webp',
    w: 900,
    h: 674,
    alt: 'Participants at the NIET lab after the ceremony',
  },
  {
    src: '/archive-47.webp',
    w: 700,
    h: 934,
    alt: 'Winners posing with their certificates',
  },
  {
    src: '/archive-48.webp',
    w: 700,
    h: 934,
    alt: 'Three winners holding their certificates',
  },
]

/** Photos shown in the homepage grid — the curated selection. */
export const homepagePhotos: ArchivePhoto[] = archivePhotos.filter((p) => p.featured)
