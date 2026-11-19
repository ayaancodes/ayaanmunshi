'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import type { Work } from '@/content/portfolio';
import WorkPreview from './WorkPreview';
import BrandLink from './BrandLink';
import PublicProductVideo from './PublicProductVideo';
import CaseVideo from './CaseVideo';

export default function WorkCard({ work }: { work: Work }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const brand = work.id.startsWith('rbc') || work.id === 'design-thinking' ? 'rbc' : work.id;
  const photoPreview = Boolean(work.photos?.length && work.photoPlacement !== 'panel');
  const gallery = photoPreview ? work.photos?.slice(1) : work.photos;
  const placeAndTerm = [work.location, work.year].filter(Boolean).join(' · ');
  const mediaLead = Boolean(work.video || work.publicVideo);
  const showDetails = () => { setOpen(true); dialog.current?.showModal(); };
  return <article className="work-card">
    {work.video ? <CaseVideo key={open ? 'dialog-open' : 'card'} {...work.video} title="RBC Amplify presentation excerpt"/> : work.publicVideo ? <PublicProductVideo key={open ? 'dialog-open' : 'card'} cover/> : <button type="button" className="work-open" onClick={showDetails} aria-label={`View ${work.company}${work.role ? `: ${work.role}` : ''} details`} aria-haspopup="dialog"><WorkPreview work={work}/><span className="preview-open-icon" aria-hidden="true">+</span></button>}
    <div className="work-caption"><div className="work-meta"><h3 className="work-company">{work.url ? <BrandLink name={work.company} href={work.url} logo={work.logo} mark={work.mark} brand={brand}/> : <><span className={`company-mark mark-${work.id}`} aria-hidden="true">{work.logo ? <Image src={work.logo} alt="" width={28} height={28} sizes="28px"/> : work.mark}</span><span>{work.company}</span></>}</h3>{placeAndTerm && <span className="work-year">{placeAndTerm}</span>}</div>{work.role && <p className="work-role">{work.role}</p>}{work.description && <p className="work-description">{work.description}</p>}</div>
    {mediaLead && <button className="experience-details-button" type="button" onClick={showDetails} aria-haspopup="dialog">View experience <span aria-hidden="true">+</span></button>}
    <dialog className="work-dialog" ref={dialog} aria-labelledby={`${work.id}-title`} onClose={() => setOpen(false)} onClick={event => { if (event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close(); }}>
      <div className="work-dialog-header"><div><p>{work.category ?? 'Engineering'}</p><h2 id={`${work.id}-title`}>{work.company}</h2>{work.role && <span className="dialog-role">{work.role}</span>}{placeAndTerm && <span className="dialog-place-term">{placeAndTerm}</span>}</div><button className="dialog-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close project details">×</button></div>
      {open && (work.video ? <CaseVideo {...work.video} title="RBC Amplify presentation excerpt"/> : work.publicVideo ? <PublicProductVideo cover/> : <WorkPreview work={work}/>)}
      {photoPreview && work.photos?.[0].caption && <p className="experience-photo-caption">{work.photos[0].caption}</p>}
      {work.intro && <p className="work-dialog-description">{work.intro}</p>}
      {work.patent && <p className="patent-credit">{work.patent}</p>}
      {work.skills && <div className="skill-cards">{work.skills.map(skill=><div key={skill.title}><h3>{skill.title}</h3><p>{skill.detail}</p></div>)}</div>}
      {work.description && <p className="work-dialog-description">{work.description}</p>}
      {!photoPreview && !mediaLead && <p className="illustration-disclosure">{work.scene === 'agent' || work.scene === 'schedule' ? <>Public product preview from <a href={work.scene === 'agent' ? 'https://aker-ai.com/' : 'https://www.rippling.com/en-CA/products/hr/scheduling'} target="_blank" rel="noopener noreferrer">{work.company}</a>.</> : <>Illustrative view.</>}</p>}
      {open && gallery && gallery.length > 0 && <div className="experience-gallery">{gallery.map(photo => <figure key={photo.src} className={photo.height > photo.width ? 'portrait-photo' : undefined}><div className="experience-photo-frame"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 580px) 85vw, 650px" quality={95} style={photo.cropRight ? { width: `${100 / (1 - photo.cropRight - (photo.cropLeft ?? 0))}%`, marginLeft: `${-100 * (photo.cropLeft ?? 0) / (1 - photo.cropRight - (photo.cropLeft ?? 0))}%`, maxWidth: 'none' } : undefined}/></div>{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>)}</div>}
      {work.url && <a className="panel-company-link" href={work.url} target="_blank" rel="noopener noreferrer">Visit {work.company} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
    </dialog>
  </article>;
}
