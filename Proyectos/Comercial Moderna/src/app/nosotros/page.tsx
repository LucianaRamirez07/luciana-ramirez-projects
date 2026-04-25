import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a Comercial Moderna — empresa familiar en Medellín especializada en soluciones corporativas personalizadas.',
}

const values = [
  { icon: '✅', title: 'Cumplimiento', description: 'Entregamos en la fecha acordada, sin excepciones.' },
  { icon: '⚙️', title: 'Capacidad operativa', description: 'Gestionamos pedidos de cualquier volumen, desde 10 hasta 10.000 unidades.' },
  { icon: '🎯', title: 'Desarrollo a medida', description: 'Adaptamos cada producto a las necesidades exactas del cliente.' },
  { icon: '🤝', title: 'Proveedores confiables', description: 'Red de fabricantes verificados en Colombia y el exterior.' },
]

const clients = ['nutresa', 'eafit', 'leonisa', 'auteco']

export default function NosotrosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Conectados contigo</h1>
        <p className="mt-4 text-muted font-inter text-lg max-w-xl mx-auto">
          Somos una empresa familiar en Medellín con más de 8 años ayudando a empresas colombianas a impactar con productos personalizados.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-10 mb-16">
        <p className="font-inter text-dark text-lg leading-relaxed">
          Comercial Moderna nació de la convicción de que cada empresa merece tener productos que cuenten su historia. Desde el sector El Poblado en Medellín, gestionamos todo el proceso: buscamos el producto, lo personalizamos y lo entregamos llave en mano en cualquier ciudad de Colombia.
        </p>
        <p className="font-inter text-muted text-base leading-relaxed mt-4">
          No somos solo distribuidores — somos el aliado que busca soluciones creativas cuando el producto que necesitas no existe o es difícil de conseguir.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="font-fustat font-bold text-2xl text-dark mb-8">Nuestros valores</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100">
              <span className="text-2xl flex-shrink-0">{v.icon}</span>
              <div>
                <h3 className="font-fustat font-bold text-dark">{v.title}</h3>
                <p className="mt-1 text-sm text-muted font-inter">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="font-fustat font-bold text-2xl text-dark mb-8 text-center">Empresas que confían en nosotros</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {clients.map((client) => (
            <div key={client} className="relative h-10 w-32 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image src={`/clients/${client}.png`} alt={client} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/cotizar"
          className="inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
        >
          Trabaja con nosotros →
        </Link>
      </div>
    </div>
  )
}
