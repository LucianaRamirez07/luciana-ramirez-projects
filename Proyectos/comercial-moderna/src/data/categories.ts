export type CategoryFaq = { question: string; answer: string }

export type CategoryMeta = {
  label: string
  description: string
  tipo?: string
  /** Catálogo propio (archivo en /public) cuando la categoría no tiene productos en la lista. */
  catalogoUrl?: string
  intro?: string
  /** Para categorías de servicio sin productos en lista: qué puede pedirte el cliente. */
  servicios?: string[]
  faqs?: CategoryFaq[]
}

export const categoryMeta: Record<string, CategoryMeta> = {
  'regalos-empresariales': {
    label: 'Regalos Empresariales',
    description: 'Detalles corporativos que refuerzan tu marca en cada ocasión especial.',
    tipo: 'regalos-empresariales',
    intro: 'En Comercial Moderna diseñamos y producimos regalos empresariales personalizados en Medellín, con entrega a toda Colombia. Trabajamos con empresas e instituciones que buscan fortalecer su marca a través de detalles corporativos de calidad, desde termos y libretas ejecutivas hasta kits completos para eventos y fechas especiales. Personalizamos cada producto con tu logo mediante grabado láser, serigrafía, bordado o sublimación, ajustando cada pedido al presupuesto y la cantidad que necesites.',
    faqs: [
      {
        question: '¿Qué tipos de regalos empresariales manejan?',
        answer: 'Termos, libretas ejecutivas, parlantes, paraguas, kits de oficina, gorras y más, todos personalizables con tu logo. También desarrollamos productos a medida según la necesidad de tu empresa.',
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
    description: 'Artículos con tu logo para eventos, ferias y campañas de marca: termos, libretas, bolsas y más, con entrega en toda Colombia.',
    tipo: 'productos-publicitarios',
    intro: 'Los productos publicitarios son artículos de uso diario marcados con tu logo, pensados para que tu marca se vea en ferias, eventos y campañas. En Comercial Moderna los producimos en Medellín desde 10 unidades, con grabado láser, screen, sublimación, bordado o serigrafía según el producto.',
    faqs: [
      {
        question: '¿Qué productos publicitarios funcionan mejor en eventos y ferias?',
        answer: 'Termos, bolsas ecológicas, libretas, esferos y camisetas con logo. Son de uso diario, lo que mantiene tu marca a la vista mucho después del evento.',
      },
      {
        question: '¿Cómo se personalizan los productos publicitarios?',
        answer: 'Según el producto, con grabado láser, screen, sublimación, bordado o serigrafía. Al cotizar te indicamos qué técnica funciona mejor con tu logo.',
      },
      {
        question: '¿Cuál es el pedido mínimo de productos publicitarios?',
        answer: 'En general trabajamos desde 10 unidades, con capacidad para pedidos de hasta 10.000 o más.',
      },
    ],
  },
  'kits-escolares': {
    label: 'Kits Escolares',
    description: 'Kits de útiles escolares completos y personalizados para fundaciones e instituciones, armados a tu medida y entregados en toda Colombia.',
    tipo: 'kits-escolares',
    intro: 'Armamos kits escolares institucionales para fundaciones, colegios y programas sociales: los útiles que necesites, empacados y con la imagen de tu institución. Los preparamos en Medellín y los entregamos en cualquier ciudad de Colombia.',
    faqs: [
      {
        question: '¿Qué incluye un kit escolar institucional?',
        answer: 'Cuadernos, esferos, lápices, colores, regla, tijeras y otros útiles según la necesidad, empacados y personalizados con la imagen de tu fundación o institución. Armamos el kit a la medida de cada institución.',
      },
      {
        question: '¿Pueden armar el kit según el presupuesto de mi institución?',
        answer: 'Sí. Cuéntanos cuántos kits necesitas y con qué presupuesto cuentas, y te proponemos opciones con una cotización detallada.',
      },
      {
        question: '¿Hacen entregas de kits escolares en toda Colombia?',
        answer: 'Sí. Entregamos en cualquier ciudad de Colombia, directo en tu institución o el punto que nos indiques.',
      },
    ],
  },
  'dotaciones-empresariales': {
    label: 'Dotaciones Empresariales',
    catalogoUrl: '/catalogo-dotaciones.html',
    description: 'Uniformes, ropa corporativa y accesorios con tu identidad visual, personalizados con tu logo y entregados en toda Colombia.',
    intro: 'Las dotaciones empresariales son los uniformes, la ropa corporativa y los accesorios que identifican a tu equipo. En Comercial Moderna las personalizamos con tu logo y las entregamos con empaque listo para distribuir, en cualquier ciudad del país. También tenemos un catálogo de uniformes deportivos institucionales.',
    faqs: [
      {
        question: '¿Qué dotaciones empresariales manejan?',
        answer: 'Uniformes, ropa corporativa y accesorios, personalizados con tu logo y con empaque listo para entregar.',
      },
      {
        question: '¿Cómo se personalizan los uniformes?',
        answer: 'Con bordado, serigrafía, screen o sublimación, según la prenda y el diseño. Al cotizar te recomendamos la técnica que mejor se ve con tu logo.',
      },
      {
        question: '¿Hacen entregas de dotaciones en toda Colombia?',
        answer: 'Sí. Entregamos uniformes y ropa corporativa en cualquier ciudad del país, con personalización incluida y empaque listo para distribuir.',
      },
      {
        question: '¿Tienen uniformes deportivos para equipos institucionales?',
        answer: 'Sí. Tenemos propuestas de uniformes deportivos institucionales para varias disciplinas, que puedes ver en nuestro catálogo de dotaciones.',
      },
    ],
  },
  'desarrollo-de-producto': {
    label: 'Desarrollo de Producto',
    servicios: [
      'Un producto que no está en el catálogo y que quieres crear desde cero.',
      'Un producto desarrollado según tu necesidad y personalizado con tu logo.',
    ],
    description: 'Creamos productos a medida desde cero según tu idea, trabajando directo con fabricantes verificados y con entrega en toda Colombia.',
    intro: 'Si lo que necesitas no está en el catálogo, lo desarrollamos. Nos cuentas tu idea, te proponemos opciones con una cotización detallada y pasamos a producción y personalización con tu logo.',
    faqs: [
      {
        question: '¿Qué es el desarrollo de producto a medida?',
        answer: 'Es crear un producto desde cero según tu idea y tu necesidad, en lugar de elegir uno del catálogo.',
      },
      {
        question: '¿Cómo empiezo a desarrollar un producto con Comercial Moderna?',
        answer: 'Cuéntanos tu idea por WhatsApp, correo o el formulario de cotización. Te respondemos con opciones y una cotización detallada.',
      },
      {
        question: '¿Con quién se fabrican los productos a medida?',
        answer: 'Trabajamos directo con fabricantes verificados, sin intermediarios.',
      },
    ],
  },
  'litografia': {
    label: 'Litografía',
    servicios: [
      'Folletos y catálogos con la imagen de tu empresa.',
      'Etiquetas para tus productos.',
      'Otros impresos corporativos según lo que necesites.',
    ],
    description: 'Impresión corporativa de alta calidad: folletos, catálogos, etiquetas y más con la imagen de tu empresa, entregados en toda Colombia.',
    intro: 'Imprimimos material corporativo con la imagen de tu empresa: folletos, catálogos, etiquetas y más. Cuéntanos qué necesitas imprimir y en qué cantidad, y te enviamos una cotización detallada.',
    faqs: [
      {
        question: '¿Qué materiales impresos pueden hacer?',
        answer: 'Folletos, catálogos, etiquetas y otros impresos corporativos con la imagen de tu empresa.',
      },
      {
        question: '¿Cómo cotizo una impresión?',
        answer: 'Escríbenos por WhatsApp, correo o el formulario con lo que necesitas imprimir y la cantidad, y te enviamos una cotización detallada.',
      },
      {
        question: '¿Hacen entregas de impresos en toda Colombia?',
        answer: 'Sí. Entregamos en cualquier ciudad de Colombia, directo en tu oficina o el punto que nos indiques.',
      },
    ],
  },
}
