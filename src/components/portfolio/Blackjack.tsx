'use client';
import { useRef, useState, useEffect } from 'react';
import { deal, hit, score, stand, type Card, type Round } from '@/lib/blackjack';

const suitNames = { '♠': 'spades', '♥': 'hearts', '♦': 'diamonds', '♣': 'clubs' };
const rankNames: Record<string, string> = { A: 'Ace', J: 'Jack', Q: 'Queen', K: 'King' };

function PlayingCard({ card, hidden = false }: { card?: Card; hidden?: boolean }) {
  return <span className={`playing-card ${hidden ? 'card-back' : ''} ${card && ['♥', '♦'].includes(card.suit) ? 'red-suit' : ''}`} role="img" aria-label={hidden ? 'Face-down card' : card ? `${rankNames[card.rank] ?? card.rank} of ${suitNames[card.suit]}` : 'Card'}>
    {hidden ? <span aria-hidden="true">✦</span> : <><b>{card?.rank}</b><span>{card?.suit}</span></>}
  </span>;
}
export default function Blackjack() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [openState, setOpenState] = useState(false);
  useEffect(() => {
    if (!openState) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [openState]);
  const [round, setRound] = useState<Round | null>(null);
  const finished = round?.phase === 'finished';
  function open() { setOpenState(true); setRound(deal()); dialog.current?.showModal(); }
  return <>
    <button type="button" className="blackjack-launch" onClick={open}><span aria-hidden="true">♠</span> A quick hand?</button>
    <dialog className="blackjack-dialog" ref={dialog} onClose={() => setOpenState(false)} aria-labelledby="blackjack-title" aria-describedby="blackjack-rules">
      <div className="blackjack-header"><div><h2 id="blackjack-title">A quick hand of blackjack.</h2><p>Just for fun. No money, no stakes.</p></div><button type="button" className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close blackjack">×</button></div>
      <p className="blackjack-rules" id="blackjack-rules">Get closer to 21 than the dealer without going over. Aces count as 1 or 11. Dealer stands on all 17s.</p>
      {round && <><div className="card-table"><div className="hand"><div className="hand-label"><span>Dealer</span><b>{finished ? score(round.dealer) : '?'}</b></div><div className="playing-cards">{round.dealer.map((card,i) => <PlayingCard key={i} card={!finished && i === 1 ? undefined : card} hidden={!finished && i === 1}/>)}</div></div><div className="table-divider">♠ &nbsp; ♥ &nbsp; ♣ &nbsp; ♦</div><div className="hand"><div className="hand-label"><span>You</span><b>{score(round.player)}</b></div><div className="playing-cards">{round.player.map((card,i) => <PlayingCard key={i} card={card}/>)}</div></div></div><p className="round-result" role="status" aria-live="polite">{round.result}<span className="sr-only"> Your total is {score(round.player)}. {finished ? `Dealer total is ${score(round.dealer)}.` : `Dealer shows ${score([round.dealer[0]])}.`}</span></p><div className="game-actions"><button type="button" disabled={finished} onClick={() => setRound(current => current && hit(current))}>Hit</button><button type="button" disabled={finished} onClick={() => setRound(current => current && stand(current))}>Stand</button><button type="button" onClick={() => setRound(deal())}>{finished ? 'Play again' : 'New round'} <span aria-hidden="true">↗</span></button></div></>}
    </dialog>
  </>;
}
