import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo de Regalos Empresariales y Productos Publicitarios | Comercial Moderna',
  description: 'Catálogo de regalos empresariales, productos publicitarios, kits escolares, dotaciones y litografía en Colombia. Personalización con logo, entrega nacional.',
}

export default function CatalogoPage() {
  return (
    <div className="pt-44">
      <iframe
        src="/catalogo-virtual.html"
        title="Catálogo Comercial Moderna"
        className="w-full border-0"
        style={{ height: 'calc(100vh - 176px)' }}
      />
    </div>
  )
}
