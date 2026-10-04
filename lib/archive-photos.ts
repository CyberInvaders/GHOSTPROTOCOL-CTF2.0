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
 * Order is deliberate: it is the sequence the photos are meant to read in.
 */
export type ArchivePhoto = {
  src: string
  w: number
  h: number
  alt: string
}

export const archivePhotos: ArchivePhoto[] = [
  { src: '/archive-1.webp', w: 1200, h: 789, alt: 'Hands-on workshop session with mentors' },
  { src: '/archive-2.webp', w: 1200, h: 878, alt: 'Cyber Invaders group photo on stage' },
  { src: '/archive-3.webp', w: 1200, h: 995, alt: 'Cyber Invaders team on stage' },
  { src: '/archive-8.webp', w: 720, h: 960, alt: 'Trophy presentation at the closing ceremony' },
  { src: '/archive-4.webp', w: 1200, h: 626, alt: 'Students at competition workstations' },
  { src: '/archive-5.webp', w: 1200, h: 645, alt: 'Workshop wide view' },
  { src: '/archive-6.webp', w: 1200, h: 892, alt: 'Team collaboration shot' },
  { src: '/archive-7.webp', w: 1200, h: 844, alt: 'Hackers in action' },
  { src: '/archive-9.webp', w: 1297, h: 844, alt: 'Guest speaker addressing the Cyber Invaders audience' },
  { src: '/archive-10.webp', w: 1099, h: 814, alt: 'Participants at the event with the club crew' },
  { src: '/archive-11.webp', w: 1081, h: 823, alt: 'Cyber Invaders members during the event' },
  { src: '/archive-12.webp', w: 1116, h: 823, alt: 'Attendees gathered at the Cyber Invaders session' },
]
