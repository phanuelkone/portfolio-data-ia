'use client';
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import Image from 'next/image';
import { LayoutGroup, MotionConfig, motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Check, Copy, Download, GitFork, Mail, Menu, Phone, X } from 'lucide-react';
import portrait from '@/src/assets/profile-photo-enhanced.png';
import { profile, projects, projectFilters, skillGroups, experiences, education, certifications, featuredCertification, heroStats } from '@/data/portfolio';
import { MotionReveal } from '@/components/motion-reveal';
import { ProjectVisual } from '@/components/project-visual';
import { Button } from '@/components/ui/button';
import { buildContactMailto } from '@/lib/contact';
const navigation = [['profil', 'Profil'], ['projets', 'Projets'], ['competences', 'Expertise'], ['experience', 'Parcours'], ['certification', 'Certifications'], ['formation', 'Formation']];
function SectionTitle({ title, children }: {
    title: string;
    children?: ReactNode;
}) {
    return <div className="section-title"><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}
function Tags({ items }: {
    items: string[];
}) { return <ul className="tags" aria-label="Technologies et domaines">{items.map(item => <li key={item}>{item}</li>)}</ul>; }
function SiteNav() {
    const [active, setActive] = useState('accueil');
    const [open, setOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting)
                setActive(entry.target.id); });
        }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
        document.querySelectorAll('main section[id], footer[id]').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) {
            setOpen(false);
            toggleRef.current?.focus();
        } };
        const resize = () => { if (window.innerWidth >= 1120)
            setOpen(false); };
        if (open)
            document.querySelector<HTMLAnchorElement>('#mobile-navigation a')?.focus();
        window.addEventListener('keydown', close);
        window.addEventListener('resize', resize);
        return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
    }, [open]);
    return <header className="site-header"><nav className="shell nav-shell" aria-label="Navigation principale">
    <a className="wordmark" href="#accueil" onClick={() => setOpen(false)}>Phanuel Koné<span>Data & Intelligence Artificielle</span></a>
    <div className="desktop-links">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</div>
    <div className="nav-actions"><a className="nav-contact" href="#contact" aria-current={active === 'contact' ? 'location' : undefined}>Parlons data <ArrowUpRight size={16}/></a><button ref={toggleRef} className="menu-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
  </nav><nav id="mobile-navigation" className="mobile-navigation shell" aria-label="Navigation mobile" hidden={!open}>{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={20}/></a>)}<a href="#contact" onClick={() => setOpen(false)}>Contact<ArrowUpRight size={20}/></a></nav></header>;
}
function Hero() {
    return <section id="accueil" className="hero shell"><div className="hero-topline"><span className="availability"><i />{profile.availability}</span><span>Paris · Île-de-France</span></div>
    <div className="hero-composition"><div className="hero-copy"><p className="hero-expertise">Phanuel Koné <span>Data & IA</span></p><h1>De la donnée.<br /><em>À la décision.</em></h1><p className="hero-summary">Data Analyst, Data Scientist & Business Analyst. Je relie la donnée aux enjeux métiers pour concevoir des analyses claires et des outils de décision utiles.</p><div className="actions"><Button href="#projets">Explorer mes projets <ArrowDown size={17}/></Button><Button href={profile.cvUrl} download variant="secondary">Mon CV <Download size={17}/></Button></div><p className="hero-study">MSc 2 à l’ESILV · Alternance de 12 mois<br />{profile.schedule}</p></div>
    <div className="hero-photo"><Image src={portrait} alt="Phanuel Koné, en costume et lunettes" priority sizes="(max-width: 700px) 90vw, 42vw"/><div className="photo-caption"><span>N’tcho Phanuel Eliel Koné</span><span>Python · SQL · Power BI · Machine Learning</span></div></div></div>
    <div className="hero-bottom"><p>De la donnée brute<br />à la décision éclairée.</p><dl>{heroStats.map(stat => <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}</dl><a href="#profil" className="discover-link">Découvrir mon profil <ArrowDown size={17}/></a></div>
  </section>;
}
function About() {
    return <section id="profil" className="section shell"><MotionReveal><SectionTitle title="La technique, avec le sens du métier.">Une approche structurée pour rendre la donnée fiable, compréhensible et exploitable.</SectionTitle></MotionReveal><div className="about-layout"><MotionReveal className="about-copy"><p className="large-copy">{profile.shortPitch}</p><p>Mon expérience chez MTN m’a amené à relier qualité des données, indicateurs opérationnels et prédiction du churn. Mon objectif : livrer des analyses que les équipes peuvent comprendre et utiliser.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Retrouvons-nous sur LinkedIn <ArrowUpRight size={17}/></a></MotionReveal><MotionReveal className="recruiter-panel"><h3>Pour votre équipe data</h3><dl><div><dt>Recherche</dt><dd>Alternance de 12 mois</dd></div><div><dt>Disponibilité</dt><dd>Immédiate · Île-de-France</dd></div><div><dt>Rythme</dt><dd>{profile.schedule}</dd></div><div><dt>Domaines</dt><dd>Analyse · BI · Machine Learning</dd></div></dl><div className="soft-skills">{profile.softSkills.map(skill => <span key={skill}>{skill}</span>)}</div></MotionReveal></div></section>;
}
function Projects() {
    const [filter, setFilter] = useState<(typeof projectFilters)[number]>('Tous');
    const visible = filter === 'Tous' ? projects : projects.filter(project => project.categories.includes(filter));
    return <section id="projets" className="section shell"><MotionReveal><SectionTitle title="Des données. Des solutions.">Trois études de cas pour explorer ma façon de structurer, analyser et restituer la donnée.</SectionTitle></MotionReveal>
    <div className="project-toolbar"><LayoutGroup id="project-filters"><div className="filters" role="group" aria-label="Filtrer les projets">{projectFilters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{filter === item && <motion.span className="filter-indicator" layoutId="selected-filter" transition={{ type: "spring", bounce: 0, duration: 0.32 }}/>}<span>{item}</span></button>)}</div></LayoutGroup><p role="status" aria-live="polite">{visible.length} projet{visible.length > 1 ? 's' : ''}</p></div>
    <div className="project-list">{visible.map(project => <MotionReveal key={project.slug}><article className="project-case"><a className="project-image-link" href={project.demoUrl} aria-label={`Découvrir ${project.title}`}><ProjectVisual slug={project.slug}/><span className="visual-action"><ArrowUpRight size={22}/></span></a><div className="project-copy"><p className="project-category">{project.type}</p><h3><a href={project.demoUrl}>{project.title}</a></h3><div className="project-problem"><span className="detail-label">L’enjeu</span><p>{project.problem}</p></div><div className="project-outcome"><Check size={17} aria-hidden="true"/><div><span className="detail-label">La réponse</span><p>{project.result}</p></div></div><Tags items={project.tools}/><details className="project-method"><summary>Explorer la démarche <span aria-hidden="true">+</span></summary><p>{project.data}</p><ol>{project.steps.map(step => <li key={step}>{step}</li>)}</ol></details><div className="case-links"><Button href={project.demoUrl}>Étude de cas <ArrowUpRight size={17}/></Button><a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer"><GitFork size={17}/> Code source</a></div></div></article></MotionReveal>)}</div>
  </section>;
}
function Skills() {
    const [selected, setSelected] = useState(0);
    const group = skillGroups[selected];
    return <section id="competences" className="section shell"><MotionReveal><SectionTitle title="Une expertise qui fait le lien.">De la préparation des données à leur restitution : les outils au service d’une démarche.</SectionTitle></MotionReveal><MotionReveal className="expertise-layout"><LayoutGroup id="expertise-selection"><div className="expertise-tabs" role="tablist" aria-label="Domaines de compétences" aria-orientation="vertical">{skillGroups.map((item, index) => <button key={item.title} id={`skill-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="expertise-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => { const next = event.key === 'ArrowDown' ? (index + 1) % skillGroups.length : event.key === 'ArrowUp' ? (index - 1 + skillGroups.length) % skillGroups.length : event.key === 'Home' ? 0 : event.key === 'End' ? skillGroups.length - 1 : null; if (next !== null) {
        event.preventDefault();
        setSelected(next);
        document.getElementById(`skill-tab-${next}`)?.focus();
    } }}>{selected === index && <motion.span className="expertise-indicator" layoutId="selected-expertise" transition={{ type: "spring", bounce: 0, duration: 0.32 }}/>}<span>{item.title}</span><ArrowUpRight size={20} aria-hidden="true"/></button>)}</div></LayoutGroup><div id="expertise-panel" role="tabpanel" aria-labelledby={`skill-tab-${selected}`} tabIndex={0} className="expertise-panel"><p className="accent-copy">{group.eyebrow}</p><h3>{group.title}</h3><p>{['Nettoyer, explorer et préparer des données fiables avant toute analyse.', 'Rendre les indicateurs lisibles pour faciliter le pilotage et la décision.', 'Explorer les variables, construire des modèles et interpréter leurs résultats.', 'Organiser la collecte, la transformation et le stockage des données.', 'Relier les besoins métiers aux indicateurs et recommandations utiles.', 'Collaborer, versionner et travailler avec les outils du cloud et de la data.'][selected]}</p><div className="technology-grid">{group.items.map(item => <div key={item.name}>{item.logo ? <Image src={item.logo} width={32} height={32} alt="" loading="lazy" unoptimized={typeof item.logo === 'string' && item.logo.endsWith('.svg')}/> : <span className="technology-mark">{item.mark}</span>}<span>{item.name}</span></div>)}</div></div></MotionReveal></section>;
}
function Experience() {
    return <section id="experience" className="section shell"><MotionReveal><SectionTitle title="La pratique, sur le terrain.">Du développement d’interfaces à la data science, avec une même exigence : être utile.</SectionTitle></MotionReveal><div className="career-list">{experiences.map(experience => <MotionReveal key={experience.title}><article className="career-entry"><div className="career-meta"><div className="organization-logo"><Image src={experience.logo} alt={`Logo ${experience.organization}`} sizes="90px"/></div><p>{experience.period}</p><span>{experience.organization}</span></div><div className="career-content"><h3>{experience.title}</h3><p className="career-outcome">{experience.outcome}</p><ul className="mission-list">{experience.items.map(item => <li key={item}>{item}</li>)}</ul><Tags items={experience.tools}/></div></article></MotionReveal>)}</div></section>;
}
function Credentials() {
    return <section id="certification" className="section shell"><MotionReveal><SectionTitle title="Les acquis, validés.">Des certifications consultables en data, cloud et intelligence artificielle.</SectionTitle></MotionReveal><MotionReveal><article className="featured-credential"><div className="aws-mark" aria-hidden="true">aws<span>academy</span><svg viewBox="0 0 130 25"><path d="M8 4Q62 37 120 4M107 3L122 3L118 17" fill="none" stroke="currentColor" strokeWidth="3"/></svg></div><div><p className="accent-copy">AWS Academy · Machine Learning</p><h3>{featuredCertification.title}</h3><Tags items={featuredCertification.skills}/></div><a className="icon-link" href={featuredCertification.certificateUrl} target="_blank" rel="noreferrer" aria-label="Consulter le badge AWS sur Credly"><ArrowUpRight /></a></article></MotionReveal><div className="certificate-grid">{certifications.map(certificate => <MotionReveal key={certificate.title}><article className="certificate-card"><a href={certificate.certificateUrl} target="_blank" rel="noreferrer" aria-label={`Ouvrir le certificat ${certificate.title}`} className="certificate-preview"><Image src={certificate.preview} alt={`Aperçu du certificat ${certificate.title}`} width={800} height={520} sizes="(max-width: 700px) 90vw, 42vw"/></a><div className="certificate-copy"><p>{certificate.organization} <span>· {certificate.issued}</span></p><h3>{certificate.title}</h3><Tags items={certificate.skills}/><a className="text-link" href={certificate.certificateUrl} target="_blank" rel="noreferrer">Consulter le certificat <ArrowUpRight size={17}/></a></div></article></MotionReveal>)}</div></section>;
}
function Education() {
    return <section id="formation" className="section shell"><MotionReveal><SectionTitle title="Apprendre pour aller plus loin.">Un parcours à la croisée de l’ingénierie, de la donnée et des systèmes d’information.</SectionTitle></MotionReveal><div className="education-list">{education.map(item => <MotionReveal key={item.title}><article className="education-entry"><p className="education-date">{item.period}</p><div><h3>{item.title}</h3><p className="education-school">{item.organization}</p><ul className="mission-list">{item.subjects.map(subject => <li key={subject}>{subject}</li>)}</ul></div><div className="organization-logo" style={{ backgroundColor: item.logoBackground || '#fff' }}><Image src={item.logo} alt={`Logo ${item.organization}`} sizes="90px"/></div></article></MotionReveal>)}</div></section>;
}
function Contact() {
    const [notice, setNotice] = useState('');
    const [copied, setCopied] = useState(false);
    async function copyEmail() { try {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setNotice('Adresse email copiée. Vous pouvez la coller dans votre messagerie.');
    }
    catch {
        setNotice(`Copiez cette adresse : ${profile.email}`);
    } }
    function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); const name = String(data.get('name')).trim(); const email = String(data.get('email')).trim(); const message = String(data.get('message')).trim(); if (!name || !email || !message) {
        setNotice('Merci de remplir tous les champs.');
        return;
    } window.location.href = buildContactMailto(profile.email, name, email, message); setNotice('Votre messagerie a été sollicitée. Vérifiez le brouillon et envoyez-le depuis votre application email. Si elle ne s’ouvre pas, copiez mon adresse ci-dessous.'); }
    return <footer id="contact" className="section contact-section"><div className="shell"><MotionReveal><p className="accent-copy">Une équipe, un sujet data, une opportunité ?</p><h2>Faisons parler<br /><em>vos données.</em></h2></MotionReveal><div className="contact-layout"><div className="contact-details"><p className="large-copy">Je recherche une alternance de 12 mois en Data Analysis, Business Analysis ou Data Science.</p><p>Disponible immédiatement en Île-de-France.<br />{profile.schedule}.</p><a href={`mailto:${profile.email}`} className="email-link">{profile.email}<ArrowUpRight size={24}/></a><div className="contact-shortcuts"><a className="text-link" href={profile.phoneUrl}><Phone size={17}/>{profile.phone}</a><button className="text-link" onClick={copyEmail}>{copied ? <Check size={17}/> : <Copy size={17}/>}Copier l’email</button></div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17}/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17}/></a><a href={profile.cvUrl} download>Mon CV <Download size={17}/></a></div></div><form className="contact-form" onSubmit={submit} aria-describedby="contact-help contact-feedback"><h3>Parlons de votre projet.</h3><div className="form-row"><label>Votre nom<input name="name" autoComplete="name" required maxLength={100} placeholder="Nom et prénom"/></label><label>Votre email<input name="email" autoComplete="email" type="email" required maxLength={200} placeholder="vous@entreprise.fr"/></label></div><label>Votre message<textarea name="message" rows={4} required maxLength={4000} placeholder="Une opportunité ou un projet à me présenter…"/></label><p id="contact-help" className="form-help">Ce formulaire prépare un email dans votre messagerie. Aucun message n’est envoyé automatiquement.</p><button className="button button-primary" type="submit">Préparer mon email <Mail size={17}/></button></form></div><p id="contact-feedback" className="contact-notice" role="status" aria-live="polite">{notice}</p><div className="footer-bottom"><span>© {2026} Phanuel Koné</span><span>Data · Business Intelligence · Machine Learning</span><a href="#accueil">Retour en haut ↑</a></div></div></footer>;
}
export function PortfolioPage() {
    return <MotionConfig reducedMotion="user"><div className="portfolio"><a className="skip-link" href="#main-content">Aller au contenu</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.role, url: 'https://portfolio-data-ia.vercel.app/', sameAs: [profile.linkedin, profile.github], knowsAbout: ['Python', 'SQL', 'Power BI', 'Machine Learning'] }) }}/><SiteNav /><main id="main-content" tabIndex={-1}><Hero /><About /><Projects /><Skills /><Experience /><Credentials /><Education /></main><Contact /></div></MotionConfig>;
}
