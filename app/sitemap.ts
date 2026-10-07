import type { MetadataRoute } from 'next'
import { siteConfig, staticRoutes, routeLastModified } from '@/lib/site'
import { pagedCategories } from '@/lib/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: routeLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const categoryEntries: MetadataRoute.Sitemap = pagedCategories.map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: routeLastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...categoryEntries]
}