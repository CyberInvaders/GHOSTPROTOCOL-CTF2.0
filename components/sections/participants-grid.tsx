'use client'

import { useMemo, useState } from 'react'
import { useDeferredValue } from 'react'
import { Search, Trophy, Check, Users } from 'lucide-react'
import type { ParticipantStatus, ParticipantTeam } from '@/lib/participants'

const statusStyles: Record<
  ParticipantStatus,
  { label: string; accent: string; border: string; chipBg: string }
> = {
  winner: {
    label: 'Winner',
    accent: '#F59E0B',
    border: 'rgba(245,158,11,0.42)',
    chipBg: 'rgba(245,158,11,0.12)',
  },
  qualified: {
    label: 'Qualified',
    accent: '#a78bfa',
    border: 'rgba(167,139,250,0.34)',
    chipBg: 'rgba(167,139,250,0.12)',
  },
  participated: {
    label: 'Participated',
    accent: '#64748B',
    border: 'rgba(148,163,184,0.16)',
    chipBg: 'rgba(148,163,184,0.08)',
  },
}

const filters: { id: 'all' | ParticipantStatus; label: string }[] = [
  { id: 'all', label: 'All teams' },
  { id: 'winner', label: 'Winners' },
  { id: 'qualified', label: 'Qualified' },
  { id: 'participated', label: 'All participants' },
]

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

const rankLabel: Record<number, string> = { 1: '1st', 2: '2nd', 3: '3rd' }

export function ParticipantsGrid({ teams }: { teams: ParticipantTeam[] }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'all' | ParticipantStatus>('all')
  const deferredQuery = useDeferredValue(query)

  const visible = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return teams.filter((team) => {
      if (filter !== 'all' && team.status !== filter) return false
      if (!q) return true
      if (team.team.toLowerCase().includes(q)) return true
      if (team.id && team.id.toLowerCase().includes(q)) return true
      return team.members.some((m) => m.toLowerCase().includes(q))
    })
  }, [teams, deferredQuery, filter])

  return (
    <div>
      {/* ── Controls ───────────────────────────────────────────────────── */}
      <div
        className="rounded-2xl p-4 sm:p-5"
        style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.22)' }}
      >
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2"
            style={{ color: '#68738D' }}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your team, member or registration ID…"
            aria-label="Search participants"
            className="w-full rounded-xl py-3 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-[#4b5568]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(148,163,184,0.16)',
              color: '#E2E8F0',
            }}
          />
        </div>

        <div className="mt-3.5 flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className="rounded-full px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors"
                style={{
                  background: active ? 'rgba(94,23,235,0.18)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${active ? 'rgba(167,139,250,0.45)' : 'rgba(148,163,184,0.16)'}`,
                  color: active ? '#a78bfa' : '#68738D',
                }}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: '#68738D' }}>
          Showing {visible.length} of {teams.length} teams
        </p>
      </div>

      {/* ── Grid ───────────────────────────────────────────────────────── */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((team) => {
          const style = statusStyles[team.status]
          const isWinner = team.status === 'winner'
          return (
            <div
              key={`${team.id ?? 'no-id'}-${team.team}`}
              className="group relative flex flex-col overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#0D1425', border: `1px solid ${style.border}` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{ background: style.accent }}
              />

              <div className="flex items-start justify-between gap-2">
                <span
                  className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: '#4b5568' }}
                >
                  {team.id ?? 'CTF 2.0'}
                </span>
                <span
                  className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ background: style.chipBg, border: `1px solid ${style.border}`, color: style.accent }}
                >
                  {isWinner && team.rank ? (
                    <>
                      <Trophy className="size-2.5" />
                      {rankLabel[team.rank]} place
                    </>
                  ) : team.status === 'qualified' ? (
                    <>
                      <Check className="size-2.5" />
                      Qualified
                    </>
                  ) : (
                    'Participated'
                  )}
                </span>
              </div>

              <p
                className="mt-2 truncate font-display text-base font-bold"
                style={{ color: isWinner ? '#F8FAFC' : '#E2E8F0' }}
                title={team.team}
              >
                {team.team}
              </p>

              {team.members.length ? (
                <ul className="mt-3 space-y-1.5">
                  {team.members.map((member) => (
                    <li key={member} className="flex items-center gap-2">
                      <span
                        className="grid size-6 shrink-0 place-items-center rounded-full font-mono text-[9px] font-semibold"
                        style={{
                          background: `${style.accent}1f`,
                          border: `1px solid ${style.border}`,
                          color: style.accent,
                        }}
                      >
                        {initials(member)}
                      </span>
                      <span className="truncate text-xs" style={{ color: '#9ca3af' }} title={member}>
                        {member}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[10px]" style={{ color: '#4b5568' }}>
                  <Users className="size-3" />
                  Roster to be announced
                </p>
              )}
            </div>
          )
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.18em]" style={{ color: '#68738D' }}>
          No team matches “{query}”
        </p>
      ) : null}
    </div>
  )
}
