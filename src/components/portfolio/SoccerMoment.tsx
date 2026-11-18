'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiCamera } from 'react-icons/fi';

export default function SoccerMoment() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return <>
    <button className="soccer-moment-link" type="button" aria-haspopup="dialog" onClick={() => { setOpen(true); dialog.current?.showModal(); }}><span>Former academy level soccer player in Ontario</span><FiCamera aria-hidden="true"/><span className="sr-only">. View celebration photo.</span></button>
    <dialog ref={dialog} className="soccer-dialog" aria-labelledby="soccer-caption" onClose={() => setOpen(false)}>
      <button className="dialog-close" type="button" aria-label="Close celebration photo" onClick={() => dialog.current?.close()}>×</button>
      {open && <figure><Image src="/photos/ottawa-champions-showcase.png" alt="The soccer team celebrating together with a trophy and medals." width={760} height={550} sizes="(max-width: 760px) 90vw, 700px" quality={95}/><figcaption id="soccer-caption">Celebrating after winning the Ottawa Champions Showcase.</figcaption></figure>}
    </dialog>
  </>;
}
