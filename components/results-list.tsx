import { Crown, Medal } from 'lucide-react'
import { isWinner, roundOneResults, winnerAccents } from '@/lib/results'

const padRank = (rank: number) => String(rank).padStart(2, '0')

export function ResultsList() {
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        background: 'rgba(8,13,26,0.72)',
        border: '1px solid rgba(148,163,184,0.12)',
      }}
    >
      {/* Column headers */}
      <div
        className="grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[4rem_1fr_auto] sm:px-5"
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderBottom: '1px solid rgba(148,163,184,0.10)',
        }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#68738D]">
          Rank
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#68738D]">
          Team
        </span>
        <span className="justify-self-end font-mono text-[10px] uppercase tracking-[0.2em] text-[#68738D]">
          Status
        </span>
      </div>

      <ul>
        {roundOneResults.map((entry) => {
          const winner = isWinner(entry.rank)
          const accent = winner ? winnerAccents[entry.rank].accent : '#a78bfa'
          const Icon = entry.rank === 1 ? Crown : winner ? Medal : null

          return (
            <li
              key={entry.team}
              className="group relative grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 px-4 py-3.5 transition-colors duration-200 sm:grid-cols-[4rem_1fr_auto] sm:px-5"
              style={{
                borderTop: '1px solid rgba(148,163,184,0.07)',
                background: winner
                  ? `linear-gradient(90deg, ${accent}0f 0%, transparent 48%)`
                  : undefined,
              }}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: winner ? `${accent}08` : 'rgba(255,255,255,0.025)' }}
                aria-hidden="true"
              />

              {winner ? (
                <span
                  className="absolute inset-y-0 left-0 w-0.5"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
              ) : null}

              <span
                className="relative font-mono text-xs font-semibold tabular-nums"
                style={{ color: winner ? accent : '#64748B' }}
              >
                {padRank(entry.rank)}
              </span>

              <span
                className="relative truncate font-display text-sm font-semibold sm:text-base"
                style={{ color: winner ? '#F8FAFC' : '#E2E8F0' }}
              >
                {entry.team}
              </span>

              <span className="relative justify-self-end">
                {winner ? (
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]"
                    style={{
                      background: `${accent}14`,
                      border: `1px solid ${accent}40`,
                      color: accent,
                    }}
                  >
                    {Icon ? <Icon className="size-3 shrink-0" aria-hidden="true" /> : null}
                    Winner
                  </span>
                ) : (
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em]"
                    style={{
                      border: '1px solid rgba(148,163,184,0.14)',
                      color: '#64748B',
                    }}
                  >
                    Qualified
                  </span>
                )}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
