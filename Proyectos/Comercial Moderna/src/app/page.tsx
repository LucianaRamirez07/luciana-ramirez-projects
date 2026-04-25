import { Hero } from '@/components/home/Hero'
import { ClientBar } from '@/components/home/ClientBar'
import { NeedsSection } from '@/components/home/NeedsSection'
import { CustomSection } from '@/components/home/CustomSection'
import { CatalogPreview } from '@/components/home/CatalogPreview'
import { MetricsSection } from '@/components/home/MetricsSection'
import { FinalCTA } from '@/components/home/FinalCTA'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comercial Moderna Corp. S.A.S.',
  description: 'Regalos empresariales y productos publicitarios personalizados en Medellín, Colombia.',
  url: 'https://www.comercialmoderna.com',
  telephone: '+573005544573',
  email: 'luciana@comercialmoderna.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  areaServed: 'CO',
  priceRange: 'COP',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <ClientBar />
      <NeedsSection />
      <CustomSection />
      <CatalogPreview />
      <MetricsSection />
      <FinalCTA />
    </>
  )
}
