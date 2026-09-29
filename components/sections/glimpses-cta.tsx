'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'

/**
 * The single quiet line that closes the homepage photo grid and points at the
 * full archive on /glimpses.
 */
export function GlimpsesCta() {
  return (
    <section className="relative -mt-8 pb-24 md:-mt-12 md:pb-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <Link
            href="/glimpses"
            className="group mx-auto flex w-fit items-center gap-1.5 whitespace-nowrap text-sm transition-colors"
            style={{ color: '#38bdf8' }}
          >
            <span className="border-b border-transparent pb-px transition-colors duration-300 group-hover:border-[#38bdf8]">
              Open the full gallery
            </span>
            <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
