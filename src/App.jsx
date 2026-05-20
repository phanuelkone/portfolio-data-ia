import { useEffect } from 'react'
import excelLogo from './assets/excel-logo.svg'
import heroImg from './assets/hero.png'
import pentahoLogo from './assets/pentaho-logo.png'
import powerBiLogo from './assets/powerbi-logo.svg'
import profilePhoto from './assets/profile-photo.jpeg'
import './App.css'

const credlyBadgeId = 'c0069127-cda3-40b9-b911-7732e1541e0b'
const credlyBadgeUrl = `https://www.credly.com/badges/${credlyBadgeId}/public_url`

function CredlyBadge() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    script.dataset.credlyEmbed = 'true'
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div
      className="credly-badge"
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={credlyBadgeId}
      data-share-badge-host="https://www.credly.com"
    ></div>
  )
}

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skillGroups = [
  {
    titleAccent: 'Programming',
    title: 'Languages',
    items: [
      {
        name: 'Python',
        mark: 'Py',
        icon: `${iconBase}/python/python-original.svg`,
      },
      { name: 'SQL', mark: 'SQL' },
      { name: 'Java', mark: 'Jv', icon: `${iconBase}/java/java-original.svg` },
    ],
  },
  {
    titleAccent: 'Data & IA',
    title: 'Libraries',
    items: [
      { name: 'Pandas', mark: 'Pd', icon: `${iconBase}/pandas/pandas-original.svg` },
      { name: 'NumPy', mark: 'Np', icon: `${iconBase}/numpy/numpy-original.svg` },
      {
        name: 'Scikit-learn',
        mark: 'SK',
        icon: `${iconBase}/scikitlearn/scikitlearn-original.svg`,
      },
      {
        name: 'TensorFlow',
        mark: 'TF',
        icon: `${iconBase}/tensorflow/tensorflow-original.svg`,
      },
    ],
  },
  {
    titleAccent: 'Data Visualization',
    title: 'Tools',
    items: [
      { name: 'Power BI', mark: 'BI', icon: powerBiLogo },
      {
        name: 'Matplotlib',
        mark: 'Mp',
        icon: `${iconBase}/matplotlib/matplotlib-original.svg`,
      },
    ],
  },
  {
    titleAccent: 'Database',
    title: 'Systems',
    items: [
      { name: 'MySQL', mark: 'My', icon: `${iconBase}/mysql/mysql-original.svg` },
      {
        name: 'SQL Server',
        mark: 'SQL',
        icon: `${iconBase}/microsoftsqlserver/microsoftsqlserver-original.svg`,
      },
    ],
  },
  {
    titleAccent: 'Tools',
    title: 'Workflow',
    items: [
      { name: 'Git', mark: 'Git', icon: `${iconBase}/git/git-original.svg` },
      { name: 'GitHub', mark: 'GH', icon: `${iconBase}/github/github-original.svg` },
      { name: 'Pentaho', mark: 'P', icon: pentahoLogo },
      { name: 'Excel', mark: 'XLS', icon: excelLogo },
    ],
  },
  {
    titleAccent: 'Data Analytic',
    title: 'Methods',
    methods: [
      'EDA',
      'ETL pipelines',
      'Feature engineering',
      'Classification',
      'Regression',
      'Clustering',
      'KPI analysis',
      'Churn prediction',
    ],
  },
]

const projects = [
  {
    title: 'Pipeline de données ETL',
    type: 'ETL & BI',
    description:
      'Conception d’un pipeline complet pour ingérer, transformer et stocker des données dans une base SQL.',
    stack: ['Python', 'SQL', 'Power BI'],
    metric: 'ETL',
    metricLabel: 'ingestion, transformation, dashboards',
  },
  {
    title: 'Système de recommandation musicale',
    type: 'Machine Learning',
    description:
      'Développement d’un moteur de recommandation basé sur la similarité cosinus et l’analyse exploratoire.',
    stack: ['Python', 'Pandas', 'API YouTube'],
    metric: 'API',
    metricLabel: 'feature engineering et visualisation',
  },
  {
    title: 'Pipeline de données sportives',
    type: 'Data Science',
    description:
      'Traitement de données massives, création de datasets ML et développement de modèles prédictifs.',
    stack: ['Python', 'Spark', 'Machine Learning'],
    metric: 'ML',
    metricLabel: 'classification, régression, statistiques',
  },
]

const experiences = [
  {
    period: 'Mai 2025 - Août 2025',
    title: 'Stagiaire Data Scientist',
    organization: 'MTN, Côte d’Ivoire',
    items: [
      'Développement de pipelines de traitement de données avec Python et SQL',
      'Nettoyage, structuration et amélioration de la qualité des données',
      'Création de dashboards et suivi des indicateurs de performance (KPI)',
      'Développement de modèles de prédiction du churn',
    ],
  },
  {
    period: 'Juillet 2023 - Août 2023',
    title: 'Stagiaire Développeur',
    organization: '2IST',
    items: [
      'Refonte d’interfaces utilisateurs avec HTML, CSS et Bootstrap',
      'Amélioration de l’expérience utilisateur (UX) et optimisation du design',
    ],
  },
]

const education = [
  {
    period: 'MSc 1',
    title: 'Data Management',
    organization: 'ESILV Paris',
  },
  {
    period: 'Bachelor',
    title: 'Développeur Data & IA',
    organization: 'ECE Paris',
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
          <a href="#certifications">Certifications</a>
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
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

          <div className="hero-layout">
            <div className="hero-content">
              <p className="eyebrow">Étudiant Data & IA</p>
              <h1>N'tcho Phanuel Eliel Koné</h1>
              <p className="hero-copy">
                Futur Data Analyst ou Data Scientist, je transforme les données
                en analyses claires, tableaux de bord utiles et modèles
                prédictifs compréhensibles.
              </p>
              <div className="hero-badges" aria-label="Domaines principaux">
                <span>Data Analysis</span>
                <span>Machine Learning</span>
                <span>Cloud AWS</span>
              </div>
              <div className="hero-actions" aria-label="Actions principales">
                <a className="primary-action" href="#projets">
                  Voir mes projets
                </a>
                <a className="secondary-action" href="#contact">
                  Me contacter
                </a>
              </div>
            </div>

            <div className="hero-portrait" aria-label="Portrait professionnel">
              <div className="portrait-frame">
                <img
                  src={profilePhoto}
                  alt="Portrait de N'tcho Phanuel Eliel Koné"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Aperçu du profil">
          <div>
            <strong>2</strong>
            <span>expériences professionnelles</span>
          </div>
          <div>
            <strong>3</strong>
            <span>projets data et IA</span>
          </div>
          <div>
            <strong>Python</strong>
            <span>pipelines, EDA, modèles ML</span>
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
            <div className="profile-copy">
              <p>
                Je suis étudiant en Data & Intelligence Artificielle, orienté Data
                Analyst et Data Scientist. Mes expériences m’ont permis de
                travailler sur des pipelines de données, des dashboards KPI et des
                modèles de prédiction du churn.
              </p>
              <p>
                J’aime partir d’un problème concret, comprendre les données,
                construire des indicateurs fiables, puis présenter les résultats
                de façon simple pour aider à prendre de meilleures décisions.
              </p>
            </div>
          </div>
        </section>

        <section className="technical-skills-section" id="competences">
          <div className="technical-skills-inner">
            <div className="technical-skills-header">
              <span>
                <strong>Technical</strong> Skills
              </span>
              <h2>Un stack data complet, de l’analyse au cloud.</h2>
            </div>
            <div className="technical-skills-grid">
              {skillGroups.map((group) => (
                <article className="technical-skill-column" key={group.title}>
                  <h3>
                    <span>{group.titleAccent}</span>
                    {group.title}
                  </h3>
                  {group.items ? (
                    <ul className="logo-skill-list">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <span
                            className={`skill-logo${item.icon ? ' has-icon' : ''}`}
                            aria-hidden="true"
                          >
                            <span>{item.mark}</span>
                            {item.icon ? (
                              <img
                                src={item.icon}
                                alt=""
                                loading="lazy"
                                onError={(event) => {
                                  event.currentTarget.style.display = 'none'
                                  event.currentTarget.parentElement?.classList.remove(
                                    'has-icon',
                                  )
                                }}
                              />
                            ) : null}
                          </span>
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="method-list">
                      {group.methods.map((method) => (
                        <li key={method}>{method}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="section-heading">
            <p className="section-kicker">Certification</p>
            <h2>Une certification AWS vérifiable sur Credly.</h2>
          </div>
          <div className="certification-panel">
            <div className="certification-copy">
              <span>AWS</span>
              <h3>Certification cloud</h3>
              <p>
                Badge officiel Credly lié à mon parcours cloud, en complément de
                mon profil Data & IA.
              </p>
              <a href={credlyBadgeUrl} target="_blank" rel="noreferrer">
                Voir sur Credly
              </a>
            </div>
            <div className="certification-badge-wrap" aria-label="Badge AWS Credly">
              <CredlyBadge />
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projets">
          <div className="section-heading">
            <p className="section-kicker">Projets</p>
            <h2>Des projets data construits autour de cas concrets.</h2>
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

        <section className="section journey-section" id="parcours">
          <div className="section-heading">
            <p className="section-kicker">Parcours</p>
            <h2>Expérience professionnelle et formation data.</h2>
          </div>
          <div className="timeline">
            {experiences.map((step) => (
              <article className="timeline-item" key={step.title}>
                <span>{step.period}</span>
                <div className="timeline-heading">
                  <h3>{step.title}</h3>
                  <strong>{step.organization}</strong>
                </div>
                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="education-grid" aria-label="Formation">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.organization}</p>
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
