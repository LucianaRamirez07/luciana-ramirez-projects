import Link from 'next/link'

const capabilities = [
  { icon: '🖨️', title: 'Marcado con Logo', description: 'Screen, sublimación o impresión full color sobre cualquier superficie.' },
  { icon: '⚡', title: 'Láser y Grabado', description: 'Grabado de precisión en metal, madera, cuero y materiales sostenibles.' },
  { icon: '📦', title: 'Embalaje a Medida', description: 'Cajas, bolsas y presentaciones personalizadas listas para entregar.' },
]

export function CustomSection() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-dark">
            Si lo imaginas,{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">lo conseguimos.</span>
          </h2>
          <p className="mt-3 text-muted font-inter max-w-xl mx-auto">
            El catálogo es solo una muestra. Trabajamos con cualquier producto que necesites.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-white p-6 rounded-2xl border border-gray-100">
              <span className="text-3xl">{cap.icon}</span>
              <h3 className="mt-3 font-fustat font-bold text-lg text-dark">{cap.title}</h3>
              <p className="mt-2 text-sm text-muted font-inter leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/proceso" className="text-primary font-inter font-medium hover:text-primary/80 transition-colors">
            Ver cómo trabajamos →
          </Link>
        </div>
      </div>
    </section>
  )
}
