"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'
import {
  Mail, Download, ArrowRight, ChevronDown, ChevronUp,
  Terminal, Cpu, Layers, Settings, Send, FileText, Check
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

// Bilingual content dictionary
const DICT = {
  ES: {
    nav: {
      inicio: "Inicio",
      experiencia: "Experiencia",
      proyectos: "Proyectos",
      skills: "Skills",
      contacto: "Contacto",
      arch: "VER BLUEPRINT"
    },
    hero: {
      badge: "Disponible para proyectos híbridos y remotos",
      greeting: "Hola, soy",
      name: "Oliver Hernández",
      description: "Product Owner / Business Analyst Senior con más de 17 años de experiencia liderando proyectos tecnológicos y de transformación digital en minería, banca, salud y sector público. Especialista en conectar negocio y tecnología, gestionando productos digitales, automatización de procesos, integraciones API y equipos ágiles multidisciplinarios. Experiencia en ERP Oracle NetSuite, DevOps, cloud, BPMN 2.0 y arquitectura de soluciones, logrando mejoras de hasta 25% en tiempos de implementación y optimización operacional. Perfil estratégico, técnico y orientado a resultados, con rápida adaptación y foco en entrega de valor inmediato.",
      btnProjects: "Ver proyectos",
      btnCV: "Descargar CV",
      metrics: [
        { value: "17+", label: "Años de experiencia TI" },
        { value: "DevOps & IA", label: "DevOps, Cloud & IA Stack" },
        { value: "Scrum Certified", label: "Technical PO & BA" }
      ]
    },
    exp: {
      title: "Trayectoria",
      subtitle: "Historial profesional detallado",
      badge: "Experiencia",
      recentTitle: "Destacados recientes",
      extendedTitle: "Historial de liderazgo y desarrollo",
      showMore: "Ver trayectoria extendida",
      showLess: "Ocultar trayectoria extendida",
      items: [
        {
          role: "Business Analyst",
          company: "IMED",
          period: "Marzo 2026 - Abril 2026",
          description: "Análisis y documentación técnica del Motor Middleware de Bono Electrónico. Diseñé diagramas de secuencia e integraciones para la migración de sistemas legacy a arquitecturas modernas. Utilicé agentes de IA para acelerar el procesamiento de especificaciones y mallas de servicio.",
          tags: ["Middleware", "Bono Electrónico", "Diagramas de Secuencia", "AI Agents"]
        },
        {
          role: "CEO & Founder",
          company: "Viral Buy",
          period: "Febrero 2025 - Febrero 2026",
          description: "Dirección estratégica de negocio e-commerce dropshipping. Administración integral de plataformas Shopify/WooCommerce, campañas publicitarias en Meta/TikTok Ads y optimización de embudos de conversión y automatización de pedidos.",
          tags: ["E-commerce", "Shopify", "Marketing Digital", "Meta Ads", "TikTok Ads"]
        },
        {
          role: "BA / Product Owner / DevOps Engineer",
          company: "Fundación Chile",
          period: "Mayo 2020 - Febrero 2025",
          description: "Liderazgo técnico y funcional multipropósito. Como BA lideré la transición de SAP a Oracle NetSuite mapeando flujos con BPMN 2.0. Como PO en Sustentabilidad gestioné el backlog del 'Programa Tranque' con mineras globales y SERNAGEOMIN. Como DevOps automaticé pipelines CI/CD y despliegues en Kubernetes mediante Terraform sobre Azure.",
          tags: ["Oracle NetSuite", "Kubernetes", "Terraform", "Azure", "BPMN 2.0", "Scrum", "CI/CD"]
        },
        {
          role: "Arquitecto de Soluciones Senior",
          company: "PGA Group",
          period: "Septiembre 2019 - Enero 2020",
          description: "Diseño e implementación de la arquitectura backend para el programa 'Bodas de Oro' utilizando microservicios en SpringBoot y principios S.O.L.I.D. Creación de APIs REST y documentación técnica interactiva mediante Swagger.",
          tags: ["Java", "SpringBoot", "Microservicios", "SOLID", "Swagger"]
        },
        {
          role: "Scrum Master",
          company: "Genesys",
          period: "Marzo 2019 - Julio 2019",
          description: "Liderazgo y facilitación de la célula ágil en el proyecto 'Huella Digital'. Fomenté metodologías ágiles, removiendo impedimentos y coordinando la colaboración remota e híbrida.",
          tags: ["Scrum", "Agile Facilitation", "Miro", "Huella Digital"]
        },
        {
          role: "Analista Desarrollador Senior",
          company: "Seidor",
          period: "Octubre 2018 - Marzo 2019",
          description: "Desarrollo de portales para el sector público (MINVU) en C#, SQL Server y PHP. En la Superintendencia de Insolvencia implementé la plataforma de quiebras integrando Clave Única (J2EE, AngularJS). Realicé la migración crítica de Oracle Service Bus 10g a 12c.",
          tags: ["C#", "SQL Server", "J2EE", "AngularJS", "Oracle Service Bus", "Clave Única"]
        },
        {
          role: "Liderazgo y Arquitectura de Software",
          company: "Indra",
          period: "Mayo 2008 - Junio 2018",
          description: "Arquitecto del proyecto SISQ del Ministerio de Salud (DDD C# + Oracle) y líder técnico para el Banco Central (Convenio ALADI). Diseñé e implementé microservicios y soluciones seguras (criptografía simétrica/asimétrica) para grandes cuentas como LAN, Sky y MAPFRE.",
          tags: ["DDD", "C#", "Oracle", "Enterprise Architect", "Criptografía", "High-Traffic Sites"]
        },
        {
          role: "Experiencia Temprana (Blue-Chip)",
          company: "Orion-DS / Atento / GlobalConnect",
          period: "Junio 2002 - Mayo 2007",
          description: "Desarrollo de soluciones documentales en SharePoint con integraciones SAP R/3 para ING y Cencosud. Creación de mantenedores e interfaces en PHP/PostgreSQL para el Ministerio de Vivienda bajo modelos de calidad CMM.",
          tags: ["SharePoint", "SAP R/3", "PHP", "PostgreSQL", "CMM Nivel 1 & 2"]
        }
      ]
    },
    projects: {
      title: "Proyectos",
      subtitle: "Casos destacados y soluciones construidas",
      badge: "Proyectos",
      items: [
        {
          title: "Plataforma CI/CD",
          category: "DevOps & Cloud Automation",
          description: "Automatización completa de pipelines de integración y despliegue continuo (CI/CD) para entornos empresariales. Implementé flujos en GitHub Actions y GitLab CI para automatizar compilación, testing QA y despliegues con Helm sobre clústeres Kubernetes distribuidos.",
          tags: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "Terraform", "GitLab CI"]
        },
        {
          title: "Stack de Observabilidad",
          category: "Cloud Observability & Monitoring",
          description: "Arquitectura moderna de telemetría distribuida para monitorizar microservicios críticos en entornos cloud. Configuración de OpenTelemetry para la recolección estandarizada de trazas, métricas y logs, representados en tableros de Grafana con alertas automatizadas mediante Prometheus y Jaeger.",
          tags: ["OpenTelemetry", "Prometheus", "Grafana", "Jaeger", "AWS", "Azure"]
        },
        {
          title: "Facturador SII Chile",
          category: "Backend Integration & E-Invoicing",
          description: "Servicio de integración automatizado con el Servicio de Impuestos Internos (SII) de Chile. Diseñado en Python utilizando FastAPI para la gestión, firmado digital XML de documentos tributarios electrónicos (DTE) y envío sincrónico a los endpoints estatales.",
          tags: ["Python", "FastAPI", "XML Cryptography", "PostgreSQL", "Docker"]
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Stack tecnológico y competencias",
      badge: "Habilidades",
      categories: {
        mgmt: "Gestión & Metodologías",
        dev: "Desarrollo & Arquitectura",
        devops: "DevOps, Cloud & IA",
        soft: "Habilidades Blandas"
      }
    },
    edu: {
      title: "Educación & Credenciales",
      subtitle: "Estudios, certificaciones e idiomas",
      badge: "Formación",
      diplomas: "Títulos y Estudios",
      certs: "Certificaciones Destacadas",
      lang: "Idiomas",
      items: [
        {
          title: "Ingeniería de Ejecución en Computación e Informática",
          inst: "Inst. Profesional Dr. Virginio Gómez (Universidad de Concepción)",
          year: "Graduado"
        },
        {
          title: "Diplomado en Gestión de Proyectos TI",
          inst: "DUOC UC",
          year: "2014"
        }
      ],
      certItems: [
        "Scrum Master Certified — ScrumStudy (ID: 865890)",
        "Microsoft Certified Technology Specialist (MCTS) — SharePoint Portal Server",
        "Coaching & Liderazgo Ejecutivo — Indra (>200 horas de formación)"
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B1 - Intermedio" }
      ]
    },
    contact: {
      title: "Contacto",
      subtitle: "Construyamos algo grande",
      badge: "Contacto",
      body: "Disponible para liderar proyectos de transformación digital como Product Owner o Business Analyst, así como para diseñar arquitecturas de backend robustas, automatización cloud DevOps e implementar observabilidad moderna.",
      formName: "Tu nombre",
      formEmail: "tu@email.com",
      formMsg: "Cuéntame sobre tu proyecto...",
      btnSend: "Enviar mensaje",
      successMsg: "¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación"
    },
    arch: {
      back: "volver al portfolio",
      title: "Arquitectura del Sistema",
      subtitle: "Blueprint técnico del portafolio e infraestructura",
      loading: "Inicializando consola técnica...",
      modules: {
        ui: "CLIENT / UI SHELL",
        devops: "DEVOPS, CLOUD & IA AGENTS",
        backend: "BACKEND & ARCHITECTURE",
        workflow: "WORKFLOW / LIFECYCLE"
      },
      lifecycle: [
        "01 Requirements & Specs → Scrum PO & Business Analyst mapping",
        "02 Backend Dev & Arch → Go / Python DDD Microservices built securely",
        "03 CI/CD & Deploy → GitHub Actions automation & Terraform IaC",
        "04 Run-Time Observability → OpenTelemetry telemetry, Prometheus dashboards"
      ]
    }
  },
  EN: {
    nav: {
      inicio: "Home",
      experiencia: "Experience",
      proyectos: "Projects",
      skills: "Skills",
      contacto: "Contact",
      arch: "VIEW BLUEPRINT"
    },
    hero: {
      badge: "Available for hybrid and remote projects",
      greeting: "Hi, I'm",
      name: "Oliver Hernández",
      description: "Computer Science Engineer and Scrum Master with over 17 years of experience bridging business requirements with high-impact technological solutions. Specializing in DevOps, Backend Architecture, and AI tools for software engineering.",
      btnProjects: "View projects",
      btnCV: "Download CV",
      metrics: [
        { value: "17+", label: "Years in IT Industry" },
        { value: "DevOps & AI", label: "DevOps, Cloud & AI Stack" },
        { value: "Scrum Certified", label: "Technical PO & BA" }
      ]
    },
    exp: {
      title: "Timeline",
      subtitle: "Detailed professional career history",
      badge: "Experience",
      recentTitle: "Recent Highlights",
      extendedTitle: "Leadership & Development History",
      showMore: "Show extended history",
      showLess: "Hide extended history",
      items: [
        {
          role: "Business Analyst",
          company: "IMED",
          period: "March 2026 - April 2026",
          description: "Technical analysis and documentation for the Electronic Bonus Middleware Engine. Designed sequence diagrams and integrations to migrate legacy systems to modern architectures. Utilized AI agents to accelerate processing of specifications and service maps.",
          tags: ["Middleware", "Electronic Bonus", "Sequence Diagrams", "AI Agents"]
        },
        {
          role: "CEO & Founder",
          company: "Viral Buy",
          period: "February 2025 - February 2026",
          description: "Strategic leadership of dropshipping e-commerce stores. Integral management of Shopify/WooCommerce platforms, ad campaigns on Meta/TikTok Ads, conversion funnel optimization, and automated order processing.",
          tags: ["E-commerce", "Shopify", "Digital Marketing", "Meta Ads", "TikTok Ads"]
        },
        {
          role: "BA / Product Owner / DevOps Engineer",
          company: "Fundación Chile",
          period: "May 2020 - February 2025",
          description: "Multipurpose functional and technical leadership. As BA, led the transition from SAP to Oracle NetSuite by mapping flows with BPMN 2.0. As PO in Sustainability, managed the backlog of the 'Tranque Program' working with global mining companies and SERNAGEOMIN. As DevOps, automated CI/CD pipelines and Kubernetes deployments using Terraform on Azure.",
          tags: ["Oracle NetSuite", "Kubernetes", "Terraform", "Azure", "BPMN 2.0", "Scrum", "CI/CD"]
        },
        {
          role: "Senior Solutions Architect",
          company: "PGA Group",
          period: "September 2019 - January 2020",
          description: "Designed and implemented the backend architecture for the 'Bodas de Oro' program using SpringBoot microservices and S.O.L.I.D. principles. Created REST APIs and interactive technical documentation via Swagger.",
          tags: ["Java", "SpringBoot", "Microservices", "SOLID", "Swagger"]
        },
        {
          role: "Scrum Master",
          company: "Genesys",
          period: "March 2019 - July 2019",
          description: "Leadership and facilitation of the agile cell for the 'Huella Digital' project. Fostered agile methodologies, removed blockers, and coordinated remote and hybrid collaboration.",
          tags: ["Scrum", "Agile Facilitation", "Miro", "Huella Digital"]
        },
        {
          role: "Senior Developer Analyst",
          company: "Seidor",
          period: "October 2018 - March 2019",
          description: "Developed public sector web portals (MINVU) using C#, SQL Server, and PHP. At the Superintendency of Insolvency, implemented the bankruptcy platform integrating the national Clave Única (J2EE, AngularJS). Performed critical migration of Oracle Service Bus from 10g to 12c.",
          tags: ["C#", "SQL Server", "J2EE", "AngularJS", "Oracle Service Bus", "Clave Única"]
        },
        {
          role: "Software Architecture & Leadership",
          company: "Indra",
          period: "May 2008 - June 2018",
          description: "Architect for the Ministry of Health's SISQ project (DDD C# + Oracle) and technical lead for the Central Bank (ALADI Agreement). Designed and implemented microservices and security-by-design cryptography (symmetric/asymmetric encryption) for high-traffic clients like LAN, Sky, and MAPFRE.",
          tags: ["DDD", "C#", "Oracle", "Enterprise Architect", "Cryptography", "High-Traffic Sites"]
        },
        {
          role: "Early Experience (Blue-Chip)",
          company: "Orion-DS / Atento / GlobalConnect",
          period: "June 2002 - May 2007",
          description: "Developed SharePoint document management solutions with SAP R/3 integrations for ING and Cencosud. Built interfaces in PHP/PostgreSQL for the Ministry of Housing under CMM quality models.",
          tags: ["SharePoint", "SAP R/3", "PHP", "PostgreSQL", "CMM Level 1 & 2"]
        }
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "Case studies and solutions built",
      badge: "Projects",
      items: [
        {
          title: "CI/CD Platform",
          category: "DevOps & Cloud Automation",
          description: "End-to-end automation of continuous integration and continuous deployment pipelines (CI/CD) for enterprise systems. Set up workflows in GitHub Actions and GitLab CI to automate compilation, QA testing, and Helm-based deployments into distributed Kubernetes clusters.",
          tags: ["GitHub Actions", "Docker", "Kubernetes", "Helm", "Terraform", "GitLab CI"]
        },
        {
          title: "Observability Stack",
          category: "Cloud Observability & Monitoring",
          description: "Modern distributed telemetry architecture to monitor critical microservices in cloud environments. Configured OpenTelemetry for standardized collection of traces, metrics, and logs, visualized in Grafana dashboards with automated Prometheus and Jaeger alerting.",
          tags: ["OpenTelemetry", "Prometheus", "Grafana", "Jaeger", "AWS", "Azure"]
        },
        {
          title: "SII Chile E-Invoicing Integrator",
          category: "Backend Integration & E-Invoicing",
          description: "Automated integration service connecting systems with the Chilean Internal Revenue Service (SII). Designed in Python using FastAPI to manage digital XML signing of electronic tax documents (DTE) and synchronous submittals to government endpoints.",
          tags: ["Python", "FastAPI", "XML Cryptography", "PostgreSQL", "Docker"]
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Technological stack & competencies",
      badge: "Skills",
      categories: {
        mgmt: "Management & Methodologies",
        dev: "Development & Architecture",
        devops: "DevOps, Cloud & AI",
        soft: "Soft Skills"
      }
    },
    edu: {
      title: "Education & Credentials",
      subtitle: "Studies, certifications & languages",
      badge: "Education",
      diplomas: "Degrees & Studies",
      certs: "Key Certifications",
      lang: "Languages",
      items: [
        {
          title: "Bachelor of Science in Computer Science & Engineering",
          inst: "Inst. Profesional Dr. Virginio Gómez (University of Concepción)",
          year: "Graduado"
        },
        {
          title: "Diplomado in IT Project Management",
          inst: "DUOC UC",
          year: "2014"
        }
      ],
      certItems: [
        "Scrum Master Certified — ScrumStudy (ID: 865890)",
        "Microsoft Certified Technology Specialist (MCTS) — SharePoint Portal Server",
        "Executive Leadership & Coaching — Indra (>200 training hours)"
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B1 - Intermediate" }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's build something big",
      badge: "Contact",
      body: "Available to lead digital transformation initiatives as a Product Owner or Business Analyst, as well as design robust backend architectures, automate cloud environments (DevOps), and implement modern observability stacks.",
      formName: "Your name",
      formEmail: "you@email.com",
      formMsg: "Tell me about your project...",
      btnSend: "Send message",
      successMsg: "Message sent successfully! We will get in touch soon.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location"
    },
    arch: {
      back: "back to portfolio",
      title: "System Architecture",
      subtitle: "Technical blueprint of the portfolio and infrastructure",
      loading: "Initializing technical console...",
      modules: {
        ui: "CLIENT / UI SHELL",
        devops: "DEVOPS, CLOUD & AI AGENTS",
        backend: "BACKEND & ARCHITECTURE",
        workflow: "WORKFLOW / LIFECYCLE"
      },
      lifecycle: [
        "01 Requirements & Specs → Scrum PO & Business Analyst mapping",
        "02 Backend Dev & Arch → Go / Python DDD Microservices built securely",
        "03 CI/CD & Deploy → GitHub Actions automation & Terraform IaC",
        "04 Run-Time Observability → OpenTelemetry telemetry, Prometheus dashboards"
      ]
    }
  }
}

// Skills list with category and progress score
const SKILLS_DATA = [
  // Mgmt
  { name: "Scrum / Agile", percent: 92, category: "mgmt" },
  { name: "Business Analysis (BA)", percent: 90, category: "mgmt" },
  { name: "Product Backlog (PO)", percent: 88, category: "mgmt" },
  { name: "BPMN 2.0 (Bizagi/Miro)", percent: 85, category: "mgmt" },
  { name: "Project Management", percent: 80, category: "mgmt" },
  { name: "Jira", percent: 80, category: "mgmt" },
  { name: "Confluence", percent: 80, category: "mgmt" },
  // Dev
  { name: "GoLang", percent: 75, category: "dev" },
  { name: "Python", percent: 82, category: "dev" },
  { name: "C# .NET Core", percent: 85, category: "dev" },
  { name: "Java / SpringBoot", percent: 80, category: "dev" },
  { name: "DDD / Microservices", percent: 88, category: "dev" },
  { name: "REST APIs (Swagger)", percent: 90, category: "dev" },
  // DevOps
  { name: "Docker & Kubernetes", percent: 88, category: "devops" },
  { name: "Terraform (IaC)", percent: 82, category: "devops" },
  { name: "CI/CD (GitLab/GitHub)", percent: 90, category: "devops" },
  { name: "AWS & Azure Cloud", percent: 80, category: "devops" },
  { name: "OpenTelemetry / Grafana", percent: 82, category: "devops" },
  { name: "AI Agents (Claude Code)", percent: 85, category: "devops" },
  // Soft
  { name: "Team Leadership", percent: 90, category: "soft" },
  { name: "Problem Solving", percent: 92, category: "soft" },
  { name: "Communication", percent: 88, category: "soft" },
  { name: "Strategic Alignment", percent: 86, category: "soft" }
]

export default function Home() {
  const [idioma, setIdioma] = useState<'ES' | 'EN'>('ES')
  const [hora, setHora] = useState('00:00:00')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showArch, setShowArch] = useState(false)

  // Collapsible experience history
  const [showExtendedExp, setShowExtendedExp] = useState(false)

  // Typing animation states
  const roles = ['Product Owner', 'Business Analyst', 'AI & DevOps', 'Project Manager']
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Contact form submission simulated feedback
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  // Terminal boot animation states
  const [booting, setBooting] = useState(false)
  const [bootLines, setBootLines] = useState<string[]>([])

  // Safely initialize client clock and mounted check
  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      setHora(now.toTimeString().split(' ')[0])
    }
    updateTime()
    const clockInterval = setInterval(updateTime, 1000)
    return () => clearInterval(clockInterval)
  }, [])

  // Typing effect loop
  useEffect(() => {
    if (!mounted || showArch) return
    const currentWord = roles[roleIndex]
    let timer: NodeJS.Timeout

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1))
      }, 50)
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
      }, 100)
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000) // Keep word visible
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex, mounted, showArch])

  // Terminal Boot sequence effect
  useEffect(() => {
    if (showArch) {
      setBooting(true)
      setBootLines([])
      const lines = [
        `[system] Initializing antigravity core client...`,
        `[system] Loading layout libraries and Geist / Inter fonts...`,
        `[auth] Connecting user context: Oliver Hernandez Moreno...`,
        `[devops] Checking local environments and container assets...`,
        `[observability] Launching OpenTelemetry metrics collection server...`,
        `[ai-agent] AI Coprocessor active: Antigravity-Agent v3.5-Canary`,
        `[system] Status: ONLINE ●`,
        `[system] Loading Technical Architecture Blueprint...`
      ]
      let index = 0
      const bootInterval = setInterval(() => {
        if (index < lines.length) {
          setBootLines(prev => [...prev, lines[index]])
          index++
        } else {
          clearInterval(bootInterval)
          setTimeout(() => setBooting(false), 600)
        }
      }, 180)
      return () => clearInterval(bootInterval)
    }
  }, [showArch])

  if (!mounted) return null

  const d = DICT[idioma]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1500)
  }

  // Toggle architecture view
  const toggleArchView = () => {
    setShowArch(!showArch)
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background text-foreground bg-grid">

      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo / Badge */}
          <div
            onClick={() => { setShowArch(false) }}
            className="flex items-center gap-2 border border-sky-500/30 dark:border-emerald-500/30 bg-sky-500/10 dark:bg-emerald-500/10 px-3 py-1 rounded-md text-sky-600 dark:text-emerald-400 font-mono text-sm font-semibold select-none cursor-pointer hover:bg-sky-500/20 dark:hover:bg-emerald-500/20 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-sky-500 dark:bg-emerald-400 animate-pulse" />
            Ohm
          </div>

          {/* Desktop Nav */}
          {!showArch && (
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider text-foreground/75">
              <a href="#inicio" className="hover:text-sky-500 dark:hover:text-emerald-400 transition-colors">
                {d.nav.inicio}
              </a>
              <a href="#experiencia" className="hover:text-sky-500 dark:hover:text-emerald-400 transition-colors">
                {d.nav.experiencia}
              </a>
              <a href="#proyectos" className="hover:text-sky-500 dark:hover:text-emerald-400 transition-colors">
                {d.nav.proyectos}
              </a>
              <a href="#skills" className="hover:text-sky-500 dark:hover:text-emerald-400 transition-colors">
                {d.nav.skills}
              </a>
              <a href="#contacto" className="hover:text-sky-500 dark:hover:text-emerald-400 transition-colors">
                {d.nav.contacto}
              </a>
            </nav>
          )}

          {/* System Control Panel */}
          <div className="flex items-center gap-3">
            {/* Clock */}
            <div className="hidden sm:flex items-center gap-1.5 text-sky-600 dark:text-emerald-400 font-mono font-bold bg-foreground/5 px-2.5 py-1 rounded text-xs select-none">
              <span className="text-[10px] animate-pulse">▶</span>
              <span>{hora}</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setIdioma(idioma === 'ES' ? 'EN' : 'ES')}
              className="border border-foreground/10 bg-foreground/5 px-2.5 py-1 rounded text-xs font-mono font-bold hover:bg-foreground/10 transition-colors uppercase"
            >
              {idioma}
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="border border-foreground/10 bg-foreground/5 p-1.5 rounded hover:bg-foreground/10 transition-colors text-foreground/80"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
              )}
            </button>

            {/* </arch> Button */}
            <button
              onClick={toggleArchView}
              className={`border font-mono text-xs font-bold px-3 py-1.5 rounded-md transition-all ${showArch
                ? "bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500/20"
                : "bg-sky-500/10 border-sky-500/30 text-sky-600 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 hover:scale-105"
                }`}
            >
              {showArch ? (idioma === 'ES' ? 'PORTAFOLIO' : 'PORTFOLIO') : '</arch>'}
            </button>
          </div>

        </div>
      </header>

      {/* VIEW OVERLAY SYSTEM */}
      <AnimatePresence mode="wait">

        {/* ARCHITECTURE VIEW */}
        {showArch ? (
          <motion.div
            key="arch"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
          >
            {booting ? (
              /* Console loader sequence */
              <div className="font-mono text-sm bg-black text-emerald-400 p-6 rounded-xl border border-emerald-500/20 shadow-2xl h-[400px] flex flex-col justify-start gap-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 border-b border-neutral-800 pb-2 mb-4">
                  <Terminal size={14} />
                  <span>antigravity_terminal.sh - v16.2.6</span>
                </div>
                {bootLines.map((line, i) => (
                  <div key={i} className="animate-fade-in">{line}</div>
                ))}
                <div className="h-4 w-2 bg-emerald-400 animate-pulse mt-2" />
              </div>
            ) : (
              /* Technical Blueprint Layout */
              <div className="space-y-8 font-mono">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-foreground/10 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-sky-500 dark:text-emerald-400 font-bold">
                      {d.arch.title}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black mt-1">
                      SYSTEM ARCHITECTURE BLUEPRINT
                    </h1>
                  </div>
                  <button
                    onClick={() => setShowArch(false)}
                    className="mt-4 md:mt-0 text-xs border border-foreground/20 hover:border-foreground/45 px-3 py-1.5 rounded transition-all"
                  >
                    &larr; {d.arch.back}
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* UI / Client Box */}
                  <div className="bg-card-bg neon-border border p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 text-sky-500 dark:text-emerald-400 opacity-20">
                      <Layers size={40} />
                    </div>
                    <h3 className="text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      01 // {d.arch.modules.ui}
                    </h3>
                    <ul className="space-y-3 text-xs text-foreground/80">
                      <li><strong className="text-foreground">engine:</strong> Next.js 16 (App Router)</li>
                      <li><strong className="text-foreground">rendering:</strong> Server Components + Client Hydration</li>
                      <li><strong className="text-foreground">state:</strong> React Hooks & Contexts</li>
                      <li><strong className="text-foreground">styling:</strong> Tailwind CSS v4 & Framer Motion</li>
                      <li><strong className="text-foreground">theming:</strong> class-based next-themes provider</li>
                    </ul>
                  </div>

                  {/* DevOps & AI Agents Box */}
                  <div className="bg-card-bg neon-border border p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 text-sky-500 dark:text-emerald-400 opacity-20">
                      <Cpu size={40} />
                    </div>
                    <h3 className="text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      02 // {d.arch.modules.devops}
                    </h3>
                    <ul className="space-y-3 text-xs text-foreground/80">
                      <li><strong className="text-foreground">orchestration:</strong> Kubernetes (EKS / GKE clusters)</li>
                      <li><strong className="text-foreground">containers:</strong> Docker / Docker-compose</li>
                      <li><strong className="text-foreground">infrastructure:</strong> Terraform (Infrastructure as Code)</li>
                      <li><strong className="text-foreground">cloud providers:</strong> Amazon Web Services & Microsoft Azure</li>
                      <li><strong className="text-foreground">ai tools:</strong> Claude Code & NotebookLM workflows</li>
                    </ul>
                  </div>

                  {/* Backend & Architecture Box */}
                  <div className="bg-card-bg neon-border border p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 text-sky-500 dark:text-emerald-400 opacity-20">
                      <Settings size={40} />
                    </div>
                    <h3 className="text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      03 // {d.arch.modules.backend}
                    </h3>
                    <ul className="space-y-3 text-xs text-foreground/80">
                      <li><strong className="text-foreground">languages:</strong> GoLang, Python 3.12, C# .NET, Java</li>
                      <li><strong className="text-foreground">frameworks:</strong> FastAPI, SpringBoot, ASP.NET Core</li>
                      <li><strong className="text-foreground">architecture:</strong> Domain-Driven Design (DDD)</li>
                      <li><strong className="text-foreground">databases:</strong> SQL Server, PostgreSQL, Oracle, NoSQL</li>
                      <li><strong className="text-foreground">integrations:</strong> Chile SII Web Services / XML signing</li>
                    </ul>
                  </div>

                </div>

                {/* Workflow lifecycle diagram */}
                <div className="bg-card-bg border border-foreground/10 p-6 rounded-2xl">
                  <h3 className="text-sm font-bold border-b border-foreground/10 pb-2 mb-4 flex items-center gap-2">
                    <Terminal size={16} className="text-sky-500 dark:text-emerald-400" />
                    <span>04 // {d.arch.modules.workflow}</span>
                  </h3>
                  <div className="space-y-4 text-xs">
                    {d.arch.lifecycle.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="text-sky-500 dark:text-emerald-400 font-bold">[{idx + 1}]</span>
                        <p className="text-foreground/80">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System details bar */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border border-foreground/10 p-4 rounded-xl text-center text-xs">
                  <div>
                    <span className="text-neutral-500">engine</span>
                    <p className="font-bold mt-1">Next.js 16 + React 19</p>
                  </div>
                  <div>
                    <span className="text-neutral-500">deploy</span>
                    <p className="font-bold mt-1">Vercel (Production)</p>
                  </div>
                  <div>
                    <span className="text-neutral-500">ci/cd</span>
                    <p className="font-bold mt-1">GitHub Actions</p>
                  </div>
                  <div>
                    <span className="text-neutral-500">uptime</span>
                    <p className="font-bold mt-1">99.98%</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-neutral-500">status</span>
                    <p className="font-bold mt-1 text-sky-500 dark:text-emerald-400">ONLINE ●</p>
                  </div>
                </div>

              </div>
            )}
          </motion.div>
        ) : (

          /* MAIN PORTFOLIO SECTIONS */
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-24"
          >

            {/* HERO SECTION */}
            <section id="inicio" className="pt-32 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6">

                {/* Available pill */}
                <div className="inline-flex items-center gap-2 border border-sky-500/20 dark:border-emerald-500/20 bg-sky-500/5 dark:bg-emerald-500/5 px-3 py-1.5 rounded-full text-xs font-mono text-sky-600 dark:text-emerald-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-500 dark:bg-emerald-400 animate-pulse" />
                  {d.hero.badge}
                </div>

                {/* Main greetings */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-tight select-none">
                  {d.hero.greeting} <br />
                  <span className="text-sky-500 dark:text-emerald-400 neon-text-glow">
                    {d.hero.name}
                  </span>
                </h1>

                {/* Animated Typing Console */}
                <div className="font-mono text-xl sm:text-2xl lg:text-3xl text-foreground/80 flex items-center h-10 select-none">
                  <span className="text-sky-500 dark:text-emerald-400 mr-2">&gt;</span>
                  <span className="typing-cursor font-semibold">{currentText}</span>
                </div>

                {/* About Profile text */}
                <p className="max-w-3xl text-base sm:text-lg text-neutral-500 leading-relaxed">
                  {d.hero.description}
                </p>

                {/* Primary Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#proyectos"
                    className="flex items-center gap-2 border border-sky-500/30 dark:border-emerald-500/30 bg-sky-500 dark:bg-emerald-400 hover:bg-sky-600 dark:hover:bg-emerald-500 text-background px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    <span>{d.hero.btnProjects}</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="/OLIVER%20HERN%C3%81NDEZ%20MORENO%20-%20PRODUCT%20OWNER.pdf"
                    target="_blank"
                    className="flex items-center gap-2 border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 px-6 py-3 rounded-lg font-medium transition-all text-foreground"
                  >
                    <Download size={16} />
                    <span>{d.hero.btnCV}</span>
                  </a>
                </div>

                {/* Social Badges */}
                <div className="flex items-center gap-4 pt-6 text-neutral-500 font-mono text-xs">
                  <a
                    href="https://github.com/oliverhernandezmoreno"
                    target="_blank"
                    className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>github</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/oliver-hernandez-5134ba22/"
                    target="_blank"
                    className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaLinkedin size={16} />
                    <span>linkedin</span>
                  </a>
                  <a
                    href="mailto:oliverhernandezmoreno@gmail.com"
                    className="flex items-center gap-1.5 hover:text-sky-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Mail size={16} />
                    <span>email</span>
                  </a>
                </div>

                {/* Metrics Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-4xl">
                  {d.hero.metrics.map((metric, i) => (
                    <div key={i} className="border border-foreground/10 bg-card-bg p-4 rounded-xl">
                      <span className="block text-2xl font-black text-sky-500 dark:text-emerald-400 font-mono">
                        {metric.value}
                      </span>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1 block">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* EXPERIENCE / TIMELINE */}
            <section id="experiencia" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-16">

              <div className="mb-12 border-b border-foreground/10 pb-4">
                <span className="font-mono text-xs text-sky-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">
                  // {d.exp.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mt-1">
                  {d.exp.title}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">{d.exp.subtitle}</p>
              </div>

              {/* Main Timeline Highlights */}
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-foreground/10 pl-10">

                {/* Loop recent items (Indices 0, 1, 2, 3) */}
                {d.exp.items.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node dot */}
                    <div className="absolute -left-[50px] top-2 h-5 w-5 rounded-full border border-sky-500 dark:border-emerald-400 bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="h-2 w-2 rounded-full bg-sky-500 dark:bg-emerald-400" />
                    </div>

                    <div className="bg-card-bg neon-border border p-6 rounded-2xl space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                          <span className="text-sm font-mono text-sky-500 dark:text-emerald-400 font-semibold">{item.company}</span>
                        </div>
                        <span className="text-xs font-mono text-neutral-500 bg-foreground/5 px-2.5 py-1 rounded-md self-start sm:self-center">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono border border-foreground/10 bg-foreground/5 px-2 py-0.5 rounded text-neutral-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Collapsible Career History Container */}
                <AnimatePresence>
                  {showExtendedExp && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8 overflow-hidden"
                    >
                      {/* Loop remaining items (Indices 4, 5, 6, 7) */}
                      {d.exp.items.slice(4).map((item, idx) => (
                        <div key={idx} className="relative group pt-4">
                          {/* Timeline Node dot */}
                          <div className="absolute -left-[50px] top-6 h-5 w-5 rounded-full border border-sky-500 dark:border-emerald-400 bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="h-2 w-2 rounded-full bg-sky-500 dark:bg-emerald-400" />
                          </div>

                          <div className="bg-card-bg neon-border border p-6 rounded-2xl space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <div>
                                <h3 className="text-lg font-bold text-foreground">{item.role}</h3>
                                <span className="text-sm font-mono text-sky-500 dark:text-emerald-400 font-semibold">{item.company}</span>
                              </div>
                              <span className="text-xs font-mono text-neutral-500 bg-foreground/5 px-2.5 py-1 rounded-md self-start sm:self-center">
                                {item.period}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {item.tags.map((tag) => (
                                <span key={tag} className="text-[10px] font-mono border border-foreground/10 bg-foreground/5 px-2 py-0.5 rounded text-neutral-500">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Toggle history Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowExtendedExp(!showExtendedExp)}
                  className="flex items-center gap-2 border border-foreground/10 hover:border-foreground/30 bg-card-bg px-5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all text-foreground"
                >
                  <span>{showExtendedExp ? d.exp.showLess : d.exp.showMore}</span>
                  {showExtendedExp ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

            </section>

            {/* PROJECTS SECTION */}
            <section id="proyectos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-16">

              <div className="mb-12 border-b border-foreground/10 pb-4">
                <span className="font-mono text-xs text-sky-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">
                  // {d.projects.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mt-1">
                  {d.projects.title}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">{d.projects.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {d.projects.items.map((project, idx) => (
                  <div key={idx} className="bg-card-bg neon-border border p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-1 transition-all">
                    <div className="space-y-4">
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-sky-500 dark:text-emerald-400 font-bold">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mt-1 text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono border border-foreground/5 bg-foreground/5 px-2 py-0.5 rounded text-neutral-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-16">

              <div className="mb-12 border-b border-foreground/10 pb-4">
                <span className="font-mono text-xs text-sky-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">
                  // {d.skills.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mt-1">
                  {d.skills.title}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">{d.skills.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Management and Development */}
                <div className="space-y-8">
                  {/* Mgmt Category */}
                  <div>
                    <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      &lt;{d.skills.categories.mgmt} /&gt;
                    </h3>
                    <div className="space-y-4">
                      {SKILLS_DATA.filter(s => s.category === "mgmt").map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-foreground">{skill.name}</span>
                            <span className="text-neutral-500">{skill.percent}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-sky-500 dark:bg-emerald-400 transition-all duration-500"
                              style={{ width: `${skill.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dev Category */}
                  <div>
                    <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      &lt;{d.skills.categories.dev} /&gt;
                    </h3>
                    <div className="space-y-4">
                      {SKILLS_DATA.filter(s => s.category === "dev").map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-foreground">{skill.name}</span>
                            <span className="text-neutral-500">{skill.percent}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-sky-500 dark:bg-emerald-400 transition-all duration-500"
                              style={{ width: `${skill.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* DevOps and Soft Skills */}
                <div className="space-y-8">
                  {/* DevOps Category */}
                  <div>
                    <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      &lt;{d.skills.categories.devops} /&gt;
                    </h3>
                    <div className="space-y-4">
                      {SKILLS_DATA.filter(s => s.category === "devops").map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-foreground">{skill.name}</span>
                            <span className="text-neutral-500">{skill.percent}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-sky-500 dark:bg-emerald-400 transition-all duration-500"
                              style={{ width: `${skill.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Category */}
                  <div>
                    <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 mb-4 text-sky-500 dark:text-emerald-400">
                      &lt;{d.skills.categories.soft} /&gt;
                    </h3>
                    <div className="space-y-4">
                      {SKILLS_DATA.filter(s => s.category === "soft").map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-foreground">{skill.name}</span>
                            <span className="text-neutral-500">{skill.percent}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-sky-500 dark:bg-emerald-400 transition-all duration-500"
                              style={{ width: `${skill.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </section>

            {/* EDUCATION & CREDENTIALS SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

              <div className="mb-12 border-b border-foreground/10 pb-4">
                <span className="font-mono text-xs text-sky-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">
                  // {d.edu.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mt-1">
                  {d.edu.title}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">{d.edu.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Degrees */}
                <div className="bg-card-bg border border-foreground/10 p-6 rounded-2xl space-y-4">
                  <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 text-sky-500 dark:text-emerald-400 flex items-center gap-2">
                    <FileText size={16} />
                    <span>{d.edu.diplomas}</span>
                  </h3>
                  <div className="space-y-4">
                    {d.edu.items.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <h4 className="text-sm font-bold text-foreground">{edu.title}</h4>
                        <p className="text-xs text-neutral-500">{edu.inst}</p>
                        <span className="text-[10px] font-mono text-neutral-500 bg-foreground/5 px-2 py-0.5 rounded-full inline-block mt-1">
                          {edu.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-card-bg border border-foreground/10 p-6 rounded-2xl space-y-4">
                  <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 text-sky-500 dark:text-emerald-400 flex items-center gap-2">
                    <Check size={16} />
                    <span>{d.edu.certs}</span>
                  </h3>
                  <ul className="space-y-3 text-xs text-foreground/80">
                    {d.edu.certItems.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-500 dark:text-emerald-400 font-bold font-mono">&#8250;</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="bg-card-bg border border-foreground/10 p-6 rounded-2xl space-y-4">
                  <h3 className="font-mono text-sm font-bold border-b border-foreground/10 pb-2 text-sky-500 dark:text-emerald-400 flex items-center gap-2">
                    <Terminal size={16} />
                    <span>{d.edu.lang}</span>
                  </h3>
                  <div className="space-y-4 text-xs">
                    {d.edu.languages.map((lang, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-foreground/5 pb-2">
                        <span className="font-bold text-foreground">{lang.name}</span>
                        <span className="font-mono text-neutral-500 bg-foreground/5 px-2.5 py-1 rounded">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </section>

            {/* CONTACT SECTION */}
            <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-16 pb-32">
              <div className="bg-card-bg border border-sky-500/20 dark:border-emerald-500/20 p-8 sm:p-12 rounded-[40px] relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">

                  {/* Left Info Column */}
                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-xs text-sky-500 dark:text-emerald-400 uppercase tracking-widest block font-bold">
                        // {d.contact.badge}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-black mt-1">
                        {d.contact.subtitle}
                      </h2>
                    </div>

                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {d.contact.body}
                    </p>

                    <div className="space-y-4 pt-4 font-mono text-xs text-foreground/80">
                      <div className="flex items-center gap-3">
                        <span className="text-neutral-500">{d.contact.emailLabel}:</span>
                        <a href="mailto:oliverhernandezmoreno@gmail.com" className="hover:text-sky-500 dark:hover:text-emerald-400 transition-colors font-bold">
                          oliverhernandezmoreno@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-neutral-500">{d.contact.phoneLabel}:</span>
                        <span className="font-bold">+56997456818</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-neutral-500">{d.contact.locationLabel}:</span>
                        <span className="font-bold">Región del Ñuble / Santiago, Chile</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Form Column */}
                  <form onSubmit={handleFormSubmit} className="space-y-4">

                    {/* Name field */}
                    <div className="space-y-1">
                      <label className="block text-xs font-mono text-neutral-500">
                        {idioma === 'ES' ? 'Nombre' : 'Name'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={d.contact.formName}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-lg text-xs font-mono focus:outline-none focus:border-sky-500 dark:focus:border-emerald-400 text-foreground"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-1">
                      <label className="block text-xs font-mono text-neutral-500">
                        {idioma === 'ES' ? 'Correo Electrónico' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={d.contact.formEmail}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-lg text-xs font-mono focus:outline-none focus:border-sky-500 dark:focus:border-emerald-400 text-foreground"
                      />
                    </div>

                    {/* Message field */}
                    <div className="space-y-1">
                      <label className="block text-xs font-mono text-neutral-500">
                        {idioma === 'ES' ? 'Mensaje' : 'Message'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder={d.contact.formMsg}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-foreground/5 border border-foreground/10 px-4 py-3 rounded-lg text-xs font-mono focus:outline-none focus:border-sky-500 dark:focus:border-emerald-400 text-foreground resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full flex items-center justify-center gap-2 border border-sky-500/30 dark:border-emerald-500/30 bg-sky-500 dark:bg-emerald-400 hover:bg-sky-600 dark:hover:bg-emerald-500 text-background px-6 py-3.5 rounded-lg text-xs font-mono font-bold transition-all disabled:opacity-50"
                    >
                      <Send size={14} />
                      <span>{d.contact.btnSend}</span>
                    </button>

                    {/* Submit status alert */}
                    {formStatus === 'success' && (
                      <div className="font-mono text-[10px] text-sky-500 dark:text-emerald-400 border border-sky-500/20 dark:border-emerald-500/20 bg-sky-500/5 dark:bg-emerald-500/5 p-3 rounded-md animate-pulse">
                        [SYSTEM]: {d.contact.successMsg}
                      </div>
                    )}

                  </form>

                </div>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}