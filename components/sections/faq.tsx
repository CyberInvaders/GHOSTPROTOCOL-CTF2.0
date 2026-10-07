'use client'

import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'
import { useSectionHref } from '@/lib/use-section-href'
import { faqs } from '@/lib/faq'

/**
 * Highlights the former fee and the current one without duplicating the string —
 * `lib/faq.ts` stays the single source for the accordion, the FAQPage schema and
 * llms.txt.
 */
function renderAnswer(text: string) {
  return text.split(/(₹149|Free)/g).map((part, i) => {
    if (part === '₹149') {
      return (
        <span key={i} className="line-through decoration-[#e83e8c] decoration-2">
          {part}
        </span>
      )
    }
    if (part === 'Free') {
      return (
        <strong key={i} className="text-[#34d399]">
          {part}
        </strong>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-xl"
      style={{
        background: '#0D1425',
        border: open ? '1px solid rgba(94,23,235,0.38)' : '1px solid rgba(94,23,235,0.18)',
        transition: 'border-color 0.2s',
      }}
    >
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="font-display text-sm font-semibold leading-snug sm:text-base"
          style={{ color: '#F8FAFC' }}
        >
          {faq.q}
        </span>
        <span
          className="shrink-0 grid size-7 place-items-center rounded-md transition-colors duration-200"
          style={{
            background: open ? '#5e17eb' : 'rgba(94,23,235,0.12)',
            border: '1px solid rgba(94,23,235,0.28)',
          }}
          aria-hidden="true"
        >
          {open
            ? <Minus className="size-3.5 text-white" />
            : <Plus className="size-3.5 text-[#a78bfa]" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="px-6 pb-5 pt-0 text-sm leading-relaxed"
              style={{ color: '#9ca3af', borderTop: '1px solid rgba(94,23,235,0.12)' }}
            >
              <p className="pt-4">{renderAnswer(faq.a)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Faq() {
  const toSection = useSectionHref()

  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(55% 35% at 50% 0%, rgba(94,23,235,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before you register. Can't find your answer? Drop us a message."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <p className="text-sm" style={{ color: '#68738D' }}>
              Still have questions?{' '}
              <a
                href={toSection('#contact')}
                className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
                style={{ color: '#a78bfa' }}
              >
                Contact us
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
