'use client'
import { useSearchParams } from 'next/navigation'
import { QuoteForm } from './QuoteForm'

export function QuoteFormWrapper() {
  const searchParams = useSearchParams()
  const producto = searchParams.get('producto') ?? undefined
  return <QuoteForm defaultProduct={producto} />
}
