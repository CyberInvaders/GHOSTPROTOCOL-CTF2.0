import { ImageResponse } from 'next/og'
import { siteConfig, schedule, eventFacts } from '@/lib/site'

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Social preview card. Every share of the registration link currently renders
 * as bare text; this gives WhatsApp, LinkedIn, X and Slack something to show.
 * Uses only inline styles and no remote font fetch, so it renders identically
 * at build time and on a cold serverless invocation.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #050816 0%, #0D1425 55%, #1a0f3d 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #5e17eb 0%, #E83E8C 100%)',
          }}
        />

        {/* Faint grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(94,23,235,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(94,23,235,0.16) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 34,
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 8,
                border: '1px solid rgba(94,23,235,0.5)',
                background: 'rgba(94,23,235,0.16)',
                color: '#a78bfa',
                fontSize: 24,
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Student Cybersecurity Competition
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 82,
              fontWeight: 800,
              color: '#F8FAFC',
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            GHOST PROTOCOL CTF 2.0
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 22,
              fontSize: 40,
              color: '#a78bfa',
              letterSpacing: 6,
              textTransform: 'uppercase',
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', fontSize: 28, color: '#F8FAFC' }}>
              Online Qualifier · {schedule.onlineDateLabel} ·{' '}
              {eventFacts.onlineDurationHours} hours · Remote
            </div>
            <div style={{ display: 'flex', fontSize: 28, color: '#F8FAFC' }}>
              Grand Finale · {schedule.finaleDateLabel} ·{' '}
              {eventFacts.finaleDurationHours} hours · NIET Greater Noida
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                borderRadius: 8,
                background: '#5e17eb',
                color: '#ffffff',
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              {eventFacts.feeLabel} Entry
            </div>
            <div style={{ display: 'flex', fontSize: 24, color: '#9ca3af' }}>
              {eventFacts.prizePoolLabel} in prizes
            </div>
            <div style={{ display: 'flex', fontSize: 22, color: '#68738D' }}>
              {siteConfig.organizer} · {siteConfig.institution}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}