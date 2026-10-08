'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSyncExternalStore } from 'react'

// `until` es el primer instante en que el banner ya no se muestra (hora local).
const banners = [
  {
    id: 'halloween',
    alt: 'Regalos de temporada de Halloween — cotiza con nosotros',
    src: '/temporada/halloween.jpg',
    width: 1024,
    height: 1536,
    until: new Date('2026-11-01T00:00:00'),
    widthClass: 'lg:w-[34%]',
  },
  {
    id: 'navidad',
    alt: 'Regalos de temporada para Navidad — cotiza con nosotros',
    src: '/temporada/navidad.jpg',
    width: 1672,
    height: 941,
    until: new Date('2027-01-07T00:00:00'),
    widthClass: 'lg:flex-1',
  },
]

const noopSubscribe = () => () => {}
const HOUR = 3_600_000

export function SeasonalBanners() {
  // La fecha se lee en el navegador (no en el servidor) para que el sitio no quede desfasado a la fecha del último despliegue.
  // El valor se redondea a la hora para que el snapshot sea estable entre renders.
  const hour = useSyncExternalStore(
    noopSubscribe,
    () => Math.floor(Date.now() / HOUR) * HOUR,
    () => null,
  )

  if (hour === null) return null
  const active = banners.filter((b) => hour < b.until.getTime())
  if (active.length === 0) return null

  return (
    <section className="py-12 px-6 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
        {active.map((b) => (
          <Link
            key={b.id}
            href="/cotizar"
            className={`block w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${
              active.length > 1 ? b.widthClass : 'max-w-4xl'
            }`}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={b.width}
              height={b.height}
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="w-full h-auto"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
