import type { NextConfig } from 'next'

// Imágenes y video estáticos: el navegador los guarda 7 días en vez de volver a preguntar al servidor en cada visita.
// Los catálogos (.html) no se incluyen aquí, así que sus cambios se ven enseguida.
const CACHE_MEDIOS = 'public, max-age=604800, stale-while-revalidate=86400'
const rutasMedios = [
  '/catalogo-assets/:path*',
  '/temporada/:path*',
  '/clients/:path*',
  '/work/:path*',
  '/portfolio/:path*',
  '/products/:path*',
  '/hero-bg.mp4',
  '/hero-poster.jpg',
  '/logo.png',
  '/logo-192.png',
]

// Direcciones viejas que Google todavía rastrea y hoy dan 404 (aparecen en Search Console):
// se mandan de forma permanente a la página equivalente para no perder esa señal.
const redireccionesViejas = [
  { source: '/regalos-empresariales', destination: '/catalogo/regalos-empresariales' },
  { source: '/catalogo-variedades', destination: '/catalogo' },
  { source: '/catalogoLitografía', destination: '/catalogo/litografia' },
  { source: '/catalogoLitograf%C3%ADa', destination: '/catalogo/litografia' },
]

const nextConfig: NextConfig = {
  async redirects() {
    return redireccionesViejas.map((r) => ({ ...r, permanent: true }))
  },
  async headers() {
    return rutasMedios.map((source) => ({
      source,
      headers: [{ key: 'Cache-Control', value: CACHE_MEDIOS }],
    }))
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
