'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Link,
  Mail,
  MapPin,
  MoveRight,
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
  education,
  experiences,
  heroStats,
  navItems,
  profile,
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
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-2xl">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-2xl border border-white/10 bg-white text-sm font-black text-zinc-950 transition group-hover:scale-105">
            NK
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Portfolio Data & IA
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
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
    </header>
  )
}

function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -70])

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(244,114,182,0.13),transparent_30%),linear-gradient(180deg,#09090b_0%,#050507_70%,#09090b_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
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
            Data & AI portfolio for real business decisions.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projets">
              Voir les projets
              <MoveRight size={17} aria-hidden="true" />
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
          <Card className="overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-zinc-900">
              <Image
                src={profilePhoto}
                alt={`Portrait de ${profile.name}`}
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="aspect-square object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-5">
                <p className="text-lg font-semibold text-white">{profile.name}</p>
                <p className="mt-1 text-sm text-zinc-300">{profile.role}</p>
              </div>
            </div>
          </Card>

          <Card className="absolute -bottom-6 left-3 right-3 border-cyan-400/20 bg-zinc-950/80 p-4">
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
        </motion.div>
      </div>
    </section>
  )
}

function RecruiterSnapshot() {
  return (
    <section id="profil" className="relative border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <MotionReveal>
          <Badge>Recruiter friendly</Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Un profil junior lisible en moins de 15 secondes.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            {profile.shortPitch}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <Card className="p-5 sm:p-6">
            <div className="grid gap-3">
              {recruiterFacts.map((fact) => (
                <div
                  key={fact}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <BadgeCheck
                    className="mt-0.5 shrink-0 text-emerald-300"
                    size={19}
                    aria-hidden="true"
                  />
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
          eyebrow="Technical skills"
          title="Un stack data complet, présenté pour la lecture recruteur."
          description="Des compétences organisées par usage, avec logos, méthodes et technologies directement liées aux projets."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionReveal key={group.title} delay={index * 0.04}>
              <Card className="group h-full p-6 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]">
                <p className="text-sm font-medium text-cyan-200">{group.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {group.title}
                </h3>

                {group.items ? (
                  <div className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/40 p-3"
                      >
                        <span className="grid size-12 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white text-sm font-black text-zinc-950">
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
                ) : (
                  <ul className="mt-6 grid gap-2">
                    {group.methods?.map((method) => (
                      <li
                        key={method}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <span className="size-1.5 rounded-full bg-cyan-300" />
                        {method}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projets" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Des projets orientés impact, pipeline et décision."
          description="Chaque carte raconte le problème, le stack et la valeur produite. C’est plus utile pour un recruteur qu’une simple liste de technologies."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionReveal key={project.title} delay={index * 0.08}>
              <Card className="relative h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                <div className="flex items-center justify-between gap-4">
                  <Badge className="text-cyan-200">{project.type}</Badge>
                  <BarChart3 className="text-zinc-500" size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-4 text-sm font-medium text-emerald-100">
                  {project.impact}
                </div>
              </Card>
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
          eyebrow="Experience"
          title="Une trajectoire data claire, du développement à la science des données."
        />

        <div className="grid gap-5">
          {experiences.map((experience, index) => (
            <MotionReveal key={experience.title} delay={index * 0.08}>
              <Card className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[180px_1fr]">
                <div className="flex items-start gap-4 lg:block">
                  <div className="grid h-20 w-28 place-items-center rounded-2xl border border-white/10 bg-white p-3">
                    <Image
                      src={experience.logo}
                      alt={`Logo ${experience.organization}`}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-cyan-200 lg:mt-4">
                    {experience.period}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
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
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationSection() {
  return (
    <section id="certification" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Certification"
          title="Badge AWS vérifiable, intégré dans un profil data cloud-ready."
          description="La certification renforce la crédibilité cloud du profil et donne un signal rapide aux recruteurs."
        />

        <MotionReveal>
          <Card className="grid items-center gap-8 p-6 md:grid-cols-[1fr_220px] md:p-8">
            <div>
              <Badge className="border-amber-300/20 bg-amber-300/10 text-amber-200">
                AWS / Credly
              </Badge>
              <h3 className="mt-5 text-3xl font-semibold text-white">
                Certification cloud officielle
              </h3>
              <p className="mt-4 max-w-2xl text-zinc-400">
                Badge officiel Credly lié à mon parcours cloud, en complément de
                mon profil Data & IA.
              </p>
              <Button href={credlyBadgeUrl} target="_blank" className="mt-6">
                Vérifier sur Credly
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
            </div>
            <div className="grid justify-start md:justify-center">
              <CredlyBadge />
            </div>
          </Card>
        </MotionReveal>
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
                    <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
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
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <Badge>Contact</Badge>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Parlons data, IA, dashboards ou machine learning.
          </h2>
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
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Portfolio Data & IA.</p>
        <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  )
}

function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Data & AI Engineer in training',
    email: profile.email,
    url: 'https://portfolio-data-ia.vercel.app/',
    sameAs: [profile.linkedin, profile.github, credlyBadgeUrl],
    knowsAbout: [
      'Data analysis',
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
      </div>
    </>
  )
}
