'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Crown, Medal } from 'lucide-react'
import { finalResults, winnerAccents } from '@/lib/results'

/** Finale standings — the authoritative result of the on-ground round. */
const podiumOrder = [2, 1, 3]

const placeLabel: Record<number, string> = { 1: '1st', 2: '2nd', 3: '3rd' }

export function FinalRoundResults() {
  const cards = podiumOrder.map((rank) => finalResults.find((r) => r.rank === rank)!)

  return (
    <div>
      <div className="grid items-end gap-4 sm:grid-cols-3">
        {cards.map((entry) => {
          const accent = winnerAccents[entry.rank].accent
          const isChampion = entry.rank === 1
          return (
            <motion.div
              key={entry.team}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center overflow-hidden rounded-2xl px-4 pb-5 pt-6 text-center sm:pt-8"
              style={{
                background: '#0D1425',
                border: `1px solid ${accent}59`,
                boxShadow: `inset 0 0 40px -14px ${accent}40`,
                minHeight: isChampion ? '15rem' : '12.5rem',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5"
                aria-hidden="true"
                style={{ background: accent }}
              />

              <span
                className="grid size-11 place-items-center rounded-xl"
                style={{ background: `${accent}1f`, border: `1px solid ${accent}45` }}
              >
                {isChampion ? (
                  <Crown className="size-5" style={{ color: accent }} />
                ) : (
                  <Medal className="size-5" style={{ color: accent }} />
                )}
              </span>

              <span
                className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                {placeLabel[entry.rank]} place
              </span>

              <p
                className="mt-2 font-display text-lg font-bold sm:text-xl"
                style={{ color: '#F8FAFC' }}
              >
                {entry.team}
              </p>

              <p
                className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em]"
                style={{ color: '#68738D' }}
              >
                {isChampion ? 'Champion' : 'Finalist'}
              </p>

              <p
                className="mt-auto pt-4 text-[11px] leading-relaxed"
                style={{ color: '#9ca3af' }}
              >
                {isChampion
                  ? 'Took the top spot in the 12-hour on-ground finale.'
                  : 'Held the finale floor until the last flag.'}
              </p>
            </motion.div>
          )
        })}
      </div>

      <p
        className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.16em]"
        style={{ color: '#68738D' }}
      >
        Final standings · on-ground finale · verified by the organizers
      </p>
    </div>
  )
}

/**
 * Two-round switcher. The finale standings are the headline result, so they
 * come first; the qualifier (Round 1) board stays one tap away.
 */
export function ResultsRoundSwitch({
  roundOne,
}: {
  roundOne: React.ReactNode
}) {
  const [round, setRound] = useState<'final' | 'round1'>('final')

  const tabs = [
    { id: 'final' as const, label: 'Final Round', meta: 'Podium' },
    { id: 'round1' as const, label: 'Round 1 Qualifier', meta: '30 teams' },
  ]

  return (
    <div>
      {/* ── Switcher ───────────────────────────────────────────────────── */}
      <div
        className="relative mx-auto flex w-fit gap-1 rounded-full p-1"
        style={{ background: '#080D1A', border: '1px solid rgba(94,23,235,0.24)' }}
        role="tablist"
        aria-label="Select round"
      >
        {tabs.map((tab) => {
          const active = round === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setRound(tab.id)}
              className="relative rounded-full px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors sm:px-5 sm:text-[11px]"
              style={{ color: active ? '#F8FAFC' : '#68738D' }}
            >
              {active ? (
                <motion.span
                  layoutId="results-round-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: '#5e17eb' }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : null}
              <span className="relative">
                {tab.label}
                <span className="ml-2 hidden opacity-60 sm:inline">{tab.meta}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Panels ─────────────────────────────────────────────────────── */}
      <div className="mt-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={round}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {round === 'final' ? <FinalRoundResults /> : roundOne}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
