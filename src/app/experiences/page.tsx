import ProjectCard from '@/components/ProjectCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const projects = [
    {
        id: 1,
        title: 'Rippling',
        role: 'Software Engineer Intern - Time Tracking Team',
        date: 'Incoming May 2026 - August 2026',
        location: 'New York, USA',
        description:
            'Incoming Summer 2026',
        tech: ['Python', 'Django', 'AWS', 'React'],
        link: 'https://www.rippling.com/about',
        image: '/experience/ripplingskyline.avif'
    },
    {
        id: 2,
        title: 'BMO Capital Markets',
        role: 'Quantitative Trading Intern - Global Markets Team',
        date: 'Incoming January 2026 - April 2026',
        location: 'Toronto, Canada',
        description:
            'Incoming Winter 2026',
        tech: ['Python', 'KDB/Q', 'SQL', 'Excel'],
        link: 'https://capitalmarkets.bmo.com/en/about-us/',
        image: '/experience/BMOLogo.webp'
    },
    {
        id: 3,
        title: 'RBC Capital Markets ',
        role: 'Quantitative Developer Intern - Quantitative Technology Services Team',
        date: 'September 2025 - December 2025',
        location: 'Toronto, Canada',
        description:
            'Built out a centralized datastore for a 40+ app ecosystem supporting corporate bankers.',
        tech: ['C#', 'Python', 'SQL', 'Azure', 'React'],
        link: 'https://www.rbccm.com/en/about-us',
        image: '/experience/rbclogo.jpg'

    },
    {
        id: 4,
        title: 'RBC Capital Markets',
        role: 'Software Engineer Intern - US Cash Management Team (Amplify)',
        date: 'May 2025 - August 2025',
        location: 'Toronto, Canada',
        description:
            'Developed a patent-pending agentic system optimizing transaction workflows.',
        tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Redis'],
        link: 'https://www.rbccm.com/en/expertise/rbcclear.page',
        image: '/experience/rbclogo.jpg'
    },
    {
        id: 5,
        title: 'RBC Capital Markets ',
        role: 'Software Engineeer Intern - Enterprise Market Risk Team',
        date: 'May 2024 - August 2024',
        location: 'Toronto, Canada',
        description:
            'Developed an web service automating delivery of real-time risk analytics',
        tech: ['JavaScript', 'Exchange Web Services', 'Redis', 'Express'],
        link: 'https://www.rbccm.com/en/about-us',
        image: '/experience/rbclogo.jpg'
    },
    {
        id: 6,
        title: 'Beats by Dre',
        date: 'February 2025 - March 2025',
        location: 'California, USA (Remote)',
        role: 'Data Analytics Intern - Consumer Insights Team',
        description:
            'Designed Python analytics uncovering Gen Z listening trends to inform product strategy'
        ,
        tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
        link: 'https://www.beatsbydre.com/ca',
        image: '/experience/Beats1.jpg'
    },
    {
        id: 7,
        title: 'Canam Group',
        role: 'Engineering Intern',
        date: 'May 2023 - August 2023',
        location: 'Mississauga, Canada',
        description:
            'Engineered a live telemetry-driven shipment tracker optimizing delivery efficiency ',
        tech: ['C#', 'SQL', 'Azure', 'Grafana'],
        link: 'https://www.canam.com/en/',
        image: '/experience/canam.jpg'
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