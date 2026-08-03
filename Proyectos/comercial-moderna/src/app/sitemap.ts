import { MetadataRoute } from 'next'
import { categoryMeta } from '@/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.comercialmoderna.com'
  const categoryUrls = Object.keys(categoryMeta).map((slug) => ({
    url: `${base}/catalogo/${slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }))
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/catalogo`, lastModified: new Date(), priority: 0.9 },
    ...categoryUrls,
    { url: `${base}/portafolio`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/proceso`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/nosotros`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/cotizar`, lastModified: new Date(), priority: 0.9 },
  ]
}
