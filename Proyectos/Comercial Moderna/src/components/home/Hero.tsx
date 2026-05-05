'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">

      {/* Video de fondo con efecto slow */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro con gradiente — estilo editorial */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/40 via-dark/15 to-dark/50 pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <span className="block text-sm sm:text-base font-semibold tracking-[4px] uppercase text-white mb-6 opacity-0-init animate-blur-fade-up">
          MEDELLÍN — COLOMBIA
        </span>

        <h1 className="font-fustat font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tight mb-8 opacity-0-init animate-blur-fade-up animate-delay-100">
          Regalos corporativos<br />
          <em className="not-italic bg-brand-gradient bg-clip-text text-transparent">que se recuerdan.</em>
        </h1>

        <p className="text-lg sm:text-xl text-white font-inter font-semibold max-w-2xl mx-auto leading-relaxed mb-12 opacity-0-init animate-blur-fade-up animate-delay-200">
          Kits y regalos corporativos para empresas e instituciones — personalizados y entregados en todo Colombia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-blur-fade-up animate-delay-300">
          <Link
            href="/cotizar"
            className="inline-flex items-center justify-center bg-primary text-white font-inter font-semibold px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/30"
          >
            Cotiza Ahora
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center border border-white/35 text-white font-inter font-semibold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/60 transition-all"
          >
            Ver Catálogo
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 opacity-0-init animate-blur-fade-up animate-delay-400">
          {['Entrega nacional', 'Personalización', 'Asesoría'].map((item, i) => (
            <span key={item} className="font-inter text-sm font-semibold text-white tracking-wide flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {item}
              </span>
              {i < 2 && <span className="text-white/20">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Franja marquee */}
      <div className="absolute bottom-0 z-20 w-full bg-dark/80 backdrop-blur-sm py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-10 mx-10 text-white font-inter text-sm font-semibold uppercase tracking-[3px]">
              <span>Regalos Empresariales</span><span className="text-primary text-lg">✦</span>
              <span>Productos Publicitarios</span><span className="text-primary text-lg">✦</span>
              <span>Kits Escolares</span><span className="text-primary text-lg">✦</span>
              <span>Dotaciones Empresariales</span><span className="text-primary text-lg">✦</span>
              <span>Desarrollo de Producto</span><span className="text-primary text-lg">✦</span>
              <span>Litografía</span><span className="text-primary text-lg">✦</span>
              <span className="text-primary">Lleva tu empresa a otro nivel</span><span className="text-primary text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
