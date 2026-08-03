import Image from 'next/image'

const services = [
  {
    label: 'Regalos Empresariales',
    img: '/catalogo-assets/fotos/creativos/tr006-coffee-experience-box.png',
  },
  {
    label: 'Productos Publicitarios',
    img: '/Producto Publicitario.PNG',
  },
  {
    label: 'Kits Escolares',
    img: '/Kits escolares.PNG',
  },
  {
    label: 'Dotaciones Empresariales',
    img: '/dotaciones.PNG',
  },
  {
    label: 'Desarrollo de Producto',
    img: '/Desarollo de producto.jpg',
  },
  {
    label: 'Litografía',
    img: '/Litografia.PNG',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-16 px-6 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">

          {/* Texto */}
          <div className="lg:w-1/2">
            <p className="text-sm tracking-[4px] uppercase text-primary font-inter font-bold mb-4">
              Qué hacemos
            </p>
            <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl text-dark leading-tight mb-5">
              Soluciones corporativas personalizadas para empresas de todos los tamaños.
            </h2>
            <p className="text-muted font-inter text-lg leading-relaxed">
              Nos especializamos en comercializar, distribuir, desarrollar y fabricar productos publicitarios, regalos empresariales y kits escolares — brindando acompañamiento real desde la idea hasta la entrega final.
            </p>
          </div>

          {/* Servicios con imagen de fondo */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {services.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-xl aspect-[3/4] group cursor-pointer"
              >
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <span className="absolute bottom-3 left-0 right-0 text-center font-inter font-semibold text-xs text-white px-2 leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
