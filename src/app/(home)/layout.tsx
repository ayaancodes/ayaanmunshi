import '@/styles/portfolio.css';

export default function HomeLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return <div className="portfolio-root">{modal}{children}</div>;
}
