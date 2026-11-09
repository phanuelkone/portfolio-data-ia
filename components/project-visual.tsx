import { cn } from '@/lib/utils';
export function ProjectVisual({ slug, className }: {
    slug: string;
    className?: string;
}) {
    const music = slug === 'recommandation-musicale';
    const sports = slug === 'pipeline-donnees-sportives';
    return <div className={cn('project-visual', music ? 'visual-music' : sports ? 'visual-sports' : 'visual-etl', className)} aria-hidden="true">
    {music ? <><div className="vinyl"><div>♫</div></div><div className="music-interface"><span>Analyse musicale</span><strong>La similarité<br />comme point de départ.</strong><div className="audio-wave">{[22, 45, 34, 68, 92, 52, 75, 40, 61, 85, 48, 28, 59, 37].map((value, i) => <i key={i} style={{ height: `${value}%` }}/>)}</div><div className="music-tags"><span>EDA</span><span>Similarité cosinus</span></div></div></> : sports ? <><div className="sports-title"><span>Analyse sportive</span><strong>La performance,<br />sous un autre angle.</strong></div><div className="sports-chart"><svg viewBox="0 0 440 170" fill="none"><path d="M0 40H440M0 85H440M0 130H440" stroke="currentColor" opacity=".12"/><path d="M10 140L65 104L120 119L175 70L230 86L285 42L340 58L420 17" stroke="currentColor" strokeWidth="3"/><circle cx="285" cy="42" r="6" fill="currentColor"/></svg></div><div className="sports-caption">Préparation · Indicateurs · Modélisation</div></> : <><div className="etl-heading"><span>Architecture des données</span><strong>De la source<br />au tableau de bord.</strong></div><div className="etl-flow">{[['Collecte', 'API & fichiers'], ['Transformation', 'Python · SQL'], ['Restitution', 'Dashboard KPI']].map(([title, detail], i) => <div key={title}><span>{title}</span><strong>{detail}</strong>{i < 2 && <b>→</b>}</div>)}</div><div className="etl-bottom"><span>Ingestion</span><i /><span>Données fiables</span><i /><span>Décision</span></div></>}
  </div>;
}
