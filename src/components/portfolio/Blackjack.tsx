'use client';
import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';
import { score, visibleTableSummary, beginHand, createSession, settleHand, suspendHand, resetBankroll, handReturn, totalBet, payout, allowedActions, playAction, BETS, HAND_STAKE, type Action, type Card, type Round, type GameSession } from '@/lib/blackjack';
import useMotion from './useMotion';

const suitNames = { '♠': 'spades', '♥': 'hearts', '♦': 'diamonds', '♣': 'clubs' };
const rankNames: Record<string, string> = { A: 'Ace', J: 'Jack', Q: 'Queen', K: 'King' };
type Frame = { round: Round; handId: number; revision: number; playerCounts: number[]; dealerCount: number; reveal: boolean; settled: boolean };
const fullFrame = (round: Round, session: GameSession, settled = true): Frame => ({ round, handId: session.handId, revision: session.revision, playerCounts: round.hands.map(hand => hand.cards.length), dealerCount: round.dealer.length, reveal: round.phase !== 'playing', settled });
const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;
const netMoney = (cents: number) => `${cents > 0 ? '+' : cents < 0 ? '−' : ''}${money(Math.abs(cents))}`;
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
  const [bet, setBet] = useState<number>(HAND_STAKE);
  const [session, setSession] = useState(createSession);
  const game = useRef(session);
  const animationRun = useRef(0);
  const stats = session.stats;
  const save = useCallback((next: GameSession) => { game.current = next; setSession(next); }, []);
  const animate = useMotion();
  const settle = useCallback((last: Frame) => {
    if (last.handId !== game.current.handId || last.revision !== game.current.revision) return;
    locked.current = false; setBusy(false); setFrame(last);
    save(settleHand(game.current, last.handId, last.revision));
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
      queue.current = []; timer.current = null; settle(final);
    }
  }, [animate, settle]);
  useEffect(() => () => { animationRun.current++; if (timer.current) clearTimeout(timer.current); queue.current = []; }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function newRound(wager = bet) {
    if (locked.current) return;
    const next = beginHand(game.current, undefined, wager);
    if (next === game.current || !next.round) return;
    save(next);
    const round = next.round;
    const frames = [[0,0],[1,0],[1,1],[2,1],[2,2]].map(([playerCount,dealerCount]): Frame => ({ ...fullFrame(round, next, false), playerCounts: [playerCount], dealerCount, reveal: false }));
    playFrames([...frames, fullFrame(round, next)]);
  }
  function move(action: Action) {
    if (locked.current || !frame) return;
    const previous = frame.round;
    const plan = playAction(game.current, action, frame.handId, frame.revision);
    if (!plan.steps.length || !plan.session.round) return;
    save(plan.session);
    const first = plan.steps[0];
    // Reveal newly dealt player cards individually, including a waiting split hand's second card.
    const counts = first.hands.map((hand, i) => Math.min(hand.cards.length, action === 'split' ? i === previous.active || i === previous.active + 1 ? 1 : previous.hands[i > previous.active ? i - 1 : i]?.cards.length ?? 1 : previous.hands[i]?.cards.length ?? 1));
    const frames: Frame[] = [];
    if (action === 'split') frames.push({ ...fullFrame(first, plan.session, false), playerCounts: [...counts], reveal: false });
    first.hands.forEach((hand, index) => {
      while (counts[index] < hand.cards.length) {
        counts[index]++;
        frames.push({ ...fullFrame(first, plan.session, false), playerCounts: [...counts], reveal: false });
      }
    });
    frames.push(...plan.steps.map(round => fullFrame(round, plan.session, false)), fullFrame(plan.session.round, plan.session));
    playFrames(frames);
  }
  function close() {
    cancel();
    const paused = suspendHand(game.current);
    save(paused);
    if (paused.round) setFrame(fullFrame(paused.round, paused));
    setBusy(false); setOpen(false); setHelp(false); trigger.current?.focus();
  }
  function openGame() {
    setOpen(true); dialog.current?.showModal();
    if (game.current.round) setFrame(fullFrame(game.current.round, game.current));
    else newRound();
  }
  function replenish() {
    if (locked.current) return;
    const fresh = resetBankroll(game.current);
    if (fresh === game.current) return;
    save(fresh); setBet(HAND_STAKE); newRound(HAND_STAKE);
  }
  const round = frame?.round;
  const finished = Boolean(frame?.settled && round?.phase === 'finished');
  const exhausted = finished && session.balance < HAND_STAKE;
  const actions = allowedActions(session);
  const dealerCards = round?.dealer.slice(0, frame?.dealerCount ?? 0) ?? [];
  const dealerVisible = frame?.reveal ? dealerCards : dealerCards.slice(0, 1);
  const net = round ? handReturn(round) - totalBet(round) : 0;
  const quip = finished ? round?.outcome === 'win' ? ['You came for the portfolio. Stayed to humble me.', 'Okay, card shark.'][Math.max(0, stats.win - 1) % 2] : round?.outcome === 'loss' ? ['Good work. Run it back?', 'Great hand.', 'Cheers. Another round?'][Math.max(0, stats.loss - 1) % 3] : 'Back where we started.' : busy ? 'One card at a time.' : 'The next move is yours.';
  return <>
    <button type="button" className="blackjack-launch" ref={trigger} onClick={openGame} aria-haspopup="dialog"><span className="launch-cards" aria-hidden="true"><i>♥</i><i>♠</i></span><span><strong>Want to play?</strong><small>Stay for a hand of blackjack?</small></span><span className="launch-arrow" aria-hidden="true">↗</span></button>
    <dialog className="blackjack-dialog" ref={dialog} onClose={close} aria-labelledby="blackjack-title" aria-describedby="blackjack-note">
      <div className="blackjack-header"><div><span className="game-eyebrow">A LITTLE BREAK</span><h2 id="blackjack-title">Glad you found me.</h2><p id="blackjack-note">Take it easy, it’s just for fun. No stakes :)</p></div><button type="button" className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close blackjack">×</button></div>
      <div className="game-toolbar"><span>BLACKJACK <span aria-hidden="true">♠</span> 21</span><button type="button" className="game-info" aria-label="How to play blackjack" aria-expanded={help} aria-controls="blackjack-rules" onClick={() => setHelp(!help)}>?</button></div>
      <div className="game-wallet"><span><small>PLAY MONEY</small><b>{money(session.balance)}</b></span><span>{round ? `${money(totalBet(round))} on the table` : 'Choose your bet'}<small>Blackjack pays 3:2</small></span></div>
      {help && <div className="blackjack-rules" id="blackjack-rules"><strong>This table’s house rules</strong><p>Get closer to 21 than the dealer without busting. Face cards are 10; aces are 1 or 11. Six decks, freshly shuffled each round. Dealer stands on all 17s, including soft 17, and checks for blackjack before you can double or split.</p><p>Start with $20 in play money; choose $1, $2 or $5 between rounds. A natural blackjack pays 3:2 profit plus your stake back: a $2 bet returns $5 ($3 profit). Other wins pay 1:1 profit plus stake; pushes return the stake. A natural beats any other 21. No real money.</p><p>Double on your first two cards, including 11: match that hand’s bet, take exactly one card, then stand. Double after splitting is allowed. Split matching ranks with an equal extra bet, up to four hands, played left to right. Split aces get one card each and cannot be resplit or doubled. Split 21 is an ordinary 21, not a natural. Extra bets must fit your balance.</p><p>No insurance or surrender at this table. Closing preserves your hand and balance. Tab moves between controls; Escape closes.</p></div>}
      {frame && round && <>
        <div className="card-table">
          <div className="hand"><div className="hand-label"><span className="dealer-label"><span className={`dealer-avatar ${finished ? round.outcome === 'loss' ? 'dealer-laugh' : round.outcome === 'win' ? 'dealer-smh' : '' : ''}`} key={`avatar-${session.handId}-${finished}`} aria-hidden="true"><Image src="/photos/ayaan-dealer.png" alt="" width={76} height={76} sizes="44px" quality={95}/>{finished && round.outcome === 'loss' && <i className="dealer-chuckle">ha</i>}</span><span>Ayaan<small>Your dealer</small></span></span><b className="hand-total">{dealerCards.length ? score(dealerVisible) : '·'}{!frame.reveal && dealerCards.length > 1 && <small> + ?</small>}</b></div><div className="playing-cards">{dealerCards.map((card,i) => <PlayingCard key={i} card={!frame.reveal && i === 1 ? undefined : card} hidden={!frame.reveal && i === 1} newest={i === dealerCards.length - 1}/>)}</div></div>
          <div className="table-divider" aria-hidden="true">♠ &nbsp; ♥ &nbsp; ♣ &nbsp; ♦</div>
          <div className={`player-hands ${round.hands.length > 1 ? 'split-hands' : ''}`}>{round.hands.map((hand, index) => {
            const cards = hand.cards.slice(0, frame.playerCounts[index] ?? 0);
            const active = !finished && round.phase === 'playing' && round.active === index;
            return <div className={`hand player-hand ${active ? 'active-hand' : ''}`} key={index} aria-label={`Your hand ${index + 1}${active ? ', active' : ''}`}><div className="hand-label"><span>{round.hands.length > 1 ? `Hand ${index + 1}` : 'You'}<small>{money(hand.bet)}{active && round.hands.length > 1 ? ' · Playing' : ''}</small></span><b className="hand-total">{cards.length ? score(cards) : '·'}</b></div><div className="playing-cards">{cards.map((card,i) => <PlayingCard key={i} card={card} newest={i === cards.length - 1}/>)}</div>{finished && <p className={`hand-outcome outcome-${hand.outcome}`}>{hand.outcome === 'push' ? 'Push' : hand.outcome === 'win' ? 'Won' : 'Lost'} · {netMoney(payout(hand) - hand.bet)}</p>}</div>;
          })}</div>
        </div>
        <div className="round-message" role="status" aria-live="polite" aria-atomic="true"><p className="round-quip">{quip}</p><p className="round-result">{busy ? 'Dealing…' : round.result}</p><span className="sr-only">{visibleTableSummary(round, frame.playerCounts, frame.dealerCount, frame.reveal)}</span>{finished && <p className="round-payoff">{netMoney(net)} play money overall</p>}</div>
        <div className="game-actions hand-actions"><button type="button" disabled={busy || !actions.hit} onClick={() => move('hit')}>Hit</button><button type="button" disabled={busy || !actions.stand} onClick={() => move('stand')}>Stand</button><button type="button" disabled={busy || !actions.double} onClick={() => move('double')}>Double</button><button type="button" disabled={busy || !actions.split} onClick={() => move('split')}>Split</button></div>
        <div className="next-hand"><label htmlFor="blackjack-bet">Next bet <select id="blackjack-bet" value={bet} disabled={busy || !finished} onChange={event => setBet(Number(event.target.value))}>{BETS.map(value => <option key={value} value={value} disabled={session.balance < value}>{money(value)}</option>)}</select></label><button type="button" disabled={busy || !finished || session.balance < bet} onClick={() => newRound()}>Play again</button></div>
        {exhausted && <div className="game-replenish"><p>Want to keep playing?</p><button type="button" onClick={replenish}>Play with a fresh $20</button></div>}
        <div className="game-stats" aria-label="Individual hands this visit"><span><b>{stats.win}</b> Wins</span><span><b>{stats.loss}</b> Losses</span><span><b>{stats.push}</b> Pushes</span></div>
      </>}
    </dialog>
  </>;
}
