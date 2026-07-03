'use client'
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

export function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element" className="google-translate-widget" />
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
    </>
  )
}
