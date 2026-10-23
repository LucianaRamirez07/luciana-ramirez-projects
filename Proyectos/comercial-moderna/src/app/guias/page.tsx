import type { Metadata } from 'next'
import Link from 'next/link'
import { guias } from '@/data/guias'

export const metadata: Metadata = {
  title: 'Guías de regalos empresariales',
  description:
    'Guías para elegir y cotizar regalos empresariales: cuánto cuestan, qué regalar a tus empleados y cómo pedir tu cotización en Colombia.',
  alternates: { canonical: '/guias' },
}

function fecha(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function GuiasPage() {
  return (
    <div className="pt-44 pb-24 px-4 max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="font-fustat font-extrabold text-4xl sm:text-5xl text-dark leading-tight mb-4">
          Guías de regalos empresariales
        </h1>
        <p className="text-muted font-inter text-lg leading-relaxed">
          Respuestas claras para elegir, presupuestar y pedir regalos corporativos personalizados.
        </p>
      </div>

      <ul className="grid gap-4">
        {guias.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guias/${g.slug}`}
              className="block border border-gray-200 p-6 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="block font-fustat font-bold text-xl text-dark">{g.titulo}</span>
              <span className="block mt-2 text-muted font-inter leading-relaxed">{g.resumen}</span>
              <span className="block mt-3 text-xs text-muted font-inter">Actualizada el {fecha(g.actualizada)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
