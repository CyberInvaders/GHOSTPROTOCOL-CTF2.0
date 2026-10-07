'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { categories } from '@/lib/categories'
import { categoryIcons } from '@/lib/category-icons'

/**
 * Client component: the stagger variants come from `motion`, which cannot be
 * invoked from a server component.
 */
export function CategoriesIndex() {
  return (
    <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const Icon = categoryIcons[category.icon]

        const cardBody = (
          <>
            <div className="flex items-start justify-between gap-4">
              <span
                className="grid size-11 shrink-0 place-items-center rounded-xl"
                style={{
                  border: '1px solid rgba(94,23,235,0.28)',
                  background: '#111A2E',
                }}
              >
                {Icon ? (
                  <Icon className="size-5" style={{ color: '#a78bfa' }} strokeWidth={1.7} />
                ) : null}
              </span>
              {category.slug ? (
                <ArrowRight
                  className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: '#68738D' }}
                />
              ) : (
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: '#68738D' }}
                >
                  Catch-all
                </span>
              )}
            </div>

            <h2 className="mt-5 font-display text-lg font-semibold" style={{ color: '#F8FAFC' }}>
              {category.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              {category.tagline}
            </p>
          </>
        )

        const shell =
          'group flex h-full flex-col rounded-2xl p-6 text-left transition-transform duration-300'

        return category.slug ? (
          <motion.div key={category.slug} variants={staggerItem}>
            <Link
              href={`/categories/${category.slug}`}
              className={`${shell} hover:-translate-y-1`}
              style={{
                background: '#0D1425',
                border: '1px solid rgba(94,23,235,0.18)',
              }}
            >
              {cardBody}
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key={category.name}
            variants={staggerItem}
            className={shell}
            style={{
              background: '#0D1425',
              border: '1px dashed rgba(94,23,235,0.22)',
            }}
          >
            {cardBody}
          </motion.div>
        )
      })}
    </StaggerGroup>
  )
}