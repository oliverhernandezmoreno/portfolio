"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'
import { Mail, Download, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'


export default function Home() {
 

// 1. Estados iniciales simples
const [idioma, setIdioma] = useState<'EN' | 'ES'>('EN')
// 2. Estado y lógica para el reloj de la terminal
const [hora, setHora] = useState('00:00:00')
// 3. Control del Tema (next-themes) seguro para Next.js
const { theme, setTheme } = useTheme()
const [mounted, setMounted] = useState(false)


// Actualiza la hora de inmediato al cargar
  const actualizarHora = () => {
    const ahora = new Date()
    const tiempo = ahora.toTimeString().split(' ')[0] // Extrae HH:MM:SS
    setHora(tiempo)
  }
  // TODO lo que altere el estado o use el cliente va DENTRO del useEffect
useEffect(() => {
  // Marcamos que el componente ya se montó en el navegador
  setMounted(true)

  // Función del reloj
  const actualizarHora = () => {
    const ahora = new Date()
    const tiempo = ahora.toTimeString().split(' ')[0] // HH:MM:SS
    setHora(tiempo)
  }
  
  // Ejecutamos e inicializamos el intervalo de forma segura
  actualizarHora()
  const intervalo = setInterval(actualizarHora, 1000)
  
  // Limpieza del intervalo al desmontar el componente
  return () => clearInterval(intervalo)
}, []) // El array vacío asegura que esto solo se ejecute una vez al montar

if (!mounted) return null
  return (
     <main className="min-h-screen overflow-hidden bg-black text-white">
        <div className="flex items-center gap-4 font-mono text-sm select-none">
          
          {/* Selector de Idioma */}
          <button onClick={() => setIdioma(idioma === 'EN' ? 'ES' : 'EN')}
            className="border border-neutral-800 bg-neutral-900 px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors uppercase font-bold">
            {idioma}
          </button>

          {/* Botón de Tema (Sol/Luna) */}
         {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border border-neutral-800 bg-neutral-900 p-2 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            >
              {theme === "dark" ? (
                // Icono de Sol
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                // Icono de Luna
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          )}

          {/* Reloj de Terminal */}
          <div className="flex items-center gap-1.5 text-emerald-500 font-bold bg-neutral-950/50 px-2 py-1 rounded">
            <span className="text-xs animate-pulse">▶</span>
            <span>{hora || "00:00:00"}</span>
          </div>

        </div>

      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(0,255,200,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-md
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-3
              py-1
              text-sm
              text-cyan-300
            "
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            OliverProductOwner
          </div>

          {/* NAV */}
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#inicio" className="transition hover:text-cyan-300">
              Inicio
            </a>

            <a href="#experiencia" className="transition hover:text-cyan-300">
              Experiencia
            </a>

            <a href="#proyectos" className="transition hover:text-cyan-300">
              Proyectos
            </a>

            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>

            <a href="#contacto" className="transition hover:text-cyan-300">
              Contacto
            </a>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-400">
              &lt;/arch&gt;
            </div>

            <div className="rounded-xl border border-white/10 px-3 py-2 text-sm">
              EN
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="max-w-6xl text-6xl font-black leading-none tracking-tight md:text-8xl lg:text-9xl">

            <span className="text-zinc-100">
              Hola, soy
            </span>

            <br />

            <span className="text-cyan-400">
              Oliver Hernández
            </span>
          </h1>

          <p className="mt-12 max-w-3xl text-lg leading-10 text-zinc-500 md:text-2xl">
           Product Owner, Business Analyst y DevOps Engineer. 
            Construyo plataformas cloud escalables,
            automatización CI/CD, observabilidad moderna
            y productos digitales orientados a impacto de negocio.
          </p>

          {/* BUTTONS */}
          <div className="mt-16 flex flex-wrap gap-6">

            <button
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-cyan-400
                px-8
                py-5
                text-lg
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Ver proyectos
              <ArrowRight size={20} />
            </button>

            <button
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-8
                py-5
                text-lg
                font-semibold
                text-white
                backdrop-blur
                transition
                hover:bg-white/10
              "
            >
              Descargar CV
              <Download size={20} />
            </button>
          </div>

          {/* SOCIAL */}
          <div className="mt-16 flex items-center gap-8 text-zinc-500">

            <a
              href="https://github.com/oliverhernandezmoreno"
              target="_blank"
              className="flex items-center gap-2 transition hover:text-cyan-300"
            >
              <FaGithub size={18} />
              github
            </a>
             <a
              href="https://www.linkedin.com/in/ohernandezmoreno/"
              target="_blank"
              className="flex items-center gap-2 transition hover:text-cyan-300"
            >
              <FaLinkedin size={18} />
              linkedin
            </a>

            <a
              href="mailto:correo@correo.com"
              className="flex items-center gap-2 transition hover:text-cyan-300"
            >
              <Mail size={18} />
              email
            </a>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experiencia"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Experiencia
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Trayectoria profesional
          </h2>
        </div>

        <div className="space-y-8">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>
                <h3 className="text-3xl font-bold">
                  Senior DevOps Engineer
                </h3>

                <p className="mt-3 text-zinc-500">
                  Automatización cloud, CI/CD, observabilidad
                  y plataformas escalables enterprise.
                </p>
              </div>

              <div className="text-zinc-500">
                2021 — Actualidad
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>
                <h3 className="text-3xl font-bold">
                  Product Owner / Business Analyst
                </h3>

                <p className="mt-3 text-zinc-500">
                  Liderazgo de productos digitales,
                  levantamiento de requerimientos
                  y optimización de procesos.
                </p>
              </div>

              <div className="text-zinc-500">
                2018 — 2021
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Proyectos
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Casos destacados
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-cyan-400/20">
            <h3 className="text-2xl font-bold">
              Plataforma CI/CD
            </h3>

            <p className="mt-6 leading-8 text-zinc-500">
              Automatización completa de pipelines,
              despliegues y testing enterprise.
            </p>

            <div className="mt-8 text-sm text-cyan-300">
              Docker · Kubernetes · GitHub Actions
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-cyan-400/20">
            <h3 className="text-2xl font-bold">
              OpenTelemetry Stack
            </h3>

            <p className="mt-6 leading-8 text-zinc-500">
              Observabilidad moderna para plataformas cloud.
            </p>

            <div className="mt-8 text-sm text-cyan-300">
              Grafana · Prometheus · Jaeger
            </div>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-cyan-400/20">
            <h3 className="text-2xl font-bold">
              Facturador SII
            </h3>

            <p className="mt-6 leading-8 text-zinc-500">
              Integración automatizada con servicios SII Chile.
            </p>

            <div className="mt-8 text-sm text-cyan-300">
              Python · XML · FastAPI
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Stack tecnológico
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">

          {[
            'Docker',
            'Kubernetes',
            'Terraform',
            'AWS',
            'Python',
            'Linux',
            'OpenTelemetry',
            'Grafana',
            'Prometheus',
            'GitHub Actions',
            'Jira',
            'Scrum'
          ].map((skill) => (
            <div
              key={skill}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-4
                text-zinc-300
                transition
                hover:border-cyan-400/20
                hover:bg-cyan-400/10
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contacto"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div
          className="
            rounded-[40px]
            border
            border-cyan-400/20
            bg-cyan-400/[0.03]
            p-16
            backdrop-blur
          "
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Contacto
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Construyamos algo grande
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-500">
            Disponible para proyectos DevOps,
            automatización cloud, observabilidad,
            arquitectura escalable y liderazgo técnico.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">

            <a
              href="mailto:correo@correo.com"
              className="
                rounded-2xl
                bg-cyan-400
                px-8
                py-5
                text-lg
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Contactar
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-5
                text-lg
                font-semibold
                transition
                hover:bg-white/10
              "
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}