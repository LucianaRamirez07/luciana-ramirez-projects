import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import type { ProductTipo } from '@/types'

const categoryMeta: Record<string, { label: string; description: string; tipo?: string }> = {
  'regalos-empresariales': {
    label: 'Regalos Empresariales',
    description: 'Detalles corporativos que refuerzan tu marca en cada ocasión especial.',
    tipo: 'regalos-empresariales',
  },
  'productos-publicitarios': {
    label: 'Productos Publicitarios',
    description: 'Artículos con tu logo para eventos, ferias y campañas de marca.',
    tipo: 'productos-publicitarios',
  },
  'kits-escolares': {
    label: 'Kits Escolares',
    description: 'Paquetes completos de útiles escolares para fundaciones e instituciones.',
    tipo: 'kits-escolares',
  },
  'dotaciones-empresariales': {
    label: 'Dotaciones Empresariales',
    description: 'Uniformes y ropa corporativa con tu identidad visual.',
  },
  'desarrollo-de-producto': {
    label: 'Desarrollo de Producto',
    description: 'Creamos productos a medida desde cero según tu idea y necesidad.',
  },
  'litografia': {
    label: 'Litografía',
    description: 'Impresión de alta calidad: folletos, catálogos, etiquetas y más.',
  },
}

export async function generateStaticParams() {
  return Object.keys(categoryMeta).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = categoryMeta[slug]
  if (!meta) return {}
  return {
    title: meta.label,
    description: meta.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = categoryMeta[slug]
  if (!meta) notFound()

  const filtered = meta.tipo
    ? products.filter((p) => p.tipo.includes(meta.tipo as ProductTipo))
    : []

  const waUrl = 'https://wa.me/573005544573?text=' + encodeURIComponent(`Hola, me interesa cotizar productos de la categoría ${meta.label}.`)

  return (
    <div className="pt-44 pb-24 px-4 max-w-7xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-inter text-muted mb-10">
        <Link href="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link>
        <span>/</span>
        <span className="text-dark font-semibold">{meta.label}</span>
      </div>

      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <p className="text-[10px] tracking-[4px] uppercase text-primary font-inter font-semibold mb-4">
          {meta.label}
        </p>
        <h1 className="font-fustat font-extrabold text-4xl sm:text-5xl text-dark leading-tight mb-4">
          {meta.label}
        </h1>
        <p className="text-muted font-inter text-lg leading-relaxed">{meta.description}</p>
      </div>

      {/* Productos */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-fustat font-bold text-base text-dark leading-tight mb-1">{product.name}</h3>
                <p className="font-inter text-xs text-muted leading-snug">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border border-dashed border-gray-200 rounded-2xl">
          <p className="font-fustat font-bold text-xl text-dark mb-2">Próximamente</p>
          <p className="font-inter text-muted mb-8">Estamos preparando esta categoría. Escríbenos para más información.</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-3 hover:bg-primary/90 transition-all"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}

      {/* CTA */}
      {filtered.length > 0 && (
        <div className="mt-16 bg-dark rounded-2xl p-8 text-center">
          <p className="font-fustat font-bold text-xl text-white mb-2">¿Te interesa alguno de estos productos?</p>
          <p className="font-inter text-white/60 mb-6">Cuéntanos qué necesitas y te enviamos una cotización.</p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-3 hover:bg-primary/90 transition-all"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}
