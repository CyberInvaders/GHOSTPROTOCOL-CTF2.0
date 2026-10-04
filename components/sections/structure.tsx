'use client'

import { motion, useReducedMotion } from 'motion/react'
import {
  Globe,
  Building2,
  Compass,
  UserPlus,
  MessageCircle,
  CheckCircle2,
  Flag,
  Award,
  Swords,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Terminal,
  Activity,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const phase1Highlights = [
  '17 Oct · Remote pan-India live participation',
  'Jeopardy-style challenge format across 10 domains',
  'Live dynamic flag scoring & leaderboard',
  'Top qualifying squads advance to NIET finale',
]

const phase2Highlights = [
  '24 Oct · Hosted on-ground at NIET Greater Noida campus',
  'Jeopardy-only format: 12-hour on-ground finale',
  '12-hour continuous war-room showdown',
  'Up to ₹51,000 prize pool, trophies & national acclaim',
]

const pipelineSteps = [
  {
    num: '01',
    code: 'INIT.01',
    phaseTag: 'Phase 1 · Prep',
    icon: Compass,
    title: 'Discover Event',
    desc: 'Explore the tournament format, 10 challenge categories, scoring dynamics and the up to ₹51,000 prize stakes.',
    accent: '#5e17eb',
    glow: 'rgba(94, 23, 235, 0.35)',
  },
  {
    num: '02',
    code: 'AUTH.02',
    phaseTag: 'Phase 1 · Entry',
    icon: UserPlus,
    title: 'Register Squad',
    desc: 'Assemble your team of up to 3 cybersecurity gladiators, submit verification credentials and lock in your slot.',
    accent: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.35)',
  },
  {
    num: '03',
    code: 'COMM.03',
    phaseTag: 'Phase 1 · Comms',
    icon: MessageCircle,
    title: 'Join Ops Channel',
    desc: 'Connect to the official WhatsApp broadcast for real-time challenge drops, hints, rule updates and live telemetry.',
    accent: '#5e17eb',
    glow: 'rgba(94, 23, 235, 0.35)',
  },
  {
    num: '04',
    code: 'BATTLE.04',
    phaseTag: 'Phase 1 · Battle',
    icon: Globe,
    title: 'Online Qualification',
    desc: 'Engage in a 24-hour remote Jeopardy CTF. Breach challenges, exploit systems, submit flags and scale the leaderboard.',
    accent: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.35)',
  },
  {
    num: '05',
    code: 'SELECT.05',
    phaseTag: 'Phase 2 · Selection',
    icon: CheckCircle2,
    title: 'Finalist Shortlist',
    desc: 'Top-tier squads receive official qualification clearances, NIET campus passes and finale briefings.',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.35)',
  },
  {
    num: '06',
    code: 'ARENA.06',
    phaseTag: 'Phase 2 · Warfare',
    icon: Swords,
    title: 'On-Campus Showdown',
    desc: '12-hour continuous cyber combat at NIET Greater Noida featuring high-complexity Jeopardy challenges.',
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.35)',
  },
  {
    num: '07',
    code: 'VICTORY.07',
    phaseTag: 'Phase 2 · Podium',
    icon: Award,
    title: 'Championship Podium',
    desc: 'Win recognition, claim your share of the up to ₹51,000 cash pool, prestige trophies, certificates and industry acclaim.',
    accent: '#e83e8c',
    glow: 'rgba(232, 62, 140, 0.4)',
  },
]

/* ── Serpentine (S-shaped) path layout, desktop only ──────────────────────
   The seven stages snake through a 3-column grid:
     01 → 02 → 03
                ↓
     06 ← 05 ← 04
     ↓
     07 —─────────────────────  (finale spans the full width)
   Columns: card · 4rem link · card · 4rem link · card
   Rows:    cards at 1/3/5, the two turns live in the 3.5rem rows 2 and 4. */
const snakeCells = [
  { col: 1, row: 1 },
  { col: 3, row: 1 },
  { col: 5, row: 1 },
  { col: 5, row: 3 },
  { col: 3, row: 3 },
  { col: 1, row: 3 },
  { col: '1 / -1', row: 5 },
]

const flowLinks = [
  { kind: 'h', col: 2, row: 1, from: 0, to: 1, dir: 'l2r' },
  { kind: 'h', col: 4, row: 1, from: 1, to: 2, dir: 'l2r' },
  { kind: 'h', col: 4, row: 3, from: 3, to: 4, dir: 'r2l' },
  { kind: 'h', col: 2, row: 3, from: 4, to: 5, dir: 'r2l' },
  { kind: 'v', col: 5, row: 2, from: 2, to: 3 },
  { kind: 'v', col: 1, row: 4, from: 5, to: 6 },
] as const

function FlowArrowH({ from, to, dir }: { from: string; to: string; dir: 'l2r' | 'r2l' }) {
  return (
    <>
      <div
        className="h-1 flex-1 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${from}, ${to})`,
          boxShadow: `0 0 12px ${to}55`,
          marginRight: dir === 'l2r' ? '0.85rem' : 0,
          marginLeft: dir === 'r2l' ? '0.85rem' : 0,
        }}
      />
      {dir === 'l2r' ? (
        <span
          className="absolute right-0 top-1/2 size-0 -translate-y-1/2"
          style={{
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: `13px solid ${to}`,
          }}
        />
      ) : (
        <span
          className="absolute left-0 top-1/2 size-0 -translate-y-1/2"
          style={{
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderRight: `13px solid ${to}`,
          }}
        />
      )}
    </>
  )
}

function FlowArrowV({ from, to }: { from: string; to: string }) {
  return (
    <>
      <div
        className="w-1 flex-1 rounded-full"
        style={{
          background: `linear-gradient(180deg, ${from}, ${to})`,
          boxShadow: `0 0 12px ${to}55`,
          marginBottom: '0.85rem',
        }}
      />
      <span
        className="absolute bottom-0 left-1/2 size-0 -translate-x-1/2"
        style={{
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: `13px solid ${to}`,
        }}
      />
    </>
  )
}

export function Structure() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="timeline"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        borderBottom: '1px solid rgba(94, 23, 235, 0.18)',
      }}
    >
      {/* Anchor for backward compatibility with #structure */}
      <span id="structure" className="absolute -top-24" aria-hidden="true" />

      {/* Cyber Circuit Mesh Background */}
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050816] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-48 top-1/4 size-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #5e17eb 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 top-2/3 size-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #e83e8c 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Tournament Protocol · Structure & Timeline"
          title="Beyond theory. Into real-world cyber operations."
          description="Ghost Protocol CTF 2.0 is engineered as a two-phase cyber tournament bridging classroom fundamentals to live offensive and defensive operations. Track the full pipeline from your first registration to the championship podium."
        />

        {/* ── 2 Main Phase Battleground Overview Cards ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ── Phase 1: Online Qualification Card ── */}
          <Reveal y={24} className="h-full">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 glass-strong transition-all duration-300 hover:shadow-[0_0_35px_rgba(94,23,235,0.28)] group"
              style={{
                background: 'linear-gradient(180deg, #0D1425 0%, #090E1C 100%)',
                border: '1px solid rgba(94, 23, 235, 0.28)',
              }}
            >
              {/* Top Cyber Laser Line */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #5e17eb 0%, #a78bfa 50%, transparent 100%)',
                }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid size-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: 'rgba(94, 23, 235, 0.18)',
                        border: '1px solid rgba(94, 23, 235, 0.45)',
                        boxShadow: '0 0 16px rgba(94, 23, 235, 0.25)',
                      }}
                    >
                      <Globe className="size-6 text-[#a78bfa]" />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a78bfa] flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-[#a78bfa] animate-ping" />
                        Phase 01
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        Online Qualification
                      </h3>
                    </div>
                  </div>

                  <span
                    className="hidden shrink-0 whitespace-nowrap sm:inline-flex rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#a78bfa]"
                    style={{
                      background: 'rgba(94, 23, 235, 0.12)',
                      border: '1px solid rgba(94, 23, 235, 0.3)',
                    }}
                  >
                    Remote Jeopardy
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#9ca3af]">
                  Compete remotely across India in a Jeopardy-style CTF across 10 challenge domains. Score flags on the dynamic leaderboard to qualify for the on-campus showdown.
                </p>

                {/* Tech Pills Bar */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    📅 17 October
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    ⚔️ 10 Domains
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    📡 Pan-India Remote
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    🧩 Open for All Branches
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    ⏱️ Dynamic Scoring
                  </span>
                </div>

                <div
                  className="my-5 h-px w-full"
                  style={{ background: 'rgba(94, 23, 235, 0.18)' }}
                />

                {/* Points List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  {phase1Highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#5e17eb] shadow-[0_0_6px_#5e17eb]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Indicator */}
              <div
                className="mt-6 flex items-center justify-between pt-4 border-t border-[rgba(94,23,235,0.15)] text-xs font-mono"
                style={{ color: '#68738D' }}
              >
                <span className="text-[#a78bfa]">Milestones 01 → 04</span>
                <span className="flex items-center gap-1 text-white font-medium">
                  Pipeline Step 1–4 <ArrowRight className="size-3 text-[#a78bfa]" />
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Phase 2: Offline Grand Finale Card ── */}
          <Reveal y={24} delay={0.08} className="h-full">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 glass-strong transition-all duration-300 hover:shadow-[0_0_35px_rgba(232,62,140,0.28)] group"
              style={{
                background: 'linear-gradient(180deg, #0D1425 0%, #090E1C 100%)',
                border: '1px solid rgba(232, 62, 140, 0.28)',
              }}
            >
              {/* Top Cyber Laser Line */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #e83e8c 0%, #ff5500 50%, transparent 100%)',
                }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid size-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: 'rgba(232, 62, 140, 0.18)',
                        border: '1px solid rgba(232, 62, 140, 0.45)',
                        boxShadow: '0 0 16px rgba(232, 62, 140, 0.25)',
                      }}
                    >
                      <Building2 className="size-6 text-[#e83e8c]" />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e83e8c] flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-[#e83e8c] animate-ping" />
                        Phase 02
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        Offline Grand Finale
                      </h3>
                    </div>
                  </div>

                  <span
                    className="hidden shrink-0 whitespace-nowrap sm:inline-flex rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#e83e8c]"
                    style={{
                      background: 'rgba(232, 62, 140, 0.12)',
                      border: '1px solid rgba(232, 62, 140, 0.3)',
                    }}
                  >
                    NIET Campus Arena
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#9ca3af]">
                  Qualifying squads assemble on-ground at NIET Greater Noida for an intense 12-hour showdown featuring high-complexity Jeopardy challenges.
                </p>

                {/* Tech Pills Bar */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    📅 24 October
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    🏛️ NIET Greater Noida
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    ⏱️ 12-Hour Finale
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    🏆 Up to ₹51,000 Rewards
                  </span>
                </div>

                <div
                  className="my-5 h-px w-full"
                  style={{ background: 'rgba(232, 62, 140, 0.18)' }}
                />

                {/* Points List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  {phase2Highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#e83e8c] shadow-[0_0_6px_#e83e8c]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Indicator */}
              <div
                className="mt-6 flex items-center justify-between pt-4 border-t border-[rgba(232,62,140,0.15)] text-xs font-mono"
                style={{ color: '#68738D' }}
              >
                <span className="text-[#e83e8c]">Milestones 05 → 07</span>
                <span className="flex items-center gap-1 text-white font-medium">
                  Championship Stage <ArrowRight className="size-3 text-[#e83e8c]" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Visual Section Divider with Energy Beam ── */}
        <div className="relative my-16 flex items-center justify-center">
          <div
            className="h-px w-full"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(94,23,235,0.4) 30%, rgba(232,62,140,0.4) 70%, transparent 100%)',
            }}
          />
          <div className="absolute flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#a78bfa] backdrop-blur-md"
            style={{
              background: 'rgba(13, 20, 37, 0.95)',
              border: '1px solid rgba(94, 23, 235, 0.35)',
              boxShadow: '0 0 20px rgba(94, 23, 235, 0.3)',
            }}
          >
            <Activity className="size-3.5 text-[#a78bfa] animate-pulse" />
            <span>Tactical Execution Pipeline (01 → 07)</span>
          </div>
        </div>

        {/* ── Tactical Execution Pipeline — a connected path from 01 → 07 ── */}
        <div className="relative mt-2">
          {/* The path rail: one continuous line that every node sits on.
              Its gradient mirrors the journey — Phase 1 purples into the
              sky-blue handoff, warms through the orange war-room and ends
              on the pink podium. */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[21px] w-0.5 lg:hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(94,23,235,0.7) 0%, rgba(124,58,237,0.6) 26%, rgba(56,189,248,0.6) 52%, rgba(249,115,22,0.65) 76%, rgba(232,62,140,0.75) 100%)',
            }}
          >
            {!reduceMotion && (
              <motion.div
                className="absolute left-1/2 h-24 w-[3px] -translate-x-1/2 rounded-full"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(248,250,252,0.9) 50%, transparent 100%)',
                  boxShadow: '0 0 14px rgba(167, 139, 250, 0.9)',
                }}
                animate={{ top: ['-8%', '104%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </div>

          <div className="space-y-6 sm:space-y-8 lg:grid lg:grid-cols-[1fr_4rem_1fr_4rem_1fr] lg:grid-rows-[auto_3.5rem_auto_3.5rem_auto] lg:space-y-0">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon
              const badgeRight = idx >= 3 && idx <= 5
              return (
                <div
                  key={step.num}
                  className="relative"
                  style={{ gridColumn: snakeCells[idx].col, gridRow: snakeCells[idx].row }}
                >
                  {/* Phase handoff marker: the one point where the path leaves
                      the remote qualifier and steps onto NIET ground. */}
                  {idx === 4 && (
                    <div className="relative z-10 mb-6 ml-11 w-fit sm:mb-8 lg:hidden">
                      <span
                        className="rounded-full px-3.5 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md"
                        style={{
                          background: 'rgba(13, 20, 37, 0.95)',
                          border: '1px solid rgba(56, 189, 248, 0.45)',
                          color: '#38bdf8',
                          boxShadow: '0 0 18px rgba(56, 189, 248, 0.25)',
                        }}
                      >
                        Phase 01 → Phase 02 · Finalists only
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 sm:gap-5 lg:items-stretch lg:gap-0">
                    {/* Node — centred on the card's entry corner on desktop */}
                    <div
                      className={`relative z-20 shrink-0 lg:absolute lg:-top-6 lg:m-0 ${
                        badgeRight ? 'lg:-right-6 lg:left-auto' : 'lg:-left-6'
                      }`}
                    >
                      <div
                        className="relative grid size-11 place-items-center rounded-full transition-transform duration-300 hover:scale-110 lg:size-12"
                        style={{
                          background: '#0D1425',
                          border: `2px solid ${step.accent}`,
                          boxShadow: `0 0 0 4px #0D1425, 0 0 20px ${step.glow}`,
                        }}
                      >
                        <Icon className="size-[18px]" style={{ color: step.accent }} />
                        <span
                          className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full font-mono text-[9px] font-bold text-white"
                          style={{ background: step.accent, boxShadow: `0 0 10px ${step.glow}` }}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>

                    {/* Step card */}
                    <Reveal y={18} delay={idx * 0.04} className="min-w-0 flex-1">
                      <div
                        className="group relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6"
                        style={{
                          background: '#0D1425',
                          border: `1px solid ${step.accent}30`,
                          boxShadow: `0 4px 24px -10px ${step.glow}`,
                        }}
                      >
                        {/* Accent spine on the edge nearest the path */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-y-0 left-0 w-0.5"
                          style={{
                            background: `linear-gradient(180deg, ${step.accent} 0%, transparent 100%)`,
                          }}
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(70% 90% at 12% 0%, ${step.accent}14 0%, transparent 70%)`,
                          }}
                        />

                        <div className={idx === 6 ? 'lg:flex lg:h-full lg:items-center lg:justify-between lg:gap-10' : undefined}>
                          <div className={idx === 6 ? 'lg:max-w-2xl' : undefined}>
                            <div className="flex items-center justify-between gap-3">
                              <span
                                className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                                style={{ color: step.accent }}
                              >
                                {step.phaseTag}
                              </span>
                              <span className="font-mono text-[10px] text-[#68738D]">{step.code}</span>
                            </div>
                            <h4 className="mt-2.5 font-display text-lg font-bold text-white sm:text-xl">
                              {step.title}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">{step.desc}</p>
                          </div>
                          {idx === 6 && (
                            <div className="mt-5 flex flex-wrap gap-2 lg:mt-0 lg:shrink-0">
                              {['Up to ₹51,000 Cash Pool', 'Trophies & Certificates', 'National Acclaim'].map(
                                (chip) => (
                                  <span
                                    key={chip}
                                    className="rounded-lg px-3 py-1.5 font-mono text-[11px] font-semibold"
                                    style={{
                                      background: 'rgba(232, 62, 140, 0.12)',
                                      border: '1px solid rgba(232, 62, 140, 0.35)',
                                      color: '#f9a8d4',
                                    }}
                                  >
                                    {chip}
                                  </span>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              )
            })}

            {/* Phase handoff marker sitting in the snake's middle gap (desktop) */}
            <div
              aria-hidden="true"
              className="hidden lg:col-start-3 lg:row-start-2 lg:flex lg:items-center lg:justify-center lg:gap-4"
            >
              <span
                aria-hidden="true"
                className="hidden w-10 border-t border-dashed lg:block"
                style={{ borderColor: 'rgba(56, 189, 248, 0.45)' }}
              />
              <span
                className="rounded-full px-3.5 py-1.5 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md"
                style={{
                  background: 'rgba(13, 20, 37, 0.95)',
                  border: '1px solid rgba(56, 189, 248, 0.45)',
                  color: '#38bdf8',
                  boxShadow: '0 0 18px rgba(56, 189, 248, 0.25)',
                }}
              >
                Phase 01 → Phase 02
              </span>
              <span
                aria-hidden="true"
                className="hidden w-10 border-t border-dashed lg:block"
                style={{ borderColor: 'rgba(56, 189, 248, 0.45)' }}
              />
            </div>

            {/* Flow arrows stitching the snake together (desktop) */}
            {flowLinks.map((link) => (
              <div
                key={`${link.kind}-${link.row}-${link.col}`}
                aria-hidden="true"
                className={`relative hidden lg:flex ${
                  link.kind === 'h' ? 'items-center' : 'lg:flex-col lg:items-center'
                }`}
                style={{ gridColumn: link.col, gridRow: link.row }}
              >
                {link.kind === 'h' ? (
                  <FlowArrowH
                    from={pipelineSteps[link.from].accent}
                    to={pipelineSteps[link.to].accent}
                    dir={link.dir}
                  />
                ) : (
                  <FlowArrowV
                    from={pipelineSteps[link.from].accent}
                    to={pipelineSteps[link.to].accent}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
