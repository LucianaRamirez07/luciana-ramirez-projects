import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo de Regalos Empresariales y Productos Publicitarios | Comercial Moderna',
  description: 'Catálogo de regalos empresariales, productos publicitarios, kits escolares, dotaciones y litografía en Colombia. Personalización con logo, entrega nacional.',
}

export default function CatalogoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <a
        href="/catalogo-virtual.html"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold text-lg px-10 py-4 hover:bg-primary/90 transition-all"
      >
        Ver catálogo completo →
      </a>
    </div>
  )
}
