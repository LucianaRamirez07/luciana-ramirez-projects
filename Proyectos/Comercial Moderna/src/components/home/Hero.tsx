import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 left-[200px] w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] bg-secondary -translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-inter font-medium mb-8 opacity-0-init animate-blur-fade-up">
          Conectados contigo · Medellín, Colombia
        </div>

        <h1 className="font-fustat font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dark leading-[1.0] tracking-tight max-w-4xl mx-auto opacity-0-init animate-blur-fade-up animate-delay-100">
          Cualquier producto.{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">Tu marca.</span>{' '}
          Llave en mano.
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted font-inter max-w-2xl mx-auto leading-relaxed opacity-0-init animate-blur-fade-up animate-delay-200">
          Soluciones corporativas personalizadas para empresas que quieren impactar — desde Medellín para todo Colombia.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-blur-fade-up animate-delay-300">
          <Link
            href="/cotizar"
            className="inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full text-base hover:bg-primary/90 hover:scale-[1.02] transition-all"
          >
            Cotizar Ahora
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center border-2 border-dark/20 text-dark font-inter font-medium px-8 py-4 rounded-full text-base hover:border-primary hover:text-primary transition-all"
          >
            Explorar Catálogo
          </Link>
        </div>
      </div>
    </section>
  )
}
