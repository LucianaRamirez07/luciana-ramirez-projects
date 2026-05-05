import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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

const categories = [
  {
    slug: 'regalos-empresariales',
    label: 'Regalos Empresariales',
    description: 'Detalles corporativos que refuerzan tu marca en cada ocasión especial.',
    img: 'https://comercialmoderna.com/wp-content/uploads/2026/01/Image_202601211510-1-572x1024.jpeg',
  },
  {
    slug: 'productos-publicitarios',
    label: 'Productos Publicitarios',
    description: 'Artículos con tu logo para eventos, ferias y campañas de marca.',
    img: '/Producto Publicitario.PNG',
  },
  {
    slug: 'kits-escolares',
    label: 'Kits Escolares',
    description: 'Paquetes completos de útiles escolares para fundaciones e instituciones.',
    img: '/Kits escolares.PNG',
  },
  {
    slug: 'dotaciones-empresariales',
    label: 'Dotaciones Empresariales',
    description: 'Uniformes y ropa corporativa con tu identidad visual.',
    img: '/dotaciones.PNG',
  },
  {
    slug: 'desarrollo-de-producto',
    label: 'Desarrollo de Producto',
    description: 'Creamos productos a medida desde cero según tu idea y necesidad.',
    img: '/Desarollo de producto.jpg',
  },
  {
    slug: 'litografia',
    label: 'Litografía',
    description: 'Impresión de alta calidad: folletos, catálogos, etiquetas y más.',
    img: '/Litografia.PNG',
  },
]

export default function CatalogoPage() {
  return (
    <div className="pt-36 pb-24 px-4 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <p className="text-[10px] tracking-[4px] uppercase text-primary font-inter font-semibold mb-4">
          Catálogo
        </p>
        <h1 className="font-fustat font-extrabold text-4xl sm:text-5xl text-dark leading-tight mb-4">
          ¿Qué necesitas para tu empresa?
        </h1>
        <p className="text-muted font-inter text-lg leading-relaxed">
          Selecciona una categoría y te mostramos los productos disponibles. Si no encuentras lo que buscas, cuéntanos tu idea.
        </p>
      </div>

      {/* Grid de categorías */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/catalogo/${cat.slug}`}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] flex flex-col justify-end"
          >
            <Image
              src={cat.img}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
            <div className="relative z-10 p-6">
              <h2 className="font-fustat font-extrabold text-xl text-white leading-tight mb-1">
                {cat.label}
              </h2>
              <p className="font-inter text-sm text-white/65 leading-snug mb-4">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-inter font-semibold text-primary uppercase tracking-widest group-hover:gap-3 transition-all">
                Ver productos →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-3xl mx-auto">
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

      {/* CTA final */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
        <p className="font-fustat font-bold text-xl text-dark">¿No encuentras lo que buscas?</p>
        <p className="mt-2 text-muted font-inter">Conseguimos cualquier producto. Cuéntanos tu idea.</p>
        <a
          href={'https://wa.me/573005544573?text=' + encodeURIComponent('Hola, busco un producto específico que no encontré en el catálogo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-3 hover:bg-primary/90 transition-all"
        >
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  )
}
