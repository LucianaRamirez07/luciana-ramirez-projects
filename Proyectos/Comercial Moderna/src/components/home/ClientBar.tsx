import Image from 'next/image'

const clients = [
  { name: 'Nutresa', logo: '/clients/nutresa.png' },
  { name: 'EAFIT', logo: '/clients/eafit.png' },
  { name: 'Leonisa', logo: '/clients/leonisa.png' },
  { name: 'Auteco', logo: '/clients/auteco.png' },
]

export function ClientBar() {
  return (
    <section className="py-12 border-y border-gray-100">
      <p className="text-center text-xs font-inter text-muted uppercase tracking-widest mb-8">
        Empresas que confían en nosotros
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-16 items-center w-max">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-shrink-0 h-8 w-28 relative grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
