export type Experience = {
  slug: string
  company: string
  role: string
  team?: string
  start: string
  end: string
  location: string
  summary: string
  detail?: string[]
  tech: string[]
  link: string
  image: string
}

export const EXPERIENCES: Experience[] = [
  {
    slug: 'rippling',
    company: 'Rippling',
    role: 'Software Engineer Intern',
    team: 'Time Tracking',
    start: 'May 2026',
    end: 'Aug 2026',
    location: 'New York, USA',
    summary: 'Incoming summer 2026.',
    tech: ['Python', 'Django', 'AWS', 'React'],
    link: 'https://www.rippling.com/about',
    image: '/experience/nyc.jpg',
  },
  {
    slug: 'bmo-capital-markets',
    company: 'BMO Capital Markets',
    role: 'Quantitative Trading Intern',
    team: 'Global Markets',
    start: 'Jan 2026',
    end: 'Apr 2026',
    location: 'Toronto, Canada',
    summary: 'Incoming winter 2026.',
    tech: ['Python', 'KDB/Q', 'SQL', 'Excel'],
    link: 'https://capitalmarkets.bmo.com/en/about-us/',
    image: '/experience/BMOLogo.webp',
  },
  {
    slug: 'rbc-quant-technology',
    company: 'RBC Capital Markets',
    role: 'Quantitative Developer Intern',
    team: 'Quantitative Technology Services',
    start: 'Sep 2025',
    end: 'Dec 2025',
    location: 'Toronto, Canada',
    summary:
      'Built a centralized datastore for a 40+ app ecosystem supporting corporate bankers.',
    tech: ['C#', 'Python', 'SQL', 'Azure', 'React'],
    link: 'https://www.rbccm.com/en/about-us',
    image: '/experience/RBCLogo.jpg',
  },
  {
    slug: 'rbc-amplify',
    company: 'RBC Capital Markets',
    role: 'Software Engineer Intern',
    team: 'US Cash Management (Amplify)',
    start: 'May 2025',
    end: 'Aug 2025',
    location: 'Toronto, Canada',
    summary:
      'Developed a patent-pending agentic system optimizing transaction workflows.',
    tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
    link: 'https://www.rbccm.com/en/expertise/rbcclear.page',
    image: '/experience/RBCLogo.jpg',
  },
  {
    slug: 'beats-by-dre',
    company: 'Beats by Dre',
    role: 'Data Analytics Intern',
    team: 'Consumer Insights',
    start: 'Feb 2025',
    end: 'Mar 2025',
    location: 'California, USA',
    summary:
      'Designed Python analytics uncovering Gen Z listening trends to inform product strategy.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    link: 'https://www.beatsbydre.com/ca',
    image: '/experience/beats1.jpg',
  },
  {
    slug: 'rbc-market-risk',
    company: 'RBC Capital Markets',
    role: 'Software Engineer Intern',
    team: 'Enterprise Market Risk',
    start: 'May 2024',
    end: 'Aug 2024',
    location: 'Toronto, Canada',
    summary:
      'Built a web service automating delivery of real-time risk analytics.',
    tech: ['JavaScript', 'Exchange Web Services', 'Redis', 'Express'],
    link: 'https://www.rbccm.com/en/about-us',
    image: '/experience/RBCLogo.jpg',
  },
  {
    slug: 'canam-group',
    company: 'Canam Group',
    role: 'Engineering Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    location: 'Mississauga, Canada',
    summary:
      'Engineered a live telemetry-driven shipment tracker optimizing delivery efficiency.',
    tech: ['C#', 'SQL', 'Azure', 'Grafana'],
    link: 'https://www.canam.com/en/',
    image: '/experience/Canam.jpg',
  },
]
