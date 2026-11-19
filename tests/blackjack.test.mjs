import test from 'node:test';
import assert from 'node:assert/strict';
import { score, deal, hit, stand, shuffledDeck, beginDealer, dealerStep, hitStep, createSession, beginHand, recordHand, settleHand, suspendHand, resetBankroll, handReturn } from '../src/lib/blackjack.ts';

const card = (rank, suit = '♠') => ({ rank: String(rank), suit });
const hand = (...ranks) => ranks.map(rank => card(rank));
const round = (player, dealer, deck) => ({ player: hand(...player), dealer: hand(...dealer), deck: hand(...deck), phase: 'playing', result: 'Your move.' });

test('aces soften independently without turning a valid hand into a bust', () => {
  assert.equal(score(hand('A', 'A', '9')), 21);
  assert.equal(score(hand('A', 'A', '9', 'K')), 21);
  assert.equal(score(hand('A', '6')), 17);
  assert.equal(score(hand('A', '6', 'K')), 17);
  assert.equal(score(hand('K', 'Q', '2')), 22);
});
test('a shuffled deck contains all 52 unique cards and remains independent', () => {
  const first = shuffledDeck(() => 0.5);
  const second = shuffledDeck(() => 0.5);
  assert.equal(first.length, 52);
  assert.equal(new Set(first.map(c => c.rank+c.suit)).size, 52);
  first.pop();
  assert.equal(second.length, 52);
});
test('initial naturals settle immediately, including a push', () => {
  const player = deal(hand('A', '9', 'K', '7'));
  assert.equal(player.phase, 'finished');
  assert.match(player.result, /You win/);
  const dealer = deal(hand('9', 'A', '7', 'K'));
  assert.match(dealer.result, /Dealer has blackjack/);
  const both = deal(hand('A', 'A', 'K', 'Q'));
  assert.match(both.result, /push/);
});
test('hit consumes one card immutably and locks a bust', () => {
  const initial = round(['K', '8'], ['9', '7'], ['5', '2']);
  const next = hit(initial);
  assert.equal(initial.player.length, 2);
  assert.equal(next.player.length, 3);
  assert.equal(next.deck.length, 1);
  assert.equal(next.phase, 'finished');
  assert.match(next.result, /You bust/);
  assert.equal(hit(next), next);
  assert.equal(stand(next), next);
});
test('dealer draws to 17, stands on soft 17, and compares totals', () => {
  const draw = stand(round(['K', '9'], ['9', '6'], ['3', 'K']));
  assert.equal(score(draw.dealer), 18);
  assert.equal(draw.deck.length, 1);
  assert.match(draw.result, /You win/);
  const soft = stand(round(['K', '6'], ['A', '6'], ['K']));
  assert.equal(soft.dealer.length, 2);
  assert.match(soft.result, /Dealer wins/);
  assert.match(stand(round(['K', '8'], ['K', '6'], ['K'])).result, /Dealer busts/);
  assert.match(stand(round(['K', '8'], ['K', '8'], ['2'])).result, /push/);
});
test('a hit to 21 resolves dealer play without awarding a false natural', () => {
  const next = hit(round(['7', '4'], ['K', '7'], ['K']));
  assert.equal(score(next.player), 21);
  assert.equal(next.phase, 'finished');
  assert.equal(next.result, 'You win!');
});


test('animated dealer play advances by exactly one card and locks player actions', () => {
  const initial = round(['K', '8'], ['2', '3'], ['4', '5', '6']);
  const started = beginDealer(initial);
  assert.equal(started.phase, 'dealer');
  assert.equal(hitStep(started), started);
  const first = dealerStep(started);
  assert.equal(first.dealer.length, 3);
  assert.equal(score(first.dealer), 9);
  assert.equal(first.phase, 'dealer');
  assert.equal(started.dealer.length, 2);
  const second = dealerStep(first);
  assert.equal(second.dealer.length, 4);
  assert.equal(score(second.dealer), 14);
  const third = dealerStep(second);
  assert.equal(score(third.dealer), 20);
  const finished = dealerStep(third);
  assert.equal(finished.phase, 'finished');
  assert.equal(finished.outcome, 'loss');
  assert.equal(dealerStep(finished), finished);
});
test('an animated hit to 21 waits for the dealer and exposes the new card first', () => {
  const next = hitStep(round(['7', '4'], ['3', '4'], ['K', '3', '7']));
  assert.equal(next.phase, 'dealer');
  assert.equal(score(next.player), 21);
  assert.equal(next.dealer.length, 2);
  assert.equal(next.outcome, undefined);
  const finished = stand(next);
  assert.equal(finished.outcome, 'win');
});
test('outcomes identify naturals, busts and pushes without matching result copy', () => {
  assert.equal(deal(hand('A','K','K','A')).outcome, 'push');
  assert.equal(deal(hand('A','9','K','7')).outcome, 'win');
  assert.equal(deal(hand('9','A','7','K')).outcome, 'loss');
  assert.equal(hitStep(round(['K','8'],['9','7'],['5'])).outcome, 'loss');
  assert.equal(stand(round(['K','8'],['K','8'],['2'])).outcome, 'push');
});

test('a $1 stake is charged once and an unresolved hand cannot be replaced', () => {
  const initial = createSession();
  const started = beginHand(initial, hand('9','8','7','9'));
  assert.equal(initial.balance, 2000);
  assert.equal(started.balance, 1900);
  assert.equal(beginHand(started, hand('A','9','K','7')), started);
  assert.equal(settleHand(started, started.handId), started);
});
test('natural blackjack returns stake plus $1.50 net, while both naturals push', () => {
  const natural = beginHand(createSession(), hand('A','9','K','7'));
  assert.equal(handReturn(natural.round), 250);
  const paid = settleHand(natural, natural.handId);
  assert.equal(paid.balance, 2150);
  assert.equal(paid.stats.win, 1);
  const both = beginHand(createSession(), hand('A','A','K','Q'));
  assert.equal(settleHand(both, both.handId).balance, 2000);
});
test('dealer natural loses only the stake; ordinary wins return $2 and pushes return $1', () => {
  const dealer = beginHand(createSession(), hand('9','A','7','K'));
  assert.equal(settleHand(dealer, dealer.handId).balance, 1900);
  const win = beginHand(createSession(), hand('K','9','9','8'));
  const result = recordHand(win, stand(win.round), win.handId);
  assert.equal(settleHand(result, result.handId).balance, 2100);
  const push = beginHand(createSession(), hand('K','Q','8','8'));
  const matched = recordHand(push, stand(push.round), push.handId);
  assert.equal(settleHand(matched, matched.handId).balance, 2000);
});
test('a three-card 21 receives an ordinary payout, never 3:2', () => {
  const started = beginHand(createSession(), hand('7','K','4','7','K'));
  const played = recordHand(started, hit(started.round), started.handId);
  assert.equal(handReturn(played.round), 200);
  assert.equal(settleHand(played, played.handId).balance, 2100);
});
test('settlement is idempotent and a stale hand cannot pay or overwrite a new hand', () => {
  const natural = beginHand(createSession(), hand('A','9','K','7'));
  const paid = settleHand(natural, natural.handId);
  assert.equal(settleHand(paid, paid.handId), paid);
  const next = beginHand(paid, hand('9','8','7','9'));
  assert.equal(settleHand(next, paid.handId), next);
  assert.equal(recordHand(next, paid.round, paid.handId), next);
  assert.equal(next.balance, 2050);
  assert.deepEqual(next.stats, { win: 1, loss: 0, push: 0 });
});
test('closing during a deal preserves the same hand and wager; reopening cannot charge again', () => {
  const active = beginHand(createSession(), hand('9','8','7','9'));
  const closed = suspendHand(active);
  assert.equal(closed, active);
  assert.equal(beginHand(closed), closed);
  assert.equal(closed.balance, 1900);
  assert.equal(closed.round, active.round);
});
test('closing during natural or dealer settlement pays once even if a queued callback repeats', () => {
  const natural = beginHand(createSession(), hand('A','9','K','7'));
  const closedNatural = suspendHand(natural);
  assert.equal(closedNatural.balance, 2150);
  assert.equal(settleHand(closedNatural, natural.handId), closedNatural);
  const started = beginHand(createSession(), hand('K','9','9','6','3'));
  const resolved = recordHand(started, stand(started.round), started.handId);
  const closed = suspendHand(resolved);
  assert.equal(closed.balance, 2100);
  assert.equal(suspendHand(closed), closed);
  assert.equal(settleHand(closed, resolved.handId), closed);
});
test('exhausted play money resets only after settlement and keeps visit statistics', () => {
  let session = { ...createSession(), balance: 100 };
  session = beginHand(session, hand('9','A','7','K'));
  assert.equal(session.balance, 0);
  assert.equal(resetBankroll(session), session);
  session = settleHand(session, session.handId);
  assert.equal(beginHand(session), session);
  const reset = resetBankroll(session);
  assert.equal(reset.balance, 2000);
  assert.equal(reset.round, null);
  assert.equal(reset.stats.loss, 1);
  assert.equal(resetBankroll({ ...reset, balance: 50 }).balance, 2000);
  assert.equal(resetBankroll(reset), reset);
});
