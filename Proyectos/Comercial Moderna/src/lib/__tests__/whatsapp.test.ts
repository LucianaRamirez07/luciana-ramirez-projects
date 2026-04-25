import { describe, it, expect } from 'vitest'
import { buildWhatsAppUrl } from '../whatsapp'

describe('buildWhatsAppUrl', () => {
  it('returns a wa.me URL with the correct phone number', () => {
    const url = buildWhatsAppUrl({
      nombre: 'Juan García',
      empresa: 'Acme S.A.',
      email: 'juan@acme.com',
      whatsapp: '3001234567',
      tipo: 'Regalos Empresariales',
      cantidad: '100',
      descripcion: 'Termos personalizados',
    })
    expect(url).toMatch(/^https:\/\/wa\.me\/573005544573/)
  })

  it('includes the sender name in the message', () => {
    const url = buildWhatsAppUrl({
      nombre: 'María López',
      empresa: 'Corp S.A.',
      email: 'maria@corp.com',
      whatsapp: '3009876543',
      tipo: 'Kits Escolares',
      cantidad: '500',
      descripcion: 'Kits para fundación',
    })
    const decoded = decodeURIComponent(url)
    expect(decoded).toContain('María López')
    expect(decoded).toContain('Corp S.A.')
    expect(decoded).toContain('Kits Escolares')
  })

  it('encodes special characters in the message', () => {
    const url = buildWhatsAppUrl({
      nombre: 'Test',
      empresa: 'Test & Co.',
      email: 't@t.com',
      whatsapp: '3001111111',
      tipo: 'Otro',
      cantidad: '50',
      descripcion: 'Productos con diseño especial',
    })
    expect(url).not.toContain(' ')
    expect(url).toContain('wa.me')
  })
})
