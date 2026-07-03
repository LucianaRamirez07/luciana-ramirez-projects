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
