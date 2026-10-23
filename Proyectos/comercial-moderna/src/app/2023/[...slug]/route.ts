/**
 * Entradas de 2023 (reseñas de antivirus, VPN, etc.) que no son de este sitio.
 * Venían de una versión anterior del dominio, hoy no existen y Google las sigue
 * rastreando. Un 410 ("eliminada para siempre") le dice que no las busque más,
 * más rápido que un 404.
 */
export function GET() {
  return new Response('Gone', {
    status: 410,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  })
}

export const HEAD = GET
