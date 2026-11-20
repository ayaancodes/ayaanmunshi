import ProjectCard from '@/components/ProjectCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const projects = [
    {
        id: 1,
        title: 'Rippling',
        role: 'Software Engineer Intern - Time Tracking Team',
        date: 'May 2026 - August 2026',
        location: 'New York, USA',
        description:
            'Built a customer-facing AI Time Products feature with Python and TypeScript.',
        tech: ['Python', 'Django', 'AWS', 'React'],
        link: 'https://www.rippling.com/about',
        image: '/experience/RipplingSkyline.avif'
    },
    {
        id: 2,
        title: 'BMO Capital Markets',
        role: 'Quantitative Trading Intern - Global Markets Team',
        date: 'January 2026 - April 2026',
        location: 'Toronto, Canada',
        description:
            'Supported ETF market making with Python and KDB/Q.',
        tech: ['Python', 'KDB/Q', 'SQL', 'Excel'],
        link: 'https://capitalmarkets.bmo.com/en/about-us/',
        image: '/experience/bmo-transparent-nov19.png'
    },
    {
        id: 3,
        title: 'RBC Capital Markets ',
        role: 'Quantitative Developer Intern - Quantitative Technology Team',
        date: 'September 2025 - December 2025',
        location: 'Toronto, Canada',
        description:
            'Built streaming APIs and data checks for capital markets systems.',
        tech: ['C#', 'Python', 'SQL', 'Azure', 'React'],
        link: 'https://www.rbccm.com/en/',
        image: '/experience/rbc-transparent-nov19.png'

    },
    {
        id: 4,
        title: 'RBC Capital Markets',
        role: 'Software Engineer Intern - US Cash Management Team (Amplify)',
        date: 'May 2025 - August 2025',
        location: 'Toronto, Canada',
        description:
            'Designed multi-agent payment workflows and data schemas for banking services.',
        tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
        link: 'https://www.rbccm.com/en/',
        image: '/experience/rbc-transparent-nov19.png'
    },
    {
        id: 5,
        title: 'Beats by Dre',
        date: 'January 2024 - April 2024',
        location: 'California, USA (Remote)',
        role: 'Strategy & Analytics Intern - Consumer Insights Team',
        description:
            'Analyzed consumer and market data in Python to inform product strategy.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
        link: 'https://www.beatsbydre.com/ca',
        image: '/experience/beats1.jpg'
    },
    {
        id: 6,
        title: 'RBC Capital Markets ',
        role: 'Software Engineer Intern - Enterprise Market Risk Team',
        date: 'May 2024 - August 2024',
        location: 'Toronto, Canada',
        description:
            'Built a Next.js email notification system for market-risk analytics.',
        tech: ['JavaScript', 'Exchange Web Services', 'Redis', 'Express'],
        link: 'https://www.rbccm.com/en/',
        image: '/experience/rbc-transparent-nov19.png'
    },
    {
        id: 7,
        title: 'Canam Manufacturing Group',
        role: 'Lean Engineering Student',
        date: 'May 2023 - August 2023',
        location: 'Toronto, Canada',
        description:
            'Built a C# and Blender shipment-yard tracker and supported lean process improvements.',
        tech: ['C#', 'Blender 3D', 'KAIZEN', '3P', '5S'],
        link: 'https://www.canam.com/en/',
        image: '/experience/canam-transparent-nov19.png'
    }
]

export default function ExperiencesPage() {
    return (
        <>
            <Header showHomeLink={true} />

            <h1 className="font-serif text-[2.5rem] tracking-tight text-primary">
                Experiences
            </h1>
            <h2 className="text-base font-medium tracking-tight text-foreground">
                where I’ve worked.
            </h2>

            <section className="pt-6">
                <div className="flex flex-col">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}
