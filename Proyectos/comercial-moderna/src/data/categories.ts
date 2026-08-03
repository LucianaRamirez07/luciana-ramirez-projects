export type CategoryFaq = { question: string; answer: string }

export type CategoryMeta = {
  label: string
  description: string
  tipo?: string
  intro?: string
  faqs?: CategoryFaq[]
}

export const categoryMeta: Record<string, CategoryMeta> = {
  'regalos-empresariales': {
    label: 'Regalos Empresariales',
    description: 'Detalles corporativos que refuerzan tu marca en cada ocasión especial.',
    tipo: 'regalos-empresariales',
    intro: 'En Comercial Moderna diseñamos y producimos regalos empresariales personalizados en Medellín, con entrega a toda Colombia. Trabajamos con empresas e instituciones que buscan fortalecer su marca a través de detalles corporativos de calidad — desde termos y libretas ejecutivas hasta kits completos para eventos y fechas especiales. Personalizamos cada producto con tu logo mediante grabado láser, serigrafía, bordado o sublimación, ajustando cada pedido al presupuesto y la cantidad que necesites.',
    faqs: [
      {
        question: '¿Qué tipos de regalos empresariales manejan?',
        answer: 'Termos, libretas ejecutivas, parlantes, paraguas, kits de oficina, gorras y más — todos personalizables con tu logo. También desarrollamos productos a medida según la necesidad de tu empresa.',
      },
      {
        question: '¿Cuál es el pedido mínimo para regalos empresariales?',
        answer: 'En general trabajamos desde 10 unidades, con capacidad para pedidos de hasta 10.000 o más manteniendo el mismo estándar de calidad y cumplimiento.',
      },
      {
        question: '¿Hacen entregas de regalos empresariales fuera de Medellín?',
        answer: 'Sí. Aunque operamos desde Medellín, entregamos en cualquier ciudad de Colombia, directo en tu oficina o el punto que nos indiques.',
      },
    ],
  },
  'productos-publicitarios': {
    label: 'Productos Publicitarios',
    description: 'Artículos con tu logo para eventos, ferias y campañas de marca.',
    tipo: 'productos-publicitarios',
  },
  'kits-escolares': {
    label: 'Kits Escolares',
    description: 'Paquetes completos de útiles escolares para fundaciones e instituciones.',
    tipo: 'kits-escolares',
  },
  'dotaciones-empresariales': {
    label: 'Dotaciones Empresariales',
    description: 'Uniformes y ropa corporativa con tu identidad visual.',
  },
  'desarrollo-de-producto': {
    label: 'Desarrollo de Producto',
    description: 'Creamos productos a medida desde cero según tu idea y necesidad.',
  },
  'litografia': {
    label: 'Litografía',
    description: 'Impresión de alta calidad: folletos, catálogos, etiquetas y más.',
  },
}
