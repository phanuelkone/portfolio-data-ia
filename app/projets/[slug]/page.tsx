import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectVisual } from '@/components/project-visual';
import { projects } from '@/data/portfolio';
type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find(item => item.slug === slug);
    if (!project)
        return { title: 'Projet introuvable' };
    return { title: project.title, description: project.problem, alternates: { canonical: `/projets/${project.slug}` } };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find(item => item.slug === slug);
    if (!project)
        notFound();
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    return <main className="case-page shell">
  <nav className="case-navigation" aria-label="Navigation du projet"><Button href="/#projets" variant="ghost"><ArrowLeft size={17}/>Tous les projets</Button><a className="text-link" href="/#contact">Parlons data<ArrowUpRight size={17}/></a></nav>
  <header className="case-header"><p className="accent-copy">{project.type}</p><h1>{project.title}</h1><p>{project.context}</p><div className="actions"><Button href={project.githubUrl} target="_blank" rel="noreferrer">Voir le code source<GitFork size={17}/></Button><Button href="/#contact" variant="secondary">Échanger sur ce projet<ArrowUpRight size={17}/></Button></div></header>
  <ProjectVisual slug={project.slug} className="case-cover"/>
  <dl className="case-facts"><div><dt>Données</dt><dd>{project.data}</dd></div><div><dt>Technologies</dt><dd>{project.tools.join(' · ')}</dd></div><div><dt>Objectif</dt><dd>{project.kpi}</dd></div></dl>
  <section className="case-story"><div><h2>Le problème métier</h2><p>{project.problem}</p></div><div><h2>La démarche</h2><ol className="case-steps">{project.steps.map(step => <li key={step}>{step}</li>)}</ol></div></section>
  <section className="case-story"><div><h2>Le résultat</h2><p className="case-result">{project.result}</p><ul className="mission-list">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></div><div><h2>Les livrables</h2><ul className="mission-list">{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div></section>
  <section className="next-project"><p className="accent-copy">Poursuivre l’exploration</p><h2><a href={next.demoUrl}>{next.title}<ArrowUpRight size={30}/></a></h2><a className="text-link" href="/#projets"><ArrowLeft size={17}/>Retour à la sélection</a></section>
 </main>;
}
