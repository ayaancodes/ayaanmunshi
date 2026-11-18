export type Suit = '♠' | '♥' | '♦' | '♣';
export type Card = { rank: string; suit: Suit };
export type Outcome = 'win' | 'loss' | 'push';
export type Round = { deck: Card[]; player: Card[]; dealer: Card[]; phase: 'playing' | 'dealer' | 'finished'; result: string; outcome?: Outcome };

export function score(cards: Card[]): number {
  let total = 0;
  let aces = 0;
  for (const card of cards) {
    if (card.rank === 'A') { total += 11; aces++; }
    else total += ['J', 'Q', 'K'].includes(card.rank) ? 10 : Number(card.rank);
  }
  while (total > 21 && aces > 0) { total -= 10; aces--; }
  return total;
}
export function shuffledDeck(random = Math.random): Card[] {
  const deck: Card[] = [];
  for (const suit of ['♠', '♥', '♦', '♣'] as Suit[]) {
    for (const rank of ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) deck.push({ rank, suit });
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
export function deal(deck: Card[] = shuffledDeck()): Round {
  if (deck.length < 4) throw new Error('A round needs at least four cards.');
  const player = [deck[0], deck[2]];
  const dealer = [deck[1], deck[3]];
  const playerNatural = score(player) === 21;
  const dealerNatural = score(dealer) === 21;
  const finished = playerNatural || dealerNatural;
  return { player, dealer, deck: deck.slice(4), phase: finished ? 'finished' : 'playing', outcome: finished ? playerNatural && dealerNatural ? 'push' : playerNatural ? 'win' : 'loss' : undefined, result: playerNatural && dealerNatural ? 'Two blackjacks. It’s a push.' : playerNatural ? 'Blackjack! You win.' : dealerNatural ? 'Dealer has blackjack.' : 'Your move.' };
}
export function beginDealer(round: Round): Round {
  return round.phase === 'playing' ? { ...round, phase: 'dealer', result: 'Dealer’s turn.' } : round;
}
/** Exactly one visible dealer step, so totals stay in sync with every card. */
export function dealerStep(round: Round): Round {
  if (round.phase !== 'dealer') return round;
  if (score(round.dealer) < 17 && round.deck.length) {
    return { ...round, dealer: [...round.dealer, round.deck[0]], deck: round.deck.slice(1) };
  }
  const playerScore = score(round.player);
  const dealerScore = score(round.dealer);
  const outcome: Outcome = dealerScore > 21 || playerScore > dealerScore ? 'win' : playerScore < dealerScore ? 'loss' : 'push';
  const result = dealerScore > 21 ? 'Dealer busts. You win!' : outcome === 'win' ? 'You win!' : outcome === 'loss' ? 'Dealer wins this one.' : 'Same total. It’s a push.';
  return { ...round, phase: 'finished', outcome, result };
}
export function hitStep(round: Round): Round {
  if (round.phase !== 'playing') return round;
  if (!round.deck.length) return beginDealer(round);
  const player = [...round.player, round.deck[0]];
  const next: Round = { ...round, player, deck: round.deck.slice(1) };
  if (score(player) > 21) return { ...next, phase: 'finished', outcome: 'loss', result: 'You bust. Dealer wins.' };
  return score(player) === 21 ? beginDealer(next) : next;
}
/** Synchronous helpers retained for consumers that do not animate the round. */
export function stand(round: Round): Round {
  let next = beginDealer(round);
  while (next.phase === 'dealer') next = dealerStep(next);
  return next;
}
export function hit(round: Round): Round {
  const next = hitStep(round);
  return next.phase === 'dealer' ? stand(next) : next;
}
