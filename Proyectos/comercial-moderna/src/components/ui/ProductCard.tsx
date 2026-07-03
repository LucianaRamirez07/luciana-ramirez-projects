import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Badge } from './Badge'

interface ProductCardProps {
  product: Product
  compact?: boolean
}

const customizationLabels: Record<string, string> = {
  logo: 'Logo',
  laser: 'Láser',
  screen: 'Screen',
  bordado: 'Bordado',
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const quoteUrl = `/cotizar?producto=${encodeURIComponent(product.name)}`

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <Badge category={product.category} />
        <h3 className="font-fustat font-bold text-dark text-lg leading-snug">{product.name}</h3>

        {!compact && (
          <p className="text-muted text-sm font-inter leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {product.customizations.map((c) => (
            <span key={c} className="text-xs px-2 py-0.5 bg-gray-100 text-muted rounded-full font-inter">
              {customizationLabels[c]}
            </span>
          ))}
        </div>

        <Link
          href={quoteUrl}
          className="mt-3 w-full text-center bg-primary text-white font-inter font-medium text-sm py-2.5 rounded-full hover:bg-primary/90 transition-colors"
        >
          Cotizar
        </Link>
      </div>
    </div>
  )
}
