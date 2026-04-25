import Link from 'next/link'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

export function CatalogPreview() {
  const featured = products.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-dark">Muestra del catálogo</h2>
          <p className="mt-2 text-muted font-inter">Una fracción de lo que podemos hacer.</p>
        </div>
        <Link href="/catalogo" className="hidden sm:inline text-primary font-inter font-medium text-sm hover:text-primary/80 transition-colors">
          Ver todo →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} compact />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/catalogo"
          className="inline-flex items-center justify-center border-2 border-primary text-primary font-inter font-medium px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all"
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  )
}
