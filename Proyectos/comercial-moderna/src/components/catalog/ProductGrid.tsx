'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { products } from '@/data/products'
import { filterProducts } from '@/lib/filterProducts'
import { FilterState, ProductCategory, ProductTipo } from '@/types'
import { FilterSidebar } from './FilterSidebar'
import { FilterChips } from './FilterChips'
import { ProductCard } from '@/components/ui/ProductCard'

export function ProductGrid() {
  const searchParams = useSearchParams()
  const [filter, setFilter] = useState<FilterState>({ categoria: 'todos', tipo: 'todos' })

  useEffect(() => {
    const categoria = (searchParams.get('categoria') ?? 'todos') as ProductCategory | 'todos'
    const tipo = (searchParams.get('tipo') ?? 'todos') as ProductTipo | 'todos'
    setFilter({ categoria, tipo })
  }, [searchParams])

  const filtered = filterProducts(products, filter)

  return (
    <div className="flex gap-8">
      <FilterSidebar filter={filter} onChange={setFilter} />

      <div className="flex-1 min-w-0">
        <FilterChips filter={filter} onChange={setFilter} count={filtered.length} />

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted font-inter">No hay productos con estos filtros.</p>
            <button
              onClick={() => setFilter({ categoria: 'todos', tipo: 'todos' })}
              className="mt-4 text-primary font-inter text-sm hover:text-primary/80 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
