import { Product, FilterState } from '@/types'

export function filterProducts(products: Product[], filter: FilterState): Product[] {
  return products.filter((product) => {
    const categoryMatch = filter.categoria === 'todos' || product.category === filter.categoria
    const tipoMatch = filter.tipo === 'todos' || product.tipo.includes(filter.tipo)
    return categoryMatch && tipoMatch
  })
}
