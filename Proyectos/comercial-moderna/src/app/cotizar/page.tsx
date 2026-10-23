import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { QuoteFormWrapper } from '@/components/cotizar/QuoteFormWrapper'

export const metadata: Metadata = {
  title: 'Cotizar',
  description: 'Solicita tu cotización de regalos empresariales y productos publicitarios personalizados. Respuesta en menos de 24 horas.',
  alternates: { canonical: '/cotizar' },
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

      <section className="mt-16 border-t border-gray-100 pt-10">
        <h2 className="font-fustat font-bold text-2xl text-dark">¿Qué necesitamos para cotizarte?</h2>
        <p className="mt-3 text-muted font-inter leading-relaxed">
          Con estos datos te respondemos más rápido y con opciones que se ajusten a lo que buscas:
        </p>
        <ul className="mt-4 space-y-2 text-muted font-inter leading-relaxed list-disc pl-5">
          <li>Qué producto o tipo de regalo te interesa (puedes verlo en el <Link href="/catalogo" className="text-primary underline">catálogo</Link>).</li>
          <li>Cuántas unidades necesitas. Trabajamos desde 10 y llegamos hasta 10.000 o más.</li>
          <li>Para qué fecha lo necesitas y a qué ciudad de Colombia va.</li>
          <li>Tu logo, si lo quieres personalizado.</li>
        </ul>
        <p className="mt-4 text-muted font-inter leading-relaxed">
          Si prefieres escribirnos, también atendemos por WhatsApp y por correo. Cuéntanos tu idea y te enviamos una
          cotización detallada. Conoce también <Link href="/proceso" className="text-primary underline">cómo trabajamos</Link>.
        </p>
      </section>
    </div>
  )
}
