import Link from 'next/link'

const services = [
  {
    title: 'Regalos Empresariales',
    description: 'Detalles corporativos para campañas y eventos que fortalecen tu empresa.',
    href: '/catalogo?tipo=regalos-empresariales',
  },
  {
    title: 'Productos Publicitarios',
    description: 'Artículos promocionales alineados a la identidad y objetivos de tu empresa.',
    href: '/catalogo?tipo=productos-publicitarios',
  },
  {
    title: 'Kits Escolares',
    description: 'Armado y entrega de kits para programas sociales y proyectos empresariales.',
    href: '/catalogo?tipo=kits-escolares',
  },
  {
    title: 'Dotaciones Empresariales',
    description: 'Uniformes y prendas con personalización técnica avanzada para tu equipo.',
    href: '/catalogo',
  },
  {
    title: 'Desarrollo de Producto',
    description: 'Diseño y producción a medida bajo presupuesto y necesidad institucional.',
    href: '/cotizar',
  },
  {
    title: 'Litografía',
    description: 'Papelería y material institucional con acabados de alta calidad profesional.',
    href: '/catalogo',
  },
]

export function NeedsSection() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-14">
          <p className="text-primary font-inter font-semibold text-sm uppercase tracking-widest mb-3">Nuestros Servicios</p>
          <h2 className="font-fustat font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Todo lo que tu empresa<br />necesita, en un solo lugar.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href + s.title}
              href={s.href}
              className="group p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all"
            >
              <h3 className="font-fustat font-bold text-2xl text-white">{s.title}</h3>
              <p className="mt-3 text-base text-white/50 font-inter leading-relaxed">{s.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-primary font-inter font-semibold group-hover:gap-3 transition-all">
                Ver más →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
