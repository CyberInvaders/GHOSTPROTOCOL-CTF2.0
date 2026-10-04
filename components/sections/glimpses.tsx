'use client'

import { SectionHeading } from '@/components/section-heading'
import { ArchiveGallery } from '@/components/sections/archive-gallery'
import { homepagePhotos } from '@/lib/archive-photos'

export function Glimpses() {
  return (
    <section id="glimpses" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The Archive"
          title="Glimpses from the floor"
          description="A photo archive from past Cyber Invaders events, workshops and CTFs — the moments behind the competition."
        />

        <div className="mt-14">
          <ArchiveGallery photos={homepagePhotos} />
        </div>
      </div>
    </section>
  )
}
