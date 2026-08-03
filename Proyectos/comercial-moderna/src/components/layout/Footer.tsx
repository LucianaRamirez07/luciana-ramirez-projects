import Link from 'next/link'
import Image from 'next/image'
import { WHATSAPP_CONTACTS } from '@/lib/contactNumbers'

const columns = [
  {
    title: 'Servicios',
    links: [
      { href: '/catalogo?tipo=regalos-empresariales', label: 'Regalos Empresariales' },
      { href: '/catalogo?tipo=productos-publicitarios', label: 'Productos Publicitarios' },
      { href: '/catalogo?tipo=kits-escolares', label: 'Kits Escolares' },
    ],
  },
  {
    title: 'Catálogo',
    links: [
      { href: '/catalogo?categoria=tecnologia', label: 'Tecnología' },
      { href: '/catalogo?categoria=oficina-papeleria', label: 'Oficina y Papelería' },
      { href: '/catalogo?categoria=hogar-estilo-vida', label: 'Hogar' },
      { href: '/catalogo?categoria=exteriores-accesorios', label: 'Exteriores' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { href: '/nosotros', label: 'Nosotros' },
      { href: '/portafolio', label: 'Portafolio' },
      { href: '/proceso', label: 'Cómo trabajamos' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo.png" alt="Comercial Moderna" width={1910} height={1468} className="h-12 w-auto brightness-0 invert" unoptimized />
            <p className="mt-4 text-sm text-gray-400 font-inter leading-relaxed">
              Soluciones corporativas personalizadas desde Medellín para todo Colombia.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {WHATSAPP_CONTACTS.map((contact) => (
                <a
                  key={contact.number}
                  href={`https://wa.me/${contact.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-inter hover:text-primary/80 transition-colors"
                >
                  WhatsApp: {contact.display}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-fustat font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-300 font-inter hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-gray-500 font-inter">
          <span>© {new Date().getFullYear()} Comercial Moderna Corp. S.A.S. Medellín, Colombia.</span>
          <span>Actualizado: mayo 2025 · luciana@comercialmoderna.com</span>
        </div>
      </div>
    </footer>
  )
}
