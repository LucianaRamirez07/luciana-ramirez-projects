'use client'
import { useEffect, useRef, useState } from 'react'

const metrics = [
  { end: 300, prefix: '+', suffix: '', label: 'Empresas atendidas' },
  { end: 20,  prefix: '+', suffix: '', label: 'Años de experiencia' },
  { end: 1000, prefix: '+', suffix: '', label: 'Productos gestionados' },
  { end: 100, prefix: '',  suffix: '%', label: 'Cobertura nacional' },
]

function useCountUp(end: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) { setCount(0); return }
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, end, duration])

  return count
}

function MetricCard({ end, prefix, suffix, label, active }: typeof metrics[0] & { active: boolean }) {
  const count = useCountUp(end, 1800, active)
  return (
    <div>
      <div className="font-fustat font-bold text-4xl sm:text-5xl bg-brand-gradient bg-clip-text text-transparent tabular-nums">
        {prefix}{count.toLocaleString('es-CO')}{suffix}
      </div>
      <div className="mt-2 text-sm font-inter text-gray-400">{label}</div>
    </div>
  )
}

export function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setActive(entry.isIntersecting) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} active={active} />
        ))}
      </div>
    </section>
  )
}
