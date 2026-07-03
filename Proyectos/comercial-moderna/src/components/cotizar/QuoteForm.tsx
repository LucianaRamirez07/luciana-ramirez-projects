'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const schema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  empresa: z.string().min(2, 'Empresa requerida'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(7, 'Teléfono requerido'),
  tipo: z.string().min(1, 'Selecciona un tipo'),
  cantidad: z.string(),
  descripcion: z.string().min(10, 'Cuéntanos más sobre lo que necesitas'),
})

type FormValues = z.infer<typeof schema>

export function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: '',
      empresa: '',
      email: '',
      whatsapp: '',
      tipo: '',
      cantidad: '',
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

  const field = 'block w-full px-4 py-3 rounded-xl border border-gray-200 font-inter text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'
  const label = 'block text-sm font-inter font-medium text-dark mb-1.5'
  const errorClass = 'text-xs text-red-500 mt-1 font-inter'

  if (step === 'success') {
    const waUrl = buildWhatsAppUrl(getValues())
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="font-fustat font-bold text-2xl text-dark">¡Solicitud enviada!</h2>
        <p className="mt-3 text-muted font-inter">Te contactamos en menos de 24 horas hábiles.</p>
        <p className="mt-2 text-muted font-inter text-sm">También te abrimos WhatsApp para continuar la conversación.</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center bg-primary text-white font-inter font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
        >
          Continuar por WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={label}>Nombre completo *</label>
          <input {...register('nombre')} className={field} placeholder="Juan García" />
          {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label className={label}>Empresa *</label>
          <input {...register('empresa')} className={field} placeholder="Empresa S.A.S." />
          {errors.empresa && <p className={errorClass}>{errors.empresa.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={label}>Email *</label>
          <input {...register('email')} type="email" className={field} placeholder="juan@empresa.com" />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label}>WhatsApp / Teléfono *</label>
          <input {...register('whatsapp')} className={field} placeholder="300 123 4567" />
          {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
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
          {errors.tipo && <p className={errorClass}>{errors.tipo.message}</p>}
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
        {errors.descripcion && <p className={errorClass}>{errors.descripcion.message}</p>}
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
