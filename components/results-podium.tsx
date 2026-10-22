'use client'

import { useState } from 'react'
import { Check, ChevronLeft, ChevronRight, Crown, Medal } from 'lucide-react'
import { isWinner, roundOneResults, winnerAccents } from '@/lib/results'

/** Podium order: silver on the left, champion centre, bronze on the right. */
const podiumOrder = [2, 1, 3]

const heights: Record<number, string> = {
  1: 'min-h-[13.5rem] sm:min-h-[16.5rem]',
  2: 'min-h-[11rem] sm:min-h-[13.5rem]',
  3: 'min-h-[10rem] sm:min-h-[12.5rem]',
}

const corners = [
  'left-0 top-0 border-l border-t',
  'right-0 top-0 border-r border-t',
  'bottom-0 left-0 border-b border-l',
  'bottom-0 right-0 border-b border-r',
]

const padRank = (rank: number) => String(rank).padStart(2, '0')

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function ResultsPodium() {
  const [selectedRank, setSelectedRank] = useState(1)

  const selectedIndex = roundOneResults.findIndex((entry) => entry.rank === selectedRank)
  const selected = roundOneResults[selectedIndex]
  const previousTeam = selectedIndex > 0 ? roundOneResults[selectedIndex - 1] : null
  const nextTeam =
    selectedIndex < roundOneResults.length - 1 ? roundOneResults[selectedIndex + 1] : null

  const selectedIsWinner = isWinner(selected.rank)
  const accent = selectedIsWinner ? winnerAccents[selected.rank].accent : '#a78bfa'

  return (
    <div>
      {/* ── Podium ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 items-end gap-2.5 sm:gap-4">
        {podiumOrder.map((rank) => {
          const entry = roundOneResults.find((result) => result.rank === rank)
          if (!entry) return null

          const cardAccent = winnerAccents[rank].accent
          const champion = rank === 1
          const active = selectedRank === rank
          const Icon = champion ? Crown : Medal

          return (
            <button
              key={entry.team}
              type="button"
              onClick={() => setSelectedRank(rank)}
              aria-pressed={active}
              aria-label={`Show roster for ${entry.team}, rank ${rank}`}
              className={`group relative flex flex-col items-center overflow-hidden rounded-2xl px-3 pt-5 pb-4 text-center transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a78bfa] sm:px-5 sm:pt-7 ${heights[rank]}`}
              style={{
                background: `linear-gradient(180deg, ${cardAccent}${active ? '1f' : '14'} 0%, #080d1a 62%)`,
                border: `1px solid ${cardAccent}${active ? 'cc' : '45'}`,
                boxShadow: active
                  ? `0 0 0 1px ${cardAccent}55, 0 28px 70px -40px ${cardAccent}aa`
                  : champion
                    ? `0 24px 60px -44px ${cardAccent}88`
                    : `0 18px 46px -38px ${cardAccent}55`,
              }}
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: cardAccent }}
                aria-hidden="true"
              />

              {/* Oversized rank numeral, bled into the card */}
              <span
                className="pointer-events-none absolute -bottom-5 right-1 select-none font-display text-6xl font-bold leading-none sm:text-7xl"
                style={{ color: `${cardAccent}${active ? '18' : '0f'}` }}
                aria-hidden="true"
              >
                {padRank(rank)}
              </span>

              <span
                className="relative inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]"
                style={{ color: cardAccent }}
              >
                <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                Rank {padRank(rank)}
              </span>

              <span
                className="relative my-auto py-4 font-display text-sm font-semibold leading-tight tracking-tight text-balance sm:text-xl md:text-2xl"
                style={{ color: '#F8FAFC' }}
              >
                {entry.team}
              </span>

              <span
                className="relative font-mono text-[9px] uppercase tracking-[0.18em] sm:text-[10px]"
                style={{ color: active ? cardAccent : '#68738D' }}
              >
                Round 1 Winner
              </span>

              {active ? (
                <span
                  className="absolute right-2.5 top-2.5 grid size-5 place-items-center rounded-full"
                  style={{ background: `${cardAccent}1f`, border: `1px solid ${cardAccent}66` }}
                  aria-hidden="true"
                >
                  <Check className="size-3" style={{ color: cardAccent }} />
                </span>
              ) : null}
            </button>
          )
        })}
      </div>

      {/* ── Team roster viewer ──────────────────────────────────────── */}
      <div
        className="relative mt-5 overflow-hidden rounded-2xl p-4 sm:p-6"
        style={{
          background: '#080D1A',
          border: '1px solid rgba(94,23,235,0.22)',
          boxShadow: '0 24px 60px -48px rgba(94,23,235,0.5)',
        }}
        aria-live="polite"
      >
        {corners.map((corner) => (
          <span
            key={corner}
            className={`pointer-events-none absolute size-3 ${corner}`}
            style={{ borderColor: 'rgba(167,139,250,0.45)' }}
            aria-hidden="true"
          />
        ))}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="grid size-11 shrink-0 place-items-center rounded-xl font-mono text-sm font-semibold tabular-nums"
              style={{
                background: `${accent}14`,
                border: `1px solid ${accent}45`,
                color: accent,
              }}
            >
              {padRank(selected.rank)}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#68738D]">
                Team roster
              </p>
              <p
                className="truncate font-display text-base font-bold sm:text-lg"
                style={{ color: '#F8FAFC' }}
              >
                {selected.team}
              </p>
              <p
                className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                {selectedIsWinner ? 'Round 1 Winner' : 'Qualified · Round 2'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => previousTeam && setSelectedRank(previousTeam.rank)}
              disabled={!previousTeam}
              aria-label={previousTeam ? `Previous team: ${previousTeam.team}` : 'Previous team'}
              title={previousTeam ? previousTeam.team : undefined}
              className="grid size-9 place-items-center rounded-lg border text-[#a78bfa] transition-colors hover:border-[#a78bfa]/60 hover:bg-[#a78bfa]/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[rgba(148,163,184,0.14)] disabled:hover:bg-transparent"
              style={{ borderColor: 'rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.02)' }}
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="min-w-[4.75rem] text-center font-mono text-[10px] uppercase tracking-[0.14em] tabular-nums text-[#68738D]">
              {padRank(selected.rank)} / {roundOneResults.length}
            </span>
            <button
              type="button"
              onClick={() => nextTeam && setSelectedRank(nextTeam.rank)}
              disabled={!nextTeam}
              aria-label={nextTeam ? `Next team: ${nextTeam.team}` : 'Next team'}
              title={nextTeam ? nextTeam.team : undefined}
              className="grid size-9 place-items-center rounded-lg border text-[#a78bfa] transition-colors hover:border-[#a78bfa]/60 hover:bg-[#a78bfa]/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[rgba(148,163,184,0.14)] disabled:hover:bg-transparent"
              style={{ borderColor: 'rgba(148,163,184,0.14)', background: 'rgba(255,255,255,0.02)' }}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 border-t pt-4 sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: 'rgba(148,163,184,0.10)' }}>
          {selected.players.map((player) => (
            <div
              key={player.email}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(148,163,184,0.09)',
              }}
            >
              <span
                className="grid size-8 shrink-0 place-items-center rounded-full font-mono text-[10px] font-semibold"
                style={{
                  background: 'rgba(94,23,235,0.14)',
                  border: '1px solid rgba(94,23,235,0.32)',
                  color: '#a78bfa',
                }}
              >
                {player.name ? initials(player.name) : '@'}
              </span>
              <div className="min-w-0">
                {player.name ? (
                  <p
                    className="font-sans text-sm font-medium"
                    style={{ color: '#E2E8F0' }}
                  >
                    {player.name}
                  </p>
                ) : (
                  <p
                    className="select-all break-all font-mono text-[11px] leading-relaxed"
                    style={{ color: '#E2E8F0' }}
                  >
                    {player.email}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
