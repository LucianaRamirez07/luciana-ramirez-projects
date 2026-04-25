import Link from 'next/link'

const needs = [
  {
    icon: '🎁',
    title: 'Regalos Empresariales',
    description: 'Detalles corporativos para eventos, fidelización y campañas.',
    href: '/catalogo?tipo=regalos-empresariales',
  },
  {
    icon: '📢',
    title: 'Campañas Publicitarias',
    description: 'Artículos de marca para posicionamiento y marketing.',
    href: '/catalogo?tipo=productos-publicitarios',
  },
  {
    icon: '🎒',
    title: 'Kits Escolares',
    description: 'Paquetes de útiles para fundaciones y programas sociales.',
    href: '/catalogo?tipo=kits-escolares',
  },
]

export function NeedsSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-dark">¿Qué necesitas?</h2>
        <p className="mt-3 text-muted font-inter">Cuéntanos tu caso — lo conseguimos y lo personalizamos.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {needs.map((need) => (
          <Link
            key={need.href}
            href={need.href}
            className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all bg-white"
          >
            <span className="text-4xl">{need.icon}</span>
            <h3 className="mt-4 font-fustat font-bold text-xl text-dark">{need.title}</h3>
            <p className="mt-2 text-sm text-muted font-inter leading-relaxed">{need.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-inter font-medium group-hover:gap-2 transition-all">
              Ver productos →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
