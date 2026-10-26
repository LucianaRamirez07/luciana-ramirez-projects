import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { guias, getGuia, type GuiaBloque } from '@/data/guias'

const BASE = 'https://www.comercialmoderna.com'
const WA = 'https://wa.me/573005544573?text='

export async function generateStaticParams() {
  return guias.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const g = getGuia(slug)
  if (!g) return {}
  return {
    title: g.tituloSeo ?? g.titulo,
    description: g.descripcion,
    alternates: { canonical: `/guias/${slug}` },
    openGraph: { type: 'article', title: g.titulo, description: g.descripcion, publishedTime: g.publicada, modifiedTime: g.actualizada },
  }
}

function fecha(iso: string) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
}

function Bloque({ b }: { b: GuiaBloque }) {
  switch (b.tipo) {
    case 'h2':
      return <h2 className="font-fustat font-bold text-2xl sm:text-3xl text-dark mt-14 mb-5">{b.texto}</h2>
    case 'p':
      return <p className="text-muted font-inter text-base leading-relaxed mb-4">{b.texto}</p>
    case 'lista':
      return (
        <ul className="list-disc pl-5 space-y-3 text-muted font-inter leading-relaxed">
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )
    case 'pasos':
      return (
        <ol className="list-decimal pl-5 space-y-3 text-muted font-inter leading-relaxed">
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      )
    case 'tarjetas':
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {b.items.map((c) => (
            <div key={c.titulo} className="border border-gray-200 p-5">
              <h3 className="font-fustat font-bold text-lg text-dark">{c.titulo}</h3>
              <p className="mt-2 text-sm text-muted font-inter leading-relaxed">{c.texto}</p>
              {c.contenido && (
                <p className="mt-3 text-sm text-dark font-inter leading-relaxed">
                  <strong>Incluye:</strong> {c.contenido}
                </p>
              )}
            </div>
          ))}
        </div>
      )
    case 'enlaces':
      return (
        <ul className="grid gap-2 sm:grid-cols-2">
          {b.items.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block border border-gray-200 px-4 py-3 text-primary font-inter font-semibold hover:border-primary transition-colors">
                {l.texto} →
              </Link>
            </li>
          ))}
        </ul>
      )
  }
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const g = getGuia(slug)
  if (!g) notFound()

  const articulo = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.titulo,
    description: g.descripcion,
    inLanguage: 'es-CO',
    datePublished: g.publicada,
    dateModified: g.actualizada,
    mainEntityOfPage: `${BASE}/guias/${g.slug}`,
    author: { '@type': 'Organization', name: 'Comercial Moderna Corp. S.A.S.', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'Comercial Moderna Corp. S.A.S.',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
  }
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
  const migas = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Guías', item: `${BASE}/guias` },
      { '@type': 'ListItem', position: 3, name: g.titulo, item: `${BASE}/guias/${g.slug}` },
    ],
  }
  const wa = WA + encodeURIComponent(`Hola, leí la guía "${g.titulo}" y quiero cotizar.`)

  return (
    <article className="pt-44 pb-24 px-4 max-w-3xl mx-auto">
      {[articulo, faq, migas].map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <div className="flex items-center gap-2 text-xs font-inter text-muted mb-8">
        <Link href="/guias" className="hover:text-primary transition-colors">Guías</Link>
        <span>/</span>
        <span className="text-dark font-semibold">{g.titulo}</span>
      </div>

      <h1 className="font-fustat font-extrabold text-3xl sm:text-5xl text-dark leading-tight mb-4">{g.titulo}</h1>
      <p className="text-xs text-muted font-inter mb-8">
        Por el equipo de Comercial Moderna · Actualizada el <time dateTime={g.actualizada}>{fecha(g.actualizada)}</time>
      </p>

      <p className="text-dark font-inter text-lg leading-relaxed border-l-4 border-primary pl-5">{g.resumen}</p>

      {g.bloques.map((b, i) => (
        <Bloque key={i} b={b} />
      ))}

      <h2 className="font-fustat font-bold text-2xl sm:text-3xl text-dark mt-14 mb-5">Preguntas frecuentes</h2>
      <div className="divide-y divide-gray-100">
        {g.faqs.map((f) => (
          <div key={f.question} className="py-5">
            <h3 className="font-fustat font-bold text-base text-dark mb-1">{f.question}</h3>
            <p className="text-muted font-inter text-sm leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 border border-gray-200 p-8 text-center">
        <p className="font-fustat font-bold text-2xl text-dark mb-2">¿Quieres cotizar?</p>
        <p className="text-muted font-inter mb-6">Cuéntanos cuántas unidades necesitas y para cuándo. Te respondemos en menos de 24 horas hábiles.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/cotizar" className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-8 py-3 hover:bg-primary/90 transition-all">
            Solicitar cotización
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-primary text-primary font-inter font-semibold px-8 py-[10px] hover:bg-primary hover:text-white transition-all">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
