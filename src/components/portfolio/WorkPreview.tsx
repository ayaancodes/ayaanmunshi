import Image from 'next/image';
import ProductWalkthrough from './ProductWalkthrough';
import TransactionPreview from './TransactionPreview';
import RiskPreview from './RiskPreview';
import YardPreview from './YardPreview';
import type { Work } from '@/content/portfolio';

export default function WorkPreview({ work }: { work: Work }) {
  const photo = work.photoPlacement !== 'panel' ? work.photos?.[0] : undefined;
  if (photo) return <div className="work-preview preview-photo" role="img" aria-label={photo.alt}><Image src={photo.src} alt="" fill sizes="(max-width: 580px) 90vw, 650px" quality={95} style={{ objectPosition: photo.position ?? '50% 50%' }}/></div>;
  return (
    <div className={`work-preview preview-${work.scene}`} role="img" aria-label={`${work.scene === 'agent' || work.scene === 'schedule' ? `${work.company} public product preview.` : work.scene === 'market' ? 'Wealthsimple public platform reference.' : 'Illustration, not shipped product UI.'} ${work.illustration}`}>
      <div className="scene" aria-hidden="true">
        {work.scene === 'agent' && <ProductWalkthrough company="aker"/>}
        {work.scene === 'schedule' && <ProductWalkthrough company="rippling"/>}
        {work.scene === 'market' && <ProductWalkthrough company="wealthsimple"/>}
        {work.scene === 'data' && <TransactionPreview/>}
        {work.scene === 'workflow' && <div className="workflow-scene"><div className="workflow-title"><span>✦</span> Agentic payments.</div><div className="flow-wire"/>{[['01','Interpret','Payment instructions'],['02','Validate','Schema and rules'],['03','Route','Agent orchestration']].map(([num,title,desc],i) => <div className={`flow-card flow-${i}`} key={num}><small>{num}<span>✓</span></small><b>{title}</b><p>{desc}</p></div>)}<div className="workflow-bottom"><i/> Concept workflow</div></div>}
        {work.scene === 'risk' && <RiskPreview/>}
        {work.scene === 'structure' && <YardPreview/>}
        {work.scene === 'engineering' && <div className="engineering-scene"><div className="engineering-label">A challenge. A blank page.<br/><strong>A better way forward.</strong></div><div className="mechanism"><div className="gear gear-one">✳</div><div className="gear gear-two">✳</div><div className="gear-axis"/><span className="measure-line">01 / EXPLORE</span></div><div className="sketch-note">↗ build · test · iterate</div></div>}
        {work.scene === 'design' && <div className="design-scene"><div className="sticky sticky-one"><small>01 / LISTEN</small><b>Start with<br/>the person.</b><span>↗</span></div><div className="sticky sticky-two"><small>02 / EXPLORE</small><div className="idea-doodle">✳</div></div><div className="prototype"><div className="prototype-nav"><i/><span/><b>•••</b></div><div className="prototype-hero"/><div className="prototype-lines"><i/><i/></div><div className="prototype-tiles"><i/><i/><i/></div><div className="prototype-button"/></div><div className="design-caption">Small ideas. Considered details.</div></div>}
        {['workflow','engineering','design'].includes(work.scene) && <span className={`scene-guide guide-${work.scene}`}>↖</span>}
      </div>
      <span className="illustration-label">{work.scene === 'agent' || work.scene === 'schedule' ? 'Public product preview' : work.scene === 'market' ? 'Public platform reference' : 'Illustration'}</span>
    </div>
  );
}
