import { Hero } from '@/components/home/Hero'
import { ClientBar } from '@/components/home/ClientBar'
import { NeedsSection } from '@/components/home/NeedsSection'
import { CustomSection } from '@/components/home/CustomSection'
import { CatalogPreview } from '@/components/home/CatalogPreview'
import { MetricsSection } from '@/components/home/MetricsSection'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
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
