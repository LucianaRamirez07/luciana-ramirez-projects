import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Explora nuestras categorías: regalos empresariales, productos publicitarios, kits escolares, dotaciones y más.',
}

const categories = [
  {
    slug: 'regalos-empresariales',
    label: 'Regalos Empresariales',
    description: 'Detalles corporativos que refuerzan tu marca en cada ocasión especial.',
    img: 'https://comercialmoderna.com/wp-content/uploads/2026/01/Image_202601211510-1-572x1024.jpeg',
  },
  {
    slug: 'productos-publicitarios',
    label: 'Productos Publicitarios',
    description: 'Artículos con tu logo para eventos, ferias y campañas de marca.',
    img: '/Producto Publicitario.PNG',
  },
  {
    slug: 'kits-escolares',
    label: 'Kits Escolares',
    description: 'Paquetes completos de útiles escolares para fundaciones e instituciones.',
    img: '/Kits escolares.PNG',
  },
  {
    slug: 'dotaciones-empresariales',
    label: 'Dotaciones Empresariales',
    description: 'Uniformes y ropa corporativa con tu identidad visual.',
    img: '/dotaciones.PNG',
  },
  {
    slug: 'desarrollo-de-producto',
    label: 'Desarrollo de Producto',
    description: 'Creamos productos a medida desde cero según tu idea y necesidad.',
    img: '/Desarollo de producto.jpg',
  },
  {
    slug: 'litografia',
    label: 'Litografía',
    description: 'Impresión de alta calidad: folletos, catálogos, etiquetas y más.',
    img: '/Litografia.PNG',
  },
]

export default function CatalogoPage() {
  return (
    <div className="pt-36 pb-24 px-4 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <p className="text-[10px] tracking-[4px] uppercase text-primary font-inter font-semibold mb-4">
          Catálogo
        </p>
        <h1 className="font-fustat font-extrabold text-4xl sm:text-5xl text-dark leading-tight mb-4">
          ¿Qué necesitas para tu empresa?
        </h1>
        <p className="text-muted font-inter text-lg leading-relaxed">
          Selecciona una categoría y te mostramos los productos disponibles. Si no encuentras lo que buscas, cuéntanos tu idea.
        </p>
      </div>

      {/* Grid de categorías */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/catalogo/${cat.slug}`}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] flex flex-col justify-end"
          >
            <Image
              src={cat.img}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
            <div className="relative z-10 p-6">
              <h2 className="font-fustat font-extrabold text-xl text-white leading-tight mb-1">
                {cat.label}
              </h2>
              <p className="font-inter text-sm text-white/65 leading-snug mb-4">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-inter font-semibold text-primary uppercase tracking-widest group-hover:gap-3 transition-all">
                Ver productos →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA final */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
        <p className="font-fustat font-bold text-xl text-dark">¿No encuentras lo que buscas?</p>
        <p className="mt-2 text-muted font-inter">Conseguimos cualquier producto. Cuéntanos tu idea.</p>
        <a
          href={'https://wa.me/573005544573?text=' + encodeURIComponent('Hola, busco un producto específico que no encontré en el catálogo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-3 hover:bg-primary/90 transition-all"
        >
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  )
}
