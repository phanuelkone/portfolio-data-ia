import type { StaticImageData } from 'next/image'
import excelLogo from '@/src/assets/excel-logo.svg'
import logoEce from '@/src/assets/logo-ece.jpg'
import logo2ist from '@/src/assets/logo-2ist.png'
import logoMtn from '@/src/assets/logo-mtn.png'
import pentahoLogo from '@/src/assets/pentaho-logo.png'
import powerBiLogo from '@/src/assets/powerbi-logo.svg'

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const profile = {
  name: "N'tcho Phanuel Eliel Koné",
  role: 'Data Analyst | Data Scientist | Business Analyst',
  location: 'Paris · Mobilité Île-de-France',
  phone: '07 51 42 21 65',
  phoneUrl: 'tel:+33751422165',
  availability: 'Disponible immédiatement · Stage de 4 à 6 mois',
  opportunity: 'Stage de 4 à 6 mois',
  softSkills: ['Rigueur', 'Esprit logique', 'Autonomie', 'Organisation', 'Écoute', 'Travail en équipe', 'Capacité de synthèse'],
  email: 'phanuelkone1@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/n%E2%80%99tcho-phanuel-eliel-kon%C3%A9-337931261/',
  github: 'https://github.com/phanuelkone',
  cvUrl: '/Cv%20stage%20Phanuel%20Eliel.pdf',
  headline:
    'Je transforme des données brutes en analyses claires, dashboards KPI et modèles prédictifs utiles pour la décision métier.',
  shortPitch:
    'Étudiant en MSc 2 Data Management & Intelligence Artificielle à l’ECE Paris, je recherche un stage de 4 à 6 mois dans les métiers de la Data. Je fiabilise des données multi-sources, automatise le reporting et conçois des dashboards pour le pilotage de la performance.',
}

export const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Profil', href: '#profil' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Certifications', href: '#certification' },
  { label: 'Formation', href: '#formation' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '2', label: 'expériences pro' },
  { value: '3', label: 'projets data/IA' },
  { value: '5', label: 'certifications' },
  { value: '20+', label: 'technologies' },
]

export const recruiterFacts = [
  'Recherche : stage de 4 à 6 mois en Data Analysis, Business Analysis ou Data Science',
  'Disponibilité immédiate · Mobilité Île-de-France',
  'Stack principal : Python, SQL, Power BI, Pandas, Scikit-learn',
  'Expérience Data Scientist chez MTN avec pipelines, KPI et churn',
  'Approche orientée dashboard, qualité des données et recommandations métiers',
]

type SkillLogo = string | StaticImageData

export const skillGroups: Array<{
  eyebrow: string
  title: string
  items: Array<{ name: string; mark: string; logo?: SkillLogo }>
}> = [
  {
    eyebrow: 'Data Analysis',
    title: 'Analyse & préparation',
    items: [
      { name: 'Python', mark: 'Py', logo: `${iconBase}/python/python-original.svg` },
      { name: 'SQL', mark: 'SQL' },
      { name: 'Pandas', mark: 'Pd', logo: `${iconBase}/pandas/pandas-original.svg` },
      { name: 'NumPy', mark: 'Np', logo: `${iconBase}/numpy/numpy-original.svg` },
      { name: 'Excel', mark: 'XLS', logo: excelLogo },
    ],
  },
  {
    eyebrow: 'Data Visualisation',
    title: 'Dashboards & reporting',
    items: [
      { name: 'Power BI', mark: 'BI', logo: powerBiLogo },
      { name: 'Tableau', mark: 'Tb', logo: `${iconBase}/tableau/tableau-original.svg` },
      { name: 'DAX', mark: 'DAX' },
      { name: 'Power Query', mark: 'PQ' },
      {
        name: 'Matplotlib',
        mark: 'Mp',
        logo: `${iconBase}/matplotlib/matplotlib-original.svg`,
      },
    ],
  },
  {
    eyebrow: 'Data Science',
    title: 'Modèles & statistiques',
    items: [
      {
        name: 'Scikit-learn',
        mark: 'SK',
        logo: `${iconBase}/scikitlearn/scikitlearn-original.svg`,
      },
      { name: 'Statistiques', mark: 'Σ' },
      { name: 'Machine Learning', mark: 'ML' },
      {
        name: 'TensorFlow',
        mark: 'TF',
        logo: `${iconBase}/tensorflow/tensorflow-original.svg`,
      },
      { name: 'Feature engineering', mark: 'FE' },
    ],
  },
  {
    eyebrow: 'Data Engineering',
    title: 'Pipelines & données',
    items: [
      { name: 'ETL', mark: 'ETL' },
      { name: 'API REST', mark: 'API' },
      { name: 'Spark / PySpark', mark: 'Spark' },
      { name: 'Automatisation', mark: 'Auto' },
      { name: 'MySQL', mark: 'My', logo: `${iconBase}/mysql/mysql-original.svg` },
      {
        name: 'SQL Server',
        mark: 'SQL',
        logo: `${iconBase}/microsoftsqlserver/microsoftsqlserver-original.svg`,
      },
    ],
  },
  {
    eyebrow: 'Business Analysis',
    title: 'KPI & décision métier',
    items: [
      { name: 'KPI', mark: 'KPI' },
      { name: 'Reporting', mark: 'Rpt' },
      { name: 'Analyse des besoins', mark: 'Need' },
      { name: 'Recommandations métiers', mark: 'Reco' },
      { name: 'Churn prediction', mark: 'Churn' },
    ],
  },
  {
    eyebrow: 'Outils',
    title: 'Workflow & cloud',
    items: [
      { name: 'Git', mark: 'Git', logo: `${iconBase}/git/git-original.svg` },
      { name: 'GitHub', mark: 'GH', logo: `${iconBase}/github/github-original.svg` },
      { name: 'Pentaho', mark: 'P', logo: pentahoLogo },
      {
        name: 'AWS',
        mark: 'AWS',
        logo: `${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
      },
      { name: 'Azure', mark: 'Az', logo: `${iconBase}/azure/azure-original.svg` },
      { name: 'Jira', mark: 'Jira', logo: `${iconBase}/jira/jira-original.svg` },
    ],
  },
]

export const projectFilters = [
  'Tous',
  'Data Analysis',
  'Data Science',
  'Business Intelligence',
  'Business Analysis',
] as const

export const projects = [
  {
    slug: 'pipeline-donnees-etl',
    title: 'Pipeline de données ETL',
    type: 'ETL & BI',
    categories: ['Business Intelligence', 'Business Analysis', 'Data Analysis'],
    problem:
      'Fiabiliser le suivi de KPI à partir de données brutes dispersées et difficiles à exploiter.',
    data: 'Données opérationnelles, fichiers sources et tables SQL',
    tools: ['Python', 'SQL', 'Power BI'],
    steps: ['Ingestion', 'Transformation', 'Stockage SQL', 'Dashboard KPI'],
    result:
      'Traitements automatisés, données structurées et indicateurs plus faciles à suivre.',
    kpi: 'Pipeline ETL + dashboard interactif',
    context:
      'Projet orienté entreprise pour transformer des fichiers sources hétérogènes en tables propres, prêtes pour le reporting et le pilotage de performance.',
    highlights: [
      'Contrôles qualité sur les valeurs manquantes, doublons et formats incohérents',
      'Modèle SQL simple pour consolider les indicateurs métiers',
      'Dashboard Power BI pensé pour comparer rapidement les KPI clés',
    ],
    deliverables: [
      'Script Python d’ingestion et de transformation',
      'Schéma de tables SQL pour les données nettoyées',
      'Maquette de dashboard KPI avec filtres et cartes de synthèse',
    ],
    githubUrl:
      'https://github.com/phanuelkone/portfolio-data-ia/tree/main/projects/pipeline-donnees-etl',
    demoUrl: '/projets/pipeline-donnees-etl',
    demoLabel: 'Voir le projet',
  },
  {
    slug: 'recommandation-musicale',
    title: 'Système de recommandation musicale',
    type: 'Machine Learning',
    categories: ['Data Science', 'Data Analysis'],
    problem:
      'Recommander des musiques pertinentes à partir de similarités entre morceaux et signaux utilisateurs.',
    data: 'Données musicales, features audio et API YouTube',
    tools: ['Python', 'Pandas', 'API YouTube'],
    steps: ['EDA', 'Feature engineering', 'Similarité cosinus', 'Visualisation'],
    result:
      'Moteur de recommandation interprétable avec visualisation des résultats.',
    kpi: 'Recommandation personnalisée',
    context:
      'Projet data science pour rapprocher des morceaux selon leurs caractéristiques audio et proposer des recommandations compréhensibles.',
    highlights: [
      'Analyse exploratoire des features audio pour repérer les variables utiles',
      'Calcul de similarité cosinus pour classer les morceaux proches',
      'Restitution lisible des recommandations avec les critères qui les expliquent',
    ],
    deliverables: [
      'Notebook d’EDA et de préparation des données',
      'Fonction de recommandation basée sur les similarités',
      'Visualisation des morceaux recommandés et de leurs scores',
    ],
    githubUrl: 'https://github.com/phanuelkone',
    demoUrl: '/projets/recommandation-musicale',
    demoLabel: 'Voir le projet',
  },
  {
    slug: 'pipeline-donnees-sportives',
    title: 'Pipeline de données sportives',
    type: 'Data Science',
    categories: ['Data Science', 'Data Analysis'],
    problem:
      'Transformer des données sportives massives en datasets propres pour l’analyse et la modélisation.',
    data: 'Données sportives volumineuses et variables de performance',
    tools: ['Python', 'Spark', 'Machine Learning'],
    steps: ['Nettoyage', 'Création datasets ML', 'Classification', 'Régression'],
    result:
      'Datasets exploitables, analyses statistiques et visualisation des performances.',
    kpi: 'Classification + régression',
    context:
      'Projet orienté préparation de données et modélisation, avec un focus sur la fiabilité des datasets avant analyse sportive.',
    highlights: [
      'Nettoyage de données volumineuses et normalisation des variables',
      'Construction de jeux de données prêts pour classification et régression',
      'Lecture statistique des performances pour faciliter l’interprétation',
    ],
    deliverables: [
      'Pipeline de nettoyage et de structuration',
      'Dataset final exploitable pour machine learning',
      'Synthèse visuelle des performances et des variables importantes',
    ],
    githubUrl: 'https://github.com/phanuelkone',
    demoUrl: '/projets/pipeline-donnees-sportives',
    demoLabel: 'Voir le projet',
  },
]

export const featuredCertification = {
  label: 'À la une / Machine Learning',
  title: 'AWS Academy Machine Learning Foundations',
  organization: 'AWS Academy / Credly',
  issued: 'Badge consultable sur Credly',
  certificateUrl:
    'https://www.credly.com/badges/c0069127-cda3-40b9-b911-7732e1541e0b/public_url',
  skills: ['AWS', 'Cloud', 'Data', 'Machine Learning'],
}

export const certifications = [
  {
    title: 'Exam - Data Analyst - Level 3 (EN)',
    organization: 'Liora',
    issued: '9 juin 2026',
    preview: '/certificates/liora-data-analyst-level-3.png',
    certificateUrl: '/certificates/liora-data-analyst-level-3.pdf',
    skills: ['Data Analysis', 'SQL', 'Power BI', 'Python'],
  },
  {
    title: 'DataScientest First Exam',
    organization: 'DataScientest',
    issued: 'Décembre 2024',
    preview: '/certificates/datascientest-first-exam.svg',
    certificateUrl: '/certificates/datascientest-first-exam.pdf',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas'],
  },
  {
    title: 'Programming for DS TechAway niv2',
    organization: 'TechAway',
    issued: 'Décembre 2024',
    preview: '/certificates/programming-ds-techaway-niv2.svg',
    certificateUrl: '/certificates/programming-ds-techaway-niv2.pdf',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
  },
  {
    title: 'SQL TechAway niv2',
    organization: 'TechAway',
    issued: 'Décembre 2024',
    preview: '/certificates/sql-techaway-niv2.svg',
    certificateUrl: '/certificates/sql-techaway-niv2.pdf',
    skills: ['SQL', 'Data Analysis', 'Power BI'],
  },
]

export const experiences = [
  {
    period: 'Mai 2025 - Août 2025',
    title: 'Stagiaire Data Scientist',
    organization: 'MTN, Côte d’Ivoire',
    logo: logoMtn,
    tools: ['Python', 'SQL', 'Power BI', 'Machine Learning'],
    outcome: 'Dashboards KPI, pipelines data et modèles de prédiction du churn.',
    items: [
      'Collecte, consolidation et fiabilisation de données multi-sources pour sécuriser les analyses et reportings',
      'Automatisation des traitements Python et SQL, contrôles de cohérence et détection d’anomalies',
      'Définition et suivi de KPI opérationnels ; conception de tableaux de bord Power BI',
      'Modélisation du churn des ADU (Active Data Users) pour identifier les profils à risque',
      'Restitution des résultats aux équipes métiers et documentation des processus',
    ],
  },
  {
    period: 'Juillet 2023 - Août 2023',
    title: 'Stagiaire Développeur',
    organization: '2IST',
    logo: logo2ist,
    tools: ['HTML', 'CSS', 'Bootstrap', 'UX'],
    outcome: 'Interfaces refondues avec une expérience utilisateur plus claire.',
    items: [
      'Refonte d’interfaces utilisateurs avec HTML, CSS et Bootstrap',
      'Amélioration de l’expérience utilisateur, de l’ergonomie et du design des pages web',
      'Participation aux tests, ajustements responsive et optimisation de la présentation des interfaces',
    ],
  },
]

export const education = [
  {
    period: '2026 - 2027 · MSc 2',
    title: 'Data Management & Intelligence Artificielle',
    organization: 'ECE Paris',
    logo: logoEce,
    logoBackground: '#007179',
    logoClassName: 'size-24',
    subjects: [
      'Data Engineering : bases de données avancées, infrastructures Big Data, plateformes cloud et traitement des données en temps réel',
      'Déploiement de modèles de Machine Learning, maîtrise du cycle de vie des données et plateformes MLOps',
      'Gestion agile et risques, éthique du numérique, souveraineté des données et communication',
    ],
  },
  {
    period: '2025 - 2026 · MSc',
    title: 'Data Management',
    organization: 'ECE Paris',
    logo: logoEce,
    logoBackground: '#007179',
    logoClassName: 'size-24',
    subjects: ['Bases de données, Data Quality, Smart Data et Python', 'Architecture des systèmes d’information et transformation digitale', 'DevOps, IoT, Blockchain et management de projets IT'],
  },
  {
    period: '2022 - 2025 · Bachelor',
    title: 'Développeur Data & IA',
    organization: 'ECE Paris',
    logo: logoEce,
    logoBackground: '#007179',
    logoClassName: 'size-24',
    subjects: ['Python, SQL, Java, PHP et MySQL', 'Analyse de données, Machine Learning et Power BI', 'Développement d’applications et projets Data & IA'],
  },
]
