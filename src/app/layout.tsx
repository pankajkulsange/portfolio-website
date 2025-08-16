import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pankaj Kulsange - QA Automation Engineer | Automation Testing Expert',
  description: 'Pankaj Kulsange is a QA Automation Engineer with 3+ years of experience in Selenium, TestNG, Cucumber, API testing, and performance testing. Expert in automation frameworks, CI/CD integration, and AI-powered QA solutions.',
  keywords: [
    'Pankaj Kulsange',
    'QA Automation Engineer',
    'Automation Engineer',
    'QA Engineer',
    'Test Automation',
    'Selenium Testing',
    'API Testing',
    'Performance Testing',
    'TestNG',
    'Cucumber',
    'Jenkins CI/CD',
    'AI for QA',
    'Automation Testing',
    'Quality Assurance',
    'Software Testing',
    'Test Framework',
    'Visual Regression Testing',
    'Cross-browser Testing',
    'Mobile Testing',
    'Carina Framework',
    'Zebrunner',
    'Percy',
    'RestAssured',
    'Postman',
    'JMeter',
    'Grafana'
  ],
  authors: [{ name: 'Pankaj Kulsange' }],
  creator: 'Pankaj Kulsange',
  publisher: 'Pankaj Kulsange',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pankaj-kulsange.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pankaj Kulsange - QA Automation Engineer | Automation Testing Expert',
    description: 'QA Automation Engineer with 3+ years of experience in Selenium, TestNG, Cucumber, API testing, and performance testing. Expert in automation frameworks and CI/CD integration.',
    url: 'https://pankaj-kulsange.vercel.app',
    siteName: 'Pankaj Kulsange Portfolio',
    images: [
      {
        url: '/portfolio_picture.png',
        width: 1200,
        height: 630,
        alt: 'Pankaj Kulsange - QA Automation Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pankaj Kulsange - QA Automation Engineer | Automation Testing Expert',
    description: 'QA Automation Engineer with 3+ years of experience in Selenium, TestNG, Cucumber, API testing, and performance testing.',
    images: ['/portfolio_picture.png'],
    creator: '@pankajkulsange', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'f08w1zoQeyQSsCJ9l9K8q3zO2Rvqjjc1CWGG5fSuUfo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="Pankaj Kulsange - QA Automation Engineer" href="/feed.xml" />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pankaj Kulsange",
              "jobTitle": "QA Automation Engineer",
              "description": "QA Automation Engineer with 3+ years of experience in automation testing, API testing, and performance testing",
              "url": "https://pankaj-kulsange.vercel.app",
              "image": "https://pankaj-kulsange.vercel.app/portfolio_picture.png",
              "sameAs": [
                "https://linkedin.com/in/pankajkulsange", // Replace with your actual LinkedIn
                "https://github.com/pankajkulsange", // Replace with your actual GitHub
                "https://twitter.com/pankajkulsange" // Replace with your actual Twitter
              ],
              "knowsAbout": [
                "QA Automation",
                "Selenium Testing",
                "TestNG",
                "Cucumber",
                "API Testing",
                "Performance Testing",
                "Jenkins CI/CD",
                "Automation Frameworks",
                "Visual Regression Testing",
                "Cross-browser Testing",
                "Mobile Testing",
                "Carina Framework",
                "Zebrunner",
                "Percy",
                "RestAssured",
                "Postman",
                "JMeter",
                "Grafana"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "QA Automation Engineer"
              }
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Pankaj Kulsange Portfolio",
              "url": "https://pankaj-kulsange.vercel.app",
              "description": "QA Automation Engineer portfolio showcasing automation testing projects and expertise",
              "author": {
                "@type": "Person",
                "name": "Pankaj Kulsange"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
