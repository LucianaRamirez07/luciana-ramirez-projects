import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo de Regalos Empresariales y Productos Publicitarios | Comercial Moderna',
  description: 'Catálogo de regalos empresariales, productos publicitarios, kits escolares, dotaciones y litografía en Colombia. Personalización con logo, entrega nacional.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué son los regalos empresariales personalizados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los regalos empresariales personalizados son artículos que llevan el logo o identidad visual de una empresa, utilizados para reconocer empleados, agradecer clientes o fortalecer la marca. Incluyen productos como termos, bolsas, libretas, camisetas, maletines y más, todos marcados con el logo corporativo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un regalo empresarial personalizado en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El costo varía según el tipo de producto, la cantidad de unidades y la técnica de personalización. En Comercial Moderna ofrecemos cotización gratuita y trabajamos con diferentes presupuestos. Solicita tu cotización por WhatsApp o a través de nuestro formulario.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye un kit escolar institucional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un kit escolar institucional típicamente incluye cuadernos, esferos, lápices, colores, regla, tijeras y otros útiles escolares, empacados y personalizados con la imagen de la fundación o institución. En Comercial Moderna armamos el kit según las necesidades específicas de cada institución.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué productos publicitarios son los más efectivos para eventos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para eventos y ferias, los productos publicitarios más efectivos son termos, bolsas ecológicas, libretas, esferos y camisetas con logo. Son de alto uso cotidiano, lo que garantiza mayor visibilidad de la marca a largo plazo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacen entregas de dotaciones empresariales en toda Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Entregamos dotaciones empresariales — uniformes, ropa corporativa y accesorios — en cualquier ciudad de Colombia. Nuestro proceso incluye personalización con logo y empaque listo para entregar.',
      },
    },
  ],
}

const catalogFaqs = [
  {
    question: '¿Qué son los regalos empresariales personalizados?',
    answer: 'Son artículos con el logo o identidad visual de tu empresa — termos, bolsas, libretas, camisetas — usados para reconocer empleados, agradecer clientes o fortalecer la marca en eventos y fechas especiales.',
  },
  {
    question: '¿Cuánto cuesta un regalo empresarial en Colombia?',
    answer: 'El precio varía según el producto, la cantidad y la técnica de marcación. Ofrecemos cotización gratuita y trabajamos con distintos presupuestos. Escríbenos y te presentamos opciones.',
  },
  {
    question: '¿Qué incluye un kit escolar institucional?',
    answer: 'Cuadernos, esferos, lápices, colores, regla y otros útiles según la necesidad, empacados y personalizados con la imagen de tu fundación o institución. Armamos el kit a tu medida.',
  },
  {
    question: '¿Qué productos publicitarios funcionan mejor para eventos?',
    answer: 'Termos, bolsas ecológicas, libretas y camisetas con logo son los más efectivos — son de uso diario, lo que garantiza visibilidad de marca mucho después del evento.',
  },
  {
    question: '¿Hacen entregas de dotaciones en toda Colombia?',
    answer: 'Sí. Entregamos uniformes y ropa corporativa en cualquier ciudad del país, con personalización incluida y empaque listo para distribuir.',
  },
]

export default function CatalogoPage() {
  return (
    <div className="pt-44 pb-24 px-4 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex justify-center mb-20">
        <a
          href="/catalogo-virtual.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold text-lg px-10 py-4 hover:bg-primary/90 transition-all"
        >
          Ver catálogo completo →
        </a>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="font-fustat font-extrabold text-2xl sm:text-3xl text-dark mb-8 text-center">Preguntas frecuentes</h2>
        <div className="divide-y divide-gray-100">
          {catalogFaqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <h3 className="font-fustat font-bold text-base text-dark mb-1">{faq.question}</h3>
              <p className="text-muted font-inter text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
