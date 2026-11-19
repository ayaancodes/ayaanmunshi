'use client';
import { useId, useState, type ReactNode } from 'react';

/** Closed content is unmounted, including third-party widgets and article images. */
export default function Disclosure({ title, subtitle, children, className = '' }: { title: string; subtitle?: string; children: ReactNode; className?: string }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return <section className={`portfolio-disclosure ${className}`}>
    <h2><button type="button" aria-expanded={expanded} aria-controls={`${id}-content`} onClick={() => setExpanded(value => !value)}><span>{title}{subtitle && <small>{subtitle}</small>}</span><span className="disclosure-symbol" aria-hidden="true">{expanded ? '−' : '+'}</span></button></h2>
    <div id={`${id}-content`} hidden={!expanded}>{expanded && children}</div>
  </section>;
}
