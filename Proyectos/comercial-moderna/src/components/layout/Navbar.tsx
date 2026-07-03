'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { GoogleTranslate } from '@/components/ui/GoogleTranslate'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/nosotros', label: 'Nosotros' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className={cn(
        'mx-4 mt-3 rounded-2xl px-8 py-3 max-w-6xl xl:mx-auto transition-all duration-300',
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md border border-gray-100 shadow-md'
          : 'bg-transparent border border-transparent'
      )}>
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Comercial Moderna"
              width={1910}
              height={1468}
              className="h-28 w-auto transition-all duration-300"
              unoptimized
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-inter text-base font-bold tracking-widest uppercase transition-colors',
                    pathname === link.href
                      ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                      : scrolled || !isHome
                        ? 'text-dark/60 hover:text-primary'
                        : 'text-white/70 hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <GoogleTranslate />
            <Link
              href="/cotizar"
              className="hidden sm:inline-flex items-center bg-primary text-white font-inter font-semibold text-xs tracking-widest uppercase px-6 py-3 hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              Cotizar Ahora
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 transition-colors"
              aria-label="Menú"
            >
              <svg className={cn('w-5 h-5 transition-colors', scrolled || !isHome ? 'text-dark' : 'text-white')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu fullscreen */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8">
          <Image src="/logo.png" alt="Comercial Moderna" width={1910} height={1468} className="h-16 w-auto brightness-0 invert mb-4" unoptimized />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-fustat text-3xl font-bold text-white hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cotizar"
            onClick={() => setOpen(false)}
            className="mt-4 bg-primary text-white font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4"
          >
            Cotizar Ahora
          </Link>
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </header>
  )
}
