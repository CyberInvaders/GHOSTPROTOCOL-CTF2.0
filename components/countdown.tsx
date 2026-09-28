'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/** Event phases. Times are IST (+05:30). */
export const PHASES = [
  {
    id: 'qualifier',
    label: 'Qualifier · 17 Oct',
    at: new Date('2026-10-17T10:00:00+05:30').getTime(),
  },
  {
    id: 'finale',
    label: 'Grand Finale · 24 Oct',
    at: new Date('2026-10-24T09:00:00+05:30').getTime(),
  },
] as const

export type PhaseId = (typeof PHASES)[number]['id']

/** Current phase + time remaining until it starts. */
export function getPhase(now: number) {
  const next = PHASES.find((p) => p.at > now)
  if (!next) return { phase: PHASES[PHASES.length - 1], diff: 0, live: true }
  return { phase: next, diff: next.at - now, live: false }
}

export function getCountdown(now: number) {
  const { phase, diff, live } = getPhase(now)
  return {
    live,
    label: live ? 'Finale is live' : phase.label,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div className="relative flex h-7 items-center justify-center overflow-hidden sm:h-8">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 14, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-lg font-bold tabular-nums sm:text-2xl"
            style={{ color: '#F8FAFC', textShadow: '0 0 18px rgba(94,23,235,0.55)' }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="mt-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] sm:text-[9px]"
        style={{ color: '#68738D' }}
      >
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span
      aria-hidden="true"
      className="font-mono text-base font-bold sm:text-xl"
      style={{ color: 'rgba(167,139,250,0.5)' }}
    >
      :
    </span>
  )
}

export function Countdown() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const t = getCountdown(now)

  if (t.live) {
    return (
      <div className="flex items-center justify-center gap-2 py-1">
        <span className="size-2 rounded-full bg-[#34d399] animate-ping" />
        <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#34d399]">
          Finale is live
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-start justify-center">
      <Unit value={pad(t.days)} label="Days" />
      <Separator />
      <Unit value={pad(t.hours)} label="Hrs" />
      <Separator />
      <Unit value={pad(t.minutes)} label="Min" />
      <Separator />
      <Unit value={pad(t.seconds)} label="Sec" />
    </div>
  )
}
