'use client'

import { useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Download,
  Filter,
  GitFork,
  Link,
  Mail,
  MapPin,
  MoveRight,
  Send,
  Sparkles,
} from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import profilePhoto from '@/src/assets/profile-photo.jpeg'
import { CredlyBadge, credlyBadgeUrl } from '@/components/credly-badge'
import { MotionReveal } from '@/components/motion-reveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  certifications,
  education,
  experiences,
  featuredCertification,
  heroStats,
  navItems,
  profile,
  projectFilters,
  projects,
  recruiterFacts,
  skillGroups,
} from '@/data/portfolio'

function logoSource(logo: string | StaticImageData) {
  return typeof logo === 'string' ? logo : logo.src
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <MotionReveal className="mx-auto mb-12 max-w-3xl text-center">
      <Badge className="mb-4 border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </MotionReveal>
  )
}

function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-2xl">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-2xl border border-white/10 bg-white text-sm font-black text-zinc-950 shadow-[0_0_34px_rgba(255,255,255,0.16)] transition group-hover:scale-105">
            NK
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Portfolio Data & IA
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button href={`mailto:${profile.email}`} variant="secondary">
          Contact
          <ArrowUpRight size={16} aria-hidden="true" />
        </Button>
      </nav>

      <div className="border-t border-white/10 bg-zinc-950/75 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function DataSignalPanel() {
  return (
    <div
      className="rounded-[1.25rem] border border-cyan-300/15 bg-slate-950/75 p-4 shadow-[0_20px_70px_rgba(8,145,178,0.16)] backdrop-blur-xl"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.28em] text-cyan-200">
          Live data view
        </span>
        <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.95)]" />
      </div>
      <div className="mt-5 grid grid-cols-7 items-end gap-2">
        {[42, 68, 54, 78, 60, 88, 72].map((height, index) => (
          <motion.span
            key={height}
            initial={{ height: 16 }}
            animate={{ height }}
            transition={{
              duration: 1.4,
              delay: index * 0.08,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-t-lg bg-gradient-to-t from-cyan-500 to-violet-300"
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-zinc-400">
        <span className="rounded-xl bg-white/[0.05] px-3 py-2">KPI</span>
        <span className="rounded-xl bg-white/[0.05] px-3 py-2">ETL</span>
        <span className="rounded-xl bg-white/[0.05] px-3 py-2">ML</span>
      </div>
    </div>
  )
}

function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -64])

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-40 sm:pt-44 lg:min-h-screen lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.2),transparent_31%),radial-gradient(circle_at_78%_14%,rgba(139,92,246,0.17),transparent_30%),linear-gradient(180deg,#0f172a_0%,#070A12_52%,#09090b_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_84%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="mb-6 border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
            <span className="mr-2 size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.85)]" />
            Disponible pour stage, alternance ou mission data
          </Badge>

          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-3xl">
            {profile.role}
          </p>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projets">
              Voir mes projets
              <MoveRight size={17} aria-hidden="true" />
            </Button>
            <Button href={profile.cvUrl} download variant="secondary">
              Télécharger mon CV
              <Download size={17} aria-hidden="true" />
            </Button>
            <Button href={profile.linkedin} target="_blank" variant="ghost">
              LinkedIn
              <Link size={17} aria-hidden="true" />
            </Button>
            <Button href={profile.github} target="_blank" variant="ghost">
              GitHub
              <Code2 size={17} aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <Card key={stat.label} className="p-4">
                <div className="text-2xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-zinc-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
          <Card className="overflow-hidden border-cyan-300/15 bg-slate-950/55 p-3">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-zinc-900">
              <Image
                src={profilePhoto}
                alt={`Portrait de ${profile.name}`}
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="aspect-square object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/72 to-transparent p-5">
                <p className="text-lg font-semibold text-white">{profile.name}</p>
                <p className="mt-1 text-sm text-zinc-300">{profile.role}</p>
              </div>
            </div>
          </Card>

          <Card className="absolute -bottom-6 left-3 right-3 border-cyan-400/20 bg-zinc-950/85 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Recruiter fit
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Python, SQL, Power BI, ML, AWS
                </p>
              </div>
              <Sparkles className="text-cyan-200" size={22} aria-hidden="true" />
            </div>
          </Card>

          <motion.div
            className="absolute -right-8 top-12 hidden w-52 xl:block"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <DataSignalPanel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function RecruiterSnapshot() {
  return (
    <section id="profil" className="relative border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <MotionReveal>
          <Badge>Profil</Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Un profil data clair, autonome et orienté décision métier.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            {profile.shortPitch}
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-500">
            Je cherche à contribuer sur des sujets où la donnée doit devenir
            compréhensible : qualité, analyse, dashboards, recommandations et
            modèles prédictifs.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <Card className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-cyan-200">
                  Lecture recruteur
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Ce qu’il faut retenir
                </h3>
              </div>
              <BadgeCheck className="text-emerald-300" size={26} aria-hidden="true" />
            </div>

            <div className="grid gap-3">
              {recruiterFacts.map((fact) => (
                <div
                  key={fact}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
                  <span className="text-sm leading-6 text-zinc-300">{fact}</span>
                </div>
              ))}
            </div>
          </Card>
        </MotionReveal>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="competences" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Compétences"
          title="Un stack data organisé par usage métier."
          description="Pas de pourcentages arbitraires : les compétences sont présentées par familles pour montrer rapidement où elles s’appliquent."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionReveal key={group.title} delay={index * 0.04}>
              <Card className="group h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-cyan-200">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-400">
                    {group.items.length} skills
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/45 p-3 transition group-hover:border-white/15"
                    >
                      <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white text-sm font-black text-zinc-950">
                        {item.logo ? (
                          <img
                            src={logoSource(item.logo)}
                            alt=""
                            loading="lazy"
                            className="max-h-8 max-w-8 object-contain"
                          />
                        ) : (
                          item.mark
                        )}
                      </span>
                      <span className="font-medium text-zinc-200">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectPreview({ index }: { index: number }) {
  const bars = [
    [64, 38, 78, 52, 86],
    [40, 74, 58, 88, 62],
    [72, 46, 66, 54, 90],
  ][index % 3]

  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.2),transparent_34%),linear-gradient(135deg,rgba(139,92,246,0.16),transparent_55%)]" />
      <div className="relative flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.24em] text-cyan-200">
          dashboard
        </span>
        <BarChart3 size={18} className="text-cyan-200" aria-hidden="true" />
      </div>

      <div className="relative mt-6 grid grid-cols-[0.9fr_1.1fr] gap-4">
        <div className="space-y-3">
          <div className="h-3 w-20 rounded-full bg-white/20" />
          <div className="h-3 w-14 rounded-full bg-white/10" />
          <div className="h-3 w-24 rounded-full bg-white/15" />
        </div>
        <div className="grid h-28 grid-cols-5 items-end gap-2">
          {bars.map((height, barIndex) => (
            <motion.span
              key={`${height}-${barIndex}`}
              initial={{ height: 18 }}
              whileInView={{ height }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: barIndex * 0.06 }}
              className="rounded-t-lg bg-gradient-to-t from-sky-500 to-cyan-200"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof projectFilters)[number]>('Tous')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Tous') {
      return projects
    }

    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projets" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projets"
          title="Des projets racontés comme des cas business."
          description="Chaque carte met en avant le problème, les données, les outils, les étapes et le résultat attendu côté métier."
        />

        <MotionReveal className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-2 hidden items-center gap-2 text-sm text-zinc-500 sm:inline-flex">
            <Filter size={16} aria-hidden="true" />
            Filtrer
          </span>
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.16)]'
                  : 'border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </MotionReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <MotionReveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Card className="group relative flex h-full flex-col overflow-hidden p-5 hover:border-cyan-300/30 hover:bg-white/[0.075]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),transparent_44%,rgba(139,92,246,0.12))] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

                  <div className="relative">
                    <ProjectPreview index={index} />
                  </div>

                  <div className="relative mt-6 flex items-center justify-between gap-4">
                    <Badge className="text-cyan-200">{project.type}</Badge>
                    <span className="text-xs font-medium text-zinc-500">
                      {project.kpi}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <div className="relative mt-5 grid gap-4 text-sm leading-6 text-zinc-400">
                    <p>
                      <span className="font-semibold text-zinc-200">Problème : </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-zinc-200">Données : </span>
                      {project.data}
                    </p>
                    <p>
                      <span className="font-semibold text-zinc-200">Résultat : </span>
                      {project.result}
                    </p>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {project.tools.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-6 grid gap-2">
                    {project.steps.map((step) => (
                      <span
                        key={step}
                        className="flex items-center gap-2 text-xs font-medium text-zinc-400"
                      >
                        <span className="size-1.5 rounded-full bg-cyan-300" />
                        {step}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      className="flex-1"
                    >
                      GitHub
                      <GitFork size={17} aria-hidden="true" />
                    </Button>
                    <Button href={project.demoUrl} className="flex-1">
                      {project.demoLabel}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Button>
                  </div>
                </Card>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Expériences"
          title="Une progression du développement vers la data science."
          description="Une timeline pensée pour montrer les missions, les outils utilisés et l’impact produit."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-white/10 to-transparent md:block" />

          <div className="grid gap-6">
            {experiences.map((experience, index) => (
              <MotionReveal key={experience.title} delay={index * 0.08}>
                <Card className="relative grid gap-6 p-5 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075] sm:p-6 md:grid-cols-[164px_1fr]">
                  <div className="absolute left-[17px] top-8 hidden size-4 rounded-full border border-cyan-300/40 bg-cyan-300 shadow-[0_0_22px_rgba(56,189,248,0.65)] md:block" />
                  <div className="flex items-start gap-4 md:block md:pl-10">
                    <div className="grid h-20 w-28 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white p-3 shadow-2xl shadow-black/20">
                      <Image
                        src={experience.logo}
                        alt={`Logo ${experience.organization}`}
                        className="max-h-full object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                          {experience.period}
                        </Badge>
                        <h3 className="mt-4 text-2xl font-semibold text-white">
                          {experience.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-400">
                          {experience.organization}
                        </p>
                      </div>
                      <BriefcaseBusiness
                        className="hidden text-zinc-500 sm:block"
                        size={24}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4 text-sm font-medium text-emerald-100">
                      {experience.outcome}
                    </div>

                    <ul className="mt-5 grid gap-3">
                      {experience.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-zinc-300"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificationSection() {
  return (
    <section
      id="certification"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.52)_45%,rgba(15,23,42,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {[
          'left-[8%] top-24',
          'left-[18%] bottom-28',
          'right-[16%] top-32',
          'right-[8%] bottom-20',
        ].map((position) => (
          <span
            key={position}
            className={`absolute ${position} size-1.5 rounded-[3px] bg-cyan-300/70 shadow-[0_0_18px_rgba(56,189,248,0.7)]`}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        <MotionReveal className="mx-auto mb-12 max-w-3xl text-center">
          <Badge className="mb-4 border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
            Certifications & Badges
          </Badge>
          <h2 className="text-balance bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
            Certifications & Badges
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
            Verified credentials in Cloud, Data and AI.
          </p>
        </MotionReveal>

        <MotionReveal>
          <motion.article
            whileHover={{ y: -8, scale: 1.005 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <Card className="group relative overflow-hidden border-amber-300/25 bg-[#111827]/80 p-5 shadow-[0_30px_120px_rgba(255,153,0,0.12)] hover:border-amber-300/45 hover:bg-white/[0.075] sm:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,153,0,0.22),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.2),transparent_32%),linear-gradient(135deg,rgba(56,189,248,0.1),transparent_50%)] opacity-90 transition duration-700 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff9900] to-transparent" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-amber-300/30 bg-amber-300/10 text-amber-100">
                      {featuredCertification.label}
                    </Badge>
                    <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-medium text-violet-100">
                      AWS / Credly
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {featuredCertification.title}
                  </h3>
                  <p className="mt-4 text-base text-zinc-300 sm:text-lg">
                    {featuredCertification.organization} · {featuredCertification.issued}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredCertification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button
                    href={featuredCertification.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 bg-[#ff9900] !text-zinc-950 shadow-[0_0_44px_rgba(255,153,0,0.2)] hover:bg-amber-300"
                  >
                    View AWS Badge
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Button>
                </div>

                <div className="grid justify-start lg:justify-center">
                  <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                    <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,153,0,0.14),transparent_44%,rgba(139,92,246,0.16))]" />
                    <div className="relative grid min-h-[300px] min-w-[190px] place-items-center">
                      <CredlyBadge />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>
        </MotionReveal>

        <div className="mb-5 flex items-center gap-4">
          <p className="shrink-0 text-sm font-medium text-zinc-300">
            Data & Analytics certifications
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/30 via-violet-300/20 to-transparent" />
          <span className="shrink-0 text-xs text-zinc-500">
            {certifications.length} credentials
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certificate, index) => (
            <MotionReveal
              key={certificate.title}
              delay={index * 0.08}
              className="h-full"
            >
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Card className="group relative flex h-full flex-col overflow-hidden p-3 hover:border-cyan-300/35 hover:bg-white/[0.075]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent_42%,rgba(139,92,246,0.12))] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950">
                    <Image
                      src={certificate.preview}
                      alt={`Aperçu du certificat ${certificate.title}`}
                      width={800}
                      height={520}
                      className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  </div>

                  <div className="relative flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                        {certificate.organization}
                      </Badge>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400">
                        {certificate.issued}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:min-h-16">
                      {certificate.title}
                    </h3>

                    <div className="mt-5 flex min-h-16 flex-wrap content-start gap-2">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <Button
                        href={certificate.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        View Certificate
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section
      id="formation"
      className="border-y border-white/10 bg-white/[0.025] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Formation"
          title="Écoles & parcours académique."
          description="Une formation orientée ingénierie, data science et intelligence artificielle, présentée avec les logos des écoles pour une lecture plus claire."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <Card className="group relative h-full min-h-[168px] overflow-hidden p-6 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075] sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
                  <div
                    className="grid size-28 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white p-3 shadow-2xl shadow-black/20"
                    style={{ backgroundColor: item.logoBackground ?? '#ffffff' }}
                  >
                    <Image
                      src={item.logo}
                      alt={`Logo ${item.organization}`}
                      className={`${item.logoClassName ?? 'size-[88px]'} object-contain`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center sm:min-h-28">
                    <Badge className="w-fit border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      {item.period}
                    </Badge>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      {item.organization}
                    </p>
                  </div>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <footer id="contact" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <Badge>Contact</Badge>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Parlons data, IA, dashboards ou machine learning.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Recruteur, client ou équipe data : je peux échanger sur une
            alternance, un stage, une mission ou un projet orienté analyse et
            décision métier.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <a
              className="inline-flex items-center gap-2 transition hover:text-white"
              href={`mailto:${profile.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${profile.email}`}>
              Me contacter
              <Mail size={17} aria-hidden="true" />
            </Button>
            <Button href={profile.linkedin} target="_blank" variant="secondary">
              LinkedIn
              <Link size={17} aria-hidden="true" />
            </Button>
            <Button href={profile.github} target="_blank" variant="ghost">
              GitHub
              <Code2 size={17} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <Card className="p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cyan-200">
                Message rapide
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                Contact recruteur
              </h3>
            </div>
            <Send className="text-cyan-200" size={24} aria-hidden="true" />
          </div>

          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="grid gap-4"
          >
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Nom
              <input
                name="name"
                className="min-h-12 rounded-2xl border border-white/10 bg-zinc-950/70 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/45"
                placeholder="Votre nom"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Email
              <input
                name="email"
                type="email"
                className="min-h-12 rounded-2xl border border-white/10 bg-zinc-950/70 px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/45"
                placeholder="votre.email@entreprise.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Message
              <textarea
                name="message"
                rows={4}
                className="resize-none rounded-2xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/45"
                placeholder="Bonjour Phanuel, j’aimerais échanger sur..."
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Envoyer un message
              <Mail size={17} aria-hidden="true" />
            </button>
          </form>
        </Card>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Portfolio Data & IA.</p>
        <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  )
}

function BackToTop() {
  return (
    <a
      href="#accueil"
      aria-label="Revenir en haut de page"
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-zinc-200 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </a>
  )
}

function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: 'https://portfolio-data-ia.vercel.app/',
    sameAs: [profile.linkedin, profile.github, credlyBadgeUrl],
    knowsAbout: [
      'Data analysis',
      'Business intelligence',
      'Machine learning',
      'Python',
      'SQL',
      'Power BI',
      'ETL pipelines',
      'AWS',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function PortfolioPage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen overflow-hidden bg-zinc-950 text-white selection:bg-cyan-300 selection:text-zinc-950">
        <SiteNav />
        <main>
          <HeroSection />
          <RecruiterSnapshot />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationSection />
          <EducationSection />
        </main>
        <ContactSection />
        <BackToTop />
      </div>
    </>
  )
}
