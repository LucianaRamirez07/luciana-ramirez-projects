import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo trabajamos | Proceso de compra de regalos empresariales',
  description: 'Proceso de Comercial Moderna en 4 pasos: cotización, propuesta, producción y entrega llave en mano en toda Colombia. Sin formularios complicados, sin sorpresas.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo pedir regalos empresariales personalizados en Comercial Moderna',
  description: 'Proceso de compra de regalos corporativos, productos publicitarios y kits escolares en 4 pasos simples.',
  totalTime: 'P7D',
  supply: [
    { '@type': 'HowToSupply', name: 'Descripción de tu idea o requerimiento' },
    { '@type': 'HowToSupply', name: 'Logo de tu empresa en alta resolución' },
    { '@type': 'HowToSupply', name: 'Cantidad aproximada de unidades' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Cuéntanos tu idea',
      text: 'Envíanos tu requerimiento por WhatsApp, email o formulario. Sin reuniones innecesarias — solo dinos qué necesitas.',
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Recibe tu propuesta y cotización',
      text: 'Buscamos las mejores alternativas en precio, material y acabado, y te presentamos varias opciones con cotización detallada.',
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Producción y personalización',
      text: 'Una vez aprobada la propuesta, iniciamos producción. Marcado con logo, grabado láser, screen, sublimación o bordado.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Entrega llave en mano',
      text: 'Entregamos en tu oficina o en el punto que indiques — en Medellín o cualquier ciudad de Colombia. Empaque incluido.',
      position: 4,
    },
  ],
}

const steps = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Recibimos tu requerimiento por WhatsApp, email o formulario — sin importar qué tan específico sea. Sin formularios complicados, sin reuniones innecesarias.',
  },
  {
    number: '02',
    title: 'Te proponemos opciones',
    description: 'Buscamos las mejores alternativas en precio, material y acabado, y te presentamos varias opciones con cotización detallada para que elijas la que mejor se ajusta a tu presupuesto y necesidad.',
  },
  {
    number: '03',
    title: 'Producción y personalización',
    description: 'Una vez aprobada la propuesta, iniciamos producción. Marcado con logo, grabado láser, screen, sublimación o bordado — según el material y el acabado que necesites.',
  },
  {
    number: '04',
    title: 'Entrega llave en mano',
    description: 'Entregamos en tu oficina o en el punto que indiques — en Medellín o cualquier ciudad de Colombia. Empaque incluido, listo para entregar.',
  },
]

export default function ProcesoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="text-center mb-20">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">¿Cómo trabajamos?</h1>
        <p className="mt-4 text-muted font-inter text-lg">Simple, transparente y sin sorpresas.</p>
      </div>

      <div className="space-y-12">
        {steps.map((step, i) => (
          <div key={step.number}>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center">
                <span className="font-fustat font-bold text-white text-lg">{step.number}</span>
              </div>
              <div className="pt-2">
                <h2 className="font-fustat font-bold text-2xl text-dark">{step.title}</h2>
                <p className="mt-2 text-muted font-inter leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </div>
            {i < steps.length - 1 && <div className="mt-8 h-px bg-gray-100 w-full" />}
          </div>
        ))}
      </div>

      <div className="mt-24 bg-gray-50 rounded-2xl p-10 text-center">
        <h2 className="font-fustat font-bold text-2xl text-dark">
          Si lo imaginas,{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">lo conseguimos.</span>
        </h2>
        <p className="mt-3 text-muted font-inter max-w-lg mx-auto">
          El catálogo es solo una muestra de nuestras capacidades. Trabajamos con cualquier producto que tu empresa necesite.
        </p>
        <Link
          href="/cotizar"
          className="mt-8 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
        >
          Cuéntanos tu idea →
        </Link>
      </div>
    </div>
  )
}
