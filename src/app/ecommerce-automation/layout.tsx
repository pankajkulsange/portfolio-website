import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce QA Automation Framework - Case Study | Pankaj Kulsange',
  description: 'Comprehensive case study on building a scalable QA automation suite with Git, Jenkins, Docker & Selenium. Learn about the problems faced and solutions implemented.',
  keywords: [
    'E-commerce QA Automation',
    'Selenium Jenkins Docker',
    'Test Automation Framework',
    'CI/CD Pipeline',
    'QA Automation Case Study',
    'Pankaj Kulsange'
  ],
  openGraph: {
    title: 'E-commerce QA Automation Framework - Case Study',
    description: 'Building a Scalable QA Automation Suite with Git, Jenkins, Docker & Selenium',
    url: 'https://pankaj-kulsange.vercel.app/ecommerce-automation',
    type: 'article',
  },
};

export default function EcommerceAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
