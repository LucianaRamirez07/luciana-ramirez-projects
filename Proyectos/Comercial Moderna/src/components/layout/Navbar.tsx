'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/nosotros', label: 'Nosotros' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="liquid-glass mx-4 mt-4 rounded-2xl px-6 py-3 max-w-6xl xl:mx-auto">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Comercial Moderna" width={140} height={40} className="h-9 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-inter text-sm transition-colors',
                    pathname === link.href ? 'text-primary font-medium' : 'text-muted hover:text-dark'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/cotizar"
              className="hidden sm:inline-flex items-center bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              Cotizar Ahora
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
              aria-label="Menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pt-3 pb-2 border-t border-black/5 mt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'font-inter text-sm px-3 py-2 rounded-xl transition-colors',
                  pathname === link.href ? 'text-primary bg-primary/5 font-medium' : 'text-dark hover:bg-black/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cotizar"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-full"
            >
              Cotizar Ahora
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
