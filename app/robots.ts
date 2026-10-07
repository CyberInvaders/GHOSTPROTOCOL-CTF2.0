import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

/**
 * AI crawler policy: allow the search/citation bots that surface the event
 * inside AI answers, block the bulk training crawlers. Allow rules are stated
 * explicitly because several of these agents do not fall back to the `*` group.
 */
const aiSearchBots = [
  'OAI-SearchBot', // OpenAI — ChatGPT search results
  'ChatGPT-User', // OpenAI — live user-triggered fetches
  'PerplexityBot', // Perplexity — search index & citations
  'Perplexity-User', // Perplexity — user-triggered fetches
  'ClaudeBot', // Anthropic — retrieval for Claude
  'Claude-User', // Anthropic — user-triggered fetches
  'Google-Extended', // Google — Gemini grounding and Vertex AI retrieval
]

const aiTrainingBots = [
  'GPTBot', // OpenAI — model training
  'CCBot', // Common Crawl — training corpus
  'Bytespider', // ByteDance — training
  'Amazonbot', // Amazon — training
  'Meta-ExternalAgent', // Meta — training
  'FacebookBot', // Meta — training
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...aiSearchBots.map((userAgent) => ({ userAgent, allow: '/' as const })),
      ...aiTrainingBots.map((userAgent) => ({ userAgent, disallow: '/' as const })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}