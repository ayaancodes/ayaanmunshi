import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';
import { work } from '@/content/portfolio';
import WorkCard from '@/components/portfolio/WorkCard';
import Blackjack from '@/components/portfolio/Blackjack';
import VisitorCount from '@/components/portfolio/VisitorCount';
import MotionToggle from '@/components/portfolio/MotionToggle';

export default function Home() {
  return <>
    <a className="skip-link" href="#engineering">Skip to engineering</a>
    <div className="contour-background" aria-hidden="true"><svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMin slice">{Array.from({length:15},(_,i)=><path key={i} d={`M${-240+i*38} -100 C${480+i*31} ${20+i*8}, ${-80+i*32} ${260+i*12}, ${860+i*27} ${540+i*13}`} />)}</svg></div>
    <main className="portfolio">
      <header className="profile-header">
        <Image className="portrait" src="/photos/headshot.jpg" width={80} height={80} priority alt="Ayaan Munshi" />
        <div><h1>Ayaan Munshi</h1><p className="profile-role">Software Engineer</p><nav className="profile-socials" aria-label="Social links"><a href="https://www.linkedin.com/in/ayaan-munshi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><FaLinkedin/></a><a href="https://github.com/ayaancodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><FaGithub/></a><a href="mailto:ayaanmunshi456@gmail.com" aria-label="Email Ayaan"><FiMail/></a></nav></div>
      </header>
      <section className="life-section" aria-labelledby="now-title"><h2 id="now-title">Now</h2><ul><li><span className="life-arrow">↳</span><span>Applied AI Engineer at <span className="inline-company">Aker AI</span></span></li><li><span className="life-arrow">↳</span><span>Software Engineering at <a href="https://www.uwo.ca/" target="_blank" rel="noopener noreferrer">Western University</a><span className="degree">Bachelor of Engineering Sciences</span></span></li></ul></section>
      <section className="life-section previously" aria-labelledby="previous-title"><h2 id="previous-title">Previously</h2><ul><li><span className="life-arrow">↳</span><span>Software Engineer at <a href="https://www.rippling.com/" target="_blank" rel="noopener noreferrer">Rippling</a> <span className="team">— Time &amp; Attendance</span></span></li><li><span className="life-arrow">↳</span><span>Quantitative Trading at <a href="https://capitalmarkets.bmo.com/" target="_blank" rel="noopener noreferrer">BMO Capital Markets</a> <span className="team">— ETF Market Making</span></span></li><li><span className="life-arrow">↳</span><span>Former academy-level soccer player in Ontario</span></li></ul></section>
      <section className="engineering-section" id="engineering" aria-labelledby="engineering-title"><div className="section-heading"><div><h2 id="engineering-title">Engineering</h2><p>A few places I’ve built, learned, and contributed.</p></div><MotionToggle/></div><div className="work-grid">{work.map(item=><WorkCard key={item.id} work={item}/>)}</div></section>
      <footer className="portfolio-footer"><div className="footer-invitation"><p>Want to build something together or just want to say hi?</p><a className="chat-link" href="mailto:ayaanmunshi456@gmail.com">Let’s chat <FiArrowUpRight/></a><a className="footer-email" href="mailto:ayaanmunshi456@gmail.com">ayaanmunshi456@gmail.com</a></div><div className="footer-bottom"><Blackjack/><VisitorCount/><span>© {new Date().getFullYear()} Ayaan Munshi</span></div></footer>
    </main>
  </>;
}
