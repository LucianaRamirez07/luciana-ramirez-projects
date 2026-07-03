'use client'
import { cn } from '@/lib/utils'
import { FilterState, ProductCategory, ProductTipo } from '@/types'

const categories: { value: ProductCategory | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'tecnologia', label: 'Tecnología' },
  { value: 'oficina-papeleria', label: 'Oficina y Papelería' },
  { value: 'hogar-estilo-vida', label: 'Hogar y Estilo de Vida' },
  { value: 'exteriores-accesorios', label: 'Exteriores y Accesorios' },
  { value: 'logistica-embalaje', label: 'Logística y Embalaje' },
]

const tipos: { value: ProductTipo | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'regalos-empresariales', label: 'Regalos Empresariales' },
  { value: 'productos-publicitarios', label: 'Productos Publicitarios' },
  { value: 'kits-escolares', label: 'Kits Escolares' },
]

interface FilterSidebarProps {
  filter: FilterState
  onChange: (filter: FilterState) => void
}

export function FilterSidebar({ filter, onChange }: FilterSidebarProps) {
  return (
    <aside className="hidden md:block w-56 flex-shrink-0 sticky top-28 self-start">
      <div className="space-y-6">
        <div>
          <h3 className="font-fustat font-bold text-sm uppercase tracking-wider text-muted mb-3">Categoría</h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat.value}>
                <button
                  onClick={() => onChange({ ...filter, categoria: cat.value })}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-xl text-sm font-inter transition-colors',
                    filter.categoria === cat.value
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted hover:bg-gray-100 hover:text-dark'
                  )}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-fustat font-bold text-sm uppercase tracking-wider text-muted mb-3">Tipo</h3>
          <ul className="space-y-1">
            {tipos.map((t) => (
              <li key={t.value}>
                <button
                  onClick={() => onChange({ ...filter, tipo: t.value })}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-xl text-sm font-inter transition-colors',
                    filter.tipo === t.value
                      ? 'bg-secondary/10 text-secondary font-medium'
                      : 'text-muted hover:bg-gray-100 hover:text-dark'
                  )}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
