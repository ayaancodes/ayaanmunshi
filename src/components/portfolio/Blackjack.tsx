'use client';
import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { beginDealer, dealerStep, hitStep, score, beginHand, createSession, recordHand, settleHand, suspendHand, resetBankroll, handReturn, HAND_STAKE, type Card, type Round, type GameSession } from '@/lib/blackjack';
import useMotion from './useMotion';

const suitNames = { '♠': 'spades', '♥': 'hearts', '♦': 'diamonds', '♣': 'clubs' };
const rankNames: Record<string, string> = { A: 'Ace', J: 'Jack', Q: 'Queen', K: 'King' };
type Frame = { round: Round; handId: number; playerCount: number; dealerCount: number; reveal: boolean; settled: boolean };
const fullFrame = (round: Round, handId: number, settled = true): Frame => ({ round, handId, playerCount: round.player.length, dealerCount: round.dealer.length, reveal: round.phase !== 'playing', settled });
const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;
function PlayingCard({ card, hidden = false, newest = false }: { card?: Card; hidden?: boolean; newest?: boolean }) {
  return <span className={`playing-card ${hidden ? 'card-back' : ''} ${newest ? 'new-card' : ''} ${card && ['♥', '♦'].includes(card.suit) ? 'red-suit' : ''}`} role="img" aria-label={hidden ? 'Face-down card' : card ? `${rankNames[card.rank] ?? card.rank} of ${suitNames[card.suit]}` : 'Card'}>
    {hidden ? <span aria-hidden="true">✦</span> : <><b>{card?.rank}</b><span>{card?.suit}</span></>}
  </span>;
}
export default function Blackjack() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const queue = useRef<Frame[]>([]);
  const locked = useRef(false);
  const [open, setOpen] = useState(false);
  const [frame, setFrame] = useState<Frame | null>(null);
  const [busy, setBusy] = useState(false);
  const [help, setHelp] = useState(false);
  const [session, setSession] = useState(createSession);
  const game = useRef(session);
  const animationRun = useRef(0);
  const stats = session.stats;
  const save = useCallback((next: GameSession) => { game.current = next; setSession(next); }, []);
  const animate = useMotion();
  const settle = useCallback((last: Frame) => {
    if (last.handId !== game.current.handId) return;
    locked.current = false; setBusy(false); setFrame(last);
    save(settleHand(recordHand(game.current, last.round, last.handId), last.handId));
  }, [save]);
  function cancel() {
    animationRun.current++;
    if (timer.current) clearTimeout(timer.current);
    timer.current = null; queue.current = []; locked.current = false;
  }
  function playFrames(frames: Frame[]) {
    cancel(); locked.current = true; setBusy(true);
    if (!animate) { settle(frames[frames.length - 1]); return; }
    queue.current = [...frames];
    const run = animationRun.current;
    const step = () => {
      if (run !== animationRun.current) return;
      const next = queue.current.shift();
      if (!next) return;
      if (!queue.current.length) { timer.current = null; settle(next); return; }
      setFrame(next); timer.current = setTimeout(step, 440);
    };
    step();
  }
  useEffect(() => {
    if (!animate && queue.current.length) {
      if (timer.current) clearTimeout(timer.current);
      animationRun.current++;
      const final = queue.current[queue.current.length - 1];
      queue.current = []; timer.current = null;
      settle(final);
    }
  }, [animate, settle]);
  useEffect(() => () => { animationRun.current++; if (timer.current) clearTimeout(timer.current); queue.current = []; }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function newRound() {
    if (locked.current) return;
    const next = beginHand(game.current);
    if (next === game.current || !next.round) return;
    save(next);
    const round = next.round;
    const frames = [[0,0],[1,0],[1,1],[2,1],[2,2]].map(([playerCount,dealerCount]): Frame => ({ round, handId: next.handId, playerCount, dealerCount, reveal: false, settled: false }));
    playFrames([...frames, fullFrame(round, next.handId)]);
  }
  function move(action: 'hit' | 'stand') {
    if (locked.current || !frame || frame.round.phase !== 'playing') return;
    let next = action === 'hit' ? hitStep(frame.round) : beginDealer(frame.round);
    const frames: Frame[] = [];
    if (action === 'hit') frames.push({ ...fullFrame(next, frame.handId, false), reveal: false });
    if (next.phase === 'dealer') {
      frames.push(fullFrame(next, frame.handId, false));
      while (next.phase === 'dealer') { next = dealerStep(next); frames.push(fullFrame(next, frame.handId, false)); }
    }
    save(recordHand(game.current, next, frame.handId));
    frames.push(fullFrame(next, frame.handId)); playFrames(frames);
  }
  function close() {
    cancel();
    const paused = suspendHand(game.current);
    save(paused);
    if (paused.round) setFrame(fullFrame(paused.round, paused.handId));
    setBusy(false); setOpen(false); setHelp(false); trigger.current?.focus();
  }
  function openGame() {
    setOpen(true); dialog.current?.showModal();
    if (game.current.round) setFrame(fullFrame(game.current.round, game.current.handId));
    else newRound();
  }
  function replenish() {
    if (locked.current) return;
    const fresh = resetBankroll(game.current);
    if (fresh === game.current) return;
    save(fresh); newRound();
  }
  const round = frame?.round;
  const finished = frame?.settled && round?.phase === 'finished';
  const exhausted = finished && session.balance < HAND_STAKE;
  const playerCards = round?.player.slice(0, frame?.playerCount ?? 0) ?? [];
  const dealerCards = round?.dealer.slice(0, frame?.dealerCount ?? 0) ?? [];
  const dealerVisible = frame?.reveal ? dealerCards : dealerCards.slice(0, 1);
  const quip = finished ? round?.outcome === 'win' ? ['You came for the portfolio. Stayed to humble me.', 'Okay, card shark.'][Math.max(0, stats.win - 1) % 2] : round?.outcome === 'loss' ? ['Good work. Run it back?', 'Great hand.', 'Cheers. Another round?'][Math.max(0, stats.loss - 1) % 3] : 'Great minds. Same total.' : busy ? 'One card at a time.' : 'The next move is yours.';
  return <>
    <button type="button" className="blackjack-launch" ref={trigger} onClick={openGame} aria-haspopup="dialog"><span className="launch-cards" aria-hidden="true"><i>♥</i><i>♠</i></span><span><strong>Want to play?</strong><small>Stay for a hand of blackjack?</small></span><span className="launch-arrow" aria-hidden="true">↗</span></button>
    <dialog className="blackjack-dialog" ref={dialog} onClose={close} aria-labelledby="blackjack-title" aria-describedby="blackjack-note">
      <div className="blackjack-header"><div><span className="game-eyebrow">A LITTLE BREAK</span><h2 id="blackjack-title">Glad you found me.</h2><p id="blackjack-note">Take it easy, it’s just for fun. No stakes :)</p></div><button type="button" className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close blackjack">×</button></div>
      <div className="game-toolbar"><span>BLACKJACK <span aria-hidden="true">♠</span> 21</span><button type="button" className="game-info" aria-label="How to play blackjack" aria-expanded={help} aria-controls="blackjack-rules" onClick={() => setHelp(!help)}>?</button></div>
      <div className="game-wallet"><span><small>PLAY MONEY</small><b>{money(session.balance)}</b></span><span>$1 per hand<small>Blackjack pays 3:2</small></span></div>
      {help && <div className="blackjack-rules" id="blackjack-rules"><strong>A quick guide</strong><p>Get closer to 21 than the dealer without going over. Hit draws a card; Stand keeps your hand. Face cards count as 10, and aces as 1 or 11. Dealer stands on all 17s.</p><p>You start with $20 in play money. Each hand costs $1. A win returns $2; a two-card blackjack returns $2.50 ($1.50 profit). A push returns your $1. Both naturals push; a dealer natural beats a non-natural hand. No real money.</p><p>Closing saves your hand and balance. Use Tab to move between controls, Enter to choose, and Escape to leave.</p></div>}
      {frame && round && <><div className="card-table"><div className="hand"><div className="hand-label"><span className="dealer-label"><span className={`dealer-avatar ${finished ? round.outcome === 'loss' ? 'dealer-laugh' : round.outcome === 'win' ? 'dealer-smh' : '' : ''}`} key={`avatar-${session.handId}-${finished}`} aria-hidden="true"><Image src="/photos/ayaan-dealer.png" alt="" width={76} height={76} sizes="44px" quality={95}/>{finished && round.outcome === 'loss' && <i className="dealer-chuckle">ha</i>}</span><span>Ayaan<small>Your dealer</small></span></span><b key={`d${score(dealerVisible)}`} className="hand-total">{dealerCards.length ? score(dealerVisible) : '·'}{!frame.reveal && dealerCards.length > 1 && <small> + ?</small>}</b></div><div className="playing-cards">{dealerCards.map((card,i) => <PlayingCard key={i} card={!frame.reveal && i === 1 ? undefined : card} hidden={!frame.reveal && i === 1} newest={i === dealerCards.length - 1}/>)}</div></div><div className="table-divider" aria-hidden="true">♠ &nbsp; ♥ &nbsp; ♣ &nbsp; ♦</div><div className="hand"><div className="hand-label"><span>You</span><b key={`p${score(playerCards)}`} className="hand-total">{playerCards.length ? score(playerCards) : '·'}</b></div><div className="playing-cards">{playerCards.map((card,i) => <PlayingCard key={i} card={card} newest={i === playerCards.length - 1}/>)}</div></div></div><div className="round-message" role="status" aria-live="polite"><p className="round-quip">{quip}</p><p className="round-result">{busy ? 'Dealing…' : round.result}<span className="sr-only"> Your visible total is {score(playerCards)}. Dealer shows {score(dealerVisible)}.</span></p>{finished && <p className="round-payoff">{round.outcome === 'push' ? '$1 stake returned.' : `${round.outcome === 'win' ? '+' : '−'}${money(Math.abs(handReturn(round) - HAND_STAKE))} play money`}</p>}</div><div className="game-actions"><button type="button" disabled={busy || round.phase !== 'playing'} onClick={() => move('hit')}>Hit <span aria-hidden="true">+</span></button><button type="button" disabled={busy || round.phase !== 'playing'} onClick={() => move('stand')}>Stand</button><button type="button" disabled={busy || !finished || exhausted} onClick={newRound}>Play again <span aria-hidden="true">↗</span></button></div>{exhausted && <div className="game-replenish"><p>Want to keep playing?</p><button type="button" onClick={replenish}>Play with a fresh $20</button></div>}<div className="game-stats" aria-label="This visit’s game results"><span><b>{stats.win}</b> Wins</span><span><b>{stats.loss}</b> Losses</span><span><b>{stats.push}</b> Pushes</span></div></>}
    </dialog>
  </>;
}
