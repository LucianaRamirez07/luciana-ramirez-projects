// Guías de contenido. Se escriben solo con datos ya publicados en el sitio y en los
// catálogos (pedido desde 10 unidades, técnicas de personalización, proceso en 4 pasos,
// cotización sin costo, descripciones de los kits). No llevan precios porque el sitio no los publica.

export type GuiaBloque =
  | { tipo: 'h2'; texto: string }
  | { tipo: 'p'; texto: string }
  | { tipo: 'lista'; items: string[] }
  | { tipo: 'pasos'; items: string[] }
  | { tipo: 'tarjetas'; items: { titulo: string; texto: string; contenido?: string }[] }
  | { tipo: 'enlaces'; items: { href: string; texto: string }[] }

export type Guia = {
  slug: string
  titulo: string
  descripcion: string
  /** Respuesta corta de 40 a 60 palabras, que las IA y Google pueden citar tal cual. */
  resumen: string
  /** Categoría del catálogo donde se enlaza esta guía, si aplica. */
  categoria?: string
  publicada: string // 'YYYY-MM-DD'
  actualizada: string // 'YYYY-MM-DD'
  bloques: GuiaBloque[]
  faqs: { question: string; answer: string }[]
}

export const guias: Guia[] = [
  {
    slug: 'cuanto-cuesta-un-regalo-empresarial-personalizado',
    categoria: 'regalos-empresariales',
    titulo: '¿Cuánto cuesta un regalo empresarial personalizado?',
    descripcion:
      'Qué define el precio de un regalo empresarial personalizado en Colombia: producto, cantidad, personalización, empaque y fecha. Cómo ajustar tu presupuesto.',
    resumen:
      'El precio de un regalo empresarial personalizado depende del tipo de producto, la cantidad solicitada, la técnica de personalización, el empaque y el tiempo de entrega. En Comercial Moderna ofrecemos diferentes opciones que se adaptan a las necesidades y presupuestos de cada empresa. Solicita una cotización personalizada y encuentra la mejor opción para tu marca.',
    publicada: '2026-10-23',
    actualizada: '2026-10-23',
    bloques: [
      { tipo: 'h2', texto: 'De qué depende el precio de un regalo empresarial' },
      {
        tipo: 'tarjetas',
        items: [
          {
            titulo: 'El producto',
            texto:
              'Un termo, una libreta y un kit de varios artículos no cuestan lo mismo. Mientras más piezas, materiales y mejor presentación, mayor es la inversión por regalo.',
          },
          {
            titulo: 'La cantidad',
            texto:
              'Trabajamos desde 10 unidades y hasta 10.000 o más. En general, al pedir más unidades el costo por pieza tiende a bajar, porque la producción y la personalización se reparten entre más regalos.',
          },
          {
            titulo: 'La técnica de personalización',
            texto:
              'Grabado láser, screen, sublimación, bordado o serigrafía. La técnica adecuada depende del material del producto y de tu logo, y cambia el costo.',
          },
          {
            titulo: 'El empaque',
            texto:
              'Una caja rígida con tarjeta y moño no cuesta lo mismo que una bolsa sencilla, y también cambia cómo se percibe el regalo.',
          },
          {
            titulo: 'La fecha de entrega',
            texto:
              'Personalizar y empacar requiere tiempo de producción. Cotizar con anticipación te da más margen para elegir y comparar opciones.',
          },
        ],
      },
      { tipo: 'h2', texto: 'Cómo ajustar el presupuesto sin perder calidad' },
      {
        tipo: 'lista',
        items: [
          'Define cuánto quieres invertir por persona y cuántas personas recibirán el regalo.',
          'Pide opciones en dos o tres niveles, por ejemplo un kit completo y un detalle sencillo, para compararlas lado a lado.',
          'Prefiere un producto de uso diario con tu logo bien ubicado: termos, libretas, bolsas o esferos se ven más tiempo que algo que se guarda.',
          'Si vas a regalar a clientes y a empleados, cotiza todo junto: un pedido mayor puede mejorar el costo por unidad.',
        ],
      },
      { tipo: 'h2', texto: 'Cómo pedir tu cotización en 4 pasos' },
      {
        tipo: 'pasos',
        items: [
          'Nos cuentas tu idea por WhatsApp, correo o el formulario de cotización.',
          'Te proponemos opciones con una cotización detallada.',
          'Producimos y personalizamos con tu logo.',
          'Entregamos llave en mano en tu oficina, en cualquier ciudad de Colombia.',
        ],
      },
      { tipo: 'h2', texto: 'Dónde ver opciones' },
      {
        tipo: 'enlaces',
        items: [
          { href: '/catalogo/regalos-empresariales', texto: 'Regalos empresariales' },
          { href: '/catalogo/productos-publicitarios', texto: 'Productos publicitarios' },
          { href: '/catalogo', texto: 'Catálogo completo' },
          { href: '/proceso', texto: 'Cómo trabajamos' },
        ],
      },
    ],
    faqs: [
      {
        question: '¿La cotización de un regalo empresarial tiene costo?',
        answer: 'No. Ofrecemos cotización gratuita y trabajamos con distintos presupuestos.',
      },
      {
        question: '¿Cuál es el pedido mínimo de regalos empresariales?',
        answer: 'En general trabajamos desde 10 unidades, con capacidad para pedidos de hasta 10.000 o más.',
      },
      {
        question: '¿Cuánto tardan en responder una cotización?',
        answer: 'Respondemos en menos de 24 horas hábiles.',
      },
      {
        question: '¿Entregan los regalos empresariales en toda Colombia?',
        answer: 'Sí. Aunque operamos desde Medellín, entregamos en cualquier ciudad de Colombia.',
      },
    ],
  },
  {
    slug: 'que-regalar-a-empleados-en-diciembre',
    categoria: 'regalos-empresariales',
    titulo: 'Qué regalar a empleados en diciembre: ideas de Navidad',
    descripcion:
      'Ideas de regalos corporativos de Navidad para empleados: bienestar, familia, directivos, viaje y detalles sencillos, con el logo de tu empresa.',
    resumen:
      'La Navidad es una oportunidad perfecta para agradecer el esfuerzo y compromiso de tus colaboradores. En Comercial Moderna ofrecemos una amplia variedad de kits navideños, ideales para regalar bienestar, compartir en familia, sorprender a directivos y clientes o acompañar momentos especiales. Descubre detalles personalizados que se adaptan a tu presupuesto y fortalecen los lazos con tu equipo.',
    publicada: '2026-10-23',
    actualizada: '2026-10-23',
    bloques: [
      { tipo: 'h2', texto: 'Regalos de bienestar y descanso' },
      {
        tipo: 'tarjetas',
        items: [
          {
            titulo: 'Kit Descanso de Navidad',
            texto: 'Un regalo que invita a hacer una pausa, en caja rígida navideña con moño y tarjeta personalizada.',
            contenido: 'Cobija afelpada, almohada cervical de terciopelo, vela aromática, aceite esencial y esencia de navidad.',
          },
          {
            titulo: 'Kit Bienestar en Casa',
            texto: 'Bienestar para llevar a casa, en caja de lino con moño verde y tarjeta personalizada.',
            contenido: '2 toallas, 1 vela aromática, 1 spray de ambiente y 1 jabón artesanal.',
          },
          {
            titulo: 'Kit Gimnasio & Bienestar',
            texto: 'Para celebrar las metas del equipo, en caja kraft con tarjeta motivacional.',
            contenido: 'Maletín deportivo, shaker, set de 3 bandas de resistencia y toalla deportiva.',
          },
        ],
      },
      { tipo: 'h2', texto: 'Regalos para compartir en familia' },
      {
        tipo: 'tarjetas',
        items: [
          {
            titulo: 'Kit Picnic en Familia',
            texto: 'Para un plan al aire libre, en caja kraft decorada con moño rojo.',
            contenido: 'Canasta cooler, 4 vasos térmicos, set de cubiertos, tabla de quesos, cobija de picnic y set de platos y servilletas.',
          },
          {
            titulo: 'Kit Noche de Película en Casa',
            texto: 'Para disfrutar en familia, en caja rígida verde con moño rojo de terciopelo.',
            contenido: 'Cobija, bolsa de crispetas dulces y saladas, caja de trufas de chocolate y 2 vasos térmicos.',
          },
          {
            titulo: 'Kit Retos Navideños en Familia',
            texto: 'Juegos y risas en la mesa de Navidad.',
            contenido: 'Cartas de retos navideños, cartas de preguntas en familia, maracas, gorro navideño, gafas y bolsa de dulces.',
          },
          {
            titulo: 'Kit Karaoke Navideño',
            texto: 'Para cantar y celebrar en casa, en caja blanca con moño verde y tarjeta navideña.',
            contenido: 'Parlante Bluetooth con luz, micrófono inalámbrico y soporte plegable para celular.',
          },
          {
            titulo: 'Kit Mesa con Propósito',
            texto: 'Para armar una mesa de fiesta, en caja de regalo con moño rojo y tarjeta personalizada.',
            contenido: '4 individuales tejidos, set de cubiertos dorados, vela aromática, 4 posavasos y set de servilletas de tela.',
          },
        ],
      },
      { tipo: 'h2', texto: 'Regalos para directivos y clientes especiales' },
      {
        tipo: 'tarjetas',
        items: [
          {
            titulo: 'Caja Navideña Premium',
            texto: 'Presentación elegante y lista para regalar, en caja rígida navideña con ventana.',
            contenido: '1 botella de vino reserva, frasco de frutos secos, caja de trufas artesanales y esfera navideña.',
          },
          {
            titulo: 'Ritual de Café Colombiano',
            texto: 'Un pequeño ritual para grandes días, en caja rígida verde con cinta y tarjeta de temporada.',
            contenido: 'Café de especialidad colombiano (250 g), prensa francesa, mug artesanal, miel de flores, galletas artesanales y chocolate.',
          },
          {
            titulo: 'Kit Tecnológico de Viaje',
            texto: 'Tecnología útil para el día a día, en caja rígida negra con cinta dorada.',
            contenido: 'Power bank, audífonos inalámbricos, soporte plegable para celular, cable 3 en 1 y estuche organizador.',
          },
        ],
      },
      { tipo: 'h2', texto: 'Para quien viaja o trabaja al aire libre' },
      {
        tipo: 'tarjetas',
        items: [
          {
            titulo: 'Set Organizador de Viaje',
            texto: 'Para viajar con todo en orden, en caja de regalo con moño y tarjeta personalizada.',
            contenido: '4 cubos organizadores, 1 maletín de viaje, 1 bolsa con cordón, 1 cartuchera y 1 etiqueta para equipaje.',
          },
          {
            titulo: 'Kit Aventura & Camping',
            texto: 'Para los planes al aire libre, en caja kraft con moño y rama decorativa.',
            contenido: '1 silla plegable de camping, 1 cooler bag y 1 vaso térmico.',
          },
        ],
      },
      { tipo: 'h2', texto: 'Un detalle sencillo con significado' },
      {
        tipo: 'tarjetas',
        items: [
          {
            titulo: 'Cinco Luces, Cinco Valores',
            texto:
              'Cinco velas grabadas con los valores o mensajes de tu empresa. Se entrega en estuche tipo madera o en una bolsa de yute reutilizable, esta última como una opción de bajo costo para grupos grandes.',
          },
        ],
      },
      { tipo: 'h2', texto: 'Cómo elegir el regalo correcto' },
      {
        tipo: 'lista',
        items: [
          'Piensa en quién lo recibe: un regalo para compartir en familia no es el mismo que uno para un directivo.',
          'Define el presupuesto por persona antes de ver opciones, y pide cotización en dos o tres niveles para comparar.',
          'Cuida la marca: tarjeta personalizada, mensaje y empaque con la identidad de tu empresa hacen que el detalle se recuerde.',
          'Cotiza con tiempo: personalizar y empacar cada kit requiere producción, y entre más pronto empieces, más opciones tendrás.',
        ],
      },
      { tipo: 'h2', texto: 'Dónde ver todos los kits' },
      {
        tipo: 'enlaces',
        items: [
          { href: '/catalogo-navidad.html', texto: 'Catálogo de Navidad 2026' },
          { href: '/catalogo/regalos-empresariales', texto: 'Regalos empresariales' },
          { href: '/cotizar', texto: 'Solicitar cotización' },
        ],
      },
    ],
    faqs: [
      {
        question: '¿Se pueden personalizar los regalos de Navidad con el logo de la empresa?',
        answer:
          'Sí. Los kits se personalizan con la identidad de tu empresa, por ejemplo con tarjeta personalizada y mensaje. Al cotizar te indicamos qué se puede marcar en cada uno.',
      },
      {
        question: '¿Cuál es el pedido mínimo para regalos de Navidad corporativos?',
        answer: 'En general trabajamos desde 10 unidades, con capacidad para pedidos de hasta 10.000 o más.',
      },
      {
        question: '¿Entregan los regalos de Navidad en toda Colombia?',
        answer: 'Sí. Entregamos en cualquier ciudad de Colombia, directo en tu oficina o el punto que nos indiques.',
      },
      {
        question: '¿Qué puedo regalar con un presupuesto pequeño?',
        answer:
          'Un detalle sencillo con significado, como las 5 velas grabadas con los valores de tu empresa en bolsa de yute. Pídenos opciones en distintos niveles y compáralas.',
      },
    ],
  },
  {
    slug: 'como-armar-un-kit-escolar-institucional',
    categoria: 'kits-escolares',
    titulo: 'Cómo armar un kit escolar institucional',
    descripcion:
      'Qué incluye un kit escolar para fundaciones, colegios y programas sociales, cómo definir el contenido según tu presupuesto y cómo pedir la cotización.',
    resumen:
      'Un kit escolar institucional es un conjunto de útiles empacados y personalizados con la imagen de tu fundación, colegio o programa social. Se arma a la medida: tú nos cuentas cuántos kits necesitas y con qué presupuesto cuentas, y en Comercial Moderna proponemos el contenido, lo preparamos en Medellín y lo entregamos en toda Colombia.',
    publicada: '2026-10-23',
    actualizada: '2026-10-23',
    bloques: [
      { tipo: 'h2', texto: 'Qué puede llevar un kit escolar' },
      {
        tipo: 'p',
        texto:
          'El contenido depende de la necesidad de los niños y del programa. Un kit puede incluir cuadernos, esferos, lápices, colores, regla, tijeras y otros útiles, empacados y personalizados con la imagen de tu institución. No hay un kit único: lo armamos a la medida.',
      },
      { tipo: 'h2', texto: 'Cómo definir el contenido de tu kit' },
      {
        tipo: 'pasos',
        items: [
          'Define cuántos kits necesitas y a quiénes van dirigidos.',
          'Fija el presupuesto con el que cuenta tu institución. Con ese dato proponemos opciones.',
          'Elige los útiles que no pueden faltar y cuáles son opcionales.',
          'Decide cómo quieres presentar el kit: con tu logo y con un empaque que facilite repartirlo.',
        ],
      },
      { tipo: 'h2', texto: 'Cómo ajustar el kit a tu presupuesto' },
      {
        tipo: 'lista',
        items: [
          'Pide una versión completa y una básica para comparar la inversión por kit.',
          'Prioriza los útiles que se usan todos los días antes que los complementarios.',
          'Cotiza con anticipación: preparar y empacar muchos kits toma tiempo de producción.',
        ],
      },
      { tipo: 'h2', texto: 'Cómo pedir tu cotización en 4 pasos' },
      {
        tipo: 'pasos',
        items: [
          'Nos cuentas tu idea por WhatsApp, correo o el formulario de cotización.',
          'Te proponemos opciones con una cotización detallada.',
          'Producimos y personalizamos con tu logo.',
          'Entregamos llave en mano en tu institución, en cualquier ciudad de Colombia.',
        ],
      },
      { tipo: 'h2', texto: 'Dónde ver más' },
      {
        tipo: 'enlaces',
        items: [
          { href: '/catalogo/kits-escolares', texto: 'Kits escolares' },
          { href: '/proceso', texto: 'Cómo trabajamos' },
          { href: '/cotizar', texto: 'Pedir una cotización' },
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué incluye un kit escolar institucional?',
        answer:
          'Cuadernos, esferos, lápices, colores, regla, tijeras y otros útiles según la necesidad, empacados y personalizados con la imagen de tu fundación o institución.',
      },
      {
        question: '¿Pueden armar el kit según el presupuesto de mi institución?',
        answer:
          'Sí. Cuéntanos cuántos kits necesitas y con qué presupuesto cuentas, y te proponemos opciones con una cotización detallada.',
      },
      {
        question: '¿Hacen entregas de kits escolares en toda Colombia?',
        answer: 'Sí. Entregamos en cualquier ciudad de Colombia, directo en tu institución o el punto que nos indiques.',
      },
      {
        question: '¿La cotización de los kits tiene costo?',
        answer: 'No. Ofrecemos cotización gratuita.',
      },
    ],
  },
  {
    slug: 'dotaciones-empresariales-como-elegir-uniformes',
    categoria: 'dotaciones-empresariales',
    titulo: 'Dotaciones empresariales: cómo elegir uniformes para tu equipo',
    descripcion:
      'Qué son las dotaciones empresariales, qué técnicas existen para personalizar uniformes con tu logo (bordado, serigrafía, screen y sublimación) y cómo cotizarlas.',
    resumen:
      'Las dotaciones empresariales son los uniformes, la ropa corporativa y los accesorios que identifican a tu equipo. En Comercial Moderna los personalizamos con tu logo mediante bordado, serigrafía, screen o sublimación, según la prenda y el diseño, con empaque listo para distribuir y entrega en cualquier ciudad de Colombia.',
    publicada: '2026-10-23',
    actualizada: '2026-10-23',
    bloques: [
      { tipo: 'h2', texto: 'Qué son las dotaciones empresariales' },
      {
        tipo: 'p',
        texto:
          'Son los uniformes, la ropa corporativa y los accesorios que usa tu equipo y que llevan la identidad visual de tu empresa. También las instituciones y los equipos deportivos las usan: tenemos propuestas de uniformes deportivos institucionales para varias disciplinas.',
      },
      { tipo: 'h2', texto: 'Cómo se personaliza un uniforme' },
      {
        tipo: 'tarjetas',
        items: [
          { titulo: 'Bordado', texto: 'El logo se borda directamente sobre la prenda.' },
          { titulo: 'Serigrafía', texto: 'El diseño se estampa sobre la prenda.' },
          { titulo: 'Screen', texto: 'Otra opción de estampado para tu logo, según la prenda.' },
          { titulo: 'Sublimación', texto: 'Una técnica pensada para diseños completos, como los de los uniformes deportivos.' },
        ],
      },
      {
        tipo: 'p',
        texto:
          'La técnica adecuada depende de la prenda y de tu logo. Al cotizar te recomendamos la que mejor se ve con tu diseño.',
      },
      { tipo: 'h2', texto: 'Qué tener claro antes de cotizar' },
      {
        tipo: 'lista',
        items: [
          'Cuántas personas recibirán uniforme y qué prendas necesita cada cargo.',
          'Tu logo en el mejor formato que tengas.',
          'La fecha en que necesitas la entrega: personalizar y empacar requiere tiempo de producción.',
          'Si lo quieres empacado para repartir por persona, área o sede.',
        ],
      },
      { tipo: 'h2', texto: 'Cómo pedir tu cotización en 4 pasos' },
      {
        tipo: 'pasos',
        items: [
          'Nos cuentas tu idea por WhatsApp, correo o el formulario de cotización.',
          'Te proponemos opciones con una cotización detallada.',
          'Producimos y personalizamos con tu logo.',
          'Entregamos llave en mano en tu oficina, en cualquier ciudad de Colombia.',
        ],
      },
      { tipo: 'h2', texto: 'Dónde ver más' },
      {
        tipo: 'enlaces',
        items: [
          { href: '/catalogo/dotaciones-empresariales', texto: 'Dotaciones empresariales' },
          { href: '/catalogo-dotaciones.html', texto: 'Catálogo de dotaciones' },
          { href: '/cotizar', texto: 'Pedir una cotización' },
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué dotaciones empresariales manejan?',
        answer: 'Uniformes, ropa corporativa y accesorios, personalizados con tu logo y con empaque listo para entregar.',
      },
      {
        question: '¿Cómo se personalizan los uniformes?',
        answer:
          'Con bordado, serigrafía, screen o sublimación, según la prenda y el diseño. Al cotizar te recomendamos la técnica que mejor se ve con tu logo.',
      },
      {
        question: '¿Tienen uniformes deportivos para equipos institucionales?',
        answer: 'Sí. Tenemos propuestas de uniformes deportivos institucionales para varias disciplinas, en nuestro catálogo de dotaciones.',
      },
      {
        question: '¿Hacen entregas de dotaciones en toda Colombia?',
        answer: 'Sí. Entregamos en cualquier ciudad del país, con personalización incluida y empaque listo para distribuir.',
      },
    ],
  },
]

export function getGuia(slug: string): Guia | undefined {
  return guias.find((g) => g.slug === slug)
}
