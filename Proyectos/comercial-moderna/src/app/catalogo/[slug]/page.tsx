import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import { categoryMeta } from '@/data/categories'
import type { ProductTipo } from '@/types'

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
    alternates: { canonical: `/catalogo/${slug}` },
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

  const faqSchema = meta.faqs && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: meta.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <div className="pt-44 pb-24 px-4 max-w-7xl mx-auto">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
        {meta.intro && (
          <p className="mt-4 text-muted font-inter text-base leading-relaxed">{meta.intro}</p>
        )}
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

      {/* FAQ */}
      {meta.faqs && (
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="font-fustat font-extrabold text-2xl sm:text-3xl text-dark mb-8 text-center">Preguntas frecuentes</h2>
          <div className="divide-y divide-gray-100">
            {meta.faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <h3 className="font-fustat font-bold text-base text-dark mb-1">{faq.question}</h3>
                <p className="text-muted font-inter text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
