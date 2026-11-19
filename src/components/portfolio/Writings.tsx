'use client';
import { useState } from 'react';
import { THOUGHTS } from '@/content/thoughts';
import CompetingEssay from '@/content/writings/CompetingEssay';
import OptionsTerminology from '@/content/writings/OptionsTerminology';
import OptionsStrategies from '@/content/writings/OptionsStrategies';
import Disclosure from './Disclosure';

const articles: Record<string, React.ComponentType> = { 'competing-against-smart-people': CompetingEssay, 'options-notes-01': OptionsTerminology, 'options-notes-02': OptionsStrategies };

export default function Writings() {
  const [active, setActive] = useState<string | null>(null);
  return <Disclosure title="Writings" subtitle="Notes on markets, code, and life." className="writings-section"><div className="writing-list">{[...THOUGHTS].sort((a,b)=>b.id-a.id).map(thought => {
    const Article = articles[thought.slug];
    const expanded = active === thought.slug;
    return <article className="writing-entry" key={thought.slug}><h3><button type="button" id={`writing-${thought.slug}`} aria-expanded={expanded} aria-controls={`article-${thought.slug}`} onClick={() => setActive(expanded ? null : thought.slug)}><span>{thought.title}<small>{thought.date}</small></span><span aria-hidden="true">{expanded ? '−' : '+'}</span></button></h3><div id={`article-${thought.slug}`} hidden={!expanded}>{expanded && <div className="writing-reader" role="region" aria-labelledby={`writing-${thought.slug}`} tabIndex={0}><Article/></div>}</div></article>;
  })}</div></Disclosure>;
}
