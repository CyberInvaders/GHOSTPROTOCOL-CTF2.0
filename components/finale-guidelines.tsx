import { ShieldCheck } from 'lucide-react'
import { finaleGuidelines } from '@/lib/finale'

export function FinaleGuidelines() {
  return (
    <div>
      <div
        className="mb-4 flex items-start gap-3 rounded-xl px-4 py-3.5"
        style={{
          background: 'rgba(94,23,235,0.08)',
          border: '1px solid rgba(94,23,235,0.20)',
        }}
      >
        <ShieldCheck
          className="mt-0.5 size-4 shrink-0"
          style={{ color: '#a78bfa' }}
          aria-hidden="true"
        />
        <p className="text-xs leading-relaxed" style={{ color: '#cbd5e1' }}>
          These rules apply to every participant on the finale floor. Violations may lead to a
          warning, score deduction, or disqualification.
        </p>
      </div>

      <ol className="grid gap-3 sm:grid-cols-2">
        {finaleGuidelines.map((rule, index) => (
          <li
            key={rule.title}
            className="flex gap-3 rounded-xl px-4 py-3.5"
            style={{
              background: '#0D1425',
              border: '1px solid rgba(148,163,184,0.09)',
            }}
          >
            <span
              className="font-mono text-[10px] font-semibold tabular-nums"
              style={{ color: '#a78bfa' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <p
                className="font-display text-sm font-semibold leading-snug"
                style={{ color: '#E2E8F0' }}
              >
                {rule.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed" style={{ color: '#9ca3af' }}>
                {rule.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
