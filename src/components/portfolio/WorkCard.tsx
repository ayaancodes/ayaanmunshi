'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import type { Work } from '@/content/portfolio';
import WorkPreview from './WorkPreview';

export default function WorkCard({ work }: { work: Work }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return <article className="work-card">
    <button type="button" className="work-open" onClick={() => { setOpen(true); dialog.current?.showModal(); }} aria-label={`View ${work.company}${work.role ? ` — ${work.role}` : ''}`} aria-haspopup="dialog"><WorkPreview work={work}/><span className="preview-open-icon" aria-hidden="true">↗</span></button>
    <div className="work-caption"><div className="work-meta"><div className="work-company">{work.logo ? <Image src={work.logo} alt="" width={20} height={20} className="company-logo"/> : <span className={`company-mark mark-${work.id}`} aria-hidden="true">{work.mark}</span>}<h3>{work.company}</h3>{work.role && <span className="work-role">— {work.role}</span>}</div>{work.year && <span className="work-year">{work.year}</span>}</div>{work.description && <p className="work-description">{work.description}</p>}</div>
    <dialog className="work-dialog" ref={dialog} aria-labelledby={`${work.id}-title`} onClose={() => setOpen(false)} onClick={event => { if (event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close(); }}>
      <div className="work-dialog-header"><div><p>Engineering</p><h2 id={`${work.id}-title`}>{work.company}</h2>{work.role && <span>{work.role}{work.year ? ` · ${work.year}` : ''}</span>}</div><button className="dialog-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close project details">×</button></div>
      {open && <WorkPreview work={work}/>}
      {work.description && <p className="work-dialog-description">{work.description}</p>}
      <p className="illustration-disclosure">Illustrative preview — a conceptual visualization, not a shipped product screenshot.</p>
    </dialog>
  </article>;
}
