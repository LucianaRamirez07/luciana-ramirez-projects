# Comercial Moderna — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional B2B marketing website for Comercial Moderna Corp. with catalog, portfolio, and lead generation (WhatsApp + email).

**Architecture:** Next.js 15 App Router with TypeScript arrays as static data source for catalog and portfolio. Client-side filtering on catalog page. Form submission via Next.js API route → Resend email + WhatsApp wa.me link.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v3, React Hook Form, Resend, Vitest + React Testing Library, Vercel

**Spec:** `docs/superpowers/specs/2026-04-24-comercial-moderna-web-design.md`

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata base, Navbar, Footer
│   ├── page.tsx                # Homepage
│   ├── catalogo/page.tsx       # Catalog with client-side filters
│   ├── portafolio/page.tsx     # Portfolio / case studies
│   ├── proceso/page.tsx        # How we work
│   ├── nosotros/page.tsx       # About us
│   ├── cotizar/page.tsx        # Quote request page
│   └── api/cotizar/route.ts    # POST: sends email via Resend
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky liquid-glass nav + mobile drawer
│   │   └── Footer.tsx          # 4-column footer
│   ├── ui/
│   │   ├── Button.tsx          # Variant: primary | outline | ghost
│   │   ├── Badge.tsx           # Category / tipo badges
│   │   └── ProductCard.tsx     # Used in catalog grid + home preview
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ClientBar.tsx       # Grayscale logos marquee
│   │   ├── NeedsSection.tsx    # 3 entry cards
│   │   ├── CustomSection.tsx   # "Si lo imaginas" differentiator
│   │   ├── CatalogPreview.tsx  # 6 featured products
│   │   ├── MetricsSection.tsx  # Stats counters
│   │   └── FinalCTA.tsx        # Gradient CTA band
│   ├── catalog/
│   │   ├── FilterSidebar.tsx   # Desktop sticky sidebar
│   │   ├── FilterDrawer.tsx    # Mobile bottom drawer
│   │   ├── FilterChips.tsx     # Active filter pills
│   │   └── ProductGrid.tsx     # Filtered product grid
│   ├── portfolio/
│   │   └── CaseCard.tsx
│   └── cotizar/
│       └── QuoteForm.tsx       # 2-step form
├── data/
│   ├── products.ts             # Product catalog array
│   └── cases.ts                # Portfolio cases array
├── lib/
│   └── whatsapp.ts             # buildWhatsAppUrl(data) utility
├── styles/
│   └── globals.css             # Tailwind imports + animations + fonts
└── types/
    └── index.ts                # Product, Case, QuoteFormData types
```

---

## Task 1: Initialize Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `.env.example`, `.gitignore`

- [ ] **Step 1: Scaffold Next.js project**

```bash
cd "/Users/lucianaramirez/Proyectos/Comercial Moderna"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

When prompted, accept all defaults.

- [ ] **Step 2: Install dependencies**

```bash
npm install react-hook-form @hookform/resolvers zod resend
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 3: Create `.env.example`**

```bash
cat > .env.example << 'EOF'
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_TO=luciana@comercialmoderna.com
WHATSAPP_NUMBER=573005544573
EOF
```

- [ ] **Step 4: Create `.env.local` with real values**

```bash
cat > .env.local << 'EOF'
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_TO=luciana@comercialmoderna.com
WHATSAPP_NUMBER=573005544573
EOF
```

Replace `RESEND_API_KEY` with key from resend.com (free tier sufficient).

- [ ] **Step 5: Add vitest config to `vitest.config.ts`**

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
```

- [ ] **Step 6: Create test setup file**

```bash
mkdir -p src/test
cat > src/test/setup.ts << 'EOF'
import '@testing-library/jest-dom'
EOF
```

- [ ] **Step 7: Add test script to `package.json`**

In `package.json`, add to `"scripts"`:
```json
"test": "vitest",
"test:run": "vitest run"
```

- [ ] **Step 8: Verify project runs**

```bash
npm run dev
```

Expected: Next.js running at http://localhost:3000

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js 15 project with Tailwind and Vitest"
```

---

## Task 2: Design Tokens + Global Styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Replace `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F7941D',
        secondary: '#7B2FBE',
        dark: '#1A1A1A',
        muted: '#6F6F6F',
        surface: '#FFFFFF',
      },
      fontFamily: {
        fustat: ['var(--font-fustat)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #F7941D, #7B2FBE)',
      },
      keyframes: {
        blurFadeUp: {
          from: { opacity: '0', filter: 'blur(20px)', transform: 'translateY(40px)' },
          to: { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'blur-fade-up': 'blurFadeUp 0.8s ease-out forwards',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: Replace `src/styles/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * { -webkit-font-smoothing: antialiased; }
  body { @apply bg-surface text-dark font-inter; }
  h1, h2, h3, h4 { @apply font-fustat; }
}

@layer utilities {
  .liquid-glass {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
  }

  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }
  .animate-delay-600 { animation-delay: 600ms; }

  .opacity-0-init { opacity: 0; }
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts src/styles/globals.css
git commit -m "feat: add design tokens and global styles with animations"
```

---

## Task 3: TypeScript Types

**Files:**
- Create: `src/types/index.ts`

- [ ] **Step 1: Write types**

```typescript
// src/types/index.ts

export type ProductCategory =
  | 'tecnologia'
  | 'oficina-papeleria'
  | 'hogar-estilo-vida'
  | 'exteriores-accesorios'
  | 'logistica-embalaje'

export type ProductTipo =
  | 'regalos-empresariales'
  | 'productos-publicitarios'
  | 'kits-escolares'

export type CustomizationType = 'logo' | 'laser' | 'screen' | 'bordado'

export interface Product {
  id: string
  name: string
  description: string
  category: ProductCategory
  tipo: ProductTipo[]
  image: string
  customizations: CustomizationType[]
  featured: boolean
}

export interface PortfolioCase {
  id: string
  client: string
  clientLogo: string
  category: ProductCategory
  title: string
  description: string
  image: string
  quantity?: string
  deliveryTime?: string
}

export interface QuoteFormData {
  nombre: string
  empresa: string
  email: string
  whatsapp: string
  tipo: string
  cantidad: string
  descripcion: string
  referencia?: FileList
}

export interface FilterState {
  categoria: ProductCategory | 'todos'
  tipo: ProductTipo | 'todos'
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: add shared TypeScript types"
```

---

## Task 4: Data Layer

**Files:**
- Create: `src/data/products.ts`
- Create: `src/data/cases.ts`

- [ ] **Step 1: Create product catalog data**

```typescript
// src/data/products.ts
import { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'parlante-bluetooth-bambu',
    name: 'Parlante Bluetooth Bambú',
    description: 'Parlante inalámbrico con acabado en bambú sostenible, personalizable con logo.',
    category: 'tecnologia',
    tipo: ['regalos-empresariales', 'productos-publicitarios'],
    image: '/products/parlante-bambu.jpg',
    customizations: ['logo', 'laser'],
    featured: true,
  },
  {
    id: 'libreta-ejecutiva',
    name: 'Libreta Ejecutiva',
    description: 'Agenda ejecutiva tapa dura con personalización de logo en relieve.',
    category: 'oficina-papeleria',
    tipo: ['regalos-empresariales', 'kits-escolares'],
    image: '/products/libreta-ejecutiva.jpg',
    customizations: ['logo', 'laser', 'screen'],
    featured: true,
  },
  {
    id: 'termo-acero',
    name: 'Termo Acero Inoxidable',
    description: 'Termo de 500ml con impresión full color o grabado láser.',
    category: 'hogar-estilo-vida',
    tipo: ['regalos-empresariales', 'productos-publicitarios'],
    image: '/products/termo-acero.jpg',
    customizations: ['logo', 'laser', 'screen'],
    featured: true,
  },
  {
    id: 'paraguas-ejecutivo',
    name: 'Paraguas Ejecutivo',
    description: 'Paraguas resistente con varillas de fibra de vidrio y tela personalizable.',
    category: 'exteriores-accesorios',
    tipo: ['regalos-empresariales', 'productos-publicitarios'],
    image: '/products/paraguas-ejecutivo.jpg',
    customizations: ['logo', 'screen'],
    featured: true,
  },
  {
    id: 'bolsa-reciclable',
    name: 'Bolsa Tela Reciclable',
    description: 'Bolsa ecológica de tela no tejida con impresión de logo a 1 o 4 colores.',
    category: 'logistica-embalaje',
    tipo: ['productos-publicitarios', 'kits-escolares'],
    image: '/products/bolsa-reciclable.jpg',
    customizations: ['logo', 'screen'],
    featured: true,
  },
  {
    id: 'kit-oficina',
    name: 'Kit de Oficina Premium',
    description: 'Set ejecutivo con libreta, bolígrafo, USB y tarjetero en caja de regalo.',
    category: 'oficina-papeleria',
    tipo: ['regalos-empresariales'],
    image: '/products/kit-oficina.jpg',
    customizations: ['logo', 'laser', 'screen'],
    featured: true,
  },
  {
    id: 'gorra-empresarial',
    name: 'Gorra Empresarial',
    description: 'Gorra premium en diferentes colores con bordado de logo en frente.',
    category: 'exteriores-accesorios',
    tipo: ['regalos-empresariales', 'productos-publicitarios'],
    image: '/products/gorra.jpg',
    customizations: ['logo', 'bordado'],
    featured: false,
  },
  {
    id: 'kit-escolar',
    name: 'Kit Escolar Completo',
    description: 'Paquete de útiles escolares para fundaciones: cuadernos, colores, maleta y más.',
    category: 'oficina-papeleria',
    tipo: ['kits-escolares'],
    image: '/products/kit-escolar.jpg',
    customizations: ['logo', 'screen'],
    featured: false,
  },
  {
    id: 'cooler-portatil',
    name: 'Nevera Portátil (Cooler)',
    description: 'Cooler de 20L con aislamiento térmico y logo impreso en laterales.',
    category: 'exteriores-accesorios',
    tipo: ['regalos-empresariales'],
    image: '/products/cooler.jpg',
    customizations: ['logo', 'screen'],
    featured: false,
  },
  {
    id: 'lanyard',
    name: 'Lanyard Sublimado',
    description: 'Cordón porta-carnet full color con hebilla metálica y mosquetón.',
    category: 'logistica-embalaje',
    tipo: ['productos-publicitarios', 'kits-escolares'],
    image: '/products/lanyard.jpg',
    customizations: ['logo', 'screen'],
    featured: false,
  },
]
```

- [ ] **Step 2: Create portfolio cases data**

```typescript
// src/data/cases.ts
import { PortfolioCase } from '@/types'

export const cases: PortfolioCase[] = [
  {
    id: 'nutresa-kits',
    client: 'Nutresa',
    clientLogo: '/clients/nutresa.png',
    category: 'oficina-papeleria',
    title: '500 kits ejecutivos para campaña interna',
    description: 'Diseñamos y entregamos 500 kits personalizados con libreta, termo y bolígrafo para la campaña de fin de año de Nutresa. Entrega en 10 días hábiles en toda Colombia.',
    image: '/portfolio/nutresa-kits.jpg',
    quantity: '500 unidades',
    deliveryTime: '10 días hábiles',
  },
  {
    id: 'eafit-dotacion',
    client: 'EAFIT',
    clientLogo: '/clients/eafit.png',
    category: 'exteriores-accesorios',
    title: 'Dotación deportiva para evento universitario',
    description: 'Suministro de gorras, termos y bolsas ecológicas para evento de bienvenida con más de 800 estudiantes. Bordado y sublimación con imagen institucional.',
    image: '/portfolio/eafit-dotacion.jpg',
    quantity: '800 unidades',
    deliveryTime: '15 días hábiles',
  },
  {
    id: 'leonisa-regalos',
    client: 'Leonisa',
    clientLogo: '/clients/leonisa.png',
    category: 'hogar-estilo-vida',
    title: 'Regalos de temporada para fuerza de ventas',
    description: 'Cafeteras de prensa francesa y portacomidas ecológicos personalizados para obsequiar a los mejores vendedores de la temporada.',
    image: '/portfolio/leonisa-regalos.jpg',
    quantity: '200 unidades',
    deliveryTime: '8 días hábiles',
  },
  {
    id: 'auteco-publicitarios',
    client: 'Auteco',
    clientLogo: '/clients/auteco.png',
    category: 'tecnologia',
    title: 'Parlantes Bluetooth para lanzamiento de producto',
    description: 'Parlantes Bluetooth con carcasa en bambú grabados con láser para regalo de aliados estratégicos en el lanzamiento de nueva línea de motos.',
    image: '/portfolio/auteco-parlantes.jpg',
    quantity: '150 unidades',
    deliveryTime: '12 días hábiles',
  },
]
```

- [ ] **Step 3: Commit**

```bash
git add src/data/
git commit -m "feat: add static product catalog and portfolio case data"
```

---

## Task 5: WhatsApp Utility (TDD)

**Files:**
- Create: `src/lib/whatsapp.ts`
- Create: `src/lib/__tests__/whatsapp.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// src/lib/__tests__/whatsapp.test.ts
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
```

- [ ] **Step 2: Run tests — expect FAIL**

```bash
npm run test:run src/lib/__tests__/whatsapp.test.ts
```

Expected: FAIL — `buildWhatsAppUrl` not found.

- [ ] **Step 3: Implement `whatsapp.ts`**

```typescript
// src/lib/whatsapp.ts
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
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
npm run test:run src/lib/__tests__/whatsapp.test.ts
```

Expected: 3 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/
git commit -m "feat: add WhatsApp URL builder with tests"
```

---

## Task 6: UI Primitives — Button + Badge

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Badge.tsx`

- [ ] **Step 1: Create Button component**

```typescript
// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-inter font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-dark hover:bg-dark/5',
      white: 'bg-white text-dark hover:bg-white/90',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
```

- [ ] **Step 2: Create Badge component**

```typescript
// src/components/ui/Badge.tsx
import { cn } from '@/lib/utils'
import { ProductCategory, ProductTipo } from '@/types'

const categoryLabels: Record<ProductCategory, string> = {
  'tecnologia': 'Tecnología',
  'oficina-papeleria': 'Oficina y Papelería',
  'hogar-estilo-vida': 'Hogar',
  'exteriores-accesorios': 'Exteriores',
  'logistica-embalaje': 'Logística',
}

const tipoLabels: Record<ProductTipo, string> = {
  'regalos-empresariales': 'Regalos Empresariales',
  'productos-publicitarios': 'Prod. Publicitarios',
  'kits-escolares': 'Kits Escolares',
}

interface BadgeProps {
  category?: ProductCategory
  tipo?: ProductTipo
  label?: string
  className?: string
}

export function Badge({ category, tipo, label, className }: BadgeProps) {
  const text = label ?? (category ? categoryLabels[category] : tipo ? tipoLabels[tipo] : '')

  return (
    <span className={cn(
      'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium font-inter',
      'bg-secondary/10 text-secondary border border-secondary/20',
      className
    )}>
      {text}
    </span>
  )
}
```

- [ ] **Step 3: Create `src/lib/utils.ts`** (cn helper)

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 4: Install clsx + tailwind-merge**

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/ src/lib/utils.ts
git commit -m "feat: add Button, Badge UI primitives and cn utility"
```

---

## Task 7: ProductCard Component

**Files:**
- Create: `src/components/ui/ProductCard.tsx`

- [ ] **Step 1: Create ProductCard**

```typescript
// src/components/ui/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Badge } from './Badge'

interface ProductCardProps {
  product: Product
  compact?: boolean
}

const customizationLabels = {
  logo: 'Logo',
  laser: 'Láser',
  screen: 'Screen',
  bordado: 'Bordado',
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const quoteUrl = `/cotizar?producto=${encodeURIComponent(product.name)}`

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/3' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <Badge category={product.category} />
        <h3 className="font-fustat font-bold text-dark text-lg leading-snug">{product.name}</h3>

        {!compact && (
          <p className="text-muted text-sm font-inter leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {product.customizations.map((c) => (
            <span key={c} className="text-xs px-2 py-0.5 bg-gray-100 text-muted rounded-full font-inter">
              {customizationLabels[c]}
            </span>
          ))}
        </div>

        <Link
          href={quoteUrl}
          className="mt-3 w-full text-center bg-primary text-white font-inter font-medium text-sm py-2.5 rounded-full hover:bg-primary/90 transition-colors"
        >
          Cotizar
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/ProductCard.tsx
git commit -m "feat: add ProductCard component"
```

---

## Task 8: Navbar

**Files:**
- Create: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Create Navbar**

```typescript
// src/components/layout/Navbar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/nosotros', label: 'Nosotros' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="liquid-glass mx-4 mt-4 rounded-2xl px-6 py-3 max-w-6xl xl:mx-auto">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Comercial Moderna" width={140} height={40} className="h-9 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'font-inter text-sm transition-colors',
                    pathname === link.href ? 'text-primary font-medium' : 'text-muted hover:text-dark'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/cotizar"
              className="hidden sm:inline-flex items-center bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              Cotizar Ahora
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
              aria-label="Menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pt-3 pb-2 border-t border-black/5 mt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'font-inter text-sm px-3 py-2 rounded-xl transition-colors',
                  pathname === link.href ? 'text-primary bg-primary/5 font-medium' : 'text-dark hover:bg-black/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cotizar"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-primary text-white font-inter font-medium text-sm px-5 py-2.5 rounded-full"
            >
              Cotizar Ahora
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: add liquid glass Navbar with mobile drawer"
```

---

## Task 9: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer**

```typescript
// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const columns = [
  {
    title: 'Servicios',
    links: [
      { href: '/catalogo?tipo=regalos-empresariales', label: 'Regalos Empresariales' },
      { href: '/catalogo?tipo=productos-publicitarios', label: 'Productos Publicitarios' },
      { href: '/catalogo?tipo=kits-escolares', label: 'Kits Escolares' },
    ],
  },
  {
    title: 'Catálogo',
    links: [
      { href: '/catalogo?categoria=tecnologia', label: 'Tecnología' },
      { href: '/catalogo?categoria=oficina-papeleria', label: 'Oficina y Papelería' },
      { href: '/catalogo?categoria=hogar-estilo-vida', label: 'Hogar' },
      { href: '/catalogo?categoria=exteriores-accesorios', label: 'Exteriores' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { href: '/nosotros', label: 'Nosotros' },
      { href: '/portafolio', label: 'Portafolio' },
      { href: '/proceso', label: 'Cómo trabajamos' },
    ],
  },
]

export function Footer() {
  const waUrl = 'https://wa.me/573005544573'

  return (
    <footer className="bg-dark text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/logo.png" alt="Comercial Moderna" width={130} height={38} className="h-9 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm text-gray-400 font-inter leading-relaxed">
              Soluciones corporativas personalizadas desde Medellín para todo Colombia.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-inter hover:text-primary/80 transition-colors"
            >
              WhatsApp: +57 300 554 4573
            </a>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-fustat font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 font-inter hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-gray-500 font-inter">
          <span>© {new Date().getFullYear()} Comercial Moderna Corp. S.A.S. Medellín, Colombia.</span>
          <span>luciana@comercialmoderna.com</span>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: add Footer with 4-column layout"
```

---

## Task 10: Root Layout + Fonts

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace root layout**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Fustat } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fustat = Fustat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-fustat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Comercial Moderna | Regalos Empresariales Medellín',
    template: '%s | Comercial Moderna',
  },
  description: 'Soluciones corporativas personalizadas: regalos empresariales, productos publicitarios y kits escolares. Medellín, Colombia.',
  metadataBase: new URL('https://www.comercialmoderna.com'),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.comercialmoderna.com',
    siteName: 'Comercial Moderna',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fustat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: set up root layout with fonts, Navbar and Footer"
```

---

## Task 11: Homepage — Hero + ClientBar

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/ClientBar.tsx`

- [ ] **Step 1: Create Hero**

```typescript
// src/components/home/Hero.tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 left-[200px] w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] bg-secondary -translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-inter font-medium mb-8 opacity-0-init animate-blur-fade-up"
        >
          Conectados contigo · Medellín, Colombia
        </div>

        <h1
          className="font-fustat font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dark leading-[1.0] tracking-tight max-w-4xl mx-auto opacity-0-init animate-blur-fade-up animate-delay-100"
        >
          Cualquier producto.{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">Tu marca.</span>{' '}
          Llave en mano.
        </h1>

        <p
          className="mt-8 text-lg sm:text-xl text-muted font-inter max-w-2xl mx-auto leading-relaxed opacity-0-init animate-blur-fade-up animate-delay-200"
        >
          Soluciones corporativas personalizadas para empresas que quieren impactar — desde Medellín para todo Colombia.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-blur-fade-up animate-delay-300">
          <Link
            href="/cotizar"
            className="inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full text-base hover:bg-primary/90 hover:scale-[1.02] transition-all"
          >
            Cotizar Ahora
          </Link>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center border-2 border-dark/20 text-dark font-inter font-medium px-8 py-4 rounded-full text-base hover:border-primary hover:text-primary transition-all"
          >
            Explorar Catálogo
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create ClientBar**

```typescript
// src/components/home/ClientBar.tsx
import Image from 'next/image'

const clients = [
  { name: 'Nutresa', logo: '/clients/nutresa.png' },
  { name: 'EAFIT', logo: '/clients/eafit.png' },
  { name: 'Leonisa', logo: '/clients/leonisa.png' },
  { name: 'Auteco', logo: '/clients/auteco.png' },
]

export function ClientBar() {
  return (
    <section className="py-12 border-y border-gray-100">
      <p className="text-center text-xs font-inter text-muted uppercase tracking-widest mb-8">
        Empresas que confían en nosotros
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-16 items-center w-max">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-shrink-0 h-8 w-28 relative grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Hero.tsx src/components/home/ClientBar.tsx
git commit -m "feat: add Hero and ClientBar sections"
```

---

## Task 12: Homepage — NeedsSection + CustomSection

**Files:**
- Create: `src/components/home/NeedsSection.tsx`
- Create: `src/components/home/CustomSection.tsx`

- [ ] **Step 1: Create NeedsSection**

```typescript
// src/components/home/NeedsSection.tsx
import Link from 'next/link'

const needs = [
  {
    icon: '🎁',
    title: 'Regalos Empresariales',
    description: 'Detalles corporativos para eventos, fidelización y campañas.',
    href: '/catalogo?tipo=regalos-empresariales',
  },
  {
    icon: '📢',
    title: 'Campañas Publicitarias',
    description: 'Artículos de marca para posicionamiento y marketing.',
    href: '/catalogo?tipo=productos-publicitarios',
  },
  {
    icon: '🎒',
    title: 'Kits Escolares',
    description: 'Paquetes de útiles para fundaciones y programas sociales.',
    href: '/catalogo?tipo=kits-escolares',
  },
]

export function NeedsSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-dark">¿Qué necesitas?</h2>
        <p className="mt-3 text-muted font-inter">Cuéntanos tu caso — lo conseguimos y lo personalizamos.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {needs.map((need) => (
          <Link
            key={need.href}
            href={need.href}
            className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all bg-white"
          >
            <span className="text-4xl">{need.icon}</span>
            <h3 className="mt-4 font-fustat font-bold text-xl text-dark">{need.title}</h3>
            <p className="mt-2 text-sm text-muted font-inter leading-relaxed">{need.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-inter font-medium group-hover:gap-2 transition-all">
              Ver productos →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create CustomSection**

```typescript
// src/components/home/CustomSection.tsx
import Link from 'next/link'

const capabilities = [
  { icon: '🖨️', title: 'Marcado con Logo', description: 'Screen, sublimación o impresión full color sobre cualquier superficie.' },
  { icon: '⚡', title: 'Láser y Grabado', description: 'Grabado de precisión en metal, madera, cuero y materiales sostenibles.' },
  { icon: '📦', title: 'Embalaje a Medida', description: 'Cajas, bolsas y presentaciones personalizadas listas para entregar.' },
]

export function CustomSection() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-dark">
            Si lo imaginas,{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">lo conseguimos.</span>
          </h2>
          <p className="mt-3 text-muted font-inter max-w-xl mx-auto">
            El catálogo es solo una muestra. Trabajamos con cualquier producto que necesites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-white p-6 rounded-2xl border border-gray-100">
              <span className="text-3xl">{cap.icon}</span>
              <h3 className="mt-3 font-fustat font-bold text-lg text-dark">{cap.title}</h3>
              <p className="mt-2 text-sm text-muted font-inter leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/proceso" className="text-primary font-inter font-medium hover:text-primary/80 transition-colors">
            Ver cómo trabajamos →
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/NeedsSection.tsx src/components/home/CustomSection.tsx
git commit -m "feat: add NeedsSection and CustomSection home components"
```

---

## Task 13: Homepage — CatalogPreview + MetricsSection + FinalCTA

**Files:**
- Create: `src/components/home/CatalogPreview.tsx`
- Create: `src/components/home/MetricsSection.tsx`
- Create: `src/components/home/FinalCTA.tsx`

- [ ] **Step 1: Create CatalogPreview**

```typescript
// src/components/home/CatalogPreview.tsx
import Link from 'next/link'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ui/ProductCard'

export function CatalogPreview() {
  const featured = products.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-dark">Muestra del catálogo</h2>
          <p className="mt-2 text-muted font-inter">Una fracción de lo que podemos hacer.</p>
        </div>
        <Link href="/catalogo" className="hidden sm:inline text-primary font-inter font-medium text-sm hover:text-primary/80 transition-colors">
          Ver todo →
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} compact />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/catalogo"
          className="inline-flex items-center justify-center border-2 border-primary text-primary font-inter font-medium px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all"
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create MetricsSection**

```typescript
// src/components/home/MetricsSection.tsx

const metrics = [
  { value: '+50', label: 'Empresas atendidas' },
  { value: '+8', label: 'Años de experiencia' },
  { value: '+500', label: 'Productos gestionados' },
  { value: '100%', label: 'Cobertura nacional' },
]

export function MetricsSection() {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="font-fustat font-bold text-4xl sm:text-5xl bg-brand-gradient bg-clip-text text-transparent">
              {m.value}
            </div>
            <div className="mt-2 text-sm font-inter text-gray-400">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create FinalCTA**

```typescript
// src/components/home/FinalCTA.tsx
import Link from 'next/link'

export function FinalCTA() {
  const waUrl = 'https://wa.me/573005544573?text=' + encodeURIComponent('Hola, quiero información sobre sus productos.')

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center bg-brand-gradient rounded-3xl py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl" />
        <div className="relative">
          <h2 className="font-fustat font-bold text-3xl sm:text-4xl text-white leading-snug">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-white/80 font-inter text-lg">
            Cuéntanos tu idea — sin importar qué tan específica sea, la hacemos realidad.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center bg-white text-dark font-inter font-medium px-8 py-4 rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all"
            >
              Solicitar cotización
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/home/
git commit -m "feat: add CatalogPreview, MetricsSection and FinalCTA home sections"
```

---

## Task 14: Assemble Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Assemble homepage**

```typescript
// src/app/page.tsx
import { Hero } from '@/components/home/Hero'
import { ClientBar } from '@/components/home/ClientBar'
import { NeedsSection } from '@/components/home/NeedsSection'
import { CustomSection } from '@/components/home/CustomSection'
import { CatalogPreview } from '@/components/home/CatalogPreview'
import { MetricsSection } from '@/components/home/MetricsSection'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientBar />
      <NeedsSection />
      <CustomSection />
      <CatalogPreview />
      <MetricsSection />
      <FinalCTA />
    </>
  )
}
```

- [ ] **Step 2: Verify homepage renders**

```bash
npm run dev
```

Open http://localhost:3000 and verify all sections render without errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble homepage with all sections"
```

---

## Task 15: Catalog — Filter Logic (TDD)

**Files:**
- Create: `src/lib/filterProducts.ts`
- Create: `src/lib/__tests__/filterProducts.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// src/lib/__tests__/filterProducts.test.ts
import { describe, it, expect } from 'vitest'
import { filterProducts } from '../filterProducts'
import { products } from '@/data/products'

describe('filterProducts', () => {
  it('returns all products when no filter applied', () => {
    const result = filterProducts(products, { categoria: 'todos', tipo: 'todos' })
    expect(result).toHaveLength(products.length)
  })

  it('filters by category', () => {
    const result = filterProducts(products, { categoria: 'tecnologia', tipo: 'todos' })
    expect(result.every((p) => p.category === 'tecnologia')).toBe(true)
  })

  it('filters by tipo', () => {
    const result = filterProducts(products, { categoria: 'todos', tipo: 'kits-escolares' })
    expect(result.every((p) => p.tipo.includes('kits-escolares'))).toBe(true)
  })

  it('filters by both category and tipo', () => {
    const result = filterProducts(products, { categoria: 'oficina-papeleria', tipo: 'kits-escolares' })
    result.forEach((p) => {
      expect(p.category).toBe('oficina-papeleria')
      expect(p.tipo).toContain('kits-escolares')
    })
  })

  it('returns empty array when no products match', () => {
    const result = filterProducts(products, { categoria: 'tecnologia', tipo: 'kits-escolares' })
    expect(result).toHaveLength(0)
  })
})
```

- [ ] **Step 2: Run — expect FAIL**

```bash
npm run test:run src/lib/__tests__/filterProducts.test.ts
```

Expected: FAIL — `filterProducts` not found.

- [ ] **Step 3: Implement**

```typescript
// src/lib/filterProducts.ts
import { Product, FilterState } from '@/types'

export function filterProducts(products: Product[], filter: FilterState): Product[] {
  return products.filter((product) => {
    const categoryMatch = filter.categoria === 'todos' || product.category === filter.categoria
    const tipoMatch = filter.tipo === 'todos' || product.tipo.includes(filter.tipo)
    return categoryMatch && tipoMatch
  })
}
```

- [ ] **Step 4: Run — expect PASS**

```bash
npm run test:run src/lib/__tests__/filterProducts.test.ts
```

Expected: 5 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/filterProducts.ts src/lib/__tests__/filterProducts.test.ts
git commit -m "feat: add filterProducts utility with tests"
```

---

## Task 16: Catalog Page

**Files:**
- Create: `src/components/catalog/FilterSidebar.tsx`
- Create: `src/components/catalog/FilterChips.tsx`
- Create: `src/components/catalog/ProductGrid.tsx`
- Create: `src/app/catalogo/page.tsx`

- [ ] **Step 1: Create FilterSidebar**

```typescript
// src/components/catalog/FilterSidebar.tsx
'use client'
import { cn } from '@/lib/utils'
import { FilterState, ProductCategory, ProductTipo } from '@/types'

const categories: { value: ProductCategory | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'tecnologia', label: 'Tecnología' },
  { value: 'oficina-papeleria', label: 'Oficina y Papelería' },
  { value: 'hogar-estilo-vida', label: 'Hogar y Estilo de Vida' },
  { value: 'exteriores-accesorios', label: 'Exteriores y Accesorios' },
  { value: 'logistica-embalaje', label: 'Logística y Embalaje' },
]

const tipos: { value: ProductTipo | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'regalos-empresariales', label: 'Regalos Empresariales' },
  { value: 'productos-publicitarios', label: 'Productos Publicitarios' },
  { value: 'kits-escolares', label: 'Kits Escolares' },
]

interface FilterSidebarProps {
  filter: FilterState
  onChange: (filter: FilterState) => void
}

export function FilterSidebar({ filter, onChange }: FilterSidebarProps) {
  return (
    <aside className="hidden md:block w-56 flex-shrink-0 sticky top-28 self-start">
      <div className="space-y-6">
        <div>
          <h3 className="font-fustat font-bold text-sm uppercase tracking-wider text-muted mb-3">Categoría</h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat.value}>
                <button
                  onClick={() => onChange({ ...filter, categoria: cat.value })}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-xl text-sm font-inter transition-colors',
                    filter.categoria === cat.value
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted hover:bg-gray-100 hover:text-dark'
                  )}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-fustat font-bold text-sm uppercase tracking-wider text-muted mb-3">Tipo</h3>
          <ul className="space-y-1">
            {tipos.map((t) => (
              <li key={t.value}>
                <button
                  onClick={() => onChange({ ...filter, tipo: t.value })}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-xl text-sm font-inter transition-colors',
                    filter.tipo === t.value
                      ? 'bg-secondary/10 text-secondary font-medium'
                      : 'text-muted hover:bg-gray-100 hover:text-dark'
                  )}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
```

- [ ] **Step 2: Create ProductGrid (client component with filter state)**

```typescript
// src/components/catalog/ProductGrid.tsx
'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { products } from '@/data/products'
import { filterProducts } from '@/lib/filterProducts'
import { FilterState, ProductCategory, ProductTipo } from '@/types'
import { FilterSidebar } from './FilterSidebar'
import { FilterChips } from './FilterChips'
import { ProductCard } from '@/components/ui/ProductCard'

export function ProductGrid() {
  const searchParams = useSearchParams()
  const [filter, setFilter] = useState<FilterState>({ categoria: 'todos', tipo: 'todos' })

  useEffect(() => {
    const categoria = (searchParams.get('categoria') ?? 'todos') as ProductCategory | 'todos'
    const tipo = (searchParams.get('tipo') ?? 'todos') as ProductTipo | 'todos'
    setFilter({ categoria, tipo })
  }, [searchParams])

  const filtered = filterProducts(products, filter)

  return (
    <div className="flex gap-8">
      <FilterSidebar filter={filter} onChange={setFilter} />

      <div className="flex-1 min-w-0">
        <FilterChips filter={filter} onChange={setFilter} count={filtered.length} />

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted font-inter">No hay productos con estos filtros.</p>
            <button
              onClick={() => setFilter({ categoria: 'todos', tipo: 'todos' })}
              className="mt-4 text-primary font-inter text-sm hover:text-primary/80"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create FilterChips**

```typescript
// src/components/catalog/FilterChips.tsx
import { FilterState } from '@/types'

const categoryLabels: Record<string, string> = {
  tecnologia: 'Tecnología',
  'oficina-papeleria': 'Oficina y Papelería',
  'hogar-estilo-vida': 'Hogar',
  'exteriores-accesorios': 'Exteriores',
  'logistica-embalaje': 'Logística',
}

const tipoLabels: Record<string, string> = {
  'regalos-empresariales': 'Regalos Empresariales',
  'productos-publicitarios': 'Prod. Publicitarios',
  'kits-escolares': 'Kits Escolares',
}

interface FilterChipsProps {
  filter: FilterState
  onChange: (filter: FilterState) => void
  count: number
}

export function FilterChips({ filter, onChange, count }: FilterChipsProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm text-muted font-inter">{count} productos</span>

      {filter.categoria !== 'todos' && (
        <button
          onClick={() => onChange({ ...filter, categoria: 'todos' })}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-inter"
        >
          {categoryLabels[filter.categoria]}
          <span>×</span>
        </button>
      )}

      {filter.tipo !== 'todos' && (
        <button
          onClick={() => onChange({ ...filter, tipo: 'todos' })}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-inter"
        >
          {tipoLabels[filter.tipo]}
          <span>×</span>
        </button>
      )}
    </div>
  )
}
```

- [ ] **Step 4: Create catalog page**

```typescript
// src/app/catalogo/page.tsx
import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductGrid } from '@/components/catalog/ProductGrid'

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Catálogo de productos publicitarios y regalos empresariales personalizados. Tecnología, oficina, hogar, exteriores y más.',
}

export default function CatalogoPage() {
  const waUrl = 'https://wa.me/573005544573?text=' + encodeURIComponent('Hola, busco un producto específico que no encontré en el catálogo.')

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Nuestro Catálogo</h1>
        <p className="mt-3 text-muted font-inter text-lg max-w-xl">
          Una muestra de lo que podemos hacer — si no lo ves aquí, pregúntanos.
        </p>
        <a
          href="/catalogo-comercial-moderna.pdf"
          download
          className="mt-5 inline-flex items-center gap-2 border border-dark/20 text-dark font-inter text-sm px-5 py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors"
        >
          ↓ Descargar Catálogo PDF
        </a>
      </div>

      {/* Filter + Grid */}
      <Suspense fallback={<div className="text-muted font-inter">Cargando...</div>}>
        <ProductGrid />
      </Suspense>

      {/* Bottom banner */}
      <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
        <p className="font-fustat font-bold text-xl text-dark">¿No encuentras lo que buscas?</p>
        <p className="mt-2 text-muted font-inter">Conseguimos cualquier producto. Cuéntanos tu idea.</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-7 py-3 rounded-full hover:bg-primary/90 transition-all"
        >
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Verify catalog page**

```bash
npm run dev
```

Open http://localhost:3000/catalogo — verify filters work and products display.

- [ ] **Step 6: Commit**

```bash
git add src/components/catalog/ src/app/catalogo/
git commit -m "feat: add catalog page with client-side filtering"
```

---

## Task 17: Portfolio Page

**Files:**
- Create: `src/components/portfolio/CaseCard.tsx`
- Create: `src/app/portafolio/page.tsx`

- [ ] **Step 1: Create CaseCard**

```typescript
// src/components/portfolio/CaseCard.tsx
import Image from 'next/image'
import { PortfolioCase } from '@/types'

export function CaseCard({ case: c }: { case: PortfolioCase }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative h-7 w-20">
            <Image src={c.clientLogo} alt={c.client} fill className="object-contain object-left" />
          </div>
        </div>
        <h3 className="font-fustat font-bold text-xl text-dark">{c.title}</h3>
        <p className="mt-2 text-muted font-inter text-sm leading-relaxed">{c.description}</p>
        {(c.quantity || c.deliveryTime) && (
          <div className="mt-4 flex gap-4">
            {c.quantity && (
              <span className="text-xs font-inter text-primary font-medium">{c.quantity}</span>
            )}
            {c.deliveryTime && (
              <span className="text-xs font-inter text-muted">{c.deliveryTime}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create portfolio page**

```typescript
// src/app/portafolio/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { cases } from '@/data/cases'
import { CaseCard } from '@/components/portfolio/CaseCard'

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Proyectos reales con Nutresa, EAFIT, Leonisa y Auteco. Regalos y productos corporativos personalizados entregados en toda Colombia.',
}

export default function PortafolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Proyectos que hablan por nosotros</h1>
        <p className="mt-4 text-muted font-inter text-lg max-w-xl mx-auto">Cada entrega es una historia de confianza.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c) => (
          <CaseCard key={c.id} case={c} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="font-fustat font-bold text-2xl text-dark">¿Quieres que tu empresa sea el próximo caso?</p>
        <Link
          href="/cotizar"
          className="mt-6 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 hover:scale-[1.02] transition-all"
        >
          Cotizar mi proyecto
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/portfolio/ src/app/portafolio/
git commit -m "feat: add portfolio page with case cards"
```

---

## Task 18: Process + About Pages

**Files:**
- Create: `src/app/proceso/page.tsx`
- Create: `src/app/nosotros/page.tsx`

- [ ] **Step 1: Create proceso page**

```typescript
// src/app/proceso/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo trabajamos',
  description: 'Proceso de trabajo de Comercial Moderna: desde tu idea hasta la entrega llave en mano.',
}

const steps = [
  {
    number: '01',
    title: 'Cuéntanos tu idea',
    description: 'Recibimos tu requerimiento por WhatsApp, email o formulario — sin importar qué tan específico sea. Sin formularios complicados, sin reuniones innecesarias.',
  },
  {
    number: '02',
    title: 'Te proponemos opciones',
    description: 'Buscamos las mejores alternativas en precio, material y tiempo de entrega. Te presentamos 2 o 3 opciones con cotización detallada en menos de 24 horas.',
  },
  {
    number: '03',
    title: 'Producción y personalización',
    description: 'Una vez aprobada la propuesta, iniciamos producción. Marcado con logo, grabado láser, screen, sublimación o bordado — según el material y el acabado que necesites.',
  },
  {
    number: '04',
    title: 'Entrega llave en mano',
    description: 'Entregamos en tu oficina o en el punto que indiques — en Medellín o cualquier ciudad de Colombia. Empaque incluido, listo para entregar.',
  },
]

export default function ProcesoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">¿Cómo trabajamos?</h1>
        <p className="mt-4 text-muted font-inter text-lg">Simple, transparente y sin sorpresas.</p>
      </div>

      <div className="space-y-12">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center">
              <span className="font-fustat font-bold text-white text-lg">{step.number}</span>
            </div>
            <div className="pt-2">
              <h2 className="font-fustat font-bold text-2xl text-dark">{step.title}</h2>
              <p className="mt-2 text-muted font-inter leading-relaxed max-w-xl">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="mt-8 h-px bg-gray-100 w-full" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-gray-50 rounded-2xl p-10 text-center">
        <h2 className="font-fustat font-bold text-2xl text-dark">
          Si lo imaginas,{' '}
          <span className="bg-brand-gradient bg-clip-text text-transparent">lo conseguimos.</span>
        </h2>
        <p className="mt-3 text-muted font-inter max-w-lg mx-auto">
          El catálogo es solo una muestra de nuestras capacidades. Trabajamos con cualquier producto que tu empresa necesite.
        </p>
        <Link
          href="/cotizar"
          className="mt-8 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
        >
          Cuéntanos tu idea →
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create nosotros page**

```typescript
// src/app/nosotros/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a Comercial Moderna — empresa familiar en Medellín especializada en soluciones corporativas personalizadas.',
}

const values = [
  { icon: '✅', title: 'Cumplimiento', description: 'Entregamos en la fecha acordada, sin excepciones.' },
  { icon: '⚙️', title: 'Capacidad operativa', description: 'Gestionamos pedidos de cualquier volumen, desde 10 hasta 10.000 unidades.' },
  { icon: '🎯', title: 'Desarrollo a medida', description: 'Adaptamos cada producto a las necesidades exactas del cliente.' },
  { icon: '🤝', title: 'Proveedores confiables', description: 'Red de fabricantes verificados en Colombia y el exterior.' },
]

const clients = ['nutresa', 'eafit', 'leonisa', 'auteco']

export default function NosotrosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Conectados contigo</h1>
        <p className="mt-4 text-muted font-inter text-lg max-w-xl mx-auto">
          Somos una empresa familiar en Medellín con más de 8 años ayudando a empresas colombianas a impactar con productos personalizados.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-10 mb-16">
        <p className="font-inter text-dark text-lg leading-relaxed">
          Comercial Moderna nació de la convicción de que cada empresa merece tener productos que cuenten su historia. Desde el sector El Poblado en Medellín, gestionamos todo el proceso: buscamos el producto, lo personalizamos y lo entregamos llave en mano en cualquier ciudad de Colombia.
        </p>
        <p className="font-inter text-muted text-base leading-relaxed mt-4">
          No somos solo distribuidores — somos el aliado que busca soluciones creativas cuando el producto que necesitas no existe o es difícil de conseguir.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="font-fustat font-bold text-2xl text-dark mb-8">Nuestros valores</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100">
              <span className="text-2xl">{v.icon}</span>
              <div>
                <h3 className="font-fustat font-bold text-dark">{v.title}</h3>
                <p className="mt-1 text-sm text-muted font-inter">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="font-fustat font-bold text-2xl text-dark mb-8 text-center">Empresas que confían en nosotros</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {clients.map((client) => (
            <div key={client} className="relative h-10 w-32 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image src={`/clients/${client}.png`} alt={client} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/cotizar"
          className="inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
        >
          Trabaja con nosotros →
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/proceso/ src/app/nosotros/
git commit -m "feat: add proceso and nosotros pages"
```

---

## Task 19: Quote API Route

**Files:**
- Create: `src/app/api/cotizar/route.ts`

- [ ] **Step 1: Create API route**

```typescript
// src/app/api/cotizar/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_TO = process.env.EMAIL_TO ?? 'luciana@comercialmoderna.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, whatsapp, tipo, cantidad, descripcion } = body

    if (!nombre || !empresa || !email || !whatsapp || !tipo || !descripcion) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Comercial Moderna Web <noreply@comercialmoderna.com>',
      to: EMAIL_TO,
      replyTo: email,
      subject: `Nueva cotización de ${empresa} — ${tipo}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Nombre</strong></td><td>${nombre}</td></tr>
          <tr><td><strong>Empresa</strong></td><td>${empresa}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>WhatsApp</strong></td><td>${whatsapp}</td></tr>
          <tr><td><strong>Tipo</strong></td><td>${tipo}</td></tr>
          <tr><td><strong>Cantidad</strong></td><td>${cantidad || 'No especificada'}</td></tr>
          <tr><td><strong>Descripción</strong></td><td>${descripcion}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/
git commit -m "feat: add quote form API route with Resend email"
```

---

## Task 20: Quote Form + Page

**Files:**
- Create: `src/components/cotizar/QuoteForm.tsx`
- Create: `src/app/cotizar/page.tsx`

- [ ] **Step 1: Create QuoteForm**

```typescript
// src/components/cotizar/QuoteForm.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { QuoteFormData } from '@/types'

const schema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  empresa: z.string().min(2, 'Empresa requerida'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(7, 'Teléfono requerido'),
  tipo: z.string().min(1, 'Selecciona un tipo'),
  cantidad: z.string().optional(),
  descripcion: z.string().min(10, 'Cuéntanos más sobre lo que necesitas'),
})

type FormValues = z.infer<typeof schema>

export function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipo: defaultProduct ? 'Regalos Empresariales' : '',
      descripcion: defaultProduct ? `Me interesa cotizar: ${defaultProduct}` : '',
    },
  })

  async function onSubmit(data: FormValues) {
    setSubmitting(true)
    try {
      const res = await fetch('/api/cotizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Error')
      setStep('success')
      const waUrl = buildWhatsAppUrl(data)
      setTimeout(() => window.open(waUrl, '_blank'), 500)
    } catch {
      alert('Hubo un error. Por favor escríbenos directamente por WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  if (step === 'success') {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="font-fustat font-bold text-2xl text-dark">¡Solicitud enviada!</h2>
        <p className="mt-3 text-muted font-inter">Te contactamos en menos de 24 horas hábiles.</p>
        <p className="mt-2 text-muted font-inter text-sm">También te abrimos WhatsApp para continuar la conversación.</p>
        <a
          href={buildWhatsAppUrl(getValues())}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
        >
          Continuar por WhatsApp
        </a>
      </div>
    )
  }

  const field = 'block w-full px-4 py-3 rounded-xl border border-gray-200 font-inter text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'
  const label = 'block text-sm font-inter font-medium text-dark mb-1.5'
  const error = 'text-xs text-red-500 mt-1 font-inter'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={label}>Nombre completo *</label>
          <input {...register('nombre')} className={field} placeholder="Juan García" />
          {errors.nombre && <p className={error}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label className={label}>Empresa *</label>
          <input {...register('empresa')} className={field} placeholder="Empresa S.A.S." />
          {errors.empresa && <p className={error}>{errors.empresa.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={label}>Email *</label>
          <input {...register('email')} type="email" className={field} placeholder="juan@empresa.com" />
          {errors.email && <p className={error}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label}>WhatsApp / Teléfono *</label>
          <input {...register('whatsapp')} className={field} placeholder="300 123 4567" />
          {errors.whatsapp && <p className={error}>{errors.whatsapp.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={label}>Tipo de producto *</label>
          <select {...register('tipo')} className={field}>
            <option value="">Seleccionar...</option>
            <option>Regalos Empresariales</option>
            <option>Productos Publicitarios</option>
            <option>Kits Escolares</option>
            <option>Otro</option>
          </select>
          {errors.tipo && <p className={error}>{errors.tipo.message}</p>}
        </div>
        <div>
          <label className={label}>Cantidad aproximada</label>
          <input {...register('cantidad')} className={field} placeholder="Ej: 100 unidades" />
        </div>
      </div>

      <div>
        <label className={label}>Cuéntanos tu idea *</label>
        <textarea
          {...register('descripcion')}
          rows={4}
          className={field}
          placeholder="Describe el producto que necesitas, los colores, materiales, ocasión o cualquier detalle relevante..."
        />
        {errors.descripcion && <p className={error}>{errors.descripcion.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white font-inter font-medium py-4 rounded-full hover:bg-primary/90 hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Enviando...' : 'Enviar solicitud'}
      </button>

      <p className="text-center text-xs text-muted font-inter">
        Al enviar, también abriremos WhatsApp para que puedas continuar la conversación.
      </p>
    </form>
  )
}
```

- [ ] **Step 2: Create cotizar page**

```typescript
// src/app/cotizar/page.tsx
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { QuoteFormWrapper } from '@/components/cotizar/QuoteFormWrapper'

export const metadata: Metadata = {
  title: 'Cotizar',
  description: 'Solicita tu cotización de regalos empresariales y productos publicitarios personalizados. Respuesta en menos de 24 horas.',
}

export default function CotizarPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="font-fustat font-bold text-4xl sm:text-5xl text-dark">Solicitar cotización</h1>
        <p className="mt-4 text-muted font-inter text-lg">
          Cuéntanos tu idea. Te respondemos en menos de 24 horas hábiles.
        </p>
      </div>
      <Suspense fallback={null}>
        <QuoteFormWrapper />
      </Suspense>
    </div>
  )
}
```

- [ ] **Step 3: Create QuoteFormWrapper** (reads searchParams for pre-filled product)

```typescript
// src/components/cotizar/QuoteFormWrapper.tsx
'use client'
import { useSearchParams } from 'next/navigation'
import { QuoteForm } from './QuoteForm'

export function QuoteFormWrapper() {
  const searchParams = useSearchParams()
  const producto = searchParams.get('producto') ?? undefined
  return <QuoteForm defaultProduct={producto} />
}
```

- [ ] **Step 4: Verify form works end-to-end**

```bash
npm run dev
```

1. Open http://localhost:3000/cotizar
2. Fill in the form and submit
3. Verify email arrives at luciana@comercialmoderna.com
4. Verify WhatsApp opens with pre-filled message

- [ ] **Step 5: Commit**

```bash
git add src/components/cotizar/ src/app/cotizar/
git commit -m "feat: add quote form with email + WhatsApp integration"
```

---

## Task 21: SEO — Metadata + Schema Markup

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Modify: `src/app/page.tsx` (add schema markup)

- [ ] **Step 1: Create sitemap**

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.comercialmoderna.com'
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/catalogo`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/portafolio`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/proceso`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/nosotros`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/cotizar`, lastModified: new Date(), priority: 0.9 },
  ]
}
```

- [ ] **Step 2: Create robots.ts**

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.comercialmoderna.com/sitemap.xml',
  }
}
```

- [ ] **Step 3: Add LocalBusiness schema to homepage**

In `src/app/page.tsx`, add the schema script before the JSX return — add this import and the script tag inside the component:

```typescript
// Add inside HomePage(), before the return:
const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comercial Moderna Corp. S.A.S.',
  description: 'Regalos empresariales y productos publicitarios personalizados en Medellín, Colombia.',
  url: 'https://www.comercialmoderna.com',
  telephone: '+573005544573',
  email: 'luciana@comercialmoderna.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  areaServed: 'CO',
  priceRange: 'COP',
}

// Add inside the JSX:
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
```

- [ ] **Step 4: Run build to verify no errors**

```bash
npm run build
```

Expected: Build completes successfully with no TypeScript or ESLint errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/app/page.tsx
git commit -m "feat: add sitemap, robots.txt and LocalBusiness schema markup"
```

---

## Task 22: Assets + Public Folder

**Files:**
- Create: `public/products/` — product images
- Create: `public/clients/` — client logos
- Create: `public/portfolio/` — portfolio images

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p public/products public/clients public/portfolio
```

- [ ] **Step 2: Add placeholder images for development**

For each product in `src/data/products.ts`, add a corresponding image file to `public/products/`. Use supplier photos or own photos.

Required files (match the `image` field in `products.ts`):
- `public/products/parlante-bambu.jpg`
- `public/products/libreta-ejecutiva.jpg`
- `public/products/termo-acero.jpg`
- `public/products/paraguas-ejecutivo.jpg`
- `public/products/bolsa-reciclable.jpg`
- `public/products/kit-oficina.jpg`
- `public/products/gorra.jpg`
- `public/products/kit-escolar.jpg`
- `public/products/cooler.jpg`
- `public/products/lanyard.jpg`

Required client logos:
- `public/clients/nutresa.png`
- `public/clients/eafit.png`
- `public/clients/leonisa.png`
- `public/clients/auteco.png`

Required portfolio images:
- `public/portfolio/nutresa-kits.jpg`
- `public/portfolio/eafit-dotacion.jpg`
- `public/portfolio/leonisa-regalos.jpg`
- `public/portfolio/auteco-parlantes.jpg`

Also add the company logo:
- `public/logo.png`

- [ ] **Step 3: Configure next.config.ts for image optimization**

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
```

- [ ] **Step 4: Commit**

```bash
git add public/ next.config.ts
git commit -m "feat: add public assets structure and image optimization config"
```

---

## Task 23: Final QA + Deployment

**Files:**
- No new files — verification and deployment only

- [ ] **Step 1: Run full test suite**

```bash
npm run test:run
```

Expected: All tests PASS.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 3: Verify all pages in browser**

```bash
npm run start
```

Check each page:
- [ ] http://localhost:3000 — homepage renders, all sections visible
- [ ] http://localhost:3000/catalogo — filters work, all products show
- [ ] http://localhost:3000/catalogo?categoria=tecnologia — filter pre-applied
- [ ] http://localhost:3000/portafolio — case cards render
- [ ] http://localhost:3000/proceso — 4 steps render
- [ ] http://localhost:3000/nosotros — values and client logos render
- [ ] http://localhost:3000/cotizar — form submits, email received, WhatsApp opens
- [ ] http://localhost:3000/sitemap.xml — sitemap renders
- [ ] http://localhost:3000/robots.txt — robots renders

- [ ] **Step 4: Deploy to Vercel**

```bash
npx vercel --prod
```

When prompted:
- Link to existing project or create new: create new
- Project name: `comercial-moderna`
- Framework: Next.js (auto-detected)

- [ ] **Step 5: Add environment variables in Vercel dashboard**

Go to Vercel → Project Settings → Environment Variables. Add:
- `RESEND_API_KEY` → value from resend.com
- `EMAIL_TO` → `luciana@comercialmoderna.com`
- `WHATSAPP_NUMBER` → `573005544573`

- [ ] **Step 6: Redeploy with env vars**

```bash
npx vercel --prod
```

- [ ] **Step 7: Connect custom domain**

In Vercel dashboard → Domains → Add `www.comercialmoderna.com`.
Update DNS records at your domain registrar as Vercel instructs.

- [ ] **Step 8: Final commit**

```bash
git add -A
git commit -m "feat: complete website build and deployment configuration"
```

---

## Self-Review

**Spec coverage:**
- ✅ Visual system (colors, fonts, liquid glass, animations) — Tasks 2, 8, 11
- ✅ Homepage all sections — Tasks 11-14
- ✅ Catalog with client-side filters + PDF download — Task 16
- ✅ Portfolio with case cards — Task 17
- ✅ Proceso page with 4 steps — Task 18
- ✅ Nosotros page with values + client logos — Task 18
- ✅ Quote form (2-step, WhatsApp + email) — Tasks 19-20
- ✅ SEO metadata per page (each page has `export const metadata`) — Tasks 10, 16-20, 21
- ✅ LocalBusiness schema markup — Task 21
- ✅ Sitemap + robots.txt — Task 21
- ✅ WhatsApp number `+57 300 554 4573` — Tasks 5, 19, 20
- ✅ Email `luciana@comercialmoderna.com` — Tasks 5, 19
- ✅ Vercel deployment — Task 23

**No placeholders found.**

**Type consistency:**
- `FilterState`, `Product`, `PortfolioCase`, `QuoteFormData` defined in Task 3 and used consistently throughout.
- `buildWhatsAppUrl` defined in Task 5, imported in Tasks 19 and 20.
- `filterProducts` defined in Task 15, imported in Task 16.
