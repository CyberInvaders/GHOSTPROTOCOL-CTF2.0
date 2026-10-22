import { CalendarDays, MapPin } from 'lucide-react'
import { finaleTimeline, type TimelineTone } from '@/lib/finale'
import { schedule, venue } from '@/lib/site'

const toneColors: Record<TimelineTone, string> = {
  default: '#a78bfa',
  start: '#22c55e',
  break: '#fbbf24',
  end: '#E83E8C',
}

export function FinaleTimeline() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-4 sm:p-6"
      style={{
        background: '#080D1A',
        border: '1px solid rgba(148,163,184,0.12)',
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
        <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9ca3af]">
          <CalendarDays className="size-3.5" style={{ color: '#a78bfa' }} aria-hidden="true" />
          {schedule.finaleDateLabel}
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9ca3af]">
          <MapPin className="size-3.5" style={{ color: '#a78bfa' }} aria-hidden="true" />
          {venue.name}
        </p>
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#68738D]">
          All times IST
        </p>
      </div>

      <ol className="mt-6">
        {finaleTimeline.map((item, index) => {
          const tone = item.tone ?? 'default'
          const accent = toneColors[tone]
          const last = index === finaleTimeline.length - 1

          return (
            <li
              key={`${item.time}-${item.activity}`}
              className="grid grid-cols-[6.25rem_1fr] gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-3"
            >
              <span
                className="pt-3 text-right font-mono text-[10px] font-medium tabular-nums sm:text-[11px]"
                style={{ color: accent }}
              >
                {item.time}
              </span>

              <div
                className={`relative border-l pl-4 sm:pl-5 ${last ? 'pb-0' : 'pb-2.5'}`}
                style={{ borderColor: 'rgba(148,163,184,0.14)' }}
              >
                <span
                  className="absolute -left-[3.5px] top-[0.95rem] size-1.5 rounded-full"
                  style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                  aria-hidden="true"
                />
                <div
                  className="rounded-xl px-3.5 py-3"
                  style={{
                    background: tone === 'default' ? 'rgba(255,255,255,0.02)' : `${accent}08`,
                    border: `1px solid ${tone === 'default' ? 'rgba(148,163,184,0.08)' : `${accent}24`}`,
                  }}
                >
                  <p
                    className="font-sans text-sm font-medium leading-snug"
                    style={{ color: '#E2E8F0' }}
                  >
                    {item.activity}
                  </p>
                  {item.note ? (
                    <p
                      className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em]"
                      style={{ color: '#7C879D' }}
                    >
                      {item.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
