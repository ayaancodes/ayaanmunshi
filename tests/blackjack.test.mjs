import test from 'node:test';
import assert from 'node:assert/strict';
import { score, visibleTableSummary, deal, shuffledDeck, dealerStep, createSession, beginHand, settleHand, suspendHand, resetBankroll, handReturn, payout, natural, totalBet, allowedActions, playAction } from '../src/lib/blackjack.ts';
const cards = (...ranks) => ranks.map(rank => ({ rank: String(rank), suit: '♠' }));
const start = (ranks, bet = 100, balance = 2000) => beginHand({ ...createSession(), balance }, cards(...ranks), bet);
const action = (session, move) => playAction(session, move, session.handId, session.revision);
const move = (session, name) => action(session, name).session;
const paid = session => settleHand(session, session.handId);

test('six-deck shoes contain six copies of every card and independent objects', () => {
  const a = shuffledDeck(() => .5), b = shuffledDeck(() => .5);
  const counts = new Map();
  for (const c of a) counts.set(c.rank+c.suit, (counts.get(c.rank+c.suit) ?? 0) + 1);
  assert.equal(a.length, 312); assert.equal(counts.size, 52);
  assert.ok([...counts.values()].every(count => count === 6));
  a.pop(); a[0].rank = 'changed'; assert.equal(b.length, 312); assert.notEqual(b[0].rank, 'changed');
});
test('aces soften independently and face cards remain ten', () => {
  assert.equal(score(cards('A','A','9')), 21);
  assert.equal(score(cards('A','A','9','K')), 21);
  assert.equal(score(cards('A','6','K')), 17);
  assert.equal(score(cards('K','Q','2')), 22);
});
test('3:2 profit scales with the actual $1, $2 and $5 wager, plus stake returned', () => {
  for (const bet of [100,200,500]) {
    const s = start(['A','9','K','7'], bet);
    assert.equal(s.balance, 2000-bet);
    assert.equal(handReturn(s.round), bet*2.5);
    assert.equal(paid(s).balance, 2000+bet*1.5);
  }
});
test('dealer peek resolves naturals before extra wagers; both naturals push', () => {
  const dealer = start(['8','A','8','K']);
  assert.equal(dealer.round.phase, 'finished');
  assert.deepEqual(allowedActions(dealer), { hit:false,stand:false,double:false,split:false });
  assert.equal(move(dealer,'split'), dealer); assert.equal(move(dealer,'double'), dealer);
  assert.equal(paid(dealer).balance, 1900);
  const both = start(['A','A','K','Q'], 500);
  assert.equal(paid(both).balance, 2000); assert.equal(paid(both).stats.push, 1);
});
test('ordinary wins pay 1:1 and pushes return the actual stake', () => {
  assert.equal(paid(move(start(['K','9','9','8'], 500),'stand')).balance, 2500);
  assert.equal(paid(move(start(['K','Q','8','8'], 500),'stand')).balance, 2000);
});
test('a three-card 21 never receives a natural payout', () => {
  const s = move(start(['7','K','4','7','K'], 200),'hit');
  assert.equal(natural(s.round.hands[0]), false);
  assert.equal(handReturn(s.round), 400); assert.equal(paid(s).balance, 2200);
});
test('a natural beats non-natural and split 21; matching naturals push', () => {
  const base = deal(cards('A','9','K','7'));
  const r = { ...base, dealer:cards('A','K'), phase:'dealer' };
  assert.equal(dealerStep(r).hands[0].outcome, 'push');
  assert.equal(dealerStep({ ...r, hands:[{ ...r.hands[0], fromSplit:true }] }).hands[0].outcome, 'loss');
  assert.equal(dealerStep({ ...r, hands:[{ ...r.hands[0], cards:cards('7','4','K') }] }).hands[0].outcome, 'loss');
});
test('double on eleven funds the actual bet, draws exactly once, then stands', () => {
  const initial = start(['6','9','5','8','K','2'], 200);
  assert.equal(allowedActions(initial).double, true);
  const next = move(initial,'double');
  assert.equal(initial.balance, 1800); assert.equal(next.balance, 1600);
  assert.equal(next.round.hands[0].bet, 400);
  assert.equal(next.round.hands[0].cards.length, 3);
  assert.equal(next.round.deck.length, 1);
  assert.equal(next.round.phase, 'finished'); assert.equal(paid(next).balance, 2400);
  assert.equal(move(next,'hit'), next); assert.equal(move(next,'double'), next);
});
test('doubled losses and pushes settle the entire doubled wager', () => {
  assert.equal(paid(move(start(['6','K','5','9','2'],200),'double')).balance, 1600);
  assert.equal(paid(move(start(['5','K','6','8','7'],200),'double')).balance, 2000);
});
test('double is any initial two cards, but not after a hit or without funds', () => {
  const nine = start(['4','10','5','7','2']);
  assert.equal(allowedActions(nine).double, true);
  const eleven = move(nine,'hit');
  assert.equal(score(eleven.round.hands[0].cards), 11); assert.equal(allowedActions(eleven).double, false);
  const short = start(['6','9','5','8'],100,150);
  assert.equal(short.balance, 50); assert.equal(move(short,'double'), short);
});
test('split hands keep separate wagers, play sequentially, and allow double after split', () => {
  const initial = start(['8','10','8','8','3','10','9']);
  const split = move(initial,'split');
  assert.equal(initial.round.hands.length, 1); assert.equal(split.balance, 1800);
  assert.deepEqual(split.round.hands.map(h => h.cards.map(c => c.rank)), [['8','3'],['8']]);
  assert.equal(split.round.active, 0); assert.equal(allowedActions(split).double, true);
  const doubled = move(split,'double');
  assert.equal(doubled.balance, 1700); assert.equal(doubled.round.active, 1);
  assert.deepEqual(doubled.round.hands.map(h => h.bet), [200,100]);
  assert.equal(score(doubled.round.hands[1].cards), 17);
  const result = paid(move(doubled,'stand'));
  assert.equal(result.balance, 2100); assert.deepEqual(result.stats, {win:1,loss:1,push:0});
});
test('busting one split hand does not end the other or reveal the dealer early', () => {
  const s = move(start(['8','10','8','8','9','K','2','9']),'split');
  const bust = move(s,'hit');
  assert.equal(score(bust.round.hands[0].cards), 27); assert.equal(bust.round.phase, 'playing');
  assert.equal(bust.round.active, 1); assert.equal(score(bust.round.hands[1].cards), 10);
  const finished = paid(move(move(bust,'hit'),'stand'));
  assert.equal(finished.balance, 2000); assert.deepEqual(finished.stats, {win:1,loss:1,push:0});
});
test('split aces get one card each, cannot resplit/double, and 21 pays ordinary odds', () => {
  const s = move(start(['A','10','A','9','10','9']),'split');
  assert.equal(s.round.hands.length, 2);
  assert.ok(s.round.hands.every(h => h.splitAces && h.done && h.cards.length===2 && !natural(h)));
  assert.deepEqual(allowedActions(s), {hit:false,stand:false,double:false,split:false});
  assert.equal(paid(s).balance, 2200);
  const acesAgain = move(start(['A','10','A','9','A','10']),'split');
  assert.equal(acesAgain.round.hands.length, 2); assert.equal(move(acesAgain,'split'), acesAgain);
  assert.equal(paid(acesAgain).balance, 2000);
});
test('matching ranks can resplit to four hands, never a fifth or unlike ten-value ranks', () => {
  let s = start(['8','10','8','7','8','8','8','10','10','10','10']);
  s = move(move(move(s,'split'),'split'),'split');
  assert.equal(s.round.hands.length, 4); assert.equal(s.balance, 1600);
  assert.equal(allowedActions(s).split, false); assert.equal(move(s,'split'), s);
  assert.equal(allowedActions(start(['K','10','Q','7'])).split, false);
  assert.equal(allowedActions(start(['K','10','K','7'])).split, true);
});
test('insufficient split funds or an invalid wager cannot deduct money', () => {
  const short = start(['8','10','8','7'],100,150);
  assert.equal(move(short,'split'), short);
  for (const bet of [0,50,300,-100,NaN,Infinity]) assert.equal(beginHand(short,undefined,bet), short);
  const half = {...createSession(), balance:50}; assert.equal(beginHand(half), half);
  const small = {...createSession(), balance:150}; assert.equal(beginHand(small,undefined,200), small);
});
test('dealer draws one visible step at a time and stands on soft seventeen', () => {
  const plan = action(start(['K','2','8','3','4','5','6']),'stand');
  assert.deepEqual(plan.steps.map(r => r.dealer.length), [2,3,4,5,5]);
  assert.equal(plan.session.round.outcome, 'loss');
  const soft = move(start(['K','A','6','6','K']),'stand');
  assert.equal(soft.round.dealer.length, 2); assert.equal(soft.round.deck.length, 1);
  assert.equal(soft.round.outcome, 'loss');
});
test('all player busts finish without consuming unnecessary dealer cards', () => {
  const s = move(start(['K','2','8','3','K','5']),'hit');
  assert.equal(s.round.dealer.length, 2); assert.equal(s.round.deck.length, 1);
  assert.equal(paid(s).balance, 1900);
});
test('stale or repeated actions cannot spend money on the next split hand', () => {
  const s = start(['8','10','8','8','3','10','9']);
  const split = move(s,'split');
  const stale = playAction(split,'split',s.handId,s.revision);
  assert.equal(stale.session, split); assert.deepEqual(stale.steps, []);
  const double = move(split,'double');
  assert.equal(playAction(double,'double',split.handId,split.revision).session, double);
});
test('closing an unfinished split preserves every card, wager and active hand', () => {
  const split = move(start(['8','10','8','8','3','10','9']),'split');
  assert.equal(suspendHand(split), split); assert.equal(beginHand(split), split);
  const resumed = paid(move(move(suspendHand(split),'double'),'stand'));
  assert.equal(resumed.balance, 2100);
});
test('closing during queued double/dealer settlement pays once and ignores late callbacks', () => {
  const finished = move(start(['6','9','5','8','K']),'double');
  const closed = suspendHand(finished); assert.equal(closed.balance, 2200);
  assert.equal(suspendHand(closed), closed); assert.equal(paid(closed), closed);
  assert.equal(settleHand(finished,finished.handId,finished.revision-1), finished);
  const next = beginHand(closed,cards('9','8','7','9'));
  assert.equal(settleHand(next,finished.handId,finished.revision), next);
  assert.equal(playAction(next,'hit',finished.handId,finished.revision).session, next);
});
test('closing during an initial natural pays once; unfinished deals cannot be replaced', () => {
  const naturalRound = start(['A','9','K','7'],500);
  assert.equal(suspendHand(naturalRound).balance, 2750);
  assert.equal(paid(suspendHand(naturalRound)).balance, 2750);
  const active = start(['9','8','7','9']); assert.equal(beginHand(active), active);
});
test('exhausted balances including fifty cents reset only after settlement', () => {
  let s = start(['9','A','7','K'],100,150);
  assert.equal(s.balance, 50); assert.equal(resetBankroll(s), s);
  s = paid(s); assert.equal(beginHand(s), s);
  const fresh = resetBankroll(s); assert.equal(fresh.balance, 2000); assert.equal(fresh.round, null);
  assert.equal(fresh.stats.loss, 1); assert.equal(resetBankroll(fresh), fresh);
});
test('seeded full rounds conserve wagers/payouts across split, double, hit and close paths', () => {
  let seed = 47, session = createSession();
  const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let n=0;n<100;n++) {
    session = resetBankroll(session);
    const before = session.balance;
    session = beginHand(session,shuffledDeck(random),100);
    let steps = 0;
    while (session.round.phase==='playing') {
      assert.ok(++steps < 100);
      const a = allowedActions(session), total = score(session.round.hands[session.round.active].cards);
      session = move(session,a.split ? 'split' : a.double && total<=11 ? 'double' : total<17 ? 'hit' : 'stand');
      if (steps%3===0) session=suspendHand(session);
      assert.ok(session.balance>=0 && Number.isInteger(session.balance));
    }
    session=paid(session);
    assert.equal(session.balance,before-totalBet(session.round)+handReturn(session.round));
    assert.ok(session.round.hands.every(h => h.outcome && h.done));
    assert.equal(handReturn(session.round), session.round.hands.reduce((sum,h)=>sum+payout(h),0));
  }
});


test('live summaries are invariant to hidden hole cards and not-yet-displayed player cards', () => {
  const round = deal(cards('9','6','7','K'));
  const hidden = visibleTableSummary(round,[1],2,false);
  const changedHidden = { ...round, dealer:[round.dealer[0],{rank:'A',suit:'♥'}], hands:[{...round.hands[0],cards:[round.hands[0].cards[0],{rank:'Q',suit:'♦'}]}] };
  assert.equal(visibleTableSummary(changedHidden,[1],2,false), hidden);
  assert.match(hidden,/Your hand 1 of 1: 9 of spades; total 9/);
  assert.match(hidden,/Dealer: 6 of spades; total 6, plus a face-down card/);
  assert.notEqual(visibleTableSummary(changedHidden,[2],2,true), visibleTableSummary(round,[2],2,true));
  assert.doesNotMatch(visibleTableSummary(round,[0],0,false), /total|spades/);
});
test('consecutive hits with unchanged status text still update the announced cards and total', () => {
  const initial = start(['2','10','3','7','2','3']);
  const first = move(initial,'hit'), second = move(first,'hit');
  assert.equal(first.round.result, second.round.result);
  const a = visibleTableSummary(first.round,[3],2,false);
  const b = visibleTableSummary(second.round,[4],2,false);
  assert.notEqual(a,b); assert.match(a,/total 7/); assert.match(b,/total 10/);
});
test('split summaries follow the displayed active hand and staged dealer count', () => {
  const split = move(start(['8','10','8','8','3','10','9']),'split');
  const second = move(split,'double');
  const summary = visibleTableSummary(second.round,[3,1],2,false);
  assert.match(summary,/Your hand 2 of 2: 8 of spades; total 8/);
  assert.match(summary,/Dealer: 10 of spades; total 10, plus a face-down card/);
  const revealed = visibleTableSummary(second.round,[3,2],2,true);
  assert.match(revealed,/Your hand 2 of 2: 8 of spades, 9 of spades; total 17/);
  assert.match(revealed,/Dealer: 10 of spades, 8 of spades; total 18/);
});
