import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo de Regalos Empresariales y Productos Publicitarios | Comercial Moderna',
  description: 'Catálogo de regalos empresariales, productos publicitarios, kits escolares, dotaciones y litografía en Colombia. Personalización con logo, entrega nacional.',
}

export default function CatalogoPage() {
  return (
    <div className="pt-44 pb-24 px-4 max-w-2xl mx-auto">
      <p className="text-[10px] tracking-[4px] uppercase text-primary font-inter font-semibold mb-4">
        Catálogo
      </p>
      <h1 className="font-fustat font-extrabold text-4xl sm:text-5xl text-dark leading-tight mb-4">
        ¿Qué necesitas para tu empresa?
      </h1>
      <p className="text-muted font-inter text-lg leading-relaxed">
        Explora nuestro catálogo completo de regalos empresariales, productos publicitarios, kits escolares, dotaciones y desarrollo de producto.
      </p>
      <a
        href="/catalogo-virtual.html"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-3 hover:bg-primary/90 transition-all"
      >
        Ver catálogo completo →
      </a>
    </div>
  )
}
