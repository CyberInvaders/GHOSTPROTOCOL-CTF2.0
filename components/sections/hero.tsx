'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Trophy, Shapes } from 'lucide-react'
import { GlitchText } from '@/components/glitch-text'
import { siteLinks } from '@/lib/links'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { Countdown, getCountdown } from '@/components/countdown'

/** Live phase label — shows whichever event is next. */
function EventCountdown() {
  const [label, setLabel] = useState(() => getCountdown(Date.now()).label)

  useEffect(() => {
    const id = setInterval(() => setLabel(getCountdown(Date.now()).label), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mb-1.5 flex items-center justify-center gap-1.5 sm:mb-2">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e83e8c] opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-[#e83e8c]" />
      </span>
      <span
        className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]"
        style={{ color: '#9ca3af' }}
      >
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 sm:px-4 font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] sm:tracking-[0.24em]"
          style={{
            border: '1px solid rgba(94, 23, 235, 0.22)',
            background: '#0D1425',
            color: '#9ca3af',
          }}
        >
          <span
            className="size-1.5 rounded-full"
            style={{ background: '#a78bfa' }}
          />
          Hack. Secure. Evolve.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 text-balance font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] sm:leading-[0.95] tracking-tight"
          style={{ color: '#F8FAFC' }}
        >
          <GlitchText />
          <span className="relative mt-2 inline-block">
            <span className="text-gradient relative z-10 block tracking-wide">
              CTF 2.0
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-4 sm:mt-5 max-w-2xl text-pretty text-base sm:text-lg md:text-xl text-muted-foreground"
        >
          National-Level Student Cybersecurity Competition
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-4 sm:mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm"
        >
          <span style={{ color: '#F8FAFC' }}>Online Qualification Round</span>
          <span style={{ color: '#68738D' }}>+</span>
          <span style={{ color: '#F8FAFC' }}>Offline Grand Finale at NIET Greater Noida</span>
        </motion.div>

        {/* Highlighted chip — its own row so it never rides up against the format line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 flex justify-center sm:mt-3.5"
        >
          <span
            className="relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
            style={{
              color: '#EDE9FE',
              background: 'rgba(94, 23, 235, 0.16)',
              border: '1px solid rgba(167, 139, 250, 0.45)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 18px -8px rgba(139, 92, 246, 0.9)',
            }}
          >
            {/* leading status dot */}
            <span className="size-1.5 shrink-0 rounded-full bg-[#a78bfa] shadow-[0_0_6px_#a78bfa]" />
            {/* corner tick, top-left */}
            <span
              aria-hidden="true"
              className="absolute left-[-1px] top-[-1px] size-1.5 border-l border-t"
              style={{ borderColor: 'rgba(216, 180, 254, 0.9)' }}
            />
            {/* corner tick, bottom-right */}
            <span
              aria-hidden="true"
              className="absolute bottom-[-1px] right-[-1px] size-1.5 border-b border-r"
              style={{ borderColor: 'rgba(216, 180, 254, 0.9)' }}
            />
            <Shapes className="size-3 shrink-0" style={{ color: '#c4b5fd' }} strokeWidth={2} />
            <span>Open for All Branches</span>
          </span>
        </motion.div>

        {/* Prize pool + finale countdown */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-2 sm:mt-3.5 sm:grid-cols-5 sm:gap-3"
        >
          {/* Prize pool — first card */}
          <div
            className="rounded-xl px-2 sm:px-3 py-3 sm:py-4 text-center glass transition-transform duration-200 hover:-translate-y-0.5 sm:col-span-2"
            style={{
              background: 'linear-gradient(160deg, rgba(94,23,235,0.22) 0%, #0D1425 70%)',
              border: '1px solid rgba(94, 23, 235, 0.35)',
              boxShadow: '0 0 24px -8px rgba(94, 23, 235, 0.5)',
            }}
          >
            <Trophy className="mx-auto mb-1.5 sm:mb-2 size-3.5 sm:size-4" style={{ color: '#a78bfa' }} />
            <div
              className="font-display text-lg sm:text-2xl font-bold"
              style={{ color: '#F8FAFC' }}
            >
              ₹51,000
            </div>
            <div className="mt-0.5 text-[10px] sm:text-xs" style={{ color: '#68738D' }}>Prize Pool</div>
          </div>

          {/* Countdown — auto-switches from qualifier to grand finale */}
          <div
            className="rounded-xl px-3 sm:px-4 py-3 sm:py-4 glass sm:col-span-3"
            style={{
              background: '#0D1425',
              border: '1px solid rgba(94, 23, 235, 0.18)',
            }}
          >
            <EventCountdown />
            <Countdown />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3.5 sm:gap-4"
        >
          <a
            href={siteLinks.register}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-7 py-4 sm:w-auto sm:px-8 sm:py-4 text-base font-semibold text-white transition-all hover:bg-[#4a10c4] active:scale-[0.98]"
            style={{
              background: '#5e17eb',
              boxShadow: '0 8px 24px -12px rgba(94, 23, 235, 0.6)',
            }}
          >
            Register Now
            <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={siteLinks.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-7 py-4 sm:w-auto sm:px-8 sm:py-4 text-base font-semibold transition-all active:scale-[0.98]"
            style={{
              border: '1px solid rgba(37, 211, 102, 0.35)',
              background: 'rgba(37, 211, 102, 0.08)',
              color: '#F8FAFC',
              boxShadow: '0 8px 24px -14px rgba(37, 211, 102, 0.6)',
            }}
          >
            <WhatsAppIcon className="size-[18px]" style={{ color: '#25D366' }} />
            Join Announcement Channel
          </a>
        </motion.div>
      </div>
    </section>
  )
}
