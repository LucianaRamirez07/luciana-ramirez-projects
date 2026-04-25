import { QuoteFormData } from '@/types'

const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER ?? '573005544573'

export function buildWhatsAppUrl(data: Omit<QuoteFormData, 'referencia'>): string {
  const message = [
    `Hola, quiero solicitar una cotización:`,
    ``,
    `*Nombre:* ${data.nombre}`,
    `*Empresa:* ${data.empresa}`,
    `*Email:* ${data.email}`,
    `*Teléfono:* ${data.whatsapp}`,
    `*Tipo de producto:* ${data.tipo}`,
    `*Cantidad:* ${data.cantidad}`,
    `*Descripción:* ${data.descripcion}`,
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
