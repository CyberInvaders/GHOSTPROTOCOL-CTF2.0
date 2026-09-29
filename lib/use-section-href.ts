'use client'

import { usePathname } from 'next/navigation'

/**
 * Resolves homepage section anchors so they keep working from every route.
 *
 * `#team` only means anything on `/`. On a sub-page (e.g. /glimpses) the same
 * anchor has to be written `/#team`, otherwise it just fails to match anything
 * and the browser silently does nothing. Real paths (starting with `/`) are
 * already route-absolute and pass through untouched.
 */
export function useSectionHref() {
  const pathname = usePathname()

  return (href: string) => {
    if (!href.startsWith('#')) return href
    return pathname === '/' ? href : `/${href}`
  }
}
