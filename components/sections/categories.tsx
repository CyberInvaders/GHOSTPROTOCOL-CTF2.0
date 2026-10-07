'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { categories } from '@/lib/categories'
import { categoryIcons } from '@/lib/category-icons'
import { categoryHref } from '@/lib/categories'

export function Categories() {
  return (
    <section id="categories" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Challenge Categories"
          title="Ten domains. One battlefield."
          description="The full spectrum of offensive and defensive security — from classic exploitation to the newest frontier of AI. Master one, or chase them all."
        />

        <StaggerGroup className="mt-12 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((c, idx) => {
            const Icon = categoryIcons[c.icon]
            return (
            <motion.div
              key={c.name}
              variants={staggerItem}
              className="flip-scene group relative min-h-[140px] sm:min-h-[150px]"
              style={{ animationDelay: `${idx * -1.5}s` }}
            >
              <Link
                href={categoryHref(c.slug)}
                className="block h-full"
                aria-label={`${c.name} challenge category`}
              >
                <div className="flip-inner h-full">
                {/* ── Front face ── */}
                <div
                  className="flip-face flip-face-front flex flex-col items-center justify-center gap-2.5 sm:gap-3 overflow-hidden rounded-xl glass p-4 sm:p-6 text-center"
                  style={{ background: '#0D1425' }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                    style={{ background: '#5e17eb' }}
                  />
                  <span
                    className="relative grid size-10 sm:size-12 place-items-center rounded-xl shrink-0"
                    style={{
                      border: '1px solid rgba(94, 23, 235, 0.18)',
                      background: '#111A2E',
                    }}
                  >
                    <Icon className="size-4.5 sm:size-5" style={{ color: '#a78bfa' }} strokeWidth={1.7} />
                  </span>
                  <span
                    className="relative text-xs sm:text-sm font-semibold sm:font-medium leading-snug"
                    style={{ color: '#F8FAFC' }}
                  >
                    {c.name}
                  </span>
                  <span
                    className="absolute bottom-2 sm:bottom-3 font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: '#a78bfa' }}
                    aria-hidden="true"
                  >
                    {c.slug ? 'explore' : 'catch-all'}
                  </span>
                </div>

                {/* ── Back face ── */}
                <div
                  className="flip-face flip-face-back flex flex-col items-center justify-center gap-1.5 sm:gap-2 overflow-hidden rounded-xl p-3.5 sm:p-5 text-center"
                  style={{
                    background: 'linear-gradient(150deg, #5e17eb 0%, #4a10c4 60%, #0D1425 140%)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                  }}
                >
                  <Icon className="size-5 sm:size-6 text-white" strokeWidth={1.7} />
                  <span className="font-display text-xs sm:text-sm font-bold text-white leading-tight">{c.name}</span>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-[#E9E4FF]">{c.tagline}</p>
                </div>
                </div>
              </Link>
            </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
