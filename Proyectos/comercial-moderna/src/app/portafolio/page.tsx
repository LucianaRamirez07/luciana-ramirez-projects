import type { Metadata } from 'next'
import Link from 'next/link'
import { cases } from '@/data/cases'
import { CaseCard } from '@/components/portfolio/CaseCard'

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Proyectos reales con Nutresa, EAFIT, Leonisa y Auteco. Regalos y productos corporativos personalizados entregados en toda Colombia.',
  alternates: { canonical: '/portafolio' },
}

export default function PortafolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Proyectos que hablan por nosotros</h1>
        <p className="mt-4 text-muted font-inter text-lg max-w-xl mx-auto">Cada entrega es una historia de confianza.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <CaseCard key={c.id} case={c} />
        ))}
      </div>
      <div className="mt-20 text-center">
        <p className="font-fustat font-bold text-2xl text-dark">¿Quieres que tu empresa sea el próximo caso?</p>
        <Link
          href="/cotizar"
          className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 hover:scale-[1.02] transition-all"
        >
          Cotizar mi proyecto
        </Link>
      </div>
    </div>
  )
}
