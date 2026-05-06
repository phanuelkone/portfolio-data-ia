import heroImg from './assets/hero.png'
import './App.css'

const skills = [
  {
    title: 'Langages',
    items: ['Python', 'SQL', 'Java'],
  },
  {
    title: 'Data & IA',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
  },
  {
    title: 'DataViz',
    items: ['Power BI', 'Matplotlib'],
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'SQL Server'],
  },
  {
    title: 'Outils',
    items: ['Git', 'GitHub', 'Pentaho', 'Excel'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure'],
  },
]

const projects = [
  {
    title: 'Analyse des ventes e-commerce',
    type: 'Data Analysis',
    description:
      'Exploration des ventes, segmentation client et recommandations pour suivre les produits les plus performants.',
    stack: ['Python', 'Pandas', 'Power BI'],
    metric: '+18%',
    metricLabel: 'opportunité CA',
  },
  {
    title: 'Prédiction du churn client',
    type: 'Machine Learning',
    description:
      'Modèle de classification pour identifier les clients à risque et prioriser les actions de rétention.',
    stack: ['Scikit-learn', 'SQL', 'ROC-AUC'],
    metric: '0.84',
    metricLabel: 'score ROC-AUC',
  },
  {
    title: 'Dashboard RH et performance',
    type: 'Business Intelligence',
    description:
      'Tableau de bord interactif pour suivre l’absentéisme, les effectifs, les départs et les indicateurs RH.',
    stack: ['Power BI', 'DAX', 'Excel'],
    metric: '6',
    metricLabel: 'KPI suivis',
  },
]

const timeline = [
  {
    period: 'Aujourd’hui',
    title: 'Étudiant en Data & Intelligence Artificielle',
    text: 'Construction de compétences solides en analyse, statistiques, bases de données et machine learning.',
  },
  {
    period: 'Objectif court terme',
    title: 'Stage ou alternance Data Analyst',
    text: 'Contribuer à des missions concrètes : reporting, dashboards, analyse métier et automatisation.',
  },
  {
    period: 'Objectif moyen terme',
    title: 'Évolution vers Data Scientist',
    text: 'Développer des modèles prédictifs utiles et expliquer leurs résultats aux équipes métiers.',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Retour à l’accueil">
          <span className="brand-mark">D</span>
          <span>Portfolio Data</span>
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#apropos">Profil</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="accueil">
          <div className="data-stage" aria-hidden="true">
            <img src={heroImg} alt="" className="hero-object" />
            <div className="chart-line chart-line-one"></div>
            <div className="chart-line chart-line-two"></div>
            <div className="data-points">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="hero-content">
            <p className="eyebrow">Étudiant Data & IA</p>
            <h1>N'tcho Phanuel Eliel Koné</h1>
            <p className="hero-copy">
              Futur Data Analyst ou Data Scientist, je transforme les données en
              analyses claires, tableaux de bord utiles et modèles prédictifs
              compréhensibles.
            </p>
            <div className="hero-actions" aria-label="Actions principales">
              <a className="primary-action" href="#projets">
                Voir mes projets
              </a>
              <a className="secondary-action" href="#contact">
                Me contacter
              </a>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Aperçu du profil">
          <div>
            <strong>3</strong>
            <span>axes métier : analyse, BI, IA</span>
          </div>
          <div>
            <strong>SQL</strong>
            <span>requêtes, jointures, indicateurs</span>
          </div>
          <div>
            <strong>Python</strong>
            <span>exploration, nettoyage, modèles</span>
          </div>
          <div>
            <strong>Power BI</strong>
            <span>dashboards et storytelling</span>
          </div>
        </section>

        <section className="section profile-section" id="apropos">
          <div className="section-heading">
            <p className="section-kicker">Profil</p>
            <h2>Un profil junior orienté décision et impact métier.</h2>
          </div>
          <div className="profile-grid">
            <p>
              Je suis étudiant en Data & Intelligence Artificielle. Mon projet
              professionnel est de devenir Data Analyst, puis d’évoluer vers des
              missions de Data Scientist lorsque mes projets nécessitent de la
              prédiction, de l’automatisation ou du machine learning.
            </p>
            <p>
              J’aime partir d’un problème concret, comprendre les données,
              construire des indicateurs fiables, puis présenter les résultats
              de façon simple pour aider à prendre de meilleures décisions.
            </p>
          </div>
        </section>

        <section className="section" id="competences">
          <div className="section-heading">
            <p className="section-kicker">Compétences</p>
            <h2>Les bases techniques pour analyser, expliquer et prévoir.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projets">
          <div className="section-heading">
            <p className="section-kicker">Projets</p>
            <h2>Des cas pratiques à présenter en entretien.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <strong>{project.metric}</strong>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <small>{project.metricLabel}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section">
          <div className="section-heading">
            <p className="section-kicker">Parcours</p>
            <h2>Une progression claire vers les métiers de la data.</h2>
          </div>
          <div className="timeline">
            {timeline.map((step) => (
              <article className="timeline-item" key={step.title}>
                <span>{step.period}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Disponible pour un stage, une alternance ou un projet data.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:phanuelkone1@gmail.com">phanuelkone1@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/n%E2%80%99tcho-phanuel-eliel-kon%C3%A9-337931261/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/phanuelkone" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
