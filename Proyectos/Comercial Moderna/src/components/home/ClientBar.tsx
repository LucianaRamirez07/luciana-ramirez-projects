import Image from 'next/image'

const clients = [
  { name: 'Leonisa', logo: '/clients/leonisa.png', large: false, xl: true },
  { name: 'EAFIT', logo: '/clients/eafit.png', large: false, xl: false },
  { name: 'Auteco', logo: '/clients/auteco.png', large: false, xl: false },
  { name: 'Nutresa', logo: '/clients/nutresa.png', large: false, xl: false },
  { name: 'Comfenalco', logo: '/clients/comfenalco.png', large: true, xl: false },
  { name: 'Vélez', logo: '/clients/velez.png', large: true, xl: false },
  { name: 'Yamaha', logo: '/clients/yamaha.png', large: false, xl: false },
  { name: 'TCC', logo: '/clients/TCC.png', large: false, xl: false },
  { name: 'Las Américas', logo: '/clients/lasamericas.png', large: false, xl: false },
  { name: 'Manpower', logo: '/clients/manpower.png', large: false, xl: false },
  { name: 'New School', logo: '/clients/newschool.png', large: false, xl: false },
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
            <div key={i} className={`flex-shrink-0 relative transition-all opacity-90 hover:opacity-100 ${client.xl ? 'h-36 w-80' : client.large ? 'h-28 w-64' : 'h-20 w-48'}`}>
              <Image src={client.logo} alt={client.name} fill className="object-contain mix-blend-multiply" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
