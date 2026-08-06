import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-data-ia.vercel.app'),
  title: {
    default:
      "N'tcho Phanuel Eliel Koné | Data Analyst, Data Scientist & Business Analyst",
    template: "%s | N'tcho Phanuel Eliel Koné",
  },
  description:
    "Portfolio premium Data & IA de N'tcho Phanuel Eliel Koné : projets ETL, dashboards Power BI, SQL, machine learning, expériences professionnelles et certifications Cloud/Data.",
  keywords: [
    'Data Analyst',
    'Data Scientist',
    'Business Analyst',
    'AI Portfolio',
    'Python',
    'SQL',
    'Power BI',
    'Machine Learning',
    'ETL',
    'AWS',
    'Portfolio Data IA',
  ],
  authors: [{ name: "N'tcho Phanuel Eliel Koné" }],
  creator: "N'tcho Phanuel Eliel Koné",
  openGraph: {
    title: "N'tcho Phanuel Eliel Koné | Data & AI Portfolio",
    description:
      'Portfolio Data & IA orienté décision métier : pipelines ETL, dashboards KPI, SQL, machine learning et certifications.',
    url: 'https://portfolio-data-ia.vercel.app/',
    siteName: "N'tcho Phanuel Eliel Koné",
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "N'tcho Phanuel Eliel Koné | Data & AI Portfolio",
    description:
      'Portfolio Data & IA orienté décision métier, Business Intelligence et machine learning.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
