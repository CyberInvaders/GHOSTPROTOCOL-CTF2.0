import type { Metadata } from 'next'
import { siteConfig, seoCopy } from './site'

type PageMetaInput = {
  title: string
  description: string
  /** Route path beginning with a slash; '' is the homepage. */
  path: string
  /** Defaults to `description`. */
  ogDescription?: string
}

/**
 * `app/opengraph-image.tsx` is prerendered to this stable route, so the social
 * card can be referenced directly. It is set explicitly rather than left to the
 * file convention because a page-level `openGraph` object replaces the inherited
 * one wholesale — which silently drops the auto-injected image tags.
 */
const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
}

/**
 * Builds a page's metadata block: canonical URL, Open Graph and Twitter card.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  ogDescription,
}: PageMetaInput): Metadata {
  const canonical = path === '' ? siteConfig.url : `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description: ogDescription ?? description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription ?? description,
      images: [socialImage],
    },
  }
}

export const defaultMetadata: Metadata = {
  title: seoCopy.defaultTitle,
  description: seoCopy.defaultDescription,
}