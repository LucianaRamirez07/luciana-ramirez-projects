import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros | Empresa de Regalos Empresariales en Medellín',
  description: 'Comercial Moderna es una empresa familiar en Medellín con más de 20 años de experiencia en regalos empresariales, productos publicitarios y kits escolares para empresas e instituciones de Colombia.',
  alternates: { canonical: '/nosotros' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántos años de experiencia tiene Comercial Moderna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comercial Moderna tiene más de 20 años de experiencia en el sector de regalos empresariales y productos publicitarios en Colombia. Hemos atendido a más de 300 empresas e instituciones en todo el país.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué ciudades de Colombia hacen entregas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realizamos entregas en cualquier ciudad de Colombia. Aunque estamos ubicados en Medellín, Antioquia, contamos con cobertura nacional y entregamos directamente en la oficina o punto que el cliente indique.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el pedido mínimo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El pedido mínimo varía según el producto, pero trabajamos desde 10 unidades hasta pedidos de 10.000 unidades o más. Tenemos capacidad operativa para proyectos de cualquier escala.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué técnicas de personalización ofrecen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ofrecemos grabado láser, serigrafía (screen), sublimación, bordado, impresión digital y marcado con logo, según el material y el acabado que requiera cada producto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Trabajan con empresas de todos los tamaños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Atendemos desde empresas medianas hasta grandes corporaciones como Leonisa, Nutresa, Auteco y EAFIT. También trabajamos con fundaciones e instituciones educativas que necesitan kits escolares o dotaciones institucionales.',
      },
    },
  ],
}

const faqs = [
  {
    question: '¿Cuántos años de experiencia tienen?',
    answer: 'Más de 20 años en el sector. Hemos atendido a más de 300 empresas e instituciones en toda Colombia, gestionando más de 1.000 tipos de productos distintos.',
  },
  {
    question: '¿En qué ciudades hacen entregas?',
    answer: 'En cualquier ciudad de Colombia. Estamos en Medellín pero nuestra logística cubre todo el territorio nacional — entregamos directo en tu oficina o el punto que indiques.',
  },
  {
    question: '¿Cuál es el pedido mínimo?',
    answer: 'Varía según el producto. En general trabajamos desde 10 unidades. Tenemos capacidad para pedidos de hasta 10.000 unidades o más con los mismos estándares de calidad y cumplimiento.',
  },
  {
    question: '¿Qué técnicas de personalización ofrecen?',
    answer: 'Grabado láser, serigrafía, sublimación, bordado e impresión digital — elegimos la técnica según el material y el acabado que necesites para tu proyecto.',
  },
  {
    question: '¿Trabajan con fundaciones e instituciones educativas?',
    answer: 'Sí. Tenemos amplia experiencia con kits escolares y dotaciones institucionales para fundaciones, cajas de compensación e instituciones educativas de todo el país.',
  },
]

const values = [
  {
    title: 'Cumplimiento y Control',
    description: 'Gestionamos pedidos de volumen con fechas definidas y seguimiento en cada etapa del proceso. Tu fecha de entrega es nuestra prioridad.',
  },
  {
    title: 'Capacidad Operativa',
    description: 'Contamos con estructura para desarrollar, producir y entregar soluciones institucionales de manera organizada, desde 10 hasta 10.000 unidades.',
  },
  {
    title: 'Desarrollo a Medida',
    description: 'Adaptamos cada solución según el objetivo, uso y presupuesto de cada proyecto. Si no lo ve en el catálogo, lo conseguimos.',
  },
  {
    title: 'Proveedores Confiables',
    description: 'Trabajamos con una red de fabricantes verificados en Colombia y el exterior, garantizando calidad y tiempos de producción cumplidos.',
  },
]

const metrics = [
  { value: '+300', label: 'Empresas atendidas' },
  { value: '+20', label: 'Años de experiencia' },
  { value: '+1000', label: 'Productos gestionados' },
  { value: '100%', label: 'Cobertura nacional' },
]

const clients = [
  { slug: 'leonisa', name: 'Leonisa' },
  { slug: 'eafit', name: 'EAFIT' },
  { slug: 'auteco', name: 'Auteco' },
  { slug: 'nutresa', name: 'Nutresa' },
  { slug: 'comfenalco', name: 'Comfenalco' },
  { slug: 'velez', name: 'Vélez' },
  { slug: 'yamaha', name: 'Yamaha' },
  { slug: 'TCC', name: 'TCC' },
]

export default function NosotrosPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-dark pt-44 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary font-inter font-semibold text-sm uppercase tracking-widest mb-4">Quiénes somos</p>
          <h1 className="font-fustat font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight">
            Orden, cumplimiento<br />y <span className="bg-brand-gradient bg-clip-text text-transparent">acompañamiento real</span><br />en cada proyecto.
          </h1>
          <p className="mt-8 text-xl text-white/60 font-inter max-w-2xl leading-relaxed">
            Más de 20 años trabajando con empresas e instituciones de Colombia que necesitan un aliado confiable — desde la idea hasta la entrega final.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-inter font-semibold text-sm uppercase tracking-widest mb-4">Nuestra historia</p>
            <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl text-dark leading-tight mb-6">
              Especialistas en hacer que tu empresa se recuerde.
            </h2>
            <p className="text-muted font-inter text-lg leading-relaxed mb-4">
              Somos una empresa colombiana especializada en regalos corporativos, kits institucionales e impresión corporativa. Trabajamos con empresas que necesitan orden, cumplimiento y acompañamiento real durante todo el proceso — desde la idea hasta la entrega final.
            </p>
            <p className="text-muted font-inter text-lg leading-relaxed">
              No somos solo proveedores. Somos el equipo que entiende tu necesidad, encuentra la solución correcta y la ejecuta con precisión. Cada proyecto recibe el mismo nivel de atención, sin importar el volumen ni la complejidad del pedido.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-10 grid grid-cols-2 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-fustat font-extrabold text-4xl bg-brand-gradient bg-clip-text text-transparent">{m.value}</div>
                <div className="mt-1 text-sm font-inter text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-inter font-semibold text-sm uppercase tracking-widest mb-3">Por qué elegirnos</p>
            <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl text-dark">
              Lo que nos hace diferentes
            </h2>
            <p className="mt-3 text-muted font-inter text-lg max-w-xl mx-auto">
              Nuestros clientes nos eligen por nuestra calidad, personalización y total disponibilidad en cada paso del proceso.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <h3 className="font-fustat font-bold text-xl text-dark mb-3">{v.title}</h3>
                <p className="text-muted font-inter leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted font-inter text-sm uppercase tracking-widest mb-10">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {clients.map((client) => (
              <div key={client.slug} className="relative h-20 w-48 transition-all opacity-90 hover:opacity-100">
                <Image src={`/clients/${client.slug}.png`} alt={client.name} fill className="object-contain mix-blend-multiply" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-inter font-semibold text-sm uppercase tracking-widest mb-3">Preguntas frecuentes</p>
          <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl text-dark">Resolvemos tus dudas</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="font-fustat font-bold text-lg text-dark mb-2">{faq.question}</h3>
              <p className="text-muted font-inter leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-dark rounded-3xl py-16 px-8">
          <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl text-white mb-4">
            ¿Listo para desarrollar tu proyecto corporativo?
          </h2>
          <p className="text-white/60 font-inter text-lg mb-10">
            Te acompañamos desde la idea hasta la entrega final, con procesos claros y cumplimiento garantizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-4 rounded-full hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/30"
            >
              Solicitar cotización →
            </Link>
            <a
              href="https://wa.me/573005544573?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white font-inter font-semibold px-8 py-4 rounded-full hover:border-white/50 transition-all"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
