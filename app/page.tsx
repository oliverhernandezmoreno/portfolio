"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const profileText =
  "Product Owner / Business Analyst Senior con más de 17 años de experiencia liderando proyectos tecnológicos y de transformación digital en minería, banca, salud y sector público. Especialista en conectar negocio y tecnología, gestionando productos digitales, automatización de procesos, integraciones API y equipos ágiles multidisciplinarios. Experiencia en ERP Oracle NetSuite, DevOps, cloud, BPMN 2.0 y arquitectura de soluciones, logrando mejoras de hasta 25% en tiempos de implementación y optimización operacional. Perfil estratégico, técnico y orientado a resultados, con rápida adaptación y foco en entrega de valor inmediato";

export default function Home() {
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
  const [time, setTime] = useState("12:02:52");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toTimeString().slice(0, 8));
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const darkTheme = theme !== "light";

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020405] text-[#f5f7fb]">
      <div className="bg-grid fixed inset-0 z-0 opacity-95" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_34%_45%,rgba(0,163,255,0.055),transparent_34%)]" />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#050607]/95">
        <div className="flex h-12 w-full items-center justify-between pl-4 pr-4 font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 sm:pl-[max(16px,calc((100vw-800px)/2))] sm:pr-[68px]">
          <a
            href="#inicio"
            className="flex h-[22px] items-center gap-1.5 rounded-[4px] border border-sky-500/45 bg-sky-500/10 px-2 text-[10px] normal-case tracking-normal text-sky-400"
            aria-label="Ir al inicio"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(0,163,255,0.9)]" />
            Ohm
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a className="transition hover:text-sky-300" href="#inicio">
              Inicio
            </a>
            <a className="transition hover:text-sky-300" href="#experiencia">
              Experiencia
            </a>
            <a className="transition hover:text-sky-300" href="#proyectos">
              Proyectos
            </a>
            <a className="transition hover:text-sky-300" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-sky-300" href="#contacto">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2 tracking-normal">
            <div className="hidden h-[22px] items-center gap-1 rounded-[3px] bg-zinc-900/80 px-2 text-[10px] font-semibold text-sky-400 sm:flex">
              <span className="text-[8px]">▶</span>
              {time}
            </div>
            <button
              type="button"
              onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
              className="h-[22px] rounded-[3px] border border-white/15 bg-white/[0.03] px-2 text-[10px] font-bold text-zinc-300 transition hover:border-sky-500/45 hover:text-sky-300"
              aria-label="Cambiar idioma"
            >
              {language}
            </button>
            <button
              type="button"
              onClick={() => setTheme(darkTheme ? "light" : "dark")}
              className="grid h-[22px] w-[22px] place-items-center rounded-[3px] border border-white/15 bg-white/[0.03] text-zinc-400 transition hover:border-sky-500/45 hover:text-sky-300"
              aria-label="Cambiar tema"
            >
              {darkTheme ? <Sun size={12} /> : <Moon size={12} />}
            </button>
            <a
              href="#contacto"
              className="h-[22px] rounded-[4px] border border-sky-500/45 bg-sky-500/10 px-2 py-[4px] text-[10px] font-bold text-sky-400 transition hover:bg-sky-500/20"
            >
              &lt;/arch&gt;
            </a>
          </div>
        </div>
      </header>

      <section
        id="inicio"
        className="relative z-10 mx-auto flex min-h-screen max-w-[800px] flex-col justify-center px-4 pb-9 pt-24 sm:px-0"
      >
        <div className="mt-7">
          <div className="mb-8 inline-flex h-[22px] items-center gap-2 rounded-full border border-sky-500/45 bg-sky-500/10 px-3 font-mono text-[10px] font-medium text-sky-400 shadow-[0_0_18px_rgba(0,163,255,0.13)]">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_9px_rgba(0,163,255,0.9)]" />
            Disponible para proyectos híbridos y remotos
          </div>

          <h1 className="max-w-[760px] text-[56px] font-black leading-[0.98] tracking-normal text-zinc-50 sm:text-[72px]">
            Hola, soy
            <br />
            <span className="block pt-3 text-sky-500 drop-shadow-[0_0_12px_rgba(0,174,255,0.8)]">
              Oliver Hernández
            </span>
          </h1>

          <h2 className="mt-8 font-mono text-[24px] font-extrabold tracking-normal text-zinc-200">
            <span className="text-sky-500">&gt;</span> Business A
          </h2>

          <p className="mt-5 max-w-[650px] text-[15px] leading-[1.48] text-zinc-500">
            {profileText}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex h-[38px] items-center gap-2 rounded-[6px] bg-sky-500 px-[18px] text-[12px] font-bold text-black transition hover:bg-sky-400"
            >
              Ver proyectos
              <ArrowRight size={13} strokeWidth={3} />
            </a>
            <a
              href="/Oliver%20Hernandez%20MorenoV4.pdf"
              download
              className="inline-flex h-[38px] items-center gap-2 rounded-[6px] border border-white/15 bg-white/[0.045] px-[18px] text-[12px] font-bold text-zinc-200 transition hover:border-sky-500/45 hover:text-sky-300"
            >
              <Download size={13} />
              Descargar CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4 font-mono text-[11px] text-zinc-500">
            <a
              href="https://github.com/oliverhernandezmoreno"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-sky-300"
            >
              <FaGithub size={12} />
              github
            </a>
            <a
              href="https://www.linkedin.com/in/ohernandezmoreno/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-sky-300"
            >
              <FaLinkedin size={12} />
              linkedin
            </a>
            <a
              href="mailto:correo@correo.com"
              className="inline-flex items-center gap-1.5 transition hover:text-sky-300"
            >
              <Mail size={12} />
              email
            </a>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className="relative z-10 mx-auto max-w-[800px] px-4 py-24 sm:px-0"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-sky-400">
          Experiencia
        </p>
        <h2 className="mt-4 text-4xl font-black text-zinc-100">
          Trayectoria profesional
        </h2>
        <div className="mt-10 grid gap-4">
          <article className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-xl font-bold text-zinc-100">
              Product Owner / Business Analyst Senior
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
              Liderazgo de productos digitales, requerimientos, integraciones,
              procesos y equipos ágiles multidisciplinarios.
            </p>
          </article>
          <article className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-xl font-bold text-zinc-100">
              Transformación digital y arquitectura de soluciones
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
              ERP Oracle NetSuite, DevOps, cloud, BPMN 2.0, automatización de
              procesos y optimización operacional.
            </p>
          </article>
        </div>
      </section>

      <section
        id="proyectos"
        className="relative z-10 mx-auto max-w-[800px] px-4 py-24 sm:px-0"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-sky-400">
          Proyectos
        </p>
        <h2 className="mt-4 text-4xl font-black text-zinc-100">
          Casos destacados
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["ERP y procesos", "Integraciones API", "Cloud y DevOps"].map(
            (project) => (
              <article
                key={project}
                className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-sky-500/45"
              >
                <h3 className="text-lg font-bold text-zinc-100">{project}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Soluciones digitales con foco en eficiencia, trazabilidad y
                  entrega de valor.
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 mx-auto max-w-[800px] px-4 py-24 sm:px-0"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-sky-400">
          Skills
        </p>
        <h2 className="mt-4 text-4xl font-black text-zinc-100">
          Stack y gestión
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Product Owner",
            "Business Analyst",
            "BPMN 2.0",
            "Oracle NetSuite",
            "DevOps",
            "Cloud",
            "APIs",
            "Scrum",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-[6px] border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="relative z-10 mx-auto max-w-[800px] px-4 py-24 sm:px-0"
      >
        <div className="rounded-[8px] border border-sky-500/25 bg-sky-500/[0.04] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-sky-400">
            Contacto
          </p>
          <h2 className="mt-4 text-4xl font-black text-zinc-100">
            Construyamos valor digital
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            Disponible para productos digitales, optimización de procesos,
            integraciones y transformación tecnológica.
          </p>
        </div>
      </section>
    </main>
  );
}
