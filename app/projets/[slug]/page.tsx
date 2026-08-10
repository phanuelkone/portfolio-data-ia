import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  GitFork,
  ListChecks,
  Target,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { profile, projects } from '@/data/portfolio'

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: 'Projet introuvable',
    }
  }

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.problem,
  }
}

function ProjectMetric({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Card className="p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </Card>
  )
}

function ProjectPreview() {
  const bars = [54, 76, 42, 88, 64, 72]

  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-[0_30px_120px_rgba(8,145,178,0.14)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(139,92,246,0.18),transparent_30%)]" />
      <div className="relative flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.28em] text-cyan-200">
          Data workflow
        </span>
        <BarChart3 className="text-cyan-200" size={22} aria-hidden="true" />
      </div>

      <div className="relative mt-10 grid gap-4">
        <div className="grid grid-cols-6 items-end gap-3">
          {bars.map((height) => (
            <span
              key={height}
              className="rounded-t-xl bg-gradient-to-t from-cyan-500 to-violet-200"
              style={{ height }}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-3">
          {['Collecte', 'Nettoyage', 'Analyse', 'Restitution'].map((step) => (
            <div
              key={step}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"
            >
              <span className="text-sm font-medium text-zinc-200">{step}</span>
              <span className="h-2 w-24 rounded-full bg-cyan-300/30">
                <span className="block h-full w-2/3 rounded-full bg-cyan-300" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.16),transparent_28%),linear-gradient(180deg,#0f172a_0%,#09090b_58%)]" />
        <div className="mx-auto max-w-7xl">
          <Button href="/#projets" variant="ghost" className="mb-10 w-fit">
            <ArrowLeft size={17} aria-hidden="true" />
            Retour aux projets
          </Button>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                  {project.type}
                </Badge>
                <Badge>{project.kpi}</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                {project.context}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                  <GitFork size={17} aria-hidden="true" />
                </Button>
                <Button href="/#contact" variant="secondary">
                  Me contacter
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <ProjectPreview />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ProjectMetric label="Données" value={project.data} />
            <ProjectMetric label="Stack" value={project.tools.join(' + ')} />
            <ProjectMetric label="Résultat" value={project.kpi} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <Target className="text-cyan-200" size={24} aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-white">Problème</h2>
            </div>
            <p className="mt-5 text-base leading-7 text-zinc-300">
              {project.problem}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Database className="text-cyan-200" size={24} aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-white">Approche</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {project.steps.map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-sm font-semibold text-cyan-100">
                    {project.steps.indexOf(step) + 1}
                  </span>
                  <span className="text-sm font-medium text-zinc-200">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-5">
            <Card className="p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-emerald-200"
                  size={24}
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-semibold text-white">
                  Points forts
                </h2>
              </div>
              <ul className="mt-5 grid gap-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-zinc-300"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <ListChecks
                  className="text-violet-200"
                  size={24}
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-semibold text-white">Livrables</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
