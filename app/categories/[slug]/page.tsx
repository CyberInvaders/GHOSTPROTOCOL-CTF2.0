import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CategoryPage } from '@/components/category-page'
import { SiteFooter } from '@/components/sections/site-footer'
import {
  BreadcrumbJsonLd,
  CategoryPageJsonLd,
  SubEventJsonLd,
} from '@/components/json-ld'
import { getCategory, pagedCategories } from '@/lib/categories'
import { buildPageMetadata } from '@/lib/seo'
import { schedule, eventFacts } from '@/lib/site'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return pagedCategories.map((category) => ({ slug: category.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)

  if (!category) {
    return { title: 'Category not found' }
  }

  const path = `/categories/${category.slug}`

  return {
    ...buildPageMetadata({
      title: category.seoTitle,
      description: category.seoDescription,
      path,
    }),
    keywords: category.keywords,
  }
}

export default async function CategoryRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const category = getCategory(slug)

  if (!category) {
    notFound()
  }

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: category.name, path: `/categories/${category.slug}` },
  ]

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <CategoryPageJsonLd
        name={category.name}
        description={category.seoDescription}
        slug={category.slug}
      />
      <SubEventJsonLd
        name="Online Qualification Round"
        description={`The remote ${eventFacts.onlineDurationHours}-hour qualifier covering ${category.name} among ${eventFacts.categoryCount} disciplines.`}
        start={schedule.onlineStart}
        end={schedule.onlineEnd}
      />
      <SubEventJsonLd
        name="On-Ground Grand Finale"
        description={`The ${eventFacts.finaleDurationHours}-hour on-ground finale at NIET Greater Noida, including high-complexity ${category.name} challenges.`}
        start={schedule.finaleStart}
        end={schedule.finaleEnd}
        physical
      />

      <CategoryPage category={category} />

      <SiteFooter />
    </>
  )
}