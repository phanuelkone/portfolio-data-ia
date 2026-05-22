import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-data-ia.vercel.app'),
  title: {
    default: "N'tcho Phanuel Eliel Koné | Data & AI Portfolio",
    template: "%s | N'tcho Phanuel Eliel Koné",
  },
  description:
    "Portfolio premium Data & IA de N'tcho Phanuel Eliel Koné : projets ETL, machine learning, dashboards KPI, expérience Data Scientist et certification AWS.",
  keywords: [
    'Data Analyst',
    'Data Scientist',
    'AI Engineer',
    'Python',
    'SQL',
    'Power BI',
    'Machine Learning',
    'Portfolio Data IA',
  ],
  authors: [{ name: "N'tcho Phanuel Eliel Koné" }],
  creator: "N'tcho Phanuel Eliel Koné",
  openGraph: {
    title: "N'tcho Phanuel Eliel Koné | Data & AI Portfolio",
    description:
      'Projets data, pipelines ETL, dashboards KPI, machine learning et expérience professionnelle.',
    url: 'https://portfolio-data-ia.vercel.app/',
    siteName: "N'tcho Phanuel Eliel Koné",
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "N'tcho Phanuel Eliel Koné | Data & AI Portfolio",
    description:
      'Portfolio Data & IA orienté décision métier, machine learning et dashboards.',
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#09090b',
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
