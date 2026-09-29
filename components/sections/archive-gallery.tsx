'use client'

import Image from 'next/image'
import { Camera } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'
import type { ArchivePhoto } from '@/lib/archive-photos'

/**
 * Masonry photo grid.
 *
 * CSS multi-column does the layout work: each photo is placed at its own
 * intrinsic height and the browser balances the columns by their combined
 * height. That means no photo is forced into a uniform tile, nothing is
 * cropped, and the gaps stay even — while the block as a whole still reads as
 * an even, deliberate grid.
 */
export function ArchiveGallery({
  photos,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
}: {
  photos: ArchivePhoto[]
  sizes?: string
}) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
      {photos.map((img, i) => (
        <Reveal key={img.src} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
          <figure
            className="group relative overflow-hidden rounded-2xl drop-shadow-[0_0_18px_rgba(94,23,235,0.18)]"
            style={{
              background: '#0D1425',
              border: '2px solid #f4f3ee',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes={sizes}
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* hover wash + caption */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'linear-gradient(to top, rgba(5,8,22,0.85) 0%, rgba(5,8,22,0.2) 45%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2">
                <Camera className="size-4" style={{ color: '#a78bfa' }} />
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: '#a78bfa' }}
                >
                  Glimpse {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-1 text-xs leading-snug" style={{ color: '#cbd5e1' }}>
                {img.alt}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
