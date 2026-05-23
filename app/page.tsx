export default function PortfolioHome() {
  const skills = [
    'Docker',
    'Kubernetes',
    'Terraform',
    'GitHub Actions',
    'AWS',
    'Python',
    'Linux',
    'OpenTelemetry',
    'Grafana',
    'Prometheus',
    'Jira',
    'Scrum'
  ]

  const projects = [
    {
      title: 'Plataforma CI/CD Enterprise',
      description:
        'Automatización completa de pipelines, despliegues continuos y control de calidad para entornos multi-servicio.',
      stack: 'Docker · GitHub Actions · Kubernetes · Terraform'
    },
    {
      title: 'Observabilidad con OpenTelemetry',
      description:
        'Implementación de métricas, trazas y monitoreo distribuido para plataformas cloud.',
      stack: 'OpenTelemetry · Grafana · Prometheus · Jaeger'
    },
    {
      title: 'Facturador Electrónico SII',
      description:
        'Sistema automatizado de generación XML, firma digital e integración con servicios del SII.',
      stack: 'Python · FastAPI · XML · Docker'
    }
  ]

  const experience = [
    {
      role: 'Senior DevOps Engineer',
      company: 'Cloud & Automation',
      years: '2021 - Actualidad'
    },
    {
      role: 'Product Owner / Business Analyst',
      company: 'Digital Retail & Media',
      years: '2018 - 2021'
    },
    {
      role: 'Linux Systems Administrator',
      company: 'Infrastructure & Operations',
      years: '2009 - 2018'
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              DevOps Engineer · Product Owner · Business Analyst
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Oliver Hernández
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Más de 17 años impulsando plataformas tecnológicas escalables,
              automatización CI/CD, observabilidad cloud y productos digitales
              de alto impacto para negocios modernos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
                Ver proyectos
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10">
                Descargar CV
              </button>
            </div>
          </div>

          <div className="grid w-full max-w-md gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm text-zinc-400">Experiencia</div>
              <div className="mt-2 text-5xl font-bold">17+</div>
              <div className="mt-1 text-zinc-500">Años en tecnología</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl font-bold text-cyan-300">CI/CD</div>
                <div className="mt-2 text-sm text-zinc-500">
                  Automatización avanzada
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl font-bold text-purple-300">Cloud</div>
                <div className="mt-2 text-sm text-zinc-500">
                  Observabilidad y escalabilidad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Sobre mí
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Tecnología orientada a impacto de negocio
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-lg leading-8 text-zinc-400">
              Especialista en automatización, infraestructura cloud,
              observabilidad y productos digitales. Mi enfoque combina visión
              técnica con pensamiento estratégico para acelerar procesos,
              optimizar plataformas y generar resultados medibles.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8">
            <div className="grid grid-cols-2 gap-4 text-sm text-zinc-300">
              <div className="rounded-2xl bg-black/30 p-4">Arquitectura Cloud</div>
              <div className="rounded-2xl bg-black/30 p-4">DevOps</div>
              <div className="rounded-2xl bg-black/30 p-4">Product Thinking</div>
              <div className="rounded-2xl bg-black/30 p-4">Business Analysis</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Skills
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Stack tecnológico
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Proyectos
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Casos destacados
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/10"
            >
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                Proyecto Enterprise
              </div>

              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-zinc-500">
                {project.stack}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Experiencia
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Trayectoria profesional
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.role}
                className="flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center"
              >
                <div>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="mt-2 text-zinc-400">{item.company}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm text-zinc-400">
                  {item.years}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 text-center backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Contacto
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Construyamos algo grande
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Disponible para proyectos DevOps, automatización cloud,
            arquitectura escalable y liderazgo de productos digitales.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
              LinkedIn
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
              GitHub
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
