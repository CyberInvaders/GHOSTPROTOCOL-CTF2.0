'use client'

import { ArrowRight, Lock } from 'lucide-react'
import { siteLinks } from '@/lib/links'
import { useRegistrationClosed } from '@/components/countdown'

/**
 * The purple "Register Now" CTA used across the categories pages.
 *
 * Renders as a live link while registration is open and collapses to a
 * non-interactive locked state the instant the deadline passes, so no page
 * keeps sending people to a closed form.
 */
export function RegisterCta() {
  const closed = useRegistrationClosed()

  if (closed) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-md px-8 py-4 text-base font-semibold"
        style={{
          background: 'rgba(94, 23, 235, 0.14)',
          border: '1px solid rgba(94, 23, 235, 0.26)',
          color: '#68738D',
        }}
      >
        <Lock className="size-4" aria-hidden="true" />
        Registrations Closed
      </span>
    )
  }

  return (
    <a
      href={siteLinks.register}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#4a10c4]"
      style={{
        background: '#5e17eb',
        boxShadow: '0 10px 30px -12px rgba(94,23,235,0.8)',
      }}
    >
      Register Now <ArrowRight className="size-4" />
    </a>
  )
}
