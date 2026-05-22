import type { StaticImageData } from 'next/image'
import excelLogo from '@/src/assets/excel-logo.svg'
import logoEce from '@/src/assets/logo-ece.jpg'
import logoEsilv from '@/src/assets/logo-esilv.png'
import logo2ist from '@/src/assets/logo-2ist.png'
import logoMtn from '@/src/assets/logo-mtn.png'
import pentahoLogo from '@/src/assets/pentaho-logo.png'
import powerBiLogo from '@/src/assets/powerbi-logo.svg'

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const profile = {
  name: "N'tcho Phanuel Eliel Koné",
  role: 'Data & AI Engineer in training',
  location: 'Paris, France',
  email: 'phanuelkone1@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/n%E2%80%99tcho-phanuel-eliel-kon%C3%A9-337931261/',
  github: 'https://github.com/phanuelkone',
  headline:
    'Je conçois des pipelines data, dashboards KPI et modèles prédictifs pour transformer des données brutes en décisions claires.',
  shortPitch:
    'Étudiant en MSc Computer Science & Data Science à l’ESILV, orienté Data Analyst / Data Scientist, avec une expérience Data Scientist chez MTN et des projets ETL, recommandation et machine learning.',
}

export const navItems = [
  { label: 'Profil', href: '#profil' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Certification', href: '#certification' },
  { label: 'Formation', href: '#formation' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '2', label: 'expériences pro' },
  { value: '3', label: 'projets data/IA' },
  { value: 'AWS', label: 'badge Credly' },
  { value: 'MSc', label: 'CS & Data Science' },
]

export const recruiterFacts = [
  'Disponible pour stage, alternance ou mission data',
  'Python, SQL, Power BI, Pandas, Scikit-learn',
  'Expérience Data Scientist chez MTN',
  'Culture dashboard, KPI, pipeline ETL et ML',
]

type SkillLogo = string | StaticImageData

export const skillGroups: Array<{
  eyebrow: string
  title: string
  items?: Array<{ name: string; mark: string; logo?: SkillLogo }>
  methods?: string[]
}> = [
  {
    eyebrow: 'Programming',
    title: 'Languages',
    items: [
      { name: 'Python', mark: 'Py', logo: `${iconBase}/python/python-original.svg` },
      { name: 'SQL', mark: 'SQL' },
      { name: 'Java', mark: 'Jv', logo: `${iconBase}/java/java-original.svg` },
    ],
  },
  {
    eyebrow: 'Data & IA',
    title: 'Libraries',
    items: [
      { name: 'Pandas', mark: 'Pd', logo: `${iconBase}/pandas/pandas-original.svg` },
      { name: 'NumPy', mark: 'Np', logo: `${iconBase}/numpy/numpy-original.svg` },
      {
        name: 'Scikit-learn',
        mark: 'SK',
        logo: `${iconBase}/scikitlearn/scikitlearn-original.svg`,
      },
      {
        name: 'TensorFlow',
        mark: 'TF',
        logo: `${iconBase}/tensorflow/tensorflow-original.svg`,
      },
    ],
  },
  {
    eyebrow: 'Visualization',
    title: 'Business insight',
    items: [
      { name: 'Power BI', mark: 'BI', logo: powerBiLogo },
      {
        name: 'Matplotlib',
        mark: 'Mp',
        logo: `${iconBase}/matplotlib/matplotlib-original.svg`,
      },
      { name: 'Excel', mark: 'XLS', logo: excelLogo },
    ],
  },
  {
    eyebrow: 'Database',
    title: 'Systems',
    items: [
      { name: 'MySQL', mark: 'My', logo: `${iconBase}/mysql/mysql-original.svg` },
      {
        name: 'SQL Server',
        mark: 'SQL',
        logo: `${iconBase}/microsoftsqlserver/microsoftsqlserver-original.svg`,
      },
    ],
  },
  {
    eyebrow: 'Workflow',
    title: 'Tools',
    items: [
      { name: 'Git', mark: 'Git', logo: `${iconBase}/git/git-original.svg` },
      { name: 'GitHub', mark: 'GH', logo: `${iconBase}/github/github-original.svg` },
      { name: 'Pentaho', mark: 'P', logo: pentahoLogo },
    ],
  },
  {
    eyebrow: 'Methods',
    title: 'Data science',
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

export const projects = [
  {
    title: 'Pipeline de données ETL',
    type: 'ETL & BI',
    description:
      'Pipeline complet d’ingestion, transformation, stockage SQL et visualisation pour suivre des KPI fiables.',
    stack: ['Python', 'SQL', 'Power BI'],
    impact: 'Automatisation des traitements',
  },
  {
    title: 'Système de recommandation musicale',
    type: 'Machine Learning',
    description:
      'Moteur basé sur la similarité cosinus avec EDA, feature engineering, intégration API YouTube et visualisation.',
    stack: ['Python', 'Pandas', 'API YouTube'],
    impact: 'Recommandation personnalisée',
  },
  {
    title: 'Pipeline de données sportives',
    type: 'Data Science',
    description:
      'Traitement de données massives, datasets ML et modèles de classification/régression pour analyser les performances.',
    stack: ['Python', 'Spark', 'Machine Learning'],
    impact: 'Datasets ML exploitables',
  },
]

export const experiences = [
  {
    period: 'Mai 2025 - Août 2025',
    title: 'Stagiaire Data Scientist',
    organization: 'MTN, Côte d’Ivoire',
    logo: logoMtn,
    items: [
      'Développement de pipelines de traitement de données avec Python et SQL',
      'Nettoyage, structuration et amélioration de la qualité des données',
      'Création de dashboards et suivi des indicateurs de performance',
      'Développement de modèles de prédiction du churn',
    ],
  },
  {
    period: 'Juillet 2023 - Août 2023',
    title: 'Stagiaire Développeur',
    organization: '2IST',
    logo: logo2ist,
    items: [
      'Refonte d’interfaces utilisateurs avec HTML, CSS et Bootstrap',
      'Amélioration de l’expérience utilisateur et optimisation du design',
    ],
  },
]

export const education = [
  {
    period: 'MSc 1',
    title: 'Computer Science & Data Science',
    organization: 'ESILV Paris',
    logo: logoEsilv,
  },
  {
    period: 'Bachelor',
    title: 'Développeur Data & IA',
    organization: 'ECE Paris',
    logo: logoEce,
  },
]
