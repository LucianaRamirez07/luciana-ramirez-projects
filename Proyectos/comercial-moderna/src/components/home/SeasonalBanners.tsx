'use client'
import { getImageProps } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'

interface Banner {
  id: string
  alt: string
  desktop: { src: string; width: number; height: number }
  // Versión 4:5 para celular. Si algún banner la tiene, el carrusel cambia de proporción en pantallas angostas;
  // los que no la tienen se muestran completos y centrados (sin recortar).
  mobile?: { src: string; width: number; height: number }
  // Primer instante en que el banner ya no se muestra (hora local). Sin fecha, no caduca.
  until?: Date
  // A dónde lleva el botón "Ver catálogo" mientras este banner se muestra.
  href: string
}

const banners: Banner[] = [
  {
    id: 'halloween',
    alt: 'Regalos de temporada de Halloween — cotiza con nosotros',
    desktop: { src: '/temporada/halloween-escritorio.jpg', width: 1672, height: 941 },
    mobile: { src: '/temporada/halloween-celular.jpg', width: 1122, height: 1402 },
    until: new Date('2026-11-01T00:00:00'),
    href: '/catalogo',
  },
  {
    id: 'navidad',
    alt: 'Regalos de temporada para Navidad — cotiza con nosotros',
    desktop: { src: '/temporada/navidad-escritorio.jpg', width: 1672, height: 941 },
    mobile: { src: '/temporada/navidad-celular.jpg', width: 1122, height: 1402 },
    until: new Date('2027-01-07T00:00:00'),
    href: '/catalogo-navidad.html',
  },
  {
    id: 'dotaciones',
    alt: 'Dotaciones empresariales: uniformes y prendas corporativas personalizadas — cotiza con nosotros',
    desktop: { src: '/temporada/dotaciones-escritorio.jpg', width: 1672, height: 941 },
    href: '/catalogo-dotaciones.html',
  },
]

const AUTOPLAY_MS = 6000
const SWIPE_PX = 40
const HOUR = 3_600_000
const noopSubscribe = () => () => {}

// Un solo <picture>: el navegador descarga únicamente la versión que corresponde a su pantalla.
function BannerPicture({ banner }: { banner: Banner }) {
  const { alt, desktop, mobile } = banner
  const { props: desktopProps } = getImageProps({
    alt,
    src: desktop.src,
    width: desktop.width,
    height: desktop.height,
    sizes: '(max-width: 1024px) 100vw, 1024px',
    loading: 'eager',
  })
  const mobileProps = mobile
    ? getImageProps({ alt, src: mobile.src, width: mobile.width, height: mobile.height, sizes: '100vw', loading: 'eager' }).props
    : null

  return (
    <picture>
      {mobileProps && <source media="(max-width: 767px)" srcSet={mobileProps.srcSet} sizes="100vw" />}
      <img {...desktopProps} alt={alt} className={cn('w-full h-full', mobile ? 'object-cover' : 'object-contain md:object-cover')} />
    </picture>
  )
}

export function SeasonalBanners() {
  // La fecha se lee en el navegador (no en el servidor) para que el sitio no quede desfasado a la fecha del último despliegue.
  // El valor se redondea a la hora para que el snapshot sea estable entre renders.
  const hour = useSyncExternalStore(
    noopSubscribe,
    () => Math.floor(Date.now() / HOUR) * HOUR,
    () => null,
  )
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const active = hour === null ? [] : banners.filter((b) => !b.until || hour < b.until.getTime())
  const count = active.length
  const current = count > 0 ? index % count : 0

  useEffect(() => {
    if (count < 2 || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [count, paused, current]) // `current` reinicia el reloj: tras un cambio manual el banner se queda sus 6 s completos

  if (count === 0) return null

  const go = (to: number) => setIndex((to + count) % count)
  const hasMobile = active.some((b) => b.mobile)

  return (
    <section
      className="py-12 px-6 bg-white border-b border-gray-100"
      aria-roledescription="carrusel"
      aria-label="Promociones de temporada"
    >
      <div
        className="max-w-5xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl shadow-md bg-gray-100',
            hasMobile ? 'aspect-[4/5] md:aspect-video' : 'aspect-video',
          )}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            touchStartX.current = null
            if (Math.abs(dx) >= SWIPE_PX) go(current + (dx < 0 ? 1 : -1))
          }}
        >
          {active.map((b, i) => {
            const visible = i === current
            return (
              <div
                key={b.id}
                aria-hidden={!visible}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none',
                  visible ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none',
                )}
              >
                <BannerPicture banner={b} />
              </div>
            )
          })}

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(current - 1)}
                aria-label="Banner anterior"
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/85 text-dark shadow hover:bg-white transition-colors items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                type="button"
                onClick={() => go(current + 1)}
                aria-label="Banner siguiente"
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/85 text-dark shadow hover:bg-white transition-colors items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {active.map((b, i) => (
              <button
                key={b.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Ir al banner ${i + 1} de ${count}`}
                aria-current={i === current}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === current ? 'w-7 bg-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400',
                )}
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <Link
            href={active[current].href}
            prefetch={false}
            className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold text-base px-8 py-3 hover:bg-primary/90 transition-all"
          >
            Ver catálogo →
          </Link>
        </div>
      </div>
    </section>
  )
}
