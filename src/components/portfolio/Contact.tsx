'use client';
import { useEffect, useRef, useState } from 'react';
import { CONTACT_EMAIL, CONTACT_TOPICS, contactDraft } from '@/lib/contact';

export default function Contact() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState('');
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function draft(form: HTMLFormElement) {
    const data = new FormData(form);
    return contactDraft(String(data.get('topic') ?? ''), String(data.get('name') ?? ''), String(data.get('message') ?? ''));
  }
  return <><button ref={trigger} className="chat-link" type="button" aria-haspopup="dialog" onClick={() => { setCopied(''); setOpen(true); dialog.current?.showModal(); }}>Let’s chat <span aria-hidden="true">↗</span></button>
    <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-title" aria-describedby="contact-note" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={event => { if (event.target !== event.currentTarget) return; const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close(); }}>
      <button className="dialog-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close contact form">×</button><h2 id="contact-title">Let’s chat.</h2><p>Opportunities, business ideas, or a game of soccer.</p>
      <form onSubmit={event => { event.preventDefault(); window.location.href = draft(event.currentTarget).href; }} onChange={() => setCopied('')}>
        <label htmlFor="contact-topic">What’s on your mind?</label><select id="contact-topic" name="topic">{CONTACT_TOPICS.map(topic => <option key={topic}>{topic}</option>)}</select>
        <label htmlFor="contact-name">Your name <span>(optional)</span></label><input id="contact-name" name="name" maxLength={80} autoComplete="name"/>
        <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={4} maxLength={1500} required placeholder="A little context goes a long way."/>
        <p id="contact-note" className="contact-note">Opens your email app. You can review the draft before sending.</p><div className="contact-actions"><button type="submit">Open email app</button><button type="button" onClick={async event => { const form = event.currentTarget.form; if (!form || !form.reportValidity()) return; const result = draft(form); try { await navigator.clipboard.writeText(`To: ${CONTACT_EMAIL}\nSubject: ${result.subject}\n\n${result.body}`); setCopied('Draft copied.'); } catch { setCopied('Copy unavailable. Use Open email app.'); } }}>Copy message</button></div><p className="contact-status" role="status">{copied}</p>
      </form>
    </dialog></>;
}
