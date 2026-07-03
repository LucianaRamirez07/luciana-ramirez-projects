import Link from 'next/link'

export function FinalCTA() {
  const waUrl = 'https://wa.me/573005544573?text=' + encodeURIComponent('Hola, quiero información sobre sus productos.')

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center bg-brand-gradient rounded-3xl py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl" />
        <div className="relative">
          <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-white leading-snug">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-white/80 font-inter text-lg">
            Cuéntanos tu idea — sin importar qué tan específica sea, la hacemos realidad.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center bg-white text-dark font-inter font-medium px-8 py-4 rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all"
            >
              Solicitar cotización
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
