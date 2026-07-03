'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (options: Record<string, unknown>, elementId: string) => unknown
      } & {
        TranslateElement: { InlineLayout: { SIMPLE: unknown } }
      }
    }
  }
}

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
]

function fireChange(el: HTMLElement) {
  const evt = document.createEvent('HTMLEvents')
  evt.initEvent('change', true, true)
  el.dispatchEvent(evt)
}

function selectLanguage(code: string, attempt = 0) {
  const container = document.getElementById('google_translate_element')
  const combo = container?.querySelector<HTMLSelectElement>('select.goog-te-combo')
  if (!combo) {
    if (attempt < 20) setTimeout(() => selectLanguage(code, attempt + 1), 250)
    return
  }
  combo.value = code
  // Google Translate a veces ignora el primer evento "change"; se dispara dos veces como workaround conocido
  fireChange(combo)
  setTimeout(() => fireChange(combo), 50)
}

export function GoogleTranslate() {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className="relative">
      <div
        id="google_translate_element"
        style={{ position: 'fixed', top: 0, left: '-9999px', width: '300px', height: '60px' }}
      />

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Cambiar idioma / Change language"
        className="flex items-center justify-center w-9 h-9 rounded-full text-dark/60 hover:text-primary hover:bg-gray-100 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9S9.5 5.5 12 3z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                selectLanguage(lang.code)
                setOpen(false)
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-inter text-dark/80 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new window.google.translate.TranslateElement(
              { pageLanguage: 'es', includedLanguages: 'en,es', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false },
              'google_translate_element'
            );
          }
          window.googleTranslateElementInit = googleTranslateElementInit;
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  )
}
