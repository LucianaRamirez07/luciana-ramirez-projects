# Diseño Web — Comercial Moderna Corp. S.A.S.
**Fecha:** 2026-04-24
**Estado:** Aprobado por cliente

---

## 1. Contexto del Negocio

**Empresa:** Comercial Moderna Corp. S.A.S.
**Ubicación:** Medellín, Colombia (sector El Poblado)
**Tipo:** Empresa familiar B2B — mayorista de soluciones corporativas personalizadas
**Tagline:** "Conectados contigo"

**Áreas de negocio:**
- Regalos Empresariales (fidelización y eventos corporativos)
- Productos Publicitarios (campañas de marketing y posicionamiento)
- Kits Escolares (fundaciones y programas sociales)

**Categorías de producto:**
- Tecnología (parlantes Bluetooth, artículos con materiales sostenibles)
- Oficina y Papelería (libretas, agendas, bolígrafos, kits ejecutivos)
- Hogar y Estilo de Vida (cafeteras, termos, portacomidas ecológicos)
- Exteriores y Accesorios (paraguas, gorras, neveras portátiles)
- Logística y Embalaje (bolsas reciclables, lanyards, artículos deportivos)

**Propuesta de valor diferencial:** El catálogo es una muestra de capacidades — la empresa puede conseguir y personalizar cualquier producto que el cliente solicite. Todo llave en mano.

**Clientes actuales:** Nutresa, EAFIT, Leonisa, Auteco, Feria del Brasier (entre otros)

---

## 2. Objetivos del Sitio

1. **Generación de leads** — formulario de cotización que envía a WhatsApp + email
2. **Portafolio de capacidades** — el catálogo muestra lo que pueden hacer, no es una tienda
3. **SEO local** — posicionarse en búsquedas de regalos empresariales en Medellín y Colombia

---

## 3. Audiencia Objetivo

Mixta B2B — todos son tomadores de decisiones o influenciadores de compra corporativa:
- Gerentes de marketing / comunicaciones (regalos para campañas y eventos)
- Áreas de compras / procurement (requerimientos específicos con volumen)
- Fundaciones / sector social (kits escolares)

El proceso de compra involucra múltiples personas — el que cotiza no siempre es quien aprueba.

---

## 4. Stack Tecnológico

| Elemento | Tecnología |
|----------|-----------|
| Framework | Next.js 14+ (App Router) |
| Estilos | Tailwind CSS |
| Lenguaje | TypeScript |
| Datos del catálogo | JSON estático (escalable a CMS en el futuro) |
| Formulario | React Hook Form + API Route de Next.js |
| Email | Resend o Nodemailer |
| WhatsApp | API de WhatsApp Business (wa.me link con mensaje pre-llenado) |
| Despliegue | Vercel |
| Dominio actual | www.comercialmoderna.com |

---

## 5. Sistema Visual

### Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#F7941D` | Botones CTA principales, highlights, hover states |
| `secondary` | `#7B2FBE` | Acento, badges, gradientes secundarios |
| `dark` | `#1A1A1A` | Textos principales |
| `muted` | `#6F6F6F` | Textos secundarios, descripciones |
| `surface` | `#FFFFFF` | Fondo principal |
| `glass` | `rgba(255,255,255,0.3)` | Navbar liquid glass, cards con blur |

**Gradiente de marca:** `linear-gradient(135deg, #F7941D, #7B2FBE)`
Usado en hero background glow, CTAs destacados y elementos de énfasis.

### Tipografía

| Uso | Fuente | Peso |
|-----|--------|------|
| Headlines / Marca | Fustat | Bold (700) |
| Body / UI / Nav | Inter | Regular (400) y Medium (500) |

### Efectos Visuales

- **Navbar:** Liquid glass — `backdrop-blur-[50px]`, `bg-white/30`, borde `1px solid rgba(0,0,0,0.1)`, inner shadow
- **Animaciones:** blur-fade-up con stagger (opacity 0→1, blur 20px→0, translateY 40px→0)
- **Hero background:** Glow difuso con elipses borrosas en naranja y morado (top-left)
- **Cards:** hover lift suave + sombra `shadow-md → shadow-xl`
- **Fuente suavizada:** `-webkit-font-smoothing: antialiased`

### Referencia de Estilo

Base: Opción 3 (Liquid Glass / white background, SaaS-style)
Animaciones: Opción 2 (blur-fade-up con stagger)
Colores: Paleta propia naranja/morado (reemplaza el azul de la referencia)

---

## 6. Arquitectura del Sitio

### Jerarquía de Páginas

```
comercialmoderna.com/
├── /catalogo
│   ├── ?categoria=tecnologia
│   ├── ?categoria=oficina-papeleria
│   ├── ?categoria=hogar-estilo-vida
│   ├── ?categoria=exteriores-accesorios
│   └── ?categoria=logistica-embalaje
├── /portafolio
├── /proceso
├── /nosotros
└── /cotizar
```

### Navegación Header

`Logo` · `Catálogo` · `Portafolio` · `Proceso` · `Nosotros` · **[Cotizar Ahora]**

- Logo: izquierda, enlaza a `/`
- CTA "Cotizar Ahora": botón naranja, extremo derecho
- Navbar: sticky, liquid glass, aparece con blur-fade-down al cargar
- Mobile: hamburger menu con drawer lateral

### Footer (4 columnas)

| Columna | Links |
|---------|-------|
| Servicios | Regalos Empresariales · Productos Publicitarios · Kits Escolares |
| Catálogo | Tecnología · Oficina · Hogar · Exteriores |
| Empresa | Nosotros · Portafolio · Proceso |
| Contacto | WhatsApp · Email · Medellín, Colombia · Política de privacidad |

### URL Map

| Página | URL | SEO Priority |
|--------|-----|--------------|
| Homepage | `/` | Alta |
| Catálogo | `/catalogo` | Alta |
| Portafolio | `/portafolio` | Media |
| Proceso | `/proceso` | Media |
| Nosotros | `/nosotros` | Baja |
| Cotizar | `/cotizar` | Alta |

---

## 7. Diseño por Página

### 7.1 Homepage (`/`)

**Hero:**
- Fondo blanco con glow difuso naranja/morado (top-left, elipses borrosas)
- Headline: *"Cualquier producto. Tu marca. Llave en mano."*
- Subheadline: *"Soluciones corporativas personalizadas para empresas que quieren impactar — desde Medellín para todo Colombia."*
- CTA primario: **[Cotizar Ahora]** (naranja sólido)
- CTA secundario: **[Explorar Catálogo]** (outline)
- Animación blur-fade-up con stagger en todos los elementos

**Barra de confianza:**
- Logos de clientes en escala de grises: Nutresa · EAFIT · Leonisa · Auteco · (otros)
- Texto: *"Empresas que confían en nosotros"*
- Animación de scroll infinito (marquee) en mobile

**"¿Qué necesitas?" — 3 cards de entrada:**
- Regalos Empresariales → `/catalogo?tipo=regalos`
- Campañas Publicitarias → `/catalogo?tipo=publicitarios`
- Kits Escolares → `/catalogo?tipo=kits`
- Cada card: ícono, título, descripción de 1 línea, flecha

**"Todo es personalizable" — sección diferenciadora:**
- Headline: *"Si lo imaginas, lo conseguimos."*
- 3 columnas: Marcado con logo · Láser y screen · Embalaje a medida
- CTA: *"Ver cómo funciona →"* (enlaza a `/proceso`)

**Preview del catálogo:**
- 6 productos destacados en grid (3x2 desktop / 2x3 mobile)
- Cada card: foto, nombre, categoría badge, botón *"Cotizar"*
- Botón: **[Ver catálogo completo →]**

**Métricas (placeholders hasta confirmar números reales):**
- Empresas atendidas · Años de experiencia · Productos gestionados · Cobertura nacional

**CTA final:**
- Fondo: gradiente naranja → morado
- Headline: *"¿Tienes un proyecto en mente?"*
- Botón blanco: **[Hablemos]** → abre WhatsApp directo

---

### 7.2 Catálogo (`/catalogo`)

**Header de página:**
- Headline: *"Nuestro Catálogo"*
- Subheadline: *"Una muestra de lo que podemos hacer — si no lo ves aquí, pregúntanos."*

**Filtros:**
- Desktop: sidebar izquierda sticky
- Mobile: drawer inferior con botón "Filtrar"
- Filtro por categoría: Todos · Tecnología · Oficina y Papelería · Hogar · Exteriores · Logística
- Filtro por tipo: Regalos Empresariales · Productos Publicitarios · Kits Escolares
- Chips removibles para filtros activos
- Implementación: filtrado client-side en React (sin recarga de página) sobre el array de productos del JSON estático

**Grid de productos:**
- 3 columnas desktop / 2 tablet / 1 mobile
- Card: foto, nombre, categoría badge, descripción 1 línea, badges de personalización (Laser · Screen · Logo), botón **[Cotizar este producto]**
- El botón pre-llena el nombre del producto en el formulario de `/cotizar`

**PDF descargable:**
- Botón prominente: **[Descargar Catálogo PDF]**
- PDF diseñado estáticamente con el branding de Comercial Moderna (archivo subido manualmente, no generado dinámicamente — se actualiza cuando hay cambios grandes en el catálogo)
- Alojado en `/public/catalogo-comercial-moderna.pdf`

**Banner flotante inferior:**
- *"¿No encuentras lo que buscas? Conseguimos cualquier producto."*
- Botón: **[Escríbenos]** → WhatsApp directo

---

### 7.3 Portafolio (`/portafolio`)

**Header:**
- Headline: *"Proyectos que hablan por nosotros"*
- Subheadline: *"Cada entrega es una historia de confianza"*

**Grid de casos:**
- Cards grandes con foto real del proyecto
- Por cada caso: logo del cliente, categoría, descripción del reto y solución entregada
- Ejemplo: *"500 kits personalizados para campaña de Nutresa — entregados en 10 días"*

**Fuente de contenido:** fotos propias de trabajos anteriores

**CTA final:**
- *"¿Quieres que tu empresa sea el próximo caso?"*
- Botón: **[Cotizar mi proyecto]** → `/cotizar`

---

### 7.4 Proceso (`/proceso`)

**Header:**
- Headline: *"¿Cómo trabajamos?"*
- Subheadline: *"Simple, transparente y sin sorpresas."*

**4 pasos (horizontal desktop / vertical mobile):**
1. **Cuéntanos tu idea** — recibimos tu requerimiento, sin importar qué tan específico sea
2. **Te proponemos opciones** — buscamos las mejores alternativas en precio, material y tiempo
3. **Producción y personalización** — marcado con logo, láser, screen o bordado
4. **Entrega llave en mano** — en tu puerta, a tiempo, con garantía

**Sección diferenciadora:**
- Headline: *"Si lo imaginas, lo conseguimos."*
- Explicación: el catálogo es solo una muestra — pueden gestionar cualquier producto que el cliente necesite
- CTA: **[Cuéntanos tu idea →]** → `/cotizar`

---

### 7.5 Nosotros (`/nosotros`)

- Historia de la empresa (familia, Medellín, años de experiencia)
- Equipo (opcional — fotos y nombres si el cliente quiere mostrarlo)
- 4 valores: Cumplimiento · Capacidad operativa · Desarrollo a medida · Proveedores confiables
- Logos de clientes (Nutresa, EAFIT, Leonisa, Auteco, etc.)
- CTA: **[Trabaja con nosotros →]** → `/cotizar`

---

### 7.6 Cotizar (`/cotizar`)

**Formulario en 2 pasos:**

*Paso 1 — Tu solicitud:*
- Nombre completo (requerido)
- Empresa (requerido)
- Email (requerido)
- WhatsApp / Teléfono (requerido)
- Tipo de producto (dropdown: Regalos Empresariales / Productos Publicitarios / Kits Escolares / Otro)
- Cantidad aproximada
- Descripción libre: *"Cuéntanos tu idea"* (textarea)
- Adjuntar referencia — imagen o PDF (opcional)

*Paso 2 — Confirmación:*
- Resumen de la solicitud
- Mensaje: *"Te contactamos en menos de 24 horas hábiles"*
- Botón alternativo: **[También puedes escribirnos por WhatsApp]**

**Al enviar el formulario:**
1. Email con todos los datos llega a la bandeja de Comercial Moderna (via Resend) — se necesita email destino de la empresa
2. Se abre WhatsApp con mensaje pre-llenado: nombre, empresa, tipo de producto y descripción — se necesita número de WhatsApp Business de Comercial Moderna

---

## 8. SEO Strategy

### Keywords Objetivo

| Página | Keyword principal | Keywords secundarias |
|--------|------------------|---------------------|
| Homepage | `regalos empresariales Medellín` | `productos corporativos Colombia`, `soluciones corporativas personalizadas` |
| Catálogo | `catálogo productos publicitarios Colombia` | `artículos promocionales con logo`, `regalos corporativos personalizados` |
| Regalos | `regalos empresariales personalizados Colombia` | `detalles corporativos para eventos`, `kit corporativo empresas` |
| Publicitarios | `artículos publicitarios con logo Medellín` | `productos de marca personalizados` |
| Kits | `kits escolares para empresas y fundaciones` | `útiles escolares corporativos Colombia` |
| Cotizar | `cotizar regalos corporativos Medellín` | `solicitar cotización productos publicitarios` |

### Implementaciones SEO Técnico

- `<title>` y `<meta description>` únicos por página
- Open Graph tags para compartir en redes
- Schema markup: `LocalBusiness` en homepage (nombre, dirección Medellín, teléfono)
- Schema markup: `BreadcrumbList` en catálogo y subpáginas
- Sitemap XML generado automáticamente por Next.js
- `robots.txt` configurado
- Imágenes con `alt` descriptivo y optimizadas con `next/image`
- URLs en español con guiones (`/catalogo/regalos-empresariales`)

---

## 9. Contenido — Estado Inicial

| Elemento | Estado |
|----------|--------|
| Logo | ✅ Disponible |
| Fotos de trabajos propios | ✅ Disponible (portafolio y catálogo parcial) |
| Fotos de productos genéricos | ✅ De proveedores |
| Logos de clientes | ✅ Nutresa, EAFIT, Leonisa, Auteco (confirmar otros) |
| Textos / copy | ⬜ Por escribir (basado en este spec) |
| Métricas reales | ⬜ Pendiente confirmar números |
| Casos de éxito detallados | ⬜ Pendiente redactar |
| Catálogo en JSON | ⬜ Por construir con fotos y datos |
| PDF del catálogo | ⬜ Por diseñar |

---

## 10. Decisiones de Diseño Clave

1. **Catálogo = portafolio de capacidades**, no tienda — el mensaje "si no lo ves, pregúntanos" es permanente
2. **PDF descargable** + web cards — el PDF viaja por WhatsApp entre decisores B2B
3. **WhatsApp + email** en el formulario — el cliente elige cómo ser contactado
4. **No hay precios en el sitio** — todo va a cotización, que es el modelo del negocio
5. **Arquitectura plana (máx 2 niveles)** — cualquier página en 2 clics desde el home
6. **Liquid glass navbar** + blur-fade-up animations — visual premium sin ser recargado
