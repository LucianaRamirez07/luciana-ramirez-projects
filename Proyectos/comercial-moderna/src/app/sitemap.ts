import { MetadataRoute } from 'next'
import { categoryMeta } from '@/data/categories'
import { guias } from '@/data/guias'

// Sin `lastModified` en las páginas normales: antes todas llevaban la fecha de
// cada despliegue, que no dice cuándo cambió el contenido, y Google ignora una
// fecha que no es fiable. Los catálogos son archivos con fecha real de edición.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.comercialmoderna.com'
  const categoryUrls = Object.keys(categoryMeta).map((slug) => ({
    url: `${base}/catalogo/${slug}`,
    priority: 0.8,
  }))
  const catalogos = [
    { archivo: 'catalogo-virtual.html', fecha: '2026-10-22' },
    { archivo: 'catalogo-navidad.html', fecha: '2026-10-30' },
    { archivo: 'catalogo-dotaciones.html', fecha: '2026-10-22' },
    { archivo: 'catalogo-halloween.html', fecha: '2026-10-22' },
  ].map(({ archivo, fecha }) => ({
    url: `${base}/${archivo}`,
    lastModified: fecha,
    priority: 0.7,
  }))
  const guiasUrls = guias.map((g) => ({
    url: `${base}/guias/${g.slug}`,
    lastModified: g.actualizada,
    priority: 0.7,
  }))
  return [
    { url: base, priority: 1.0 },
    { url: `${base}/catalogo`, priority: 0.9 },
    ...categoryUrls,
    ...catalogos,
    { url: `${base}/guias`, priority: 0.7 },
    ...guiasUrls,
    { url: `${base}/portafolio`, priority: 0.7 },
    { url: `${base}/proceso`, priority: 0.6 },
    { url: `${base}/nosotros`, priority: 0.5 },
    { url: `${base}/cotizar`, priority: 0.9 },
  ]
}
