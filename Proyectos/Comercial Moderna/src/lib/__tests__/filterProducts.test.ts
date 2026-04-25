import { describe, it, expect } from 'vitest'
import { filterProducts } from '../filterProducts'
import { products } from '@/data/products'

describe('filterProducts', () => {
  it('returns all products when no filter applied', () => {
    const result = filterProducts(products, { categoria: 'todos', tipo: 'todos' })
    expect(result).toHaveLength(products.length)
  })

  it('filters by category', () => {
    const result = filterProducts(products, { categoria: 'tecnologia', tipo: 'todos' })
    expect(result.every((p) => p.category === 'tecnologia')).toBe(true)
  })

  it('filters by tipo', () => {
    const result = filterProducts(products, { categoria: 'todos', tipo: 'kits-escolares' })
    expect(result.every((p) => p.tipo.includes('kits-escolares'))).toBe(true)
  })

  it('filters by both category and tipo', () => {
    const result = filterProducts(products, { categoria: 'oficina-papeleria', tipo: 'kits-escolares' })
    result.forEach((p) => {
      expect(p.category).toBe('oficina-papeleria')
      expect(p.tipo).toContain('kits-escolares')
    })
  })

  it('returns empty array when no products match', () => {
    const result = filterProducts(products, { categoria: 'tecnologia', tipo: 'kits-escolares' })
    expect(result).toHaveLength(0)
  })
})
