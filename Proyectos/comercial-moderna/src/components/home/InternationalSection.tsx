import { buildContactWaUrl } from '@/lib/contactNumbers'

const MESSAGE = 'Hola, quiero información sobre sus servicios internacionales.'

const features = [
  { icon: '🌎', text: 'Producción competitiva en Colombia, con envío internacional coordinado de punta a punta.' },
  { icon: '🗣️', text: 'Hablamos inglés — comunicación directa y sin fricciones con tu equipo.' },
  { icon: '📦', text: 'Coordinamos aduanas, logística y entrega final en Estados Unidos.' },
  { icon: '🤝', text: 'Un solo equipo, de la cotización a la entrega — sin intermediarios.' },
]

const contacts = [
  {
    label: 'Colombia',
    numbers: [
      { raw: '573005544573', display: '+57 300 554 4573' },
      { raw: '573043891991', display: '+57 304 389 1991' },
    ],
  },
  {
    label: 'EE.UU. e internacional',
    numbers: [
      { raw: '19543108045', display: '+1 954 310 8045' },
      { raw: '573043915122', display: '+57 304 391 5122' },
    ],
  },
]

export function InternationalSection() {
  return (
    <section id="internacional" className="py-20 sm:py-24 bg-dark text-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <div>
            <p className="text-sm tracking-[4px] uppercase text-primary font-inter font-bold mb-4">
              Alcance internacional
            </p>
            <h2 className="font-fustat font-extrabold text-3xl sm:text-4xl leading-tight mb-5">
              Tu marca, sin fronteras.
            </h2>
            <p className="text-white/70 font-inter text-lg leading-relaxed mb-8">
              Además de atender todo Colombia, exportamos regalos empresariales y productos publicitarios a Estados Unidos. Producimos localmente a costos competitivos y coordinamos todo el proceso — cotización, producción, aduanas y entrega — con un equipo que habla tu idioma.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((f) => (
                <li key={f.text} className="flex gap-3 items-start">
                  <span className="text-xl leading-none">{f.icon}</span>
                  <span className="text-white/80 font-inter text-sm leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="/brochure-comercial-moderna-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-inter font-semibold px-6 py-3 rounded-full hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Descargar brochure en inglés (PDF) ↓
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10">
            <p className="text-sm uppercase tracking-widest text-white/50 font-inter mb-6">
              Cotizaciones y contacto
            </p>
            <div className="space-y-6">
              {contacts.map((c) => (
                <div key={c.label}>
                  <p className="font-fustat font-bold text-white mb-2">{c.label}</p>
                  <div className="flex flex-col gap-1">
                    {c.numbers.map((n) => (
                      <a
                        key={n.raw}
                        href={buildContactWaUrl(n.raw, MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 font-inter text-sm hover:text-primary transition-colors"
                      >
                        {n.display}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
