import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { work } from '@/content/portfolio';
import WorkCard from '@/components/portfolio/WorkCard';
import Blackjack from '@/components/portfolio/Blackjack';
import VisitorCount from '@/components/portfolio/VisitorCount';
import MotionToggle from '@/components/portfolio/MotionToggle';
import BrandLink from '@/components/portfolio/BrandLink';
import Stocks from '@/components/portfolio/Stocks';
import City from '@/components/portfolio/City';
import PixelBackground from '@/components/portfolio/PixelBackground';
import SoccerMoment from '@/components/portfolio/SoccerMoment';
import Writings from '@/components/portfolio/Writings';
import Contact, { ContactProvider } from '@/components/portfolio/Contact';
import CityClocks from '@/components/portfolio/CityClocks';
import ScrollReveal from '@/components/portfolio/ScrollReveal';

export default function Home() {
  return <>
    <a className="skip-link" href="#engineering">Skip to engineering</a>
    <PixelBackground/>
    <ScrollReveal/>
    <ContactProvider><main className="portfolio">
      <header className="profile-header">
        <div className="portrait-frame"><Image className="portrait" src="/photos/presenting-headshot-nov19.jpg" width={1280} height={1920} sizes="(max-width: 360px) 92px, (max-width: 580px) 110px, 164px" quality={95} preload alt="Ayaan Munshi presenting" /></div>
        <div className="profile-copy"><Image className="profile-monogram" src="/brand/am-shared-stem.svg" alt="" width={38} height={26} aria-hidden="true"/><h1>Ayaan Munshi</h1><p className="profile-role">Software Engineer</p><nav className="profile-socials" aria-label="Social links"><a className="social-linkedin" href="https://www.linkedin.com/in/ayaan-munshi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><FaLinkedin/></a><a className="social-github" href="https://github.com/ayaancodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><FaGithub/></a><a className="social-mail" href="mailto:ayaanmunshi456@gmail.com" aria-label="Email Ayaan"><FiMail/></a></nav></div>
      </header>
      <section className="life-section" aria-labelledby="now-title"><h2 id="now-title">Now</h2><ul><li><span className="life-arrow">↳</span><span>Applied AI Engineer at <BrandLink name="Aker AI" href="https://aker-ai.com/" logo="/experience/aker-mark-nov19.png" brand="aker"/><City>New York</City></span></li><li><span className="life-arrow">↳</span><span>Senior Software Engineering Student at <BrandLink name="Western University" href="https://www.uwo.ca/" logo="/experience/western-transparent-nov19.png" brand="western"/><City>London</City></span></li></ul></section>
      <section className="life-section previously" aria-labelledby="previous-title"><h2 id="previous-title">Previously</h2><ul><li><span className="life-arrow">↳</span><span>Software Engineer at <BrandLink name="Rippling" href="https://www.rippling.com/en-CA/platform" logo="/experience/RipplingLogo.svg" brand="rippling"/><City>New York</City></span></li><li><span className="life-arrow">↳</span><span>Quantitative Trading at <BrandLink name="BMO Capital Markets" href="https://capitalmarkets.bmo.com/" logo="/experience/bmo-transparent-nov19.png" brand="bmo"/><City>Toronto</City></span></li><li><span className="life-arrow">↳</span><span>Software Engineering at <BrandLink name="RBC Capital Markets" href="https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading" logo="/experience/rbc-transparent-nov19.png" brand="rbc"/><City>Toronto</City></span></li><li><span className="life-arrow">↳</span><span><SoccerMoment/></span></li></ul></section>
      <section className="engineering-section" id="engineering" aria-labelledby="engineering-title"><div className="section-heading"><div><h2 id="engineering-title">Engineering</h2><p>A few places I’ve built, learned, and contributed.</p></div><MotionToggle/></div><div className="work-grid">{work.map(item=><WorkCard key={item.id} work={item}/>)}</div></section>
      <Stocks/>
      <Writings/>
      <footer className="portfolio-footer"><div className="footer-topline"><div className="footer-invitation"><p>Got something in mind?</p><Contact/></div><CityClocks/></div><Blackjack/><div className="footer-bottom"><VisitorCount/><span>© {new Date().getFullYear()} Ayaan Munshi</span></div></footer>
    </main></ContactProvider>
  </>;
}
