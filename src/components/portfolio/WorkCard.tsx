'use client';
import { useRef, useState, useEffect } from 'react';
import type { Work } from '@/content/portfolio';
import WorkPreview from './WorkPreview';
import BrandLink from './BrandLink';
import PublicProductVideo from './PublicProductVideo';

export default function WorkCard({ work }: { work: Work }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const brand = work.id.startsWith('rbc') ? 'rbc' : work.id;
  return <article className="work-card">
    <button type="button" className="work-open" onClick={() => { setOpen(true); dialog.current?.showModal(); }} aria-label={`View ${work.company}${work.role ? `: ${work.role}` : ''} details`} aria-haspopup="dialog"><WorkPreview work={work}/><span className="preview-open-icon" aria-hidden="true">+</span></button>
    <div className="work-caption"><div className="work-meta"><h3 className="work-company">{work.url ? <BrandLink name={work.company} href={work.url} logo={work.logo} mark={work.mark} brand={brand}/> : <><span className={`company-mark mark-${work.id}`} aria-hidden="true">{work.mark}</span><span>{work.company}</span></>}</h3>{work.year && <span className="work-year">{work.year}</span>}</div>{work.role && <p className="work-role">{work.role}{work.location && <span className="work-location">{work.location}</span>}</p>}{work.description && <p className="work-description">{work.description}</p>}</div>
    <dialog className="work-dialog" ref={dialog} aria-labelledby={`${work.id}-title`} onClose={() => setOpen(false)} onClick={event => { if (event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close(); }}>
      <div className="work-dialog-header"><div><p>Engineering</p><h2 id={`${work.id}-title`}>{work.company}</h2>{work.role && <span>{work.role}{work.year ? ` · ${work.year}` : ''}{work.location ? ` · ${work.location}` : ''}</span>}</div><button className="dialog-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close project details">×</button></div>
      {open && <WorkPreview work={work}/>}
      {work.intro && <p className="work-dialog-description">{work.intro}</p>}
      {work.skills && <div className="skill-cards">{work.skills.map(skill=><div key={skill.title}><h3>{skill.title}</h3><p>{skill.detail}</p></div>)}</div>}
      {work.description && <p className="work-dialog-description">{work.description}</p>}
      <p className="illustration-disclosure">{work.scene === 'agent' || work.scene === 'schedule' ? <>Public product preview from <a href={work.scene === 'agent' ? 'https://aker-ai.com/' : 'https://www.rippling.com/en-CA/products/hr/scheduling'} target="_blank" rel="noopener noreferrer">{work.company}</a>.</> : <>Illustrative view.</>}</p>
      {open && work.id === 'rbc-technology' && <PublicProductVideo/>}
      {work.url && <a className="panel-company-link" href={work.url} target="_blank" rel="noopener noreferrer">Visit {work.company} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
    </dialog>
  </article>;
}
