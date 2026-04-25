import { cn } from '@/lib/utils'
import { ProductCategory, ProductTipo } from '@/types'

const categoryLabels: Record<ProductCategory, string> = {
  'tecnologia': 'Tecnología',
  'oficina-papeleria': 'Oficina y Papelería',
  'hogar-estilo-vida': 'Hogar',
  'exteriores-accesorios': 'Exteriores',
  'logistica-embalaje': 'Logística',
}

const tipoLabels: Record<ProductTipo, string> = {
  'regalos-empresariales': 'Regalos Empresariales',
  'productos-publicitarios': 'Prod. Publicitarios',
  'kits-escolares': 'Kits Escolares',
}

interface BadgeProps {
  category?: ProductCategory
  tipo?: ProductTipo
  label?: string
  className?: string
}

export function Badge({ category, tipo, label, className }: BadgeProps) {
  const text = label ?? (category ? categoryLabels[category] : tipo ? tipoLabels[tipo] : '')

  return (
    <span className={cn(
      'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium font-inter',
      'bg-secondary/10 text-secondary border border-secondary/20',
      className
    )}>
      {text}
    </span>
  )
}
