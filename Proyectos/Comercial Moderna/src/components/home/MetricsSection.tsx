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
