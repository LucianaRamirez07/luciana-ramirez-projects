import { FilterState } from '@/types'

const categoryLabels: Record<string, string> = {
  tecnologia: 'Tecnología',
  'oficina-papeleria': 'Oficina y Papelería',
  'hogar-estilo-vida': 'Hogar',
  'exteriores-accesorios': 'Exteriores',
  'logistica-embalaje': 'Logística',
}

const tipoLabels: Record<string, string> = {
  'regalos-empresariales': 'Regalos Empresariales',
  'productos-publicitarios': 'Prod. Publicitarios',
  'kits-escolares': 'Kits Escolares',
}

interface FilterChipsProps {
  filter: FilterState
  onChange: (filter: FilterState) => void
  count: number
}

export function FilterChips({ filter, onChange, count }: FilterChipsProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm text-muted font-inter">{count} productos</span>

      {filter.categoria !== 'todos' && (
        <button
          onClick={() => onChange({ ...filter, categoria: 'todos' })}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-inter hover:bg-primary/20 transition-colors"
        >
          {categoryLabels[filter.categoria]}
          <span aria-hidden>×</span>
        </button>
      )}

      {filter.tipo !== 'todos' && (
        <button
          onClick={() => onChange({ ...filter, tipo: 'todos' })}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-inter hover:bg-secondary/20 transition-colors"
        >
          {tipoLabels[filter.tipo]}
          <span aria-hidden>×</span>
        </button>
      )}
    </div>
  )
}
