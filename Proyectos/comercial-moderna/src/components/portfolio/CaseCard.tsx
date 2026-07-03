import Image from 'next/image'
import { PortfolioCase } from '@/types'

export function CaseCard({ case: c }: { case: PortfolioCase }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative h-7 w-20">
            <Image src={c.clientLogo} alt={c.client} fill className="object-contain object-left" />
          </div>
        </div>
        <h3 className="font-fustat font-bold text-xl text-dark">{c.title}</h3>
        <p className="mt-2 text-muted font-inter text-sm leading-relaxed">{c.description}</p>
        {(c.quantity || c.deliveryTime) && (
          <div className="mt-4 flex gap-4">
            {c.quantity && <span className="text-xs font-inter text-primary font-medium">{c.quantity}</span>}
            {c.deliveryTime && <span className="text-xs font-inter text-muted">{c.deliveryTime}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
