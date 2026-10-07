/** @type {import('next').NextConfig} */

// Content-Security-Policy is intentionally absent: the page embeds a Google
// Maps iframe and loads fonts through next/font, so a strict policy needs
// frame-src and style-src entries tuned per environment. Everything below is
// safe to ship without that.
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimizer on: every asset ships as WebP already, so the negotiator only
    // needs to serve WebP and hand back responsive srcset widths.
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [420, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [60, 75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // The machine-readable description of the event for AI assistants.
        source: '/llms.txt',
        headers: [{ key: 'X-Robots-Tag', value: 'all' }],
      },
      {
        source: '/llms-full.txt',
        headers: [{ key: 'X-Robots-Tag', value: 'all' }],
      },
    ]
  },
}

export default nextConfig