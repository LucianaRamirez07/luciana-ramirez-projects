import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.comercialmoderna.com'
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/catalogo`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/portafolio`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/proceso`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/nosotros`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/cotizar`, lastModified: new Date(), priority: 0.9 },
  ]
}
