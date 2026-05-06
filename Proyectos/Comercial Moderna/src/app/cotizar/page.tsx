import type { Metadata } from 'next'
import { Suspense } from 'react'
import { QuoteFormWrapper } from '@/components/cotizar/QuoteFormWrapper'

export const metadata: Metadata = {
  title: 'Cotizar',
  description: 'Solicita tu cotización de regalos empresariales y productos publicitarios personalizados. Respuesta en menos de 24 horas.',
}

export default function CotizarPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-40 pb-20">
      <div className="text-center mb-12">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Solicitar cotización</h1>
        <p className="mt-4 text-muted font-inter text-lg">
          Cuéntanos tu idea. Te respondemos en menos de 24 horas hábiles.
        </p>
      </div>
      <Suspense fallback={null}>
        <QuoteFormWrapper />
      </Suspense>
    </div>
  )
}
