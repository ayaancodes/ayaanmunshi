import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';
import { work } from '@/content/portfolio';
import WorkCard from '@/components/portfolio/WorkCard';
import Blackjack from '@/components/portfolio/Blackjack';
import VisitorCount from '@/components/portfolio/VisitorCount';
import MotionToggle from '@/components/portfolio/MotionToggle';
import BrandLink from '@/components/portfolio/BrandLink';
import Stocks from '@/components/portfolio/Stocks';

export default function Home() {
  return <>
    <a className="skip-link" href="#engineering">Skip to engineering</a>
    <div className="contour-background" aria-hidden="true"><svg viewBox="0 0 1440 2600" preserveAspectRatio="none">{Array.from({length:19},(_,i)=><path key={i} d={`M${-570+i*42} -100 C${500+i*32} ${80+i*7}, ${-390+i*30} ${460+i*11}, ${700+i*35} ${720+i*6} S${1550+i*27} ${1130+i*9}, ${510+i*33} ${1410+i*9} S${-450+i*20} ${1970+i*10}, ${820+i*34} 2740`} />)}</svg></div>
    <main className="portfolio">
      <header className="profile-header">
        <Image className="portrait" src="/photos/headshot.jpg" width={96} height={96} sizes="96px" quality={95} preload alt="Ayaan Munshi" />
        <div><h1>Ayaan Munshi</h1><p className="profile-role">Software Engineer</p><nav className="profile-socials" aria-label="Social links"><a className="social-linkedin" href="https://www.linkedin.com/in/ayaan-munshi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><FaLinkedin/></a><a className="social-github" href="https://github.com/ayaancodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><FaGithub/></a><a className="social-mail" href="mailto:ayaanmunshi456@gmail.com" aria-label="Email Ayaan"><FiMail/></a></nav></div>
      </header>
      <section className="life-section" aria-labelledby="now-title"><h2 id="now-title">Now</h2><ul><li><span className="life-arrow">↳</span><span>Applied AI Engineer at <BrandLink name="Aker AI" href="https://aker-ai.com/" logo="/experience/AkerLogo.png" brand="aker"/><span className="life-location">New York</span></span></li><li><span className="life-arrow">↳</span><span>Senior Software Engineering Student at <BrandLink name="Western University" href="https://www.uwo.ca/" logo="/experience/WesternW.svg" brand="western"/><span className="life-location">London</span></span></li></ul></section>
      <section className="life-section previously" aria-labelledby="previous-title"><h2 id="previous-title">Previously</h2><ul><li><span className="life-arrow">↳</span><span>Software Engineer at <BrandLink name="Rippling" href="https://www.rippling.com/en-CA/platform" logo="/experience/RipplingLogo.svg" brand="rippling"/><span className="life-location">New York</span></span></li><li><span className="life-arrow">↳</span><span>Quantitative Trading at <BrandLink name="BMO Capital Markets" href="https://capitalmarkets.bmo.com/" logo="/experience/BMOmark.png" brand="bmo"/><span className="life-location">Toronto</span></span></li><li><span className="life-arrow">↳</span><span><BrandLink name="RBC Capital Markets" href="https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading" logo="/experience/RBCLogo.jpg" brand="rbc"/><span className="life-location">Toronto</span></span></li><li><span className="life-arrow">↳</span><span>Former academy-level soccer player in Ontario</span></li></ul></section>
      <section className="engineering-section" id="engineering" aria-labelledby="engineering-title"><div className="section-heading"><div><h2 id="engineering-title">Engineering</h2><p>A few places I’ve built, learned, and contributed.</p></div><MotionToggle/></div><div className="work-grid">{work.map(item=><WorkCard key={item.id} work={item}/>)}</div></section>
      <Stocks/>
      <footer className="portfolio-footer"><div className="footer-invitation"><p>Want to build something together or just want to say hi?</p><a className="chat-link" href="mailto:ayaanmunshi456@gmail.com">Let’s chat <FiArrowUpRight/></a><a className="footer-email" href="mailto:ayaanmunshi456@gmail.com">ayaanmunshi456@gmail.com</a></div><Blackjack/><div className="footer-bottom"><VisitorCount/><span>© {new Date().getFullYear()} Ayaan Munshi</span></div></footer>
    </main>
  </>;
}
