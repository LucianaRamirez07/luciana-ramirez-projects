import { Suspense } from 'react'
import type { Metadata } from 'next'
import { ProductGrid } from '@/components/catalog/ProductGrid'

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Catálogo de productos publicitarios y regalos empresariales personalizados. Tecnología, oficina, hogar, exteriores y más.',
}

export default function CatalogoPage() {
  const waUrl = 'https://wa.me/573005544573?text=' + encodeURIComponent('Hola, busco un producto específico que no encontré en el catálogo.')

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Nuestro Catálogo</h1>
        <p className="mt-3 text-muted font-inter text-lg max-w-xl">
          Una muestra de lo que podemos hacer — si no lo ves aquí, pregúntanos.
        </p>
        <a
          href="/catalogo-comercial-moderna.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 border border-dark/20 text-dark font-inter text-sm px-5 py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors"
        >
          ↓ Descargar Catálogo PDF
        </a>
      </div>

      <Suspense fallback={<div className="text-muted font-inter py-8">Cargando...</div>}>
        <ProductGrid />
      </Suspense>

      <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
        <p className="font-fustat font-bold text-xl text-dark">¿No encuentras lo que buscas?</p>
        <p className="mt-2 text-muted font-inter">Conseguimos cualquier producto. Cuéntanos tu idea.</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-7 py-3 rounded-full hover:bg-primary/90 transition-all"
        >
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  )
}
