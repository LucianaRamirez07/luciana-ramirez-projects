'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/work/trabajo-1.jpg',
  '/work/trabajo-2.jpg',
  '/work/trabajo-3.jpg',
  '/work/trabajo-4.jpg',
  '/work/trabajo-5.jpg',
  '/work/trabajo-6.jpg',
  '/work/trabajo-7.jpg',
  '/work/trabajo-8.jpg',
  '/work/trabajo-9.jpg',
  '/work/trabajo-10.jpg',
  '/work/trabajo-11.jpg',
  '/work/trabajo-12.jpg',
  '/work/trabajo-13.jpg',
  '/work/trabajo-14.jpg',
  '/work/trabajo-15.jpg',
  '/work/trabajo-16.jpg',
]

export function CatalogPreview() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [next])

  const visible = [
    images[current % images.length],
    images[(current + 1) % images.length],
    images[(current + 2) % images.length],
  ] as string[]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm tracking-[4px] uppercase text-primary font-inter font-bold mb-3">
              Nuestro trabajo
            </p>
            <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl text-dark">
              Conoce un poco nuestro trabajo.
            </h2>
          </div>
          <Link
            href="/cotizar"
            className="hidden sm:inline text-primary font-inter font-semibold text-sm hover:text-primary/80 transition-colors"
          >
            Cotizar ahora →
          </Link>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative overflow-hidden rounded-2xl aspect-square group"
              >
                <Image
                  src={src}
                  alt={`Trabajo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Flechas */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-5' : 'bg-gray-300'}`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
