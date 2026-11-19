import Image from 'next/image';
import ProductWalkthrough from './ProductWalkthrough';
import MarketTerminal from './MarketTerminal';
import TransactionPreview from './TransactionPreview';
import type { Work } from '@/content/portfolio';

const bars = [26, 40, 32, 59, 44, 67, 61, 83, 73, 94, 78, 100];

export default function WorkPreview({ work }: { work: Work }) {
  const photo = work.photoPlacement !== 'panel' ? work.photos?.[0] : undefined;
  if (photo) return <div className="work-preview preview-photo" role="img" aria-label={photo.alt}><Image src={photo.src} alt="" fill sizes="(max-width: 580px) 90vw, 650px" quality={95} style={{ objectPosition: photo.position ?? '50% 50%' }}/></div>;
  return (
    <div className={`work-preview preview-${work.scene}`} role="img" aria-label={`${work.scene === 'agent' || work.scene === 'schedule' ? `${work.company} public product preview.` : 'Illustration, not shipped product UI.'} ${work.illustration}`}>
      <div className="scene" aria-hidden="true">
        {work.scene === 'agent' && <ProductWalkthrough company="aker"/>}
        {work.scene === 'schedule' && <ProductWalkthrough company="rippling"/>}
        {work.scene === 'market' && <MarketTerminal/>}
        {work.scene === 'data' && <TransactionPreview/>}
        {work.scene === 'workflow' && <div className="workflow-scene"><div className="workflow-title"><span>✦</span> Agentic payments.</div><div className="flow-wire"/>{[['01','Interpret','Payment instructions'],['02','Validate','Schema and rules'],['03','Route','Agent orchestration']].map(([num,title,desc],i) => <div className={`flow-card flow-${i}`} key={num}><small>{num}<span>✓</span></small><b>{title}</b><p>{desc}</p></div>)}<div className="workflow-bottom"><i/> Concept workflow</div></div>}
        {work.scene === 'risk' && <div className="report-window"><div className="mini-toolbar"><strong>Portfolio overview</strong><span>↗</span></div><div className="report-tabs"><b>Overview</b><span>Exposure</span><span>Reports</span></div><div className="report-metrics"><div><small>Sample portfolio</small><b>Balanced</b></div><div><small>Report status</small><b className="report-ready">Ready <i/></b></div></div><div className="report-chart">{bars.map((height,i)=><span key={i} style={{height:`${height}%`, animationDelay:`${i*.07}s`}}/>)}</div><div className="report-axis"><span>JAN</span><span>JUN</span><span>DEC</span></div><div className="report-stack"><span>JavaScript</span><span>Express</span><span>Redis</span><span>EWS</span></div></div>}
        {work.scene === 'structure' && <div className="structure-scene"><div className="blueprint-label">STRUCTURE / STUDY 01</div><svg viewBox="0 0 440 260"><g fill="none" stroke="#a2b6c3" strokeWidth="1.3"><path d="M75 195 L75 80 L220 30 L365 80 L365 195 L220 245 Z M75 80 L220 135 L365 80 M220 135 L220 245 M75 195 L220 135 L365 195 M75 80 L365 195 M365 80 L75 195 M148 55 L148 221 M292 55 L292 221 M75 137 L220 190 L365 137"/><path className="build-line" d="M75 195 L75 80 L220 30 L365 80 L365 195 L220 245 Z" stroke="#e3e8ed" strokeWidth="2"/></g><g fill="#dce7ec"><circle cx="75" cy="80" r="3"/><circle cx="220" cy="135" r="3"/><circle cx="365" cy="80" r="3"/></g></svg><span className="blueprint-scale">FORM · FUNCTION · DETAIL</span></div>}
        {work.scene === 'engineering' && <div className="engineering-scene"><div className="engineering-label">A challenge. A blank page.<br/><strong>A better way forward.</strong></div><div className="mechanism"><div className="gear gear-one">✳</div><div className="gear gear-two">✳</div><div className="gear-axis"/><span className="measure-line">01 / EXPLORE</span></div><div className="sketch-note">↗ build · test · iterate</div></div>}
        {work.scene === 'design' && <div className="design-scene"><div className="sticky sticky-one"><small>01 / LISTEN</small><b>Start with<br/>the person.</b><span>↗</span></div><div className="sticky sticky-two"><small>02 / EXPLORE</small><div className="idea-doodle">✳</div></div><div className="prototype"><div className="prototype-nav"><i/><span/><b>•••</b></div><div className="prototype-hero"/><div className="prototype-lines"><i/><i/></div><div className="prototype-tiles"><i/><i/><i/></div><div className="prototype-button"/></div><div className="design-caption">Small ideas. Considered details.</div></div>}
        {['workflow','risk','structure','engineering','design'].includes(work.scene) && <span className={`scene-guide guide-${work.scene}`}>↖</span>}
      </div>
      <span className="illustration-label">{work.scene === 'agent' || work.scene === 'schedule' ? 'Public product preview' : 'Illustration'}</span>
    </div>
  );
}
