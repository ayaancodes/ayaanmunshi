import test from 'node:test';
import assert from 'node:assert/strict';
import { score, deal, hit, stand, shuffledDeck, beginDealer, dealerStep, hitStep } from '../src/lib/blackjack.ts';

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
